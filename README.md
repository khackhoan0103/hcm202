# Tư Tưởng Hồ Chí Minh - Đại Đoàn Kết Toàn Dân Tộc

Một ứng dụng web hiện đại để trình bày nội dung về tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc.

## 🌟 Giới thiệu

Ứng dụng này được xây dựng để hiển thị một cách trực quan và đẹp mắt nội dung về tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc, bao gồm:

- Vai trò của đại đoàn kết toàn dân tộc
- Lực lượng của khối đại đoàn kết
- Điều kiện xây dựng khối đại đoàn kết
- Hình thức tổ chức - Mặt trận Dân tộc Thống nhất
- Phương thức xây dựng khối đại đoàn kết

## 🚀 Tính năng

- ⚡ **Vite** - Công cụ build nhanh và dev server
- ⚛️ **React 19** - Phiên bản mới nhất với tính năng concurrent
- 🔷 **TypeScript** - Phát triển JavaScript an toàn kiểu dữ liệu
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 🧩 **Radix UI** - Thư viện component đẹp và accessible
- 🗃️ **Zustand** - Quản lý state nhẹ nhàng
- 🛣️ **React Router** - Định tuyến declarative cho React
- 🧪 **Vitest** - Framework unit testing nhanh
- 📱 **Responsive Design** - Thiết kế mobile-first
- ♿ **Accessibility** - Component tuân thủ WCAG
- 🔧 **Developer Experience** - ESLint, Prettier và nhiều hơn nữa
- 🧭 **Navigation** - Điều hướng giữa các phần nội dung
- 📚 **Content Display** - Hiển thị nội dung có cấu trúc rõ ràng

## 🛠️ Tech Stack

- **Build Tool**: Vite
- **Framework**: React 19 với TypeScript
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **UI Components**: Radix UI + Lucide React
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint + Prettier
- **Deployment**: Vercel-ready

## 🚀 Cách chạy

### Yêu cầu

- Node.js 18+ (khuyến nghị: 20+)
- npm hoặc yarn

### Cài đặt

1. Clone repository:
   ```bash
   git clone <your-repo-url>
   cd react-frontend-only
   ```

2. Cài đặt dependencies:
   ```bash
   npm install
   ```

3. Khởi chạy development server:
   ```bash
   npm run dev
   ```

4. Mở trình duyệt và truy cập `http://localhost:5173`

## 📜 Scripts có sẵn

- `npm run dev` - Khởi chạy development server
- `npm run build` - Build cho production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint
- `npm run format` - Format code với Prettier
- `npm run test` - Chạy tests với Vitest

## 🏗️ Cấu trúc dự án

```
src/
├── components/              # Component UI có thể tái sử dụng
│   ├── HoChiMinhContent.tsx # Component chính hiển thị nội dung
│   └── Navigation.tsx       # Component điều hướng
├── App.tsx                  # Component chính của ứng dụng
├── main.tsx                # Entry point của ứng dụng
├── index.css               # Styles toàn cục với Tailwind
└── tests/                  # Test files
    └── setup.ts            # Test setup
```

## 📚 Nội dung

Ứng dụng trình bày tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc với các phần:

### 1. 🏛️ Giới thiệu
- Tổng quan về tư tưởng Hồ Chí Minh
- Các phần chính của nội dung
- Câu nói nổi tiếng của Bác

### 2. ⚡ Vai trò đại đoàn kết
- Ý nghĩa chiến lược của đại đoàn kết
- Mục tiêu và nhiệm vụ hàng đầu
- Sức mạnh vô địch của khối đại đoàn kết

### 3. 👥 Lực lượng đoàn kết
- Chủ thể của khối đại đoàn kết
- Phạm vi đoàn kết rộng rãi
- Nền tảng vững chắc từ công-nông-trí thức

### 4. 🔑 Điều kiện xây dựng
- Bốn điều kiện thiết yếu:
  - Lợi ích chung làm điểm quy tụ
  - Kế thừa truyền thống dân tộc
  - Lòng khoan dung, độ lượng
  - Niềm tin vào nhân dân

### 5. 🏗️ Hình thức tổ chức
- Mặt trận Dân tộc Thống nhất
- Các giai đoạn phát triển lịch sử
- Nguyên tắc xây dựng và hoạt động

### 6. 🛠️ Phương thức xây dựng
- Công tác dân vận
- Thành lập các đoàn thể
- Tập hợp trong Mặt trận thống nhất

## 🎨 Thiết kế

### Màu sắc chủ đạo
- **Đỏ**: Màu cờ Tổ quốc, tượng trưng cho cách mạng
- **Vàng**: Màu sao vàng, tượng trưng cho ánh sáng và hy vọng
- **Xanh**: Màu thiên nhiên, hòa bình và phát triển

### Typography
- Font chữ rõ ràng, dễ đọc
- Kích thước phù hợp cho mọi thiết bị
- Hierarchy rõ ràng cho các tiêu đề

### Layout
- Responsive design cho mọi màn hình
- Navigation sidebar cho desktop
- Mobile-friendly cho điện thoại

## 🧪 Testing

Dự án sử dụng Vitest cho unit testing và Testing Library cho React component testing.

```bash
# Chạy tests
npm run test

# Chạy tests ở chế độ watch
npm run test -- --watch
```

## 📦 Deployment

### Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Vercel sẽ tự động detect cấu hình Vite
4. Set environment variables trong Vercel dashboard nếu cần
5. Deploy!

### Manual Deployment

1. Build dự án:
   ```bash
   npm run build
   ```

2. Thư mục `dist` chứa production build
3. Deploy thư mục `dist` lên bất kỳ dịch vụ static hosting nào

## 🔧 Configuration

### TypeScript
- Cấu hình trong `tsconfig.json` và `tsconfig.app.json`
- Path mapping được cấu hình cho imports `@/`

### ESLint
- Cấu hình trong `.eslintrc.cjs`
- Rules theo style Airbnb với hỗ trợ TypeScript

### Prettier
- Cấu hình trong `.prettierrc`
- Format code nhất quán

## 🚀 Performance

- **Code Splitting**: Tự động chia code theo route
- **Tree Shaking**: Loại bỏ code không sử dụng
- **Bundle Analysis**: Sử dụng `npm run build` để xem kích thước bundle
- **Optimized Assets**: Vite tối ưu hóa hình ảnh và assets

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch
3. Thực hiện thay đổi
4. Thêm tests cho chức năng mới
5. Chạy test suite
6. Submit pull request

## 📄 License

Dự án này là open source và có sẵn dưới [MIT License](LICENSE).

## 🆘 Support

Nếu gặp vấn đề hoặc có câu hỏi:

1. Kiểm tra trang [Issues](https://github.com/your-username/react-frontend-only/issues)
2. Tạo issue mới với thông tin chi tiết
3. Đối với câu hỏi nhanh, có thể liên hệ qua email

---

Được xây dựng với ❤️ sử dụng các công nghệ web hiện đại.

**"Đoàn kết, đoàn kết, đại đoàn kết / Thành công, thành công, đại thành công"** - Chủ tịch Hồ Chí Minh"# hcm202" 
