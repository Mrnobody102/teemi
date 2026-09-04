# TỔNG KẾT — LỖ HỔNG KỸ THUẬT / PHÁP LÝ / TIỀN & KIỂM CHỨNG SỐ

**Ngày:** 04/09/2026 · **Phạm vi ghi:** `03`, `04`, `05`, `06`, `10` + file mới `11-hang-rao-ky-thuat-phap-ly-tien.md`. **Không chạm** `01`, `02`, `07`, `08`, `09`.
**Nguồn nhiệm vụ:** mục *LỖ HỔNG* và *CHƯA CÓ NGUỒN* của `_audit-report.md`.

---

## A. LỖ HỔNG ĐÃ LẤP (5 mảng, 1 file mới)

Tất cả nằm ở **`11-hang-rao-ky-thuat-phap-ly-tien.md`** (534 dòng, chủ quyền mới), cộng bản vá tại chỗ ở 5 file.

| # | Lỗ hổng | Trạng thái trước 04/09 | Đã lấp bằng | pw | Ghi ở |
|---|---|---|---|---|---|
| 1 | **Ai xem được ảnh của ai — link có đoán được không** | Chỉ có một khối hỏi founder (`03` §10 D-06b). Không có bảng "chuỗi nào mở được gì" | Mô hình truy cập đầy đủ 4 bề mặt + **phát hiện lỗ hổng thật** (§A.1 dưới) + bản vá `asset_nonce` + 5 header bắt buộc + bảng "ai xem được gì" để đưa vào Chính sách | **0,02** | `11` §1 · `03` §2.5 · `04` §1.6 |
| 2 | **Xoá ảnh không xoá card đã in mặt người đó** | Không ai nêu. `04` §6.2 xoá `thumb_key`+`orig_key`, **không chạm card PNG công khai cache 1 năm** | Pseudocode 4 bước vẽ lại card + purge CDN + `audit_log`, SLA 24h; 2 cột mới `card.person_ids`, `card.rerendered_at` | **0,08** 🔴 luật | `11` §1.3 · `04` §6.2 |
| 3 | **Rate limit & chống lạm dụng** | Đúng **một** dòng trong toàn hồ sơ (`10` §5 mục 9), và **lý do của nó sai 490 lần** | 7 luật, một bảng `rate_bucket`, không cần Redis. Gồm 3 tầng cho `code6` và trần cho auto-hide | **0,10** | `11` §2 · `10` §5 |
| 4 | **Vượt quota / chi phí bất thường** | Có ngưỡng ($60, $40), **không có hành động** | Thang 4 nấc nối vào `signup_paused`/`service_paused` đã tồn tại + bảng hành vi 3 nhà cung cấp khi vượt + chứng minh **R2 = $0 suốt vòng đời hợp pháp** | **0** | `11` §3 · `06` §8 Khối 4 |
| 5 | **Backup / khôi phục** | Chữ "backup" xuất hiện 9 lần làm lý do mua Pro $25; **không lần nào nói khôi phục thế nào**, và **R2 không được nhắc một lần** | `rclone sync` hằng tuần (egress R2 = $0 ⇒ ~0đ) + giữ 4 `pg_dump` + **diễn tập khôi phục 6 bước bắt buộc trước 02/12** | **0,05** | `11` §4 · `04` §6.2 |
| 6 | **Sự cố dữ liệu cá nhân — quy trình 72 giờ** | `05` §8.2 **hứa** 72h với người dùng; không có quy trình nào đứng sau | Quy trình 6 mốc T+0→T+7 ngày + 3 điều kiện tiên quyết, dán vào `RUNBOOK.md` | **0** | `11` §5 · `05` §8.2 |
| 7 | **Khẳng định pháp lý chưa có luật sư xác nhận** | Rải rác, không ai đếm | **Sổ đăng ký 11 khẳng định**, mỗi cái một trạng thái 🟢/🟡/🔴, kèm luật cấm trích mà không gắn trạng thái. 4/11 đã đóng hôm nay, 2 dòng MỚI mở ra | **0** | `11` §6 · `05` §12 |

**Tổng pw mới: +0,25 pw** — trong đó **0,10 pw là nghĩa vụ luật định** (mục 2). **CHƯA ghi vào `docs/adr/pw-ledger.md`** (A87 cấm file tự ghi sổ cái). Backlog **≈7,25 → ≈7,50 pw**; khoản D-01 phải cắt tăng từ 1,08 lên **1,33 pw**. Đã dựng khối **D-11** (`11` §8) cho founder chọn.

### A.1. Hai lỗ hổng THẬT phát hiện được trong lúc lấp — không tài liệu nào từng nêu

**(1) Card không đoán được, nhưng ĐI BỘ ĐƯỢC.**
Key `card/<book_id>/<date>.png` với `book_id` = UUID v4 (122 bit) là không đoán được. Nhưng card **được thiết kế để dán vào nhóm Zalo mỗi tối** ⇒ `book_id` rời vòng bí mật ngay ở lần dùng đầu, **theo đúng thiết kế**. Sau đó bất kỳ ai nhận **ĐÚNG MỘT** card chỉ cần đổi `<date>` trong URL để tải **toàn bộ card của sổ đó, mọi ngày, 90 ngày** — mỗi card chứa thumbnail thật của tới 8 người — mà không cần vào sổ, không cần `code6`, không cần `share_token`, và **không chạm rate limit nào** vì đó là CDN tĩnh.
`03` §9 B2 đã bắt đúng lớp lỗ hổng này ở tầng `code6` (*"ai được forward card đều vào được sổ kín"*) nhưng bỏ sót ở tầng **chính cái ảnh**, vì ảnh không đi qua ứng dụng.
**Vá:** `card/<book_id>/<date>-<asset_nonce>.png`, nonce 16 ký tự hex = 64 bit. Ở 60 sổ (21.900 card sống), 1.000 req/s cần **~26.700 năm**. 0,02 pw, 1 cột, phải vào **trước commit đầu** vì key đã dán vào chat Zalo không đổi được.

**(2) Auto-hide toàn cục (A60) là một vũ khí griefing không có trần.**
A60 chốt: **một** report ⇒ ẩn với **mọi** thành viên, ngay lập tức. Đúng về nghĩa vụ pháp lý. Nhưng trong một sổ 8 người, **một** thành viên bực bội ẩn được **mọi tấm của mọi người, mỗi ngày** — 240 vụ/tháng một mình, trên nền tải bình thường 4–18 vụ/tháng (`08` §6.4).
**Vá đề xuất:** trần **3 tấm đang ẩn/người**; report thứ 4 trở đi **vẫn được ghi, vẫn vào SLA 48h, vẫn hiện cho founder** — chỉ mất hiệu lực *tự động*. Nghĩa vụ pháp lý không giảm một chút nào. Vì nó đổi một hằng số của A60 nên đã ghi thành **Bất đồng #2** (`11` §9), **không tự thi hành**.

**Hệ quả phụ đáng chú ý:** MVP-0 **không có kick** (A61/S17) ⇒ thành viên **không tự gỡ được** người lạ đã đoán trúng `code6`. Đường duy nhất là founder gỡ tay. `RUNBOOK.md` phải có sẵn mục *"Gỡ một người lạ khỏi một sổ"* trước ngày beta.

---

## B. SỐ ĐÃ KIỂM CHỨNG

### B.1. ✅ Đúng — giữ nguyên (7)

| Con số | Xác nhận | Nguồn |
|---|---|---|
| R2 Standard **$0,015/GB/tháng** · Class A **$4,50/triệu** · Class B **$0,36/triệu** · egress **$0** | đúng nguyên | [developers.cloudflare.com/r2/pricing](https://developers.cloudflare.com/r2/pricing) · [EgressCost](https://egresscost.com/cloudflare/) |
| Supabase **Pro $25/tháng**, 8 GB DB, 250 GB egress, **backup hằng ngày giữ 7 ngày** | đúng nguyên | [UI Bakery](https://uibakery.io/blog/supabase-pricing) |
| Supabase **Free: không backup, project ngủ sau 7 ngày** — lập luận bắt buộc mua Pro của `03` | đúng nguyên | [ITPath — Free tier limits 2026](https://www.itpathsolutions.com/supabase-free-tier-limits) |
| **Apple Developer $99/năm** · **Google Play $25 MỘT LẦN** | đúng nguyên | [Google Play $25 2026](https://www.iconikai.com/blog/google-play-developer-account-fee-2026) · [Publishing costs 2026](https://gtstu.com/app-store-google-play-publishing-costs/) |
| **ZNS 300đ/tin (OTP)** ở `03` §2.6 | đúng nguyên (200đ ZNS thường, 120đ tiện ích, chưa VAT) | [Bảng giá ZNS 2026](https://www.smsthuonghieu.com/gia-zns/) |
| Ngưỡng **>10.000 lượt/tháng HOẶC >1.000 người thường xuyên** ⇒ Giấy phép; dưới ⇒ Giấy xác nhận thông báo | 4 nguồn độc lập nhất quán ⇒ **trần 60/85/100 sổ đứng vững** | [Báo Quảng Ninh](https://baoquangninh.vn/mang-xa-hoi-duoi-1-000-nguoi-su-dung-khong-can-xin-cap-phep-3330272.html) · [Vạn Luật](https://vanluat.vn/giay-phep-mang-xa-hoi-998.html) · [CSPL Bộ TT&TT](https://cspl.mic.gov.vn/Pages/TinTuc/138924/NGHI-dINH-147-2024-Nd-CP-QUAN-LY-CUNG-CAP-SU-DUNG-DICH-VU-INTERNET--THONG-TIN-TREN-MANG.html) |
| **Luật 91/2025/QH15** hiệu lực 01/01/2026 · **NĐ 356/2025** ban hành 31/12/2025, hiệu lực 01/01/2026, thay NĐ 13/2023 | đúng nguyên | [Bộ Công an](https://bocongan.gov.vn/chinh-sach-phap-luat/co-so-du-lieu-van-ban/luat-bao-ve-du-lieu-ca-nhan-1753688803) · [Cổng TTĐT CP](https://vanban.chinhphu.vn/?pageid=27160&docid=216387) |

### B.2. 🔧 SAI — đã sửa (6)

| # | Con số | Bản cũ | **Bản đúng** | Sai bao nhiêu | Sửa ở |
|---|---|---|---|---|---|
| 1 | **Chi phí SMS OTP** | $0,2852/tin ≈ 7.500đ ⇒ 480 tin ≈ **3,6 triệu**; 1.000 người ≈ **11 triệu** | **ZNS OTP 330đ (đã VAT)** hoặc **SMS Brandname 800–900đ** ⇒ 480 tin = **158.400đ / 432.000đ**; 1.000 người = **495.000đ / 1,35 triệu** | **8–23 lần** | `05` §2, §12 |
| 2 | **Ngưỡng miễn thuế hộ KD/cá nhân 2026** | "100 hay 200 triệu/năm — cần kiểm chứng" | **500 triệu đồng/năm** — cả hai con số cũ đều sai | 2,5–5 lần | `05` §7, §12 · `10` §9 |
| 3 | **Lệ phí môn bài** | "[cần kiểm chứng] có thể đã bãi bỏ" | **ĐÃ XOÁ BỎ với hộ KD/cá nhân KD từ 01/01/2026** — Điều 10 NQ 198/2025/QH15 | câu hỏi mở #6 của `05` **ĐÓNG** | `05` §7, §12 |
| 4 | **Giá `.vn`** | ba con số 460k / 550–770k / **750k (A67)** | **770.000đ năm đầu** (200k lệ phí + 350k duy trì + 200k dịch vụ, đã VAT) · **460.000đ/năm sau**. Ba con số cũ nay **hoà giải được**: 460k là phí năm sau | +20.000đ, và giải xong mâu thuẫn 3 chiều | `03` §5 chú thích ³, §11 |
| 5 | **Lý do rate limit upload** | "1 script đẩy 5.000 ảnh = **$22** Class A" | 10.000 thao tác Class A × $4,50/triệu = **$0,045**. Lý do đúng là **trách nhiệm nội dung** + phình DB + đốt free tier, **không phải tiền** | **~490 lần** | `10` §5 mục 9 |
| 6 | **R2 Infrequent Access cho thumbnail** (A38) | viết như **khoản tiết kiệm** | IA = **$0,01/GB lưu trữ NHƯNG Class A $9,00/triệu (2×), Class B $0,90/triệu (2,5×), phí lấy dữ liệu $0,01/GB, tối thiểu 30 ngày**. Ở trần 60 sổ `thumb/` chỉ **0,83 GB**, nằm trong free tier 10 GB ⇒ **tiết kiệm $0,00**, đổi lấy mỗi lần "đánh thức sổ ngủ" đắt 2,5× | **tối ưu ngược** | `03` §2.5 · `04` §6.1 · `05` §8.1 — ghi thành **Bất đồng #1**, không tự bác A38 |

### B.3. ➕ SỰ THẬT MỚI — không tài liệu nào có (6)

| # | Phát hiện | Vì sao quan trọng | Ghi ở |
|---|---|---|---|
| 1 | **NĐ 147/2024 Điều 24 khoản 6 điểm d** — chỉ MXH **đã được cấp Giấy phép** mới được livestream hoặc **hoạt động phát sinh doanh thu dưới mọi hình thức** | `05` gọi đây là *"phát hiện nặng nhất"* nhưng chỉ có nguồn thứ cấp không số điều. **Nay đã có số điều** ⇒ **A62 (doanh thu 0đ 6 tháng đầu) là NGHĨA VỤ LUẬT ĐỊNH, không phải lựa chọn kinh doanh.** Câu 3 gửi luật sư chuyển từ *"xin tra cứu"* sang *"xin xác nhận cách hiểu"* — rẻ hơn nhiều | `05` §0, §2 GĐ4, §12 |
| 2 | 🔴 **NĐ 330/2026/NĐ-CP** — ban hành **và hiệu lực 19/08/2026**, tức **16 ngày trước hôm nay**. Phạt tối đa **3 tỷ (tổ chức)** / **1,5 tỷ (cá nhân = 1/2)**, thông báo sự cố **72 giờ**, tước giấy phép 1–24 tháng | Founder đang hoạt động **tư cách cá nhân** ⇒ trần **1,5 tỷ**, gấp **~12,6 lần** toàn bộ chi phí thật của dự án (≈119 triệu). **Rủi ro tiền lớn nhất trong hồ sơ.** `05` §1 đã bắt được văn bản này ở vòng trước nhưng **chưa ai viết quy trình 72h** | `11` §5 · `05` §8.2 |
| 3 | 🔴 **Điều kiện cấp Giấy phép MXH bao gồm MÁY CHỦ ĐẶT TẠI VIỆT NAM** + lưu dữ liệu ≥2 năm + xác thực SĐT VN/số định danh + tên miền `.vn` + pháp nhân VN | **Trần 60 sổ là trần KIẾN TRÚC, không chỉ trần hành chính.** Vượt nó = phải di trú Supabase Singapore + Cloudflare R2 về hạ tầng VN. Đây là biện minh mạnh nhất cho quy tắc `domain/` không-I/O của `03` §1, và là **câu 7/7 (máy chủ VN)** gửi luật sư | `05` §12 · `11` §6 #4 |
| 4 | **Vercel Hobby là gói PHI THƯƠNG MẠI** `[nguồn thứ cấp]` | Ngày đầu tiên có **một đồng** doanh thu ⇒ phải lên Pro **$20/tháng = 6,24 triệu/năm**. Khoản này **chưa có trong bảng nào**; ở ca bi quan nó một mình đủ lật dấu của biên. Cũng là lập luận độc lập nữa cho **D-04 = B** | `10` §6.1 · `11` §3.3 |
| 5 | **Vercel Hobby cron: tối đa 1 lần/ngày mỗi job, thời điểm chỉ đảm bảo TRONG GIỜ** (job 04:05 có thể chạy bất kỳ lúc nào trước 05:00) | **Xác minh quyết định chọn `pg_cron` của `03` §2.7 là BẮT BUỘC, không phải sở thích.** Biên **120 giây** của `04` §3.5 không thể đạt bằng Vercel Cron. Đây là dòng chặn việc ai đó sau này "đơn giản hoá" | `03` §2.7 |
| 6 | **Điều 32 BLDS 2015** — dùng hình ảnh phải được đồng ý; **dùng thương mại phải TRẢ THÙ LAO**; chế tài gồm Toà buộc **thu hồi/tiêu huỷ/bồi thường** | **Ràng buộc VĨNH VIỄN, không phải điều kiện mở lại**: Giấy phép MXH mở khoá vế *"được phát sinh doanh thu"*, **không** mở khoá vế *"được dùng ảnh người khác để bán"*. Lý do pháp lý **thứ tư, độc lập** để P2 bị cắt | `10` §3.0 · `11` §5.4 |

**Ngoài ra, hai điều được xác minh nhân tiện:**
- **Google Play 12 tester / 14 ngày liên tục** (tài khoản cá nhân tạo sau 13/11/2023; từ 2026 Google còn kiểm tester có **dùng thật**; một người rớt ⇒ đếm lại từ đầu) ⇒ lập luận *"đồng hồ chạy trên bản build chứ không trên tuổi tài khoản"* của `07` §6 **đúng và mạnh hơn nó tưởng** — thêm lý do cấm mua tài khoản Play ở T13.
- **Supabase Pro có spend cap BẬT SẴN mặc định** ⇒ vượt quota thì dịch vụ bị giới hạn chứ không sinh hoá đơn. Đã nâng thành **quyết định phải ghi** (khối **D-12**), vì founder chưa có pháp nhân: *thà sập còn hơn nợ*.
- **Luật ANM 2025 Điều 16 khoản 2** (hiệu lực 01/07/2026, đã có sẵn ở NĐ 147 Điều 27 khoản 3 điểm a): trẻ **dưới 16** dùng dịch vụ ⇒ cha mẹ phải đăng ký bằng thông tin **của mình**. ⇒ Cổng tuổi ≥16 phải là **rào CHẶN CỨNG**, không phải bản ghi `is_16_plus = false`. `05` §6 phương án P1 đã chọn đúng ("chặn <16"); `11` §5.3 làm rõ nhánh `else` và hệ quả cho `09` (mọi kênh tuyển nhắm học sinh cấp 3 chạm rào này).

### B.4. ❌ VẪN KHÔNG XÁC MINH ĐƯỢC — giữ nhãn (9)

| Con số | Trạng thái sau 04/09 | Vì sao không đóng được | Ai/khi nào đóng |
|---|---|---|---|
| **eCPM web display VN $0,25–0,60** | 🔴 `[ước lượng, chưa xác minh]` — **dải nguồn thứ cấp còn RỘNG HƠN: $0,04 – $1,00** | Nguồn công khai chỉ có eCPM **in-app** hoặc giá CPM **người mua trả** (12.500–25.000đ/1.000 hiển thị); một nguồn ghi AdSense VN ≈ $0,04. Không có nguồn nào cho tệp Gen Z VN trên web | Chỉ đo được khi tự chạy. **Kết luận "quảng cáo là ÂM" KHÔNG đổi** — mạnh thêm nếu con số thật là $0,04 |
| **Thị phần Android VN** | ✅ **ĐÃ ĐÓNG 04/09/2026 (D-08)** — StatCounter T8/2026: **Android 57,33% · iOS 42,64%** | `docs/adr/ADR-003-thi-phan-android-vn.md`; nhãn `[FACT]` của ">85%" bị thu hồi | **Còn lại:** tính lại giá trị của 0,3 pw web push (phủ ~57%, không ~85%) và xem lại mọi câu "để iOS sau" (iOS ~43%) |
| **Ngưỡng 10.000 lượt có tính trung bình 6 tháng liên tục không** | 🟡 **MỚI mở ra** | Cụm *"trung bình 06 tháng liên tục"* xác minh chắc chắn cho ngưỡng **100.000 xuyên biên giới (Điều 23 khoản 3)**; một nguồn thứ cấp áp cho cả 10.000 | Câu phụ 0đ trong email luật sư. **Nếu đúng, đèn cảnh báo hiện tại đang báo sớm đáng kể** ⇒ đã thêm cột `monthly_visits_avg6` từ ngày đầu (0 pw, không backfill được) |
| **Điều 27 khoản 3 có áp cho tier thông báo không** | 🟡 MỘT PHẦN — điều khoản tồn tại, nhắm *"tổ chức, doanh nghiệp cung cấp dịch vụ MXH trong nước"*, **văn bản không phân biệt tier** ⇒ đọc thận trọng: **áp cho cả hai** | Cần diễn giải phạm vi, không phải tra cứu | 🔴 **Luật sư, câu 2/7.** Vế TIỀN đã sụp (B.2 #1); vế còn sống là **pháp nhân** (ZNS OTP đòi Zalo OA đã xác minh ⇒ đòi pháp nhân) và **+0,4 pw** |
| **"`proof_total_after` không giảm khi xoá ảnh" có đứng trước Luật 91/2025 không** | 🔴 **vẫn là lập luận của người viết hồ sơ** | Không tìm được nguồn nào xác nhận. Đây là nền móng của nguyên tắc P1 và cả `04` §6.3 | 🔴 **Luật sư, câu 4/7** |
| **Điều 32 BLDS áp thế nào cho ảnh của người ĐÃ RỜI sổ, và cho việc rút đồng ý sau khi bản sao đã phát tán** | 🔴 nội dung điều luật ✅ xác minh, **áp vào ca cụ thể thì chưa** | Hai ca này không có án lệ công khai | 🔴 **Luật sư, câu 5–6/7** |
| **q_c = 0,53** · **A = 4,0** · **25 lượt/người/tháng** · **8,4 phút/sổ/tuần** | 🔴 `[suy luận/ước lượng]` | Không có nguồn ngoài — chỉ đo được ở Bước 0 (08–21/09) và ở beta | Bước 0 / beta. **Lưu ý:** nếu ngưỡng 10.000 tính trên trung bình 6 tháng thì sai số của "25 lượt/người" được san phẳng đáng kể |
| **110 KB/ảnh sau nén** | 🔴 `[chưa đo]` | Phải đo trên 20 ảnh Android thật | **Buổi kiểm chứng 7 câu HÔM NAY 04/09** |
| **Phí ý kiến luật sư 5–15 triệu** · **giá in sổ A5 200–240k** | 🔴 chưa có báo giá thật | Không máy nào thay được cuộc gọi | Luật sư: **đã trễ hạn A104 (03/09)**. Giá in: **hạ ưu tiên xuống 0** vì P2 đã cắt (S13) |

---

## C. CẦN FOUNDER QUYẾT — hai khối MỚI

| Mã | Câu hỏi | Khuyến nghị | Hạn | Quá hạn thì |
|---|---|---|---|---|
| **D-11** (mới) | Chi đủ **0,25 pw** hàng rào an toàn, hay chỉ **0,10 pw** phần luật định và chấp nhận thiếu có ghi ngày? | **(a) chi đủ**, nhưng **làm backup `rclone` TRƯỚC, trong tuần này** — nó là 20 phút cấu hình, không phải hạng mục phát triển. 0,20 pw còn lại vào D-01 | **22/09/2026** (cùng D-01) | (b) tự có hiệu lực, và §2/§4 phải được gắn nhãn *"đã biết, đã chấp nhận, 22/09/2026"* trong ADR-000 |
| **D-12** (mới) | Spend cap Supabase: giữ **BẬT** (dịch vụ sập khi vượt) hay **TẮT** (hoá đơn không trần)? | **GIỮ BẬT.** Ở ≤60 sổ khả năng chạm quota gần bằng 0 (§3.2) ⇒ (a) gần như không có chi phí thật, còn (b) mở rủi ro không giới hạn để đổi lấy lợi ích không tồn tại | **trước 02/12/2026** | (a) tự có hiệu lực (mặc định nhà cung cấp) — nhưng **phải ghi thành quyết định**, không để nó vô danh |

**Cộng thêm hai việc cũ vẫn treo, tính đến hôm nay 04/09:**
- 🔴 **D-08 hạn HÔM NAY** — 15 phút StatCounter, gắn ĐÚNG MỘT con số Android VN vào ADR-000.
- 🔴 **Email 7 câu cho luật sư — quá hạn 1 ngày** (A65/A104, hạn 03/09). Trọng số 7 câu đã được sắp lại ở `11` §6.1: câu #1 và #2 nay chỉ cần *"xin xác nhận cách hiểu"*; bốn câu đắt nhất là Điều 27 (tier), máy chủ VN, Điều 32 (hai ca), và `proof_total_after`. **Nội dung đã sẵn sàng, chỉ còn bấm gửi.**
- 🟡 Báo giá domain `.vn` **không còn cần** — giá công khai đã kiểm chứng: **770.000đ năm đầu / 460.000đ năm sau**.

---

## D. BẤT ĐỒNG VỚI BẢNG PHÁN QUYẾT (2, đều đã thi hành trước khi ghi)

1. **A38, vế *"180 ngày ngủ ⇒ chuyển R2 Infrequent Access"*** — vế chính (**thumbnail VĨNH VIỄN, KHÔNG xoá**) đã thi hành đầy đủ ở mọi nơi. Bất đồng chỉ ở **cơ chế**: biểu giá công bố cho thấy IA tiết kiệm **$0,00** trong toàn bộ vòng đời hợp pháp (0,83 GB ở trần 60 sổ, nằm trong free tier 10 GB) và làm mỗi lần đọc đắt **2,5×** — đúng vào khoảnh khắc "sổ ngủ được đánh thức" mà cả `08` §7.2–7.3 lẫn A38 tồn tại để phục vụ. Đề nghị sửa A38 thành *"lớp Standard; xét lớp lạnh khi `thumb/` > 100 GB"*. **Đã ghi chú tại chỗ ở `03`/`04`/`05`, KHÔNG tự xoá chữ IA** vì nó là hằng số của bảng phán quyết.
2. **A60 (auto-hide toàn cục ở report đầu tiên) không có trần** — đã thi hành nguyên văn. Nhưng nó là vũ khí griefing (A.1 mục 2). Bản vá đề xuất **không giảm nghĩa vụ pháp lý nào**, nhưng nó **đổi một hằng số của A60** nên cần trọng tài phê chuẩn.

Các sửa số ở §B là sửa **sự thật kiểm chứng được** (biểu giá, ngày, số điều), không phải bất đồng với phán quyết — bảng phán quyết thắng khi hai tài liệu lệch nhau, nhưng nó không phán quyết được biểu giá của Cloudflare.

---

## E. FILE ĐÃ SỬA

| File | Số chỗ sửa | Nội dung chính |
|---|---|---|
| **`11-hang-rao-ky-thuat-phap-ly-tien.md`** | **TẠO MỚI**, 534 dòng | Chủ quyền 5 mảng mới: mô hình truy cập ảnh · rate limit · quota/chi phí · backup · sổ đăng ký pháp lý. Kèm §7 bảng số đã kiểm chứng và §10 danh sách nguồn |
| `03-kien-truc-ky-thuat.md` | 6 | Khối chuyển chủ quyền 4 hạng mục · key card + `asset_nonce` · gỡ IA khỏi hàng thumb · xác minh Vercel Hobby cron ⇒ `pg_cron` bắt buộc · domain 750k→770k (2 chỗ) |
| `04-data-model-va-co-che.md` | 5 | 3 cột mới trên `card` (`asset_nonce`, `person_ids`, `rerendered_at`) · pseudocode vẽ lại card khi xoá ảnh · SLA backup 30→**90 ngày** · câu "không xoá được bản đã gửi vào Zalo" · gỡ IA khỏi §6.1 |
| `05-lo-trinh-phap-ly.md` | 8 | **Điều 24 k.6 đ.d** cho kết luận 3 (2 chỗ) · sửa chi phí SMS OTP (2 chỗ) · thuế 500 triệu · môn bài đã bãi bỏ · đóng câu hỏi mở #6, #7 · quy trình 72h · khối cập nhật §12 (4 dòng đóng, 2 dòng mới) |
| `06-metrics-va-gia-thuyet.md` | 2 | Thang chi phí 4 nấc + chứng minh R2 = $0 · cột `monthly_visits_avg6` cho khả năng "trung bình 6 tháng" · dải eCPM mở rộng $0,04–1,00 |
| `10-mo-hinh-kinh-doanh.md` | 6 | Sửa lý do rate limit (sai 490 lần) + trỏ 6 luật mới · Vercel Pro $20 khi có doanh thu (+6,24 triệu/năm) · Điều 32 BLDS thành ràng buộc vĩnh viễn · thuế 500 triệu (2 chỗ) · nhãn eCPM (2 chỗ) |

**Không chạm:** `01`, `02`, `07`, `08`, `09`, `_rulings.md`, `_audit-report.md`, `docs/adr/`.
