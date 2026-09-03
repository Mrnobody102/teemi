# C-CORE-THESIS — Luận điểm lõi có sai không

**Đối tượng tấn công:** "Mỗi người một kèo. Cả nhóm một boss." (doc-01 §1, §7, §13)
**Ngày:** 2026-08-28
**Kết luận ngắn:** Luận điểm này gồm hai nửa và founder đang gộp chúng làm một. Nửa "mỗi người một kèo" là khoảng trống thật, đáng làm. Nửa "cả nhóm một boss" là nửa yếu: nó không có bằng chứng trực tiếp, nó bị toán học phản bội, nó là phần rủi ro pháp lý cao nhất, và cái nhiệm vụ mà founder giao cho nó (chống novelty decay bằng progression) đã có một thứ khác trong chính doc-01 làm tốt hơn — Timeline/Memory. Boss phải bị hạ khỏi câu định vị và biến thành một A/B test ở v1.1, không phải trụ cột của MVP.

---

## 1. Boss HP không mang thông tin mới. Nó là bản mã hoá lại của "3/5 đã nộp"

Đây là phản biện nền, mọi thứ khác đứng trên nó.

Trong một hệ **shared stakes thật** (raid Pokémon Go, một đội bóng, một bài tập nhóm), hành động của tôi làm thay đổi kết quả của bạn qua một **kênh nhân quả tồn tại độc lập với phần mềm**. Trong Teemi, việc Huy học tiếng Anh 15 phút không có bất kỳ quan hệ nhân quả nào với việc Nam ngủ trước 12h. Sợi dây duy nhất nối hai người là một con số do app tự bịa ra.

Điều đó tự nó chưa giết ai — game bịa ra ràng buộc suốt. Vấn đề chết người là: **boss HP là hàm xác định (deterministic function) của đúng một biến — số người đã nộp proof hôm nay.** Mà biến đó đã được hiển thị nguyên trạng ngay trên màn hình chính và trên widget: "3/5 đã nộp · mày chưa". Boss HP không thêm bit thông tin nào. Nó là **cùng một dữ liệu, vẽ lại bằng thanh máu**.

Câu hỏi trong đề bài — "người dùng có nhận ra sự giả tạo sau 2 tuần không?" — đặt sai. Người dùng **không nhận ra bằng lý trí**. Họ chỉ **thôi nhìn**. Mắt họ ngừng dừng lại ở thanh máu vì thanh máu không nói gì mà dòng "3/5" chưa nói. Đây là attention decay, không phải intellectual rejection — nên founder sẽ không nghe ai phàn nàn, không thấy review 1 sao, chỉ thấy một feature tốn 6 tuần dev nằm im.

**Kịch bản cụ thể.** Season 14 ngày, nhóm 5 người, 1 proof = 1 hit, HP boss = 56 (80% của 70 hit tối đa). Hết ngày 4 nhóm đã đánh 16 hit → nhịp 4 hit/ngày → 10 ngày còn lại × 4 = 40 → tổng 56, vừa đúng. **Từ ngày 5 trở đi, mọi người đều biết kết cục.** Nếu nhịp là 3/ngày, họ biết chắc sẽ thua từ ngày 6 và còn 8 ngày phải nhìn một thanh máu mà họ biết không hạ nổi. Boss trở thành **solved game** sau chưa đầy 1/3 season. Habitica có đúng bệnh này và đó là lý do quest ở Habitica bị mô tả là "chore" chứ không phải "raid".

**Cách sửa:** hoặc (a) boss phải phụ thuộc vào biến mà nhóm CHƯA biết — ví dụ HP thay đổi theo số reaction nhóm tặng nhau, theo comeback, theo sự kiện ngẫu nhiên — để nó ngừng là bản sao của bảng điểm danh; hoặc (b) bỏ boss, và để thứ thật sự mang thông tin mới mỗi ngày làm trung tâm: **tấm ảnh bạn mày vừa nộp**.

**Metric để kiểm chứng, đặt từ ngày 1:** tỉ lệ session có mở/chạm vào màn boss. Nếu sau tuần 3 con số này < 20%, boss đã chết và founder không cần tranh luận thêm.

---

## 2. Duolingo đã thử nghiệm QUA khỏi tính liên đới. Teemi đang thêm lại đúng thứ họ bỏ

Đây là bằng chứng phản biện mạnh nhất, và nó là first-party.

Duolingo — 50M+ DAU, hơn 600 thí nghiệm riêng cho streak — mô tả Friend Streak bằng nguyên văn:

> "the version we landed on is **the first social feature we've seen, on any app, that doesn't require you to actually _do_ anything with another learner.** You're basically just using Duolingo alongside someone else—it's like studying next to a friend at the library."
> — [blog.duolingo.com/product-lessons-friend-streak](https://blog.duolingo.com/product-lessons-friend-streak/)

Kết quả của cấu hình **ZERO coupling** đó: **+22%** khả năng hoàn thành bài học hằng ngày; **57%** user có ít nhất một người bạn; giới hạn cứng **5 người** vì "the population of users with such large, active friend groups was small enough".

Teemi đặt cược ngược lại 180 độ: **coupling tối đa** — một người ngủ quên thì kết quả của bốn người kia đổi. Founder đang coi đó là điểm khác biệt. Nó không phải điểm khác biệt; nó là giả thuyết mà người đo đạc kỹ nhất ngành đã đi qua và loại.

**Cơ chế thất bại — toán học:** giả sử mỗi người có xác suất nộp proof mỗi ngày là p. Cơ chế conjunctive mà r03 khuyến nghị (critical hit chỉ mở khi CẢ NHÓM nộp đủ) sẽ kích hoạt với xác suất p⁵:

| p (mỗi người/ngày) | P(cả 5 nộp) = p⁵ | Số ngày có combo trong season 28 ngày |
|---|---|---|
| 0,9 | 59,0% | ~17 ngày |
| 0,8 | 32,8% | ~9 ngày |
| **0,7 (thực tế cho nhóm bạn casual)** | **16,8%** | **~5 ngày** |
| 0,6 | 7,8% | ~2 ngày |

Ở p = 0,7 — đã là một nhóm khá tốt — cơ chế được cho là tạo Köhler effect **chỉ nổ 5 ngày trong 28**. 23 ngày còn lại, app in ra một câu trả lời rất rõ ràng cho câu hỏi "tại sao hôm nay không có combo?", và câu trả lời đó là **tên một người cụ thể**. Máy in scapegoat, 23/28 ngày.

**Cách sửa:** ngưỡng combo đặt ở n−1 chứ không phải n. Ở p = 0,7, P(≥4/5) = 52,8% — nổ hơn nửa số ngày, vẫn giữ được cảm giác "thiếu người là hụt" mà không chỉ mặt ai. Và **tuyệt đối không để boss hồi máu** (§8 bên dưới giải thích tại sao đây là vấn đề số học chứ không phải vấn đề cảm xúc).

---

## 3. Tự đặt độ khó + thưởng chung = cuộc đua xuống đáy. Sau 2 tuần app không còn thay đổi hành vi nào

Đây là lỗ hổng mà cả doc-01 lẫn r03 đều chưa gọi tên đúng.

Habitica có một thứ Teemi không có: **đóng góp của mọi người đo bằng cùng một đơn vị** (số task hoàn thành). Teemi cố tình phá bỏ điều đó — đó chính là "mỗi người một kèo". Nhưng khi (a) người chơi **tự đặt độ khó của mình** và (b) **phần thưởng là chung**, thì chiến lược trội (dominant strategy) của mọi thành viên là **đặt kèo dễ nhất có thể**. Đây là Goodhart's law áp lên mục tiêu tự khai.

Tệ hơn: r03 khuyến nghị "khi một thành viên miss 3 ngày liên tiếp, app đề xuất hạ độ khó kèo". Đó là một cơ chế **tự động hoá cuộc đua xuống đáy**.

**Kịch bản cụ thể, 14 ngày.**
- Ngày 1: Huy "học tiếng Anh 15 phút", Nam "ngủ trước 12h", Linh "đi bộ 20 phút", An "đọc 5 trang", Minh "hôm nay không trà sữa".
- Ngày 3: Minh nhận ra kèo của mình là **kèo trống** — không làm gì cũng pass, vẫn ra 1 hit ngang Huy. Minh không gian lận; luật chơi cho phép.
- Ngày 9: Huy miss 2 lần vì 15 phút tiếng Anh là việc thật. App gợi ý hạ kèo. Huy đổi thành "mở Duolingo 1 lần".
- Ngày 12: Linh đổi "đi bộ 20 phút" thành "đứng dậy đi 1 vòng". An đổi "5 trang" thành "1 trang".
- Ngày 14: nhóm hạ boss. Ăn mừng. **Không ai thay đổi hành vi gì cả.** Toàn bộ kèo của cả nhóm giờ tốn dưới 60 giây/người/ngày.
- Season 2: không ai bận tâm mở lại. Vì họ đã biết ngầm rằng con boss đó không đo cái gì.

Đây không phải rủi ro "có thể xảy ra". Với một hệ mà độ khó do người chơi tự chọn và phần thưởng chia đều, đây là **trạng thái cân bằng**.

**Cách sửa (rẻ, làm được ở MVP):** doc-01 §7 bước 3 đã có "nhóm duyệt luật chơi/proof rule" — hãy biến nó thành **duyệt theo từng người**: kèo của mỗi thành viên phải được ≥1 người khác trong nhóm bấm "kèo này ok" trước khi season bắt đầu. Kèo chỉ được hạ **một lần duy nhất mỗi season** và việc hạ hiện công khai trong nhóm ("Huy vừa hạ kèo"). Chi phí kỹ thuật ~1 ngày, và nó chuyển việc chống race-to-bottom từ thuật toán sang chính nhóm bạn — đúng triết lý peer-social của sản phẩm.

---

## 4. Không gian giữa "quá dễ nên vô nghĩa" và "quá khó nên gây oán" hẹp hơn founder nghĩ, và nó khác nhau ở mỗi nhóm

Câu hỏi trong đề bài đáng được trả lời bằng số.

Season 28 ngày, 5 người → tối đa 140 proof. Founder phải ship **một** con số HP.

| HP boss | Nhóm p=0,9 | Nhóm p=0,7 | Nhóm p=0,5 |
|---|---|---|---|
| 126 (90%) | thắng sát nút — hay | thua chắc từ ~ngày 10 | thua chắc từ ~ngày 6 |
| 98 (70%) | thắng từ ngày 22, coast 6 ngày | 50/50 — hay | thua chắc từ ~ngày 9 |
| 70 (50%) | thắng ngày 16, vô nghĩa 12 ngày | thắng ngày 20, vô nghĩa | 50/50 — hay |

Không có một con số nào phục vụ được cả ba. Mà phân bố p giữa các nhóm không phải phân bố chuẩn hẹp — dữ liệu WeChat (WWW 2016) cho thấy nhóm messaging phân tách **lưỡng cực**: ~40% chết trong tuần đầu, ~30% sống ≥30 ngày. Nghĩa là founder ship một HP duy nhất cho một quần thể lưỡng cực: boss sẽ **tầm thường với nhóm khoẻ** và **bất khả thi về mặt toán học với nhóm yếu từ ngày 8–10**. Ở cả hai đầu, boss ngừng làm việc của nó và trở thành đồ trang trí — đúng thứ mà boss sinh ra để ngăn chặn.

Habitica giải bài này bằng cách cho party tự chọn quest với độ khó khác nhau — tức bằng một **content pipeline** mà founder indie không có.

**Cách sửa:** rubber-band difficulty, chuẩn trong game design, rẻ. HP boss **không đặt trước** mà chốt vào cuối ngày 3: `HP = 1,15 × (nhịp đánh 3 ngày đầu) × số ngày còn lại`. Mọi nhóm đều được một trận đấu sát nút. Và luật cứng: **nhóm dưới 3 thành viên active không bao giờ được hiển thị một con boss có thể thua.**

---

## 5. Giả thuyết thay thế có bằng chứng mạnh hơn hẳn: thứ giữ chân là ĐƯỢC NHÌN THẤY NHAU, và boss là thuế đánh lên nó

Đối chiếu trực tiếp, cùng tệp người dùng (Gen Z), cùng cấu trúc (nhóm nhỏ riêng tư):

| App | Có boss/goal chung? | Số liệu |
|---|---|---|
| **Yope** | **Không.** Chỉ chia sẻ ảnh nhóm riêng tư + streak + widget màn khoá + recap | 2,2M MAU · 800k DAU · **D7 = 40%** · tăng **30×** trong 6 tháng · **70–80% tăng trưởng từ invite organic** ([TechCrunch 24/02/2025](https://techcrunch.com/2025/02/24/yope-is-sparking-genz-and-vc-interest-with-an-instagram-like-app-for-private-groups/)) |
| **Locket** | Không | 91M+ cài · ~9M DAU · **có lãi** với chỉ $12,5M gọi vốn · 1 hành động, 0 giây setup |
| **Habitica** | **Có** — chính xác cơ chế Teemi | 5M+ tải trong **10+ năm**, ~86k tải/tháng, kẹt niche |
| **Forest "Plant Together"** | **Có** — "if anyone gives up, the whole forest falls" | 60M+ tải nhưng tính năng này tồn tại nhiều năm mà không tạo được trào lưu; app sống ổn định, không đột biến |

Đọc bảng này theo đúng hướng: **cơ chế trừng phạt tập thể tương quan với niche; cơ chế được-nhìn-thấy tương quan với quy mô.** Founder đang thêm cái thứ nhất và xếp cái thứ hai xuống hạng hai.

**Và boss là thứ tạo ra phần lớn ma sát onboarding.** So sánh chuỗi bước:
- Yope/Locket: cài → đăng nhập → chụp 1 ảnh. Xong.
- Teemi: cài → đăng nhập → tạo/vào nhóm → **chọn kèo (r03 còn bắt 3 trường if-then)** → nộp proof → **và phải rủ được 3–5 người cùng làm toàn bộ chuỗi đó** thì ritual mới chạy.

Giả sử mỗi bước có tỉ lệ hoàn thành 95% (rất lạc quan): 0,95⁶ = **73,5%/người**. Cần 4 người xong: 0,735⁴ = **29,2%**. Nếu mỗi bước chỉ 85%: 0,85⁶ = 37,7%/người → 0,377⁴ = **2,0%**. Yope đạt D7 40% với onboarding một hành động; Teemi đang đặt cửa vào ở 2–29% chỉ để bắt đầu.

**Cách sửa — và đây là khuyến nghị hành động quan trọng nhất trong tài liệu này:** đảo thứ tự build. Ship trước lớp "được nhìn thấy nhau" — nhóm + proof hằng ngày + reaction/cà khịa + recap + widget — **không boss, kèo là free-text tuỳ chọn, không bắt buộc**. Đo group-D7/D28. Sau đó ở v1.1 bật boss cho **50% nhóm** và so. Nếu nhóm có boss không hơn nhóm không boss ≥10 điểm ở group-D28 thì luận điểm lõi sai, và founder biết điều đó sau **3 tuần** thay vì 6 tháng. Hiện tại doc-01 không có bất kỳ kế hoạch nào để chứng minh boss có tác dụng — nó được giả định đúng từ trang 1.

---

## 6. Phiên bản boss hợp pháp là phiên bản boss chết về mặt động lực

Nghiên cứu pháp lý (r06, r08) kết luận: cơ chế boss chung — "nhiều người chơi tương tác qua máy chủ doanh nghiệp" — rơi rất sát định nghĩa **trò chơi điện tử G1** trong Nghị định 147/2024, kéo theo giấy phép G1 + phê duyệt kịch bản + máy chủ tại VN. Khuyến nghị phòng thủ là: mô tả boss như **progress visualization thuần, không combat, không win/lose state độc lập**, App Store category không được chọn Games, không dùng chữ "game" ở bất kỳ đâu.

Nhưng hãy đối chiếu với 4 điều kiện khiến boss chung hoạt động (rút từ Pokémon Go): **có deadline · thưởng hiếm tức thì · damage cá nhân nhìn thấy được · chi phí fail thấp.** Một con boss "không có win/lose state độc lập" thì **không có deadline có ý nghĩa và không có phần thưởng** — nó vi phạm 2 trong 4 điều kiện ngay từ định nghĩa.

Nghĩa là: **phiên bản boss an toàn pháp lý chính là phiên bản boss vô dụng về động lực.** Founder đang trả giá đầy đủ — rủi ro giấy phép G1, thời gian dev, và một định vị mà chính doc-01 §6.1 tuyên bố phải tránh ("KHÔNG định vị là game mobile thuần") — để đổi lấy một cơ chế bắt buộc phải bị thiến mới ship được.

Và đây là **mâu thuẫn nội tại của doc-01**: §1 đặt chữ "boss" vào chính giữa câu định vị lõi, trong khi §6.1 cấm định vị là game. Không thể giữ cả hai.

---

## 7. Bằng chứng khoa học mà founder đang dựa vào KHÔNG áp dụng được cho cấu hình của Teemi

r03 trung thực ghi: **"KHÔNG TÌM ĐƯỢC"** nghiên cứu nào về group contingency với **mục tiêu khác nhau giữa các thành viên**. Toàn bộ literature ủng hộ (Köhler; Johnson & Johnson d≈0,49; Maggin 2017 với 85% dùng interdependent) đều dùng **cùng một hành vi mục tiêu cho cả nhóm**.

Vấn đề nặng hơn "chưa có bằng chứng". Köhler effect có một moderator trung tâm: **gain cực đại khi chênh lệch năng lực ~1,4 lần**. Trong Teemi, các kèo là **không thể so sánh (incommensurable)** — bạn không thể "giỏi hơn 1,4 lần" ở việc không uống trà sữa so với người đọc 5 trang sách. Biến điều tiết trung tâm của hiệu ứng **không tồn tại** trong cấu hình này. Đây không phải bằng chứng yếu; đây là **bằng chứng không áp dụng được đang được trình bày như bằng chứng ủng hộ**.

**Test rẻ nhất, làm được trong 14 ngày, chi phí 0đ, và founder nên làm TRƯỚC khi viết dòng code nào cho boss:** tuyển 3 nhóm bạn thật, mỗi nhóm 5 người. Chạy Teemi thủ công trong group Zalo — một Google Sheet ghi 5 kèo, mỗi người gửi 1 ảnh proof vào group mỗi ngày, founder tự tay post con số máu boss mỗi tối. Đo đúng 3 thứ: (a) có ai nhắc tới boss mà không bị hỏi không, (b) có ai bị đổ lỗi không, (c) tỉ lệ nộp ngày 14. Nếu boss không được nhắc tới một cách tự nhiên trong 14 ngày ở nhóm bạn thân — nơi bối cảnh xã hội mạnh nhất có thể — thì nó sẽ không được nhắc tới trong app.

---

## 8. Boss "hồi máu" không phải vấn đề cảm xúc — nó là vấn đề số học. Boss khuếch đại cái chết của nhóm thay vì chống lại nó

Founder bán boss như **moat chống novelty decay**. Toán học nói ngược lại.

Nhóm 5 người, tất cả p = 0,8: mỗi ngày ~4,0 proof, ~1,0 người miss. Nếu mỗi người miss làm boss hồi 1 HP → **net = 3,0 HP/ngày**.
Hai thành viên nguội, p tụt còn 0,4 (rất bình thường ở tuần 3): proof = 3×0,8 + 2×0,4 = **3,2**; số người miss = 1,8 → **net = 1,4 HP/ngày**. Tức **giảm 53%** tốc độ, và giảm này được **phát sóng cho cả nhóm mỗi tối trong recap**.

So sánh với app không coupling: ở Locket/Yope, khi 2/5 người nguội, **3 người còn lại vẫn nhận đủ giá trị** — họ vẫn thấy nhau. Ở Teemi, 2/5 người nguội **biến "3 đứa vẫn đang vui" thành "cả nhóm đang thua"**. Boss chuyển sự suy giảm cục bộ thành **tín hiệu thất bại tập thể**, và recap — thứ founder muốn trở thành sản phẩm ký ức — trở thành bản tin hằng đêm nhắc rằng nhóm đang tan.

Với p thấp hơn nữa, hệ đổi dấu: khi số người miss > số người nộp (tức p < 0,5), boss **hồi máu ròng**. App có một chỉ số tiến độ chính **đi lùi**. Một app mà chỉ số chính đi lùi là một app trừng phạt hành vi mở app.

**Cách sửa:** đúng như r01/r03 đã khuyến nghị và cần nâng lên thành luật bất di bất dịch — **boss không bao giờ hồi máu**, chỉ đánh chậm lại. Cộng thêm: damage tính trên **số thành viên Active**, không trên headcount danh nghĩa, để người Paused/Spectator không kéo mẫu số xuống.

---

## 9. Chính danh sách "ngôn ngữ nhóm" của founder tố cáo rằng boss không phải chỗ cảm xúc nằm

doc-01 §8 liệt kê 8 câu mà founder hình dung sẽ trở thành văn hoá nhóm. Đếm lại:

- Về **proof và con người**: "Hôm nay nộp proof chưa?", "Proof hơi sus nhưng pass", "Nộp phút 89 à?", "Nam lại dùng kỹ năng mất tích có điều kiện", "Tuần này ai là Báo Thủ?" → **5/8**
- Về **boss**: "Boss hồi máu vì mày đấy", "Diệt boss xong đi ăn lẩu không?" → **2/8** (câu còn lại là slogan)

Trong 2 câu boss: câu thứ nhất **chính xác là cơ chế scapegoating** mà literature group contingency cảnh báo — founder đang liệt kê một cơ chế gây tổn thương như một inside joke đáng mơ ước. Câu thứ hai — "diệt boss xong đi ăn lẩu" — là **sự kiện ngoài đời**, và nó **không cần boss để kích hoạt**: một ngày kết thúc season là đủ.

Nói cách khác: trí tưởng tượng của chính founder về văn hoá Teemi **gần như không có boss**. Boss là nơi tham vọng thiết kế của founder nằm, không phải nơi giá trị cảm xúc nằm.

---

## 10. Phán quyết và đường ra

**Nửa đúng:** "Mỗi người một kèo" là khoảng trống thật. Không app nào trong 16 app khảo sát giải được bài "nhóm bạn ngẫu nhiên ngoài đời, mỗi người một cuộc sống, vẫn có một nghi thức chung". Apple Fitness Competitions gần nhất nhưng chỉ 1:1 và chỉ vận động. Giữ nửa này.

**Nửa sai:** "Cả nhóm một boss" chưa được chứng minh ở bất kỳ đâu với goal dị biệt, dựa trên bằng chứng khoa học không áp dụng được, mâu thuẫn với thiết kế thắng cuộc của Duolingo, tạo cuộc đua xuống đáy về độ khó, không tune được cho quần thể lưỡng cực, khuếch đại cái chết của nhóm, và là bề mặt rủi ro pháp lý lớn nhất của sản phẩm.

**Ba việc cần làm, theo thứ tự:**

1. **Đổi câu định vị.** "Mỗi người một kèo. Cả nhóm nhìn thấy nhau mỗi ngày." Boss xuống mục tính năng, không nằm trong câu bán hàng. Việc này cũng đồng thời giảm rủi ro G1.
2. **Chạy test thủ công 14 ngày với 3 nhóm bạn thật (§7) trước khi code boss.** Chi phí 0đ.
3. **Đặt kill criterion bằng số, ghi vào ADR, ký tên:** ở v1.1, nhóm có boss phải hơn nhóm không boss **≥10 điểm phần trăm group-D28**. Không đạt → boss bị gỡ vĩnh viễn, nguồn lực chuyển hết sang Timeline/Memory Capsule, thứ có bằng chứng chống novelty decay tốt hơn (Strava Challenges: retention 90 ngày 18%→32%; Yope: ML "wall" + recap ở D7 40%).

Nếu founder không sẵn sàng viết ra kill criterion đó, thì boss không phải một giả thuyết sản phẩm — nó là một niềm tin. Và niềm tin không được kiểm chứng chính là thứ đã tạo ra 7 xác app trong bảng khảo sát.

---

### Nguồn chính dùng trong tài liệu này
- [Duolingo — 5 product lessons from Friend Streak](https://blog.duolingo.com/product-lessons-friend-streak/) (nguyên văn "doesn't require you to actually do anything with another learner"; +22%; 57% có bạn; giới hạn 5)
- [TechCrunch — Yope](https://techcrunch.com/2025/02/24/yope-is-sparking-genz-and-vc-interest-with-an-instagram-like-app-for-private-groups/) (2,2M MAU · 800k DAU · D7 40% · 30× / 6 tháng · 70–80% organic)
- [Forest — Plant Together](https://www.forestapp.cc/) ("if anyone gives up, the whole forest falls"; 60M+ tải)
- [Habitica Wiki — Party](https://habitica.fandom.com/wiki/Party) · [Boss](https://habitica.fandom.com/wiki/Boss) · [AppBrain](https://www.appbrain.com/app/habitica-gamify-your-tasks/com.habitrpg.android.habitica) (5M+ tải/10 năm, ~86k tải/tháng)
- [Qiu et al., WWW 2016 — WeChat group lifecycle](https://arxiv.org/abs/1512.07831) (~40% nhóm chết trong tuần đầu; 30% sống ≥30 ngày)
- [Karau & Williams (1993) meta-analysis](http://www.psych.purdue.edu/~willia55/392F-'06/KarauWilliamsMetaAnalysisJPSP.pdf) (d≈−0,44; evaluation potential)
- [Maggin, Pustejovsky & Johnson (2017)](https://journals.sagepub.com/doi/10.1177/0741932517716900) + [J Behav Educ 2019](https://link.springer.com/article/10.1007/s10864-019-09321-0) (rủi ro sabotage / negative peer pressure / scapegoating)
- [Scopely mua Niantic](https://www.scopely.com/en/news/scopely-to-acquire-niantic-games-business-which-includes-pokemon-go-one-of-the-most-successful-mobile-games-of-all-time) · [PocketGamer $9,1B](https://www.pocketgamer.biz/pokemon-go-celebrates-10th-anniversary-with-over-9bn-in-revenue/) (4 điều kiện raid)
- [Trophy.so — Strava Challenges case study](https://trophy.so/blog/strava-gamification-case-study) (retention 90 ngày 18%→32%)
- Nghiên cứu nội bộ: `/home/huypq/teemi/docs/research/r01-competitive-landscape.md`, `r03-behavioral-science.md`, `r04-retention-viral.md`, `r06-legal-compliance.md`, `r08-monetization.md`

**Ghi chú độ tin cậy:** các con số p⁵, 0,95⁶, net-damage và bảng HP/season là **TÍNH TOÁN từ giả định**, không phải số đo — chúng dùng để cho thấy hình dạng của vấn đề, không phải để dự báo. Giả định p = 0,7–0,8 là **GUESS** neo vào benchmark D7 social (18–30%) và BeReal (55% đăng đúng cửa sổ); founder phải thay bằng số đo thật sau beta.
