import logging,os, asyncio
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from qdrant_client import QdrantClient
from google import genai
from app.embeddings import embed_text

load_dotenv()
api_key = os.getenv("API_KEY")
qdrant_url = os.getenv("QDRANT_URL")
qdrant_api_key = os.getenv("QDRANT_API_KEY")
collection_name = os.getenv("QDRANT_COLLECTION_NAME", "portfolio")

if not api_key:
    raise ValueError("Chưa tìm thấy API_KEY trong file .env!")
if not qdrant_url:
    raise ValueError("Chưa tìm thấy QDRANT_URL trong file .env!")
if not qdrant_api_key:
    raise ValueError("Chưa tìm thấy QDRANT_API_KEY trong file .env!")

client = genai.Client(api_key=api_key)
qdrant_client = QdrantClient(
    url=qdrant_url,
    api_key=qdrant_api_key,
)
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
)
logger = logging.getLogger(__name__)

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
            found_content = False
            for chunk in response:
                if chunk.text:
                    found_content = True
                    yield chunk.text
                    await asyncio.sleep(0.01)
            
            if found_content:
                return

        except Exception as e:
            logger.error(f"Lỗi model {model_name}: {str(e)}")
            continue 
            
    yield "Hiện tại hệ thống AI đang quá tải. Quý vui lòng thử lại sau vài giây nhé!"

class ChatRequest(BaseModel):
    message : str

app = FastAPI(
    title="Portfolio Chatbot",
    description="Chatbot support seeking product",
    version="1.0.0"
    )

cors_allowed_origins = {
    origin.strip()
    for origin in os.getenv("CORS_ALLOWED_ORIGINS", "").split(",")
    if origin.strip()
}
frontend_url = os.getenv("FRONTEND_URL")
if frontend_url:
    cors_allowed_origins.add(frontend_url.rstrip("/"))

if not cors_allowed_origins:
    cors_allowed_origins = {
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=sorted(cors_allowed_origins),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "ok"}

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
