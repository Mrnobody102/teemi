# Kết luận vòng kiểm chứng — 04/09/2026

> Founder phản bác giả định phân phối qua Zalo. Vòng này chạy 4 agent thu bằng chứng độc lập.
> Phần chấm điểm bị dừng giữa chừng (hết ngân sách token) — bằng chứng đã đủ để quyết, chỉ thiếu xếp hạng lại.
> Bằng chứng đầy đủ: `e01`…`e04` trong thư mục này.

## Phán quyết một dòng

**Founder bắt đúng lỗi lập luận, sai về số liệu — và cả hai đều quan trọng.** Câu hỏi "Zalo hay Messenger" là câu hỏi sai. Câu hỏi "app hay web" cũng là câu hỏi sai. Câu hỏi đúng là **thứ tự**, vì 65% công dùng chung.

## 1. Zalo — bạn sai về số, đúng về lập luận

| Chỉ số | Số thật | Nguồn |
|---|---|---|
| Người ≤26 tuổi VN dùng Zalo hằng tuần | **96%** | Q&Me T3/2026 |
| Nền tảng nhắn tin ưa thích nhất của Gen Z | **Zalo 41%** · Messenger 27% · Facebook 23% | Decision Lab Q4/2025, n=1.351 (Gen Z n=446) |
| Xu hướng Gen Z 3 kỳ đo | 37% → 40% → **41%** (tăng) | Decision Lab |

**Nhưng lỗi lập luận là thật:** hồ sơ nhảy từ *"ai cũng cài Zalo"* sang *"nhóm bạn thân sinh hoạt trong Zalo"* mà không có bằng chứng bắc cầu. Bằng chứng định tính ngược lại:

- Q&Me nguyên văn: *"Zalo is used for family, business while Messenger is used for friends."*
- Thuật ngữ **"Zalophobia"** — lo âu khi nghe thông báo Zalo vì nó báo hiệu việc của sếp.
- Decision Lab giải thích Zalo mạnh lên ở Gen Z vì *"thế hệ này bắt đầu gia nhập thị trường lao động"* — mạnh vì đi làm, không phải vì vui.
- Gradient thế hệ: Zalo dẫn Messenger **+45đ ở Gen X, +47đ ở Gen Y, chỉ +14đ ở Gen Z**.

**Hành động:** xoá chữ "Zalo" khỏi mọi câu định vị. Câu đúng: *"dán vào nhóm chat nào cũng được"*. Nếu buộc ưu tiên kênh cho khâu mời, ưu tiên theo **tuổi nhóm seed**: 16–22 → Messenger trước; 23–28 → Zalo trước.

## 2. Hai chỗ nghiên cứu cũ SAI

| Khẳng định cũ | Thực tế |
|---|---|
| `option-D §30`: "Zalo Mini App không biết nó ở nhóm nào" | **SAI.** `zmp-sdk@2.53.0` có `getContextAsync()` trả `{type:'GROUP_CHAT', id}` |
| `option-D §6`: "Zalo là app duy nhất 100% ROM Việt whitelist" | **SAI.** Xiaomi/MIUI/HyperOS vẫn chặn thông báo Zalo |
| `r02`: "98% Gen Z dùng Zalo" dùng để suy ra hành vi nhóm bạn | **Chỉ số reach, không phải hành vi.** Trong nhóm MXH, Zalo chỉ chiếm 16% thời lượng (sau Facebook 25%, TikTok 19%) |
| `01-v2`, `03`, `07`: ">85% Android VN" gắn nhãn `[FACT]` | **SAI.** 57,33% (StatCounter T8/2026) — xem [ADR-003](../adr/ADR-003-thi-phan-android-vn.md) |

## 3. Hướng app — hai phát hiện ngược nhau

**Chống:** ước lượng cũ **không bị thổi phồng, mà ước THIẾU 35–45%**. Con số trung thực **14,3 pw**.

| Mốc | pw | Ở 13 giờ code/tuần |
|---|---|---|
| Bản chạy trên máy thật (S1) | 9,4 | **29–36 tuần** |
| Bản lên store công khai | 14,3 | **44–55 tuần** |
| Có widget | ~16 | 50–62 tuần |

Đường tắt "làm Android trước cho rẻ" **không tồn tại**: P(cả 5 người trong nhóm đều dùng Android) = 0,6038⁵ = **8%**. Sản phẩm mà đơn vị là NHÓM buộc phải ship 2 nền tảng từ ngày 1.

**Ủng hộ:** so sánh 6,5 vs 11,0 pw là **so hai sản phẩm khác nhau**. Chuẩn hoá cùng phạm vi thì hướng D ≈ **9,9 pw** — chênh thật chỉ **1,1–2,4 pw** (3,4–7,4 tuần), không phải 4,5 pw. Judge panel quyết trên một biên thắng 4% bằng chỉ số acquisition, trong khi dự án tự tuyên bố đơn vị đo là **retention nhóm** — và trên trục đó, bằng chứng VN duy nhất đã kiểm chứng (Locket = widget) chỉ tồn tại ở phía app.

**Và 65% công của bản web (≈4,6/7,1 pw: schema, backend, storage adapter, render card, analytics, pháp lý, nội dung) dùng lại NGUYÊN VẸN cho bản app.** Làm web trước không phải đi đường vòng.

## 4. Phát hiện kỹ thuật quan trọng nhất

**Nút chia sẻ gãy trên MỌI in-app webview Android** — Zalo, Messenger, Instagram, Discord, Telegram như nhau, vì Android WebView không hỗ trợ `navigator.share`. **Lỗi của Android, không phải của Zalo.** Đổi kênh không cứu được.

Hệ quả: ô test quyết định trong Bước 0 **không phải** "nhóm có thích không" mà là ô kỹ thuật — **`<input type=file>` trong webview trên máy Xiaomi/Oppo có mở được thư viện ảnh không.** Tốn 4 giờ, làm TRƯỚC khi viết dòng code nào. Nếu fail, bước 3 của core loop chết và MVP buộc phải là Zalo Mini App (dùng `chooseImage`), +2,0 pw + vòng kiểm duyệt 3–5 ngày.

Thêm: OG preview bị crop về **1,91:1** trên cả 5 nền tảng ⇒ phải render **2 ảnh** (4:5 để dán + 1200×630 để làm preview), không phải 1.

## 5. Điều không hướng nào thoát được

Từ 23/09 → 02/12/2026 chỉ chứa **~3,25 pw** — **nhỏ hơn cả trần MVP-0 (3,5 pw)**. Không phương án nào lọt mốc beta 02/12/2026.

**Câu hỏi thật không phải "app hay web", mà là:** *có sẵn sàng dời beta sang ~03–04/2027 để đổi lấy widget + push riêng + danh tính bền không?*

## 6. Khuyến nghị — chốt THỨ TỰ, không chốt nhị phân

| Bước | Việc | Chi phí | Cổng mở bước sau |
|---|---|---|---|
| **0** | Bước 0 thủ công 14 ngày, **không code** | 0 pw | ≥50% nhóm còn ≥3 người ở D14 |
| **1** | Bản web ~7,1 pw (22–27 tuần) | 4,6 pw trong đó dùng lại được cho app | `sổ-D28 ≥ 20%` và `q ≥ 0,40` trên ≥15 nhóm |
| **2** | Bọc Capacitor thành app | 3,2–3,7 pw | `sổ-D28 ≥ 35%` |
| **3** | Mở khoá widget | 1,9 pw | — |

**Ba ràng buộc phải nhận ngay từ commit đầu, dù đi đường nào:**
1. Mọi hằng số cơ chế nằm trong **remote config đọc từ DB** — để câu hỏi boss còn sửa được mà không cần vòng review.
2. **StorageAdapter tách khỏi nhà cung cấp.**
3. **Danh tính KHÔNG dựa vào `localStorage` đơn thuần** — dùng magic link hoặc `getUserID` của Zalo Mini App. Đây là lỗ hổng thật của hướng web mà founder đã trực giác đúng: device token mất khi đổi máy, xoá dữ liệu duyệt, hoặc mở link bằng webview lần này và Chrome lần sau. Với sản phẩm mà tài sản là ảnh tích luỹ nhiều tháng, **mất danh tính = mất toàn bộ giá trị**.

**Đặt trần theo NGÀY LỊCH, không theo pw:** *"bản web phải có 5 nhóm bạn dùng thật trước 31/03/2027"*. Trần pw tự lừa mình được bằng cách định nghĩa lại pw; ngày lịch thì không.

## 7. Nếu vẫn chọn làm app ngay

Hợp lệ — nhưng phải biết giá và phải mở lại một quyết định:
- **Teemi-min lai** (native client + widget Android + card chia sẻ + trang web public đọc-được) ≈ **8,4 pw / 26 tuần**; tính cả widget iOS: 9,4–10,0 pw / 29–31 tuần.
- **Cold start tệ hơn 7,1 lần.** Bin(6, p), P(X≥2): hướng web 20,5% vs app 2,9%. Ở 30 người khởi tạo: web ra ~6 sổ sống, app ra ~0,9 sổ. Đây là lý lẽ mạnh nhất của hướng web và nó đúng.
- **Phải mở lại F-01 (tên).** Cơ sở giữ `Teemi` nguyên văn là *"ở hướng chat-card không có store search"*. Có store thì probe 28/08 (gõ `teemi` → Temu #1 ở cả VN lẫn US) quay lại nguyên vẹn.
- App **không** giảm rủi ro pháp lý: NĐ 147/2024 Điều 3 ghi *"trên nền tảng trang thông tin điện tử **hoặc** ứng dụng mạng"* — bao trùm cả hai. App còn **thêm** Apple 1.2 (đủ bộ filter+report+block+contact+EULA mới được phát hành) và 1.1.1 mean-spirited/bullying — đe doạ trực tiếp cơ chế cà khịa.

## 8. Việc phải làm, đúng dù chọn hướng nào

1. **Bước 0 thủ công 14 ngày, không code** — nó trả lời cả câu hỏi boss (F-02 đang để ngỏ) lẫn câu hỏi hướng đi. Nếu trượt cổng D14, tiết kiệm 9,4–16,2 pw.
2. **Thêm nhóm Messenger chạy song song** trong cùng 14 ngày, đo cùng chỉ số, và hỏi thẳng: *"nếu tao gửi link này, mày sẽ dán vào nhóm nào?"* — chi phí thêm: 0 giờ code, chỉ thêm 1 nhóm.
3. **Test `<input type=file>` trong webview trên Xiaomi/Oppo** — 4 giờ, chặn mọi quyết định kiến trúc.
4. **Gửi email 7 câu cho luật sư** (5–15 triệu, một lần) — đã trễ hạn.
5. **Xoá 3 lý lẽ đã hỏng khỏi hồ sơ:** ">85% Android" (ADR-003 thu hồi) · "98% Gen Z dùng Zalo cho nhóm bạn" (thu hồi ở đây) · "hướng D né được pháp lý" (chính `option-D §7` bác).
