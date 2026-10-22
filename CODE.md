# CODE.md

Đặc tả sản phẩm ở `docs/plan/`, quyết định ở `docs/adr/`. Khi code và tài liệu
mâu thuẫn: `docs/plan/_rulings.md` mục A thắng về hằng số,
`docs/plan/04-data-model-va-co-che.md` thắng về schema và thuật toán.

## Thư mục

| | |
|---|---|
| `src/db/` | Schema Drizzle cho Postgres 16 — 19 bảng, 5 enum, ràng buộc, index |
| `src/core/` | Logic nghiệp vụ **thuần**: không I/O, không mạng, không CSDL, không framework |
| `src/app/` | Next.js App Router — 7 màn MVP |
| `src/ui/` | Component dùng chung giữa các màn |
| `src/mock/` | Dữ liệu giả cho demo. Sẽ bị thay bằng lớp truy vấn thật |

`src/core/` không được import `postgres`, và chỉ được import **kiểu** từ
`src/db/`. Nó phải test được mà không cần CSDL.

## Hằng số nghiệp vụ

Không hằng số cơ chế nào được gõ trong logic. Hàm trong `src/core/` **nhận** cấu
hình qua tham số; ở sản phẩm thật giá trị đọc từ bảng `remote_config`. Danh sách
chuẩn kèm mã tra cứu (`A01`, `A07`, …) ở `docs/plan/_rulings.md` mục A.

Hai cái dễ gõ sai nhất:

- `A_eff = min(A(D), A(D−1))`; `k = 1` nếu `A_eff ≤ 2`, `k = 2` nếu `A_eff ≥ 3`.
  Ngưỡng cũ `ceil(0,6 × A)` **đã chết** — nó gãy đơn điệu ở `A = 4`. Đừng khôi phục.
- NGÀY cắt lúc 04:00 giờ VN, một múi giờ duy nhất. Biên nộp muộn 120 giây trên
  `intent_at`. Cron rollover `'5 21 * * *'` UTC — **không** phải `'0 21'`, chạy
  trước biên 120 giây sẽ vỡ bất biến.

## Demo lấy số từ đâu

`src/mock/book.ts` chỉ khai **lịch sử nộp thô** — ai nộp ngày nào, nhãn gì. Ba
con số trên UI (ngày thứ mấy, bao nhiêu tấm, chuỗi mấy) chạy qua đúng chuỗi hàm
`src/core` mà cron rollover sẽ gọi. Nên demo sai ở đâu nghĩa là cơ chế sai ở đó,
không phải fixture sai. `tests/demo-fixture.test.ts` canh điều này.

## Chạy

```bash
npm run dev        # Next dev server
npm run build      # build production
npm test           # vitest
npm run typecheck  # tsc --noEmit
npm run db:generate && npm run db:migrate   # cần DATABASE_URL trong .env
```

Vitest ép `TZ=Asia/Ho_Chi_Minh` để kết quả không đổi theo máy — nhưng logic ngày
vẫn phải tự tính offset UTC+7, **không** được dựa vào TZ của tiến trình.

## Quy ước

- Tên biến, hàm, bảng, cột: **tiếng Anh**. Comment giải thích quy tắc nghiệp vụ:
  **tiếng Việt**.
- TypeScript strict thật: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`.
  Không `any`.
- Import tương đối **không có đuôi** `.js` (`moduleResolution: bundler`).
- Không bịa quy tắc. Đặc tả không nói ⇒ để `TODO(spec)` kèm câu hỏi cụ thể.
- Phát hiện tài liệu sai thì **sửa tài liệu luôn**, ghi rõ sửa gì và tại sao.

## Ba chỗ lệch khỏi tài liệu, có lý do

| Lệch | Vì sao |
|---|---|
| **Next 16** thay vì Next 15 ở `03` | Next 15 từ chối TypeScript 7 (bản Go) mà repo đã chuẩn hoá. Nâng Next rẻ hơn hạ toàn bộ toolchain |
| `next.config.mjs` thay vì `.ts` | Next đọc config `.ts` bằng TS compiler API, API đó chưa có ở TS 7 |
| Bỏ 2 `CHECK` gọi `now()`, sửa regex mã sổ về 28 ký tự | Postgres cấm hàm không-IMMUTABLE trong `CHECK`; regex cũ cho 32 ký tự và vẫn còn `L` |

## Chưa có

Lớp truy cập CSDL (chưa nối `postgres.js` thật) · magic link và phiên · upload
ảnh và R2 · sinh card PNG server-side · cron rollover 04:05 và đối soát TTL ảnh
04:10 · **boss** (chưa quyết, xem `ADR-004` F-02).

Nếu sau này có boss thì **HP phải đơn điệu giảm, không bao giờ hồi** — boss hồi
máu là lỗi số học, không phải lựa chọn thiết kế. `src/core/` vì vậy không được
hardcode giả định "vĩnh viễn không có boss" vào kiểu dữ liệu hay chữ ký hàm.

Test CI cấm bảng/cột tên `boss`/`hp`/`damage` (`04` §8.4) **cố ý chưa viết**: nó
sẽ khoá cứng vào nhánh không-boss, đúng thứ `ADR-004` F-02 cấm.

## Phụ thuộc

`npm audit` báo lỗi moderate từ `drizzle-kit → @esbuild-kit/esm-loader → esbuild`.
Lỗ hổng nằm ở **dev server của esbuild**, thứ không bao giờ chạy ở đây.
**Không chạy `npm audit fix --force`** — nó hạ `drizzle-kit` về `0.18.1`, mất hẳn
API `generate`/`migrate` đang dùng.
