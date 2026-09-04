# 05 — LỘ TRÌNH PHÁP LÝ & TUÂN THỦ THEO CỘT MỐC

_Sản phẩm: **Chốt Sổ** (`chotso.vn`) — web app, sổ kín ≤8 người, nộp 1 tấm ảnh/người/ngày, phân phối qua nhóm Zalo. Viết 03/09/2026. Căn cứ: `01-dinh-nghia-san-pham-v2.md` + `research/r06-legal-compliance.md`, đã kiểm chứng lại bằng WebSearch ngày 03/09/2026._

> ## ⚖️ ĐÃ ĐỐI CHIẾU BẢNG PHÁN QUYẾT TRỌNG TÀI (2026-09-03)
>
> Toàn bộ tài liệu này **đã được đối chiếu với bảng phán quyết trọng tài ngày 2026-09-03**. **Mọi hằng số** (ngưỡng, hệ số quy đổi, ngày tháng, số pw, SLA, TTL) trong file này lấy từ **`/home/huypq/teemi/docs/plan/_rulings.md`** — đó là nguồn chân lý duy nhất khi có bất đồng giữa 10 tài liệu.
>
> Các hằng số then chốt đã áp dụng ở file này: **A = 4,0 người/sổ** (A70) · **25 lượt/người/tháng** `[ước lượng]` (A72) · **hai counter cảnh báo pháp lý** thay con số 700 (A54–A56) · **SLA kép 48h / 24h–6h** (A59) · **auto-hide toàn cục ở report đầu tiên** (A60) · **`is_16_plus` + `age_gate_at`, không lưu năm sinh** (A47) · **thumbnail vĩnh viễn, không xoá** (A38) · **7 câu luật sư, 5–15 triệu** (A65–A66) · **doanh thu 0đ tuyệt đối 6 tháng đầu** (A62) · **trần vận hành 35 sổ ≠ trần hành chính 60 sổ** (A92–A93) · **một file ADR: `docs/adr/ADR-000-bat-bien.md`** (A103).
>
> `05` là **file chủ quyền về PHÁP LÝ** (nguyên tắc 2 của bảng phán quyết). Nó thắng ở C01, C04, C18, C23, C24, C40, C62 — nhưng **thua ở C03 (nút thả tim bị cắt), C28 (A = 4,0 thay vì 5), C16/C38 (TTL thumbnail), S22 (trần 60 sổ không được nới)**, và phần này đã sửa theo.
>
> **Vòng soát lại 04/09/2026 đã thi hành nốt:** §3 dấu hiệu 4 **bỏ nút thả tim** (C03/S01) ⇒ kết luận đổi từ "4/5 dấu hiệu" sang **"3/5 rõ + 1 tranh cãi + 1 không"** · §8.1 mục 5 ghi đủ **TTL thumbnail vĩnh viễn + cold storage 180 ngày + `archived` 30 ngày báo trước** (A38/C38) · §8.1 mục 7 + §8.2 điều 6 chốt **export = phiên bản tay, 0 pw, SLA 10 ngày, `RUNBOOK.md`** (D-06) · §2 ghi **định nghĩa tạm của hai counter** (A56) · mọi tham chiếu **ADR-001/ADR-002 → `ADR-000-bat-bien.md`** (A103/S21) · chỉ số đổi tên **`group-D28` → `sổ-D28`** (A23) · quy đổi người ở GIAI ĐOẠN 2/3 và ở phần "Bất đồng" tính lại theo **A = 4,0** · thêm mục **"Đã cắt"** ở cuối file.
>
> **Sổ cái pw:** mọi khoản pw nêu trong file này (`audit_log` +0,15 · hai counter +0,05 · export tay 0,00) **chỉ có hiệu lực khi đã ghi vào `docs/adr/pw-ledger.md`** — nơi DUY NHẤT, một khoản cắt chỉ được chi MỘT LẦN (A87).

> **Đây không phải phụ lục.** Ba trong bốn quyết định lớn nhất của v2 — không lên store, không SMS OTP, không boss — đều là quyết định pháp lý đội lốt quyết định sản phẩm. Nếu một trong ba cái đó sai về luật, `6,5 pw` và **20 tuần lịch** đi theo nó (6,5 pw × 3,1 tuần/pw ở tốc độ 13 giờ code/tuần — A80/A82/A83; con số "10 tuần" của v2 chỉ đúng nếu founder làm 40 giờ/tuần).
>
> **Miễn trừ trách nhiệm:** tài liệu này là chuẩn bị đầu vào cho luật sư, **không** phải tư vấn pháp lý. **Bảy** câu hỏi ở §11 (A65 — một email, một lần trả phí) bắt buộc có ý kiến luật sư VN **bằng văn bản** trước khi (a) nhận sổ thứ 31, (b) thu một đồng nào, (c) mở lại bất kỳ mục nào trong §6 của v2.

---

## 0. NĂM KẾT LUẬN, ĐỌC TRƯỚC

| # | Kết luận | Hệ quả trực tiếp |
|---|---|---|
| 1 | **Chốt Sổ gần như chắc chắn là "mạng xã hội"** theo Điều 3 NĐ 147/2024. **3/5 dấu hiệu CÓ rõ ràng** (hệ thống thông tin · cung cấp thông tin · chia sẻ thông tin với nhau) **+ 1 tranh cãi** (tương tác — yếu đi sau khi nút thả tim bị CẮT, C03/S01) **+ 1 KHÔNG** (trao đổi). Ba dấu hiệu rõ đã đủ để kết luận. "Nhóm kín ≤8 người" không phải ngoại lệ trong luật — luật không có chữ nào về quy mô nhóm | Câu hỏi là **khi nào**, không phải **có hay không**. ⚠️ **Không được dùng việc cắt nút tim làm lập luận "không còn là MXH"** — xem §3 |
| 2 | **Ngưỡng bind sớm hơn v2 tưởng ~2,5 lần.** v2 §9 đặt đèn cảnh báo ở 700 *người dùng thường xuyên/tháng* — ở hệ số chuẩn **A = 4,0** (A70) thì 700 người ≈ **175 sổ**. Nhưng ngưỡng là **OR**: `10.000 lượt truy cập/tháng` **hoặc** `1.000 người dùng thường xuyên/tháng`. Core loop mở app hằng ngày ⇒ mỗi người sinh 16–30 lượt/tháng, mốc thận trọng **25** `[ước lượng]` ⇒ **ngưỡng luật 10.000 lượt chạm ở ~100 sổ; đèn vàng 6.000 lượt rơi ở 60 sổ; đèn đỏ 8.500 lượt ở 85 sổ**. Con số 700 báo động **muộn ~2,5 lần** | 🔴 **Con số 700 bị BÁC hoàn toàn (C04/A54).** Thay bằng **HAI counter**: `monthly_visits` vàng **6.000** / đỏ **8.500** · `monthly_active_persons` vàng **600** / đỏ **850**. **Trần hành chính của beta: 60 sổ = 240 người active** — kế hoạch beta duy nhất (12 sổ đợt 1 từ 02/12, ≤30 sổ đợt 2 từ tuần 15) nằm ở **20–50% trần**, còn đệm thật |
| 3 | 🔴 **Nếu là MXH mà chỉ có Giấy xác nhận thông báo thì KHÔNG được thu tiền.** NĐ 147/2024 dành livestream và **hoạt động phát sinh doanh thu** cho MXH đã được cấp **Giấy phép** ✅ **[KIỂM CHỨNG 04/09/2026 — ĐÃ TRÍCH ĐƯỢC SỐ ĐIỀU: NĐ 147/2024 **Điều 24 khoản 6 điểm d**]** — chỉ MXH *"đã được Bộ TT&TT cấp Giấy phép cung cấp dịch vụ mạng xã hội"* mới được cung cấp **livestream** hoặc **hoạt động phát sinh doanh thu dưới mọi hình thức**. Nguồn: `11` §6 #2. Vẫn là nguồn thứ cấp có trích số điều ⇒ luật sư chỉ cần **xác nhận cách hiểu**, không phải tra cứu | Toàn bộ §5 của kế hoạch monetization (kể cả quảng cáo kiểu Locket) bị khoá sau một thủ tục 3–6 tháng cần pháp nhân VN. **Đây là phát hiện nặng nhất của tài liệu này** |
| 4 | **Rủi ro G1 của v2 đã về mức thấp, và đó là thành quả của thiết kế chứ không phải may mắn.** G1 (Điều 37 khoản 1 NĐ 147/2024) = "tương tác **đồng thời** giữa nhiều người chơi qua hệ thống **máy chủ trò chơi**". Chốt Sổ v2 hụt 2/4 dấu hiệu: không phải trò chơi (không thắng/thua, không điểm cá nhân, không vật phẩm) và rollover batch 04:00 phá vế "đồng thời" | Giới hạn phải giữ vĩnh viễn: không boss/HP/damage/vật phẩm/gacha/leaderboard. **Mục 1 §6 của v2 (boss opt-in v1.2) phải bị khoá thêm bằng một điều kiện pháp lý, không chỉ `sổ-D28`** |
| 5 | 🟠 **Miễn trừ startup 5 năm (Điều 38.2 Luật 91/2025) mong manh hơn v2 tuyên bố.** v2 §8 ghi "Giữ được". Nhưng Điều 4 NĐ 356/2025 liệt kê **"thông tin về đời sống riêng tư, bí mật cá nhân"** trong danh mục nhạy cảm — mục này rộng hơn "sức khoẻ" rất nhiều, và một ô `goal_text` tự viết + ảnh đời thường hằng ngày rơi thẳng vào vùng tranh cãi | Đừng cược vào miễn trừ. Tin tốt: mất miễn trừ = phải làm **DPIA + TIA + chỉ định người phụ trách**, tức ~2–3 ngày công giấy tờ/năm, **không phải một dự án**. Hạ nó từ "sống còn" xuống "chi phí đã biết" |

---

## 1. BẢN ĐỒ VĂN BẢN — TRẠNG THÁI KIỂM CHỨNG NGÀY 03/09/2026

| Văn bản | Hiệu lực | Đã xác minh lại? | Ảnh hưởng Chốt Sổ |
|---|---|---|---|
| **Luật BVDLCN 91/2025/QH15** | 01/01/2026 | ✅ Xác nhận (thông qua 26/6/2025, 5 chương 39 điều) | Toàn bộ nghĩa vụ dữ liệu cá nhân |
| **NĐ 356/2025/NĐ-CP** (ban hành 31/12/2025) | 01/01/2026 | ✅ Xác nhận (5 chương 42 điều), **thay thế NĐ 13/2023** | Danh mục dữ liệu nhạy cảm (Điều 4), thời hạn phản hồi |
| ~~NĐ 13/2023/NĐ-CP~~ | — | ✅ Xác nhận **đã bị thay thế** | Không dùng làm căn cứ nữa |
| **Luật ANM 116/2025/QH15** | **01/07/2026** | ✅ Xác nhận. Điều 16 khoản 2: trẻ em dùng dịch vụ GTGT trên mạng ⇒ cha mẹ đăng ký bằng thông tin của mình | Quyết định gate tuổi |
| **NĐ 147/2024/NĐ-CP** | 25/12/2024 | ✅ Xác nhận. Ngưỡng license/notification, Điều 27 khoản 3 (xác thực + lưu trữ), Điều 37 khoản 1 (G1) | Trục chính của tài liệu này |
| **NĐ 330/2026/NĐ-CP** | 19/08/2026 | ✅ Xác nhận. 4 chương 82 điều. **Điều 7 khoản 3: trần phạt lĩnh vực an ninh mạng 200 tr (tổ chức) / 100 tr (cá nhân)**; lĩnh vực BVDLCN có trần riêng 3 tỷ | Mức phạt |
| **NĐ 174/2026/NĐ-CP** | 01/07/2026 | ✅ Xác nhận. DN cho mua bán vật phẩm ảo: **60–80 triệu**; quy đổi ra tiền/thẻ/hiện vật: **170–200 triệu**; người chơi mua bán: 2–3 triệu | Lý do "không bao giờ có vật phẩm ảo" |
| **NĐ 53/2022/NĐ-CP** | 01/10/2022 | ✅ Xác nhận. 3 loại dữ liệu phải lưu trong nước; DN nước ngoài chỉ bị buộc khi **có yêu cầu bằng văn bản của Bộ Công an**, tối thiểu 24 tháng | Nội địa hoá |
| **NĐ 163/2024/NĐ-CP** (Luật Viễn thông) | OTT từ 01/01/2025 | ⚠️ Chưa kiểm chứng lại trong vòng này | Chỉ bật nếu Chốt Sổ có **chat** — v2 đã cắt chat ⇒ **coi như không áp** |

**Đính chính so với r06:** r06 ghi "phạt tới 3 tỷ, riêng xuyên biên giới tới 5% doanh thu" như một dòng. Kiểm chứng lại cho thấy cấu trúc chính xác hơn: **mua bán dữ liệu cá nhân → tới 10 lần khoản thu; chuyển dữ liệu xuyên biên giới → tới 5% doanh thu năm trước; nếu không có doanh thu năm trước hoặc mức tính theo doanh thu thấp hơn → áp trần 3 tỷ đồng.** Với Chốt Sổ (doanh thu 0), con số thực tế đáng sợ là **3 tỷ**, không phải "5% của 0".

---

## 2. BẢNG CỘT MỐC TUÂN THỦ

Đơn vị quy đổi dùng suốt bảng: **1 sổ = 4,0 người active** [CHỐT 2026-08-28, QĐ-10 / A70 — hệ số quy đổi DUY NHẤT của toàn bộ hồ sơ, nhãn **[ước lượng]** cho tới khi Bước 0 đo được `book_day.active_count` trung bình]; **1 người active sinh 16–30 lượt truy cập/tháng** [suy luận từ `q_c = 0,53` `[suy luận, chưa đo — A17]` × 30 ngày = 16 lượt tối thiểu, cộng lượt xem không nộp]. Lấy mốc thận trọng **25 lượt/người/tháng** `[ước lượng, ảnh hưởng 🔴 Rất cao — A72]`.

> **[CHỐT 2026-08-28 — QĐ-10] Vì sao 4,0 và không phải 5.** Bốn tài liệu dùng bốn hệ số (`03` §4b: 2,65 DAU/sổ ở A=5 · `10` §2.4: 4,0 · `09` §9.1: 3,6 · `05` bản trước: 5). Mọi bảng chi phí, mọi ngưỡng pháp lý, mọi bảng doanh thu đều nhân qua hệ số này, nên nó phải là **một số duy nhất**. Chốt **A = 4,0** vì nó khớp `10`, khớp khuyến nghị 4–6 của r01, và nằm giữa dải quan sát. Nhãn: **[ước lượng]**, thay bằng số đo thật sau Bước 0 (`book_day.active_count` trung bình). **Cảnh báo hướng lệch:** ở A = 5, cùng một số sổ sinh nhiều lượt hơn ⇒ đèn vàng rơi ở **48 sổ** thay vì 60. Vì vậy **trần beta hành chính chốt ở 60 sổ và không được nới bằng cách hỏi lại** — 60 sổ an toàn dưới đèn đỏ ở cả A=4 lẫn A=5.

| Số sổ | Người active (A=4,0) | Lượt truy cập/tháng (ở 25 lượt/người) | Vị trí so với ngưỡng luật |
|---|---|---|---|
| 8 (Bước 0, 08/09→21/09) | 32 | 800 | 8% ngưỡng |
| 12 (beta đợt 1, 02/12→29/12) | 48 | 1.200 | 12% ngưỡng |
| 30 (beta đợt 2, mở dần từ tuần 15) | 120 | 3.000 | **30% ngưỡng** |
| **35 — TRẦN VẬN HÀNH** (8,4 phút/sổ/tuần ⇒ 10 giờ/tuần, A92) | 140 | 3.500 | 35% ngưỡng — **trần thời gian của founder, chạm trước trần pháp lý** |
| **60 — TRẦN HÀNH CHÍNH (PHÁP LÝ)** | **240** | **6.000** | 🟠 **60% — đèn vàng: bắt đầu soạn hồ sơ Giấy phép MXH** (3–6 tháng, cần pháp nhân VN + người chịu trách nhiệm nội dung quốc tịch VN — A57). A93: đây là **trần không được chạm**, không phải mục tiêu |
| 85 | 340 | 8.500 | 🔴 **đèn đỏ — dừng nhận sổ mới ngay trong ngày** + cân nhắc bật phone OTP (A58) |
| 100 | 400 | 10.000 | 🔴 **CHẠM ngưỡng giấy phép** |
| 250 | 1.000 | 25.000 | Vượt cả hai ngưỡng |

> **HAI TRẦN KHÁC NHAU, KHÔNG ĐƯỢC TRỘN** [S22 / A92–A93]:
> · **Trần vận hành = 35 sổ sống cùng lúc** — dẫn xuất từ 8,4 phút/sổ/tuần trên trần 10 giờ/tuần (`09` §2.2, `[ước lượng]`). Vượt 3 tuần liên tiếp ⇒ **giảm số sổ, không giảm giấc ngủ**.
> · **Trần hành chính/pháp lý = 60 sổ** — điểm đèn vàng. Đây là **trần, không phải mục tiêu**, và **không được nới bằng cách hỏi lại**. Ở 60 sổ, giờ vận hành đã là 10 h/tuần ⇒ **không còn đệm nào cả**.
> · Con số điều khiển thật **không phải số sổ** mà là **hai counter đo trực tiếp** (A54–A56). Bảng quy đổi sổ↔lượt ở trên chỉ để lập kế hoạch, không để ra quyết định dừng.

### GIAI ĐOẠN 0 — Bước 0, 8 sổ (5 nhánh A + 3 nhánh B), không code, không máy chủ (08/09 → 21/09/2026)

| Nghĩa vụ | Căn cứ | Hành động cụ thể | Thời gian | Chi phí | Rủi ro nếu bỏ qua |
|---|---|---|---|---|---|
| **Không có nghĩa vụ MXH** — chưa cung cấp dịch vụ, chỉ dán ảnh Canva vào nhóm bạn | NĐ 147/2024 Đ.3 (không có "hệ thống thông tin" nào của mình) | Giữ nguyên: Canva + Zalo + Google Sheet | 0 | **0đ** | — |
| **Bảo vệ DLCN với chính Google Sheet của founder** | Luật 91/2025 Đ.9–11 | Sheet **8 cột** (A96: `q_c_roster · q_x_roster · q_c_sliding · q_x_sliding · roster_size · số người nộp · số XONG · số TOANG`), định danh **pseudonymised** dạng `S03-M2`, **không tên thật, không SĐT, không ảnh trong sheet**. **Xoá sheet sau 22/09** | 20 phút | **0đ** | Founder tự tạo ra một cơ sở dữ liệu cá nhân không có cơ sở pháp lý — vô lý vì nó **miễn phí để tránh** |
| 🔴 **Kho ảnh Bước 0 trên Google Drive** — nghĩa vụ THẬT, không được coi là "chưa có hệ thống thông tin" | Luật 91/2025 Đ.9–11, Đ.13; NĐ 356/2025 | Bước 0 thu **ảnh thật của ~32 người** (8 sổ × 4,0 người/sổ — A70) vào Drive của founder ⇒ founder **là bên kiểm soát dữ liệu**. Ba việc bắt buộc: (a) **văn bản thông báo + đồng ý** gửi trong nhóm trước ngày 08/09, nêu rõ ai giữ ảnh, giữ ở đâu, giữ bao lâu, dùng làm gì; (b) **thời hạn lưu công bố trước: tới 22/09/2026**; (c) **kế hoạch xoá**: xoá toàn bộ thư mục Drive + sheet **chậm nhất 22/09**, chụp màn hình làm bằng chứng. Thư mục để **chế độ riêng tư, không link chia sẻ công khai** | 45 phút | **0đ** | 🔴 Đây là lỗ hổng thật của lập luận "Bước 0 không có nghĩa vụ MXH": **nghĩa vụ MXH** thì không có, nhưng **nghĩa vụ DLCN thì có ngay từ tấm ảnh đầu tiên**. Thu ảnh của ~32 người không thông báo, không thời hạn, không kế hoạch xoá = vi phạm Luật 91/2025 trước cả khi có một dòng code |
| **Đăng ký `chotso.vn`** (điều kiện giấy phép MXH sau này: .vn còn hiệu lực ≥6 tháng lúc nộp) | Điều kiện cấp GP MXH, NĐ 147 | **MỘT domain** (A68 — domain thứ hai đã CẮT; đường thoát hiểm là mã 6 ký tự trên card, 0đ). Đăng ký **đứng tên đúng người sẽ là chủ TNHH sau này** — tránh phải chuyển nhượng | 1 giờ | **770.000đ/năm** | Nộp hồ sơ giấy phép mà tên miền mới đăng ký 2 tháng ⇒ trượt điều kiện, chờ thêm 4 tháng |
| **Gửi luật sư BẢY câu hỏi** (§11) | A65 / QĐ-14 | **7 câu, MỘT email, MỘT lần trả phí** — danh sách hợp nhất thay mọi danh sách rời ở v2 §12, `03` §10, `04` §8, digest #20 | 1 giờ soạn | **5.000.000–15.000.000đ** [A66 — dải rộng vì là 7 câu; thay bằng số thật sau 3 báo giá, hạn 10/09] | Xây **20 tuần lịch** trên một giả định chưa ai xác nhận |

### GIAI ĐOẠN 1 — Beta đóng, 12 sổ đợt 1 → ≤30 sổ đợt 2 / ≤120 người (**02/12/2026** → 03/2027)

_Kế hoạch beta duy nhất (QĐ-25 / A88–A91): chạy **02/12/2026**, trần cứng **15/12/2026** không gia hạn · **12 sổ** đợt 1 (02/12→29/12) = cohort quyết định `sổ-D28` · **≤30 sổ** đợt 2 mở dần từ tuần 15 · trần vận hành 35 sổ · trần hành chính 60 sổ. Quy đổi người: 30 sổ × 4,0 = **120 người**, không phải 150._

| Nghĩa vụ | Căn cứ | Hành động cụ thể | Thời gian | Chi phí | Rủi ro nếu bỏ qua |
|---|---|---|---|---|---|
| **Thông báo & đồng ý xử lý DLCN** (không được miễn, kể cả startup) | Luật 91/2025 Đ.11, Đ.13 | Màn chính sách + checkbox **không tick sẵn**, tách riêng: (a) vận hành sổ, (b) lưu ảnh. Không dark pattern | 0,15 pw (đã nằm trong hạng mục 9 của v2) | 0đ | Phạt tới 3 tỷ (NĐ 330/2026); và đây là vi phạm dễ bị phát hiện nhất vì nó nằm trên màn hình |
| **Quyền chủ thể: truy cập 10 ngày · rút đồng ý 15 ngày · xoá 20 ngày** | Luật 91/2025 + NĐ 356/2025 | Nút "Xoá dữ liệu của tôi" ngay **trong sản phẩm**. Soft-delete tức thì + hard-delete ≤20 ngày bằng cron. ⚠️ A86 hạ **màn Của tôi xuống 0,00 pw** ở MVP-0 ⇒ nếu màn 6 không tồn tại, nút này **phải nằm ở màn khác**, không được biến mất (xem §8.4) | 0,1 pw | 0đ | Vi phạm định lượng, không cãi được |
| **Không tạo dữ liệu nhạy cảm** | NĐ 356/2025 Đ.4 | 5 khoá cứng: strip EXIF client-side · **không** face detection/recognition/clustering · **không** xin quyền Location · **không** HealthKit/Google Fit · `preset_id` **không lưu per-user** (v2 §4.8 đã chốt) | 0 thêm | 0đ | Mất miễn trừ Đ.38.2 + kích hoạt nghĩa vụ đồng ý riêng cho dữ liệu nhạy cảm |
| **Báo cáo / chặn / rời sổ / xoá ảnh của mình** | NĐ 147 Đ.27; Luật ANM 116/2025 Đ.16 khoản 3 | Nút trên **màn Ảnh chi tiết** (v2 màn 5). Trong sản phẩm, không qua email | trong 0,5 pw hạng mục 9 | 0đ | Không có "biện pháp kỹ thuật phát hiện, ngăn chặn, gỡ bỏ kịp thời" ⇒ vi phạm Điều 16 |
| **Gỡ nội dung theo yêu cầu cơ quan nhà nước: 24h, khẩn cấp 06h** | Luật ANM 116/2025 | Một email liên hệ pháp lý công bố trên màn 7 + nút "khoá sổ khẩn cấp" (một dòng SQL, chuẩn bị sẵn script) | 2 giờ | 0đ | SLA luật định, không thương lượng được |
| **SLA khiếu nại người dùng: công bố 48h** | Thực tiễn + Apple/Play (khi lên store) | **Auto-hide TOÀN CỤC** (ẩn với mọi thành viên, không phải chỉ với người báo cáo) ngay khi có report đầu tiên — A60/C23; founder xử lý ≤48h; khôi phục nếu report sai | trong 0,5 pw | 0đ | SLA bị vi phạm tệ hơn SLA khiêm tốn (v2 đã chốt đúng) |
| **Không index công khai** — giữ lập luận "chưa cung cấp dịch vụ ra công chúng" | Lập luận, không phải điều luật | `robots.txt` + `<meta noindex>` trên mọi trang trừ landing. Vào sổ **chỉ bằng link mời hoặc mã 6 ký tự** — mã 6 ký tự là đường thoát hiểm **có điều kiện**: chỉ dùng được khi sổ **< 8 người VÀ card ≤ 7 ngày tuổi** (A45), không phải khoá vào vô điều kiện | 30 phút | 0đ | Mất một lập luận miễn phí. Lưu ý: đây là **lập luận yếu**, không phải lá chắn |
| **Đếm 2 chỉ số pháp lý trong dashboard từ dòng code đầu** | §2 bảng trên | **Định nghĩa tạm, chờ luật sư (A56/QĐ-24 — đếm rộng, báo động sớm):** `monthly_visits` = **số phiên khác nhau** (phiên mới sau **30 phút** không hoạt động) chạm **bất kỳ route nào, kể cả trang public** · `monthly_active_persons` = **số `person` khác nhau có ≥1 `proof` trong 30 ngày**. Đèn vàng 6.000 / 600; đèn đỏ 8.500 / 850. Hai event `visits_alert` (28) + `persons_alert` (29) — A55. **`monthly_visits` không backfill được**, phải đếm từ dòng code đầu | 0,05 pw (đã ghi `pw-ledger.md`) | 0đ | Vượt ngưỡng mà không biết = vi phạm không cố ý, vẫn bị phạt |
| **Chưa cần pháp nhân** — vận hành tư cách cá nhân, **doanh thu 0** | Không có hoạt động kinh doanh sinh lợi | Không lập TNHH, không D-U-N-S, không Apple/Google account | — | **0đ** | (ngược lại: lập sớm = đốt 10–22 triệu/năm (§7) cho một thứ có thể bị dừng ngày 22/09) |

### GIAI ĐOẠN 2 — 30 → 80 sổ (**120 → 320 người**, A = 4,0) · vùng phải chuẩn bị

_Quy đổi lại theo A70 (A = 4,0, không phải 5): 30 sổ = **120 người**, 80 sổ = **320 người**. Mốc tham chiếu trong giai đoạn này: đèn vàng **60 sổ / 240 người / 6.000 lượt**; đèn đỏ **85 sổ / 340 người / 8.500 lượt**; ngưỡng luật **100 sổ / 400 người / 10.000 lượt**._

| Nghĩa vụ | Căn cứ | Hành động cụ thể | Thời gian | Chi phí | Rủi ro nếu bỏ qua |
|---|---|---|---|---|---|
| **Lập Công ty TNHH MTV** — điều kiện tiên quyết của cả hai thủ tục MXH | Điều kiện cấp GP/GXN MXH: phải là cơ quan/tổ chức/**doanh nghiệp thành lập theo pháp luật VN** | Mã ngành **6201** (lập trình) + **6311** (xử lý dữ liệu) + **6312** (cổng thông tin) — đăng đủ 3 mã lên Cổng thông tin quốc gia | 3–7 ngày làm việc | Đăng ký **25.000đ** (miễn nếu nộp online) + công bố **100.000đ** + khắc dấu ~300.000đ + dịch vụ 1–5 triệu. **Vận hành: chữ ký số ~1,5 tr/năm + hoá đơn điện tử ~600k/năm + kế toán thuê ngoài 500k–1,5 tr/tháng** ⇒ **~10–22 triệu/năm** [ước lượng] | Không có pháp nhân = không nộp được cả thông báo lẫn giấy phép = mọi thứ sau đây bị chặn |
| **Nộp Giấy xác nhận thông báo cung cấp dịch vụ MXH** — làm SỚM, khi còn nhỏ | NĐ 147/2024 (dưới ngưỡng) | Hồ sơ: **Mẫu số 20** + bản sao chứng thực GCN đăng ký doanh nghiệp. Nộp lên **Bộ VHTTDL** (thẩm quyền đã chuyển từ Bộ TT&TT sau tái cơ cấu 2025) | **05 ngày làm việc** kể từ ngày nhận hồ sơ hợp lệ | **0đ lệ phí** [FACT, xác nhận] | Cung cấp dịch vụ MXH không thông báo. Và: hồ sơ nộp lúc 30 sổ dễ hơn hẳn lúc bị chú ý |
| ⚠️ **Xác thực tài khoản (họ tên · ngày sinh · SĐT di động VN, hoặc số định danh cá nhân)** | **NĐ 147/2024 Điều 27 khoản 3 điểm a/b** — áp cho **tổ chức, doanh nghiệp cung cấp dịch vụ MXH trong nước**, văn bản **không** phân biệt tier giấy phép hay tier thông báo | Nếu luật sư xác nhận áp: bật SMS OTP. Nếu không: giữ device token | 0,4 pw + tích hợp nhà cung cấp | 🔧 **[SỬA 04/09/2026 — sai 8–23 lần]** Giá đúng của kênh VN: **ZNS OTP 300đ + 10% VAT = 330đ/tin** · **SMS Brandname 800–900đ/tin** [KIỂM CHỨNG, `11` §7.3]. ⇒ **320 người × 1,5 = 480 tin = 158.400đ (ZNS) / 432.000đ (SMS)**; ở 1.000 người = **495.000đ / 1,35 triệu**. Con số cũ **$0,2852/tin ≈ 7.500đ** là giá **Twilio gửi SMS quốc tế vào VN**, không phải giá kênh trong nước — và chính `03` §2.6 đã có con số đúng (300đ) từ đầu | 🔴 **Đây là mâu thuẫn trực diện với v2 §5 ("Không SMS OTP ở MVP").** Xem §12 Bất đồng |
| **Lưu thông tin tài khoản + nhật ký (IP, login/logout, giao dịch) ≥ 02 năm** | NĐ 147/2024 Đ.27 | Bảng `audit_log` append-only từ **trước** khi có user — thêm sau = mất toàn bộ lịch sử | 0,15 pw | ~0đ (text log, R2/Postgres) | Không hồi tố được. Đây là hạng mục **rẻ nhất khi làm sớm, không thể làm bù** |
| **Đánh giá lại nội địa hoá dữ liệu** | NĐ 53/2022 Đ.26 — DN **trong nước** có nghĩa vụ mặc định | Xem §5 | 1 pw nếu phải chuyển | ~300–500k VND/tháng (so với ~79k trên R2) | Phạt tới 5% doanh thu / trần 3 tỷ |
| **Kiểm tra ngưỡng 100.000 chủ thể dữ liệu tích luỹ** | Luật 91/2025 Đ.38 khoản 2 (ngưỡng "số lượng lớn") | Một counter. Ở **320 người** (trần giai đoạn này) còn cách **~310 lần**; kể cả ở 400 người vẫn còn 250 lần — **chưa phải việc năm nay** | 0 | 0đ | Mất miễn trừ mà không biết |

### GIAI ĐOẠN 3 — >80 sổ / >320 người · phải có GIẤY PHÉP MXH

_Ngưỡng luật thật chạm ở **100 sổ = 400 người = 10.000 lượt/tháng** (A73); đèn đỏ bật trước đó ở **85 sổ**. Giai đoạn 3 bắt đầu sớm hơn ngưỡng vì hồ sơ mất 3–6 tháng._

| Nghĩa vụ | Căn cứ | Hành động cụ thể | Thời gian | Chi phí | Rủi ro nếu bỏ qua |
|---|---|---|---|---|---|
| **Giấy phép cung cấp dịch vụ MXH** | NĐ 147/2024: ≥10.000 lượt truy cập/tháng **hoặc** >1.000 người dùng thường xuyên/tháng | Hồ sơ + đề án. Nộp Bộ VHTTDL | **25 ngày** theo quy định; **3–6 tháng thực tế** [ước lượng từ thực tiễn tư vấn, cần kiểm chứng] | Dịch vụ luật **30–80 triệu** [ước lượng thị trường, cần chào giá]; lệ phí nhà nước **cần kiểm chứng** | Cung cấp dịch vụ MXH không phép ⇒ đình chỉ hoạt động (biện pháp bổ sung, Đ.4–5 NĐ 330/2026) |
| Điều kiện kèm theo giấy phép | NĐ 147/2024 | (a) **tên miền `.vn` là tên miền chính**, còn hiệu lực ≥6 tháng lúc nộp; (b) **lưu dữ liệu người dùng trên máy chủ có địa chỉ IP tại VN**; (c) có **bộ phận quản lý nội dung** và **bộ phận quản lý kỹ thuật**; (d) nhân sự VN chịu trách nhiệm nội dung | — | Máy chủ VN: xem §5. "Bộ phận" với team 1 người = rủi ro hồ sơ thật | Trượt điều kiện ⇒ làm lại từ đầu, mất thêm 3–6 tháng |
| **Thời hạn giấy phép tối đa 05 năm**, gia hạn không quá 01 lần / 02 năm | NĐ 147/2024 | Lịch nhắc gia hạn trước 6 tháng | — | — | Hết hạn = dừng dịch vụ |

### GIAI ĐOẠN 4 — KHI THU TIỀN (bất kể quy mô)

| Nghĩa vụ | Căn cứ | Hành động | Thời gian | Chi phí | Rủi ro |
|---|---|---|---|---|---|
| 🔴 **Phải có GIẤY PHÉP MXH trước, không phải giấy xác nhận thông báo** | **NĐ 147/2024 Điều 24 khoản 6 điểm d** ✅ [KIỂM CHỨNG 04/09/2026, `11` §6 #2] — livestream và **hoạt động phát sinh doanh thu dưới mọi hình thức** chỉ dành cho MXH đã được cấp **Giấy phép** | Không thu một đồng nào — kể cả quảng cáo, kể cả donate — cho tới khi có giấy phép | 3–6 tháng | (như trên) | Thu tiền không phép: xử phạt + buộc nộp lại khoản thu bất hợp pháp |
| **Thuế TNDN** | Luật Thuế TNDN | 20%; ưu đãi **10% trong 15 năm** cho sản xuất sản phẩm phần mềm — **phải đáp ứng quy trình sản xuất phần mềm theo quy định**, không tự động [cần kiểm chứng điều kiện 2026] | — | Kế toán | Truy thu + phạt chậm nộp |
| **Nếu nhận tiền với tư cách cá nhân** (không khuyến nghị) | Thông tư 40/2021/TT-BTC | **5% GTGT + 2% TNCN** trên doanh thu. Ngưỡng miễn: r06 ghi 100 triệu/năm — **ngưỡng này đã được nâng từ 01/01/2026, con số mới CẦN KIỂM CHỨNG** | — | 7% doanh thu | Cục Thuế đã truy thu **203 tỷ** từ nhóm người viết app cho App Store [FACT, Tuổi Trẻ 2021] |
| **Điều khoản subscription / hoàn tiền** | Luật BVQL người tiêu dùng 2023 | Giá, chu kỳ, auto-renew, cách huỷ, chính sách hoàn tiền — viết rõ trước khi bật nút | 3 giờ | 0đ | Khiếu nại + rủi ro store nếu sau này lên store |
| **Tuyệt đối không có vật phẩm ảo / quy đổi** | NĐ 174/2026 | Đã chốt vĩnh viễn ở v2 §6 mục 10 | — | — | **60–80 triệu** (cho mua bán giữa người chơi) / **170–200 triệu** (quy đổi ra tiền) |

---

## 3. CÂU HỎI SỐNG CÒN — CHỐT SỔ v2 CÓ PHẢI "MẠNG XÃ HỘI" KHÔNG?

**Định nghĩa (NĐ 147/2024, Điều 3):** _"hệ thống thông tin được thiết lập trên nền tảng website hoặc ứng dụng trên Internet, cung cấp các dịch vụ, công cụ cho phép người sử dụng dịch vụ cung cấp, trao đổi, tương tác, chia sẻ thông tin với nhau."_

### Đối chiếu từng dấu hiệu với thiết kế v2 đã chốt

| # | Dấu hiệu | Chốt Sổ v2 | Đánh giá | Có thể thiết kế để hụt không? |
|---|---|---|---|---|
| 1 | "hệ thống thông tin trên nền tảng **website** hoặc ứng dụng" | Next.js app, máy chủ riêng, DB riêng | ✅ **CÓ, rõ ràng** | **Không.** Điều 3 nói rõ "website **hoặc** ứng dụng". Lập luận "làm web nên luật không đụng tới" là hiểu sai luật — v2 §9 đã nói đúng điều này |
| 2 | cho phép người dùng **cung cấp** thông tin | Nộp 1 tấm ảnh + nhãn XONG/TOANG + `goal_text` ≤30 ký tự | ✅ **CÓ** | Không, trừ khi bỏ toàn bộ sản phẩm |
| 3 | cho phép **trao đổi** | ❌ Không chat, không comment, không caption, không reaction trong sản phẩm. Trao đổi 100% xảy ra **trong Zalo** | 🟡 **KHÔNG** — đây là dấu hiệu duy nhất Chốt Sổ hụt, và nó hụt nhờ quyết định v2 §6 mục 4 | Đang hụt. **Phải giữ nguyên** |
| 4 | cho phép **tương tác** | ❌ **Không còn nút tương tác nào trong sản phẩm** — nút thả tim ẩn danh đã bị **CẮT** khỏi MVP-0 (C03/S01, xem "Đã cắt"). Còn lại: trạng thái XONG/TOANG của người này hiển thị cho người kia, chuỗi chung của sổ, card sinh từ hành động của nhiều người | 🟡 **TRANH CÃI** — không có hành vi tương tác trực tiếp, nhưng vẫn có tương tác gián tiếp qua trạng thái chung | Không cần cố nữa. **Cảnh báo:** dấu hiệu này mỏng đi là **hệ quả phụ của việc cắt scope, KHÔNG phải lá chắn pháp lý** — 3 dấu hiệu còn lại đã đủ kết luận là MXH |
| 5 | cho phép **chia sẻ thông tin với nhau** | Ảnh của A hiển thị cho B, C, D trong màn Sổ hôm nay; card 4:5 rời hệ thống vào nhóm Zalo | ✅ **CÓ, rất rõ** | Không |

**Kết luận: 3/5 dấu hiệu CÓ rõ ràng (1, 2, 5) + 1 tranh cãi (4) + 1 KHÔNG (3). Chốt Sổ là mạng xã hội theo Điều 3.** Ba dấu hiệu rõ đã đủ; việc dấu hiệu 4 mỏng đi sau khi cắt nút tim **không đổi kết luận** và không được trình bày như thể nó đổi. Nhóm kín không phải ngoại lệ — Zalo và Messenger đều có nhóm kín và vẫn là MXH. "Private-first" là định vị sản phẩm, không phải lá chắn pháp lý.

### Nếu có, làm gì

Thứ tự **bắt buộc**, không đảo được:

```
TNHH VN (3–7 ngày)
   → Giấy xác nhận thông báo (Mẫu 20, 05 ngày làm việc, 0đ)   ← làm ở 30–60 sổ
      → Giấy phép MXH (25 ngày quy định / 3–6 tháng thực tế)  ← khởi động ở ~40 sổ,
                                                                 CHẬM NHẤT ở đèn vàng 60 sổ (A57)
         → mới được thu tiền
```

Việc **nộp thông báo sớm** là quyết định rẻ nhất trong toàn tài liệu: 0đ, 5 ngày, và nó biến Chốt Sổ từ "một web app lạ không ai biết" thành "một đơn vị đã tự khai báo". Chi phí thật của nó là **giả định rằng lúc đó nghĩa vụ Điều 27 khoản 3 (xác thực SĐT) bật theo** — xem §12.

### Có thiết kế được để đứng NGOÀI ranh giới không?

**Trả lời thẳng: không, và đừng cố.** Nhưng có một danh sách giới hạn thiết kế làm cho lập luận "đây là công cụ lưu trữ dùng chung cho một nhóm xác định, không phải mạng xã hội" **đủ tử tế để luật sư đưa ra** — và quan trọng hơn, làm cho Chốt Sổ **thực sự ít rủi ro nội dung hơn** một MXH thật. Đây là chiến lược **có rủi ro**: nó không đảm bảo kết quả, nó chỉ mua thời gian và thiện chí.

**Tám giới hạn thiết kế — ghi vào mục PHÁP LÝ của `docs/adr/ADR-000-bat-bien.md` (A103/S21: chỉ có MỘT file ADR, không tạo ADR-001/ADR-002), coi như bất khả xâm phạm:**

| # | Giới hạn | Đã có trong v2? |
|---|---|---|
| L1 | **Không feed công khai, không trang khám phá, không tìm kiếm người dùng, không gợi ý sổ** | ✅ (7 màn, không có màn nào trong số này) |
| L2 | **Không hồ sơ cá nhân công khai truy cập được bằng URL đoán được** — id sổ và id thành viên phải là random, không tuần tự | ⚠️ Chưa nói. **Phải ghi vào ADR** |
| L3 | **Không kết bạn, không follow, không nhắn tin giữa hai người khác sổ** | ✅ |
| L4 | **Trần cứng 8 người/sổ, thực thi ở tầng DB** (constraint, không phải validation UI) | 🟡 v2 nói "≤8 người" nhưng chưa nói thực thi ở đâu |
| L5 | **Không chat, không comment, không caption tự do** | ✅ (§6 mục 4, 5) |
| L6 | **Không livestream, vĩnh viễn** | ⚠️ Chưa nói. Thêm vào danh sách 20 mục §6 |
| L7 | **Không nội dung nào rời sổ mà không do một con người bấm nút** — card chia sẻ là hành vi thủ công, không auto-post | ✅ (v2 §4.7) |
| L8 | **Trang public của link mời chỉ hiện ảnh MỜ + tên, KHÔNG có nút tương tác nào** (nút thả tim đã cắt — C03/S01), không hiện ảnh rõ cho người chưa vào sổ. `share_token` **TTL 7 ngày** + `noindex` (A42) | ✅ (v2 màn 1), sau khi bỏ nút tim |

Và **một điều phải nói thẳng**: tám giới hạn này không làm Chốt Sổ hết là MXH. Chúng làm cho việc **là MXH** trở nên rẻ — ít bề mặt nội dung, ít nghĩa vụ moderation, ít khả năng có sự cố. Đó mới là giá trị thật của chúng.

---

## 4. RỦI RO BỊ XẾP LÀ TRÒ CHƠI ĐIỆN TỬ G1

**Định nghĩa (NĐ 147/2024, Điều 37 khoản 1):** G1 = _"trò chơi điện tử có sự tương tác **đồng thời** giữa nhiều người chơi với nhau thông qua **hệ thống máy chủ trò chơi** của doanh nghiệp"_ [FACT, xác nhận 03/09/2026].

| Dấu hiệu | Chốt Sổ v2 | Đánh giá |
|---|---|---|
| Là **"trò chơi điện tử trên mạng"** | Không có thắng/thua · không có điểm số cá nhân · không có nhân vật · không có luật chơi · không có vật phẩm ảo · không có tiền tệ trong app · không có kỹ năng/input gameplay | ❌ **KHÔNG** — chốt chặn mạnh nhất |
| Tương tác **đồng thời** | `ROLLOVER = 04:00, tính batch, KHÔNG realtime`. Không có trạng thái chung nào thay đổi tức thời do hành động của người khác | ❌ **KHÔNG** |
| Giữa **nhiều người chơi** | 2–8 người/sổ | ✅ có |
| Qua **hệ thống máy chủ trò chơi** | Có máy chủ, nhưng không phải "máy chủ trò chơi" | 🟡 tranh cãi |

**Kết luận: 2/4 dấu hiệu, và hai dấu hiệu hụt là hai dấu hiệu định danh.** Rủi ro G1 ở thiết kế v2 hiện tại là **thấp**. r06 đánh giá 🟠 Cao — đánh giá đó đúng với DOC 1 (có boss + HP + damage + gacha), **không** còn đúng với v2.

### Bảy điều kiện phải giữ để rủi ro G1 ở mức thấp

1. **Không boss, HP, damage, season, hồi máu** — vĩnh viễn ở MVP (v2 §6 mục 1)
2. **Không vật phẩm ảo, đơn vị ảo, điểm thưởng có thể tích luỹ/trao đổi** — NĐ 174/2026 phạt 60–200 triệu
3. **Không leaderboard toàn app, không so sánh giữa các sổ**
4. **Không quy đổi bất cứ thứ gì ra tiền, voucher, thẻ cào, hiện vật**
5. **Giữ rollover batch** — đây là biện pháp pháp lý, không chỉ là quyết định kỹ thuật. Nếu sau này ai đó "tối ưu" nó thành realtime để UI mượt hơn, người đó vừa phá một lá chắn pháp lý mà không biết. **Ghi vào comment ngay trên hàm rollover.**
6. **Bảy chữ bị cấm giữ nguyên**: `boss` `game` `nhiệm vụ` `gamification` `ritual` `đứa nào chưa` `thử thách` — cộng thêm **`chơi`, `người chơi`, `điểm`, `level`, `phần thưởng`** trong mọi vật liệu đối ngoại
7. 🔴 **Sửa điều kiện mở lại của §6 mục 1.** v2 hiện ghi điều kiện mở lại boss là "opt-in v1.2, A/B 50%, chênh `sổ-D28` <10 điểm → gỡ vĩnh viễn". **Điều kiện đó thiếu vế pháp lý.** Đề xuất viết lại: _"Không được mở lại nếu chưa có ý kiến luật sư bằng văn bản rằng cơ chế cụ thể đó không cấu thành G1. Ngưỡng `sổ-D28` là điều kiện cần, ý kiến luật sư là điều kiện đủ."_

**Chuyện gì xảy ra nếu vẫn bị xếp G1:** cần **Giấy phép cung cấp dịch vụ G1** + **Quyết định phát hành** cho từng trò chơi. Đắt hơn và khó hơn giấy phép MXH đáng kể, và cộng dồn chứ không thay thế. Đây là lý do đơn lẻ mạnh nhất để không bao giờ mở lại boss.

---

## 5. NỘI ĐỊA HOÁ DỮ LIỆU

### Điều kiện kích hoạt

| Kích hoạt | Căn cứ | Áp cho Chốt Sổ khi nào |
|---|---|---|
| **DN trong nước** cung cấp dịch vụ trên mạng viễn thông/Internet/GTGT, có thu thập, khai thác, phân tích, xử lý dữ liệu người dùng VN ⇒ **nghĩa vụ lưu trong nước là mặc định** | NĐ 53/2022 Đ.26 | 🔴 **Ngay khi lập TNHH VN.** Trước đó, tư cách cá nhân nằm trong vùng chưa rõ ràng |
| **DN nước ngoài** ⇒ chỉ khi có **yêu cầu bằng văn bản của Bộ Công an**, lưu tối thiểu **24 tháng** kể từ ngày có yêu cầu | NĐ 53/2022 | Không áp (không lập công ty ngoại — xem §7) |
| Điều kiện **giấy phép MXH**: lưu dữ liệu người sử dụng trên hệ thống máy chủ có **địa chỉ IP tại Việt Nam** | NĐ 147/2024 | Ở giai đoạn 3 |

**Ba loại dữ liệu phải lưu trong nước [FACT]:** (a) thông tin cá nhân người dùng VN; (b) dữ liệu do người dùng VN tạo ra — tên tài khoản, thời gian sử dụng, IP, email…; (c) **dữ liệu về mối quan hệ của người dùng VN — bạn bè, nhóm**. Điểm (c) đáng chú ý: **cấu trúc "ai ở trong sổ nào với ai" chính là dữ liệu quan hệ**, tức là phần lõi nhất của schema Chốt Sổ.

### Chuẩn bị trước — 4 việc, tổng ~2 giờ, làm ở dòng code đầu tiên

1. **`StorageAdapter` interface** cho mọi truy cập media (v2 gọi là "ADR-001"; nay là **mục 2 (schema & đặt tên) + mục 3 (pháp lý) của `docs/adr/ADR-000-bat-bien.md`** — A103) — giữ nguyên
2. **Không khoá vào Supabase Edge Functions và Supabase Auth.** Dùng Postgres thuần + logic ở tầng app. Đây là điều kiện để 1 pw di chuyển là con số thật, không phải mong ước
3. **Không dùng bất kỳ tính năng nào chỉ Supabase mới có** (Realtime, Vault, pgsodium wrappers). Nếu buộc phải, ghi vào một file `VENDOR-LOCKIN.md` — một dòng cho mỗi lần
4. **Tách dữ liệu quan hệ (`sổ`, `thành viên`) khỏi media từ đầu** — nếu phải chuyển gấp, chuyển bảng quan hệ (vài MB) dễ hơn chuyển 200 GB ảnh

### Chi phí chuyển về VN

| Hạng mục | Hiện tại (Supabase SG + R2) | VN (VNG Cloud / Viettel IDC / FPT Cloud) | Chênh |
|---|---|---|---|
| Object storage 200 GB | R2 $0,015/GB/tháng, **egress $0** ⇒ **~$3 ≈ 79.000đ/tháng** | S3-compatible ~1.500–2.500đ/GB/tháng, **egress thường tính phí** ⇒ **~300.000–500.000đ/tháng** [ước lượng, **cần báo giá thật**] | **4–6×** |
| Postgres managed nhỏ | Supabase Pro $25 ≈ 660.000đ/tháng | ~1,5–4 triệu đ/tháng [ước lượng, cần báo giá] | **2–6×** |
| Công sức di chuyển | — | **≤1 pw** nếu 4 việc chuẩn bị trên đã làm; **3–4 pw** nếu chưa | — |

**Đánh giá:** con số tuyệt đối vẫn nhỏ (chênh ~400k–4 triệu VND/tháng ở quy mô 10.000 sổ). **Nội địa hoá không phải rủi ro tài chính, nó là rủi ro thời điểm** — nó đắt khi phải làm gấp, rẻ khi đã chuẩn bị. Đồng ý với kết luận nội địa hoá của v2 (nay nằm trong `docs/adr/ADR-000-bat-bien.md`, không còn file ADR-001 riêng — A103/S21).

---

## 6. NGƯỜI DÙNG DƯỚI 16 / DƯỚI 18

### Nghĩa vụ

| Quy định | Nội dung | Hiệu lực |
|---|---|---|
| **Luật Trẻ em 2016** | Trẻ em = người **dưới 16 tuổi** (khác GDPR/COPPA) | — |
| **Luật ANM 116/2025 Đ.16 khoản 2** | Trẻ em dùng **dịch vụ giá trị gia tăng trên không gian mạng** ⇒ cha mẹ/người giám hộ **phải đăng ký tài khoản bằng thông tin của mình** và giám sát nội dung trẻ truy cập, đăng tải, chia sẻ | ✅ **01/07/2026, đang có hiệu lực** |
| **Luật ANM 116/2025 Đ.16 khoản 3 + Đ.25 khoản 2** | Nhà cung cấp phải triển khai **biện pháp kỹ thuật và quản lý** để phát hiện, ngăn chặn, **gỡ bỏ kịp thời** nội dung gây hại cho trẻ | 01/07/2026 |
| **NĐ 147/2024** | MXH: trẻ dưới 16 ⇒ cha mẹ đăng ký bằng thông tin của mình | 25/12/2024 |
| **Luật 91/2025** | Xử lý DLCN trẻ em bắt buộc có đồng ý của cha mẹ/người giám hộ. Trẻ **từ đủ 07 tuổi**: công bố/tiết lộ đời tư cần **cả** đồng ý của trẻ **và** người đại diện | 01/01/2026 |
| Phạt | Thu thập, xử lý dữ liệu trẻ em trái phép: tới **3 tỷ** (tổ chức) | NĐ 330/2026 |

### Ba phương án và trade-off

| Phương án | Chi phí xây | Mất thị trường | Giá trị pháp lý | Tác dụng phụ |
|---|---|---|---|---|
| **P1 — Age gate tự khai ≥16, chặn <16** (v2 chọn) | **0,05 pw** | Mất học sinh cấp 3 dưới 16 — nhóm viral nhất [ước lượng 20–30% target tự nhiên] | 🟡 **Hàng rào giấy tờ.** Chứng minh được thiện chí và biện pháp hợp lý, **không** miễn trách nhiệm nếu founder biết mà vẫn cho vào | Không |
| **P2 — Gate 18+** | 0,05 pw | Mất thêm cả 16–18: học sinh 11–12, sinh viên năm 1 — **~40% target** [ước lượng] | Không cao hơn P1 một cách có ý nghĩa: **ngưỡng luật VN là 16, không phải 18** | Thu hẹp thị trường vì một nỗi sợ không có căn cứ trong văn bản |
| **P3 — Age assurance thật** (VNeID / thẻ ngân hàng / ước lượng tuổi qua khuôn mặt) | 1,5–3 pw + hợp đồng cần pháp nhân | ~0 | Cao | 🔴 **Phản tác dụng nghiêm trọng.** Ước lượng tuổi qua khuôn mặt = **xử lý dữ liệu sinh trắc học** ⇒ mất ngay miễn trừ Đ.38.2 + kích hoạt nghĩa vụ đồng ý riêng cho dữ liệu nhạy cảm + rủi ro NĐ 330/2026. VNeID cần pháp nhân + hợp đồng, không làm được ở giai đoạn beta |

### Quyết định: **P1**, nhưng phải làm P1 cho tử tế

v2 đã chọn đúng và đã tự nhận đúng ("hàng rào giấy tờ, không phải hàng rào kỹ thuật"). Năm bổ sung để P1 có giá trị pháp lý thật, tổng ~1,5 giờ:

1. **Ô hỏi tuổi neutral** — không prefill, không gợi ý đáp án đúng, không hiện "bạn phải ≥16" **trước** khi nhập. Năm sinh (nếu có hỏi) chỉ dùng để **tính tại chỗ ở tầng ứng dụng**, **không đi vào CSDL**
2. **Chỉ lưu `person.is_16_plus boolean` + `age_gate_at`. KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** (A47/QĐ-20 — `04` §1.2 đã xoá cột `birth_year` và hai CHECK gọi `now()`). Nguyên tắc tối thiểu hoá dữ liệu (Luật 91/2025) và giảm bề mặt rò rỉ. Kiểm tra tuổi làm ở **tầng ứng dụng**, không ở tầng CSDL
3. **Chặn thử lại ngay lập tức** bằng `localStorage` — không chặn được quyết tâm, nhưng chứng minh có biện pháp
4. **Quy trình phản ứng viết sẵn**: nhận báo cáo "người này 14 tuổi" ⇒ khoá tài khoản ≤48h ⇒ xoá dữ liệu ≤20 ngày ⇒ ghi log. **Có log là bằng chứng, không có log là không có gì**
5. **Không quảng bá trên kênh nhắm dưới 16** (fanpage trường cấp 2, hashtag lớp 8/9) — ghi vào playbook go-to-market

**Trade-off nói thẳng:** mất phân khúc viral nhất để đổi lấy việc **không phải xây flow parental consent** (~1,5 pw: thu thông tin cha mẹ, xác minh quan hệ, lưu trữ dữ liệu người lớn thứ hai) và **không phải giữ một kho dữ liệu cha mẹ** — mà kho đó lại là dữ liệu nhạy cảm. Ở bus factor = 1, đây là đổi đúng.

**Lợi thế cấu trúc của v2 cần ghi nhận:** kể cả khi một đứa 15 tuổi lọt vào, bề mặt tác hại đã rất mỏng — **không người lạ** (chỉ vào bằng mã 6 ký tự do bạn gửi), **không chat**, **không caption**, **không xếp hạng**, **không ẩn danh**, **không DM**. So với một app có chat 1-1 giữa hai người 15 tuổi (hướng C bị bác), đây là chênh lệch bậc độ lớn về rủi ro.

---

## 7. PHÁP NHÂN

### Nên lập gì, khi nào

| Giai đoạn | Hình thức | Lý do |
|---|---|---|
| Bước 0 (8 sổ, 14 ngày) | **Không gì cả** | Không cung cấp dịch vụ, không thu tiền, không máy chủ. Lập pháp nhân lúc này = đốt 10–22 triệu/năm cho một thứ có 3 nhánh kết cục ở ngày 22/09, trong đó 2 nhánh là "dừng" hoặc "đổi hướng" |
| Beta ≤30 sổ, doanh thu 0 | **Cá nhân** | Rủi ro: trách nhiệm cá nhân vô hạn. Đổi lại: 0đ, 0 thủ tục, 0 kế toán. Ở **120 người dùng** (30 sổ × 4,0 — A70) là bạn bè của bạn bè, đây là đánh đổi đúng [lập luận, **cần luật sư xác nhận rằng vận hành phi lợi nhuận ở quy mô này không cấu thành hoạt động kinh doanh phải đăng ký**] |
| **30 → 60 sổ** | 🔴 **Công ty TNHH MTV** — mã ngành **6201 + 6311 + 6312** | Điều kiện tiên quyết của cả giấy xác nhận thông báo lẫn giấy phép MXH. Lập ở đây để có **3–6 tháng đệm** trước khi chạm đèn đỏ ở **85 sổ** và ngưỡng luật ở **100 sổ** (A73) |
| Khi gọi vốn quốc tế (nếu có) | Holding Singapore **đặt lên trên** subsidiary VN | Không bao giờ đảo thứ tự |

### Chi phí TNHH MTV — bảng thật

| Khoản | Số tiền | Ghi chú |
|---|---|---|
| Lệ phí đăng ký doanh nghiệp | **25.000đ** (Thông tư 64/2025/TT-BTC, áp dụng tới 31/12/2026); **miễn hoàn toàn nếu nộp online** | [FACT] |
| Phí công bố nội dung đăng ký | ~100.000đ | [FACT] |
| Khắc dấu | ~200.000–500.000đ | [ước lượng] |
| Dịch vụ soạn hồ sơ (nếu thuê) | 1–5 triệu | [FACT, khảo giá thị trường] |
| Lệ phí môn bài | ✅ **[KIỂM CHỨNG 04/09/2026] ĐÃ BỊ XOÁ BỎ với hộ kinh doanh và cá nhân kinh doanh từ 01/01/2026** — Điều 10 **Nghị quyết 198/2025/QH15**. Với TNHH vẫn còn miễn 100% năm thành lập. Câu hỏi mở #6 của tài liệu này **ĐÓNG**. Xem `11` §7.2 | |
| Chữ ký số | ~1,5 triệu/năm | [ước lượng] |
| Hoá đơn điện tử | ~600.000đ/năm | [ước lượng] |
| Kế toán thuê ngoài | **500.000–1.500.000đ/tháng** | [ước lượng]. Với doanh nghiệp doanh thu 0, chọn gói rẻ nhất |
| **Tổng năm đầu** | **~10–22 triệu VND** | Đây là con số phải nằm trong ngân sách trước khi bấm nút lập |

### Tại sao công ty nước ngoài KHÔNG né được — 5 lý do, xếp theo sức nặng

1. 🔴 **Không xin được giấy phép MXH.** Điều kiện là "cơ quan, tổ chức, **doanh nghiệp thành lập theo pháp luật Việt Nam**". Một Pte Ltd Singapore không đủ điều kiện — hết chuyện, không có đường vòng.
2. 🔴 **Không có giấy phép MXH ⇒ không được thu tiền.** Công ty Singapore vừa không thu được tiền từ dịch vụ MXH tại VN một cách hợp lệ, vừa tốn $2.000–5.000/năm để tồn tại.
3. 🟠 **Vượt 100.000 lượt truy cập từ VN/tháng ⇒ nghĩa vụ xuyên biên giới NẶNG HƠN**, không nhẹ hơn: Điều 23 khoản 3 điểm e NĐ 147/2024 buộc **xác thực tài khoản bằng SĐT di động VN** cho nhà cung cấp xuyên biên giới, cộng phối hợp gỡ nội dung theo yêu cầu, cộng khả năng bị yêu cầu đặt VPĐD/chi nhánh tại VN.
4. 🟠 **Không giải quyết nội địa hoá dữ liệu** — chỉ đổi cơ chế kích hoạt từ "mặc định" sang "khi Bộ Công an yêu cầu bằng văn bản", tức là biến một chi phí đã biết thành một quả bom hẹn giờ không biết ngày nổ.
5. 🟡 **Chi phí duy trì cao hơn**: $2.000–5.000/năm (≈52–130 triệu VND) so với 10–22 triệu cho TNHH VN.

**Phương án rẻ nhất hợp pháp cho giai đoạn thử nghiệm: không lập gì cả, tới 30 sổ.** Đó là câu trả lời, và nó trùng với việc v2 §12 cấm lập TNHH trong 14 ngày Bước 0.

---

## 8. CHÍNH SÁCH BẮT BUỘC — NỘI DUNG TỐI THIỂU

Cả 4 tài liệu dưới đây nằm gọn trong **màn 7 (Chính sách & an toàn)** của v2, hạng mục 9 (0,5 pw). Viết bằng **tiếng Việt** (thị trường VN-only), một trang cuộn, không PDF.

### 8.1. Chính sách quyền riêng tư — 9 mục, không thiếu mục nào

| # | Mục | Nội dung tối thiểu cho Chốt Sổ |
|---|---|---|
| 1 | **Ai xử lý** | Tên đầy đủ (cá nhân hoặc TNHH), địa chỉ, **email liên hệ thật** |
| 2 | **Dữ liệu thu thập** | Liệt kê đúng, không nhiều không ít: ảnh do bạn nộp · nhãn XONG/TOANG · `goal_text` bạn tự viết · tên hiển thị · device token · **một cờ `is_16_plus` (đúng/sai) + thời điểm khai `age_gate_at` — KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** (A47) · IP + log truy cập |
| 3 | **Không thu thập** | Nói thẳng: **không** vị trí · **không** EXIF (bị xoá ngay trên máy bạn trước khi gửi) · **không** nhận diện khuôn mặt · **không** danh bạ · **không** dữ liệu sức khoẻ từ HealthKit/Google Fit · **không** số điện thoại (ở giai đoạn không có OTP) |
| 4 | **Mục đích, tách riêng từng mục đích** | (a) vận hành sổ, (b) lưu ảnh để hiển thị lại cho nhóm. **Không gộp một checkbox** |
| 5 | **Thời gian lưu** — chốt trước **07/09** vì con số này in thẳng vào Chính sách (C38) | **Ảnh gốc 72 giờ** (A36) · **Thumbnail 320px: VĨNH VIỄN** — giữ tới khi **chính bạn xoá** hoặc sổ bị xoá; sổ ngủ **180 ngày: KHÔNG xoá** (⚠️ vế *"chuyển sang R2 Infrequent Access"* của A38 **không thi hành ở MVP-0** — `11` §7.4 chứng minh nó tiết kiệm **0đ** ở trần 60 sổ và làm mỗi lần đọc đắt 2,5×; điều này **không đổi lời hứa in vào Chính sách**, chỉ đổi lớp lưu trữ); chỉ dọn khi sổ ở trạng thái `archived` (mọi thành viên đã rời) **và** đã **báo trước 30 ngày** **và** đã có **đường tải về** (A38/C16/C38) · **Card PNG 90 ngày**, hết hạn thay bằng ảnh tĩnh trung tính, không 404 (A40) · **Trang chia sẻ công khai (`share_token`) 7 ngày** rồi hết hiệu lực (A42) · **`goal_text` xoá cùng sổ, KHÔNG giữ lại sau khi thành viên rời** (A69) · log kỹ thuật giữ theo nghĩa vụ luật định (nêu rõ ≥2 năm khi đã là MXH đã thông báo/có giấy phép) |
| 6 | **Bên thứ ba** | Nêu **đích danh** từng vendor và **quốc gia đặt máy chủ**: Cloudflare R2 (…), Supabase (Singapore), Vercel (…). Đây cũng là bản khai chuyển dữ liệu xuyên biên giới |
| 7 | **Quyền của bạn + thời hạn** | Truy cập/cung cấp bản sao **10 ngày** · rút đồng ý **15 ngày** · xoá **20 ngày**. Ghi đúng con số. **Cách thực hiện quyền "cung cấp bản sao" ở MVP-0: PHIÊN BẢN TAY, 0 pw** — một truy vấn SQL + đóng gói zip thủ công, gửi qua email liên hệ, SLA 10 ngày, quy trình ghi trong `RUNBOOK.md` (D-06). **Không được bán quyền này** (xoá P1 khỏi `10` §3.1) |
| 8 | **Xoá của bạn ảnh hưởng gì tới sổ** | Nói trước, trước khi user tạo nội dung: _"Xoá tài khoản sẽ xoá ảnh và thông tin của bạn. Số ngày và số tấm của sổ giữ nguyên dưới dạng con số không gắn tên."_ Đây là cách giải mâu thuẫn quyền-xoá vs toàn-vẹn-sổ |
| 9 | **Sự cố lộ lọt** | Cam kết thông báo trong **72 giờ** kể từ khi phát hiện. 🔴 **[04/09/2026] Lời hứa này TRƯỚC HÔM NAY KHÔNG CÓ QUY TRÌNH ĐỨNG SAU.** Quy trình 6 mốc (T+0 đóng băng → T+8 xác định phạm vi → T+24 xoay khoá → T+72 thông báo cơ quan + từng chủ thể) nay ở **`11` §5.1**, dán vào `RUNBOOK.md`, **0 pw**. Ba điều kiện tiên quyết ở `11` §5.2 — trong đó **`audit_log` (A49) là bắt buộc**: không có nó thì không xác định được phạm vi ⇒ **phải giả định phạm vi là TOÀN BỘ**. Đây là lập luận mạnh nhất để không cắt `audit_log` ở D-01 |

### 8.2. Điều khoản sử dụng / EULA — 7 điều

1. **Độ tuổi ≥16.** Nêu rõ, kèm quyền khoá tài khoản khi phát hiện khai sai
2. 🔴 **Điều khoản không dung thứ nội dung phản cảm và người dùng lạm dụng** — nguyên văn yêu cầu của Apple 1.2 và Google Play UGC. Phải có kể cả khi chưa lên store
3. **Quyền với ảnh của bạn:** bạn giữ toàn bộ quyền. Chốt Sổ chỉ có **license phi độc quyền, có thể huỷ, giới hạn đúng mục đích vận hành dịch vụ**. **Không** xin license vĩnh viễn/toàn cầu/chuyển nhượng được — vừa gây phản ứng user, vừa khó biện minh dưới nguyên tắc mục đích của Luật 91/2025
4. **Bạn chịu trách nhiệm về ảnh bạn nộp**, gồm cả quyền hình ảnh của người khác xuất hiện trong ảnh (Điều 32 BLDS 2015)
5. **Chốt Sổ được khoá/xoá nội dung và tài khoản** khi vi phạm, không cần báo trước với trường hợp nghiêm trọng
6. **Không bảo đảm dịch vụ liên tục.** Đây là beta, có thể dừng — nêu rõ, kèm cam kết **báo trước ≥14 ngày** và **cho tải ảnh về**. ⚠️ Đường tải về đó là **phiên bản tay, 0 pw** (SQL + zip thủ công, SLA 10 ngày, quy trình trong `RUNBOOK.md` — D-06). **Không được hứa một nút export tự động** khi nó không nằm trong bảng pw nào
7. **Luật áp dụng: pháp luật Việt Nam**

### 8.3. Quy tắc cộng đồng — ngắn, cụ thể, dùng được

- **Cà khịa được:** trạng thái (`toang`, `vắng`, `chuỗi đứt`), tấm ảnh, chính mình
- **Cấm:** nội dung khiêu dâm · ảnh người khác không đồng ý · ảnh trẻ em không phải con/em mình · đe doạ · hạ nhục ngoại hình · nội dung tự hại và rối loạn ăn uống · nội dung vi phạm pháp luật VN
- **Cấm tuyệt đối:** ảnh khoả thân của bất kỳ ai, và **bất kỳ nội dung nào liên quan đến trẻ em** ⇒ khoá vĩnh viễn + báo cơ quan chức năng
- **Xử lý:** báo cáo → **tự động ẩn TOÀN CỤC ngay khi có 1 report** (ẩn với mọi thành viên, không phải chỉ với người báo cáo — A60) → founder xử lý → gỡ + khoá nếu vi phạm, **khôi phục nếu report sai**
- **HAI SLA, in cả hai trên trang chính sách** (A59/C24): **48 giờ** với khiếu nại của người dùng · **24 giờ, khẩn cấp 06 giờ** với yêu cầu của cơ quan nhà nước (luật định, không thương lượng)
- **Đây cũng là tài liệu trình Apple/Google khi bị hỏi.** Viết cho người dùng đọc, nhưng viết như thể một reviewer sẽ đọc

### 8.4. Cơ chế report / block / xoá — 6 thành phần

| Thành phần | Vị trí trong v2 | Bắt buộc bởi |
|---|---|---|
| Report **nội dung** (từng tấm ảnh, tên sổ, tên hiển thị) | Màn 5 (Ảnh chi tiết) | Apple 1.2 · Play UGC · NĐ 147 |
| Report **người dùng**, tách riêng với report nội dung | Màn 5 | Apple 1.2 |
| **Chặn** người dùng ở cấp cá nhân — không thấy nội dung của nhau kể cả trong cùng sổ | Màn 5 | Apple 1.2 |
| **Rời sổ một chạm**, không cần ai duyệt | Màn 6 (Của tôi) | Play UGC |
| **Xoá ảnh của chính mình** + **xoá toàn bộ dữ liệu của tôi** | Màn 5 + màn 6 | Luật 91/2025 · Apple 5.1.1(v) |
| **Lọc chủ động** — không chỉ report | ⚠️ v2 mới có chặn từ khoá ở ô kèo. **Còn thiếu lọc ảnh** | Apple 1.2 đòi "method for **filtering**" |

> 🔴 **CẢNH BÁO VỊ TRÍ MÀN — sáu thành phần này KHÔNG được cắt theo scope.** Danh sách cắt MVP-0 (A86) hạ **màn 6 "Của tôi" xuống 0,00 pw**, và khuyến nghị D-01 đề xuất **gộp màn 5 "Ảnh chi tiết" thành overlay**. Bảng trên đặt cả 6 thành phần luật định lên đúng hai màn đó. Ràng buộc của `05` (file chủ quyền pháp lý): **D-01 chỉ được gộp màn 5 nếu overlay vẫn chứa đủ Báo cáo nội dung · Báo cáo người dùng · Chặn · Xoá ảnh của mình**; và nếu màn 6 không tồn tại thì **Rời sổ một chạm** + **Xoá toàn bộ dữ liệu của tôi** phải nằm ở một màn khác trong sản phẩm. **Không có phương án "làm qua email"** — Play UGC và Apple 5.1.1(v) đòi trong app, Luật 91/2025 đòi thực hiện được quyền xoá.

🟠 **Lỗ hổng đã phát hiện:** v2 không có bất kỳ cơ chế lọc ảnh nào. Ở giai đoạn không lên store, Apple không bắn — nhưng **Luật ANM 116/2025 Điều 16 khoản 3 vẫn đòi "biện pháp kỹ thuật để phát hiện, ngăn chặn"**. Phương án rẻ nhất: **auto-hide khi có ≥1 report** (đã tính ở trên, ~0 pw thêm) + **giới hạn quy mô** (≤8 người/sổ, không người lạ) như biện pháp cấu trúc. Ghi lập luận này thành văn bản trong **mục pháp lý của `docs/adr/ADR-000-bat-bien.md`** — nếu bị hỏi, lập luận "quy mô nhóm kín 8 người là biện pháp ngăn chặn cấu trúc" cần đã tồn tại trước, không phải sáng tác sau.

---

## 9. CHECKLIST APP STORE & PLAY — CHƯA KÍCH HOẠT, ĐỌC TRƯỚC KHI QUYẾT

v2 **không lên store ở MVP**. Nấc app native + widget khoá sau **`sổ-D28` ≥ 35%** đo trên cohort tuần 1–4 của beta (02/12→29/12/2026), **n ≥ 24 sổ** (đã hạ từ ≥30 — A25), **in kèm KTC 95% = ±17 điểm** mỗi lần trích dẫn, đọc tại cổng **G2 ngày 26/01/2027** (A24/A118). Bảng này là để đọc **trước** khi mở khoá đó, vì nó thay đổi phép tính.

| Guideline | Rủi ro với Chốt Sổ | Phòng thế nào |
|---|---|---|
| **Apple 1.2 — UGC** đòi đủ 4: (a) method for **filtering**, (b) cơ chế **report** + phản hồi kịp thời, (c) **block** người lạm dụng, (d) **contact info công khai** | 🔴 Chốt Sổ hiện có (b)(c)(d), **thiếu (a)** | Thêm phân loại ảnh nhạy cảm (Cloud Vision SafeSearch / Rekognition / CoreML on-device) — **~0,4 pw + chi phí/ảnh**. Đây là hạng mục ẩn của việc lên store |
| **Apple 1.1.1** — cấm nội dung mean-spirited, làm nhục cá nhân/nhóm cụ thể | 🟢 v2 đã **cắt sạch** roast có nhãn, "Báo Thủ", xếp hạng, vote sus. Toàn bộ cà khịa nằm trong Zalo — **không phải nội dung của app** | Giữ nguyên §6 mục 4 và 6. Đây là lý do pháp lý (không chỉ sản phẩm) để không bao giờ ship reaction trong sản phẩm |
| **Apple 1.2** — cấm "objectification of real people (hot-or-not voting)" | 🟢 P9 của v2: **không tồn tại nút tiêu cực** | Giữ |
| **Apple 5.1.1(v)** — bắt buộc **xoá tài khoản ngay trong app** | 🟢 Đã có (màn 6) | Giữ |
| **Apple 5.1.1** — privacy policy URL + App Privacy nutrition label khai đúng | 🟠 Top-3 lý do reject 2026 | Khai đúng: ảnh, tên hiển thị, id thiết bị, log. Khai thiếu tệ hơn khai nhiều |
| **Apple 1.5** — Support URL hoạt động | 🟠 **Lý do reject số 1 năm 2026** | Một trang thật trên `chotso.vn`, có form, có email trả lời |
| **Apple 2.1** — thiếu demo account / không demo được tính năng | 🔴 Nhóm reject lớn nhất. Chốt Sổ **cần một sổ có sẵn dữ liệu 30 ngày** để reviewer thấy được sản phẩm | Chuẩn bị demo account + seed data **trước khi submit**, không phải sau lần reject đầu |
| **Apple 5.1.4** — thu thập ảnh/video từ người chưa thành niên | 🟠 16–17 tuổi vẫn là minor ở nhiều khung | Age rating khai ≥16 hoặc ≥17; nêu rõ chính sách trẻ em trong privacy policy |
| **Apple 1.4.1** — health claims | 🟡 Kèo "ngủ trước 12h", "đi bộ 20 phút" | **Không marketing như tuyên bố y tế.** Không dùng chữ "giúp bạn ngủ ngon hơn", "giảm cân". Câu bán của v2 (13 từ) không chạm — giữ đúng câu đó |
| **Category** | 🔴 **KHÔNG chọn Games** | Social Networking hoặc Lifestyle. Chọn Games = tự khai là trò chơi trước cả cơ quan quản lý VN |
| **Country availability** | 🔴 **Vietnam only** | Loại bỏ COPPA, GDPR, DSA, và luật age assurance của Úc/Brazil/Singapore/Utah/Louisiana khỏi bề mặt rủi ro **bằng một dropdown** |
| **Google Play UGC** | Đòi: user accept ToS **trước khi tạo nội dung** · định nghĩa nội dung phản cảm trong chính sách app · moderation · **report + block ngay trong app** · hành động với vi phạm | Đã có 4/5, thiếu filtering như trên |

**Kết luận về store:** chi phí ẩn của việc lên store không phải $99 + $25, mà là **~0,4 pw lọc ảnh + demo data + vòng lặp review 1–2 tuần mỗi lần sửa lỗi**. Cộng với việc lên store làm Apple 1.1.1/1.2 bắt đầu bắn vào một sản phẩm mà điểm ăn tiền là cà khịa. **Quyết định không lên store của v2 là quyết định pháp lý tốt, không chỉ quyết định tốc độ.**

---

## 10. CHIẾN LƯỢC PHÁP LÝ KHUYẾN NGHỊ CHO 6 THÁNG ĐẦU

### Nguyên tắc: ở dưới ngưỡng **bằng thiết kế**, không bằng may mắn

| Ngưỡng luật | Giá trị | 🟡 Đèn vàng (chuẩn bị) | 🔴 Đèn đỏ (dừng nhận sổ mới) |
|---|---|---|---|
| Lượt truy cập/tháng | **10.000** | **6.000** ≈ **60 sổ** | **8.500** ≈ **85 sổ** |
| Người dùng thường xuyên/tháng | **1.000** | **600** ≈ 150 sổ | **850** ≈ 212 sổ |
| Chủ thể dữ liệu tích luỹ | **100.000** | 60.000 | — |
| Lượt truy cập từ VN/tháng (chỉ nếu pháp nhân ngoại) | 100.000 | — | — |

**Ngưỡng bind là hàng đầu tiên.** Đây là đính chính quan trọng nhất so với v2 §9.

### Con đường rẻ nhất hợp pháp — 6 bước

| Bước | Nội dung | Chi phí pháp lý |
|---|---|---|
| **1. Bước 0 (08/09 → 21/09)** | 8 sổ, Canva + Zalo + Google Sheet **đã pseudonymise**. Không máy chủ, không dịch vụ, không pháp nhân | **0đ** |
| **2. Beta đóng ≤30 sổ** (trần **vận hành** 35 sổ — A92; trần **hành chính** 60 sổ — A93; hai trần khác nhau, không trộn) | Mời riêng qua mã 6 ký tự · `noindex` + `robots.txt` · không quảng cáo công khai · không PR · không TikTok · ToS + Privacy đầy đủ từ ngày đầu · **doanh thu 0đ tuyệt đối** (bao gồm: T4 của `10` §4 phải là fake pre-order thu cam kết, KHÔNG thu tiền — QĐ-01) | **770.000đ** (domain) |
| **3. Ở 30 sổ** | Nếu quyết định đi tiếp: lập **TNHH MTV**, nộp **Giấy xác nhận thông báo** (Mẫu 20, 5 ngày làm việc, 0đ lệ phí) | **~10–22 triệu/năm** |
| **4. Ở 60 sổ (đèn vàng)** | Bắt đầu **soạn hồ sơ giấy phép MXH** (cần pháp nhân VN + người chịu trách nhiệm nội dung quốc tịch VN — A57). Vì thực tế mất 3–6 tháng, **khởi động từ ~40 sổ** và **chậm nhất ở 60 sổ** — tức sớm hơn ngưỡng luật (100 sổ) chừng **40–60 sổ**. **Quy đổi sổ↔người ở bảng này dùng A = 4,0 (QĐ-10); con số điều khiển thật là hai counter đo trực tiếp, không phải số sổ** | **30–80 triệu** [ước lượng] |
| **5. Ở 85 sổ (đèn đỏ)** | **Dừng nhận sổ mới ngay trong ngày**, không chờ hết tháng + **cân nhắc bật phone OTP** (A58). Không phải dừng sản phẩm — chỉ khoá cửa vào cho tới khi có giấy phép | 0đ |
| **6. Thu tiền** | Chỉ sau khi cầm **Giấy phép MXH** trong tay | — |

### Ba điều làm cho chiến lược này hợp pháp chứ không phải "lách"

1. **Nộp thông báo sớm, chủ động.** Nó miễn phí và mất 5 ngày. Một hồ sơ tự khai báo từ lúc **120 người dùng** (30 sổ × 4,0 — A70) khác hoàn toàn về bản chất với việc bị phát hiện ở 5.000 người dùng.
2. **Doanh thu bằng 0 tuyệt đối trong 6 tháng đầu.** Không donate, không "mời cà phê", không tài trợ, không quảng cáo. Đây vừa là ràng buộc pháp lý (§0 kết luận 3) vừa trùng với thực tế: v2 không có kênh doanh thu nào ở MVP.
3. **Ghi chép quyết định.** Mỗi giới hạn thiết kế (L1–L8), mỗi lý do kỹ thuật có động cơ pháp lý (rollover batch, strip EXIF, `goal_text` free-text, `preset_id` không lưu per-user) phải nằm trong một **ADR có ngày tháng**. Khi cơ quan quản lý hỏi "tại sao anh làm thế này", câu trả lời "tôi đã cân nhắc và đây là ghi chép ngày 03/09/2026" mạnh hơn "tôi may mắn làm đúng".

### Ngưỡng chính xác phải dừng lại xin phép

> **Khi `monthly_visits` chạm 8.500 HOẶC `monthly_active_persons` chạm 850 trong một tháng dương lịch: dừng nhận sổ mới ngay trong ngày, không chờ hết tháng.**
>
> Nếu tới thời điểm đó chưa có TNHH và chưa nộp thông báo, thì việc đã trễ — đó là lý do bước 3 gắn vào mốc **30 sổ**, không gắn vào ngưỡng.

---

## 11. VIỆC PHẢI LÀM NGAY TUẦN NÀY (03/09 → 07/09/2026)

Không mục nào cần code, không mục nào phá trần 6,5 pw (A83), không mục nào nằm trong danh sách cấm của v2 §12.

> **Cập nhật 04/09/2026:** hai việc của **03/09** (mua `chotso.vn` · gửi email 7 câu cho luật sư) nếu chưa xong thì **đã trễ 1 ngày** — làm ngay hôm nay, vì cả hai đều là đầu vào của mốc **07/09** (ToS + Privacy nháp) và **22/09** (cổng quyết định).

| Ngày | Việc | Output kiểm chứng được | Chi phí |
|---|---|---|---|
| **03/09** | Mua `chotso.vn` — **đứng tên đúng người sẽ là chủ TNHH sau này** | Hoá đơn + ảnh chụp thông tin chủ thể đăng ký | **770.000đ** |
| **03/09** | 🔴 **Gửi luật sư — 7 câu, một email, một lần trả phí** [CHỐT 2026-08-28, QĐ-14]. v2 §12 chỉ gửi 1 câu; `07` §7 ngân sách 1 câu 3–5 triệu. Bảy câu là danh sách HỢP NHẤT của cả hồ sơ — hỏi 7 câu trong một thư ý kiến rẻ hơn hỏi 1 câu bốn lần | Email đã gửi + lịch hẹn + **3 báo giá thật** từ 3 văn phòng | **5–15 triệu** (dải rộng vì là 7 câu, không phải 1; thay bằng số thật sau khi có báo giá, hạn 10/09) |
| **04/09** | **Mục PHÁP LÝ của `docs/adr/ADR-000-bat-bien.md`** (A103/S21 — **MỘT file ADR duy nhất**, không tạo ADR-001/ADR-002 riêng) — chép nguyên L1–L8 (§3) + 7 điều kiện G1 (§4) + 4 việc chuẩn bị nội địa hoá (§5) vào mục 3 của file đó, commit | File đã commit | 1,5 giờ |
| **04/09** | **Sửa Google Sheet Bước 0 thành pseudonymised** — cột định danh là `S03-M2`, không phải tên thật. Không có cột ảnh | Ảnh chụp header của sheet | 20 phút |
| **05/09** | Thêm **2 counter pháp lý** vào spec analytics (§10): `monthly_visits`, `monthly_active_persons`, kèm 2 ngưỡng đèn | Một dòng trong spec | 15 phút |
| **05/09** | Sửa **§6 mục 1 của v2** — thêm điều kiện pháp lý vào điều kiện mở lại boss (§4 mục 7) | Diff trên `01-dinh-nghia-san-pham-v2.md` | 10 phút |
| **06/09** | Bổ sung **"không livestream, vĩnh viễn"** vào danh sách 20 mục §6 của v2 | Diff | 5 phút |
| **07/09** | Viết **draft v0 của ToS + Privacy** theo §8 — bằng tay, tiếng Việt, chưa cần luật sư rà. Sẽ dùng lại nguyên ở hạng mục 9 của bảng pw | 2 file markdown | 3 giờ |

**BẢY câu gửi luật sư — nguyên văn để copy** [CHỐT 2026-08-28, QĐ-14 — danh sách hợp nhất, thay thế mọi danh sách rời ở `01` §12, `03` §10, `04` §8 và `_issues-digest.md` #20]:

> **1.** Chốt Sổ là một web app: nhóm kín tối đa 8 người, mỗi người nộp 1 ảnh/ngày kèm nhãn hai trạng thái; **không có chat, không có bình luận, không có caption, không có feed công khai, không có trang khám phá, không có tìm kiếm người dùng, không có kết bạn giữa các nhóm**. Nó có phải "mạng xã hội" theo Điều 3 Nghị định 147/2024 không? Nếu có: (a) cách đo **"người sử dụng thường xuyên/tháng"** và **"lượt truy cập/tháng"** chính xác là gì, và (b) ngưỡng nào bind trước ở một sản phẩm mà người dùng mở app hằng ngày?
>
> **2.** Nghĩa vụ tại **Điều 27 khoản 3 điểm a và b Nghị định 147/2024** (lưu họ tên, ngày sinh, số điện thoại di động VN hoặc số định danh cá nhân; xác thực tài khoản) áp dụng cho **mọi** tổ chức/doanh nghiệp cung cấp dịch vụ MXH trong nước, hay **chỉ** cho đơn vị đã được cấp Giấy phép? Cụ thể: nếu chúng tôi chỉ có **Giấy xác nhận thông báo**, chúng tôi **có bắt buộc phải triển khai xác thực số điện thoại** không?
>
> **3.** Nếu chỉ có **Giấy xác nhận thông báo** (chưa có Giấy phép), chúng tôi có được phép **phát sinh doanh thu** từ dịch vụ không — bao gồm cả doanh thu quảng cáo hiển thị trong sản phẩm? Cụ thể hơn: (a) một cá nhân (chưa lập doanh nghiệp) bán **sản phẩm vật lý in từ nội dung người dùng** (cuốn sổ ảnh) cho chính người dùng của mình có bị coi là "hoạt động phát sinh doanh thu của dịch vụ MXH" không; (b) việc **thu ý định đặt trước mà không nhận tiền** có nằm ngoài phạm vi cấm không?
>
> **4.** (Điều 32 BLDS 2015 — hình ảnh cá nhân, câu 1) Trong một sổ kín, ảnh do thành viên A nộp tiếp tục hiển thị cho 4 thành viên còn lại **sau khi A rời sổ**. Cơ sở pháp lý nào cho phép tiếp tục hiển thị: đồng ý đã cho tại thời điểm nộp có còn hiệu lực sau khi chủ thể rút khỏi dịch vụ không, và nếu không thì nghĩa vụ của chúng tôi là gì (xoá ngay / ẩn / giữ theo thoả thuận trong ToS)?
>
> **5.** (Điều 32 BLDS 2015, câu 2) Một tấm ảnh ghép (card) chứa hình của 4–8 người được **hệ thống tự sinh và gửi vào nhóm chat của chính những người đó**, và một bản in giấy có thể được **bán cho một trong số họ**. (a) Cần thu đồng ý riêng của từng người có hình cho hành vi in/bán không, hay đồng ý khi tham gia sổ là đủ? (b) Nếu một người rút đồng ý sau khi bản in đã giao, nghĩa vụ của chúng tôi là gì?
>
> **6.** (Luật 91/2025 + NĐ 356/2025) Chúng tôi định **không lưu ngày sinh**, chỉ lưu một cờ boolean `is_16_plus` do người dùng tự khai, kèm một dòng cảnh báo. (a) Cờ boolean tự khai đó có đủ để chứng minh đã thực hiện nghĩa vụ xác định độ tuổi theo Luật ANM 116/2025 Điều 16 khoản 2 không? (b) Một chỉ số hiển thị dạng "tổng số tấm đã nộp" **không giảm khi người dùng xoá ảnh của mình** (vì nó là số đếm lịch sử, không chứa nội dung) có vi phạm quyền xoá dữ liệu không?
>
> **7.** Nếu câu 1 được trả lời là "có, là MXH": **máy chủ có bắt buộc đặt tại Việt Nam** ngay ở tier Giấy xác nhận thông báo không, hay nghĩa vụ nội địa hoá (NĐ 53/2022) chỉ phát sinh khi có yêu cầu bằng văn bản của Bộ Công an? Câu này quyết định `03` §10 câu 5 — nó kéo mốc "lập TNHH" từ ngưỡng người dùng về **ngày 0**.

**Không làm trong tuần này** (trùng v2 §12): lập TNHH · đăng ký D-U-N-S · mở tài khoản Apple/Google · viết code sản phẩm · thuê tư vấn giấy phép MXH.

---

## 12. NHỮNG ĐIỀU CHƯA XÁC MINH ĐƯỢC — NÓI THẲNG

> ### ✅ CẬP NHẬT 04/09/2026 — bốn dòng trong danh sách này đã ĐÓNG, một dòng MỚI mở ra
>
> | Trạng thái | Nội dung |
> |---|---|
> | ✅ **ĐÓNG** | **Ngưỡng >10.000 lượt/tháng HOẶC >1.000 người thường xuyên** — 4 nguồn độc lập nhất quán. Trần 60/85/100 sổ đứng vững |
> | ✅ **ĐÓNG** | **"Chỉ MXH có Giấy phép mới được phát sinh doanh thu"** — **NĐ 147/2024 Điều 24 khoản 6 điểm d** |
> | ✅ **ĐÓNG** | **Ngưỡng miễn thuế hộ KD/cá nhân 2026 = 500 triệu đ/năm** (không phải 100, không phải 200) |
> | ✅ **ĐÓNG** | **Lệ phí môn bài bị xoá bỏ với hộ KD/cá nhân KD từ 01/01/2026** (Điều 10 NQ 198/2025/QH15) |
> | 🔧 **SỬA** | **Chi phí SMS OTP sai 8–23 lần**: ZNS OTP **330đ/tin (đã VAT)** hoặc SMS Brandname **800–900đ**, không phải $0,2852 ≈ 7.500đ. Xem mục 2 dưới đây — **vế tiền của bất đồng đó đã sụp, vế pháp nhân thì nặng thêm** |
> | 🟡 **MỚI, chưa đóng** | Ngưỡng 10.000 lượt có tính theo **"số liệu thống kê trung bình trong 06 tháng liên tục"** không? Cụm này được xác minh chắc chắn cho ngưỡng **100.000 lượt xuyên biên giới (Điều 23 khoản 3)**; một nguồn thứ cấp áp nó cho cả ngưỡng 10.000. **Nếu đúng, mọi đèn cảnh báo phải đo trên trung bình trượt 6 tháng chứ không phải trên một tháng đỉnh — tức đệm rộng hơn nhiều so với thiết kế hiện tại.** Câu phụ, 0đ, thêm vào email luật sư |
> | 🟡 **MỚI, chưa đóng** | Điều kiện cấp **Giấy phép MXH** bao gồm **máy chủ đặt tại Việt Nam** + lưu dữ liệu ≥2 năm + xác thực bằng SĐT VN/số định danh + tên miền `.vn` + pháp nhân VN. §5 của tài liệu này đã có vế "địa chỉ IP tại VN"; nguồn mới nói rõ hơn. **Hệ quả: trần 60 sổ là trần KIẾN TRÚC, không chỉ trần hành chính** — vượt nó là phải di trú Supabase Singapore + R2 về hạ tầng VN |
>
> Chi tiết, phép tính và nguồn: **`11` §6 và §7**.


| # | Điều chưa chắc | Mức ảnh hưởng | Ai giải được |
|---|---|---|---|
| 1 | **Điều/khoản gốc của NĐ 147/2024 quy định ngưỡng 10.000 lượt / 1.000 người.** Con số nhất quán qua VietnamNet, Vạn Luật, Thư viện Pháp luật nhưng **không trích được nguyên văn từ Công báo** | Cao — nó là trục của toàn tài liệu | Luật sư đối chiếu bản gốc |
| 2 | **Định nghĩa "lượt truy cập thường xuyên"** — session? pageview? unique visitor? Chênh lệch giữa ba cách hiểu là **hơn 10 lần** ở một sản phẩm mở hằng ngày. **Định nghĩa tạm đang dùng (A56/QĐ-24): phiên mới sau 30 phút không hoạt động, đếm trên mọi route kể cả trang public — đếm rộng, báo động sớm** | 🔴 Rất cao — quyết định trần beta là 60 sổ hay 600 sổ | Câu hỏi 1 gửi luật sư |
| 3 | **Điều 27 khoản 3 có áp cho tier thông báo không** | 🔴 Rất cao — quyết định "có SMS OTP hay không" | Câu hỏi 2 |
| ~~4~~ | ✅ **ĐÓNG 04/09/2026 — "Chỉ MXH có Giấy phép mới được phát sinh doanh thu": NĐ 147/2024 Điều 24 khoản 6 điểm d.** Đã trích được số điều (`11` §6 #2). Hệ quả: **A62 ("doanh thu 0đ tuyệt đối 6 tháng đầu") không còn là lựa chọn kinh doanh — nó là nghĩa vụ luật định** | 🔴 Rất cao, nhưng **đã trả lời** | Câu 3 chuyển sang dạng "xin xác nhận cách hiểu", rẻ hơn nhiều |
| 5 | **`goal_text` free-text có bị coi là "thông tin về đời sống riêng tư, bí mật cá nhân"** (Điều 4 NĐ 356/2025) không | Trung bình — quyết định miễn trừ Đ.38.2 | Luật sư; nhưng đã hạ mức xuống "chi phí đã biết" ở §0 |
| ~~6~~ | ~~**Lệ phí môn bài có thực sự bị bãi bỏ từ 2026 không**~~ ✅ **ĐÓNG 04/09/2026** — bị xoá bỏ với hộ KD/cá nhân KD từ 01/01/2026 theo Điều 10 NQ 198/2025/QH15 | — | ✅ đã trả lời |
| ~~7~~ | ~~**Ngưỡng doanh thu miễn thuế cho cá nhân/hộ kinh doanh 2026**~~ ✅ **ĐÓNG 04/09/2026 — 500 triệu đồng/năm** (không phải 100, không phải 200). Ở mức doanh thu 0đ tuyệt đối của 12 tháng đầu, ngưỡng này xa tới mức không còn là ràng buộc | — | ✅ đã trả lời |
| 8 | **Lệ phí nhà nước cho Giấy phép MXH** | Trung bình | Cổng DVC / luật sư |
| 9 | **Thời gian thực tế cấp Giấy phép MXH** (25 ngày quy định vs 3–6 tháng thực tế) | Cao — quyết định phải khởi động sớm bao nhiêu | Luật sư đã làm hồ sơ tương tự |
| 10 | **NĐ 147/2024 có nghị định sửa đổi nào sau tái cơ cấu bộ ngành 2025 không** — thẩm quyền đã chuyển sang **Bộ VHTTDL**, xác nhận qua thủ tục hành chính, nhưng chưa xác minh có văn bản sửa đổi nội dung | Trung bình | Luật sư |

---

## Bất đồng với định nghĩa sản phẩm v2

**1. 🔴 Ngưỡng cảnh báo của v2 §9 đặt sai đơn vị và trễ ~2,5 lần.**
v2 ghi: _"một dòng trong dashboard cảnh báo ở **700 người dùng thường xuyên/tháng** (đệm 30% dưới ngưỡng)"_. Nhưng ngưỡng luật là **OR**, và nhánh `10.000 lượt truy cập/tháng` bind trước ở một sản phẩm mà core loop là mở app **hằng ngày**. Ở 25 lượt/người/tháng và **A = 4,0 người/sổ** (A70), 10.000 lượt = **400 người ≈ 100 sổ**, trong khi 700 người ≈ **175 sổ** — tức đèn của v2 chỉ kêu sau khi đã vượt ngưỡng luật 75 sổ. **Đề nghị sửa:** thay đèn cảnh báo bằng **hai** counter với hai ngưỡng (§10), và ghi trần beta là **60 sổ**, không phải "vài trăm".

**2. 🔴 "Không SMS OTP ở MVP" có thể không sống được qua mốc lập pháp nhân.**
v2 §6 mục 7 ghi điều kiện mở SMS OTP là _"mốc 700 người dùng thường xuyên/tháng"_. Nhưng **Điều 27 khoản 3 điểm a/b NĐ 147/2024** đặt nghĩa vụ lưu họ tên · ngày sinh · SĐT di động VN (hoặc số định danh) lên **"tổ chức, doanh nghiệp cung cấp dịch vụ mạng xã hội trong nước"** — văn bản như đã kiểm chứng **không phân biệt tier giấy phép và tier thông báo**. Nếu luật sư xác nhận điều này, thì nghĩa vụ OTP gắn vào mốc **"có pháp nhân + nộp thông báo"** (≈30 sổ), không phải mốc 700 người. Hệ quả: nghĩa vụ OTP gắn vào mốc **"có pháp nhân + nộp thông báo"** (≈30 sổ), không phải mốc 700 người.

> 🔧 **[SỬA 04/09/2026 — vế TIỀN của bất đồng này đã SỤP, vế PHÁP NHÂN thì nặng thêm]**
> Giá thật của kênh xác thực trong nước là **ZNS OTP 330đ/tin (đã VAT)** hoặc **SMS Brandname 800–900đ/tin**, không phải $0,2852 ≈ 7.500đ (đó là giá Twilio quốc tế). Toàn bộ chi phí OTP ở mốc 1.000 người là **495.000đ – 1,35 triệu**, không phải 11 triệu — **sai 8–23 lần** [`11` §7.3].
> ⇒ **Không còn ai đổi ý vì tiền.** Hai vế còn sống, và cả hai đều nặng hơn vế tiền đã mất:
> 1. **SẢN PHẨM**: +0,4 pw và phá quyết định "không màn đăng nhập" của v2 §5 + `03` §2.4 + `08`.
> 2. **PHÁP NHÂN**: **ZNS OTP đòi Zalo OA đã xác minh, tức đòi pháp nhân.** Nghĩa là nếu Điều 27 áp cho tier thông báo thì nó **buộc lập TNHH sớm** — đúng thứ lộ trình này đang cố hoãn. Đây mới là chi phí thật, và nó không đo bằng tiền tin nhắn.
>
> Đây vẫn là **câu hỏi số 2** gửi luật sư và vẫn **đáng giá hơn câu hỏi số 1** — nhưng lý do đã đổi.

**3. 🔴 v2 §8 tuyên bố "Giữ được" miễn trừ Điều 38.2 — quá tự tin.**
v2 phòng thủ đúng nhánh "dữ liệu sức khoẻ" (free-text, không taxonomy, không HealthKit) nhưng **bỏ sót nhánh rộng hơn**: Điều 4 NĐ 356/2025 liệt kê **"thông tin về đời sống riêng tư, bí mật cá nhân"** trong danh mục nhạy cảm. Một ô kèo tự viết cộng một tấm ảnh đời thường mỗi ngày rơi vào vùng tranh cãi của mục đó, và không có thiết kế nào né được nó mà vẫn giữ được sản phẩm. **Đề nghị sửa dòng trạng thái từ "Giữ được" thành "Giảm rủi ro; nếu mất thì chi phí là ~2–3 ngày công giấy tờ/năm, không phải một dự án"** — hạ nó khỏi danh sách sống-còn, đúng chỗ của nó.

**4. 🟠 §6 mục 1 (boss opt-in v1.2) có điều kiện mở lại thiếu vế pháp lý.**
Điều kiện hiện tại thuần số (`sổ-D28` chênh <10 điểm → gỡ). Nhưng cái đắt của boss không phải retention, mà là **Giấy phép G1 + Quyết định phát hành**. Đề nghị thêm: _"điều kiện đủ là ý kiến luật sư bằng văn bản rằng cơ chế cụ thể đó không cấu thành G1"_.

**5. 🟠 §5 màn 7 nói "cam kết SLA gỡ nội dung" số ít — phải là HAI SLA.**
48 giờ là SLA **với khiếu nại người dùng** (v2 chốt đúng: 48h khiêm tốn tốt hơn 24h bị vi phạm). Nhưng **24 giờ / 06 giờ khẩn cấp với yêu cầu của cơ quan nhà nước là luật định, không thương lượng được**. Trang chính sách phải ghi rõ hai con số cho hai đối tượng, và founder phải có script khoá sổ khẩn cấp chuẩn bị sẵn.

**6. 🟡 v2 không có cơ chế lọc chủ động nào cho ảnh.**
Chỉ có chặn từ khoá ở ô kèo. Luật ANM 116/2025 Điều 16 khoản 3 đòi "biện pháp kỹ thuật để phát hiện, ngăn chặn". Đề nghị bổ sung **auto-hide khi có ≥1 report** (≈0 pw thêm, dùng chung với hạng mục 9) và ghi lập luận "quy mô nhóm kín ≤8 người, không người lạ, là biện pháp ngăn chặn cấu trúc" vào ADR **ngay bây giờ**, không phải khi bị hỏi.

**7. 🟡 v2 §12 cấm lập TNHH trong Bước 0 — tôi đồng ý — nhưng không đặt ngày nào để làm sau đó.**
Đề nghị neo vào **số sổ**, không vào ngày: lập TNHH khi chạm **30 sổ** (ở A = 4,0: đèn vàng 60 sổ còn cách **30 sổ**, đèn đỏ 85 sổ còn cách **55 sổ**, ngưỡng luật 100 sổ còn cách 70 sổ — đủ đệm 3–6 tháng cho hồ sơ giấy phép).

**Không bất đồng** với: bỏ boss · không lên store · rollover batch 04:00 · strip EXIF · TTL 72h · `preset_id` không lưu per-user · không nhận diện khuôn mặt · không vật phẩm ảo · age gate ≥16 · Supabase SG + R2 với `StorageAdapter` · SLA 48h cho khiếu nại người dùng · Vietnam-only. Toàn bộ đều là quyết định pháp lý đúng, và đa số đúng vì lý do mà v2 đã nêu chính xác.

---

## Câu hỏi mở cần founder quyết

| # | Câu hỏi | Vì sao phải quyết bây giờ | Hạn |
|---|---|---|---|
| 1 | **Chi 5–15 triệu cho ý kiến luật sư bằng văn bản trước khi viết dòng code đầu tiên — có hay không?** Nếu không, founder đang cược **20 tuần lịch** (6,5 pw × 3,1 tuần/pw ở 13 giờ code/tuần — A80/A82/A83; **không phải 10 tuần**, con số đó chỉ đúng ở 40 giờ/tuần) + 70–95 triệu chi phí cơ hội vào ba giả định chưa ai xác nhận | Câu hỏi 3 (thu tiền cần giấy phép) có thể xoá toàn bộ đường ray doanh thu. Biết trước ngày 22/09 rẻ hơn biết vào tháng thứ 5 | **03/09** |
| 2 | **Nếu luật sư trả lời "có, Điều 27 áp cho cả tier thông báo" — chọn gì?** (a) Bật SMS OTP, +0,4 pw + 4,5 triệu chi phí, phá quyết định "không màn đăng nhập"; (b) Hoãn lập TNHH, giữ tư cách cá nhân lâu hơn, chấp nhận trách nhiệm cá nhân vô hạn; (c) Dừng ở 30 sổ vĩnh viễn, coi đây là portfolio piece | Đây là ngã ba thật, không có đáp án hiển nhiên. Nên nghĩ **trước** khi có câu trả lời, để không quyết trong lúc hoảng | Trước khi luật sư trả lời |
| 3 | **Nếu "phải có giấy phép MXH mới được thu tiền" là đúng — dự án này còn là "small profitable business" không, hay chỉ còn là portfolio piece?** v2 §9 mục 5 đã gọi tên hai khả năng đó; câu trả lời pháp lý này chọn hộ một trong hai. Đây chính là **D-04** của bảng phán quyết (định nghĩa thành công A hay B), khuyến nghị **B trong 12 tháng đầu** | Kill gate 31/03/2027 **đã được sửa xong**: vế "doanh thu = 0" **ĐÃ BỊ BỎ** khỏi điều kiện (A64/QĐ-01b — nếu pháp lý cấm phát sinh doanh thu thì doanh thu 0 là **hệ quả pháp lý, không phải tín hiệu thị trường**). Điều kiện dừng còn lại: **`> 15 giờ/tuần` VÀ `sổ-D28 < 25%`**. Việc còn phải quyết chỉ là **A hay B** | 22/09 |
| 4 | **Ai là "người chịu trách nhiệm nội dung" khi lập TNHH?** Điều kiện giấy phép MXH đòi nhân sự VN chịu trách nhiệm quản lý nội dung + "bộ phận quản lý nội dung" và "bộ phận quản lý kỹ thuật". Với team 1 người, hồ sơ này khai thế nào cho đúng sự thật mà vẫn qua được? | Đây là điểm hồ sơ dễ trượt nhất với founder một mình, và nó không sửa được bằng tiền | Trước 30 sổ |
| 5 | **Có chấp nhận rằng tám giới hạn thiết kế L1–L8 là vĩnh viễn không?** Chúng khoá vĩnh viễn: không feed, không khám phá, không kết bạn, không livestream, trần 8 người/sổ. Đó là khoá luôn một loạt hướng tăng trưởng | Nếu founder không thật lòng chấp nhận, mục pháp lý của ADR-000 sẽ bị phá vào tháng thứ 4 dưới áp lực tăng trưởng — và lúc đó không ai nhớ nó là hàng rào pháp lý | **04/09**, khi viết mục pháp lý của `ADR-000-bat-bien.md` |

### Hai việc pháp lý CHỜ FOUNDER QUYẾT — máy không được tự quyết

> ⚠️ **D-06 — Chức năng export (tải dữ liệu về): ai trả 0,3 pw?**
> Ba chỗ trong hồ sơ đã **hứa** đường tải dữ liệu về: §8.1 mục 7 (nghĩa vụ luật định "cung cấp bản sao trong 10 ngày"), §8.2 điều 6 của ToS ("báo trước ≥14 ngày và cho tải ảnh về"), và A38 (dọn sổ `archived` phải kèm đường tải về). **Nó không nằm trong bất kỳ bảng pw nào**, trong khi `10` §3.1 lại định **BÁN** đúng thứ đó (gói P1, 99k/sổ/năm).
> · **Lựa chọn A — làm phiên bản tay, 0 pw:** một truy vấn SQL + zip thủ công, gửi qua email liên hệ, SLA 10 ngày, quy trình viết trong `RUNBOOK.md`. Được: giữ đúng lời hứa, không tốn pw. Mất: tốn giờ vận hành của founder mỗi lần có yêu cầu (ước tính 20–30 phút/yêu cầu, ăn vào trần 10 giờ/tuần).
> · **Lựa chọn B — build nút export tự động, +0,3 pw:** phải cắt 0,3 pw ở chỗ khác (trần 3,5 pw của A84 đang đã thiếu 1,08 pw — A85/D-01), và khoản cắt phải ghi vào `docs/adr/pw-ledger.md`.
> · **Khuyến nghị của bảng phán quyết: A (phiên bản tay).** Kèm một ràng buộc cứng: **xoá gói P1 khỏi `10` §3.1** — không được bán thứ mà luật buộc phải cho.
> · **Hạn: 07/09/2026** (trước khi viết Chính sách quyền riêng tư — con số và cách thực hiện in thẳng vào đó). Quá hạn ⇒ khuyến nghị A tự động có hiệu lực và phải ghi vào `ADR-000-bat-bien.md` kèm dòng "quyết định mặc định do quá hạn".

> ⚠️ **D-07 — Ai trực SLA 48h trong **10 ngày** Tết (`book_date` 03/02 → 12/02/2027, tức 03/02 04:00 → 13/02 03:59 ICT — A120)?** _(Mục D-07 của `_rulings.md` viết "11 ngày"; A120 là hằng số có hiệu lực và nó ghi **10 ngày** — dùng 10.)_
> SLA 48h với khiếu nại người dùng **đã công bố trên trang chính sách**, và SLA 24h/6h với cơ quan nhà nước là **luật định**. Bus factor = 1, founder về quê, cửa sổ Tết freeze là `book_date` **03/02 → 12/02/2027** (A120).
> · **Lựa chọn A — có người thứ hai:** một người bạn có login **chỉ-đọc** + bộ câu trả lời mẫu + số điện thoại founder. Được: dịch vụ chạy bình thường. Mất: phải có một cái tên thật, và người đó chạm vào dữ liệu người dùng ⇒ phải ghi vào Chính sách như **bên xử lý dữ liệu**.
> · **Lựa chọn B — nghỉ Tết công khai:** bật `remote_config['service_paused']`, **thông báo trước ≥14 ngày** (tức chậm nhất **20/01/2027**). Được: 0 rủi ro SLA khiếu nại. Mất: **không** miễn được SLA 24h/6h với cơ quan nhà nước — founder vẫn phải cầm điện thoại.
> · **Khuyến nghị: A**; nếu không có tên trước **15/12/2026** thì **B tự động có hiệu lực**.

---

## Đã cắt (giữ lại để không bị đề xuất lại)

> Luật: thứ đã bị cắt mà quay lại thì **mặc định bị cắt lần nữa**, trừ khi có khoản đối trừ đã ghi vào `docs/adr/pw-ledger.md` (nguyên tắc 4 + A87).

| # | Đã cắt gì | Vì sao | Hệ quả trong tài liệu này | Điều kiện mở lại |
|---|---|---|---|---|
| 1 | **Nút thả tim ẩn danh** (0,20 pw) — C03 / S01 | Ba tài liệu độc lập (`03`, `04`, `07`) chọn nó làm ứng viên cắt; nó đã bị "bán" 3 lần nên **không còn là tiền**, chỉ còn là một khoản cắt | §3 dấu hiệu 4 ("tương tác") **không còn tựa vào nút tim**: chuyển từ 🟠 CÓ-yếu sang 🟡 TRANH CÃI, kết luận §0 và §3 đổi từ "4/5" sang "3/5 rõ + 1 tranh cãi". L8: trang public **không có nút tương tác nào** | **T13+** (sau 26/01/2027). Nếu mở lại: (a) khoản 0,20 pw phải được cấp lại từ `pw-ledger.md`, (b) **§3 dấu hiệu 4 quay lại 🟠 CÓ** và lập luận pháp lý phải viết lại, (c) không được dùng việc "đã cắt tim" như lập luận không-phải-MXH ở bất kỳ hồ sơ nào |
| 2 | **Việc NỚI trần vận hành (30 → 35 → 60 sổ) bằng cách hỏi lại** — S22 | Hai trần khác nhau bị trộn làm một. Trần **vận hành** = 35 sổ sống (8,4 phút/sổ/tuần trên trần 10 giờ/tuần, A92); trần **hành chính/pháp lý** = 60 sổ (điểm đèn vàng, A93). Ở 60 sổ giờ vận hành đã là đúng 10 h/tuần ⇒ **không còn đệm nào** | Câu hỏi mở cũ số 2 ("trần beta là 30 hay 60 sổ?") **đã bị xoá khỏi §Câu hỏi mở** — nó đã được chốt, không còn là câu hỏi. Kế hoạch beta duy nhất: 12 sổ đợt 1 → ≤30 sổ đợt 2 (QĐ-25 / A88–A91) | **Không mở lại bằng cách hỏi lại.** Chỉ mở khi có **cả hai**: (a) số đo thật của `book_day.active_count` và của hai counter pháp lý cho thấy 60 sổ vẫn dưới đèn vàng, **và** (b) giờ vận hành thực đo ≤10 giờ/tuần trong 3 tuần liên tiếp. Ghi vào `ADR-000-bat-bien.md` |
| 3 | **Domain dự phòng thứ hai** — A68 / C45 | Đường thoát hiểm khi Zalo chặn domain là **mã 6 ký tự in trên card** (0đ), không phải mua thêm domain | §2 GIAI ĐOẠN 0 và §11 chỉ còn **MỘT** domain `chotso.vn` (**770.000đ**/năm) | Mua ngay trong tuần **nếu** buổi kiểm chứng 04/09 cho thấy Zalo **cảnh báo** domain `.vn` lạ |

---

_Nguồn kiểm chứng ngày 03/09/2026: [VietnamNet — MXH dưới 1.000 người dùng không cần cấp phép](https://vietnamnet.vn/mang-xa-hoi-duoi-1000-nguoi-su-dung-khong-can-phai-xin-cap-phep-2343248.html) · [Bộ KH&CN — quản lý trò chơi điện tử NĐ 147](https://mst.gov.vn/nghi-dinh-147-2024-nd-cp-quan-ly-chat-che-dich-vu-tro-choi-dien-tu-tren-mang-va-thong-tin-tren-internet-197241227124622733.htm) · [Bộ KH&CN — xác thực tài khoản MXH](https://mst.gov.vn/xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-cu-hich-moi-tu-nghi-dinh-147-2024-nd-cp-197241227105213649.htm) · [Thư viện Pháp luật — NĐ 356/2025 toàn văn](https://thuvienphapluat.vn/van-ban/Quyen-dan-su/Nghi-dinh-356-2025-ND-CP-huong-dan-Luat-Bao-ve-du-lieu-ca-nhan-687428.aspx) · [Thư viện Pháp luật — danh mục DLCN nhạy cảm](https://thuvienphapluat.vn/hoi-dap-phap-luat/danh-muc-du-lieu-ca-nhan-nhay-cam-tu-ngay-01012026-gom-co-nhung-du-lieu-nao-138076092.html) · [Thư viện Pháp luật — miễn trừ hộ KD/DN nhỏ/khởi nghiệp](https://thuvienphapluat.vn/phap-luat/mot-so-luu-y-khi-luat-bao-ve-du-lieu-ca-nhan-2025-co-hieu-luc-danh-cho-ho-kinh-doanh-doanh-nghiep-s-924781-244918.html) · [LuatVietnam — trẻ em dùng MXH từ 01/7/2026](https://luatvietnam.vn/tin-van-ban-moi/tre-em-dung-mang-xa-hoi-phai-dang-ky-tai-khoan-bang-thong-tin-cua-cha-me-tu-hom-nay-01-7-2026-186-109991-article.html) · [Chinhphu.vn — NĐ 330/2026 toàn văn](https://vanban.chinhphu.vn/?docid=219266&pageid=27160) · [LuatVietnam — NĐ 330/2026 phạt tới 3 tỷ](https://luatvietnam.vn/tin-van-ban-moi/nghi-dinh-330-2026-vi-pham-ve-bao-ve-du-lieu-ca-nhan-co-the-bi-phat-den-3-ty-dong-186-111871-article.html) · [LuatVietnam — vật phẩm ảo NĐ 174/2026](https://luatvietnam.vn/tin-van-ban-moi/tu-01-7-2026-mua-ban-vat-pham-ao-trong-game-phat-den-3-trieu-dong-186-109743-article.html) · [LSVN — quy đổi vật phẩm game phạt tới 200 triệu](https://lsvn.vn/quy-doi-vat-pham-game-ra-tien-co-the-bi-phat-den-200-trieu-dong-a173378.html) · [VNG Cloud — nội địa hoá dữ liệu NĐ 53/2022](https://vngcloud.vn/vi/blog/huong-dan-ve-noi-dia-hoa-du-lieu-tai-viet-nam) · [Thư viện Pháp luật — thủ tục cấp GP MXH 2026](https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/chinh-sach-moi/109686/quy-trinh-thu-tuc-cap-giay-phep-cung-cap-dich-vu-mang-xa-hoi-moi-nhat-2026) · [Cổng DVC Quốc gia — thủ tục 2.002181](https://dichvucong.gov.vn/p/home/dvc-chi-tiet-thu-tuc-hanh-chinh.html?ma_thu_tuc=2.002181) · [Luật Việt An — chi phí thành lập công ty 2026](https://luatvietan.vn/chi-phi-thanh-lap-cong-ty.html) · [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) · [Google Play — UGC policy](https://support.google.com/googleplay/android-developer/answer/9876937?hl=en)_
