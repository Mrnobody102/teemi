# 10 — MÔ HÌNH KINH DOANH & QUYẾT ĐỊNH VỀ TIỀN (Chốt Sổ)

_Viết 03/09/2026. Dựa trên `01-dinh-nghia-san-pham-v2.md` (hướng D-chat-native, web, không app, 6,5 pw), `r08-monetization.md`, `c-business.md`, `r05-tech-stack.md`, `r06-legal-compliance.md`._

**Nhãn dùng trong tài liệu:** `[FACT + nguồn]` · `[suy luận từ X]` · `[ước lượng]` · `[cần kiểm chứng]`.

> ### ⚠️ CẦN FOUNDER QUYẾT — tên sản phẩm: **Teemi** hay **Chốt Sổ**?
>
> **Trạng thái:** tài liệu v2 đề xuất đổi tên gốc **Teemi** → **Chốt Sổ**; **founder CHƯA duyệt**. Tài liệu này (và 9 tài liệu kế hoạch còn lại) **đã viết sẵn theo "Chốt Sổ"** — đó là một sự đã rồi về câu chữ, **không phải một quyết định đã ra**. Bảng phán quyết ngày 2026-09-03 **không có dòng nào phán quyết việc đổi tên**: mục D không liệt kê nó, và chỗ duy nhất nhắc tới là **C52**, nơi "khớp tên sản phẩm Chốt Sổ" chỉ được dùng làm **lập luận phụ** cho việc chọn khoá `book_id` — không phải một phê duyệt. Vì bảng phán quyết im lặng, tài liệu này **không tự quyết** và ghi rõ ra đây (luật: khi bảng im lặng, chọn phương án thận trọng hơn **và nói rõ**).
>
> | | **(1) Giữ Teemi** | **(2) Đổi sang Chốt Sổ** |
> |---|---|---|
> | Chi phí câu chữ | Sửa tên trong 10 tài liệu kế hoạch — `sed`, ~30 phút | **0đ** — đã viết sẵn |
> | Chi phí kỹ thuật | **0đ.** Tên sản phẩm không phải tên schema (A29–A31: schema tiếng Anh, `book`/`book_day`) ⇒ đổi tên hiển thị **không** đụng một dòng DDL nào | 0đ, cùng lý do |
> | Domain | `chotso.vn` đã là domain **DUY NHẤT** ở MVP-0 (A68, **770.000đ**/năm — A67) và đã nằm trong bảng tiền mặt §9 | như trên |
> | Rủi ro | Domain đã chọn không khớp tên sản phẩm — lệch nhẹ, không chặn gì | Không có rủi ro kỹ thuật đã biết |
>
> **Khuyến nghị: (2) — duyệt chính thức tên "Chốt Sổ", bằng một dòng trong `docs/adr/ADR-000-bat-bien.md`.** Ba lý do: (a) domain `chotso.vn` đã được chốt và đã tính tiền — đổi lại nghĩa là mua domain thứ hai, mà A68 đã **CẮT** domain thứ hai · (b) tên "Chốt Sổ" là **chính động từ của core loop** ("bấm Chốt sổ") và của caption chuẩn A99, nên nó đã ăn vào copy sản phẩm chứ không chỉ vào bìa tài liệu · (c) chi phí đổi bằng 0 hôm nay và tăng dần theo mỗi tài liệu/ảnh card được sản xuất.
>
> **Hạn đề nghị: 22/09/2026** (cùng lúc với các quyết định D-01…D-06). Quá hạn ⇒ vẫn là **sự đã rồi**, chỉ khác là không ai ký — đó là lý do phải ký.
>
> **Cho tới khi có chữ ký, đọc mọi chỗ ghi "Chốt Sổ" trong tài liệu này là "sản phẩm đang bàn", không phải tên đã duyệt.** Không có con số nào trong tài liệu này phụ thuộc vào câu trả lời.

> ### ⚖️ ĐÃ ĐỐI CHIẾU BẢNG PHÁN QUYẾT TRỌNG TÀI — 03/09/2026
>
> Toàn bộ tài liệu này đã được đối chiếu và sửa theo **bảng phán quyết trọng tài ngày 2026-09-03**, ghi tại `/home/huypq/teemi/docs/plan/_rulings.md`. **Mọi hằng số trong tài liệu này lấy từ file đó** (từ điển giá trị chuẩn A01–A123). Khi tài liệu này và `_rulings.md` khác nhau, `_rulings.md` thắng và tài liệu này là lỗi phải sửa.
>
> **Sáu thay đổi lớn nhất mà phán quyết áp lên tài liệu này:**
> 1. **Doanh thu = 0đ tuyệt đối trong 6 tháng đầu** (A62). Ba phương án monetization P1/P2/P3 của §3 **đều bị xoá hoặc cắt**: P1 (bán export) **XOÁ** — không bán một quyền luật định (D-06) · P2 (Sổ in Tết) **CẮT** (S13) · P3 (B2B) **CẮT khỏi 12 tháng đầu** (S11). §3 được giữ lại làm **hồ sơ phân tích**, không còn là kế hoạch.
> 2. **Con số 700 bị bác hoàn toàn**, thay bằng **hai counter** `monthly_visits` (vàng 6.000 / đỏ 8.500) và `monthly_active_persons` (vàng 600 / đỏ 850) — A54.
> 3. **Chi phí beta là $28–37/tháng**, Supabase Pro $25 **bắt buộc từ 02/12/2026** (A74). Mọi bảng "$3/tháng, Free tier" đã sai và đã sửa, kể cả bảng tiền mặt 6 tháng ở §9.
> 4. **Tài liệu này sau phán quyết xin 0 pw.** Bốn khoản — +0,4 pw (magic link, S05) · +0,2 pw (fake door T3, S04) · +0,6 pw (P2, S13) · +0,8 pw (P3, S11) — **đều bị cắt**, tổng **−2,00 pw không được ghi vào ngân sách**. Sổ cái pw duy nhất là `docs/adr/pw-ledger.md` (A87), và **một khoản cắt chỉ được chi MỘT LẦN** (C08).
> 5. **`A` = 4,0 người/sổ là hệ số quy đổi DUY NHẤT** (A70) — áp vào **cả ba cột** của bảng tham số §6.1, không chỉ cột cơ sở. Kéo theo: `MAU` bi quan 120 → **160**, lạc quan 27.000 → **24.000**, và **toàn bộ bảng §6.2 phải tính lại**.
> 6. **Sáu con số dẫn xuất đã tính lại vì số gốc đổi:** `Cf` (chi phí cố định, sau A74) · toàn bộ §6.2 · dòng 1.000 MAU ở §2.4 · dải "93,6 triệu/năm" ở §1 và §6.3 (bản cũ dán nhầm số **sổ** thành **MAU**) · chi phí cơ hội build ở §2.3 (bản cũ chia sai đơn vị pw) · tổng tiền mặt 6 tháng ở §9. Mỗi chỗ đều có một dòng ⚠️ nói rõ số cũ sai ở đâu.
>
> Danh sách đầy đủ những gì bị cắt và điều kiện mở lại: xem mục **"ĐÃ CẮT — danh sách đầy đủ và điều kiện mở lại"** ở cuối tài liệu.
>
> **Bốn khối "⚠️ CẦN FOUNDER QUYẾT" trong tài liệu này** (máy không được tự quyết, mỗi khối nêu 2 lựa chọn + khuyến nghị + hạn): **tên sản phẩm Teemi hay Chốt Sổ** (ngay dưới đầu đề, hạn đề nghị 22/09/2026 — bảng phán quyết **không** phán quyết việc này) · **D-04** — định nghĩa thành công A hay B (mục "Câu hỏi mở", hạn 22/09/2026) · **D-03** — nhánh (ii) của G4 đo bằng gì sau khi T3 bị cắt (§7 dưới bảng G4, hạn 20/12/2026) · **D-06** — export ai trả 0,3 pw (§3.1, hạn 07/09/2026, khuyến nghị: bản làm tay 0 pw).

> **Kết luận đặt trước, không giấu ở cuối:**
>
> 1. Kiến trúc v2 (web, không IAP, không push riêng, không SMS) **hạ chi phí hạ tầng ~4,3 lần** so với mô hình app trong r05 — phản biện "ở 10.000 DAU app đã lỗ" **không còn đúng về mặt server**. Nhưng nó đúng hơn bao giờ hết về mặt **giờ founder**, và giờ founder mới là dòng chi phí duy nhất có ý nghĩa.
> 2. **Việc bàn giấy 3 giờ ở §10(b) của v2 đã được làm trong tài liệu này, và kết quả là ÂM.** Quảng cáo không cứu được mô hình: trần quảng cáo ở 1 triệu MAU là **1,3–2,3 tỷ VND/năm**, tức *không cao hơn* con số 2,6 tỷ IAP mà nó được kỳ vọng sửa. Quảng cáo không phải mô hình kinh doanh — nó là cách trả tiền điện.
> 3. Ở cấu hình B2C-VN, thu nhập 1 người (300 triệu/năm) đòi **61.000 MAU ở giả định lạc quan nhất** (giá 399k × 5% sổ trả tiền — hai điều kiện lạc quan phải đúng cùng lúc, [ước lượng] xác suất <5%) hoặc **615.000 MAU ở giả định cơ sở**. Phương án duy nhất chạm ngưỡng đó bằng hai chữ số khách hàng là **B2B — 20 khách tổ chức** — và nó phá định vị §1. **[03/09/2026] Phán quyết S11 đã CẮT P3 B2B khỏi 12 tháng đầu** ⇒ trong 12 tháng đầu **không tồn tại phương án nào chạm 300 triệu/năm**. Đó không phải một thất bại chưa xảy ra, đó là một **hệ quả đã được chọn**.
> 4. Vì vậy **founder phải chọn định nghĩa thành công TRƯỚC 22/09/2026**, cùng lúc với quyết định đi tiếp/dừng của Bước 0. Ba định nghĩa ở §1. v2 như đang viết được **tối ưu cho định nghĩa B và C, và có cấu trúc thù địch với A**. Khuyến nghị của bảng phán quyết (D-04): **chọn B trong 12 tháng đầu** — xem khối cảnh báo ở mục "Câu hỏi mở".
> 5. **[03/09/2026] Doanh thu bằng 0đ tuyệt đối trong 6 tháng đầu (A62) không phải một lựa chọn kinh doanh, nó là một ràng buộc pháp lý** (`05` §0 kết luận 3). Hệ quả trực tiếp: kill gate 31/03/2027 **bỏ vế "doanh thu = 0"** (A64) — dùng một hệ quả pháp lý làm tín hiệu thị trường là tự lừa mình.

---

## 1. NÓI THẲNG TRƯỚC: đây có phải một business không?

Câu trả lời ngắn: **ở hình dạng hiện tại, không.** Không phải vì sản phẩm tệ, mà vì ba con số vật lý cùng lúc:

| Ràng buộc | Con số | Nguồn |
|---|---|---|
| Trần chi tiêu giải trí số còn lại của Gen Z VN sau Spotify/Netflix | **20.000–50.000đ/tháng, không phải mỗi tháng** | [suy luận từ r08 §2.3 — Appota 100–500k tổng] |
| Trần convert của social app monetize tốt nhất thế giới | Discord **3,2–3,6% MAU** | [FACT về Discord — Sacra, DemandSage 2026] **nhưng là trần VAY MƯỢN** (A78): Chốt Sổ là web, không IAP, thanh toán chuyển khoản tay ⇒ không có cơ sở nào nói Chốt Sổ được phép chạm trần của Discord |
| Sản phẩm gần Teemi nhất về định vị, được mua 17,5 triệu USD | Geneva, **doanh thu 0 đồng**, đóng cửa 9/2025 | [FACT — TechCrunch, Sunset HQ] |
| Kênh thanh toán IAP một chạm | **Không có** — v2 là web, không lên store | v2 §5 |

Điểm thứ tư là điểm mà cả 4 tài liệu hướng và cả r08 đều chưa tính: **v2 tự nguyện bỏ IAP.** Điều đó cắt 15–30% phí sàn (tốt: tỉ lệ thực nhận từ 77% lên ~98,5%) nhưng đổi lấy một thứ đắt hơn nhiều — **ma sát thanh toán**. Chuyển từ "chạm Face ID" sang "quét VietQR, chuyển khoản, chờ đối soát" là mức ma sát mà mọi benchmark conversion ở r08 **không** đo được. [ước lượng] tôi giả định nó cắt conversion đi **40–60% tương đối**; con số này chưa ai đo. ⚠️ **[03/09/2026] Và trong 12 tháng đầu nó sẽ KHÔNG được đo.** Bản trước ghi "cần đo bằng T3 ở §4"; **T3 đã bị cắt (S04)**. Phép đo gần nhất còn sống là **T4 — fake pre-order thu cam kết, không thu tiền** (A63), và cam kết là tín hiệu **yếu hơn tiền thật 2–3 lần** [ước lượng]. Vậy nên hệ số 40–60% này phải được **mang nhãn chưa đo ở mọi nơi nó xuất hiện**, và không được dùng để bác hay bênh bất kỳ phương án nào trước **G4 30/06/2027**.

### Ba định nghĩa thành công — chọn đúng một

| | **A. Business tự nuôi** | **B. Dự án cá nhân có ý nghĩa** | **C. Bàn đạp / portfolio** |
|---|---|---|---|
| **Định nghĩa số** | Doanh thu ròng ≥ **300 triệu VND/năm** (thu nhập 1 người ở VN, [ước lượng] mức dev mid 25tr/tháng) | Doanh thu **0đ là bắt buộc trong 6 tháng đầu** (A62), và là chấp nhận được sau đó. Chi phí tiền mặt ≤ **1.000.000đ/tháng** — kỳ vọng thật **$28–37 = 730.000–960.000đ** sau khi Supabase Pro thành bắt buộc từ 02/12 (A74); đèn báo động **>$60/tháng** (A75). Có ≥30 sổ sống, **dưới trần vận hành 35 sổ** (A92) | Ship công khai, có một con số đọc lên được: "**200 nhóm bạn thật, 8.000 tấm, `sổ-D28` 35%**" |
| **Cần bao nhiêu user** | **61.000 – 615.000 MAU** tuỳ giá × conversion (bảng §6.3). Chỉ để trả công vận hành 10h/tuần: **19.000 – 192.000 MAU** (sửa 03/09/2026 — bản cũ ghi 47.600, đó là số **sổ**, không phải MAU) | **300 – 3.000 MAU**, và cố ý **giữ dưới đèn đỏ pháp lý** — [CHỐT 2026-08-28, QĐ-04] tức `monthly_active_persons` < 850 **VÀ** `monthly_visits` < 8.500, không phải "dưới 700 MAU" | 500 – 5.000 MAU. Số tuyệt đối không quan trọng bằng chất lượng câu chuyện |
| **Cần pháp nhân?** | **Có, bắt buộc** — mọi cổng thanh toán merchant (MoMo Business/VNPay/ZaloPay Business) đều đòi ĐKKD [FACT — Airwallex 2026]; giấy phép MXH đòi doanh nghiệp VN [FACT — r06] | **Không.** Nhận tiền cá nhân, dưới ngưỡng miễn thuế | **Không** |
| **Cần mở lại bề mặt nào của §6** | **Có** — ít nhất một trong: quảng cáo (mục 13), B2B, hoặc bán hàng vật lý. **[03/09/2026] CẢ BA đều đang đóng bằng phán quyết**: quảng cáo giữ khoá (S16) · B2B cắt 12 tháng (S11) · hàng vật lý cắt (S13) ⇒ **A không mở được trong 12 tháng đầu, kể cả khi founder muốn** | Không mở gì | Không mở gì |
| **Trần giờ 10h/tuần** | **Vỡ.** Bán hàng + hỗ trợ + hoàn tiền + kế toán thêm 6–10h/tuần | Giữ được | Giữ được |
| **Xác suất [ước lượng]** | **< 10%** trong 24 tháng | ~60% nếu H1+H2 pass | ~80% nếu ship đúng hạn 15/12/2026 |
| **Rủi ro chính** | Tiêu 2 năm để có 300tr/năm — thấp hơn lương đi làm | Founder tự chán vì "không đi tới đâu" | Không ai đọc; portfolio chỉ có giá nếu được viết ra |

**Điều founder phải nhìn thẳng:** ba định nghĩa này **không** là ba mức tham vọng của cùng một kế hoạch. Chúng là **ba sản phẩm khác nhau**:

- Chọn **A** ⇒ phải quyết ngay hôm nay mở bề mặt tiền nào, vì nó thay đổi schema (identity, entitlement, hoá đơn) và schema phải đúng **trước dòng code đầu tiên**.
- Chọn **B** ⇒ đèn đỏ pháp lý (850 người / 8.500 lượt, QĐ-04) không phải mục tiêu chưa đạt, nó là **trần tự đặt**. Kill gate 31/03/2027 của v2 phải sửa: bỏ vế "doanh thu vẫn bằng 0" ra khỏi điều kiện dừng, vì với B doanh thu 0 là thiết kế chứ không phải thất bại.
- Chọn **C** ⇒ thêm một hạng mục **không có trong 6,5 pw**: viết công khai (build in public). ~2h/tuần × 20 tuần. Nếu không viết, C không tồn tại — không ai biết bạn đã làm gì.

**Khuyến nghị gốc của tài liệu này (viết trước bảng phán quyết): chọn C làm mục tiêu chính, B làm trạng thái nghỉ, và giữ A như một cửa chỉ mở nếu B2B tự tìm tới.**

> ⚠️ **[03/09/2026] Vế cuối của câu trên KHÔNG CÒN THI HÀNH ĐƯỢC.** S11 đã **CẮT P3 B2B khỏi 12 tháng đầu** — cửa đó **đóng, kể cả khi B2B tự tìm tới**; kết quả T5 chỉ được cất vào ADR và đọc lại tại **G4 30/06/2027**. **Khuyến nghị có hiệu lực là của bảng phán quyết (D-04): chọn B trong 12 tháng đầu**, với C (viết công khai) chạy song song vì hai thứ không loại trừ nhau. **Đây là việc founder phải quyết trước 22/09/2026 — xem khối cảnh báo D-04 ở mục "Câu hỏi mở cần founder quyết".** Lý do đầy đủ ở §3 và §6.

---

## 2. MÔ HÌNH CHI PHÍ

### 2.1. Chi phí biến đổi / người dùng active / tháng — kiến trúc v2 (web)

Giả định: `q_c = 0,53` `[suy luận, chưa đo — đây là giả thuyết H2]` (A17), 1 tấm/ngày, ảnh gốc **~110 KB** `[chưa đo — phải đo trên 20 ảnh Android thật trước khi tin]` (A37) TTL **72 giờ** (A36), thumbnail 320px **~18 KB** (A39) giữ **vĩnh viễn** (A38), ảnh phục vụ **trực tiếp từ R2** (egress $0), Vercel chỉ phục vụ HTML/JSON.

> ⚠️ **Cả bảng dưới đây là bảng dẫn xuất từ hai số chưa đo** (`q_c` 0,53 và 110 KB). Nếu buổi đo 20 ảnh Android thật cho ra 200 KB thay vì 110 KB, dòng R2 storage ảnh gốc gần gấp đôi — nhưng nó chỉ chiếm 0,45% tổng, nên **kết luận "≈15đ/user/tháng" không đổi**. Số làm đổi kết luận là `q_c`, vì nó nhân vào **mọi** dòng.

| Dòng chi phí | Cách tính | $/user/tháng | VND/user/tháng |
|---|---|---|---|
| R2 storage (thumbnail tích luỹ, tháng 12) | 18 KB × 0,53 × 365 = 3,43 MB × $0,015/GB | **$0,000053** | ~1,4đ |
| R2 storage (ảnh gốc thường trực, 3 ngày) | 110 KB × 0,53 × 3 = 175 KB | $0,0000027 | ~0,07đ |
| **R2 Class A (PUT)** — 2 PUT/ngày (gốc + thumb) | 60/tháng × $4,50/triệu | **$0,00027** | **~7,1đ** |
| R2 Class B (GET) — 1,5 lần mở sổ × 5 thumb/ngày | 225/tháng × $0,36/triệu | $0,00008 | ~2,1đ |
| Vercel bandwidth (HTML/JSON, ảnh không đi qua) | ~1,1 MB/tháng × $0,15/GB (chỉ khi vượt 1 TB) | $0,00016 | ~4,2đ |
| Vercel function (satori render 1 card/sổ/ngày) | ~9 giây CPU/sổ/tháng | ~$0,00002 | ~0,5đ |
| Supabase rows | ~35 row × 250 B = 8,75 KB/tháng | ~$0,000001 | ~0,03đ |
| Push | **Zalo — $0** | **$0** | **0đ** |
| SMS | **không có ở MVP** | **$0** | **0đ** |
| AI | **không có, vĩnh viễn ở MVP** | **$0** | **0đ** |
| **TỔNG** | | **≈ $0,0006** | **≈ 15đ/user/tháng** |

> **Con số phải dán lên tường: chi phí biến đổi ≈ 180 đồng/người dùng/NĂM.**
>
> Đối chiếu ba con số cùng đơn vị:
> - **1 tin SMS OTP đi VN = $0,2852 ≈ 7.400đ** [FACT — r05] = **41 năm** chi phí biến đổi của một user. Quyết định "không SMS OTP ở MVP" của v2 không phải tiết kiệm, nó là **thay đổi bậc độ lớn**.
> - **1 tin ZNS = 300đ/tin**, **36.000đ/sổ/tháng** nếu dùng làm push (300đ × **4,0 người/sổ** — A70 × 30 ngày; giá tin là [FACT — v2 §9], hệ số 5 người của bản cũ đã bị A70 bác) = **~200 năm** chi phí biến đổi/user.
> - **Doanh thu quảng cáo/user/năm ở eCPM $0,35 = ~2.800đ** (§3.4) = **15× chi phí biến đổi.**
>
> Dòng chi phí biến đổi lớn nhất là **R2 Class A (PUT)** — 47% tổng. Cách cắt: bỏ hẳn việc lưu ảnh gốc (chỉ PUT thumbnail 320px) → tổng còn ~8đ/user/tháng, **giảm 47%**. Xem §5, dòng 3. Đánh đổi: mất khả năng bán "tải ảnh gốc về" sau này — quyết định phải ra trước khi có user.

### 2.2. Chi phí cố định theo quy mô

| Hạng mục | Bước 0 (8 sổ) | Beta (12→30 sổ, 48→120 người) | 10k MAU | 30k MAU | 100k MAU |
|---|---|---|---|---|---|
| Vercel | Hobby **$0** | Hobby $0 | Pro **$20** | Pro $20 | Pro $20 |
| Supabase | Free **$0** | **Pro $25** [CHỐT 2026-08-28, QĐ-09] | Pro **$25** | Pro $25 | Pro $25 + disk ~$3 |
| Cloudflare R2 (storage + ops) | Free tier **$0** | **$0–3** | **~$4** | ~$12 | **~$40** |
| Domain `chotso.vn` | **$2,5** | $2,5 | $2,5 | $2,5 | $2,5 |
| Sentry / analytics | free | free | free | free | Team $26 |
| **TỔNG $/tháng** | **~$3** | **~$28–37** | **~$52** | **~$60** | **~$117** |
| **TỔNG VND/tháng** | ~78.000đ | **~730.000–960.000đ** | ~1,35 triệu | ~1,56 triệu | ~3,04 triệu |

> **[CHỐT 2026-08-28 — QĐ-09] Vì sao beta KHÔNG chạy trên Supabase Free.** Bản trước ghi beta $0/Free. `03-kien-truc-ky-thuat.md` §9 B6 bác: **Supabase Free không có backup hằng ngày**, trong khi sản phẩm hứa giữ thumbnail vĩnh viễn (v2 §4.2) và ToS hứa giữ ảnh (`05` §8.2). Mất CSDL beta = mất tài sản của mọi sổ, không có đường về, và đó là loại lỗi bus-factor-1 không sửa được. **Chốt: Supabase Pro $25/tháng từ ngày beta chạy (02/12/2026).** Kỳ vọng hoá đơn beta **$28–37/tháng**; đèn báo động ở **>$60/tháng** (thống nhất với §5 dưới đây và với `06` §8 Khối 4 đã sửa). Tiêu chí Definition of Done "≤$12/tháng" của `02` §7.5 đã được sửa thành **≤$40/tháng**.

**Đối chiếu trực tiếp với phản biện #13:** c-business §1.3 tính **$260/tháng ở 10.000 DAU (=30.000 MAU)** với kiến trúc app của r05, và kết luận "app đã lỗ". Kiến trúc v2 ở cùng 30.000 MAU tốn **~$60/tháng — rẻ hơn 4,3 lần.** Bốn quyết định tạo ra chênh lệch đó, xếp theo giá trị: (1) không push riêng ⇒ 0 hạ tầng noti; (2) không SMS OTP; (3) R2 egress $0 thay vì Supabase Storage; (4) không EAS/OTA. **Phản biện "ở 10.000 DAU đã lỗ" chết ở phần server. Nó sống lại nguyên vẹn ở phần giờ founder — xem §2.3.**

### 2.3. Dòng chi phí thật: giờ của founder

Server không phải chi phí của dự án này. Chi phí của dự án này là **520 giờ/năm** (trần 10h/tuần ở v2 §9).

| Tham số | Giá trị | Nguồn |
|---|---|---|
| Trần vận hành | 10 giờ/tuần = **520 giờ/năm** | v2 §9 |
| Giá giờ founder (lương dev mid VN 30tr/tháng ÷ 2.000h) | **180.000đ/giờ** | [ước lượng] |
| **Chi phí cơ hội vận hành/năm** | **93,6 triệu VND** | số học |
| Chi phí cơ hội build (6,5 pw = **260 giờ tập trung** ÷ hệ số hiệu suất **0,65** `[không có nguồn]` = **400 giờ lịch**) | **≈72 triệu VND** (một lần) | A80–A83 |

> **[03/09/2026] Sửa theo A80–A82.** Bản trước ghi "6,5 pw ÷ 0,65 = 10 tuần" — sai đơn vị. A80: 1 pw = **40 giờ tập trung** ⇒ 6,5 pw = 260 giờ. A81: hệ số hiệu suất **0,65** `[không có nguồn — xuất hiện lần đầu ở v2 §4.10]` ⇒ **400 giờ lịch** × 180.000đ = **72 triệu**. A82: ở 20 giờ/tuần ⇒ 13 giờ code/tuần ⇒ **1 pw ≈ 3,1 tuần lịch** ⇒ 6,5 pw ≈ **20 tuần lịch**, không phải 10. Câu "6,5 pw ≈ 10 tuần" của v2 chỉ đúng ở 40 giờ/tuần. Tổng tiền không đổi theo số giờ/tuần (400 giờ lịch là hằng số); **chỉ số tuần đổi** — và đó là biến quyết định beta có chạy được 02/12 hay không (xem D-02).

> **Ngưỡng hoà vốn thật không phải $52/tháng hạ tầng. Nó là 93,6 triệu VND/năm** — số tiền để việc vận hành Chốt Sổ không tệ hơn việc đi làm 10h/tuần freelance.

### 2.4. Điểm chi phí vượt doanh thu, ở nhiều mức conversion

Giả định: **`A` = 4,0 người active/sổ (A70 — hệ số quy đổi DUY NHẤT)** ⇒ `số sổ = MAU ÷ 4,0`. Giá **99.000đ/sổ/năm**, thực nhận 98,5% (VietQR/chuyển khoản, phí 0–1,5% [FACT — Airwallex: cổng trung gian 1–3%]). Không thuế nếu tổng doanh thu cá nhân dưới ngưỡng miễn (§9).

> ⚠️ **Toàn bộ cột doanh thu dưới đây là PHẢN THỰC** — P1 đã XOÁ (D-06) và doanh thu = 0đ trong 6 tháng đầu (A62). Bảng trả lời câu hỏi *"nếu được phép bán, chi phí có bị doanh thu vượt qua không?"*, không phải *"sẽ thu được bao nhiêu"*.

| MAU | Số sổ | Chi phí hạ tầng/năm | _(phản thực)_ `c_g`=0,8% | `c_g`=2% | `c_g`=5% | `c_g`=10% |
|---|---|---|---|---|---|---|
| 1.000 | 250 | **8,94 triệu** | 195.000đ ❌ | 488.000đ ❌ | **1,22tr ❌** | **2,44tr ❌** |
| 10.000 | 2.500 | 16,2 triệu | 1,95tr ❌ | 4,88tr ❌ | 12,2tr ❌ | 24,4tr ✅ |
| 30.000 | 7.500 | 18,7 triệu | 5,85tr ❌ | 14,6tr ❌ | **36,6tr ✅** | 73,1tr ✅ |
| 100.000 | 25.000 | 36,5 triệu | 19,5tr ❌ | 48,8tr ✅ | 122tr ✅ | 244tr ✅ |

> **[03/09/2026] Dòng 1.000 MAU đã tính lại: 936.000đ → 8,94 triệu/năm.** Con số cũ dùng chi phí cố định của **Bước 0** ($3/tháng, Free tier). Sau A74, sàn chi phí cố định là **$28/tháng ≈ 730.000đ** kể từ 02/12/2026 (Supabase Pro bắt buộc) ⇒ `730.000 × 12 + 1.000 × 15đ × 12 = 8,94 triệu`. **Hai ô ✅ ở dòng đó lật thành ❌** — ở 1.000 MAU không có mức conversion nào trong bảng bù nổi chi phí, kể cả 10%.

**Đọc bảng — ba kết luận:**
1. **Hoà vốn hạ tầng cần `c_g` khoảng 2–5% ở 30k–100k MAU** với giá 99k. Với giá 399k (đề xuất r08), ngưỡng rơi xuống **0,5–1,3%** — dưới trần **vay mượn** của Discord (A78), tức khả thi về mặt benchmark **của một sản phẩm khác**. Giá quan trọng hơn conversion. **Dưới 10.000 MAU thì không mức conversion nào đủ** — đó là dòng mới xuất hiện sau khi Supabase Pro thành bắt buộc.
2. **Không có ô nào trong bảng chạm 93,6 triệu/năm** (ngưỡng giờ founder ở §2.3) trừ `c_g`=5% và 10% ở 100.000 MAU. Nghĩa là: **hoà vốn hạ tầng là một cột mốc vô nghĩa.** Nó xảy ra ở quy mô mà founder vẫn đang làm không công.
3. Ở dưới 10.000 MAU — vùng mà dự án này gần như chắc chắn sống trong 12 tháng đầu — **mọi ô đều dưới 25 triệu/năm.** Bàn về monetization ở vùng này là bàn về vài triệu đồng. Đó là lý do §4 nói: **đừng thu tiền, hãy đo ai sẽ trả.**

---

## 3. BA PHƯƠNG ÁN MONETIZATION — **CẢ BA ĐÃ ĐÓNG TRONG 12 THÁNG ĐẦU** (hồ sơ phân tích)

> ### 🔴 [BỔ SUNG 04/09/2026 — `11` §5.4] RÀNG BUỘC VĨNH VIỄN: Điều 32 BLDS 2015 áp cho MỌI bề mặt doanh thu dùng ảnh thành viên
>
> Nội dung đã kiểm chứng: **việc sử dụng hình ảnh của cá nhân phải được người đó đồng ý**; **dùng vì mục đích thương mại thì PHẢI TRẢ THÙ LAO** cho người có hình ảnh, trừ khi có thoả thuận khác. Chế tài không dừng ở phạt hành chính — người có hình ảnh có quyền yêu cầu **Toà buộc thu hồi, tiêu huỷ, chấm dứt sử dụng và bồi thường**. Ngoại lệ chỉ gồm lợi ích quốc gia/công cộng và hoạt động công cộng — **không có ngoại lệ nào phủ được ảnh đời thường trong một nhóm bạn kín**.
>
> **Hệ quả cho tài liệu này, và nó KHÔNG phải một điều kiện mở lại:**
>
> 1. Đây là **lý do pháp lý thứ tư, độc lập** để P2 (Sổ in Tết) bị cắt — độc lập với S13, với trần vận hành, và với chi phí in.
> 2. Nó áp cho **mọi** phương án tương lai tái tạo ảnh thành viên thành hàng hoá — **kể cả sau khi đã có Giấy phép MXH**. Giấy phép mở khoá vế *"được phát sinh doanh thu"* (NĐ 147 Đ.24 k.6 đ.d); nó **không** mở khoá vế *"được dùng ảnh của người khác để bán"*.
> 3. Bất kỳ đề xuất nào trong tương lai đưa ảnh thành viên vào một bề mặt thu tiền phải mang theo **hai thứ, không phải một**: (a) đồng ý riêng, có lưu log, của **từng** người có ảnh; (b) một câu trả lời cho *"trả thù lao thế nào"* — hoặc một thoả thuận bằng văn bản nói rõ các bên đồng ý không trả.
>
> Ghi vào ADR-000 dưới dạng ràng buộc, cùng chỗ với L1–L8.

### 3.0. Cái gì bị loại, và bị loại bởi cái gì

| Bề mặt | Ai chặn | Chặn kiểu gì |
|---|---|---|
| **IAP / subscription qua Apple–Google** | v2 §5 (không lên store) | Không tồn tại kênh. Cũng xoá 15–30% phí sàn |
| **Cosmetic / theme / skin bán trực tiếp** | v2 §6 mục 10 + §4.4 ("không phần thưởng ảo, không vật phẩm, không tiền tệ") + NĐ 174/2026 (60–200 triệu) | Chặn cứng, "không bao giờ". Cộng: r08 §3.2 — dưới 20.000 MAU mỗi bộ skin là **lỗ**; c-business §4.2(b) — khán giả 4 người thì kinh tế học địa vị sụp |
| **Gacha** | như trên + Apple 3.1.1 odds disclosure | Chặn cứng |
| **Sponsor / voucher** | NĐ 147 cấm khuyến mại có thưởng trong giao diện game; r08 §5.2 cần 100k–300k MAU; §5.3 collusion không chặn được bằng peer review | Chặn kép: luật + quy mô |
| **Paywall "khoá kho ký ức sau 90 ngày"** | c-business §3.4 | Bán đúng lúc cohort đã rụng quá nửa; **WTP âm sau khi nhóm tan**; và card của v2 được thiết kế để **đẹp khi screenshot** — kênh acquisition ăn thịt kênh monetization |
| **Gói cá nhân 199k/năm** | c-business §4.2(a) payer paradox | Người sẵn sàng trả là người đang thắng = người ít cần app nhất |
| **Quảng cáo trong sản phẩm** | v2 §6 mục 13 (khoá) + core loop 27 giây | Xem §3.4 — số liệu nói kể cả mở khoá cũng không đáng |

Còn lại đúng ba thứ — **và sau bảng phán quyết ngày 03/09/2026, cả ba đều đã bị đóng trong 12 tháng đầu.** Ba mục §3.1–§3.3 dưới đây được **giữ lại làm hồ sơ phân tích**, không còn là kế hoạch. Mỗi mục mở đầu bằng khối trạng thái nói rõ nó bị đóng bởi cái gì và mở lại bằng điều kiện nào.

### 3.1. P1 — "Bao sổ": bán EXPORT — **ĐÃ XOÁ (D-06)**

> ### 🚫 P1 BỊ XOÁ KHỎI MỌI KẾ HOẠCH — D-06, 03/09/2026
>
> **Lý do: không được bán một quyền luật định.** `05` §8.1 mục 7 công bố nghĩa vụ "cung cấp bản sao dữ liệu trong 10 ngày" (Luật 91/2025); ToS §8.2 điều 6 hứa "báo trước ≥14 ngày và cho tải ảnh về"; A38 hứa **đường tải về trước khi dọn sổ `archived`**. P1 bán **đúng thứ đó** với giá 99.000đ/sổ/năm. Bán quyền mà luật buộc phải cho không **là rủi ro pháp lý riêng, cộng thêm vào rủi ro giấy phép MXH đã có** — hai rủi ro cùng loại, không được cộng dồn.
>
> **Thay bằng (khuyến nghị D-06, 0 pw):** export **làm tay** — một truy vấn SQL + zip thủ công, SLA **10 ngày**, quy trình ghi vào `RUNBOOK.md`. Miễn phí, cho mọi người, khi được yêu cầu. Không có UI, không có nút, không có màn.
>
> **Điều kiện mở lại: KHÔNG CÓ.** Đây không phải một khoản cắt scope tạm thời — nó là một thứ không được phép bán. Nếu sau này có Giấy phép MXH và pháp nhân, thứ được bán phải là một cái **khác** export (ví dụ bản in độ phân giải cao), không phải chính bản sao dữ liệu.
>
> **Hệ quả kéo theo, phải ghi rõ:**
> - **+0,4 pw email magic link chết theo** (S05) — entitlement gắn với con người chỉ cần thiết khi có thứ để bán. Không bán ⇒ device token trong `localStorage` là đủ, đúng như v2 §5 thiết kế.
> - **T2 (Van Westendorp) mất đối tượng đo.** Giữ T2 hay không: xem §4.
> - **`c_g` và `P1` trong bảng tham số §6.1 trở thành tham số phản thực** — chúng mô tả một sản phẩm không tồn tại.

**Hồ sơ phân tích (giữ để không phải tính lại nếu G4 mở cửa sau 30/06/2027):** giá neo đề xuất 99.000đ/sổ/năm (Spotify Student VN 33.000đ/tháng [FACT]; ngân sách giải trí còn lại của Gen Z VN 20–50k/tháng [suy luận từ r08 §2.3]; chia 4,0 người/sổ (A70) = ~25.000đ/người/năm). Conversion neo: Discord **3,2–3,6% MAU** là **trần VAY MƯỢN** (A78) — Chốt Sổ là web, không IAP, thanh toán chuyển khoản tay; c-business §5 chứng minh con số 12%-of-active của r08 §7.2 sai và phải sửa về ≤3,5% MAU; cộng chiết khấu ma sát VietQR 40–60% [ước lượng] ⇒ `c_g` bi quan 0,8% · cơ sở 2% · lạc quan 5%. Ở 100.000 MAU (25.000 sổ) điều đó là **19,5 / 48,8 / 122 triệu/năm** — tất cả đều dưới ngưỡng lương 1 người ở §6.3.

### 3.2. P2 — "Sổ in Tết": vật lý hoá — **ĐÃ CẮT (S13)**

> ### ✂️ P2 BỊ CẮT KHỎI 12 THÁNG ĐẦU — S13, 03/09/2026
>
> **Ba lý do độc lập, mỗi lý do đủ để cắt một mình:**
> 1. **Pháp lý (A62).** Bán một cuốn sổ in là **hoạt động phát sinh doanh thu** — `05` §0 kết luận 3 cấm tuyệt đối trong 6 tháng đầu, kể cả "bán một cuốn sổ in" (nguyên văn).
> 2. **Sản phẩm (v2 §6 mục 19).** v2 đã cắt "in poster / vật thể" vì ops nặng với founder một mình. Thứ đã bị cắt quay lại thì mặc định bị cắt lần nữa (nguyên tắc 4).
> 3. **Giờ (A92).** 12 phút/đơn × 30 đơn = **6 giờ**, ăn thẳng vào trần vận hành **10 giờ/tuần**. Ở 100 đơn là 20 giờ — hai tuần vận hành, đúng mùa Tết, đúng lúc founder về quê (xem D-07).
>
> Cộng: nghĩa vụ thu **đồng ý theo Điều 32 BLDS 2015** của **mọi** người có ảnh trong cuốn sổ — không phải microcopy, là một bước bắt buộc có lưu log.
>
> **Điều kiện mở lại (cần CẢ BA):** (a) luật sư trả lời câu 3 của `05` §11 là **được phép phát sinh doanh thu** ở tier hiện tại, hoặc đã có Giấy phép MXH · (b) qua cổng **G4 — 30/06/2027** · (c) có khoản đối trừ **+0,6 pw** đã ghi vào `docs/adr/pw-ledger.md` (A87) — chưa có.
>
> **Cái KHÔNG bị cắt:** phép đo nhu cầu **T1** (fake door, 0đ, 0 pw) và **T4** (fake pre-order thu cam kết, KHÔNG thu tiền — A63) ở §4. Đo nhu cầu không phải bán hàng.

**Hồ sơ phân tích (giữ nguyên, không còn là kế hoạch).**

**Cơ chế.** Đúng một cửa sổ bán, **20/12 → 20/01** (trước Tết). Sản phẩm: cuốn sổ in A5, 60–100 trang, mỗi trang một ngày, ảnh thumbnail + nhãn ✓/💀, bìa ghi tên sổ + số ngày + số tấm. Đặt in qua nhà in POD, giao qua GHN/GHTK.

**Giá: 399.000đ/cuốn.** Giá in + ship VN [ước lượng, cần kiểm chứng bằng 1 báo giá thật] **200.000–240.000đ** ⇒ **biên gộp ~45% ≈ 175.000đ/cuốn**.

**Conversion ước tính:** `c_print` = **1,5%/sổ/năm** [ước lượng] — thấp hơn P1 vì đơn giá gấp 4, cao hơn về chất vì đây là dòng duy nhất trong toàn bộ hồ sơ nghiên cứu mà **có tiền lệ người Việt thực sự rút ví** (photobook, lịch Tết, quà nhóm).

| MAU | Sổ | Đơn/năm | Biên gộp/năm | **Giờ vận hành mùa Tết** |
|---|---|---|---|---|
| 10.000 | 2.500 | 38 | **6,7 triệu** | 7,6 giờ ✅ |
| 50.000 | 12.500 | 188 | **32,9 triệu** | 37,6 giờ ⚠️ |
| 100.000 | 25.000 | 375 | **65,6 triệu** | **75 giờ ❌** |

_(12 phút/đơn: dựng file in, đặt in, theo dõi giao, xử lý khiếu nại — [ước lượng])_

**Phá nguyên tắc nào?** Không phá §6. **Phá trần vận hành 10h/tuần (=40h/tháng) ở quy mô 50k+ MAU.** Và có một rào pháp lý cụ thể: in ảnh của 4 người khác ra giấy vật lý là **sử dụng hình ảnh cá nhân** theo Điều 32 BLDS 2015 ⇒ phải có **đồng ý của tất cả thành viên có ảnh trong cuốn sổ**, thu bằng một màn xác nhận trong app, lưu log. Không phải microcopy — là một bước bắt buộc.

**Giới hạn tự đặt bắt buộc nếu P2 từng được mở lại: 100 đơn/mùa, hết thì đóng.** Vượt trần giờ thì cắt đơn, không cắt giấc ngủ (đúng nguyên tắc v2 §9).

### 3.3. P3 — "Sổ tổ chức": B2B — **ĐÃ CẮT KHỎI 12 THÁNG ĐẦU (S11)**

> ### ✂️ P3 BỊ CẮT KHỎI 12 THÁNG ĐẦU — S11, 03/09/2026
>
> **Đây là scope creep lớn nhất của toàn hồ sơ**: nó được tài liệu này **tự nhận diện đúng** là phá ba thứ cùng lúc, rồi vẫn xếp "thứ tự thử: 1". Bảng phán quyết bác việc đó.
>
> **Ba thứ nó phá — chính tài liệu này liệt kê:**
> 1. **Định vị §1** — "nhóm bạn thân" biến mất khỏi câu định vị.
> 2. **Mặc định an toàn vị thành niên** — một lớp cấp 3 là nơi **<16 tuổi tập trung dày nhất**; Luật ANM 116/2025 Điều 16.2 buộc cha mẹ đứng tên. Với B2C chặn được bằng age gate (A47); với B2B, **khách hàng chính là** nơi có người dưới 16.
> 3. **Ràng buộc pháp nhân** — hợp đồng + hoá đơn VAT + vai **bên xử lý dữ liệu** theo Luật 91/2025. Founder chưa có pháp nhân, và v2 §12 cấm lập trong 6 tháng đầu.
>
> Cộng: **+0,8 pw** (multi-sổ admin, hoá đơn, hợp đồng) không có khoản đối trừ nào trong `docs/adr/pw-ledger.md` (A87), trong khi backlog đã là **7,25 pw trên trần 6,5 pw** (C14).
>
> **Điều kiện mở lại (cần CẢ BỐN):** (a) đã qua **G4 — 30/06/2027** · (b) có pháp nhân VN + đã ký được vai bên xử lý dữ liệu · (c) có phương án an toàn vị thành niên **bằng văn bản** cho ca "khách hàng là trường có học sinh <16" · (d) **+0,8 pw có khoản đối trừ đã ghi sổ cái**.
>
> **Hệ quả phải nhìn thẳng, không được làm mềm:** P3 là **phương án duy nhất trong toàn hồ sơ chạm 300 triệu/năm bằng hai chữ số khách hàng**. Cắt nó ⇒ **trong 12 tháng đầu không tồn tại phương án nào chạm ngưỡng thu nhập 1 người**. Đó là một **hệ quả đã được chọn**, không phải một thất bại chưa xảy ra.
>
> **Cái KHÔNG bị cắt:** **T5** — 3 cuộc gọi thăm dò, 3 giờ, 0đ, trong Bước 0 (§4). Nhưng T5 nay **chỉ ghi nhận sự thật**, không còn quyền mở cửa: dù T5 ra 3/3 nói con số ≥500k, P3 **vẫn đóng cho tới G4**. Kết quả T5 được cất vào ADR và đọc lại ngày 30/06/2027.

**Hồ sơ phân tích (giữ nguyên, không còn là kế hoạch).**

**Cơ chế.** Cùng một sản phẩm, khác khách. Một lớp học / CLB / phòng gym / trung tâm tiếng Anh có sẵn **nhóm Zalo** — đúng bối cảnh mà v2 được thiết kế cho. Người trả không phải người dùng: giáo viên, chủ phòng gym, chủ nhiệm CLB. Cái họ mua: **bằng chứng học viên có làm bài / có tập / có đi**, dạng sổ ảnh theo ngày, kèm export cuối khoá.

**Giá:** **1.500.000đ/tổ chức/tháng** cho sổ ≤50 người, hoặc **30.000đ/người/tháng**. Neo: r08 §8.3 ước 50–150k/người/**năm**; tôi đề xuất cao hơn vì bán theo tháng cho khoá học 2–3 tháng thì tổng chi vẫn ~60–90k/người/khoá, nằm trong dải đó.

| Số khách | Doanh thu/năm | Giờ bán + chăm/năm | Đạt ngưỡng 93,6tr? | Đạt ngưỡng 300tr? |
|---|---|---|---|---|
| 5 | 90 triệu | ~80 giờ (1,5h/tuần) | gần đạt | không |
| 10 | **180 triệu** | ~160 giờ (3,1h/tuần) | **✅** | không |
| 20 | **360 triệu** | ~320 giờ (6,2h/tuần) | ✅ | **✅** |
| 30 | 540 triệu | ~480 giờ (9,2h/tuần) | ✅ | ✅ — **sát trần 10h/tuần** |

_(4 giờ bán/khách + 1 giờ/tháng chăm sóc — [ước lượng])_

> **Con số này vẫn là con số gây sốc nhất trong tài liệu: 20 khách tổ chức = thu nhập 1 người. Cùng mức thu nhập đó ở B2C đòi 61.000 MAU** (giả định lạc quan nhất: giá 399k × `c_g` 5%) **hoặc 410.000 MAU** (giả định thực tế hơn: giá 99k × `c_g` 3% ⇒ `300.000.000 ÷ (0,03 × 99.000 × 0,985) = 102.531 sổ × 4,0 = 410.000 MAU`).
>
> ⚠️ **[03/09/2026] Nhưng nó KHÔNG còn là "con số quan trọng nhất", vì nó không còn dẫn tới một hành động nào trong 12 tháng tới.** S11 đã cắt P3. Con số quan trọng nhất trong tài liệu này sau phán quyết là **0đ** — doanh thu bắt buộc của 6 tháng đầu (A62) — và **−46 đến −116 triệu/năm**, biên thật ở §6.2. Câu trên được giữ nguyên vì nó vẫn đúng về số học và sẽ được đọc lại tại **G4 30/06/2027**.

**Phá nguyên tắc nào? Nhiều, và phải nói thẳng:**
- **Phá §1** — "nhóm bạn thân" biến mất khỏi câu định vị. Không thể vừa bán cho lớp học vừa nói "tối nào nhóm cũng chốt sổ".
- **Phá mặc định an toàn vị thành niên** — một lớp cấp 3 là nơi <16 tuổi tập trung dày nhất. Luật ANM 116/2025 Điều 16.2 buộc cha mẹ đứng tên. Với B2C có thể chặn bằng age gate; với B2B, khách hàng **chính là** trường có học sinh dưới 16.
- **Đòi pháp nhân + hợp đồng + hoá đơn VAT + vai trò bên xử lý dữ liệu** theo Luật 91/2025.
- **Đổi lại:** phụ thuộc Zalo — thứ chặn đường xuất khẩu ở §8 — **lại chính là lợi thế** ở đây, vì lớp học và phòng gym VN đã vận hành trên nhóm Zalo.

**Không được làm cả B2C và B2B ở MVP** (r08 §8.3 nói đúng). Nhưng **được phép thăm dò B2B bằng 3 cuộc gọi trong Bước 0** — chi phí 3 giờ, 0 đồng, xem §4 T5.

### 3.4. Quảng cáo — việc bàn giấy 3 giờ của §10(b), đã làm, kết quả ÂM

v2 §10(b) yêu cầu tính lại trần doanh thu bằng eCPM thật trước khi dùng con số 2,6 tỷ. Đây là phép tính đó.

| Tham số | Giá trị | Nhãn |
|---|---|---|
| eCPM AdMob VN — interstitial, cuối 2025 | **$1,51** | [FACT — MonetizeMore 2026 eCPM Insights] |
| eCPM AdMob VN — app-open, đỉnh 2025 | **$2,34** (Mỹ $10,51) | [FACT — nguồn trên] |
| eCPM **web display VN** (MREC/native trong webview) | **$0,25–0,60** `[dải nguồn thứ cấp thật còn rộng hơn: $0,04–1,00 — `11` §7.5, tra 04/09/2026]` | `[ước lượng thuần, KHÔNG có nguồn — con số có nguồn $1,51/$2,34 là eCPM in-app, không dùng được cho web]` (A77). Chốt Sổ không có inventory app ⇒ không dùng được AdMob; phải là AdSense/Ad Manager web, cầu thấp hơn hẳn |
| DAU/MAU | 33% | [suy luận — r04 mục tiêu "top"] |
| Impression/DAU/ngày | **1,2** | [ước lượng] — phiên 27 giây, đúng một vị trí trên màn Sổ hôm nay |

`Doanh thu/năm = MAU × 0,33 × 1,2 × 365 × eCPM ÷ 1000`

| MAU | eCPM $0,25 | **eCPM $0,35** | eCPM $0,60 |
|---|---|---|---|
| 10.000 | 9,5 triệu đ | **13,3 triệu đ** | 22,8 triệu đ |
| 100.000 | 95 triệu đ | **133 triệu đ** | 228 triệu đ |
| 1.000.000 | 950 triệu đ | **1,33 tỷ đ** | 2,28 tỷ đ |

**Kết luận, đóng lại mục §10(b):**
1. **Trần quảng cáo ở 1 triệu MAU = 1,3–2,3 tỷ VND/năm, tức KHÔNG cao hơn con số 2,6 tỷ IAP mà nó được kỳ vọng sửa.** Giả thuyết "cả 4 tài liệu tính trên đường ray sai, quảng cáo mới là đường ray đúng" — **bị bác bằng số**. Locket kiếm được nhiều từ quảng cáo vì Locket có **10 triệu lượt tải chỉ riêng VN và 80 triệu toàn cầu**, không phải vì eCPM VN cao.
2. **Nhưng có một tính chất thật và hữu ích:** ở 10.000 MAU, quảng cáo cho **13,3 triệu/năm** trong khi hạ tầng tốn **16,2 triệu/năm**. Ở ~12.000 MAU chúng bằng nhau. ⇒ **Quảng cáo không phải mô hình kinh doanh; nó là cách trả tiền điện, và nó không cần một người trả tiền nào.** Đó là ưu điểm thật so với subscription ở thị trường mà 7–10% game user VN từng trả một đồng [FACT — r02/Antom].
3. **Vẫn giữ khoá mục 13 của §6.** ⚠️ **[03/09/2026 — S16] Bản trước tự viết một điều kiện mở lại mới (`MAU ≥ 12.000` + H1 pass + định nghĩa A). Điều kiện đó BỊ CẮT.** Điều kiện mở lại là **điều kiện GỐC của v2 §6 mục 13** — "sau khi hoàn thành việc bàn giấy 3 giờ ở §10(b)" — **CỘNG một điều kiện pháp lý mới**:
>
> **Điều kiện mở lại quảng cáo, đủ cả ba:**
> - (a) **Việc bàn giấy 3 giờ ở v2 §10(b) đã hoàn thành** ✅ — chính mục §3.4 này, kết quả **phủ định** (xem điểm 1 ở trên).
> - (b) **Đã có Giấy phép MXH, hoặc luật sư trả lời bằng văn bản rằng quảng cáo không phải "hoạt động phát sinh doanh thu" bị cấm ở tier Giấy xác nhận thông báo** (`05` §0 kết luận 3, câu hỏi số 3 ở `05` §11). Quảng cáo **là** doanh thu ⇒ A62 cấm tuyệt đối trong 6 tháng đầu. Đây là điều kiện **cứng**, không thương lượng bằng số MAU.
> - (c) **Đã qua G4 — 30/06/2027.**
>
> Con số `MAU ≥ 12.000` (điểm hoà giữa doanh thu quảng cáo và chi phí hạ tầng) **không còn là điều kiện mở** — nó chỉ là một ghi chú kỹ thuật để biết dưới ngưỡng đó thì quảng cáo không đáng bàn kể cả khi hợp pháp. Dưới ngưỡng đó, quảng cáo đổi 27 giây sạch lấy vài triệu đồng và làm tăng rủi ro Zalo cảnh báo domain (v2 §9 mục 7) — một đổi chác tệ.

### 3.5. Bảng so ba phương án

| | P1 Bao sổ | P2 Sổ in Tết | P3 B2B |
|---|---|---|---|
| Doanh thu ở 100k MAU (cơ sở) | 48,8 triệu/năm | 65,6 triệu/năm | không phụ thuộc MAU |
| Đạt 93,6tr (ngưỡng giờ)? | cần `c_g`≥3,8% @100k | cần ~535 đơn (vỡ giờ) | **10 khách** |
| Đạt 300tr (lương 1 người)? | 61k MAU (lạc quan nhất) – 615k MAU (cơ sở) | không bao giờ (đòi ~1.715 đơn/mùa = 343 giờ) | **20 khách** |
| pw phải trả thêm | +0,4 (email magic link) | +0,6 (dựng file in, đơn hàng, đồng ý Điều 32) | +0,8 (multi-sổ admin, hoá đơn, hợp đồng) |
| Phá nguyên tắc | luật đánh đổi §4.10 | trần giờ §9 ở quy mô | **định vị §1 + an toàn vị thành niên** |
| Rủi ro pháp lý riêng | **bán một quyền luật định** (D-06) | Điều 32 BLDS (in ảnh) | pháp nhân, ANM 116/2025, bên xử lý dữ liệu |
| **Trạng thái sau phán quyết 03/09/2026** | **XOÁ vĩnh viễn** — D-06 | **CẮT 12 tháng đầu** — S13 | **CẮT 12 tháng đầu** — S11 |
| **Thứ tự thử** | — | — | — |

> ⚠️ **[03/09/2026] Cột "Thứ tự thử" đã bị xoá, không thay bằng thứ tự khác.** Trong 12 tháng đầu **không có phương án nào để thử**, vì doanh thu = 0đ tuyệt đối (A62). Việc duy nhất còn sống ở §4 là **đo xem ai sẽ trả tiền** — không phải thử bán. Thứ tự sẽ được lập lại **tại G4 — 30/06/2027**, dựa trên câu trả lời của luật sư (D-03) và kết quả T1/T4/T5.
>
> **Dòng "pw phải trả thêm" đọc như bối cảnh, không phải ngân sách** (C08/A87): cả ba khoản +0,4 / +0,6 / +0,8 pw **đều không có khoản đối trừ trong `docs/adr/pw-ledger.md`**, và sổ cái đó là nơi DUY NHẤT ghi nhận pw. Tài liệu này **không xin một pw nào**.

---

## 4. KHI NÀO BẮT ĐẦU THU TIỀN

Phản biện c-business §8 nói đúng và tài liệu này chấp nhận nguyên văn: **"không thu tiền ở MVP" và "không BIẾT ai sẽ trả" là hai thứ khác nhau, và founder đang gộp làm một.** Geneva có retention tốt, có nhóm bạn yêu app, và tạo ra 0 đồng — **retention không phân biệt được Locket với Geneva.**

**Quyết định (sửa 03/09/2026): KHÔNG thu tiền thật trước cổng G4 — 30/06/2027, và không bao giờ trước khi có ý kiến luật sư BẰNG VĂN BẢN cho câu hỏi số 3 ở `05` §11. ĐO willingness-to-pay từ ngày 15 (22/09/2026), tức NGAY SAU Bước 0.**

> ⚠️ **Bản trước ghi "không thu tiền thật trước 01/03/2027" và "đo từ ngày 12 của Bước 0". Cả hai đều sai sau phán quyết.** (a) Ngày 01/03/2027 là mốc "hết 6 tháng" tự đặt; A62 + D-03 làm mốc thật trở thành **G4 30/06/2027**, và mốc đó **có điều kiện**, không phải một ngày tự động mở. (b) Ngày 12 rơi **vào trong** Bước 0 (08/09→21/09 — A107/A108) và va vào cửa sổ im lặng; đã dời sang **ngày 15 = 22/09/2026**.

> **[CHỐT 2026-08-28 — QĐ-01] Ràng buộc pháp lý đè lên toàn bộ §4 này.** `05-lo-trinh-phap-ly.md` §0 kết luận 3 và §2 GIAI ĐOẠN 4: nếu Chốt Sổ là MXH mà chỉ có Giấy xác nhận thông báo, thì **mọi hoạt động phát sinh doanh thu — kể cả quảng cáo, kể cả donate, kể cả bán một cuốn sổ in — đều dành riêng cho MXH đã được cấp Giấy phép**. Vì vậy: **doanh thu tuyệt đối bằng 0 cho tới khi có ý kiến luật sư bằng văn bản cho câu hỏi số 3 ở §11 của `05`.** Bản trước của T4 (thu 399k × 30 suất qua chuyển khoản tay, tư cách cá nhân, chưa có TNHH) là **hành vi có thể vi phạm** và đã bị thay bằng fake pre-order. Nếu luật sư xác nhận cấm ⇒ mọi mốc doanh thu trong §7 phải đọc lại theo §7 ghi chú [CHỐT 2026-08-28].
>
> **[03/09/2026 — C12/S12] HAI điều kiện độc lập cùng cấm T4 thu tiền, mỗi điều kiện đủ một mình:**
> - **(a) Pháp lý** — `05` §0 kết luận 3: ở tier Giấy xác nhận thông báo, **mọi hoạt động phát sinh doanh thu** dành riêng cho MXH đã được cấp Giấy phép.
> - **(b) Sản phẩm** — v2 §6 mục 19 khoá doanh thu sau điều kiện `≥20.000 MAU **VÀ** ≥1 người khác làm ops`. Ở thời điểm T4 (20/12/2026) dự án có **~120 người và 1 người vận hành** ⇒ **T4 vi phạm cả hai vế** của chính điều kiện mở khoá của v2.
>
> Nghĩa là: kể cả khi luật sư trả lời "được thu", T4 **vẫn không được thu tiền**, vì điều kiện (b) chưa thoả. Hai khoá này **không cộng dồn thành một** — phải gỡ cả hai.

**Bốn phép đo còn sống, xếp theo ngày, tổng chi phí 0 đồng + 0 pw.** (Phép đo thứ năm — **T3 fake door trong sản phẩm, +0,2 pw — ĐÃ BỊ CẮT**, xem khối dưới bảng.)

| # | Tên | Khi nào | Chi phí | Cách làm | Ngưỡng đọc kết quả |
|---|---|---|---|---|---|
| **T1** | **Fake door "sổ in"** | **Ngày 15 = 22/09/2026** — một ngày SAU Bước 0 (A108: Bước 0 kết thúc 21/09), gửi **tin nhắn riêng**, không vào sổ | 0đ, 0 pw | Founder nhắn **đúng một lần, RIÊNG cho người trực của từng sổ trong 8 sổ** (không post vào nhóm — Bước 0 đã kết thúc nhưng giữ nguyên giao thức A97 để không nhiễu số liệu đang đọc): _"Cuối năm tao định in cuốn sổ này ra giấy — ảnh cả nhóm, mỗi trang một ngày. Khoảng 400k/cuốn. Nhóm mày thấy đáng không?"_ | **≥3/8 sổ trả lời "đáng" = WTP tồn tại ở hình dạng vật lý.** 0/8 = P2 chết. ⚠️ **Không dùng "thả tim" làm đơn vị đo** — nút thả tim đã bị CẮT khỏi MVP-0 (C03) và bộ chỉ số tác hại không còn HM-1/HM-3; dùng một cử chỉ đã bị xoá khỏi sản phẩm làm thước đo là mượn một thứ không tồn tại |
| **T2** | **Van Westendorp 4 câu** | **Ngày 15 = 22/09/2026**, cùng T1 | 0đ, 0 pw | Google Form gửi ~35 người Bước 0. 4 câu về **cuốn sổ in** (P2) — **KHÔNG hỏi về export/tải dữ liệu nữa**, vì P1 đã bị xoá (D-06) và export nay là nghĩa vụ miễn phí: rẻ đến mức nghi ngờ / rẻ / bắt đầu đắt / đắt không mua | Ra dải giá chấp nhận (PMC/OPP) cho **bản in**. **OPP < 200.000đ ⇒ P2 không bao giờ đáng mở lại** (giá vốn in + ship đã là 200–240k) |
| ~~**T3**~~ | ~~Fake door thật trong sản phẩm~~ | — | — | **ĐÃ CẮT — S04.** Xem khối dưới bảng | — |
| **T4** | **Fake pre-order — thu CAM KẾT, KHÔNG thu tiền** [CHỐT 2026-08-28, QĐ-01] | **20/12/2026 – 20/01/2027**, chỉ khi T1 pass | 0 pw code | 30 suất "Sổ in Tết 2027", niêm yết 399k. Google Form thu **tên + số điện thoại + câu "tôi đồng ý đặt trước"**. **KHÔNG có số tài khoản, KHÔNG có chuyển khoản, KHÔNG nhận một đồng nào.** Founder gọi lại xác nhận từng người sau khi có ý kiến luật sư (câu 3, §11 của `05`) | **≥10 người để lại SĐT trong 14 ngày = WTP thật ở mức cam kết.** <3 người = P2 chết. Lưu ý: đây là tín hiệu YẾU HƠN tiền thật khoảng 2–3 lần [ước lượng] — phải đọc kèm hệ số chiết khấu đó, không được coi 10 cam kết = 10 đơn |
| **T5** | **3 cuộc gọi B2B** — **chỉ ghi nhận, không mở cửa** | **Trong Bước 0**, song song | 3 giờ | Gọi 1 giáo viên trung tâm tiếng Anh, 1 chủ phòng gym, 1 chủ nhiệm CLB sinh viên. Đúng một câu hỏi: _"Nếu có một cái sổ ảnh hằng ngày của lớp/hội viên, chạy ngay trong nhóm Zalo có sẵn, anh/chị trả bao nhiêu một tháng?"_ | **≥2/3 nói ra một con số ≥500.000đ = tín hiệu B2B tồn tại.** ⚠️ **KHÔNG còn nghĩa "cửa B2B mở"** — P3 đã bị cắt khỏi 12 tháng đầu (S11); kết quả được cất vào ADR và đọc lại tại **G4 30/06/2027**. Ghi nguyên văn, không diễn giải |

> ### ✂️ T3 — FAKE DOOR TRONG SẢN PHẨM (+0,2 pw) BỊ CẮT — S04, 03/09/2026
>
> **Hai lý do độc lập:**
> 1. **Nó chiếm slot 8** mà v2 §5 dành riêng cho "màn được **Bước 0 chứng minh** là bắt buộc" (A79: **7 màn + 1 slot dự phòng ĐỂ TRỐNG**). C44 phán quyết dứt khoát: **một fake door bán hàng không phải phát hiện của Bước 0**. Yêu cầu lấp slot 8 bằng "Bao cả sổ" **BỊ TỪ CHỐI**.
> 2. **Nó là một bề mặt thanh toán**, mà doanh thu = **0đ tuyệt đối** trong 6 tháng đầu (A62/C01). Beta chạy 02/12/2026; tuần 4 của beta là cuối 12/2026 — nằm gọn trong cửa sổ cấm.
>
> **Hệ quả phải nhìn thẳng, không được làm mềm: MVP-0 KHÔNG CÓ phép đo ý định trả tiền nào chạy trong sản phẩm.** Mọi tín hiệu WTP trong 12 tháng đầu đến từ **T1, T2, T4, T5 — tất cả đều ngoài sản phẩm**, đều qua tin nhắn/Google Form, và đều **yếu hơn một cú chạm thật** [ước lượng, hệ số chiết khấu 2–3 lần, xem T4]. Đây là **điểm mù đã biết và đã được chọn**, không phải một thiếu sót.
>
> **Điều kiện mở lại (cần CẢ BA):** (a) Bước 0 chứng minh **một màn khác** là bắt buộc và slot 8 vẫn còn trống sau đó · (b) luật sư xác nhận được phép phát sinh doanh thu · (c) **+0,2 pw có khoản đối trừ đã ghi vào `docs/adr/pw-ledger.md`** (A87) — chưa có, và khoản "nút thả tim 0,2 pw" **không dùng được** vì đã bị chi (C08).

**Hai luật của phép đo giá:**
1. **Cửa sổ WTP cao nhất không phải tháng thứ 6.** c-business §3.4 chứng minh paywall-90-ngày đặt vào đúng lúc cohort đã rụng quá nửa. Với v2, đỉnh cảm xúc là **mốc 100 tấm** và **cuối tháng 12/đầu tháng 1** (Tết). **T4 đặt đúng điểm thứ hai.** Điểm thứ nhất nay **không còn phép đo nào đứng ở đó** — hệ quả trực tiếp của việc cắt T3.
2. **Không được để phép đo giá làm nhiễu H1/H2/H3.** Bước 0 chạy **08/09 → 21/09/2026** (A107/A108) và có **hai** ngày cửa sổ im lặng (**15/09 và 18/09** — A98; ngày thứ ba 21/09 đã bị bỏ). **Chốt: T1 và T2 chạy ngày 15 = 22/09/2026, tức một ngày SAU Bước 0**, gửi qua **tin nhắn riêng** chứ không vào sổ. Bảo vệ H2 quan trọng hơn sớm ba ngày. ⚠️ Bản trước ghi T1 "ngày 12 (19/09)" ở bảng nhưng "ngày 15" ở phần luật — **mâu thuẫn nội bộ, đã sửa về ngày 15 (số thận trọng hơn)**.

> ⚠️ **Lưu ý về A97 — giao thức cửa sổ im lặng.** Trong ngày cửa sổ im lặng, founder **làm card rồi gửi RIÊNG cho người trực**, tuyệt đối **không post, không nhắc, không trả lời trong nhóm**. T1 là một tin nhắn founder gửi vào nhóm ⇒ nó **không được rơi vào bất kỳ ngày im lặng nào** (A98: **15/09 và 18/09/2026**). Việc dời T1 sang 22/09 làm điều kiện này thoả **tự động**.

---

## 5. KIỂM SOÁT CHI PHÍ BẮT BUỘC TỪ NGÀY ĐẦU

Mỗi dòng dưới đây phải nằm trong code **trước** khi có user thứ 100. Sửa sau đắt gấp 10 lần.

| # | Giới hạn | Giá trị số | Lý do chi phí | User có thấy khó chịu? |
|---|---|---|---|---|
| 1 | Nén ảnh client-side | cạnh dài **1080px, JPEG q=0,72 → ~110 KB** `[chưa đo — A37]` | Ảnh gốc điện thoại 2–4 MB ⇒ giảm **20–36×** băng thông upload và storage | **Không** — mắt thường không phân biệt ở kích thước hiển thị |
| 2 | Thumbnail giữ vĩnh viễn | **320px, ~18 KB** | Giảm **6,1×** storage tích luỹ so với giữ ảnh 110 KB | Nhẹ — không zoom được ảnh cũ. Chính giới hạn này làm P1 (export) có giá trị |
| 3 | **TTL ảnh gốc** | **72 giờ** | Giữ dung lượng thường trực ở mức phẳng (175 KB/user) thay vì tăng tuyến tính. Kiêm lá chắn Điều 32 BLDS + NĐ 53/2022 | Nhẹ, nếu nói trước ở màn Nộp bằng một dòng |
| 4 | **1 PUT/ngày thay vì 2** (cân nhắc: chỉ lưu thumbnail, bỏ hẳn ảnh gốc) | 60 → **30 PUT/user/tháng** | R2 Class A là **47% chi phí biến đổi**. Cắt còn ~8đ/user/tháng | Không. ⚠️ **[03/09/2026] Lý do đánh đổi đã đổi:** P1 bị xoá (D-06) nên đây **không còn là "mất khả năng bán export"**. Cái thật sự mất là **nội dung bản sao dữ liệu luật định** (`05` §8.1 mục 7): bỏ ảnh gốc ⇒ bản sao chỉ có thumbnail 320px. Vì TTL ảnh gốc là **72 giờ** (A36) nên bản sao vốn **chưa bao giờ** chứa ảnh gốc quá 3 ngày tuổi — chênh lệch thật là nhỏ hơn bản trước tưởng |
| 5 | Ảnh phục vụ **trực tiếp từ R2**, không qua Vercel | 0 byte ảnh qua Vercel | R2 egress **$0** vs Vercel **$0,15/GB**. Ở 100k MAU đây là chênh **$45–90/tháng** | Không |
| 6 | Trần 1 tấm/người/ngày, nộp lại **ghi đè** | 1 | Chặn cứng trần storage ở `A × 365 × 18 KB/năm` | Không — đã là nguyên tắc sản phẩm |
| 7 | Trần thành viên/sổ | **8** (A46, thực thi bằng **trigger**) | Chặn fanout đọc (mỗi lần mở sổ tải N thumbnail). Kiêm ràng buộc "nhóm kín" cho lập luận không-phải-MXH. **Kéo theo lưới ảnh trên card tối đa 8 ô** (C49/A100): lưới **thích ứng theo số người ĐÃ NỘP** — 1 · 1×2 · 2×2 · 2×3 · **2×4**; ô của người vắng **KHÔNG TỒN TẠI** (không ô xám, không silhouette, không tên). Fixture snapshot test bắt buộc: **8 người** | Không (nhóm bạn thân điển hình 4–6) |
| 8 | Trần số sổ/thiết bị | **1 ở MVP** [CHỐT 2026-08-28, QĐ-08] · 3 khi mở đa sổ ở v1.1 | v2 §6 mục 14 khoá đa sổ trong UI ở MVP, nên trần 3 chưa có nghĩa. Giữ dòng này như **hằng số đã đặt trước** cho ngày mở nút "Mở sổ mới"; khoá CSDL dùng `UNIQUE(book_id, person_id, book_date)` của `04` §1.4 (KHÔNG dùng khoá `(person_id, logical_date)` — khoá đó chặn cứng đa sổ vĩnh viễn) | Rất ít |
| 9 | Rate limit upload | **10 tấm/giờ/thiết bị** — và **sáu luật nữa** ở `11` §2.1 (đáng chú ý: `code6` 5 sai/giờ/thiết bị · 20/giờ/IP · **500/giờ toàn dịch vụ ⇒ ngắt mạch 60 phút**; report **tối đa 3 tấm đang ẩn/người**) | 🔧 **[SỬA 04/09/2026 — lý do cũ sai 490 lần].** Bản cũ ghi *"chặn 1 script đẩy 5.000 ảnh = **$22** Class A"*. Số học thật: 5.000 ảnh × 2 PUT = 10.000 thao tác Class A × **$4,50/triệu** [KIỂM CHỨNG] = **$0,045**. Muốn tốn $22 phải đẩy 4,9 **triệu** thao tác. **Lý do đúng để vẫn giữ luật này:** (a) **trách nhiệm nội dung** — 5.000 ảnh lạ là 5.000 tấm founder phải chịu trách nhiệm theo NĐ 147/2024 và Apple 1.2/Play UGC; (b) phình hàng DB và làm hỏng mọi mẫu số của `06`; (c) đốt free tier Class A (1 triệu/tháng) trong ~1,2 ngày. **KHÔNG phải vì tiền storage.** Xem `11` §2.4 | Không |
| 10 | Trần kích thước file nhận | **8 MB trước nén**, lớn hơn thì từ chối tại client | Chặn upload frame video / ảnh RAW | Không |
| 11 | **Cache card**: render 1 lần/sổ/ngày, lưu R2, các lần bấm sau trả file cũ | 1 render/sổ/ngày | Ngăn 1 sổ bấm Chốt sổ 50 lần = 50× CPU satori | Không — card một ngày vốn không đổi sau 21:00 |
| 12 | **Dọn sổ chết** — [CHỐT 2026-08-28, QĐ-11] **KHÔNG xoá thumbnail** | 0 tấm trong **60 ngày** → thông báo trong app · **180 ngày** → chuyển thumbnail sang lớp lưu trữ lạnh (R2 Infrequent Access) và **giữ nguyên**. Chỉ xoá khi **mọi** thành viên đã rời sổ (`book.status = archived`) + báo trước **30 ngày** + có đường tải về. ⚠️ **Đường tải về đó CHƯA TỒN TẠI và không nằm trong bảng pw nào (D-06)** — khuyến nghị: **bản làm tay, 0 pw**, truy vấn SQL + zip thủ công, SLA 10 ngày, ghi vào `RUNBOOK.md`. **Không được xoá một sổ `archived` nào trước khi quy trình đó có thật** | Kinh tế không biện minh được việc xoá: ở **10.000 sổ**, toàn bộ thumbnail ≈ **200 GB ≈ $3/tháng** (bảng `04` §6.1). Đổi lại là phá lời hứa "thumbnail giữ vĩnh viễn" của v2 §4.2, `04` §6.1 và `08` §7.2 — đúng tài sản làm nên nguyên tắc P4 và toàn bộ giá trị của sổ ngủ đông | **Không** |
| 13 | TTL event analytics thô | **90 ngày**, sau đó chỉ giữ tổng hợp cấp sổ | Giữ Supabase dưới trần Pro 8 GB tới ~80k MAU | Không |
| 14 | **Không SMS OTP** dưới ngưỡng pháp lý — [CHỐT 2026-08-28, QĐ-04] **hai counter, không phải con số 700** | `monthly_visits`: vàng **6.000** / đỏ **8.500** · `monthly_active_persons`: vàng **600** / đỏ **850** | Ngưỡng NĐ 147/2024 là **OR** (`10.000 lượt truy cập/tháng` HOẶC `1.000 người dùng thường xuyên/tháng`), và nhánh lượt-truy-cập **bind trước ~2,5 lần** (`05` §0 kết luận 2). Con số 700 cũ báo động muộn 2,5 lần. 1 SMS = 7.400đ = **41 năm** chi phí biến đổi của user đó | Không (v2 đã không có màn đăng nhập) |
| 15 | **Không ZNS** làm kênh mặc định | 0 tin | **36.000đ/sổ/tháng** (A70: 4,0 người/sổ) = **~200 năm** chi phí biến đổi/user | Không |
| 16 | Đổi kèo | **1 lần/30 ngày** | Không phải chi phí hạ tầng — chi phí **hỗ trợ** (mỗi lần đổi sinh câu hỏi) | Nhẹ, đã là nguyên tắc sản phẩm |

> **[03/09/2026 — A57/A73] Hành động bắt buộc khi hai counter ở mục 14 bật đèn, viết ra để khỏi phải nghĩ lúc nó xảy ra:**
>
> | Đèn | Ngưỡng | Quy đổi ra sổ (A73: 25 lượt/người/tháng `[ước lượng, ảnh hưởng 🔴 Rất cao]` ÷ A = 4,0) | Việc phải làm **ngay trong tuần** |
> |---|---|---|---|
> | 🟡 **Vàng** | `monthly_visits` ≥ **6.000** HOẶC `monthly_active_persons` ≥ **600** | 6.000 ÷ 25 = 240 người ÷ 4,0 = **60 sổ** | Bắt đầu **soạn hồ sơ Giấy phép MXH** (A57) — 3–6 tháng, đòi **pháp nhân VN** + **người chịu trách nhiệm nội dung quốc tịch VN**. Cả hai thứ đó founder chưa có |
> | 🔴 **Đỏ** | `monthly_visits` ≥ **8.500** HOẶC `monthly_active_persons` ≥ **850** | 8.500 lượt ≈ **85 sổ** | **Dừng nhận sổ mới ngay trong ngày** (A58) |
> | ⚫ **Ngưỡng luật** | `10.000 lượt/tháng` HOẶC `1.000 người/tháng` (NĐ 147/2024) | 10.000 lượt ≈ **100 sổ** | Đã muộn |
>
> **Hệ quả cho kế hoạch: trần 60 sổ là trần PHÁP LÝ (A93), không phải trần vận hành.** Trần vận hành là **35 sổ sống cùng lúc** (A92) và nó chạm trước. Hai con số này **không được lẫn với nhau**, và **không nới bằng cách hỏi lại**.

**Một dòng cảnh báo cứng trong dashboard, không phải một việc để nhớ:** chi phí hạ tầng vượt **$60/tháng** (A75) trong khi doanh thu = 0 ⇒ đó là **lỗi cấu hình, không phải dấu hiệu quy mô**. Dừng viết feature, đi đọc hoá đơn. (Doanh thu = 0 là **trạng thái bắt buộc** theo A62, nên vế "trong khi doanh thu = 0" luôn đúng trong 6 tháng đầu — điều kiện thực chất chỉ là **>$60/tháng**.)

---

## 6. UNIT ECONOMICS — 3 KỊCH BẢN, MỌI GIẢ ĐỊNH LỘ RA THÀNH THAM SỐ

### 6.1. Bảng tham số (đây là bảng để sửa số, đừng sửa ở nơi khác)

| Ký hiệu | Tham số | Bi quan | **Cơ sở** | Lạc quan | Nhãn |
|---|---|---|---|---|---|
| `S12` | Số sổ active ở tháng 12 | 40 | **800** | 6.000 | [ước lượng] |
| `A` | Người active/sổ | **4,0** | **4,0** | **4,0** | **A70 — hệ số DUY NHẤT của toàn hồ sơ**, `[ước lượng cho tới khi Bước 0 đo được]`. Không được dùng 3,0/4,5 |
| `MAU` | `= S12 × A` | **160** | **3.200** | **24.000** | số học |
| `q_c` | Tỉ lệ có mặt | 0,40 | **0,53** | 0,60 | v2 §4.5, `[suy luận, chưa đo — giả thuyết H2]` (A17) |
| `DAU/MAU` | | 0,25 | **0,33** | 0,40 | [suy luận — r04] |
| ~~`c_g`~~ | ~~% sổ trả P1~~ | 0,8% | **2,0%** | 5,0% | **PHẢN THỰC** — P1 đã XOÁ (D-06). Giữ để bảng §6.2 đọc được |
| ~~`P1`~~ | ~~Giá bao sổ/năm~~ | 99.000đ | **99.000đ** | 99.000đ | **PHẢN THỰC** — D-06 |
| ~~`c_pr`~~ | ~~% sổ đặt sổ in~~ | 0% | **1,5%** | 2,5% | **PHẢN THỰC** — P2 đã CẮT (S13) |
| ~~`M_pr`~~ | ~~Biên gộp/cuốn~~ | — | **175.000đ** | 175.000đ | **PHẢN THỰC** — S13 |
| `f` | Tỉ lệ thực nhận (VietQR) | 0,985 | **0,985** | 0,985 | [FACT — cổng 1–3%] · phản thực cùng `c_g` |
| `t` | Thuế | 0 | **0** | 0 | Dưới ngưỡng miễn — §9, **cần kiểm chứng** |
| `Cv` | Chi phí biến đổi/user/tháng | 20đ | **15đ** | 12đ | §2.1 |
| `Cf` | Chi phí cố định/tháng | **730.000đ** | **1.000.000đ** | **1.560.000đ** | §2.2 — **sửa 03/09/2026**, xem ghi chú dưới bảng |
| `H` | Giờ vận hành/tuần | 4 | **8** | **10** | v2 §9 + A92 — **trần cứng 10**, lạc quan **chạm trần** |
| `w` | Giá giờ founder | 180.000đ | **180.000đ** | 180.000đ | [ước lượng] |

> **[03/09/2026] Hai tham số phải sửa vì chúng mâu thuẫn với hằng số chuẩn — và cả hai đều kéo theo bảng §6.2.**
>
> 1. **`Cf` bi quan 78.000đ và cơ sở 500.000đ đều BẤT KHẢ THI sau A74.** Supabase Pro **$25/tháng là bắt buộc từ ngày beta chạy 02/12/2026**, và năm mô hình (09/2026→09/2027) có **10 tháng nằm sau ngày đó**. Sàn tuyệt đối của `Cf` vì vậy là **$28 ≈ 730.000đ** — đúng cận dưới của dải beta A74, không phải 78.000đ ($3, con số của Bước 0). Cơ sở ở 3.200 MAU nằm giữa beta ($28–37) và mốc 10k MAU ($52) ⇒ lấy **$38 ≈ 1.000.000đ** (số thận trọng hơn 500.000đ). Lạc quan **24.000 MAU** ≈ mốc 30k MAU = **$60 ≈ 1.560.000đ** — trùng **đúng ngưỡng đèn báo động A75**, tức kịch bản lạc quan chạy sát mép cảnh báo chi phí và phải được đọc như vậy (giữ nguyên 1.560.000đ dù MAU hạ từ 27.000 xuống 24.000: đây là **số thận trọng hơn**, và 24.000 MAU vẫn gần mốc 30k hơn mốc 10k).
> 2. **`H` lạc quan 12 giờ/tuần VƯỢT trần vận hành 10 giờ/tuần (A92).** Một tham số không được phép nhận giá trị vi phạm hằng số của chính hồ sơ. Hạ về **10** — và ghi rõ: ở kịch bản lạc quan (6.000 sổ) trần vận hành **đã vỡ từ lâu** theo A92 (35 sổ sống cùng lúc), nên 10 giờ/tuần ở đó là một **giả định không có thật**, giữ chỉ để bảng cộng được.
> ### 🔴 [BỔ SUNG 04/09/2026 — `11` §3.3] `Cf` THIẾU MỘT KHOẢN: Vercel Hobby là gói PHI THƯƠNG MẠI
>
> Mọi con số `Cf` ở trên giả định **Vercel Hobby = $0**. Điều đó chỉ đúng khi **doanh thu = 0đ tuyệt đối** (A62) — và A62 nay đã được xác minh là **nghĩa vụ luật định**, không phải lựa chọn (NĐ 147/2024 Điều 24 khoản 6 điểm d, `11` §6 #2).
>
> **Ngày đầu tiên có MỘT đồng doanh thu — kể cả một đồng quảng cáo, kể cả một khoản pre-order — Vercel Hobby không dùng được nữa, phải lên Pro $20/tháng** `[xác minh nguồn thứ cấp, `11` §7.1]`.
>
> | | Bi quan | Cơ sở | Lạc quan |
> |---|---|---|---|
> | `Cf` hiện tại (doanh thu 0đ) | 730.000đ | 1.000.000đ | 1.560.000đ |
> | **`Cf` ở kịch bản CÓ doanh thu (+$20 ≈ 520.000đ/tháng)** | **1.250.000đ** | **1.520.000đ** | **2.080.000đ** |
> | Chênh/năm | **+6,24 triệu** | **+6,24 triệu** | **+6,24 triệu** |
>
> **Đây là khoản chưa có trong bảng nào của hồ sơ.** Nó phải được cộng vào giá vốn của **mọi** nhánh doanh thu (T4, quảng cáo, và mọi thứ mở lại sau G4) **trước** khi tính lãi. Ở ca bi quan (doanh thu năm 1 dưới 6,24 triệu) khoản này một mình đủ **lật dấu của biên**. Nó cũng là một lập luận độc lập nữa cho khuyến nghị **D-04 = B** (cố ý giữ nhỏ): giữ doanh thu ở 0đ giữ luôn hạ tầng ở $0.
>
> 3. **`A` phải là 4,0 ở CẢ BA cột (A70).** Bản trước dùng 3,0 / 4,0 / 4,5 như một tham số nhạy cảm. A70 nói thẳng: **4,0 là hệ số quy đổi sổ↔người DUY NHẤT của toàn hồ sơ**, và §6.1 chính là bảng quy đổi MAU↔sổ. Hệ quả: `MAU` bi quan **160** (không 120) và lạc quan **24.000** (không 27.000). Mọi ô dẫn xuất trong §6.2 đã tính lại theo hai số này.

### 6.2. Kết quả năm 1 (tháng 09/2026 → 09/2027)

> ⚠️ **[03/09/2026] Hai cột doanh thu dưới đây là MÔ HÌNH PHẢN THỰC, không phải dự báo.** P1 đã XOÁ (D-06), P2 đã CẮT (S13), P3 đã CẮT (S11), và A62 cấm **mọi** doanh thu trong 6 tháng đầu. Doanh thu thật của năm mô hình này là **0đ ở cả ba kịch bản**. Bảng giữ hai dòng doanh thu vì chúng trả lời một câu hỏi vẫn còn giá trị — *"nếu được phép bán, có đủ không?"* — và câu trả lời là **không, ở cả ba kịch bản**. Dòng cuối bảng cho con số thật.

| Dòng | Bi quan | **Cơ sở** | Lạc quan |
|---|---|---|---|
| Số sổ tháng 12 (`S12`) | 40 | **800** | 6.000 |
| MAU cuối kỳ (`S12 × 4,0`) | **160** | **3.200** | **24.000** |
| _(phản thực)_ Doanh thu P1 (`S12 × c_g × P1 × f`) | 31.000đ | **1,56 triệu** | 29,3 triệu |
| _(phản thực)_ Doanh thu P2 (`S12 × c_pr × M_pr`) | 0 | **2,10 triệu** | 26,3 triệu |
| _(phản thực)_ **Tổng doanh thu ròng** | **31.000đ** | **3,66 triệu** | **55,6 triệu** |
| Chi phí hạ tầng (`Cf×12 + MAU×Cv×12`) | **8,80 triệu** | **12,58 triệu** | **22,18 triệu** |
| _(phản thực)_ **Biên trước công founder** | **−8,77 triệu** | **−8,92 triệu** | **+33,4 triệu** |
| Chi phí cơ hội vận hành (`H×52×w`) | 37,4 triệu | **74,9 triệu** | **93,6 triệu** |
| _(phản thực)_ **Biên sau công founder** | **−46,2 triệu** | **−83,8 triệu** | **−60,2 triệu** |
| _(phản thực)_ Doanh thu/MAU/năm | 194đ | **1.144đ** | 2.317đ |
| **LTV/CAC** | — | **không áp dụng: CAC = 0** | — |
| 🔴 **DOANH THU THẬT (A62 + D-06 + S11 + S13)** | **0đ** | **0đ** | **0đ** |
| 🔴 **BIÊN THẬT sau công founder** | **−46,2 triệu** | **−87,5 triệu** | **−115,8 triệu** |

**Bốn điều bảng này nói, và không bảng nào trước nói được:**

1. **Kịch bản lạc quan có biên hạ tầng DƯƠNG (+33,4 triệu/năm) — nhưng chỉ trong mô hình phản thực.** Đó là hệ quả trực tiếp của kiến trúc web: chi phí cố định 1,56 triệu/tháng thay vì $260. Ngay cả khi được phép bán, nó vẫn **âm 60,2 triệu** sau khi trả công vận hành. Ở thực tế doanh thu = 0, nó âm **115,8 triệu**. **Chi phí giết dự án này chưa bao giờ là server.**
   ⚠️ **Đảo chiều so với bản trước:** bản cũ ghi kịch bản lạc quan âm **nhiều nhất** (−79,3tr). Sau khi sửa `H` về trần 10 giờ (A92), lạc quan âm **ít nhất** trong ba — vì ở đó doanh thu phản thực đủ bù phần lớn chi phí hạ tầng. Nhưng ở doanh thu **thật** = 0, trật tự lật ngược lại: **lạc quan âm nhiều nhất (−115,8tr)**, đúng như trực giác — nhiều người dùng hơn mà không có doanh thu thì chỉ tốn hơn.
2. **LTV/CAC không phải chỉ số đúng cho v2.** r08 §7.2 tính LTV/CAC = 0,03–0,79 và kết luận "không được chi một đồng cho paid acquisition". Với v2, CAC **bằng 0 theo thiết kế** — không có install để mua, tăng trưởng chỉ đi qua link dán vào nhóm Zalo. Chia cho 0 không ra 0,79, nó ra vô cực hoặc vô nghĩa. **Chỉ số đúng thay thế: `doanh thu ròng ÷ chi phí cơ hội giờ`** — phản thực cơ sở = **0,049**, cần **20,5 lần** mới hoà; **thật = 0,000**, và nó **phải bằng 0** trong 12 tháng đầu theo A62. ⇒ **Chỉ số này không dùng được để ra quyết định trước 30/06/2027** (đúng lý do A64 bỏ vế "doanh thu = 0" khỏi kill gate).
3. **Doanh thu/MAU/năm phản thực dao động 194đ – 2.317đ, tức 11,9 lần.** Cùng bậc với biên độ 13 lần mà c-business §1.4 chỉ ra ở chi phí. Một mô hình có biên độ ~12× ở cả hai vế **chưa phải một mô hình kinh doanh** — nó là một khoảng cần thu hẹp bằng T1/T2/T4/T5, không phải một dự báo. (Biên độ rộng thêm so với bản cũ "8 lần" **không phải vì mô hình xấu đi** — chỉ vì `A` được ghim về 4,0 ở cả ba cột, nên MAU bi quan giảm còn 160 và doanh thu/MAU bi quan giảm theo.)
4. **Đây là con số phải dán lên tường cạnh §2.1: dự án tiêu 46–116 triệu VND chi phí thật mỗi năm và thu về 0đ theo thiết kế.** Không kịch bản nào trong ba là "hoà vốn". Việc chọn định nghĩa thành công ở §1 **không phải một bài tập triết học** — nó là câu trả lời cho câu hỏi *"tôi trả 46–116 triệu/năm để mua cái gì?"*.

### 6.3. Ngưỡng lương 1 người — bảng tra cứu

Cần **300 triệu VND/năm ròng**. `Số sổ cần = 300.000.000 ÷ (c_g × P × 0,985)`, MAU = sổ × 4.

| Giá `P` | `c_g`=2% | `c_g`=3,5% (trần Discord) | `c_g`=5% |
|---|---|---|---|
| **99.000đ** | 153.800 sổ — **615.000 MAU** | 87.900 sổ — **352.000 MAU** | 61.500 sổ — **246.000 MAU** |
| **199.000đ** | 76.500 sổ — **306.000 MAU** | 43.700 sổ — **175.000 MAU** | 30.600 sổ — **122.000 MAU** |
| **399.000đ** | 38.200 sổ — **153.000 MAU** | 21.800 sổ — **87.000 MAU** | 15.300 sổ — **61.000 MAU** |

Cùng phép tính với ngưỡng thấp hơn — **93,6 triệu/năm** (chỉ trả công vận hành 10h/tuần, không phải lương) — cho dải **19.000 – 192.000 MAU**.

> ⚠️ **[03/09/2026] Đã sửa một lỗi số học của bản trước.** Bản cũ ghi dải "47.600 – 192.000 MAU": con số 47.600 là **số SỔ** của ô 99k×2% (`93.600.000 ÷ (0,02 × 99.000 × 0,985) = 47.993 sổ`), bị dán nhầm nhãn thành MAU. Cận trên đúng là `47.993 × 4,0 = 192.000 MAU` ✔; cận dưới đúng là ô lạc quan nhất 399k×5% = `93.600.000 ÷ (0,05 × 399.000 × 0,985) = 4.763 sổ × 4,0 = **19.000 MAU**`. Kiểm chéo: 93,6 ÷ 300 = 0,312 × (61.000 → 615.000) = **19.000 → 192.000** ✔.

**Đọc thẳng, không tô hồng và không bôi đen:**
- **Ô lạc quan nhất (399k × 5% = 61.000 MAU) không phải bất khả thi về mặt vật lý** — nó trùng khớp đáng ngạc nhiên với ước lượng "60.000 DAU" của c-business §1.4, và con số này được tính theo hai đường hoàn toàn khác nhau. Đó là điểm giao duy nhất trong hồ sơ mà hai phương pháp độc lập cho cùng một đáp số.
- **Nhưng ô đó đòi HAI thứ lạc quan cùng lúc:** giá 399.000đ (4× mức tôi đề xuất ở §3.1, và bán qua **chuyển khoản tay** chứ không phải một cú chạm Face ID) **và** conversion 5% cấp sổ (cao hơn trần Discord 3,5%, ở thị trường mà chỉ 7–10% game user từng trả một đồng [FACT — r02/Antom]). Xác suất hai thứ đó đúng cùng lúc [ước lượng] **dưới 5%**.
- **Ô cơ sở thật (99k × 2%) đòi 615.000 MAU** — vượt mọi tiền lệ trong r01 cho một app social ritual Gen Z.
- ⇒ Kết luận không đổi, nhưng lý do phải nói cho đúng: **không phải "toán học cấm", mà là "đòi thắng ở cả giá lẫn conversion, trong khi kênh thanh toán web làm cả hai xấu đi".**

Và cùng ngưỡng 300 triệu đó cho P3: **20 khách tổ chức.** So sánh: **20 khách** vs **61.000–615.000 người dùng**. Hai vế không cùng đơn vị, nhưng độ khó của việc đi tìm chúng thì có thể so — và không gần nhau.

> ⚠️ **[03/09/2026] Và đây là chỗ phán quyết cắn vào kết luận của chính mục này.** Vế "20 khách tổ chức" là P3, và **P3 đã bị CẮT khỏi 12 tháng đầu (S11)**; P1 đã XOÁ (D-06); P2 đã CẮT (S13). Toàn bộ bảng §6.3 vì vậy mô tả **một không gian lựa chọn đã bị đóng lại**. Phát biểu đúng sau phán quyết: **trong 12 tháng đầu (tới 30/06/2027 — cổng G4), không tồn tại đường nào đi tới 300 triệu/năm, và cũng không tồn tại đường nào đi tới 93,6 triệu/năm.** Bảng này được giữ để đọc lại **tại G4**, không phải để lập kế hoạch hôm nay.

---

## 7. NGƯỠNG "ĐỦ ĐỂ ĐÁNG LÀM TIẾP" VÀ NGƯỠNG "PHẢI DỪNG VÌ TIỀN"

| Mốc | Ngày | Đủ để làm tiếp (cần **tất cả**) | Phải dừng/đổi (bất kỳ **một**) |
|---|---|---|---|
| **G0 — Bước 0** | **22/09/2026** | H2 `q_c_roster` ≥0,45 & `q_x` ≥0,30 trên cửa sổ im lặng **và** ≥60% sổ nhánh A đạt **≥9/14 ngày tính** · H3 đạt · ≥1 sổ tự hỏi "mai còn chốt sổ không?" | H1 click-shortlink **<40%** ⇒ dừng · H2 `q_c_roster` <0,35 ⇒ **dừng toàn bộ hướng nộp-ảnh-mỗi-ngày** · 0/8 sổ hỏi ⇒ dừng |

> **[CHỐT 2026-08-28 — QĐ-05, QĐ-06] Hai sửa đổi trong dòng G0.** (a) **H1 mất quyền ĐI, chỉ giữ quyền DỪNG.** `02` §5.7 + §8(4) chứng minh cả ba proxy đo H1 ở Bước 0 đều lệch đã biết, và `06` BĐ-3 chỉ ra ảnh Canva dán vào Zalo **không sinh sự kiện "mở"** — nên "≥60%" ở Bước 0 là một con số không có thiết bị đo. Ngưỡng ≥60% dời sang **tuần 2 của beta**, khi có event `card_opened` thật (tên chuẩn theo danh mục **32 event** ở `04` §7.1 — A51; tài liệu này **không tự khai event**). (b) **Tiêu chí H2 đổi từ "chuỗi ≥5 ngày" sang "≥9/14 ngày tính".** `06` BĐ-2 tính sức phân biệt: với van 2 ngày nghỉ/tuần, "giữ chuỗi ≥5 ngày" gần như tự động đạt; tiêu chí ≥9/14 tách nhóm fail/đạt ở **31,6% vs 98,5%**. (c) Mẫu số là **`q_c_roster`** (roster đóng băng), không phải `q_c` trượt — xem QĐ-03.
| **G1 — Giá sơ bộ** ⚠️ **cổng GHI NHẬN, không phải cổng mở cửa** | **26/09/2026** | T1 ≥3/8 sổ · T2 OPP ≥**200.000đ** (giá vốn in + ship là 200–240k ⇒ dưới mốc này P2 lỗ ngay từ đơn đầu) · T5 ≥2/3 nói số ≥500k. **Đạt cả ba KHÔNG mở bất kỳ cửa nào** — P1/P2/P3 đều đang đóng bằng phán quyết; kết quả được cất vào ADR và đọc lại tại **G4 30/06/2027** | T1 = 0/8 **và** T5 = 0/3 nói số ⇒ **không tồn tại người trả tiền ở bất kỳ hình dạng nào** ⇒ khoá vĩnh viễn định nghĩa A, chuyển sang B hoặc C. **Đây là vế duy nhất của G1 còn tác dụng ngay: nó chỉ có quyền ĐÓNG, không có quyền MỞ** (cùng hình dạng với A21 áp cho H1) |
| **G2 — Beta** | **26/01/2027** [CHỐT 2026-08-28, QĐ-13] | `sổ-D28 ≥ 25%` **(KTC 95% = ±17 điểm — A25)** trên **cohort tuần 1–4 của beta (02/12 → 29/12/2026), n ≥ 24 sổ** · `sổ-D14 ≥ B` (neo Bước 0; **A26: n=5 ⇒ `B` chỉ nhận {0, 20, 40, 60, 80, 100}%, bước nhảy 20 điểm**) | `sổ-D28 < 25%` ⇒ DỪNG (A24; vùng xám 25–35%; **≥35% mới mở khoá app native + widget**) · Chi phí hạ tầng **>$60/tháng** ⇒ lỗi cấu hình, dừng viết feature |

> **[CHỐT 2026-08-28 — QĐ-13] Ngày và cỡ mẫu của G2.** Ba tài liệu ghi ba ngày (`09` §8: 20/01 · `10` cũ: 31/01 · `06` §6 tuần 24: 22/02) cho **cùng một cổng**. Chốt: cohort quyết định = **các sổ hình thành trong tuần 1–4 của beta**, đọc D28 khi cohort đó đủ 28 ngày ⇒ **26/01/2027**. Điều kiện "≥30 sổ" bị hạ xuống **≥24 sổ** vì chính dự báo cơ sở của `09` §1.2 chỉ sinh 8+6+5+5 = **24 sổ** ở 4 tuần đầu và trần vận hành là 35 sổ sống — giữ ≥30 nghĩa là **cổng không bao giờ mở được ở kịch bản cơ sở**. Với n=24, khoảng tin cậy 95% của một tỉ lệ ~25% là **±17 điểm** — con số đó phải được ghi kèm mỗi lần trích dẫn `sổ-D28`, không được đọc như một số chính xác.
| **G3 — Kill gate founder** (v2 §9) | **31/03/2027** | `≤15 giờ/tuần` **hoặc** `sổ-D28 ≥ 25%` | **`> 15 giờ/tuần` VÀ `sổ-D28 < 25%`** ⇒ **dừng dứt khoát trong tuần đó** (A64) |

> **[03/09/2026 — A64/C01/C48] Hai sửa đổi trong dòng G3.** (a) **Vế "doanh thu = 0" ĐÃ BỊ BỎ khỏi cả hai cột.** Lý do: A62 **cấm** phát sinh doanh thu trong 6 tháng đầu ⇒ ở ngày 31/03/2027 doanh thu **chắc chắn bằng 0**, và bằng 0 vì **luật**, không vì thị trường. Một điều kiện luôn đúng không phân biệt được gì; giữ nó nghĩa là G3 tự động kích hoạt bất kể sản phẩm tốt hay xấu — đó là tự lừa mình ở hai đầu cùng lúc. Chính §1 điểm 5 của tài liệu này đã nhận ra điều đó trước. (b) **Ngày là 31/03/2027**, không phải 30/03 ("30/03" ở `06` §6 tuần 30 là **lỗi chép** — C48). (c) Tên chỉ số là **`sổ-D28`** (A23), không phải `group-D28` — cùng một thứ, một tên.
| **G4 — Cổng tiền** | **30/06/2027** | **Nhánh (i) — luật sư nói ĐƯỢC thu ở tier thông báo:** doanh thu ròng 12 tháng ≥ **20 triệu**. ⚠️ **Vế "hoặc ≥3 khách B2B trả tiền" ĐÃ BỎ — nó vòng tròn:** P3 chỉ được mở **sau khi qua G4** (S11), nên không thể lấy khách B2B trả tiền làm **tiêu chí để qua** G4. **Nhánh (ii) — luật sư nói KHÔNG được thu (mặc định giả định cho tới khi có văn bản):** tiêu chí là **ý định trả tiền**, không phải tiền — `sổ-D28 ≥ 35%` (A24, kèm KTC ±17 điểm) **và** T4 ≥10 cam kết **và** T5 ≥2/3 nói ra con số ≥500k | **Nhánh (i):** doanh thu ròng < 5 triệu **và** T4 <3 cam kết. **Nhánh (ii):** T4 <3 cam kết **và** T5 = 0/3 nói số. Cả hai nhánh ⇒ **B2C monetization đã bị bác bằng thực nghiệm** |

> **[CHỐT 2026-08-28 — QĐ-01b] Vì sao G4 phải có hai nhánh.** Nếu pháp lý cấm phát sinh doanh thu ở tier thông báo, thì "doanh thu = 0" **không phải tín hiệu thị trường, nó là hệ quả pháp lý** — dùng nó làm tiêu chí đi/dừng là tự lừa mình. Đây chính là điều §1 của tài liệu này đã nhận ra khi nói kill gate G3 phải bỏ vế "doanh thu vẫn bằng 0". Nhánh nào có hiệu lực **do câu trả lời số 3 của luật sư quyết định**, không do founder chọn. Hạn có câu trả lời: **trước 20/12/2026** (ngày T4 khởi động).

> ### ⚠️ MÂU THUẪN CÒN LẠI GIỮA HAI MỤC CỦA BẢNG PHÁN QUYẾT — nhánh (i) của G4 hiện KHÔNG THỂ ĐẠT
>
> C01 yêu cầu giữ tiêu chí **"doanh thu ròng 12 tháng ≥ 20 triệu"** cho nhánh (i). Nhưng cả **ba** bề mặt sinh doanh thu đều có **"đã qua G4 30/06/2027"** nằm trong điều kiện mở lại của chính chúng (P1: xoá vĩnh viễn — D-06 · P2: điều kiện (b) — S13 · P3: điều kiện (a) — S11). ⇒ **Không có kênh hợp lệ nào để sinh ra 20 triệu đồng TRƯỚC ngày G4, kể cả khi luật sư trả lời "được thu" ngay hôm nay.** Nhánh (i) vì vậy **không thể đạt bằng cấu hình hiện tại** — nó chỉ sống lại nếu founder mở sớm một bề mặt, và mọi con đường mở sớm đều cần một khoản đối trừ pw chưa tồn tại.
>
> **Tài liệu này KHÔNG tự sửa tiêu chí 20 triệu** (C01 là mệnh lệnh, và mâu thuẫn nằm giữa hai mục của bảng phán quyết, không phải giữa tài liệu và bảng). Ghi ra đây để người ra quyết định thấy: **trên thực tế, nhánh (ii) là nhánh sẽ chạy**, bất kể luật sư trả lời gì. Việc cần làm ở cổng 22/09/2026: hoặc trọng tài gỡ vòng tròn này, hoặc founder mở sớm đúng một bề mặt kèm khoản đối trừ.

> ### ⚠️ CẦN FOUNDER QUYẾT — D-03: nhánh (ii) đo bằng gì, sau khi T3 bị cắt?
>
> **Vì sao đây không phải việc máy quyết được.** Khuyến nghị của bảng phán quyết cho D-03 viết nhánh (ii) là *"`sổ-D28` ≥ 35% **VÀ ≥5% sổ chạm fake-door T3**"*. Nhưng **mục C của chính bảng đó đã CẮT T3** (S04: fake door chiếm slot 8, và là bề mặt thanh toán khi doanh thu = 0đ). Hai mục của bảng phán quyết nói ngược nhau, và tài liệu này **không có thẩm quyền chọn hộ**.
>
> **Hai lựa chọn, không có lựa chọn thứ ba:**
>
> | | **(1) Giữ T3 bị cắt — đo bằng tín hiệu ngoài sản phẩm** | **(2) Khôi phục T3 — mua lại phép đo trong sản phẩm** |
> |---|---|---|
> | Nhánh (ii) đo bằng | `sổ-D28 ≥ 35%` **và** T4 ≥10 cam kết **và** T5 ≥2/3 nói số ≥500k | `sổ-D28 ≥ 35%` **và** ≥5% sổ chạm fake door T3 |
> | Giá phải trả | **0 pw**. Nhưng mọi tín hiệu WTP đều **ngoài sản phẩm** ⇒ yếu hơn một cú chạm thật **2–3 lần** [ước lượng] | **+0,2 pw** phải có khoản đối trừ ghi vào `docs/adr/pw-ledger.md` — **hiện chưa có**, và backlog đã là 7,25 pw trên trần 6,5 pw (C14) |
> | Phá gì | Không phá gì. Chấp nhận một điểm mù đã biết | Phá **A79** (slot 8 phải để trống) và **C44** (đã từ chối đúng yêu cầu này bằng văn bản) |
> | Rủi ro thật | G4 quyết định trên tín hiệu yếu ⇒ có thể **giữ một cửa đã chết** hoặc **đóng một cửa còn sống** | Tiêu 0,2 pw cho một màn có thể không bao giờ được dùng nếu luật sư trả lời "cấm thu" |
>
> **Khuyến nghị của tài liệu này: (1).** Nguyên tắc 4 của bảng phán quyết — *scope creep = CẮT, thứ đã bị cắt mà quay lại thì mặc định bị cắt lần nữa, trừ khi có khoản đối trừ đã ghi sổ cái* — áp thẳng vào đây, và khoản đối trừ **không tồn tại**. **Bảng §7 ở trên đã được viết theo lựa chọn (1).** Nếu founder chọn (2), phải sửa **cùng lúc ba chỗ**: dòng G4 nhánh (ii), khối cắt T3 ở §4, và một dòng mới trong `docs/adr/pw-ledger.md`.
>
> **Hạn: 20/12/2026** (cùng hạn chọn nhánh của D-03). Quá hạn ⇒ **(1) tự động có hiệu lực**, ghi vào ADR-000 kèm dòng "quyết định mặc định do quá hạn".
| **G5 — Trần tiền mặt** | bất kỳ lúc nào | — | Tổng tiền mặt đã bỏ ra vượt **30 triệu VND** **và** `sổ-D28 < 25%` ⇒ dừng |

> **[03/09/2026] G5 cũng phải bỏ vế "chưa có 1 đồng doanh thu", cùng lý do với G3 (A64).** Doanh thu = 0 là **hệ quả pháp lý bắt buộc** (A62), không phải tín hiệu. Điều kiện thật của G5 chỉ còn **hai vế**: tiền mặt > 30 triệu **và** `sổ-D28 < 25%`.

**Ngưỡng G5 tồn tại vì một lý do:** với chi phí tiền mặt 6 tháng chỉ **7,85 – 17,85 triệu** (§9), founder sẽ **không bao giờ bị tiền buộc phải dừng** — trần 30 triệu còn xa gấp đôi cận trên. Runway gần như vô hạn nghe như ưu điểm; thực ra nó là cái bẫy — nó xoá mất tín hiệu dừng tự nhiên duy nhất mà một dự án thường có. **G3 và G5 phải viết ra giấy và dán lên tường, đúng như v2 §9 mục 12 đã làm với G3.**

---

## 8. NẾU KHÔNG PHẢI VIỆT NAM

**Đánh giá thẳng: hướng D-chat-native là hướng KHÔNG THỂ XUẤT KHẨU NHẤT trong cả 4 hướng, và đó là cái giá đã trả để có 6,5 pw.**

| Lập luận | Đánh giá |
|---|---|
| r08 §8.2: "cùng MAU, doanh thu Mỹ cao hơn 2,3×" ($32 vs $14 Y1 RLTV/payer) [FACT — RevenueCat 2026] | **Đúng về số, vô nghĩa với v2.** |
| c-business §7(a): "2,3 × 0 = 0" | **Đúng, và với v2 còn mạnh hơn.** |
| **Lập luận riêng của v2, chưa ai nêu:** toàn bộ lợi thế cấu trúc của hướng D là **Zalo** — app duy nhất 100% ROM Việt whitelist, nơi noti chắc chắn tới. Zalo là **chỉ Việt Nam**. Ngoài VN, hướng D mất **lý do tồn tại**, không phải mất một kênh | Ở Mỹ, iOS chiếm ưu thế và không có chiến tranh ROM ⇒ push app hoạt động bình thường ⇒ **lý do "mượn kênh chat vì push chết" biến mất**. Sản phẩm còn lại là một web app không có push, cạnh tranh với native app có push. **Tệ hơn, không phải tốt hơn** |
| c-business §7(c): moat là hài hước tiếng Việt, không dịch được | **Với v2, lập luận này KHÔNG áp dụng — và đó là tin xấu.** v2 đã cắt reaction, cắt caption, cắt phrase bank roast (§6 mục 4, 5): chữ nghĩa sống trong Zalo, sản phẩm không sở hữu. ⇒ **v2 không có moat ngôn ngữ để mất, vì nó không có moat ngôn ngữ.** Moat duy nhất là tốc độ học (v2 §9 mục 4) — và tốc độ học không dịch được sang thị trường founder không hiểu |

**Xếp hạng lại thị trường cho v2** (khác r08 §8.2 vì r08 xếp cho một app native):

| Hạng | Thị trường / khách | Vì sao | Điều kiện mở |
|---|---|---|---|
| **1** ⚠️ **ĐANG ĐÓNG** | **B2B trong VN** | Giữ nguyên Zalo, giữ nguyên ngôn ngữ, giữ nguyên sản phẩm. **20 khách = lương 1 người.** Chính sự phụ thuộc Zalo chặn đường xuất khẩu lại là điều làm B2B VN chạy được — lớp học, phòng gym, CLB VN đều vận hành trên nhóm Zalo | ⚠️ **[03/09/2026 — S11] ĐÃ CẮT KHỎI 12 THÁNG ĐẦU.** T5 ≥2/3 nói số ≥500k **không còn là điều kiện mở** — nó chỉ là tín hiệu được cất vào ADR. Điều kiện mở đầy đủ (bốn vế) ở §3.3. Sớm nhất: **G4 30/06/2027**. Hạng 1 ở đây là **xếp hạng theo sức hấp dẫn, không phải theo thứ tự thi hành** |
| **2** | **Ở lại B2C VN, chấp nhận định nghĩa B hoặc C** | Chi phí thật **$28–37/tháng ở beta** (A74 — không phải $3; $3 là con số của Bước 0, trước khi Supabase Pro thành bắt buộc). Vẫn dưới 1 triệu đồng/tháng. Không cần thắng gì | mặc định |
| **3** | Indonesia / Philippines (WhatsApp-native) | Cùng hình dạng "web trong nhóm chat", WhatsApp thống trị, Android chiếm ưu thế ⇒ **lập luận push-chết vẫn đúng**. Nhưng ARPU **không hơn VN** [FACT — cùng nhóm IN/SEA $14] và founder không hiểu văn hoá | Chỉ khi `sổ-D28` ≥35% ở VN (A24, kèm KTC ±17 điểm — A25) và founder có người bản địa |
| **4** | **Mỹ** | ARPU 2,3× nhưng **mất lý do tồn tại của hướng D** (push hoạt động ⇒ native app thắng), không phân phối, không insight, phải viết lại toàn bộ | **Không mở.** Nếu founder thật sự muốn Mỹ, đó là một sản phẩm khác và phải viết lại tài liệu §1 |

**Kết luận mục 8: bỏ hẳn "mở bản EN cho US college" khỏi mọi kế hoạch của v2.** Nó là khuyến nghị đúng cho một app native (r08 §8.2 viết trước khi có v2) và là khuyến nghị sai cho một web app sống ký sinh trên Zalo. Chi phí i18n plumbing vẫn gần 0 và vẫn nên làm; coi nó là **đường ra doanh thu** thì sai.

---

## 9. CHI PHÍ TỐI THIỂU 6 THÁNG ĐẦU (09/2026 → 02/2027) — TIỀN MẶT THẬT

| Hạng mục | Bắt buộc? | Tiền mặt 6 tháng | Ghi chú |
|---|---|---|---|
| Domain `chotso.vn` (1 năm) | **Có** — v2 §12, và là điều kiện giấy phép MXH sau này | **770.000đ** [KIỂM CHỨNG 04/09/2026 — VNNIC, `11` §7.2] | Việc rẻ nhất, tốn thời gian chờ nhất. Mua trong tuần này |
| Vercel | Có | **0đ** (Hobby đủ tới beta 30 sổ) | Pro $20/tháng chỉ khi vượt |
| **Supabase Pro** | **Có — BẮT BUỘC từ 02/12/2026** [QĐ-09, A74] | **~1.950.000đ** ($25 × **3 tháng**: 12/2026 + 01/2027 + 02/2027) | ⚠️ **Sửa 03/09/2026.** Bản trước ghi "0đ, Free tier đủ tới ~5.000 MAU" — **sai**. Free **không có backup hằng ngày**, trong khi ToS (`05` §8.2) hứa giữ ảnh và sản phẩm hứa thumbnail **vĩnh viễn** (A38). Mất CSDL beta = mất tài sản của mọi sổ, không có đường về |
| Cloudflare R2 | Có | **~150.000đ** ($0–3/tháng × 3 tháng beta) | Free 10 GB; beta 30 sổ ≈ 0,6 GB/năm ⇒ gần như luôn trong free tier, để 150k làm đệm |
| Sentry / analytics | Có | **0đ** (free tier) | |
| Apple Developer $99/năm | **KHÔNG** | **0đ** | Không lên store — v2 §5. **Tiết kiệm 2,6 triệu/năm** |
| Google Play $25 | **KHÔNG** | **0đ** | như trên |
| D-U-N-S Number | **KHÔNG** | 0đ | Chỉ cần cho Apple Organization. v2 §12 cấm làm |
| **Tư vấn luật sư — 7 CÂU, MỘT email, MỘT lần trả phí** (A65) | **Có** — v2 §9 mục 1, §12; gửi **03/09/2026** (A104) | **5.000.000 – 15.000.000đ** (A66 — dải rộng vì **7 câu**, không phải 1) | **Khoản chi lớn nhất và duy nhất đáng kể.** ⚠️ **Sửa 03/09/2026:** bản trước ghi "1 câu hỏi MXH/G1" và ngầm dùng dải 3–5 triệu của thư một câu — **A65/A66/C46 bác cả hai**. Rẻ hơn **4,8–14,4 lần** chi phí cơ hội của **20 tuần** build sai (≈72 triệu — §2.3), không phải "5–19 lần của 10 tuần" |
| Thành lập TNHH | **KHÔNG trong 6 tháng đầu** | **0đ** | v2 §12 cấm. Chỉ bắt buộc khi (a) chạm 1.000 người dùng thường xuyên/tháng, hoặc (b) chọn P3 B2B. Chi phí khi cần: lệ phí ĐKKD 50.000đ + công bố 100.000đ + dịch vụ 1–3 triệu + chữ ký số 1,5–2 triệu/năm + kế toán 500k–1,5tr/tháng [ước lượng — **cần kiểm chứng**] |
| Cổng thanh toán merchant | **KHÔNG** | 0đ | Đòi ĐKKD [FACT — Airwallex 2026]. T4 dùng chuyển khoản cá nhân + Google Form |
| ~~In thử 1 cuốn sổ mẫu~~ | **KHÔNG** | **0đ** | ⚠️ **CẮT 03/09/2026 — S13.** P2 bị cắt khỏi 12 tháng đầu ⇒ không in gì cả, kể cả một cuốn mẫu. Mở lại cùng điều kiện với P2 (§3.2) |
| Canva Pro (Bước 0) | Không | 0đ (bản free đủ) | |
| **TỔNG BẮT BUỘC** | | **7,87 – 17,87 triệu VND** | domain **770k** (báo giá thật 04/09) + luật sư 5–15tr + Supabase Pro 1,95tr + R2 150k. _(Bản trước ghi 7,85–17,85 khi domain còn là ước lượng 750k.)_ |

> **[03/09/2026] Vì sao tổng tăng từ "5,75–15,75" lên "7,85–17,85 triệu".** Hai khoản trước đây ghi 0đ nay không còn là 0đ: **Supabase Pro 1,95 triệu** (bắt buộc từ 02/12 — A74) và **R2 150.000đ** (đệm). Bản trước còn có dòng thứ hai "TỔNG nếu cộng luôn hạ tầng trả phí sớm + sổ mẫu ≈ 7–17,5 triệu" — dòng đó **đã bị xoá**: hạ tầng trả phí nay là **bắt buộc, không phải tuỳ chọn**, nên nó thuộc dòng TỔNG BẮT BUỘC; và sổ mẫu đã bị cắt (S13). **Một dòng tổng, không hai** — hai dòng tổng gần nhau là cách rẻ nhất để sau này trích dẫn nhầm con số thấp hơn.

**Ba điều bảng này nói:**
1. **Toàn bộ rủi ro tiền mặt 6 tháng của dự án vẫn nhỏ hơn một tháng lương dev mid (30 triệu).** **64–84%** trong đó là phí luật sư (5/7,85 = 64% ở cận dưới; 15/17,85 = 84% ở cận trên) — tức khoản chi duy nhất mua được thứ founder không tự làm được. ⚠️ Bản trước ghi "90%"; sau khi Supabase Pro vào bảng, tỉ trọng đó **không còn đúng**.
2. **Đối chiếu:** chi phí cơ hội build 6,5 pw là **≈72 triệu** (400 giờ lịch × 180.000đ — §2.3, A80–A82), cộng **46,8 triệu** chi phí cơ hội vận hành 6 tháng (10 giờ/tuần × 26 tuần × 180.000đ) ⇒ **tổng chi phí thật ≈119 triệu**, trong đó tiền mặt chỉ **7,85–17,85 triệu (6,6–15%)**. v2 §10(i) đã nói đúng điều này; bảng trên là bản định lượng. ⚠️ Bản trước ghi "70–95 triệu ⇒ tổng ~120–160 triệu" — cận trên 160 triệu đến từ phép chia sai ở §2.3, đã sửa.
3. **Hệ quả cho quyết định:** vì tiền mặt không phải ràng buộc, **mọi quyết định "tiết kiệm tiền" đều sai nếu nó tốn thêm giờ.** Ví dụ: tự host Postgres để né $25 Supabase Pro = tiết kiệm **7,8 triệu/năm** ($300) bằng cách tiêu **≥24 giờ/năm** bảo trì backup (**4,3 triệu**) **và** nhận lại đúng rủi ro mất CSDL mà QĐ-09 vừa bỏ tiền mua bảo hiểm. Trả tiền, đừng tự host. ⚠️ Bản trước ghi "tiết kiệm 650.000đ/năm bằng cách tiêu 4 giờ/năm" — 650.000đ là **một tháng**, không phải một năm; kết luận không đổi nhưng lý do đã đúng gấp 12 lần.

---

## Bất đồng với định nghĩa sản phẩm v2

Bốn điểm. Không điểm nào đòi đổi hướng; ba điểm đòi sửa một dòng.

**1. §9 mục 5 gọi tên tham vọng là _"small profitable business HOẶC portfolio piece"_. Vế đầu không phải một lựa chọn còn sống.** Bảng §6.3 của tài liệu này cho thấy thu nhập 1 người ở B2C-VN đòi **61.000 – 615.000 MAU** tuỳ giá × conversion (⚠️ bản trước ghi "611.000 – 24,6 triệu MAU" — **số cũ, tính trước khi ghim A = 4,0 theo A70**; dải đúng lấy từ bảng §6.3 đã sửa). Đó không phải "small business", đó là "top 3 social app VN". Tập lựa chọn đúng phải là: **{portfolio/bàn đạp, dự án cá nhân 0đ, pivot B2B}** — ⚠️ và sau S11, phần tử thứ ba **bị đóng cho tới G4 30/06/2027**, nên tập còn sống trong 12 tháng đầu chỉ có **hai phần tử: {C, B}**. Đề nghị sửa một dòng ở §9 mục 5, vì tên gọi quyết định mức chi tiêu và mức rủi ro chấp nhận — chính lập luận mà v2 đã dùng đúng.

**2. §10(b) hàm ý rằng con số 2,6 tỷ được tính trên "đường ray sai" và quảng cáo sẽ cho con số đúng hơn. Tôi đã làm phép tính đó (§3.4) và kết quả là ÂM: trần quảng cáo ở 1 triệu MAU là 1,3–2,3 tỷ VND/năm — thấp hơn hoặc bằng con số cũ.** Việc bàn giấy 3 giờ ở §12 (06/09) nên được đánh dấu **đã hoàn thành với kết luận phủ định**, và ô ngày 06/09 dùng cho việc khác (đề nghị: 3 cuộc gọi B2B — T5). Đề nghị sửa §10(b) thành: _"quảng cáo là cách trả tiền hạ tầng từ ~12.000 MAU, không phải mô hình kinh doanh"_.

**3. ~~§4.10 luật đánh đổi 1-1 chưa tính hai khoản pw mà BẤT KỲ hình thức thu tiền nào cũng kích hoạt.~~ — BẤT ĐỒNG NÀY ĐÃ RÚT, 03/09/2026.**

Bản trước xin **+0,4 pw** (email magic link) và **+0,2 pw** (fake door T3), lập luận rằng bất kỳ hình thức thu tiền nào cũng kích hoạt chúng. Bảng phán quyết **cắt cả hai ở gốc**:

- **+0,2 pw fake door T3 — CẮT (S04/C44).** Slot 8 phải **để trống** (A79); một fake door bán hàng **không phải phát hiện của Bước 0**; và nó là bề mặt thanh toán khi doanh thu = 0đ (A62).
- **+0,4 pw email magic link — CẮT (S05).** Đây là **hệ quả tất yếu của việc thu tiền quay lại**. Cắt gốc (S04 fake door, S12 thu tiền thật, D-06 xoá P1) thì khoản này **không còn lý do tồn tại**: không bán gì ⇒ không có entitlement ⇒ device token trong `localStorage` là đủ, đúng như v2 §5 thiết kế. `03` §2.4 cũng đã loại thẳng magic link.

**Lập luận gốc vẫn đúng và được giữ lại làm ghi chú cho ngày G4:** một entitlement đã trả tiền **không thể sống trong `localStorage`** — user xoá cache là mất quyền, mất quyền đã trả tiền sinh yêu cầu hoàn tiền, tức giờ vận hành. **Ngày nào mở bán bất cứ thứ gì, ngày đó 0,4 pw quay lại và phải có khoản đối trừ.** Đó là lý do đúng để không mở bán sớm — không phải lý do để xin pw hôm nay.

> **[03/09/2026 — C08/A87] Ghi chú về sổ cái pw.** Bản trước dùng công thức "đổi lấy khoản X" để tự cấp pw cho mình. Công thức đó **bị vô hiệu**: **`docs/adr/pw-ledger.md` là nơi DUY NHẤT** ghi nhận pw, luật là **một khoản cắt chỉ được chi MỘT LẦN**, và bảng §4.10 của v2 **không còn là ngân sách** — đọc như bối cảnh. Trạng thái của tài liệu này: **cả ba khoản +0,4 / +0,2 / +0,6 / +0,8 pw đều CHƯA và SẼ KHÔNG được ghi vào sổ cái trong 12 tháng đầu. Tài liệu này xin 0 pw.**

Nếu founder chọn định nghĩa B hoặc C, cả hai khoản này bằng 0 và §4.10 giữ nguyên — và đó **chính là trạng thái hiện tại** sau khi D-04 khuyến nghị **B**. **Việc chọn định nghĩa vẫn phải xảy ra ngày 22/09**, không phải sau MVP, vì nó quyết định schema có entitlement hay không.

**4. §11 sắp lịch cửa sổ im lặng, còn tài liệu này cần một phép đo giá (T1) sớm.** Đây là xung đột thật. **Tôi nhường: T1 và T2 dời sang ngày 15 = 22/09/2026 (sau Bước 0), gửi qua tin nhắn riêng, không vào sổ.** Bảo vệ H2 quan trọng hơn sớm ba ngày — nhưng ghi ra đây để nó là một quyết định có ý thức chứ không phải một sự trôi lịch. Ngày cửa sổ im lặng chuẩn là **15/09 và 18/09/2026** (A98), và giao thức là A97: founder gửi card **riêng cho người trực**, không post gì trong nhóm.

**Điểm KHÔNG bất đồng, ghi lại để không bị mở lại:** giữ nguyên §6 mục 10 (không vật phẩm ảo, vĩnh viễn), mục 6 (không xếp hạng, vĩnh viễn), mục 13 (khoá quảng cáo — và điều kiện mở lại là **của v2**, không phải bản viết lại của tài liệu này, xem S16 ở §3.4), mục 14 (khoá đa sổ — A101, `G ≡ 0` là quyết định có ý thức), TTL ảnh gốc **72 giờ** (A36), thumbnail **vĩnh viễn** (A38), và trần **6,5 pw** (A83). **Tài liệu này không xin thêm một pw nào — con số là 0, không có điều kiện kèm theo.**

---

## Câu hỏi mở cần founder quyết

> ### ⚠️ CẦN FOUNDER QUYẾT — D-04: định nghĩa thành công **A hay B**?
>
> **Vì sao máy không quyết được.** Đây là câu hỏi về **việc founder muốn gì**, không suy ra được từ dữ liệu. Cả hai đều nhất quán nội bộ; chúng chỉ dẫn tới hai sản phẩm khác nhau.
>
> | | **A — Business tự nuôi** | **B — Dự án cá nhân có ý nghĩa** |
> |---|---|---|
> | Đích số | Doanh thu ròng **≥ 300 triệu/năm** | Doanh thu **0đ** (bắt buộc 6 tháng đầu, chấp nhận được sau đó) · chi phí tiền mặt ≤ 1 triệu/tháng · ≥30 sổ sống |
> | Cần bao nhiêu user | **61.000 – 615.000 MAU** (§6.3) | **300 – 3.000 MAU**, cố ý giữ **dưới đèn đỏ hai counter** (850 người / 8.500 lượt — A54) |
> | Việc phải làm ngay nếu chọn | **Sửa v2 §5 BẰNG VĂN BẢN** để slot 8 mở cho fake door (A79 hiện bắt để trống) · chuẩn bị pháp nhân · thêm entitlement vào schema **trước dòng code đầu 23/09** | **Không phải làm gì thêm.** Mọi phán quyết hiện hành đã trỏ về B |
> | Xác suất đạt [ước lượng] | **< 10%** trong 24 tháng | ~60% nếu H1+H2 pass |
> | Xung đột với hồ sơ hiện tại | **Xung đột với 5 phán quyết cùng lúc**: A62 (doanh thu 0đ), S11 (P3 cắt), S13 (P2 cắt), D-06 (P1 xoá), A79 (slot 8 trống). Chọn A nghĩa là **mở lại cả năm**, mỗi cái cần một khoản đối trừ pw | Không xung đột với phán quyết nào |
>
> **Khuyến nghị của bảng phán quyết (D-04): chọn B trong 12 tháng đầu.** Lý do: nhất quán với `05` (pháp lý), với trần hành chính **60 sổ** (A93), với doanh thu **0đ tuyệt đối** (A62), và với việc **cả ba bề mặt tiền đều đã bị đóng** (D-06/S11/S13). Chọn A hôm nay là chọn một đích mà **không có một phương án nào còn mở để đi tới**.
>
> ⚠️ **Khuyến nghị này KHÁC với khuyến nghị gốc của §1** ("chọn C làm mục tiêu chính, B làm trạng thái nghỉ, giữ A như một cửa chỉ mở nếu B2B tự tìm tới"). Sau khi S11 cắt B2B, vế cuối của câu đó **không còn thi hành được**. **Bảng phán quyết thắng** (nguyên tắc hiệu lực). Hai khuyến nghị **không mâu thuẫn về hướng** — cả hai đều loại A — mà chỉ khác ở việc gọi tên trạng thái mặc định là **B** hay **C**; và **B với C không loại trừ nhau** (B là trạng thái vận hành, C là việc viết công khai về nó, ~2h/tuần × 20 tuần, **không có trong 6,5 pw**).
>
> **Hạn: 22/09/2026.** Quá hạn ⇒ **B tự động có hiệu lực**, ghi vào `docs/adr/ADR-000-bat-bien.md` kèm dòng "quyết định mặc định do quá hạn".

| # | Câu hỏi | Hạn chót | Vì sao không thể hoãn |
|---|---|---|---|
| **1** | **Chọn A, B hay C?** (§1 + khối D-04 ở trên) | **22/09/2026**, cùng lúc với quyết định Bước 0 | Nó quyết định schema (có entitlement hay không), quyết định có lập pháp nhân hay không, và quyết định vế "doanh thu 0" trong kill gate G3 có ý nghĩa gì. **Mặc định nếu im lặng: B** |
| **2** | Nếu chọn **A**: mở bề mặt nào? ⚠️ **[03/09/2026] Câu hỏi này hiện KHÔNG có lựa chọn hợp lệ nào** — P1 XOÁ vĩnh viễn (D-06), P2 CẮT (S13), P3 CẮT (S11). Chọn A nghĩa là **trước hết phải mở lại một trong ba**, mỗi cái kèm điều kiện riêng ở §3 và một khoản đối trừ pw chưa tồn tại | 22/09/2026 | Mỗi cái đòi một khoản pw khác nhau và phá một nguyên tắc khác nhau (§3.5). Làm hai cái cùng lúc là cách chắc chắn nhất để không làm xong cái nào |
| **3** | Nếu chọn **B**: có **cố ý** giữ dưới đèn đỏ pháp lý (850 người/tháng **và** 8.500 lượt/tháng — QĐ-04) để không chạm ngưỡng giấy phép MXH không? | 22/09/2026 | Nếu có, đó là một **trần thiết kế** phải viết vào ADR, và mọi kênh tăng trưởng phải bị tắt chủ động. Nếu không, phải chuẩn bị pháp nhân từ ~500 MAU |
| **4** | **Quyết định dòng 4 ở §5: có lưu ảnh gốc không?** Bỏ ⇒ cắt 47% chi phí biến đổi. ⚠️ **[03/09/2026] Đánh đổi đã đổi** — không còn là "mất khả năng bán export" (P1 đã xoá — D-06) mà là **nội dung bản sao dữ liệu luật định** chỉ còn thumbnail 320px. Vì TTL ảnh gốc là **72 giờ** (A36), chênh lệch thật nhỏ hơn bản trước tưởng | **Trước dòng code đầu tiên (23/09)** | Sửa sau khi đã có ảnh của user là migration, không phải một dòng code |
| **5** | Sẵn sàng chi **5.000.000 – 15.000.000đ** phí luật sư (A66 — **7 câu, MỘT email, MỘT lần trả phí**; A65) trước khi biết có một đồng doanh thu nào không? Câu trả lời cho **câu số 3** trong 7 câu đó là thứ quyết định nhánh của G4 (D-03) | **03/09/2026** (A104 — gửi luật sư + lấy 3 báo giá + báo giá domain, cùng một ngày) | Đây là **64–84% ngân sách tiền mặt 6 tháng** (§9 điểm 1 — sửa 03/09/2026, bản trước ghi 90%). Nếu câu trả lời là không, thì câu hỏi thật là "có thật sự định làm dự án này không" |
| **6** | ~~Ai đứng tên nhận tiền nếu T4 bán được?~~ ⚠️ **[03/09/2026] CÂU HỎI NÀY ĐÃ MẤT ĐỐI TƯỢNG.** T4 là **fake pre-order, KHÔNG nhận một đồng nào** (A63) ⇒ **không có ai đứng tên nhận tiền, vì không có tiền.** Câu hỏi được **hoãn tới G4 (30/06/2027)** và chỉ sống lại nếu luật sư trả lời "được thu" (D-03 nhánh i). Việc **cần kiểm chứng** vẫn giữ nguyên (~~ngưỡng miễn thuế 100 hay 200 triệu/năm~~ ✅ **ĐÃ KIỂM CHỨNG 04/09/2026: 500 triệu đồng/năm**, và lệ phí môn bài đã bị xoá bỏ với hộ KD/cá nhân KD từ 01/01/2026 — `11` §7.2. Ở doanh thu 0đ, ngưỡng này không còn là ràng buộc) | **30/06/2027** (không còn là 20/12/2026) | Thu tiền vào tài khoản cá nhân mà không kiểm tra ngưỡng miễn thuế là rủi ro truy thu — Cục Thuế đã truy thu 203 tỷ từ nhóm developer App Store [FACT — r06] |
| **7** | Nếu **G4 (30/06/2027) fail**: chuyển hẳn B2B hay chấp nhận định nghĩa B vĩnh viễn? | Viết câu trả lời **hôm nay**, mở ra đọc vào 30/06/2027 | Cùng lý do v2 §9 mục 12 viết kill gate hôm nay: 30/06/2027 founder sẽ không còn khách quan |

### Sáu con số cần kiểm chứng, không được dùng để ra quyết định trước khi kiểm chứng

| # | Con số | Nhãn | Ai/cách kiểm | Hạn | Nếu sai thì gì phải tính lại |
|---|---|---|---|---|---|
| 1 | **eCPM web display VN $0,25–0,60** | 🔎 **[TRA 04/09/2026 — VẪN KHÔNG ĐÓNG ĐƯỢC]** `[ước lượng thuần]` (A77). Dải nguồn thứ cấp: **$0,04–1,00** (`11` §7.5) | Số có nguồn là eCPM **in-app** ($1,51 interstitial, $2,34 app-open) [FACT — MonetizeMore 2026], **không dùng được cho web** | trước G4 | Nếu eCPM web thật ≥$1,00 thì §3.4 phải tính lại. ⚠️ **Nhưng quảng cáo vẫn khoá** — điều kiện mở là pháp lý, không phải eCPM (S16) |
| 2 | **Giá in sổ A5 60–100 trang + ship: 200.000–240.000đ** | `[ước lượng]` | Một cuộc gọi tới nhà in POD | **không còn gấp** — P2 đã CẮT (S13) | Giá vốn này là **ngưỡng đọc T2** (OPP ≥200.000đ ở §7 G1). Nếu giá vốn thật cao hơn, ngưỡng T2 phải tăng theo |
| ~~3~~ | ✅ **ĐÓNG 04/09/2026 — CẢ HAI ĐỀU SAI: ngưỡng đúng là 500 TRIỆU ĐỒNG/NĂM** | `[FACT]` | Luật thuế TNCN & GTGT sửa đổi, hiệu lực 2026. Kèm: **lệ phí môn bài BỊ XOÁ BỎ với hộ KD/cá nhân KD từ 01/01/2026** (Điều 10 NQ 198/2025/QH15). Nguồn: `11` §7.2 | — | Ở mức doanh thu 0đ tuyệt đối của 12 tháng đầu, ngưỡng 500 triệu xa tới mức **không còn là ràng buộc** ⇒ câu hỏi mở #6 mất phần lớn trọng lượng |
| 4 | **`q_c` = 0,53** | `[suy luận, chưa đo — giả thuyết H2]` (A17) | **Bước 0, đọc 22/09/2026** | **22/09/2026** | **Nhân vào MỌI dòng của §2.1** và vào `DAU/sổ`. Đây là số duy nhất trong tài liệu có thể đổi kết luận chi phí |
| 5 | **Kích thước ảnh gốc ~110 KB** (1080px, q=0,72) | `[chưa đo — phải đo trên 20 ảnh Android thật]` (A37) | Buổi kiểm chứng nền tảng **04/09/2026** (A105) | **04/09/2026** | §2.1 dòng "R2 storage ảnh gốc" và §5 mục 1. Ảnh hưởng **<0,5% tổng** ⇒ không đổi kết luận |
| 6 | **Lượt truy cập/người/tháng = 25** | `[ước lượng, ảnh hưởng 🔴 Rất cao]` (A72) | chưa có thiết bị đo trước beta | **trước 02/12/2026** | **Quy đổi đèn pháp lý ở §5** (A73): 25 lượt/người là thứ biến 6.000 lượt thành 60 sổ. Nếu thật là 50 lượt/người thì **trần pháp lý rơi xuống 30 sổ** — dưới cả trần vận hành 35 sổ |

---

## ĐÃ CẮT — danh sách đầy đủ và điều kiện mở lại

> Đây là mục mà khối "⚖️ ĐÃ ĐỐI CHIẾU" ở đầu tài liệu trỏ tới. **Luật đọc mục này:** thứ nằm trong bảng dưới **không được quay lại** bằng cách viết lại nó dưới tên khác ở một mục khác (nguyên tắc 4 của bảng phán quyết). Mở lại chỉ bằng **đúng điều kiện ghi ở cột cuối**, và mọi khoản kèm pw phải có **khoản đối trừ ghi vào `docs/adr/pw-ledger.md`** (A87) — sổ cái đó là nơi DUY NHẤT, và **một khoản cắt chỉ được chi MỘT LẦN**.

| # | Thứ bị cắt | Ở đâu trong tài liệu | Phán quyết | pw thu hồi | Điều kiện mở lại |
|---|---|---|---|---|---|
| 1 | **P1 — bán export "Bao sổ" 99.000đ/sổ/năm** | §3.1 | **D-06 — XOÁ vĩnh viễn** | — | **KHÔNG CÓ.** Bán một quyền luật định (`05` §8.1 mục 7 — bản sao dữ liệu 10 ngày) là rủi ro pháp lý riêng. Thay bằng **export làm tay, 0 pw**, SLA 10 ngày, quy trình trong `RUNBOOK.md`. Thứ có thể bán sau này phải là một cái **khác** export |
| 2 | **+0,4 pw email magic link** | §3.1, BĐ#3 | **S05 — CẮT** | **−0,40 pw** | Chỉ khi mở bán một thứ gì đó ⇒ cần entitlement gắn với con người. Kèm khoản đối trừ ghi sổ cái. Không sớm hơn **G4 30/06/2027** |
| 3 | **P2 — Sổ in Tết A5, POD, ship GHN/GHTK** | §3.2 | **S13 — CẮT khỏi 12 tháng đầu** | **−0,60 pw** | CẦN CẢ BA: (a) luật sư xác nhận được phát sinh doanh thu, hoặc đã có Giấy phép MXH · (b) qua **G4 30/06/2027** · (c) +0,6 pw có khoản đối trừ ghi sổ cái |
| 4 | **In thử 1 cuốn sổ mẫu (200–240k tiền mặt)** | §9 | **S13 (hệ quả)** | — | Cùng điều kiện với mục 3 |
| 5 | **P3 — "Sổ tổ chức" B2B** | §3.3, §3.5, §8 hạng 1 | **S11 — CẮT khỏi 12 tháng đầu** | **−0,80 pw** | CẦN CẢ BỐN: (a) qua **G4 30/06/2027** · (b) pháp nhân VN + ký được vai bên xử lý dữ liệu (Luật 91/2025) · (c) phương án an toàn vị thành niên **bằng văn bản** cho ca "khách hàng là trường có học sinh <16" (ANM 116/2025 Điều 16.2) · (d) +0,8 pw có khoản đối trừ ghi sổ cái |
| 6 | **T3 — fake door "Bao cả sổ" trong sản phẩm** | §4, §7 G2, §7 G4 nhánh (ii) | **S04 + C44 — CẮT** | **−0,20 pw** | CẦN CẢ BA: (a) Bước 0 chứng minh một màn **khác** là bắt buộc **và** slot 8 vẫn còn trống sau đó (A79) · (b) luật sư xác nhận được phát sinh doanh thu · (c) +0,2 pw có khoản đối trừ — ⚠️ khoản "nút thả tim 0,2 pw" **không dùng được**, đã bị chi (C08) |
| 7 | **Lấp slot màn 8 bằng fake door bán hàng** ("luật 1" của §4) | §4 | **C44 + S19 — TỪ CHỐI** | — | Slot 8 **để trống có chủ đích** (A79). Mở **chỉ khi** Bước 0 chứng minh một màn là bắt buộc, và lý do phải ghi vào `docs/adr/ADR-000-bat-bien.md` |
| 8 | **S12 — thu tiền thật trong beta (30 suất × 399k, chuyển khoản tay)** | §4 T4 | **S12 + C01 — CẮT** | — | HAI khoá độc lập, phải gỡ **cả hai**: (a) `05` §0 kết luận 3 (pháp lý, tier thông báo cấm phát sinh doanh thu) · (b) v2 §6 mục 19 (`≥20.000 MAU` **VÀ** `≥1 người khác làm ops`). Thay bằng **fake pre-order T4** — thu tên + SĐT + câu đồng ý, **0đ** (A63) |
| 9 | **Điều kiện mở lại quảng cáo do tài liệu này tự viết** (`MAU ≥ 12.000` + H1 pass + định nghĩa A) | §3.4 điểm 3 | **S16 — CẮT bản viết lại** | — | Điều kiện có hiệu lực là **của v2 §6 mục 13** (việc bàn giấy 3 giờ — đã xong, kết quả **phủ định**) **CỘNG** điều kiện pháp lý mới (Giấy phép MXH / văn bản luật sư) **CỘNG** qua G4. Con số 12.000 MAU chỉ còn là ghi chú kỹ thuật |
| 10 | **Cột "Thứ tự thử" ở §3.5** (P3=1 · P1=2 · P2=3) | §3.5 | **hệ quả của S11+S13+D-06** | — | Lập lại **tại G4 30/06/2027**, dựa trên câu trả lời luật sư (D-03) + kết quả T1/T4/T5 |
| 11 | **Vế "doanh thu = 0" trong kill gate G3 và G5** | §7 G3, §7 G5, §1 điểm 5 | **A64 + C01 + C48 — BỎ** | — | **KHÔNG mở lại.** Doanh thu 0 trong 6 tháng đầu là **hệ quả pháp lý** (A62), không phải tín hiệu thị trường. Dùng nó làm tiêu chí đi/dừng là tự lừa mình ở cả hai đầu |
| 12 | **Dòng tổng thứ hai ở §9** ("~7 – 17,5 triệu nếu cộng hạ tầng trả phí sớm") | §9 | **hệ quả của A74** | — | **KHÔNG mở lại.** Hạ tầng trả phí nay là bắt buộc ⇒ thuộc dòng TỔNG BẮT BUỘC. Một dòng tổng, không hai |
| 13 | **Xoá thumbnail của sổ chết sau 180 ngày** | §5 mục 12 | **C16 + A38 — BỎ** | — | **KHÔNG mở lại.** 10.000 sổ ≈ 200 GB ≈ **$3/tháng** — kinh tế không biện minh được việc xoá đúng tài sản mà P4 và màn sổ ngủ đông dựa vào. 180 ngày ⇒ **R2 Infrequent Access**, không xoá |
| 14 | **Trần 3 sổ/thiết bị như một con số đang có hiệu lực** | §5 mục 8 | **C25 + A101 — HOÃN** | — | **1 sổ/thiết bị ở MVP-0.** Trần 3 là **hằng số đặt trước cho v1.1, chưa có hiệu lực**. `G ≡ 0` trong 12 tháng đầu là **quyết định CÓ Ý THỨC**, được ghi ra thay vì để nó xảy ra âm thầm |
| 15 | **Con số "700 người" làm đèn cảnh báo pháp lý** | §1, §5 mục 14 | **C04 + A54 — BÁC hoàn toàn** | — | **KHÔNG mở lại.** Thay bằng **hai counter**: `monthly_visits` vàng 6.000/đỏ 8.500 · `monthly_active_persons` vàng 600/đỏ 850. Ngưỡng NĐ 147/2024 là **OR**, và nhánh lượt-truy-cập **bind trước ~2,5 lần** ⇒ con số 700 báo động **muộn 2,5 lần** |

**Tổng pw thu hồi bởi tài liệu này: −2,00 pw** (0,40 + 0,60 + 0,80 + 0,20). ⚠️ **Con số này KHÔNG phải tiền để tiêu.** Cả bốn khoản đều là **thứ tài liệu này từng xin thêm**, không phải scope đang nằm trong 6,5 pw ⇒ cắt chúng **không hạ backlog xuống dưới trần**, nó chỉ **ngăn backlog tăng thêm 2,0 pw**. Backlog thật tại 03/09/2026 vẫn là **≈7,25 pw trên trần 6,5 pw** (C14) và việc cắt 1,08 pw thật thuộc **D-01**, không thuộc tài liệu này. Ghi nhận duy nhất hợp lệ: `docs/adr/pw-ledger.md`.

---

_Nguồn chính: [RevenueCat State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps) · [Sacra — Discord](https://sacra.com/c/discord/) · [Sunset HQ — Geneva](https://www.sunsethq.com/blog/geneva-acquisition) · [Moloco — Locket case study](https://www.moloco.com/case-studies/locket-widget) · [MonetizeMore — 2026 eCPM Insights](https://www.monetizemore.com/blog/ecpm-insights/) · [Airwallex — Cổng thanh toán trực tuyến 2026](https://www.airwallex.com/vn/blog/cong-thanh-toan-truc-tuyen-so-sanh-va-huong-dan-2026) · [Mapendo — CPI by country 2025](https://mapendo.co/blog/cost-per-install-by-country-2025) · và các tài liệu nội bộ r02, r05, r06, r08, c-business, 01-dinh-nghia-san-pham-v2._
