# 12 — GIAO THỨC BUỔI KIỂM CHỨNG NỀN TẢNG (04/09/2026)

> **Trạng thái:** tạo mới **04/09/2026** để lấp lỗ hổng `_audit-report.md` mục THIẾU:
> *"**Checklist buổi kiểm chứng nền tảng 04/09.** Đã phình từ 3 câu lên ≥7… **Không có kịch bản test, không có ma trận 4 máy, không có mẫu ghi kết quả** — cho một buổi 2 giờ mà cả sáu quyết định kiến trúc phụ thuộc vào."*
>
> **Buổi này là HÔM NAY.** `01` §10(h) đã liệt kê **7 câu** và hệ quả nếu trả lời KHÔNG (A105); tài liệu này bổ sung đúng ba thứ còn thiếu: **kịch bản thao tác từng câu**, **ma trận máy**, **mẫu ghi kết quả**. Không thêm câu thứ 8.
>
> **Đầu ra bắt buộc:** một bảng kết quả đã điền + ảnh chụp màn hình trên máy thật, chép vào `docs/adr/ADR-000-bat-bien.md`. **Đóng luôn D-08 và D-09 trong buổi này.**

---

## 0. TRƯỚC KHI BẮT ĐẦU — 20 PHÚT CHUẨN BỊ

| Cần có | Ghi chú |
|---|---|
| **≥3 máy Android thật** (A105) | Không dùng emulator cho câu 1–6. Emulator không có webview Zalo thật |
| **≥3 tài khoản Zalo khác nhau** | Câu 1 cần 3 tài khoản để phân biệt "cảnh báo domain" với "cảnh báo người lạ gửi link" |
| **1 nhóm Zalo thử** ≥3 người (sổ số 0) | Không dùng nhóm của người tham gia Bước 0 |
| **1 trang test đã deploy** trên domain `.vn` thật | Nếu chưa mua domain thì buổi này **không trả lời được câu 1 và câu 3** — xem §5 |
| **1 iPhone** (nếu có) | Không bắt buộc, nhưng ghi lại — nó quyết định đường thoát hiểm Google Form ở Bước 0 |
| Điện thoại thứ hai để **quay màn hình** | Bằng chứng quan trọng hơn trí nhớ |

**Trang test cần đúng 5 thứ, tổng ~40 dòng HTML tĩnh** (không phải sản phẩm, không vi phạm lệnh cấm viết code sản phẩm của v2 §12):

1. Một `<input type="file" accept="image/*">` và một nút gọi `navigator.mediaDevices` (câu 2).
2. Thẻ OG đầy đủ trỏ tới một ảnh **1080×1350** (câu 3).
3. Một nút gọi `navigator.serviceWorker.register('/sw.js')` in ra kết quả (câu 4).
4. Một nút gọi `navigator.share({files:[file]})` với một file ảnh ~150 KB, in ra `canShare` và lỗi nếu có (câu 5).
5. Một ô hiển thị `navigator.userAgent` (để ghi lại đúng phiên bản webview mỗi máy).

⚠️ **Trang test không được thu thập gì.** Không analytics, không log server, không ảnh gửi đi đâu. Đây vẫn đang là giai đoạn "không hệ thống thông tin nào của mình" của `05` GIAI ĐOẠN 0.

---

## 1. MA TRẬN MÁY — điền trước khi test

| | Máy 1 | Máy 2 | Máy 3 | (Máy 4 — iOS, tuỳ chọn) |
|---|---|---|---|---|
| Hãng / model | ________ | ________ | ________ | ________ |
| Android/iOS phiên bản | ________ | ________ | ________ | ________ |
| Phiên bản Zalo | ________ | ________ | ________ | ________ |
| `navigator.userAgent` (chép nguyên) | ________ | ________ | ________ | ________ |
| Trình duyệt mặc định | ________ | ________ | ________ | ________ |

**Yêu cầu tối thiểu để một câu được coi là ĐÃ TRẢ LỜI:** kết quả **giống nhau trên ≥2 máy**. Một máy không đủ. Nếu 3 máy cho 3 kết quả khác nhau thì câu đó ghi **KHÔNG ĐỒNG NHẤT** — và trong sản phẩm này, *không đồng nhất* phải được xử lý **y như KHÔNG**, vì không có cách phát hiện thiết bị nào rẻ hơn.

---

## 2. BẢY CÂU — KỊCH BẢN THAO TÁC

### Câu 1 — Zalo có cảnh báo/chặn domain `.vn` lạ không?

**Thao tác (lặp trên 3 tài khoản):**
1. Tài khoản A dán link `https://<domain>.vn/t` vào nhóm Zalo thử. Ghi: có hiện cảnh báo không, nguyên văn cảnh báo.
2. Tài khoản B (chưa từng nhắn với A) nhắn **riêng** cho A cùng link đó. Ghi kết quả.
3. Tài khoản C bấm vào link trong nhóm. Ghi: mở trong webview hay hỏi "mở bằng trình duyệt ngoài".
4. Lặp lại với một domain `.com` bất kỳ để có đối chứng — **nếu `.com` cũng bị cảnh báo thì đó là cảnh báo với người lạ, không phải với `.vn`**.

**Đo:** cảnh báo có/không · nguyên văn · có chặn hẳn không · webview hay trình duyệt ngoài.

**Nếu KHÔNG (bị cảnh báo/chặn):** kích hoạt A68 ⇒ **mua domain thứ hai ngay trong tuần**, ≈750.000đ, khoản này **không** nằm trong ngân sách MVP-0 và phải ghi vào sổ tiền mặt. Xem `13` §6 ca 10.

---

### Câu 2 — Chọn ảnh trong webview Zalo có chạy đồng nhất không?

**Thao tác (mỗi máy):**
1. Mở trang test **từ trong Zalo** (bấm link trong nhóm, không mở trình duyệt ngoài).
2. Bấm `<input type=file>` → chọn **Thư viện**. Chọn 1 ảnh. Ghi: có mở được picker không, có quay lại trang không, ảnh có xuất hiện không.
3. Lặp lại, chọn **Chụp ảnh mới**.
4. Ghi **thời gian** từ lúc bấm tới lúc ảnh hiện: ______ giây. Mục tiêu của luồng nộp là **≤15 giây tổng**, nên riêng bước này >8 giây đã là vấn đề.
5. Ghi **kích thước file** ảnh chọn ra (để đối chiếu giả định **~110 KB sau nén** `[chưa đo]` và trần **150 KB**).

**Nếu KHÔNG:** **bước 4 của core loop chết** — đây là bước duy nhất không bỏ được (`01` §3). Không có phương án B nào rẻ. Ghi rõ máy nào hỏng và hỏng thế nào; nếu chỉ 1/3 máy hỏng thì tìm mẫu (hãng? phiên bản webview?) trước khi kết luận.

⚠️ **Đây là câu quan trọng nhất trong 7 câu** và nó không được đánh dấu như vậy ở bất kỳ tài liệu nào trước. Sáu câu còn lại làm mất một phần hiệu quả; câu này làm mất **sản phẩm**.

---

### Câu 3 — OG preview 4:5 có bị crop trong Zalo không?

**Thao tác:**
1. Dán link trang test (có OG image 1080×1350) vào nhóm. Chờ preview render.
2. **Chụp màn hình.** So sánh với ảnh gốc: crop trên/dưới bao nhiêu %, còn đọc được dòng `Ngày thứ N · X tấm · chuỗi Y` không.
3. Lặp trên **cả 3 máy** — preview có thể khác theo phiên bản Zalo.
4. Thử thêm một ảnh **1200×630** (16:9) làm đối chứng.

**Đo:** tỉ lệ crop · dòng chữ nào bị cắt · lưới ảnh còn nhìn được mấy ô.

**Nếu bị crop nặng:** card 4:5 vẫn giữ (nó được thiết kế cho việc **gửi ảnh**, không phải cho OG preview), nhưng **bố cục card phải đưa hai con số vào vùng an toàn giữa khung**, và đây là ràng buộc cho snapshot test. **Không đổi khổ card** — v2 §4.6 khoá 1080×1350.

---

### Câu 4 — Service Worker có đăng ký được trong webview Zalo không?

**Thao tác:**
1. Mở trang test **trong webview Zalo**, bấm nút đăng ký SW. Ghi nguyên văn kết quả (`registered` / tên lỗi).
2. Mở **cùng trang** trong Chrome ngoài. Ghi kết quả — đây là đối chứng phân biệt "webview chặn" với "trang lỗi".
3. Nếu đăng ký được: đóng webview, mở lại, kiểm tra SW còn sống không.
4. Nếu đăng ký được: thử xin quyền thông báo (`Notification.requestPermission()`), ghi kết quả.

**Nếu KHÔNG:** **toàn bộ phương án dự phòng "Android web push" không tồn tại** — không phải "khó hơn", là **không tồn tại** (`03` §9 B4). Hệ quả dây chuyền:
- `07` §8(b) T13 mất hạng mục duy nhất được phép ship trong vùng xám H1.
- `02` DoD 7.6 phải giữ nguyên trạng thái **ĐÃ CẮT**, không được viết như khoản đã ngân sách (S09).
- Vùng xám của H1 khi đó **không còn hành động rẻ nào** — phải ghi thẳng điều đó vào ADR-000 thay vì để nó lộ ra ở tuần 13.

---

### Câu 5 — `navigator.share({files})` có gửi được file ảnh không? → **D-09**

**Thao tác:**
1. Trong webview Zalo, bấm nút share với 1 file ảnh ~150 KB. Ghi: `navigator.canShare({files})` trả gì · share sheet có mở không · **Zalo có trong danh sách ứng dụng nhận không** · gửi vào nhóm thành công không.
2. Lặp trong **Chrome ngoài** (đối chứng).
3. Lặp với `navigator.share({title, text, url})` **không có file** — nếu cái này chạy mà cái có file không chạy thì đó là giới hạn `files`, không phải giới hạn Web Share.
4. **Đếm số chạm** của đường thay thế: `[Lưu ảnh] → thoát web → mở Zalo → mở nhóm → đính kèm → chọn ảnh → gửi`. Bấm đồng hồ.

**Đo:** chạy/không · số chạm đường thay thế: ____ · thời gian đường thay thế: ____ giây (giả định trong hồ sơ: **6 chạm, +20–30 giây**).

> ## 🟠 D-09 — QUYẾT TRONG BUỔI NÀY, KHÔNG ĐỂ SANG NGÀY MAI
> **Nếu KHÔNG:** `08` BĐ#6 ước lượng mất **15–30 điểm phần trăm** ở **kênh phân phối duy nhất**.
> **(a)** long-press → `Lưu ảnh` + một dòng hướng dẫn ngay dưới card (**+0,05 pw**), cộng đo `card_shared / card_rendered` để biết thiệt hại thật ·
> **(b)** dựa hoàn toàn vào **mã 6 ký tự**, in **to hơn** trên card (A45).
> **Khuyến nghị: làm CẢ HAI lớp**, và đưa lựa chọn thành `remote_config['card.share_mode']` ngay ở commit đầu để không phải deploy lại khi biết thêm.
> ⚠️ **+0,05 pw này chưa có nguồn đối trừ.** Khoản "nút thả tim 0,2 pw" **đã bị bán 3 lần ở 3 tài liệu** ⇒ không còn là tiền (A87). Nó **cộng thêm** vào 1,08 pw đang thiếu của D-01. Founder duyệt 0,05 pw **trước** khi test, không phải sau — vì sau khi biết kết quả thì việc duyệt không còn là một quyết định, nó là một phản xạ.

---

### Câu 6 — Zalo có trả về danh sách "Đã xem" của tin nhắn nhóm không?

**Thao tác:**
1. Gửi một ảnh vào nhóm thử. Chờ 2 người xem.
2. Chạm giữ tin nhắn → tìm mục "Đã xem" / "Trạng thái". Ghi: có danh sách tên không, hay chỉ có số đếm, hay không có gì.
3. Lặp trên 3 máy (tính năng có thể khác theo phiên bản).

**Kết quả này KHÔNG đổi được quyết định** — QĐ-05(a) đã chốt **shortlink là thiết bị đo bắt buộc**, 112 link, hạn 07/09, dù câu 6 trả lời gì. Câu này chỉ quyết định có **thêm** một cột dữ liệu tham khảo trong sheet `obs` hay không.

⚠️ **Cạm bẫy:** nếu câu 6 trả lời CÓ, sẽ rất cám dỗ để bỏ 112 shortlink cho đỡ 30 phút setup. **Không được.** `06` BĐ-3: một ảnh Canva dán vào Zalo **không sinh sự kiện "mở"**; "đã xem tin nhắn" đo việc **thấy**, không đo việc **mở nội dung** — và H1 là giả thuyết về việc mở.

---

### Câu 7 — Postgres: generated column với `AT TIME ZONE` có chạy không?

**Thao tác (không cần máy Android — làm trên máy tính, 10 phút):**
1. Trên Supabase (hoặc Postgres cùng phiên bản), chạy:
   `CREATE TABLE t (intent_at timestamptz NOT NULL, book_date date GENERATED ALWAYS AS ((intent_at AT TIME ZONE 'Asia/Ho_Chi_Minh' - interval '4 hours')::date) STORED);`
2. Ghi: chạy được hay báo lỗi *"generation expression is not immutable"*.
3. Nếu lỗi → thử phương án cột thường + trigger, ghi lại lệnh chạy được.
4. Kiểm 4 ca biên: `intent_at` = 03:59 ICT · 04:00 ICT · 04:01 ICT · 23:59 ICT. Ghi `book_date` ra cho từng ca.

**Nếu KHÔNG:** nền của **A01/A02** (ranh giới ngày 04:00) phải chuyển sang trigger hoặc cột tính ở tầng ứng dụng. **Chi phí gần 0 nếu biết hôm nay; chi phí là dữ liệu lịch sử sai nếu biết ở tuần 6.**

⚠️ Ca biên **04:00 đúng** phải cho ra ngày mới, không phải ngày cũ. Kiểm bằng số, không bằng suy luận.

---

### Việc thứ 8 của buổi — không phải câu hỏi nền tảng: **D-08** — ✅ **ĐÃ LÀM XONG 04/09/2026**

**Kết quả:** StatCounter, Mobile OS Viet Nam, **T8/2026 — Android 57,33% · iOS 42,64% · khác 0,03%**. Ghi ở `docs/adr/ADR-003-thi-phan-android-vn.md`. Nhãn `[FACT]` của ">85%" **đã thu hồi** ở `01` §6 mục 3, `03` R3, `07` §8(b), `08` §8.2.

**Thao tác (giữ lại để lặp lại ở cổng 26/01/2027):** mở StatCounter (Vietnam, Mobile OS market share, tháng gần nhất), chụp màn hình, ghi **đúng một** con số vào ADR.

**Vì sao nó gấp (bối cảnh, giữ lại làm bản ghi):** hồ sơ đang mang **hai con số mâu thuẫn cùng gắn nhãn tin cậy** — `>85%` (dùng trong `01` §6 mục 3, `03` R3, `07` §8b) và **60,38%** (StatCounter T7/2026, `08` §8.2). **Một trong hai đang gắn nhãn `[FACT]` sai.** Ở 60,38%, lập luận "Android web push phủ >85% thị trường" phủ **chưa tới hai phần ba** — và nó là toàn bộ biện minh của phương án dự phòng H1. ✅ **Đã phân giải:** con số thắng là **57,33%** (T8/2026) — thấp hơn cả 60,38%; web push phủ **~57%**.

**Đã ghi:** thị phần Android VN = **57,33%** (nguồn: StatCounter Global Stats — Mobile OS Market Share Viet Nam, T8/2026; ngày truy cập: **04/09/2026**). Mọi câu trong hồ sơ dùng con số cũ đã được sửa trong vòng soát 04/09.

---

## 3. MẪU GHI KẾT QUẢ — chép vào ADR-000 sau buổi

```
KIỂM CHỨNG NỀN TẢNG — 04/09/2026
Người thực hiện: __________  Bắt đầu: ____  Kết thúc: ____
Máy: 1)________  2)________  3)________  (4 iOS)________

┌────┬──────────────────────────┬─────┬─────┬─────┬──────────┬────────────────┐
│ #  │ Câu hỏi                  │ M1  │ M2  │ M3  │ KẾT LUẬN │ Ảnh chụp       │
├────┼──────────────────────────┼─────┼─────┼─────┼──────────┼────────────────┤
│ 1  │ Zalo cảnh báo .vn?       │ C/K │ C/K │ C/K │          │ ☐              │
│ 2  │ Chọn ảnh trong webview   │ C/K │ C/K │ C/K │          │ ☐  ___ giây    │
│ 3  │ OG 4:5 không bị crop     │ C/K │ C/K │ C/K │          │ ☐  crop ___%   │
│ 4  │ Service Worker đăng ký   │ C/K │ C/K │ C/K │          │ ☐              │
│ 5  │ navigator.share({files}) │ C/K │ C/K │ C/K │          │ ☐  ___ chạm    │
│ 6  │ Zalo "Đã xem" nhóm       │ C/K │ C/K │ C/K │          │ ☐              │
│ 7  │ Generated col AT TIME ZONE                 │          │ ☐              │
│ 8  │ D-08 StatCounter Android VN = ______%      │          │ ☐              │
└────┴──────────────────────────┴─────┴─────┴─────┴──────────┴────────────────┘

QUYẾT ĐỊNH PHÁI SINH — ký trong buổi, không để sang ngày mai:
  D-09 (câu 5 = KHÔNG):  ☐ (a)+0,05pw  ☐ (b) mã 6 ký tự to hơn  ☐ CẢ HAI
  A68  (câu 1 = CÓ cảnh báo): ☐ mua domain thứ hai trong tuần này
  S09  (câu 4 = KHÔNG): ☐ Android web push giữ trạng thái ĐÃ CẮT, không viết như khoản đã ngân sách
  A01  (câu 7 = KHÔNG): ☐ chuyển sang trigger, ghi vào ADR-000 §3
  D-08: con số chốt = ______%, nguồn ______________

BA ĐIỀU BẤT NGỜ (bắt buộc điền):
  1. ______________________________________
  2. ______________________________________
  3. ______________________________________
```

---

## 4. THỨ TỰ CHẠY — 2 GIỜ

| Phút | Câu | Vì sao thứ tự này |
|---|---|---|
| 0–20 | Chuẩn bị (§0), điền ma trận máy (§1) | — |
| 20–35 | **Câu 2** (chọn ảnh) | **Câu đắt nhất.** Nếu hỏng thì 5 câu sau gần như không còn ý nghĩa — dừng buổi và họp lại |
| 35–50 | **Câu 5** (`navigator.share`) + quyết D-09 | Câu đắt thứ hai, và là câu duy nhất cần một quyết định pw trong buổi |
| 50–60 | **Câu 1** (cảnh báo domain) | Cần 3 tài khoản, dễ mệt — làm khi còn tỉnh |
| 60–70 | **Câu 3** (OG crop) | Cùng bộ thao tác với câu 1 (dán link vào nhóm) |
| 70–80 | **Câu 4** (Service Worker) | Kết quả không chặn việc gì trong 2 tuần tới |
| 80–85 | **Câu 6** ("Đã xem") | Không đổi được quyết định nào |
| 85–95 | **Câu 7** (Postgres) | Làm trên máy tính, có thể làm song song |
| 95–110 | **D-08** StatCounter | 15 phút |
| 110–120 | Điền mẫu §3, chụp ảnh, ghi 3 điều bất ngờ | **Không được bỏ bước này** — trí nhớ về một buổi test hỏng sau 48 giờ |

---

## 5. NẾU BUỔI NÀY KHÔNG CHẠY ĐƯỢC HÔM NAY

Ba lý do có thật khiến buổi 04/09 trượt, và cách xử lý từng cái:

| Lý do | Hệ quả | Xử lý |
|---|---|---|
| **Chưa mua domain `.vn`** | Câu 1 và câu 3 không trả lời được | Chạy 5 câu còn lại hôm nay. Câu 1+3 chạy **trong 48 giờ sau khi domain hoạt động**, hạn chót **07/09** (trước khi 112 shortlink được in lên card Canva) |
| **Không đủ 3 máy Android** | Không câu nào đạt chuẩn "≥2 máy giống nhau" | Chạy trên số máy có, ghi rõ **n = ___ máy**, và đánh dấu mọi kết luận là **TẠM**. Mượn máy trước **07/09** |
| **Hết giờ** | — | Chạy **câu 2 và câu 5**, bỏ phần còn lại. Hai câu đó là hai câu duy nhất có thể giết sản phẩm |

⚠️ **Không được hoãn quá 07/09/2026.** Ngày 08/09 Bước 0 khởi động và 112 shortlink phải in lên card; ngày 23/09 là dòng code đầu tiên. Một câu chưa trả lời sau 07/09 phải được ghi vào ADR-000 dưới dạng **giả định có nhãn**, không được để trống — giả định không nhãn là cách một con số sai đi vào sáu tài liệu.
