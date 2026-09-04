# BÁO CÁO SOÁT CUỐI — 04/09/2026

> **Phạm vi.** Đọc toàn bộ 22 file trong `docs/plan/` (15 tài liệu kế hoạch `00`…`13` · `_rulings.md` · `_audit-report.md` · 2 file `_gaps-resolved-*` · 4 file `option-*`) cộng `docs/adr/` (6 file). Đối chiếu ~30 hằng số quan trọng nhất của `_rulings.md` mục A, 14 mâu thuẫn `[blocking]` C01–C14, và toàn bộ số dẫn xuất bị đổi trong vòng sửa.
>
> **Kết quả một dòng:** **0/14 mâu thuẫn blocking gốc còn sót** · **31 chỗ lệch đã tự sửa trong vòng này** · **6 mâu thuẫn blocking-class CÒN LẠI, tất cả đều nằm NGOÀI quyền sửa của tài liệu** (5 cần founder quyết, 1 nằm trong chính `_rulings.md`).
>
> **Luật áp dụng khi sửa:** mục A của `_rulings.md` thắng · khi `_rulings.md` tự mâu thuẫn thì **từ điển A thắng mục D** (luật đọc bảng A) · khi không có phán quyết thì chọn con số **thận trọng hơn** và ghi rõ.

---

## 1. KIỂM HẰNG SỐ — 30 hằng số, kết quả

| # | Hằng số | Giá trị chuẩn | Trạng thái sau soát |
|---|---|---|---|
| A01/A03/A05 | Ngày 04:00–03:59 ICT · cron `5 21 * * *` · TTL audit 04:10 | — | ✅ khớp ở 6 file; mọi lần xuất hiện `0 21 * * *` đều trong ngữ cảnh "lịch SAI" |
| A06/A07 | `A_eff = min(A(D), A(D−1))` · `k`=1/2 | — | ✅ `ceil(0,6×A)` chỉ còn ở 8 chỗ, tất cả đều là "công thức đã chết" |
| A14/A15 | `roster_size` = người nộp ≥1 tấm trong **3 ngày đầu**, đóng băng 14 ngày | — | 🔧 **SỬA 1 chỗ:** `13` §1.4 định nghĩa sai thành *"số người trong sổ tại ngày 1"* |
| A17 | `q_c` 0,53 `[chưa đo]` | — | ✅ có nhãn ở v2, `03`, `05`, `08`, `10` |
| A20/A21/A22 | H2 ≥60% sổ ≥9/14 ngày · H1 chỉ có quyền DỪNG · 112 shortlink | — | ✅ |
| A23/A24/A25 | `sổ-D28` · DỪNG <25% / ≥35% · n≥24 · KTC ±17đ | — | ✅ (kiểm lại Wilson 95% cho 8/24 = **18,0–53,3%**, nửa khoảng **17,7đ** — con số ±17 của A25 đúng) |
| A29–A33 | Schema tiếng Anh · `book`/`book_id` · `book_day` · `UNIQUE(book_id, person_id, book_date)` | — | ✅ mọi `group_id`/`so_id`/`thanh_vien_id`/`logical_date`/`day_rolled`/`ngay_so` còn lại đều trong ngữ cảnh phủ định |
| A32 | 18 bảng chuẩn | 18 | 🔧 **SỬA 1 chỗ:** `00` §9 ghi "DDL 11 bảng" — `04` §1 định nghĩa đúng **18** `create table` |
| A34–A41 | Key R2 · TTL 72h · thumb vĩnh viễn · card 90 ngày/150 KB · thumb 18 KB | — | ✅; 🔧 gắn nhãn `[CHƯA ĐO]` cho `~110 KB` trong sơ đồ nén của `03` §4c (A37 đòi nhãn ở **mọi** nơi) |
| A43/A44/A45 | Bảng chữ 28 ký tự · slug không chứa `code6` · mã 6 ký tự có điều kiện | — | ✅; regex cũ 32 ký tự chỉ còn trong ngữ cảnh "SAI" |
| A46/A100 | Trần 8 người/sổ · lưới card thích ứng tối đa 8 ô | — | 🔧 **SỬA 1 chỗ:** `02` §5.5 vẫn đặt template Canva Bước 0 là **"6 ô ảnh placeholder"** — đúng lỗi mà QĐ-30 đã bác |
| A47/A48 | `is_16_plus` + `age_gate_at`, không lưu năm sinh | — | ✅ |
| A51/A52 | 32 event ở `04` §7.1 · `was_removed_by_moderation` | — | ✅ đếm được **32 hàng**, số 25 để trống; 🔧 **điền 10 số hiệu** còn ghi "tra `04` §7.1" ở bảng ánh xạ `06` §0 |
| A54–A58 | Hai counter 6.000/8.500 · 600/850 · đèn vàng/đỏ | — | ✅ mọi "700" còn lại đều là "đã bị bác" |
| A59/A60 | SLA kép 48h · 24h/6h · auto-hide toàn cục | — | ✅ |
| A62–A64 | Doanh thu 0đ · fake pre-order · kill gate 31/03/2027 | — | ✅ (`30/03/2027` không còn tồn tại) |
| A65/A66 | 7 câu · MỘT email · 5–15 triệu | — | ✅ trong tài liệu; ⚠️ `_rulings.md` C40 tự liệt kê ra **8** câu (xem §4) |
| A67 | Giá `.vn` năm đầu | **770.000đ** (báo giá thật) | 🔧 **SỬA 20 chỗ trên 10 file** — xem §2.B |
| A68 | MỘT domain | — | ✅ |
| A70/A71/A72/A73 | A = 4,0 · DAU/sổ 2,12 · 25 lượt · 60/85/100 sổ | — | 🔧 **SỬA 6 chỗ** còn tính ZNS ở 5 người/sổ (`01`, `03`×2, `09`, `10`×2) |
| A74/A75/A76 | $28–37/tháng · đèn $60 · DoD ≤$40 | — | ✅ mọi "$12/tháng" đều là "đã bác" |
| A80–A85 | 1 pw = 40 h · 0,65 · 13 h code/tuần · 6,5 / 3,5 / 4,58 pw | — | ✅ số học đúng; ⚠️ ba hệ toạ độ pw vẫn cùng tồn tại (xem §4-B1) |
| A88/A89 | Beta 02/12/2026 · trần cứng 15/12 | — | ✅ mọi "16/11" đều là "đã bỏ" |
| A90–A95 | 12 sổ / ≤30 sổ / 35 sổ / 60 sổ / 8 sổ Bước 0 / sổ số 0 ngoài mẫu số | — | ✅ |
| A96 | Sheet 8 cột | — | ✅; 🔧 **SỬA 1 chỗ:** `02` §5.5 còn ghi "2 sheet" trong khi §5.6 đã có 3 (`raw`/`daily`/`obs`) |
| A98 | Cửa sổ im lặng ĐÚNG 2 ngày (15/09 · 18/09) | — | 🔧 **SỬA 2 chỗ còn sót:** `09` §? bảng "được/không được làm" (ghi *"3 ngày im lặng — ngày 8, 11, 14"*) và `10` §4 (*"có ba ngày cửa sổ im lặng"*) |
| A99/A102 | Caption card · nút Chép lời mời chỉ ở màn 4 | — | ✅ |
| A103 | MỘT file ADR | — | ❌ **KHÔNG khớp thực tế:** `docs/adr/` có **4 file ADR**. Xem §4-B6 |
| A104–A123 | 20 mốc ngày | — | ✅ toàn bộ kiểm chéo được: 08/09→21/09 = 14 ngày · cohort 02/12→29/12 · D14 đọc 16/12 · `sổ-D14` 11/01 · **D28 của sổ cuối cohort (29/12) = 26/01/2027** khớp A118 · mùng 1 Tết 06/02/2027 **đúng là thứ Bảy** |
| A119/A120 | Mùng 1 06/02/2027 · freeze 10 ngày | — | 🔧 **SỬA 5 chỗ** ghi "11 ngày Tết" (`01`, `05`, `07`, `08`, `11-nhat-ky`) — A120 (10 `book_date`) thắng mục D-07 của chính `_rulings.md` (viết "11 ngày") |

---

## 2. CHỖ ĐÃ TỰ SỬA TRONG VÒNG NÀY — 31 nhóm

### A. D-08 đã đóng hôm nay nhưng **chưa lan vào hồ sơ** (10 chỗ, 8 file)

`docs/adr/ADR-003-thi-phan-android-vn.md` (ghi lúc 13:57 hôm nay) chốt **Android VN = 57,33% · iOS 42,64%** (StatCounter T8/2026) và **thu hồi nhãn `[FACT]` của ">85%"**. Nhưng 9 file vẫn viết D-08 như câu hỏi đang treo — kể cả `11` §8 và `_gaps-resolved-technical` ghi thẳng *"🟡 vẫn treo, hạn là HÔM NAY"*.

| File | Đã sửa |
|---|---|
| `01` §6 mục 3 | Khối `[cần kiểm chứng]` → kết quả 57,33%/42,64% + hệ quả "web push chỉ phủ ~57%, iOS ~43% cần đường riêng" |
| `03` R3 | Dòng R3 viết lại, nguồn đổi sang ADR-003 |
| `03` §10 | Khối `⚠️ D-08` → `✅ ĐÃ ĐÓNG`, thêm cảnh báo phương pháp (StatCounter đo lưu lượng web) |
| `03` §4c | Câu "v2 §11 ghi… phủ >85%" đánh dấu vế đó đã sai |
| `07` §8(b) T13 | Ô "đang mâu thuẫn, chưa ai giải" → kết quả + hệ quả cho 0,3 pw |
| `08` §8.2 | Mở đầu + khối "CẦN FOUNDER QUYẾT" + bảng hai nhánh (a)/(b) → nhánh (b) thắng |
| `11` §8 + bảng "6 số cần kiểm chứng" | 🟡 → ✅ |
| `12` việc 8 | "Ghi kết quả: ______%" → đã điền 57,33%, giữ thao tác để lặp ở cổng 26/01/2027 |
| `_gaps-resolved-technical` | 🟡 → ✅ |
| `00` D-08 + §8 việc 3 + §10 mục 6 + mục 11 | Sửa tên file ADR (`0001-…` → `ADR-003-…`) và **sửa lại toàn bộ mô tả sai về thư mục `docs/adr/`** |

### B. Báo giá domain thật đã có nhưng chưa lan (20 chỗ, 10 file)

`11` §7.2 (kiểm chứng 04/09, biểu phí VNNIC/TT 20/2023/TT-BTC) chốt **770.000đ năm đầu** (200k đăng ký + 350k duy trì + 200k dịch vụ, đã VAT) **/ 460.000đ năm sau** — cao hơn ước lượng A67 (≈750.000đ) đúng 20.000đ, và hoà giải được cả ba con số cũ. Đã thay ở `01`, `02`, `05`, `07`, `08`, `10`, `12`, `13`, gỡ nhãn `[cần báo giá thật]` đã hết hiệu lực, và **tính lại hai tổng dẫn xuất**:

- `07` §7 tổng tiền mặt: 9.400.000–21.900.000 → **9.420.000–21.920.000đ** (trung tâm 15,6 → **15,7 triệu**); riêng 12 tuần: 7.550.000–20.050.000 → **7.570.000–20.070.000**
- `10` §9 TỔNG BẮT BUỘC: 7,85–17,85 → **7,87–17,87 triệu**
- `11-nhat-ky` QĐ-27: đánh dấu ước lượng cũ bị thay, ghi con số có hiệu lực

### C. Số dẫn xuất chưa tính lại sau khi số gốc đổi (6 chỗ)

**ZNS tính ở 5 người/sổ trong khi A70 chốt 4,0 là hệ số DUY NHẤT:**
`300đ/tin × 5 người × 30 ngày = 45.000đ/sổ/tháng` → **`300đ × 4,0 × 30 = 36.000đ/sổ/tháng`** ở `01` §6, `03` §2.6 + §4c, `09` §? bảng "không bao giờ làm", `10` §2.1 + §5 mục 15. Kéo theo: "ở 35 sổ = 1,58 triệu/tháng" → **1,26 triệu**; "250 năm chi phí biến đổi/user" → **~200 năm**.

### D. Cửa sổ im lặng 3 ngày → 2 ngày, hai chỗ còn sót (A98)

- `09`: *"Trả lời trong 3 ngày im lặng (ngày 8, 11, 14)"* → **2 ngày, 15/09 và 18/09**
- `10` §4: *"có ba ngày cửa sổ im lặng"* → **hai ngày**

### E. Tết 11 ngày → 10 ngày (A120 thắng D-07) — 5 file

`01` §5, `05` §12, `07` §8(a), `08` §8.4, `11-nhat-ky` QĐ-71. Mỗi chỗ ghi rõ: cửa sổ là **10 `book_date` (03/02 → 12/02/2027)**, tức 03/02 04:00 → 13/02 03:59 ICT; "11 ngày" ở mục D-07 là cách đếm ngày dương lịch, **không phải hằng số có hiệu lực**.

### F. Cấu trúc file (4 chỗ)

| Chỗ | Lỗi | Đã làm |
|---|---|---|
| `07` §4 CỔNG #3 | **Bảng markdown vỡ** — header 2 cột, 3 hàng dữ liệu 3 cột ⇒ cột "Hành động" bị nuốt khi render | Header đổi thành `Kết quả \| Điều kiện đo được \| Hành động` |
| `13-runbook-van-hanh.md` | Tiêu đề H1 vẫn là `# 11 — RUNBOOK VẬN HÀNH` | → `# 13 —` |
| `02` §5.5 | "2 sheet: `raw` và `daily`" trong khi §5.6 đã có 3 | → **3 sheet** `raw` · `daily` (8 cột) · `obs` |
| Toàn repo | Quét lại sau khi sửa | **0 bảng markdown lệch cột · 0 heading trùng · 0 chuỗi bold lẻ** (trừ 1 dương tính giả từ glob `src/domain/`) |

### G. Sự thật sai / số đếm sai trong `00-ke-hoach-tong.md` (7 chỗ)

`00` được viết lúc 13:42, thư mục `docs/adr/` được hoà giải lúc 13:57 ⇒ mọi mô tả của `00` về ADR đã lỗi thời trong vòng 15 phút.

| Chỗ | Nói sai gì | Sự thật |
|---|---|---|
| §8 việc 3 + §10 mục 11 | *"thư mục có hai file cùng số 0001"*, *"không có file nào tên `ADR-000-bat-bien.md`"*, *"mọi liên kết xem ADR-000 đang hỏng"* | **Sai cả ba.** Thư mục đã theo quy ước `ADR-NNN-slug.md`, `ADR-000-bat-bien.md` tồn tại đúng tên. Đã viết lại thành việc CÒN LẠI thật (chọn giữa gộp về 1 file theo A103, hay sửa A103 bằng văn bản) |
| §5.2 D-08 | Trỏ `docs/adr/0001-thi-phan-android-vn.md` | → `ADR-003-…` |
| §9 bảng điều hướng | Thiếu hẳn `11-nhat-ky-quyet-dinh.md` (sổ ~75 quyết định) | Đã thêm hàng, kèm cảnh báo trùng tiền tố `11-` |
| §9 | "DDL 11 bảng" | **18 bảng** (11 lõi + 7 phụ) |
| §7 + §4 + §1 + §5.1 | "13 tài liệu" (4 chỗ) ↔ "14 tài liệu" (2 chỗ) | Chuẩn hoá **15** (00 + 01…13, hai file mang tiền tố 11) |
| §10 mục 12 | "11.894 dòng kế hoạch" | Đếm lại: **9.992 dòng** trong 15 tài liệu (≈12.500 nếu tính cả `_rulings`, `_audit`, `_gaps`, `option-*`) |
| §8 mở đầu | "Tổng ước tính ≈ 18,5 giờ" | Cộng 7 việc = 2,5+1,5+2,5+1,0+3,0+3,0+3,5 = **17,0 giờ** (+20 phút `rclone`) ⇒ **≈17,3 giờ**. Câu "vượt cả hai nhánh của D-02" cũng sai — nó vượt nhánh 15h, **sát** nhánh 20h |
| §5.2 tiêu đề | "Mười hai mục D **của bảng phán quyết**" | `_rulings.md` chỉ có D-01…D-10; **D-11 và D-12 do `11` §8 mở ra ngày 04/09** — đã ghi rõ |
| §1 mục 2 | "Hết 16 giây" nói như sự thật | `08` §11 (chủ quyền UX) đo lại **18–22 giây** nếu giữ 3 hành động ⇒ đã gắn bất đồng chưa gỡ vào chỗ đó |

### H. Các sửa lẻ khác (4 chỗ)

- `06` §0 bảng ánh xạ E→số hiệu: **điền 10 số hiệu** còn ghi "tra `04` §7.1" (E1→1 · E2→4 · E3→9 · E4→11 · E5→12 · E6→14 · E9→21/22 · E11→7 · E12→6 · E14→24, và đổi tên `exit_survey` → `exit_survey_answered`). Đây là việc mà agent của `06` **cố ý bỏ ngỏ** vì `_rulings.md` không công bố bảng đánh số; nay `04` §7.1 đã có đủ 32 hàng nên điền được.
- `04` §7.1 event 15: `group-D14/D28` → `group-D14` / **`sổ-D28`** (A23).
- `07` §0: "24 US" → **25 US (US-00…US-24)**; và ghi rõ **US-15 xuất hiện ở HAI hàng có chủ ý** (2 nút luật định ở hạng mục 9, phần còn lại ở hạng mục 6 đã xuống 0,00 pw) — trước đó câu kiểm C09 khẳng định "mỗi US đúng một lần", không đúng.
- `01` §1: *"13 từ"* → **14 âm tiết** (13 từ nếu tính `chốt sổ` là một từ ghép) — bản cũ không nói theo cách đếm nào.

---

## 3. HAI MƯƠI MÂU THUẪN `[BLOCKING]` GỐC — ĐI TỪNG CÁI

| # | Nội dung | Trạng thái | Bằng chứng |
|---|---|---|---|
| **C01** | Doanh thu 0đ · T4 fake pre-order · G4 hai nhánh | ✅ **HẾT** | `10` §4 T4 = "thu CAM KẾT, KHÔNG thu tiền, 0 pw"; §7 G3/G5 đã bỏ vế "doanh thu = 0"; G4 viết hai nhánh. ⚠️ để lại **vòng tròn logic** ở nhánh (i) — xem B5 |
| **C02** | Schema nguồn duy nhất | ✅ **HẾT** | `03` §3.2 mở bằng khối ⛔ "MỤC NÀY KHÔNG CÒN TỰ KHAI SCHEMA"; `06` §0 chỉ còn bảng ánh xạ; `04` §1 có đúng **18** `create table` |
| **C03** | Cắt nút thả tim + hệ quả HM-1/HM-3/E7/`hearts_recv_14d` | ✅ **HẾT** | Mọi `♡`/`heart` còn lại đều dưới nhãn "CẮT" hoặc "Đặc tả giữ lại cho T13+"; `06` §4.2 còn **7** HM |
| **C04** | Bác "700 người", thay bằng hai counter | ✅ **HẾT** | 19 lần xuất hiện "700", **tất cả** trong ngữ cảnh "đã bị bác" |
| **C05** | `roster_size` mẫu số đóng băng | ✅ **HẾT** (sau 1 sửa) | Cột có trong `04` §1.5, pseudocode §4.1 tính và ghi, truy vấn §7.2 dùng `sum(roster_size)`. 🔧 `13` §1.4 định nghĩa sai đã sửa |
| **C06** | Tết Đinh Mùi 06/02/2027 · freeze 03/02→12/02 | ✅ **HẾT** (sau 1 nhóm sửa) | `03` §4a `freeze.dates` đúng; mọi `17/02/2027` đều dưới nhãn "SAI". 🔧 5 chỗ "11 ngày" đã về **10 ngày** |
| **C07** | MỘT kế hoạch beta (QĐ-25) | ✅ **HẾT** | Mọi "16/11" và "beta 5 sổ" và "20–30 sổ đợt 1" đều dưới nhãn "đã bỏ" |
| **C08** | `pw-ledger.md` là nơi duy nhất, một khoản cắt chi một lần | ✅ **thi hành**, ❌ **số chưa cân** | Câu "đổi lấy khoản X" đã bị thay khắp nơi. Nhưng bốn con số backlog vẫn khác nhau — xem B1 |
| **C09** | Bảng ánh xạ US ↔ hạng mục §4.10 | ✅ **HẾT** (sau 1 sửa) | `02` §2 có cột "Hạng mục §4.10" + "Trong MVP-0?"; `07` §0 có cột "US nào" và **phủ đủ 25 US**. 🔧 sửa "24 US" và ngoại lệ US-15 |
| **C10** | MỘT danh mục 32 event | ✅ **HẾT** (sau 1 sửa) | `04` §7.1 đếm được 32 hàng, số 25 để trống; `06`/`08` chỉ tham chiếu. 🔧 điền 10 số hiệu |
| **C11** | Sheet Bước 0 8 cột, hai mẫu số | ✅ **HẾT** (sau 1 sửa) | `02` §5.6 + `13` §1.4 đúng 8 cột A96. 🔧 sửa "2 sheet" → 3 |
| **C12** | (trùng C01) hai điều kiện độc lập cấm T4 thu tiền | ✅ **HẾT** | `10` §4 có cả hai dòng điều kiện |
| **C13** | (trùng C07) 12 sổ là cohort quyết định, không phải trần | ✅ **thi hành**, ❌ **mâu thuẫn nguồn** | `07` và `06` đều ghi rõ; nhưng A25 vs A90/A91 vẫn đá nhau — xem B3 |
| **C14** | Trạng thái backlog 7,25 pw ⇒ cổng 05/10 đã kích hoạt trên giấy | ✅ **ghi ra**, ❌ **chưa cắt** | `06` §6 có khối ⛔ [C14]; nhưng chưa ai cắt — xem B1 |

**Kết luận §3: 14/14 phán quyết blocking đã được thi hành trong văn bản. 0 mâu thuẫn blocking gốc còn sót.**

---

## 4. MÂU THUẪN CÒN LẠI — 6 mục, đều NGOÀI quyền sửa của tài liệu

> Không mục nào sửa được bằng cách viết lại một câu. Năm mục cần **founder quyết**; một mục nằm trong chính `_rulings.md`.

**B1 · Ba (thật ra bốn) hệ toạ độ pw cùng tồn tại trên một trần.** `01` §4.10 tự cộng ra **6,55 pw** · `02` bảng US ra **6,63 pw** · `06`/`_rulings` C14 ghi backlog **7,25 pw** (8,35 nếu tính khoản có điều kiện) · `11` ghi **7,50 pw** · nhưng `docs/adr/pw-ledger.md` — nơi được tuyên là **DUY NHẤT** — ghi **4,57 pw** vì nó lấy MVP-0 làm gốc chứ không lấy backlog. Riêng MVP-0 cũng có ba con số: bảng hạng mục `07` **3,80** · A85 **4,58** · bảng US `02` **5,93**, trên trần **3,5**, trong một cửa sổ lịch thật chỉ chứa **3,25 pw** (23/09→02/12 = 10 tuần × 13 h). ⇒ **D-01, hạn 22/09.** Gỡ được ở phiên ánh xạ C09 ngày 22–23/09, không sớm hơn.

**B2 · 15 hay 20 giờ/tuần — hai con số loại trừ nhau vẫn cùng sống.** Toàn bộ lịch tính trên 20 h/tuần; kill gate của chính hồ sơ viết `>15 h/tuần ⇒ dừng`. Riêng Bước 0 đã ngốn **15,2 h/tuần** (130 phút × 14 tối) và bảy việc của tuần này ngốn **17,3 giờ** — cả hai đều đã vượt nhánh 15h **trước dòng code đầu tiên**. ⇒ **D-02, hạn 22/09.** Tài liệu đã viết sẵn cả hai nhánh đúng luật mục D; không được tự chọn.

**B3 · Cổng G2 có thể không đủ cỡ mẫu — mâu thuẫn nằm TRONG `_rulings.md`.** A25/A118 đòi `n ≥ 24` sổ trong cohort tuần 1–4 (02/12→29/12) với KTC ±17đ. A90 chốt đợt 1 = **12 sổ**, A91 chốt đợt 2 mở **từ tuần 15** — tức sau khi cohort đã đóng. Ở n=12 thì KTC = **±23,6đ** (13,8%–60,9%) và cổng 26/01/2027 **không mở được gì**. Chỉ thoả nếu đợt 2 thực sự mở **trong** cửa sổ 02/12→29/12. ⇒ Cần một phán quyết mới, hoặc quyết định mở đợt 2 sớm. Hạn thực tế: **30/11/2026**.

**B4 · Backlog vượt trần cứng A83 ngay tại thời điểm ban hành.** `02` cộng đúng ra **6,63 pw** = 6,5 + 0,35 creep hợp lệ (audit_log 0,15 · pulse_survey 0,05 · định giá lại event 0,15) − 0,22 cắt phân biệt được ⇒ **vượt 0,13 pw**. Cộng thêm **+0,25 pw** hàng rào an toàn của `11` (D-11) chưa ghi sổ cái. Hai đường ra, cả hai ngoài quyền tài liệu: nâng A83 lên bằng văn bản, hoặc chỉ định khoản cắt bù ≥0,13 pw **trước 05/10**.

**B5 · Vòng tròn logic ở G4 nhánh (i).** C01 buộc giữ tiêu chí "doanh thu ròng 12 tháng ≥ 20 triệu", nhưng cả ba bề mặt sinh doanh thu (P1 export — D-06 · P2 sổ in — S13 · P3 B2B — S11) đều có *"đã qua G4 30/06/2027"* trong điều kiện mở lại của chính chúng ⇒ **không tồn tại kênh hợp lệ nào sinh ra 20 triệu TRƯỚC G4**. Và sau khi T3 fake-door bị cắt (S04), nhánh (ii) cũng mất phép đo ý định trả tiền trong sản phẩm. ⇒ **D-03, hạn 20/12/2026** — nhưng nên gỡ cùng D-01 ngày 22/09.

**B6 · A103 ("MỘT file ADR duy nhất") không khớp thực tế.** `docs/adr/` có **4** file ADR: `ADR-000-bat-bien` · `ADR-001-nen-tang-ky-thuat` · `ADR-002-ranh-gioi-phap-ly` · `ADR-003-thi-phan-android-vn`, cộng `pw-ledger.md` và `README.md`. Toàn bộ 15 tài liệu đã được sửa để **chỉ trỏ tới ADR-000** (mọi tham chiếu "ADR-001"/"ADR-002" đều là câu phủ định) — nên hồ sơ nhất quán, nhưng **thư mục thì không**. Hai đường: (a) gộp 001/002 vào ADR-000 §2/§3, giữ 003 như *bản ghi kiểm chứng sự thật* (~40 phút, đúng chữ A103) · (b) sửa A103 bằng văn bản thành "một file BẤT BIẾN + các ADR bản ghi". **Khuyến nghị (a).** Đã ghi vào `00` §8 việc 3.

### Hai lỗi nhỏ trong chính `_rulings.md` (không sửa, chỉ báo)

- **A65 nói "7 câu" nhưng C40 liệt kê 8** (3 của `05` + 2 Điều 32 BLDS + 2 của `04` + 1 của `03`). `04` §12.2 đã ghi bất đồng này. Nếu tổng thật là 8 thì việc đánh số câu ở `04`/`03` phải dịch một bậc.
- **A120 ghi 10 ngày, D-07 ghi "11 ngày Tết"** cho cùng một cửa sổ. Hồ sơ đã thống nhất theo **A120** (luật đọc bảng A thắng).
- `_rulings.md` mục E dẫn một phán quyết **"C62" không tồn tại** (bảng chỉ có C01–C53). Đã được `05` ghi nhận.

---

## 5. CHỖ CỐ Ý ĐỂ LẠI — 8 mục, kèm lý do

| # | Chỗ | Vì sao KHÔNG sửa |
|---|---|---|
| 1 | `03` §4b/§5 giữ cột **10.000 và 100.000 DAU** (cao gấp ~79× và ~786× trần pháp lý 60 sổ) | Chúng là **bài kiểm sức chịu tải** của kiến trúc (chứng minh không có bậc nhảy $200), không phải kế hoạch. Đã có khối ⚠️ ngay đầu §5 nói ngân sách có hiệu lực duy nhất là cột đầu $28–37 |
| 2 | `01` §4.5 Bảng 6 tính dung lượng trên **sổ 5 người** trong khi A70 = 4,0 | Ước lượng lưu trữ phải thận trọng theo hướng **cao** (nguyên tắc 1). Lý do đã ghi tại chỗ. Hai mẫu số trong một file là giá phải trả có ý thức |
| 3 | `08` §5.6 + §7.1 giữ ví dụ ở **A = 5** | §7.1 trích thẳng v2 §9 mục 6 ("P(nhóm 5 người sống 30 ngày)"), và A = 5 là kịch bản "sổ đầy". `08` đã in kèm khối tính lại đầy đủ ở A = 4,0. Áp A70 vào ví dụ minh hoạ cần một phán quyết rõ |
| 4 | `01` §4.10 giữ **cả hai dòng TỔNG** (6,5 "như viết ngày đầu" và 6,55 "sau khi áp phán quyết") | A87 quy định việc cộng phải làm ở `pw-ledger.md`. Làm tròn xuống cho khớp trần chính là hành vi mà C08/C14 tồn tại để chặn |
| 5 | `06` §4.2 giữ ngưỡng HM-7 đòi mẫu số ≥15 sổ và các ngưỡng khác chỉ có hiệu lực từ ≥100 sổ, **trong khi trần pháp lý là 60 sổ** | Đây là mâu thuẫn **cấu trúc** của bộ metric tác hại, không phải lỗi câu chữ: trong 12 tháng đầu không ngưỡng nào đạt hiệu lực thống kê. `06` §4.4 đã ghi thẳng ra thay vì giấu |
| 6 | `09` giữ ba mốc dùng `parent_book_id` (≥50%, ≥10%) dù chúng **đọc ra ≈0 do cấu trúc** sau A101 (1 sổ/thiết bị) | Bảng phán quyết không nói thay bằng gì. `09` §2.3 đã có khối cảnh báo để không đọc nhầm một quyết định scope thành kết luận thị trường |
| 7 | Hai file khác nhau cùng mang tiền tố `11-` | Đổi tên file là thao tác ngoài phạm vi soát (có thể có tham chiếu ngoài `docs/plan/` mà bản soát này không thấy). Đã fix H1 của `13` và ghi việc này vào `00` §10 mục 11 kèm khuyến nghị đổi thành `14-nhat-ky-quyet-dinh.md` (chỉ 2 tham chiếu ở `06` phải sửa) |
| 8 | `_rulings.md`, `_audit-report.md`, `option-*.md` | Là **bản ghi lịch sử**, không phải tài liệu thi hành. Sửa chúng làm mất dấu vết vì sao đã quyết như vậy |

---

## 6. `00-ke-hoach-tong.md` CÓ ĐỨNG MỘT MÌNH ĐƯỢC KHÔNG?

**Có — sau 9 chỗ sửa ở §2.G.** Kiểm bằng bốn tiêu chí:

| Tiêu chí | Kết quả |
|---|---|
| **Tham chiếu vòng** | ❌ không có. Mọi tham chiếu là **một chiều xuống chi tiết** (`00` → `01`…`13` → `_rulings`), không file nào bị buộc phải đọc để hiểu `00` |
| **Đọc xong có biết làm gì tiếp không** | ✅ §8 cho **7 việc có ngày, có giờ, có output kiểm chứng được**, và nói rõ ba việc không hồi tố được nếu chỉ làm được ba |
| **Hằng số có tự chứa không** | ✅ §4 trích 34 dòng hay dùng nhất + luật đọc + con trỏ tới từ điển đầy đủ. Đã kiểm từng dòng khớp mục A |
| **Có chỗ mơ hồ không** | 🔧 đã đóng 4 chỗ: "13 vs 14 tài liệu", "DDL 11 bảng", "18,5 giờ", "Mười hai mục D của bảng phán quyết". Còn **một chỗ cố ý mơ hồ**: §1 mục 2 "16 giây" nay mang cảnh báo rằng `08` đo lại ra 18–22 giây — bất đồng chưa gỡ, không nên giấu |

**Điểm mạnh nhất của `00`:** §10 ("những gì bộ tài liệu chưa trả lời được") tự khai 12 lỗ hổng, gồm cả việc hồ sơ tự vượt ngân sách của chính nó và việc chưa một con số cốt lõi nào được đo. Một tài liệu tổng chịu viết mục đó thì tin được.

**Điểm yếu còn lại:** `00` không có bảng "câu hỏi mở đã khử trùng lặp" cho ~70 câu rải trong 15 tài liệu — chính `00` §10 mục 11 thừa nhận. Đó là việc thật, không phải lỗi.

---

## 7. FILE HỎNG CẤU TRÚC

Quét toàn bộ 18 file đang thi hành: **1 bảng vỡ · 1 tiêu đề sai · 0 heading trùng · 0 nội dung cụt · 0 chuỗi bold lẻ**. Cả hai đã sửa (§2.F). Sau khi sửa, quét lại: **sạch**.

Một hệ quả phụ của vòng sửa giá domain: 10 chỗ bị dính `****` (bold lồng bold) do thay chuỗi — **đã dọn hết**.

---

## 8. NĂM VIỆC FOUNDER NÊN LÀM ĐẦU TIÊN

> Xếp theo **tính không hồi tố**, không theo mức độ khó chịu.

1. **HÔM NAY 04/09 — chạy buổi kiểm chứng nền tảng 7 câu** (`12`, ~2,5 giờ, ≥3 máy Android thật). **Chạy câu 2 trước** (`<input type=file>` trong webview Zalo): nếu chọn ảnh không chạy đồng nhất thì core loop không tồn tại và 6 việc còn lại đều vô nghĩa. Duyệt **0,05 pw** cho phương án B của D-09 **trước** buổi test. D-08 đã đóng (57,33%) nên buổi hôm nay chỉ còn 7 câu thật.
2. **HÔM NAY — bấm gửi email 7 câu cho luật sư** (đã trễ hạn A104 1 ngày, ~90 phút, 5–15 triệu, nội dung soạn sẵn ở `11` §6.1 và `05` §11). Câu số 3 có thể **xoá toàn bộ đường ray doanh thu** của `10`; mỗi ngày chậm là một ngày code có thể phải viết lại. Báo giá domain đã có (**770.000đ**) nên việc này chỉ còn 3 báo giá luật sư.
3. **05/09 — ngồi một giờ, trả lời BẰNG VĂN BẢN sáu quyết định đang chặn:** F-01 tên sản phẩm (**hạn 07/09** — sau 08/09 tên đã đi vào 112 lần dán card vào nhóm bạn thật) · F-02 bỏ boss · F-03 hướng chat-native · F-04 đơn vị nhóm (A=4,0, `k`=1 khi `A_eff`≤2) · **D-06** export làm tay 0 pw · **D-11** chi 0,25 pw hàng rào. Một trang, có ngày, có chữ ký. **Không dòng nào để trống.**
4. **06–07/09 — dựng thiết bị đo, và làm `rclone` trước:** 112 shortlink (8 sổ × 14 ngày, Short.io free, **không tự host**) · Google Sheet **8 cột** + cột `roster_size` · ngưỡng H2 (≥60% sổ nhánh A đạt ≥9/14 ngày) ký bằng văn bản · script **S9 thông báo & đồng ý dữ liệu** gửi vào cả 8 nhóm **trước tối đầu tiên**. Kèm **20 phút cấu hình `rclone sync` cho `thumb/`** — R2 hiện **không có backup nào**. Sau 08/09, `roster_size` ngày 1–3 **không tái dựng được**, và ảnh dán vào Zalo **không sinh sự kiện mở**.
5. **Đặt lịch cho phiên 22–23/09 ngay bây giờ, và gọi nó bằng tên thật: phiên CẮT.** Đó là nơi duy nhất gỡ được B1+B2+B4 cùng lúc — ánh xạ US ↔ hạng mục (C09), chọn khoản cắt 1,08–1,33 pw (D-01), và **ghi bằng văn bản 15 hay 20 giờ/tuần** (D-02). Trước phiên đó, việc rẻ nhất và đúng chữ A103 là **gộp `ADR-001`/`ADR-002` vào `ADR-000`** (~40 phút, xem `00` §8 việc 3) — vì mọi tài liệu đã trỏ tới ADR-000 rồi, chỉ thư mục là chưa theo.

---

_Soát bởi vòng audit cuối, 04/09/2026. 31 nhóm sửa đã áp dụng trực tiếp vào file. Không file nào ngoài `docs/plan/` bị chạm._
