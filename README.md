# 🎓 Quiz App - Lý Luận GDTC

Ứng dụng quiz trắc nghiệm hiện đại với giao diện Dark Mode, hỗ trợ tạo bài kiểm tra ngẫu nhiên từ ngân hàng câu hỏi.

## ✨ Tính năng chính

### 📚 Quản lý câu hỏi
- Tự động loại bỏ câu hỏi trùng lặp
- Trộn ngẫu nhiên câu hỏi từ tất cả các đề thi
- Hỗ trợ nhiều đáp án (A, B, C, D, E, F)
- Giải thích chi tiết cho từng câu (nếu có)

### ⚙️ Tùy chỉnh linh hoạt
- Chọn số lượng câu hỏi (5-50 câu)
- Đặt thời gian làm bài (5-60 phút)
- Timer đếm ngược thời gian thực

### 🎨 Giao diện đẹp mắt
- Dark Mode hiện đại với gradient màu
- Responsive trên mọi thiết bị
- Animation mượt mà
- Progress bar theo dõi tiến độ

### 📊 Kết quả chi tiết
- Điểm số phần trăm
- Số câu đúng/sai
- Thời gian hoàn thành
- **Xem lại toàn bộ đáp án:**
  - ✓ Đánh dấu câu trả lời đúng (màu xanh)
  - ✗ Đánh dấu câu trả lời sai (màu đỏ)
  - Hiển thị đáp án đúng
  - Giải thích chi tiết

## 🚀 Cách sử dụng

### Bước 1: Chuẩn bị Database

Mở file HTML và tìm đến dòng có comment:
```javascript
// ===== THAY THẾ DATABASE VÀO ĐÂY =====
const DATABASE = {
    "quizMetadata": {
        "subject": "Lý luận GDTC",
        "timeLimit": 20,
        "totalExams": 6
    },
    "exams": []
};
// ===== KẾT THÚC DATABASE =====
```

### Bước 2: Thay thế dữ liệu

Thay thế nội dung `DATABASE` bằng dữ liệu JSON của bạn theo cấu trúc:

```json
{
    "quizMetadata": {
        "subject": "Tên môn học",
        "timeLimit": 20,
        "totalExams": 6
    },
    "exams": [
        {
            "examId": 1,
            "examName": "ĐỀ SỐ 1",
            "questions": [
                {
                    "id": 1,
                    "question": "Câu hỏi của bạn?",
                    "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
                    "correctAnswer": 0,
                    "explanation": "Giải thích chi tiết (tùy chọn)"
                }
            ]
        }
    ]
}
```

**Lưu ý:**
- `correctAnswer`: Index của đáp án đúng (bắt đầu từ 0)
  - 0 = Đáp án A
  - 1 = Đáp án B
  - 2 = Đáp án C
  - 3 = Đáp án D
- `explanation`: Có thể để trống `""` nếu không có giải thích

### Bước 3: Chạy ứng dụng

1. Mở file HTML bằng trình duyệt web (Chrome, Firefox, Edge, Safari...)
2. Không cần server, không cần cài đặt thêm gì!

## 📖 Hướng dẫn sử dụng

### Màn hình bắt đầu
1. Nhập số câu hỏi muốn làm (tối đa bằng tổng số câu trong database)
2. Nhập thời gian làm bài (phút)
3. Nhấn **"Bắt Đầu Quiz"**

### Trong khi làm bài
- Click vào đáp án để chọn
- Dùng **"← Câu Trước"** và **"Câu Tiếp →"** để di chuyển
- Theo dõi timer và progress bar
- Câu cuối cùng sẽ hiện nút **"Nộp Bài"**

### Xem kết quả
- Điểm số và thống kê hiển thị ngay đầu trang
- Scroll xuống để xem chi tiết từng câu hỏi
- Câu đúng có border xanh lá, câu sai có border đỏ
- Nhấn **"Làm Lại"** để làm bài mới

## 🎯 Các tính năng nổi bật

### 1. Loại bỏ trùng lặp tự động
- So sánh nội dung câu hỏi
- Chỉ giữ lại một bản duy nhất
- Giúp tối ưu ngân hàng câu hỏi

### 2. Ngẫu nhiên thông minh
- Mỗi lần làm bài, câu hỏi được trộn khác nhau
- Đảm bảo công bằng và đa dạng

### 3. Review chi tiết
- Xem lại toàn bộ bài làm
- Dễ dàng học từ những câu sai
- Giải thích giúp hiểu rõ hơn

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc trang web
- **CSS3**: Styling với gradient, animation
- **JavaScript (Vanilla)**: Logic quiz, không dùng framework
- **LocalStorage**: Không sử dụng (dữ liệu trong session)

## 📱 Tương thích

- ✅ Chrome, Edge, Brave (Chromium-based)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Responsive design (Desktop, Tablet, Mobile)

## ⚠️ Lưu ý

1. **Dữ liệu không lưu trữ**: Khi làm mới trang, tiến độ sẽ mất
2. **Chạy local**: File HTML có thể mở trực tiếp, không cần hosting
3. **Số câu hỏi**: Không được vượt quá tổng số câu trong database
4. **Thời gian**: Timer sẽ tự động nộp bài khi hết giờ

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Tìm các dòng CSS có `background: linear-gradient(...)` để thay đổi:
- Gradient chính: `#3b82f6` và `#8b5cf6`
- Màu đúng: `#22c55e`
- Màu sai: `#ef4444`

### Thay đổi animation
Tìm `@keyframes` trong CSS để điều chỉnh hiệu ứng

### Thêm âm thanh
Thêm thẻ `<audio>` và gọi trong JavaScript khi chọn đáp án hoặc nộp bài

## 📄 License

Free to use - Sử dụng tự do cho mục đích cá nhân và học tập

## 💡 Tips

- Nên có 20-50 câu hỏi trong database để đảm bảo chất lượng
- Thêm `explanation` cho các câu khó để người học hiểu rõ hơn
- Kiểm tra `correctAnswer` kỹ trước khi import (đếm từ 0!)
- Test trên mobile để đảm bảo responsive

## 🆘 Troubleshooting

**Q: Không thấy câu hỏi nào?**
- Kiểm tra DATABASE đã được thay thế đúng chưa
- Mở Console (F12) xem có lỗi không

**Q: Số câu hỏi ít hơn mong đợi?**
- Ứng dụng đã tự động loại bỏ câu trùng
- Kiểm tra database có câu hỏi trùng lặp không

**Q: Không thấy phần review?**
- Scroll xuống dưới phần kết quả
- Đảm bảo đã nộp bài xong

**Q: Timer không chạy?**
- Kiểm tra JavaScript có bị block không
- Thử browser khác

---

Made with ❤️ for education | Quiz App v1.0