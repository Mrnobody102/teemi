# CODE.md — phần code của Teemi

Tài liệu này mô tả **thư mục code** trong repo. Đặc tả sản phẩm nằm ở `docs/plan/`,
quyết định nằm ở `docs/adr/`. Khi code và tài liệu mâu thuẫn:
`docs/plan/_rulings.md` mục A thắng về hằng số, `docs/plan/04-data-model-va-co-che.md`
thắng về schema và thuật toán.

> **Tên sản phẩm là `Teemi`.** Founder đã chốt giữ tên này ngày 04/09/2026
> (`docs/adr/ADR-004-quyet-dinh-founder-04-09.md`, F-01). Nhiều file trong
> `docs/plan/` viết bằng tên cũ vì được soạn trước ngày đó — đó là nợ tài liệu,
> không phải tên sản phẩm. Không dùng tên cũ ở bất kỳ đâu trong code.

## 1. Phần code này là gì

Hai thứ, và chỉ hai thứ:

| Thư mục | Nội dung |
|---|---|
| `src/db/` | Schema Drizzle cho Postgres 16 — 20 bảng, 5 enum, ràng buộc, index. Nguồn: `docs/plan/04-data-model-va-co-che.md` §1. |
| `src/core/` | Logic nghiệp vụ **thuần**: hàm nhận dữ liệu vào, trả kết quả ra, không I/O, không mạng, không truy vấn CSDL, không phụ thuộc framework. |

`src/index.ts` chỉ export lại từ hai chỗ đó.

## 2. Tại sao chỉ có schema + logic thuần

**Hướng sản phẩm chưa chốt.** Founder đang cân nhắc giữa app native và web app
(`ADR-004` F-03: hướng chat-card *"đang kiểm chứng lại"*). Cho tới khi có kết quả,
viết UI là đặt cược vào một hướng chưa được quyết — nếu đặt sai, phần đó bị vứt.

Schema CSDL và logic ngày/chuỗi/ngưỡng thì **không đổi theo hướng nào**. Một tấm
proof vẫn thuộc một người, một sổ, một `book_date`; ngày vẫn cắt lúc 04:00 giờ
Việt Nam; `A_eff` vẫn là `min(A(D), A(D−1))` — dù giao diện là React Native hay
một trang web. Nên đây là phần duy nhất an toàn để viết trước, và nó là phần
tốn nhiều suy nghĩ nhất.

Hệ quả: **không có** React, Next.js, route HTTP, component, CSS trong repo này.
Nếu một PR thêm chúng, PR đó đang đi trước một quyết định chưa có.

### Cơ chế boss cũng chưa chốt

`ADR-004` F-02: founder **không** duyệt xoá boss, cũng **không** duyệt giữ boss —
để Bước 0 (cổng 22/09/2026) trả lời. Nên logic trong `src/core/` phải **để ngỏ
cả hai đường**: không build boss, nhưng cũng không hardcode giả định "vĩnh viễn
không có boss" vào kiểu dữ liệu hay chữ ký hàm.

Một điều đã chốt bất kể kết quả: nếu sau này có boss thì **HP phải đơn điệu giảm,
không bao giờ hồi** — boss hồi máu là lỗi số học, không phải lựa chọn thiết kế.

## 3. Hằng số nghiệp vụ

Không hằng số nào được gõ trực tiếp trong logic ở nơi khác — tất cả ở một chỗ
trong `src/core/`, mỗi hằng số kèm mã tra cứu (`A01`, `A06`, …) trỏ về
`docs/plan/_rulings.md` mục A.

| Hằng số | Giá trị | Mã |
|---|---|---|
| Định nghĩa NGÀY (`book_date`) | 04:00:00 → 03:59:59 giờ VN (UTC+7), một múi giờ duy nhất | A01 |
| Biên nộp muộn kỹ thuật | 120 giây trên `intent_at` | A02 |
| Số người hoạt động hiệu lực | `A_eff = min(A(D), A(D−1))` | A06 |
| Ngưỡng đủ mâm | `k = 1` nếu `A_eff ≤ 2`; `k = 2` nếu `A_eff ≥ 3` | A07 |
| `group_alive` | ≥3 người nộp ≥1 tấm trong 7 ngày gần nhất | A08 |
| Van nghỉ | 2 ngày hụt / cửa sổ 7 ngày trượt | A10 |
| Hành vi của van | chuỗi đóng băng · không vào mẫu số `q_c` · tiêu 1 slot | A11 |
| Trạng thái sổ | `active` → `dormant` (7 ngày liên tiếp `A < 3`) → `dead` (21 ngày không tấm) → `archived` | A12 |
| `roster_size` | người nộp ≥1 tấm trong 3 ngày đầu của sổ, đóng băng 14 ngày | A14 |
| Trần thành viên | 8 người/sổ | — |
| Mã sổ | 6 ký tự từ bảng 28 ký tự `23456789ACDEFGHJKMNPQRTUVWXY` | — |
| Cửa sổ Tết freeze | `book_date` 2027-02-03 → 2027-02-12 (10 ngày) | A120 |

Ngưỡng cũ `k = ceil(0,6 × A)` **đã chết** — nó gãy đơn điệu ở `A = 4`. Đừng
khôi phục nó.

## 4. Cách chạy

```bash
npm install

npm run typecheck    # tsc --noEmit, strict thật
npm test             # vitest run
npm run test:watch   # vitest ở chế độ watch
```

Test đặt ở `tests/**/*.test.ts` (hoặc cạnh file trong `src/**/*.test.ts`).
Vitest ép `TZ=Asia/Ho_Chi_Minh` để kết quả không đổi theo máy chạy — nhưng logic
ngày vẫn phải tự tính offset UTC+7, **không** được dựa vào TZ của tiến trình.

`tests/smoke.test.ts` chỉ để xác nhận bộ công cụ chạy được — xoá nó khi đã có
test nghiệp vụ thật.

> **`npm run typecheck` hiện đang đỏ, và đó là đúng.** `src/index.ts` export lại
> từ `./db/schema.js` và `./core/index.js`; hai module đó chưa tồn tại (do người
> khác viết). Hai lỗi `TS2307` sẽ tự hết khi hai file kia được thêm vào — không
> sửa bằng cách xoá dòng export.

Migration (cần một Postgres 16 thật và `DATABASE_URL` trong `.env`):

```bash
cp .env.example .env   # rồi điền giá trị
npm run db:generate    # sinh SQL vào ./drizzle
npm run db:migrate     # áp lên CSDL
```

## 5. Quy ước code

- Tên biến, tên hàm, tên bảng, tên cột: **tiếng Anh**. Comment giải thích quy
  tắc nghiệp vụ: **tiếng Việt**.
- TypeScript strict, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`.
  **Không `any`.**
- `src/core/` không được import `postgres`, không được import gì từ `src/db/`
  ngoài kiểu dữ liệu. Nó phải test được mà không cần CSDL.
- Không bịa quy tắc. Đặc tả không nói ⇒ để `TODO(spec)` kèm câu hỏi cụ thể,
  không đoán rồi viết tiếp.

## 6. Cái gì CHƯA có

- **Toàn bộ giao diện.** Không màn hình, không component, không route, không
  API HTTP — chờ `ADR-004` F-03.
- **Lớp truy cập dữ liệu.** Không repository, không query, không kết nối
  `postgres.js` thật. `src/db/` mới chỉ khai báo bảng.
- **Cron / job nền.** `rollover` 04:05 giờ VN, job đối soát TTL ảnh 04:10 — mới
  có thuật toán, chưa có bộ chạy.
- **Upload ảnh và R2.** Chưa có ký URL, chưa có sinh thumbnail, chưa có card PNG.
  `.env.example` đã chừa sẵn tên biến `R2_*`.
- **Xác thực và phiên.** Không cookie, không token — cơ chế phiên phụ thuộc
  hướng sản phẩm.
- **Boss.** Chưa quyết, chưa build. Xem §2.
- **Migration đã áp.** Thư mục `drizzle/` sinh ra bằng `npm run db:generate`,
  chưa chạy lần nào.
- **Test CI cấm bảng/cột.** `docs/plan/04` §8.4 đề xuất một check CI fail khi
  migration tạo bảng tên `boss`/`hp`/`damage`/… — **chưa viết, và cố ý chưa
  viết**: nó sẽ khoá cứng vào nhánh không-boss, đúng thứ `ADR-004` F-02 cấm.
  `TODO(spec)`: viết check này sau cổng 22/09/2026, khi biết câu trả lời.

## 7. Ghi chú phụ thuộc

`npm audit` báo 4 lỗi mức moderate, tất cả từ **một** chuỗi phụ thuộc:
`drizzle-kit → @esbuild-kit/esm-loader → esbuild <=0.24.2` (GHSA-67mh-4wv8-2f99).
Lỗ hổng đó nằm ở **dev server của esbuild**, thứ không bao giờ chạy ở đây —
`drizzle-kit` chỉ được gọi để sinh và áp migration. `npm audit fix --force` sẽ hạ
`drizzle-kit` về `0.18.1`, mất hẳn API `generate`/`migrate` đang dùng. **Không
chạy lệnh đó.** Xem lại khi drizzle-kit đổi sang `tsx`.
