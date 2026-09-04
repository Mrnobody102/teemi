# Bảng phán quyết trọng tài

**Ngày ban hành: 2026-09-03.** Phạm vi: 53 mâu thuẫn (14 blocking · 29 major · 10 minor) + 25 mục scope creep trong `_audit-report.md`.

**Hiệu lực.** Đây là văn bản duy nhất có quyền quyết định giữa 10 tài liệu kế hoạch. Khi tài liệu nào mâu thuẫn với file này, **file này thắng**. 10 agent sửa file sau đó **chỉ thi hành**, không diễn giải lại, không "cải tiến", không thêm phương án mới. Nếu một agent thấy phán quyết sai, agent đó ghi vào mục "Bất đồng với phán quyết" ở cuối tài liệu của mình và **vẫn sửa theo phán quyết**.

**Bốn nguyên tắc đã dùng để phán quyết**, theo thứ tự áp dụng:
1. Con số **thận trọng hơn** thắng (chi phí cao hơn, thời gian dài hơn, ngưỡng khắt khe hơn, rủi ro pháp lý thấp hơn).
2. **Chủ quyền theo lĩnh vực**: `01-v2` = SẢN PHẨM · `04` = SCHEMA + THUẬT TOÁN · `05` = PHÁP LÝ · `03` = CHI PHÍ HẠ TẦNG · `06` = ĐỊNH NGHĨA METRIC · `08` = TONE + UX. File chủ quyền thắng, trừ khi file khác đưa bằng chứng cụ thể hơn.
3. **Tài liệu bắt được lỗi toán học của nguồn thì thắng nguồn** (04 bắt `k` tính trên A cùng ngày; 06 bắt mẫu số trượt; 05 bắt ngưỡng 700 sai đơn vị; 09 bắt ngày Tết sai).
4. **Scope creep = CẮT.** Thứ đã bị cắt mà quay lại thì mặc định bị cắt lần nữa, trừ khi có khoản đối trừ đã ghi vào `docs/adr/pw-ledger.md`.

**Ghi chú về sổ đăng ký quyết định.** Bộ tài liệu đã mang sẵn một lớp đánh dấu `[CHỐT 2026-08-28, QĐ-xx]` (QĐ-01…QĐ-35). Các phán quyết dưới đây **giữ nguyên số hiệu QĐ đó** để hai lớp không đá nhau; phần audit chỉ ra là lớp QĐ **chưa được lan đủ** sang mọi file. Bảy quyết định mới của vòng này được đánh số **QĐ-36 → QĐ-42**.

---

## A. TỪ ĐIỂN GIÁ TRỊ CHUẨN

> **Luật đọc bảng này:** mọi con số trong 10 tài liệu phải khớp cột "GIÁ TRỊ CHUẨN". Nếu một tài liệu cần con số khác, tài liệu đó phải trích dòng này và nói rõ vì sao — không được im lặng ghi số khác. Ô ghi `[chưa đo]` là ước lượng phải mang nhãn `[ước lượng]` ở mọi nơi nó xuất hiện.

### A.1 Thời gian và cơ chế ngày

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A01 | Định nghĩa NGÀY (`book_date`) | **04:00:00 → 03:59:59 ICT (UTC+7)** | — | `04` §3, v2 §4.4, ADR-000 | tất cả |
| A02 | Biên nộp muộn kỹ thuật | **120 giây** tính trên `intent_at` | giây | `04` §3.4 | `03` |
| A03 | Lịch cron `rollover` | **`5 21 * * *` UTC = 04:05 ICT** | — | `04` §3.5 (QĐ-21); `0 21 * * *` của `03` chạy trùng biên 120 s → vỡ bất biến `book_day` | `03` §2.7 |
| A04 | Job cron 21:00 (`mo_chot_so`) | **CẮT** — trạng thái "sẵn sàng chốt" suy ra từ giờ server | — | v2 §4.7 (hệ thống không gửi gì lúc 21:00) + `07` (QĐ-22). −0,10 pw ghi vào sổ cái | `03` §2.7 |
| A05 | Job đối soát TTL ảnh gốc | **04:10 ICT** | — | `04` §6.1 | `03` |

### A.2 Thuật toán chấm ngày

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A06 | `A_eff` (số người hoạt động hiệu lực) | **`A_eff = min(A(D), A(D−1))`** | người | `04` §4.1/§4.3/§9.1 (QĐ-14b) — nguyên tắc 3: `04` chứng minh bằng số học rằng `k` trên `A` cùng ngày làm sổ 2 người **mất chuỗi đúng vào ngày có thêm bạn** | `02` US-11, `07` T5, `08` §7.2 |
| A07 | Ngưỡng đủ mâm `k` | **`k = 1` nếu `A_eff ≤ 2`; `k = 2` nếu `A_eff ≥ 3`** | người | v2 §4.4 + `04` §4.3. Công thức `ceil(0,6×A)` **đã chết** (gãy đơn điệu ở A=4) | `02`, `07`, `08` |
| A08 | `group_alive` | **`A ≥ 3` người nộp ≥1 tấm trong 7 ngày gần nhất** | người | `04` §2.3 + `06` §0 + ADR-000. **Cấm nới sang ≥2 để qua ngưỡng** | tất cả |
| A09 | `duo_alive` | `A ≥ 2` — **đo song song, CHỈ tham khảo**, không được thay thế `group_alive` trong bất kỳ quyết định nào | người | `06` §2 luật 3 | `06`, `09` |
| A10 | Van nghỉ | **2 ngày hụt / cửa sổ 7 ngày trượt** | ngày | v2 §4.4 | tất cả |
| A11 | Hành vi của van | Ngày được van đỡ: chuỗi **đóng băng** (không tăng, không đứt) · **không** tính vào mẫu số `q_c` · tiêu 1 slot van | — | `04` §4 + ADR-000 | `06`, `08` |
| A12 | Trạng thái sổ | `active` → `dormant` (7 ngày liên tiếp `A < 3`) → `dead` (21 ngày liên tiếp không tấm) → `archived` (mọi thành viên đã rời) | — | `04` §2.3 (QĐ-15). Ngưỡng "0 tấm trong 14 ngày" của `08` **bị bỏ** | `08` §7.2 |
| A13 | Nguồn trạng thái cho UI | **UI đọc `book.status`**, không tự định nghĩa ngưỡng. Ba trạng thái Sống/Còn hai/Còn một phân loại theo `A` nhưng **chỉ đổi nội dung, không đổi layout** | — | `04` §2.3 (QĐ-15) | `08` §7.2 |
| A14 | `roster_size` (mẫu số đóng băng) | **Số người đã nộp ≥1 tấm trong 3 ngày đầu của sổ; đóng băng, giữ nguyên 14 ngày** | người | `06` §9 BĐ-1 (QĐ-03) — nguyên tắc 3: mẫu số trượt làm `q_c` **tăng** khi sổ chết (0,54 → 0,90) | `04` §1.5/§7.2, `02` §5.6 |

### A.3 Metric và ngưỡng

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A15 | `q_c` — định nghĩa | Tỉ lệ **có mặt** (XONG **hoặc** TOANG) / **`roster_size`** (mẫu số đóng băng) | tỉ lệ | `06` §9 BĐ-1 (QĐ-03) | `04` §7.2, `02` §5.6 |
| A16 | `q_c` — ngưỡng cổng 22/09 | **DỪNG `< 0,35`** · **ĐI `≥ 0,45`** · vùng xám 0,35–0,45 = chạy lại cohort mới | tỉ lệ | `06` §6 | `07`, `10` |
| A17 | `q_c` — giá trị giả định thiết kế | **0,53** `[suy luận, chưa đo — đây là giả thuyết H2]` | tỉ lệ | v2 §4.5. Phải mang nhãn `[chưa đo]` ở **mọi** bảng dẫn xuất | v2, `03`, `05`, `08`, `10` |
| A18 | `q_x` — định nghĩa và ngưỡng | Tỉ lệ **XONG** / `roster_size`. **ĐI `≥ 0,30`**; `< 0,30` ⇒ nhãn đang gây nhục ⇒ đổi sang "đã có mặt" không phân biệt | tỉ lệ | `06` §6 | `02`, `07`, `10` |
| A19 | Hai cột song song trong Sheet Bước 0 | Bắt buộc có **cả** `q_c_roster`/`q_x_roster` (so ngưỡng) **và** `q_c_sliding`/`q_x_sliding` (báo cáo phụ) | — | `06` §9 BĐ-1. Hạn **07/09/2026**, sau đó không tái dựng roster ngày 1–3 được | `02` §5.6 |
| A20 | Tiêu chí H2 (thay "chuỗi ≥5 ngày") | **≥ 60% sổ nhánh A đạt ≥ 9/14 ngày tính** | tỉ lệ | `06` §9 BĐ-2 (QĐ-06) — tách nhóm fail/đạt ở 31,6% vs 98,5%; tiêu chí chuỗi ≥5 gần như tự đạt do van 2 ngày | `07` §4, `10` §7 |
| A21 | Quyền của H1 ở Bước 0 | **CHỈ có quyền DỪNG (`click-shortlink < 40%`). KHÔNG có quyền ĐI.** Ngưỡng `≥60%` dời sang tuần 2 của beta khi có event `card_opened` thật | — | `02` §5.7+§8(4) + `06` §9 BĐ-3 (QĐ-05) | `07` §4 CỔNG #1, `10` §7 G0 |
| A22 | Thiết bị đo H1 ở Bước 0 | **Shortlink theo ngày theo sổ: 8 sổ × 14 ngày = 112 link** (dịch vụ rút gọn bên thứ ba). Bắt buộc, hạn **07/09** | link | `06` §9 BĐ-3 — ảnh Canva dán vào Zalo **không sinh sự kiện "mở"** | `02`, `07` |
| A23 | `sổ-D28` — OMTM | Tỉ lệ sổ trong cohort **tuần 1–4 của beta (02/12→29/12/2026)** còn `group_alive` ở ngày 28 | tỉ lệ | `06` §1 | `09`, `10` |
| A24 | `sổ-D28` — ngưỡng | **DỪNG < 25%** · vùng xám 25–35% · **≥ 35% ⇒ mở khoá app native + widget** | tỉ lệ | v2 §6 mục 2 + `06` §6 | `07`, `09`, `10` |
| A25 | Cỡ mẫu cổng `sổ-D28` | **n ≥ 24 sổ** (hạ từ ≥30). In kèm **KTC 95% = ±17 điểm** mỗi lần trích dẫn | sổ | `09` §1.2 (kịch bản cơ sở chỉ sinh 24 sổ ở 4 tuần đầu) + `06` §7.1 (QĐ-13). Giữ ≥30 nghĩa là cổng **không bao giờ mở được** | v2 §6 mục 2, `06`, `10` |
| A26 | Công thức `B` (neo Bước 0) | **`B = % sổ nhánh A còn `group_alive` ở ngày 14`**, mẫu số = **5 sổ nhánh A**, **loại sổ số 0** (nhóm founder), `group_alive` tính trên **roster đóng băng** | % | QĐ-26. ⚠️ n=5 ⇒ `B` chỉ nhận {0, 20, 40, 60, 80, 100}% — bước nhảy 20 điểm, **phải in kèm mỗi lần dùng** | `02` §1.3, `07` CỔNG #3, `10` G2 |
| A27 | Số chỉ số tác hại | **7** (HM-2, HM-4…HM-9). **HM-1 và HM-3 BỊ BỎ** cùng nút thả tim | chỉ số | QĐ-05b. Hệ quả phải ghi rõ: bộ metric tác hại **chỉ còn phát hiện RÚT LUI, không phát hiện LOẠI TRỪ** | `06` §4.2 |
| A28 | `pulse_survey` | **BẮT BUỘC** (không còn là "bổ sung"). Event số 30. Bắn **ngày 7 và ngày 21** kể từ khi vào sổ. Chi phí 0,05 pw | — | `06` §4.3 (QĐ-05b) — sau khi HM-1/HM-3 chết, đây là kênh **duy nhất** nghe được người đang ở lại mà mệt | `04` §7.1 |

### A.4 Schema, dữ liệu, lưu trữ

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A29 | Ngôn ngữ đặt tên schema | **Tiếng Anh** | — | QĐ-02c — `04` giữ DDL; đổi hôm nay = 1 lệnh `sed`, đổi sau commit đầu = 1 buổi + 1 lớp bug | `03` §3.2 |
| A30 | Tên bảng sổ / khoá chính | **`book` / `book_id`** — không `group`, không `so` | — | `04` §1. P10 của v2 đọc lại thành "cột đầu tiên của mọi bảng và mọi event là **khoá sổ**" | v2 P10, `02`, `03`, `06` §0 |
| A31 | Tên bảng tổng hợp ngày | **`book_day`** — không `day_rolled`, không `ngay_so` | — | QĐ-02b | `03` §3.2, `06` §0 |
| A32 | 18 bảng chuẩn | `book · membership · person · proof · book_day · event · remote_config · card · report · block · audit_log` (+ phụ) — **`03` §3.2 và `06` §0 không được tự khai schema**, chỉ tham chiếu `04` §1 | — | `04` §1 | `03` §3.2, `06` §0 |
| A33 | Khoá duy nhất bảng tấm | **`UNIQUE(book_id, person_id, book_date)`** | — | `04` §1.4. Khoá `(thanh_vien_id, logical_date)` của `03` **bị bác** — nó chặn cứng đa sổ ở tầng CSDL | `03` §3.2 |
| A34 | Key R2 ảnh gốc | **`orig/<book>/<date>/<person>/<client_proof_id>.jpg`** | — | `04` §5.2 — chỉ bản này làm retry upload idempotent | `03` §2.5 |
| A35 | Key R2 thumbnail / card | `thumb/…` · `card/<book>/<date>.png` | — | `04` §6.1 | `03` |
| A36 | TTL ảnh gốc | **72 giờ** (R2 Lifecycle + job đối soát 04:10) | giờ | `04` §6.1 | tất cả |
| A37 | Kích thước ảnh gốc | **~110 KB** (1080px, q=0,72) `[chưa đo — phải đo trên 20 ảnh Android thật trước khi tin]` | KB | v2 §4.2 + `02` §3.1 | `03` §5, `10` §2.1 |
| A38 | TTL thumbnail 320px | **VĨNH VIỄN** (đến khi chủ ảnh xoá). 180 ngày sổ ngủ ⇒ chuyển **lớp lưu trữ lạnh (R2 IA)**, **KHÔNG xoá**. Chỉ xoá khi `book.status = 'archived'` + báo trước **30 ngày** + có đường tải về | — | QĐ-11 — toàn bộ thumbnail của 10.000 sổ chỉ **$3/tháng**, kinh tế không biện minh được việc xoá | `10` §5 mục 12 |
| A39 | Kích thước thumbnail | **~18 KB** | KB | `04` §6.1 | `03`, `10` |
| A40 | TTL card PNG | **90 ngày**; hết hạn ⇒ **thay bằng ảnh tĩnh trung tính, KHÔNG 404** | ngày | `03` §2.5 + §9 B3 (QĐ-07) — dãy ảnh vỡ trong lịch sử chat Zalo là thiệt hại thương hiệu chậm và không ai báo | `04` §1.6, §6.1 |
| A41 | Kích thước card PNG | **150 KB** — một con số duy nhất (thay 150 KB ở `03` và 180 KB ở `04`) | KB | QĐ-07 | `04` §6.1 |
| A42 | `share_token` (trang public) | Chuỗi **độc lập hoàn toàn** với `book.code`, sinh riêng, không suy ra được từ nhau. **TTL 7 ngày**, `noindex` + `robots.txt` | ngày | `04` §8.5 + `03` §9 B2 (QĐ-36 mới) — 24h giết phép đo M2, vĩnh viễn để lộ lưới ảnh của người 16 tuổi ra ngoài nhóm | `04` §8.5, `08` §2.2 |
| A43 | Bảng chữ mã sổ | **28 ký tự: `23456789ACDEFGHJKMNPQRTUVWXY`** (8 chữ số + 20 chữ cái; **bỏ 0 O 1 I L B S Z**), độ dài **6** ⇒ 28⁶ ≈ 481 triệu | ký tự | QĐ-12. Regex cũ `^[2-9A-HJ-NP-Z]{6}$` cho 32 ký tự và **vẫn chứa `L`** | `04` §1.3, `02` US-01, `08` §2.1 |
| A44 | Slug công khai | **KHÔNG được chứa `code6` như substring.** Có **test CI** kiểm điều này | — | QĐ-12b — ví dụ `chotso.vn/s/k7qm2pv4nx` với mã `K7QM2P` là lỗ hổng thật | `08` §2.2 |
| A45 | Mã 6 ký tự in lên card | **CÓ in** (đường thoát hiểm khi Zalo chặn domain), nhưng chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi** | — | `08` UX-2 (đường thoát hiểm phải nằm trong pixel) + `03` §9 B2 (không được là khoá vào vô điều kiện) | `03` §9 B2, `04` §1.3 |
| A46 | Trần người/sổ | **8** (thực thi bằng trigger) | người | `04` §1.3 | `08`, `10` |
| A47 | Lưu tuổi | **`person.is_16_plus boolean` + `age_gate_at`. KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** | — | `05` §6 mục 2 (QĐ-20) — tối thiểu hoá dữ liệu, Luật 91/2025. Kiểm tra tuổi làm ở **tầng ứng dụng** | `04` §1.2 |
| A48 | Hai CHECK gọi `now()` | **XOÁ** `person_birth_year_sane` và `person_age_gate` — Postgres không cho hàm không-IMMUTABLE trong CHECK, `CREATE TABLE` sẽ lỗi | — | `03` §4a (khối cảnh báo IMMUTABLE) | `04` §1.2 |
| A49 | Bảng `audit_log` | **Có từ migration đầu**, lưu **≥ 2 năm** (IP, login/logout, giao dịch). +0,15 pw đã ghi sổ cái | năm | `05` GIAI ĐOẠN 2 (QĐ-19) — "rẻ nhất khi làm sớm, không thể làm bù" | `03` §3.2, `04` §1, `02` §2, `07` §0 |
| A50 | Cột `paused_until` | **CÓ trong schema từ commit đầu** (chi phí cột = 0). **KHÔNG có UI ở MVP-0** | — | `04` §2.2 + QĐ-23 | `06` §9 BĐ-5 |
| A51 | Số event analytics | **32 event** — danh mục hợp nhất duy nhất ở `04` §7.1. Số **25 (`heart_sent`) để trống vĩnh viễn, KHÔNG tái sử dụng** | event | QĐ-02. `06` §0 và `08` §9 **không còn tự khai danh mục**, chỉ tham chiếu | `06` §0, `08` §9 |
| A52 | Payload `member_left` (event 20) | `book_id, person_id, misses_7d, was_removed_by_moderation:bool, kept_proofs:bool, days_in:int, toang_14d:int`. **`hearts_recv_14d` KHÔNG tồn tại** (chết cùng nút tim). `was_kicked` **đổi tên** thành `was_removed_by_moderation` | — | QĐ-05b + QĐ-18 | `06` §0 E8 |
| A53 | Định giá lại hạng mục analytics | Hạng mục 8 của v2 §4.10 = 0,5 pw được cấp cho **14 event**; danh mục hợp nhất có **32 event + 2 counter pháp lý** ⇒ **+0,15 pw**, đã ghi vào `docs/adr/pw-ledger.md` với khoản đối trừ | pw | QĐ-02 | v2 §4.10, `07` §0 |

### A.5 Pháp lý và an toàn

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A54 | Đèn cảnh báo pháp lý | **HAI counter, KHÔNG phải "700 người"**: `monthly_visits` **vàng 6.000 / đỏ 8.500** · `monthly_active_persons` **vàng 600 / đỏ 850** | lượt / người | `05` §0 kết luận 2 (QĐ-04) — ngưỡng NĐ 147/2024 là **OR**, nhánh `10.000 lượt/tháng` **bind trước ~2,5 lần**. Con số 700 báo động **muộn 2,5 lần** | `01` §9, `02` DoD 7.3, `03` §2.4, `04` event 28, `06` §6+§8, `07` §3+§6, `09`, `10` §5 mục 14 |
| A55 | Event cảnh báo | **Hai event: `visits_alert{level, visits_count, window_start}` (số 28) và `persons_alert{…}` (số 29)**. Event `mau_alert` **bị xoá** | — | QĐ-04 — `monthly_visits` phải đếm session **từ dòng code đầu**, không backfill được | `04` §7.1 |
| A56 | Định nghĩa hai counter (tạm, chờ luật sư) | `monthly_active_persons` = số `person` khác nhau có ≥1 `proof` trong 30 ngày · `monthly_visits` = số phiên khác nhau (session mới sau **30 phút** không hoạt động) chạm **bất kỳ route nào, kể cả trang public**. **Đếm rộng, báo động sớm** | — | QĐ-24 | `05` §12, `06`, `07` |
| A57 | Hành động ở đèn vàng | Bắt đầu **soạn hồ sơ Giấy phép MXH** (3–6 tháng, cần pháp nhân VN + người chịu trách nhiệm nội dung quốc tịch VN) | — | `05` §10 | `10` §5 mục 2 |
| A58 | Hành động ở đèn đỏ | **Dừng nhận sổ mới ngay trong ngày** + cân nhắc phone OTP | — | `05` §10 | `03` §2.4 |
| A59 | SLA gỡ nội dung | **HAI con số cho HAI đối tượng: 48 giờ** (khiếu nại người dùng) · **24 giờ, khẩn cấp 6 giờ** (yêu cầu cơ quan nhà nước). Trang chính sách **in cả hai** | giờ | `05` Bất đồng #5 (QĐ-17) — 24h/6h là luật định, không thương lượng | v2 §5 màn 7, `02` US-17 + DoD 7.4, `03` R8, `07` T8, `08` màn 7 |
| A60 | Cơ chế xử lý report | **Auto-hide TOÀN CỤC ngay khi có report đầu tiên**; founder xử trong SLA; khôi phục nếu report sai | — | `05` §8.3 (QĐ-16) — Luật ANM 116/2025 Điều 16 khoản 3. Ẩn-chỉ-với-người-báo-cáo của `08` **không thoả nghĩa vụ**. Chi phí ~0 (`04` đã có `proof.hidden_at`) | `08` §6.4, `02` DoD 7.4 |
| A61 | Chức năng kick / vai "chủ sổ" | **KHÔNG TỒN TẠI ở MVP-0.** Không có vai chủ sổ, không có UI gỡ thành viên | — | `08` §6.5 (QĐ-18) — ≥0,4 pw cho một tính năng mà tác dụng chính là drama. State `removed` **chỉ** dùng cho ca moderation của founder | `04` §2.2 |
| A62 | Doanh thu trong 6 tháng đầu | **0đ TUYỆT ĐỐI** — kể cả quảng cáo, kể cả donate, kể cả bán một cuốn sổ in | đồng | `05` §0 kết luận 3 + §10 bước 2 (QĐ-01) | `10` §3, §4, §7 |
| A63 | T4 (tháng 12–01) | **Fake pre-order: thu tên + số điện thoại + câu "tôi đồng ý đặt trước". KHÔNG số tài khoản, KHÔNG chuyển khoản, KHÔNG nhận một đồng nào** | — | QĐ-01 | `10` §4 |
| A64 | Kill gate 31/03/2027 | **`> 15 giờ/tuần` VÀ `sổ-D28 < 25%` ⇒ DỪNG DỨT KHOÁT trong tuần đó.** Vế "doanh thu = 0" **ĐÃ BỊ BỎ** khỏi điều kiện | — | QĐ-01b — nếu pháp lý cấm phát sinh doanh thu thì doanh thu 0 là **hệ quả pháp lý**, không phải tín hiệu thị trường | `06` §6, `09` §6, `10` §7 G3 |
| A65 | Số câu hỏi gửi luật sư | **7 câu, MỘT email, MỘT lần trả phí** | câu | `05` §11 (QĐ-14) — danh sách hợp nhất thay mọi danh sách rời ở v2 §12, `03` §10, `04` §8, digest #20 | `07` §7, `03` §10, `04` §8 |
| A66 | Chi phí ý kiến luật sư | **5.000.000 – 15.000.000đ** (lấy dải rộng hơn — 7 câu, không phải 1) | đồng | `05` §2 + `10` §9 (nguyên tắc 1: chi phí cao hơn thắng). **Không mua thư 1 câu 3–5 triệu nữa** | `07` §7 |
| A67 | Giá domain `.vn` năm đầu | **≈ 750.000đ** (mốc cao nhất trong ba ước lượng 460k/550–770k/750k) `[cần báo giá thật 03/09]` | đồng/năm | QĐ-27 (nguyên tắc 1) | `07` §7, §8c |
| A68 | Số domain | **MỘT** (`chotso.vn`) ở MVP-0. Domain dự phòng **CẮT** — đường thoát hiểm là mã 6 ký tự trên card (0đ). **Mua domain thứ hai ngay trong tuần** nếu buổi 04/09 cho thấy Zalo **cảnh báo** domain `.vn` lạ | domain | QĐ-37 (mới) | `08` Bất đồng #5, `07` §7 |
| A69 | Thời hạn lưu `goal_text` | Xoá cùng sổ; **không giữ sau khi thành viên rời** (mọi copy không bao giờ tham chiếu `goal_text`) | — | ADR-000 + v2 P-goal | `05` §8.1, `04` |

### A.6 Kinh tế và quy đổi

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A70 | **A trung bình (hệ số quy đổi sổ ↔ người)** | **4,0** — hệ số DUY NHẤT của toàn hồ sơ | người/sổ | QĐ-10 — khớp `10`, khớp khuyến nghị 4–6 của r01, **bảo thủ hơn 5 ở phía pháp lý**. Thay 3,6 (`09`), 5 (`05`), 2,65 DAU/sổ (`03`) | `03` §4b, `05` §2, `09` §9.1 |
| A71 | DAU/sổ | **2,12** (= 4,0 × `q_c` 0,53) `[dẫn xuất từ một số chưa đo]` | người | A70 × A17 | `03` §4b |
| A72 | Lượt truy cập / người / tháng | **25** `[ước lượng, ảnh hưởng 🔴 Rất cao — quyết định trần beta là 60 hay 600 sổ]` | lượt | `05` §2 | `05`, `06` |
| A73 | Quy đổi ngưỡng pháp lý | Đèn vàng 6.000 lượt ÷ 25 = 240 người ÷ 4,0 = **60 sổ** · Đèn đỏ 8.500 lượt ≈ **85 sổ** · Ngưỡng luật 10.000 lượt ≈ **100 sổ** | sổ | A70 + A72 | `05` §2, `07`, `10` |
| A74 | Chi phí hạ tầng ở beta | **Kỳ vọng $28–37/tháng.** Supabase Pro **$25/tháng BẮT BUỘC từ ngày beta chạy (02/12)** — Free không có backup hằng ngày trong khi sản phẩm hứa giữ thumbnail vĩnh viễn | USD/tháng | `03` §2.3+§5+§9 B6 (QĐ-09) — nguyên tắc 1 + nguyên tắc 2 (`03` là chủ quyền chi phí hạ tầng) | `01` §4.5 Bảng 6, `02` DoD 7.5, `06` §8 Khối 4, `10` §2.2 |
| A75 | Đèn báo động chi phí | **> $60/tháng** | USD/tháng | `10` §5 (khớp QĐ-09). Ngưỡng $25 của `06` sẽ kêu **vĩnh viễn từ tuần đầu** | `06` §8 Khối 4 |
| A76 | Tiêu chí DoD hoá đơn tháng đầu | **≤ $40** (thay ≤$12) | USD | QĐ-09 | `02` DoD 7.5 |
| A77 | eCPM web display VN | $0,25–0,60 `[ước lượng thuần, KHÔNG có nguồn — con số có nguồn $1,51/$2,34 là eCPM in-app, không dùng được cho web]` | USD | `10` §3.4 | `10` |
| A78 | Trần convert | 3,2–3,6% MAU `[FACT về Discord, nhưng là trần vay mượn cho một sản phẩm web không IAP, thanh toán chuyển khoản tay]` | % | `10` §1 | `10` |

### A.7 Phạm vi, lịch, vận hành

| # | Đại lượng | GIÁ TRỊ CHUẨN | Đơn vị | Căn cứ | File phải sửa theo |
|---|---|---|---|---|---|
| A79 | Số màn | **7 màn + 1 slot dự phòng ĐỂ TRỐNG.** Slot 8 chỉ mở nếu **Bước 0 chứng minh** một màn là bắt buộc, lý do ghi vào ADR | màn | v2 §5 + `02` DoD 7.1 (QĐ-32) | `08` §Phạm vi (sửa "8 màn web" → "7 màn + 1 slot dự phòng"), `10` §4 luật 1 |
| A80 | Định nghĩa 1 pw | **1 pw = 40 giờ tập trung** | giờ | v2 §4.10 + `02` §3.2 | tất cả |
| A81 | Hệ số hiệu suất | **0,65** `[không có nguồn — xuất hiện lần đầu ở v2 §4.10, phải mang nhãn này ở mọi nơi]` | — | v2 §4.10 | `02`, `07` |
| A82 | Tốc độ thực tế | 20 giờ/tuần × 0,65 = **13 giờ code/tuần** ⇒ **1 pw ≈ 3,1 tuần lịch** | giờ/tuần | `02` §3.2 (nguyên tắc 1: dùng con số chậm hơn). Câu "6,5 pw ≈ 10 tuần" của v2 chỉ đúng ở 40 giờ/tuần | v2 §4.10, `07` §0 |
| A83 | Trần backlog cứng (P7) | **6,5 pw.** Vượt ⇒ kill gate 05/10 kích hoạt | pw | v2 §7 P7 + `06` §6 tuần 4 | tất cả |
| A84 | Scope MVP-0 (trần) | **3,5 pw** (con số thận trọng hơn trong hai: 3,5 của `07` vs 3,8 của `02`) | pw | QĐ-25 | `02` §4.3 |
| A85 | Ước lượng trung thực MVP-0 | **4,58 pw** trên bảng US chi tiết cho **cùng** scope ⇒ **thiếu 1,08 pw**. Founder phải cắt thêm ~1,1 pw trước 22/09 (xem D-01) | pw | `07` §0 + `02` §2 (nguyên tắc 1) | `02`, `07` |
| A86 | Danh sách cắt MVP-0 | **lưới 30 ngày · nút thả tim · biến thể card (đủ mâm + mốc sổ) · màn Của tôi (xuống 0,00 pw) · Tết freeze · cron 21:00** | — | QĐ-25 (khung của `07`, đối chiếu bằng bảng US của `02`) | `02` §4.3 |
| A87 | Sổ cái pw | **`docs/adr/pw-ledger.md`** là nơi DUY NHẤT. Luật: **một khoản cắt chỉ được chi MỘT LẦN**. Không PR nào merge nếu tổng vượt A83 | — | QĐ-33 | `03`, `04`, `05`, `06`, `09`, `10` |
| A88 | Ngày beta | **02/12/2026** | ngày | QĐ-25 — 4 tài liệu dùng ngày này; quan trọng hơn: cohort quyết định `sổ-D28` neo vào 02/12 | `07` §1 (bỏ 16/11) |
| A89 | Trần cứng beta | **15/12/2026** — chưa chạy ⇒ ship thứ đang có, **không gia hạn** | ngày | v2 §4.10 | `06` §6 tuần 14 |
| A90 | Số sổ beta đợt 1 | **12 sổ** (02/12 → 29/12/2026) = cohort quyết định | sổ | QĐ-25 | v2, `02` §4.3, `09` §8 |
| A91 | Số sổ beta đợt 2 | **≤ 30 sổ**, mở dần từ tuần 15 | sổ | QĐ-25 + `09` §2.2 | v2, `06` |
| A92 | Trần vận hành | **35 sổ sống cùng lúc** (8,4 phút/sổ/tuần) — trần **10 giờ/tuần**. Vượt 3 tuần liên tiếp ⇒ giảm số sổ, không giảm giấc ngủ | sổ | `09` §2.2 `[ước lượng]` | `05`, `07` |
| A93 | Trần cứng hành chính | **60 sổ** — đây là trần **PHÁP LÝ** (đèn vàng), không phải trần vận hành. Không nới bằng cách hỏi lại | sổ | QĐ-04 + QĐ-10 | `05` §12 câu 2, `09` |
| A94 | Số sổ Bước 0 | **8 sổ = 5 nhánh A + 3 nhánh B.** Sàn tuyệt đối **6 (4A + 2B)**; nếu rơi xuống sàn thì **mọi ngưỡng phát biểu lại theo tỉ lệ %**, không theo "3/5" | sổ | v2 §12 + `02` §5.3 (nguyên tắc 1: giữ cỡ mẫu lớn hơn) | `09` Bất đồng #3 |
| A95 | Sổ số 0 (nhóm founder) | **KHÔNG nằm trong mẫu số của bất kỳ phép đo nào**, kể cả `B` | — | `09` §1.5 + QĐ-26 | `02` §5.3, `06` |
| A96 | Số cột Google Sheet Bước 0 | **8 cột**: `q_c_roster · q_x_roster · q_c_sliding · q_x_sliding · roster_size · số người nộp · số XONG · số TOANG` (pseudonymised, xoá sau 22/09) | cột | `02` §5.6 sau QĐ-03 (thay 6 cột của v2 §12) | v2 §12, `02` §5.6, `05` |
| A97 | Giao thức cửa sổ im lặng | Founder **làm card rồi gửi RIÊNG cho người trực** của sổ đó. **KHÔNG tự dán card vào nhóm. Không post, không nhắc, không trả lời trong nhóm.** Người trực quên dán ⇒ **để nguyên** (đó là phép đo điểm chết đơn, miễn phí) | — | `02` §5.5 + script S6 §5.9 (QĐ-29) | v2 §10(f), `07` T2 |
| A98 | Ngày cửa sổ im lặng | **15/09 và 18/09/2026** | ngày | `07` T2 sau QĐ-29 | `02` §5.9 S6 |
| A99 | Caption card | **`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`** | — | `08` Bất đồng #2 (QĐ-31) — `Bấm vô nộp đi` là mệnh lệnh chỉ có nghĩa với người **CHƯA nộp**, cùng hình dạng ngữ nghĩa với chữ cấm vĩnh viễn `đứa nào chưa` | v2 §4.6, `09` §1.4(c), `02` §5.9 S5 |
| A100 | Lưới ảnh trên card | **Lưới thích ứng theo số người ĐÃ NỘP** (1 · 1×2 · 2×2 · 2×3 · 2×4). **Ô của người vắng KHÔNG TỒN TẠI** — không ô xám, không silhouette, không tên. Fixture snapshot test bắt buộc: **8 người** | ô | QĐ-30 — ràng buộc P2 | `08` §4 màn 4, `02` §5.8 |
| A101 | Đa sổ / nút "Mở sổ mới" | **1 sổ/thiết bị ở MVP-0.** `G ≡ 0` trong 12 tháng đầu là **quyết định CÓ Ý THỨC**, được ghi ra thay vì để nó xảy ra âm thầm. Trần 3 sổ/thiết bị là hằng số đặt trước cho v1.1, **chưa có hiệu lực** | sổ | QĐ-08 | `09` Bất đồng #1, `10` §5 mục 8 |
| A102 | Nút "Chép lời mời" | **Chỉ ở màn 4 (dưới card). KHÔNG ở màn 6** | — | QĐ-34 — v2 §5 liệt kê màn 6 gồm đúng 5 thứ; `07` cắt màn 6 xuống 0,00 pw | `08` §4 màn 6 |
| A103 | Số file ADR | **MỘT file: `docs/adr/ADR-000-bat-bien.md`** chứa 3 mục (đơn vị đo · schema & đặt tên · pháp lý), cộng `docs/adr/pw-ledger.md`. **ADR-001 và ADR-002 bị gộp vào, không tạo riêng** | file | QĐ-38 (mới) — digest #10 kê toa "viết ĐÚNG MỘT ADR trước dòng code đầu tiên, không phải ba" | mọi tham chiếu "ADR-001"/"ADR-002" trong 9 tài liệu |

### A.8 Ngày tháng chuẩn

| # | Mốc | NGÀY CHUẨN | Nội dung | File phải sửa theo |
|---|---|---|---|---|
| A104 | Gửi luật sư + lấy 3 báo giá + báo giá domain | **03/09/2026** | 7 câu, một email | `07` §7, v2 §12 |
| A105 | Buổi kiểm chứng nền tảng | **04/09/2026** | **7 câu** trên ma trận ≥3 máy Android thật: Zalo cảnh báo domain `.vn` · `chooseImage`/`<input type=file>` · OG preview 4:5 crop · Service Worker trong webview · `navigator.share({files})` · danh sách "Đã xem" của Zalo · generated column `AT TIME ZONE` + `CREATE TABLE` | v2 §10(h), `02`, `03`, `07`, `08` |
| A106 | Hạn chốt thiết bị đo + roster + ngưỡng | **07/09/2026** | Shortlink 112 link · cột `roster_size` · ngưỡng H2 ≥9/14 · ToS/Privacy nháp · thông báo đồng ý Bước 0 | `02`, `06` |
| A107 | Bước 0 bắt đầu | **08/09/2026** | 0 dòng code sản phẩm | tất cả |
| A108 | Bước 0 kết thúc | **21/09/2026** | 14 ngày | tất cả |
| A109 | Cổng #1 + văn bản quyết định | **22/09/2026** | GT-01 + GT-05 + cổng phi số | `06`, `07`, `10` |
| A110 | Dòng code đầu tiên | **23/09/2026** | Sau ADR-000 | `07` |
| A111 | Kill gate kỷ luật scope | **05/10/2026** | Tổng backlog > 6,5 pw ⇒ DỪNG | `06` §6 |
| A112 | Cổng tiến độ build | **02/11/2026** | <45% ⇒ cắt scope, không dời lịch | `06` §6 |
| A113 | Cổng sẵn sàng beta | **30/11/2026** | Tiêu chí **phải quan sát được ĐÚNG NGÀY 30/11**: ≥10 sổ đã ghi danh **và** feature freeze đã xảy ra | `06` §6 tuần 12 |
| A114 | Beta chạy | **02/12/2026** | 12 sổ đợt 1 | v2, `02`, `07`, `09`, `10` |
| A115 | Trần cứng beta | **15/12/2026** | Chưa chạy ⇒ ship thứ đang có | `06` §6 tuần 14 |
| A116 | Đọc `group-D14` beta | **16/12/2026** | D14 rơi vào 15/12, đọc số ngày 16/12 | `02`, `07` |
| A117 | Cổng `sổ-D14` | **11/01/2027** | `sổ-D14 < 30%` ⇒ DỪNG | `06` §6 |
| A118 | **G2 — cổng `sổ-D28`, mở khoá widget/native** | **26/01/2027** | Cohort tuần 1–4 (02/12→29/12/2026), n ≥ 24, KTC ±17 điểm. **Ngày DUY NHẤT** — thay 20/01 (`09`), 31/01 (`10`), 22/02 (`06`) | `06` §6 tuần 20, `09` §8, `10` §7 G2 |
| A119 | **Mùng 1 Tết Đinh Mùi 2027** | **06/02/2027 (thứ Bảy)** | `17/02/2027` là **SAI** — đó là Tết Bính Ngọ 2026 | `06` §9 BĐ-5, `07` §5+§6+§8a |
| A120 | Cửa sổ Tết freeze | **03/02/2027 04:00 ICT → 13/02/2027 03:59 ICT** (tức `book_date` từ `2027-02-03` đến `2027-02-12`, **10 ngày**) | `remote_config['freeze.dates']`. Ngày trong khoảng: không tiêu van, không đứt chuỗi, không vào mẫu số `q_c` | `03` §4a (bỏ `[["2027-02-14","2027-02-20"]]`), `04` §1.7 (bỏ ví dụ `2027-02-16`) |
| A121 | Hạn hoàn thành Tết freeze | **25/01/2027** (build ở T13–T18, **ngoài** MVP-0) | — | `07` §8 |
| A122 | **KILL GATE FOUNDER** | **31/03/2027** | `30/03` ở `06` là lỗi chép | `06` §6 tuần 30 |
| A123 | G4 | **30/06/2027** | **Phải viết lại hai nhánh** theo câu trả lời số 3 của luật sư (xem D-03) | `10` §7 G4 |

---

## B. PHÁN QUYẾT TỪNG MÂU THUẪN

> Cột "PHÁN QUYẾT" là mệnh lệnh, không phải gợi ý. Cột cuối là việc phải làm, không cần hỏi lại.

### B.1 — 14 mâu thuẫn [BLOCKING]

| # | Mức | Giữa file nào | PHÁN QUYẾT | File phải sửa | Sửa cụ thể thế nào |
|---|---|---|---|---|---|
| **C01** | blocking | `05` §0/§10 ↔ `10` §4 T4 + §7 G4 (+ `C33` trùng) | **`05` THẮNG ba lần** (pháp lý · điều kiện mở lại của v2 §6 mục 19 · chính câu mở đầu §4 của `10`). Doanh thu **0đ tuyệt đối** trong 6 tháng đầu; T4 là **fake pre-order thu cam kết, không thu tiền** | `10` §4, §7; `01` §9 | `10` §4: T4 → "thu tên + SĐT + câu đồng ý đặt trước; KHÔNG số tài khoản, KHÔNG chuyển khoản, 0 pw code". `10` §7 G4: viết lại **hai nhánh** (a) luật sư nói được thu ⇒ giữ tiêu chí doanh thu ≥20 triệu; (b) luật sư nói cấm ⇒ G4 đo bằng `sổ-D28` + ý định trả tiền (fake-door conversion), **không** đo doanh thu. Xoá vế "doanh thu = 0" khỏi kill gate 31/03 ở `06`/`09`/`10` |
| **C02** | blocking | `03` §3.2 ↔ `04` §1 ↔ `06` §0 | **`04` là schema nguồn DUY NHẤT.** Tiếng Anh, `book_id`, `book_day`, `UNIQUE(book_id, person_id, book_date)`, key R2 `orig/<book>/<date>/<person>/<cpid>.jpg` | `03` §3.2, `06` §0 | `03` §3.2: **xoá toàn bộ DDL tiếng Việt**, thay bằng một dòng "Schema: xem `04` §1. Tài liệu này không tự khai bảng." `06` §0: xoá bảng `day_rolled` và bộ cột riêng, thay bằng tham chiếu `04` §1.5. Xem A29–A35 |
| **C03** | blocking | `06` §4.2 + §0 ↔ `08` §6.2 ↔ `03` §10 c7 + `04` §9.4 + `07` MVP-0 | **CẮT nút thả tim khỏi MVP-0** (nguyên tắc 4 — ba tài liệu độc lập chọn nó làm ứng viên cắt). Hệ quả **phải ghi rõ, không được giấu**: HM-1, HM-3, E7 `heart_sent`, `hearts_recv_14d` **chết theo** | `06` §4.2 + §0; `08` §6.2; `05` §3; `09` §3 | `06`: gạch HM-1/HM-3, ghi câu "bộ chỉ số tác hại **chỉ còn phát hiện RÚT LUI, không phát hiện LOẠI TRỪ** — đây là điểm mù đã biết, thay thế gần nhất là HM-8 + `pulse_survey`". Xoá `hearts_recv_14d` khỏi E8. `08` §6.2: đánh dấu toàn mục "T13+". `05` §3: bỏ tim khỏi danh sách dấu hiệu "tương tác". `09` §3 hạng 4: xoá câu "đã giải xong bài toán spectator mode" |
| **C04** | blocking | `05` §0 kết luận 2 ↔ `01`, `02`, `03`, `04`, `06`, `07`, `09`, `10` (+ `C38` trùng) | **`05` THẮNG.** Con số **700 bị BÁC hoàn toàn**, thay bằng **hai counter** (A54). Trần beta ghi lại là **60 sổ**, không phải "vài trăm" | `01` §9; `02` DoD 7.3; `03` §2.4; `04` event 28; `06` §6 + §8; `07` §3 + §6 + CH mở #8; `09`; `10` §5 mục 14 | Tìm-và-thay mọi lần xuất hiện "700": → `monthly_visits` vàng 6.000/đỏ 8.500 **HOẶC** `monthly_active_persons` vàng 600/đỏ 850. `04`: **tách event 28 `mau_alert` thành `visits_alert` (28) + `persons_alert` (29)** trước commit đầu — `monthly_visits` phải đếm session từ ngày đầu, không backfill được. `10` §1 định nghĩa B: đổi "giữ dưới 700 MAU" → "giữ dưới đèn đỏ hai counter" |
| **C05** | blocking | `06` §9 BĐ-1 ↔ `04` §7.2 + §1.5 | **`06` THẮNG** (nguyên tắc 3 — có ví dụ số chứng minh mẫu số trượt làm `q_c` **tăng** khi sổ chết). Thêm cột `roster_size` vào `book_day`; `q_c`/`q_x` so ngưỡng dùng **mẫu số đóng băng** | `04` §1.5 + §7.2 | `04` §1.5: thêm `roster_size smallint not null`. `04` §7.2: viết lại truy vấn — bỏ `sum(present_count)/sum(active_count)`, dùng `sum(present_count)/sum(roster_size)`. Giữ bản trượt làm **cột báo cáo phụ** có tên khác (`q_c_sliding`) |
| **C06** | blocking | `09` §6 ↔ `03` §4a, `04` §1.7, `06` §9 BĐ-5, `07` §5+§6+§8a (+ `C44` trùng) | **`09` THẮNG** (nguyên tắc 3 — ngày kiểm chứng được). Mùng 1 Tết Đinh Mùi = **06/02/2027**. Cửa sổ freeze = **03/02 04:00 → 13/02 03:59 ICT** | `03` §4a; `04` §1.7; `06` §9 BĐ-5; `07` §5, §6, §8a | `03`: `freeze_ranges` = `[["2027-02-03","2027-02-12"]]` (bỏ 14–20/02). `04` §1.7: ví dụ đổi `2027-02-16` → `2027-02-05`. `07`: **kết luận CẮT Tết freeze khỏi MVP-0 VẪN ĐỨNG** (06/02/2027 vẫn ngoài cửa sổ 12 tuần kết thúc 29/11/2026) nhưng **lý do phải viết lại** — không được ghi "Tết là 17/02". `06` BĐ-5: khoản trả bù "Tết freeze" **không còn hợp lệ** (đã bị `07` tiêu), xem C43 |
| **C07** | blocking | `02` §3.2+§4.3 ↔ `07` §0 ↔ `01` §4.10 ↔ `09` §8 (+ `C35` trùng) | **MỘT kế hoạch beta duy nhất (QĐ-25):** scope **3,5 pw** · ngày beta **02/12/2026** · trần cứng **15/12/2026** · **12 sổ** đợt 1 · **≤30 sổ** đợt 2 từ tuần 15 · **60 sổ** trần hành chính. Danh sách cắt = A86 | `01` §4.10; `02` §4.3; `07` §1; `09` §8; `06` §6 | Cả bốn tài liệu **trỏ về QĐ-25**, không tài liệu nào giữ bảng riêng. `07`: bỏ ngày 16/11, hai tuần chênh trở thành **đệm rủi ro, không phải scope**. `02`: bỏ phương án "beta 5 sổ". `09`: bỏ "20–30 sổ" ở đợt 1. `06` §6 tuần 14: "beta đã chạy từ 02/12 với ≥12 sổ" |
| **C08** | blocking | `03` §9, `04` §9.4+§9.5, `06` BĐ-5, `09` §5+BĐ#1, `10` BĐ#3 ↔ `01` §7 P7 (+ `C36` trùng) | **Sổ cái pw hợp nhất là `docs/adr/pw-ledger.md`, và nó là nơi DUY NHẤT.** Luật: **một khoản cắt chỉ được chi MỘT LẦN.** Bảng §4.10 của v2 **không còn là ngân sách** — đọc như bối cảnh | `01` §4.10; `03` §9; `04` §9.4+§9.5; `06` §9; `09` §5+BĐ#1; `10` BĐ#3 | Mỗi tài liệu: **xoá mọi câu "đổi lấy khoản X"** và thay bằng "đề xuất này đã/chưa được ghi vào `docs/adr/pw-ledger.md`". Ba khoản bị bán nhiều lần bị **vô hiệu**: "nút thả tim 0,2 pw" (bán 3 lần → nó đã bị CẮT sẵn ở MVP-0, **không còn là tiền**), "Tết freeze 0,10" (bán 2 lần → đã bị `07` cắt), "lưu ảnh + preview dùng chung 0,20" (`09` tự thừa nhận dùng 2 lần). Xem A83–A87 |
| **C09** | blocking | `07` §0 ↔ `02` §2 + §4.3 (hai hệ toạ độ cắt) — nguyên `C37` | **Phải có bảng ánh xạ `US ↔ hạng mục §4.10 ↔ MVP-0`**, viết ngày 22–23/09 cùng văn bản quyết định. Không có nó thì **cả hai phương án cắt đều không thực thi được** | `02` §2 + §4.3; `07` §0 | `02`: thêm cột "hạng mục §4.10" và cột "trong MVP-0? Y/N" vào bảng 24 US. `07` §0: thêm cột "US nào" vào bảng 10 hạng mục. Hai bảng phải cộng ra **cùng một tập US sống**. Con số làm việc = **4,58 pw** (A85), trần = 3,5 pw ⇒ thiếu 1,08 pw ⇒ D-01 |
| **C10** | blocking | `04` §7.1 (28) ↔ `06` §0 (14) ↔ `08` §9 (3) — nguyên `C32`, gộp `C23` | **MỘT danh mục event duy nhất: 32 event ở `04` §7.1** (QĐ-02). Union của `04` + `pulse_survey` (E13→30) + `days_in`/`toang_14d` vào `member_left` + 2 event UX của `08`; **bỏ** `heart_sent`, `submit_committed` (trùng event 9), `member_blocked` (trùng event 23 `block_created`) | `06` §0; `08` §9; `04` §7.1 | `06` §0: xoá bảng E1–E14, thay bằng **bảng ánh xạ E→số hiệu** trỏ về `04` §7.1. `08` §9: xoá 3 event, tham chiếu `04`. `04`: xác nhận số 25 để trống vĩnh viễn. **Định giá lại: +0,15 pw** (0,5 pw của v2 cấp cho 14 event, nay là 32) ghi vào sổ cái |
| **C11** | blocking | `06` §9 BĐ-1 ↔ `02` §5.6 — nguyên `C34` | **`06` THẮNG** (`02` chỉ chép lại v2 §11). Google Sheet Bước 0 phải có **8 cột** (A96) với **cả hai** mẫu số | `02` §5.6 | Sửa nguyên văn "tính trên thành viên Active = đã nộp ≥1 tấm trong 7 ngày gần nhất" → "**mẫu số so ngưỡng = `roster_size` (đóng băng, người nộp ≥1 tấm trong 3 ngày đầu); mẫu số trượt 7 ngày giữ làm cột báo cáo phụ**". **Hạn 07/09** — sau 08/09 roster ngày 1–3 không tái dựng được |
| **C12** | blocking | `05` §0 kết luận 3 + GIAI ĐOẠN 4 ↔ `10` §4 + §7 ↔ `01` §6 mục 19 | Đã xử ở **C01** (cùng mâu thuẫn, phát hiện hai lần). Bổ sung: v2 §6 mục 19 khoá doanh thu sau `≥20k MAU VÀ ≥1 người khác làm ops`; ở T4 dự án có ~120 người và 1 người ⇒ **T4 vi phạm cả điều kiện sản phẩm lẫn điều kiện pháp lý** | `10` §4; `01` §6 mục 19 | `10` §4: thêm dòng "hai điều kiện độc lập cùng cấm T4 thu tiền: (a) `05` §0 kết luận 3 · (b) v2 §6 mục 19". `01`: giữ nguyên mục 19 |
| **C13** | blocking | `07` §1 (16/11, 12 sổ) ↔ v2/`09`/`10` (02/12, 30 sổ) ↔ `02` (5 sổ) ↔ `05` (60 sổ) | Đã xử ở **C07**. Bổ sung: `07` **đúng về số học giờ** (159 giờ còn lại) nhưng **sai về hệ quả đo** — cắt xuống 12 sổ/D14 làm OMTM của `06` không chạy được nếu không mở đợt 2 | `07` §1; `06` §1 | `07`: ghi rõ "12 sổ là **cohort quyết định**, không phải trần beta; đợt 2 mở tới ≤30 sổ từ tuần 15 để `sổ-D28` có n≥24". `06`: ghi rõ `sổ-D28 trên n≥24` là **cổng của tháng 01/2027**, KHÔNG phải cổng của 12 tuần |
| **C14** | blocking | P7 — một khoản cắt bán nhiều lần (`03`, `04`, `06`, `07`, `09`, `10`) | Đã xử ở **C08**. Bổ sung phán quyết về **trạng thái hiện tại**: cộng đúng, backlog ≈ **7,25 pw** (tới 8,35 pw nếu tính khoản có điều kiện) trên trần 6,5 pw ⇒ **kill gate tuần 4 (05/10) đã kích hoạt trên giấy**. Đây **KHÔNG** phải lý do dừng dự án — nó là lý do **cắt tiếp trước 22/09** | `06` §6 tuần 4; tất cả | `06` §6 tuần 4: giữ nguyên ngưỡng, thêm ghi chú "tính tại 03/09/2026 backlog = 7,25 pw ⇒ phải cắt về ≤6,5 pw trước 05/10". Việc cắt cụ thể: **D-01** |

### B.2 — 29 mâu thuẫn [MAJOR]

| # | Mức | Giữa file nào | PHÁN QUYẾT | File phải sửa | Sửa cụ thể thế nào |
|---|---|---|---|---|---|
| **C15** | major | `03` §2.7 ↔ `04` §3.4 + §3.5 | **`04` THẮNG.** `rollover` ở **`5 21 * * *` UTC (04:05 ICT)**. Job `mo_chot_so` 21:00 **CẮT** | `03` §2.7 | Sửa lịch cron. Xoá dòng `mo_chot_so`, ghi "−0,10 pw, đã vào sổ cái". Thêm câu giải thích: `0 21 * * *` chạy đúng 04:00:00 ICT, **trước cả biên 120 giây** ⇒ tấm bấm Gửi 03:59:40 commit 04:00:20 rơi vào `book_day` đã finalized ⇒ vỡ bất biến |
| **C16** | major | `01` §4.2+§4.5, `04` §6.1, `08` §7.2 ↔ `10` §5 mục 12 (+ `C47` trùng) | **v2/`04`/`08` THẮNG.** Thumbnail **vĩnh viễn**; 180 ngày ngủ ⇒ **cold storage, không xoá**; chỉ xoá khi `archived` + báo trước 30 ngày + có đường tải về | `10` §5 mục 12 | Đổi dòng 12: "0 tấm 60 ngày → thông báo trong app · 180 ngày → chuyển R2 Infrequent Access · **KHÔNG xoá thumbnail**". Kinh tế: 10.000 sổ = ~200 GB ≈ **$3/tháng** — không biện minh được việc xoá đúng tài sản mà P4 và màn sổ ngủ đông dựa vào |
| **C17** | major | `03` §2.5 + §9 B3 ↔ `04` §1.6 + §6.1 ↔ `08` §7.3 | **`03` THẮNG.** Card TTL **90 ngày**, hết hạn ⇒ **ảnh tĩnh trung tính, không 404**. Kích thước **150 KB** (một con số) | `04` §1.6, §6.1 | Sửa `-- TTL 30 ngày` → `-- TTL 90 ngày`; sửa "180 KB" → "150 KB". Lập luận B3 mạnh hơn: dãy ảnh vỡ trong lịch sử chat là thiệt hại thương hiệu **chậm và không ai báo** |
| **C18** | major | `05` §6 mục 2 + `03` §3.2 ↔ `04` §1.2 | **`05`/`03` THẮNG.** `person.is_16_plus boolean` + `age_gate_at`. **Không lưu năm sinh.** Xoá 2 CHECK gọi `now()` | `04` §1.2 | Xoá cột `birth_year smallint`; xoá `person_birth_year_sane` và `person_age_gate` (Postgres cấm hàm không-IMMUTABLE trong CHECK ⇒ `CREATE TABLE` **sẽ lỗi**). Kiểm tra tuổi ở tầng ứng dụng lúc nhập. Đưa vào checklist 04/09 cùng thử `CREATE TABLE` generated column |
| **C19** | major | `04` §4.1+§4.3+§9.1 ↔ `02` US-11, `07` T5, `08` §7.2 (+ `C45` trùng) | **`04` THẮNG** (nguyên tắc 3 — lập luận là số học, sửa bằng một hàm `min()`, 0 pw, phải vào **trước commit đầu**) | `02` US-11; `07` T5 mục 4; `08` §7.2 luật 2 | Thay `k=1 nếu A≤2, k=2 nếu A≥3` → **`k=1 nếu A_eff≤2, k=2 nếu A_eff≥3` với `A_eff = min(A(D), A(D−1))`** ở cả tiêu chí hoàn thành US-11 lẫn việc tuần T5. `08` §7.2: lập luận "k giảm theo A là món quà" giữ nguyên **ý**, nhưng tính trên `A_eff` |
| **C20** | major | `01` §10(f) ↔ `02` §5.5 ↔ `07` T2 (+ `C51` trùng) | **`02` §5.5 THẮNG** — nó là tài liệu duy nhất phân tích cả hai nghĩa và chỉ ra phép đo miễn phí thu được | `01` §10(f); `07` T2 | `07` T2: sửa "vẫn dán card 21:00" → giao thức A97. `01` §10(f): thêm câu làm rõ "không post gì **trong nhóm**; card vẫn được gửi RIÊNG cho người trực". ⚠️ **Phái sinh bắt buộc:** `02` §5.4 cho người trực dán card suốt ngày 8–14, nên `Δ = q_c(G1) − q_c(G2)` đang gộp **HAI** thay đổi ⇒ **đổi tên con số đó** thành `Δ_link+trực`, không được gọi là "thuế của cái link" |
| **C21** | major | `02` §5.7 + BĐ(4) ↔ `07` §4 CỔNG #1 ↔ `06` §9 BĐ-3 (+ `C41` trùng) | **`02` + `06` THẮNG.** H1 ở Bước 0 **chỉ có quyền DỪNG (<40%), không có quyền ĐI.** Shortlink theo ngày là **bắt buộc**, hạn 07/09 | `07` §4 CỔNG #1; `10` §7 G0 | Xoá vế "`card-open-24h ≥ 60%` mới ĐI" khỏi cả hai; giữ vế "<40% ⇒ DỪNG" và đổi tên chỉ số thành **`click-shortlink`** (không phải `card-open`, vì ảnh Canva dán vào Zalo không sinh sự kiện mở). Ngưỡng ≥60% dời sang **tuần 2 của beta** khi có `card_opened` thật |
| **C22** | major | `08` BĐ#2 ↔ `09` §1.4(c) ↔ `01` §4.6 (+ `C40` trùng) | **`08` THẮNG** (nguyên tắc 2 — `08` sở hữu tone, và lập luận bám thẳng vào danh sách chữ cấm của v2 §1). Caption = A99, 0 pw | `01` §4.6; `09` §1.4(c); `02` §5.9 S5 | Thay chuỗi ở cả ba nơi. `09`: xoá câu "đã chốt ở §4.6, giữ nguyên". `02` §5.9 S5: "Gửi tấm của mày vô đây" có **cùng hình dạng mệnh lệnh** ⇒ soát lại toàn bộ 8 script theo luật T2 của `08`. **Hạn 08/09** — sau đó caption đã vào bank câu thu từ Bước 0 |
| **C23** | major | `05` §8.3 + BĐ#6 ↔ `08` §6.4 | **`05` THẮNG.** **Auto-hide TOÀN CỤC ngay khi có 1 report**, founder xử trong 48h, khôi phục nếu report sai | `08` §6.4; `02` DoD 7.4 | `08` §6.4: bỏ "ẩn chỉ với người báo cáo (flag client-side)" — thiết kế đó để nội dung vi phạm hiển thị với 4 người còn lại tới 48 giờ, **không thoả** Luật ANM 116/2025 Điều 16 khoản 3. Chi phí thêm ~0 (`04` đã có `proof.hidden_at`, policy `proof_read` đã lọc). Bổ sung vào DoD 7.4 của `02` |
| **C24** | major | `05` BĐ#5 ↔ `01` §5 màn 7, `02` US-17 + DoD 7.4, `03` R8, `07` T8, `08` màn 7 | **`05` THẮNG.** SLA là **HAI con số**: 48h (khiếu nại người dùng) · 24h, khẩn cấp 6h (cơ quan nhà nước). Trang chính sách in **cả hai** | `01` §5 màn 7; `02` US-17 + DoD 7.4; `03` R8; `07` T8; `08` màn 7 | Thay "48 giờ" đơn lẻ bằng cặp số ở cả 5 nơi. `03`: `RUNBOOK.md` **phải chứa** script khoá sổ khẩn cấp + công tắc `remote_config['service_paused']`. `02`: bổ sung vào DoD 7.4 |
| **C25** | major | `01` §6 mục 14 ↔ `10` §5 mục 8 ↔ `09` BĐ#1 ↔ `03` §3.2 | **GIỮ KHOÁ đa sổ ở MVP-0** (nguyên tắc 4). `G ≡ 0` trong 12 tháng đầu là quyết định **có ý thức**, phải ghi ra. Khoá CSDL dùng của `04`, **không** dùng của `03` | `09` BĐ#1; `10` §5 mục 8; `03` §3.2 | `09`: đổi "xin lại +0,15 pw" → "**BÁC ở MVP-0**", và ghi nguyên văn "G ≡ 0 về mặt cấu trúc trong 12 tháng đầu là quyết định có ý thức". `10` §5 mục 8: đổi "trần 3 sổ/thiết bị" → "**1 ở MVP-0** · 3 khi mở đa sổ ở v1.1 (hằng số đặt trước, chưa hiệu lực)". `03`: bỏ `UNIQUE(thanh_vien_id, logical_date)` (xem C02) |
| **C26** | major | `04` §2.3 ↔ `08` §7.2 | **`04` là nguồn trạng thái** (`book.status` là cột dashboard đọc). Ngưỡng "14 ngày" của `08` **bị bỏ** | `08` §7.2; `04` §2.3 | `08` §7.2: "Ngủ đông" = `book.status = 'dormant'` (7 ngày liên tiếp `A<3`); thêm "Ngủ sâu" = `'dead'` (21 ngày không tấm), **cùng layout**. `04` §2.3: thêm **bảng ánh xạ `book.status` → 4 trạng thái UI**. Luật: chỉ trạng thái **đổi layout** mới đọc `status`; Sống/Còn hai/Còn một phân loại theo `A` là hợp lệ vì chỉ đổi nội dung |
| **C27** | major | `01` §4.5 + `02` DoD 7.5 + `06` §8 ↔ `03` §2.3+§5+§9 B6 ↔ `10` §2.2 + §5 (+ `C46` trùng) | **`03` THẮNG** (nguyên tắc 1 + nguyên tắc 2). **Supabase Pro $25/tháng bắt buộc từ 02/12**; kỳ vọng **$28–37**; đèn báo động **>$60**; DoD **≤$40** | `01` §4.5 Bảng 6; `02` DoD 7.5; `06` §8 Khối 4; `10` §2.2 | `02`: "≤$12" → "**≤$40**". `06`: ngưỡng báo động "$25" → "**$60**", kỳ vọng "$12" → "**$28–37**". `10` §2.2: bỏ "beta $0/Free tier" → "$28–37, Pro bắt buộc". Lý do: Free **không có backup hằng ngày** trong khi ToS hứa giữ ảnh và sản phẩm hứa thumbnail vĩnh viễn — mất DB = mất tài sản của mọi sổ, không có đường về |
| **C28** | major | `03` §4b ↔ `10` §2.4+§6.1 ↔ `09` §9.1 ↔ `05` §2 | **A = 4,0** là hệ số quy đổi DUY NHẤT, nhãn `[ước lượng cho tới khi Bước 0 đo được]` | `03` §4b; `05` §2; `09` §9.1 | `03`: `DAU = số sổ × 2,65` → **`× 2,12`** (4,0 × 0,53). `05` §2: "1 sổ = 5 người" → "**4,0 người**"; quy đổi lại 10.000 lượt = 400 người = **100 sổ**, đèn vàng 6.000 lượt = **60 sổ**. `09` §9.1: 3,6 → **4,0** (kéo theo `G ≥ 1` đòi `P ≥ 25,0%`). Mọi bảng chi phí $/DAU và $/MAU phải quy về cùng hệ số |
| **C29** | major | `06` §0 (14 event) ↔ `04` §7.1 (28 event) | Đã xử ở **C10** | `06` §0 | Xem C10 |
| **C30** | major | `02` US-01 ↔ `04` §1.3 ↔ `08` §2.1 | **Bảng chữ 28 ký tự `23456789ACDEFGHJKMNPQRTUVWXY`** (A43), ghi vào `remote_config['book.code_alphabet']` | `04` §1.3; `02` US-01; `08` §2.1, §2.2 | `04`: regex → `^[2-9ACDEFGHJKMNPQRTUVWXY]{6}$` (regex cũ `^[2-9A-HJ-NP-Z]{6}$` cho 32 ký tự và **vẫn chứa `L`**). `08` §2.2: sửa ví dụ slug để **không chứa mã** (`chotso.vn/s/k7qm2pv4nx` với mã `K7QM2P` là lỗ hổng thật). Thêm **test CI**: `slug` không chứa `code6` như substring |
| **C31** | major | `09` §8 ↔ `10` §7 G2 ↔ `06` §6 tuần 24 ↔ `01` §6 mục 2 | **Một ngày duy nhất: 26/01/2027.** Cỡ mẫu hạ từ ≥30 xuống **≥24 sổ trong cohort tuần 1–4**, in kèm **KTC ±17 điểm** | `09` §8; `10` §7 G2; `06` §6 tuần 20/24; `01` §6 mục 2 | Thay 20/01 · 31/01 · 22/02 → **26/01/2027**. `01` §6 mục 2: "≥30 sổ" → "**≥24 sổ**", kèm câu "giữ ≥30 nghĩa là widget **không bao giờ được mở khoá** ở kịch bản cơ sở của `09` (24 sổ ở 4 tuần đầu)". `06` §7.1: giữ nguyên tính toán n≈81 cho ±10 điểm nhưng ghi rõ ta chấp nhận ±17 |
| **C32** | major | `08` UX-2 + BĐ#4 ↔ `03` §9 B2 — nguyên `C39` | **Cả hai đúng một nửa, và giải pháp là TÁCH HAI CHUỖI:** `book.code` (khoá VÀO, in lên card, có hai điều kiện chặn) ≠ `card.share_token` (chỉ để XEM, nằm trong slug). Hai chuỗi sinh riêng, không suy ra được từ nhau | `03` §9 B2; `04` §1.3 + §1.6; `08` §2.2 | Điều kiện chặn của `code6`: **dùng được chỉ khi sổ < 8 người VÀ card ≤ 7 ngày tuổi**. `04`: hai cột riêng biệt, +0,1 pw ghi sổ cái. `08`: giữ UX-2 (đường thoát hiểm trong pixel) nhưng sửa ví dụ slug. Xem A42, A44, A45 |
| **C33** | major | `06` §9 BĐ-2 ↔ `01` §11 H2, `07` §4 CỔNG #1, `10` §7 G0 | **`06` THẮNG** — nó là tài liệu duy nhất tính **sức phân biệt** của tiêu chí. Thay "≥3/5 sổ giữ chuỗi ≥5 ngày" → **"≥60% sổ nhánh A đạt ≥9/14 ngày tính"** | `01` §11 H2; `07` §4; `10` §7 G0 | Thay ở cả ba nơi, 0 pw. Lý do ghi kèm: với van 2 ngày nghỉ/tuần, chuỗi ≥5 ngày **gần như tự động đạt kể cả ở kịch bản fail**; tiêu chí ≥9/14 tách nhóm ở **31,6% vs 98,5%**. Mẫu số là `q_c_roster`. **Hạn 07/09** — ngưỡng phải viết trước khi có dữ liệu |
| **C34** | major | `06` §9 BĐ-5 ↔ `08` UX-3 + §6.1 S2 ↔ `04` §10 câu 8 | **BÁC nút "Nghỉ 7 ngày" ở MVP-0** (nguyên tắc 4 + khoản trả bù của `06` đã bị `07` tiêu). **NHƯNG `06` đúng vế "cần cho phép đo"** ⇒ hai việc bắt buộc | `06` §4.2 + §9 BĐ-5; `04` §2.2; `08` UX-3 | (1) `04`: cột **`paused_until` vào schema từ commit đầu** (chi phí cột = 0), UI để sau. (2) `06`: **HM-4 GIỮ LẠI nhưng đánh dấu "MƠ HỒ CÓ CHỦ Ý"** bằng văn bản — không có nút Nghỉ thì "người bận" và "người bị đẩy ra" sinh chuỗi event giống hệt nhau, mọi cờ HM-4 phải giải bằng một cuộc gọi (ăn vào trần 10h/tuần). **Không được vừa giữ ngưỡng vừa giả vờ nó rõ ràng.** `08` chỉ bác được vế "cần cho người dùng", không chạm vào vế đo lường |
| **C35** | major | `06`/`07` (17/02) ↔ `09` (06/02) | Đã xử ở **C06** | `06` §9 BĐ-5; `07` | Xem C06 |
| **C36** | major | `04` §9.1 ↔ `02` US-11, `07` T5, `08` §7.2 | Đã xử ở **C19** | `02`, `07`, `08` | Xem C19 |
| **C37** | major | `06` §8 ↔ `03` §9 B6 ↔ `10` §2.2 + §5 | Đã xử ở **C27** | `06`, `10` | Xem C27 |
| **C38** | major | `10` §5 mục 12 ↔ `01` §4.2 + `04` §6.1 ↔ `04` §6.1 (archived 180 ngày) | Đã xử ở **C16**. Bổ sung: con số này **sẽ được in vào Chính sách quyền riêng tư** ⇒ phải chốt **trước 07/09** | `10` §5; `05` §8.1 mục 5 | `05` §8.1: ghi "thumbnail giữ đến khi chủ ảnh xoá hoặc sổ bị xoá; sổ `archived` được dọn sau thông báo 30 ngày kèm đường tải về". ⚠️ **Đường tải về đó chưa tồn tại** — xem D-06 |
| **C39** | major | `08` §6.5 ↔ `04` §2.2 + event 20 | **`08` THẮNG cho MVP-0.** Không có vai "chủ sổ", không có chức năng kick | `04` §2.2 + §7.1 event 20; `08` §6.5 | `04`: state `removed` **chỉ** dùng cho ca moderation của founder (không phải "chủ sổ gỡ"); đổi trường `was_kicked` → **`was_removed_by_moderation`**. `08`: ghi rõ hệ quả — **yêu cầu "nghi thức kick + 7 ngày grace + export ZIP" của digest #20 TAN BIẾN** vì không có kick; nếu sau này mở kick thì phải trả lại 0,4 pw + thông báo + đường tải dữ liệu |
| **C40** | major | `05` §11 ↔ `07` §7 ↔ `04` §8 ↔ `03` §10 c5 ↔ digest #20(g) | **Hợp nhất thành BẢY câu trong MỘT email, một lần trả phí. Ngân sách 5–15 triệu** | `07` §7; `03` §10; `04` §8; `01` §12 | Bảy câu = 3 câu của `05` (giữ thứ tự ưu tiên) + **2 câu Điều 32 BLDS của digest #20** (ảnh người đã rời; card/bản in chứa ảnh 4–8 người) + 2 câu của `04` (§8.2 `is_custom` taxonomy tối thiểu, §8.3 `proof_total` không giảm khi xoá ảnh) + 1 câu máy chủ VN của `03`. **Bỏ sót Điều 32 là bỏ sót đúng điều luật chi phối cả sản phẩm lẫn cả hai phương án doanh thu.** `07`: xoá "thư ý kiến 1 câu 3–5 triệu" |
| **C41** | major | `05` §0 kết luận 2 ↔ 8 tài liệu (700) | Đã xử ở **C04** | tất cả | Xem C04 |
| **C42** | major | `09` §5 Asset 2/3 ↔ `01` §6 mục 6 + `05` L1–L8 | **HOÃN cả hai asset sang T13+** (QĐ-35). Ba lý do, mỗi lý do đủ một mình: (a) Asset 2 cần lưới 30 ngày mà MVP-0 đã cắt · (b) không có luồng đồng ý cho việc đăng ảnh công khai · (c) Asset 3 "Thẻ TOANG" đẩy ảnh đời thường + nhãn 💀 ra kênh công khai — va vào v2 §6 mục 6 (mục DUY NHẤT không có điều kiện mở lại) | `09` §5 | Ba điều kiện mở, phải đủ **cả ba**: (a) lưới 30 ngày đã build · (b) **luồng đồng ý riêng, tường minh, trước mỗi lần sinh asset công khai**, nêu rõ ảnh của những ai sẽ ra khỏi nhóm và đi đâu · (c) **câu số 5 gửi luật sư đã có trả lời**. −0,20 pw hoàn về sổ cái |
| **C43** | major | `06` §4.3 (pulse_survey) ↔ `04` §7.1 (chỉ có exit_survey) | **GIỮ `pulse_survey`, nâng lên BẮT BUỘC** — sau khi HM-1/HM-3 chết (C03), đây là kênh **duy nhất** còn nghe được người **đang ở lại** mà mệt. Event số **30**, bắn ngày 7 và ngày 21, 0,05 pw | `04` §7.1; `06` §4.3 | `04`: thêm event 30 `pulse_survey{book_id, person_id, day_in, score}`. `06`: đổi nhãn "bổ sung bắt buộc" → "**BẮT BUỘC, event 30**". Exit survey **không thay thế được** — nó chỉ nghe được người đã bỏ đi |

### B.3 — 10 mâu thuẫn [MINOR] (xử lý gộp)

| # | Giữa file nào | PHÁN QUYẾT | File phải sửa | Sửa cụ thể |
|---|---|---|---|---|
| **C44** | `01` §5 + `02` DoD 7.1 ↔ `08` §Phạm vi ↔ `10` §4 luật 1 | **7 màn + 1 slot dự phòng ĐỂ TRỐNG.** Yêu cầu lấp slot 8 bằng fake door "Bao cả sổ" **BỊ TỪ CHỐI** — một fake door bán hàng không phải "phát hiện của Bước 0" | `08` §Phạm vi + §4; `10` §4 | `08`: câu mở đầu "8 màn web" → "**7 màn + 1 slot dự phòng**"; giữ wireframe màn 8 nhưng nhãn "TRỐNG CÓ CHỦ ĐÍCH". `10`: xoá luật 1 |
| **C45** | `07` §7+§8c ↔ `03`/`05`/`10` ↔ `08` BĐ#5 | **~750.000đ/năm, MỘT domain.** Domain thứ hai **CẮT**, có điều kiện mở: mua ngay trong tuần nếu buổi 04/09 cho thấy Zalo **cảnh báo** domain `.vn` lạ | `07` §7 + §8c; `08` BĐ#5 | Thay 460k/550–770k → **750k** (mốc cao nhất trong ba, chưa có báo giá thật). **Việc bắt buộc 03/09: lấy báo giá THẬT và thay con số.** `08`: đổi "phải mua HAI domain" → "một domain + điều kiện mở" |
| **C46** | `07` §7 ↔ `01` §12 + `10` §9 + `05` §2 ↔ `05` §11 | **7 câu, 5–15 triệu** (xem C40) | `07` §7 | Xoá dải 3–5 triệu. **Lấy báo giá thật từ 3 văn phòng trước 10/09** để thay dải 5–15 triệu bằng một con số |
| **C47** | `06` §6 tuần 12 tự mâu thuẫn | **Giữ mốc 30/11/2026, đổi TIÊU CHÍ thành thứ quan sát được đúng ngày đó** | `06` §6 tuần 12 | DỪNG: "**≥10 sổ chưa ghi danh** vào 30/11, hoặc feature freeze chưa xảy ra". TIẾP: "**≥10 sổ đã ghi danh và feature freeze đã xảy ra**". Sự kiện 15/12 chuyển hẳn sang **mốc tuần 14** |
| **C48** | `06` §6 tuần 30 ↔ `01` §9 mục 12, `09` §6, `10` §7 G3 | **31/03/2027** (bản gốc v2, `09` và `10` đã dùng lại; "30/03" là lỗi chép) | `06` §6 tuần 30 | Sửa ngày. Đồng thời bỏ vế "doanh thu = 0" khỏi điều kiện dừng (C01) |
| **C49** | `08` §4 màn 4 + `02` §5.8 (6 ô) ↔ `04` §1.3 (8 người) + `10` §5 mục 7 | **Lưới thích ứng theo số người ĐÃ NỘP, tối đa 2×4 = 8 ô.** Không ô trống, không silhouette, không tên người vắng | `08` §4 màn 4; `02` §5.8 | Đặc tả 5 mức: 1 · 1×2 · 2×2 · 2×3 · 2×4. Thêm **fixture snapshot test 8 người** (P4). Ràng buộc P2: "không được có ô trống có tên, và cũng không được im lặng loại bỏ một người đã nộp" ⇒ **mọi người đã nộp đều lên card** |
| **C50** | `07` §6 mục 1 ↔ `07` §8(a) T13 ↔ `01` §6 mục 2 | **Giữ §6 mục 1, XOÁ dòng T13** (mâu thuẫn nội tại + nằm trước cổng mở khoá của v2) | `07` §8(a) | Xoá "Tạo tài khoản Google Play ($25) ngay". Lý do chính `07` đưa ra ở §6 ("đồng hồ 12-tester chạy trên bản build, không trên tuổi tài khoản") **cũng chính là lý do mua sớm vô ích** |
| **C51** | `02` §5.5 ↔ `07` T2 ↔ `01` §10(f) | Đã xử ở **C20** | `07` T2; `02` §5.9 S6 | Thêm: sửa script S6 cho khớp lịch T2 (**15 và 18/09**), không phải ba ngày rời rạc |
| **C52** | `04` (`book_id`) ↔ `01`/`02`/`06` (`group_id`, P10) | **`book_id` THẮNG** (khớp tên sản phẩm Chốt Sổ, `04` giữ DDL; một lệnh `sed` hôm nay vs một buổi + một lớp bug nếu đổi sau) | `06` §0; `01` P10; `02` | Sửa câu chữ P10: "cột đầu tiên phải là `group_id`" → "**cột đầu tiên của mọi bảng và mọi event là KHOÁ SỔ (`book_id`)**". Luật kiểm tra bằng tên cột của `06` §0 phải viết lại theo |
| **C53** | `01` §12 + `02` §5.3 (8 sổ) ↔ `09` BĐ#3 (6 sổ) ↔ `02` §5.4 (giảm nhánh A xuống 4) | **Giữ 8 sổ (5A + 3B)** — nguyên tắc 1. Sàn tuyệt đối 6 (4A+2B). **Mọi ngưỡng phát biểu lại theo TỈ LỆ %, không theo "3/5"** | `02` §5.3 + §5.4; `09` BĐ#3; `06` | "≥3/5 sổ nhánh A" → "**≥60% sổ nhánh A**" ở mọi nơi. Ghi rõ **sổ số 0 (nhóm founder) KHÔNG nằm trong mẫu số** của `B` hay bất kỳ phép đo nào (`09` §1.5). ⚠️ In kèm: với n=5, `B` chỉ nhận {0,20,40,60,80,100}% — **bước nhảy 20 điểm** |

---

## C. PHÁN QUYẾT SCOPE CREEP

> Mặc định là **CẮT** (nguyên tắc 4). "GIỮ" chỉ xuất hiện khi có khoản đối trừ đã ghi hoặc chi phí thật bằng 0.

| # | Mục | File | GIỮ / CẮT | Lý do |
|---|---|---|---|---|
| S01 | Nút thả tim ẩn danh | `06`, `05`, `09` | **CẮT** (→ T13+) | Ba tài liệu độc lập (`03`, `04`, `07`) chọn nó làm ứng viên cắt. Vì bị bán 3 lần, nó **không còn là tiền** — nó chỉ là một khoản cắt. Hệ quả HM-1/HM-3/E7 phải ghi ra, không được giấu |
| S02 | Đa sổ / nút "Mở sổ mới" | `09` BĐ#1, `10` §5 mục 8 | **CẮT** | v2 §6 mục 14 đã cắt. Lập luận "`G ≡ 0` nếu không có" là lập luận mạnh nhất trong hồ sơ **nhưng chưa có khoản cắt tương ứng**. Ghi `G ≡ 0` ra như quyết định có ý thức |
| S03 | Asset 2 "Sổ tháng" 9:16 + Asset 3 "Thẻ TOANG" 1:1 | `09` §5 | **CẮT** (→ T13+, ba điều kiện mở) | v2 chỉ có **MỘT** bề mặt rời hệ thống (card 4:5), gọi đó là "bề mặt được kiểm soát chặt nhất". Ba bề mặt = ba bộ snapshot test + ba nơi P2/P3 bị phá. Asset 2 cần lưới 30 ngày mà MVP-0 đã cắt |
| S04 | Fake door "Bao cả sổ" (+0,2 pw) | `10` BĐ#3 | **CẮT** | Chiếm slot 8 mà v2 §5 dành riêng cho "màn được **Bước 0 chứng minh** là bắt buộc". Một fake door bán hàng không phải phát hiện của Bước 0. Cộng: nó là bề mặt thanh toán, mà doanh thu = 0đ (C01) |
| S05 | Email magic link (+0,4 pw) | `10` §3.1 + BĐ#3 | **CẮT** | v2 §5 xoá màn Đăng nhập; `03` §2.4 loại thẳng magic link. Đây là **hệ quả tất yếu của việc thu tiền quay lại** — cắt gốc (S04, S12) thì cắt luôn cái này |
| S06 | Nút "Nghỉ 7 ngày" (+0,10 pw) | `06` §9 BĐ-5 | **CẮT UI · GIỮ cột** | UI: bác (khoản trả bù "Tết freeze" đã bị `07` tiêu). Cột `paused_until` vào schema từ commit đầu, chi phí = 0. **Đổi lại: HM-4 phải mang nhãn "MƠ HỒ CÓ CHỦ Ý" bằng văn bản** |
| S07 | Tết Mode nở thành 7 thành phần | `09` §6.2 | **CẮT khỏi MVP-0 · GIỮ 1 hằng số** | `remote_config['freeze.dates']` là một dòng config, hàm thuần, sửa bằng `UPDATE`, không deploy ⇒ giữ (0 pw). Sáu thành phần còn lại (tần suất card 1/3 ngày, 2 dòng copy riêng, 3 preset Tết) → **T13–T18, hạn 25/01/2027** |
| S08 | Dashboard nở từ 0,5 pw → 14 event + 9 HM + pulse ×2 + 4 khối + 5 nhóm phỏng vấn | `06` | **CẮT xuống** | MVP-0: **32 event trong schema** (bắt buộc, không backfill được) + **6 truy vấn SQL chạy tay** (0,10 pw), **không** UI dashboard. Chín HM còn 7. Định giá lại +0,15 pw đã ghi sổ cái |
| S09 | Android web push (+0,3 pw) | v2 §11, `03` §2.6, `06` §6 tuần 8, `07` §8(b) | **CẮT khỏi MVP-0** | v2 §6 mục 3 khoá nó, chỉ mở khi H1 rơi vùng xám. Nặng hơn: `03` §9 B4 cho rằng **Service Worker nhiều khả năng không đăng ký được trong webview Zalo** ⇒ kế hoạch dự phòng này **có thể không tồn tại**. Không được ghi nó như khoản "đã ngân sách" |
| S10 | Tài khoản Google Play $25 ở T13 | `07` §8(a) | **CẮT** | Mâu thuẫn với chính `07` §6 mục 1, và nằm **trước** cổng `sổ-D28 ≥35%` mà v2 §6 mục 2 khoá. D28 đầu tiên chỉ có ở 26/01/2027 |
| S11 | P3 B2B (bán cho lớp học) | `10` §3.3 | **CẮT** (12 tháng đầu) | `10` **tự liệt kê** rằng nó phá §1 (định vị nhóm bạn thân), phá mặc định an toàn vị thành niên (lớp cấp 3 = nơi <16 tuổi tập trung dày nhất), và đòi pháp nhân + hợp đồng + vai bên xử lý dữ liệu. Đây là scope creep lớn nhất hồ sơ, được nhận diện đúng nhưng vẫn xếp "thứ tự thử: 1" |
| S12 | Thu tiền thật trong beta (30 suất × 399k) | `10` §4 T4 | **CẮT** | Hai điều kiện độc lập cùng cấm: `05` §0 kết luận 3 (pháp lý) và v2 §6 mục 19 (`≥20k MAU VÀ ≥1 người khác làm ops`; T4 có ~120 người và 1 người) |
| S13 | Sản phẩm vật lý (Sổ in Tết A5, POD, ship GHN/GHTK, +0,6 pw) | `10` §3.2 | **CẮT** | v2 §6 mục 19 cắt "in poster / vật thể" vì ops nặng với founder một mình. 12 phút/đơn × 30 đơn = 6 giờ, ăn thẳng vào trần 10h/tuần. Cộng: nghĩa vụ thu đồng ý Điều 32 BLDS của **mọi** người có ảnh trong cuốn sổ |
| S14 | Memory Capsule dưới tên khác | `09` Asset 2, `08` §7.3, `10` P1 | **CẮT bản thương mại · GIỮ lưới 30 ngày ở T13+** | v2 §6 mục 11 cắt Memory Capsule với lý do "**lưới 30 ngày CHÍNH LÀ memory layer**". Giữ lưới (T13+, ưu tiên 1), cắt việc đóng gói nó thành vật phẩm chia sẻ (Asset 2) hoặc hàng bán (PDF P1). `08` §7.3 "trang ký ức" **GIỮ** — nó chỉ là layout của màn 1, 0 pw |
| S15 | Bề mặt công khai có ảnh cá nhân + nhãn 💀 | `09` §5 Asset 3 | **CẮT VĨNH VIỄN** | v2 §6 mục 6 là **mục DUY NHẤT không có điều kiện mở lại**. Hàng rào "chỉ chính chủ sinh được" của `09` là đúng nhưng không đủ: vật phẩm vẫn đưa ảnh đời thường + nhãn 💀 ra kênh công khai, va vào Điều 32 BLDS **và** giới hạn L1–L8 "không feed công khai" mà `05` dựng để giữ lập luận không-phải-MXH |
| S16 | Điều kiện mở lại quảng cáo bị viết lại | `10` §3.4 | **CẮT bản viết lại** | v2 §6 mục 13 đặt điều kiện là "sau khi hoàn thành việc bàn giấy 3 giờ ở §10(b)". `10` thay bằng điều kiện mới hoàn toàn (`MAU ≥ 12.000` + H1 pass + định nghĩa A). **Khôi phục điều kiện của v2 và THÊM điều kiện pháp lý**: quảng cáo cũng cần Giấy phép MXH (`05`) |
| S17 | Vai "chủ sổ" + quyền gỡ thành viên | `04` §2.2 | **CẮT** | v2 không có vai này; `08` §6.5 bác kick ở MVP. Một quyền lực xã hội mới, chưa ngân sách hoá UI, chưa có thông báo cho người bị gỡ. `removed` chỉ còn dùng cho ca moderation của founder |
| S18 | Code/dịch vụ trong Bước 0 (shortlink 112 link) | `06` BĐ-3, `07` T0 | **GIỮ có điều kiện** | Đây là ngoại lệ hợp lý: không có nó thì **ngày 22/09 không có con số H1 nào**. Điều kiện bắt buộc: dùng **dịch vụ rút gọn của bên thứ ba** (Short.io free hoặc tương đương), **KHÔNG tự host**, **KHÔNG viết một dòng code sản phẩm nào**. Ghi thành lựa chọn có ý thức trong ADR-000, không để nó trôi vào |
| S19 | Lấp slot màn 8 | `10` §4 luật 1, `09` (màn preview), `08` (demo "Sổ mẫu") | **CẮT cả ba** | Slot 8 **để trống**. Chế độ demo "Sổ mẫu" ở màn 1 của `08` cũng cắt — nó là màn thứ 8 dưới tên khác |
| S20 | Nút "Chép lời mời" ở màn 6 | `08` §4 màn 6 | **CẮT khỏi màn 6 · GIỮ ở màn 4** | v2 §5 liệt kê màn 6 gồm đúng 5 thứ, không có nút mời; `02` US-15 cũng không có; `07` cắt màn 6 xuống 0,00 pw. Nhưng nút dưới card ở màn 4 là **cơ chế phân phối chính**, giữ |
| S21 | Ba file ADR | 9 tài liệu, ~15 lần viện dẫn | **CẮT xuống MỘT** | Digest #10 kê toa "viết ĐÚNG MỘT ADR trước dòng code đầu tiên, không phải ba". Gộp thành `docs/adr/ADR-000-bat-bien.md` (3 mục) + `docs/adr/pw-ledger.md`. Mọi tham chiếu "ADR-001"/"ADR-002" đổi thành "ADR-000 §2"/"ADR-000 §3" |
| S22 | Trần vận hành bị nới bằng cách hỏi (30 → 35 → 60 sổ) | `09` §2.2, `05` §12 câu 2 | **CẮT việc nới** | **Hai trần khác nhau, không được trộn**: trần **vận hành** = 35 sổ sống (10 h/tuần, `09` §2.2); trần **hành chính/pháp lý** = 60 sổ (đèn vàng). `05` tự ghi 60 sổ = đúng 10 h/tuần, **không còn đệm** ⇒ 60 sổ không phải mục tiêu, nó là **trần không được chạm** |
| S23 | Trang public + "spectator mode" | `09` §3 hạng 4, `02` §4.3, `07` | **GIỮ trang public · CẮT thả tim** | Trang public: **GIỮ** — `02` §4.3 nói thẳng "cắt cái này thì **M2 không đo được**", và M2 là 1 trong 4 tiêu chí thành công MVP. Thả tim: CẮT (S01). Xoá câu "spectator mode đã giải xong" của `09` |
| S24 | `audit_log` (+0,15 pw) — creep hợp lệ | `05` GIAI ĐOẠN 2 | **GIỮ** | Đây là scope **được thêm đúng cách**: nghĩa vụ lưu ≥2 năm, "rẻ nhất khi làm sớm, **không thể làm bù**" — cùng lập luận với 4 event an toàn. Phải vào bảng pw của `02`/`07` (hiện không nằm trong 32,5 pd của `02` lẫn MVP-0 của `07`) |
| S25 | `pulse_survey` (+0,05 pw) — creep hợp lệ | `06` §4.3 | **GIỮ** | Sau khi HM-1/HM-3 chết (C03), đây là kênh **duy nhất** còn nghe được người đang ở lại. Khoản đối trừ: nút thả tim đã cắt (0,2 pw) đủ chi cho cả S25 và phần dư của S24 |

**Tổng kết sổ cái sau phán quyết C:** các khoản GIỮ có chi phí = `audit_log` 0,15 + `pulse_survey` 0,05 + tách `view_key`/`code6` 0,10 + hai counter pháp lý 0,05 + định giá lại event 0,15 = **+0,50 pw**. Các khoản CẮT phân biệt được = nút thả tim 0,20 + cron 21:00 0,10 + Tết freeze 0,10 + màn Của tôi 0,25 + Asset 2/3 0,20 + đa sổ 0,15 + fake door 0,20 + magic link 0,40 = **−1,60 pw**. **Mỗi khoản chỉ được ghi MỘT LẦN vào `docs/adr/pw-ledger.md`.**

---

## D. CẦN FOUNDER QUYẾT

> Máy không quyết được vì đây là **đánh đổi giá trị** hoặc **thiếu dữ liệu ngoài hồ sơ**, không phải mâu thuẫn logic. Mỗi dòng có khuyến nghị — nếu founder không trả lời trước hạn, **khuyến nghị tự động có hiệu lực** và phải được ghi vào ADR-000 kèm dòng "quyết định mặc định do quá hạn".

| # | Câu hỏi | Tại sao máy không quyết được | Khuyến nghị | Deadline |
|---|---|---|---|---|
| **D-01** | **Cắt thêm 1,08 pw ở đâu?** Bảng US chi tiết ra **4,58 pw** cho đúng scope mà QĐ-25 gọi là 3,5 pw (A85) | Đây là chọn giữa các tính năng còn sống, mỗi lựa chọn giết một phép đo khác nhau — không có tiêu chí khách quan nào trong hồ sơ để xếp hạng | Cắt theo thứ tự: (1) **trang public xuống chỉ-đọc, không thả tim, không lưới** (−0,4) — giữ M2 đo được ở mức tối thiểu · (2) **preset kèo từ 8 xuống 4** (−0,15) · (3) **màn 5 Ảnh chi tiết gộp thành overlay** (−0,3) ⚠️ **CHỈ được làm nếu overlay vẫn chứa đủ Báo cáo/Chặn/Xoá ảnh** — `05` §8.4 bắt buộc report + block, và màn 5 hiện là nơi duy nhất chứa chúng · (4) **biến thể card mốc sổ** (−0,25) | **22/09/2026** |
| **D-02** | **Số giờ/tuần cam kết bằng văn bản: 20 hay 15?** | Kill gate của chính v2 §9 là ">15 giờ/tuần ⇒ dừng", tức 20 giờ/tuần vi phạm kill gate của chính nó. Đây là câu hỏi về đời sống của founder, không phải về dự án | Ghi **15 giờ/tuần** (nhất quán với kill gate) ⇒ 9,75 giờ code/tuần ⇒ 3,5 pw = **14,4 tuần** ⇒ beta không thể chạy 02/12. **Hoặc** sửa kill gate lên 20 giờ bằng văn bản. **Không được để hai con số cùng tồn tại** — đó là cách tự lừa mình rẻ nhất trong hồ sơ | **22/09/2026** |
| **D-03** | **Nếu luật sư trả lời câu 3 là "cấm phát sinh doanh thu ở tier thông báo", thì G4 (30/06/2027) đo bằng gì?** | Phụ thuộc câu trả lời chưa có. Máy không được bịa | Viết sẵn **hai nhánh** ngay hôm nay: (a) được thu ⇒ giữ "doanh thu ròng 12 tháng ≥ 20 triệu" · (b) cấm thu ⇒ G4 đo bằng **`sổ-D28` ≥ 35% VÀ ≥5% sổ chạm fake-door T3** (ý định trả tiền), tuyệt đối không dùng con số doanh thu | Viết hai nhánh: **22/09/2026** · Chọn nhánh: **20/12/2026** (trước T4) |
| **D-04** | **Định nghĩa thành công A hay B?** (`10` §1: A = sản phẩm có doanh thu · B = sản phẩm cố ý giữ nhỏ dưới ngưỡng pháp lý) | Đây là câu hỏi về việc founder muốn gì, không suy ra được từ dữ liệu | **B** trong 12 tháng đầu (nhất quán với `05`, với trần 60 sổ, với doanh thu 0đ, và với việc P3/P2 đều bị cắt). Nếu chọn A thì **phải sửa v2 §5 bằng văn bản** để slot 8 mở cho fake door | **22/09/2026** |
| **D-05** | **Ngưỡng `sổ-D28 < 25%` giữ hay hạ?** Hồ sơ tự dự báo dải **12,5%–19,1%** — tức dự án đang được thiết kế để **trượt cổng của chính nó** | Hạ ngưỡng sau khi nhìn thấy dữ liệu là tự lừa mình (luật 2 của `06` §6); hạ trước khi có dữ liệu là hợp lệ nhưng cần chủ ý của người chịu trách nhiệm | **GIỮ 25%** và ghi thêm một câu bằng văn bản hôm nay: "nếu beta ra 15–25%, đó là **DỪNG**, không phải 'đúng như mô hình'". Nếu founder không chấp nhận được điều đó thì hạ xuống 20% **NGAY BÂY GIỜ**, kèm lý do, không đợi tới 26/01/2027 | **22/09/2026** (ngưỡng phải viết trước khi có dữ liệu) |
| **D-06** | **Chức năng export (tải dữ liệu về) — ai trả 0,3 pw?** `05` §8.1 mục 7 công bố nghĩa vụ luật định "cung cấp bản sao 10 ngày"; ToS §8.2 điều 6 hứa "báo trước ≥14 ngày và cho tải ảnh về"; A38 hứa đường tải về trước khi dọn sổ `archived`. **Nó không nằm trong bất kỳ bảng pw nào**, và `10` §3.1 lại **BÁN** đúng thứ đó (P1, 99k/sổ/năm) | Bán một quyền luật định là rủi ro pháp lý riêng; nhưng cắt export là hứa trong ToS thứ không tồn tại. Cả hai đều xấu, chọn cái nào là quyết định của người chịu trách nhiệm | Làm **phiên bản tay, 0 pw**: một truy vấn SQL + zip thủ công, SLA 10 ngày, ghi vào `RUNBOOK.md`. **Xoá P1 khỏi `10` §3.1** — không bán thứ luật buộc phải cho | **07/09/2026** (trước khi viết Privacy Policy) |
| **D-07** | **Ai là "người thứ hai" trực SLA 48h trong 11 ngày Tết (03–13/02/2027)?** Bus factor = 1, founder về quê, SLA đã công bố | Cần một cái tên thật, máy không có | Hai lựa chọn: (a) một người bạn có login **chỉ-đọc** + câu trả lời mẫu + số điện thoại founder · (b) **bật `remote_config['service_paused']`** và thông báo trước 14 ngày rằng dịch vụ nghỉ Tết. Khuyến nghị (a); nếu không có tên trước hạn thì (b) tự động | **15/12/2026** |
| **D-08** | **Thị phần Android VN: >85% hay 60,38%?** v2 §6 mục 3, `03` R3, `07` §8(b) đều dùng ">85% [FACT]"; `08` §8.2 dẫn r02/StatCounter T7/2026 = **60,38%** | Đây là kiểm chứng sự thật, không phải quyết định — nhưng một trong hai đang **gắn nhãn [FACT] sai** | Kiểm tra StatCounter trong 15 phút ngày 04/09 và **gắn đúng một con số** vào ADR-000. Cho tới lúc đó, mọi lập luận dựa trên ">85%" (biện minh Android web push) phải mang nhãn `[cần kiểm chứng]` | **04/09/2026** |
| **D-09** | **Nếu buổi 04/09 trả lời KHÔNG cho `navigator.share({files})` trong webview Zalo — làm gì?** `08` BĐ#6 ước lượng mất **15–30 điểm phần trăm** ở đúng kênh phân phối duy nhất, và không tài liệu nào có phương án B | Phụ thuộc kết quả test chưa chạy | Viết sẵn phương án B hôm nay: **long-press → "Lưu ảnh" + hướng dẫn 1 dòng dưới card** (0,05 pw), cộng đo `card_shared / card_rendered` để biết thiệt hại thật. Nếu cả hai đường đều hỏng thì mã 6 ký tự (A45) là đường sống duy nhất và phải được **in to hơn** trên card | **04/09/2026** |
| **D-10** | **Kế hoạch cho tháng 5–10/2027 (khoảng trũng sau đỉnh)?** `07` dừng ở 29/11/2026, `06` hết ở 31/03/2027. r01: đỉnh tháng 2–4, mất 50% DAU trong 4–6 tháng sau đỉnh, **0/7 app ritual giữ được đà**. Digest #26 kê toa "build lớp utility ở v1"; v2 §9 mục 4 từ chối và tự nhận làm chỗ này tệ hơn mọi hướng | Đây là đánh đổi chiến lược dài hạn, và mọi dữ liệu để quyết chỉ có sau 26/01/2027 | **Không viết kế hoạch tháng 5–10 bây giờ** (tài liệu thứ 11 không làm ai nộp thêm một tấm ảnh). Thay vào đó ghi **một dòng** vào ADR-000: "khoảng trũng sau đỉnh là rủi ro đã biết, chưa có phương án; xem lại tại cổng 26/01/2027 cùng lúc với quyết định widget" | **26/01/2027** |

---

## E. DANH SÁCH VIỆC THEO TỪNG FILE

> Đây là phần 10 agent thi hành. Mỗi dòng là một việc, không phải một gợi ý.

### `01-dinh-nghia-san-pham-v2.md`
1. §4.5 Bảng 6 + §4.2: chi phí hạ tầng **$28–37/tháng** (không $12) — C27/A74.
2. §4.6: caption → **`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`** — C22/A99.
3. §4.10: thêm hộp "**bảng này KHÔNG còn là sổ cái pw**; sổ cái ở `docs/adr/pw-ledger.md`" — C08/A87. Thêm dòng: 1 pw = 40 giờ, 13 giờ code/tuần, 6,5 pw = 20 tuần lịch (không 10) — A80–A82.
4. §5: giữ **7 màn + 1 slot dự phòng để trống**; màn 7 in **SLA kép 48h / 24h–6h** — C44/C24.
5. §6 mục 2: "≥30 sổ" → **"≥24 sổ"**, kèm câu vì sao — C31/A25.
6. §6 mục 3: gắn nhãn `[cần kiểm chứng]` cho ">85% Android" — D-08.
7. §9: xoá con số **700**, thay bằng hai counter — C04/A54. Kill gate 31/03/2027 **bỏ vế "doanh thu = 0"** — C01/A64.
8. §10(f): làm rõ "không post gì **trong nhóm**; card vẫn gửi RIÊNG cho người trực" — C20/A97.
9. §10(h): checklist 04/09 nở từ 3 lên **7 câu** — A105.
10. §11 H2: tiêu chí → **"≥60% sổ nhánh A đạt ≥9/14 ngày tính"** — C33/A20.
11. §12: **7 câu luật sư** (không 1) — C40/A65. Google Sheet **8 cột** (không 6) — A96. ADR: **một file** — S21/A103.
12. P10: "cột đầu tiên phải là `group_id`" → **"khoá sổ (`book_id`)"** — C52/A30.

### `02-mvp-scope.md`
1. US-01: bảng chữ **28 ký tự `23456789ACDEFGHJKMNPQRTUVWXY`** — C30/A43.
2. US-11 tiêu chí hoàn thành: **`A_eff = min(A(D), A(D−1))`**, `k=1` nếu `A_eff≤2` — C19/A06–A07.
3. US-17 + DoD 7.4: **SLA kép**; thêm **auto-hide toàn cục ở report đầu tiên** — C24/C23.
4. §2: thêm cột "hạng mục §4.10" + "trong MVP-0? Y/N" vào bảng 24 US; thêm US cho **`audit_log`** — C09/S24.
5. §4.3: bỏ phương án "beta 5 sổ", trỏ về **QĐ-25** (02/12, 12 sổ, 3,5 pw) — C07/A84–A90.
6. §5.3–§5.4: giữ **8 sổ (5A+3B)**, sàn 6; mọi ngưỡng theo **%** không theo "3/5"; **loại sổ số 0** khỏi mẫu số — C53/A94–A95.
7. §5.5 + §5.9 S6: giao thức im lặng đúng ngày **15/09 và 18/09** — C20/C51/A97–A98.
8. §5.6: **8 cột**, mẫu số so ngưỡng = **`roster_size` đóng băng** — C11/A14–A19. **Hạn 07/09.**
9. §5.7: thiết bị đo H1 = **shortlink 8 sổ × 14 ngày**; H1 chỉ có quyền DỪNG — C21/A21–A22.
10. §5.8: lưới card **thích ứng, tối đa 2×4**; fixture test 8 người — C49/A100.
11. §5.9 S5: soát lại toàn bộ 8 script theo luật T2 của `08` ("Gửi tấm của mày vô đây" là mệnh lệnh) — C22.
12. §5.9: **thêm một script thông báo/đồng ý dữ liệu** cho Bước 0 (hiện 8 script không có dòng nào về quyền riêng tư, mà G2 thu ảnh thật của ~35 người vào Drive) — lỗ hổng audit.
13. DoD 7.1: **7 màn + 1 slot trống**. DoD 7.3: **hai counter**, không 700. DoD 7.5: **≤$40** — C44/C04/C27.

### `03-kien-truc-ky-thuat.md`
1. §2.3 + §5 + §9 B6: giữ nguyên kết luận **Supabase Pro $25 từ 02/12, $28–37/tháng** — thắng C27.
2. §2.4: mốc quay lại phone OTP = **đèn đỏ hai counter (8.500/850)**, không 700 — C04/A58.
3. §2.5: key R2 theo `04` (`orig/<book>/<date>/<person>/<cpid>.jpg`); card **150 KB** — C17/A34/A41.
4. §2.7: `rollover` → **`5 21 * * *` UTC (04:05 ICT)**; **xoá job `mo_chot_so` 21:00** (−0,10 pw) — C15/A03–A04.
5. §3.2: **XOÁ toàn bộ DDL tiếng Việt**, thay bằng tham chiếu `04` §1; bỏ `UNIQUE(thanh_vien_id, logical_date)` — C02/C25/A29–A33.
6. §4a: `freeze_ranges` = **`[["2027-02-03","2027-02-12"]]`** — C06/A120.
7. §9 B2: giữ nguyên phát hiện, ghi rõ giải pháp đã chốt là **tách `code6` (khoá vào, in lên card, chặn bởi <8 người & ≤7 ngày) khỏi `share_token` (chỉ xem, trong slug)** — C32/A42–A45.
8. §9 B4: Service Worker → điều kiện của S09; ghi rõ Android web push **không phải khoản đã ngân sách**.
9. §10: câu 5 (luật sư) gộp vào **7 câu** của `05` — C40. Câu 6 → `RUNBOOK.md` phải chứa **script khoá sổ khẩn cấp + `service_paused`** — C24.
10. R8: **SLA kép** — C24/A59. Thêm bảng `audit_log` — A49.
11. §4b: **`DAU = số sổ × 2,12`** (A=4,0) — C28/A70–A71.

### `04-data-model-va-co-che.md`
1. §1.2: **xoá `birth_year`**, dùng `is_16_plus boolean` + `age_gate_at`; **xoá 2 CHECK gọi `now()`** — C18/A47–A48.
2. §1.3: regex mã → **`^[2-9ACDEFGHJKMNPQRTUVWXY]{6}$`**; thêm điều kiện dùng mã (<8 người, ≤7 ngày) — C30/C32/A43/A45.
3. §1.5: thêm **`roster_size smallint not null`** vào `book_day` — C05/A14. **Hạn 07/09.**
4. §1.6 + §6.1: card TTL **90 ngày** (không 30), kích thước **150 KB** (không 180) — C17/A40–A41.
5. §1.7: ví dụ `freeze.dates` → **`2027-02-05`** (không `2027-02-16`) — C06/A120.
6. §2.2: state `removed` **chỉ cho ca moderation của founder**, không có vai "chủ sổ" — C39/S17/A61. Cột **`paused_until` vào schema**, không UI — C34/A50.
7. §2.3: thêm **bảng ánh xạ `book.status` → 4 trạng thái UI** — C26/A12–A13.
8. §7.1: **tách event 28 thành `visits_alert` (28) + `persons_alert` (29)**; thêm **event 30 `pulse_survey`**; đổi `was_kicked` → `was_removed_by_moderation`; thêm `days_in`, `toang_14d` vào event 20; **xoá `hearts_recv_14d`**; giữ số 25 trống vĩnh viễn — C04/C10/C43/A51–A52.
9. §7.2: viết lại truy vấn `q_c` dùng **`sum(present_count)/sum(roster_size)`**; giữ bản trượt tên `q_c_sliding` — C05/A15.
10. §8: 3 câu luật sư gộp vào **7 câu** của `05` — C40. §8.5: chốt **`share_token` TTL 7 ngày + noindex** — A42.
11. §9.4–§9.5: xoá mọi câu "đổi lấy nút thả tim"; trỏ về `docs/adr/pw-ledger.md` — C08/A87.
12. Thêm bảng **`audit_log`** vào §1 (lưu ≥2 năm) — A49/S24.

### `05-lo-trinh-phap-ly.md`
File **thắng** ở C01, C04, C18, C23, C24, C40, C62. Việc phải sửa:
1. §2: quy đổi dùng **A = 4,0** (không 5) ⇒ 10.000 lượt = 400 người = **100 sổ**; đèn vàng 6.000 lượt = **60 sổ** — C28/A70/A73.
2. §3: **bỏ nút thả tim** khỏi danh sách dấu hiệu "tương tác" (nó đã bị cắt) — C03.
3. §8.1 mục 5: TTL thumbnail = **vĩnh viễn, cold storage sau 180 ngày, chỉ xoá khi `archived` + 30 ngày báo trước + có export** — C16/C38/A38.
4. §8.1 mục 7 + §8.2 điều 6: export = **phiên bản tay 0 pw, SLA 10 ngày, trong `RUNBOOK.md`** — D-06.
5. §10: trần beta ghi lại là **60 sổ** (trần **hành chính**, không phải mục tiêu vận hành) — S22/A93.
6. §12 câu 2: bỏ câu hỏi "có nên nâng lên 60 sổ" — đã chốt 60 là **trần không được chạm** — S22.
7. GIAI ĐOẠN 0: bổ sung nghĩa vụ cho **kho ảnh trên Google Drive** (Bước 0 G2 thu ảnh thật của ~35 người) — lập luận "không có hệ thống thông tin nào của mình" không phủ được việc này. Thêm: văn bản đồng ý, thời hạn lưu, kế hoạch xoá sau 22/09.
8. §11: giữ nguyên **7 câu**; xác nhận ngân sách **5–15 triệu** — C40/A65–A66.

### `06-metrics-va-gia-thuyet.md`
1. §0: **xoá bảng 14 event E1–E14**, thay bằng bảng ánh xạ E→số hiệu trỏ `04` §7.1 (**32 event**) — C10/A51. Xoá schema `day_rolled` — C02/A31. Sửa luật P10 → "khoá sổ" — C52/A30.
2. §4.2: **gạch HM-1 và HM-3**; ghi câu "bộ metric tác hại chỉ còn phát hiện RÚT LUI, không phát hiện LOẠI TRỪ" — C03/A27. **HM-4 giữ, nhãn "MƠ HỒ CÓ CHỦ Ý"** — C34.
3. §4.3: `pulse_survey` → **BẮT BUỘC, event 30, bắn ngày 7 và 21** — C43/A28.
4. §6 tuần 12 (30/11): đổi tiêu chí thành thứ **quan sát được đúng ngày 30/11** — C47/A113.
5. §6 tuần 14: "beta đã chạy từ 02/12 với **≥12 sổ**" — C07/A115.
6. §6 tuần 20/24: **một mốc duy nhất 26/01/2027**, n ≥ 24, KTC ±17 điểm — C31/A118/A25.
7. §6 tuần 30: **31/03/2027** (không 30/03); bỏ vế "doanh thu = 0" — C48/C01/A122.
8. §6 dòng "Liên tục" + §8 Khối 4: **hai counter** thay 700; đèn chi phí **>$60**, kỳ vọng **$28–37** — C04/C27/A54/A74–A75.
9. §9 BĐ-1: đánh dấu **ĐÃ ÁP DỤNG** (cột `roster_size` đã vào `04` §1.5) — C05.
10. §9 BĐ-2: đánh dấu **ĐÃ ÁP DỤNG** (`07` và `10` đã sửa) — C33.
11. §9 BĐ-3: shortlink là **bắt buộc**; H1 chỉ có quyền DỪNG — C21/A21–A22.
12. §9 BĐ-5: **BÁC nút Nghỉ**; ngày Tết sửa thành **06/02/2027**; khoản trả bù "Tết freeze" **không còn hợp lệ** — C34/C06/A119.
13. §1: `sổ-D28` là cổng của **tháng 01/2027**, không phải cổng của 12 tuần — C13/A23.

### `07-roadmap-12-tuan.md`
1. §0: trỏ về **QĐ-25** (3,5 pw trần · 4,58 pw ước lượng trung thực · beta 02/12 · 12 sổ · trần cứng 15/12); thêm cột "US nào" — C07/C09/A84–A90.
2. §1 T2: giao thức im lặng = **gửi card RIÊNG cho người trực, không dán vào nhóm**; ngày **15/09 và 18/09** — C20/C51/A97–A98.
3. §1 T5 mục 4: **`A_eff = min(A(D), A(D−1))`** — C19/A06.
4. §1 T11: **xoá beta 16/11**, dùng 02/12; hai tuần chênh là **đệm rủi ro, không phải scope** — C07/A88.
5. §3 + §6 + CH mở #8: **hai counter** thay 700 — C04/A54.
6. §4 CỔNG #1: **bỏ vế "≥60% mới ĐI"**, giữ "<40% DỪNG"; đổi tên chỉ số thành `click-shortlink`; tiêu chí H2 → **≥60% sổ nhánh A đạt ≥9/14 ngày** — C21/C33/A20–A21.
7. §5 + §6 mục 4 + §8a: ngày Tết → **06/02/2027**; kết luận CẮT Tết freeze **vẫn đứng** nhưng lý do viết lại — C06/A119–A121.
8. §7: domain **750k, một domain**; luật sư **7 câu, 5–15 triệu** (bỏ "1 câu 3–5 triệu") — C45/C46/A65–A68.
9. §8(a) T13: **xoá dòng mua tài khoản Google Play $25** — C50/S10.
10. §8(b): Android web push chuyển sang **hạng mục có điều kiện**, không phải khoản đã ngân sách — S09.
11. §9 bất đồng #5: cron 21:00 **đã được chấp thuận cắt** (−0,10 pw, ghi sổ cái) — C15/A04.
12. §0 bảng hạng mục: thêm **`audit_log`** — S24/A49.

### `08-ux-flow-va-tone.md`
File **thắng** ở C22, C39, C44 (một phần), C49. Việc phải sửa:
1. §Phạm vi + §4: "8 màn web" → **"7 màn + 1 slot dự phòng để trống"**; xoá chế độ demo "Sổ mẫu" ở màn 1 — C44/S19/A79.
2. §2.1: bảng chữ **28 ký tự** liệt kê tường minh — C30/A43.
3. §2.2: sửa ví dụ slug để **không chứa mã sổ**; thêm ghi chú test CI — C30/C32/A44.
4. §4 màn 4: lưới card **thích ứng tối đa 2×4**, ô người vắng **không tồn tại**; fixture 8 người — C49/A100.
5. §4 màn 6: **xoá nút "Chép lời mời"** (giữ ở màn 4) — S20/A102.
6. §6.2: nút thả tim → nhãn **"T13+"**, cắt khỏi MVP-0 — C03/S01.
7. §6.4: **auto-hide TOÀN CỤC** ở report đầu tiên (bỏ flag client-side) — C23/A60.
8. §6.5: giữ "không kick ở MVP"; **thêm câu**: yêu cầu "nghi thức kick + 7 ngày grace + export ZIP" của digest #20 **tan biến** vì không có kick — C39.
9. §7.2: "Ngủ đông" = **`book.status = 'dormant'`** (bỏ ngưỡng 14 ngày); thêm "Ngủ sâu" = `'dead'`, cùng layout; luật 2 tính trên **`A_eff`** — C26/C19/A12–A13.
10. §7.3: giữ "trang ký ức" (0 pw, chỉ là layout) — S14.
11. màn 7: in **cả hai** con số SLA — C24/A59.
12. BĐ#5: **một domain** + điều kiện mở domain thứ hai — C45/A68.
13. BĐ#6: viết **phương án B** cho `navigator.share({files})` — D-09.
14. §9: xoá 3 event tự khai, tham chiếu `04` §7.1 — C10/A51.
15. §8.2: giữ phát hiện mâu thuẫn Android 85%/60,38% — nó đúng, D-08 sẽ giải.

### `09-cold-start-va-gtm.md`
File **thắng** ở C06 (ngày Tết). Việc phải sửa:
1. §1.4(c): caption → **`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`**; xoá câu "đã chốt ở §4.6, giữ nguyên" — C22/A99.
2. §1.5: giữ việc loại sổ số 0; **ghi rõ hệ quả**: mẫu số `B` = 5 sổ nhánh A, bước nhảy 20 điểm — C53/A26/A95.
3. §3 hạng 4: xoá "thả tim đã giải xong bài toán spectator mode" — C03/S23.
4. §5: **hoãn Asset 2 và Asset 3 sang T13+** với ba điều kiện mở; hoàn −0,20 pw về sổ cái — C42/S03/S15.
5. §6: giữ nguyên **06/02/2027** và cửa sổ **03/02 04:00 → 13/02 03:59 ICT** — A119–A120. Bỏ vế "doanh thu = 0" khỏi kill gate 31/03 — C01.
6. §8: beta **02/12, 12 sổ đợt 1, ≤30 đợt 2 từ tuần 15**; cổng D28 = **26/01/2027, n≥24** — C07/C31/A88–A91/A118.
7. §9.1: **A = 4,0** (không 3,6) ⇒ `G ≥ 1` đòi `P ≥ 25,0%` — C28/A70.
8. §2.2: phân biệt rõ **trần vận hành 35 sổ** ≠ **trần hành chính 60 sổ** — S22/A92–A93.
9. BĐ#1: nút "Mở sổ mới" → **BÁC ở MVP-0**; ghi `G ≡ 0` là quyết định có ý thức — C25/S02/A101.
10. Câu hỏi mở #8: chuyển thành **D-07** (người thứ hai trực Tết), hạn 15/12/2026.

### `10-mo-hinh-kinh-doanh.md`
File bị sửa nhiều nhất. Việc phải sửa:
1. §2.2: chi phí beta → **$28–37/tháng, Supabase Pro bắt buộc** (bỏ "$3, Free tier") — C27/A74.
2. §2.4 + §6.1: **A = 4,0** cho mọi bảng quy đổi MAU↔sổ — C28/A70.
3. §3.1: **xoá P1 (bán export 99k/sổ/năm)** — không bán một quyền luật định — D-06.
4. §3.2: **CẮT P2 Sổ in Tết** khỏi 12 tháng đầu — S13.
5. §3.3: **CẮT P3 B2B** khỏi 12 tháng đầu, xoá khỏi "thứ tự thử" — S11.
6. §3.4: khôi phục **điều kiện mở lại quảng cáo của v2 §6 mục 13** + thêm điều kiện pháp lý; giữ nhãn `[ước lượng]` cho eCPM — S16/A77.
7. §4: T4 → **fake pre-order, KHÔNG thu tiền**; luật 1 (lấp slot 8) **bị từ chối** — C01/S04/S12/A63/A79.
8. §5 mục 7: lưới card tối đa **8 ô** — C49.
9. §5 mục 8: trần sổ/thiết bị = **1 ở MVP-0**, 3 là hằng số cho v1.1 chưa hiệu lực — C25/A101.
10. §5 mục 12: **KHÔNG xoá thumbnail** — 60 ngày thông báo, 180 ngày cold storage — C16/A38.
11. §5 mục 14: **hai counter**, không 700 — C04/A54.
12. §7 G0: H1 chỉ có quyền DỪNG; tiêu chí H2 → ≥9/14 ngày — C21/C33.
13. §7 G2: **26/01/2027, n≥24** — C31/A118.
14. §7 G3: **31/03/2027**, bỏ vế "doanh thu = 0" — C48/C01/A64.
15. §7 G4: viết **hai nhánh** theo D-03 — C01/A123.
16. §9: luật sư **5–15 triệu**, domain **750k một cái** — C45/C46.
17. BĐ#3: **CẮT fake door + magic link** — S04/S05.
18. §1: định nghĩa B → "giữ dưới **đèn đỏ hai counter**", không "dưới 700 MAU" — C04.

---

## F. BỐN VIỆC PHẢI XONG TRƯỚC 07/09/2026

Không hồi tố được sau ngày này. Theo thứ tự:

1. **Cột `roster_size` + 8 cột Google Sheet** (A14, A19, A96) — sau 08/09 roster ngày 1–3 không tái dựng được. `04`, `02`.
2. **Shortlink 8 sổ × 14 ngày** (A22) — không có nó thì 22/09 không có con số H1 nào. `02`, `06`, `07`.
3. **Danh mục 32 event + hai counter pháp lý trong schema** (A51, A55) — `monthly_visits` phải đếm session từ ngày đầu. `04`, `06`, `08`.
4. **`A_eff = min(A(D), A(D−1))` + ngưỡng H2 ≥9/14 ngày** (A06, A20) — một hàm `min()` và một con số, 0 pw hôm nay; một migration và dữ liệu không so sánh được nếu để sau. `02`, `04`, `07`, `08`, `10`.

Cộng thêm, cùng ngày: **`docs/adr/ADR-000-bat-bien.md`** và **`docs/adr/pw-ledger.md`** phải là file thật đã commit (A87, A103).
