# TheHung Demo 🚀

Một bộ sưu tập các dự án web hiện đại được xây dựng với React, TypeScript, Tailwind CSS và tích hợp AI.

## 📁 Cấu trúc Repository

```
Demo/
├── interview-prep/          # Ứng dụng chuẩn bị phỏng vấn kinh doanh
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── ai-service/     # OpenAI & Google AI integration
│   │   ├── backend/        # Backend logic
│   │   ├── data/           # Mock data
│   │   ├── i18n/           # Cấu hình đa ngôn ngữ
│   │   ├── utils/          # Utility functions
│   │   └── App.tsx         # Main component
│   ├── public/             # Static assets
│   ├── tailwind.config.js  # Tailwind CSS config
│   ├── vite.config.ts      # Vite bundler config
│   ├── tsconfig.json       # TypeScript config
│   ├── package.json        # Dependencies
│   └── README.md           # Project documentation
│
├── node_modules/           # Dependencies
├── .claude/                # Claude Code configuration
├── package.json            # Root dependencies
├── package-lock.json       # Dependency lock file
└── README.md              # This file

```

## 🎯 Dự án chính

### 📚 Interview Prep (`./interview-prep`)

Ứng dụng web hỗ trợ chuẩn bị cho phỏng vấn kinh doanh sử dụng trí tuệ nhân tạo.

**Tính năng chính:**
- 🤖 Mô phỏng phỏng vấn với AI (OpenAI & Google Gemini)
- 🌐 Hỗ trợ đa ngôn ngữ (i18n)
- 💬 Chatbot tương tác
- 📊 Phân tích và feedback về hiệu suất
- ⚡ Giao diện nhanh và đáp ứng

**Stack công nghệ:**
- React 18 + TypeScript
- Vite (bundler)
- Tailwind CSS (styling)
- i18next (đa ngôn ngữ)
- OpenAI & Google Generative AI

**Bắt đầu nhanh:**
```bash
cd interview-prep
npm install
npm run dev
```

Truy cập: `http://localhost:5173`

## 🛠️ Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Vite** | Fast build tool |
| **Tailwind CSS** | Utility-first CSS |
| **i18next** | Internationalization |
| **OpenAI API** | GPT integration |
| **Google Generative AI** | Gemini integration |
| **Lucide React** | Icon library |

## 🚀 Bắt đầu nhanh

### Yêu cầu hệ thống
- Node.js 18+
- npm hoặc yarn
- Git

### Cài đặt

1. **Clone repository:**
```bash
git clone <repository-url>
cd Demo
```

2. **Cài đặt dependencies:**
```bash
npm install
```

3. **Vào thư mục dự án:**
```bash
cd interview-prep
```

4. **Tạo file `.env.local`:**
```bash
VITE_GOOGLE_API_KEY=your_api_key_here
```

5. **Chạy development server:**
```bash
npm run dev
```

## 📝 Scripts có sẵn

### Development

```bash
# Chạy dev server
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview
```

### Git

```bash
# Xem trạng thái
git status

# Commit changes
git add .
git commit -m "Your message"

# Push lên remote
git push origin main
```

## 🔐 Biến môi trường

Tạo file `.env.local` trong folder `interview-prep`:

```env
# OpenAI
VITE_OPENAI_API_KEY=sk-...

# Google Generative AI
VITE_GOOGLE_API_KEY=AIzaSy...
```

## 📦 Dependencies chính

- **react**: 18.3.1
- **react-dom**: 18.3.1
- **react-router-dom**: 7.15.1
- **typescript**: 5.6.2
- **tailwindcss**: 3.4.7
- **vite**: 5.4.2
- **@google/generative-ai**: 0.24.1
- **openai**: 6.37.0
- **i18next**: 23.11.0

## 📚 Tài liệu

- [Interview Prep README](./interview-prep/README.md) - Tài liệu chi tiết project
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)

## 🔄 Git Workflow

### Tạo nhánh mới
```bash
git checkout -b feature/your-feature-name
```

### Commit changes
```bash
git add .
git commit -m "feat: description of changes"
```

### Push to GitHub
```bash
git push -u origin feature/your-feature-name
```

### Tạo Pull Request
- Vào GitHub và tạo PR từ nhánh của bạn sang `main`
- Thêm mô tả rõ ràng về thay đổi
- Chờ review từ team

## 🐛 Troubleshooting

### Port 5173 đang bị sử dụng
```bash
# Chạy trên port khác
npm run dev -- --port 3000
```

### Node modules bị lỗi
```bash
# Xóa và cài đặt lại
rm -rf node_modules package-lock.json
npm install
```

### Build thất bại
```bash
# Xóa cache và build lại
rm -rf dist
npm run build
```

## 🤝 Đóng góp

1. Fork repository
2. Tạo nhánh feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để chi tiết

## 📧 Liên hệ

Nếu bạn có câu hỏi hoặc đề xuất, vui lòng tạo issue trên GitHub.

---

**Happy coding! 🎉**
