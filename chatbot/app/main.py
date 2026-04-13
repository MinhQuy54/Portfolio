import logging, os, asyncio
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from google import genai
from app.embeddings import embed_text

# Load env
load_dotenv()

api_key = os.getenv("API_KEY")
qdrant_url = os.getenv("QDRANT_URL")
qdrant_api_key = os.getenv("QDRANT_API_KEY")
collection_name = os.getenv("QDRANT_COLLECTION_NAME", "portfolio")

if not api_key:
    raise ValueError("Missing API_KEY")
if not qdrant_url:
    raise ValueError("Missing QDRANT_URL")
if not qdrant_api_key:
    raise ValueError("Missing QDRANT_API_KEY")

# Init clients
client = genai.Client(api_key=api_key)
qdrant_client = QdrantClient(
    url=qdrant_url,
    api_key=qdrant_api_key,
)

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# =========================
# FASTAPI APP
# =========================
app = FastAPI(
    title="Portfolio Chatbot",
    version="1.0.0"
)

# =========================
# ✅ FIX CORS (QUAN TRỌNG)
# =========================
allowed_origins = os.getenv("CORS_ALLOWED_ORIGINS", "")

if allowed_origins:
    allowed_origins = [o.strip().rstrip("/") for o in allowed_origins.split(",")]
else:
    allowed_origins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

print("CORS ALLOWED:", allowed_origins)

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# API MODEL
# =========================
class ChatRequest(BaseModel):
    message: str

# =========================
# HEALTH CHECK
# =========================
@app.get("/")
async def root():
    return {"message": "API running"}

@app.get("/health")
async def health():
    return {"status": "ok"}

# =========================
# GEMINI STREAM
# =========================
async def call_api_gemini(prompt):
    models = [
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-flash-lite-latest"
    ]

    for model_name in models:
        try:
            response = client.models.generate_content_stream(
                model=model_name,
                contents=prompt
            )

            for chunk in response:
                if chunk.text:
                    yield chunk.text
                    await asyncio.sleep(0.01)

            return

        except Exception as e:
            logger.error(f"Model {model_name} error: {e}")
            continue

    yield "Hệ thống AI đang bận, thử lại sau nhé!"
@app.post('/chat')
async def chat_with_veggie(request : ChatRequest):
    user_query = request.message
    logger.info("Đang xử lý câu hỏi: %s", user_query)
    try:
        query_vector = await asyncio.to_thread(
            embed_text,
            client,
            user_query,
            "QUESTION_ANSWERING",
        )
        chat_results = qdrant_client.query_points(
            collection_name = collection_name,
            query = query_vector,
            limit=5
        ).points

        context_data = ""
        for hit in chat_results:
            p = hit.payload
            if p is not None:
                context_data += f"[THÔNG TIN]: {p.get('content')}\n"
        prompt = f"""
            Bạn là một trợ lý ảo đại diện cho Ngô Minh Quý (Backend & AI Developer).
            Dựa vào thông tin dưới đây, hãy trả lời câu hỏi của nhà tuyển dụng hoặc khách truy cập về Quý một cách tự nhiên, tự tin và chuyên nghiệp.
            Nếu thông tin không có trong context, hãy xin lỗi và gợi ý họ liên hệ trực tiếp với Quý qua email ngominhquy15@gmail.com.
            Trả lời bằng văn bản thuần, không dùng markdown phức tạp.

            Thông tin tham khảo về Quý:
            {context_data}

            Câu hỏi của khách: {user_query}
            Trả lời:
            """
    
        return StreamingResponse(
            call_api_gemini(prompt), 
            media_type="text/event-stream",
            headers={
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
            }
        )  
    except Exception as e:
        print(f"Lỗi hệ thống: {e}")
        raise HTTPException(status_code=500, detail="Bot đang bận, thử lại sau nhé Quý!")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.getenv("PORT", "8000")))
