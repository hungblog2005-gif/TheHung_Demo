# Business Interview Prep 🎯

Ứng dụng web giúp bạn chuẩn bị cho phỏng vấn kinh doanh bằng cách sử dụng AI để tạo câu hỏi và phản hồi thực tế.

## ✨ Tính năng

- 🤖 **AI-Powered Interview Simulation** - Sử dụng OpenAI hoặc Google Generative AI
- 🌐 **Hỗ trợ đa ngôn ngữ** - Chuẩn bị phỏng vấn bằng nhiều ngôn ngữ khác nhau
- 💻 **Giao diện hiện đại** - Xây dựng bằng React + Tailwind CSS
- ⚡ **Hiệu suất nhanh** - Powered by Vite

## 🚀 Bắt đầu nhanh

### Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

### Cài đặt

1. **Clone repository:**
```bash
git clone <repository-url>
cd interview-prep
```

2. **Cài đặt dependencies:**
```bash
npm install
```

3. **Tạo file `.env.local`:**
```bash
VITE_OPENAI_API_KEY=your_openai_api_key
VITE_GOOGLE_API_KEY=your_google_api_key
```

4. **Chạy development server:**
```bash
npm run dev
```

Server sẽ chạy tại `http://localhost:5173`

## 📦 Build cho Production

```bash
npm run build
```

Preview build:
```bash
npm run preview
```

## 🏗️ Cấu trúc Project

```
interview-prep/
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Cấu hình i18next
│   ├── types/           # TypeScript types
│   └── App.tsx          # Main app component
├── public/              # Static assets
├── tailwind.config.js   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── package.json         # Dependencies
```

## 🔑 Biến môi trường

| Biến | Mô tả | Bắt buộc |
|------|-------|---------|
| `VITE_OPENAI_API_KEY` | OpenAI API key | Không |
| `VITE_GOOGLE_API_KEY` | Google Generative AI key | Không |

## 🛠️ Công nghệ sử dụng

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **i18n**: i18next + react-i18next
- **AI**: OpenAI + Google Generative AI

## 📝 Scripts có sẵn

| Script | Mô tả |
|--------|-------|
| `npm run dev` | Chạy development server |
| `npm run build` | Build cho production |
| `npm run preview` | Preview production build |

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng tạo pull request.

## 📄 License

MIT License

## 📧 Liên hệ

Nếu bạn có câu hỏi, vui lòng tạo issue trên GitHub.
