# ĐỊNH NGHĨA SẢN PHẨM v2 — CHỐT SỔ

> ## ✅ ĐÃ ĐỐI CHIẾU VỚI BẢNG PHÁN QUYẾT TRỌNG TÀI — 03/09/2026
>
> Toàn bộ file này đã được rà soát và sửa theo **`/home/huypq/teemi/docs/plan/_rulings.md`** (bảng phán quyết trọng tài ban hành ngày **2026-09-03**: 53 phán quyết mâu thuẫn, 25 phán quyết scope creep, 123 dòng từ điển giá trị chuẩn A01–A123, 10 mục cần founder quyết D-01…D-10).
>
> **Luật đọc file này từ nay:**
> 1. **Mọi hằng số trong file này lấy từ `_rulings.md` mục A (từ điển giá trị chuẩn).** Nếu một con số ở đây khác `_rulings.md`, `_rulings.md` thắng và con số ở đây là lỗi phải sửa.
> 2. File này giữ **chủ quyền về SẢN PHẨM** (câu định vị, core loop, danh sách màn, nguyên tắc thiết kế). Nó **không** còn là nguồn cho: schema (→ `04` §1), chi phí hạ tầng (→ `03`), định nghĩa metric (→ `06`), pháp lý (→ `05`), tone/UX (→ `08`).
> 3. **Sổ cái pw duy nhất là `docs/adr/pw-ledger.md`.** Bảng §4.10 dưới đây là bối cảnh lịch sử, không phải ngân sách.
> 4. **File ADR duy nhất là `docs/adr/ADR-000-bat-bien.md`** (A103). Mọi tham chiếu "ADR-001"/"ADR-002" trong file này đã được đổi thành "ADR-000 §2"/"ADR-000 §3".
> 5. Chỗ nào phán quyết ghi **CẦN FOUNDER QUYẾT (D-xx)**, file này **không tự quyết** — nó in một khối cảnh báo nêu hai lựa chọn kèm khuyến nghị, và khuyến nghị chỉ có hiệu lực nếu founder không trả lời trước hạn.
>
> Danh sách những gì bị cắt khỏi file này trong vòng phán quyết 03/09 nằm ở **§13 "ĐÃ CẮT"** cuối tài liệu; hai điểm tài liệu này không đồng ý (nhưng vẫn thi hành) nằm ở **§14 "BẤT ĐỒNG VỚI PHÁN QUYẾT"**.
>
> **Trạng thái rà soát lần 2 — 04/09/2026:** vòng sửa đầu bị ngắt giữa chừng và để sót 20 chỗ. Lần này đã thi hành nốt: §4.5 Bảng 6 (chi phí $12 → **$28–37**), §4.10 (**10 → 20 tuần lịch**), §5 (SLA kép + cắt MVP-0 trên màn 1/6), §6 mục 2 (**≥30 → ≥24 sổ**), §6 mục 3 (nhãn `[cần kiểm chứng]`), §6 mục 13/14/19, §8 (32 event, `was_removed_by_moderation`), §9 (ADR-001 → ADR-000, ô khai năm sinh → `is_16_plus`, kill gate bỏ vế doanh thu, bảng giờ vận hành), §10(d)/(f)/(h)/(i), §11 (H1/H2/H3 + neo `B`), §12 (7 câu luật sư, 8 cột, hạn 07/09), P10 (`group_id` → `book_id`). **Bốn khối cần founder quyết đã được chèn: D-02, D-05, D-09, D-10** (D-01 và D-06 đã có từ vòng trước).

_Thay thế toàn bộ DOC 1 (`docs/00-source/doc-01-product-strategy.md`) làm tài liệu nguồn. Viết 03/09/2026. Mọi tài liệu kế hoạch sau (kiến trúc, schema, backlog, go-to-market) dựa vào file này, không dựa vào DOC 1._

> **Trạng thái DOC 1:** lưu trữ, chỉ đọc, không sửa nữa. Nó là tuyên ngôn định vị đầu tiên và đã hoàn thành vai trò đó. Sáu câu định vị trong nó bị thay bằng đúng một câu ở §1. Cơ chế boss trong §7 của nó bị xoá khỏi sản phẩm, lý do ở §2 và §8.
>
> **Tên sản phẩm:** `Teemi` bị bỏ. Tên mới là **Chốt Sổ**, domain `chotso.vn`. Lý do: probe App Store cho thấy `teemi`, `temi`, `tumi`, `tuma` đều map sang Temu ở vị trí #1 ở cả VN lẫn US [FACT, probe itunes.apple.com/search 28/08/2026]. "Chốt sổ" là chữ người Việt đã nói sẵn, không phải chữ founder nghĩ ra.

---

## 1. MỘT CÂU

> # **"Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm, không ai cài app."**

13 từ. Không khái niệm mới. Không có từ nào mà một người 19 tuổi ở Việt Nam chưa từng nói.

**Đây là câu duy nhất được dùng từ giờ trở đi** — cho landing page, cho caption TikTok, cho tin nhắn tuyển beta, cho lời mời, cho mọi cuộc trò chuyện. Không có "câu bán" và "câu truyền miệng" khác nhau. Nếu founder thấy mình phải dùng hai câu khác nhau cho hai đối tượng, đó là dấu hiệu founder không tin câu bán của mình — chính là lỗi mà phản biện #24 bắt được ở hướng B.

**Khi viết ở nơi người đọc chưa từng gặp sản phẩm**, được phép thêm một dòng phụ đề — nhưng nó không phải một phần của câu:
_"— ngay trong nhóm Zalo, không cần tải gì."_

### Ba chữ BẮT BUỘC có mặt trong mọi vật liệu bán hàng
`không cài app` · `chốt sổ` · `một tấm`

### Bảy chữ BỊ CẤM, vĩnh viễn
`boss` · `game` · `nhiệm vụ` · `gamification` · `ritual` · `đứa nào chưa` · `thử thách`

Bốn chữ đầu vì rủi ro pháp lý (NĐ 147/2024 — xem §8) và vì hiểu sai. Chữ `ritual` vì đó là ngôn ngữ founder, không phải ngôn ngữ người dùng. Chữ `thử thách` vì nó kéo về vùng "challenge app" đã chết. Và **`đứa nào chưa` là chữ nguy hiểm nhất trong toàn bộ hồ sơ** — nó nằm trong câu định vị gốc của hướng D trong khi §4.4 của chính hướng đó cấm hiển thị người chưa nộp. Câu bán mới là thứ nhóm bạn nhớ, không phải bảng quy tắc kỹ thuật. Xoá nó khỏi câu là sửa 0 person-week, và nếu không sửa thì cả hàng rào chống #18 sụp từ ngày đầu.

---

## 2. QUYẾT ĐỊNH HƯỚNG

### Chốt: **D-chat-native (Chốt Sổ)** làm xương sống, ghép 11 ý từ A, B, C.

Kết quả judge panel: D-chat-native thắng 2/3 phiếu, trung bình **41,0/70** (cao nhất). A-witness 38,2 (0 phiếu), C-duo-first 35,5 (1 phiếu), B-fixed-boss 28,0 (0 phiếu).

Nhưng phiếu không phải lý do. Ba lý do thật, theo thứ tự quan trọng:

**Lý do 1 — Chi phí sai lầm thấp nhất, chênh lệch không nhỏ.** 6,5 person-week so với 10,7 (C), 11,0 (A), 12,25 (B). Quy ra tiền: 6,5 pw × 40 giờ = **260 giờ tập trung** (A80) ≈ **70–95 triệu VND chi phí cơ hội** theo lương dev VN, so với 120–200 triệu của A/B/C. ⚠️ **Quy ra lịch thì không phải 10 tuần:** ở 20 giờ/tuần × hệ số 0,65 `[ước lượng không nguồn — A81]` = **13 giờ code/tuần**, 6,5 pw = **20 tuần lịch** (A82), tức 1 pw ≈ **3,1 tuần lịch**. Với founder bus-factor-1, ngân sách thấp, chưa pháp nhân, câu hỏi đúng không phải "hướng nào tốt nhất" mà **"thí nghiệm nào rẻ nhất đủ sức làm tôi đổi ý"**. Đây là câu hỏi mà judge user đã gọi tên chính xác và chỉ hướng D vô tình trả lời đúng.

**Lý do 2 — Bước 0 và MVP CÙNG HÌNH DẠNG.** Bước 0 là founder dán card làm bằng Canva vào nhóm Zalo; MVP là một nút bấm sinh card đó. Không có bước nhảy kiến trúc. 30 giờ làm tay không bị vứt đi — nó là bản prototype thật của sản phẩm thật. Ba hướng kia đều có một khoảng đứt: Bước 0 chạy trong Zalo, MVP chạy trong app native, và không có gì đảm bảo cái sau kế thừa cái trước. Đây là lý do **kỹ thuật**, không phải lý do marketing.

**Lý do 3 — Vòng lặp sửa lỗi ngắn nhất.** Không store review, không EAS ($1.326/tháng ở 100k MAU), không chiến tranh với ROM Xiaomi/Oppo/Vivo, không OTP $0,2852/SMS. Sửa lỗi = deploy, không phải chờ duyệt. Với bus factor = 1, **độ dài vòng lặp sửa lỗi quan trọng hơn độ đẹp của sản phẩm**.

### Tại sao KHÔNG chọn B-fixed-boss

Thua ở đúng chỗ mà lăng kính bằng chứng tồn tại để bắt. Cơ chế party boss + damage **không phải chưa được thử** — Habitica đã chạy hơn 10 năm, ~5M lượt tải, vẫn niche; wiki của chính họ mô tả "nếu ai bỏ lỡ một daily, boss tấn công cả party và tất cả cùng mất máu", và review 2026 ghi "missing a day felt like punishment... guilt spirals led many to quit". Spar! làm gần y hệt Teemi và đã vô hình, không có một số liệu DAU công khai nào.

Phần toán của B là chặt nhất trong 4 tài liệu — bất biến HP đơn điệu giảm cộng test tự động 10.000 season là kỹ thuật đúng, và tôi ghép chính kỹ thuật đó vào §7 (nguyên tắc P1). Nhưng toán chặt cho một tiền đề mà mọi tiền lệ đang chống lại là cái bẫy, không phải thành tựu. Cộng ba thứ giết chết nó với founder một mình:

- **Pháp lý tệ nhất trong 4.** Đây là hướng duy nhất **cố ý** giữ lại cơ sở bị xếp trò chơi điện tử G1 theo NĐ 147/2024. Giấy phép G1 + quyết định phát hành đắt và khó hơn hẳn giấy phép MXH, và nó đòi pháp nhân founder chưa có. Biện pháp giảm thiểu của B (batch rollover để phá vế "đồng thời") là một lập luận pháp lý do founder tự đưa ra, chưa hỏi luật sư — tức đang cược sự tồn tại của dự án vào cách một điều khoản được diễn giải.
- **30 tham số phải tune liên tục** (6 tầng damage × HP theo n × chuỗi 3 boss) mà chính tài liệu B thừa nhận founder 1 người không có thời gian tune.
- **12,25 pw đè khít trần 12 pw, không có đệm.** Hạng mục nào trượt cũng làm vỡ mốc lịch.

Và điều quyết định: **boss được sửa cũng không làm người thứ hai cài app, và không tạo ra một đồng doanh thu.** Nó không chạm vào hai trong bốn thứ có khả năng giết dự án cao nhất.

### Tại sao KHÔNG chọn A-witness

A đúng về luận điểm nhưng hội tụ về án tử. Giả thuyết trung tâm của A ("thứ giữ chân nhóm bạn là ĐƯỢC NHÌN THẤY NHAU") là giả thuyết thắng về bằng chứng, và tôi giữ nguyên nó — nó là móng của sản phẩm v2 này. Vấn đề là **hình dạng** mà A chọn để ship nó.

Chính tài liệu A gọi tên rủi ro của mình ở §8.3: hội tụ về **"Locket có thêm bước"**. Locket là social app #4 tại VN, 10M+ lượt tải nội địa, ~800k tải/tháng, ~$300k doanh thu/tháng, **đã có lãi**, và 0 giây setup. Đi thẳng vào sân của đối thủ mạnh nhất, với ma sát cao hơn (phải chọn kèo, phải chụp thứ liên quan đến kèo) và không có kênh phân phối, là án tử — không phải rủi ro.

Cộng thêm điểm yếu bằng chứng nặng nhất: cược trung tâm của A là **"miss không tốn gì cả mà người ta vẫn nộp"**. Bằng chứng chạy được đi ngược lại. Duolingo tăng DAU từ ~5M lên 40M+ chủ yếu bằng retention engineering quanh streak; Streak Freeze giảm churn 21% cho user sắp đứt chuỗi. Bài học đúng là **LÀM MỀM mất mát, không phải XOÁ mất mát** — A đọc bằng chứng đó rồi đi thẳng tới đầu kia của trục. Không tồn tại app nào chứng minh "nghi thức hằng ngày với 0 hậu quả" giữ được nhịp.

Nhưng A đóng góp **6 ý được ghép vào v2**: ranh giới ngày 04:00, luật không-nút-tiêu-cực, con số đơn điệu tăng, phần thưởng trước nghĩa vụ, preset lưu free-text, trang public thả-tim-được. Xem §3 và §4.

### Tại sao KHÔNG chọn C-duo-first

C có tiền lệ trực tiếp mạnh nhất (Duolingo Friend Streak: +22% khả năng hoàn thành bài học hằng ngày ở người có ≥1 Friend Streak) và toán cold start tốt nhất trong nhóm phải-cài-app (3,0 install/đơn vị sống vs 7,9). Nếu chỉ nhìn hai trục đó, C thắng.

Ba lý do bác, theo thứ tự nghiêm trọng:

**a) C tạo một trục rủi ro MỚI mà ba hướng kia không có, và founder một mình không đủ năng lực gánh nó.** Trao đổi ảnh riêng tư 1-1 hằng ngày giữa hai người, trong đó phân khúc viral nhất là hai đứa lớp 11 và phân khúc retention cao nhất gần như chắc chắn là cặp yêu nhau. Đó là hình dạng của một kênh nội dung thân mật, kèm rủi ro CSAM. Chính §8.3 và §8.4 của tài liệu C nêu rủi ro này và không có lời giải nào ngoài microcopy. Một sự cố duy nhất loại đó không phải bug để patch — nó kết thúc dự án và kết thúc cá nhân founder.

**b) Duo dễ ra đời hơn nhưng KHÔNG sống dai hơn.** Chính bảng của C: `duo_alive` D30 nằm trong dải **6,5%–19,1%**, so với `group_alive` D30 của nhóm 5 là 12,5%–19,1%. Dự phòng bằng 0 — tín hiệu và cái chết trùng nhau. Ở nhóm 5, founder có 2–3 tuần nhìn nhóm yếu đi và can thiệp.

**c) Chi phí xã hội của việc bắt chọn ĐÚNG MỘT đứa.** Trong một nhóm 5 người, "kèo với ai" là một hành vi có ý nghĩa xã hội thật. Cơ chế danh mục 3 duo làm chuyện đó tệ hơn: nó dựng một bảng xếp hạng ai-là-bạn-thân-nhất ngay trên màn chính.

C đóng góp **4 ý được ghép vào v2**: nút "chọc" biến thể (tên người chốt sổ ngày mai), an toàn vị thành niên mặc định ở cấp cá nhân, chế độ sống-một-mình, ràng buộc ngôn ngữ chỉ-tham-chiếu-trạng-thái có test CI.

### Ba thứ trong hướng D nguyên bản BỊ SỬA ở v2

1. **Câu định vị mất vế "đứa nào chưa"** (§1). Nó mâu thuẫn trực tiếp với chính quy tắc §4.4 của hướng D.
2. **Thêm trạng thái thứ ba: TOANG** (§4.3). Đây là thay đổi lớn nhất so với D gốc, và nó đến từ chỗ mà cả 4 hướng đều bỏ sót — xem §10.
3. **Card ghi tên người chốt sổ NGÀY MAI** (§4.6). 0 person-week, và nó tấn công thẳng vào rủi ro cấu trúc số 1 của hướng D (điểm chết đơn: người chốt sổ).

### Ngân sách: tổng scope KHÔNG lớn hơn hướng thắng

Hướng D cam kết **6,5 pw**. Bản v2 sau khi ghép cũng là **6,5 pw**. Mọi thứ ghép vào đều đã trả bằng một thứ bị cắt — bảng đối trừ đầy đủ ở §4.9.

> ⚠️ **[Phán quyết 03/09/2026 — C08/C14, A83–A87] Câu trên đã không còn đúng khi cộng lại toàn hồ sơ.** Backlog thật tính ngày 03/09 là **≈7,25 pw** trên trần cứng **6,5 pw** (A83), vì sáu tài liệu đã xin thêm và nhiều khoản trả bằng **cùng một** khoản cắt. Riêng phạm vi **MVP-0**: trần **3,5 pw** (A84) nhưng ước lượng trung thực trên bảng US chi tiết là **4,58 pw** (A85) ⇒ **thiếu 1,08 pw phải cắt trước 22/09** (D-01). Bảng §4.9 và §4.10 dưới đây **giữ lại làm bối cảnh**; sổ cái pw duy nhất là **`docs/adr/pw-ledger.md`** (A87), luật: **một khoản cắt chỉ được chi MỘT LẦN**.

---

## 3. CORE LOOP CHỐT

Đơn vị: giây, cho **một thành viên bình thường trong một ngày**.

| # | Bước | Xảy ra ở đâu | Giây | Ghi chú thiết kế |
|---|---|---|---|---|
| 1 | **21:00 — một người bấm "Chốt sổ"**, hệ thống render card ảnh 4:5, người đó dán vào nhóm Zalo | Web → Zalo | **5** | Ai bấm cũng được. Tên người bấm lên card ⇒ việc vặt biến thành một vai có danh |
| 2 | **Nhận noti Zalo, chạm card** → mở bảng trong webview | Zalo | **3** | Kênh thông báo là **Zalo**, app duy nhất mà 100% ROM Việt whitelist sẵn. Không có push nào của mình để bị Xiaomi/Oppo/Vivo giết |
| 3 | **Thấy ảnh của mọi người trước** — hàng ảnh hôm nay nằm ở pixel đầu tiên dưới header, ô của mình nằm SAU | Web | **4** | Phần thưởng đứng trước nghĩa vụ (lấy từ hướng A) |
| 4 | **Nộp** — chọn ảnh có sẵn hoặc chụp, chọn **XONG** hoặc **TOANG**, gửi | Web | **16** | Mặc định mở thư viện, **không** ép chụp trực tiếp. Không caption, không filter, không chỉnh sửa |
| 5 | **Cà khịa** — sticker / rep / voice ngay trên card, trong nhóm Zalo | Zalo | **10** | **0 person-week để build.** Mọi template roast tự viết đều thua đồ có sẵn của Zalo |
| 6 | **Sổ cập nhật** — "Ngày thứ 34 · 71 tấm · chuỗi 6" | Web | **2** | ⚠️ **Lưới 30 ngày đã bị CẮT khỏi MVP-0** (A86, QĐ-25) — ở MVP-0 chỉ có ba con số, không có phần cuộn lịch sử. Lưới quay lại ở T13+ |

**Tổng: ~40 giây/người/ngày**, trong đó chỉ **27 giây** nằm trong sản phẩm của mình. 13 giây còn lại nằm trong Zalo — và đó là **chủ ý**.

Phản biện #7 nói: _"Nghĩa vụ ở lại trong Teemi; phần thưởng rò rỉ ngược về Zalo. Đó là định nghĩa của một app bị gỡ."_ Câu trả lời của v2: **không có app để gỡ.** Vì không tốn slot màn hình chính, không tốn dung lượng, không tốn một lần cài, tỉ số nghĩa vụ/phần thưởng không cần phải thắng. Nó chỉ cần không âm.

**Bước duy nhất KHÔNG bỏ được là bước 4.** Bước 1 có người khác làm, bước 5 tuỳ hứng, bước 6 tuỳ hứng.

---

## 4. CƠ CHẾ CỤ THỂ

### 4.1. Định nghĩa "ngày"

```
NGÀY        = 04:00:00 → 03:59:59 hôm sau, Asia/Ho_Chi_Minh (UTC+7)   [A01]
MÚI GIỜ     = duy nhất một. Không hỗ trợ đa múi giờ ở MVP
ROLLOVER    = batch, KHÔNG realtime. Cron `5 21 * * *` UTC = 04:05 ICT [A03]
BIÊN MUỘN   = 120 giây tính trên `intent_at`                          [A02]
GIỜ CHỐT SỔ = 21:00 — trạng thái "sẵn sàng chốt" SUY RA TỪ GIỜ SERVER,
              KHÔNG có cron 21:00 (job `mo_chot_so` đã bị CẮT)        [A04]
```

> **Vì sao cron chạy 04:05 chứ không 04:00 (A03):** biên nộp muộn kỹ thuật là 120 giây trên `intent_at`. Một job chạy đúng 04:00 sẽ tổng hợp ngày **trước khi** biên 120 giây đóng ⇒ vỡ bất biến của bảng `book_day`. Job đối soát TTL ảnh gốc chạy **04:10 ICT** (A05).

Ranh giới 04:00 thay vì 00:00 lấy từ hướng A: **một dòng code, xoá một trạng thái thất bại nhân tạo** với đúng tệp Gen Z ngủ muộn. Nộp lúc 1h sáng vẫn tính cho hôm trước. Đây là ý rẻ nhất và rõ ràng đúng nhất trong cả 4 tài liệu.

Rollover tính batch cũng là một biện pháp pháp lý: nó phá vế "nhiều người chơi tương tác **đồng thời** qua máy chủ" trong định nghĩa trò chơi điện tử G1 của NĐ 147/2024.

### 4.2. Định nghĩa "proof"

Một **tấm** = một tấm ảnh, gắn với đúng một người và đúng một ngày, kèm đúng một nhãn.

| Thuộc tính | Quy định |
|---|---|
| Nguồn | Thư viện ảnh **hoặc** camera. Không ép chụp trực tiếp ở MVP |
| Số lượng | Tối đa **1 tấm/người/ngày**. Nộp lại sẽ ghi đè, không cộng thêm |
| Nhãn | Bắt buộc chọn **XONG** hoặc **TOANG**. Không có lựa chọn thứ ba |
| Caption | **Không có.** Chữ nghĩa sống ở Zalo |
| Xử lý | Nén client-side cạnh dài 1080px, JPEG q=0,72 → **~110 KB** `[chưa đo — phải đo trên 20 ảnh Android thật trước khi tin, A37]` · **strip EXIF** · signed upload lên Cloudflare R2, key `orig/<book>/<date>/<person>/<client_proof_id>.jpg` (A34) |
| Vòng đời | Ảnh gốc **TTL 72 giờ** (A36), sau đó chỉ giữ **thumbnail 320px ~18 KB** (A39) **VĨNH VIỄN** — xem hộp dưới bảng |
| Nhận diện khuôn mặt | **Không, dưới bất kỳ hình thức nào, vĩnh viễn** |
| Xác minh | Không pHash, không anti-cheat, không camera bắt buộc ở MVP |

TTL 72h vừa giảm 15 lần dung lượng vừa là lá chắn pháp lý cho Điều 32 BLDS 2015 (quyền hình ảnh cá nhân) và NĐ 53/2022 (nội địa hoá dữ liệu).

> **[A38] Thumbnail 320px: VĨNH VIỄN, KHÔNG có TTL — đây là lời hứa sản phẩm, và nó rẻ.** Sổ ngủ **180 ngày** ⇒ chuyển sang **lớp lưu trữ lạnh (R2 IA)**, **KHÔNG xoá**. Chỉ được xoá khi `book.status = 'archived'` **và** đã báo trước **30 ngày** **và** đã có đường tải dữ liệu về. Lý do định lượng: toàn bộ thumbnail của **10.000 sổ chỉ tốn ~$3/tháng** — kinh tế không biện minh được việc xoá ký ức của người dùng. Con số này **sẽ được in vào Chính sách quyền riêng tư**, nên nó phải chốt trước **07/09/2026**.
>
> ⚠️ **Đường tải dữ liệu về (export) chưa tồn tại trong bất kỳ bảng pw nào** — D-06. Phiên bản có hiệu lực từ hôm nay: **làm tay, 0 pw** (một truy vấn SQL + zip thủ công, SLA 10 ngày), ghi vào `RUNBOOK.md`. **Không được bán quyền này** — nó là nghĩa vụ luật định, không phải sản phẩm.

**Chi phí lưu trữ media** (đối chiếu Bảng 6 §4.5): key R2 cho thumbnail là `thumb/…`, cho card là `card/<book>/<date>.png` (A35). Card PNG nặng **150 KB**, **TTL 90 ngày**; hết hạn ⇒ **thay bằng ảnh tĩnh trung tính, KHÔNG trả 404** (A40–A41) — dãy ảnh vỡ trong lịch sử chat Zalo là thiệt hại thương hiệu chậm mà không ai báo.

### 4.3. Ba trạng thái ngày của một người — và tại sao trạng thái thứ ba là thay đổi quan trọng nhất

| Trạng thái | Nghĩa | Có tấm? | Tính cho ngày của sổ? | Nhãn trên card |
|---|---|---|---|---|
| **XONG** | "Kèo hôm nay tao làm được" | có | **có** | ✓ |
| **TOANG** | "Tao ở đây, hôm nay tao toang" | có | **có** | 💀 |
| **VẮNG** | mặc định, không làm gì | không | không | **không render gì cả** |

Cả 4 hướng trước đều coi ngày hụt là một lỗ hổng cần bịt: A giấu nó, B cho damage = 0, C tô ô xám, D cho 2 ngày nghỉ. Cả 4 chỉ có hai trạng thái: **đã nộp / không nộp**. Không hướng nào hỏi: ngày hụt thì người dùng muốn gì?

Câu trả lời: họ không muốn được tha, cũng không muốn bị phạt — họ muốn **vẫn có mặt**. Và thứ buồn cười nhất trong một nhóm chat chưa bao giờ là đứa làm được, mà là **đứa thất bại ngoạn mục**. Tấm ảnh ly trà sữa vẫn uống dù kèo là cai trà sữa là tấm ảnh cả nhóm rep 15 tin nhắn. Cả 4 hướng đều thiết kế để tấm ảnh đó không bao giờ được gửi.

Chi phí để có nó: **cùng một nút upload, một enum thêm một giá trị, một màu thứ hai trên card.** ~0,1 pw.

Ba hệ quả cơ chế, không phải cảm xúc:

1. **Nó tách "có mặt" khỏi "hoàn thành", và đó là biến số thật của sản phẩm.** Từ đây trở đi có hai chỉ số, không phải một:
   - `q_x` = số lượt **XONG** / **`roster_size`**
   - `q_c` = số lượt **CÓ MẶT** (XONG hoặc TOANG) / **`roster_size`**. Luôn ≥ `q_x`
   Chuỗi sổ chạy trên `q_c`. Cả 4 tài liệu trước đều gộp hai biến này làm một và đo sai mẫu số.

   > **[A14–A15, C05] Mẫu số là `roster_size` ĐÓNG BĂNG, không phải "số người Active".** `roster_size` = số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, **đóng băng và giữ nguyên 14 ngày**. Lý do là số học, không phải sở thích: mẫu số trượt theo Active làm `q_c` **TĂNG khi sổ đang chết** (ví dụ của `06` §9 BĐ-1: 0,54 → 0,90 khi ba người bỏ đi), tức chỉ số càng đẹp khi sản phẩm càng hỏng. Bản tính theo mẫu số trượt vẫn được giữ nhưng **đổi tên thành `q_c_sliding` / `q_x_sliding` và chỉ dùng để báo cáo phụ, không bao giờ dùng để so ngưỡng** (A19). ⏰ Cột `roster_size` phải có trong schema trước **07/09/2026** — sau ngày đó **không tái dựng được** roster ngày 1–3.
2. **Nó giải quyết mâu thuẫn A-vs-B về mất mát.** Bằng chứng Duolingo nói phải LÀM MỀM mất mát chứ không XOÁ nó. TOANG làm đúng vậy: bạn vẫn phải mở ra và gửi một cái gì đó (nghĩa vụ còn nguyên), nhưng bạn không bao giờ bị đẩy vào trạng thái thất bại (mất mát được làm mềm). Đường thoát duy nhất khỏi cả hai là **VẮNG** — và đó mới là thứ tốn.
3. **Nó là câu trả lời rẻ nhất cho rủi ro "ảnh proof lặp lại đến mức chết reaction"** — rủi ro mà chỉ hướng A nhắc tới đúng một lần rồi gạt đi. Ảnh XONG theo cấu trúc là cùng một khung hình mỗi ngày. Ảnh TOANG thì không.

### 4.4. Ngưỡng ngày của sổ

```
A(D)        = số người đã nộp ≥1 tấm trong 7 ngày tính tới ngày D
A_eff       = min( A(D), A(D−1) )          ← ngưỡng chấm trên A_eff   [A06]
k           = 1  nếu A_eff ≤ 2
              2  nếu A_eff ≥ 3                                        [A07]
NGÀY TÍNH   = (số người có trạng thái XONG hoặc TOANG trong ngày D) ≥ k
```

**Vì sao `A_eff = min(A(D), A(D−1))` chứ không phải `A(D)` (A06, phán quyết C19).** `04` §4.1 chứng minh bằng số học: nếu chấm `k` trên `A` của **chính ngày đó**, một sổ 2 người (đang chạy `k=1`) sẽ **mất chuỗi đúng vào ngày có thêm bạn thứ ba** — vì `A` nhảy lên 3 làm `k` nhảy lên 2 ngay trong ngày mà người mới chưa kịp nộp. Lấy `min` của hôm nay và hôm qua khiến ngưỡng **không bao giờ siết chặt hơn trong cùng một ngày**, và người mới vào không bao giờ là nguyên nhân làm đứt chuỗi.

Ngưỡng phẳng `k=2` thay cho `ceil(0,6 × A)` mà hướng B và C dùng. Lý do là một lỗi mà cả hai bỏ sót: **`ceil(0,6×A)` gãy tính đơn điệu ở A=4** — `ceil(2,4) = 3`, tức nhóm 4 người cần đúng bằng nhóm 5 người, khó hơn một cách vô lý. Công thức `ceil(0,6×A)` **đã chết, không được quay lại dưới bất kỳ tên nào**.

**Ba định nghĩa sống-chết đi kèm, chốt bằng văn bản:**
- `group_alive` = **`A ≥ 3` người nộp ≥1 tấm trong 7 ngày gần nhất** (A08). **Cấm nới sang ≥2 để qua ngưỡng.**
- `duo_alive` = `A ≥ 2` — **đo song song, CHỈ tham khảo**, không được thay `group_alive` trong bất kỳ quyết định nào (A09).
- Trạng thái sổ: `active` → `dormant` (7 ngày liên tiếp `A < 3`) → `dead` (21 ngày liên tiếp không tấm) → `archived` (mọi thành viên đã rời) — A12. **UI đọc `book.status`, không tự định nghĩa ngưỡng** (A13).

### 4.5. Bảng số cơ chế lõi

#### Bảng 1 — P(ngày tính) = P(X ≥ k), X ~ Bin(A_eff, q_c). Số học nhị thức, không phải ước lượng.

_Cột `A` dưới đây đọc là **`A_eff = min(A(D), A(D−1))`** (A06). Mọi ô dùng `q_c` = **có mặt / `roster_size` đóng băng** (A15)._

> **[A17] Nhãn bắt buộc, áp cho CẢ SÁU bảng của §4.5, không riêng Bảng 1:** giá trị `q_c = 0,53` là **`[suy luận, chưa đo — đây là giả thuyết H2]`**. Mọi con số dẫn xuất từ nó trong §4.5 (P(ngày tính), P(chuỗi sống), P(đủ mâm), tấm/ngày, dung lượng lưu trữ) **kế thừa nguyên nhãn đó**. Không được trích một ô nào ở §4.5 mà bỏ nhãn.

| q_c ↓ / A_eff → | A=2 (k=1) | A=3 | A=4 | A=5 | A=6 |
|---|---|---|---|---|---|
| 0,35 | 57,8% | 28,2% | 43,7% | 57,2% | 68,1% |
| 0,40 | 64,0% | 35,2% | 52,5% | 66,3% | 76,7% |
| **0,45** | **69,8%** | **42,5%** | **60,9%** | **74,4%** | **83,6%** |
| 0,50 | 75,0% | 50,0% | 68,8% | 81,3% | 89,1% |
| **0,53** ← kỳ vọng thiết kế | **77,9%** | **54,5%** | **73,1%** | **84,8%** | **91,6%** |
| 0,55 | 79,8% | 57,5% | 75,9% | 86,9% | 93,0% |
| 0,60 | 84,0% | 64,8% | 82,1% | 91,3% | 95,9% |

**Đọc bảng:** ước lượng trung tâm của digest cho tỉ lệ hoàn thành là `q_x ≈ 0,45`. Nhãn TOANG được thiết kế để đẩy `q_c` lên khoảng **0,53** [suy luận, chưa đo — đây là giả thuyết H2 ở §11]. Ở đó, sổ 5 người giữ được ngày tính **84,8% số ngày**, tức trung bình hụt 1 lần mỗi 6,6 ngày thay vì 3,9 ngày.

Đối chiếu với DOC 1: sự kiện lõi cũ là combo 5/5 = `q⁵` = **1,85%/ngày ở q=0,45**, tức 1 lần/54 ngày (và 1 lần/98 ngày ở q=0,40). Chênh **46 lần**. Đây là số học, không phải quan điểm.

#### Bảng 2 — Van "ngày nghỉ": tại sao phải có, và tại sao đúng 2

A=5, q_c=0,53 → P(ngày tính) = 0,848 → P(hụt) = 0,152. P(chuỗi sống trọn 7 ngày) = P(Bin(7; 0,152) ≤ j):

| Số ngày nghỉ/tuần | P(chuỗi sống hết tuần) | Bội số |
|---|---|---|
| 0 (không van) | **31,5%** | 1,0× |
| 1 | 71,1% | 2,3× |
| **2 (chọn)** | **92,4%** | **2,9×** |
| 3 | 98,7% | 3,1× |

Ở kịch bản bi quan hơn (q_c=0,45 → P(hụt)=0,256), cùng phép tính cho: 0 van = **12,6%**, 1 van = 43,0%, **2 van = 74,3%**, 3 van = 92,4%.

`0,744⁷ = 12,6%` là con số phải dán lên tường: **không có van, 87% số sổ mất chuỗi ngay trong tuần đầu.** Chọn 2 vì đó là điểm đường cong bắt đầu bão hoà — lên 3 chỉ thêm 6,3 điểm phần trăm (ở q_c=0,53) nhưng làm chuỗi mất hết ý nghĩa. Đây là lý do định lượng, không phải lòng tốt.

**Quy tắc ngày nghỉ:** mỗi sổ có 2 ngày nghỉ trong mỗi cửa sổ 7 ngày trượt. Hai ngày hụt đầu tiên không làm đứt chuỗi, chỉ hiện icon xám không tên. Ngày hụt thứ ba trong tuần mới làm đứt.

#### Bảng 3 — "Đủ mâm": phần thưởng hiếm, luôn nói dạng khẳng định

P(tất cả Active đều có mặt) = `q_c^A`:

| A | q_c=0,45 | q_c=0,53 | q_c=0,60 | Tần suất ở q_c=0,53 |
|---|---|---|---|---|
| 2 | 20,3% | 28,1% | 36,0% | 1 lần / 3,6 ngày |
| 3 | 9,1% | 14,9% | 21,6% | 1 lần / 6,7 ngày |
| 4 | 4,1% | 7,9% | 13,0% | 1 lần / 12,7 ngày |
| 5 | 1,9% | 4,2% | 7,8% | 1 lần / 23,9 ngày |

Ngày đủ mâm → card đổi màu vàng + đúng một dòng chữ: **"Hôm nay đủ mâm."** Hiếm là đúng ý đồ (variable-ratio reinforcement). Đây là *jackpot*, không phải cơ chế gánh vác — thứ gánh vác là ngày tính ở Bảng 1.

#### Bảng 4 — Con số không bao giờ đi xuống

Số tấm kỳ vọng/ngày = `A × q_c`.

| Cấu hình | tấm/ngày | sau 30 ngày | ngày đạt 100 tấm |
|---|---|---|---|
| A=5, q_c=0,53 | 2,65 | 80 | 38 |
| A=5, q_c=0,45 | 2,25 | 68 | 45 |
| A=3, q_c=0,53 | 1,59 | 48 | 63 |
| A=2, q_c=0,45 | 0,90 | 27 | 112 |

**Mốc sổ** (mốc của sổ, không của cá nhân, không ai bị nêu tên): 25 · 50 · 100 · 250 · 500 tấm. Chạm mốc → card đổi màu, dòng chữ "Sổ này 100 tấm rồi". **Không có phần thưởng ảo, không vật phẩm, không tiền tệ trong app** — vừa là quyết định sản phẩm, vừa là quyết định pháp lý (NĐ 174/2026 phạt 60–80 triệu nếu cho mua bán vật phẩm ảo, 170–200 triệu nếu quy đổi ra tiền).

#### Bảng 5 — Bốn con số hiển thị, và tính chất của chúng

| Con số | Ai thấy | Tính chất | Có thể về 0? |
|---|---|---|---|
| **Ngày thứ N của sổ** | công khai trong sổ + trên card | tăng vô điều kiện kể từ ngày mở sổ | **không bao giờ** |
| **Số tấm trong sổ** | công khai trong sổ + trên card | chỉ cộng, không bao giờ trừ | **không bao giờ** |
| **Chuỗi ngày của sổ** | công khai trong sổ + trên card | có thể reset về 0, được 2 van/tuần bảo vệ | có |
| **Bạn đã có mặt 23/30 ngày** | **chỉ mình bạn** | tỉ lệ, không phải chuỗi | không áp dụng |

Luôn tồn tại ít nhất **hai** con số công khai không bao giờ đi xuống. Đây là nguyên tắc P4 ở §7 và nó có thể bị vi phạm — cách vi phạm được ghi rõ.

#### Bảng 6 — Kinh tế media

| Tham số | Giá trị | Nguồn |
|---|---|---|
| Ảnh nén client-side | ~110 KB `[chưa đo — phải đo trên 20 ảnh Android thật, A37]` | v2 §4.2 + `02` §3.1 |
| Thumbnail giữ vĩnh viễn | 320px, ~18 KB (A39) | `04` §6.1 |
| Card PNG | 150 KB, TTL 90 ngày (A40–A41) | QĐ-07 |
| Dung lượng/sổ 5 người/năm (q_c=0,53 `[chưa đo — H2]`) | 2,65 × 365 × 18 KB + đệm ≈ **20 MB** | số học |
| 10.000 sổ/năm | ~200 GB | số học |
| R2: $0,015/GB/tháng, **egress $0** | **~$3,0/tháng** ở 10.000 sổ | r05 |
| **Hạ tầng tổng ở beta** | **$28–37/tháng** (A74) — trong đó **Supabase Pro $25/tháng BẮT BUỘC từ ngày beta chạy 02/12** | `03` §2.3+§5+§9 B6 (C27/QĐ-09) |
| Đèn báo động chi phí | **> $60/tháng** (A75) · DoD hoá đơn tháng đầu **≤ $40** (A76) | QĐ-09 |

> ⚠️ **[Phán quyết 03/09 — C27/A74] Con số cũ "~$12/tháng" ĐÃ BỊ BÁC.** `03` giữ chủ quyền chi phí hạ tầng, và lý do là ràng buộc sản phẩm chứ không phải sở thích kỹ thuật: **Supabase Free không có backup hằng ngày**, trong khi §4.2 của chính tài liệu này hứa **giữ thumbnail vĩnh viễn**. Mất DB = mất tài sản của mọi sổ, không có đường về ⇒ Pro $25/tháng là **chi phí của lời hứa**, không phải khoản tuỳ chọn. Dòng "10.000 sổ ≈ $3/tháng" ở trên là **riêng R2 media**, không phải tổng hạ tầng — hai con số đo hai thứ khác nhau.
>
> _Ghi chú mẫu số: dòng dung lượng tính trên **sổ 5 người** (kịch bản tốn hơn), trong khi hệ số quy đổi sổ ↔ người của toàn hồ sơ là **A = 4,0** (A70). Giữ 5 người ở đây là cố ý — ước lượng lưu trữ phải thận trọng theo hướng cao._

### 4.6. Card chốt sổ — bảng "được nói / cấm nói"

Card là sản phẩm marketing, sản phẩm phân phối và sản phẩm an toàn cùng lúc. Nó là bề mặt duy nhất rời khỏi hệ thống, nên nó là bề mặt được kiểm soát chặt nhất.

**Card 4:5 CHỨA đúng những thứ này:**
- Tên sổ (do nhóm tự đặt — xem §4.8)
- `Ngày thứ 34 · 71 tấm · chuỗi 6`
- Hàng ảnh: **chỉ ảnh của người ĐÃ nộp**, mỗi ảnh kèm nhãn ✓ hoặc 💀
  > **[A100, QĐ-30] Lưới THÍCH ỨNG theo số người ĐÃ NỘP:** 1 · 1×2 · 2×2 · 2×3 · **2×4 (trần 8 người/sổ — A46)**. **Ô của người vắng KHÔNG TỒN TẠI** — không ô xám, không silhouette, không tên. Đây là hiện thực hoá P2, và nó có **fixture snapshot test bắt buộc ở cấu hình 8 người**.
- **Mã sổ 6 ký tự** — đường thoát hiểm khi Zalo chặn domain (A45, §9 mục 7)
  > **[A45] Có in, nhưng KHÔNG phải khoá vào vô điều kiện:** mã trên card chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi**. Bảng chữ là **28 ký tự `23456789ACDEFGHJKMNPQRTUVWXY`** (bỏ `0 O 1 I L B S Z`), độ dài 6 ⇒ 28⁶ ≈ 481 triệu (A43). Regex cũ `^[2-9A-HJ-NP-Z]{6}$` **sai** — nó cho 32 ký tự và vẫn chứa `L`.
- Dòng chân: `Minh chốt sổ · mai tới lượt Linh`
- Caption soạn sẵn: _"**Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.**"_ + link
  > **[CHỐT 2026-08-28 — QĐ-31] Caption đã đổi.** Bản cũ `"...Bấm vô nộp đi, không cần cài app."` bị bác: **`Bấm vô nộp đi` là một mệnh lệnh chỉ có nghĩa với người CHƯA nộp**, tức cùng hình dạng ngữ nghĩa với chữ cấm vĩnh viễn `đứa nào chưa` mà §1 của chính tài liệu này gọi là _"chữ nguy hiểm nhất trong toàn bộ hồ sơ"_ (`08-ux-flow-va-tone.md` §2.2, Bất đồng #2). Bản mới vẫn đủ **ba chữ bắt buộc**, mất mệnh lệnh, **0 pw**. Đã sửa đồng thời ở `09` §1.4(c) và script S5 của `02` §5.9. **Luật chung áp cho toàn bộ bank câu: không câu nào được chỉ có nghĩa với người chưa làm.**

| Sự kiện | App ĐƯỢC nói | App CẤM nói |
|---|---|---|
| Có người nộp XONG | "Linh vừa nộp" | — |
| Có người nộp TOANG | "Linh toang" (kèm ảnh của Linh, do chính Linh chọn nhãn) | bất kỳ đánh giá nào về việc toang |
| Có người VẮNG | **(không có gì. Không ô, không tên, không số)** | tên bất kỳ ai · "còn thiếu 2 người" · "chưa có Nam" |
| Ngày không tính | *(im lặng)* hoặc "Hôm nay sổ nghỉ" | tên bất kỳ ai · lý do |
| Chuỗi đứt | "Chuỗi bắt đầu lại từ hôm nay" | "vì hôm qua thiếu người" · bất kỳ nguyên nhân có tên |
| Đủ mâm | "Hôm nay đủ mâm." | — |
| Mốc sổ | "Sổ này 100 tấm rồi" | xếp hạng ai đóng góp nhiều nhất |
| Bất kỳ đâu | trạng thái: `xong / toang / vắng / late / streak` | **nội dung kèo (`goal_text`) của bất kỳ ai** |

**Ràng buộc này được thực thi bằng test CI, không bằng review bằng mắt** (nguyên tắc P2 và P3 ở §7). Bảng này lấy nguyên hình dạng từ §4.6 của hướng B — sản phẩm tốt nhất của tài liệu đó.

### 4.7. "Chốt sổ" là công cụ phân phối, KHÔNG phải điều kiện tính ngày

Quyết định quan trọng nhất mà hướng D gốc để mở, và phải chốt ở đây:

> **Ngày vẫn tính bình thường kể cả khi tối đó không ai bấm "Chốt sổ".**

Nếu gộp hai thứ, điểm chết đơn của người chốt sổ sẽ giết luôn cơ chế. Tách ra thì nó chỉ giết kênh phân phối của một tối — thiệt hại tuyến tính, không phải thiệt hại cấp số nhân.

**Cơ chế giảm rủi ro người chốt sổ** (lấy từ hướng C, nút "chọc" của Duolingo, biến thể rẻ hơn):
- Card tối nay **ghi tên người được phân công tối mai**, xoay vòng theo thứ tự vào sổ.
- Đó là một **gợi ý xã hội công khai, không phải một cái khoá.** Ai cũng bấm được, bất cứ lúc nào, kể cả không tới lượt.
- Chi phí: **0 pw** — dùng đúng cơ chế "ai bấm đầu tiên thì tên lên card" mà hướng D đã có, cộng một chỉ số xoay vòng.

Nếu 23:00 chưa ai chốt: hệ thống **không làm gì**. Không có kênh push để làm gì cả — và giả vờ có là tự lừa mình. Xem §11 (H1 vùng xám) để biết khi nào được ship Android web push.

### 4.8. Kèo — quy tắc lưu trữ và hiển thị

- **8 preset một chạm:** ngủ trước 12h · đi bộ 20 phút · học 15 phút · đọc 5 trang · không trà sữa hôm nay · tập 15 phút · không bỏ bữa sáng · không mất tích. Cộng một ô tự viết ≤30 ký tự.
- **Lưu trữ:** preset được **copy thành chuỗi text vào cùng cột `goal_text`**. `preset_id` chỉ tồn tại phía client để đếm analytics tổng hợp, **không lưu per-user trên server**. Lý do: một cột text tự do không phải taxonomy sức khoẻ; tám `preset_id` gắn với từng người thì là — và đó là đường ngắn nhất mất miễn trừ Điều 38 khoản 2 Luật 91/2025. Chi phí bằng 0 hôm nay, rất đắt để sửa sau. [Lấy nguyên từ hướng A §4.5]
- **Hiển thị:** `goal_text` hiện ở **đúng hai chỗ** — dưới avatar trong màn Sổ hôm nay (chỉ thành viên đã vào sổ thấy), và trong màn Của tôi. **Không bao giờ lên card chia sẻ. Không bao giờ xuất hiện trong bất kỳ chuỗi chữ nào do app sinh ra.**
- **Chặn từ khoá ở ô tự viết:** `kcal`, `calo`, `cân`, `kg`, `giảm cân`, `nhịn`, `ăn kiêng`, `nhịn ăn`, `eat clean`, `detox` → hiện một màn hỗ trợ ngắn + gợi ý 3 preset an toàn, ghi event `safety_screen_shown{reason_bucket}`. Chi phí ~0,05 pw. **Đây là câu trả lời cụ thể duy nhất trong toàn bộ hồ sơ cho phản biện #19** (kịch bản Linh 17 tuổi kèo "ăn dưới 1200 kcal") — cả 4 hướng đều để nguyên phản biện đó.
- **Đổi kèo:** 1 lần/30 ngày, ghi vào sổ như một dòng trung tính, không thông báo.
- **Không có peer-approval kèo.** Hướng B đặt ma sát này đúng chỗ nguy hiểm nhất (onboarding); ở v2 nó biến mất cùng với payoff chung mà nó tồn tại để bảo vệ.

### 4.9. Bảng đối trừ scope — BỐI CẢNH LỊCH SỬ, không phải sổ cái

> ⚠️ **[C08 / A87] Bảng dưới đây và bảng §4.10 KHÔNG còn là ngân sách.** Chúng ghi lại cách scope được cân ở ngày viết v2. Sổ cái pw duy nhất là **`docs/adr/pw-ledger.md`**, luật: **một khoản cắt chỉ được chi MỘT LẦN**. Ba dòng trong bảng dưới đã **hết giá trị thanh toán**: "nút thả tim +0,20" (thứ đó nay **đã bị cắt** khỏi MVP-0 — C03, §13 mục 3 — nên nó không còn là khoản mua, và cũng không còn là tiền để bán), "cơ chế gánh −0,20" và "màn Lịch sử −0,30" (đã bị các tài liệu khác chi lại). Đọc bảng như biên bản, không như số dư.

| Ghép vào (từ đâu) | +pw | Trả bằng cách cắt gì | −pw |
|---|---|---|---|
| Trạng thái **TOANG** (từ judge panel) | +0,10 | **Caption tự do trên proof** — chữ nghĩa sống ở Zalo; đồng thời xoá bề mặt UGC cuối cùng | −0,10 |
| **Nút thả tim ẩn danh** trên trang public (từ A §9) | +0,20 | **Màn "Lịch sử" riêng** — gộp lưới 30 ngày vào phần cuộn dưới của màn Sổ hôm nay | −0,30 |
| **Test bất biến 10.000 mô phỏng** (từ B) | +0,10 | **Màn "Chọn kèo" riêng** — 8 nút, nhét vào luồng Mở sổ | −0,10 |
| **Test CI quét template bank** (từ C §4.7 + B §4.6) | +0,10 | **Polling 15s** → refresh khi focus + kéo xuống | −0,10 |
| **Remote config đọc từ DB** (từ B) | +0,10 | **Cơ chế "gánh"** (từ C) — trùng chức năng với van 2 ngày nghỉ, mà van có bảng số biện minh còn gánh thì không | −0,20 |
| **4 event tác hại + exit survey 1 câu** (từ B) | +0,10 | | |
| **Chặn từ khoá rối loạn ăn uống** (mới) | +0,05 | | |
| Card ghi tên người chốt sổ mai (từ C) · ranh giới 04:00 (từ A) · sổ tự đặt tên (từ B) · phần thưởng trước nghĩa vụ (từ A) · preset lưu free-text (từ A) · chế độ 1 người (từ C) · minor-safe mặc định cho tất cả (từ C) · nấc widget khoá sau `sổ-D28` ≥35% (từ D) | **+0,00** | đều là quyết định thiết kế / một hằng số / một dòng copy | |
| **Cộng** | **+0,75** | | **−0,80** |

### 4.10. Bảng person-week — trần cứng 6,5

| # | Hạng mục | pw |
|---|---|---|
| 1 | Khung dự án, schema — **tên bảng đã đổi sang tiếng Anh, xem `04` §1: `book` / `membership` / `person` / `proof` / `book_day` / `event` / `remote_config` / `card` / `report` / `block` / `audit_log`** (A29–A32; các tên tiếng Việt `sổ` / `thành viên` / `kèo` / `tấm` / `ngày` của bản cũ đã chết) — danh tính nhẹ (device token + mã 6 ký tự), **remote config đọc từ DB** | 0,9 |
| 2 | **Màn Sổ hôm nay**: hàng ảnh hôm nay + cuộn xuống là lưới 30 ngày + trạng thái public cho người chưa vào sổ + **nút thả tim ẩn danh** | 1,3 |
| 3 | **Màn Nộp**: chọn ảnh/chụp, chọn XONG/TOANG, nén client, strip EXIF, signed upload R2, TTL 72h | 0,9 |
| 4 | **Màn Mở sổ / Vào sổ** (gồm chọn kèo 8 preset) + link mời + OG preview | 0,7 |
| 5 | **Màn Card chốt sổ**: render 4:5 server-side (satori / @vercel/og), Chia sẻ + Lưu ảnh, tên người chốt sổ mai | 0,8 |
| 6 | **Màn Của tôi** (kèo, tỉ lệ riêng tư, đổi kèo, rời sổ, xoá dữ liệu) | 0,3 |
| 7 | Logic ngày (cutoff 04:00) + chuỗi + 2 van/tuần ~~+ Tết freeze + cron 21:00~~ — **cả hai mục gạch đã CẮT khỏi MVP-0** (A04 / QĐ-22 và QĐ-25; xem §13 mục 6–7). Còn lại: cron `rollover` **`5 21 * * *` UTC = 04:05 ICT** (A03) + job đối soát TTL 04:10 (A05) | 0,4 → **0,30** |
| 8 | Analytics **cấp sổ** + 4 event an toàn + exit survey 1 câu. ⚠️ **[A53 / QĐ-02] Định giá lại: 0,5 pw này được cấp cho 14 event; danh mục hợp nhất có 32 event + 2 counter pháp lý ⇒ +0,15 pw**, đã ghi vào `docs/adr/pw-ledger.md` kèm khoản đối trừ | 0,5 → **0,65** |
| 9 | ToS + quyền riêng tư + báo cáo/chặn + soft delete + age gate ≥16 + chặn từ khoá | 0,5 |
| 10 | **Test bất biến (10.000 mô phỏng) + test CI quét template bank** | 0,2 |
| | **TỔNG (như viết ngày đầu)** | **6,5** |
| | **TỔNG nếu áp các điều chỉnh đã phán quyết vào chính bảng này** | **6,55** (= 6,5 − 0,10 cron 21:00 + 0,15 định giá lại event) — **vượt trần cứng 6,5 pw của P7/A83 ngay trên bảng của chính mình**, chưa trừ các mục đã cắt ở hạng mục 2 và 6 |

> **Đọc hai dòng tổng trên cho đúng:** con số 6,55 **không phải** ngân sách mới — nó chỉ cho thấy bảng này đã không còn cân, và vì sao việc cộng phải chuyển sang `docs/adr/pw-ledger.md` (A87). Phạm vi thi hành thật là **MVP-0: trần 3,5 pw (A84), ước lượng trung thực 4,58 pw (A85)**. Hạng mục 2 (lưới 30 ngày, nút thả tim) và hạng mục 6 (màn Của tôi) đã bị cắt khỏi MVP-0 — số pw hoàn về **không** được tiêu ở đây, mà phải đi qua sổ cái.

**Đọc con số này cho đúng, không giảm nhẹ — và câu "≈10 tuần lịch" của bản cũ là SAI:**

```
1 pw          = 40 giờ tập trung                                    [A80]
Hệ số hiệu suất = 0,65  [không có nguồn — xuất hiện lần đầu ở mục này] [A81]
Tốc độ thực   = 20 giờ/tuần × 0,65 = 13 giờ code/tuần               [A82]
1 pw          ≈ 40 ÷ 13 ≈ 3,1 tuần lịch                             [A82]
6,5 pw        = 260 giờ ÷ 13 = 20 TUẦN LỊCH  (không phải 10)        [A82]
3,5 pw (trần MVP-0, A84)  = 140 giờ ÷ 13 ≈ 10,8 tuần lịch
4,58 pw (ước lượng trung thực, A85) = 183 giờ ÷ 13 ≈ 14,1 tuần lịch
```

Câu "6,5 pw ≈ 10 tuần" **chỉ đúng ở 40 giờ/tuần** — tức ở một founder toàn thời gian không tồn tại trong hồ sơ này. Và **không có đệm** (hướng D gốc có đệm 20% trong bản 7,5 pw). ⚠️ **Hệ quả lịch phải nhìn thẳng:** từ dòng code đầu **23/09/2026** tới beta **02/12/2026** đúng **10 tuần lịch = 130 giờ code ≈ 3,25 pw** — nhỏ hơn cả trần 3,5 pw, chưa nói tới ước lượng trung thực 4,58 pw. Đây chính là lỗ hổng mà **D-01** (cắt thêm 1,08 pw) và **D-02** (20 hay 15 giờ/tuần) phải bịt trước 22/09.

Trần thật phải đặt theo **ngày lịch**, không theo pw, vì trần pw tự lừa mình được bằng cách định nghĩa lại pw:

> ## ⚠️ [CHỐT 2026-08-28 — QĐ-25 & QĐ-33] BẢNG §4.10 DƯỚI ĐÂY KHÔNG CÒN LÀ SỔ CÁI pw. Đọc nó như bối cảnh, không như ngân sách.
>
> **Ba sự thật đã thay đổi kể từ khi bảng này được viết:**
> 1. **Trần 6,5 pw giả định 40 giờ/tuần.** Founder làm **~20 giờ/tuần**. `07` §0 tính: ở 20 h/tuần với chính hệ số 0,65 của mục này, 6,5 pw = **20 tuần lịch**, không phải 10. ⚠️ Bản thân **hệ số 0,65 xuất hiện lần đầu ở đây và không kèm nguồn**, rồi được `02` §3.2 và `07` §0 dùng làm trục của toàn bộ lập luận "lịch không lọt" — nó cần được đánh dấu **[ước lượng không nguồn]**, không phải một hằng số.
> 2. **Scope thật đã được chốt lại là MVP-0**, không phải 6,5 pw. Đặc tả ở `07` §0 (QĐ-25): **beta 02/12/2026 · 12 sổ đợt 1 · trần cứng 15/12 · cắt lưới 30 ngày, nút thả tim, biến thể card, màn Của tôi, Tết freeze, cron 21:00**. Cộng lại theo bảng US chi tiết ra **≈4,58 pw**, không phải 3,5 — con số đó được ghi ra thay vì làm tròn xuống.
> 3. **Sáu tài liệu đã xin thêm ~+1,3 đến +1,9 pw trên bảng này, và nhiều khoản trả bằng CÙNG MỘT khoản cắt** — riêng "nút thả tim 0,2 pw" bị bán **ba lần** (`03` §10 câu 7, `04` §9.4, `07`). Tức nguyên tắc **P7 — thứ duy nhất trong hồ sơ chống scope creep — đã không kiểm tra được** trong suốt vòng viết này.
>
> **⇒ Sổ cái pw duy nhất từ nay là `docs/adr/pw-ledger.md`.** Luật: **một khoản cắt chỉ được chi một lần**; mọi khoản thêm/cắt phải có một dòng, có tài liệu nguồn, có ngày; **không PR nào được merge nếu tổng vượt trần đã chốt**. P7 ở §7 phải đọc là _"cộng `docs/adr/pw-ledger.md`"_, không phải _"cộng bảng §4.10"_.

```
08/09/2026  bắt đầu Bước 0
21/09/2026  kết thúc Bước 0
22/09/2026  quyết định bằng văn bản (đi tiếp / đổi / dừng)
23/09/2026  dòng code đầu tiên
02/12/2026  beta chạy — TRẦN CỨNG 15/12/2026
```

**Luật đánh đổi 1-1 có hiệu lực từ hôm nay:** mọi hạng mục thêm vào phải cắt một hạng mục đang có, ghi rõ pw. Vi phạm luật này = tổng pw > 6,5 = nguyên tắc P7 bị phá. **Kiểm tra bằng cách cộng `docs/adr/pw-ledger.md`** (A87), không phải cộng bảng trên.

> ## 🟠 CẦN FOUNDER QUYẾT — **D-02: số giờ/tuần cam kết bằng văn bản là 20 hay 15?** Hạn **22/09/2026**.
>
> **Vì sao tài liệu này không tự quyết:** đây là câu hỏi về đời sống của founder, không phải về dự án. Nhưng nó **không được để mở**, vì hai con số đang cùng tồn tại trong chính file này và chúng loại trừ nhau:
> - §2 và §4.10 tính mọi mốc lịch trên **20 giờ/tuần** (⇒ 13 giờ code/tuần).
> - §9 mục 12 viết kill gate: _"nếu tôi vẫn bỏ **>15 giờ/tuần** cho dự án này… tôi dừng"_ — tức **20 giờ/tuần vi phạm kill gate của chính nó ngay từ tuần đầu**.
>
> | Lựa chọn | Hệ quả số học phải chấp nhận |
> |---|---|
> | **(a) Ghi 15 giờ/tuần** (nhất quán với kill gate) | 15 × 0,65 = **9,75 giờ code/tuần** ⇒ 3,5 pw = 140 ÷ 9,75 ≈ **14,4 tuần** ⇒ **beta KHÔNG thể chạy 02/12/2026**. Phải dời beta hoặc cắt scope sâu hơn D-01 |
> | **(b) Sửa kill gate lên 20 giờ/tuần bằng văn bản** | Giữ được mốc 02/12 ở 13 giờ code/tuần, nhưng founder tự nâng ngưỡng chịu đựng của mình **trước** khi biết dự án có sống không — và mất đúng cái gate đã viết để bảo vệ mình |
>
> **Khuyến nghị (chỉ có hiệu lực nếu founder không trả lời trước 22/09):** chọn **(a) 15 giờ/tuần**, và dời hệ quả sang scope chứ không sang sức khoẻ — tức D-01 phải cắt sâu hơn 1,08 pw. **Tuyệt đối không được để hai con số cùng tồn tại** — đó là cách tự lừa mình rẻ nhất trong hồ sơ. Quyết định đi vào `docs/adr/ADR-000-bat-bien.md` kèm dòng "quyết định mặc định do quá hạn" nếu quá hạn.

---

## 5. DANH SÁCH MÀN HÌNH MVP — 7 MÀN, TRẦN LÀ 8

Tất cả là web (Next.js), mở được từ link, chạy trong webview Zalo lẫn browser thường.

| # | Màn | Một dòng |
|---|---|---|
| 1 | **Sổ hôm nay** (home + trang public của link mời) | Hàng ảnh hôm nay của cả sổ ở trên cùng, ba con số, nút Nộp, nút Chốt sổ; người chưa vào sổ thấy ảnh mờ + tên. ⚠️ **Ở MVP-0: KHÔNG có lưới 30 ngày, KHÔNG có nút thả tim** — cả hai đã bị cắt (A86, QĐ-25 / C03), quay lại ở T13+ |
| 2 | **Nộp** | Chọn ảnh hoặc chụp → chọn XONG hay TOANG → Gửi. Không caption, không filter, không chỉnh sửa |
| 3 | **Mở sổ / Vào sổ** | Đặt tên sổ (nhóm tự đặt) hoặc nhập mã 6 ký tự; chọn kèo bằng 8 nút preset ngay trong luồng này |
| 4 | **Card chốt sổ** | Preview ảnh 4:5, nút "Chia sẻ vào Zalo", nút "Lưu ảnh" |
| 5 | **Ảnh chi tiết** | Một ảnh full, ai nộp, nhãn, nút Báo cáo, nút Chặn, nút Xoá ảnh của chính mình. ⚠️ Đây là **nơi DUY NHẤT** chứa Báo cáo + Chặn mà `05` §8.4 bắt buộc — nếu D-01 gộp màn này thành overlay thì overlay **phải giữ đủ ba nút** |
| 6 | **Của tôi** | Kèo hiện tại · "bạn đã có mặt 23/30 ngày" (chỉ mình thấy) · đổi kèo · rời sổ · **xoá dữ liệu của tôi**. ⚠️ **Ở MVP-0 màn này = 0,00 pw** (A86) — nội dung gộp vào luồng có sẵn, không dựng màn riêng. **Không có nút "Chép lời mời" ở đây** (A102) — nút đó chỉ ở màn 4, dưới card |
| 7 | **Chính sách & an toàn** | ToS, quyền riêng tư, cách báo cáo, email liên hệ, **SLA gỡ nội dung in ĐỦ HAI CON SỐ** (A59, xem hộp dưới) |
| 8 | _(để trống có chủ đích)_ | Một slot dự phòng cho **đúng một** màn được phát hiện là bắt buộc trong Bước 0. Nếu Bước 0 không phát hiện ra màn nào, slot này không được lấp. **Yêu cầu lấp slot 8 bằng fake door "Bao cả sổ" đã BỊ TỪ CHỐI** (C44/S04) — một fake door bán hàng không phải phát hiện của Bước 0, và nó là bề mặt thanh toán trong khi doanh thu = 0đ (A62) |

> ### 🔴 [A59 / C24 / QĐ-17] SLA gỡ nội dung là **HAI con số cho HAI đối tượng**, và màn 7 phải in **cả hai**
>
> | Đối tượng yêu cầu | SLA | Tính chất |
> |---|---|---|
> | **Khiếu nại của người dùng** | **48 giờ** | Cam kết tự nguyện — chọn 48h vì founder một mình giữ được; một SLA bị vi phạm tệ hơn một SLA khiêm tốn |
> | **Yêu cầu của cơ quan nhà nước** | **24 giờ**, trường hợp khẩn cấp **6 giờ** | **Luật định, không thương lượng** (`05` Bất đồng #5). Không có quyền hạ xuống 48h vì bận |
>
> Bản cũ của tài liệu này chỉ in "48 giờ" và §10(d) lập luận rằng "24 là lời hứa founder một mình không giữ nổi". **Lập luận đó đúng cho khiếu nại người dùng và sai cho cơ quan nhà nước** — nghĩa vụ luật định không biến mất vì bus factor = 1. Hệ quả vận hành thật: xem **D-07** (ai trực SLA trong **10 ngày** Tết — cửa sổ freeze `book_date` 03/02→12/02/2027, A120; "11 ngày" ở mục D-07 của `_rulings.md` là cách đếm ngày dương lịch, hằng số có hiệu lực là **10 `book_date`**) và công tắc `remote_config['service_paused']` ở `RUNBOOK.md`.
>
> **Cơ chế xử lý report (A60, QĐ-16):** **auto-hide TOÀN CỤC ngay khi có report đầu tiên**, founder xử trong SLA, khôi phục nếu report sai. Ẩn-chỉ-với-người-báo-cáo **không thoả nghĩa vụ** Điều 16 khoản 3 Luật ANM 116/2025. Chi phí ~0 (`04` đã có `proof.hidden_at`).

**KHÔNG có:** màn Đăng nhập · màn Reaction · màn Chat · màn Boss · màn Xếp hạng · màn Season · màn Cửa hàng · màn Danh sách sổ · màn Onboarding carousel.

> ## 🟠 CẦN FOUNDER QUYẾT — **D-04: định nghĩa thành công là A hay B?** Hạn **22/09/2026**.
>
> `10` §1 đặt ra hai định nghĩa loại trừ nhau: **A = sản phẩm có doanh thu** · **B = sản phẩm cố ý giữ nhỏ, dưới ngưỡng pháp lý**. Đây là câu hỏi về việc founder muốn gì, **không suy ra được từ dữ liệu**, nên tài liệu này không tự quyết. Nhưng nó quyết định trực tiếp số phận **slot màn 8** ở trên:
>
> | Lựa chọn | Hệ quả với §5 |
> |---|---|
> | **B — giữ nhỏ trong 12 tháng đầu** | Slot 8 **giữ trống**, chỉ mở cho một màn được Bước 0 chứng minh là bắt buộc. Nhất quán với `05`, với trần **60 sổ** (A93), với doanh thu **0đ** (A62), và với việc P2/P3 đều đã bị cắt |
> | **A — hướng tới doanh thu** | Phải **sửa §5 bằng văn bản** để slot 8 mở cho fake door, **và** phải đợi câu trả lời của luật sư (D-03) vì A62 vẫn cấm thu tiền trong 6 tháng đầu |
>
> **Khuyến nghị (có hiệu lực nếu không trả lời trước 22/09): B trong 12 tháng đầu.**

Màn đăng nhập biến mất bằng device token trong `localStorage` + mã sổ 6 ký tự để khôi phục. **Không SMS OTP ở MVP** — một mình quyết định này xoá khoản chi $0,2852/SMS đi VN mà digest gọi là "khoản chi bất ngờ lớn nhất của dự án", và xoá cả thủ tục đăng ký brandname SMS theo NĐ 91/2020.

---

## 6. DỨT KHOÁT KHÔNG LÀM Ở MVP

Mỗi dòng: **lý do cắt** + **điều kiện mở lại**. Không có mục nào được mở lại vì "cảm thấy nên có".

| # | Không làm | Lý do | Điều kiện mở lại |
|---|---|---|---|
| 1 | **Boss, HP, damage, hồi máu, season** | Lỗi hàm (phản biện #1 FATAL) + "nhiều người chơi tương tác đồng thời qua máy chủ" là mô tả nguyên văn G1 trong NĐ 147/2024 + Habitica 10 năm chứng minh niche | Chỉ như một lớp **opt-in** ở v1.2, A/B 50%, ngưỡng ghi vào ADR **trước** khi có dữ liệu: chênh `sổ-D28` < 10 điểm phần trăm → gỡ vĩnh viễn |
| 2 | **App native + widget (iOS và Android)** | Widget là **phần thưởng cho retention đã chứng minh**, không phải công cụ tạo ra retention. Kèm store review, EAS $1.326/tháng ở 100k MAU, chiến tranh ROM | **`sổ-D28` ≥ 35% trên ≥24 sổ** (A24–A25, C31), đọc ở cổng G2 ngày **26/01/2027** trên cohort tuần 1–4 của beta (02/12→29/12/2026). **In kèm KTC 95% = ±17 điểm mỗi lần trích dẫn.** Ghi vào ADR hôm nay, vì hôm nay là lúc duy nhất founder còn khách quan. ⚠️ **Vì sao hạ từ ≥30 xuống ≥24:** kịch bản cơ sở của `09` §1.2 chỉ sinh **24 sổ** trong 4 tuần đầu — giữ ≥30 nghĩa là cổng này **không bao giờ mở được**, tức viết một điều kiện mở khoá mà mình biết trước là không đạt |
| 3 | **Push riêng, kể cả web push** | Kênh thông báo là Zalo — app duy nhất 100% ROM Việt whitelist sẵn. Thêm kênh thứ hai là thêm một thứ để hỏng | H1 rơi **vùng xám 40–60%** → ship Android web push (+0,3 pw, 0đ) **trước khi** nghĩ tới ZNS 300đ/tin. ⚠️ **[CHỐT 2026-08-28] Hai cảnh báo phải đọc kèm, và cả hai chưa được giải:** (a) `03` §9 B4 cho rằng **Service Worker nhiều khả năng KHÔNG đăng ký được trong webview Zalo** — nếu đúng thì phương án dự phòng này **không tồn tại**, và cả ba phương án thay thế ở `03` §4c đều đắt hơn hoặc phá câu bán. Buổi kiểm chứng 04/09 phải trả lời. (b) ✅ **Thị phần Android VN — D-08 ĐÃ ĐÓNG 04/09/2026 (`docs/adr/ADR-003-thi-phan-android-vn.md`): StatCounter T8/2026 = Android 57,33% · iOS 42,64%.** Nhãn `[FACT]` của `>85%` **bị thu hồi**; web push Android phủ **~57%**, tức bỏ sót ~43% người dùng chứ không ~15%. _(Bối cảnh cũ: r05 ghi `>85%`, r02 dẫn StatCounter T7/2026 ghi **60,38%** (`08` §8.2 là tài liệu duy nhất nêu). Một trong hai đang gắn nhãn **[FACT] sai**. Con số thắng là 57,33%.)_ **Hệ quả bắt buộc:** lập luận "web push phủ >85% tệp" **không còn hiệu lực**; ở ~57% thì 0,3 pw web push chỉ cứu được hơn nửa số người, và iOS (~43%) cần một đường thứ hai hoặc phải chấp nhận không có |
| 4 | **Reaction / comment / chat trong sản phẩm** | Zalo có sticker, voice, meme, quote. Template roast tự viết **luôn thua**. Cắt đi tiết kiệm ~1,5 pw và né Apple Guideline 1.1.1/1.2 | Chỉ khi đo được rằng người dùng **không** dán card vào Zalo — tức giả thuyết nền của cả hướng này sai, và lúc đó phải viết lại tài liệu chứ không phải thêm màn |
| 5 | **Caption tự do trên proof** | Bề mặt UGC cuối cùng. Cắt nó = cắt nghĩa vụ moderation mà founder một mình không gánh nổi | Sau khi có quy trình moderation thật (người + SLA + log), không phải trước |
| 6 | **Xếp hạng, "Báo Thủ", role, vote sus, trust score** | 4 điểm rủi ro shame cao nhất trong toàn product; vùng Apple 1.1.1/1.2 có thể gỡ app không báo trước | **Không bao giờ.** Đây là mục duy nhất trong bảng không có điều kiện mở lại |
| 7 | **Danh bạ, discovery, ghép người lạ** | Mở kênh người-lạ là mở toàn bộ bề mặt an toàn mà founder một mình không có năng lực gánh | **Không bao giờ** trong 12 tháng đầu |
| 8 | **SMS OTP / xác thực số điện thoại** | $0,2852/SMS đi VN + duyệt brandname hàng tuần–tháng | Khi nộp hồ sơ Giấy phép MXH (**đèn đỏ QĐ-04: 8.500 lượt/tháng HOẶC 850 người/tháng**, không phải mốc 700). ⚠️ Có thể sớm hơn ~4 lần nếu luật sư xác nhận Điều 27 khoản 3 NĐ 147 áp cả cho tier Giấy xác nhận thông báo — câu 2 ở `05` §11 |
| 9 | **Zalo Bot tự chốt sổ** | Chính docs.zaloplatforms.com ghi tính năng bot-vào-nhóm đang ở "giai đoạn thử nghiệm nội bộ, chưa phát hành chính thức"; gói free 3 bot / 50 người-dùng-mỗi-bot / 3.000 tin/tháng. Founder bus-factor-1 **không đặt đường găng lên API beta của công ty khác** | Zalo tuyên bố group API rời trạng thái thử nghiệm. Theo dõi changelog hàng tháng, **không chờ đợi** (+1,5 pw) |
| 10 | **Đóng gói Zalo Mini App** | Mini App **không có API nào** trả về group id hay danh sách thành viên khi mở từ nhóm chat; nó chỉ là web app chạy trong Zalo + `getUserID`. Kèm duyệt hồ sơ 3–5 ngày mỗi lần cập nhật | H1 **và** H2 pass trên ≥6 sổ (+2,0 pw). Được gì: icon trong Zalo, danh tính bền, share sheet native |
| 11 | **Memory Capsule, AI recap, AI memory search, vector DB** | App AI có LTV Y1 cao hơn 41% nhưng retention 12 tháng tệ hơn 36% — AI đẩy conversion, không giữ người. Lưới 30 ngày **chính là** memory layer | Không trong 12 tháng đầu |
| 12 | **Gacha, vật phẩm ảo, skin, tiền tệ trong app** | NĐ 174/2026 phạt 60–80 triệu nếu cho mua bán vật phẩm ảo, 170–200 triệu nếu quy đổi ra tiền/thẻ | **Không bao giờ** |
| 13 | **Quảng cáo** | Chưa tính lại trần doanh thu bằng eCPM thật. eCPM web display VN = **$0,25–0,60** `[ước lượng thuần, KHÔNG có nguồn — con số có nguồn $1,51/$2,34 là eCPM in-app, không dùng được cho web]` (A77) | **Điều kiện gốc của tài liệu này GIỮ NGUYÊN** (S16 bác bản viết lại của `10`): sau khi hoàn thành việc bàn giấy 3 giờ ở §10(b). **THÊM điều kiện pháp lý bắt buộc:** quảng cáo cũng là hoạt động phát sinh doanh thu ⇒ vướng đúng khoá của mục 19 và của A62, **và** cần Giấy phép MXH (`05`). Kể cả khi mở: **không interstitial, không reward, không chen vào nghi thức** — tối đa 1 native đặt sau khi card đã hiển thị đầy đủ |
| 14 | **Đa sổ trong UI / nút "Mở sổ mới"** | **1 sổ/thiết bị ở MVP-0** (A101, QĐ-08 — giữ khoá, C25/S02). Ghi thẳng cái giá: **`G ≡ 0` (hệ số lan truyền bằng 0 về mặt cấu trúc) trong 12 tháng đầu là một quyết định CÓ Ý THỨC**, được viết ra thay vì để nó xảy ra âm thầm | v1.1 (+0,3 pw). Trần **3 sổ/thiết bị** là hằng số đặt trước cho v1.1, **chưa có hiệu lực**. **Cột `book_id` + RLS vẫn viết từ commit đầu, chi phí 0** — đây là vòng lan truyền quan trọng nhất (thành viên hài lòng của sổ A mở sổ B) và nó rẻ vì đã trả tiền trước |
| 15 | **Realtime websocket** | ~$207/tháng ở 100k DAU cho thứ user không nhận ra | Chỉ khi có khiếu nại thật về độ trễ, không phải vì đẹp |
| 16 | **Anti-cheat, pHash, camera bắt buộc** | Không có phần thưởng giá trị thật thì không có động cơ gian lận. Nghiêm khắc hoá quá sớm là rủi ro lớn hơn gian lận | Khi tồn tại một phần thưởng có giá trị thật (tiền, vật thể, giải) |
| 17 | **Cơ chế "gánh"** | Trùng chức năng với van 2 ngày nghỉ; van có bảng số biện minh, gánh thì chưa | H2 rơi vùng xám **vì lý do ngày chỉ có 1 người có mặt** (đọc phân bố, không đọc trung bình) → +0,2 pw |
| 18 | **Đa múi giờ** | Một múi giờ = một dòng code; hai múi giờ = một lớp bug vĩnh viễn | >5% người dùng ngoài VN |
| 19 | **In poster / vật thể / mọi hình thức doanh thu** | Ops nặng (in, ship, hoàn tiền) với founder một mình. Digest ghi rõ: không làm trước 20k MAU. **[A62 / C01 / QĐ-01] Cộng một khoá thứ hai, độc lập và mạnh hơn: doanh thu = 0đ TUYỆT ĐỐI trong 6 tháng đầu** — kể cả quảng cáo, kể cả donate, kể cả bán một cuốn sổ in. Hai điều kiện cùng cấm, nên việc thu tiền ở beta (`10` §4 T4) bị cắt ở **cả hai** tầng | ≥20k MAU **và** ≥1 người khác làm ops. **Và** hết 6 tháng đầu **và** luật sư trả lời câu 3 là "được phát sinh doanh thu ở tier thông báo" (D-03). Ở T4 (12/2026–01/2027) chỉ được làm **fake pre-order**: thu tên + số điện thoại + câu "tôi đồng ý đặt trước", **KHÔNG số tài khoản, KHÔNG chuyển khoản, KHÔNG nhận một đồng nào** (A63) |
| 20 | **Lập TNHH, D-U-N-S, gọi vốn, pitch deck** | Việc *cảm giác như tiến bộ* mà không trả lời được câu hỏi duy nhất đáng hỏi | **30 sổ nếu quyết định đi tiếp** (`05` §10 bước 3), **hoặc** đèn vàng QĐ-04 — tuỳ cái nào tới trước. Không phải "700 người" |

---

## 7. NGUYÊN TẮC THIẾT KẾ v2

Thay thế §10 của DOC 1. **Mỗi nguyên tắc kèm cách vi phạm cụ thể, phát hiện được** — nguyên tắc mà không thể vi phạm thì chỉ là khẩu hiệu.

| # | Nguyên tắc | Vi phạm khi… | Phát hiện bằng |
|---|---|---|---|
| **P1** | Không có đại lượng nào biến việc miss của A thành **mất mát đã có** của B | Bất kỳ cột nào trong DB giảm giá trị vì một người không nộp | **Test tự động chạy 10.000 mô phỏng 30 ngày, assert không cột nào giảm ngoài `chuỗi` — và `chuỗi` chỉ được giảm về đúng 0, chỉ khi ngày nghỉ đã hết.** Test đỏ = không merge |
| **P2** | Không màn hình nào, không card nào render một **ô trống CÓ TÊN NGƯỜI** | Một component nhận `member.name` trong nhánh `status === 'vắng'` | Test CI quét cây render |
| **P3** | Mọi chuỗi chữ app sinh ra chỉ tham chiếu **trạng thái**, không bao giờ tham chiếu `goal_text` | Template bank chứa placeholder `{goal}` hoặc `{goal_text}` | Test CI quét template bank |
| **P4** | Luôn tồn tại **ít nhất hai** con số công khai không bao giờ đi xuống | Xoá "ngày thứ N" hoặc "số tấm" khỏi màn chính hoặc khỏi card | Review thiết kế + snapshot test của card |
| **P5** | **Phần thưởng đứng trước nghĩa vụ** trên mọi màn | Pixel đầu tiên dưới header của màn Sổ hôm nay là nút Nộp thay vì ảnh của người khác | Snapshot test layout |
| **P6** | Mọi hằng số cơ chế nằm trong **remote config đọc từ DB** | `grep` tìm thấy một số ma trong logic ngày / chuỗi / ngưỡng | Lint rule + grep trong CI |
| **P7** | **Luật đánh đổi 1-1**: mọi hạng mục thêm vào phải cắt một hạng mục đang có, ghi rõ pw. **[CHỐT 2026-08-28, QĐ-33] Bổ sung luật con: một khoản cắt chỉ được chi MỘT LẦN** | Tổng pw vượt trần đã chốt, **hoặc** một khoản cắt xuất hiện ở hai dòng chi khác nhau | **Cộng `docs/adr/pw-ledger.md`** (không phải bảng §4.10 — bảng đó đã lỗi thời, xem hộp cảnh báo ở §4.10) |
| **P8** | **Vùng xám không được sửa bằng feature.** Chỉ số rơi giữa ngưỡng dừng và ngưỡng đạt ⇒ chạy lại đúng sản phẩm đó với cohort mới | Một feature được ship kèm lý do "gần đạt rồi, thêm cái này nữa là được" | Đọc lại commit message và ghi chú quyết định |
| **P9** | **Không tồn tại nút tiêu cực.** Nếu không có đường thì không có hành vi đi qua đường đó | UI xuất hiện bất kỳ affordance nào biểu đạt sự phản đối nhắm vào một người (downvote, sus, "báo cáo kèo") | Review thiết kế; nút "Báo cáo nội dung" là ngoại lệ duy nhất và nó nhắm vào **nội dung**, không nhắm vào **người** |
| **P10** | **Đơn vị đo là SỔ, không phải user** | Một báo cáo hoặc một quyết định dùng DAU / user-D30 làm chỉ số chính | Đọc dashboard: **cột đầu tiên của mọi bảng và mọi event phải là KHOÁ SỔ (`book_id`)** — nếu không, đã vi phạm. [C52/A30 — tên `group_id` đã chết cùng tên bảng `group`; schema nguồn duy nhất là `04` §1, tiếng Anh, `book` / `book_id` / `book_day`] |
| **P11** | **Chốt sổ là phân phối, không phải cơ chế.** Ngày vẫn tính khi không ai chốt | Một nhánh code khiến `ngày_tính` phụ thuộc `card_shared` | Unit test |
| **P12** | **Không tự làm thứ Zalo đã làm tốt hơn** | Ship một tính năng mà Zalo đã có (reaction, chat, sticker, voice, gọi) | Review scope |

---

## 8. PHẢN BIỆN FATAL / MAJOR ĐƯỢC XỬ LÝ THẾ NÀO

| Phản biện | Mức | Cách v2 xử lý | Trạng thái |
|---|---|---|---|
| **#1 "Cả nhóm nộp đủ xảy ra 1 lần/98 ngày, và boss hồi máu mỗi ngày"** | FATAL | Bỏ boss hoàn toàn. Sự kiện lõi chuyển từ `q⁵` (1,85%/ngày) sang `P(X≥2)` (84,8%/ngày ở q_c=0,53, A=5) — chênh **46 lần**. Không tồn tại hàm hồi máu để sai. Bảng 1, §4.5 | **Tan biến** |
| **#18 "Boss hồi máu vì mày đấy là đổ lỗi công khai có tên người"** | MAJOR | Không còn cấu trúc nào biến miss của A thành mất mát của B (P1). Cộng bảng "được nói / cấm nói" (§4.6) có test CI (P2, P3) | **Tan biến ở tầng cơ chế** |
| **#3 "Tự đặt độ khó + thưởng chung = cuộc đua xuống đáy"** | MAJOR | Race-to-bottom là chiến lược trội **chỉ khi payoff là payoff chung**. v2 không có payoff chung phụ thuộc độ khó kèo: mọi tấm đều bằng nhau, và TOANG cũng tính | **Tan biến về cấu trúc** |
| **#4 "Thứ giữ chân là ĐƯỢC NHÌN THẤY NHAU, boss là thuế"** | MAJOR | v2 nộp đúng luận điểm này và đặt nó ở **nơi nhóm đã nhìn thấy nhau sẵn**. Thuế còn lại đúng một bước: chọn kèo (~5 giây, 8 nút) | **Giải; phần dư được đo bằng H3** |
| **#5 "Cold start: 29 lượt cài organic mới ra 1 nhóm sống"** | MAJOR | Xoá bước "cài 30%" khỏi funnel: 3,2% → 14,2%/người bạn (×4,4). P(sổ hình thành từ 6 lời mời) từ **1,4%** lên **20,5%** (tính lại bằng Bin(6,p), P(X≥2) — con số 1,6% trong hướng D là sai số làm tròn). Cộng: card sinh **từ proof của chính user**, người thứ 2 nhận một bức ảnh của bạn mình chứ không phải lời mời trống | **Cải thiện lớn** |
| **#7 "Zalo hút mất phần thưởng, Teemi giữ lại nghĩa vụ"** | MAJOR | Không tách hai thứ nữa. 27 giây nghĩa vụ trong web, phần thưởng ở đúng chỗ nó vốn xảy ra. Không có app để bị gỡ ở đợt dọn máy | **Giải bằng cách bỏ vế đối lập** |
| **#9 "MVP cực nhỏ thực chất là 17 hệ thống ≈ 33 pw"** | MAJOR | **Trần backlog cứng 6,5 pw** (A83), 7 màn + 1 slot trống, có luật đánh đổi 1-1 (P7). Cắt ~80%. ⚠️ **Chưa đóng hẳn:** phạm vi thi hành thật là **MVP-0 trần 3,5 pw** (A84) trong khi ước lượng trung thực trên bảng US chi tiết là **4,58 pw** (A85) ⇒ **thiếu 1,08 pw** ⇒ D-01, hạn 22/09 | **Giải về nguyên tắc; còn hở 1,08 pw ở MVP-0** |
| **#21 "Vị thành niên + Apple Guideline 1.2 gỡ app không báo trước"** | MAJOR | Không submit App Store ở MVP ⇒ Apple 1.1.1/1.2 không bắn. Cộng: cắt sạch xếp hạng / "Báo Thủ" / vote sus / roast có nhãn; **an toàn là mặc định cho TẤT CẢ, không phải một chế độ riêng** (lấy bản của C, không lấy bản cấp-nhóm của B vì bản đó vô tình tố cáo ai là đứa nhỏ tuổi nhất) | **Giảm mạnh; phần luật ANM còn treo — §9** |
| **#22 "Không có metric nào phát hiện được tác hại"** | MAJOR | Danh mục event hợp nhất **32 event** (A51, nguồn duy nhất `04` §7.1; số 25 `heart_sent` để trống **vĩnh viễn**, không tái sử dụng) vào schema **trước dòng code đầu tiên**, gồm: `member_left{book_id, person_id, misses_7d, was_removed_by_moderation, kept_proofs, days_in, toang_14d}` (A52 — `was_kicked` **đã đổi tên**, `hearts_recv_14d` **không tồn tại**), `report_created/resolved`, `safety_screen_shown{reason_bucket}`, `proof_deleted_by_self`, **`pulse_survey` bắt buộc, bắn ngày 7 và ngày 21** (A28). Thêm event sau khi có dữ liệu = mất toàn bộ lịch sử. ⚠️ **Điểm mù đã biết, không được giấu:** sau khi nút thả tim bị cắt (C03), **HM-1 và HM-3 chết theo** ⇒ còn **7 chỉ số tác hại** (A27) và bộ này **chỉ phát hiện RÚT LUI, KHÔNG phát hiện LOẠI TRỪ**. Thay thế gần nhất là HM-8 + `pulse_survey` | **Giảm một phần — §9. Điểm mù loại-trừ vẫn mở** |
| **#23 "Gõ teemi ở App Store ra Temu"** | MAJOR | Đổi tên **Chốt Sổ** / `chotso.vn`. Và vì không lên store, tên không cần thắng thuật toán tìm kiếm của store | **Giải** |
| **#24 "SÁU câu định vị = không có câu nào"** | MAJOR | Đúng **một** câu, 13 từ, §1. Không có câu bán khác câu truyền miệng. Bảy chữ bị cấm vĩnh viễn | **Giải** |
| **#19 "goal free-text vs không roast goal nhạy cảm"** | MAJOR | `goal_text` không bao giờ lên card, không bao giờ vào chuỗi chữ app sinh (P3, có test CI). Cộng **chặn từ khoá rối loạn ăn uống** ở ô tự viết → màn hỗ trợ + preset thay thế + event. Đây là hàng rào cụ thể duy nhất trong hồ sơ | **Giảm mạnh — §9 vẫn giữ phần dư** |
| **[legal] Boss chung bị xếp trò chơi điện tử G1 (NĐ 147/2024)** | Có thể giết dự án | Không boss, không HP, không damage, không vật phẩm ảo, không tiền tệ. Rollover **batch 04:00** phá vế "đồng thời". Chữ "boss"/"game" bị cấm khỏi mọi vật liệu | **Về gần 0** |
| **[legal] Mất miễn trừ startup 5 năm (Điều 38.2 Luật 91/2025)** | MAJOR | Kèo lưu **free-text không taxonomy**, `preset_id` không lưu per-user, **strip EXIF**, **không nhận diện khuôn mặt**, ảnh gốc **TTL 72h** | **Giữ được** |
| **[tech] Push bị ROM Xiaomi/Oppo/Vivo giết** | MAJOR | Không dùng push của mình. Dùng noti của **Zalo** | **Giải bằng lợi thế cấu trúc** |
| **[tech] Phone OTP $0,2852/SMS** | MAJOR | Không có OTP ở MVP | **Giải** |
| **[tech] EAS Update $1.326/tháng + Supabase egress $0,09/GB** | MAJOR | Không app ⇒ không EAS. R2 egress $0, TTL 72h ⇒ ~$3/tháng ở 10.000 sổ **(riêng R2 media)**. Tổng hạ tầng ở beta là **$28–37/tháng** (A74, Bảng 6) — hai con số đo hai thứ khác nhau, không được trộn | **Giải phần EAS/egress; chi phí nền vẫn $28–37** |
| **[tech] Spam noti reaction (30 push/tối = uninstall)** | MAJOR | Không có push của mình để spam | **Giải** |
| **[behavior] Nhãn "Báo Thủ" là điểm shame cao nhất** | MAJOR | Cắt thẳng, không có điều kiện mở lại | **Tan biến** |
| **[behavior] Bài toán quy đổi damage giữa kèo khó/dễ chưa được giải** | MAJOR | **Tan biến**: không có bảng điểm chung thì không có gì để quy đổi | **Tan biến** |
| **[integrity] Vote-to-fail gây drama thật ngoài đời** | MAJOR | Cắt thẳng (P9: không tồn tại nút tiêu cực) | **Tan biến** |
| **[retention] Đo retention theo user che giấu việc nhóm đang chết** | MAJOR | Đơn vị analytics là **sổ** từ dòng code đầu (P10). `group_alive = ≥3 người nộp tấm trong 7 ngày gần nhất` — chốt bằng văn bản hôm nay, vì định nghĩa này đã trôi trong repo (r04 §13 nói ≥3, §64 nói ≥2) trước khi có một user nào | **Giải** |
| **[vn-market] App fatigue: 27 app/tuần, slot app xã hội thứ 4 cực khan hiếm** | MAJOR | Không xin slot nào | **Giải** |
| **[behavior] `ceil(0,6×Active)` gãy đơn điệu ở A=4** | (mới, do phân tích v2) | Ngưỡng phẳng `k=2` cho mọi A≥3. Sửa bằng một dòng, trước khi có user | **Giải** |

---

## 9. PHẢN BIỆN VẪN CÒN TREO — VÀ KẾ HOẠCH SỐNG CHUNG

Không giảm nhẹ. Đây là phần quan trọng nhất của tài liệu.

**1. Giấy phép mạng xã hội theo NĐ 147/2024, ngưỡng ~1.000 người dùng thường xuyên/tháng — KHÔNG NÉ ĐƯỢC.** Điều 3 nói rõ _"trên nền tảng **website hoặc ứng dụng**"_. Một web app cho phép người dùng cung cấp, trao đổi, chia sẻ thông tin với nhau **vẫn là mạng xã hội**. Đóng gói thành Zalo Mini App cũng không đổi: Zalo là kênh phân phối, Chốt Sổ vẫn là bên cung cấp dịch vụ. Ai nghĩ "làm web thì luật không đụng tới" là hiểu sai luật.
**Sống chung:** (a) mua `chotso.vn` **trong tuần này** (**≈750.000đ**, QĐ-27 — lấy báo giá thật ngày 03/09) — giấy phép đòi tên miền .vn còn hiệu lực ≥6 tháng, đây là việc rẻ nhất, tốn thời gian chờ nhất, làm được hôm nay; (b) **HAI dòng trong dashboard**, không phải một; (c) gửi luật sư **bảy câu** trong tuần này (`05` §11, QĐ-14 — danh sách hợp nhất, thay câu duy nhất dưới đây):

> ## 🔴 [CHỐT 2026-08-28 — QĐ-04] NGƯỠNG "700 NGƯỜI DÙNG THƯỜNG XUYÊN" ĐÃ BỊ BÁC. Nó báo động MUỘN ~2,5 LẦN.
>
> `05-lo-trinh-phap-ly.md` §0 kết luận 2 chứng minh: ngưỡng NĐ 147/2024 là **OR** — `10.000 lượt truy cập/tháng` **HOẶC** `1.000 người dùng thường xuyên/tháng` — và ở một sản phẩm mà core loop là **mở app hằng ngày**, nhánh **lượt truy cập bind trước**. Ở 25 lượt/người/tháng, 10.000 lượt = **400 người ≈ 100 sổ** (A=4,0), trong khi 700 người ≈ 175 sổ. Đèn cảnh báo cũ nằm **sau** ngưỡng thật.
>
> **Thay bằng hai counter, đo trực tiếp, không qua quy đổi:**
>
> | Counter | 🟡 Đèn vàng — khởi động hồ sơ Giấy phép MXH | 🔴 Đèn đỏ — dừng nhận sổ mới **ngay trong ngày** |
> |---|---|---|
> | `monthly_visits` | **6.000** | **8.500** |
> | `monthly_active_persons` | **600** | **850** |
>
> **Trần beta hành chính: 60 sổ** (≈ đèn vàng ở A=4,0), và **không được nới bằng cách hỏi lại** — 60 sổ an toàn dưới đèn đỏ ở cả A=4 lẫn A=5. Định nghĩa đếm tạm dùng cho tới khi luật sư trả lời (QĐ-24): `monthly_active_persons` = số person khác nhau có ≥1 tấm trong 30 ngày · `monthly_visits` = số phiên khác nhau (session mới sau 30 phút không hoạt động) chạm bất kỳ route nào, kể cả trang public. **Đếm rộng, báo động sớm.**
>
> Con số 700 đã được thay ở: `02` (§7.3, bảng cửa pháp lý), `03` (§2.4, §3.3), `04` (event 28 → tách thành `visits_alert` + `persons_alert`), `06` (§6, §8), `07` (Gantt, §6, §8a), `10` (§1, §5 mục 14, §7). **Đây là loại thay đổi `04` nói không hồi tố được** — `monthly_visits` phải được đếm từ dòng code đầu tiên. _"Chốt Sổ (sổ kín ≤8 người, không feed công khai, không profile công khai, không chat) có phải MXH theo Điều 3 NĐ 147/2024 không, và cách đo 'người sử dụng thường xuyên' là gì?"_

**2. Nội địa hoá dữ liệu (NĐ 53/2022) và chuyển dữ liệu xuyên biên giới (NĐ 330/2026, phạt tới 5% doanh thu năm trước).** TTL 72h giảm khối lượng chứ không xoá nghĩa vụ.
**Sống chung:** **`docs/adr/ADR-000-bat-bien.md` §3 (mục pháp lý)** — A103: **một file ADR duy nhất**, ADR-001 và ADR-002 bị gộp vào, không tạo riêng — chốt Supabase Singapore + R2, với hai ràng buộc coi như luật — không khoá cứng vào Edge Functions/Auth, mọi truy cập media qua một `StorageAdapter` interface — kèm dòng _"nếu luật sư nói phải đặt tại VN, chi phí di chuyển dự kiến ≤1 pw"_.

**3. Luật ANM 116/2025 Điều 16.2 — cha mẹ đứng tên cho user <16.** Age gate tự khai không hoạt động, và web còn dễ vào hơn store.
**Sống chung:** **ô xác nhận "tôi từ 16 tuổi trở lên"** — <16 không mở được sổ, ghi vào ToS "dịch vụ dành cho người ≥16". ⚠️ **[A47, QĐ-20] Chỉ lưu `person.is_16_plus boolean` + `age_gate_at`. KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** — tối thiểu hoá dữ liệu theo Luật 91/2025; việc kiểm tra tuổi làm ở **tầng ứng dụng**, không bằng CHECK trong CSDL (Postgres không cho hàm không-IMMUTABLE trong CHECK — A48). Bản cũ ghi "ô khai năm sinh" là **sai**: nó thu đúng một trường dữ liệu cá nhân mà sản phẩm không cần. Đây là **hàng rào giấy tờ, không phải hàng rào kỹ thuật** — nói đúng như vậy, không tự khen. Đổi lại, v2 làm cho việc một đứa 15 tuổi lọt vào ít nguy hiểm hơn: không người lạ, không chat, không caption, không xếp hạng, không ẩn danh.

**4. #26 "MOAT bằng 0 trong 6 tháng đầu" — v2 làm chỗ này TỆ HƠN mọi hướng khác.** Một trang web 7 màn thì bất kỳ ai cũng clone trong 2 tuần, và VNG — chủ nhà — clone trong 2 ngày nếu muốn. Cộng: v2 tự nguyện từ bỏ widget, tức moat duy nhất đã được kiểm chứng ở thị trường VN (Locket).
**Sống chung:** chấp nhận rằng trong 6 tháng đầu **tốc độ học nhanh là moat duy nhất**, và đó là lý do vòng lặp sửa lỗi ngắn (lý do 3 ở §2) quan trọng hơn mọi tính năng. Widget quay lại ở nấc 3, khoá sau **`sổ-D28` ≥ 35% trên ≥24 sổ, đọc ngày 26/01/2027, KTC 95% ±17 điểm** (A24–A25, A118).

> **[D-10] Khoảng trũng sau đỉnh (tháng 5–10/2027) là rủi ro đã biết, CHƯA có phương án.** r01: đỉnh tháng 2–4, mất 50% DAU trong 4–6 tháng sau đỉnh, **0/7 app ritual giữ được đà**. Digest #26 kê toa "build lớp utility ở v1"; mục 4 này từ chối và tự nhận làm chỗ này tệ hơn mọi hướng. **Hai lựa chọn, tài liệu không tự quyết:** (a) **không** viết kế hoạch tháng 5–10 bây giờ — tài liệu thứ 11 không làm ai nộp thêm một tấm ảnh — mà ghi **đúng một dòng** vào `ADR-000`: _"khoảng trũng sau đỉnh là rủi ro đã biết, chưa có phương án; xem lại tại cổng 26/01/2027 cùng lúc với quyết định widget"_ · (b) dành sẵn ~1 pw ở T13+ cho một lớp utility, **đổi bằng** một khoản cắt ghi vào `pw-ledger.md`. **Khuyến nghị: (a)** — mọi dữ liệu để quyết chỉ có sau 26/01/2027.

**5. #13 và #16 — kinh tế đơn vị.** Ở 10.000 DAU đã lỗ; hoà vốn lương một người cần 60k–120k DAU tại VN; trần VN-only ~2,6 tỷ VND/năm ở 1 triệu MAU. v2 hạ chi phí hạ tầng xuống **$28–37/tháng ở beta** (A74 — không phải $12 như bản cũ ghi; Supabase Pro $25 là bắt buộc vì sản phẩm hứa giữ thumbnail vĩnh viễn) nhưng **hạ trần doanh thu còn nhanh hơn**: không IAP Apple/Google, và thanh toán web cho Gen Z VN là bài toán khó hơn hẳn.
**Sống chung:** xem §10(b) — con số 2,6 tỷ được tính trên đường ray sai và phải tính lại **trước** khi dùng nó để ra quyết định chiến lược. Và gọi đúng tên tham vọng ngay hôm nay: **đây là small profitable business hoặc portfolio piece.** Nếu founder xây để gọi vốn hay exit, chiến lược này sai từ ngày 1 — dừng bây giờ, không phải sau 12 tháng.

**6. #6 "P(nhóm 5 người sống 30 ngày) ≈ 12,5%".** v2 làm cửa vào rẻ hơn, **không** làm nhóm bạn bền hơn. ~40% nhóm messaging chết trong tuần đầu (Qiu et al., WWW 2016, toàn bộ log WeChat) là baseline vật lý.
**Sống chung:** không hứa hẹn gì về việc này. Đo bằng `sổ-D28` và chấp nhận con số thật.

**7. Rủi ro chủ nhà (VNG) — rủi ro nghiêm trọng nhất do chính hướng này tạo ra.** Sản phẩm sống nhờ ba thứ VNG kiểm soát: link mở được trong Zalo, card render đẹp, noti của Zalo. Zalo **có** hệ thống cảnh báo/chặn domain. Một sáng thức dậy thấy màn "Link này có thể không an toàn" là growth về 0.
**Sống chung:** domain riêng có brand + HTTPS + nội dung thật; chủ động liên hệ whitelist trước launch; **mã sổ 6 ký tự gõ tay làm đường thoát hiểm từ ngày 1** — nhưng **có điều kiện, không vô điều kiện** (A45): mã trên card chỉ mở được sổ khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi**, và nó **độc lập hoàn toàn** với `share_token` của trang public (A42: `share_token` sinh riêng, TTL 7 ngày, `noindex`; slug công khai **không được chứa `code6` như substring**, có test CI — A44). Nếu để mã 6 ký tự làm khoá vào vô điều kiện thì đường thoát hiểm biến thành lỗ hổng: đoán 28⁶ thì không, nhưng một card cũ trôi ra ngoài nhóm thì có. Cộng: **MỘT domain ở MVP-0** (A68) — domain dự phòng đã bị cắt, nên nếu buổi 04/09 cho thấy Zalo cảnh báo domain `.vn` lạ thì **mua domain thứ hai ngay trong tuần đó**. Và ghi nhận tính chất của rủi ro này: nó là rủi ro **chết nhanh, rẻ** — không phải rủi ro tiêu 4 tháng rồi mới biết.

**8. Mù analytics ở phần vui nhất.** Cà khịa xảy ra trong Zalo: không log được, không can thiệp được. Dashboard vẫn xanh trong khi một sổ đang dập một người.
**Sống chung:** không sửa được, nhưng sửa được phần **ai rời sổ và vì sao** — đó là 4 event ở §8. Chấp nhận: v2 chỉ chứng minh được người ta **có bấm**, không chứng minh được sản phẩm **tạo giá trị**. Nói thẳng điều đó với chính mình mỗi lần đọc dashboard.

**9. Điểm chết đơn: người chốt sổ.** Đã giảm bằng cách tách chốt-sổ khỏi cơ chế tính ngày (§4.7) và bằng việc ghi tên người chốt sổ ngày mai lên card. Nhưng nếu cả sổ không ai bấm, kênh phân phối của tối đó biến mất.
**Sống chung:** H1 đo đúng chuyện này. Vùng xám → Android web push (0đ), không phải ZNS (**36.000đ/sổ/tháng** ở A = 4,0 người/sổ — A70; bản cũ ghi 45.000đ vì tính ở 5 người — vẫn quá đắt để làm mặc định).

**10. Ảnh XONG theo cấu trúc là cùng một khung hình mỗi ngày.** Nhãn TOANG giảm chuyện này nhưng không xoá.
**Sống chung:** đo `tỉ lệ TOANG/tổng tấm` theo tuần như một chỉ số sức khoẻ nội dung. Nếu nó về gần 0 thì hoặc mọi người đang thắng (tốt) hoặc nhãn TOANG đang bị coi là nhục (xấu) — phân biệt bằng exit survey.

**11. Bước 0 có thể pass vì founder nhờ, không phải vì nghi thức hoạt động.** Đây là lỗ hổng phương pháp mà cả 4 hướng cùng mắc.
**Sống chung:** **cửa sổ im lặng** — xem §10(f). Đây là điều kiện không thương lượng.

**12. KILL GATE CHO FOUNDER — thứ cả 4 hướng không có.** Cả 4 đều viết ngưỡng dừng cho q, cho `sổ-D28`, cho tỉ lệ hình thành. Không hướng nào viết ngưỡng dừng cho chính người làm. Dự án này nhiều khả năng **không** chết vì lỗi toán hay vì một công văn — nó chết vào một tối thứ Ba tháng thứ 5 khi founder không mở laptop nữa, và vì không có gate viết sẵn, nó sẽ chết dưới dạng bỏ dở kéo dài 8 tháng thay vì dừng dứt khoát ở tháng 4.

> **Viết hôm nay, 03/09/2026, khi tôi còn khách quan — bản đã sửa theo A64/C01/A122:**
> _"Nếu đến **31/03/2027** tôi vẫn bỏ **>15 giờ/tuần** cho dự án này **VÀ** `sổ-D28` **< 25%**, tôi dừng dứt khoát trong tuần đó. Không gia hạn. Không 'sắp viral tới nơi'."_
>
> ⚠️ **[A64 / QĐ-01b] Vế "doanh thu vẫn bằng 0" ĐÃ BỊ BỎ khỏi điều kiện dừng.** Lý do là logic, không phải nới lỏng: `05` §0 kết luận 3 **cấm phát sinh doanh thu trong 6 tháng đầu** (A62), nên ở 31/03/2027 doanh thu bằng 0 là **hệ quả pháp lý của quyết định của chính mình**, không phải tín hiệu thị trường. Giữ nó trong kill gate là tự phạt mình vì đã tuân thủ luật — và tệ hơn, nó làm gate **luôn luôn** đúng một vế, khiến gate mất sức phân biệt.
>
> **Hai vế còn lại là VÀ, không phải HOẶC** — cả hai phải cùng đúng thì mới dừng.

> ## 🟠 CẦN FOUNDER QUYẾT — **D-05: ngưỡng `sổ-D28 < 25%` giữ hay hạ?** Hạn **22/09/2026** (ngưỡng phải viết TRƯỚC khi có dữ liệu).
>
> **Vì sao tài liệu này không tự quyết:** chính hồ sơ đang tự dự báo `group_alive` D30 nằm trong dải **12,5%–19,1%** (§2 lý do bác C, §9 mục 6) — tức **dự án đang được thiết kế để trượt cổng của chính nó**. Hạ ngưỡng **sau** khi nhìn thấy dữ liệu là tự lừa mình (luật 2 của `06` §6); hạ **trước** khi có dữ liệu là hợp lệ nhưng phải là chủ ý của người chịu trách nhiệm, không phải của một tài liệu.
>
> | Lựa chọn | Điều phải chấp nhận bằng văn bản |
> |---|---|
> | **(a) GIỮ 25%** | Viết thêm đúng một câu, hôm nay: _"nếu beta ra 15–25%, đó là **DỪNG**, không phải 'đúng như mô hình'."_ Không có câu đó thì 25% chỉ là trang trí |
> | **(b) Hạ xuống 20%** | Làm **NGAY BÂY GIỜ**, kèm lý do viết ra, **không đợi tới 26/01/2027**. Đổi lại: mất một phần sức phân biệt của cổng G2 (KTC ±17 điểm đã rộng sẵn) |
>
> **Khuyến nghị (có hiệu lực nếu không trả lời trước 22/09): (a) GIỮ 25%** kèm câu văn bản ở trên.

**Ngân sách giờ vận hành — thứ không hướng nào ngân sách hoá:**

| Giai đoạn | Giờ/tuần | Ghi chú |
|---|---|---|
| Bước 0 (14 ngày, 08→21/09) | **~15 giờ/tuần** | 5 sổ nhánh A × 20 phút + 3 sổ nhánh B × 10 phút mỗi tối × 14 tối ≈ 30 giờ. **Code = 0** |
| Build MVP-0 (23/09 → 02/12 = **10 tuần lịch**) | ≤2 giờ/tuần vận hành | ⚠️ 10 tuần × 13 giờ code = **130 giờ ≈ 3,25 pw**, trong khi ước lượng trung thực là **4,58 pw ≈ 14,1 tuần** (A82/A85). Khoảng hở này là D-01 + D-02, không phải đệm. Nếu vượt, cắt số sổ beta, không cắt giấc ngủ |
| Beta **đợt 1: 12 sổ** (02/12→29/12, cohort quyết định) | ~2 giờ/tuần | A90. 12 sổ × ~10 phút/tuần |
| Beta **đợt 2: ≤30 sổ**, mở dần từ tuần 15 | **~5 giờ/tuần** | A91. Giả định 1 sổ sống ngốn ~10 phút/tuần chú ý của founder |
| **Trần vận hành** | **35 sổ sống cùng lúc** (8,4 phút/sổ/tuần) `[ước lượng — `09` §2.2]` | A92. Vượt 3 tuần liên tiếp ⇒ **giảm số sổ, không giảm giấc ngủ** |
| **Trần cứng vận hành (giờ)** | **10 giờ/tuần** | Vượt 3 tuần liên tiếp ⇒ giảm số sổ beta |
| **Trần cứng hành chính** | **60 sổ** | A93 — đây là trần **PHÁP LÝ** (đèn vàng `monthly_visits` 6.000), **không phải** trần vận hành, và **không được nới bằng cách hỏi lại** |

---

## 10. ĐIỀU CẢ 4 HƯỚNG BỎ SÓT — VÀ CÁCH XỬ LÝ

Tổng hợp từ ba judge, đã khử trùng lặp.

**(a) Cả 4 giữ lại đúng thứ chưa bao giờ chạy được, rồi gọi đó là điểm khác biệt.** Cả 4 tuyên bố giữ "mỗi người một kèo + ảnh proof hằng ngày" là bất khả xâm phạm, viện dẫn r01 rằng 0/16 app khảo sát có bộ ba đó. Nhưng bằng chứng thực nghiệm nói: **lớp GOAL + PROOF chính là lớp chưa ai làm thành công ở bất kỳ quy mô nào.** Folksable Photo Accountability — developer tự mô tả là "passion project". HabitShare — gần 10 năm, vẫn vô hình. Spar! — proof video + nhóm + thử thách chung, không có một số liệu DAU công khai nào. Habitica party — 10+ năm, ~5M tải, niche. Trong khi đó hai thứ **đã** scale trong đúng không gian này đều **không đòi chứng minh gì cả**: Locket (10M+ tải VN, đã có lãi) và Yope (2,2M MAU, 800k DAU, D7 40%, $4,65M seed) — ảnh chỉ là "tao đang làm gì", 0 giây setup.

> "Không ai làm" và "không ai làm được" là **cùng một quan sát đọc theo hai cách**, và cả 4 tài liệu đều chọn cách đọc lạc quan mà không tài liệu nào nêu tên bốn tiền lệ thất bại kia.

**Xử lý:** Bước 0 phải đo **đích danh** câu hỏi này bằng **hai nhánh** — đó là H3 ở §11. Nhánh đối chứng gửi ảnh "hôm nay tao thế nào" (kiểu Locket, 0 setup), nhánh chính gửi ảnh có kèo + nhãn XONG/TOANG. Nếu nhánh đối chứng thắng ≥10 điểm phần trăm, **bỏ kèo** — và đó là một kết luận hợp lệ, không phải một thất bại.

**(b) Cả 4 tính doanh thu trên đường ray sai, rồi kết luận "không phải một doanh nghiệp".** Bốn tài liệu đều dẫn cùng con số (IAP VN $259M/năm đang giảm; trần ~2,6 tỷ VND/năm; hoà vốn cần 60k–120k DAU) và đều tính trên **IAP/subscription**. Nhưng đối thủ mà chính hồ sơ này gọi là nguy hiểm nhất — Locket, cùng category, cùng thị trường, cùng tệp — kiếm tiền bằng **hybrid subscription + quảng cáo**: tích hợp Moloco SDK 11/2025, doanh thu quảng cáo **tăng 87% trong 5 tháng**, dùng MREC native đặt vừa với thẩm mỹ app. **Chữ "quảng cáo" không xuất hiện một lần nào trong cả 4 tài liệu hướng.** Điều này quan trọng vì ad ARPU **không cần payer conversion** — thứ mà mọi red flag [money] đều nói là điểm chết ở VN (7–10% game user từng trả tiền, văn hoá share account). Ad ARPU cần impression, mà impression tỉ lệ với DAU.

**Xử lý:** một việc bàn giấy **3 giờ, trong tháng 9**: tính lại trần doanh thu với eCPM thật của tệp VN, **trước khi** dùng con số 2,6 tỷ để ra bất kỳ quyết định chiến lược nào. Không phải để mở quảng cáo ở MVP (mục 13 ở §6 vẫn khoá) — mà để biết con số nào đúng.

**(c) Cả 4 đề xuất Bước 0 MỘT NHÁNH — tức một thí nghiệm không thể sai.** Cả 4 yêu cầu Bước 0 thủ công 14 ngày và đều đặt kill gate, nhưng cả 4 chỉ chạy **một** nhánh — chính nhánh mà tác giả tài liệu đó tin. Hướng A tự nêu đây là rủi ro #7 của mình rồi không làm gì với nó. Chi phí sửa: ~2 giờ/tuần thêm, vẫn 0đ, vẫn trước dòng code đầu tiên. Duolingo đã làm đúng bài này với Friend Streak: build "uber prototype" hoàn toàn local, không backend, để test hành vi trước khi làm thật.
**Xử lý:** đã đưa vào H3 và vào ngân sách giờ ở §9.

**(d) Không hướng nào ngân sách hoá VIỆC VẬN HÀNH — và vận hành mới là thứ giết founder một người.** Cả 4 có bảng person-week cho code, không hướng nào có bảng giờ cho: chăm sổ Bước 0, tuyển và thay thế sổ chết, trả lời tin nhắn user, và đặc biệt **SLA gỡ nội dung 24h** mà hai hướng đưa vào thiết kế. SLA 24h với một người nghĩa là: không nghỉ ốm, không đi chơi, không Tết, vĩnh viễn.
**Xử lý:** bảng giờ vận hành ở §9, trần cứng 10 giờ/tuần. Và SLA công bố ở màn 7 là **HAI con số** (A59, C24): **48 giờ cho khiếu nại của người dùng** — chọn 48 vì 24 là lời hứa founder một mình không giữ nổi, và một SLA bị vi phạm tệ hơn một SLA khiêm tốn — **nhưng 24 giờ, khẩn cấp 6 giờ, cho yêu cầu của cơ quan nhà nước**, vì đó là **luật định, không thương lượng được bằng lập luận bus-factor**.

> ⚠️ **Sửa lại chính lập luận cũ của mục này:** bản cũ viết "SLA là 48 giờ, **không phải 24**" như thể một con số thay con số kia. Đó là lỗi gộp hai đối tượng làm một. Nghĩa vụ luật định không co giãn theo số người trong đội — nếu founder không giữ nổi 24h/6h thì lời giải là **D-07** (một người thứ hai có login chỉ-đọc) hoặc **tạm dừng dịch vụ** bằng `remote_config['service_paused']`, **không** phải hạ con số xuống 48h trên trang chính sách.

**(e) Có kill gate cho sản phẩm, không có kill gate cho founder.**
**Xử lý:** đã viết ở §9, mục 12, có ngày cụ thể.

**(f) Bước 0 có thể pass vì lý do sai, và không hướng nào thiết kế để phát hiện.** 30–40 người đó nộp ảnh vì **founder nhờ**, không phải vì nghi thức hoạt động. Đó là đo vốn xã hội của founder chứ không phải đo sản phẩm.
**Xử lý — CỬA SỔ IM LẶNG, không thương lượng. Giao thức chốt theo A97–A98 (QĐ-29):**

- **Đúng HAI ngày: 15/09/2026 và 18/09/2026** (ngày 8 và ngày 11 của Bước 0). Bản cũ ghi "ngày 8, 11 **và 14**" (tức 15, 18, **21/09**) — **ngày thứ ba đã bị bỏ** để khớp lịch T2 của `07` và script S6 của `02` (C51). Ngày 21/09 là ngày cuối Bước 0, cũng là ngày đóng số liệu; để nó im lặng làm hỏng việc thu thập cuối kỳ.
- **Founder KHÔNG post gì, không nhắc gì, không trả lời gì TRONG NHÓM** — đây là chỗ bản cũ nói không đủ rõ và đã bị `02` §5.5 bắt: **im lặng nghĩa là im lặng trong nhóm, không có nghĩa là ngừng vận hành Bước 0.**
- **Card vẫn được làm, nhưng gửi RIÊNG cho người trực của sổ đó** (tin nhắn 1-1), không phải dán vào nhóm. Founder tuyệt đối **không tự dán card vào nhóm** trong hai ngày này.
- **Người trực quên dán ⇒ ĐỂ NGUYÊN.** Không nhắc, không dán hộ. Đó chính là **phép đo điểm chết đơn của người chốt sổ** (§9 mục 9) và nó **miễn phí** — nếu founder nhắc thì mất luôn phép đo mà không được gì.

`q_c` và `q_x` của **riêng hai ngày đó** là con số thật, và **chỉ con số đó** được so với ngưỡng ở §11. ⚠️ **Hệ quả cỡ mẫu phải ghi ra:** cửa sổ rút từ 3 ngày xuống 2 ⇒ mỗi ngày im lặng nay chiếm **50%** phép đo thay vì 33%; một tối bất thường (mưa lớn, thi giữa kỳ, một sổ đi chơi chung) làm lệch nhiều hơn trước. Đọc kèm phân bố theo sổ, không chỉ đọc trung bình.

Nếu nhịp chỉ tồn tại vào những ngày founder có mặt thì thứ được kiểm chứng là founder, không phải sản phẩm — và toàn bộ person-week tiếp theo sẽ được đầu tư trên một phép đo sai.

**(g) Không hướng nào hỏi: ngày hụt thì người dùng muốn làm gì?**
**Xử lý:** trạng thái **TOANG**. Xem §4.3. Đây là thay đổi lớn nhất của v2 so với hướng thắng, và nó tốn 0,1 pw.

**(h) Kỷ luật kiểm chứng nền tảng bằng nguồn gốc TRƯỚC khi thiết kế.** Hướng D là hướng duy nhất fetch tài liệu chính thức và tìm ra ba sự thật phủ định đắt giá (Mini App không có group context; Zalo Bot nhóm còn "thử nghiệm nội bộ"; Messenger group bot đóng vĩnh viễn) — tự phá phiên bản lãng mạn của chính mình. Nhưng v2 còn **bảy phụ thuộc nền tảng chưa ai fetch** — bản cũ chỉ liệt kê ba; danh sách đã nở theo **A105**, vì bốn câu bổ sung đều có khả năng **giết một quyết định đã ghi trong tài liệu này**.

**Xử lý — MỘT buổi ngày 04/09/2026, trước dòng code đầu tiên, trên ma trận ≥3 máy Android THẬT (Xiaomi / Oppo / Samsung tầm trung), kết quả ghi vào `ADR-000`:**

| # | Câu hỏi | Nếu câu trả lời là KHÔNG thì thứ gì trong tài liệu này chết |
|---|---|---|
| 1 | Zalo có cảnh báo/chặn domain `.vn` lạ khi dán link lần đầu vào nhóm không? Test thật với 3 tài khoản | §9 mục 7 (rủi ro chủ nhà) thành hiện thực ⇒ **mua domain thứ hai ngay trong tuần** (A68) |
| 2 | `chooseImage` / `<input type=file>` / `createCameraContext` trong webview Zalo chạy đồng nhất trên máy thật không? | Bước 4 của core loop — **bước duy nhất không bỏ được** (§3) |
| 3 | OG preview do satori render có hiển thị đúng trong link preview của Zalo không, kích thước **4:5 có bị crop** không? | Card 4:5 (§4.6) — bề mặt phân phối duy nhất |
| 4 | **Service Worker có đăng ký được trong webview Zalo không?** | Toàn bộ phương án dự phòng "Android web push" ở §6 mục 3 và ở vùng xám H1 (§11) — nếu không thì **phương án đó không tồn tại** (`03` §9 B4) |
| 5 | **`navigator.share({files})` có chạy trong webview Zalo không?** | Đường chia sẻ card một chạm. `08` BĐ#6 ước lượng mất **15–30 điểm phần trăm** ở đúng kênh phân phối duy nhất ⇒ **D-09** |
| 6 | Zalo có trả về **danh sách "Đã xem"** của một tin trong nhóm không? | Cách đo H1 rẻ nhất. Nếu không ⇒ bắt buộc dùng **shortlink 8 sổ × 14 ngày = 112 link** (A22) |
| 7 | Postgres: **generated column có `AT TIME ZONE`** và `CREATE TABLE` chạy được không? | Cột `book_date` sinh từ `intent_at` — nền của A01/A02 (`04` §3) |

> ## 🟠 CẦN FOUNDER QUYẾT — **D-09: nếu câu 5 trả lời KHÔNG thì làm gì?** Hạn **04/09/2026** (tức trong chính buổi đó).
>
> **Hai lựa chọn:** (a) **long-press → "Lưu ảnh" + một dòng hướng dẫn ngay dưới card** (+0,05 pw), cộng đo `card_shared / card_rendered` để biết thiệt hại thật · (b) chấp nhận mất kênh và dựa hoàn toàn vào **mã 6 ký tự** (A45), lúc đó mã phải được **in to hơn** trên card. **Khuyến nghị: làm (a) ngay, và giữ (b) làm lớp thứ hai** — hai đường thoát rẻ hơn một đường tốt.
>
> **D-08 (thị phần Android >85% hay 60,38%)** cũng đóng trong buổi này: 15 phút kiểm tra StatCounter, gắn **đúng một** con số vào `ADR-000`. Xem §6 mục 3.

**(j) Không hướng nào viết ra VẬN HÀNH — và vận hành là 100% thời gian còn lại sau khi build xong.** Bốn hướng đều dừng ở "sản phẩm làm gì"; không hướng nào nói founder làm gì lúc 21:00 mỗi tối, làm gì khi một sổ chết, làm gì khi có người rời sổ, làm gì khi có report lúc 23:00, ai trực khi founder về quê Tết, và làm gì khi phải đóng cửa. Với **bus factor = 1** và trần **10 giờ/tuần** vận hành, đây không phải phụ lục — nó là phần lớn nhất của vòng đời dự án.

**Xử lý:** hai tài liệu mới ngày **04/09/2026**, cả hai đều **0 pw** (không tạo hạng mục kỹ thuật nào):

| Tài liệu | Chứa gì | Thay thế cho |
|---|---|---|
| **`13-runbook-van-hanh.md`** | Checklist mỗi tối Bước 0 (20:40, 130 phút) và mỗi tối beta (21:00, **6 phút**) · giao thức đóng Bước 0 ngày **22/09** · **kịch bản kết quả xám** (chi phí **0,65 pw** cho một lần chạy lại) · **12 ca sự cố** với SLA từng ca · **sổ chết** (5 điều cấm) · **người rời sổ** (bảng 14 dòng dữ liệu đi đâu) · **export tay** D-06 (6 bước, SLA 10 ngày) · **bàn giao Tết** · **đóng cửa tử tế 14 ngày** · bí mật & bus factor | `RUNBOOK.md` mà `03` §10, `05` §8.1 và `09` câu #8 viện dẫn — **một tài liệu, một địa chỉ** |
| **`12-kiem-chung-nen-tang.md`** | Kịch bản thao tác cho **7 câu** của §10(h) · ma trận ≥3 máy · **mẫu ghi kết quả** · thứ tự chạy 2 giờ · nhánh dự phòng nếu chưa có domain | Buổi 04/09 trước đây chỉ có danh sách câu hỏi, không có cách hỏi |

⚠️ **Hằng số của vận hành, chốt tại đây để không phải tra 5 file:** trần vận hành **35 sổ sống cùng lúc** (A92, 8,4 phút/sổ/tuần `[ước lượng]`) ≠ trần hành chính/pháp lý **60 sổ** (A93). SLA **kép**: 48h khiếu nại người dùng · 24h, khẩn cấp 6h với cơ quan nhà nước (A59). Sổ chết: **founder không làm gì** — và đó là một quyết định, không phải một sự lười.

**(i) Không hướng nào định giá thời gian của founder bằng tiền.** 6,5 pw = **260 giờ tập trung** (A80) ≈ **20 tuần lịch** ở 13 giờ code/tuần (A82 — **không phải 10 tuần**, xem §4.10) ≈ **70–95 triệu VND** chi phí cơ hội theo lương dev VN — gấp **5–19 lần** khoản **5–15 triệu** phí luật sư (A66) mà cả 4 hướng đều ghi cẩn thận vào bảng. Đó là lý do §2 đặt "chi phí sai lầm thấp nhất" làm lý do số 1, chứ không phải "hướng nào hay nhất".

---

## 11. BA GIẢ THUYẾT KIỂM CHỨNG — NGƯỠNG SỐ

Chạy trên **8 sổ** (5 nhánh A + 3 nhánh B) × **14 ngày** (08/09 → 21/09/2026), trong Bước 0 làm tay, rồi lặp lại trên MVP.

> **Cỡ mẫu — luật cứng (A94–A95, C53):** mục tiêu **8 sổ = 5A + 3B**. **Sàn tuyệt đối là 6 sổ (4A + 2B)**; nếu rơi xuống sàn thì **mọi ngưỡng dưới đây phải được phát biểu lại theo TỈ LỆ %**, không bao giờ theo dạng "3/5 sổ". **Sổ số 0 (nhóm của chính founder) KHÔNG nằm trong mẫu số của bất kỳ phép đo nào**, kể cả neo `B`.
>
> **Cảnh báo trung thực về cỡ mẫu:** n = 3–5 sổ mỗi nhánh **không** cho ý nghĩa thống kê. Với n = 5, một tỉ lệ trên nhánh A **chỉ nhận được các giá trị {0, 20, 40, 60, 80, 100}%** — **bước nhảy 20 điểm**, và con số này phải được in kèm mỗi lần trích dẫn. Các ngưỡng dưới đây là **cổng quyết định có số**, không phải phép kiểm định. Chúng tồn tại để founder không được phép viết "gần đạt rồi".
>
> **Mẫu số của mọi `q` ở §11 là `roster_size` đóng băng** (A14–A15): số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, giữ nguyên 14 ngày. Bản tính theo mẫu số trượt 7 ngày vẫn được ghi, nhưng dưới tên **`q_c_sliding` / `q_x_sliding`** và **chỉ để báo cáo phụ, không bao giờ để so ngưỡng** (A19).

### H1 — Card trong nhóm Zalo thay được push riêng

> **Giả thuyết:** vì card do người thật dán vào nhóm, tỉ lệ thành viên **mở card trong 24 giờ** cao hơn hẳn open-rate push của app thường.

> ### ⚠️ [A21–A22 / C21 / QĐ-05] Hai sửa đổi bắt buộc với H1 ở Bước 0
>
> **1. Ở Bước 0, H1 CHỈ CÓ QUYỀN DỪNG. KHÔNG có quyền ĐI.** Ngưỡng "đạt ≥60%" **dời sang tuần 2 của beta**, khi có event `card_opened` thật. Lý do: ở Bước 0 không tồn tại phép đo "mở card" đủ tin để cho phép một quyết định ĐI — chỉ đủ tin để phát hiện một thất bại rõ ràng.
>
> **2. Thiết bị đo bắt buộc: shortlink theo ngày theo sổ — `8 sổ × 14 ngày = 112 link`** (dịch vụ rút gọn bên thứ ba). **Ảnh Canva dán vào Zalo KHÔNG sinh sự kiện "mở"** — không có 112 link này thì H1 **không có số nào cả**, và ngưỡng dừng cũng không thi hành được. **Hạn dựng xong: 07/09/2026** (A106). Nếu câu 6 của buổi 04/09 cho thấy Zalo trả về danh sách "Đã xem", đó là **nguồn thứ hai**, không thay thế shortlink.

| Kết quả | Ngưỡng | Hành động |
|---|---|---|
| **Đạt** | ~~≥ 60% ở Bước 0~~ → **dời sang tuần 2 của beta** (A21) | **Ở Bước 0: không có ô ĐI.** Không đạt ngưỡng dừng ⇒ đi tiếp theo các cổng khác, nhưng **không được ghi "H1 pass"** vào văn bản quyết định 22/09 |
| Vùng xám | 40–60% | Ship **Android web push** (+0,3 pw, 0đ), đo lại 7 ngày. **Không được thêm bất kỳ feature nào khác** (P8). ⚠️ Phương án này **có thể không tồn tại** (Service Worker trong webview Zalo — `03` §9 B4) và con số thị phần Android đang mâu thuẫn 60,38% vs >85%. Nếu buổi 04/09 trả lời "không đăng ký được", **vùng xám H1 không còn hành động rẻ nào** và phải chọn giữa ba phương án đắt hơn ở `03` §4c |
| **Không đạt** | **< 40%** | **Hướng này sai.** Nếu mượn kênh Zalo mà vẫn không tới người thì lợi thế duy nhất của nó không tồn tại. Dừng, không patch |

_Đối chứng: opt-in push Android đã rơi 85% → 67% do Android 13, và ROM Xiaomi/Oppo/Vivo giết background. Nếu H1 chỉ ngang push thường thì không đáng đánh đổi widget._

### H2 — Nghi thức có nhịp thật, không phải founder đẩy

> **Giả thuyết:** trong **cửa sổ im lặng** (**15/09 và 18/09** — ngày 8 và 11 của Bước 0, founder không nói gì trong nhóm), tỉ lệ có mặt đủ cao để sổ giữ được ngày tính.

> **Hai cửa sổ đo khác nhau, đừng trộn:** `q_c` và `q_x` đo **chỉ trên 2 ngày im lặng** (15/09, 18/09) — đó là chỗ duy nhất tách được sản phẩm khỏi vốn xã hội của founder. Tiêu chí thứ ba `≥9/14 ngày tính` đo trên **cả 14 ngày** của Bước 0 (A20) — nó là phép đo độ bền của nhịp, không phải phép đo độ im lặng, nên rút nó về 2 ngày sẽ vô nghĩa.

| Kết quả | Ngưỡng | Hành động |
|---|---|---|
| **Đạt** | **q_c ≥ 0,45** VÀ **q_x ≥ 0,30** (2 ngày im lặng) VÀ **≥ 60% sổ nhánh A đạt ≥ 9/14 ngày tính** (cả 14 ngày) | Đi tiếp, tune van ngày nghỉ theo dữ liệu thật |
| Vùng xám | 0,35 ≤ q_c < 0,45 | Chạy lại **đúng sản phẩm đó** với cohort mới, 14 ngày. **Cấm thêm feature.** Ngoại lệ duy nhất: nếu đọc phân bố thấy phần lớn ngày hụt là "chỉ 1 người có mặt" thì mở mục 17 ở §6 (cơ chế "gánh", +0,2 pw) |
| **Không đạt** | **q_c < 0,35** | Nghi thức hằng ngày không tồn tại. **Dừng toàn bộ hướng nộp-ảnh-mỗi-ngày.** Tiết kiệm 6,5 pw |

> **[C33 / A20, QĐ-06] Vì sao tiêu chí thứ ba đổi từ "≥3/5 sổ giữ chuỗi ≥5 ngày" sang "≥60% sổ nhánh A đạt ≥9/14 ngày tính".** Không phải để dễ hơn hay khó hơn — mà vì tiêu chí cũ **không phân biệt được gì**: với van 2 ngày nghỉ/tuần (§4.5 Bảng 2), một chuỗi ≥5 ngày **gần như tự động đạt kể cả ở kịch bản fail**. `06` §9 BĐ-2 tính sức phân biệt của hai tiêu chí: chuỗi ≥5 ngày cho **31,6% vs 98,5%** giữa nhóm fail và nhóm đạt ở tiêu chí mới — tức tiêu chí cũ gần như luôn xanh. Cách phát biểu cũng đổi theo C53: **"≥60%" chứ không phải "≥3/5"**, để ngưỡng vẫn thi hành được nếu cỡ mẫu rơi xuống sàn 4 sổ nhánh A. ⚠️ Với n=5, `≥60%` nghĩa là **3, 4 hoặc 5 sổ** — bước nhảy 20 điểm. **Ngưỡng này phải được chốt trước 07/09/2026**, tức trước khi có bất kỳ dữ liệu nào (A106).

_Ghi chú đo lường (đã sửa theo A15/C05 — bản cũ SAI): `q` tính trên **`roster_size` đóng băng** (người đã nộp ≥1 tấm trong 3 ngày đầu của sổ, giữ nguyên 14 ngày), **không** trên "thành viên Active 7 ngày" và **không** trên headcount danh nghĩa. Lý do là số học chứ không phải sở thích: mẫu số trượt theo Active làm `q_c` **TĂNG khi sổ đang chết** (`06` §9 BĐ-1: 0,54 → 0,90 khi ba người bỏ đi) — chỉ số càng đẹp khi sản phẩm càng hỏng. **Tính sai mẫu số là cách tự lừa mình rẻ nhất.** ⏰ Cột `roster_size` phải tồn tại trước **07/09/2026**; sau ngày đó roster ngày 1–3 **không tái dựng được**._

_Ghi chú cỡ mẫu: cửa sổ im lặng còn **2 ngày** (không phải 3, A98) ⇒ mỗi ngày chiếm **50%** phép đo H2. Đọc kèm phân bố theo từng sổ; một tối bất thường của một sổ lớn có thể tự nó đẩy `q_c` qua ngưỡng._

### H3 — Kèo có tạo ra giá trị, hay nó chỉ là thuế đánh lên "được nhìn thấy nhau"

> **Giả thuyết:** lớp "mỗi người một kèo + nhãn XONG/TOANG" giữ chân **không tệ hơn** lớp "chỉ gửi một tấm hôm nay tao thế nào".
>
> **Đây là giả thuyết mà cả 4 hướng đều tránh đo, và nó là giả thuyết đắt nhất trong hồ sơ.**

- **Nhánh A (5 sổ):** có kèo, có nhãn XONG/TOANG, card có ba con số.
- **Nhánh B (3 sổ):** không kèo, không nhãn — chỉ "gửi một tấm hôm nay tao thế nào", card chỉ có ảnh + đếm ngày.

| Kết quả | Ngưỡng (đo trên cửa sổ im lặng) | Hành động |
|---|---|---|
| **Đạt** | `q_c(A) ≥ q_c(B) − 5 điểm phần trăm` VÀ **≥ 40% sổ nhánh A** tự nhắc nhau mà founder không khơi mào | Kèo có giá trị. Build MVP đúng như tài liệu này |
| Vùng xám | `q_c(B)` hơn `q_c(A)` từ 5 đến 10 điểm | Chạy lại 14 ngày với cohort mới, đảo vai người tuyển. **Cấm thêm feature** |
| **Không đạt** | **`q_c(B)` hơn `q_c(A)` ≥ 10 điểm phần trăm** | **Bỏ kèo.** Sản phẩm trở thành "Locket trong nhóm Zalo". Đây là một **kết luận hợp lệ**, không phải một thất bại — và nó tiết kiệm ~1,0 pw cùng toàn bộ rủi ro Điều 38.2 |

**Cổng phi số, đứng trên mọi phần trăm:** sau ngày 14, **có sổ nào tự hỏi "mai còn chốt sổ không?"** mà founder không khơi mào? **0/8 sổ hỏi = dừng**, bất kể phần trăm đẹp thế nào.

**Neo đường cơ sở:** đừng dùng Yope D7 = 40% làm OKR (đó là **user** retention đo ở đỉnh tăng trưởng; dùng để neo **sổ** retention là trộn hai đơn vị). Dùng **neo nội bộ `B`** đo tay ở Bước 0. Ngưỡng cho beta app: **`group-D14` của beta ≥ `B`**, đọc ngày **16/12/2026** (A116 — D14 của cohort 02/12 rơi vào 15/12, đọc số ngày hôm sau). Diễn giải trần trụi — _nếu app không bằng founder ngồi dán card Canva mỗi tối, app không có lý do tồn tại._

> ### [A26 / QĐ-26] Công thức của `B` — chốt bằng văn bản, không để suy diễn
>
> ```
> B = % sổ nhánh A còn `group_alive` ở NGÀY 14 của Bước 0
>
>   mẫu số      = 5 sổ nhánh A   (KHÔNG gồm sổ số 0 — nhóm của founder, A95)
>   group_alive = A ≥ 3 người nộp ≥1 tấm trong 7 ngày gần nhất   (A08)
>   A tính trên roster ĐÓNG BĂNG, không trên headcount trượt      (A14)
> ```
>
> ⚠️ **In kèm mỗi lần dùng `B`:** với n = 5, `B` **chỉ nhận được {0, 20, 40, 60, 80, 100}%** — **bước nhảy 20 điểm phần trăm**. Nghĩa là "beta ≥ B" có thể bị quyết định bởi **đúng một sổ**. Đây không phải lý do bỏ neo `B` (nó vẫn là neo trung thực nhất trong hồ sơ), mà là lý do **cấm** phát biểu `B` với một chữ số thập phân hay coi chênh lệch 20 điểm là một tín hiệu mạnh.

---

## 12. VIỆC PHẢI LÀM TUẦN NÀY (03/09 → 07/09/2026)

| Ngày | Việc | Output kiểm chứng được |
|---|---|---|
| 03/09 (A104) | Mua `chotso.vn` — **≈750.000đ/năm đầu** (A67, mốc cao nhất trong ba ước lượng 460k / 550–770k / 750k) `[cần báo giá thật]` + lấy **3 báo giá** | Hoá đơn, không phải "còn trống". **MỘT domain ở MVP-0** (A68); domain dự phòng đã CẮT — đường thoát hiểm là mã 6 ký tự trên card (0đ). Mua domain thứ hai **ngay trong tuần** nếu buổi 04/09 cho thấy Zalo cảnh báo domain `.vn` lạ |
| 03/09 (A104) | Gửi luật sư **BẢY câu, MỘT email, MỘT lần trả phí** (A65, danh sách hợp nhất ở `05` §11 — thay mọi danh sách rời, kể cả "đúng một câu" ở bản cũ của mục này) | Email đã gửi + lịch hẹn. Ngân sách **5.000.000 – 15.000.000đ** (A66). **Không mua thư ý kiến 1 câu 3–5 triệu nữa** — 7 câu thì không phải giá của 1 câu |
| 03/09 | **`docs/adr/ADR-000-bat-bien.md`** — **MỘT file duy nhất, 3 mục** (đơn vị đo · schema & đặt tên · pháp lý), cộng `docs/adr/pw-ledger.md`. **ADR-001 và ADR-002 gộp vào, KHÔNG tạo riêng** (A103) | File đã commit: `group_alive` = ≥3 nộp/7 ngày · **cohort key = `book_id`** (A30) · **mẫu số so ngưỡng = `roster_size` đóng băng** (A14) · không cột nào giảm ngoài `chuỗi` · `k=1` nếu `A_eff≤2`, `k=2` nếu `A_eff≥3` với `A_eff = min(A(D), A(D−1))` (A06–A07) · ngày = 04:00–03:59 ICT (A01) · van 2 ngày/cửa sổ 7 ngày trượt (A10) · mọi copy không bao giờ tham chiếu `goal_text` (A69) · nấc widget khoá sau **`sổ-D28` ≥35% trên ≥24 sổ, đọc 26/01/2027** · một dòng cho D-10 (khoảng trũng sau đỉnh) |
| 04/09 (A105) | **Buổi kiểm chứng nền tảng — BẢY câu** ở §10(h) + **giao thức đầy đủ ở `12-kiem-chung-nen-tang.md`**, ma trận ≥3 máy Android thật | Ghi vào `ADR-000`, có ảnh chụp màn hình trên máy thật. Đóng luôn **D-08** (StatCounter, 15 phút) và **D-09** (phương án B cho `navigator.share`) |
| 04/09 | Viết kill gate cho founder lên giấy, dán lên tường — **bản đã bỏ vế "doanh thu = 0"** (A64) | Ảnh chụp tờ giấy |
| 05/09 | Tuyển **8 sổ**: 5 nhánh A + 3 nhánh B (**sàn tuyệt đối 6 = 4A + 2B**, A94) | Form bắt nhập **tên 3 người bạn + link group chat có sẵn**, chỉ approve khi đủ 3. Không tạo nhóm mới — **chiếm nhóm đã có**. **Sổ số 0 (nhóm founder) không tính vào mẫu số nào** (A95) |
| 05/09 | Chuẩn bị template card Canva + **Google Sheet 8 cột** (A96 — thay 6 cột của bản cũ) | `q_c_roster` · `q_x_roster` · `q_c_sliding` · `q_x_sliding` · `roster_size` · số người nộp · số XONG · số TOANG. Dữ liệu **pseudonymised**, **xoá sau 22/09**. Bốn chỉ số quan sát cũ (ngày sổ tụt <3 người · số lần tự nhắc nhau · tỉ lệ TOANG/tổng · card mở trong 24h) chuyển sang **sổ tay quan sát**, không nằm trong 8 cột so ngưỡng |
| 06/09 | Việc bàn giấy 3 giờ: tính lại trần doanh thu với eCPM VN (§10b) — dùng **$0,25–0,60 `[ước lượng thuần, không nguồn]`** (A77), **không** dùng $1,51/$2,34 (đó là eCPM in-app) | Một bảng số, một kết luận |
| **07/09 (A106) — HẠN CHẾT** | Chốt **thiết bị đo + mẫu số + ngưỡng**, vì sau ngày này không tái dựng được | (1) **112 shortlink** (8 sổ × 14 ngày) đã dựng — A22 · (2) cột **`roster_size`** đã có trong Sheet và trong schema — A14 · (3) ngưỡng H2 **≥9/14 ngày tính** đã viết ra — A20 · (4) ToS + Chính sách quyền riêng tư **bản nháp** (in **SLA kép 48h / 24h–6h** và câu "thumbnail giữ vĩnh viễn") · (5) **thông báo & đồng ý dữ liệu cho Bước 0** — Bước 0 thu ảnh thật của ~35 người |
| 08/09 → 21/09 | **CHẠY BƯỚC 0.** **Cửa sổ im lặng: 15/09 và 18/09** (ngày 8 và 11 — **hai** ngày, không phải ba; A98) | 14 card × 8 sổ + sheet đầy đủ. Trong hai ngày im lặng: card vẫn làm, **gửi RIÊNG cho người trực**, không dán vào nhóm, người trực quên thì để nguyên (A97) |
| 07/09 | **Checklist chuẩn bị Bước 0** — 8 dòng ở `13` §1.3 (template Canva ≤2 phút/card · 112 shortlink · Sheet 8 cột · 8 Form · thư mục Drive · **script S9 thông báo & đồng ý** · ngưỡng H2 dán tường · sổ số 0 đã chạy thử 3 tối) | 8 ô đã tick. Thiếu ô nào thì tối 08/09 không khởi động được ô đó |
| 22/09 | **Quyết định bằng văn bản**, có số, có ngày, có chữ ký | *đi tiếp / bỏ kèo / **xám** / dừng*. Không được viết "gần đạt rồi". **Giao thức cả ngày + mẫu văn bản (có mục bắt buộc "ba điều tôi đã sai") ở `13` §2**; trong ngày này còn phải **xoá kho ảnh Bước 0 trên Drive** (`13` §2.6) và gửi **tin nhắn đóng Bước 0** vào 8 nhóm (`13` §2.5) |

**TUYỆT ĐỐI không làm trong 14 ngày này:** viết code sản phẩm · thiết kế art · lập TNHH · đăng ký D-U-N-S · làm gacha/AI/sponsor/public feed/chat · làm widget · gọi vốn · làm pitch deck.

Mọi thứ trong danh sách đó đều là việc *cảm giác như tiến bộ* mà không trả lời được câu hỏi duy nhất đáng hỏi trong 14 ngày tới:

> **Một nhóm bạn thật có tự chốt sổ vào một tối mà founder im lặng không?**

---

## 13. ĐÃ CẮT — nội dung bị gỡ khỏi tài liệu này trong vòng phán quyết 03/09/2026

> **Luật của mục này:** mỗi dòng ghi **cái gì bị cắt · phán quyết nào · điều kiện mở lại**. Nguyên tắc 4 của bảng trọng tài: **thứ đã bị cắt mà quay lại thì mặc định bị cắt lần nữa**, trừ khi có khoản đối trừ đã ghi vào `docs/adr/pw-ledger.md`. Một mục ở đây quay lại mà không có dòng trong sổ cái = P7 bị phá.

| # | Đã cắt khỏi tài liệu này | Phán quyết | Điều kiện mở lại |
|---|---|---|---|
| 1 | **Con số hạ tầng "~$12/tháng"** (§4.5 Bảng 6, §9 mục 5) | C27 / A74 | Không mở lại. Con số duy nhất là **$28–37/tháng** ở beta; đèn báo động >$60 (A75) |
| 2 | **Câu "6,5 pw ≈ 10 tuần lịch"** (§4.10, §10(i)) | A80–A82 | Không mở lại ở 20 giờ/tuần. Chỉ đúng nếu D-02 chọn một chế độ **40 giờ/tuần**, điều mà hồ sơ này không giả định ở đâu cả |
| 3 | **Nút thả tim ẩn danh** ở màn 1 và trên trang public | C03 / A86 (QĐ-25) | **T13+.** Hệ quả đã ghi vào §8: HM-1, HM-3, event `heart_sent` (số 25, để trống vĩnh viễn) và `hearts_recv_14d` **chết theo**; bộ metric tác hại **chỉ còn phát hiện RÚT LUI** |
| 4 | **Lưới 30 ngày** trong phần cuộn của màn 1 | A86 (QĐ-25) | **T13+, ưu tiên 1.** Nó là memory layer đã hứa ở §6 mục 11; và **Asset 2 "Sổ tháng" không được mở trước nó** (S03/S14) |
| 5 | **Màn "Của tôi" như một màn riêng có ngân sách** | A86 (QĐ-25) | Xuống **0,00 pw** ở MVP-0 — nội dung gộp vào luồng có sẵn. Mở lại khi có ngân sách thật trong `pw-ledger.md` |
| 6 | **Job cron 21:00 (`mo_chot_so`)** ở §4.1 và ở hạng mục 7 của §4.10 | A04 (QĐ-22) | Không mở lại. Trạng thái "sẵn sàng chốt" **suy ra từ giờ server**; hệ thống không gửi gì lúc 21:00. −0,10 pw đã ghi sổ cái |
| 7 | **Tết freeze** khỏi MVP-0 | `07` (QĐ-25) + C06 | Build ở **T13–T18**, hạn hoàn thành **25/01/2027** (A121). Cửa sổ đúng là **03/02 04:00 → 13/02 03:59 ICT 2027** (A120) — mùng 1 Tết Đinh Mùi là **06/02/2027**, không phải 17/02 (đó là Tết Bính Ngọ 2026). ⚠️ Khoản "Tết freeze 0,10 pw" **đã bị tiêu**, không được bán lần thứ hai (C08) |
| 8 | **Vế "doanh thu vẫn bằng 0" trong kill gate 31/03/2027** (§9 mục 12) | C01 / A64 (QĐ-01b) | Không mở lại. Doanh thu 0đ là **hệ quả pháp lý** của A62, không phải tín hiệu thị trường |
| 9 | **Ngưỡng "700 người dùng thường xuyên"** như một đèn cảnh báo | C04 / A54 (QĐ-04) | Không mở lại. Thay bằng **hai counter**: `monthly_visits` 6.000/8.500 · `monthly_active_persons` 600/850. Con số 700 chỉ còn được nhắc **để nói rằng nó sai** |
| 10 | **Ngưỡng mở khoá widget "≥30 sổ"** (§6 mục 2) | C31 / A25 | Không mở lại. **≥24 sổ**, KTC ±17 điểm, đọc **26/01/2027**. Giữ ≥30 = cổng không bao giờ mở được |
| 11 | **Tiêu chí H2 "≥3/5 sổ giữ chuỗi ≥5 ngày"** (§11) | C33 / A20 (QĐ-06) | Không mở lại — nó gần như tự đạt kể cả ở kịch bản fail. Thay bằng **≥60% sổ nhánh A đạt ≥9/14 ngày tính** |
| 12 | **Quyền ĐI của H1 ở Bước 0** ("đạt ≥60% ⇒ đi tiếp") | C21 / A21 | Dời sang **tuần 2 của beta**, khi có event `card_opened` thật. Ở Bước 0, H1 **chỉ có quyền DỪNG** (`< 40%`) |
| 13 | **Ngày im lặng thứ ba (21/09)** ở §10(f) và §11 | A98 / C51 | Không mở lại — 21/09 là ngày đóng số liệu. Cửa sổ im lặng = **15/09 và 18/09** |
| 14 | **"Gửi luật sư đúng một câu"** ở §12 | C40 / A65 (QĐ-14) | Không mở lại. **7 câu, một email, một lần trả phí, 5–15 triệu** |
| 15 | **Google Sheet 6 cột** ở §12 | A96 (sau QĐ-03) | Không mở lại. **8 cột**, có cả cặp `_roster` (so ngưỡng) lẫn cặp `_sliding` (báo cáo phụ) |
| 16 | **Mẫu số "thành viên Active 7 ngày" cho `q_c`/`q_x`** ở §11 | C05 / A15 (QĐ-03) | Không mở lại cho việc **so ngưỡng**. Bản trượt sống tiếp dưới tên `q_c_sliding` / `q_x_sliding`, chỉ để báo cáo |
| 17 | **"Ô khai năm sinh"** ở §9 mục 3 | A47 (QĐ-20) | Không mở lại. Chỉ lưu `is_16_plus` + `age_gate_at`; kiểm tra tuổi ở tầng ứng dụng |
| 18 | **Tên `group_id`** (P10, §6 mục 14, ADR ở §12) | C52 / A30 | Không mở lại. Khoá sổ là **`book_id`**; schema tiếng Anh, nguồn duy nhất `04` §1 |
| 19 | **Tham chiếu "ADR-001"** ở §9 mục 2 | S21 / A103 (QĐ-38) | Không mở lại. **Một file: `docs/adr/ADR-000-bat-bien.md`** (3 mục) + `docs/adr/pw-ledger.md` |
| 20 | **Câu "SLA là 48 giờ, không phải 24"** ở §10(d) | C24 / A59 (QĐ-17) | Không mở lại. **48h** cho khiếu nại người dùng · **24h, khẩn cấp 6h** cho cơ quan nhà nước — in **cả hai** ở màn 7 |
| 21 | **Fake door "Bao cả sổ" ở slot màn 8** (yêu cầu từ `10`) | C44 / S04 | Slot 8 chỉ mở cho **một màn được Bước 0 chứng minh là bắt buộc**, lý do ghi vào ADR. Một fake door bán hàng không phải phát hiện của Bước 0 — và nó là bề mặt thanh toán trong khi doanh thu = 0đ |
| 22 | **Asset 2 "Sổ tháng" 9:16 và Asset 3 "Thẻ TOANG" 1:1** (yêu cầu từ `09` §5) | C42 / S03 / S15 (QĐ-35) | Asset 2: **T13+**, cần đủ **ba** điều kiện — (a) lưới 30 ngày đã build · (b) luồng đồng ý riêng, tường minh, trước mỗi lần sinh · (c) câu số 5 gửi luật sư đã có trả lời. **Asset 3: CẮT VĨNH VIỄN** — nó đưa ảnh đời thường + nhãn 💀 ra kênh công khai, va thẳng vào §6 mục 6, mục **duy nhất** không có điều kiện mở lại |
| 23 | **Bảng §4.9 và §4.10 với tư cách NGÂN SÁCH** | C08 / A87 (QĐ-33) | Không mở lại. Hai bảng đó là **bối cảnh lịch sử**; sổ cái pw duy nhất là `docs/adr/pw-ledger.md`, luật: **một khoản cắt chỉ được chi MỘT LẦN** |

**Ba khoản từng được bán nhiều lần và nay bị vô hiệu** (C08): "nút thả tim 0,2 pw" (bán 3 lần — nó đã bị cắt sẵn ở MVP-0, **không còn là tiền**) · "Tết freeze 0,10 pw" (bán 2 lần — đã bị `07` tiêu) · "lưu ảnh + preview dùng chung 0,20 pw" (`09` tự thừa nhận dùng 2 lần).

---

## 14. BẤT ĐỒNG VỚI PHÁN QUYẾT

> Theo luật hiệu lực của `_rulings.md`: agent thấy phán quyết nào sai thì ghi vào đây và **vẫn sửa theo phán quyết**. Mọi mục dưới đây **đã được thi hành đầy đủ** ở trên.

**#1 — A17 (`q_c = 0,53`) đang được dùng như một hằng số thiết kế, trong khi chính nó mang nhãn `[chưa đo]`, và §4.5 có SÁU bảng dẫn xuất từ nó.** Phán quyết yêu cầu gắn nhãn ở mọi bảng — đã làm. Nhưng nhãn không sửa được vấn đề cấu trúc: nếu Bước 0 trả về `q_c = 0,45` (đúng ngưỡng ĐI thấp nhất của A16), thì Bảng 1 tụt từ 84,8% xuống 74,4% ở A=5, Bảng 2 tụt từ 92,4% xuống **74,3%**, và Bảng 3 tụt từ 4,2% xuống 1,9% — tức **tần suất "đủ mâm" ở sổ 5 người rơi từ 1 lần/23,9 ngày xuống 1 lần/53 ngày**, đủ hiếm để cơ chế thưởng đó gần như không tồn tại trong 14 ngày beta đầu. **Đề nghị cho vòng sau:** sau 22/09, thay `0,53` bằng **giá trị đo được từ Bước 0** và tính lại cả sáu bảng trong một lần, thay vì sửa từng ô. Cho tới lúc đó mọi ô ở §4.5 phải đọc kèm nhãn.

**#2 — Cửa sổ im lặng rút từ 3 ngày xuống 2 (A98) làm yếu chính phép đo quan trọng nhất của Bước 0.** Phán quyết đúng về lý do lịch (21/09 là ngày đóng số liệu) và đã được thi hành. Nhưng H2 — giả thuyết mà §11 gọi là điều kiện sống-chết của cả hướng — nay đứng trên **2 điểm dữ liệu/sổ**, mỗi điểm nặng 50%. **Đề nghị cho vòng sau:** thêm **ngày 20/09 (ngày 13)** làm ngày im lặng thứ ba thay cho 21/09 — nó không đụng ngày đóng số liệu, giữ được ba điểm, và tốn 0 pw. Việc này cần một phán quyết mới vì nó đổi một hằng số ở A98.
