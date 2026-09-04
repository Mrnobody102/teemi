# Prompt bàn giao cho Codex

Dán toàn bộ nội dung dưới đây làm prompt đầu tiên.

---

Bạn đang làm việc trong repo `/home/huypq/teemi`. Đây là dự án **Teemi** — social challenge app cho nhóm bạn thân Việt Nam, Gen Z 16–28.

Repo đã có **3 MB tài liệu nghiên cứu + kế hoạch** hoàn chỉnh nhưng **chưa có code sản phẩm**. Việc của bạn là build. Đọc tài liệu trước khi viết dòng code nào.

## Bước 1 — Đọc theo đúng thứ tự này

| # | File | Vì sao |
|---|---|---|
| 1 | `docs/plan/00-ke-hoach-tong.md` | Đứng một mình được — đọc xong hiểu toàn bộ dự án |
| 2 | `docs/plan/_rulings.md` **mục A** | **Từ điển 123 hằng số chuẩn. Đây là nguồn chân lý duy nhất cho mọi con số. Khi tài liệu khác nói khác, mục A thắng.** |
| 3 | `docs/plan/01-dinh-nghia-san-pham-v2.md` | Định nghĩa sản phẩm, core loop, 7 màn |
| 4 | `docs/plan/04-data-model-va-co-che.md` | **DDL đầy đủ 18–20 bảng + thuật toán + ca biên. Đây là spec để code.** |
| 5 | `docs/plan/03-kien-truc-ky-thuat.md` | Stack đã chốt và lý do |
| 6 | `docs/adr/ADR-004-quyet-dinh-founder-04-09.md` | Quyết định founder — **ràng buộc cứng** |
| 7 | `docs/re-examination/00-KET-LUAN.md` | Vòng kiểm chứng gần nhất, đã thu hồi 4 khẳng định sai |

Tham khảo khi cần: `docs/plan/08-ux-flow-va-tone.md` (UX + tone), `docs/plan/05-lo-trinh-phap-ly.md` (pháp lý), `docs/plan/06-metrics-va-gia-thuyet.md` (event analytics).

## Bước 2 — Ràng buộc tuyệt đối

**Tên sản phẩm là `Teemi`.** Founder đã bác việc đổi tên. Một số tài liệu còn viết "Chốt Sổ" và domain `chotso.vn` — đó là **tàn dư của đề xuất bị bác**. Dùng `Teemi` / `teemi.vn` ở mọi nơi. Tên bảng CSDL `book`/`book_id`/`book_day` **giữ nguyên** (thuật ngữ kỹ thuật, không phải thương hiệu).

**Cơ chế boss CHƯA quyết.** Founder để Bước 0 trả lời. Không build boss/HP/damage. Nhưng **mọi hằng số cơ chế phải nằm trong bảng `remote_config` đọc từ DB**, không hardcode — để đổi được mà không cần deploy.

**Ba ràng buộc kiến trúc, nhận ngay từ commit đầu:**
1. Hằng số cơ chế trong `remote_config` (DB), không phải hằng số TypeScript.
2. `StorageAdapter` tách khỏi nhà cung cấp — R2 hôm nay, có thể phải chuyển máy chủ về VN sau.
3. **Danh tính KHÔNG chỉ dựa vào `localStorage`.** Dùng magic link. Device token đơn thuần mất khi đổi máy / xoá dữ liệu duyệt / mở link bằng webview lần này và Chrome lần sau. Tài sản sản phẩm là ảnh tích luỹ nhiều tháng ⇒ mất danh tính = mất toàn bộ giá trị.

**Không build những thứ này** (đã bị cắt có chủ đích, lý do ở `01` §13 và `_rulings.md` mục C): boss/HP/season · reaction/comment/chat trong sản phẩm (Zalo/Messenger làm tốt hơn) · caption tự do trên ảnh proof · xếp hạng / nhãn "Báo Thủ" / vote sus / trust score (**không bao giờ**) · vai chủ sổ / chức năng kick · SMS OTP · gacha · Memory Capsule / AI recap · realtime · service worker / PWA manifest / offline.

## Bước 3 — Stack (đã chốt ở `03`, đừng chọn lại)

- **Next.js 15 App Router + React 19 + TypeScript strict + Tailwind.** Server Components mặc định.
- **Supabase Postgres** (region `ap-southeast-1`), truy cập **chỉ từ server**, qua **Drizzle ORM + `postgres.js`** trỏ Transaction Pooler (port 6543).
  **Không dùng `supabase-js`, không PostgREST, không Supabase Auth, không Supabase Storage.** Supabase chỉ là nhà cung cấp Postgres có `pg_cron` + backup, thay được trong một buổi chiều.
- **Cloudflare R2** cho ảnh — 1 bucket riêng tư, 3 prefix (`orig/`, `thumb/`, `card/`), lifecycle rule.
- Vitest cho test. Vercel region `sin1` cho hosting.

## Bước 4 — Hằng số lõi (chép từ `_rulings.md` mục A — tra lại để chắc)

```
NGÀY          = 04:00:00 → 03:59:59 ICT (UTC+7), MỘT múi giờ duy nhất
Biên nộp muộn = 120 giây trên intent_at
Cron rollover = '5 21 * * *' UTC (= 04:05 ICT). KHÔNG phải '0 21' — chạy trước biên 120s sẽ vỡ bất biến
A_eff         = min(A(D), A(D−1))
Ngưỡng đủ mâm = k=1 nếu A_eff≤2; k=2 nếu A_eff≥3   [ngưỡng PHẲNG]
                ceil(0,6×A) ĐÃ BỊ LOẠI — gãy đơn điệu ở A=4: ceil(2,4)=3 làm nhóm 4 khó hơn nhóm 5
Van nghỉ      = 2 ngày hụt / cửa sổ 7 ngày trượt.
                Ngày được van đỡ: chuỗi ĐÓNG BĂNG, KHÔNG vào mẫu số q_c, tiêu 1 slot
Trạng thái proof = done (XONG) | toang (TOANG: có mặt, không hoàn thành) | vắng
                q_c đếm CÓ MẶT (done+toang) · q_x chỉ đếm done
roster_size   = người nộp ≥1 tấm trong 3 NGÀY ĐẦU của sổ, ĐÓNG BĂNG 14 ngày.
                Đây là mẫu số của q_c/q_x. KHÔNG dùng cửa sổ trượt — mẫu số trượt làm q_c TĂNG khi sổ chết
group_alive   = ≥3 người nộp ≥1 tấm trong 7 ngày gần nhất
Vòng đời sổ   = active → dormant (7 ngày liên tiếp A<3) → dead (21 ngày không tấm) → archived
Trần người/sổ = 8
Mã sổ         = 6 ký tự từ bảng 28 chữ: 23456789ACDEFGHJKMNPQRTUVWXY
                (KHÔNG có 0 O 1 I L — spec cũ ghi 32 ký tự và VẪN còn L, đó là lỗi, sửa)
share_token   = chuỗi ĐỘC LẬP với book.code, TTL 7 ngày, noindex
                Slug công khai KHÔNG được chứa code6 như substring — viết test CI
Ảnh gốc       = TTL 72 giờ, ~110 KB (1080px q=0,72)
Thumbnail     = 320px ~18 KB, giữ VĨNH VIỄN (10.000 sổ ≈ $3/tháng)
Card PNG      = 150 KB, TTL 90 ngày; hết hạn → ảnh tĩnh trung tính, KHÔNG 404
Tết freeze    = book_date 2027-02-03 → 2027-02-12 (10 ngày): không tiêu van, không đứt chuỗi, không vào mẫu số
Tuổi          = chỉ lưu is_16_plus boolean + age_gate_at. KHÔNG lưu năm sinh
Đèn pháp lý   = HAI counter (NĐ 147 là OR, không phải một mốc):
                monthly_visits: vàng 6.000 / đỏ 8.500
                monthly_active_persons: vàng 600 / đỏ 850
                Đèn vàng → soạn hồ sơ Giấy phép MXH. Đèn đỏ → dừng nhận sổ mới trong ngày
SLA gỡ nội dung = 48h (khiếu nại người dùng) · 24h, khẩn cấp 6h (cơ quan nhà nước) — in CẢ HAI
Analytics     = 32 event, danh mục ở `04` §7.1. Số 25 để trống vĩnh viễn. Event KHÔNG backfill được ⇒ đủ từ commit đầu
```

## Bước 5 — Thứ tự build

Đã có sẵn (bản dở, kiểm lại rồi làm tiếp): `package.json`, `tsconfig.json`, `src/index.ts`, `src/db/schema/{_shared,person,enums}.ts`.

**Giai đoạn 1 — nền, không UI:**
1. `src/db/schema/` — đủ 18–20 bảng + 5 enum theo `04` §1. Giữ đúng mọi UNIQUE/CHECK/FK/index.
   Hai chỗ **phải sửa** so với spec: xoá 2 CHECK gọi `now()` (Postgres cấm hàm không-IMMUTABLE trong CHECK) và sửa regex mã sổ về đúng 28 ký tự.
2. `src/core/` — hàm thuần, không I/O: `day.ts` · `roster.ts` · `day-scoring.ts` · `streak.ts` · `book-lifecycle.ts` · `book-code.ts` · `metrics.ts`.
3. **Test bắt buộc xanh** trước khi sang giai đoạn 2. Phải phủ đúng những ca biên spec chỉ ra là dễ sai:
   - Ranh giới 04:00: 03:59:59 · 04:00:00 · 04:00:01
   - Bấm gửi 03:59:40, commit 04:00:20 → phải thuộc ngày **CŨ**
   - Sổ 2 người có thêm bạn thứ 3 → **không được mất chuỗi đúng vào ngày có thêm bạn** (`04` §9.1)
   - `quorumThreshold` đơn điệu với A = 1…8
   - Van nghỉ: hụt 2/7 → chuỗi sống; hụt 3 → đứt
   - Tết freeze không tiêu van
   - `slugContainsCode('abck7qm2pvnx', 'K7QM2P')` → true (không phân biệt hoa thường)
   - Mã sổ không bao giờ sinh ra `0 O 1 I L`

**Giai đoạn 2 — web app chạy được:** 7 màn ở `01` §5 (slot thứ 8 **để trống có chủ đích**). Sinh card PNG server-side. Magic link. Upload ảnh → R2. Cron rollover.
Mục tiêu: **một link gửi được cho nhóm bạn thật.**

**Giai đoạn 3 — chỉ khi nghi thức đã sống:** bọc Capacitor thành app, rồi widget. Cổng mở: `sổ-D28 ≥ 20%` và `q_c ≥ 0,40` trên ≥15 nhóm.

## Bước 6 — Một ô test chặn mọi thứ

Trước khi build giai đoạn 2, phải test trên **máy Android thật (Xiaomi/Oppo)**: `<input type="file" accept="image/*">` trong in-app webview có mở được thư viện ảnh không.

Nếu fail → bước 3 của core loop chết, MVP buộc phải là Zalo Mini App (dùng `chooseImage`), +2,0 pw + kiểm duyệt 3–5 ngày. Giao thức test đầy đủ ở `docs/plan/12-kiem-chung-nen-tang.md`.

Liên quan: `navigator.share` **không chạy trong bất kỳ in-app webview Android nào** (Zalo, Messenger, Instagram, Discord, Telegram như nhau — lỗi của Android). Phải có thang dự phòng: long-press → Lưu ảnh, kèm hướng dẫn 1 dòng dưới card.

## Bước 7 — Quy ước

- Code và tên biến **tiếng Anh**. Comment **tiếng Việt** ở chỗ giải thích quy tắc nghiệp vụ.
- TypeScript strict thật: `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`. Không `any`.
- **Không bịa quy tắc.** Spec không nói → để `TODO(spec)` kèm câu hỏi cụ thể, đừng đoán.
- Commit nhỏ, tiếng Việt, giải thích *tại sao*.
- Khi phát hiện tài liệu sai (đã xảy ra nhiều lần): **sửa tài liệu luôn**, ghi rõ sửa gì và tại sao. Đừng im lặng code theo cái đúng.

## Bối cảnh giúp bạn quyết đúng

Rủi ro giết dự án số 1 **không phải** tốc độ build — mà là **nhóm bạn không quay lại ngày thứ 8** (~55–65%). Mọi quyết định kỹ thuật nên ưu tiên **rút ngắn thời gian tới lúc nhóm bạn thật dùng được**, hơn là hoàn thiện tính năng.

Đơn vị sản phẩm là **SỔ (nhóm)**, không phải user. Nhóm 5 người mất 4 → user retention còn 20% nhưng nhóm đã chết 100%. Mọi metric, mọi cohort, mọi bảng: `book_id` là cột đầu tiên.
