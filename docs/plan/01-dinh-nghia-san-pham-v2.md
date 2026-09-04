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
> Danh sách những gì bị cắt khỏi file này trong vòng phán quyết 03/09 nằm ở **§13 "ĐÃ CẮT"** cuối tài liệu.

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

_Cột `A` dưới đây đọc là **`A_eff = min(A(D), A(D−1))`** (A06). Mọi ô dùng `q_c` = **có mặt / `roster_size` đóng băng** (A15). Toàn bộ hàng `0,53` mang nhãn `[suy luận, chưa đo — giả thuyết H2]` (A17)._

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
| Ảnh nén client-side | ~110 KB | [ước lượng, browser-image-compression] |
| Thumbnail giữ vĩnh viễn | 320px, ~18 KB | quyết định thiết kế |
| Dung lượng/sổ 5 người/năm (q_c=0,53) | 2,65 × 365 × 18 KB + đệm ≈ **20 MB** | số học |
| 10.000 sổ/năm | ~200 GB | số học |
| R2: $0,015/GB/tháng, **egress $0** | **~$3,0/tháng** ở 10.000 sổ | r05 |
| Hạ tầng tổng ở cấu hình sống sót | **~$12/tháng** (Vercel Hobby/Pro + Supabase free/Pro + R2 + domain) | [ước lượng] |

### 4.6. Card chốt sổ — bảng "được nói / cấm nói"

Card là sản phẩm marketing, sản phẩm phân phối và sản phẩm an toàn cùng lúc. Nó là bề mặt duy nhất rời khỏi hệ thống, nên nó là bề mặt được kiểm soát chặt nhất.

**Card 4:5 CHỨA đúng những thứ này:**
- Tên sổ (do nhóm tự đặt — xem §4.8)
- `Ngày thứ 34 · 71 tấm · chuỗi 6`
- Hàng ảnh: **chỉ ảnh của người ĐÃ nộp**, mỗi ảnh kèm nhãn ✓ hoặc 💀
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

### 4.9. Bảng đối trừ scope — mọi thứ ghép vào đều đã trả bằng thứ bị cắt

| Ghép vào (từ đâu) | +pw | Trả bằng cách cắt gì | −pw |
|---|---|---|---|
| Trạng thái **TOANG** (từ judge panel) | +0,10 | **Caption tự do trên proof** — chữ nghĩa sống ở Zalo; đồng thời xoá bề mặt UGC cuối cùng | −0,10 |
| **Nút thả tim ẩn danh** trên trang public (từ A §9) | +0,20 | **Màn "Lịch sử" riêng** — gộp lưới 30 ngày vào phần cuộn dưới của màn Sổ hôm nay | −0,30 |
| **Test bất biến 10.000 mô phỏng** (từ B) | +0,10 | **Màn "Chọn kèo" riêng** — 8 nút, nhét vào luồng Mở sổ | −0,10 |
| **Test CI quét template bank** (từ C §4.7 + B §4.6) | +0,10 | **Polling 15s** → refresh khi focus + kéo xuống | −0,10 |
| **Remote config đọc từ DB** (từ B) | +0,10 | **Cơ chế "gánh"** (từ C) — trùng chức năng với van 2 ngày nghỉ, mà van có bảng số biện minh còn gánh thì không | −0,20 |
| **4 event tác hại + exit survey 1 câu** (từ B) | +0,10 | | |
| **Chặn từ khoá rối loạn ăn uống** (mới) | +0,05 | | |
| Card ghi tên người chốt sổ mai (từ C) · ranh giới 04:00 (từ A) · sổ tự đặt tên (từ B) · phần thưởng trước nghĩa vụ (từ A) · preset lưu free-text (từ A) · chế độ 1 người (từ C) · minor-safe mặc định cho tất cả (từ C) · nấc widget khoá sau group-D28 ≥35% (từ D) | **+0,00** | đều là quyết định thiết kế / một hằng số / một dòng copy | |
| **Cộng** | **+0,75** | | **−0,80** |

### 4.10. Bảng person-week — trần cứng 6,5

| # | Hạng mục | pw |
|---|---|---|
| 1 | Khung dự án, schema (`sổ` / `thành viên` / `kèo` / `tấm` / `ngày`), danh tính nhẹ (device token + mã 6 ký tự), **remote config đọc từ DB** | 0,9 |
| 2 | **Màn Sổ hôm nay**: hàng ảnh hôm nay + cuộn xuống là lưới 30 ngày + trạng thái public cho người chưa vào sổ + **nút thả tim ẩn danh** | 1,3 |
| 3 | **Màn Nộp**: chọn ảnh/chụp, chọn XONG/TOANG, nén client, strip EXIF, signed upload R2, TTL 72h | 0,9 |
| 4 | **Màn Mở sổ / Vào sổ** (gồm chọn kèo 8 preset) + link mời + OG preview | 0,7 |
| 5 | **Màn Card chốt sổ**: render 4:5 server-side (satori / @vercel/og), Chia sẻ + Lưu ảnh, tên người chốt sổ mai | 0,8 |
| 6 | **Màn Của tôi** (kèo, tỉ lệ riêng tư, đổi kèo, rời sổ, xoá dữ liệu) | 0,3 |
| 7 | Logic ngày (cutoff 04:00) + chuỗi + 2 van/tuần + Tết freeze + cron 21:00 | 0,4 |
| 8 | Analytics **cấp sổ** + 4 event an toàn + exit survey 1 câu | 0,5 |
| 9 | ToS + quyền riêng tư + báo cáo/chặn + soft delete + age gate ≥16 + chặn từ khoá | 0,5 |
| 10 | **Test bất biến (10.000 mô phỏng) + test CI quét template bank** | 0,2 |
| | **TỔNG** | **6,5** |

**Đọc con số này cho đúng, không giảm nhẹ:** 6,5 pw ÷ 0,65 hiệu suất thực ≈ **10 tuần lịch cho một người**, và **không có đệm** (hướng D gốc có đệm 20% trong bản 7,5 pw). Trần thật phải đặt theo **ngày lịch**, không theo pw, vì trần pw tự lừa mình được bằng cách định nghĩa lại pw:

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

**Luật đánh đổi 1-1 có hiệu lực từ hôm nay:** mọi hạng mục thêm vào phải cắt một hạng mục đang có, ghi rõ pw. Vi phạm luật này = tổng pw > 6,5 = nguyên tắc P7 bị phá.

---

## 5. DANH SÁCH MÀN HÌNH MVP — 7 MÀN, TRẦN LÀ 8

Tất cả là web (Next.js), mở được từ link, chạy trong webview Zalo lẫn browser thường.

| # | Màn | Một dòng |
|---|---|---|
| 1 | **Sổ hôm nay** (home + trang public của link mời) | Hàng ảnh hôm nay của cả sổ ở trên cùng, ba con số, nút Nộp, nút Chốt sổ; cuộn xuống là lưới 30 ngày; người chưa vào sổ thấy ảnh mờ + tên + một nút thả tim |
| 2 | **Nộp** | Chọn ảnh hoặc chụp → chọn XONG hay TOANG → Gửi. Không caption, không filter, không chỉnh sửa |
| 3 | **Mở sổ / Vào sổ** | Đặt tên sổ (nhóm tự đặt) hoặc nhập mã 6 ký tự; chọn kèo bằng 8 nút preset ngay trong luồng này |
| 4 | **Card chốt sổ** | Preview ảnh 4:5, nút "Chia sẻ vào Zalo", nút "Lưu ảnh" |
| 5 | **Ảnh chi tiết** | Một ảnh full, ai nộp, nhãn, nút Báo cáo, nút Chặn, nút Xoá ảnh của chính mình |
| 6 | **Của tôi** | Kèo hiện tại · "bạn đã có mặt 23/30 ngày" (chỉ mình thấy) · đổi kèo · rời sổ · **xoá dữ liệu của tôi** |
| 7 | **Chính sách & an toàn** | ToS, quyền riêng tư, cách báo cáo, email liên hệ, cam kết SLA gỡ nội dung |
| 8 | _(để trống có chủ đích)_ | Một slot dự phòng cho **đúng một** màn được phát hiện là bắt buộc trong Bước 0. Nếu Bước 0 không phát hiện ra màn nào, slot này không được lấp |

**KHÔNG có:** màn Đăng nhập · màn Reaction · màn Chat · màn Boss · màn Xếp hạng · màn Season · màn Cửa hàng · màn Danh sách sổ · màn Onboarding carousel.

Màn đăng nhập biến mất bằng device token trong `localStorage` + mã sổ 6 ký tự để khôi phục. **Không SMS OTP ở MVP** — một mình quyết định này xoá khoản chi $0,2852/SMS đi VN mà digest gọi là "khoản chi bất ngờ lớn nhất của dự án", và xoá cả thủ tục đăng ký brandname SMS theo NĐ 91/2020.

---

## 6. DỨT KHOÁT KHÔNG LÀM Ở MVP

Mỗi dòng: **lý do cắt** + **điều kiện mở lại**. Không có mục nào được mở lại vì "cảm thấy nên có".

| # | Không làm | Lý do | Điều kiện mở lại |
|---|---|---|---|
| 1 | **Boss, HP, damage, hồi máu, season** | Lỗi hàm (phản biện #1 FATAL) + "nhiều người chơi tương tác đồng thời qua máy chủ" là mô tả nguyên văn G1 trong NĐ 147/2024 + Habitica 10 năm chứng minh niche | Chỉ như một lớp **opt-in** ở v1.2, A/B 50%, ngưỡng ghi vào ADR **trước** khi có dữ liệu: chênh group-D28 < 10 điểm phần trăm → gỡ vĩnh viễn |
| 2 | **App native + widget (iOS và Android)** | Widget là **phần thưởng cho retention đã chứng minh**, không phải công cụ tạo ra retention. Kèm store review, EAS $1.326/tháng ở 100k MAU, chiến tranh ROM | **group-D28 ≥ 35% trên ≥30 sổ.** Ghi vào ADR hôm nay, vì hôm nay là lúc duy nhất founder còn khách quan |
| 3 | **Push riêng, kể cả web push** | Kênh thông báo là Zalo — app duy nhất 100% ROM Việt whitelist sẵn. Thêm kênh thứ hai là thêm một thứ để hỏng | H1 rơi **vùng xám 40–60%** → ship Android web push (+0,3 pw, 0đ) **trước khi** nghĩ tới ZNS 300đ/tin. ⚠️ **[CHỐT 2026-08-28] Hai cảnh báo phải đọc kèm, và cả hai chưa được giải:** (a) `03` §9 B4 cho rằng **Service Worker nhiều khả năng KHÔNG đăng ký được trong webview Zalo** — nếu đúng thì phương án dự phòng này **không tồn tại**, và cả ba phương án thay thế ở `03` §4c đều đắt hơn hoặc phá câu bán. Buổi kiểm chứng 04/09 phải trả lời. (b) Con số **">85% thị trường VN" đang mâu thuẫn trong hồ sơ**: r05 ghi >85%, r02 dẫn StatCounter T7/2026 ghi **60,38%** (`08` §8.2 là tài liệu duy nhất nêu). Một trong hai đang gắn nhãn **[FACT] sai**. Ở 60% thì lập luận yếu đi rõ rệt |
| 4 | **Reaction / comment / chat trong sản phẩm** | Zalo có sticker, voice, meme, quote. Template roast tự viết **luôn thua**. Cắt đi tiết kiệm ~1,5 pw và né Apple Guideline 1.1.1/1.2 | Chỉ khi đo được rằng người dùng **không** dán card vào Zalo — tức giả thuyết nền của cả hướng này sai, và lúc đó phải viết lại tài liệu chứ không phải thêm màn |
| 5 | **Caption tự do trên proof** | Bề mặt UGC cuối cùng. Cắt nó = cắt nghĩa vụ moderation mà founder một mình không gánh nổi | Sau khi có quy trình moderation thật (người + SLA + log), không phải trước |
| 6 | **Xếp hạng, "Báo Thủ", role, vote sus, trust score** | 4 điểm rủi ro shame cao nhất trong toàn product; vùng Apple 1.1.1/1.2 có thể gỡ app không báo trước | **Không bao giờ.** Đây là mục duy nhất trong bảng không có điều kiện mở lại |
| 7 | **Danh bạ, discovery, ghép người lạ** | Mở kênh người-lạ là mở toàn bộ bề mặt an toàn mà founder một mình không có năng lực gánh | **Không bao giờ** trong 12 tháng đầu |
| 8 | **SMS OTP / xác thực số điện thoại** | $0,2852/SMS đi VN + duyệt brandname hàng tuần–tháng | Khi nộp hồ sơ Giấy phép MXH (**đèn đỏ QĐ-04: 8.500 lượt/tháng HOẶC 850 người/tháng**, không phải mốc 700). ⚠️ Có thể sớm hơn ~4 lần nếu luật sư xác nhận Điều 27 khoản 3 NĐ 147 áp cả cho tier Giấy xác nhận thông báo — câu 2 ở `05` §11 |
| 9 | **Zalo Bot tự chốt sổ** | Chính docs.zaloplatforms.com ghi tính năng bot-vào-nhóm đang ở "giai đoạn thử nghiệm nội bộ, chưa phát hành chính thức"; gói free 3 bot / 50 người-dùng-mỗi-bot / 3.000 tin/tháng. Founder bus-factor-1 **không đặt đường găng lên API beta của công ty khác** | Zalo tuyên bố group API rời trạng thái thử nghiệm. Theo dõi changelog hàng tháng, **không chờ đợi** (+1,5 pw) |
| 10 | **Đóng gói Zalo Mini App** | Mini App **không có API nào** trả về group id hay danh sách thành viên khi mở từ nhóm chat; nó chỉ là web app chạy trong Zalo + `getUserID`. Kèm duyệt hồ sơ 3–5 ngày mỗi lần cập nhật | H1 **và** H2 pass trên ≥6 sổ (+2,0 pw). Được gì: icon trong Zalo, danh tính bền, share sheet native |
| 11 | **Memory Capsule, AI recap, AI memory search, vector DB** | App AI có LTV Y1 cao hơn 41% nhưng retention 12 tháng tệ hơn 36% — AI đẩy conversion, không giữ người. Lưới 30 ngày **chính là** memory layer | Không trong 12 tháng đầu |
| 12 | **Gacha, vật phẩm ảo, skin, tiền tệ trong app** | NĐ 174/2026 phạt 60–80 triệu nếu cho mua bán vật phẩm ảo, 170–200 triệu nếu quy đổi ra tiền/thẻ | **Không bao giờ** |
| 13 | **Quảng cáo** | Chưa tính lại trần doanh thu bằng eCPM thật | Sau khi hoàn thành việc bàn giấy 3 giờ ở §10(b). Kể cả khi mở: **không interstitial, không reward, không chen vào nghi thức** — tối đa 1 native đặt sau khi card đã hiển thị đầy đủ |
| 14 | **Đa sổ trong UI** | Một người = một sổ ở MVP | v1.1 (+0,3 pw). **Cột `group_id` + RLS vẫn viết từ commit đầu, chi phí 0** — đây là vòng lan truyền quan trọng nhất (thành viên hài lòng của sổ A mở sổ B) và nó rẻ vì đã trả tiền trước |
| 15 | **Realtime websocket** | ~$207/tháng ở 100k DAU cho thứ user không nhận ra | Chỉ khi có khiếu nại thật về độ trễ, không phải vì đẹp |
| 16 | **Anti-cheat, pHash, camera bắt buộc** | Không có phần thưởng giá trị thật thì không có động cơ gian lận. Nghiêm khắc hoá quá sớm là rủi ro lớn hơn gian lận | Khi tồn tại một phần thưởng có giá trị thật (tiền, vật thể, giải) |
| 17 | **Cơ chế "gánh"** | Trùng chức năng với van 2 ngày nghỉ; van có bảng số biện minh, gánh thì chưa | H2 rơi vùng xám **vì lý do ngày chỉ có 1 người có mặt** (đọc phân bố, không đọc trung bình) → +0,2 pw |
| 18 | **Đa múi giờ** | Một múi giờ = một dòng code; hai múi giờ = một lớp bug vĩnh viễn | >5% người dùng ngoài VN |
| 19 | **In poster / vật thể / mọi hình thức doanh thu** | Ops nặng (in, ship, hoàn tiền) với founder một mình. Digest ghi rõ: không làm trước 20k MAU | ≥20k MAU **và** ≥1 người khác làm ops |
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
| **P10** | **Đơn vị đo là SỔ, không phải user** | Một báo cáo hoặc một quyết định dùng DAU / user-D30 làm chỉ số chính | Đọc dashboard: nếu cột đầu tiên không phải `group_id` thì đã vi phạm |
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
| **#9 "MVP cực nhỏ thực chất là 17 hệ thống ≈ 33 pw"** | MAJOR | **6,5 pw**, 7 màn, bảng đầy đủ ở §4.10, có luật đánh đổi 1-1 (P7). Cắt ~80% | **Giải** |
| **#21 "Vị thành niên + Apple Guideline 1.2 gỡ app không báo trước"** | MAJOR | Không submit App Store ở MVP ⇒ Apple 1.1.1/1.2 không bắn. Cộng: cắt sạch xếp hạng / "Báo Thủ" / vote sus / roast có nhãn; **an toàn là mặc định cho TẤT CẢ, không phải một chế độ riêng** (lấy bản của C, không lấy bản cấp-nhóm của B vì bản đó vô tình tố cáo ai là đứa nhỏ tuổi nhất) | **Giảm mạnh; phần luật ANM còn treo — §9** |
| **#22 "Không có metric nào phát hiện được tác hại"** | MAJOR | 4 event vào schema **trước dòng code đầu tiên**: `member_left{misses_7d, was_kicked}`, `report_created/resolved`, `safety_screen_shown{reason_bucket}`, `proof_deleted_by_self`. Cộng exit survey 1 câu. Thêm event sau khi có dữ liệu = mất toàn bộ lịch sử | **Giảm một phần — §9** |
| **#23 "Gõ teemi ở App Store ra Temu"** | MAJOR | Đổi tên **Chốt Sổ** / `chotso.vn`. Và vì không lên store, tên không cần thắng thuật toán tìm kiếm của store | **Giải** |
| **#24 "SÁU câu định vị = không có câu nào"** | MAJOR | Đúng **một** câu, 13 từ, §1. Không có câu bán khác câu truyền miệng. Bảy chữ bị cấm vĩnh viễn | **Giải** |
| **#19 "goal free-text vs không roast goal nhạy cảm"** | MAJOR | `goal_text` không bao giờ lên card, không bao giờ vào chuỗi chữ app sinh (P3, có test CI). Cộng **chặn từ khoá rối loạn ăn uống** ở ô tự viết → màn hỗ trợ + preset thay thế + event. Đây là hàng rào cụ thể duy nhất trong hồ sơ | **Giảm mạnh — §9 vẫn giữ phần dư** |
| **[legal] Boss chung bị xếp trò chơi điện tử G1 (NĐ 147/2024)** | Có thể giết dự án | Không boss, không HP, không damage, không vật phẩm ảo, không tiền tệ. Rollover **batch 04:00** phá vế "đồng thời". Chữ "boss"/"game" bị cấm khỏi mọi vật liệu | **Về gần 0** |
| **[legal] Mất miễn trừ startup 5 năm (Điều 38.2 Luật 91/2025)** | MAJOR | Kèo lưu **free-text không taxonomy**, `preset_id` không lưu per-user, **strip EXIF**, **không nhận diện khuôn mặt**, ảnh gốc **TTL 72h** | **Giữ được** |
| **[tech] Push bị ROM Xiaomi/Oppo/Vivo giết** | MAJOR | Không dùng push của mình. Dùng noti của **Zalo** | **Giải bằng lợi thế cấu trúc** |
| **[tech] Phone OTP $0,2852/SMS** | MAJOR | Không có OTP ở MVP | **Giải** |
| **[tech] EAS Update $1.326/tháng + Supabase egress $0,09/GB** | MAJOR | Không app ⇒ không EAS. R2 egress $0, TTL 72h ⇒ ~$3/tháng ở 10.000 sổ | **Giải** |
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
**Sống chung:** ADR-001 chốt Supabase Singapore + R2, với hai ràng buộc coi như luật — không khoá cứng vào Edge Functions/Auth, mọi truy cập media qua một `StorageAdapter` interface — kèm dòng _"nếu luật sư nói phải đặt tại VN, chi phí di chuyển dự kiến ≤1 pw"_.

**3. Luật ANM 116/2025 Điều 16.2 — cha mẹ đứng tên cho user <16.** Age gate tự khai không hoạt động, và web còn dễ vào hơn store.
**Sống chung:** ô khai năm sinh, <16 không mở được sổ, ghi vào ToS "dịch vụ dành cho người ≥16". Đây là **hàng rào giấy tờ, không phải hàng rào kỹ thuật** — nói đúng như vậy, không tự khen. Đổi lại, v2 làm cho việc một đứa 15 tuổi lọt vào ít nguy hiểm hơn: không người lạ, không chat, không caption, không xếp hạng, không ẩn danh.

**4. #26 "MOAT bằng 0 trong 6 tháng đầu" — v2 làm chỗ này TỆ HƠN mọi hướng khác.** Một trang web 7 màn thì bất kỳ ai cũng clone trong 2 tuần, và VNG — chủ nhà — clone trong 2 ngày nếu muốn. Cộng: v2 tự nguyện từ bỏ widget, tức moat duy nhất đã được kiểm chứng ở thị trường VN (Locket).
**Sống chung:** chấp nhận rằng trong 6 tháng đầu **tốc độ học nhanh là moat duy nhất**, và đó là lý do vòng lặp sửa lỗi ngắn (lý do 3 ở §2) quan trọng hơn mọi tính năng. Widget quay lại ở nấc 3, khoá sau `group-D28 ≥ 35%`.

**5. #13 và #16 — kinh tế đơn vị.** Ở 10.000 DAU đã lỗ; hoà vốn lương một người cần 60k–120k DAU tại VN; trần VN-only ~2,6 tỷ VND/năm ở 1 triệu MAU. v2 hạ chi phí hạ tầng xuống ~$12/tháng nhưng **hạ trần doanh thu còn nhanh hơn**: không IAP Apple/Google, và thanh toán web cho Gen Z VN là bài toán khó hơn hẳn.
**Sống chung:** xem §10(b) — con số 2,6 tỷ được tính trên đường ray sai và phải tính lại **trước** khi dùng nó để ra quyết định chiến lược. Và gọi đúng tên tham vọng ngay hôm nay: **đây là small profitable business hoặc portfolio piece.** Nếu founder xây để gọi vốn hay exit, chiến lược này sai từ ngày 1 — dừng bây giờ, không phải sau 12 tháng.

**6. #6 "P(nhóm 5 người sống 30 ngày) ≈ 12,5%".** v2 làm cửa vào rẻ hơn, **không** làm nhóm bạn bền hơn. ~40% nhóm messaging chết trong tuần đầu (Qiu et al., WWW 2016, toàn bộ log WeChat) là baseline vật lý.
**Sống chung:** không hứa hẹn gì về việc này. Đo bằng `group-D28` và chấp nhận con số thật.

**7. Rủi ro chủ nhà (VNG) — rủi ro nghiêm trọng nhất do chính hướng này tạo ra.** Sản phẩm sống nhờ ba thứ VNG kiểm soát: link mở được trong Zalo, card render đẹp, noti của Zalo. Zalo **có** hệ thống cảnh báo/chặn domain. Một sáng thức dậy thấy màn "Link này có thể không an toàn" là growth về 0.
**Sống chung:** domain riêng có brand + HTTPS + nội dung thật; chủ động liên hệ whitelist trước launch; **mã sổ 6 ký tự gõ tay làm đường thoát hiểm từ ngày 1**. Và ghi nhận tính chất của rủi ro này: nó là rủi ro **chết nhanh, rẻ** — không phải rủi ro tiêu 4 tháng rồi mới biết.

**8. Mù analytics ở phần vui nhất.** Cà khịa xảy ra trong Zalo: không log được, không can thiệp được. Dashboard vẫn xanh trong khi một sổ đang dập một người.
**Sống chung:** không sửa được, nhưng sửa được phần **ai rời sổ và vì sao** — đó là 4 event ở §8. Chấp nhận: v2 chỉ chứng minh được người ta **có bấm**, không chứng minh được sản phẩm **tạo giá trị**. Nói thẳng điều đó với chính mình mỗi lần đọc dashboard.

**9. Điểm chết đơn: người chốt sổ.** Đã giảm bằng cách tách chốt-sổ khỏi cơ chế tính ngày (§4.7) và bằng việc ghi tên người chốt sổ ngày mai lên card. Nhưng nếu cả sổ không ai bấm, kênh phân phối của tối đó biến mất.
**Sống chung:** H1 đo đúng chuyện này. Vùng xám → Android web push (0đ), không phải ZNS (45.000đ/sổ/tháng — quá đắt để làm mặc định).

**10. Ảnh XONG theo cấu trúc là cùng một khung hình mỗi ngày.** Nhãn TOANG giảm chuyện này nhưng không xoá.
**Sống chung:** đo `tỉ lệ TOANG/tổng tấm` theo tuần như một chỉ số sức khoẻ nội dung. Nếu nó về gần 0 thì hoặc mọi người đang thắng (tốt) hoặc nhãn TOANG đang bị coi là nhục (xấu) — phân biệt bằng exit survey.

**11. Bước 0 có thể pass vì founder nhờ, không phải vì nghi thức hoạt động.** Đây là lỗ hổng phương pháp mà cả 4 hướng cùng mắc.
**Sống chung:** **cửa sổ im lặng** — xem §10(f). Đây là điều kiện không thương lượng.

**12. KILL GATE CHO FOUNDER — thứ cả 4 hướng không có.** Cả 4 đều viết ngưỡng dừng cho q, cho group-D28, cho tỉ lệ hình thành. Không hướng nào viết ngưỡng dừng cho chính người làm. Dự án này nhiều khả năng **không** chết vì lỗi toán hay vì một công văn — nó chết vào một tối thứ Ba tháng thứ 5 khi founder không mở laptop nữa, và vì không có gate viết sẵn, nó sẽ chết dưới dạng bỏ dở kéo dài 8 tháng thay vì dừng dứt khoát ở tháng 4.

> **Viết hôm nay, 03/09/2026, khi tôi còn khách quan:**
> _"Nếu đến 31/03/2027 tôi vẫn bỏ >15 giờ/tuần cho dự án này, doanh thu vẫn bằng 0, và `group-D28` < 25%, tôi dừng dứt khoát trong tuần đó. Không gia hạn. Không 'sắp viral tới nơi'."_

**Ngân sách giờ vận hành — thứ không hướng nào ngân sách hoá:**

| Giai đoạn | Giờ/tuần | Ghi chú |
|---|---|---|
| Bước 0 (14 ngày) | **~15 giờ/tuần** | 5 sổ nhánh A × 20 phút + 3 sổ nhánh B × 10 phút mỗi tối × 14 tối ≈ 30 giờ. **Code = 0** |
| Build MVP (10 tuần) | ≤2 giờ/tuần vận hành | Nếu vượt, cắt số sổ beta, không cắt giấc ngủ |
| Beta 30 sổ | **~5 giờ/tuần** | Giả định 1 sổ sống ngốn ~10 phút/tuần chú ý của founder |
| **Trần cứng vận hành** | **10 giờ/tuần** | Vượt 3 tuần liên tiếp ⇒ giảm số sổ beta |

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
**Xử lý:** bảng giờ vận hành ở §9, trần cứng 10 giờ/tuần. Và SLA công bố ở màn 7 là **48 giờ**, không phải 24 — vì 24 là lời hứa founder một mình không giữ nổi, và một SLA bị vi phạm tệ hơn một SLA khiêm tốn.

**(e) Có kill gate cho sản phẩm, không có kill gate cho founder.**
**Xử lý:** đã viết ở §9, mục 12, có ngày cụ thể.

**(f) Bước 0 có thể pass vì lý do sai, và không hướng nào thiết kế để phát hiện.** 30–40 người đó nộp ảnh vì **founder nhờ**, không phải vì nghi thức hoạt động. Đó là đo vốn xã hội của founder chứ không phải đo sản phẩm.
**Xử lý — CỬA SỔ IM LẶNG, không thương lượng:** **ngày 8, ngày 11 và ngày 14** của Bước 0, founder **không post gì, không nhắc gì, không trả lời gì** trong cả 8 sổ. `q_c` và `q_x` của **riêng ba ngày đó** là con số thật, và **chỉ con số đó** được so với ngưỡng ở §11. Nếu nhịp chỉ tồn tại vào những ngày founder có mặt thì thứ được kiểm chứng là founder, không phải sản phẩm — và 6,5 person-week tiếp theo sẽ được đầu tư trên một phép đo sai.

**(g) Không hướng nào hỏi: ngày hụt thì người dùng muốn làm gì?**
**Xử lý:** trạng thái **TOANG**. Xem §4.3. Đây là thay đổi lớn nhất của v2 so với hướng thắng, và nó tốn 0,1 pw.

**(h) Kỷ luật kiểm chứng nền tảng bằng nguồn gốc TRƯỚC khi thiết kế.** Hướng D là hướng duy nhất fetch tài liệu chính thức và tìm ra ba sự thật phủ định đắt giá (Mini App không có group context; Zalo Bot nhóm còn "thử nghiệm nội bộ"; Messenger group bot đóng vĩnh viễn) — tự phá phiên bản lãng mạn của chính mình. Nhưng v2 còn **ba phụ thuộc nền tảng chưa ai fetch**.
**Xử lý — một buổi, trước dòng code đầu tiên, kết quả ghi vào ADR:**
1. Zalo có cảnh báo/chặn domain `.vn` lạ khi dán link lần đầu vào nhóm không? Test thật với 3 tài khoản.
2. `chooseImage` / `createCameraContext` trong webview Zalo chạy đồng nhất trên Xiaomi / Oppo / Samsung tầm trung không? Test trên **máy thật**, không emulator.
3. OG preview do satori render có hiển thị đúng trong link preview của Zalo không, và kích thước 4:5 có bị crop không?

**(i) Không hướng nào định giá 4 tháng của founder bằng tiền.** 6,5 pw ≈ 10 tuần ≈ **70–95 triệu VND** chi phí cơ hội theo lương dev VN — gấp **7 lần** khoản 5–15 triệu phí luật sư mà cả 4 hướng đều ghi cẩn thận vào bảng. Đó là lý do §2 đặt "chi phí sai lầm thấp nhất" làm lý do số 1, chứ không phải "hướng nào hay nhất".

---

## 11. BA GIẢ THUYẾT KIỂM CHỨNG — NGƯỠNG SỐ

Chạy trên **8 sổ** (5 nhánh A + 3 nhánh B) × **14 ngày**, trong Bước 0 làm tay, rồi lặp lại trên MVP.

> **Cảnh báo trung thực về cỡ mẫu:** n = 3–5 sổ mỗi nhánh **không** cho ý nghĩa thống kê. Các ngưỡng dưới đây là **cổng quyết định có số**, không phải phép kiểm định. Chúng tồn tại để founder không được phép viết "gần đạt rồi".

### H1 — Card trong nhóm Zalo thay được push riêng

> **Giả thuyết:** vì card do người thật dán vào nhóm, tỉ lệ thành viên **mở card trong 24 giờ** cao hơn hẳn open-rate push của app thường.

| Kết quả | Ngưỡng | Hành động |
|---|---|---|
| **Đạt** | **≥ 60%** thành viên Active mở card trong 24h, trung bình các sổ, tuần 2 | Đi tiếp. Đây là bằng chứng cho luận điểm trung tâm của cả hướng |
| Vùng xám | 40–60% | Ship **Android web push** (+0,3 pw, 0đ), đo lại 7 ngày. **Không được thêm bất kỳ feature nào khác** (P8). ⚠️ Phương án này **có thể không tồn tại** (Service Worker trong webview Zalo — `03` §9 B4) và con số thị phần Android đang mâu thuẫn 60,38% vs >85%. Nếu buổi 04/09 trả lời "không đăng ký được", **vùng xám H1 không còn hành động rẻ nào** và phải chọn giữa ba phương án đắt hơn ở `03` §4c |
| **Không đạt** | **< 40%** | **Hướng này sai.** Nếu mượn kênh Zalo mà vẫn không tới người thì lợi thế duy nhất của nó không tồn tại. Dừng, không patch |

_Đối chứng: opt-in push Android đã rơi 85% → 67% do Android 13, và ROM Xiaomi/Oppo/Vivo giết background. Nếu H1 chỉ ngang push thường thì không đáng đánh đổi widget._

### H2 — Nghi thức có nhịp thật, không phải founder đẩy

> **Giả thuyết:** trong **cửa sổ im lặng** (ngày 8, 11, 14 — founder không nói gì), tỉ lệ có mặt đủ cao để sổ giữ được ngày tính.

| Kết quả | Ngưỡng (đo **chỉ trên 3 ngày im lặng**) | Hành động |
|---|---|---|
| **Đạt** | **q_c ≥ 0,45** VÀ **q_x ≥ 0,30** VÀ ≥3/5 sổ nhánh A giữ được chuỗi ≥5 ngày liên tiếp | Đi tiếp, tune van ngày nghỉ theo dữ liệu thật |
| Vùng xám | 0,35 ≤ q_c < 0,45 | Chạy lại **đúng sản phẩm đó** với cohort mới, 14 ngày. **Cấm thêm feature.** Ngoại lệ duy nhất: nếu đọc phân bố thấy phần lớn ngày hụt là "chỉ 1 người có mặt" thì mở mục 17 ở §6 (cơ chế "gánh", +0,2 pw) |
| **Không đạt** | **q_c < 0,35** | Nghi thức hằng ngày không tồn tại. **Dừng toàn bộ hướng nộp-ảnh-mỗi-ngày.** Tiết kiệm 6,5 pw |

_Ghi chú đo lường: `q` tính trên **thành viên Active** (đã nộp ≥1 tấm trong 7 ngày qua), **không** trên headcount danh nghĩa. Tính sai mẫu số là cách tự lừa mình rẻ nhất._

### H3 — Kèo có tạo ra giá trị, hay nó chỉ là thuế đánh lên "được nhìn thấy nhau"

> **Giả thuyết:** lớp "mỗi người một kèo + nhãn XONG/TOANG" giữ chân **không tệ hơn** lớp "chỉ gửi một tấm hôm nay tao thế nào".
>
> **Đây là giả thuyết mà cả 4 hướng đều tránh đo, và nó là giả thuyết đắt nhất trong hồ sơ.**

- **Nhánh A (5 sổ):** có kèo, có nhãn XONG/TOANG, card có ba con số.
- **Nhánh B (3 sổ):** không kèo, không nhãn — chỉ "gửi một tấm hôm nay tao thế nào", card chỉ có ảnh + đếm ngày.

| Kết quả | Ngưỡng (đo trên cửa sổ im lặng) | Hành động |
|---|---|---|
| **Đạt** | `q_c(A) ≥ q_c(B) − 5 điểm phần trăm` VÀ ≥2/5 sổ nhánh A tự nhắc nhau mà founder không khơi mào | Kèo có giá trị. Build MVP đúng như tài liệu này |
| Vùng xám | `q_c(B)` hơn `q_c(A)` từ 5 đến 10 điểm | Chạy lại 14 ngày với cohort mới, đảo vai người tuyển. **Cấm thêm feature** |
| **Không đạt** | **`q_c(B)` hơn `q_c(A)` ≥ 10 điểm phần trăm** | **Bỏ kèo.** Sản phẩm trở thành "Locket trong nhóm Zalo". Đây là một **kết luận hợp lệ**, không phải một thất bại — và nó tiết kiệm ~1,0 pw cùng toàn bộ rủi ro Điều 38.2 |

**Cổng phi số, đứng trên mọi phần trăm:** sau ngày 14, **có sổ nào tự hỏi "mai còn chốt sổ không?"** mà founder không khơi mào? **0/8 sổ hỏi = dừng**, bất kể phần trăm đẹp thế nào.

**Neo đường cơ sở:** đừng dùng Yope D7 = 40% làm OKR (đó là **user** retention đo ở đỉnh tăng trưởng; dùng để neo **group** retention là trộn hai đơn vị). Dùng **neo nội bộ**: gọi `group-D14` đo tay ở Bước 0 là **B**. Ngưỡng cho beta app: **`group-D14` ≥ B**. Diễn giải trần trụi — _nếu app không bằng founder ngồi dán card Canva mỗi tối, app không có lý do tồn tại._

---

## 12. VIỆC PHẢI LÀM TUẦN NÀY (03/09 → 07/09/2026)

| Ngày | Việc | Output kiểm chứng được |
|---|---|---|
| 03/09 | Mua `chotso.vn` | Hoá đơn, không phải "còn trống" |
| 03/09 | Gửi luật sư **đúng một câu** (§9 mục 1) | Email đã gửi + lịch hẹn |
| 03/09 | ADR-000 "Đơn vị đo và bất biến" | File đã commit: `group_alive` = ≥3 nộp/7 ngày · cohort key = `group_id` · không cột nào giảm ngoài `chuỗi` · `k=2` với A≥3 · ngày = 04:00–03:59 ICT · mọi copy không bao giờ tham chiếu `goal_text` · nấc widget khoá sau group-D28 ≥35% |
| 04/09 | **Buổi kiểm chứng nền tảng** — 3 câu ở §10(h) | Ghi vào ADR, có ảnh chụp màn hình trên máy thật |
| 04/09 | Viết kill gate cho founder lên giấy, dán lên tường | Ảnh chụp tờ giấy |
| 05/09 | Tuyển **8 sổ**: 5 nhánh A + 3 nhánh B | Form bắt nhập **tên 3 người bạn + link group chat có sẵn**, chỉ approve khi đủ 3. Không tạo nhóm mới — **chiếm nhóm đã có** |
| 05/09 | Chuẩn bị template card Canva + Google Sheet 6 cột | `q_x` · `q_c` · ngày sổ tụt <3 người · số lần tự nhắc nhau · tỉ lệ TOANG/tổng · card open trong 24h |
| 06/09 | Việc bàn giấy 3 giờ: tính lại trần doanh thu với eCPM VN (§10b) | Một bảng số, một kết luận |
| 08/09 → 21/09 | **CHẠY BƯỚC 0.** Cửa sổ im lặng ngày 15, 18, 21 (tức ngày 8, 11, 14 của Bước 0) | 14 card × 8 sổ + sheet đầy đủ |
| 22/09 | **Quyết định bằng văn bản**, có số, có ngày, có chữ ký | *đi tiếp / bỏ kèo / dừng*. Không được viết "gần đạt rồi" |

**TUYỆT ĐỐI không làm trong 14 ngày này:** viết code sản phẩm · thiết kế art · lập TNHH · đăng ký D-U-N-S · làm gacha/AI/sponsor/public feed/chat · làm widget · gọi vốn · làm pitch deck.

Mọi thứ trong danh sách đó đều là việc *cảm giác như tiến bộ* mà không trả lời được câu hỏi duy nhất đáng hỏi trong 14 ngày tới:

> **Một nhóm bạn thật có tự chốt sổ vào một tối mà founder im lặng không?**
