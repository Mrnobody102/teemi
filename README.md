# Teemi

> Mỗi người một tấm. Cả nhóm một sổ.

Social challenge app private-first cho nhóm bạn thân Việt Nam, Gen Z 16–28. Mỗi
ngày mỗi người nộp một tấm ảnh chứng minh đã làm được việc mình hứa; đủ người thì
ngày đó tính, sổ lên chuỗi, và nhóm có một card để dán vào nhóm chat.

**Đơn vị sản phẩm là SỔ, không phải người dùng.** Nhóm 5 người mất 4 thì user
retention còn 20% nhưng nhóm đã chết 100%.

```bash
npm install
npm run dev    # http://localhost:3000 — xem cả 7 màn một lượt
npm test       # 16 test
```

Đã có: schema 19 bảng · 7 module logic thuần · web app 7 màn với dữ liệu giả.
Chưa có: CSDL thật, magic link, upload R2, card PNG, cron.

## Đọc tiếp

| | |
|---|---|
| [HANDOFF.md](HANDOFF.md) | Làm gì tiếp, cổng nào đang chặn |
| [CODE.md](CODE.md) | Phần code |
| [docs/plan/00-ke-hoach-tong.md](docs/plan/00-ke-hoach-tong.md) | Bức tranh tổng |
| [docs/plan/_rulings.md](docs/plan/_rulings.md) | **Mục A = nguồn chân lý cho mọi hằng số.** Tài liệu khác nói khác thì mục A thắng |
| [docs/adr/](docs/adr/) | Quyết định lớn, mỗi cái một file |

`docs/research/`, `docs/critique/`, `docs/re-examination/` là bằng chứng nền —
đọc khi cần kiểm lại một lập luận, không cần đọc để bắt đầu.

Tên sản phẩm là **Teemi**. Tên bảng `book` / `book_id` / `book_day` giữ nguyên vì
đó là thuật ngữ kỹ thuật, không phải thương hiệu.
