# LỖ HỔNG MẢNG SẢN PHẨM / VẬN HÀNH — ĐÃ XỬ LÝ

**Ngày:** 04/09/2026 · **Nguồn:** `_audit-report.md` mục **THIẾU** (cả hai lần: §Audit consistency và §Audit completeness) · **Luật:** `_rulings.md` thắng mọi nguồn khác; chỗ bảng phán quyết không nói thì chọn con số thận trọng hơn và ghi rõ.

**Phạm vi ghi của vòng này:** `01`, `02`, `07`, `08`, `09` + file mới trong `docs/plan/`. **Không chạm** `03`, `04`, `05`, `06`, `10`, `docs/adr/`.

---

## 0. TỔNG KẾT MỘT BẢNG

| | Số lượng |
|---|---|
| Lỗ hổng mảng sản phẩm/vận hành trong mục THIẾU (đã gộp trùng lặp giữa hai lần audit) | **22** |
| **Đã lấp thật** (viết nội dung đầy đủ, có số) | **15** |
| Đã được vòng phán quyết trước lấp, vòng này chỉ củng cố | **3** |
| **Chấp nhận thiếu**, có lý do + hạn + chủ sở hữu | **4** (gộp 5 mục gốc) |
| Tài liệu mới tạo | **2** (`13-runbook-van-hanh.md`, `12-kiem-chung-nen-tang.md`) |
| Tài liệu đã sửa | **5** (`01`, `02`, `07`, `08`, `09`) |
| pw phát sinh | **0** — mọi thứ viết ra là **quy trình**, không phải hạng mục kỹ thuật. Ngoại lệ duy nhất được **định giá nhưng chưa chi**: luồng đồng ý asset công khai **+0,20 pw** (chỉ khi Asset 2 mở ở T13+) |

---

## 1. ĐÃ LẤP — 15 LỖ HỔNG

### 1.1. "Một runbook Bước 0 duy nhất — founder cần MỘT tờ giấy đọc lúc 20:40, không phải bảy tài liệu"

**Lấp ở:** `13-runbook-van-hanh.md` **§1** (mới).
**Nội dung:** tờ giấy in được cho 14 tối (20:40 mở Form → 20:50 Canva → 21:00 dán/gửi riêng → 21:10 ghi số → **21:15 đóng máy**), kèm hai dòng cảnh báo lớn ngay trên tờ giấy (*hôm nay có phải 15/09 hay 18/09 không* · *ba điều không bao giờ làm*). Cộng: **bảng van vượt giờ** (hết ngày 3 vẫn >20 phút/sổ ⇒ giảm nhánh A 5→4 sổ, ghi lại rằng bước nhảy của `B` thành 25 điểm; ba tối liên tiếp quá 22:00 ⇒ xuống sàn 6 sổ; dưới sàn ⇒ **hoãn**, không hạ ngưỡng), **checklist chuẩn bị 8 dòng hạn 07/09**, và **ba thứ đọc mỗi tối mà không có cột nào chứa** (sổ 0 người 2 ngày · ai dùng đường thoát hiểm Google · ai tự nhắc nhau).
**Ngân sách đã chốt lại:** 130 phút/tối = **15,2 giờ/tuần** — bằng đúng ngưỡng kill gate `>15 giờ/tuần`, trước khi có một dòng code. Đã nối thẳng vào **D-02**.

### 1.2. "Điều gì xảy ra ngay sau khi Bước 0 kết thúc" + "Mẫu văn bản quyết định 22–23/09" (nửa vận hành)

**Lấp ở:** `11` **§2** (mới) · trỏ từ `02` **§5.13** và `01` §12.
**Nội dung:** lịch giờ đầy đủ của ngày **22/09** — 08:00 **đóng băng dữ liệu** (bản `FROZEN`, chỉ-đọc; *sửa số sau khi đã nhìn số là cách tự lừa mình rẻ nhất*) → 08:30 tính **6 con số** viết tay ra giấy trước khi mở tài liệu nào → 10:00 **exit survey 4 câu** (gồm câu đo ma sát công cụ tách khỏi ma sát động lực, và câu WTP của `10` T2) → 11:00 **tin nhắn đóng Bước 0** gửi vào 8 nhóm (nguyên văn, 4 dòng, **không hứa ngày ra mắt**, **không xin ai giữ nhịp tiếp**) → 13:00 **văn bản quyết định** → 16:00 **xử lý dữ liệu** → 23/09 dòng code đầu.
**Mẫu văn bản quyết định** (§2.3): 9 ô số bắt buộc · 4 ô đọc kết quả · 5 câu D phải trả lời trước dòng code đầu · **mục "BA ĐIỀU TÔI ĐÃ SAI" bắt buộc điền** (*không điền được nghĩa là chưa đọc dữ liệu, mới chỉ đang tìm trong dữ liệu thứ mình đã tin từ trước*) · nhánh DỪNG có checklist riêng.

### 1.3. Kịch bản "Bước 0 cho kết quả xám"

**Lấp ở:** `11` **§2.7** (mới) · `07` **§4 CỔNG #1** (khối 🔶 mới + viết lại hàng CHẠY LẠI) · `02` §5.13.
**Con số mới, chưa từng có trong hồ sơ:** một lần chạy lại dời dòng code đầu từ 23/09 sang **08/10** = trễ **15 ngày lịch** ⇒ cửa sổ tới feature freeze 29/11 từ 67 ngày (**3,11 pw**) xuống 52 ngày (**2,41 pw**) ⇒ **tiêu 0,70 pw** ⇒ **D-01 đổi từ "cắt 1,08 pw" thành "cắt ≥1,78 pw"**.
**Ba luật đi kèm:** (1) đổi **đúng một** biến — đảo người tuyển · bỏ đường thoát hiểm Google Form · kéo cửa sổ im lặng lên 4 ngày (mỗi biến kèm điều kiện chọn và điều cấm kèm theo); (2) **P8 áp cho Bước 0 y như áp cho beta** — cấm thêm tính năng/nhắc/quà/founder tự dán card; (3) **xám lần 2 đọc là XẤU**, không có lần 3, và luật này vào ADR-000 **hôm nay** chứ không quyết vào 07/10 khi đang thất vọng.
**Nhánh chưa ai viết, nay đã viết:** *xám + D-02 chọn 15 giờ/tuần* ⇒ 3,5 pw = 14,4 tuần ⇒ beta không chạy được 02/12 **kể cả khi không chạy lại** ⇒ **cấm chạy lại**, chọn thẳng DỪNG hoặc cắt MVP-0 xuống **≤2,4 pw**.

### 1.4. "Sổ chết thì làm gì" (phần vận hành)

**Lấp ở:** `11` **§7** (mới) · `08` §7.3 (khối trỏ + một hệ quả mới).
**Nội dung:** bảng 4 trạng thái × cột **"founder làm gì"** — và câu trả lời ở cả bốn dòng là **"không gì"**, được ghi ra như một **quyết định** chứ không phải một sự lười. Cộng **5 điều cấm** (không nhắn sổ đang tụt · không push/email nhắc · không hiển thị trạng thái "chết" · không xoá dữ liệu sổ chết để tiết kiệm — 10.000 sổ ≈ 200 GB ≈ $3/tháng · **không loại sổ chết khỏi mẫu số**, đây là cách gian lận retention phổ biến nhất). Cộng bảng **sổ chết được đọc thế nào** trong `sổ-D28` / `B` / trần vận hành 35 / trần pháp lý 60.
**Phát hiện mới đưa vào `08` §7.3:** hệ quả của **A45** chưa tài liệu nào ghi ra — mã 6 ký tự chỉ dùng được khi *sổ < 8 người **VÀ** card ≤ 7 ngày tuổi*, nên một **sổ ngủ 26 ngày không thể mở bằng mã 6 ký tự**. Ba việc bắt buộc: màn `Chốt sổ lại` nhắc gửi card mới chứ không nhắc mã · **không in mã lên card tái sinh** của sổ ngủ >7 ngày · luồng này cần snapshot test riêng vì là ca duy nhất hai hằng số TTL cắt nhau.

### 1.5. "Người rời sổ thì dữ liệu xử lý ra sao"

**Lấp ở:** `11` **§8** (mới) · `08` **§6.5b** (mới).
**`13` §8.1:** bảng **14 dòng** — mọi thứ gắn với một người và nó đi đâu ở từng nút (ảnh gốc · thumbnail · ô trong lưới · `goal_text` · card PNG đã gửi · thông báo cho nhóm · **`roster_size`** · `A`/`A_eff` · chuỗi · event 20 với `was_removed_by_moderation` · `audit_log` · device token · **quyền đòi bản sao dữ liệu vẫn còn sau khi rời** · mặc định ⏳ chờ **D-04b**). Cộng §8.2 (không có kick — ba hệ quả, kèm câu trả lời chuẩn khi bị nhờ "đuổi giùm") và §8.3 (sổ `archived`: **ba điều kiện đủ mới được dọn**, cấm xoá trước khi quy trình export đã chạy thật một lần).
**`08` §6.5b:** phần UI trước nay chưa có — **nguyên văn hai màn xác nhận** (có số tấm thật, có câu *"Nhóm sẽ không nhận được thông báo nào"* bắt buộc ở cả hai, **không có câu giữ chân** vì làm khó một hàng rào an toàn là dark pattern, hai chạm là hết) · **3 giây sau khi bấm** (về màn 0, một dòng `Đã rời sổ.`, **không đề nghị mở sổ mới**) · bảng **người rời thấy gì / người ở lại thấy gì**.
**Hệ quả ngược đời được nói ra:** `roster_size` **không co lại** khi có người rời ⇒ sổ mất 2/5 người sẽ thấy `q_c` tụt kể cả khi 3 người còn lại nộp đủ ⇒ **UI tuyệt đối không được hiển thị `q_c` cho người dùng**; dòng riêng tư dùng mẫu số khác và hai mẫu số không được đứng cạnh nhau trên một màn.

### 1.6. "Quy trình vận hành hằng ngày của founder (checklist mỗi tối)" — giai đoạn beta

**Lấp ở:** `11` **§3** (mới) · trỏ từ `07` T13.
**Nội dung:** checklist tối beta **6 phút** (so với 130 phút của Bước 0 — *nếu không ngắn hơn một bậc thì phần mềm không làm được việc nó được xây để làm*), 4 dòng "không làm trong tối beta", bảng **3 job tự động** với cách kiểm tra sáng hôm sau và ca sự cố tương ứng, và ghi chú **không có job nào chạy lúc 21:00** (job `mo_chot_so` đã cắt — A04; thấy cron 21:00 trong repo là lỗi). Cộng **§4** (sáng Chủ nhật 20 phút: đọc **phân bố** chứ không đọc trung bình; luật *"không đổi gì dựa trên một tuần dữ liệu"*) và **§5** (ngày 1 mỗi tháng, 30 phút, 6 hàng ngưỡng).
**Ngân sách kiểm chứng:** ≈**1,7 giờ/tuần ở 12 sổ** · **4,2 ở 30 sổ** · **4,9 ở 35 sổ**, trên trần 10 giờ/tuần.

### 1.7. "Xử lý sự cố"

**Lấp ở:** `11` **§6** (mới) — **12 ca**, mỗi ca có **một hành động trong 15 phút** và **một trong 24 giờ**, và không ca nào yêu cầu viết code trong đêm.
Ca 1 report nội dung (**auto-hide TOÀN CỤC ở report đầu tiên** — ẩn-chỉ-với-người-báo-cáo không thoả nghĩa vụ; tải dự kiến **4–18 vụ/tháng ≈ 20–90 phút**) · ca 2 cơ quan nhà nước (**24h / khẩn cấp 6h**, không tự trả lời nội dung pháp lý, **không được miễn kể cả khi `service_paused`**) · ca 3 xoá/bản sao dữ liệu · ca 4 `rollover` trượt 04:05 (**cấm vá tay `book_day`**, biên chấp nhận 120 giây) · ca 5 5xx/down (**không sửa code sau 22:00**) · ca 6 ảnh gốc quá 72h (**và cảnh báo không nhầm với thumbnail — thumbnail KHÔNG xoá**) · ca 7 hoá đơn >$60 (**không bao giờ giải quyết bằng cách xoá thumbnail của người dùng**) · ca 8 đèn vàng (khởi động hồ sơ Giấy phép MXH **trong ngày**) · ca 9 đèn đỏ (`signup_paused` **ngay trong ngày**; dừng nhận sổ mới ≠ dừng dịch vụ) · ca 10 Zalo cảnh báo domain (**≥2 máy mới kết luận**; mua domain thứ hai trong tuần) · ca 11 `share_token` lọt ra ngoài (**thu hồi bằng cách sinh token mới**; sản phẩm không hứa gỡ được bản đã lan) · ca 12 nội dung nghiêm trọng (**ẩn ngay không chờ SLA**; ca duy nhất được liên hệ luật sư ngoài lịch và khoá sổ không báo trước; **cổng tuổi chỉ lưu `is_16_plus` ⇒ runbook không tra được tuổi thật ⇒ xử theo nội dung, không theo hồ sơ**).

### 1.8. "Không có quy trình bàn giao cho Tết"

**Lấp ở:** `11` **§10** (mới).
**Nội dung:** bảng hằng số Tết chốt (mùng 1 = **06/02/2027**, **không phải 17/02**; cửa sổ `book_date` 03/02→12/02 = **10 ngày**; băng tan 13/02 = **mùng 8**; lịch card 03/02 · 06/02 · 09/02 · 12/02; chỉ số Tết đọc **13–15/02**; MVP-0 chỉ có **một hằng số `remote_config['freeze.dates']`**, 6–7 thành phần còn lại T13–T18 hạn 25/01/2027) · bảng so **D-07** hai nhánh · **gói bàn giao một trang** đưa tận tay người trực (3 việc được làm · **danh sách ĐỎ gọi ngay bất kể giờ** · 4 việc cấm · **"bạn KHÔNG có mật khẩu nào, chỉ có 1 login CHỈ-ĐỌC"**) · 5 câu trả lời mẫu · checklist 7 dòng trước khi rời nhà.
**Hoà giải ba hạn khác nhau:** hạn quyết **15/12/2026** (thận trọng nhất trong ba tài liệu); **hạn chót tuyệt đối để có một cái tên là 20/01/2027** vì nhánh (b) đòi thông báo trước 14 ngày; quá 20/01 ⇒ (b) tự động, thông báo phát trong ngày.

### 1.9. "Quyền truy cập / cung cấp bản sao dữ liệu (export)"

**Lấp ở:** `11` **§9** (mới) · `07` §8(c) (sửa dòng cũ).
**Nội dung:** thi hành **D-06 phương án (a)** — SLA **10 ngày**, **20–30 phút/yêu cầu**, **0 pw**; quy trình **6 bước** (xác minh bằng **quyền truy cập sổ, không bằng tên** — sản phẩm không lưu tên thật đủ tin cậy · 3 truy vấn SQL · lấy thumbnail theo prefix R2 · ZIP kèm `DOC.txt` giải thích từng cột bằng tiếng Việt thường · link tải hết hạn 7 ngày · ghi `audit_log`) · **ba thứ KHÔNG nằm trong bản export** và phải nói thẳng (ảnh gốc đã xoá sau 72h · ảnh người khác · `goal_text` đã xoá) · **mẫu trả lời trong 24 giờ đầu** để không quá SLA vì quên · **ngưỡng phải build thật**: ≥3 yêu cầu/tháng trong 2 tháng liên tiếp ⇒ mở lại D-06 và chi 0,3 pw.
**Sửa ở `07` §8(c):** dòng cũ *"công cụ export CHƯA TỒN TẠI… một script ~0,1 pw phải nằm trong hạng mục 9"* đã lỗi thời sau D-06 ⇒ thay bằng trỏ `13` §9 (0 pw) + ràng buộc cấm xoá sổ `archived` trước khi quy trình chạy thật một lần.

### 1.10. "Không có kế hoạch dữ liệu cho việc dừng dự án" / "Kế hoạch dừng/đóng cửa tử tế"

**Lấp ở:** `11` **§11** (mới) · `07` §8(c) (khối trỏ + 4 việc bị bỏ sót).
**Nội dung:** checklist **14 ngày lịch** theo mốc D0 → D+30, mỗi dòng có cột *"không được bỏ qua vì"*. Bốn thứ `_audit-report.md` gọi tên và trước nay không ai trả lời, nay đã trả lời:
1. **Thông báo phải nêu NGÀY TẮT CHÍNH XÁC** (= D+14), không phải "sắp dừng".
2. **Xử lý ảnh Bước 0 còn sót trên Drive** — đáng lẽ đã xoá 22/09, phải kiểm lại ở D+14.
3. **Giữ `audit_log`** khi xoá mọi thứ khác — nghĩa vụ ≥2 năm, độc lập với việc dừng dịch vụ.
4. **Ai trả lời khiếu nại sau khi tắt** — chốt: founder giữ **một email sống 12 tháng** sau ngày tắt (cùng hạn với domain), kiểm **1 lần/tuần**, ghi địa chỉ vào trang tĩnh và vào Chính sách. **0đ, ~5 phút/tuần.**
Cộng: **SLA export rút xuống 3 ngày** trong 14 ngày đóng cửa (10 ngày dài hơn cửa sổ ⇒ vô nghĩa) · **không tắt khi còn yêu cầu export chưa trả lời** · trang tĩnh thay vì 404.

### 1.11. "Checklist buổi kiểm chứng nền tảng 04/09 — không có kịch bản test, không có ma trận máy, không có mẫu ghi kết quả"

**Lấp ở:** `12-kiem-chung-nen-tang.md` (mới, **HÔM NAY**) · trỏ từ `01` §10(h)/§12 và `07` T0.
**Nội dung:** §0 chuẩn bị 20 phút + **trang test ~40 dòng HTML tĩnh, không thu thập gì** (giữ nguyên lập luận "không hệ thống thông tin nào của mình" của `05` GIAI ĐOẠN 0) · §1 **ma trận máy** với luật *"một câu chỉ được coi là ĐÃ TRẢ LỜI khi ≥2 máy giống nhau; 3 máy ra 3 kết quả ⇒ ghi KHÔNG ĐỒNG NHẤT và xử lý y như KHÔNG"* · §2 **kịch bản thao tác từng câu** cho cả 7 câu + việc thứ 8 (D-08 StatCounter) · §3 **mẫu ghi kết quả** dạng bảng ASCII chép thẳng vào ADR-000, có ô ký **quyết định phái sinh** và ô **"ba điều bất ngờ"** · §4 **thứ tự chạy 2 giờ** · §5 **ba nhánh dự phòng** nếu buổi này trượt.
**Xếp hạng mới, chưa tài liệu nào làm:** **câu 2 (chọn ảnh trong webview) là câu quan trọng nhất** — sáu câu còn lại làm mất một phần hiệu quả, câu này làm mất **sản phẩm**. Vì thế nó chạy **đầu tiên**, phút 20–35.
**Cạm bẫy được cắm cờ:** nếu câu 6 ("Đã xem" của Zalo) trả lời CÓ thì rất cám dỗ bỏ 112 shortlink cho đỡ 30 phút — **không được**, vì "đã xem tin nhắn" đo việc **thấy**, không đo việc **mở**, và H1 là giả thuyết về việc mở.

### 1.12. "Nhánh B (không kèo) của Bước 0 chưa được đặc tả đủ để chạy"

**Lấp ở:** `02` **§5.11** (mới).
**Nội dung:** bảng 7 hàng đặc tả nhánh B (Form **một câu** · **không có ô nhập kèo** · **không nhãn** · dòng 2 của card **giống hệt** A vì ba con số không phái sinh từ kèo · **bỏ hẳn chân card `✓/💀`** · caption **giống hệt** A) + **luật một-biến** (A và B chỉ khác đúng lớp kèo — điều kiện để H3 nói được gì).
**Chốt điều trước nay không định nghĩa được:** `q_x` ở nhánh B **KHÔNG TỒN TẠI** ⇒ sheet ghi **`n/a`**, **tuyệt đối không ghi `0`** (ghi 0 sẽ kéo trung bình xuống và tạo kết luận sai về "người ta không hoàn thành kèo"); ngưỡng `q_x_roster ≥ 0,30` ở CỔNG #1 **chỉ tính trên 5 sổ nhánh A**.
Cộng: bảng **6 thứ phải viết lại nếu BỎ KÈO thắng** (đã định giá: −1,0 pw kèo/preset/US-13 · −0,15 pw nhãn và chân card · ~4 giờ viết lại 20/60 câu bank · Asset 3 **không có gì để viết lại** vì đã cắt vĩnh viễn) + điều cấm (**không giữ kèo lại "cho chắc"** — nhánh B thắng nghĩa là lớp kèo *làm giảm* tỉ lệ có mặt) + luật khi xuống sàn 6 sổ (**cắt cả hai nhánh theo tỉ lệ**, không dồn hết vào B).

### 1.13. "Không có ai đo `monthly_visits` trong Bước 0"

**Lấp ở:** `02` **§5.12** (mới) · chủ sở hữu tiếp theo ghi ở `13` §5.
**Nội dung:** **112 shortlink đã tồn tại** và chúng đo đúng thứ cần đo. Ba đại lượng ghi vào sheet `obs`, chi phí **0đ, 5 phút/tuần**: `visits_per_person_30d` · lượt/sổ/tháng · đối chứng số lần nộp.
**Vì sao đắt giá:** **A72 (25 lượt/người/tháng)** là số nhân **một mình** biến ngưỡng luật 6.000/8.500/10.000 lượt thành trần **60/85/100 sổ**, mang nhãn `[ước lượng, ảnh hưởng 🔴 rất cao]`, và **toàn hồ sơ không có thiết bị đo nào trước beta**. Bước 0 là lần duy nhất đo được với chi phí 0đ.
**Giới hạn ghi kèm:** shortlink đếm click không dedupe theo người, và Bước 0 chỉ có một link/sổ/ngày ⇒ con số ra là **chặn dưới**. Nếu đã ≥25 thì A72 đang **lạc quan** và trần pháp lý thật **thấp hơn 60 sổ**.
**Sở hữu tiếp:** `13` §5 nhận việc hiệu chỉnh `monthly_visits ÷ monthly_active_persons` thật, **hạn đọc số đầu tiên 01/01/2027** — trước đây không ai sở hữu việc này.

### 1.14. "Không có kế hoạch nào cho tháng 5–10"

**Lấp ở:** `09` **§6.3** (mới) — thi hành **D-10** ("ghi một dòng vào ADR-000, không viết tài liệu thứ 11") ở mức đủ để thi hành.
**Phát hiện quan trọng nhất, chưa ai nói ra:** khoảng trũng thật là **T4 → T8/2027** và nó nằm **SAU** kill gate 31/03/2027 ⇒ **nếu kill gate cho kết quả DỪNG thì khoảng trũng không tồn tại như một vấn đề**. Kế hoạch chỉ có hiệu lực ở nhánh "đi tiếp".
**Ba luật, 0 pw, không tính năng mới:** (1) **không tuyển trong T5–T7/2027** (tuyển vào đáy = đổ nước vào thùng thủng, anti-pattern #11); (2) trũng là lúc **trả nợ** — tự động hoá 6 truy vấn để hạ 8,4 phút/sổ/tuần · **đo lại A72 thật** · viết nốt T13–T18; (3) đọc **một** chỉ số suốt trũng: `sổ-D28` theo cohort tháng, **không đọc DAU** (DAU trong trũng đo mùa vụ, không đo sản phẩm). Cộng hai ngưỡng đọc ở **30/09/2027**.
**Điều cố ý không làm:** không mở lại toa thuốc widget của digest #26 — cổng widget đã có ngày và ngưỡng riêng (`sổ-D28 ≥ 35%`, n≥24, 26/01/2027, KTC ±17 điểm); *mở một cổng bằng cách viện dẫn khoảng trũng là mở một cổng bằng nỗi sợ*.

### 1.15. "Không có luồng đồng ý cho Asset 2 'Sổ tháng' đăng công khai"

**Lấp ở:** `09` §5, mục mới **"Luồng đồng ý cho asset đăng CÔNG KHAI"** — thi hành **điều kiện (b) của QĐ-35**, thứ trước nay chỉ là một cụm từ không kiểm tra được.
**Nội dung:** bảng **ba phạm vi** P-1 trong sổ / P-2 card vào nhóm chat / P-3 công khai, mỗi phạm vi một mức đồng ý — và cảnh báo rằng **đồng ý ở P-1/P-2 KHÔNG bao trùm P-3** (sai lầm mặc định dễ mắc nhất). **Luồng 4 bước không rút gọn:** chỉ người trong sổ bấm được · màn liệt kê **đích danh ai có ảnh** kèm câu *"Người khác lưu lại rồi thì không gỡ được nữa"* · **từng người đồng ý riêng, mặc định là KHÔNG, im lặng không phải đồng ý**, một người từ chối ⇒ ô bỏ trống không tô xám không ghi tên, <3 người đồng ý ⇒ không sinh · **đồng ý chỉ có giá trị cho đúng lần đó**, không có "luôn đồng ý". Cộng 4 ràng buộc (rút lại được ⇒ xoá trong **24 giờ** · **không tra được tuổi thật** nên không có ngoại lệ tuổi · không `goal_text`/không tên người vắng/không nhãn thất bại cá nhân · ghi `audit_log`).
**Con số mới:** Asset 2 được định giá +0,15 pw, **luồng đồng ý là +0,20 pw nữa** ⇒ **chi phí thật ~0,35 pw, không phải 0,15**. Phải vào `pw-ledger.md` **trước** khi mở.

---

## 2. ĐÃ ĐƯỢC VÒNG PHÁN QUYẾT TRƯỚC LẤP — VÒNG NÀY CHỈ CỦNG CỐ (3)

| Lỗ hổng | Trạng thái | Vòng này thêm gì |
|---|---|---|
| **"Không ai định nghĩa cách TÍNH `B`"** | ✅ Đóng bởi **A26/QĐ-26** | Chép công thức + cảnh báo độ phân giải vào `13` §2.2 để nó nằm đúng chỗ founder cầm giấy ngày 22/09: **bước nhảy 20 điểm ở n=5 vs 8,3 điểm ở beta 12 sổ** ⇒ chỉ tuyên "đạt" khi `≥ B + 20 điểm` hoặc khi cả hai ≥60% |
| **"Không có kế hoạch cho trường hợp `navigator.share({files})` / Service Worker trả lời KHÔNG"** | ✅ Phương án B đã viết ở `08` (D-09, 0,05 pw, `remote_config['card.share_mode']`) | `12` §2 câu 4 và câu 5: **kịch bản đo thật** (đếm số chạm và bấm đồng hồ đường thay thế), **hệ quả dây chuyền** khi SW hỏng (mất hạng mục duy nhất được ship trong vùng xám H1 ⇒ *vùng xám không còn hành động rẻ nào*, phải ghi thẳng vào ADR-000), và cảnh báo **duyệt 0,05 pw TRƯỚC buổi test** — *sau khi biết kết quả thì việc duyệt không còn là một quyết định, nó là một phản xạ* |
| **"Bảo mật trang public"** (`share_token` lộ ra ngoài) | ✅ Đóng bởi **A42–A44** (TTL 7 ngày · độc lập `book.code` · slug không chứa `code6` · noindex+robots.txt) | Thiếu phần **vận hành**: `13` §6 **ca 11** — thu hồi bằng cách sinh token mới, báo sổ bằng một câu, và nói thẳng rằng **sản phẩm không có công cụ gỡ nội dung khỏi nơi khác và không được hứa là có** |

---

## 3. CHẤP NHẬN THIẾU — 4 MỤC, KÈM LÝ DO · HẠN · CHỦ SỞ HỮU

> Luật của mục này: *chấp nhận thiếu* ≠ *bỏ qua*. Mỗi mục có **lý do vì sao vòng này không lấp**, **ai lấp**, và **hạn**. Không mục nào là "để sau".

### 3.1. Các file ADR (`ADR-000-bat-bien.md`, `pw-ledger.md`) — **NGOÀI PHẠM VI GHI**

- **Lý do:** phạm vi ghi của vòng này chỉ gồm `docs/plan/`; `docs/adr/` không thuộc. **A87 quy định rõ `pw-ledger.md` là sổ cái pw DUY NHẤT** và không tài liệu nào được tự ghi sổ cái — kể cả tài liệu này.
- **Vòng này đã làm gì để giảm gánh:** `11` và `12` viết sẵn **nội dung** của 9 quyết định sẽ phải chép vào ADR-000 (giao thức xám lần-2-là-xấu · roster đóng băng từ ngày 18 · TTL các loại · ranh giới ngày · trần vận hành ≠ trần pháp lý · hằng số Tết · người trực · email 12 tháng sau khi tắt · con số D-08). Chép, không nghĩ lại.
- **Chủ sở hữu:** founder. **Hạn:** **07/09/2026** (ADR-000 + `pw-ledger.md` cùng lúc, theo A104/A106).
- **Rủi ro nếu trượt:** hơn 30 tham chiếu trong 12 tài liệu trỏ tới một địa chỉ trống; **toàn bộ kiến trúc chống-tự-lừa-mình treo trên file chưa viết**.

### 3.2. Bản nháp ToS + Chính sách quyền riêng tư + Quy tắc cộng đồng — **CHỦ QUYỀN `05`**

- **Lý do:** nội dung pháp lý thuộc `05` (ngoài phạm vi ghi). Runbook chỉ **thi hành** những gì các văn bản đó hứa, không được viết thay.
- **Vòng này đã làm gì:** `11` chốt **ba con số phải xuất hiện trong văn bản** và đang mâu thuẫn giữa các tài liệu — TTL thumbnail (**vĩnh viễn**, 180 ngày ⇒ IA, không xoá) · **SLA kép 48h / 24h–6h** · `goal_text` **xoá cùng sổ**. Cộng hai câu phải có mà chưa ai nêu: **email liên hệ sống 12 tháng sau khi dừng dịch vụ** (§11) và **khai người trực Tết là bên xử lý dữ liệu** nếu chọn nhánh (a) (§10.2).
- **Chủ sở hữu:** `05` + founder. **Hạn:** **07/09/2026** (bản nháp), hoàn chỉnh trước **T8 (26/10–01/11)** vì T8 chặn beta T13 *"không có ngoại lệ"*.

### 3.3. Sổ đăng ký ~70 câu hỏi mở đã khử trùng lặp, sắp theo hạn — **THUỘC VÒNG PHÂN XỬ, KHÔNG THUỘC MẢNG SẢN PHẨM**

- **Lý do:** đây là cơ chế **quản trị liên tài liệu** (gộp câu hỏi của cả 10 file + digest), không phải lỗ hổng sản phẩm/vận hành. Viết nó từ trong mảng này sẽ tạo **bản thứ hai** cạnh tranh với `_rulings.md` mục D — đúng thứ audit đang phàn nàn.
- **Vòng này đã lấp phần thuộc mảng mình:** **mẫu văn bản quyết định 22/09** (`13` §2.3) chứa 5 câu D chặn dòng code đầu tiên, và mọi mục D chạm vận hành đều được trỏ tại chỗ kèm hạn (D-01 · D-02 · D-04b · D-06 · D-07 · D-10).
- **Chủ sở hữu:** vòng phân xử / founder. **Hạn:** **07/09/2026** (trước Bước 0), vì nhiều câu có hạn 03–07/09 đã tới hoặc đã trễ.

### 3.4. `audit_log` chưa có trong schema thật; "người dùng thường xuyên" chưa có định nghĩa pháp lý

- **Lý do:** schema thuộc `03`/`04`; định nghĩa pháp lý thuộc `05` và **chờ luật sư**. Cả hai ngoài phạm vi ghi.
- **Vòng này đã làm gì — và vì sao nó nâng độ ưu tiên:** `13` §6 dùng `audit_log` **ở 4/12 ca sự cố** (ca 1, 7, 11, 12) và §11 bắt **giữ `audit_log` khi xoá mọi thứ khác**. Nghĩa là `audit_log` không còn là "hạng mục pháp lý rẻ nên làm sớm" mà là **công cụ vận hành hằng ngày** — nó phải nằm trong migration đầu, đúng như `02` US-00/`07` T4 đã ghi (+0,15 pw, S24/A49).
  Với "người dùng thường xuyên": `13` §5 dùng **định nghĩa tạm của A56** (`monthly_active_persons` = person khác nhau có ≥1 `proof` trong 30 ngày) và ghi rõ nó là **tạm**, kèm cảnh báo `05` §12: chênh lệch giữa ba cách hiểu là **hơn 10 lần**, quyết định trần beta là **60 hay 600 sổ**.
- **Chủ sở hữu:** `03`/`04` (schema, trước commit đầu **23/09**) · `05` + luật sư (định nghĩa, theo lịch trả lời của gói 7 câu).

---

## 4. HAI VIỆC PHẢI LÀM TRONG HÔM NAY VÀ TUẦN NÀY (phái sinh từ vòng này)

| Ngày | Việc | Vì sao không dời được |
|---|---|---|
| **04/09 — HÔM NAY** | Chạy `12-kiem-chung-nen-tang.md`. Nếu hết giờ thì **chỉ chạy câu 2 và câu 5** — hai câu duy nhất có thể giết sản phẩm. Duyệt **0,05 pw** của D-09 **trước** khi test | Ngày 08/09 Bước 0 khởi động; ngày 23/09 dòng code đầu. Một câu chưa trả lời sau 07/09 phải vào ADR-000 dưới dạng **giả định CÓ NHÃN** — giả định không nhãn là cách một con số sai đi vào sáu tài liệu |
| **07/09 — HẠN CHẾT** | 8 dòng checklist chuẩn bị ở `13` §1.3, trong đó **112 shortlink** và **script S9 (thông báo & đồng ý dữ liệu)** là hai dòng không tái dựng được sau ngày 08/09 | Không có shortlink ⇒ ngày 22/09 **không tồn tại con số H1 nào**, kể cả để DỪNG. Không có S9 ⇒ Bước 0 thu ảnh thật của ~32 người mà không có một dòng đồng ý nào |

---

## 5. THỨ VÒNG NÀY CỐ Ý KHÔNG LÀM

1. **Không đặt hằng số mới.** Mọi con số có nguồn ở `_rulings.md` mục A, hoặc là phái sinh **có in phép tính** (0,70 pw của lần chạy lại · 2,41 pw cửa sổ còn lại · 4–18 vụ report/tháng · 1,7/4,2/4,9 giờ ops/tuần · +0,20 pw luồng đồng ý · ~0,35 pw chi phí thật của Asset 2).
2. **Không ghi sổ cái pw.** `docs/adr/pw-ledger.md` là nơi duy nhất (A87). Khoản +0,20 pw của luồng đồng ý được **định giá và gắn điều kiện**, không được coi là đã chi.
3. **Không quyết thay founder.** D-01, D-02, D-04b, D-06, D-07, D-09, D-10 chỉ được **trỏ tới kèm hạn và khuyến nghị**; mọi khối cảnh báo giữ nguyên cấu trúc 2-lựa-chọn-+-khuyến-nghị.
4. **Không chạm `03`, `04`, `05`, `06`, `10`.** Chỗ nào lời giải nằm ở đó thì ghi rõ là **ngoài quyền**, kèm chủ sở hữu và hạn — không sửa lén, không diễn giải lại.
5. **Không tạo `RUNBOOK.md` thứ hai ở gốc repo.** `13-runbook-van-hanh.md` **là** file đó. Một tài liệu, một địa chỉ — nếu không thì lỗ hổng "hướng dẫn vận hành nằm rải ở 7 tài liệu" tự tái sinh dưới tên khác.
