# 00 — KẾ HOẠCH TỔNG

> **Đây là tài liệu đầu tiên phải đọc trong repo này.** Đọc xong là hiểu toàn bộ dự án và biết làm gì tiếp, không cần mở file nào khác.
>
> **Viết 04/09/2026.** Nguồn chân lý cho mọi hằng số là `_rulings.md` (bảng phán quyết trọng tài, 03/09/2026: 123 giá trị chuẩn A01–A123 · 53 phán quyết mâu thuẫn · 25 phán quyết scope creep · 10 mục cần founder quyết). Khi file này lệch với `_rulings.md`, **`_rulings.md` thắng**.
>
> **Trạng thái dự án hôm nay:** 0 dòng code sản phẩm · **15 tài liệu kế hoạch** (file này + `01`…`13`, trong đó có hai file mang tiền tố `11-`) đã qua một vòng phân xử trọng tài + một vòng soát cuối · Bước 0 (thí nghiệm chạy tay 14 ngày) khởi động **20:40 ngày 08/09/2026**, tức **còn 4 ngày** · dòng code đầu tiên **23/09/2026**.

---

## 1. SẢN PHẨM TRONG MỘT CÂU

> # **"Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm, không ai cài app."**

**Giải thích cho người chưa biết gì:**

1. Một nhóm bạn 3–8 người có một cuốn "sổ" chung trên web. Mỗi tối 21:00, **một người bất kỳ** bấm nút "Chốt sổ" → hệ thống sinh ra một tấm ảnh tổng kết ngày hôm đó → người đó **dán tấm ảnh vào nhóm Zalo**.
2. Ai thấy tấm ảnh thì chạm vào, mở ra một trang web, nộp **đúng một tấm ảnh** của mình kèm **đúng một nhãn: XONG hoặc TOANG**. Hết ~16 giây theo thiết kế của `01` §3 — ⚠️ `08` §11 (chủ quyền UX) đo lại ra **18–22 giây** trên máy tầm trung nếu giữ đủ ba hành động, và đề nghị gộp nhãn XONG/TOANG thành chính nút Gửi (−0,05 pw). **Bất đồng này chưa được gỡ.** Không cài ứng dụng, không đăng ký, không mật khẩu.
3. Việc cười nhau, cà khịa nhau diễn ra **bằng sticker ngay trong Zalo** — không phải trong sản phẩm. Sản phẩm chỉ giữ ba con số: ngày thứ mấy, bao nhiêu tấm, chuỗi mấy ngày.

**Tên:** tài liệu đang viết **Chốt Sổ** (domain `chotso.vn`); tên gốc là **Teemi**. **Founder chưa duyệt việc đổi tên** — xem mục 5, dòng F-01.

---

## 2. CHUYỆN GÌ ĐÃ XẢY RA

**Ý tưởng gốc (tháng 8/2026).** Một ứng dụng tên **Teemi** cho nhóm bạn 4–6 người. Mỗi người tự đặt một mục tiêu riêng cho ngày hôm đó — đứa chạy bộ, đứa đọc sách — rồi chụp một tấm ảnh chứng minh đã làm. Cả nhóm cùng "đánh" một con quái vật chung: ai nộp thì nó mất máu, ai bỏ lỡ thì nó hồi máu.

**Nghiên cứu (8 báo cáo) tìm ra ba điều.** (1) Chỗ trống là thật: khảo 16 ứng dụng cùng loại, không cái nào giải bài *"mỗi người một mục tiêu khác nhau, vẫn có một nghi thức chung"*. (2) Nhóm nhỏ, kín, 4–6 người là hình thái duy nhất đang thắng — Locket 91 triệu lượt cài, đã có lãi; Yope tăng 30 lần trong 6 tháng; mọi ứng dụng dạng bảng tin công khai cùng thời đều đã chết. (3) Ở Việt Nam, Zalo hút gần hết thời gian trò chuyện: 98% người trẻ dùng hằng tuần.

**Phản biện (6 tài liệu đối kháng) bác bốn thứ.** *Một*, cơ chế quái vật sai về toán: "cả 5 người cùng nộp trong một ngày" xảy ra **một lần mỗi 98 ngày**, còn "hồi máu khi có người bỏ lỡ" khiến sau một tuần con quái vật khoẻ hơn ngày đầu — tức nhóm nhận bằng chứng trực quan rằng nỗ lực của họ vô nghĩa. *Hai*, đo bằng số người dùng che mất sự thật: nhóm 5 người mất 4 người vẫn cho "20% người dùng ở lại" trong khi nhóm đã chết hẳn. *Ba*, tên Teemi bị Temu đè kết quả tìm kiếm ở mọi biến thể. *Bốn*, thứ quyết định: để một nhóm 5 người cùng cài đặt và cùng nộp ảnh trong 48 giờ, xác suất chỉ khoảng **2%**.

**Vì sao đổi hướng.** Con số 2% giết dự án trước mọi thứ khác, và không sửa được bằng cách làm ứng dụng đẹp hơn. Nên nghi thức được chuyển **ra khỏi ứng dụng, vào đúng nơi nhóm bạn đã ngồi sẵn**: nhóm Zalo. Không có ứng dụng để cài thì cũng không có ứng dụng để gỡ. Cà khịa dùng sticker có sẵn của Zalo — thứ không phải xây, và không bao giờ thua đồ tự viết.

Cái giá: bỏ toàn bộ hệ quái vật, **đề xuất** đổi tên thành Chốt Sổ; đổi lại chi phí thử sai giảm từ 12,25 xuống **6,5 tuần-người**.

---

## 3. MƯỜI HAI QUYẾT ĐỊNH LỚN ĐÃ CHỐT

| # | Quyết định | Căn cứ (một dòng) | Thứ đã bị loại | Đọc chi tiết |
|---|---|---|---|---|
| 1 | **Hướng D-chat-native**: web app + card ảnh dán vào nhóm Zalo, không bắt cài app | Funnel "5 người cùng cài trong 48h" ra **~2%**; chi phí thử sai 6,5 pw so với 10,7 / 11,0 / 12,25 pw của ba hướng kia | Ba hướng A-witness, B-fixed-boss, C-duo-first | `01` §2 · `option-A/B/C/D` |
| 2 | **Xoá toàn bộ cơ chế boss** | P(cả nhóm nộp đủ) = q⁵ ⇒ 1 lần/98 ngày ở q=0,40; hồi máu ⇒ HP tuần 2 cao hơn ngày đầu | Hệ HP/damage/combo/critical, ~30 tham số phải tune liên tục | `critique` §3 mục 1–2 · `01` §2 |
| 3 | **Đơn vị đo là SỔ, không phải user hay lượt cài** | Nhóm 5 mất 4 người: user retention 20% nhưng nhóm chết 100% ⇒ mọi quyết định tiếp theo đều sai | Mọi metric theo user; OMTM nay là `sổ-D28` | `06` §1 · A08/A23 |
| 4 | **Ba trạng thái ngày: XONG · TOANG · VẮNG** | Bằng chứng Duolingo: phải **làm mềm** mất mát, không **xoá** mất mát. TOANG giữ nghĩa vụ mà bỏ trạng thái thất bại | Nhị phân "xong / không xong" | `01` §4.3 |
| 5 | **Ngày = 04:00 → 03:59 ICT**, tổng hợp theo lô lúc 04:05 | Tệp Gen Z ngủ muộn ⇒ xoá một trạng thái thất bại nhân tạo; chạy theo lô còn phá vế "tương tác **đồng thời**" của định nghĩa trò chơi G1 | Ngày 00:00 · rollover realtime · cron 21:00 (−0,10 pw) | `04` §3 · A01/A03/A04 |
| 6 | **Ngưỡng đủ mâm `k`=1/2 tính trên `A_eff = min(A(D), A(D−1))`** | `ceil(0,6×A)` **gãy tính đơn điệu ở A=4**; tính `k` trên `A` cùng ngày làm sổ 2 người **đứt chuỗi đúng ngày có thêm bạn** | Công thức `ceil(0,6×A)` — chết vĩnh viễn | `04` §4 · A06/A07 |
| 7 | **Kiến trúc: Next.js + Supabase (Singapore) + Cloudflare R2. Không app native, không store, không push riêng** | Vòng lặp sửa lỗi = deploy, không chờ duyệt; không EAS ($1.326/tháng ở 100k MAU), không chiến tranh với ROM Xiaomi/Oppo/Vivo | React Native + Expo · App Store/Play ở MVP · SMS OTP | `03` · `01` §2 |
| 8 | **Doanh thu 0đ TUYỆT ĐỐI trong 6 tháng đầu** | NĐ 147/2024 Điều 24 k.6 đ.d: chỉ MXH **có Giấy phép** mới được phát sinh doanh thu ⇒ đây là nghĩa vụ luật định, không phải lựa chọn | P1 bán export · P2 sổ in Tết · P3 B2B · quảng cáo · fake door thu tiền | `05` §0 · `10` §3–§4 · A62 |
| 9 | **Trần 60 sổ (pháp lý) và 35 sổ (vận hành), không nới** | 10.000 lượt/tháng ÷ 25 lượt/người ÷ 4,0 người/sổ = 100 sổ; đèn vàng ở 60%, đèn đỏ ở 85% | Mọi kế hoạch tăng trưởng vượt 60 sổ trong 12 tháng đầu | `05` §2 · A54/A73/A92/A93 |
| 10 | **14 ngày Bước 0 chạy tay, 0 dòng code sản phẩm** (08–21/09) | Giả thuyết lõi trả lời được bằng 8 nhóm Zalo + 1 Google Sheet + ảnh Canva: **~30 giờ, 0đ**. Nếu nó không hiện ra ở đó thì 260 giờ code cũng không làm nó hiện ra | Build trước rồi đo sau | `02` §5 · `13` §1 · `07` T1–T3 |
| 11 | **Không có vai "chủ sổ", không có chức năng kick** | ≥0,4 pw cho một tính năng mà tác dụng chính là drama. Trạng thái `removed` chỉ dùng cho ca kiểm duyệt của founder | Kick + vote đa số + 7 ngày grace + nghi thức chia tay | `08` §6.5 · A61 |
| 12 | **Ảnh gốc sống 72 giờ; thumbnail 320px giữ VĨNH VIỄN** | Toàn bộ thumbnail của 10.000 sổ chỉ tốn **$3/tháng** — kinh tế không biện minh được việc xoá ký ức người dùng | Xoá ảnh sau 30/90 ngày · **bán** quyền tải dữ liệu về (là nghĩa vụ luật định) | `01` §4.2 · A36/A38 · `11` §1.3 |

---

## 4. BẢNG HẰNG SỐ CHUẨN

> **Đây là bản trích 34 dòng hay dùng nhất. Từ điển đầy đủ 123 dòng (A01–A123) nằm ở `_rulings.md` mục A — tra ở đó, không tra ở đây.**
> Luật đọc: mọi con số trong **15 tài liệu** phải khớp cột "Giá trị". Cần con số khác thì phải trích dòng này và nói rõ vì sao — **không được im lặng ghi số khác**. Ô có nhãn `[chưa đo]` phải mang nhãn đó ở mọi nơi nó xuất hiện.

| Mã | Đại lượng | Giá trị |
|---|---|---|
| **Cơ chế ngày** | | |
| A01 | Định nghĩa NGÀY (`book_date`) | **04:00:00 → 03:59:59 ICT (UTC+7)** |
| A03 | Cron `rollover` | `5 21 * * *` UTC = **04:05 ICT** (biên nộp muộn 120 s, A02) |
| A06 | `A_eff` | **`min(A(D), A(D−1))`** |
| A07 | Ngưỡng đủ mâm `k` | **1 nếu `A_eff ≤ 2`; 2 nếu `A_eff ≥ 3`** |
| A08 | `group_alive` | **≥3 người nộp ≥1 tấm trong 7 ngày gần nhất.** Cấm nới sang ≥2 |
| A10 | Van nghỉ | **2 ngày hụt / cửa sổ 7 ngày trượt** — ngày được van đỡ: chuỗi đóng băng, không vào mẫu số `q_c` |
| **Metric** | | |
| A14 | `roster_size` (mẫu số) | Số người nộp ≥1 tấm trong **3 ngày đầu**; **đóng băng 14 ngày** |
| A15/A16 | `q_c` = có mặt ÷ `roster_size` | **DỪNG < 0,35 · ĐI ≥ 0,45** · vùng xám 0,35–0,45 = chạy lại cohort |
| A17 | `q_c` giả định thiết kế | **0,53** `[suy luận, chưa đo — giả thuyết H2]` |
| A18 | `q_x` = XONG ÷ `roster_size` | **ĐI ≥ 0,30**; dưới ngưỡng ⇒ nhãn đang gây nhục, phải đổi |
| A20 | Tiêu chí H2 | **≥60% sổ nhánh A đạt ≥9/14 ngày tính** |
| A21/A22 | H1 ở Bước 0 | **CHỈ có quyền DỪNG** (`click-shortlink < 40%`). Đo bằng **112 shortlink** (8 sổ × 14 ngày) |
| A23/A24 | `sổ-D28` (OMTM) | Cohort **02/12 → 29/12/2026**. **DỪNG < 25%** · xám 25–35% · **≥35% ⇒ mở khoá app native** |
| A25 | Cỡ mẫu cổng `sổ-D28` | **n ≥ 24 sổ**, in kèm **KTC 95% = ±17 điểm** mỗi lần trích |
| A26 | Neo `B` | % sổ **nhánh A (n=5)** còn `group_alive` ở ngày 14 — bước nhảy **20 điểm**, phải in kèm |
| **Schema & dữ liệu** | | |
| A30/A31 | Tên bảng | **`book` / `book_id`** · **`book_day`** — tiếng Anh, không `group`, không `so` |
| A36/A38 | TTL ảnh | Ảnh gốc **72 giờ** · thumbnail 320px ~18 KB **VĨNH VIỄN** |
| A40/A41 | Card PNG | **TTL 90 ngày**, hết hạn thay bằng ảnh tĩnh **KHÔNG 404** · **150 KB** |
| A43 | Bảng chữ mã sổ | **28 ký tự** `23456789ACDEFGHJKMNPQRTUVWXY`, độ dài 6 |
| A46 | Trần người/sổ | **8** |
| A47 | Lưu tuổi | **`is_16_plus` + `age_gate_at`. KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** |
| A51 | Số event analytics | **32 event**, danh mục duy nhất ở `04` §7.1. Số 25 để trống vĩnh viễn |
| **Pháp lý** | | |
| A54 | Đèn cảnh báo | `monthly_visits` **vàng 6.000 / đỏ 8.500** · `monthly_active_persons` **vàng 600 / đỏ 850** |
| A59 | SLA gỡ nội dung | **48 giờ** (khiếu nại người dùng) · **24 giờ, khẩn cấp 6 giờ** (cơ quan nhà nước) — in cả hai |
| A60 | Xử lý report | **Auto-hide TOÀN CỤC ngay ở report đầu tiên** |
| A62/A64 | Doanh thu · kill gate | **0đ tuyệt đối 6 tháng đầu** · kill gate 31/03/2027 = **`>15 h/tuần` VÀ `sổ-D28 < 25%`** |
| **Kinh tế & quy đổi** | | |
| A70 | **A** (hệ số quy đổi sổ ↔ người) | **4,0 người/sổ** — hệ số DUY NHẤT của toàn hồ sơ |
| A72/A73 | Lượt/người/tháng ⇒ trần | **25 lượt** `[ước lượng, ảnh hưởng 🔴 Rất cao]` ⇒ vàng **60 sổ** · đỏ **85 sổ** · luật **100 sổ** |
| A74/A75 | Chi phí hạ tầng beta | **$28–37/tháng** (Supabase Pro $25 bắt buộc từ 02/12) · đèn báo động **>$60** |
| **Phạm vi & lịch** | | |
| A80/A82 | Đơn vị pw | 1 pw = **40 giờ tập trung**; 20 h/tuần × 0,65 `[không nguồn]` = 13 h code/tuần ⇒ **1 pw ≈ 3,1 tuần lịch** |
| A83/A84/A85 | Trần | Backlog **6,5 pw** · MVP-0 **3,5 pw** · ước lượng trung thực **4,58 pw** ⇒ **thiếu 1,08 pw** |
| A90/A91/A92/A93 | Số sổ | Beta đợt 1 **12 sổ** · đợt 2 **≤30** · trần vận hành **35** · trần pháp lý **60** |
| A94 | Bước 0 | **8 sổ = 5 nhánh A + 3 nhánh B**; sàn tuyệt đối 6 (4A+2B) |
| A98/A99 | Bước 0 | Cửa sổ im lặng **đúng 2 ngày: 15/09 và 18/09** · caption card: `Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.` |
| A119/A120 | Tết | Mùng 1 Tết Đinh Mùi **06/02/2027** · cửa sổ freeze `book_date` **03/02 → 12/02/2027 (10 ngày)** |

**Mốc ngày chuẩn (A104–A123):** luật sư + báo giá **03/09** · kiểm chứng nền tảng **04/09** · chốt bất biến **07/09** · Bước 0 **08/09 → 21/09** · Cổng #1 + văn bản quyết định **22/09** · dòng code đầu **23/09** · kill gate scope **05/10** · cổng tiến độ **02/11** · cổng sẵn sàng beta **30/11** · beta **02/12** · trần cứng **15/12** · đọc D14 **16/12** · cổng `sổ-D14` **11/01/2027** · **cổng G2 `sổ-D28` 26/01/2027** · kill gate founder **31/03/2027** · G4 **30/06/2027**.

---

## 5. CÂU HỎI MỞ CẦN FOUNDER QUYẾT

> **Luật chung:** nếu founder không trả lời trước hạn, **khuyến nghị tự động có hiệu lực** và phải được ghi vào ADR kèm dòng *"quyết định mặc định do quá hạn"*.

### 5.1. Bốn quyết định lớn máy đã đề xuất mà founder CHƯA duyệt

Bốn dòng này khác phần dưới: chúng **đã được thi hành xuyên suốt 15 tài liệu** nhưng chưa ai ký. Chúng là nền của mọi thứ còn lại.

| # | Câu hỏi | Ảnh hưởng gì | Khuyến nghị | Hạn |
|---|---|---|---|---|
| **F-01** | **Đổi tên `Teemi` → `Chốt Sổ`?** Bảng phán quyết **không** phán quyết tên; nó chỉ giả định domain `chotso.vn` khi chốt A67/A68 | 15 tài liệu, domain, 9 script Bước 0, khoá chính `book_id`/bảng `book` (đặt theo tên đó). Sau **08/09** tên đã đi vào **112 lần dán card** vào nhóm bạn thật ⇒ đổi sau là đổi trong đầu người dùng, không phải trong file | **Duyệt "Chốt Sổ"** bằng một dòng ADR. Lý do kiểm chứng được: `teemi/temi/tumi/tuma` đều bị Temu đè #1 ở cả App Store VN lẫn US (probe 28/08/2026); "chốt sổ" là chữ người Việt đã nói sẵn | **07/09** (`09`/`10` đề nghị 22/09 — lấy mốc sớm hơn theo luật thận trọng) |
| **F-02** | **Bỏ hẳn cơ chế boss?** | Xoá ~30 tham số phải tune, xoá rủi ro xếp loại trò chơi G1, xoá 5,75 pw. Nhưng cũng xoá thứ founder hào hứng nhất trong ý tưởng gốc — và **không có tài liệu nào hỏi founder có thật sự muốn làm phiên bản không-boss này không** | **Xác nhận bỏ.** Toán không sửa được bằng tuning: 1 lần/98 ngày ở q=0,40, và cơ chế hồi máu là thứ duy nhất trong sản phẩm biến một lần bỏ lỡ của một người thành mất mát **đã có** của bốn người khác | **22/09** (trước dòng code đầu 23/09) |
| **F-03** | **Đổi sang hướng chat-native (không app, sống trong Zalo)?** | Quyết định kiến trúc không đảo ngược được sau 23/09. Nó đánh đổi: được xoá funnel 2% và vòng lặp sửa lỗi ngắn nhất; mất widget, mất push riêng, mất mọi bề mặt chỉ app native mới có — tức mất luôn **lớp utility** mà nghiên cứu chỉ đích danh là lý do Locket chưa bao giờ sụp | **Duyệt.** Nhưng biết rõ cái mất: hồ sơ tự nhận làm phần "chống trũng sau đỉnh" **tệ hơn cả ba hướng kia** (D-10). App native chỉ mở khoá nếu `sổ-D28 ≥ 35%` ở 26/01/2027 | **22/09** |
| **F-04** | **Hạ đơn vị nhóm?** Từ "nhóm 4–6 người, cần ≥3 người mới bắt đầu" xuống **sổ chạy được với 1–2 người** (`k`=1 khi `A_eff ≤ 2`), trần 8 người, và hệ số quy đổi **A = 4,0** thay vì 5 | Chạm mọi thứ: `roster_size`, `q_c`, mọi quy đổi sổ↔người, cả ba trần pháp lý 60/85/100 sổ. Nếu A thật là 5 thì trần pháp lý rơi từ 60 xuống 48 sổ. **`roster_size` và `A_eff` phải vào schema trước 07/09 — sau đó không tái dựng được** | **Duyệt.** Hạ ngưỡng bắt đầu xoá số hạng `0,735⁴` khỏi funnel cold start; A=4,0 là con số bảo thủ hơn ở phía pháp lý. **Nhưng giữ `group_alive ≥ 3` cho mọi quyết định đi/dừng** — cấm nới sang ≥2 để qua ngưỡng | **07/09** |

### 5.2. Mười hai mục D — D-01…D-10 của bảng phán quyết `_rulings.md` mục D · **D-11 và D-12 là hai mục MỚI**, mở ra ngày 04/09 bởi `11-hang-rao-ky-thuat-phap-ly-tien.md` §8 (không nằm trong `_rulings.md`)

| # | Câu hỏi | Ảnh hưởng gì | Khuyến nghị | Hạn |
|---|---|---|---|---|
| **D-01** | **Cắt thêm ~1,1 pw ở đâu?** Bảng US chi tiết ra **4,58 pw** cho scope mà phán quyết gọi là 3,5 pw | Quyết định beta có chạy được 02/12 không. `11` cộng thêm 0,25 pw hàng rào an toàn ⇒ khoản phải cắt thật là **1,08–1,33 pw** | Cắt theo thứ tự: trang public xuống chỉ-đọc (−0,4) · preset kèo 8→4 (−0,15) · màn 5 gộp overlay (−0,3) ⚠️ **chỉ khi overlay vẫn đủ Báo cáo/Chặn/Xoá ảnh** · biến thể card mốc sổ (−0,25) | **22/09** |
| **D-02** | **15 hay 20 giờ/tuần, cam kết bằng văn bản?** | Hồ sơ đang chứa **cả hai con số loại trừ nhau**: lịch tính trên 20 h/tuần, còn kill gate viết ">15 h/tuần ⇒ dừng". Ở 15 h: 3,5 pw = 14,4 tuần ⇒ **beta không thể chạy 02/12** | Ghi **15 h/tuần** cho nhất quán với kill gate, và dồn hệ quả sang cắt scope. **Tuyệt đối không để hai con số cùng tồn tại** | **22/09** |
| **D-03** | **G4 (30/06/2027) đo bằng gì nếu luật sư nói "cấm phát sinh doanh thu"?** | Cả ba kênh doanh thu đã bị cắt, và fake-door T3 cũng bị cắt ⇒ **G4 nhánh (i) không thể đạt bằng cấu hình hiện tại** (vòng tròn logic đã ghi ở `10` §7) | Đo bằng tín hiệu ngoài sản phẩm (0 pw), chấp nhận điểm mù về ý định trả tiền. Viết sẵn hai nhánh **22/09**, chọn nhánh **20/12** | **20/12** |
| **D-04** | **Định nghĩa thành công A (có doanh thu) hay B (cố ý giữ nhỏ dưới ngưỡng pháp lý)?** | Quyết định số phận slot màn 8, và quyết định 5 phán quyết khác có phải mở lại cùng lúc không | **B** trong 12 tháng đầu — nhất quán với trần 60 sổ, doanh thu 0đ, và việc P2/P3 đều bị cắt | **22/09** |
| **D-05** | **Giữ hay hạ ngưỡng `sổ-D28 < 25%`?** | Hồ sơ **tự dự báo 12,5%–19,1%**, tức dự án đang được thiết kế để trượt cổng của chính nó | **GIỮ 25%** và viết thêm một câu hôm nay: *"beta ra 15–25% là DỪNG, không phải 'đúng như mô hình'"*. Hạ ngưỡng **sau** khi nhìn dữ liệu là tự lừa mình | **22/09** |
| **D-06** | **Chức năng export dữ liệu — ai trả 0,3 pw?** | Nghĩa vụ luật định (bản sao 10 ngày, Luật 91/2025) đang được hứa ở 3 chỗ mà không nằm trong bảng pw nào; đồng thời `10` từng **bán** đúng thứ đó | **Bản làm tay, 0 pw**: SQL + zip thủ công, SLA 10 ngày, quy trình ở `13` §9. **Không bán quyền luật định** | **07/09** (trước khi viết Chính sách riêng tư) |
| **D-07** | **Ai trực SLA trong 10 ngày Tết (03–13/02/2027)?** | Bus factor = 1, founder về quê, SLA 48h đã công bố; vế 24h/6h với cơ quan nhà nước **không miễn được** kể cả khi tạm dừng dịch vụ | (a) một người bạn có login **chỉ-đọc** + câu trả lời mẫu + số founder. Không có tên thật trước hạn ⇒ (b) bật `service_paused`, thông báo trước **20/01/2027** | **15/12** |
| **D-08** | **Thị phần Android VN: >85% hay 60,38%?** | ✅ **ĐÃ ĐÓNG HÔM NAY** — `docs/adr/ADR-003-thi-phan-android-vn.md`: StatCounter T8/2026 = **Android 57,33% · iOS 42,64%**. Nhãn `[FACT]` cho ">85%" **bị thu hồi** | **Hệ quả chưa thi hành:** Android web push chỉ phủ ~57%, không phải ~85% ⇒ phương án dự phòng của H1 mất gần một nửa. iOS là ~43% người dùng, mọi câu "để iOS sau" phải xem lại | ✅ đóng 04/09 |
| **D-09** | **Nếu `navigator.share({files})` không chạy trong webview Zalo?** | Mất 15–30 điểm phần trăm ở **kênh phân phối duy nhất** | Phương án B đã viết sẵn: long-press → "Lưu ảnh" + 1 dòng hướng dẫn dưới card (**0,05 pw**) + `remote_config['card.share_mode']`. **Duyệt 0,05 pw TRƯỚC buổi test, không phải sau** | **04/09 — hôm nay** |
| **D-10** | **Kế hoạch cho khoảng trũng tháng 5–10/2027?** | 0/7 app nghi thức viral giữ được đà; mất 50% DAU trong 4–6 tháng sau đỉnh | **Không viết kế hoạch bây giờ.** Ghi một dòng vào ADR: *"rủi ro đã biết, chưa có phương án, xem lại ở cổng 26/01/2027"* | **26/01/2027** |
| **D-11** | **Chi 0,25 pw hàng rào an toàn hay chỉ 0,10 pw phần luật định?** | (b) chấp nhận: sổ có thể bị dò mã 6 ký tự trong ~2,2 giờ ở 60 sổ, và một lệnh xoá sai làm mất **vĩnh viễn** toàn bộ thumbnail (R2 hiện **không có backup nào**) | **(a) chi đủ 0,25 pw**, nhưng làm **backup `rclone` TRƯỚC, trong tuần này** — đó là 20 phút cấu hình, không phải hạng mục phát triển | **22/09** |
| **D-12** | **Spend cap Supabase: giữ BẬT hay TẮT?** | (b) mở một rủi ro hoá đơn không trần trên thẻ cá nhân của founder chưa có pháp nhân | **GIỮ BẬT.** Ở ≤60 sổ khả năng chạm quota gần bằng 0 ⇒ (a) gần như không có chi phí thật | **trước 02/12** |

---

## 6. BỐN THỨ CÓ THỂ GIẾT DỰ ÁN

> Xác suất là `[ước lượng]`, hiệu chỉnh theo base rate của loại sản phẩm (0/7 app nghi thức viral Gen Z giữ được đà · ~40% nhóm nhắn tin chết trong tuần đầu · D30 social median 3,11–3,9%). **Chúng không độc lập với nhau** — xác suất sống qua cả bốn thấp hơn tích bốn xác suất riêng lẻ.

| # | Cái gì | Xác suất | Dấu hiệu sớm (theo thứ tự xuất hiện) | Ngưỡng dừng |
|---|---|---|---|---|
| 1 | **Nhóm không hình thành, hoặc chết theo dây chuyền trong 2 tuần đầu.** Một người bỏ → những người còn lại thấy bất công → tự giảm nỗ lực để khỏi làm "thằng ngu" → sổ sập trong vài ngày. Mô hình cho P(nhóm 5 người còn ≥3 hoạt động ở D30) = **12,5%–19,1%** — đầu cao vẫn **dưới** ngưỡng sống 25% của chính hồ sơ | **55–65%** | Trong Bước 0: **không sổ nào tự nhắc nhau nộp mà không có founder khơi mào** trong 14 ngày (tín hiệu sớm nhất và rẻ nhất) · >40% sổ tụt xuống 2 người trong tuần đầu · ngày chết trung vị của sổ < D14 | `q_c_roster < 0,35` ngày **22/09** ⇒ DỪNG · `sổ-D14 < 30%` ngày **11/01/2027** ⇒ DỪNG · `sổ-D28 < 25%` ở **26/01/2027** |
| 2 | **Founder cạn kiệt trước khi có tín hiệu.** Bus factor = 1, không tiền thuê; một người vừa là dev, vừa viết copy, vừa onboard từng sổ bằng tay, vừa lo pháp lý. **Không phải app chết — người chết trước**, và nó không xuất hiện trong bất kỳ dashboard nào | **40–50%** | Trượt mốc lịch đầu tiên quá 2 tuần **mà không cắt scope tương ứng** · ≥7 ngày liên tiếp không commit trong giai đoạn build · thêm việc vào backlog mà không cắt việc khác · bắt đầu làm việc "dễ chịu" (chỉnh màu, viết caption) thay vì việc trên đường găng | Backlog **>6,5 pw** ở **05/10** ⇒ kill gate kỷ luật scope · tiến độ **<45%** ở **02/11** ⇒ cắt scope, **không dời lịch** · **`>15 h/tuần` VÀ `sổ-D28 < 25%`** ở **31/03/2027** ⇒ dừng dứt khoát trong tuần đó |
| 3 | **Nghi thức không tạo được nhịp trong nhóm Zalo.** Card dán vào nhóm mà không ai chạm; hoặc chạm mà không nộp. Kênh phân phối duy nhất chưa từng được kiểm chứng: `navigator.share({files})`, Service Worker và cảnh báo domain `.vn` trong webview Zalo **đều còn là câu hỏi mở tính đến sáng nay** | **35–45%** `[giữ mốc cao của critique §4.3 dù boss đã bỏ — vì rủi ro chuyển từ "cơ chế không vui" sang "kênh chưa ai thử", và kênh thì không tune được]` | Trong Bước 0: **không ai nhắc tới việc chốt sổ một cách tự nhiên trong 14 ngày**, ở bối cảnh xã hội mạnh nhất có thể · `click-shortlink` tụt dần qua 2 tuần · số ngày đủ mâm < 3/28 · ngày im lặng 15/09 và 18/09 tụt sâu so với ngày thường | `click-shortlink < 40%` ngày **22/09** ⇒ DỪNG (H1 chỉ có quyền dừng, không có quyền đi) · H2: **<60% sổ nhánh A đạt ≥9/14 ngày** · `q_x < 0,30` ⇒ nhãn XONG/TOANG đang gây nhục, phải đổi |
| 4 | **Pháp lý.** Hai đường độc lập: ngưỡng MXH ~10.000 lượt/tháng (≈100 sổ — quy mô một app viral nhẹ ở một trường đại học), và **NĐ 330/2026 hiệu lực từ 19/08/2026 phạt cá nhân tới 1,5 tỷ đồng**, gấp ~12,6 lần toàn bộ chi phí dự án. Đây là **rủi ro của người thắng**: nó chỉ bắn khi thành công | **15–25%**, có điều kiện | Chạm đèn vàng: **6.000 lượt** hoặc **600 người**/tháng (≈60 sổ) · một ảnh chụp màn hình lọt ra ngoài nhóm kín · tỉ lệ report/tấm > 0,1% · bất kỳ yêu cầu nào từ cơ quan nhà nước | Đèn đỏ **8.500 lượt** hoặc **850 người** ⇒ **dừng nhận sổ mới ngay trong ngày** (`signup_paused`) · trần cứng **60 sổ**, không nới bằng cách hỏi lại · SLA 24h/6h vi phạm một lần ⇒ dừng dịch vụ trước, xin lỗi sau |

---

## 7. KẾ HOẠCH 12 TUẦN TRONG MỘT BẢNG

| T | Ngày | Mục tiêu DUY NHẤT | Output nhìn thấy được | Cổng quyết định |
|---|---|---|---|---|
| **T0** | 03–06/09 | Đặt xong bốn thứ không hồi tố được | Domain · email 7 câu luật sư · ADR + sổ cái pw · buổi kiểm chứng 7 câu · 112 shortlink · Sheet 8 cột · 8 sổ đã tuyển | — |
| **1** | 07–13/09 | Bước 0 chạy 6 tối liên tiếp, **0 dòng code sản phẩm** | **48 card đã dán** (6 tối × 8 sổ) + Sheet 48 dòng | — |
| **2** | 14–20/09 | **Cửa sổ im lặng 15/09 và 18/09**: founder câm tuyệt đối trong cả 8 nhóm | Bảng 2 dòng: `q_c/q_x` ngày thường vs ngày im lặng, tách nhánh A và B | Không có cổng giữa chừng — cắt ngang là huỷ thí nghiệm |
| **3** | 21–27/09 | Ra **quyết định bằng văn bản** rồi viết dòng code đầu tiên | Văn bản quyết định (có số, có ngày, có chữ ký) + `chotso.vn` mở được trong Zalo | 🚦 **CỔNG #1 — 22/09** |
| **4** | 28/09–04/10 | **Walking skeleton**: một tấm ảnh thật đi hết đường | Video 40 giây quay màn hình máy thật: mở link → nộp ảnh → thấy ảnh trong sổ | 🚦 kill gate scope **05/10** (backlog >6,5 pw ⇒ dừng) |
| **5** | 05–11/10 | Sổ có nhiều người, ngày biết tự tính | **Hai điện thoại khác nhau** cùng một sổ, hai tấm chung một hàng, một ✓ một 💀 | Hai máy chưa thấy nhau ⇒ lỗi kiến trúc, dừng thêm tính năng |
| **6** | 12–18/10 | Card do máy sinh không tệ hơn card Canva | Ảnh card máy sinh dán trong nhóm Zalo, đặt cạnh card Canva của Bước 0 | Điểm kiểm tra chậm tiến độ |
| **7** | 19–25/10 | **Bất biến được máy canh**, không canh bằng mắt | CI xanh: `0 cột giảm ngoài chuỗi / 0 template tham chiếu goal_text` (10.000 mô phỏng) | CI đỏ ⇒ không được viết tính năng mới |
| **8** | 26/10–01/11 | **Hàng rào pháp lý & an toàn xong TRƯỚC khi có người lạ** | 7 URL công khai (ToS, Chính sách, báo cáo, chặn, xoá…) + checklist ký tay | ⛔ Chưa xong ⇒ **T13 không được mở cho người ngoài. Ràng buộc cứng** |
| **9** | 02–08/11 | **Dogfood 7 ngày liên tục** trên bản thật | 7 ngày liên tiếp có tấm trong DB production | 🚦 cổng tiến độ **02/11**: <45% ⇒ cắt scope, không dời lịch |
| **10** | 09–15/11 | **Khoá tính năng** (11/11) và bắt đầu tuyển 12 sổ | Commit tag feature-freeze + ≥6 sổ đã ghi danh có tên nhóm | <45% sổ mục tiêu ⇒ dồn T11 vào tuyển, **không dời ngày beta** |
| **11** | 16–22/11 | **Đệm rủi ro** — hấp thụ cạm bẫy, KHÔNG thêm tính năng | Danh sách 12 sổ + kịch bản trực 1 trang + đã chạy thử export tay ≥1 lần | ⚠️ Dùng tuần này để thêm tính năng = vi phạm P7 |
| **12** | 23–29/11 | **Sẵn sàng beta** — 12 tuần kết thúc ở đây, beta **chưa** chạy | Báo cáo 12 tuần 2 trang + checklist cổng sẵn sàng ký tay | 🚦 **CỔNG #2 — 30/11** |
| **13** | 30/11–06/12 | Mở beta **02/12**, 12 sổ đợt 1 | Trực 6 phút/tối · ngày im lặng 05/12 · đọc `sổ-D7` ngày 08/12 | >2 sổ chết trong 7 ngày đầu ⇒ dừng tuyển, chuyển sang phỏng vấn |
| **14** | 07–15/12 | Beta chạy hết ngày 14 | Đọc số **16/12** + 5 cuộc gọi 10 phút với người đã ngừng nộp | 🚦 **CỔNG #3 — 16/12**: `group-D14(app) ≥ B` |

**Ba cổng lớn, phát biểu trần trụi:**
- **CỔNG #1 (22/09)** — *Bước 0 nói gì?* `q_c_roster < 0,35` ⇒ DỪNG · `≥ 0,45` ⇒ ĐI · ở giữa ⇒ chạy lại một cohort, **đổi đúng một biến**, và **không có lần thứ ba**.
- **CỔNG #2 (30/11)** — *Có được thả người ngoài vào không?* Tiêu chí phải quan sát được **đúng ngày 30/11**: feature freeze đã xảy ra **và** ≥12 sổ đã ghi danh (sàn 10).
- **CỔNG #3 (16/12)** — *App có bằng founder ngồi dán card Canva không?* Nếu `group-D14` của app **không** ≥ neo `B` đo tay ở Bước 0 thì app không có lý do tồn tại.

**Sau đó:** cổng `sổ-D14` **11/01/2027** · **cổng G2 26/01/2027** (`sổ-D28 ≥ 35%` trên n≥24 ⇒ mở khoá app native + widget) · **kill gate founder 31/03/2027**.

---

## 8. BẢY VIỆC PHẢI LÀM TRONG 7 NGÀY TỚI

> Cửa sổ: **04/09 → 11/09/2026**. Bước 0 khởi động **20:40 ngày 08/09** và không dời được — mọi việc dưới đây phải xong trước lúc đó, trừ việc số 2 vốn đã trễ hạn.
>
> **Tổng ước tính ≈ 17,3 giờ trong 4 ngày** (2,5 + 1,5 + 2,5 + 1,0 + 3,0 + 3,0 + 3,5 giờ, cộng 20 phút `rclone` ở việc 5). Con số này **vượt nhánh 15 giờ/tuần** của D-02 và **sát trần nhánh 20 giờ** — trong khi bốn ngày này chưa có một dòng code nào. Nếu chỉ làm được ba việc, làm **1, 2, 5** — đó là ba việc **không hồi tố được**: một buổi test không chạy hôm nay thì kết quả không có kịp cho quyết định 22/09; một email không gửi hôm nay thì luật sư trả lời sau khi đã viết code; và 112 shortlink không dựng trước 08/09 thì ngày 22/09 **không có một con số H1 nào, kể cả để dừng**.

### 1. Chạy buổi kiểm chứng nền tảng 7 câu — **HÔM NAY 04/09** · ~2,5 giờ (20 phút chuẩn bị + 2 giờ chạy)
**Làm gì:** deploy trang test tĩnh ~40 dòng HTML, chạy 7 câu trên **ma trận ≥3 máy Android thật** (không emulator) với ≥3 tài khoản Zalo. Bảy câu: Zalo có cảnh báo domain `.vn` lạ không · `<input type=file>` trong webview có đồng nhất không · OG preview 4:5 có bị crop không · Service Worker có đăng ký được không · `navigator.share({files})` có gửi được file ảnh không · Zalo có hiện danh sách "Đã xem" không · generated column `AT TIME ZONE` + `CREATE TABLE` có chạy không.
**Kịch bản thao tác từng câu, ma trận máy, mẫu ghi kết quả: `12-kiem-chung-nen-tang.md`.** Chạy **câu 2 trước tiên** — nó là câu quan trọng nhất; nếu chọn ảnh trong webview không chạy đồng nhất thì core loop không tồn tại.
**Output cụ thể:** một bảng kết quả đã điền đủ 7 câu × ≥3 máy + ảnh chụp màn hình, chép vào `docs/adr/`. **Đóng luôn D-09.** Một câu chỉ được coi là đã trả lời khi **≥2 máy cho cùng kết quả**; 3 máy ra 3 kết quả ⇒ ghi **KHÔNG ĐỒNG NHẤT** và xử lý y như KHÔNG.
**Trước khi bắt đầu:** duyệt 0,05 pw cho phương án B của D-09 — duyệt **trước** buổi test, không phải sau.

### 2. Gửi email 7 câu cho luật sư + lấy 3 báo giá — **HÔM NAY, đã trễ hạn 1 ngày** · ~90 phút
**Làm gì:** một email, một lần trả phí, ngân sách **5–15 triệu đ**. Nội dung 7 câu đã soạn sẵn ở `11` §6.1 và `05` §11 — **chỉ còn bấm gửi**. Bốn câu không được rút dù có cắt gì: (1) sản phẩm này có phải MXH theo Điều 3 NĐ 147 không và "người dùng thường xuyên" đo thế nào · (2) Điều 27 k.3 có áp cho tier thông báo không · (3) tier thông báo có được phát sinh doanh thu không · (4) hai câu Điều 32 BLDS về ảnh người đã rời sổ.
**Output cụ thể:** 1 email đã gửi (có timestamp) + 3 báo giá từ 3 văn phòng để thay dải rộng 5 lần bằng một con số. Báo giá domain `.vn` **đã có**: 770.000đ năm đầu / 460.000đ năm sau (`11` §7.2).
**Vì sao gấp:** câu số 3 có thể **xoá toàn bộ đường ray doanh thu** của tài liệu `10`. Hỏi 7 câu một lần rẻ hơn hỏi 1 câu bốn lần.

### 3. Hoà giải thư mục `docs/adr/` và ghi kết quả hôm nay vào đó — **05/09** · ~2,5 giờ
**Đã làm chiều 04/09:** thư mục đã đổi sang một quy ước duy nhất `ADR-NNN-slug.md` và **`docs/adr/ADR-000-bat-bien.md` nay tồn tại đúng tên mà 15 tài liệu đang trỏ tới**. Hiện có: `ADR-000-bat-bien.md` · `ADR-001-nen-tang-ky-thuat.md` · `ADR-002-ranh-gioi-phap-ly.md` · `ADR-003-thi-phan-android-vn.md` · `pw-ledger.md` · `README.md`. Lỗi "hai file cùng số 0001" đã hết.
**Việc CÒN LẠI, và nó là một quyết định chứ không phải việc dọn dẹp:** A103 phán quyết "**MỘT** file ADR duy nhất (3 mục) + `pw-ledger.md`", nhưng thực tế có **bốn** file ADR. Hai lựa chọn: **(a)** gộp nội dung 001/002 vào ADR-000 §2/§3 và giữ 003 như *bản ghi kiểm chứng sự thật* (không phải bất biến) — đúng chữ A103, ~40 phút · **(b)** sửa A103 bằng văn bản thành "một file BẤT BIẾN + các ADR bản ghi". **Khuyến nghị (a).** Quá hạn 07/09 ⇒ (b) tự có hiệu lực và phải ghi ra.
**Output cụ thể:** chọn (a) hoặc (b) bằng một dòng, rồi ghi vào ADR-000: 12 bất biến cơ chế · kết quả 7 câu ngày 04/09 · con số Android **57,33%** (đã có ở ADR-003) · quyết định F-01…F-04 · D-06 · D-11 · D-12 · một dòng cho D-10.

### 4. Trả lời bằng văn bản sáu quyết định đang chặn — **05/09** · ~60 phút
**Làm gì:** ngồi xuống một lần, viết một trang: **F-01** tên sản phẩm · **F-02** bỏ boss · **F-03** hướng chat-native · **F-04** đơn vị nhóm · **D-06** export làm tay · **D-11** chi 0,25 pw hàng rào.
**Output cụ thể:** một trang có ngày và chữ ký, chép vào ADR. Mỗi dòng ghi rõ "đã duyệt" hoặc "bác, lý do…". **Không dòng nào được để trống** — để trống nghĩa là khuyến nghị tự có hiệu lực mà không ai biết.

### 5. Dựng thiết bị đo — **06/09, hạn chót 07/09** · ~3 giờ
**Làm gì, theo thứ tự:** (a) mua **MỘT** domain `chotso.vn` (~770.000đ) và deploy HTTPS · (b) dựng **112 shortlink** = 8 sổ × 14 ngày trên dịch vụ rút gọn bên thứ ba (Short.io free), **KHÔNG tự host, KHÔNG viết một dòng code sản phẩm nào** · (c) dựng Google Sheet **8 cột**: `q_c_roster · q_x_roster · q_c_sliding · q_x_sliding · roster_size · số người nộp · số XONG · số TOANG`, pseudonymised, xoá sau 22/09 · (d) chốt ngưỡng H2 = **≥60% sổ nhánh A đạt ≥9/14 ngày** bằng văn bản.
**Output cụ thể:** 112 link đã tạo và đã test 1 link · 1 Sheet trống có đủ 8 cột và cột `roster_size` · 1 dòng ngưỡng H2 đã ký.
**Không hồi tố được:** sau 08/09 **không tái dựng được roster ngày 1–3**, và ảnh dán vào Zalo **không sinh sự kiện "mở"** — không có shortlink thì không có H1.
**Kèm theo, 20 phút:** cấu hình `rclone sync` cho `thumb/` (khuyến nghị của D-11) — R2 hiện **không có backup nào**.

### 6. Viết bản nháp ToS + Chính sách riêng tư + Quy tắc cộng đồng + thông báo đồng ý cho Bước 0 — **07/09** · ~3 giờ
**Làm gì:** dàn ý 9 mục + 7 điều đã có sẵn ở `05` §8. **Ba con số bắt buộc phải xuất hiện và phải khớp:** TTL thumbnail (vĩnh viễn) · SLA kép (48h người dùng / 24h–6h cơ quan nhà nước) · thời hạn lưu `goal_text` (xoá cùng sổ).
**Phần chưa ai viết mà bắt buộc phải có:** **script S9 — thông báo & đồng ý xử lý dữ liệu cho chính Bước 0.** Bước 0 thu ảnh thật của ~32 người vào Google Drive của founder trong 14 ngày; 8 script hiện có **không có một dòng nào** về việc đó, không có thời hạn lưu, không có kế hoạch xoá.
**Output cụ thể:** 3 file nháp + 1 đoạn tin nhắn S9 gửi vào cả 8 nhóm **trước tối đầu tiên**. Chi phí sửa hôm nay ≈ 0; sau 08/09 thì đó là hoạt động xử lý dữ liệu cá nhân thật đã diễn ra.

### 7. Chốt 8 sổ và diễn tập một tối — **07/09** · ~3,5 giờ
**Làm gì:** xác nhận đủ **8 sổ = 5 nhánh A (có kèo) + 3 nhánh B (không kèo)**, sàn tuyệt đối 6 (4A+2B). In **tờ giấy runbook `13` §1** dán cạnh máy. Chuẩn bị template Canva. Chạy thử **một tối giả lập trên sổ số 0 (nhóm founder)** — sổ số 0 **không nằm trong mẫu số của bất kỳ phép đo nào**.
**Output cụ thể:** danh sách 8 nhóm có tên + người trực từng nhóm · 1 tờ A4 đã in · 1 card Canva mẫu đã dán thử · đồng hồ bấm giờ cho quy trình 20:40→21:15.
**Ngân sách thời gian phải biết trước:** Bước 0 tốn **130 phút/tối × 14 tối = 30,3 giờ = 15,2 giờ/tuần** — **chạm đúng ngưỡng kill gate ">15 giờ/tuần"**. Van vượt giờ: nếu một sổ ngốn >20 phút thì hạ từ 5 xuống 4 sổ ở nhánh A, **không** hạ giấc ngủ.

---

## 9. BẢNG ĐIỀU HƯỚNG TOÀN REPO

> Phần lớn các file dưới đây là **tài liệu tra cứu, không phải tài liệu đọc hết**. Thời gian ghi là đọc hết một lượt; tra một mục thường mất 2–5 phút.
>
> **Bốn thứ đọc trước khi bắt đầu (tổng ~75 phút):** file này → `_rulings.md` mục A + D → `13` §1 (tờ giấy Bước 0) → `12` (buổi test hôm nay).

| File | Dùng khi nào | Đọc mất bao lâu |
|---|---|---|
| **`00-ke-hoach-tong.md`** | Đây. Người mới, hoặc quên mất đang ở đâu | 15 phút |
| **`_rulings.md`** ⭐ | **Bất cứ khi nào cần một con số.** Mục A = 123 hằng số · B = 53 phán quyết mâu thuẫn · C = 25 phán quyết scope creep · D = 10 mục founder quyết · F = 4 việc phải xong trước 07/09 | 60 phút, nhưng chủ yếu để tra |
| `01-dinh-nghia-san-pham-v2.md` | Câu định vị, core loop, danh sách 7 màn, nguyên tắc thiết kế. **Chủ quyền: SẢN PHẨM** | 90 phút |
| `02-mvp-scope.md` | 25 user story, DoD, kịch bản Bước 0 chi tiết, 9 script tin nhắn | 75 phút |
| `03-kien-truc-ky-thuat.md` | Stack, chi phí hạ tầng theo quy mô, job cron, CI check. **Chủ quyền: CHI PHÍ HẠ TẦNG** | 70 phút |
| `04-data-model-va-co-che.md` | DDL **18 bảng** (11 bảng lõi + 7 phụ), thuật toán chấm ngày, 32 event, vòng đời dữ liệu. **Chủ quyền: SCHEMA + THUẬT TOÁN** | 80 phút |
| `05-lo-trinh-phap-ly.md` | Ngưỡng MXH, giấy phép, SLA, xoá dữ liệu, 4 giai đoạn pháp lý. **Chủ quyền: PHÁP LÝ** | 65 phút |
| `06-metrics-va-gia-thuyet.md` | 14 giả thuyết, định nghĩa metric, kill criteria theo tuần. **Chủ quyền: ĐỊNH NGHĨA METRIC** | 70 phút |
| `07-roadmap-12-tuan.md` | Lịch tuần, đường găng, 3 cổng, tiền mặt theo tuần | 55 phút |
| `08-ux-flow-va-tone.md` | Wireframe 7 màn, onboarding từng giây, bank câu, tone. **Chủ quyền: TONE + UX** | 80 phút |
| `09-cold-start-va-gtm.md` | 12 kênh tuyển sổ, 4 vòng tuyển, asset chia sẻ, Tết | 60 phút |
| `10-mo-hinh-kinh-doanh.md` | Kinh tế đơn vị, 5 cổng G0–G5, vì sao doanh thu = 0 | 80 phút |
| `11-nhat-ky-quyet-dinh.md` | **Sổ đăng ký ~75 quyết định QĐ-01…QĐ-72** kèm ngày, căn cứ, thứ bị bỏ, điều kiện mở lại. Tra khi hỏi *"vì sao đã chốt như vậy, và mở lại được không"* ⚠️ trùng tiền tố `11-` với file dưới | 40 phút |
| `11-hang-rao-ky-thuat-phap-ly-tien.md` | **Ai xem được ảnh của ai** · rate limit · vượt quota · backup · **bảng số đã kiểm chứng 04/09** (6 số sai đã sửa) | 45 phút |
| `12-kiem-chung-nen-tang.md` | **Hôm nay 04/09.** Kịch bản 7 câu, ma trận máy, mẫu ghi kết quả | 15 phút |
| `13-runbook-van-hanh.md` | **Vận hành hằng ngày.** §1 tờ giấy Bước 0 · §3 tối beta 6 phút · §6 **12 ca sự cố** · §9 export tay · §10 Tết · §11 đóng cửa tử tế | Tra 2 phút/mục |
| `_audit-report.md` | Muốn biết hồ sơ **thiếu** gì và số nào **chưa có nguồn** | 40 phút |
| `_gaps-resolved-product.md` · `_gaps-resolved-technical.md` | Vòng lấp lỗ hổng 04/09 đã làm gì và **cố ý chừa lại gì** | 20 phút mỗi file |
| `option-A/B/C/D-*.md` | Chỉ khi muốn mở lại quyết định hướng đi (F-03) | 45 phút mỗi file |
| `../critique/00-danh-gia-chien-luoc.md` | **Vì sao mọi thứ như hiện tại.** 19 vấn đề, 4 rủi ro chết, kill criteria | 45 phút |
| `../critique/_issues-digest.md` | Tra một phản biện cụ thể (61 red flag + 26 phản biện) | Tra |
| `../research/r01..r08` | Số liệu thị trường, đối thủ, pháp lý, kỹ thuật, kiếm tiền | 40 phút mỗi file |
| `../adr/` | **Quyết định đã đóng, không mở lại.** `pw-ledger.md` = sổ cái pw duy nhất | 25 phút |
| `../00-source/doc-01-product-strategy.md` | Lưu trữ, **chỉ đọc, không sửa**. Đã bị `01` thay thế toàn bộ | Bỏ qua |

---

## 10. NHỮNG GÌ BỘ TÀI LIỆU NÀY CHƯA TRẢ LỜI ĐƯỢC

**1. Không một con số cốt lõi nào đã được đo.** `q_c = 0,53` `[chưa đo]` · `A = 4,0 người/sổ` `[ước lượng]` · `25 lượt/người/tháng` `[ước lượng, ảnh hưởng 🔴 Rất cao]` · `8,4 phút/sổ/tuần` `[ước lượng]` · ảnh 110 KB `[chưa đo]` · hệ số hiệu suất `0,65` `[không nguồn]` · chuỗi funnel 14,2%/20,5% `[GUESS]`. **Mọi bảng trong hồ sơ là hàm của bảy số này.** Nếu `q_c` thật là 0,40 thì mọi bảng lệch ~25% theo hướng lạc quan; nếu `25 lượt` thật là 50 thì trần pháp lý rơi từ 60 xuống 30 sổ — **thấp hơn cả trần vận hành 35 sổ**, tức hai trần đảo thứ tự.

**2. Ba khẳng định pháp lý trung tâm chưa có luật sư ký.** Ngưỡng 10.000 lượt / 1.000 người của NĐ 147 nhất quán qua 3 nguồn thứ cấp nhưng **chưa trích được nguyên văn Công báo** · định nghĩa "người dùng thường xuyên" chênh **hơn 10 lần** giữa ba cách hiểu và nó quyết định trần beta là 60 hay 600 sổ · Điều 27 k.3 có áp cho tier thông báo không. Một dòng mới mở ra hôm nay chưa ai giải: **ngưỡng 10.000 có tính trung bình 6 tháng liên tục không** — nếu có thì đèn hiện tại đang báo sớm đáng kể.

**3. Hồ sơ tự vượt ngân sách của chính nó, và ba con số vượt không khớp nhau.** `01` ghi backlog ≈**7,25 pw** · `11` ghi ≈**7,50 pw** · nhưng `docs/adr/pw-ledger.md` — sổ cái được tuyên bố là **nơi duy nhất** — ghi **4,57 pw** vì nó lấy MVP-0 làm gốc chứ không lấy backlog. Ba con số cùng tồn tại trên một trần 6,5 pw. Riêng MVP-0: bảng US của `02` ra **5,93 pw**, A85 chốt **4,58 pw**, trần là **3,5 pw**, và cửa sổ lịch thật 23/09→02/12 chỉ chứa **3,25 pw**. **Chưa ai cắt.** Chỉ phiên ánh xạ ngày 22–23/09 gỡ được.

**4. Hai con số giờ/tuần loại trừ nhau vẫn cùng tồn tại.** Toàn bộ lịch tính trên 20 h/tuần; kill gate của chính hồ sơ viết ">15 h/tuần ⇒ dừng". Riêng Bước 0 đã ngốn **15,2 h/tuần** — chạm đúng ngưỡng. Đây là cách tự lừa mình rẻ nhất trong hồ sơ (D-02).

**5. Cổng quyết định lớn nhất có thể không đủ cỡ mẫu.** Cổng G2 (26/01/2027) đòi **n ≥ 24 sổ** với KTC ±17 điểm, nhưng beta đợt 1 chỉ **12 sổ** và đợt 2 mở từ tuần 15 — **sau** khi cohort đã đóng. Ở n=12 thì KTC ≈ **±28 điểm** và cổng không mở được gì. Mâu thuẫn nằm **trong chính bảng phán quyết** (A90 vs A25), chưa được gỡ. Tương tự ở Bước 0: với n=5 sổ nhánh A, mọi tỉ lệ chỉ nhận `{0, 20, 40, 60, 80, 100}%` — **bước nhảy 20 điểm**.

**6. Kết quả hôm nay (Android 57,33%) — ✅ đã lan xong lúc soát cuối 04/09.** `docs/adr/ADR-003-thi-phan-android-vn.md` thu hồi nhãn `[FACT]` của ">85%"; `01` §6 mục 3, `03` R3 + §9 B4, `07` §8(b), `08` §8.2, `11` §8, `12` việc 8 và `_gaps-resolved-technical` **đã được sửa theo**. Hệ quả **vẫn chưa ai định lượng lại**: Android web push phủ ~57% chứ không ~85%, tức phương án dự phòng của H1 bỏ sót gần một nửa người dùng; và iOS là ~43% chứ không ~15%, nên mọi câu "để iOS sau" phải xem lại.

**7. Không có mô hình doanh thu nào chạy được trong 12 tháng đầu** — và không phải vì chưa nghĩ ra, mà vì luật cấm (A62) và cả ba kênh đều bị cắt (P1 export là nghĩa vụ luật định, P2 sổ in Tết, P3 B2B). Cổng G4 nhánh (i) đòi "doanh thu ròng ≥20 triệu" trong khi **không tồn tại kênh hợp lệ nào sinh ra 20 triệu trước G4** — vòng tròn logic đã ghi nhưng chưa gỡ. Câu *"sản phẩm này sống bằng gì sau tháng 6/2027"* chưa có câu trả lời.

**8. Tháng 5–10/2027 cố ý không có kế hoạch** (D-10). Nghiên cứu chỉ đích danh: 0/7 app nghi thức viral giữ được đà, mất 50% DAU trong 4–6 tháng sau đỉnh, và toa thuốc là "build lớp utility ở v1" — thứ mà hướng chat-native **không có chỗ để đặt**. Hồ sơ tự nhận làm phần này tệ hơn cả ba hướng còn lại.

**9. Bus factor = 1 ở mọi chỗ, kể cả việc ĐỌC số.** Chưa có tên người thứ hai cho: trực SLA 10 ngày Tết (D-07) · mật khẩu Supabase/R2/domain · người nhìn dashboard mỗi thứ Hai để kill gate có nhân chứng. Kill gate mà chỉ một người đọc thì nó không phải kill gate.

**10. Không tài liệu nào hỏi founder câu quan trọng nhất:** *nếu Bước 0 cho kết quả tốt, founder có thật sự muốn dành 20 tuần lịch và ~72 triệu chi phí cơ hội cho phiên bản không-boss, không-app, doanh-thu-0đ này không?* Câu này phải trả lời **trước** khi nhìn số ngày 22/09, không phải sau.

**11. Lỗi hồ sơ còn tồn (cập nhật sau vòng soát cuối 04/09):** ✅ thư mục `docs/adr/` đã hoà giải — `ADR-000-bat-bien.md` tồn tại đúng tên, hết trùng số · ✅ `13-runbook-van-hanh.md` đã sửa tiêu đề thành `# 13 —` · ❌ **hai file khác nhau vẫn cùng tiền tố `11-`** (`11-hang-rao-ky-thuat-phap-ly-tien.md` và `11-nhat-ky-quyet-dinh.md`) — nên đổi file thứ hai thành `14-nhat-ky-quyet-dinh.md`, chỉ có 2 tham chiếu (`06`) phải sửa · ❌ `_rulings.md` mục E dẫn một phán quyết "C62" không tồn tại (bảng chỉ có C01–C53) · ❌ `_rulings.md` tự mâu thuẫn về độ dài Tết: A120 ghi **10 ngày**, D-07 ghi "11 ngày" — hồ sơ đã thống nhất theo **A120 (10 ngày)** · ❌ sổ đăng ký ~70 câu hỏi mở của 15 tài liệu **chưa được khử trùng lặp và sắp theo hạn**.

**12. Điều duy nhất bộ tài liệu này thật sự chứng minh được là: nó chưa chứng minh được gì.** **9.992 dòng kế hoạch** trong 15 tài liệu (≈12.500 dòng nếu tính cả `_rulings.md`, `_audit-report.md`, hai file `_gaps-*` và bốn `option-*`) — đếm lại ngày 04/09/2026; con số "11.894" của bản trước không khớp bất kỳ tập file nào. 0 dòng code, 0 người dùng, 0 phép đo. Giá trị của nó nằm ở chỗ nó khiến **thí nghiệm rẻ nhất** — 14 tối, 8 nhóm Zalo, 30 giờ, 0 đồng — đủ sắc để làm founder đổi ý. Nếu Bước 0 không làm founder đổi ý theo hướng nào cả, thì bản thân điều đó là câu trả lời.
