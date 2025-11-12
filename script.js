// ===== THAY THẾ DATABASE VÀO ĐÂY =====
const DATABASE = {
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
                    "correctAnswer": 3,
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
                    "correctAnswer": 0,
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

};
// ===== KẾT THÚC DATABASE =====

let allQuestions = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let startTime;
let totalTimeInSeconds;

// Khởi tạo - loại bỏ câu trùng
function initializeQuestions() {
    const questionMap = new Map();

    DATABASE.exams.forEach(exam => {
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

// Trộn mảng
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Bắt đầu quiz
function startQuiz() {
    initializeQuestions();

    const numQuestions = parseInt(document.getElementById('numQuestions').value);
    const timeLimit = parseInt(document.getElementById('timeLimit').value);

    if (numQuestions > allQuestions.length) {
        alert(`Chỉ có ${allQuestions.length} câu hỏi. Vui lòng chọn số nhỏ hơn.`);
        return;
    }

    // Chọn ngẫu nhiên câu hỏi
    const shuffled = shuffleArray(allQuestions);
    currentQuestions = shuffled.slice(0, numQuestions);

    currentQuestionIndex = 0;
    userAnswers = new Array(numQuestions).fill(null);
    totalTimeInSeconds = timeLimit * 60;
    startTime = Date.now();

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    document.getElementById('totalQuestions').textContent = numQuestions;

    displayQuestion();
    startTimer();
}

// Hiển thị câu hỏi
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

// Chọn đáp án
function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;

    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
}

// Cập nhật progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Cập nhật nút điều hướng
function updateNavigationButtons() {
    document.getElementById('prevBtn').style.display =
        currentQuestionIndex === 0 ? 'none' : 'block';

    const isLastQuestion = currentQuestionIndex === currentQuestions.length - 1;
    document.getElementById('nextBtn').classList.toggle('hidden', isLastQuestion);
    document.getElementById('finishBtn').classList.toggle('hidden', !isLastQuestion);
}

// Câu trước
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Câu tiếp
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Timer
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

// Kết thúc quiz
function finishQuiz() {
    clearInterval(timerInterval);

    // Kiểm tra câu trả lời
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });

    const incorrectCount = currentQuestions.length - correctCount;
    const score = Math.round((correctCount / currentQuestions.length) * 100);

    // Tính thời gian đã dùng
    const timeUsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeUsed / 60);
    const seconds = timeUsed % 60;

    // Hiển thị kết quả
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'block';

    document.getElementById('scoreDisplay').textContent = score + '%';
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('timeTaken').textContent =
        `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Thông điệp kết quả
    let message = '';
    if (score >= 90) message = '🎉 Xuất sắc! Bạn đã làm rất tốt!';
    else if (score >= 80) message = '👏 Tốt lắm! Tiếp tục phát huy!';
    else if (score >= 70) message = '😊 Khá tốt! Cố gắng thêm nhé!';
    else if (score >= 60) message = '🤔 Trung bình. Hãy ôn luyện thêm!';
    else message = '💪 Cần cố gắng hơn. Đừng bỏ cuộc!';

    document.getElementById('resultMessage').textContent = message;

    // Hiển thị phần review
    displayReview();
}

// Hiển thị chi tiết review
function displayReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;

        const reviewDiv = document.createElement('div');
        reviewDiv.className = `review-question ${isCorrect ? 'correct-answer' : 'incorrect-answer'}`;

        // Tạo HTML cho các options
        let optionsHTML = '';
        question.options.forEach((option, optIndex) => {
            let optionClass = 'review-option';
            let icon = '';

            // Đánh dấu đáp án đúng
            if (optIndex === question.correctAnswer) {
                optionClass += ' correct-option';
                icon = '✓';
            }

            // Đánh dấu đáp án sai của user
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

        // Hiển thị giải thích nếu có
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

// Làm lại quiz
function restartQuiz() {
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

// Khởi tạo khi tải trang
window.onload = function () {
    if (DATABASE.exams && DATABASE.exams.length > 0) {
        initializeQuestions();
    }
};