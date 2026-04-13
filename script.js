// Multi-language JSON Dictionary
const i18n = {
    vi: {
        name: "Ngô Minh Quý",
        title: "_ Backend & AI Developer",
        status: "Sẵn sàng làm việc",
        address: "Bình Tân, TP.HCM",
        nav_about: "Giới thiệu",
        nav_skills: "Kỹ năng",
        nav_education: "Học vấn",
        nav_projects: "Dự án",
        btn_github: "GitHub",
        btn_hire: "Thuê tôi",

        sec_about: "Giới thiệu",
        sec_about_sub: "Backend Developer & AI Integration Enthusiast",
        about_1: "Tôi là <strong>sinh viên năm 4 ngành Khoa học Máy tính</strong> tại Đại học Công nghệ Sài Gòn (STU), đam mê xây dựng hệ thống backend có khả năng mở rộng cao và các giải pháp cloud-native.",
        about_2: "Hiện tại, tôi đang mở rộng chuyên môn về <strong>hệ thống phân tán, kiến trúc microservices</strong>, và tích hợp AI (RAG, LLMs) vào sản phẩm thực tế để tạo ra những giá trị đột phá.",
        about_3: "Với tính cách hòa đồng, tích cực và điềm tĩnh, tôi luôn đam mê tìm tòi các giải pháp giải quyết các bài toán kỹ thuật phức tạp, tối ưu hóa hiệu suất và thiết kế kiến trúc vững chắc. Ngoài đam mê lập trình, tôi rất yêu chó và luôn tự hào về quê hương Cái Bè, Tiền Giang của mình.",

        sec_skills: "Kỹ năng Kỹ thuật",
        sec_skills_sub: "Công nghệ tôi sử dụng",
        skill_lang: "LANGUAGES",
        skill_backend: "BACKEND",
        skill_api: "API & AI",
        skill_db: "DATABASES",
        skill_cloud: "CLOUD",
        skill_devops: "DEVOPS & TOOLS",

        sec_education: "Học vấn",
        sec_education_sub: "Quá trình đào tạo",
        edu_stu_name: "Đại học Công nghệ Sài Gòn (STU)",
        edu_stu_deg: "Kỹ sư Khoa học Máy tính",
        edu_stu_desc: "Sinh viên năm 4. Tập trung nghiên cứu và thực hành chuyên sâu về Backend Architecture và AI Integration cơ bản.",
        edu_hs_date: "Cựu học sinh",
        edu_hs_name: "Trường THPT Phạm Thành Trung",
        edu_hs_deg: "Tốt nghiệp THPT",
        edu_hs_desc: "Quê hương Cái Bè, Tiền Giang. Nơi nuôi dưỡng những ngọn lửa đam mê đầu tiên.",

        sec_projects: "Dự án Tiêu biểu",
        sec_projects_sub: "Những sản phẩm được xây dựng bằng đam mê",
        proj1_1: "Xây dựng hệ thống hỏi đáp tự động từ tài liệu nội bộ (PDF).",
        proj1_2: "Triển khai quy trình Ingest: Trích xuất text, Chunking và tạo Vector Embedding.",
        proj1_3: "Sử dụng SentenceTransformer để chuyển đổi văn bản thành không gian vector.",
        proj1_4: "Lưu trữ và truy vấn tương đồng (Similarity Search) trên Qdrant Vector Database.",
        proj1_5: "Tối ưu hóa thời gian phản hồi bằng cách cung cấp Context chính xác cho LLM.",
        proj2_1: "Phát triển hệ thống 20+ API xử lý luồng đặt hàng, giỏ hàng và thanh toán.",
        proj2_2: "Tích hợp cơ chế xác thực bảo mật JWT (Access & Refresh Token).",
        proj2_3: "Xây dựng tính năng chat tư vấn thông minh dựa trên kỹ thuật RAG.",
        proj2_4: "Cấu hình Nginx reverse proxy và triển khai Dockerized ứng dụng.",
        proj3_1: "Tiền xử lý dữ liệu và Feature Engineering để tăng độ chính xác mô hình.",
        proj3_2: "Huấn luyện và đánh giá nhiều mô hình phân loại (Classification).",
        proj3_3: "Đạt độ chính xác ~84% trên tập dữ liệu thử nghiệm.",
        proj4_1: "Hệ thống phần mềm hỗ trợ quản lý quy trình nghiệp vụ phòng khám.",
        proj4_2: "Tích hợp quản lý hồ sơ bệnh án, lịch hẹn và tra cứu thông tin y tế bệnh nhân.",
        btn_github_code: "GitHub Code",
        btn_live: "Live Demo",

        bot_title: "Trợ lý AI của Quý",
        bot_welcome: "Xin chào! Tôi là trợ lý AI (RAG) đại diện cho Ngô Minh Quý. Bạn muốn hỏi tôi thông tin gì về Quý?",
        bot_input: "Nhập câu hỏi..."
    },
    en: {
        name: "Ngo Minh Quy",
        title: "_ Backend & AI Developer",
        status: "Available for work",
        address: "Binh Tan, HCMC, Vietnam",
        nav_about: "About Me",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_projects: "Projects",
        btn_github: "GitHub",
        btn_hire: "Hire Me",

        sec_about: "About Me",
        sec_about_sub: "Backend Developer & AI Integration Enthusiast",
        about_1: "I am a <strong>4th-year Computer Science student</strong> at Saigon Technology University (STU), passionate about building highly scalable backend systems and cloud-native solutions.",
        about_2: "Currently, I am expanding my expertise in <strong>distributed systems, microservices architecture</strong>, and integrating AI (RAG, LLMs) into real-world products to create breakthrough values.",
        about_3: "With a sociable, positive, and calm personality, I am always eager to solve complex technical problems, optimize performance, and design solid architectures. Apart from coding, I deeply love dogs and am proud of my hometown, Cai Be, Tien Giang.",

        sec_skills: "Technical Skills",
        sec_skills_sub: "Technologies I Use",
        skill_lang: "LANGUAGES",
        skill_backend: "BACKEND",
        skill_api: "API & AI",
        skill_db: "DATABASES",
        skill_cloud: "CLOUD",
        skill_devops: "DEVOPS & TOOLS",

        sec_education: "Education",
        sec_education_sub: "Academic Background",
        edu_stu_name: "Saigon Technology University (STU)",
        edu_stu_deg: "Bachelor of Computer Science",
        edu_stu_desc: "4th-year student. Focusing on Backend Architecture and basic AI Integration.",
        edu_hs_date: "Alumni",
        edu_hs_name: "Pham Thanh Trung High School",
        edu_hs_deg: "High School Diploma",
        edu_hs_desc: "Hometown Cai Be, Tien Giang. Where the first sparks of passion were nurtured.",

        sec_projects: "Featured Projects",
        sec_projects_sub: "Products built with passion",
        proj1_1: "Built an automated internal document QA system (PDF).",
        proj1_2: "Implemented Ingest pipeline: Text extraction, Chunking, and Vector Embedding.",
        proj1_3: "Used SentenceTransformer to convert text into vector space.",
        proj1_4: "Stored and queried vectors (Similarity Search) on Qdrant Vector Database.",
        proj1_5: "Optimized response time by providing exact Context to LLMs.",
        proj2_1: "Developed a system of 20+ APIs to handle orders, carts, and payments.",
        proj2_2: "Integrated secure JWT authentication mechanism (Access & Refresh Token).",
        proj2_3: "Built smart consulting chat feature based on RAG technique.",
        proj2_4: "Configured Nginx reverse proxy and deployed Dockerized application.",
        proj3_1: "Data preprocessing and Feature Engineering to increase model accuracy.",
        proj3_2: "Trained and evaluated multiple classification models.",
        proj3_3: "Achieved ~84% accuracy on test datasets.",
        proj4_1: "Software system tailored for clinic workflow management.",
        proj4_2: "Integrated medical records, appointments scheduling & patient data lookup.",
        btn_github_code: "GitHub Code",
        btn_live: "Live Demo",

        bot_title: "Quy's AI Assistant",
        bot_welcome: "Hello! I am an AI assistant representing Ngo Minh Quy. What would you like to know about him?",
        bot_input: "Type a question..."
    }
};

let currentLang = 'vi';

function setLang(lang) {
    if (lang !== 'vi' && lang !== 'en') return;
    currentLang = lang;

    // Update active button
    document.getElementById('lang-vi').classList.remove('active');
    document.getElementById('lang-en').classList.remove('active');
    document.getElementById('lang-' + lang).classList.add('active');

    // Replace text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });

    // Replace placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[lang][key]) {
            el.placeholder = i18n[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Spy for Nav Links
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(sec => {
            const sectionTop = sec.offsetTop;
            const sectionHeight = sec.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for nav clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Chatbot Toggle
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatbotClose = document.getElementById('chatbot-close');

    chatbotIcon.addEventListener('click', () => {
        chatbotWidget.classList.remove('hidden');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWidget.classList.add('hidden');
    });

    // Chatbot Integration - Sending Messages to /chat API
    const chatInput = document.getElementById('chatbot-input');
    const chatSendBtn = document.getElementById('chatbot-send');
    const chatMessages = document.getElementById('chatbot-messages');

    async function sendChatMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Append User Message
        const userDiv = document.createElement('div');
        userDiv.className = 'chat-msg user';
        userDiv.textContent = text;
        chatMessages.appendChild(userDiv);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Append Bot Thinking
        const botDiv = document.createElement('div');
        botDiv.className = 'chat-msg bot';
        botDiv.textContent = "...";
        chatMessages.appendChild(botDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Adjust port to match standard or 8000
            const response = await fetch('https://portfolio-ewkz.onrender.com/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });

            if (!response.ok) throw new Error('API Error');

            const reader = response.body.getReader();
            const decoder = new TextDecoder('utf-8');
            botDiv.textContent = ''; // clear thinking state

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                botDiv.textContent += decoder.decode(value, { stream: true });
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

        } catch (error) {
            console.error(error);
            botDiv.textContent = "Xin lỗi, hiện tại tôi đang không thể kết nối tới server. Vui lòng thử lại sau hoặc gửi email cho Quý nhé!";
        }
    }

    chatSendBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
});
