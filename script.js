// ===== THAY THẾ DATABASE VÀO ĐÂY =====
const DATABASES = {
    subject1: {
        "quizMetadata": {
            "subject": "Lý luận GDTC",
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
                        "question": "Đại hội Olympic cổ đại đầu tiên được tổ chức vào năm nào trước công nguyên?",
                        "options": ["775", "776", "777", "778"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 2,
                        "question": "Chủ tịch Hồ Chí Minh ra lời kêu gọi toàn dân tập thể dục vào thời gian nào?",
                        "options": ["26/3/1946", "27/3/1946", "26/3/1947", "27/3/1947"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 3,
                        "question": "Chương trình đào tạo cho sinh viên chính quy của trường đại học Bách Khoa Hà Nội, môn GDTC được quy định bao nhiêu tiết?",
                        "options": ["90", "120", "150", "180"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 4,
                        "question": "Đường, đạm, chất béo... là nguồn cung cấp cho sự sống của con người, khi hoạt động vận động, năng lượng đầu tiên được huy động từ chất nào?",
                        "options": ["Mỡ (Lipit)", "Đường (Gluxit)", "Đạm", "Muối và nước"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 5,
                        "question": "Trong các hoạt động kéo dài, công suất lớn khi đường đã cạn, năng lượng chính để duy trì hoạt động của con người được lấy từ chất nào?",
                        "options": ["Mỡ (Lipit)", "Đường (Gluxit)", "Đạm", "Muối và nước"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 6,
                        "question": "Máu là một chất lỏng đặc biệt, khối lượng máu toàn phần chiếm bao nhiêu % trọng lượng cơ thể?",
                        "options": ["5 – 6%", "6 – 7%", "7 – 8%", "8 – 9%"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 7,
                        "question": "Kỹ năng vận động được hình thành theo 3 giai đoạn, sau một thời gian lặp lại hưng phấn tập trung ở những vùng nhất định trên vỏ não cần thiết cho vận động, các động tác thừa mất đi, động tác hợp lý nhịp nhàng. Đây là giai đoạn nào?",
                        "options": ["Giai đoạn lan tỏa", "Giai đoạn tập trung", "Giai đoạn tự động hóa"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 8,
                        "question": "Sức nhanh là khả năng phản ứng và thực hiện động tác:",
                        "options": ["Với cường độ lớn nhất", "Với thời gian lớn nhất", "Với biên độ lớn nhất", "Với tốc độ cao"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 9,
                        "question": "Bài tập nào dưới đây để phát triển sức nhanh?",
                        "options": ["Bơi 400 – 800m", "Chạy 800m", "Chạy 30m, 60m, 80m, 100m", "Chèo thuyền 5000m"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 10,
                        "question": "Sức mạnh của con người là khả năng khắc phục lực đối kháng bên ngoài hoặc đối kháng lại nó bằng:",
                        "options": ["Sự nỗ lực ý chí", "Sự nỗ lực tối đa của người tập", "Sự nỗ lực của cơ bắp"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 11,
                        "question": "Bài tập nào dưới đây để phát triển sức mạnh?",
                        "options": ["Bơi 400 – 800m", "Nằm sấp chống đẩy, bật cóc 30m", "Đua xe đạp đường trường", "Chạy 1500m"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 12,
                        "question": "Nguyên tắc thích hợp và cá biệt hóa nói đến việc tập luyện TDTT phải phù hợp với:",
                        "options": ["Lứa tuổi", "Giới tính", "Sức khỏe, trình độ thể lực", "Cả 3 yếu tố trên"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 13,
                        "question": "Nguyên tắc tăng tiến nói đến việc tập luyện TDTT phải là quá trình:",
                        "options": ["Tăng nhanh LVĐ", "Liên tục tăng LVĐ trong tập luyện", "Tăng LVĐ liên tục và từ từ"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 14,
                        "question": "Hiện tượng choáng trọng lực xảy ra do nguyên nhân nào dưới đây?",
                        "options": [
                            "VĐV mệt mỏi, tập luyện quá sức",
                            "VĐV bị hạ đường huyết đột ngột",
                            "VĐV về đích dừng lại đột ngột làm hạn chế lưu thông máu về tim, gây thiếu oxy lên não",
                            "Do điều kiện tập luyện nắng, nóng quá gây nên"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 15,
                        "question": "Để cấp cứu người bị say nắng cần phải làm gì?",
                        "options": [
                            "Đưa người ta vào chỗ thoáng mát, nới lỏng quần áo ra",
                            "Dùng khăn ướt lau người và đầu chân",
                            "Cho nạn nhân uống nước chè đường hoặc chanh muối",
                            "Cả ba đáp án trên"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 16,
                        "question": "Trong hoạt động TDTT khi bị va chạm mạnh gây bầm dập phần cơ bắp, cần thiết phải xử lý như thế nào?",
                        "options": [
                            "Dùng ngay thuốc xoa bóp, dầu nóng xoa vào chỗ bầm tím",
                            "Dán ngay thuốc salonpas",
                            "Chườm lạnh 1 – 2 ngày đầu rồi mới dùng thuốc xoa bóp"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 17,
                        "question": "Khi cấp cứu người bị suy hô hấp trong các trường hợp bị điện giật, chết đuối, chấn thương sọ não cần phải hả hơi thổi ngạt với tần số nào sau đây?",
                        "options": ["10 – 15 lần/phút", "16 – 20 lần/phút", "60 – 70 lần/phút", "80 – 90 lần/phút"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 18,
                        "question": "Sử dụng phương pháp nào sau đây để kiểm tra mức độ phát triển thể lực:",
                        "options": ["Phương pháp quan sát", "Phương pháp nhân trắc", "Cả 2 phương án trên"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 19,
                        "question": "Công thức tính QVC?",
                        "options": [
                            "QVC = Chiều cao(cm) – (Vòng ngực hít vào + Vòng đùi thuận + Vòng cánh tay co)",
                            "QVC = h – (P + V)",
                            "QVC = Chiều cao(cm) + Vòng ngực hít vào + Vòng đùi thuận + Vòng cánh tay co"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 20,
                        "question": "Phương pháp nào dưới đây của Test Haward thể hiện chức năng tim mạch trung bình?",
                        "options": ["H = 56 – 64", "H > 99", "H = 65 – 79"],
                        "correctAnswer": 2,
                        "explanation": ""
                    }
                ]
            },
            {
                "examId": 2,
                "examName": "ĐỀ SỐ 2",
                "questions": [
                    {
                        "id": 1,
                        "question": "Chủ tịch Hồ Chí Minh ra lời kêu gọi toàn dân tập thể dục vào thời gian nào?",
                        "options": ["27/3/1946", "27/3/1947", "27/3/1948", "27/3/1949"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 2,
                        "question": "Bộ máy vận động bao gồm?",
                        "options": ["Xương, cơ quan hô hấp", "Xương, hệ tuần hoàn", "Xương, cơ, dây chằng", "Xương, sự trao đổi chất"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 3,
                        "question": "Trong nguyên tắc tự giác tích cực, để tạo ra động cơ cho người học, động cơ đó được biểu hiện như thế nào?",
                        "options": [
                            "Sự khát khao vươn tới cái đẹp",
                            "Tìm hiểu ý nghĩa chân chính của TDTT + A",
                            "Sự khát khao vươn tới đẳng cấp TDTT",
                            "Nhận thức hứng thú về TDTT + C"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 4,
                        "question": "Sau khi kiểm tra các chức năng hoạt động của các cơ quan trong cơ thể, chức năng nào sau đây quyết định đến khả năng vận động và khả năng thích ứng của cơ thể với vận động?",
                        "options": ["Chức năng hệ tim mạch", "Chức năng hệ hô hấp", "Chức năng hệ trao đổi chất", "Chức năng hệ thần kinh"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 5,
                        "question": "Hãy điền từ còn khuyết để hoàn thiện khái niệm về giáo dục Sức nhanh trong các tố chất thể lực của TDTT? Sức nhanh là một tổ hợp thuộc tính chức năng của con người. Nó quy định chủ yếu và trực tiếp đặc tính tốc độ ______________ cũng như thời gian phản ứng vận động.",
                        "options": ["động tác", "hoàn thành", "di chuyển", "vận động"],
                        "correctAnswer": 0,
                        "explanation": "Từ khuyết cần điền là 'thực hiện'"
                    },
                    {
                        "id": 6,
                        "question": "Nhu cầu 'nước' của một người trong một ngày khoảng bao nhiêu lít nước?",
                        "options": ["1 - 1,5 lít", "1,5 – 2 lít", "2 – 2,5 lít", "2,5 – 3 lít"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 7,
                        "question": "Để cấp cứu người bị say nắng trong tập luyện TDTT cần phải làm gì?",
                        "options": [
                            "Đưa người ta vào chỗ thoảng mát, nới lỏng quần áo ra. Dùng khăn ướt lau người và đầu chân, cho uống dung dịch ozeron. Nếu nặng nữa nhanh chóng đưa đi bệnh viện",
                            "Đưa người ta vào chỗ thoáng mát, nới lỏng quần áo ra, dùng khăn ướt lau người và đầu chân, nếu nặng nữa nhanh chóng đưa đi bệnh viện",
                            "Đưa người ta vào chỗ thoáng mát, nới lỏng quần áo ra, cho uống dung dịch ozeron, nếu nặng nữa nhanh chóng đưa đi bệnh viện",
                            "Đưa người ta vào chỗ thoáng mát, nới lỏng quần áo ra, dùng khăn ướt lau người và đầu chân, cho uống dung dịch ozeron"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 8,
                        "question": "Đoàn thể thao Việt Nam lần đầu tiên tham gia đấu trường Olympic vào năm nào?",
                        "options": [
                            "Olympic 1972 tại Munich (Đức)",
                            "Olympic 1976 tại Montreal (Canada)",
                            "Olympic 1980 tại Mát-xcơ-va (Nga)",
                            "Olympic 1984 tại Los Angeles (Mỹ)"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 9,
                        "question": "Triệu chứng: Đau ở vùng khớp bị thương, sưng tấy đỏ vì khớp có dịch và máu, giảm khả năng hoạt động của khớp, là chấn thương nào trong tập luyện và thi đấu TDTT gây nên?",
                        "options": ["Chạm thương", "Biến dạng bao khớp", "Sai khớp", "Bong gân"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 10,
                        "question": "Nguyên tắc tăng dần yêu cầu nói đến việc tập luyện TDTT phải là quá trình?",
                        "options": [
                            "Tăng nhanh LVĐ",
                            "Liên tục tăng LVĐ trong tập luyện",
                            "Tăng LVĐ liên tục và từ từ",
                            "Tăng thời gian thực hiện bài tập"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 11,
                        "question": "Chỉ số vòng cao QVC được nên nghiên cứu trên đối tượng nào sau đây?",
                        "options": ["Tuổi từ 18 – 25", "Tuổi từ 30 – 35", "Tuổi từ 40 – 45", "Tuổi từ 50 – 60"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 12,
                        "question": "Bài tập nào dưới đây là bài tập phát triển sức bền yếm khí?",
                        "options": [
                            "Bài tập chạy dưới 2 phút",
                            "Bài tập chạy dưới 4 phút",
                            "Bài tập chạy dưới 6 phút",
                            "Bài tập chạy dưới 8 phút"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 13,
                        "question": "Chỉ số sinh lý đặc trưng cho hoạt động của hệ hô hấp là tần số hô hấp. Ở người khi tham gia tập luyện TDTT, tần số hô hấp khoảng bao nhiêu?",
                        "options": ["20 – 30 lần/phút", "25 – 35 lần/phút", "30 – 40 lần/phút", "35 – 45 lần/phút"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 14,
                        "question": "'Đưa VĐV vào chỗ thoảng mát, nới lỏng quần áo, đặt nằm chân cao hơn đầu, xoa bóp từ chân lên để máu về tim dễ dàng' là cách xử lý của hiện tượng sinh lý nào xảy ra trong tập luyện và thi đấu TDTT?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng hạ đường huyết",
                            "Hiện tượng choáng trọng lực"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 15,
                        "question": "Trong hoạt động TDTT khi bị va chạm mạnh gây bầm dập phần cơ bắp, cần thiết phải xử lý như thế nào?",
                        "options": [
                            "Dùng ngay thuốc xoa bóp dầu nóng vào chỗ bầm tím",
                            "Dán ngay thuốc salonpas, băng ga rô",
                            "Chườm lạnh 1 – 2 ngày đầu rồi mới dùng thuốc xoa bóp",
                            "Chườm lạnh 3 – 4 ngày đầu rồi mới dùng thuốc xoa bóp"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 16,
                        "question": "Nhiệm vụ của kiểm tra y học TDTT là gì?",
                        "options": [
                            "Tổ chức và thực hiện riêng cho VĐV có trình độ cao",
                            "Phát hiện sớm những chấn thương và bệnh lý xuất hiện do quá trình tập luyện",
                            "Đánh giá trình độ của giáo viên, huấn luyện viên",
                            "Đánh giá trình độ của sinh viên tham gia tập luyện"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 17,
                        "question": "Khi chảy máu động mạch, tĩnh mạch lớn, máu chảy xối xả thì phải sử dụng phương pháp ga rô, nhưng không được đặt ga rô lâu quá?",
                        "options": ["Không quá 2 tiếng", "Không quá 3 tiếng", "Không quá 4 tiếng", "Không quá 5 tiếng"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 18,
                        "question": "Trong tập luyện và thi đấu TDTT gây nên triệu chứng: cảm thấy khó thở, đau bụng, chóng mặt, buồn nôn và muốn bỏ cuộc. Là hiện tượng sinh lý nào?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng hạ đường huyết",
                            "Hiện tượng choáng trọng lực"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 19,
                        "question": "Tố chất Mềm dẻo là năng lực thực hiện động tác?",
                        "options": ["Lâu nhất", "Cường độ lớn", "Biên độ lớn nhất", "Ngắn nhất"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 20,
                        "question": "Bằng kiến thức đã học về lý luận giáo dục thể chất. Anh (chị) hãy cho biết, lượng vận động trong một buổi tập TDTT phụ thuộc vào yếu tố nào?",
                        "options": [
                            "Khối lượng và lặp lại bài tập",
                            "Khối lượng và thời gian vận động",
                            "Khối lượng và cường độ bài tập",
                            "Khối lượng và kỹ năng thực hiện bài tập"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    }
                ]
            },
            {
                "examId": 3,
                "examName": "ĐỀ SỐ 3",
                "questions": [
                    {
                        "id": 1,
                        "question": "Nói đến tính chất 'luân phiên lượng vận động với nghỉ ngơi' là nguyên tắc tập luyện TDTT nào?",
                        "options": [
                            "Nguyên tắc thích hợp và cá biệt hóa",
                            "Nguyên tắc tăng dần yêu cầu",
                            "Nguyên tắc hệ thống",
                            "Nguyên tắc tự giác tích cực"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 2,
                        "question": "Có mấy nội dung kiểm tra y học thể dục thể thao?",
                        "options": ["4", "5", "6", "7"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 3,
                        "question": "Chỉ số quay vòng cao QVC được nên nghiên cứu trên đối tượng nào sau đây?",
                        "options": ["Tuổi từ 18 – 25", "Tuổi từ 30 – 35", "Tuổi từ 40 – 45", "Tuổi từ 50 – 60"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 4,
                        "question": "Hãy chọn từ còn khuyết để hoàn thiện khái niệm về giáo dục Sức bền chung trong các tố chất thể lực của TDTT? Sức bền chung: là sức bền trong các hoạt động kéo dài với _______ thấp, có sự tham gia của phần lớn hệ cơ.",
                        "options": ["Hoạt động", "Vận động", "Khối lượng", "Cường độ"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 5,
                        "question": "Khi tập luyện và thi đấu TDTT có triệu chứng: tự nhiên thấy nhức đầu, hoa mắt, chóng mặt, mệt mỏi, chân tay ra rời, khó thở, mồ hôi ra nhiều, mặt đỏ, ù tai. Là hiện tượng sinh lý nào?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng hạ đường huyết",
                            "Hiện tượng choáng trọng lực"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 6,
                        "question": "Sẽ nguy hiểm đến sự sống, nếu mất đi số lượng máu trong cơ thể là bao nhiêu?",
                        "options": ["1/3", "1/4", "2/3", "1/5"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 7,
                        "question": "Sự cân bằng giữa năng lượng hấp thụ và năng lượng tiêu hao là chỉ số quan trọng để đánh giá gì của cơ thể?",
                        "options": [
                            "Áp suất trong không khí",
                            "Thân nhiệt của cơ thể",
                            "Sự trao đổi năng lượng",
                            "Môi trường xung quanh"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 8,
                        "question": "Vận động viên muốn thoát khỏi hiện tượng Cực điểm thì phải?",
                        "options": [
                            "Nghỉ ngơi dừng tập",
                            "Nỗ lực ý chí quyết tâm không bỏ cuộc",
                            "Hít thở sâu, giảm tần số bước chạy",
                            "Phương án b và c"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 9,
                        "question": "Sự ra đời của TDTT được lịch sử TDTT ghi nhận trong chế độ xã hội nào?",
                        "options": ["Xã hội nguyên thủy", "Xã hội chiếm hữu nô lệ", "Xã hội phong kiến", "Xã hội tư bản"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 10,
                        "question": "Trong tập luyện và thi đấu TDTT, bong gân thường hay xảy ra ở khớp nào sau đây?",
                        "options": [
                            "Khớp gối, khớp cổ tay, khớp vai, khớp ngón tay cái, khớp cổ chân",
                            "Khớp gối, khớp cổ tay, khớp vai, khớp ngón tay cái, khớp khuỷu",
                            "Khớp gối, khớp cổ tay, khớp ngón tay cái, khớp cổ chân",
                            "Khớp gối, khớp cổ tay, khớp vai, khớp khuỷu, khớp ngón tay cái, khớp cổ chân",
                            "Khớp gối, khớp cổ tay, khớp vai, khớp khuỷu, khớp cổ chân"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 11,
                        "question": "Nguyên tắc thích hợp – cá biệt hóa nói đến việc tập luyện TDTT phù hợp với?",
                        "options": ["Lứa tuổi", "Giới tính + A", "Sức khỏe, trình độ thể lực + A", "Cả ba yếu tố trên"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 12,
                        "question": "Mục đích của kiểm tra y học TDTT là gì?",
                        "options": [
                            "Đánh giá tình trạng sức khỏe, mức độ vận động và khả năng thích ứng của cơ thể",
                            "Đánh giá tình trạng sức khỏe, năng lực vận động và khả năng thích ứng của cơ thể",
                            "Đánh giá tình trạng sức khỏe, theo dõi vận động và khả năng thích ứng của cơ thể",
                            "Đánh giá tình trạng sức khỏe, tuyển chọn và điều chỉnh phương tiện huấn luyện"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 13,
                        "question": "Bài tập nào dưới đây để phát triển sức mạnh?",
                        "options": ["Bơi 400 – 800m", "Bơi 200 – 400m", "Bơi vượt sông", "Bơi ngược dòng"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 14,
                        "question": "Test đo dung tích sống có ý nghĩa như thế nào?",
                        "options": [
                            "Dung tích sống càng lớn thì thể tích phổi càng lớn chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống tỉ lệ nghịch với thể tích phổi chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống nhỏ, thể tích phổi lớn chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống tỉ lệ thuận với thể tích phổi chứng tỏ chức năng hô hấp tốt"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 15,
                        "question": "Nguyên nhân chính gây ra hiện tượng 'Chuột rút' trong tập luyện và thi đấu TDTT?",
                        "options": [
                            "Do tập luyện và thi đấu với cường độ lớn và chế độ ăn uống chưa hợp lý",
                            "Do tập luyện và thi đấu với khối lượng lớn, mất nhiều muối và nước",
                            "Do tập luyện và thi đấu với cường độ lớn, ứ đọng axitlatic trong cơ, mất nhiều muối và nước rối loạn trong trao đổi chất trong cơ",
                            "Do tập luyện và thi đấu với khối lượng lớn, ứ đọng axitlatic trong cơ, mất nhiều muối và nước rối loạn trao đổi chất trong cơ",
                            "Do tập luyện và thi đấu với cường độ lớn, ứ đọng axitlatic trong cơ, tính thẩm thấu giữa các bó cơ giảm, mất nhiều muối và nước rối loạn trao đổi chất trong cơ"
                        ],
                        "correctAnswer": 4,
                        "explanation": ""
                    },
                    {
                        "id": 16,
                        "question": "Căn cứ vào các đặc điểm của hoạt động thể thao, người ta có thể chia năng lực phối hợp vận động thành mấy loại?",
                        "options": ["6", "7", "8", "9"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 17,
                        "question": "Bằng kiến thức đã học về lý luận giáo dục thể chất. Anh (chị) hãy cho biết những nguyên nhân chính gây nên hiện tượng 'Tiểu đường'?",
                        "options": [
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do môi trường sống – do hệ tim mạch yếu",
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do hệ miễn dịch kém – do hệ tim mạch yếu",
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do môi trường sống – do béo phì",
                            "Do lười vận động – do chế độ ăn uống – do môi trường sống – do hệ miễn dịch kém",
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do môi trường sống – do hệ miễn dịch kém"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 18,
                        "question": "Quyết định phục hồi lại thế vận hội Olympic, sau thời gian bị dừng lại được đưa ra vào ngày?",
                        "options": ["Ngày 23/6/1893", "Ngày 23/6/1894", "Ngày 23/6/1895", "Ngày 23/6/1896"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 19,
                        "question": "Khi cấp cứu trẻ em bị suy hô hấp trong các trường hợp bị điện giật, chết đuối, chấn thương sọ não cần phải hả hơi thổi ngạt với tần số nào sau đây?",
                        "options": ["14 – 16 lần/phút", "16 – 18 lần/phút", "18 – 20 lần/phút", "20 – 22 lần/phút"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 20,
                        "question": "Khi sơ cứu gãy xương hở, gây rách da, chảy máu cần phải làm gì?",
                        "options": [
                            "Băng bó cầm máu, bất động chỗ bị gãy bằng nẹp, chuyển nạn nhân đi bệnh viện",
                            "Băng bó cầm máu, ủ ấm cho nạn nhân, rồi chuyển nạn nhân đi bệnh viện",
                            "Băng bó cầm máu, bất động chỗ bị gãy bằng nẹp, ủ ấm, chuyển nạn nhân đi bệnh viện",
                            "Bất động chỗ bị gãy bằng nẹp, ủ ấm cho nạn nhân rồi chuyển nạn nhân đi bệnh viện"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    }
                ]
            },
            {
                "examId": 4,
                "examName": "ĐỀ SỐ 4",
                "questions": [
                    {
                        "id": 1,
                        "question": "Quyết định phục hồi lại thế vận hội Olympic, sau thời gian bị dừng lại được đưa ra vào ngày?",
                        "options": ["Ngày 23/6/1893", "Ngày 23/6/1894", "Ngày 23/6/1895", "Ngày 23/6/1896"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 2,
                        "question": "Khi cấp cứu trẻ em bị suy hô hấp trong các trường hợp bị điện giật, chết đuối, chấn thương sọ não cần phải hả hơi thổi ngạt với tần số nào sau đây?",
                        "options": ["14 – 16 lần/phút", "16 – 18 lần/phút", "18 – 20 lần/phút", "20 – 22 lần/phút"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 3,
                        "question": "Nói đến tính chất 'luân phiên hiện tượng vận động với nghỉ ngơi'. Là nguyên tắc tập luyện TDTT nào?",
                        "options": [
                            "Nguyên tắc thích hợp và cá biệt hóa",
                            "Nguyên tắc tăng dần yêu cầu",
                            "Nguyên tắc hệ thống",
                            "Nguyên tắc tự giác tích cực"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 4,
                        "question": "Có mấy nội dung kiểm tra y học thể dục thể thao?",
                        "options": ["4", "5", "6", "7"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 5,
                        "question": "Hãy chọn từ còn khuyết để hoàn thiện khái niệm về giáo dục Sức bền chung trong các tố chất thể lực của TDTT? Sức bền chung: là sức bền trong các hoạt động kéo dài với _______ thấp, có sự tham gia của phần lớn hệ cơ.",
                        "options": ["Hoạt động", "Vận động", "Khối lượng", "Cường độ"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 6,
                        "question": "Sự cân bằng giữa năng lượng hấp thụ và năng lượng tiêu hao là chỉ số quan trọng để đánh giá gì của cơ thể?",
                        "options": [
                            "Áp suất trong không khí",
                            "Thân nhiệt của cơ thể",
                            "Môi trường xung quanh",
                            "Sự trao đổi năng lượng"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 7,
                        "question": "Vận động viên muốn thoát khỏi hiện tượng Cực điểm thì phải?",
                        "options": [
                            "Nghỉ ngơi dừng tập",
                            "Nỗ lực ý chí quyết tâm không bỏ cuộc",
                            "Hít thở sâu, giảm tần số bước chạy",
                            "Phương án b và c"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 8,
                        "question": "Sự ra đời của TDTT được lịch sử TDTT ghi nhận trong chế độ xã hội nào?",
                        "options": ["Xã hội nguyên thủy", "Xã hội chiếm hữu nô lệ", "Xã hội phong kiến", "Xã hội tư bản"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 9,
                        "question": "Trong tập luyện và thi đấu TDTT, bong gân thường hay xảy ra ở khớp nào sau đây?",
                        "options": [
                            "Khớp gối, khớp cổ tay, khớp vai, khớp ngón tay cái, khớp cổ chân",
                            "Khớp gối, khớp cổ tay, khớp vai, khớp ngón tay cái, khớp khuỷu",
                            "Khớp gối, khớp cổ tay, khớp ngón tay cái, khớp cổ chân",
                            "Khớp gối, khớp cổ tay, khớp vai, khớp khuỷu, khớp ngón tay cái, khớp cổ chân",
                            "Khớp gối, khớp cổ tay, khớp vai, khớp khuỷu, khớp cổ chân"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 10,
                        "question": "Nguyên tắc thích hợp – cá biệt hóa nói đến việc tập luyện TDTT phù hợp với?",
                        "options": ["Lứa tuổi", "Giới tính + A", "Sức khỏe, trình độ thể lực + A", "Cả ba yếu tố trên"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 11,
                        "question": "Mục đích của kiểm tra y học TDTT là gì?",
                        "options": [
                            "Đánh giá tình trạng sức khỏe, mức độ vận động và khả năng thích ứng của cơ thể",
                            "Đánh giá tình trạng sức khỏe, năng lực vận động và khả năng thích ứng của cơ thể",
                            "Đánh giá tình trạng sức khỏe, theo dõi vận động và khả năng thích ứng của cơ thể",
                            "Đánh giá tình trạng sức khỏe, tuyển chọn và điều chỉnh phương tiện huấn luyện"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 12,
                        "question": "Bài tập nào dưới đây để phát triển sức mạnh?",
                        "options": ["Bơi 400 – 800m", "Bơi 200 – 400m", "Bơi vượt sông", "Bơi ngược dòng"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 13,
                        "question": "Sẽ nguy hiểm đến sự sống, nếu mất đi số lượng máu trong cơ thể là bao nhiêu?",
                        "options": ["1/3", "1/4", "2/3", "1/5"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 14,
                        "question": "Khi tập luyện và thi đấu TDTT có triệu chứng: tự nhiên thấy nhức đầu, hoa mắt, chóng mặt, mệt mỏi, chân tay ra rời, khó thở, mồ hôi ra nhiều, mặt đỏ, ù tai. Là hiện tượng sinh lý nào?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng hạ đường huyết",
                            "Hiện tượng choáng trọng lực"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 15,
                        "question": "Khi sơ cứu gãy xương hở, gây rách da, chảy máu cần phải làm gì?",
                        "options": [
                            "Băng bó cầm máu, bất động chỗ bị gãy bằng nẹp, chuyển nạn nhân đi bệnh viện",
                            "Băng bó cầm máu, ủ ấm cho nạn nhân, rồi chuyển nạn nhân đi bệnh viện",
                            "Băng bó cầm máu, bất động chỗ bị gãy bằng nẹp, ủ ấm, chuyển nạn nhân đi bệnh viện",
                            "Bất động chỗ bị gãy bằng nẹp, ủ ấm cho nạn nhân rồi chuyển nạn nhân đi bệnh viện"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 16,
                        "question": "Chỉ số quay vòng cao QVC được nên nghiên cứu trên đối tượng nào sau đây?",
                        "options": ["Tuổi từ 18 – 25", "Tuổi từ 30 – 35", "Tuổi từ 40 – 45", "Tuổi từ 50 – 60"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 17,
                        "question": "Test đo dung tích sống có ý nghĩa như thế nào?",
                        "options": [
                            "Dung tích sống càng lớn thì thể tích phổi càng lớn chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống tỉ lệ nghịch với thể tích phổi chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống nhỏ, thể tích phổi lớn chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống tỉ lệ thuận với thể tích phổi chứng tỏ chức năng hô hấp tốt"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 18,
                        "question": "Nguyên nhân chính gây ra hiện tượng 'Chuột rút' trong tập luyện và thi đấu TDTT?",
                        "options": [
                            "Do tập luyện và thi đấu với cường độ lớn và chế độ ăn uống chưa hợp lý",
                            "Do tập luyện và thi đấu với khối lượng lớn, mất nhiều muối và nước",
                            "Do tập luyện và thi đấu với cường độ lớn, ứ đọng axitlatic trong cơ, mất nhiều muối và nước rối loạn trong trao đổi chất trong cơ",
                            "Do tập luyện và thi đấu với khối lượng lớn, ứ đọng axitlatic trong cơ, mất nhiều muối và nước rối loạn trao đổi chất trong cơ",
                            "Do tập luyện và thi đấu với cường độ lớn, ứ đọng axitlatic trong cơ, tính thẩm thấu giữa các bó cơ giảm, mất nhiều muối và nước rối loạn trao đổi chất trong cơ"
                        ],
                        "correctAnswer": 4,
                        "explanation": ""
                    },
                    {
                        "id": 19,
                        "question": "Căn cứ vào các đặc điểm của hoạt động thể thao, người ta có thể chia năng lực phối hợp vận động thành mấy loại?",
                        "options": ["6", "7", "8", "9"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 20,
                        "question": "Bằng kiến thức đã học về lý luận giáo dục thể chất. Anh (chị) hãy cho biết những nguyên nhân chính gây nên hiện tượng 'Tiểu đường'?",
                        "options": [
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do môi trường sống – do hệ tim mạch yếu",
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do hệ miễn dịch kém – do hệ tim mạch yếu",
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do môi trường sống – do béo phì",
                            "Do lười vận động – do chế độ ăn uống – do môi trường sống – do hệ miễn dịch kém",
                            "Do lười vận động – do chế độ ăn uống – do gen di truyền – do môi trường sống – do hệ miễn dịch kém"
                        ],
                        "correctAnswer": 4,
                        "explanation": ""
                    }
                ]
            },
            {
                "examId": 5,
                "examName": "ĐỀ SỐ 5",
                "questions": [
                    {
                        "id": 1,
                        "question": "Anh (chị) hãy cho biết giai đoạn nào xuất hiện cơ sở về lý luận giáo dục thể chất?",
                        "options": ["Xã hội nguyên thủy", "Xã hội chiếm hữu nô lệ", "Xã hội phong kiến", "Xã hội tư bản"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 2,
                        "question": "Anh (chị) hãy cho biết các bước tiến hành 'cứu đuối' nào sau đây đúng?",
                        "options": [
                            "Làm thông đường hô hấp – hả hơi thổi ngạt, xoa bóp tim ngoài lồng ngực",
                            "Làm thông đường hô hấp – dốc nước trong bụng – hả hơi thổi ngạt, xoa bóp tim ngoài lồng ngực",
                            "Làm thông đường hô hấp – hả hơi thổi ngạt, xoa bóp tim ngoài lồng ngực – dốc nước trong bụng",
                            "Dốc nước trong bụng – làm thông đường hô hấp – hả hơi thổi ngạt, xoa bóp tim ngoài lồng ngực"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 3,
                        "question": "Nguyên tắc hệ thống là nguyên tắc nói đến?",
                        "options": [
                            "Luyện tập phải thường xuyên liên tục",
                            "Phải luân phiên giữa tập luyện và nghỉ ngơi",
                            "Sắp xếp nội dung hợp lý",
                            "Cả ba yếu tố trên"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 4,
                        "question": "Nội dung đo: chiều cao đứng, ngồi, cân nặng, các số đo lồng ngực, vòng bụng, vòng cánh tay, vòng đùi, vòng mông, độ dài tay, chân, đo sức mạnh cơ, dung tích sống. Là của phương pháp nào?",
                        "options": [
                            "Phương pháp quan sát",
                            "Phương pháp Q.V.C (quay vòng)",
                            "Phương pháp Erisman",
                            "Phương pháp nhân trắc"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 5,
                        "question": "Hãy chọn từ còn khuyết để hoàn thiện khái niệm về giáo dục Sức bền chung trong các tố chất thể lực của TDTT? Sức bền chung: là sức bền trong các hoạt động kéo dài với _______ thấp, có sự tham gia của phần lớn hệ cơ.",
                        "options": ["Hoạt động", "Vận động", "Khối lượng", "Cường độ"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 6,
                        "question": "Máu là một chất lỏng đặc biệt, khối lượng máu toàn phần chiếm bao nhiêu % trọng lượng cơ thể?",
                        "options": ["5 – 6%", "6 – 7%", "7 – 8%", "8 – 9%"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 7,
                        "question": "Khi tập luyện và thi đấu TDTT có triệu chứng: tự nhiên thấy nhức đầu, hoa mắt, chóng mặt, mệt mỏi, chân tay ra rời, khó thở, mồ hôi ra nhiều, mặt đỏ, ù tai. Là hiện tượng sinh lý nào?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng hạ đường huyết",
                            "Hiện tượng choáng trọng lực"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 8,
                        "question": "Việt Nam tham gia đấu trường Olympic lần đầu tiên vào năm nào?",
                        "options": ["1972", "1976", "1980", "1984"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 9,
                        "question": "Nguyên nhân chính nào, gây nên chấn thương trong tập luyện và thi đấu TDTT?",
                        "options": [
                            "Khi tập luyện, thi đấu không khởi động, sân bãi dụng cụ kém, trang phục không phù hợp, ý thức kỷ luật của người tập kém",
                            "Khi tập luyện, thi đấu không khởi động, sân bãi dụng cụ kém, trang phục phù hợp, ý thức kỷ luật của người tập kém",
                            "Khi tập luyện, thi đấu không khởi động, sân bãi dụng cụ kém, trang phục không phù hợp, vừa bị chấn thương chưa lành, ý thức kỷ luật của người tập kém",
                            "Khi tập luyện, thi đấu không khởi động, sân bãi dụng cụ kém, trang phục phù hợp, vừa bị chấn thương chưa lành, ý thức kỷ luật của người tập kém"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 10,
                        "question": "Nguyên tắc tập luyện TDTT nào? Là tiền đề chung để thực hiện tất cả các nguyên tắc khác của giáo dục thể chất?",
                        "options": [
                            "Nguyên tắc thích hợp và cá biệt hóa",
                            "Nguyên tắc hệ thống",
                            "Nguyên tắc tự giác tích cực",
                            "Nguyên tắc tăng dần yêu cầu"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 11,
                        "question": "Test đo dung tích sống có ý nghĩa như thế nào?",
                        "options": [
                            "Dung tích sống càng lớn thì thể tích phổi càng lớn chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống tỉ lệ nghịch với thể tích phổi chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống nhỏ, thể tích phổi lớn chứng tỏ chức năng hô hấp tốt",
                            "Dung tích sống tỉ lệ thuận với thể tích phổi chứng tỏ chức năng hô hấp tốt"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 12,
                        "question": "Trong việc hình thành kỹ năng vận động, hệ xương khớp điều chỉnh sự sai sát của kỹ thuật động tác?",
                        "options": ["Đúng", "Sai"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 13,
                        "question": "Mỡ là chất có giá trị cung cấp năng lượng rất cao, 1 gam mỡ khi phân giải cung cấp bao nhiêu kcal?",
                        "options": ["4,1 kcal", "4,3 kcal", "9,3 kcal", "5,1 kcal"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 14,
                        "question": "Hãy lựa chọn cách xử lý đúng sau khi bị 'Chuột rút' trong quá trình tập luyện và thi đấu TDTT?",
                        "options": [
                            "Kéo giãn cơ tối đa theo chiều ngược lại cho đến khi không co lại được nữa",
                            "Kéo giãn cơ tối đa cho đến khi không co lại được nữa và xoa bóp",
                            "Kéo giãn cơ theo chiều ngược lại và xoa bóp",
                            "Kéo dãn cơ tối đa theo chiều ngược lại cho đến khi không co lại được nữa và xoa bóp",
                            "Kéo giãn cơ theo chiều ngược lại cho đến khi không co lại được nữa và xoa bóp"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 15,
                        "question": "Khi sơ cứu vết thương gây rách da, chảy máu mao mạch cần thiết phải làm gì?",
                        "options": [
                            "Rửa sạch vết thương bằng nước lã hoặc thuốc sát trùng rồi băng lại",
                            "Rửa sạch vết thương bằng nước lã hoặc thuốc sát trùng rồi ga rô lại",
                            "Chỉ dùng băng thấm cồn lau sạch từ mép vết thương ra xung quanh rồi băng lại",
                            "Chỉ dùng băng thấm cồn lau sạch từ mép vết thương ra xung quanh rồi ga rô lại"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 16,
                        "question": "Chỉ số nào sau đây của Test Haward thể hiện chức năng tim mạch trung bình?",
                        "options": ["H < 55", "H = 56 – 64", "H = 65 – 79", "H = 80 – 89"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 17,
                        "question": "Trong TDTT kỹ năng vận động được hình thành dần theo mấy giai đoạn sau đây?",
                        "options": [
                            "Giai đoạn lan tỏa + Giai đoạn tập trung",
                            "Giai đoạn tự động hóa + A",
                            "Giai đoạn hình thành phản xạ có điều kiện + A",
                            "Giai đoạn hình thành phản xạ có điều kiện + B"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 18,
                        "question": "Trong các trạng thái sinh lý và phản ứng xấu của cơ thể xảy ra trong tập luyện 'Hạ đường huyết' xảy ra làm rối loạn cơ chế điều hòa thân nhiệt?",
                        "options": ["Đúng", "Sai"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 19,
                        "question": "Bài tập nào dưới đây để phát triển sức mạnh?",
                        "options": ["Bơi 100 – 200m", "Chạy 100 – 200m", "Chạy 30 – 80m", "Chèo thuyền 100 – 200m"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 20,
                        "question": "Trong TDTT các tố chất thể lực được phát triển thống nhất với kỹ năng nào sau đây?",
                        "options": ["Kỹ năng động tác", "Kỹ năng lặp lại", "Kỹ năng vận động", "Kỹ năng phối hợp"],
                        "correctAnswer": 2,
                        "explanation": ""
                    }
                ]
            },
            {
                "examId": 6,
                "examName": "ĐỀ SỐ 6",
                "questions": [
                    {
                        "id": 1,
                        "question": "Chủ tịch Hồ Chí Minh ra lời kêu gọi toàn dân tập thể dục vào thời gian nào?",
                        "options": ["27/3/1946", "27/3/1947", "27/3/1948", "27/3/1949"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 2,
                        "question": "Anh (chị) hãy cho biết các xử lý nào, sau khi bị 'bong gân cổ tay, cổ chân' là đúng?",
                        "options": [
                            "Chườm lạnh 1 – 2 ngày, sau đó chườm nóng và xoa bóp nhẹ nhàng",
                            "Chườm lạnh 2 – 3 ngày, sau đó chườm nóng và xoa bóp nhẹ nhàng",
                            "Chườm lạnh 3 – 4 ngày, sau đó chườm nóng và xoa bóp nhẹ nhàng",
                            "Chườm nóng, xoa bóp nhẹ nhàng, sau đó băng ép bất động khớp",
                            "Chườm lạnh, xoa bóp nhẹ nhàng, sau đó băng ép bất động khớp"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 3,
                        "question": "Nguyên tắc tăng dần yêu cầu trong TDTT là quá trình tăng lượng vận động như thế nào?",
                        "options": [
                            "Lượng vận động từ đơn giản đến phức tạp",
                            "Lượng vận động liên tục và từ từ",
                            "Lượng vận động từ dễ đến khó",
                            "Lượng vận động theo khả năng người tập"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 4,
                        "question": "Khi kiểm tra chức năng Hệ tim mạch trong vận động mới đánh giá được chức năng tim mạch có đáp ứng được nhu cầu cung cấp _______ cho hoạt động hay không?",
                        "options": ["Lượng oxy", "Vận động và thích ứng", "Năng lượng", "Dinh dưỡng và dưỡng khí"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 5,
                        "question": "Hãy điền từ còn khuyết để hoàn thiện khái niệm về giáo dục Sức nhanh phản ứng vận động phức tạp trong các tố chất thể lực của TDTT? Sức nhanh phản ứng vận động phức tạp: là sự đáp lại những tín hiệu, hành động không được biết trước mà phải dựa vào khả năng phán đoán _______ của người tập",
                        "options": ["nhanh nhạy", "chính xác", "kịp thời", "linh hoạt"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 6,
                        "question": "Nhu cầu 'nước' của một người trong một ngày khoảng bao nhiêu lít nước?",
                        "options": ["1 - 1,5 lít", "1,5 – 2 lít", "2 – 2,5 lít", "2,5 – 3 lít"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 7,
                        "question": "Hiện tượng Choáng trọng lực là hiện tượng xảy ra do nguyên nhân chính nào sau đây?",
                        "options": [
                            "VĐV mệt mỏi tập luyện quá mức",
                            "VĐV bị hạ đường huyết đột ngột",
                            "VĐV về đích dừng lại đột ngột làm hạn chế lưu thông máu về tim",
                            "Do điều kiện tập luyện nắng nóng gây nên",
                            "Do bị bệnh lý về đường hô hấp"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 8,
                        "question": "Đoàn thể thao Việt Nam lần đầu tiên tham gia đấu trường Olympic vào năm nào?",
                        "options": [
                            "Olympic 1972 tại Munich (Đức)",
                            "Olympic 1976 tại Montreal (Canada)",
                            "Olympic 1980 tại Mát-xcơ-va (Nga)",
                            "Olympic 1984 tại Los Angeles (Mỹ)"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 9,
                        "question": "Trong tập luyện và thi đấu TDTT. Sai khớp thường hay xảy ra ở khớp nào sau đây?",
                        "options": [
                            "Khớp cổ chân, khớp khuỷu, khớp ngón tay",
                            "Khớp cổ chân, khớp khuỷu, khớp vai",
                            "Khớp khuỷu, khớp vai, khớp ngón tay",
                            "Khớp khuỷu, khớp vai, khớp ngón tay cái"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 10,
                        "question": "Anh (chị) hãy cho biết có mấy nguyên tắc tập luyện TDTT?",
                        "options": ["4", "5", "6", "7"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 11,
                        "question": "Chỉ số vòng cao QVC được nên nghiên cứu trên đối tượng nào sau đây?",
                        "options": ["Tuổi từ 18 – 25", "Tuổi từ 30 – 35", "Tuổi từ 40 – 45", "Tuổi từ 50 – 60"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 12,
                        "question": "Kỹ năng vận động được hình thành sau một thời gian lặp lại sự hưng phấn tập trung ở những vùng nhất định trên vỏ não cần thiết cho vận động, các động tác thừa mất đi, động tác hợp lý nhịp nhàng. Đây là giai đoạn nào?",
                        "options": ["Giai đoạn lan tỏa", "Giai đoạn tập trung", "Giai đoạn tự động hóa", "Cả ba đáp án"],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 13,
                        "question": "Chỉ số sinh lý đặc trưng cho hoạt động của hệ hô hấp là tần số hô hấp. Ở người bình thường, tần số hô hấp khoảng bao nhiêu?",
                        "options": ["14 – 18 lần/phút", "15 – 19 lần/phút", "16 – 20 lần/phút", "17 – 22 lần/phút"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 14,
                        "question": "Trong tập luyện và thi đấu TDTT gây nên triệu chứng: cảm thấy mệt mỏi, hoa mắt, chóng mặt, cảm thấy đói, mặt tái xanh, ra mồ hôi lạnh, khó thở, trí giác giảm sút, giọng nói ngắt quãng. Là hiện tượng sinh lý?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng choáng trọng lực",
                            "Hiện tượng hạ đường huyết"
                        ],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 15,
                        "question": "Loại tổn thương trong chấn thương TDTT: mẻ xương, lún xương, rạn xương, là dạng nào?",
                        "options": ["Gãy xương kín", "Gãy xương hở", "Gãy xương hoàn toàn", "Gãy xương không hoàn toàn"],
                        "correctAnswer": 3,
                        "explanation": ""
                    },
                    {
                        "id": 16,
                        "question": "Nhiệm vụ của kiểm tra y học TDTT là gì?",
                        "options": [
                            "Tổ chức và thực hiện cho VĐV có trình độ cao",
                            "Phát hiện sớm những chấn thương và bệnh lý xuất hiện do quá trình tập luyện",
                            "Đánh giá trình độ của giáo viên, huấn luyện viên",
                            "Đánh giá trình độ của sinh viên tham gia tập luyện"
                        ],
                        "correctAnswer": 1,
                        "explanation": ""
                    },
                    {
                        "id": 17,
                        "question": "Khi chảy máu động mạch, tĩnh mạch lớn, máu chảy xối xả thì phải sử dụng phương pháp ga rô, nhưng không được đặt ga rô lâu quá?",
                        "options": ["Không quá 2 tiếng", "Không quá 3 tiếng", "Không quá 4 tiếng", "Không quá 5 tiếng"],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 18,
                        "question": "Trong tập luyện và thi đấu TDTT nói đến 'trạng thái hô hấp lần hai' của hiện tượng sinh lý nào?",
                        "options": [
                            "Hiện tượng cực điểm",
                            "Hiện tượng say nắng",
                            "Hiện tượng hạ đường huyết",
                            "Hiện tượng choáng trọng lực"
                        ],
                        "correctAnswer": 0,
                        "explanation": ""
                    },
                    {
                        "id": 19,
                        "question": "Tố chất Mềm dẻo là năng lực thực hiện động tác?",
                        "options": ["Lâu nhất", "Cường độ lớn", "Biên độ lớn nhất", "Ngắn nhất"],
                        "correctAnswer": 2,
                        "explanation": ""
                    },
                    {
                        "id": 20,
                        "question": "Bằng kiến thức đã học về lý luận giáo dục thể chất. Khi xoa bóp tim ngoài lồng ngực, vị trí đặt tay như thế nào?",
                        "options": [
                            "Tay phải đặt chéo lên tay trái đặt ở 1/2 dưới xương ức",
                            "Tay trái đặt chéo lên tay phải đặt ở 1/2 dưới xương ức",
                            "Tay phải đặt chéo lên tay trái ở 1/3 dưới xương ức",
                            "Tay trái đặt chéo lên tay phải ở 1/3 dưới xương ức",
                            "Tay trái đặt chéo lên tay phải đặt ở 1/2 tại xương ức"
                        ],
                        "correctAnswer": 2,
                        "explanation": ""
                    }
                ]
            }
        ]
    },
    subject2: {
        "quizMetadata": {
            "subject": "Giải tích 1",
            "timeLimit": 90,
            "totalExams": 3
        },
        "exams": [
            {
                "examId": 1,
                "examName": "ĐỀ SỐ 1 - HÀM SỐ VÀ GIỚI HẠN",
                "questions": [
                    {
                        "id": 1,
                        "question": "Hàm số f(x) được gọi là hàm số chẵn khi thỏa mãn điều kiện nào?",
                        "options": [
                            "∀x ∈ D thì -x ∈ D và f(x) = f(-x)",
                            "∀x ∈ D thì -x ∈ D và f(x) = -f(-x)",
                            "∀x ∈ D thì x + T ∈ D và f(x+T) = f(x)",
                            "∀x ∈ D thì f(x) = f(x+1)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Hàm số chẵn thỏa mãn f(x) = f(-x), tức là đối xứng qua trục tung"
                    },
                    {
                        "id": 2,
                        "question": "Tập giá trị của hàm số y = arcsin(x) là:",
                        "options": [
                            "[-π/2; π/2]",
                            "[0; π]",
                            "(-∞; ∞)",
                            "[-1; 1]"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Hàm arcsin có tập giá trị là [-π/2; π/2]"
                    },
                    {
                        "id": 3,
                        "question": "Khi x → 0, biểu thức nào sau đây là vô cùng bé tương đương với sin(x)?",
                        "options": [
                            "x",
                            "x²",
                            "x/2",
                            "2x"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Khi x → 0: sin(x) ∼ x"
                    },
                    {
                        "id": 4,
                        "question": "Tiêu chuẩn nào sau đây được sử dụng để chứng minh dãy số có giới hạn hữu hạn?",
                        "options": [
                            "Tiêu chuẩn đơn điệu bị chặn",
                            "Tiêu chuẩn Abel",
                            "Tiêu chuẩn Dirichlet",
                            "Tiêu chuẩn tích phân"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Dãy số tăng bị chặn trên hoặc giảm bị chặn dưới thì có giới hạn hữu hạn"
                    },
                    {
                        "id": 5,
                        "question": "Khai triển Maclaurin của e^x đến bậc n là:",
                        "options": [
                            "1 + x + x²/2! + x³/3! + ... + x^n/n! + o(x^n)",
                            "1 + x + x² + x³ + ... + x^n + o(x^n)",
                            "x - x³/3! + x⁵/5! - ... + o(x^n)",
                            "1 - x²/2! + x⁴/4! - ... + o(x^n)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Khai triển Maclaurin của e^x có hệ số là 1/n!"
                    },
                    {
                        "id": 6,
                        "question": "Hàm số f(x) = (1+x)^α - 1 tương đương với biểu thức nào khi x → 0?",
                        "options": [
                            "αx",
                            "x",
                            "α",
                            "x²"
                        ],
                        "correctAnswer": 0,
                        "explanation": "(1+x)^α - 1 ∼ αx khi x → 0"
                    },
                    {
                        "id": 7,
                        "question": "Tập xác định của hàm số y = log_a(x) với 0 < a ≠ 1 là:",
                        "options": [
                            "(0; +∞)",
                            "ℝ",
                            "[-1; 1]",
                            "[0; +∞)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Hàm logarit chỉ xác định với x > 0"
                    },
                    {
                        "id": 8,
                        "question": "Trong tiêu chuẩn kẹp cho giới hạn dãy số, nếu x_n ≤ y_n ≤ z_n và lim x_n = lim z_n = L thì:",
                        "options": [
                            "lim y_n = L",
                            "lim y_n = 0",
                            "lim y_n không tồn tại",
                            "lim y_n = 2L"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Tiêu chuẩn kẹp: dãy ở giữa có cùng giới hạn với hai dãy kẹp"
                    },
                    {
                        "id": 9,
                        "question": "Hàm số f(x) liên tục tại x₀ khi và chỉ khi:",
                        "options": [
                            "f(x) xác định tại x₀ và lim(x→x₀) f(x) = f(x₀)",
                            "f(x) có đạo hàm tại x₀",
                            "f(x) tăng tại x₀",
                            "f(x) là hàm số chẵn"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Định nghĩa hàm liên tục: giới hạn tại điểm bằng giá trị hàm số"
                    },
                    {
                        "id": 10,
                        "question": "Biểu thức 1 - cos(x) tương đương với biểu thức nào khi x → 0?",
                        "options": [
                            "x²/2",
                            "x",
                            "x³",
                            "1"
                        ],
                        "correctAnswer": 0,
                        "explanation": "1 - cos(x) ∼ x²/2 khi x → 0"
                    }
                ]
            },
            {
                "examId": 2,
                "examName": "ĐỀ SỐ 2 - ĐẠO HÀM VÀ VI PHÂN",
                "questions": [
                    {
                        "id": 11,
                        "question": "Đạo hàm của hàm số f(x) tại điểm x₀ được định nghĩa là giới hạn của:",
                        "options": [
                            "lim(Δx→0) [f(x₀+Δx) - f(x₀)]/Δx",
                            "lim(x→x₀) f(x)",
                            "f(x₀+h) - f(x₀)",
                            "f'(x₀) + f(x₀)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Định nghĩa đạo hàm theo giới hạn của tỉ số số gia"
                    },
                    {
                        "id": 12,
                        "question": "Nếu hàm số f(x) có đạo hàm tại x₀ thì:",
                        "options": [
                            "f(x) liên tục tại x₀",
                            "f(x) có cực trị tại x₀",
                            "f(x) là hàm chẵn",
                            "f(x) là hàm tuần hoàn"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Tính khả vi kéo theo tính liên tục"
                    },
                    {
                        "id": 13,
                        "question": "Đạo hàm của hàm hợp F = f∘u là:",
                        "options": [
                            "F'(x) = f'(u(x))·u'(x)",
                            "F'(x) = f'(x)·u'(x)",
                            "F'(x) = f'(u(x)) + u'(x)",
                            "F'(x) = f(u'(x))"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Công thức đạo hàm của hàm hợp"
                    },
                    {
                        "id": 14,
                        "question": "Vi phân của hàm số f(x) được tính bởi công thức:",
                        "options": [
                            "df(x) = f'(x)dx",
                            "df(x) = f(x)dx",
                            "df(x) = f'(x) + dx",
                            "df(x) = ∫f(x)dx"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Vi phân bậc nhất: df = f'(x)dx"
                    },
                    {
                        "id": 15,
                        "question": "Đạo hàm cấp n của hàm ln(x) là:",
                        "options": [
                            "(-1)^(n-1)·(n-1)!/x^n",
                            "1/x^n",
                            "(-1)^n/x^n",
                            "n!/x^n"
                        ],
                        "correctAnswer": 0,
                        "explanation": "(ln x)^(n) = (-1)^(n-1)·(n-1)!/x^n"
                    },
                    {
                        "id": 16,
                        "question": "Công thức Leibniz cho đạo hàm cấp n của tích hai hàm là:",
                        "options": [
                            "(u·v)^(n) = Σ(k=0 đến n) C_n^k·u^(n-k)·v^(k)",
                            "(u·v)^(n) = u^(n)·v^(n)",
                            "(u·v)^(n) = u^(n) + v^(n)",
                            "(u·v)^(n) = n·u·v"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Công thức Leibniz tương tự khai triển nhị thức Newton"
                    },
                    {
                        "id": 17,
                        "question": "Đạo hàm của hàm ngược y = f^(-1)(x) được tính theo công thức:",
                        "options": [
                            "f'(x₀) = 1/φ'(y₀)",
                            "f'(x₀) = φ'(y₀)",
                            "f'(x₀) = -φ'(y₀)",
                            "f'(x₀) = 0"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Đạo hàm hàm ngược bằng nghịch đảo đạo hàm hàm ban đầu"
                    },
                    {
                        "id": 18,
                        "question": "Ứng dụng vi phân để tính gần đúng, ta có công thức:",
                        "options": [
                            "f(x₀+Δx) ≈ f(x₀) + f'(x₀)Δx",
                            "f(x₀+Δx) ≈ f(x₀)·Δx",
                            "f(x₀+Δx) ≈ f'(x₀)",
                            "f(x₀+Δx) ≈ f(x₀) - f'(x₀)Δx"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Xấp xỉ tuyến tính sử dụng vi phân"
                    },
                    {
                        "id": 19,
                        "question": "Đạo hàm của hàm số a^x (a > 0, a ≠ 1) là:",
                        "options": [
                            "a^x·ln(a)",
                            "x·a^(x-1)",
                            "a^x",
                            "a^x/ln(a)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "(a^x)' = a^x·ln(a)"
                    },
                    {
                        "id": 20,
                        "question": "Vi phân cấp hai d²f(x) khi x là biến độc lập bằng:",
                        "options": [
                            "f''(x)dx²",
                            "f'(x)dx²",
                            "f''(x)dx + f'(x)d²x",
                            "2f'(x)dx"
                        ],
                        "correctAnswer": 0,
                        "explanation": "d²f = f''(x)dx² khi x là biến độc lập"
                    }
                ]
            }
        ]
    },
    subject3: {
        "quizMetadata": {
            "subject": "Đại số",
            "timeLimit": 90,
            "totalExams": 3
        },
        "exams": [
            {
                "examId": 1,
                "examName": "ĐỀ SỐ 1 - TẬP HỢP, ÁNH XẠ, SỐ PHỨC",
                "questions": [
                    {
                        "id": 1,
                        "question": "Phép hợp của hai tập hợp A và B được định nghĩa là:",
                        "options": [
                            "x ∈ A ∪ B ⇔ x ∈ A hoặc x ∈ B",
                            "x ∈ A ∪ B ⇔ x ∈ A và x ∈ B",
                            "x ∈ A ∪ B ⇔ x ∈ A nhưng x ∉ B",
                            "x ∈ A ∪ B ⇔ x ∉ A hoặc x ∉ B"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phép hợp lấy tất cả phần tử thuộc A hoặc B hoặc cả hai"
                    },
                    {
                        "id": 2,
                        "question": "Luật De Morgan cho phép giao là:",
                        "options": [
                            "A ∩ B = A̅ ∪ B̅",
                            "A ∪ B = A̅ ∩ B̅",
                            "A ∩ B = A ∪ B",
                            "A̅ ∩ B̅ = A ∪ B"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phần bù của giao bằng hợp của các phần bù"
                    },
                    {
                        "id": 3,
                        "question": "Ánh xạ f: X → Y là đơn ánh khi:",
                        "options": [
                            "f(x₁) = f(x₂) ⇒ x₁ = x₂",
                            "∀y ∈ Y, ∃x ∈ X để f(x) = y",
                            "f(x₁) ≠ f(x₂) ⇒ x₁ ≠ x₂",
                            "∃x ∈ X, ∀y ∈ Y: f(x) = y"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Đơn ánh: các phần tử khác nhau có ảnh khác nhau"
                    },
                    {
                        "id": 4,
                        "question": "Ánh xạ f: X → Y là toàn ánh khi:",
                        "options": [
                            "∀y ∈ Y, ∃x ∈ X để f(x) = y",
                            "f(x₁) = f(x₂) ⇒ x₁ = x₂",
                            "∀x ∈ Y, ∃y ∈ X để f(x) = y",
                            "f(x₁) ≠ f(x₂) với mọi x₁ ≠ x₂"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Toàn ánh: mọi phần tử Y đều có ít nhất một nghịch ảnh"
                    },
                    {
                        "id": 5,
                        "question": "Nhóm (G, ∘) phải thỏa mãn điều kiện nào sau đây?",
                        "options": [
                            "Có tính kết hợp, có phần tử trung hòa, mọi phần tử có nghịch đảo",
                            "Có tính giao hoán, có phần tử trung hòa",
                            "Có tính kết hợp và giao hoán",
                            "Có phần tử đơn vị và phần tử nghịch đảo"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Ba tính chất cơ bản của nhóm: kết hợp, trung hòa, nghịch đảo"
                    },
                    {
                        "id": 6,
                        "question": "Vành (R, +, ·) cần thỏa mãn điều kiện nào?",
                        "options": [
                            "(R, +) là nhóm Abel, nhân kết hợp, phân phối",
                            "(R, +) là nhóm, nhân giao hoán",
                            "(R, ·) là nhóm Abel, cộng kết hợp",
                            "(R, +, ·) đều là nhóm Abel"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Vành = nhóm Abel cộng + nhân kết hợp + phân phối"
                    },
                    {
                        "id": 7,
                        "question": "Cho số phức z₁ = a + bi và z₂ = c + di. Tích z₁ · z₂ bằng:",
                        "options": [
                            "(ac - bd) + (ad + bc)i",
                            "(ac + bd) + (ad - bc)i",
                            "(ac - bd) + (ad - bc)i",
                            "(ac + bd) + (ad + bc)i"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Khai triển (a+bi)(c+di) và nhớ i² = -1"
                    },
                    {
                        "id": 8,
                        "question": "Số phức liên hợp của z = a + bi là:",
                        "options": [
                            "z̅ = a - bi",
                            "z̅ = -a + bi",
                            "z̅ = -a - bi",
                            "z̅ = b - ai"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Số phức liên hợp: đổi dấu phần ảo"
                    },
                    {
                        "id": 9,
                        "question": "Với số phức z = r(cos φ + i sin φ), z^n bằng:",
                        "options": [
                            "r^n(cos(nφ) + i sin(nφ))",
                            "r^n(cos φ + i sin φ)",
                            "r(cos(nφ) + i sin(nφ))",
                            "nr(cos φ + i sin φ)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Công thức Moivre: lũy thừa modun và nhân góc"
                    },
                    {
                        "id": 10,
                        "question": "Tính chất nào sau đây đúng với số phức liên hợp?",
                        "options": [
                            "z · z̅ = |z|²",
                            "z + z̅ = 2Im(z)",
                            "z · z̅ = |z|",
                            "z - z̅ = 2Re(z)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "z · z̅ = (a+bi)(a-bi) = a² + b² = |z|²"
                    }
                ]
            },
            {
                "examId": 2,
                "examName": "ĐỀ SỐ 2 - MA TRẬN VÀ ĐỊNH THỨC",
                "questions": [
                    {
                        "id": 11,
                        "question": "Ma trận A kích thước m×n là ma trận vuông khi:",
                        "options": [
                            "m = n",
                            "m > n",
                            "m < n",
                            "m + n = 0"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Ma trận vuông có số hàng bằng số cột"
                    },
                    {
                        "id": 12,
                        "question": "Ma trận A là ma trận đối xứng khi:",
                        "options": [
                            "A^T = A",
                            "A^T = -A",
                            "A^T = A^(-1)",
                            "A = -A"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Ma trận đối xứng: chuyển vị bằng chính nó"
                    },
                    {
                        "id": 13,
                        "question": "Điều kiện để nhân được hai ma trận A(m×n) và B(p×q) là:",
                        "options": [
                            "n = p",
                            "m = q",
                            "m = p",
                            "n = q"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Số cột của A phải bằng số hàng của B"
                    },
                    {
                        "id": 14,
                        "question": "Định thức cấp 2 được tính theo công thức:",
                        "options": [
                            "|A| = a₁₁a₂₂ - a₁₂a₂₁",
                            "|A| = a₁₁a₂₂ + a₁₂a₂₁",
                            "|A| = a₁₁a₂₁ - a₁₂a₂₂",
                            "|A| = a₁₁ + a₂₂ - a₁₂ - a₂₁"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Quy tắc chéo cho ma trận 2×2"
                    },
                    {
                        "id": 15,
                        "question": "Tính chất nào sau đây đúng với định thức?",
                        "options": [
                            "det(A) = det(A^T)",
                            "det(A + B) = det(A) + det(B)",
                            "det(A - B) = det(A) - det(B)",
                            "det(kA) = k·det(A)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Định thức không đổi khi chuyển vị"
                    },
                    {
                        "id": 16,
                        "question": "Nếu đổi chỗ hai hàng của ma trận thì định thức:",
                        "options": [
                            "Đổi dấu",
                            "Không đổi",
                            "Bằng 0",
                            "Tăng gấp đôi"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Hoán vị hai hàng/cột làm định thức đổi dấu"
                    },
                    {
                        "id": 17,
                        "question": "Định thức của ma trận tam giác bằng:",
                        "options": [
                            "Tích các phần tử trên đường chéo chính",
                            "Tổng các phần tử trên đường chéo chính",
                            "Tích tất cả các phần tử",
                            "Tổng tất cả các phần tử"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Định thức tam giác = tích đường chéo"
                    },
                    {
                        "id": 18,
                        "question": "Công thức det(kA) với A là ma trận vuông cấp n:",
                        "options": [
                            "det(kA) = k^n · det(A)",
                            "det(kA) = k · det(A)",
                            "det(kA) = k^2 · det(A)",
                            "det(kA) = nk · det(A)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nhân vô hướng: k mũ số chiều"
                    },
                    {
                        "id": 19,
                        "question": "Hạng của ma trận A là:",
                        "options": [
                            "Cấp cao nhất của định thức con khác không",
                            "Số hàng của ma trận",
                            "Số cột của ma trận",
                            "Số phần tử khác không"
                        ],
                        "correctAnswer": 0,
                        "explanation": "rank(A) = cấp max của định thức con ≠ 0"
                    },
                    {
                        "id": 20,
                        "question": "Điều kiện để ma trận A vuông cấp n khả nghịch là:",
                        "options": [
                            "det(A) ≠ 0",
                            "det(A) = 0",
                            "A = A^T",
                            "A = -A"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Ma trận khả nghịch khi định thức khác 0"
                    }
                ]
            },
            {
                "examId": 3,
                "examName": "ĐỀ SỐ 3 - MA TRẬN NGHỊCH ĐẢO VÀ HỆ PHƯƠNG TRÌNH",
                "questions": [
                    {
                        "id": 21,
                        "question": "Ma trận nghịch đảo A^(-1) thỏa mãn điều kiện:",
                        "options": [
                            "A · A^(-1) = A^(-1) · A = I",
                            "A · A^(-1) = 0",
                            "A + A^(-1) = I",
                            "A - A^(-1) = I"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Định nghĩa ma trận nghịch đảo"
                    },
                    {
                        "id": 22,
                        "question": "Nếu A khả nghịch thì (A^m)^(-1) bằng:",
                        "options": [
                            "(A^(-1))^m",
                            "m · A^(-1)",
                            "A^(-m)",
                            "mA^(-1)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nghịch đảo của lũy thừa = lũy thừa của nghịch đảo"
                    },
                    {
                        "id": 23,
                        "question": "Nếu A, B khả nghịch thì (AB)^(-1) bằng:",
                        "options": [
                            "B^(-1) · A^(-1)",
                            "A^(-1) · B^(-1)",
                            "(A^(-1))(B^(-1))",
                            "A^(-1) + B^(-1)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nghịch đảo tích = tích nghịch đảo theo thứ tự ngược"
                    },
                    {
                        "id": 24,
                        "question": "Công thức tính ma trận nghịch đảo bằng phần phụ đại số:",
                        "options": [
                            "A^(-1) = (1/det(A)) · C^T",
                            "A^(-1) = det(A) · C^T",
                            "A^(-1) = (1/det(A)) · C",
                            "A^(-1) = C^T/A"
                        ],
                        "correctAnswer": 0,
                        "explanation": "A nghịch đảo = 1/định thức × chuyển vị ma trận phụ hợp"
                    },
                    {
                        "id": 25,
                        "question": "Hệ phương trình Cramer là hệ thỏa mãn:",
                        "options": [
                            "m = n và det(A) ≠ 0",
                            "m = n và det(A) = 0",
                            "m > n",
                            "m < n"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Cramer: vuông và định thức khác 0"
                    },
                    {
                        "id": 26,
                        "question": "Trong định lý Cramer, nghiệm x_j được tính bởi:",
                        "options": [
                            "x_j = det(A_j)/det(A)",
                            "x_j = det(A)/det(A_j)",
                            "x_j = det(A_j) · det(A)",
                            "x_j = det(A) - det(A_j)"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Công thức Cramer: det thay cột j / det gốc"
                    },
                    {
                        "id": 27,
                        "question": "Hệ thuần nhất Ax = 0 luôn có nghiệm:",
                        "options": [
                            "x = [0, 0, ..., 0]^T",
                            "x = [1, 1, ..., 1]^T",
                            "x = A^(-1)",
                            "Không có nghiệm"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nghiệm tầm thường của hệ thuần nhất"
                    },
                    {
                        "id": 28,
                        "question": "Hệ thuần nhất có nghiệm không tầm thường khi:",
                        "options": [
                            "det(A) = 0",
                            "det(A) ≠ 0",
                            "det(A) > 0",
                            "det(A) < 0"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nghiệm không tầm thường khi ma trận suy biến"
                    },
                    {
                        "id": 29,
                        "question": "Theo định lý Kronecker-Capelli, hệ có nghiệm khi:",
                        "options": [
                            "rank(A) = rank(Ā)",
                            "rank(A) < rank(Ā)",
                            "rank(A) > rank(Ā)",
                            "rank(A) + rank(Ā) = n"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Điều kiện có nghiệm: hạng ma trận hệ số = hạng ma trận mở rộng"
                    },
                    {
                        "id": 30,
                        "question": "Nếu rank(A) = rank(Ā) < n thì hệ có:",
                        "options": [
                            "Vô số nghiệm",
                            "Nghiệm duy nhất",
                            "Vô nghiệm",
                            "Hai nghiệm"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Hạng nhỏ hơn số ẩn → vô số nghiệm"
                    }
                ]
            }
        ]
    },
    subject4: {
        "quizMetadata": {
            "subject": "Kỹ năng mềm và Tinh thần khởi nghiệp",
            "timeLimit": 45,
            "totalExams": 7
        },
        "exams": [
            {
                "examId": 1,
                "examName": "CHƯƠNG 1: KỸ NĂNG HỌC TẬP Ở ĐẠI HỌC",
                "questions": [
                    {
                        "id": 1,
                        "question": "ASK là mô hình yêu cầu về thái độ, kỹ năng, kiến thức của ngành nghề mình đang theo đuổi, trong đó 'kiến thức' được hiểu là:",
                        "options": [
                            "Năng lực tư duy, sự hiểu biết mà cá nhân có được sau khi trải qua quá trình giáo dục - đào tạo, đọc hiểu, phân tích và ứng dụng",
                            "Cách cá nhân tiếp nhận và phản ứng lại với thực tế, đồng thời thể hiện thái độ và động cơ với công việc",
                            "Khả năng biến kiến thức có được thành hành động cụ thể, hành vi thực tế trong quá trình làm việc của cá nhân",
                            "Khả năng bắt chước, vận dụng sáng tạo trong công việc và năng lực phân tích, tổng hợp và đánh giá"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Trong mô hình ASK, kiến thức là năng lực tư duy, sự hiểu biết mà cá nhân có được sau khi trải qua quá trình giáo dục - đào tạo, đọc hiểu, phân tích và ứng dụng."
                    },
                    {
                        "id": 2,
                        "question": "'Lập kế hoạch học tập chi tiết cũng như kế hoạch đọc các tài liệu cho môn học và phát triển bản thân' là những việc sinh viên cần làm trong giai đoạn nào của phương pháp học tập POWER?",
                        "options": [
                            "Tổ chức",
                            "Chuẩn bị sửa soạn",
                            "Làm việc",
                            "Đánh giá"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Giai đoạn 'Organize' (Tổ chức) trong phương pháp POWER là khi sinh viên lập kế hoạch học tập chi tiết và kế hoạch đọc các tài liệu."
                    },
                    {
                        "id": 3,
                        "question": "Theo phương pháp ghi chép Cornell, phần trên của trang giấy dùng để làm gì?",
                        "options": [
                            "Ghi lại những ý chính, phần cần chú ý, mở rộng chủ đề của bài học",
                            "Viết phần tóm tắt",
                            "Ghi mô tả chi tiết và những phần được giải thích đầy đủ",
                            "Ghi chép chi tiết trong khi đọc, phần này có thể là sơ đồ, biểu đồ và ngày tháng"
                        ],
                        "correctAnswer": 3,
                        "explanation": "Theo phương pháp Cornell, phần trên cùng của trang giấy dùng để ghi tên bài học, ngày tháng và các thông tin nhận dạng cơ bản."
                    },
                    {
                        "id": 4,
                        "question": "Nguyên tắc quan trọng nhất khi học tập nhóm là gì?",
                        "options": [
                            "Hiệu quả",
                            "Tôn trọng",
                            "Đúng giờ",
                            "Hợp tác"
                        ],
                        "correctAnswer": 1,
                        "explanation": "Nguyên tắc quan trọng nhất khi học tập nhóm là tôn trọng các thành viên trong nhóm."
                    }
                ]
            },
            {
                "examId": 2,
                "examName": "CHƯƠNG 2: KHÁI QUÁT CHUNG VỀ GIAO TIẾP",
                "questions": [
                    {
                        "id": 5,
                        "question": "Hình thức giao tiếp có ưu điểm thông tin truyền - nhận nhanh chóng, có độ chính xác, tin cậy cao là hình thức giao tiếp nào?",
                        "options": [
                            "Giao tiếp trực tiếp",
                            "Giao tiếp gián tiếp",
                            "Giao tiếp cá nhân với cá nhân",
                            "Giao tiếp nhóm với nhóm"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Giao tiếp trực tiếp có ưu điểm là thông tin truyền - nhận nhanh chóng, có độ chính xác, tin cậy cao."
                    },
                    {
                        "id": 6,
                        "question": "Giao tiếp gián tiếp có ưu điểm gì?",
                        "options": [
                            "Không bị giới hạn bởi không gian, thời gian",
                            "Có thể trao đổi thông tin một cách linh hoạt",
                            "Thông tin chính xác tuyệt đối",
                            "Quá trình trao đổi thông tin diễn ra một cách nhanh"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Ưu điểm chính của giao tiếp gián tiếp là không bị giới hạn bởi không gian và thời gian."
                    },
                    {
                        "id": 7,
                        "question": "Nhận định nào dưới đây chưa đúng?",
                        "options": [
                            "Mối quan hệ tốt đẹp trong môi trường làm việc giúp mọi thành viên đều đạt được sự cân bằng trong công việc và cuộc sống",
                            "Xây dựng mối quan hệ tốt đẹp trong môi trường làm việc sẽ giúp các thành viên giảm stress do áp lực công việc",
                            "Các thành viên trong doanh nghiệp có mối quan hệ tốt đẹp với nhau sẽ góp phần thúc đẩy sự phát triển của doanh nghiệp",
                            "Các thành viên trong doanh nghiệp có mối quan hệ tốt đẹp với nhau sẽ tạo được sự đồng thuận, hứng khởi trong công việc"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phương án A chưa đúng vì mối quan hệ tốt đẹp không tự động đảm bảo sự cân bằng hoàn hảo giữa công việc và cuộc sống cho mọi người."
                    },
                    {
                        "id": 8,
                        "question": "Tìm phương án sai. Các đồng nghiệp nên xây dựng môi trường làm việc thân thiện, hiệu quả bằng cách:",
                        "options": [
                            "Phát huy tối đa tính cách và sở thích cá nhân",
                            "Chia sẻ kinh nghiệm, bài học của bản thân",
                            "Hỗ trợ nhau thực hiện công việc được giao",
                            "Phát triển các kỹ năng làm việc theo nhóm"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phát huy tối đa tính cách và sở thích cá nhân có thể gây xung đột và không phải lúc nào cũng phù hợp với môi trường làm việc tập thể."
                    },
                    {
                        "id": 9,
                        "question": "Chị Hằng được bổ nhiệm quản lý một dự án nhỏ. Chị luôn lắng nghe ý kiến của các thành viên nên được các thành viên quý mến. Chị Hằng có phong cách lãnh đạo nào?",
                        "options": [
                            "Phong cách dân chủ",
                            "Phong cách độc đoán",
                            "Phong cách tự do",
                            "Cả ba phong cách trên"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Việc luôn lắng nghe ý kiến của các thành viên thể hiện phong cách lãnh đạo dân chủ."
                    },
                    {
                        "id": 10,
                        "question": "Người có phong cách giao tiếp Dân chủ cần lưu ý điều gì?",
                        "options": [
                            "Không để xóa nhoà ranh giới các mối quan hệ",
                            "Không phán xét người khác từ cái bên ngoài",
                            "Không dồn ép đối tượng",
                            "Không phủ nhận ý kiến người khác"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Người có phong cách dân chủ cần lưu ý không để xóa nhòa ranh giới các mối quan hệ để giữ được sự chuyên nghiệp."
                    },
                    {
                        "id": 11,
                        "question": "Nguyên nhân chủ quan dẫn đến giao tiếp không hiệu quả là:",
                        "options": [
                            "Không làm chủ được cảm xúc",
                            "Đối tượng không thiện chí",
                            "Bất đồng ngôn ngữ",
                            "Môi trường không thuận lợi"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Không làm chủ được cảm xúc là nguyên nhân chủ quan dẫn đến giao tiếp không hiệu quả."
                    }
                ]
            },
            {
                "examId": 3,
                "examName": "CHƯƠNG 3: KỸ NĂNG GIAO TIẾP BẰNG NGÔN NGỮ NÓI",
                "questions": [
                    {
                        "id": 12,
                        "question": "Để khởi đầu thuận lợi ở môi trường làm việc mới, điều quan trọng nhất là:",
                        "options": [
                            "Biết rõ những người cùng làm mong muốn gì ở mình",
                            "Thực hiện những công việc đồng nghiệp yêu cầu",
                            "Cố gắng tạo dựng một quan hệ tin cậy với cấp trên",
                            "Biết những người đã làm lâu năm ở đó cảm nhận về môi trường làm việc này như thế nào"
                        ],
                        "correctAnswer": 2,
                        "explanation": "Tạo dựng quan hệ tin cậy với cấp trên là điều quan trọng nhất để khởi đầu thuận lợi ở môi trường làm việc mới."
                    },
                    {
                        "id": 13,
                        "question": "Người bắt tay chủ động để lòng bàn tay hướng xuống hoặc lắc thật mạnh thể hiện điều gì?",
                        "options": [
                            "Thể hiện quyền lực, có xu hướng chi phối người khác",
                            "Thể hiện sự coi trọng, bình đẳng trong giao tiếp",
                            "Thể hiện sự khiêm nhường",
                            "Thể hiện sự rụt rè, không tự tin trước người đối diện"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Kiểu bắt tay này thể hiện quyền lực và xu hướng chi phối người khác."
                    },
                    {
                        "id": 14,
                        "question": "'Chăm chú nghe nhưng không hiểu nội dung, thỉnh thoảng có những cử chỉ đi ngược lại với nội dung người nói' là biểu hiện của cấp độ nghe nào?",
                        "options": [
                            "Nghe giả vờ",
                            "Không nghe",
                            "Nghe có chọn lọc",
                            "Nghe chăm chú"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Đây là đặc điểm của cấp độ 'Nghe giả vờ' - chăm chú nghe nhưng không hiểu nội dung."
                    },
                    {
                        "id": 15,
                        "question": "Theo D. Toring Ton (1994), có bao nhiêu phần trăm thông tin truyền đạt không được chú ý, bị hiểu sai và bị lãng quên nhanh chóng?",
                        "options": [
                            "75%",
                            "45%",
                            "55%",
                            "85%"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Theo D. Toring Ton (1994), 75% thông tin truyền đạt không được chú ý, bị hiểu sai và bị lãng quên nhanh chóng."
                    },
                    {
                        "id": 16,
                        "question": "Đáp án nào sau đây thể hiện chính xác nhất quy trình lắng nghe trong giao tiếp?",
                        "options": [
                            "Chuẩn bị - Tập trung - Tham dự - Hiểu - Ghi nhớ - Hồi đáp",
                            "Chuẩn bị - Tập trung - Hiểu - Phát triển - Ghi nhớ - Hồi đáp",
                            "Tập trung - Quan sát - Hiểu - Hồi đáp - Tham dự - Phát triển",
                            "Tập trung - Tham dự - Hiểu - Ghi nhớ - Hồi đáp - Phát triển"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Quy trình lắng nghe gồm 6 giai đoạn: Chuẩn bị - Tập trung - Tham dự - Hiểu - Ghi nhớ - Hồi đáp."
                    },
                    {
                        "id": 17,
                        "question": "Khi được lắng nghe, người nói sẽ:",
                        "options": [
                            "Thoả mãn nhu cầu được chia sẻ",
                            "Thu thập được nhiều thông tin",
                            "Chiếm được thiện cảm của đối tác",
                            "Hiểu vấn đề một cách tốt nhất"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Khi được lắng nghe, người nói sẽ thoả mãn nhu cầu được chia sẻ và được tôn trọng."
                    },
                    {
                        "id": 18,
                        "question": "Đối với người đưa phản hồi thì phản hồi có ý nghĩa:",
                        "options": [
                            "Thay đổi cách tiếp nhận và áp dụng thông tin",
                            "Đánh giá, thay đổi cách phản hồi của mình",
                            "Nhận ra điểm mạnh và điểm yếu của mình",
                            "Điều chỉnh thái độ, hành vi của mình"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Đối với người đưa phản hồi, phản hồi giúp thay đổi cách tiếp nhận và áp dụng thông tin."
                    },
                    {
                        "id": 19,
                        "question": "Có những nguyên tắc đưa phản hồi nào?",
                        "options": [
                            "Đưa điểm mạnh trước và điểm cần cải thiện sau, khách quan, cụ thể, xây dựng, chọn thời điểm thích hợp",
                            "Chọn thời điểm phù hợp, không áp đặt, không phán xét, nói chung chung, nói điểm mạnh trước và điểm cần cải thiện sau",
                            "Khách quan, xây dựng, nói điểm mạnh trước và điểm cần cải thiện sau, tôn trọng, chân thành",
                            "Nói điểm cần cải thiện trước và điểm cần cải thiện sau, chọn thời điểm thích hợp, không áp đặt, cụ thể, nói chung chung"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nguyên tắc đưa phản hồi gồm: đưa điểm mạnh trước, khách quan, cụ thể, xây dựng, chọn thời điểm thích hợp."
                    },
                    {
                        "id": 20,
                        "question": "Yếu tố nào sau đây không thuộc phần chuẩn bị nội dung cuộc gọi?",
                        "options": [
                            "Hình dung cảm xúc của người nói chuyện",
                            "Chuẩn bị giấy bút ghi lại các thông tin trong khi trao đổi",
                            "Chuẩn bị trước những câu trả lời",
                            "Viết nội dung cuộc gọi ra giấy"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Hình dung cảm xúc của người nói chuyện không phải là phần chuẩn bị nội dung cuộc gọi mà là kỹ năng trong quá trình giao tiếp."
                    }
                ]
            },
            {
                "examId": 4,
                "examName": "CHƯƠNG 4: KỸ NĂNG GIAO TIẾP BẰNG NGÔN NGỮ VIẾT",
                "questions": [
                    {
                        "id": 21,
                        "question": "Giao tiếp bằng văn bản phù hợp hơn giao tiếp trực tiếp trong trường hợp nào?",
                        "options": [
                            "Khi không thể nói chuyện trực tiếp với ai đó và cần trình bày những ý tưởng phức tạp",
                            "Khi bạn muốn nhanh chóng nhận được ý kiến trả lời về một vấn đề",
                            "Khi bạn muốn trình bày một ý tưởng phức tạp",
                            "Khi bạn muốn đưa ra nhiều câu hỏi"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Giao tiếp bằng văn bản phù hợp khi không thể nói chuyện trực tiếp và cần trình bày những ý tưởng phức tạp."
                    },
                    {
                        "id": 22,
                        "question": "Ưu điểm của việc sử dụng hình thức giao tiếp bằng thư điện tử là:",
                        "options": [
                            "Tiết kiệm thời gian của cả người gửi và người nhận",
                            "Thể hiện sự tôn trọng đối tượng giao tiếp",
                            "Truyền đạt thông tin chính xác",
                            "Có tính thuyết phục cao"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Ưu điểm chính của email là tiết kiệm thời gian của cả người gửi và người nhận."
                    },
                    {
                        "id": 23,
                        "question": "Người soạn email nên nhập địa chỉ email của người nhận vào thời điểm nào?",
                        "options": [
                            "Sau khi email đã được soạn hoàn chỉnh",
                            "Ngay khi bắt đầu viết email",
                            "Có thể nhập email người nhận bất cứ khi nào trong khi soạn email",
                            "Khi chỉnh sửa nội dung email"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nên nhập địa chỉ email người nhận sau khi đã soạn và kiểm tra xong toàn bộ nội dung để tránh gửi nhầm hoặc gửi email chưa hoàn chỉnh."
                    },
                    {
                        "id": 24,
                        "question": "Tiêu chí để đánh giá báo cáo là:",
                        "options": [
                            "Báo cáo cần đảm bảo về nội dung, hình thức và tiến độ, thời gian",
                            "Báo cáo cần đảm bảo thông tin chính xác",
                            "Báo cáo cần trình bày đúng theo tiêu chuẩn chung báo cáo",
                            "Báo cáo chỉ cần quan tâm đến kết quả hoạt động của một cá nhân, cơ quan, tổ chức trong một thời gian nhất định không cần quan tâm đến quá trình đạt được kết quả đó"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Tiêu chí đánh giá báo cáo tốt bao gồm đáp ứng cả 3 yêu cầu về nội dung, hình thức và tiến độ, thời gian."
                    },
                    {
                        "id": 25,
                        "question": "Đáp án nào dưới đây không đề cập yêu cầu về nội dung của báo cáo?",
                        "options": [
                            "Báo cáo được trình bày sạch sẽ, không có lỗi chính tả hay lỗi kĩ thuật máy tính",
                            "Chỉ ra những bài học kinh nghiệm xác đáng, không chung chung",
                            "Thông tin đưa ra phải đầy đủ, trung thực, khách quan và chính xác",
                            "Xây dựng phương hướng, nhiệm vụ cho thời gian tới một cách mạch lạc và có căn cứ, phù hợp với điều kiện thời gian và nguồn lực thực tế, có tính khả thi cao"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phương án A đề cập đến yêu cầu về hình thức, không phải về nội dung của báo cáo."
                    },
                    {
                        "id": 26,
                        "question": "'Tác giả phải trả lời câu hỏi: Phát hiện chính là gì? Những phát hiện này có nghĩa gì?' thuộc nội dung nào trong bài báo khoa học?",
                        "options": [
                            "Thảo luận",
                            "Kết quả",
                            "Tóm tắt",
                            "Giới thiệu"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Câu hỏi này thuộc phần Thảo luận trong bài báo khoa học, nơi tác giả giải thích ý nghĩa của các phát hiện."
                    },
                    {
                        "id": 27,
                        "question": "Đề tài nghiên cứu khoa học khắc phục được hạn chế của các đề tài đã nghiên cứu trước. Đề tài đạt tính mới nào?",
                        "options": [
                            "Mới về nội dung",
                            "Mới về hình thức",
                            "Mới về lĩnh vực",
                            "Mới về địa lý"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Khi đề tài khắc phục được hạn chế của các đề tài trước, đề tài đạt tính mới về nội dung."
                    },
                    {
                        "id": 28,
                        "question": "Nội dung của phần mở đầu trong nghiên cứu khoa học bao gồm:",
                        "options": [
                            "Lý do chọn đề tài, Mục đích nghiên cứu, Khách thể và đối tượng nghiên cứu, Giả thuyết khoa học, Nhiệm vụ nghiên cứu, Phạm vi nghiên cứu, Phương pháp nghiên cứu, Cấu trúc của đề tài",
                            "Tổng quan nghiên cứu, Mục tiêu nghiên cứu, Cơ sở lý luận, Phương pháp nghiên cứu, Giải pháp và kiến nghị",
                            "Lý do chọn đề tài, Tổng quan nghiên cứu, Mục tiêu nghiên cứu của đề tài, Kết quả nghiên cứu",
                            "Lý do chọn đề tài, Tổng quan nghiên cứu, Mục tiêu nghiên cứu, Cơ sở lý luận, Phương pháp nghiên cứu, Giải pháp và kiến nghị"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phần mở đầu trong nghiên cứu khoa học bao gồm đầy đủ các nội dung như lý do chọn đề tài, mục đích, đối tượng, phương pháp nghiên cứu, v.v."
                    }
                ]
            },
            {
                "examId": 5,
                "examName": "CHƯƠNG 5: GIỚI THIỆU VỀ THUYẾT TRÌNH",
                "questions": [
                    {
                        "id": 29,
                        "question": "Thu thập thông tin tư liệu cho bài thuyết trình là công việc cần thực hiện trong giai đoạn nào?",
                        "options": [
                            "Giai đoạn chuẩn bị thuyết trình",
                            "Giai đoạn tiến hành thuyết trình",
                            "Giai đoạn kết thúc thuyết trình",
                            "Giai đoạn chọn chủ đề cho bài thuyết trình"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Thu thập thông tin tư liệu là công việc thuộc giai đoạn chuẩn bị thuyết trình."
                    },
                    {
                        "id": 30,
                        "question": "Nhận định nào không chính xác khi nói về cách xây dựng đề cương cho bài thuyết trình?",
                        "options": [
                            "Một bài thuyết trình có đủ cả ba phần mở đầu, thân bài, kết thúc là đủ để đảm bảo thành công",
                            "Để bài thuyết trình thành công, cần phân bổ thời gian thuyết trình hợp lý cho cả ba phần mở đầu, thân bài, kết thúc",
                            "Đảm bảo thời lượng đủ cho việc truyền tải thông tin ở cả 3 phần mở đầu, thân bài, kết thúc là điều cần thiết cho thành công của bài thuyết trình",
                            "Một bài thuyết trình thành công thì cần thiết phải có đủ cả ba phần mở đầu, thân bài, kết thúc"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Chỉ có đủ ba phần chưa đủ để đảm bảo thành công, cần phải có chất lượng nội dung và cách trình bày phù hợp."
                    },
                    {
                        "id": 31,
                        "question": "Khi người thuyết trình giới thiệu ngay vào chủ đề và nội dung bài thuyết trình, đây là cách dẫn nhập:",
                        "options": [
                            "Trực tiếp",
                            "Trích dẫn",
                            "Đặt câu hỏi",
                            "Tương phản"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Cách dẫn nhập trực tiếp là nêu thẳng chủ đề, mục đích bài thuyết trình ngay từ đầu."
                    },
                    {
                        "id": 32,
                        "question": "Mở đầu bài thuyết trình, người thuyết trình bắt đầu bằng việc nhấn mạnh một mâu thuẫn nào đó rồi dẫn dắt người nghe đến với chủ đề của bài thuyết trình, đây là cách mở đầu:",
                        "options": [
                            "Tương phản",
                            "Trực tiếp",
                            "Gây chấn động",
                            "Trích dẫn"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Cách mở đầu tương phản là nhấn mạnh một mâu thuẫn để gây sự chú ý và dẫn dắt đến chủ đề."
                    }
                ]
            },
            {
                "examId": 6,
                "examName": "CHƯƠNG 6: CÁC KỸ NĂNG TRONG THUYẾT TRÌNH",
                "questions": [
                    {
                        "id": 33,
                        "question": "Nhận định nào đúng khi nói về việc sử dụng phi ngôn ngữ trong thuyết trình?",
                        "options": [
                            "Người thuyết trình không thể thành công nếu không vận dụng tốt các phương thức giao tiếp phi ngôn ngữ",
                            "Chỉ cần sử dụng phương thức giao tiếp bằng ngôn ngữ chứ không sử dụng phương thức giao tiếp phi ngôn ngữ",
                            "Không cần chú trọng đến phương thức giao tiếp phi ngôn ngữ trong khi thuyết trình",
                            "Không chú ý đến phương thức giao tiếp phi ngôn ngữ thì người thuyết trình mới có thể thành công"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phi ngôn ngữ chiếm 93% sức mạnh thông điệp, do đó người thuyết trình cần vận dụng tốt các phương thức này."
                    },
                    {
                        "id": 34,
                        "question": "Khi sử dụng ngôn ngữ nói trong buổi thuyết trình, chúng ta cần lưu ý điều gì?",
                        "options": [
                            "Phát âm rõ ràng mạch lạc để khán giả tiếp nhận thông tin một cách dễ dàng",
                            "Nói nhanh để đảm bảo thời gian",
                            "Thường xuyên lặp lại một từ nhiều lần để khán giả hiểu vấn đề",
                            "Giữ âm lượng to trong suốt bài thuyết trình để khán giả chú ý"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phát âm rõ ràng, mạch lạc giúp khán giả dễ dàng tiếp nhận và hiểu thông tin."
                    },
                    {
                        "id": 35,
                        "question": "Mục đích của trả lời câu hỏi trong thuyết trình:",
                        "options": [
                            "Giúp người nghe hiểu sâu sắc hơn vấn đề đang trình bày",
                            "Giúp khơi gợi sự chú ý và tham gia của khán giả",
                            "Giúp tạo bầu không khí sôi nổi trong thuyết trình",
                            "Giúp kiểm soát thời gian trong thuyết trình"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Mục đích chính của việc trả lời câu hỏi là giúp người nghe hiểu sâu sắc hơn vấn đề đang được trình bày."
                    },
                    {
                        "id": 36,
                        "question": "Tìm phương án đúng. Các cấp độ câu hỏi của Bloom năm 1956:",
                        "options": [
                            "Nhắc lại, hiểu, áp dụng, phân tích, tổng hợp, đánh giá",
                            "Nhắc lại, hiểu, ghi nhớ, phân tích, tổng hợp, đánh giá",
                            "Nhắc lại, hiểu, áp dụng, phân tích, tổng hợp, sáng tạo",
                            "Nhắc lại, ghi nhớ, vận dụng, phân tích, tổng hợp sáng tạo"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Các cấp độ câu hỏi của Bloom năm 1956 gồm: Nhắc lại, hiểu, áp dụng, phân tích, tổng hợp, đánh giá."
                    },
                    {
                        "id": 37,
                        "question": "Theo thang nhận thức của Bloom, câu hỏi 'Mục đích và mục tiêu khác nhau như thế nào?' thuộc cấp độ nào?",
                        "options": [
                            "Hiểu",
                            "Tổng hợp",
                            "Phân tích",
                            "Đánh giá"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Câu hỏi về sự khác biệt giữa các khái niệm thuộc cấp độ 'Hiểu' trong thang Bloom."
                    },
                    {
                        "id": 38,
                        "question": "Nguyên nhân khách quan dẫn đến việc kiểm soát tâm lý chưa tốt trong thuyết trình là:",
                        "options": [
                            "Các phương tiện hỗ trợ gặp vấn đề",
                            "Chưa chuẩn bị tốt cho bài thuyết trình",
                            "Thể chất và tinh thần không tốt",
                            "Cảm xúc tiêu cực"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Các phương tiện hỗ trợ gặp vấn đề là nguyên nhân khách quan, các nguyên nhân khác là chủ quan."
                    },
                    {
                        "id": 39,
                        "question": "Nhận định nào sau đây chưa đúng khi nói về neo cảm xúc?",
                        "options": [
                            "Bạn không cần phải hoàn tất quá trình chuyển đổi dáng vẻ điệu bộ và các giác quan nội tại khi bạn thực hiện neo cảm xúc",
                            "Chính bạn tạo ra cảm xúc của mình và bạn có khả năng sở hữu bất kì trạng thái cảm xúc nào bạn muốn",
                            "Có thể neo cảm xúc bạn đã có trong quá khứ vào những sự việc xảy ra xung quanh bạn",
                            "Neo cảm xúc là một trong những cách thức để đạt được trạng thái cảm xúc tích cực"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phương án A chưa đúng vì khi thực hiện neo cảm xúc, bạn cần hoàn tất quá trình chuyển đổi để neo có hiệu quả."
                    },
                    {
                        "id": 40,
                        "question": "Đối với người nghe, việc sử dụng các phương tiện hỗ trợ trong thuyết trình có vai trò như thế nào?",
                        "options": [
                            "Thu hút sự chú ý của người nghe",
                            "Làm rõ sự so sánh, tạo ra sự liên kết cần thiết",
                            "Đơn giản hóa các ý tưởng phức tạp",
                            "Dễ dàng nhớ các ý chính đã trình bày trước đó"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Đối với người nghe, phương tiện hỗ trợ giúp thu hút sự chú ý và giúp họ hình dung, hiểu được nội dung dễ dàng hơn."
                    },
                    {
                        "id": 41,
                        "question": "Khi sử dụng các thiết bị hỗ trợ trong thuyết trình, người thuyết trình nên:",
                        "options": [
                            "Chọn thiết bị phù hợp với mục đích, nội dung, khán giả",
                            "Sử dụng nhiều hiệu ứng khi thiết kế powerpoint",
                            "Sử dụng nhiều hình ảnh hỗ trợ cho một nội dung",
                            "Giải thích cho khán giả tại sao lại dùng thiết bị này"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Người thuyết trình nên chọn thiết bị phù hợp với mục đích, nội dung và đối tượng khán giả."
                    },
                    {
                        "id": 42,
                        "question": "Mục đích của việc sử dụng biểu đồ, sơ đồ, đồ thị, hình vẽ, bảng biểu, hình ảnh, video clip trong các trang chiếu là gì?",
                        "options": [
                            "Để cho khán giả cảm nhận một cách trực quan các ý tưởng của người thuyết trình",
                            "Làm cho bài thuyết trình chuyên nghiệp hơn",
                            "Làm cho bài thuyết trình dài hơn",
                            "Không phải chuẩn bị nhiều nội dung vì đã thể hiện qua các sơ đồ, hình vẽ..."
                        ],
                        "correctAnswer": 0,
                        "explanation": "Mục đích chính là giúp khán giả cảm nhận trực quan các ý tưởng, giúp họ hiểu và ghi nhớ tốt hơn."
                    }
                ]
            },
            {
                "examId": 7,
                "examName": "CHƯƠNG 7: TINH THẦN KHỞI NGHIỆP",
                "questions": [
                    {
                        "id": 43,
                        "question": "'Tính kinh tế theo quy mô' được hiểu như thế nào?",
                        "options": [
                            "Chi phí giảm khi quy mô sản xuất tăng lên",
                            "Chi phí thay đổi tuỳ theo phương sai trong sản xuất",
                            "Chi phí không đổi trong một khoảng thời gian",
                            "Chi phí giảm bằng cách đầu tư vào những hoạt động liên quan đến sản phẩm chính"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Tính kinh tế theo quy mô là khi chi phí đơn vị giảm xuống khi quy mô sản xuất tăng lên."
                    },
                    {
                        "id": 44,
                        "question": "'Ý tưởng khởi nghiệp cung cấp sản phẩm, dịch vụ hoàn toàn mới, chưa từng có trên thị trường' đề cập đến đặc trưng nào của ý tưởng khởi nghiệp?",
                        "options": [
                            "Tính độc đáo, sáng tạo",
                            "Tính tiềm năng",
                            "Tính cần thiết",
                            "Tính khả thi"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Sản phẩm/dịch vụ hoàn toàn mới thể hiện tính độc đáo và sáng tạo của ý tưởng khởi nghiệp."
                    },
                    {
                        "id": 45,
                        "question": "'Khởi nghiệp xuất phát từ sự cải tiến hay đổi mới sản phẩm/dịch vụ đã có' là yếu tố nào của ý tưởng khởi nghiệp theo H. Igor Ansoff?",
                        "options": [
                            "Một hàng hóa hoặc dịch vụ mới cho một thị trường hiện tại",
                            "Một hàng hóa hoặc dịch vụ mới cho một thị trường mới",
                            "Hàng hóa hoặc dịch vụ đang được cung cấp trên thị trường hiện tại",
                            "Một hàng hóa hoặc dịch vụ cho một thị trường mới"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Cải tiến sản phẩm/dịch vụ đã có tương ứng với việc đưa hàng hóa/dịch vụ mới cho thị trường hiện tại."
                    },
                    {
                        "id": 46,
                        "question": "'Mô hình kinh doanh đã có từ xưa, cho phép người mua và người bán có thể thấy được các mặt hàng, không vô hình như bán online' là hình thức khởi nghiệp nào?",
                        "options": [
                            "Khởi nghiệp bằng mở cửa hàng truyền thống",
                            "Khởi nghiệp bằng bán buôn, bán sỉ",
                            "Khởi nghiệp bằng hình thức tư vấn",
                            "Khởi nghiệp bằng cách tạo giá trị gốc"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Đây là đặc điểm của hình thức khởi nghiệp bằng mở cửa hàng truyền thống."
                    },
                    {
                        "id": 47,
                        "question": "'Liệt kê và sắp xếp khách hàng theo thứ tự ưu tiên, bao gồm danh sách các khách hàng tiềm năng' là nội dung nào trong mô hình Business Model Canvas?",
                        "options": [
                            "Phân khúc khách hàng",
                            "Kênh phân phối",
                            "Giải pháp giá trị",
                            "Quan hệ khách hàng"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Phân khúc khách hàng (Customer Segments) là nội dung liệt kê và sắp xếp khách hàng theo thứ tự ưu tiên."
                    },
                    {
                        "id": 48,
                        "question": "Phương án nào dưới đây không đúng với mô hình Business Model Canvas?",
                        "options": [
                            "Mô hình Business Model Canvas đề cập cụ thể đến các yếu tố bên ngoài hoạt động khởi nghiệp",
                            "Mô hình Business Model Canvas được thể hiện trên một trang giấy",
                            "Mô hình Business Model Canvas bao gồm 9 yếu tố ảnh hưởng chính đến khởi nghiệp",
                            "Quan hệ khách hàng là một trong 9 yếu tố của mô hình Business Model Canvas"
                        ],
                        "correctAnswer": 0,
                        "explanation": "Nhược điểm của Canvas là không đề cập đến các yếu tố bên ngoài hoạt động khởi nghiệp, nên phương án A không đúng."
                    }
                ]
            }
        ]
    }
}
// ===== KẾT THÚC DATABASE =====
let selectedSubject = null;
let currentDatabase = null;
let allQuestions = [];
let filteredReviewQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let startTime;
let totalTimeInSeconds;

function initializeSubjectCards() {
    const subjectCardsContainer = document.getElementById('subjectCards');
    subjectCardsContainer.innerHTML = '';

    const subjectIcons = {
        subject1: '📚',
        subject2: '🧮',
        subject3: '🔬',
        subject4: '📝',
    };

    Object.keys(DATABASES).forEach(subjectKey => {
        const db = DATABASES[subjectKey];
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.onclick = () => selectSubject(subjectKey);
        card.id = `card-${subjectKey}`;

        const totalQuestions = db.exams.reduce((sum, exam) => sum + exam.questions.length, 0);

        card.innerHTML = `
            <div class="subject-icon">${subjectIcons[subjectKey] || '📖'}</div>
            <div class="subject-name">${db.quizMetadata.subject}</div>
            <div class="subject-info">📝 ${totalQuestions} câu hỏi</div>
            <div class="subject-info">⏱️ ${db.quizMetadata.timeLimit} phút</div>
            <div class="subject-info">📋 ${db.quizMetadata.totalExams} đề thi</div>
        `;

        subjectCardsContainer.appendChild(card);
    });
}

function selectSubject(subjectKey) {
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });

    document.getElementById(`card-${subjectKey}`).classList.add('selected');

    selectedSubject = subjectKey;
    currentDatabase = DATABASES[subjectKey];

    initializeQuestions();

    document.getElementById('confirmSubjectBtn').style.display = 'inline-block';
}

function confirmSubject() {
    if (!selectedSubject) {
        alert('Vui lòng chọn một môn học!');
        return;
    }

    document.getElementById('modeSelectedSubjectName').textContent =
        `📚 ${currentDatabase.quizMetadata.subject}`;

    const totalQuestions = allQuestions.length;
    document.getElementById('modeSelectedSubjectDetails').textContent =
        `${totalQuestions} câu hỏi • ${currentDatabase.quizMetadata.totalExams} đề thi`;

    document.getElementById('subjectSelectionScreen').style.display = 'none';
    document.getElementById('modeSelectionScreen').classList.remove('hidden');
}

function backToSubjectSelection() {
    selectedSubject = null;
    currentDatabase = null;
    allQuestions = [];

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('modeSelectionScreen').classList.add('hidden');
    document.getElementById('reviewScreen').classList.add('hidden');
    document.getElementById('subjectSelectionScreen').style.display = 'block';

    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });
    document.getElementById('confirmSubjectBtn').style.display = 'none';
}

function backToModeSelection() {
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('reviewScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('modeSelectionScreen').classList.remove('hidden');
}

function startReviewMode() {
    document.getElementById('modeSelectionScreen').classList.add('hidden');
    document.getElementById('reviewScreen').classList.remove('hidden');

    document.getElementById('reviewSubjectInfo').textContent =
        `${currentDatabase.quizMetadata.subject} - ${allQuestions.length} câu hỏi`;

    filteredReviewQuestions = [...allQuestions];
    displayReviewQuestions();
}

function displayReviewQuestions() {
    const container = document.getElementById('reviewQuestionsContainer');
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    filteredReviewQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'review-question-item';
        questionDiv.id = `review-q-${index}`;

        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            const isCorrect = optIndex === question.correctAnswer;
            optionsHTML += `
                <div class="review-option-item ${isCorrect ? 'correct-answer' : ''}" id="review-opt-${index}-${optIndex}">
                    <span class="review-option-letter">${letters[optIndex]}</span>
                    <span style="flex: 1;">${option}</span>
                    ${isCorrect ? '<span class="review-option-check">✓</span>' : ''}
                </div>
            `;
        });

        const explanationHTML = question.explanation ?
            `<div class="review-explanation-box" id="review-exp-${index}" style="display: none;">
                <strong>💡 Giải thích:</strong> ${question.explanation}
            </div>` : '';

        questionDiv.innerHTML = `
            <div class="review-question-header">
                <span class="review-question-number">Câu ${index + 1}</span>
                <button class="toggle-answer-btn" onclick="toggleReviewAnswer(${index})">
                    👁️ Xem Đáp Án
                </button>
            </div>
            <div class="review-question-text">${question.question}</div>
            <div class="review-options-list" id="review-opts-${index}" style="display: none;">
                ${optionsHTML}
            </div>
            ${explanationHTML}
        `;

        container.appendChild(questionDiv);
    });

    document.getElementById('filteredCount').textContent = filteredReviewQuestions.length;
    document.getElementById('totalCount').textContent = allQuestions.length;
}

function toggleReviewAnswer(index) {
    const optionsDiv = document.getElementById(`review-opts-${index}`);
    const expDiv = document.getElementById(`review-exp-${index}`);
    const btn = document.querySelector(`#review-q-${index} .toggle-answer-btn`);

    if (optionsDiv.style.display === 'none') {
        optionsDiv.style.display = 'block';
        if (expDiv) expDiv.style.display = 'block';
        btn.innerHTML = '🙈 Ẩn Đáp Án';
        btn.classList.add('hide');
    } else {
        optionsDiv.style.display = 'none';
        if (expDiv) expDiv.style.display = 'none';
        btn.innerHTML = '👁️ Xem Đáp Án';
        btn.classList.remove('hide');
    }
}

function filterReviewQuestions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    if (searchTerm === '') {
        filteredReviewQuestions = [...allQuestions];
    } else {
        filteredReviewQuestions = allQuestions.filter(q =>
            q.question.toLowerCase().includes(searchTerm) ||
            q.options.some(opt => opt.toLowerCase().includes(searchTerm))
        );
    }

    displayReviewQuestions();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    filterReviewQuestions();
}

function startQuizMode() {
    document.getElementById('modeSelectionScreen').classList.add('hidden');
    document.getElementById('reviewScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');

    document.getElementById('selectedSubjectName').textContent =
        `📚 ${currentDatabase.quizMetadata.subject}`;

    const totalQuestions = allQuestions.length;
    document.getElementById('selectedSubjectDetails').textContent =
        `${totalQuestions} câu hỏi • ${currentDatabase.quizMetadata.totalExams} đề thi`;

    document.getElementById('timeLimit').value = currentDatabase.quizMetadata.timeLimit;
    document.getElementById('numQuestions').max = totalQuestions;
    document.getElementById('numQuestions').value = Math.min(20, totalQuestions);
}

function initializeQuestions() {
    const questionMap = new Map();

    currentDatabase.exams.forEach(exam => {
        exam.questions.forEach(q => {
            const key = q.question.trim().toLowerCase();
            if (!questionMap.has(key)) {
                questionMap.set(key, {
                    question: q.question,
                    options: q.options,
                    correctAnswer: q.correctAnswer,
                    explanation: q.explanation || ""
                });
            }
        });
    });

    allQuestions = Array.from(questionMap.values());
    console.log(`Đã tải ${allQuestions.length} câu hỏi duy nhất`);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function startQuiz() {
    const numQuestions = parseInt(document.getElementById('numQuestions').value);
    const timeLimit = parseInt(document.getElementById('timeLimit').value);

    if (numQuestions > allQuestions.length) {
        alert(`Chỉ có ${allQuestions.length} câu hỏi. Vui lòng chọn số nhỏ hơn.`);
        return;
    }

    const shuffled = shuffleArray(allQuestions);
    currentQuestions = shuffled.slice(0, numQuestions);

    currentQuestionIndex = 0;
    userAnswers = new Array(numQuestions).fill(null);
    totalTimeInSeconds = timeLimit * 60;
    startTime = Date.now();

    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('totalQuestions').textContent = numQuestions;

    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const question = currentQuestions[currentQuestionIndex];

    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }

        optionDiv.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div>${option}</div>
        `;

        optionDiv.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionDiv);
    });

    updateProgress();
    updateNavigationButtons();
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;

    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').style.display =
        currentQuestionIndex === 0 ? 'none' : 'block';

    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
    document.getElementById('nextBtn').classList.toggle('hidden', isLastQuestion);
    document.getElementById('finishBtn').classList.toggle('hidden', !isLastQuestion);
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = totalTimeInSeconds - elapsed;

        if (remaining <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
            return;
        }

        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        document.getElementById('timeRemaining').textContent =
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function finishQuiz() {
    clearInterval(timerInterval);

    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });

    const incorrectCount = currentQuestions.length - correctCount;
    const score = Math.round((correctCount / currentQuestions.length) * 100);

    const timeUsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeUsed / 60);
    const seconds = timeUsed % 60;

    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.remove('hidden');

    document.getElementById('scoreDisplay').textContent = score + '%';
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('timeTaken').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    let message = '';
    if (score >= 90) message = '🎉 Xuất sắc! Bạn đã làm rất tốt!';
    else if (score >= 80) message = '👏 Tốt lắm! Tiếp tục phát huy!';
    else if (score >= 70) message = '😊 Khá tốt! Cố gắng thêm nhé!';
    else if (score >= 60) message = '🤔 Trung bình. Hãy ôn luyện thêm!';
    else message = '💪 Cần cố gắng hơn. Đừng bỏ cuộc!';

    document.getElementById('resultMessage').textContent = message;

    displayReview();
}

function displayReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        const reviewDiv = document.createElement('div');
        reviewDiv.className = `review-question ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`;

        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            let optionClass = 'review-option';
            let icon = '';

            if (optIndex === question.correctAnswer) {
                optionClass += ' correct-option';
                icon = '✓';
            }

            if (optIndex === userAnswer && userAnswer !== question.correctAnswer) {
                optionClass += ' wrong-option';
                icon = '✗';
            }

            optionsHTML += `
                <div class="${optionClass}">
                    ${icon ? `<span class="review-option-icon">${icon}</span>` : '<span class="review-option-icon"></span>'}
                    <strong>${letters[optIndex]}.</strong> ${option}
                </div>
            `;
        });

        const explanationHTML = question.explanation ?
            `<div class="review-explanation">
                <strong>💡 Giải thích:</strong> ${question.explanation}
            </div>` : '';

        reviewDiv.innerHTML = `
            <div class="review-header">
                <span class="review-number">Câu ${index + 1}</span>
                <span class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Đúng' : '✗ Sai'}
                </span>
            </div>
            <div class="review-question-text">${question.question}</div>
            <div class="review-options">
                ${optionsHTML}
            </div>
            ${explanationHTML}
        `;

        reviewContainer.appendChild(reviewDiv);
    });
}

function restartQuiz() {
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('startScreen').classList.remove('hidden');
}

window.onload = function () {
    initializeSubjectCards();
};