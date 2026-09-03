# ADR-001: Nền tảng kỹ thuật, schema và giá thoát vendor

- **Trạng thái**: đã chốt · **Ngày**: 2026-08-28 · **Người quyết**: founder
- **Hiệu lực**: từ commit đầu tiên (24/09/2026)

## Bối cảnh

Ba tài liệu định nghĩa **ba schema khác nhau** cho cùng một hệ thống (`03` §3.2 tiếng Việt · `04` §1 tiếng Anh · `06` §0 `day_rolled`), và khác nhau không chỉ ở tên gọi mà ở **khoá duy nhất của bảng tấm** và **key R2 của ảnh** — hai thứ quyết định đa sổ có khả thi không và retry upload có idempotent không.

## Quyết định

### 1. Schema nguồn: `04-data-model-va-co-che.md` §1

| Điểm | Bản bị loại (`03` §3.2) | **Bản có hiệu lực (`04` §1)** |
|---|---|---|
| Khoá bảng tấm | `UNIQUE(thanh_vien_id, logical_date)` — **khoá chết đa sổ vĩnh viễn ở tầng CSDL** | **`UNIQUE(book_id, person_id, book_date)`** |
| Key R2 ảnh gốc | `orig/{so}/{date}/{tam_id}.jpg` — `tam_id` do server sinh ⇒ **retry tạo key mới ⇒ không idempotent** | **`orig/<book>/<date>/<person>/<client_proof_id>.jpg`** — client sinh id ⇒ retry ghi đè đúng key |
| Tuổi | `khai_du_16` | **`person.is_16_plus` + `age_gate_at`, KHÔNG lưu năm sinh** |
| Bảng tổng hợp ngày | `ngay_so` | **`book_day`**, có thêm `roster_size` |

`06` §0 (`day_rolled`) và `03` §3.2 **không còn tự khai bảng** — chúng tham chiếu về `04`.

### 2. Ngôn ngữ đặt tên: **tiếng Anh**. `book_id`, không `group_id`, không `so_id`.

Nguyên tắc **P10** của v2 phải đọc theo **nghĩa** — _"cột đầu tiên của mọi bảng và mọi event là **khoá sổ**"_ — không đọc theo mặt chữ _"phải là `group_id`"_. Đọc theo mặt chữ thì luật P10 fail trên chính schema đã chốt. Đổi hôm nay = một lệnh `sed`; đổi sau commit đầu = một buổi làm việc + một lớp bug.

### 3. Hai lỗi SQL đã sửa, cả hai cùng một lớp

- Hai CHECK constraint `person_birth_year_sane` và `person_age_gate` gọi **`now()` bên trong CHECK** ⇒ Postgres cấm hàm không-IMMUTABLE trong CHECK ⇒ **`CREATE TABLE` sẽ lỗi**. Đã xoá cả hai; kiểm tra tuổi làm ở **tầng ứng dụng**.
- `audit_log.retain_until` viết bằng `generated always as ((now() + interval '25 months')::date)` — **cùng lỗi**. Đổi thành `default`.
- ⚠️ **Buổi kiểm chứng 04/09 phải thử `CREATE TABLE` thật**, đặc biệt generated column `book_date` dùng `ict_book_date(...)` — nó cũng phải IMMUTABLE. `03` §4a dành cả một khối cảnh báo về đúng lớp lỗi này và vẫn có ba chỗ mắc phải.

### 4. Cron: **một job duy nhất**

| Job | Lịch | Ghi chú |
|---|---|---|
| `rollover` | **`5 21 * * *` UTC = 04:05 ICT** | **KHÔNG phải 04:00.** Biên nộp muộn kỹ thuật là 120 giây tính trên `intent_at`; job chạy đúng 04:00:00 sẽ ghi `book_day` **trước** khi biên đó đóng ⇒ tấm bấm Gửi 03:59:40 commit 04:00:20 rơi vào một ngày đã finalized ⇒ **mất ngày hoặc vi phạm bất biến `book_day`** (trigger `book_day_monotonic` raise). 04:05 = sau biên 120s + 3 phút đệm |
| ~~`mo_chot_so` 21:00~~ | — | **CẮT.** Trạng thái "sẵn sàng chốt" suy ra được từ giờ server; v2 §4.7 nói hệ thống **không gửi gì** lúc 21:00 ⇒ job không có tác dụng phụ nào để mất. −0,10 pw |
| `rollup_events` | `30 21 * * *` UTC = 04:30 ICT | Gộp event thô, xoá raw >90 ngày |

**Luật bất biến giữ nguyên: cron KHÔNG được là điều kiện đúng đắn của dữ liệu.** Founder ngủ quên, Supabase bảo trì, `pg_net` timeout — sổ vẫn đúng, chỉ con số hiển thị chậm một nhịp.

### 5. Hạ tầng: Supabase **Pro $25/tháng từ ngày beta chạy (02/12/2026)**

Supabase Free **không có backup hằng ngày**, trong khi sản phẩm hứa giữ thumbnail **vĩnh viễn** và ToS hứa giữ ảnh. Mất CSDL beta = mất tài sản của mọi sổ, không có đường về — đúng loại lỗi mà bus factor 1 không sửa được.

- Kỳ vọng hoá đơn beta: **$28–37/tháng**
- Definition of Done: **≤$40/tháng** (thay cho ≤$12)
- Đèn báo động: **>$60/tháng khi doanh thu = 0** ⇒ đó là **lỗi cấu hình, không phải dấu hiệu quy mô**. Dừng viết feature, đi đọc hoá đơn.

### 6. Vòng đời object

| Object | TTL | Ghi chú |
|---|---|---|
| Ảnh gốc | **72 giờ** | R2 lifecycle + job đối soát 04:10 |
| Thumbnail 320px | **vĩnh viễn** đến khi chủ ảnh xoá | Sổ ngủ 180 ngày ⇒ chuyển **lưu trữ lạnh**, KHÔNG xoá. Chỉ xoá khi `archived` + báo trước 30 ngày + có đường tải về. Toàn bộ thumbnail của 10.000 sổ = **$3/tháng** — kinh tế không biện minh được việc xoá |
| Card PNG **~150 KB** | **90 ngày**, sau đó **THAY bằng ảnh tĩnh trung tính cùng key** | **Không trả 404.** Card sống trong lịch sử chat Zalo mãi mãi; một dãy ảnh vỡ là thiệt hại thương hiệu diễn ra chậm và không ai báo |
| `event` | 13 tháng, partition theo tháng | |
| `audit_log` | **25 tháng** | Nghĩa vụ ≥2 năm |

### 7. Bảo mật hai khoá — `share_token` ≠ `book.code`

Card được thiết kế để **lan ra ngoài nhóm**. Nếu slug công khai chứa mã vào sổ thì ai thấy link đều vào được sổ kín, và với danh tính L3 (device token, không mật khẩu) thì **mạo danh được**.

- **`share_token`** — chỉ XEM trang public. Nằm trong slug, in được lên card.
- **`book.code`** (6 ký tự) — khoá VÀO sổ. In trên card **trong pixel** (đường thoát hiểm khi Zalo chặn domain), nhưng **sinh độc lập**, không suy ra được từ `share_token`.
- Vào sổ bằng mã còn phải thoả: **sổ <8 người VÀ link <7 ngày**.
- **Test CI bắt buộc:** `slug` không chứa `code6` như substring, và ngược lại.
- Bảng chữ mã: **28 ký tự** `23456789 A C D E F G H J K M N P Q R T U V W X Y` (loại `0/O`, `1/I/L`, `B` vs 8, `S` vs 5, `Z` vs 2). 28⁶ ≈ 481 triệu. Nằm trong `remote_config`.

### 8. Giá thoát vendor — giữ nguyên bốn luật portability

Ảnh ở R2 (không ở Supabase Storage), mọi truy cập media qua một `StorageAdapter`, `e2e:portable` chạy `docker compose up` Postgres + MinIO mỗi PR. Điều kiện: **chi phí di chuyển ≤1 pw** nếu luật sư trả lời "máy chủ phải đặt tại VN" (câu 7, `05` §11).

## Khi nào xem lại

- **Ngay sau buổi kiểm chứng 04/09** nếu generated column `ict_book_date` không IMMUTABLE, hoặc Service Worker không đăng ký được trong webview Zalo.
- **Ngay khi luật sư trả lời câu 7** (máy chủ VN) — nó kéo mốc "lập TNHH" về ngày 0.
- Mục 5 (Supabase Pro): nếu hoá đơn beta vượt $60, đó là lỗi cấu hình, không phải lý do đổi vendor.
