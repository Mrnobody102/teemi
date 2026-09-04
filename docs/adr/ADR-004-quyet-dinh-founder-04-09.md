# ADR-004: Bốn quyết định của founder — 04/09/2026

- **Trạng thái**: đã chốt (3 mục) + 1 mục đang kiểm chứng lại
- **Ngày**: 2026-09-04
- **Người quyết**: founder

Ghi lại phản hồi trực tiếp của founder với 4 đề xuất lớn mà máy đưa ra ở [11-nhat-ky-quyet-dinh.md §8](../plan/11-nhat-ky-quyet-dinh.md).

## F-01 — Tên sản phẩm: **GIỮ `Teemi`** ✅

Bác đề xuất đổi sang "Chốt Sổ".

**Căn cứ của founder được hồ sơ ủng hộ:** lý do gốc để đổi tên là probe App Store (`teemi` → ra Temu). Nhưng ở hướng chat-card **không có store search**, nên rủi ro đó phần lớn biến mất — chính QĐ-41 đã tự ghi nhận đây là "điểm founder có quyền phản đối mạnh nhất".

**Hệ quả phải thi hành:** mọi tài liệu trong `docs/plan/` đang viết "Chốt Sổ" ở tiêu đề, trong caption card, trong 8 script Bước 0, và domain `chotso.vn`. Phải đổi về `Teemi` / `teemi.vn`. Chi phí hôm nay ≈ 0 pw.

⚠️ Tên bảng CSDL `book` / `book_id` / `book_day` (QĐ-02b) **giữ nguyên** — nó là thuật ngữ kỹ thuật tiếng Anh, không phải tên thương hiệu.

## F-02 — Cơ chế boss: **CHƯA QUYẾT, để Bước 0 trả lời** ⏳

Không duyệt việc xoá hẳn boss, cũng không giữ nguyên.

**Hệ quả thiết kế:** Bước 0 (14 ngày chạy tay) phải chạy **không boss** và đo xem nhóm có tự tạo nhịp không. Thiết kế MVP phải **để ngỏ cả hai đường** — không được khoá cứng vào kiến trúc không-boss.

**Nhưng một điều đã được chứng minh và không phụ thuộc quyết định này:** boss **hồi máu** là lỗi toán học (ở q=0,45, n=5 → kỳ vọng 2,75 người miss/ngày → HP sau 7 ngày cao hơn ngày đầu). Nếu sau Bước 0 founder chọn giữ boss thì phải là **HP đơn điệu giảm**, không bao giờ hồi. Đây không phải lựa chọn, là số học.

**Điều kiện đóng:** kết quả Bước 0, cổng 22/09/2026.

## F-03 — Hướng sản phẩm: **ĐANG KIỂM CHỨNG LẠI** 🔄

Founder phản bác hướng chat-native:
> *"chưa hiểu tại sao lại qua zalo, và zalo thì sử dụng nền tảng kiểu gì má, người trẻ cũng đâu dùng zalo như một mạng xã hội có thể định hướng theo app nhỉ, nghiên cứu kiểu gì thế"*

**Hai lỗi của hồ sơ đã được xác nhận ngay khi kiểm tra:**

1. **Hồ sơ đóng đinh vào "Zalo" mà không có lý do kỹ thuật.** Cơ chế thật là "sinh ảnh card + link, người dùng tự dán vào nhóm chat" — không dùng API Zalo (option-D §30: Mini App không biết nó ở nhóm nào; §402: bot trong nhóm không khả thi). Dán vào Messenger chạy y hệt. Lẽ ra phải viết là "nhóm chat bất kỳ".

2. **Con số 98% bị dùng sai.** Đó là tỉ lệ toàn dân dùng Zalo hằng tuần, không phải tỉ lệ Gen Z dùng Zalo cho nhóm bạn thân. Và chính `r02` dòng 116 đã ghi Gen Z dùng Zalo cho *"nhu cầu liên lạc thực dụng"* — bằng chứng chống lại giả định phân phối, nằm sẵn trong hồ sơ mà tầng lập kế hoạch bỏ qua.

**Đang chạy:** workflow kiểm chứng đối kháng — hành vi nhắn tin của nhóm bạn Gen Z VN · cơ chế card+link trên Messenger/Instagram/Discord/Telegram · định giá lại hướng app ở 20h/tuần · một agent chuyên soi thiên lệch của judge panel trước.

**Chưa được coi là đã quyết cho tới khi có kết quả đó.**

## F-04 — Ngân sách thời gian: **20 giờ/tuần** ✅

**Hệ quả bắt buộc:** kill gate cũ ghi *">15 giờ/tuần ⇒ dừng"* — **phải sửa lên 20 giờ/tuần** ở [01-dinh-nghia-san-pham-v2.md](../plan/01-dinh-nghia-san-pham-v2.md) §9 và mọi chỗ khác, nếu không kế hoạch vi phạm điều kiện dừng của chính nó từ ngày đầu.

**Quy đổi chuẩn:** 20 giờ/tuần ⇒ ~13 giờ code/tuần (phần còn lại là vận hành, họp, giấy tờ). 1 pw = 40 giờ ⇒ **1 pw ≈ 3,1 tuần lịch**.

| Hướng | pw | Tuần lịch |
|---|---|---|
| App native, bỏ boss | 11,0 | ~34 |
| App native, giữ boss | 12,25 | ~38 |
| Web + card | 6,5 | ~20 |

⚠️ **Lá chắn chống kiệt sức vừa bị gỡ.** Rủi ro "founder cạn kiệt" được xếp hạng 2 (~40–50%) trong bốn thứ giết dự án. Kill gate 15 giờ là biện pháp phòng duy nhất. Chọn 20 giờ ⇒ cần một biện pháp thay thế: đề xuất **trần vận hành cứng 10 giờ/tuần** cho phần không phải code, và một mốc soát lại thật vào 31/03/2027.

## Khi nào xem lại

F-01, F-04: khi có lý do mới. F-02: cổng 22/09/2026. F-03: khi workflow kiểm chứng xong.
