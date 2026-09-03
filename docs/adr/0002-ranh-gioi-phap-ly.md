# ADR-002: Ranh giới pháp lý — tám giới hạn thiết kế và bảy điều kiện G1

- **Trạng thái**: đã chốt · **Ngày**: 2026-08-28 · **Người quyết**: founder
- **Miễn trừ**: đây là ghi chép quyết định, **không phải tư vấn pháp lý**. Bảy câu ở §4 bắt buộc có ý kiến luật sư VN **bằng văn bản**.

## Bối cảnh

`05-lo-trinh-phap-ly.md` kết luận: **Chốt Sổ gần như chắc chắn là "mạng xã hội"** theo Điều 3 NĐ 147/2024 (4/5 dấu hiệu). Câu hỏi là **khi nào**, không phải **có hay không**. Vì vậy mọi giới hạn thiết kế dưới đây tồn tại để **ở dưới ngưỡng bằng thiết kế, không bằng may mắn** — và để khi cơ quan quản lý hỏi "tại sao anh làm thế này", câu trả lời là _"tôi đã cân nhắc, và đây là ghi chép có ngày tháng"_ chứ không phải _"tôi may mắn làm đúng"_.

## 1. Tám giới hạn thiết kế (L1–L8) — giữ vĩnh viễn

| # | Giới hạn | Giữ được điều gì |
|---|---|---|
| L1 | **Không feed công khai, không trang khám phá, không tìm kiếm người dùng** | Dấu hiệu MXH thứ 5 |
| L2 | **Không chat, không bình luận, không caption trên proof** | Loại NĐ 163/2024 (OTT viễn thông) khỏi phạm vi |
| L3 | **Không kết bạn giữa các sổ, không profile công khai** | Nhóm kín ≤8 người, không phải mạng |
| L4 | **Không livestream, vĩnh viễn** | Livestream dành riêng cho MXH đã có **Giấy phép** |
| L5 | **Không vật phẩm ảo, không tiền tệ trong sản phẩm, không gacha, không cửa hàng** | NĐ 174/2026: DN cho mua bán vật phẩm ảo **60–80 triệu**; quy đổi ra tiền/thẻ/hiện vật **170–200 triệu** |
| L6 | **Không boss / HP / damage / điểm cá nhân / leaderboard** | Rủi ro bị xếp là **trò chơi điện tử G1** (§2) |
| L7 | **Không lưu `preset_id` per-user; `goal_text` là text tự do, không index, không `GROUP BY`** | Một taxonomy sức khoẻ gắn với từng người là đường ngắn nhất mất miễn trừ Điều 38.2 Luật 91/2025 |
| L8 | **Không lưu ngày sinh — chỉ cờ boolean `is_16_plus` + `age_gate_at`** | Nguyên tắc tối thiểu hoá dữ liệu ở đúng nhóm người dùng nhạy cảm nhất |

## 2. Bảy điều kiện giữ rủi ro G1 ở mức thấp

Điều 37 khoản 1 NĐ 147/2024 định nghĩa G1 = _"tương tác **đồng thời** giữa nhiều người chơi qua hệ thống **máy chủ trò chơi**"_. Chốt Sổ v2 hụt 2/4 dấu hiệu, và cả hai phải được giữ:

1. Không thắng/thua · 2. Không điểm cá nhân · 3. Không vật phẩm · 4. Không leaderboard · 5. **Rollover batch 04:05, không realtime** — đây là thứ phá vế "đồng thời" · 6. Không boss/HP/damage · 7. Không giải đấu, không mùa giải.

> **Mục 1 §6 của v2 ("boss opt-in ở v1.2") bị khoá thêm bằng một điều kiện pháp lý**, không chỉ bằng `sổ-D28`. Điều kiện đó là: **có ý kiến luật sư bằng văn bản rằng cơ chế đó không kích hoạt Điều 37 khoản 1.**

## 3. Ngưỡng và đèn — hai counter, không phải một con số

| Ngưỡng luật | Giá trị | 🟡 Đèn vàng — khởi động hồ sơ Giấy phép MXH | 🔴 Đèn đỏ — dừng nhận sổ mới **ngay trong ngày** |
|---|---|---|---|
| **Lượt truy cập/tháng** | 10.000 | **6.000** ≈ 60 sổ | **8.500** ≈ 85 sổ |
| Người dùng thường xuyên/tháng | 1.000 | **600** ≈ 150 sổ | **850** ≈ 212 sổ |

**Ngưỡng bind là hàng đầu tiên** — đây là đính chính quan trọng nhất so với v2 §9, thứ đặt một đèn duy nhất ở "700 người dùng thường xuyên" và vì thế **báo động muộn ~2,5 lần**.

- **Trần beta hành chính: 60 sổ.** Không được nới bằng cách hỏi lại. 60 sổ an toàn dưới đèn đỏ ở cả A=4,0 lẫn A=5.
- **Định nghĩa đếm tạm dùng** (cho tới khi luật sư trả lời câu 1b): `monthly_active_persons` = số person khác nhau có ≥1 tấm trong 30 ngày · `monthly_visits` = số phiên khác nhau (session mới sau 30 phút không hoạt động) chạm bất kỳ route nào, kể cả trang public. **Đếm rộng, báo động sớm** — sai theo hướng an toàn.
- ⚠️ **Cả hai ngưỡng luật đều CHƯA trích được nguyên văn từ Công báo.** `05` §12 mục 1 ghi thẳng: nhất quán qua VietnamNet / Vạn Luật / Thư viện Pháp luật, nhưng chưa có văn bản gốc. Đây là **trục của toàn bộ lộ trình pháp lý** và nó đang đứng trên nguồn thứ cấp.

## 4. 🔴 Doanh thu bằng 0 tuyệt đối cho tới khi có câu trả lời

**`05` §0 kết luận 3:** NĐ 147/2024 dành livestream **và hoạt động phát sinh doanh thu** cho MXH đã được cấp **Giấy phép**. Nếu chỉ có **Giấy xác nhận thông báo** thì **không được thu tiền — kể cả quảng cáo, kể cả donate, kể cả bán một cuốn sổ in.**

**Hệ quả đã áp:**
- `10` §4 **T4 đổi từ pre-order thật (30 suất × 399k, chuyển khoản tay) sang fake pre-order** — thu **cam kết + số điện thoại**, **không nhận một đồng nào**.
- `10` §7 **G4 tách thành hai nhánh**: nhánh (i) nếu luật sư nói được thu, nhánh (ii) — **mặc định cho tới khi có văn bản** — dùng **ý định trả tiền** làm tiêu chí, không dùng tiền.
- Kill gate **G3 (31/03/2027) bỏ vế "doanh thu vẫn bằng 0"**: nếu pháp lý cấm thu, doanh thu 0 là **hệ quả pháp lý, không phải tín hiệu thị trường**. Dùng nó làm tiêu chí đi/dừng là tự lừa mình.

## 5. Bảy câu gửi luật sư — một email, một lần trả phí

Danh sách **hợp nhất**, thay thế mọi danh sách rời ở `01` §12 (1 câu), `05` §11 bản trước (3 câu), `04` §8 (3 câu), `03` §10 (1 câu), `_issues-digest.md` #20 (2 câu Điều 32 BLDS **đã bị rơi khỏi mọi danh sách trước đó**). Nguyên văn ở `05` §11.

| # | Chủ đề | Quyết định gì | Hạn |
|---|---|---|---|
| 1 | Có phải MXH không; cách đo "lượt truy cập" và "người dùng thường xuyên" | Trần beta là 60 hay 600 sổ (chênh **hơn 10 lần**) | trước 23/09 |
| 2 | Điều 27 k.3 a/b có áp cho tier thông báo không | SMS OTP $0,2852/lần quay lại mô hình **sớm hơn ~4 lần** | trước 23/09 |
| 3 | **Được phát sinh doanh thu ở tier thông báo không** | **Toàn bộ §3–§7 của `10`** có tồn tại không | **trước 20/12/2026** |
| 4 | Điều 32 BLDS — ảnh của người **đã rời** tiếp tục hiển thị cho 4 người còn lại | Cơ chế `keep_proofs_on_leave` có hợp pháp không | trước beta |
| 5 | Điều 32 BLDS — card/bản in chứa ảnh 4–8 người | Card, Asset 2/3, và **cả hai phương án monetization** | trước beta |
| 6 | Cờ `is_16_plus` tự khai có đủ không; `proof_total` không giảm khi xoá ảnh có vi phạm quyền xoá không | Age gate và một con số hiển thị trung tâm | trước beta |
| 7 | Máy chủ có bắt buộc đặt tại VN ở tier thông báo không | Kéo mốc "lập TNHH" từ ngưỡng người dùng về **ngày 0** | trước 23/09 |

**Ngân sách: 5–15 triệu** cho 7 câu (không phải 3–5 triệu cho 1 câu). **Lấy 3 báo giá thật trước 10/09** để thay dải rộng 5 lần này bằng một con số.

## 6. Nghĩa vụ an toàn — công cụ, không phải cố gắng

| Nghĩa vụ | Cách đáp | Căn cứ |
|---|---|---|
| Phát hiện / ngăn chặn / **gỡ bỏ kịp thời** | **Auto-hide TOÀN CỤC ngay ở report đầu tiên** (`proof.hidden_at = now()`, trigger DB). Founder xử trong 48h, khôi phục nếu report sai. **KHÔNG dùng flag client-side chỉ ẩn với người báo cáo** — thiết kế đó để nội dung vi phạm hiển thị với 4 người còn lại tối đa 48 giờ | Luật ANM 116/2025 Đ.16 k.3 |
| **SLA kép** | **48 giờ** — khiếu nại người dùng (cam kết tự đặt) · **24 giờ, khẩn cấp 6 giờ** — yêu cầu cơ quan nhà nước (**luật định, không thương lượng**). Trang chính sách in **cả hai**. Giữ được bằng **công cụ**: công tắc `remote_config['service.paused']` + script khoá một sổ khẩn cấp, cả hai trong `RUNBOOK.md` | Luật ANM 116/2025 |
| Lưu vết ≥2 năm | Bảng **`audit_log`** từ migration đầu: IP **truncated** (/24, /48), login/logout, moderation, export, xoá. `retain_until` = 25 tháng | `05` GIAI ĐOẠN 2 |
| Nội địa hoá dữ liệu | 4 việc chuẩn bị (~2 giờ) ở dòng code đầu; `StorageAdapter` giữ giá thoát ≤1 pw | NĐ 53/2022 |
| Quyền truy cập / bản sao dữ liệu | **Script export ZIP chạy tay** (0,10 pw). Không có nó thì lời hứa "báo trước ≥14 ngày và cho tải ảnh về" trong ToS là lời hứa suông — và `10` §3.1 đang định **bán** đúng quyền luật định này | Luật 91/2025 |
| Người dưới 16 | P1: cờ tự khai + chặn mở sổ + ToS ghi "dành cho người ≥16". Gọi đúng tên: **hàng rào giấy tờ, không phải hàng rào kỹ thuật** | Luật ANM 116/2025 Đ.16 k.2 |
| **Bus factor = 1 trong 11 ngày Tết** | `RUNBOOK.md` phải có **tên một người thứ hai** trước beta, và một buổi diễn tập **trước 03/02/2027** | SLA 24h/6h không nghỉ Tết |

## 7. Bước 0 — nghĩa vụ dữ liệu của chính thí nghiệm

Bước 0 thu ảnh hằng ngày của **~35 người thật** vào Google Drive của founder qua Google Form, từ **08/09/2026**. Lập luận "không có hệ thống thông tin nào của mình" phủ được cái Google Sheet, **không phủ được kho ảnh trên Drive**.

**Bắt buộc, chi phí ≈ 0, hạn 07/09:**
1. Một đoạn thông báo dữ liệu trong script tin nhắn đầu tiên: **thu gì · để làm gì · lưu ở đâu · xoá khi nào (22/09/2026) · rút lại thế nào**.
2. Google Sheet **pseudonymised**: định danh là `S03-M2`, **không tên thật, không SĐT, không cột ảnh**.
3. **Xoá toàn bộ ảnh trên Drive và Sheet sau 22/09/2026** — đặt lịch nhắc, không dựa vào trí nhớ.
4. Shortlink đo H1 dùng **Short.io gói free, KHÔNG tự host** — giữ nguyên lập luận "không máy chủ, không dịch vụ".

## Khi nào xem lại

- **Ngay khi có bất kỳ câu trả lời nào trong 7 câu** — mỗi câu mở hoặc khoá một phần của kế hoạch.
- **Khi `monthly_visits` chạm 6.000** — bắt đầu soạn hồ sơ, đừng chờ 8.500.
- **Trước 20/12/2026** — nếu chưa có trả lời câu 3, T4 phải giữ nguyên dạng fake pre-order.
