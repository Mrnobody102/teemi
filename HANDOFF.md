# Làm gì tiếp

_Cập nhật 22/10/2026._

## Đang ở đâu

Schema + logic thuần + web app 7 màn đã chạy được. `npm test` xanh (16 test),
`npm run build` xanh. Demo dùng dữ liệu giả nhưng **ba con số tính từ
`src/core`** — xem [CODE.md](CODE.md).

Chưa có: CSDL thật, magic link, upload R2, card PNG server-side, cron rollover.
Mục tiêu còn lại của giai đoạn 2: **một link gửi được cho nhóm bạn thật.**

## Ba cổng đang chặn — tất cả đã lố hạn

| Cổng | Hạn | Trạng thái |
|---|---|---|
| **Ô test `<input type=file>` trong webview Android** (Xiaomi/Oppo) | trước dòng code đầu | ❌ chưa làm. 4 giờ. Fail ⇒ bước 3 của core loop chết, MVP buộc thành Zalo Mini App (+2,0 pw) |
| **Bước 0** — 14 ngày chạy tay, không code | 08–21/09/2026 | ❌ không có dấu vết đã chạy |
| **Cơ chế boss** (`ADR-004` F-02) + D-01 cắt scope + D-04 định nghĩa thành công | 22/09/2026 | ❌ không có văn bản quyết định |

Theo `_rulings.md` mục D: quá hạn ⇒ khuyến nghị của máy tự có hiệu lực **và phải
ghi vào `docs/adr/ADR-000-bat-bien.md` kèm nguyên văn "quyết định mặc định do
quá hạn"**. Việc ghi đó chưa làm, nên bốn quyết định đang lơ lửng về mặt hồ sơ.

Mốc beta 02/12/2026 không còn khả thi. Trần ngày lịch còn hiệu lực: **5 nhóm bạn
dùng thật trước 31/03/2027** — còn ~23 tuần, bản web cần 22–27 tuần ở 13 giờ
code/tuần. Đang ở đúng mép.

## Thứ tự làm

1. **Ô test Android** — chặn mọi quyết định kiến trúc, không cần viết code.
2. **Ghi văn bản cho bốn quyết định lố hạn** — hoặc chạy Bước 0 muộn, hoặc chính
   thức bỏ và ghi lý do. Im lặng là cách đắt nhất: `roster_size` chỉ dựng được từ
   3 ngày đầu của mỗi sổ và `monthly_visits` phải đếm từ dòng code đầu — **hai
   con số này không backfill được.**
3. **Nối CSDL thật** — `postgres.js` qua Transaction Pooler, chỉ gọi từ server.
4. **Magic link** → **upload R2** → **card PNG** (satori) → **cron rollover**.
5. Giai đoạn 3, chỉ khi nghi thức đã sống: bọc Capacitor, rồi widget. Cổng mở:
   `sổ-D28 ≥ 20%` và `q_c ≥ 0,40` trên ≥15 nhóm.

## Ràng buộc tuyệt đối

**Tên sản phẩm là `Teemi`.** Một số tài liệu còn viết "Chốt Sổ" và `chotso.vn` —
đó là tàn dư của đề xuất đã bị bác. Tên bảng `book`/`book_id`/`book_day` giữ nguyên.

**Cơ chế boss chưa quyết.** Không build boss/HP/damage, nhưng cũng không hardcode
giả định "vĩnh viễn không có boss".

**Không build** (đã cắt có chủ đích, lý do ở `01` §13 và `_rulings.md` mục C):
boss/HP/season · reaction, comment, chat trong sản phẩm · caption tự do trên ảnh
proof · xếp hạng, nhãn "Báo Thủ", vote sus, trust score (**không bao giờ**) · vai
chủ sổ, chức năng kick · SMS OTP · gacha · Memory Capsule, AI recap · realtime ·
service worker, PWA manifest, offline.

**Trang `/` là công cụ dev**, không phải màn thứ 8 — phải loại khỏi bản gửi cho
nhóm bạn thật. Slot màn 8 để trống cho đúng một màn được Bước 0 chứng minh là
bắt buộc.

**`navigator.share` không chạy trong bất kỳ in-app webview Android nào** (Zalo,
Messenger, Instagram, Discord, Telegram như nhau — lỗi của Android). Thang dự
phòng đã có trên màn 4: nhấn giữ → Lưu ảnh.

## Bối cảnh để quyết đúng

Rủi ro giết dự án số 1 **không phải** tốc độ build — mà là **nhóm bạn không quay
lại ngày thứ 8** (~55–65%). Mọi quyết định kỹ thuật nên ưu tiên rút ngắn thời
gian tới lúc nhóm bạn thật dùng được, hơn là hoàn thiện tính năng.

Ngân sách founder 20 giờ/tuần ⇒ ~13 giờ code/tuần ⇒ 1 pw ≈ 3,1 tuần lịch.
