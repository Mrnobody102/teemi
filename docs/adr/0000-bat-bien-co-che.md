# ADR-000: Bất biến cơ chế — những định nghĩa không được đổi sau khi có dữ liệu

- **Trạng thái**: đã chốt
- **Ngày**: 2026-08-28
- **Người quyết**: founder
- **Hiệu lực**: từ **commit đầu tiên** (dự kiến 24/09/2026). Sau ngày đó, mỗi mục dưới đây chỉ sửa được bằng một migration **và** một khoảng dữ liệu lịch sử không so sánh được.

## Bối cảnh

Chín tài liệu kế hoạch được viết song song. Mỗi tài liệu tự phát hiện một lỗi thật của tài liệu nguồn, nhưng không tài liệu nào đọc tài liệu kia — nên hồ sơ có **hai định nghĩa cho `q_c`, ba schema, ba danh mục event, bốn ngày Tết, bốn hệ số quy đổi sổ↔người, và hai công thức cho `k`**. Hơn 30 lần các tài liệu viết "ghi vào ADR-000", và ADR-000 không tồn tại.

File này là ADR-000. Mọi mục dưới đây có chung một tính chất: **sai hôm nay là 0 pw; sai sau khi có dữ liệu là mất lịch sử hoặc viết lại một lớp.**

## Quyết định — 12 bất biến

| # | Bất biến | Giá trị chốt | Sai thì mất gì |
|---|---|---|---|
| 1 | **Ngày logic** | `04:00 → 03:59` ICT. VN không có DST ⇒ `04:00 ICT = 21:00 UTC` là hằng số vĩnh viễn | Mọi `book_date` lịch sử |
| 2 | **`group_alive`** | **`A ≥ 3`** người nộp ≥1 tấm trong 7 ngày gần nhất. r04 §13 nói ≥3, §64 nói ≥2 — chốt **≥3**, hết. `duo_alive` (≥2) đo song song, **chỉ để tham khảo**, không bao giờ vào một quyết định đi/dừng | Mọi con số retention |
| 3 | **Ngưỡng `k`** | `k = 1` nếu `A_eff ≤ 2`; `k = 2` nếu `A_eff ≥ 3`. **Ngưỡng phẳng, KHÔNG `ceil(0,6×A)`** | Tính đơn điệu ở A=4 |
| 4 | **`A_eff`** | **`A_eff = min(A(D), A(D−1))`** — `k` KHÔNG được tính trên `A` của cùng ngày | Sổ 2 người **mất chuỗi đúng vào ngày có thêm bạn mới**: A nhảy 2→3, k nhảy 1→2, present=1 < 2. `04` §9.1 |
| 5 | **Mẫu số của `q_c`** | **`q_c_roster` = có mặt / `roster_size`**, `roster_size` = số người nộp ≥1 tấm trong **3 ngày đầu**, **đóng băng 14 ngày**. `q_c` mẫu số trượt chỉ là cột báo cáo | Mẫu số trượt làm **`q_c` TĂNG khi sổ chết** (0,54 → 0,90 khi mất 3/5 người) ⇒ GT-01 PASS trên một cái sổ đang chết. `06` §9 BĐ-1 |
| 6 | **Streak khi được van đỡ** | **ĐÓNG BĂNG** (không tăng). "Chuỗi 6" mà có 2 ngày không ai nộp là một con số nói dối | Niềm tin vào mọi con số trên card |
| 7 | **"Đủ mâm"** | `present == A_eff` **VÀ `A_eff ≥ 2`**. Không có điều kiện thứ hai thì sổ một người ngày nào cũng "đủ mâm" | Một phần thưởng mất nghĩa ở đúng nhóm dễ tổn thương nhất |
| 8 | **TOANG không bao giờ tự động gán** | `proof_status` chỉ có `xong \| toang`. **VẮNG KHÔNG PHẢI MỘT GIÁ TRỊ** — không tồn tại được một hàng dữ liệu biểu diễn "người X hôm nay vắng" | P2 ở tầng CSDL. Không có hàng thì không có gì để render thành ô trống có tên |
| 9 | **Cohort quyết định** | Các sổ mở trong **tuần 1–4 của beta: 02/12 → 29/12/2026**. Đọc `sổ-D28` ngày **26/01/2027**, n dự kiến ~24, **KTC 95% ≈ ±17 điểm — in kèm mỗi lần trích dẫn** | Tết (03–12/02/2027) bóp méo cohort tuần 5–9, và đó chính là con số mở khoá widget |
| 10 | **Công thức `B`** | `B` = tỉ lệ **sổ nhánh A** (mẫu số **5**, loại sổ số 0 của founder) còn `group_alive` ở ngày 14 của Bước 0 = 21/09/2026, `group_alive` tính trên roster đóng băng. ⚠️ **n=5 ⇒ `B` chỉ nhận {0,20,40,60,80,100}%, bước nhảy 20 điểm.** Chỉ tuyên bố "đạt" khi biên ≥1 bậc, hoặc khi cả hai đều ≥60% | M1 là tiêu chí thành công **duy nhất** của MVP, và trước hôm nay không tài liệu nào định nghĩa mẫu số của nó |
| 11 | **Hệ số quy đổi sổ ↔ người** | **A = 4,0 người active/sổ** [ước lượng]. `DAU = sổ × 4,0 × q_c`. Thay bằng số đo thật (`avg(book_day.active_count)`) sau Bước 0 | Bốn hệ số khác nhau (5 / 4,0 / 3,6 / 2,65 DAU-sổ) làm trần beta pháp lý dao động 80–111 sổ |
| 12 | **Hai counter pháp lý** | `monthly_visits` (vàng 6.000 / đỏ 8.500) · `monthly_active_persons` (vàng 600 / đỏ 850). Đếm từ **dòng code đầu tiên** | Ngưỡng NĐ 147/2024 là **OR** và nhánh lượt-truy-cập bind trước ~2,5 lần. Con số "700 người" cũ báo động **muộn 2,5 lần** |

## Hệ quả

**Được:** mọi phép đo trong 12 tháng tới so sánh được với nhau, và với neo `B` của Bước 0.

**Mất:** không còn quyền "nới định nghĩa cho vừa dữ liệu". Nếu một ngưỡng phải sửa, sửa **kèm ngày và lý do bằng văn bản**, và ngưỡng mới chỉ có hiệu lực **từ cohort sau**, không phải cohort đang đo.

**Khoá mình vào:** mục 5 và mục 9 khoá cách đọc kết quả; mục 4, 7, 8 khoá hành vi sản phẩm ở tầng CSDL.

## Khi nào xem lại

| Mục | Điều kiện xem lại |
|---|---|
| 2 (`group_alive`) | **Không bao giờ trong 12 tháng đầu.** Đây là mục dễ bị nới nhất khi số xấu |
| 5 (`q_c_roster`) | Sau 3 tháng có dữ liệu thật, nếu roster 3-ngày tỏ ra quá hẹp cho sổ hình thành chậm |
| 9 (cohort) | Nếu beta trượt khỏi 02/12 — lúc đó cohort dịch theo, và **mọi ngày ở §6 của `06` phải viết lại cùng lúc** |
| 11 (A = 4,0) | **Ngay sau Bước 0**, thay [ước lượng] bằng số đo. Mọi bảng chi phí/pháp lý/doanh thu phải quy đổi lại cùng lúc |
| 12 (counter) | Khi luật sư trả lời câu 1b — định nghĩa "lượt truy cập" và "người dùng thường xuyên" chênh nhau **hơn 10 lần** giữa ba cách hiểu |
