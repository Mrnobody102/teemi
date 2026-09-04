# Architecture Decision Records

Mỗi quyết định lớn (kỹ thuật hoặc sản phẩm) được ghi thành một file `NNNN-ten-quyet-dinh.md`.

Mục đích: 6 tháng sau vẫn biết **tại sao** đã chọn như vậy, và biết khi nào cần xem lại.

## Chỉ mục hiện tại

| File | Nội dung | Ai trỏ tới |
|---|---|---|
| [ADR-000-bat-bien.md](ADR-000-bat-bien.md) | 12 bất biến cơ chế — định nghĩa không được đổi sau khi đã có dữ liệu | 39 tham chiếu trong `docs/plan/` |
| [ADR-001-nen-tang-ky-thuat.md](ADR-001-nen-tang-ky-thuat.md) | Nền tảng kỹ thuật, schema, giá thoát vendor | 33 |
| [ADR-002-ranh-gioi-phap-ly.md](ADR-002-ranh-gioi-phap-ly.md) | 8 giới hạn thiết kế + 7 điều kiện tránh phân loại game G1 | 24 |
| [ADR-003-thi-phan-android-vn.md](ADR-003-thi-phan-android-vn.md) | Chốt Android VN = 57,33% (StatCounter T8/2026), thu hồi nhãn FACT của ">85%" | mới, 04/09/2026 |
| [pw-ledger.md](pw-ledger.md) | Sổ cái person-week — nguồn duy nhất kiểm tra nguyên tắc P7 (đánh đổi 1-1) | 105 |

> **Quy ước đặt tên: `ADR-NNN-slug.md`** (3 chữ số). Đã hoà giải ngày 04/09/2026 — trước đó thư mục dùng lẫn `0000-`/`0001-` và có hai file cùng số `0001`.
>
> **Còn treo:** một tham chiếu trong `docs/plan/` trỏ tới `adr/000-don-vi-do.md` — file này chưa tồn tại. Hoặc tạo nó, hoặc sửa tham chiếu.

## Template

```markdown
# ADR-NNNN: <Tên quyết định>

- **Trạng thái**: đề xuất | đã chốt | đã thay thế bởi ADR-XXXX
- **Ngày**: YYYY-MM-DD
- **Người quyết**:

## Bối cảnh
Vấn đề gì cần quyết? Ràng buộc nào đang có?

## Các lựa chọn đã cân nhắc
| Lựa chọn | Ưu | Nhược | Chi phí |
|---|---|---|---|

## Quyết định
Chọn gì, và tại sao.

## Hệ quả
Được gì, mất gì, khoá mình vào đâu.

## Khi nào xem lại
Điều kiện/ngưỡng cụ thể khiến quyết định này cần được xét lại.
```
