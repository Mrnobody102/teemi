# HƯỚNG A — THU NHỎ TRIỆT ĐỂ: NGHI THỨC CHỨNG KIẾN

_Thiết kế sản phẩm v2 cho Teemi. Ngày viết: 2026-08-28. Tác giả: product designer được giao hướng A._

> **Tuyên bố phạm vi.** Tài liệu này thiết kế MỘT hướng. Nó không so sánh với hướng khác, không đề xuất kết hợp. Nó cố làm hướng này mạnh nhất có thể, rồi nói thẳng chỗ nó vẫn yếu.

---

## 0. Một câu tóm tắt quyết định

Bỏ boss. Bỏ HP. Bỏ damage. Bỏ combo. Bỏ xếp hạng. Bỏ nhãn "Báo Thủ". Bỏ vote sus.

Giữ đúng một thứ: **nhóm bạn nhìn thấy nhau làm thật.** Và một hình ảnh tập thể duy nhất — **Tường** — chỉ có thể lớn lên, không bao giờ đi xuống.

Lý do định lượng, không phải lý do thẩm mỹ: ở q = 0,40 (tỉ lệ một người nộp proof/ngày) và n = 5, sự kiện "hôm nay có chuyện gì đó xảy ra trên màn hình chung" trong DOC 1 là combo 5/5 = **1,02%/ngày** (1 lần/98 ngày). Cùng q, cùng n, sự kiện tương ứng ở hướng A là "Tường có thêm ít nhất một viên hôm nay" = 1 − 0,6⁵ = **92,2%/ngày**. Chênh **90 lần**. Đây là số học thuần, không phải quan điểm.

---

## 1. Câu định vị — bằng ngôn ngữ người dùng

Câu người dùng nói với bạn mình:

> **"Mỗi đứa một việc. Tối chụp một tấm cho cả hội coi."**

10 từ. 0 khái niệm mới cần dạy. Không có từ nào mà một người 19 tuổi ở Việt Nam chưa từng nói. So sánh với DOC 1 (§6.3): _"Mỗi người chọn một kèo riêng. Cả nhóm cùng giữ nhịp, nộp proof, cà khịa nhẹ, đánh boss chung và lưu lại hành trình cả nhóm cùng tốt lên"_ — 24 từ, 3 khái niệm mới (kèo/proof/boss chung), và theo phản biện #24 thì ở bậc truyền miệng thứ 2 người nghe sẽ chỉ giữ lại một từ duy nhất: "boss" — dẫn tới hiểu sai là game.

Ở hướng A, từ duy nhất sống sót qua bậc 2 phải là **"tường"** hoặc **"tấm ảnh"** — cả hai đều không dẫn tới hiểu sai.

Câu founder dùng (nội bộ, không bao giờ in ra ngoài): _một nghi thức chứng kiến hằng ngày cho nhóm bạn thân, trong đó mỗi người theo đuổi một cam kết khác nhau._

**Về tên:** phản biện #23 đã kiểm chứng trực tiếp — `teemi`, `temi`, `tumi`, `tuma` đều trả về Temu ở vị trí #1 trên cả App Store VN lẫn US. Hướng A không sửa được lỗi tên. Đề xuất giữ nguyên khuyến nghị của phán quyết chiến lược: đổi sang **"Chụm"** (một âm tiết, tiếng Việt đọc được, nghĩa = tụ lại, query store trả về gần như 0 kết quả). Tên artifact trong app là **Tường**. Trong tài liệu này tôi vẫn gọi sản phẩm là Teemi để khỏi rối.

---

## 2. Core loop — 5 bước, kèm thời gian thật

Đơn vị: giây, đo trên máy Android tầm trung (đối tượng >85% thị trường VN).

| # | Bước | Ai làm | Giây | Ghi chú |
|---|---|---|---|---|
| 1 | Nhận nhắc 20:30 (hoặc liếc widget) | hệ thống | **0** | Widget Android hiển thị `Tường 3/5 · còn chỗ của mày`. Không cần mở app để biết trạng thái. |
| 2 | Mở app → thấy **hàng hôm nay**: ảnh của những người đã nộp | người nộp | **5–7** | Đây là phần thưởng đến TRƯỚC nghĩa vụ. Không có màn chờ, không có splash. |
| 3 | Chụp proof: chạm ô trống của mình → camera trong app → chụp → gửi | người nộp | **8–10** | Đúng 3 chạm. Không filter, không caption bắt buộc, không chọn từ thư viện ở MVP (chống ảnh cũ, và rẻ hơn). |
| 4 | Người khác thả reaction (5 emoji cố định) hoặc 1 dòng ≤60 ký tự | người xem | **4–6** | Reaction gộp thành 1 push/10 phút/người nhận. |
| 5 | Xem Tường lớn thêm (không phải mỗi ngày — trung bình 2–3 lần/tuần) | cả nhóm | **7–12** | Lưới ảnh cuộn theo ngày. Nút "Lưu ảnh Tường 30 ngày" để share vào Zalo. |

**Tổng thời gian/ngày:** người nộp ~15–20 giây; người chỉ xem ~8–12 giây.

Con số này giống Locket (session tính bằng giây) chứ không giống habit tracker. Theo phản bác trong phản biện #7, với app dạng utility thì **session ngắn là dấu hiệu thiết kế đúng, không phải dấu hiệu sắp chết** — biến dự báo gỡ app là _số ngày không mở_, không phải _độ dài session_.

**Điều gì KHÔNG có trong loop:** không có bước duyệt proof, không có bước vote, không có bước xem HP, không có bước đọc recap tự sinh, không có bước chọn đòn đánh. Mỗi bước bị cắt là một hệ số nhân bị xoá khỏi funnel hằng ngày.

---

## 3. Màn hình MVP — 7 màn

| # | Màn | Nội dung | Vì sao không cắt được |
|---|---|---|---|
| 1 | **Vào nhóm** | Tạo nhóm mới, hoặc nhập mã 6 ký tự, hoặc mở thẳng từ deep link | Đơn vị sản phẩm là nhóm |
| 2 | **Chọn kèo** | 8 preset + ô tự viết ≤40 ký tự. Đúng 1 chạm. Chỉ hiện 1 lần trong đời tài khoản | Đây là điểm khác biệt duy nhất còn lại so với Locket |
| 3 | **Chụp** | Camera trong app. Chụp → xem lại → gửi | Là nghĩa vụ hằng ngày |
| 4 | **Hôm nay** (màn chính) | Hàng ảnh hôm nay của cả nhóm + reaction. Ô của mình nếu trống chính là nút chụp | Là phần thưởng hằng ngày |
| 5 | **Tường** | Lưới ảnh cuộn theo ngày, phân trang 30 ngày. Nút xuất ảnh share | Là tài sản tích luỹ — thứ duy nhất chống novelty decay |
| 6 | **Tôi** | Kèo của tôi · tỉ lệ ngày đã nộp · giờ nhắc · hướng dẫn tắt tối ưu pin · rời nhóm · rời + xoá dấu vết · xoá tài khoản | Apple 5.1.1(v) bắt buộc xoá tài khoản trong app; NĐ 356/2025 bắt buộc xử lý yêu cầu xoá trong 20 ngày |
| 7 | **Ảnh chi tiết** | 1 ảnh full · ai thả gì · báo cáo · chặn · xoá ảnh của chính mình | Apple Guideline 1.2 đòi đủ bộ filtering + reporting + blocking |

Ngoài app còn **một trang web** (không tính là màn app): trang xem trước nhóm, đọc được + thả tim được **mà không cần cài**. Chi tiết ở §9.

**Không có trong MVP:** màn recap, màn boss, màn bảng xếp hạng, màn season, màn cửa hàng, màn danh sách nhóm (1 người = 1 nhóm ở MVP; cột `group_id` vẫn viết vào schema để không tự đóng cửa vòng lan truyền A→B, chi phí thêm = 0).

---

## 4. Cơ chế — bảng số cụ thể

Hướng A vẫn có cơ chế. Nó chỉ không có cơ chế **trừng phạt**. Mọi thứ dưới đây là hằng số ghi cứng, không tuning.

### 4.1. Tường — quy tắc

- Mỗi proof = **1 viên**. Viên chính là ảnh thật, hiển thị dạng thumbnail 200px.
- Tường **chỉ tăng**. Không có phép trừ trong toàn hệ thống. Không tồn tại cột nào có thể giảm.
- Miss = không có viên. **Không render ô trống, không render dấu X, không render tên người thiếu.** Tường xếp khít (masonry theo ngày). Một ngày cả nhóm miss thì ngày đó đơn giản không có dòng nào.
- Ranh giới ngày: **04:00 → 03:59 hôm sau, Asia/Ho_Chi_Minh**, một múi giờ duy nhất. Nộp lúc 1h sáng vẫn tính cho ngày hôm trước. Đây là quyết định có chủ đích: nó xoá một trạng thái thất bại nhân tạo với tệp Gen Z ngủ muộn, chi phí = 1 dòng code.
- Không có streak đứt được. Thay bằng hai con số:
  - **Công khai trong nhóm:** `Ngày thứ N của nhóm` — đếm số ngày kể từ ngày tạo nhóm. Chỉ tăng, không điều kiện.
  - **Riêng tư, chỉ mình thấy:** `Bạn đã nộp 23/30 ngày`. Là tỉ lệ, không phải chuỗi. Không ai khác thấy con số này.

### 4.2. Bảng số quyết định — xác suất "Tường lớn lên hôm nay" = 1 − (1−q)ⁿ

q = xác suất một thành viên active nộp proof trong ngày. Nguồn ước lượng q: dải 0,35–0,55 theo phân tích trong phản biện #1 (BeReal 55% là tỉ lệ tuân thủ cửa sổ 2 phút, tức sàn tham chiếu, không phải trần).

| q | n=5 | n=3 | n=2 | n=1 | **So sánh: combo 5/5 của DOC 1** |
|---|---|---|---|---|---|
| 0,30 | **83,2%** | 65,7% | 51,0% | 30,0% | 0,24% (1 lần/411 ngày) |
| 0,40 | **92,2%** | 78,4% | 64,0% | 40,0% | 1,02% (1 lần/98 ngày) |
| 0,50 | **96,9%** | 87,5% | 75,0% | 50,0% | 3,12% (1 lần/32 ngày) |
| 0,55 | **98,2%** | 90,9% | 79,8% | 55,0% | 5,03% (1 lần/20 ngày) |
| 0,60 | **99,0%** | 93,6% | 84,0% | 60,0% | 7,78% (1 lần/13 ngày) |

Đọc bảng: ngay cả ở **q = 0,30 và nhóm co về 2 người** — kịch bản bi quan nhất mà phản biện #6 dự báo (P(còn ≥3 người ở D30) ≈ 12,5%) — Tường vẫn lớn lên **51% số ngày**. Ở DOC 1, cùng kịch bản đó thì màn hình chung đứng yên gần như vĩnh viễn.

Đây là toàn bộ luận cứ của hướng A gói trong một bảng: **hướng A không nhạy với q, DOC 1 nhạy bậc 5 với q.**

### 4.3. Tốc độ tích luỹ — số viên kỳ vọng

Số viên mới/ngày = n × q.

| Cấu hình | Viên/ngày | Viên sau 30 ngày | Ngày để đạt 100 viên |
|---|---|---|---|
| n=5, q=0,40 | 2,0 | 60 | 50 |
| n=3, q=0,40 | 1,2 | 36 | 83 |
| n=2, q=0,40 | 0,8 | 24 | 125 |
| n=5, q=0,55 | 2,75 | 82 | 36 |

**Mốc Tường** (là mốc của nhóm, không của cá nhân; không ai bị nêu tên): 25 · 50 · 100 · 250 · 500 viên. Chạm mốc → app tự render một ảnh Tường và mở sẵn share sheet Zalo. Không có phần thưởng ảo, không có vật phẩm, không có tiền tệ trong app — đây vừa là quyết định sản phẩm vừa là quyết định pháp lý (NĐ 174/2026 phạt 60–80 triệu nếu cho mua bán vật phẩm ảo).

### 4.4. Reaction

- Đúng **5 emoji cố định**: 🔥 👏 😂 🫡 ❤️. **Không có reaction tiêu cực. Không có nút "sus". Không có downvote.** Đây là quyết định chống bắt nạt rẻ nhất trong toàn bộ thiết kế: nếu không tồn tại nút tiêu cực thì không tồn tại đường cho hành vi tiêu cực đi qua giao diện.
- Comment tự do 1 dòng ≤60 ký tự, có nút báo cáo + chặn, SLA gỡ 24h. Giữ free-text vì theo phản biện #7, cà khịa bằng template luôn thua cà khịa tự do, và Guideline 1.2 không đòi "chỉ được dùng template" mà đòi đủ bộ filtering/reporting/blocking/contact.
- **Throttle push:** gộp tối đa 1 push/10 phút/người nhận, trần **2 push/ngày/người** (1 nhắc 20:30 + 1 gộp reaction). Con số này lấy thẳng từ red flag [tech] "nhóm 5 người cà khịa 30 reaction/tối = 30 push = uninstall".

### 4.5. Kèo

8 preset một chạm: ngủ trước 12h · đi bộ/chạy 20 phút · học 15 phút · đọc 5 trang · không trà sữa hôm nay · tập 15 phút · uống 2 lít nước · dọn bàn.

Cộng ô tự viết ≤40 ký tự. Bỏ hoàn toàn form if-then 3 trường của r03 khỏi onboarding (đẩy xuống mục nâng cao sau ngày 7, hoặc bỏ hẳn). Bước này rơi từ ~60 giây xuống ~5 giây.

**Quyết định lưu trữ có hệ quả pháp lý:** preset được **copy thành chuỗi text vào cùng một cột `goal_text`**; `preset_id` chỉ tồn tại phía client để đếm analytics tổng hợp, **không lưu per-user trên server**. Lý do: r06 §4.1 cảnh báo lưu goal dưới một taxonomy sức khoẻ có cấu trúc là đường ngắn nhất mất miễn trừ Điều 38.2 Luật 91/2025. Một cột text tự do thì không phải taxonomy; tám preset_id gắn với từng người thì là.

Đổi kèo: cho phép **1 lần/30 ngày**, ghi vào Tường như một dòng trung tính (`Ngày 12 · Huy đổi kèo`), không push, không thông báo.

### 4.6. Media — số học chi phí

- Nén client-side: cạnh dài 1280px, JPEG chất lượng 0,72 → **~120KB/ảnh** (ước lượng từ ảnh camera phổ thông). Thumbnail 200px (~12KB) cũng sinh ở client.
- Nhóm 5 người, q=0,40 → 2 proof/ngày → 240KB/ngày → **87,6 MB/nhóm/năm**.
- 1.000 nhóm → 87,6 GB sau 1 năm. Cloudflare R2 ($0,015/GB/tháng, **egress $0**) → **~$1,3/tháng**.
- Đối chiếu: giả định của red flag [integrity] (5 proof/ngày × 300KB) cho 550MB/nhóm/năm — **gấp 6,3 lần**. Chênh lệch đến từ hai quyết định: nén mạnh hơn và chấp nhận q thật thay vì giả định q=1.
- Egress là biến chính khi Tường được cuộn nhiều. Trên Supabase Storage ($0,09/GB) thì 1.000 nhóm × 3 lần cuộn/tuần × 720KB/trang ≈ 43GB/tháng ≈ **$3,9/tháng**; trên R2 = **$0**. Ở quy mô này chênh lệch nhỏ, nhưng ràng buộc kiến trúc phải đặt từ commit đầu (`StorageAdapter` interface), vì red flag [tech] đã đo ở 100k DAU chênh lệch là $645 vs $139/tháng.
- **Cấu hình sống sót** ở ~5.000 DAU: ~$28/tháng (VPS $6 + R2 $7 + FCM $0 + OTA tự host + Sentry free + Apple/domain $10) — lấy nguyên từ phán quyết chiến lược mục 11.

---

## 5. Cắt gì so với DOC 1, và vì sao cắt được

| Cắt | Lý do cắt được |
|---|---|
| **Boss, HP, damage, combo, critical hit** | Bảng §4.2: cơ chế này ở q thực tế tạo ra 1 sự kiện/98 ngày. Không phải lỗi tuning, là lỗi hàm (phản biện #1). Thay bằng Tường, cùng q cho 92,2%/ngày |
| **Boss hồi máu** | Là quyết định thiết kế duy nhất biến một lần miss của một người thành mất mát ĐÃ CÓ của bốn người khác (phản biện #18). Không patch được bằng câu chữ |
| **Season 14/28 ngày** | Season chỉ tồn tại để boss có điểm bắt đầu/kết thúc. Không có boss thì không cần season. Xoá luôn state machine season start/end, recompute idempotent, cutoff, chặn backfill (~3 pw theo c-scope §94) |
| **Xếp hạng, role "Báo Thủ", danh hiệu tiêu cực** | Red flag [behavior] xếp đây là điểm rủi ro shame cao nhất toàn product; phản biện #21 chỉ đúng vùng Apple 1.2 có thể gỡ app không báo trước |
| **Vote sus / vote-to-fail** | Red flag [integrity]: gây drama thật ngoài đời, tổn thất nằm ở quan hệ nên không patch được |
| **Bài toán quy đổi damage giữa kèo khó/dễ** | Không cắt — **tan biến**. Không có bảng điểm chung thì không có gì để quy đổi. Đây là "giả định lớn nhất chưa được kiểm chứng của toàn bộ sản phẩm" theo red flag [behavior], và hướng A làm nó không còn tồn tại |
| **Recap tự sinh hằng ngày/hằng tuần** | c-scope ước 2,5 pw. Thay bằng một hàm render ảnh Tường tĩnh (0,3 pw). Recap là thứ founder thích, không phải thứ user quay lại vì nó |
| **Memory Capsule như một sản phẩm riêng** | Tường **chính là** memory layer. Không cần hệ thống thứ hai |
| **Casual mode / Support Mode / Life Happens / Skip / Pause / Comeback Season** | Toàn bộ nhóm tính năng này tồn tại để làm mềm một trạng thái thất bại. Không có trạng thái thất bại thì không cần chúng. Đây là chỗ cắt sâu nhất và ít ai để ý nhất |
| **Trust score, anti-cheat, pHash** | Không có phần thưởng giá trị thật thì không có động cơ gian lận. Red flag [integrity]: "nghiêm khắc hoá quá sớm là rủi ro số 1, lớn hơn rủi ro gian lận rất nhiều" |
| **Gacha, sponsor, voucher, premium skin, AI recap, AI memory search, Buddy Match, public feed, chat, B2B** | Đã bị chính DOC 1 §12.1 liệt là scope creep |
| **Nội dung: 1 con boss × 4 trạng thái, 200–300 câu roast, art season** | c-scope ước ~8 pw nội dung. Hướng A cần ~1,5 pw (icon, 8 dòng preset, 20 câu gợi ý comment, copy onboarding, layout share card, ảnh store) |

**Tổng cắt:** DOC 1 ước ~33 pw kỹ thuật + ~8 pw nội dung = 41 pw. Hướng A: **9,5 pw kỹ thuật + 1,5 pw nội dung = 11 pw**. Cắt **~73%**. So với bản MVP đã cắt sẵn của c-scope (11,5 pw kỹ thuật + phần nội dung), hướng A cắt thêm ~17% kỹ thuật nhưng cắt ~80% phần nội dung/art — và quan trọng hơn là cắt phần rủi ro không đo được bằng pw.

---

## 6. Phản biện được hướng này giải quyết

Trích đích danh từ `_issues-digest.md`:

1. **#1 [FATAL] "Khoảnh khắc cả nhóm nộp đủ xảy ra 1 lần/98 ngày — và boss hồi máu mỗi ngày không nghỉ"** → **tan biến hoàn toàn.** Không có combo, không có HP, không có phép trừ. Bảng §4.2 thay thế bảng q⁵ bằng bảng 1−(1−q)ⁿ.
2. **#18 [MAJOR] "Boss hồi máu vì mày đấy là đổ lỗi công khai có tên người"** → **tan biến.** App không còn cấu trúc nào biến miss của A thành mất mát của B.
3. **#3 [MAJOR] "Tự đặt độ khó + thưởng chung = cuộc đua xuống đáy"** → **tan biến về mặt cấu trúc.** Cuộc đua xuống đáy là chiến lược trội chỉ khi payoff là payoff chung. Ở hướng A không có payoff chung nào phụ thuộc độ khó kèo.
4. **#4 [MAJOR] "Giả thuyết thay thế thắng về bằng chứng: thứ giữ chân là ĐƯỢC NHÌN THẤY NHAU, và boss chính là thuế đánh lên nó"** → hướng A **chính là** giả thuyết đó, được ship nguyên bản. Funnel onboarding rơi từ 6 bước xuống 4; ràng buộc ≥3 người để bắt đầu bị xoá.
5. **#24 [MAJOR] "SÁU câu định vị = không có câu nào; boss vừa dễ lan truyền nhất vừa gây hiểu sai nặng nhất vừa rủi ro pháp lý cao nhất"** → còn đúng một câu, 10 từ, 0 khái niệm mới.
6. **Red flag [legal] "BOSS CHUNG CÓ THỂ BỊ XẾP LÀ TRÒ CHƠI ĐIỆN TỬ G1"** → **rủi ro về gần 0.** Không còn "nhiều người chơi tương tác đồng thời qua máy chủ" theo nghĩa game: không HP, không trận đấu, không vật phẩm, không tiền tệ.
7. **Red flag [behavior] "Role gắn nhãn bản sắc kiểu Báo Thủ là điểm rủi ro shame cao nhất"** → cắt thẳng.
8. **Red flag [behavior] "Bài toán quy đổi damage giữa goal khó/dễ HIỆN CHƯA ĐƯỢC GIẢI"** → tan biến (xem §5).
9. **#9 [MAJOR] "MVP cực nhỏ thực chất là 17 hệ thống ≈ 33 person-week"** → xuống 11 pw tổng.
10. **#21 [MAJOR] "Vị thành niên + Apple Guideline 1.2"** → **giảm mạnh, không hết.** Ba thứ khiến Apple gỡ app (ranking bêu tên, vote sus, roast nhắm cá nhân có nhãn) đều bị cắt. Còn lại comment free-text — rủi ro thông thường của mọi app UGC, xử lý bằng report/block/SLA 24h.
11. **Red flag [integrity] "Vote-to-fail gây drama thật ngoài đời"** → cắt thẳng.
12. **Red flag [tech] "Spam noti reaction"** → throttle + trần 2 push/ngày ghi vào thiết kế từ MVP.
13. **#5 [MAJOR] "Cold start: 29 lượt cài organic mới ra 1 nhóm sống"** → **giảm một phần.** Bỏ ràng buộc ≥3 người để bắt đầu, bỏ bước duyệt proof rule, kèo xuống 1 chạm. Nhưng phép nhân funnel vẫn còn (xem §7).

---

## 7. Phản biện hướng này KHÔNG giải quyết được

Nói thẳng. Đây là phần quan trọng nhất của tài liệu.

1. **#26 [MAJOR] "MOAT = 0 trong 6 tháng đầu" — hướng A làm chỗ này TỆ HƠN.** r01 xác định điểm khác biệt duy nhất của Teemi trong 16 app khảo sát là bộ ba _"mục tiêu khác nhau + trận đấu chung + private-first"_. Hướng A giữ 2/3 và bỏ đúng cái thứ ba. Cái còn lại — "mỗi người một kèo + private-first + ảnh mỗi ngày" — mô tả một sản phẩm rất gần Locket/Yope, với ma sát cao hơn (phải chọn kèo, phải chụp thứ liên quan đến kèo) và không có phân phối. Đây là cái giá thật của hướng A và không có cách nào nói giảm.
2. **#7 [MAJOR] "Zalo hút mất phần thưởng, Teemi giữ lại nghĩa vụ" — chưa giải, và mất một trong ba lá chắn.** Phản biện #7 liệt kê 3 thứ không screenshot được vào Zalo: (a) widget, (b) timeline tích luỹ, (c) trạng thái boss dùng chung real-time. Hướng A **mất hẳn (c)**. Nó chỉ còn đứng trên (a) và (b). Hệ quả: **widget Android là bắt buộc, không thương lượng.** Nếu widget bị cắt thì hướng A không còn lý do tồn tại bên cạnh Zalo group.
3. **#6 [MAJOR] "P(nhóm 5 người sống 30 ngày) ≈ 12,5%"** — cải thiện nhưng không xoá. ~40% nhóm messaging chết trong tuần đầu (Qiu et al. WWW 2016, toàn bộ log WeChat) là baseline vật lý; không cơ chế sản phẩm nào chạm được.
4. **#13 [MAJOR] "Ở 10.000 DAU app đã lỗ; hoà vốn lương 1 người cần 60k–120k DAU"** và **#16 "trần VN-only ~2,6 tỷ VND/năm ở 1 triệu MAU"** — hướng A không đụng gì tới kinh tế. Cắt scope làm giảm chi phí build, không làm tăng trần doanh thu.
5. **#23 [MAJOR] "teemi → Temu"** — là vấn đề tên, không phải vấn đề cơ chế. Hướng A không sửa được; phải đổi tên bằng một quyết định riêng.
6. **#5 [MAJOR] cold start** — giảm nhưng không giải. Vẫn cần ≥2 người thật để có bất kỳ giá trị nào. `installs_per_activated_group` vẫn phải đo, không dự đoán.
7. **#19 [MAJOR] "goal free-text vs không roast goal nhạy cảm"** — phần nguy hiểm nhất **còn nguyên**. Kịch bản Linh 17 tuổi đặt kèo "hôm nay ăn dưới 1200 kcal", chụp ảnh bữa ăn mỗi tối, nhóm thả 🔥: hướng A vẫn cung cấp một **reinforcement schedule hằng ngày, có khán giả** cho hành vi hạn chế ăn. Bỏ boss không chạm gì tới điều này. Cần một hàng rào riêng, không phải hệ quả của hướng A.
8. **Luật ANM 116/2025 Điều 16.2 (cha mẹ đứng tên cho user <16)** và **NĐ 147/2024 ngưỡng ~1.000 người dùng thường xuyên/tháng phải xin Giấy phép MXH** — **không giảm chút nào.** Ngược lại: sản phẩm giờ là chia sẻ ảnh giữa người dùng một cách thuần khiết hơn, tức **rõ ràng là mạng xã hội hơn** so với phiên bản có boss. Data localization (NĐ 53/2022) và Điều 32 BLDS 2015 (quyền hình ảnh cá nhân) áp dụng **nặng hơn**, vì ảnh giờ là toàn bộ sản phẩm.
9. **#22 "Không có metric nào phát hiện được tác hại"** — hướng A giảm bề mặt gây hại nhưng không thêm metric nào phát hiện nó.
10. **Novelty decay / khoảng trũng tháng 5–10** — Tường là câu trả lời được đề xuất, nhưng nó là **giả thuyết chưa kiểm chứng**, y hệt boss trước đó. Không được phép giả định nó đúng.

---

## 8. Rủi ro MỚI do chính hướng này tạo ra

1. **Mất toàn bộ tính cấp bách. Đây là rủi ro số 1 của hướng A.** Boss tạo deadline: không nộp thì hôm nay nhóm đứng yên. Hướng A cố ý làm miss **không tốn gì cả** — Tường vẫn lớn nhờ người khác, không có ô trống, không có nhãn. Hệ quả logic: nếu miss không tốn gì thì q sẽ tụt. Bảng §4.2 nói hướng A chịu được q thấp — nhưng nó không nói q sẽ không tụt xuống 0,15. **Đây là đánh đổi trung tâm và tôi không có bằng chứng nó thắng.** Thứ duy nhất còn giữ q là mong muốn có mặt trong ảnh chung, cộng widget nhắc.
2. **Ảnh proof lặp lại đến mức chết reaction.** BeReal/Locket có nội dung đa dạng vì ảnh là "bạn đang làm gì". Ảnh proof thì theo cấu trúc là **cùng một khung hình mỗi ngày**: ảnh chụp app đếm bước, ảnh cốc nước, ảnh trang sách. Sau 2 tuần, reaction/proof sẽ giảm — mà reaction chính là toàn bộ phần thưởng của hướng A. Rủi ro này **đặc hữu của hướng A** và không tồn tại ở DOC 1 (ở đó phần thưởng là HP tụt, không phụ thuộc ảnh có thú vị không). Giảm nhẹ: đo `reaction/proof theo tuần` như metric sống-chết (§12, H3); cân nhắc cho phép 1 ảnh tự do/ngày ngoài proof — nhưng đó là thêm scope.
3. **Hội tụ về "Locket có thêm bước".** Nếu kèo trôi về tầm thường (mà không có gì ngăn, vì không còn peer-approval, không còn payoff chung), sản phẩm còn lại đúng là Locket kèm một dòng chữ. Locket đang là social app #4 tại VN với 10M+ lượt tải nội địa và đã có lãi. Hội tụ về sản phẩm của đối thủ mạnh nhất, với ma sát cao hơn, là án tử.
4. **Tường trở thành nghĩa địa ảnh.** 5 người × 90 ngày ≈ 270 thumbnail. Không có curation, không có tìm kiếm, không có highlight (đều bị cắt). Xác suất thật là sau tháng thứ 2 không ai mở màn Tường nữa — và khi đó lá chắn (b) của phản biện #7 cũng mất, chỉ còn widget.
5. **Mất từ khoá truyền miệng.** Theo phản biện #24, ở bậc truyền tin thứ 2 người nghe chỉ giữ được **một** khái niệm. DOC 1 giữ được "boss" (sai nghĩa nhưng dễ nhớ). Hướng A phải cược rằng "tường" đủ dính. "Tường" là một danh từ chung, nhạt hơn "boss" rất nhiều. K-factor có thể tụt vì lý do này, không phải vì sản phẩm tệ.
6. **So sánh xã hội im lặng vẫn còn, chỉ chậm hơn.** Hàng "hôm nay" vẫn hiện ai có ảnh ai không. Tường vẫn cho thấy mật độ ảnh theo người qua thời gian. Đó là một bảng xếp hạng ngầm dựng bằng chính cấu trúc dữ liệu. Hướng A **không xoá scapegoating, nó làm scapegoating im tiếng và chậm hơn.** Cần nói đúng như vậy, đừng tự khen là đã giải quyết.
7. **Không còn gì để A/B test ở v1.1.** Phản biện #4 kết luận hạng mục quan trọng nhất là A/B bật boss cho 50% nhóm để đo group-D28. Hướng A ship thẳng nhánh "không boss" và mất luôn nhóm đối chứng. Nếu hướng A thất bại, founder sẽ không biết là vì "chứng kiến không đủ" hay vì "thực thi tệ".

---

## 9. Cold start — 90 giây đầu của người dùng số 1, và cách có người số 2

### Người số 1 (chưa có ai trong nhóm) — kịch bản 90 giây

| Giây | Việc xảy ra |
|---|---|
| 0–8 | Mở app lần đầu. **Không có màn giới thiệu, không có carousel 3 trang.** Màn đầu tiên là một Tường giả có 4 ảnh mờ và một ô trống nhấp nháy, kèm 1 dòng: _"Mỗi đứa một việc. Tối chụp một tấm cho cả hội coi."_ Một nút: **Bắt đầu** |
| 8–14 | Đăng nhập Google/Apple, 1 chạm. Không SMS OTP (Twilio $0,2852/SMS đi VN — red flag [tech]; và nghĩa vụ xác thực SĐT theo NĐ 147 gắn với mốc pháp lý, không gắn với ngày đầu của một beta ~150 người) |
| 14–22 | **Chọn kèo:** 8 ô preset, 1 chạm. Không có màn hình thứ hai, không có if-then |
| 22–40 | Camera bật **ngay lập tức**, không hỏi. Chụp proof đầu tiên. Gửi |
| 40–55 | Ảnh rơi vào Tường. Tường hiện: **1 viên của mình + 4 ô trống có chữ "chưa ai"**. Đây là lần **duy nhất** trong toàn sản phẩm ô trống được hiển thị — vì lúc này ô trống là lời mời, không phải lời buộc tội |
| 55–90 | App tự render một ảnh share (Tường 1 viên + mã nhóm 6 ký tự + dòng "Vào đi, còn 4 chỗ") và **mở thẳng share sheet Zalo**. Không phải một màn "Mời bạn" riêng — nó là **màn kết quả của proof đầu tiên** |

Điểm mấu chốt: **lời mời không phải một bước trong onboarding, nó là phần thưởng của bước cuối cùng.** Người dùng vừa làm xong một việc và được đưa ngay một artifact để khoe. Đây là chỗ DOC 1 làm ngược (mời trước, giá trị sau) và là chỗ funnel 0,735⁴ = 29,2% được sinh ra.

### Làm sao có người thứ 2

1. **Link Zalo mở ra một trang web chơi được, không cần cài.** Người thứ 2 bấm link → thấy **ảnh thật** của người thứ 1 trên Tường + 4 ô trống + một nút **thả tim hoạt động ngay** (ghi vào DB bằng session ẩn danh). Người thứ 1 nhận push: _"Có người vừa thả tim vào ảnh của bạn."_ → **vòng lặp đã chạy trước khi có install thứ hai.** Chi phí: 1 route đọc-chỉ + 1 endpoint ghi reaction ẩn danh, ~1,2 pw (đã tính trong bảng §10).
2. **Khán giả web KHÔNG được tính là thành viên nhóm.** Đây là bẫy nới định nghĩa mà phản biện #6 và #8 cảnh báo. Khán giả web là **kênh chuyển đổi**, không phải **đơn vị retention**.
3. **Mã nhóm 6 ký tự gõ tay** làm đường dự phòng, vì Zalo có thể cảnh báo/chặn domain lạ (red flag [retention]). Mọi lời mời mang theo **link hoặc mã**, **không bao giờ mang theo một cái tên phải gõ vào store** — ràng buộc rút ra từ phản biện #23.
4. **Form tuyển beta bắt nhập tên 3 người bạn + link group chat, chỉ approve khi đủ 3.** Lấy nguyên từ r04 §105 — cách rẻ nhất biến p≈0,08 thành p≈0,25 và loại trước phần lớn nhóm sẽ chết trong tuần đầu.
5. **Trước tất cả những thứ trên: Bước 0 thủ công, 14 ngày, không một dòng code.** 6 nhóm × 5 người trong Zalo có sẵn, founder post ảnh Tường làm bằng Canva mỗi tối 21:00, đếm bằng Google Sheet. ~28 giờ, 0đ. Nếu nghi thức chứng kiến không xuất hiện ở đó — nơi bối cảnh xã hội mạnh nhất có thể — thì 11 pw code cũng không tạo ra nó.

---

## 10. Ước lượng person-week

Giả định: 1 người full-stack, đã quen React Native + Expo + Postgres. Hiệu suất thực tế 65% (tức 1 pw ≈ 1,5 tuần lịch).

| Hạng mục | pw | Ghi chú |
|---|---|---|
| Setup dự án, auth Google/Apple, xoá tài khoản trong app | 0,8 | Không phone OTP ở beta |
| Schema 4 bảng (`groups`, `members`, `proofs`, `reactions`) + RLS + `StorageAdapter` interface | 0,7 | `group_id` viết sẵn dù UI chỉ 1 nhóm — chi phí thêm 0 |
| Vào nhóm: deep link + mã 6 ký tự + **trang web đọc-được/thả-tim-được** | 1,2 | Đây là hạng mục growth quan trọng nhất |
| Chọn kèo: 8 preset + ô tự viết, 1 chạm | 0,3 | |
| Camera → nén client-side → upload R2 + hàng đợi offline | **2,0** | Hạng mục đắt nhất. Offline outbox là bắt buộc ở VN (mạng chập chờn, ROM kill app) |
| Màn Hôm nay + reaction 5 emoji + comment 1 dòng + throttle | 1,0 | |
| Tường: lưới cuộn theo ngày, phân trang 30 ngày + render ảnh share | 0,8 | |
| **Widget Android** (`react-native-android-widget`, có Expo config plugin) | 0,5 | Không thương lượng — xem §7 mục 2 |
| Push: 1 nhắc 20:30 + 1 gộp reaction + onboarding tắt tối ưu pin | 0,4 | ROM Xiaomi/Oppo/Vivo kill background |
| Analytics **cấp nhóm** + dashboard kill-criteria | 0,4 | Đo nhóm, không đo user (phản biện #11) |
| An toàn/pháp lý: report, block, rời nhóm, rời + xoá dấu vết, privacy policy | 0,6 | Apple 1.2 + 5.1.1(v) + NĐ 356/2025 |
| QA trên Android tầm trung thật + submit 2 store | 0,8 | |
| **Tổng kỹ thuật** | **9,5** | |
| Nội dung/thiết kế: icon, 8 dòng preset, 20 câu gợi ý comment, copy onboarding, layout share card, ảnh store | 1,5 | So với ~8 pw của DOC 1 |
| **TỔNG** | **11,0 pw** | ≈ **17 tuần lịch cho 1 người** ở hiệu suất 65% ≈ 4 tháng |

**Không nằm trong 11 pw:** Bước 0 thủ công (~28 giờ, tuần 1–2, không code) · ADR-001 vị trí dữ liệu (~0,2 pw) · phí luật sư 2 câu hỏi (5–15tr) · Apple Developer Individual $99 · domain.

**Cảnh báo trung thực:** 4 tháng cho 1 người vẫn là dài. Trần nên đặt theo **ngày lịch** chứ không theo pw ("beta phải chạy trước 15/12/2026"), vì trần pw tự lừa mình được bằng cách định nghĩa lại pw. Và luật đánh đổi 1-1: mọi feature mới phải cắt một feature đang có.

---

## 11. Đường lớn lên — nếu hướng này chạy

Điều kiện để được đi tiếp: **group-D28 ≥ 20%** (nhóm còn ≥3 người nộp proof trong 7 ngày gần nhất) trên ≥30 nhóm beta.

- **Bước 1 (0,5 pw):** widget iOS. Chỉ làm sau khi cohort Android xác nhận widget nâng group-D28 ≥8 điểm phần trăm (giả thuyết A13 của phán quyết chiến lược).
- **Bước 2 (0,5 pw):** mở đa nhóm trong UI. Cột `group_id` đã có sẵn từ ngày 1. Đây là vòng lan truyền quan trọng nhất — thành viên hài lòng của nhóm A rủ nhóm B — và nó rẻ vì đã trả tiền trước.
- **Bước 3 — kiếm tiền bằng vật thể, không bằng paywall (2 pw):** Tường in ra giấy. Poster ảnh ghép 100 ngày của nhóm, đặt in trong app, ~150–250k VND, giao tận nơi. Lý do chọn đường này thay vì premium digital: (a) red flag [money] cảnh báo khoá recap/share card là tự giết kênh acquisition duy nhất; (b) willingness-to-pay cho hàng số ở VN rất thấp (7–10% game user từng trả tiền) trong khi in ảnh là hành vi có tiền lệ chi tiêu thật; (c) một vật thể không share account được, xoá luôn rủi ro thị trường xám. Đây không phải venture business — nó là cách một sản phẩm nhỏ tự nuôi mình.
- **Bước 4 — chỉ khi 1, 2, 3 đều xong:** đưa lại **một** lớp cạnh tranh nhẹ, dạng **opt-in**, A/B 50% nhóm, ngưỡng ghi vào ADR TRƯỚC khi có dữ liệu: chênh group-D28 < 10 điểm phần trăm thì bỏ vĩnh viễn. Đây là chỗ boss có thể quay lại — nhưng phải quay lại như một giả thuyết được kiểm chứng, không như một tiền đề.
- **Không bao giờ (trong 12 tháng đầu):** sponsor, voucher, gacha, AI recap, vector DB, public feed, chat, B2B, mở rộng thị trường ARPU cao.

Mốc pháp lý gắn cứng vào tăng trưởng: **ở 500 người dùng thường xuyên/tháng** phải bắt đầu hồ sơ Giấy xác nhận thông báo (ngưỡng luật là ~1.000, đệm 30 ngày làm việc xử lý). Đây là một dòng trong dashboard, không phải một việc để nhớ.

---

## 12. Kiểm chứng — 3 giả thuyết, ngưỡng số

| # | Giả thuyết | Đo bằng gì | Ngưỡng ĐÚNG | Ngưỡng SAI → dừng/đổi | Khi nào có kết quả |
|---|---|---|---|---|---|
| **H1** | Nghi thức chứng kiến tự nó đủ để nhóm quay lại — không cần cơ chế trừng phạt nào | Bước 0 thủ công: 6 nhóm × 5 người, Zalo, Google Sheet | **≥50% nhóm còn ≥3 người gửi ảnh ở ngày 14** VÀ **≥2/6 nhóm có ít nhất 1 lần tự nhắc nhau mà founder không khơi mào** | <50% hoặc 0/6 nhóm tự nhắc → **không viết một dòng code nào**, tiết kiệm 11 pw | **D14 của Bước 0** (~2 tuần, 0đ) |
| **H2** | Bỏ hình phạt không làm sập tỉ lệ nộp — q giữ được ở mức Tường vẫn lớn lên gần như mỗi ngày | q = số proof ÷ (số thành viên active × số ngày), **đo riêng cho ngày 8–14** (sau khi hết mới) | **q ≥ 0,40** → ở n=3 Tường lớn 78,4% số ngày, ở n=5 là 92,2% | **q < 0,30** → chứng kiến đơn thuần không giữ được nhịp; hướng A sai ở tiền đề, không sai ở thực thi | **D14 của Bước 0**, đo lại ở **D14 beta** |
| **H3** | Phần thưởng "được nhìn thấy" không phân rã cùng với sự lặp lại của ảnh proof | reaction/proof trung bình, so tuần 1 với tuần 4 | **reaction/proof tuần 4 ≥ 60% của tuần 1** VÀ **≥3 reaction/proof** ở tuần 1 (neo: Strava ~3,5 kudos/hoạt động) | **tuần 4 < 50% tuần 1** → động cơ duy nhất của hướng A đang tắt; phải thêm nội dung tự do hoặc đổi hướng | **D28 beta** (28 ngày sau launch beta) |

Ba giả thuyết này xếp theo thứ tự rẻ→đắt và sớm→muộn. H1 và H2 trả lời được **trước khi code**. H3 là giả thuyết đặc hữu của hướng A và chỉ trả lời được sau khi có app thật — đó là rủi ro không né được.

**Neo đường cơ sở:** đừng dùng Yope D7 = 40% làm OKR (đó là user retention đo ở đỉnh tăng trưởng, dùng để neo group retention là trộn hai đơn vị). Dùng **neo nội bộ**: gọi group-D14 đo tay ở Bước 0 là **B**. Ngưỡng cho beta: **group-D14 ≥ B**. Diễn giải trần trụi — _nếu app không bằng founder ngồi post ảnh Canva mỗi tối, app không có lý do tồn tại._

---

## 13. Chốt

Hướng A là một cú đánh đổi rõ ràng, không phải một cải tiến toàn diện.

**Được:** xoá phản biện FATAL và 4 phản biện MAJOR ở mức cấu trúc chứ không phải mức câu chữ; hạ scope từ 41 pw xuống 11 pw; đưa rủi ro pháp lý G1 về gần 0; đưa xác suất "hôm nay có chuyện gì đó xảy ra" từ 1% lên 92% ở cùng tham số.

**Mất:** một phần ba điểm khác biệt duy nhất mà 16 app khảo sát không app nào có; một trong ba lá chắn chống Zalo; toàn bộ tính cấp bách hằng ngày; và từ khoá truyền miệng dễ nhớ nhất.

Điểm yếu lớn nhất của hướng này không nằm trong phần đã cắt. Nó nằm ở câu hỏi: **nếu miss không tốn gì cả, tại sao người ta nộp?** Câu trả lời duy nhất hướng A đưa ra là "vì muốn có mặt trong ảnh chung của nhóm" — và đó là một giả thuyết, đo được bằng H2 với 28 giờ công và 0 đồng, trước khi viết dòng code đầu tiên.

Không được phép bỏ qua bước đo đó chỉ vì hướng A nghe hợp lý hơn DOC 1.
