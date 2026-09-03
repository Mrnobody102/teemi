# 10 — MÔ HÌNH KINH DOANH & QUYẾT ĐỊNH VỀ TIỀN (Chốt Sổ)

_Viết 03/09/2026. Dựa trên `01-dinh-nghia-san-pham-v2.md` (hướng D-chat-native, web, không app, 6,5 pw), `r08-monetization.md`, `c-business.md`, `r05-tech-stack.md`, `r06-legal-compliance.md`._

**Nhãn dùng trong tài liệu:** `[FACT + nguồn]` · `[suy luận từ X]` · `[ước lượng]` · `[cần kiểm chứng]`.

> **Kết luận đặt trước, không giấu ở cuối:**
>
> 1. Kiến trúc v2 (web, không IAP, không push riêng, không SMS) **hạ chi phí hạ tầng ~4,3 lần** so với mô hình app trong r05 — phản biện "ở 10.000 DAU app đã lỗ" **không còn đúng về mặt server**. Nhưng nó đúng hơn bao giờ hết về mặt **giờ founder**, và giờ founder mới là dòng chi phí duy nhất có ý nghĩa.
> 2. **Việc bàn giấy 3 giờ ở §10(b) của v2 đã được làm trong tài liệu này, và kết quả là ÂM.** Quảng cáo không cứu được mô hình: trần quảng cáo ở 1 triệu MAU là **1,3–2,3 tỷ VND/năm**, tức *không cao hơn* con số 2,6 tỷ IAP mà nó được kỳ vọng sửa. Quảng cáo không phải mô hình kinh doanh — nó là cách trả tiền điện.
> 3. Ở cấu hình B2C-VN, thu nhập 1 người (300 triệu/năm) đòi **61.000 MAU ở giả định lạc quan nhất** (giá 399k × 5% sổ trả tiền — hai điều kiện lạc quan phải đúng cùng lúc, [ước lượng] xác suất <5%) hoặc **615.000 MAU ở giả định cơ sở**. Phương án duy nhất chạm ngưỡng đó bằng hai chữ số khách hàng là **B2B — 20 khách tổ chức** — và nó phá định vị §1.
> 4. Vì vậy **founder phải chọn định nghĩa thành công TRƯỚC 22/09/2026**, cùng lúc với quyết định đi tiếp/dừng của Bước 0. Ba định nghĩa ở §1. v2 như đang viết được **tối ưu cho định nghĩa B và C, và có cấu trúc thù địch với A**.

---

## 1. NÓI THẲNG TRƯỚC: đây có phải một business không?

Câu trả lời ngắn: **ở hình dạng hiện tại, không.** Không phải vì sản phẩm tệ, mà vì ba con số vật lý cùng lúc:

| Ràng buộc | Con số | Nguồn |
|---|---|---|
| Trần chi tiêu giải trí số còn lại của Gen Z VN sau Spotify/Netflix | **20.000–50.000đ/tháng, không phải mỗi tháng** | [suy luận từ r08 §2.3 — Appota 100–500k tổng] |
| Trần convert của social app monetize tốt nhất thế giới | Discord **3,2–3,6% MAU** | [FACT — Sacra, DemandSage 2026] |
| Sản phẩm gần Teemi nhất về định vị, được mua 17,5 triệu USD | Geneva, **doanh thu 0 đồng**, đóng cửa 9/2025 | [FACT — TechCrunch, Sunset HQ] |
| Kênh thanh toán IAP một chạm | **Không có** — v2 là web, không lên store | v2 §5 |

Điểm thứ tư là điểm mà cả 4 tài liệu hướng và cả r08 đều chưa tính: **v2 tự nguyện bỏ IAP.** Điều đó cắt 15–30% phí sàn (tốt: tỉ lệ thực nhận từ 77% lên ~98,5%) nhưng đổi lấy một thứ đắt hơn nhiều — **ma sát thanh toán**. Chuyển từ "chạm Face ID" sang "quét VietQR, chuyển khoản, chờ đối soát" là mức ma sát mà mọi benchmark conversion ở r08 **không** đo được. [ước lượng] tôi giả định nó cắt conversion đi **40–60% tương đối**; con số này chưa ai đo, cần đo bằng T3 ở §4.

### Ba định nghĩa thành công — chọn đúng một

| | **A. Business tự nuôi** | **B. Dự án cá nhân có ý nghĩa** | **C. Bàn đạp / portfolio** |
|---|---|---|---|
| **Định nghĩa số** | Doanh thu ròng ≥ **300 triệu VND/năm** (thu nhập 1 người ở VN, [ước lượng] mức dev mid 25tr/tháng) | Doanh thu **0đ là chấp nhận được**. Chi phí tiền mặt < **500.000đ/tháng vĩnh viễn**. Có ≥30 sổ sống | Ship công khai, có một con số đọc lên được: "**200 nhóm bạn thật, 8.000 tấm, group-D28 35%**" |
| **Cần bao nhiêu user** | **61.000 – 615.000 MAU** tuỳ giá × conversion (bảng §6.3). Chỉ để trả công vận hành 10h/tuần: 47.600 – 192.000 MAU | **300 – 3.000 MAU**, và cố ý **giữ dưới đèn đỏ pháp lý** — [CHỐT 2026-08-28, QĐ-04] tức `monthly_active_persons` < 850 **VÀ** `monthly_visits` < 8.500, không phải "dưới 700 MAU" | 500 – 5.000 MAU. Số tuyệt đối không quan trọng bằng chất lượng câu chuyện |
| **Cần pháp nhân?** | **Có, bắt buộc** — mọi cổng thanh toán merchant (MoMo Business/VNPay/ZaloPay Business) đều đòi ĐKKD [FACT — Airwallex 2026]; giấy phép MXH đòi doanh nghiệp VN [FACT — r06] | **Không.** Nhận tiền cá nhân, dưới ngưỡng miễn thuế | **Không** |
| **Cần mở lại bề mặt nào của §6** | **Có** — ít nhất một trong: quảng cáo (mục 13), B2B, hoặc bán hàng vật lý. Không có bề mặt nào hiện đang mở ra tiền | Không mở gì | Không mở gì |
| **Trần giờ 10h/tuần** | **Vỡ.** Bán hàng + hỗ trợ + hoàn tiền + kế toán thêm 6–10h/tuần | Giữ được | Giữ được |
| **Xác suất [ước lượng]** | **< 10%** trong 24 tháng | ~60% nếu H1+H2 pass | ~80% nếu ship đúng hạn 15/12/2026 |
| **Rủi ro chính** | Tiêu 2 năm để có 300tr/năm — thấp hơn lương đi làm | Founder tự chán vì "không đi tới đâu" | Không ai đọc; portfolio chỉ có giá nếu được viết ra |

**Điều founder phải nhìn thẳng:** ba định nghĩa này **không** là ba mức tham vọng của cùng một kế hoạch. Chúng là **ba sản phẩm khác nhau**:

- Chọn **A** ⇒ phải quyết ngay hôm nay mở bề mặt tiền nào, vì nó thay đổi schema (identity, entitlement, hoá đơn) và schema phải đúng **trước dòng code đầu tiên**.
- Chọn **B** ⇒ đèn đỏ pháp lý (850 người / 8.500 lượt, QĐ-04) không phải mục tiêu chưa đạt, nó là **trần tự đặt**. Kill gate 31/03/2027 của v2 phải sửa: bỏ vế "doanh thu vẫn bằng 0" ra khỏi điều kiện dừng, vì với B doanh thu 0 là thiết kế chứ không phải thất bại.
- Chọn **C** ⇒ thêm một hạng mục **không có trong 6,5 pw**: viết công khai (build in public). ~2h/tuần × 20 tuần. Nếu không viết, C không tồn tại — không ai biết bạn đã làm gì.

**Khuyến nghị của tài liệu này: chọn C làm mục tiêu chính, B làm trạng thái nghỉ, và giữ A như một cửa chỉ mở nếu B2B tự tìm tới.** Lý do ở §3 và §6.

---

## 2. MÔ HÌNH CHI PHÍ

### 2.1. Chi phí biến đổi / người dùng active / tháng — kiến trúc v2 (web)

Giả định: `q_c = 0,53` (v2 §4.5), 1 tấm/ngày, ảnh gốc 110 KB TTL 72h, thumbnail 320px 18 KB giữ vĩnh viễn, ảnh phục vụ **trực tiếp từ R2** (egress $0), Vercel chỉ phục vụ HTML/JSON.

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
> - **1 tin ZNS = 300đ/tin**, 45.000đ/sổ/tháng nếu dùng làm push [FACT — v2 §9] = **250 năm** chi phí biến đổi/user.
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
| Chi phí cơ hội build (6,5 pw ÷ 0,65 = 10 tuần) | **70–95 triệu VND** (một lần) | v2 §2 |

> **Ngưỡng hoà vốn thật không phải $52/tháng hạ tầng. Nó là 93,6 triệu VND/năm** — số tiền để việc vận hành Chốt Sổ không tệ hơn việc đi làm 10h/tuần freelance.

### 2.4. Điểm chi phí vượt doanh thu, ở nhiều mức conversion

Giả định: sổ trung bình **4 người active** ⇒ `số sổ = MAU ÷ 4`. Giá **99.000đ/sổ/năm**, thực nhận 98,5% (VietQR/chuyển khoản, phí 0–1,5% [FACT — Airwallex: cổng trung gian 1–3%]). Không thuế nếu tổng doanh thu cá nhân dưới ngưỡng miễn (§9).

| MAU | Số sổ | Chi phí hạ tầng/năm | Doanh thu ở `c_g`=0,8% | ở `c_g`=2% | ở `c_g`=5% | ở `c_g`=10% |
|---|---|---|---|---|---|---|
| 1.000 | 250 | 936.000đ | 195.000đ ❌ | 488.000đ ❌ | 1,22tr ✅ | 2,44tr ✅ |
| 10.000 | 2.500 | 16,2 triệu | 1,95tr ❌ | 4,88tr ❌ | 12,2tr ❌ | 24,4tr ✅ |
| 30.000 | 7.500 | 18,7 triệu | 5,85tr ❌ | 14,6tr ❌ | **36,6tr ✅** | 73,1tr ✅ |
| 100.000 | 25.000 | 36,5 triệu | 19,5tr ❌ | 48,8tr ✅ | 122tr ✅ | 244tr ✅ |

**Đọc bảng — ba kết luận:**
1. **Hoà vốn hạ tầng cần `c_g` khoảng 2–5% ở 30k–100k MAU** với giá 99k. Với giá 399k (đề xuất r08), ngưỡng rơi xuống **0,5–1,3%** — dưới trần Discord, tức khả thi về mặt benchmark. Giá quan trọng hơn conversion.
2. **Không có ô nào trong bảng chạm 93,6 triệu/năm** (ngưỡng giờ founder ở §2.3) trừ `c_g`=5% và 10% ở 100.000 MAU. Nghĩa là: **hoà vốn hạ tầng là một cột mốc vô nghĩa.** Nó xảy ra ở quy mô mà founder vẫn đang làm không công.
3. Ở dưới 10.000 MAU — vùng mà dự án này gần như chắc chắn sống trong 12 tháng đầu — **mọi ô đều dưới 25 triệu/năm.** Bàn về monetization ở vùng này là bàn về vài triệu đồng. Đó là lý do §4 nói: **đừng thu tiền, hãy đo ai sẽ trả.**

---

## 3. BA PHƯƠNG ÁN MONETIZATION KHẢ THI SAU KHI LOẠI

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

Còn lại đúng ba thứ.

### 3.1. P1 — "Bao sổ": bán EXPORT, không bán ký ức

**Cơ chế.** Một người trong sổ trả một lần cho cả sổ, 12 tháng. Cái mua được:
- **Tải toàn bộ sổ về máy** — file ZIP: tất cả thumbnail theo ngày + một PDF "sổ" A5 dựng sẵn + file CSV ngày/nhãn.
- **Card chốt sổ độ phân giải in** (2160px thay vì 1080px).
- Một dòng `Sổ này được Minh bao` ở chân card — **ghi công, không phải địa vị mua được**.

**Cái KHÔNG bán, và lý do dứt khoát:** không bán việc kéo dài TTL 72h của ảnh gốc. TTL 72h ở v2 §4.2 được biện minh là **lá chắn pháp lý** cho Điều 32 BLDS 2015 và NĐ 53/2022. Bán việc gỡ lá chắn pháp lý của chính mình là quyết định tệ nhất có thể ra. Bán **export** thì khác: dữ liệu rời khỏi hệ thống, nghĩa vụ lưu trữ giảm chứ không tăng.

**Giá: 99.000đ/sổ/năm.** Lý do neo: Spotify Student VN 33.000đ/tháng [FACT]; ngân sách còn lại của Gen Z VN 20–50k/tháng [suy luận từ r08 §2.3]; chia 4 người = **~25.000đ/người/năm** — dưới một ly trà sữa, một lần trong năm. Giá 399k của r08 được tính cho kênh IAP một chạm; qua VietQR chuyển khoản tay nó là một quyết định lớn, không phải một cú chạm.

**Conversion ước tính.** Neo: Discord 3,2–3,6% MAU (trần) [FACT]; Locket 0,125% trên lượt tải [FACT]; freemium median D35 2,1% [FACT — RevenueCat 2026]; Social & Lifestyle retention subscriber **thấp nhất mọi category** [FACT — RevenueCat 2025]. c-business §5 chứng minh con số 12%-of-active trong r08 §7.2 sai và phải sửa về ≤3,5% MAU. Cộng chiết khấu ma sát VietQR 40–60% [ước lượng]. ⇒ **`c_g` (tỉ lệ SỔ trả tiền): bi quan 0,8% · cơ sở 2% · lạc quan 5%.**

| MAU | Sổ | `c_g`=0,8% | **`c_g`=2%** | `c_g`=5% |
|---|---|---|---|---|
| 10.000 | 2.500 | 1,95 triệu/năm | **4,88 triệu/năm** | 12,2 triệu/năm |
| 50.000 | 12.500 | 9,8 triệu | **24,4 triệu** | 61,0 triệu |
| 100.000 | 25.000 | 19,5 triệu | **48,8 triệu** | 122 triệu |

**Phá nguyên tắc nào?** Không phá §6. **Nhưng nó phá luật đánh đổi 1-1 ở §4.10**: bán bất cứ thứ gì đòi một **entitlement gắn với con người**, mà v2 cố ý xoá danh tính (device token trong `localStorage` + mã 6 ký tự). User xoá cache ⇒ mất quyền đã trả tiền ⇒ yêu cầu hoàn tiền ⇒ giờ vận hành. Cần **email magic link: +0,4 pw**. Không hướng nào và không tài liệu nào tính khoản này. Phải cắt 0,4 pw ở chỗ khác hoặc lùi lịch — không có lựa chọn thứ ba.

### 3.2. P2 — "Sổ in Tết": vật lý hoá, một lần trong năm

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

**Giới hạn tự đặt bắt buộc: 100 đơn/mùa, hết thì đóng.** Vượt trần giờ thì cắt đơn, không cắt giấc ngủ (đúng nguyên tắc v2 §9).

### 3.3. P3 — "Sổ tổ chức": B2B, phương án duy nhất chạm ngưỡng lương

**Cơ chế.** Cùng một sản phẩm, khác khách. Một lớp học / CLB / phòng gym / trung tâm tiếng Anh có sẵn **nhóm Zalo** — đúng bối cảnh mà v2 được thiết kế cho. Người trả không phải người dùng: giáo viên, chủ phòng gym, chủ nhiệm CLB. Cái họ mua: **bằng chứng học viên có làm bài / có tập / có đi**, dạng sổ ảnh theo ngày, kèm export cuối khoá.

**Giá:** **1.500.000đ/tổ chức/tháng** cho sổ ≤50 người, hoặc **30.000đ/người/tháng**. Neo: r08 §8.3 ước 50–150k/người/**năm**; tôi đề xuất cao hơn vì bán theo tháng cho khoá học 2–3 tháng thì tổng chi vẫn ~60–90k/người/khoá, nằm trong dải đó.

| Số khách | Doanh thu/năm | Giờ bán + chăm/năm | Đạt ngưỡng 93,6tr? | Đạt ngưỡng 300tr? |
|---|---|---|---|---|
| 5 | 90 triệu | ~80 giờ (1,5h/tuần) | gần đạt | không |
| 10 | **180 triệu** | ~160 giờ (3,1h/tuần) | **✅** | không |
| 20 | **360 triệu** | ~320 giờ (6,2h/tuần) | ✅ | **✅** |
| 30 | 540 triệu | ~480 giờ (9,2h/tuần) | ✅ | ✅ — **sát trần 10h/tuần** |

_(4 giờ bán/khách + 1 giờ/tháng chăm sóc — [ước lượng])_

> **Đây là con số quan trọng nhất trong toàn tài liệu: 20 khách tổ chức = thu nhập 1 người. Cùng mức thu nhập đó ở B2C đòi 61.000 MAU (giả định lạc quan nhất: giá 399k × `c_g` 5%) hoặc 410.000 MAU (giả định thực tế hơn: giá 99k × `c_g` 3%).**

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
| eCPM **web display VN** (MREC/native trong webview) | **$0,25–0,60** | [ước lượng — **cần kiểm chứng**]. Chốt Sổ không có inventory app ⇒ không dùng được AdMob; phải là AdSense/Ad Manager web, cầu thấp hơn hẳn |
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
3. **Vẫn giữ khoá mục 13 của §6 ở MVP**, thêm điều kiện mở lại có số: _mở khi `MAU ≥ 12.000` và H1 đã pass và founder đã chọn định nghĩa A._ Dưới ngưỡng đó, quảng cáo đổi 27 giây sạch lấy vài triệu đồng và làm tăng rủi ro Zalo cảnh báo domain (v2 §9 mục 7) — một đổi chác tệ.

### 3.5. Bảng so ba phương án

| | P1 Bao sổ | P2 Sổ in Tết | P3 B2B |
|---|---|---|---|
| Doanh thu ở 100k MAU (cơ sở) | 48,8 triệu/năm | 65,6 triệu/năm | không phụ thuộc MAU |
| Đạt 93,6tr (ngưỡng giờ)? | cần `c_g`≥3,8% @100k | cần ~535 đơn (vỡ giờ) | **10 khách** |
| Đạt 300tr (lương 1 người)? | 61k MAU (lạc quan nhất) – 615k MAU (cơ sở) | không bao giờ (đòi ~1.715 đơn/mùa = 343 giờ) | **20 khách** |
| pw phải trả thêm | +0,4 (email magic link) | +0,6 (dựng file in, đơn hàng, đồng ý Điều 32) | +0,8 (multi-sổ admin, hoá đơn, hợp đồng) |
| Phá nguyên tắc | luật đánh đổi §4.10 | trần giờ §9 ở quy mô | **định vị §1 + an toàn vị thành niên** |
| Rủi ro pháp lý riêng | thấp | Điều 32 BLDS (in ảnh) | pháp nhân, ANM 116/2025, bên xử lý dữ liệu |
| **Thứ tự thử** | **2** | **3** | **1 (chỉ thăm dò, 3 cuộc gọi)** |

---

## 4. KHI NÀO BẮT ĐẦU THU TIỀN

Phản biện c-business §8 nói đúng và tài liệu này chấp nhận nguyên văn: **"không thu tiền ở MVP" và "không BIẾT ai sẽ trả" là hai thứ khác nhau, và founder đang gộp làm một.** Geneva có retention tốt, có nhóm bạn yêu app, và tạo ra 0 đồng — **retention không phân biệt được Locket với Geneva.**

**Quyết định: KHÔNG thu tiền thật trước 01/03/2027. ĐO willingness-to-pay từ ngày 12 của Bước 0.**

> **[CHỐT 2026-08-28 — QĐ-01] Ràng buộc pháp lý đè lên toàn bộ §4 này.** `05-lo-trinh-phap-ly.md` §0 kết luận 3 và §2 GIAI ĐOẠN 4: nếu Chốt Sổ là MXH mà chỉ có Giấy xác nhận thông báo, thì **mọi hoạt động phát sinh doanh thu — kể cả quảng cáo, kể cả donate, kể cả bán một cuốn sổ in — đều dành riêng cho MXH đã được cấp Giấy phép**. Vì vậy: **doanh thu tuyệt đối bằng 0 cho tới khi có ý kiến luật sư bằng văn bản cho câu hỏi số 3 ở §11 của `05`.** Bản trước của T4 (thu 399k × 30 suất qua chuyển khoản tay, tư cách cá nhân, chưa có TNHH) là **hành vi có thể vi phạm** và đã bị thay bằng fake pre-order. Nếu luật sư xác nhận cấm ⇒ mọi mốc doanh thu trong §7 phải đọc lại theo §7 ghi chú [CHỐT 2026-08-28].

Năm phép đo, xếp theo ngày, tổng chi phí **0 đồng + 0,2 pw**:

| # | Tên | Khi nào | Chi phí | Cách làm | Ngưỡng đọc kết quả |
|---|---|---|---|---|---|
| **T1** | **Fake door "sổ in"** | **Ngày 12 Bước 0** (19/09/2026) | 0đ, 0 pw | Founder nhắn đúng một lần vào cả 8 sổ, sau khi dán card: _"Cuối năm tao định in cuốn sổ này ra giấy — ảnh cả nhóm, mỗi trang một ngày. Khoảng 400k/cuốn. Đứa nào thấy đáng thì thả tim phát."_ | **≥3/8 sổ có ≥1 tim = WTP tồn tại ở hình dạng vật lý.** 0/8 = P2 chết |
| **T2** | **Van Westendorp 4 câu** | **Ngày 13 Bước 0** | 0đ, 0 pw | Google Form gửi ~35 người Bước 0. 4 câu về "tải cả sổ về máy + card in được, 1 đứa trả cho cả nhóm, 1 năm": rẻ đến mức nghi ngờ / rẻ / bắt đầu đắt / đắt không mua | Ra dải giá chấp nhận (PMC/OPP). **Nếu OPP < 60.000đ ⇒ P1 không đáng làm** — doanh thu không đủ trả 0,4 pw entitlement |
| **T3** | **Fake door thật trong sản phẩm** | **Tuần 4 của beta** (~cuối 12/2026) | **0,2 pw** | Nút "Bao cả sổ" trên màn Của tôi → màn: _"Chưa mở bán. Để lại Zalo, mở bán tụi mình tặng 6 tháng."_ Không thu tiền ⇒ không nhiễu retention, không dính review nào | **≥5% sổ có ≥1 người chạm = giả thuyết P1 sống. <2% = chết, chuyển ngay sang B2B hoặc chấp nhận định nghĩa B/C** |
| **T4** | **Fake pre-order — thu CAM KẾT, KHÔNG thu tiền** [CHỐT 2026-08-28, QĐ-01] | **20/12/2026 – 20/01/2027**, chỉ khi T1 pass | 0 pw code | 30 suất "Sổ in Tết 2027", niêm yết 399k. Google Form thu **tên + số điện thoại + câu "tôi đồng ý đặt trước"**. **KHÔNG có số tài khoản, KHÔNG có chuyển khoản, KHÔNG nhận một đồng nào.** Founder gọi lại xác nhận từng người sau khi có ý kiến luật sư (câu 3, §11 của `05`) | **≥10 người để lại SĐT trong 14 ngày = WTP thật ở mức cam kết.** <3 người = P2 chết. Lưu ý: đây là tín hiệu YẾU HƠN tiền thật khoảng 2–3 lần [ước lượng] — phải đọc kèm hệ số chiết khấu đó, không được coi 10 cam kết = 10 đơn |
| **T5** | **3 cuộc gọi B2B** | **Trong Bước 0**, song song | 3 giờ | Gọi 1 giáo viên trung tâm tiếng Anh, 1 chủ phòng gym, 1 chủ nhiệm CLB sinh viên. Đúng một câu hỏi: _"Nếu có một cái sổ ảnh hằng ngày của lớp/hội viên, chạy ngay trong nhóm Zalo có sẵn, anh/chị trả bao nhiêu một tháng?"_ | **≥2/3 nói ra một con số ≥500.000đ = cửa B2B mở.** Ghi nguyên văn, không diễn giải |

**Ba luật của phép đo giá:**
1. **T3 lấp vào slot 8 đang để trống ở v2 §5.** v2 dành slot đó cho "đúng một màn được phát hiện là bắt buộc trong Bước 0". Nếu T1+T2 cho tín hiệu giá, thì màn bắt buộc đó **chính là fake door**, không phải một tính năng. Đây là cách duy nhất thêm phép đo giá mà không phá luật đánh đổi 1-1.
2. **Cửa sổ WTP cao nhất không phải tháng thứ 6.** c-business §3.4 chứng minh paywall-90-ngày đặt vào đúng lúc cohort đã rụng quá nửa. Với v2, đỉnh cảm xúc là **mốc 100 tấm** (ngày 38 ở A=5, `q_c`=0,53 — v2 Bảng 4) và **cuối tháng 12/đầu tháng 1** (Tết). Cả T3 và T4 đặt đúng hai điểm đó.
3. **Không được để phép đo giá làm nhiễu H1/H2/H3.** T1 nằm ngày 12, tức **sau** cả ba ngày cửa sổ im lặng (8, 11, 14 — khoan, ngày 14 nằm sau T1). ⇒ **Sửa lịch: T1 chuyển sang ngày 12 chỉ khi ngày 14 vẫn giữ im lặng tuyệt đối về mọi thứ trừ card.** An toàn hơn: **T1 và T2 chạy ngày 15, tức một ngày SAU Bước 0**, gửi qua tin nhắn riêng chứ không vào sổ. Đây là sửa đổi bắt buộc — bảo vệ H2 quan trọng hơn sớm 3 ngày.

---

## 5. KIỂM SOÁT CHI PHÍ BẮT BUỘC TỪ NGÀY ĐẦU

Mỗi dòng dưới đây phải nằm trong code **trước** khi có user thứ 100. Sửa sau đắt gấp 10 lần.

| # | Giới hạn | Giá trị số | Lý do chi phí | User có thấy khó chịu? |
|---|---|---|---|---|
| 1 | Nén ảnh client-side | cạnh dài **1080px, JPEG q=0,72 → ~110 KB** | Ảnh gốc điện thoại 2–4 MB ⇒ giảm **20–36×** băng thông upload và storage | **Không** — mắt thường không phân biệt ở kích thước hiển thị |
| 2 | Thumbnail giữ vĩnh viễn | **320px, ~18 KB** | Giảm **6,1×** storage tích luỹ so với giữ ảnh 110 KB | Nhẹ — không zoom được ảnh cũ. Chính giới hạn này làm P1 (export) có giá trị |
| 3 | **TTL ảnh gốc** | **72 giờ** | Giữ dung lượng thường trực ở mức phẳng (175 KB/user) thay vì tăng tuyến tính. Kiêm lá chắn Điều 32 BLDS + NĐ 53/2022 | Nhẹ, nếu nói trước ở màn Nộp bằng một dòng |
| 4 | **1 PUT/ngày thay vì 2** (cân nhắc: chỉ lưu thumbnail, bỏ hẳn ảnh gốc) | 60 → **30 PUT/user/tháng** | R2 Class A là **47% chi phí biến đổi**. Cắt còn ~8đ/user/tháng | Không — nhưng **xoá luôn khả năng bán export ảnh gốc**. Quyết định này phải ra cùng lúc với quyết định P1 |
| 5 | Ảnh phục vụ **trực tiếp từ R2**, không qua Vercel | 0 byte ảnh qua Vercel | R2 egress **$0** vs Vercel **$0,15/GB**. Ở 100k MAU đây là chênh **$45–90/tháng** | Không |
| 6 | Trần 1 tấm/người/ngày, nộp lại **ghi đè** | 1 | Chặn cứng trần storage ở `A × 365 × 18 KB/năm` | Không — đã là nguyên tắc sản phẩm |
| 7 | Trần thành viên/sổ | **8** | Chặn fanout đọc (mỗi lần mở sổ tải N thumbnail). Kiêm ràng buộc "nhóm kín" cho lập luận không-phải-MXH | Không (nhóm bạn thân điển hình 4–6) |
| 8 | Trần số sổ/thiết bị | **1 ở MVP** [CHỐT 2026-08-28, QĐ-08] · 3 khi mở đa sổ ở v1.1 | v2 §6 mục 14 khoá đa sổ trong UI ở MVP, nên trần 3 chưa có nghĩa. Giữ dòng này như **hằng số đã đặt trước** cho ngày mở nút "Mở sổ mới"; khoá CSDL dùng `UNIQUE(book_id, person_id, book_date)` của `04` §1.4 (KHÔNG dùng khoá `(person_id, logical_date)` — khoá đó chặn cứng đa sổ vĩnh viễn) | Rất ít |
| 9 | Rate limit upload | **10 tấm/giờ/thiết bị** | Chặn kịch bản 1 script đẩy 5.000 ảnh = $22 Class A trong một buổi tối | Không |
| 10 | Trần kích thước file nhận | **8 MB trước nén**, lớn hơn thì từ chối tại client | Chặn upload frame video / ảnh RAW | Không |
| 11 | **Cache card**: render 1 lần/sổ/ngày, lưu R2, các lần bấm sau trả file cũ | 1 render/sổ/ngày | Ngăn 1 sổ bấm Chốt sổ 50 lần = 50× CPU satori | Không — card một ngày vốn không đổi sau 21:00 |
| 12 | **Dọn sổ chết** — [CHỐT 2026-08-28, QĐ-11] **KHÔNG xoá thumbnail** | 0 tấm trong **60 ngày** → thông báo trong app · **180 ngày** → chuyển thumbnail sang lớp lưu trữ lạnh (R2 Infrequent Access) và **giữ nguyên**. Chỉ xoá khi **mọi** thành viên đã rời sổ (`book.status = archived`) + báo trước 30 ngày + có đường tải về | Kinh tế không biện minh được việc xoá: ở **10.000 sổ**, toàn bộ thumbnail ≈ **200 GB ≈ $3/tháng** (bảng `04` §6.1). Đổi lại là phá lời hứa "thumbnail giữ vĩnh viễn" của v2 §4.2, `04` §6.1 và `08` §7.2 — đúng tài sản làm nên nguyên tắc P4 và toàn bộ giá trị của sổ ngủ đông | **Không** |
| 13 | TTL event analytics thô | **90 ngày**, sau đó chỉ giữ tổng hợp cấp sổ | Giữ Supabase dưới trần Pro 8 GB tới ~80k MAU | Không |
| 14 | **Không SMS OTP** dưới ngưỡng pháp lý — [CHỐT 2026-08-28, QĐ-04] **hai counter, không phải con số 700** | `monthly_visits`: vàng **6.000** / đỏ **8.500** · `monthly_active_persons`: vàng **600** / đỏ **850** | Ngưỡng NĐ 147/2024 là **OR** (`10.000 lượt truy cập/tháng` HOẶC `1.000 người dùng thường xuyên/tháng`), và nhánh lượt-truy-cập **bind trước ~2,5 lần** (`05` §0 kết luận 2). Con số 700 cũ báo động muộn 2,5 lần. 1 SMS = 7.400đ = **41 năm** chi phí biến đổi của user đó | Không (v2 đã không có màn đăng nhập) |
| 15 | **Không ZNS** làm kênh mặc định | 0 tin | 45.000đ/sổ/tháng = **250 năm** chi phí biến đổi/user | Không |
| 16 | Đổi kèo | **1 lần/30 ngày** | Không phải chi phí hạ tầng — chi phí **hỗ trợ** (mỗi lần đổi sinh câu hỏi) | Nhẹ, đã là nguyên tắc sản phẩm |

**Một dòng cảnh báo cứng trong dashboard, không phải một việc để nhớ:** chi phí hạ tầng vượt **$60/tháng trong khi doanh thu = 0** ⇒ đó là **lỗi cấu hình, không phải dấu hiệu quy mô**. Dừng viết feature, đi đọc hoá đơn.

---

## 6. UNIT ECONOMICS — 3 KỊCH BẢN, MỌI GIẢ ĐỊNH LỘ RA THÀNH THAM SỐ

### 6.1. Bảng tham số (đây là bảng để sửa số, đừng sửa ở nơi khác)

| Ký hiệu | Tham số | Bi quan | **Cơ sở** | Lạc quan | Nhãn |
|---|---|---|---|---|---|
| `S12` | Số sổ active ở tháng 12 | 40 | **800** | 6.000 | [ước lượng] |
| `A` | Người active/sổ | 3,0 | **4,0** | 4,5 | [ước lượng — r01 khuyến nghị 4–6] |
| `MAU` | `= S12 × A` | 120 | **3.200** | 27.000 | số học |
| `q_c` | Tỉ lệ có mặt | 0,40 | **0,53** | 0,60 | v2 §4.5, giả thuyết H2 |
| `DAU/MAU` | | 0,25 | **0,33** | 0,40 | [suy luận — r04] |
| `c_g` | % sổ trả P1 | 0,8% | **2,0%** | 5,0% | §3.1 |
| `P1` | Giá bao sổ/năm | 99.000đ | **99.000đ** | 99.000đ | §3.1 |
| `c_pr` | % sổ đặt sổ in | 0% | **1,5%** | 2,5% | §3.2 |
| `M_pr` | Biên gộp/cuốn | — | **175.000đ** | 175.000đ | §3.2 |
| `f` | Tỉ lệ thực nhận (VietQR) | 0,985 | **0,985** | 0,985 | [FACT — cổng 1–3%] |
| `t` | Thuế | 0 | **0** | 0 | Dưới ngưỡng miễn — §9, **cần kiểm chứng** |
| `Cv` | Chi phí biến đổi/user/tháng | 20đ | **15đ** | 12đ | §2.1 |
| `Cf` | Chi phí cố định/tháng | 78.000đ | **500.000đ** | 1.560.000đ | §2.2 |
| `H` | Giờ vận hành/tuần | 4 | **8** | 12 | v2 §9, trần 10 |
| `w` | Giá giờ founder | 180.000đ | **180.000đ** | 180.000đ | [ước lượng] |

### 6.2. Kết quả năm 1 (tháng 09/2026 → 09/2027)

| Dòng | Bi quan | **Cơ sở** | Lạc quan |
|---|---|---|---|
| MAU cuối kỳ | 120 | **3.200** | 27.000 |
| Doanh thu P1 (`S12 × c_g × P1 × f`) | 31.000đ | **1,56 triệu** | 29,3 triệu |
| Doanh thu P2 (`S12 × c_pr × M_pr`) | 0 | **2,10 triệu** | 26,3 triệu |
| **Tổng doanh thu ròng** | **31.000đ** | **3,66 triệu** | **55,6 triệu** |
| Chi phí hạ tầng (`Cf×12 + MAU×Cv×12`) | 965.000đ | **6,58 triệu** | 22,6 triệu |
| **Biên trước công founder** | **−934.000đ** | **−2,92 triệu** | **+33,0 triệu** |
| Chi phí cơ hội vận hành (`H×52×w`) | 37,4 triệu | **74,9 triệu** | 112,3 triệu |
| **Biên sau công founder** | **−38,3 triệu** | **−77,8 triệu** | **−79,3 triệu** |
| Doanh thu/MAU/năm | 258đ | **1.144đ** | 2.059đ |
| **LTV/CAC** | — | **không áp dụng: CAC = 0** | — |

**Ba điều bảng này nói, và không bảng nào trước nói được:**

1. **Kịch bản lạc quan có biên hạ tầng DƯƠNG (+33 triệu/năm) — lần đầu tiên trong toàn hồ sơ.** Đó là hệ quả trực tiếp của kiến trúc web: chi phí cố định 1,56 triệu/tháng thay vì $260. Nhưng nó vẫn **âm 79 triệu** sau khi trả công vận hành. **Chi phí giết dự án này chưa bao giờ là server.**
2. **LTV/CAC không phải chỉ số đúng cho v2.** r08 §7.2 tính LTV/CAC = 0,03–0,79 và kết luận "không được chi một đồng cho paid acquisition". Với v2, CAC **bằng 0 theo thiết kế** — không có install để mua, tăng trưởng chỉ đi qua link dán vào nhóm Zalo. Chia cho 0 không ra 0,79, nó ra vô cực hoặc vô nghĩa. **Chỉ số đúng thay thế: `doanh thu ròng ÷ chi phí cơ hội giờ`** — cơ sở = **0,049**. Cần **20,5 lần** hiện tại mới hoà.
3. **Doanh thu/MAU/năm dao động 258đ – 2.059đ, tức 8 lần.** Cùng biên độ 13 lần mà c-business §1.4 chỉ ra ở chi phí. Một mô hình có biên độ 8–13× ở cả hai vế **chưa phải một mô hình kinh doanh** — nó là một khoảng cần thu hẹp bằng T1–T5, không phải một dự báo.

### 6.3. Ngưỡng lương 1 người — bảng tra cứu

Cần **300 triệu VND/năm ròng**. `Số sổ cần = 300.000.000 ÷ (c_g × P × 0,985)`, MAU = sổ × 4.

| Giá `P` | `c_g`=2% | `c_g`=3,5% (trần Discord) | `c_g`=5% |
|---|---|---|---|
| **99.000đ** | 153.800 sổ — **615.000 MAU** | 87.900 sổ — **352.000 MAU** | 61.500 sổ — **246.000 MAU** |
| **199.000đ** | 76.500 sổ — **306.000 MAU** | 43.700 sổ — **175.000 MAU** | 30.600 sổ — **122.000 MAU** |
| **399.000đ** | 38.200 sổ — **153.000 MAU** | 21.800 sổ — **87.000 MAU** | 15.300 sổ — **61.000 MAU** |

Cùng phép tính với ngưỡng thấp hơn — **93,6 triệu/năm** (chỉ trả công vận hành 10h/tuần, không phải lương) — cho dải **47.600 – 192.000 MAU**.

**Đọc thẳng, không tô hồng và không bôi đen:**
- **Ô lạc quan nhất (399k × 5% = 61.000 MAU) không phải bất khả thi về mặt vật lý** — nó trùng khớp đáng ngạc nhiên với ước lượng "60.000 DAU" của c-business §1.4, và con số này được tính theo hai đường hoàn toàn khác nhau. Đó là điểm giao duy nhất trong hồ sơ mà hai phương pháp độc lập cho cùng một đáp số.
- **Nhưng ô đó đòi HAI thứ lạc quan cùng lúc:** giá 399.000đ (4× mức tôi đề xuất ở §3.1, và bán qua **chuyển khoản tay** chứ không phải một cú chạm Face ID) **và** conversion 5% cấp sổ (cao hơn trần Discord 3,5%, ở thị trường mà chỉ 7–10% game user từng trả một đồng [FACT — r02/Antom]). Xác suất hai thứ đó đúng cùng lúc [ước lượng] **dưới 5%**.
- **Ô cơ sở thật (99k × 2%) đòi 615.000 MAU** — vượt mọi tiền lệ trong r01 cho một app social ritual Gen Z.
- ⇒ Kết luận không đổi, nhưng lý do phải nói cho đúng: **không phải "toán học cấm", mà là "đòi thắng ở cả giá lẫn conversion, trong khi kênh thanh toán web làm cả hai xấu đi".**

Và cùng ngưỡng 300 triệu đó cho P3: **20 khách tổ chức.** So sánh: **20 khách** vs **61.000–615.000 người dùng**. Hai vế không cùng đơn vị, nhưng độ khó của việc đi tìm chúng thì có thể so — và không gần nhau.

---

## 7. NGƯỠNG "ĐỦ ĐỂ ĐÁNG LÀM TIẾP" VÀ NGƯỠNG "PHẢI DỪNG VÌ TIỀN"

| Mốc | Ngày | Đủ để làm tiếp (cần **tất cả**) | Phải dừng/đổi (bất kỳ **một**) |
|---|---|---|---|
| **G0 — Bước 0** | **22/09/2026** | H2 `q_c_roster` ≥0,45 & `q_x` ≥0,30 trên cửa sổ im lặng **và** ≥60% sổ nhánh A đạt **≥9/14 ngày tính** · H3 đạt · ≥1 sổ tự hỏi "mai còn chốt sổ không?" | H1 click-shortlink **<40%** ⇒ dừng · H2 `q_c_roster` <0,35 ⇒ **dừng toàn bộ hướng nộp-ảnh-mỗi-ngày** · 0/8 sổ hỏi ⇒ dừng |

> **[CHỐT 2026-08-28 — QĐ-05, QĐ-06] Hai sửa đổi trong dòng G0.** (a) **H1 mất quyền ĐI, chỉ giữ quyền DỪNG.** `02` §5.7 + §8(4) chứng minh cả ba proxy đo H1 ở Bước 0 đều lệch đã biết, và `06` BĐ-3 chỉ ra ảnh Canva dán vào Zalo **không sinh sự kiện "mở"** — nên "≥60%" ở Bước 0 là một con số không có thiết bị đo. Ngưỡng ≥60% dời sang **tuần 2 của beta**, khi có event `card_open` thật. (b) **Tiêu chí H2 đổi từ "chuỗi ≥5 ngày" sang "≥9/14 ngày tính".** `06` BĐ-2 tính sức phân biệt: với van 2 ngày nghỉ/tuần, "giữ chuỗi ≥5 ngày" gần như tự động đạt; tiêu chí ≥9/14 tách nhóm fail/đạt ở **31,6% vs 98,5%**. (c) Mẫu số là **`q_c_roster`** (roster đóng băng), không phải `q_c` trượt — xem QĐ-03.
| **G1 — Giá sơ bộ** | **26/09/2026** | T1 ≥3/8 sổ · T2 OPP ≥60.000đ · T5 ≥2/3 nói số ≥500k | T1 = 0/8 **và** T5 = 0/3 nói số ⇒ **không tồn tại người trả tiền ở bất kỳ hình dạng nào** ⇒ khoá vĩnh viễn định nghĩa A, chuyển sang B hoặc C |
| **G2 — Beta** | **26/01/2027** [CHỐT 2026-08-28, QĐ-13] | `sổ-D28 ≥ 25%` trên **cohort tuần 1–4 của beta (02/12 → 29/12/2026), ≥24 sổ** · `group-D14 ≥ B` (neo Bước 0) · T3 ≥5% sổ chạm | T3 <2% ⇒ P1 chết, không build thanh toán · Chi phí hạ tầng **>$60/tháng** khi doanh thu 0 ⇒ lỗi cấu hình, dừng viết feature |

> **[CHỐT 2026-08-28 — QĐ-13] Ngày và cỡ mẫu của G2.** Ba tài liệu ghi ba ngày (`09` §8: 20/01 · `10` cũ: 31/01 · `06` §6 tuần 24: 22/02) cho **cùng một cổng**. Chốt: cohort quyết định = **các sổ hình thành trong tuần 1–4 của beta**, đọc D28 khi cohort đó đủ 28 ngày ⇒ **26/01/2027**. Điều kiện "≥30 sổ" bị hạ xuống **≥24 sổ** vì chính dự báo cơ sở của `09` §1.2 chỉ sinh 8+6+5+5 = **24 sổ** ở 4 tuần đầu và trần vận hành là 35 sổ sống — giữ ≥30 nghĩa là **cổng không bao giờ mở được ở kịch bản cơ sở**. Với n=24, khoảng tin cậy 95% của một tỉ lệ ~25% là **±17 điểm** — con số đó phải được ghi kèm mỗi lần trích dẫn `sổ-D28`, không được đọc như một số chính xác.
| **G3 — Kill gate founder** (v2 §9) | **31/03/2027** | <15h/tuần **hoặc** `group-D28`≥25% **hoặc** có doanh thu | >15h/tuần **và** doanh thu 0 **và** `group-D28`<25% ⇒ **dừng dứt khoát trong tuần đó** |
| **G4 — Cổng tiền** | **30/06/2027** | **Nhánh (i) — luật sư nói ĐƯỢC thu ở tier thông báo:** doanh thu ròng 12 tháng ≥ **20 triệu** **hoặc** ≥3 khách B2B trả tiền. **Nhánh (ii) — luật sư nói KHÔNG được thu (mặc định giả định cho tới khi có văn bản):** tiêu chí là **ý định trả tiền**, không phải tiền — T3 ≥5% sổ chạm fake door **và** T4 ≥10 cam kết **và** T5 ≥2/3 nói ra con số ≥500k | **Nhánh (i):** doanh thu ròng < 5 triệu **và** T4 <3 cam kết. **Nhánh (ii):** T3 <2% **và** T4 <3 cam kết. Cả hai nhánh ⇒ **B2C monetization đã bị bác bằng thực nghiệm** |

> **[CHỐT 2026-08-28 — QĐ-01b] Vì sao G4 phải có hai nhánh.** Nếu pháp lý cấm phát sinh doanh thu ở tier thông báo, thì "doanh thu = 0" **không phải tín hiệu thị trường, nó là hệ quả pháp lý** — dùng nó làm tiêu chí đi/dừng là tự lừa mình. Đây chính là điều §1 của tài liệu này đã nhận ra khi nói kill gate G3 phải bỏ vế "doanh thu vẫn bằng 0". Nhánh nào có hiệu lực **do câu trả lời số 3 của luật sư quyết định**, không do founder chọn. Hạn có câu trả lời: **trước 20/12/2026** (ngày T4 khởi động).
| **G5 — Trần tiền mặt** | bất kỳ lúc nào | — | Tổng tiền mặt đã bỏ ra vượt **30 triệu VND** mà chưa có 1 đồng doanh thu **và** `group-D28`<25% ⇒ dừng |

**Ngưỡng G5 tồn tại vì một lý do:** với chi phí tiền mặt 6 tháng chỉ ~7–17 triệu (§9), founder sẽ **không bao giờ bị tiền buộc phải dừng**. Runway gần như vô hạn nghe như ưu điểm; thực ra nó là cái bẫy — nó xoá mất tín hiệu dừng tự nhiên duy nhất mà một dự án thường có. **G3 và G5 phải viết ra giấy và dán lên tường, đúng như v2 §9 mục 12 đã làm với G3.**

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
| **1** | **B2B trong VN** | Giữ nguyên Zalo, giữ nguyên ngôn ngữ, giữ nguyên sản phẩm. **20 khách = lương 1 người.** Chính sự phụ thuộc Zalo chặn đường xuất khẩu lại là điều làm B2B VN chạy được — lớp học, phòng gym, CLB VN đều vận hành trên nhóm Zalo | T5 ≥2/3 nói số ≥500k |
| **2** | **Ở lại B2C VN, chấp nhận định nghĩa B hoặc C** | Chi phí thật ~$3/tháng. Không cần thắng gì | mặc định |
| **3** | Indonesia / Philippines (WhatsApp-native) | Cùng hình dạng "web trong nhóm chat", WhatsApp thống trị, Android chiếm ưu thế ⇒ **lập luận push-chết vẫn đúng**. Nhưng ARPU **không hơn VN** [FACT — cùng nhóm IN/SEA $14] và founder không hiểu văn hoá | Chỉ khi group-D28 ≥35% ở VN và founder có người bản địa |
| **4** | **Mỹ** | ARPU 2,3× nhưng **mất lý do tồn tại của hướng D** (push hoạt động ⇒ native app thắng), không phân phối, không insight, phải viết lại toàn bộ | **Không mở.** Nếu founder thật sự muốn Mỹ, đó là một sản phẩm khác và phải viết lại tài liệu §1 |

**Kết luận mục 8: bỏ hẳn "mở bản EN cho US college" khỏi mọi kế hoạch của v2.** Nó là khuyến nghị đúng cho một app native (r08 §8.2 viết trước khi có v2) và là khuyến nghị sai cho một web app sống ký sinh trên Zalo. Chi phí i18n plumbing vẫn gần 0 và vẫn nên làm; coi nó là **đường ra doanh thu** thì sai.

---

## 9. CHI PHÍ TỐI THIỂU 6 THÁNG ĐẦU (09/2026 → 02/2027) — TIỀN MẶT THẬT

| Hạng mục | Bắt buộc? | Tiền mặt 6 tháng | Ghi chú |
|---|---|---|---|
| Domain `chotso.vn` (1 năm) | **Có** — v2 §12, và là điều kiện giấy phép MXH sau này | **~750.000đ** [ước lượng — **cần kiểm chứng** giá VNNIC/nhà đăng ký] | Việc rẻ nhất, tốn thời gian chờ nhất. Mua trong tuần này |
| Vercel | Có | **0đ** (Hobby đủ tới beta 30 sổ) | Pro $20/tháng chỉ khi vượt |
| Supabase | Có | **0đ** (Free tier đủ tới ~5.000 MAU) | Pro $25/tháng khi cần |
| Cloudflare R2 | Có | **0đ** (free 10 GB; beta 30 sổ ≈ 0,6 GB/năm) | |
| Sentry / analytics | Có | **0đ** (free tier) | |
| Apple Developer $99/năm | **KHÔNG** | **0đ** | Không lên store — v2 §5. **Tiết kiệm 2,6 triệu/năm** |
| Google Play $25 | **KHÔNG** | **0đ** | như trên |
| D-U-N-S Number | **KHÔNG** | 0đ | Chỉ cần cho Apple Organization. v2 §12 cấm làm |
| **Tư vấn luật sư — 1 câu hỏi MXH/G1** | **Có** — v2 §9 mục 1, §12 | **5.000.000 – 15.000.000đ** [ước lượng — r08 §9.1] | **Khoản chi lớn nhất và duy nhất đáng kể.** Rẻ hơn 5–19 lần chi phí cơ hội của 10 tuần build sai |
| Thành lập TNHH | **KHÔNG trong 6 tháng đầu** | **0đ** | v2 §12 cấm. Chỉ bắt buộc khi (a) chạm 1.000 người dùng thường xuyên/tháng, hoặc (b) chọn P3 B2B. Chi phí khi cần: lệ phí ĐKKD 50.000đ + công bố 100.000đ + dịch vụ 1–3 triệu + chữ ký số 1,5–2 triệu/năm + kế toán 500k–1,5tr/tháng [ước lượng — **cần kiểm chứng**] |
| Cổng thanh toán merchant | **KHÔNG** | 0đ | Đòi ĐKKD [FACT — Airwallex 2026]. T4 dùng chuyển khoản cá nhân + Google Form |
| In thử 1 cuốn sổ mẫu (nếu T1 pass) | Không | 200.000–240.000đ | Chỉ chi sau khi T1 pass |
| Canva Pro (Bước 0) | Không | 0đ (bản free đủ) | |
| **TỔNG BẮT BUỘC** | | **5,75 – 15,75 triệu VND** | |
| **TỔNG nếu cộng luôn hạ tầng trả phí sớm + sổ mẫu** | | **~7 – 17,5 triệu VND** | |

**Ba điều bảng này nói:**
1. **Toàn bộ rủi ro tiền mặt 6 tháng của dự án nhỏ hơn một tháng lương dev.** 90% trong đó là phí luật sư — tức khoản chi duy nhất mua được thứ founder không tự làm được.
2. **Đối chiếu:** chi phí cơ hội của 6,5 pw là **70–95 triệu**, cộng ~47 triệu chi phí cơ hội vận hành 6 tháng ⇒ **tổng chi phí thật ~120–160 triệu**, trong đó tiền mặt chỉ **7–17 triệu (~10%)**. v2 §10(i) đã nói đúng điều này; bảng trên là bản định lượng.
3. **Hệ quả cho quyết định:** vì tiền mặt không phải ràng buộc, **mọi quyết định "tiết kiệm tiền" đều sai nếu nó tốn thêm giờ.** Ví dụ: tự host để tiết kiệm $25 Supabase = tiết kiệm 650.000đ/năm bằng cách tiêu 4 giờ/năm bảo trì (720.000đ). Trả tiền, đừng tự host.

---

## Bất đồng với định nghĩa sản phẩm v2

Bốn điểm. Không điểm nào đòi đổi hướng; ba điểm đòi sửa một dòng.

**1. §9 mục 5 gọi tên tham vọng là _"small profitable business HOẶC portfolio piece"_. Vế đầu không phải một lựa chọn còn sống.** Bảng §6.3 của tài liệu này cho thấy thu nhập 1 người ở B2C-VN đòi **611.000 – 24,6 triệu MAU** tuỳ giá × conversion. Đó không phải "small business", đó là "top 3 social app VN". Tập lựa chọn đúng phải là: **{portfolio/bàn đạp, dự án cá nhân 0đ, pivot B2B}**. Đề nghị sửa một dòng ở §9 mục 5, vì tên gọi quyết định mức chi tiêu và mức rủi ro chấp nhận — chính lập luận mà v2 đã dùng đúng.

**2. §10(b) hàm ý rằng con số 2,6 tỷ được tính trên "đường ray sai" và quảng cáo sẽ cho con số đúng hơn. Tôi đã làm phép tính đó (§3.4) và kết quả là ÂM: trần quảng cáo ở 1 triệu MAU là 1,3–2,3 tỷ VND/năm — thấp hơn hoặc bằng con số cũ.** Việc bàn giấy 3 giờ ở §12 (06/09) nên được đánh dấu **đã hoàn thành với kết luận phủ định**, và ô ngày 06/09 dùng cho việc khác (đề nghị: 3 cuộc gọi B2B — T5). Đề nghị sửa §10(b) thành: _"quảng cáo là cách trả tiền hạ tầng từ ~12.000 MAU, không phải mô hình kinh doanh"_.

**3. §4.10 luật đánh đổi 1-1 chưa tính hai khoản pw mà BẤT KỲ hình thức thu tiền nào cũng kích hoạt:**
- **+0,4 pw email magic link.** v2 §5 xoá màn Đăng nhập, dùng device token trong `localStorage`. Một entitlement đã trả tiền không thể sống trong `localStorage` — user xoá cache là mất quyền, và mất quyền đã trả tiền sinh yêu cầu hoàn tiền, tức giờ vận hành. Không có cách rẻ hơn 0,4 pw.
- **+0,2 pw fake door T3.** Tài liệu này đề xuất lấp vào **slot 8 để trống ở §5**, đó là cách duy nhất không phá luật 1-1. Nhưng §5 định nghĩa slot 8 là "màn được phát hiện là bắt buộc trong Bước 0" — cần một câu cho phép fake door đủ tư cách chiếm slot đó.

Nếu founder chọn định nghĩa B hoặc C, cả hai khoản này bằng 0 và §4.10 giữ nguyên. **Đó là lý do việc chọn định nghĩa phải xảy ra ngày 22/09, không phải sau MVP.**

**4. §11 sắp lịch cửa sổ im lặng vào ngày 8, 11, 14 của Bước 0, còn tài liệu này cần một phép đo giá (T1) sớm.** Đây là xung đột thật. **Tôi nhường: T1 và T2 dời sang ngày 15 (sau Bước 0), gửi qua tin nhắn riêng, không vào sổ.** Bảo vệ H2 quan trọng hơn sớm ba ngày — nhưng ghi ra đây để nó là một quyết định có ý thức chứ không phải một sự trôi lịch.

**Điểm KHÔNG bất đồng, ghi lại để không bị mở lại:** giữ nguyên §6 mục 10 (không vật phẩm ảo, vĩnh viễn), mục 6 (không xếp hạng, vĩnh viễn), mục 13 (khoá quảng cáo ở MVP), TTL 72h, và trần 6,5 pw. Tài liệu này không xin thêm một pw nào ngoài hai khoản ở điểm 3, và cả hai đều **có điều kiện** — chỉ tồn tại nếu founder chọn định nghĩa A.

---

## Câu hỏi mở cần founder quyết

| # | Câu hỏi | Hạn chót | Vì sao không thể hoãn |
|---|---|---|---|
| **1** | **Chọn A, B hay C?** (§1) | **22/09/2026**, cùng lúc với quyết định Bước 0 | Nó quyết định schema (có entitlement hay không), quyết định 0,6 pw, quyết định có lập pháp nhân hay không, và quyết định vế "doanh thu 0" trong kill gate G3 có ý nghĩa gì |
| **2** | Nếu chọn **A**: mở bề mặt nào — **P1 export, P2 in, hay P3 B2B**? Chọn **đúng một** | 22/09/2026 | Mỗi cái đòi một khoản pw khác nhau và phá một nguyên tắc khác nhau (§3.5). Làm hai cái cùng lúc là cách chắc chắn nhất để không làm xong cái nào |
| **3** | Nếu chọn **B**: có **cố ý** giữ dưới đèn đỏ pháp lý (850 người/tháng **và** 8.500 lượt/tháng — QĐ-04) để không chạm ngưỡng giấy phép MXH không? | 22/09/2026 | Nếu có, đó là một **trần thiết kế** phải viết vào ADR, và mọi kênh tăng trưởng phải bị tắt chủ động. Nếu không, phải chuẩn bị pháp nhân từ ~500 MAU |
| **4** | **Quyết định dòng 4 ở §5: có lưu ảnh gốc không?** Bỏ ⇒ cắt 47% chi phí biến đổi nhưng xoá vĩnh viễn khả năng bán export ảnh gốc | **Trước dòng code đầu tiên (23/09)** | Sửa sau khi đã có ảnh của user là migration, không phải một dòng code |
| **5** | Sẵn sàng chi **5–15 triệu phí luật sư** trước khi biết có một đồng doanh thu nào không? | 03/09/2026 (v2 §12 đã đặt là việc tuần này) | Đây là 90% ngân sách tiền mặt 6 tháng. Nếu câu trả lời là không, thì câu hỏi thật là "có thật sự định làm dự án này không" |
| **6** | Ai đứng tên nhận tiền nếu T4 bán được? **Cá nhân** (miễn thuế dưới ngưỡng — **cần kiểm chứng** ngưỡng 100 hay 200 triệu/năm theo Luật thuế GTGT mới hiệu lực 01/01/2026) hay **TNHH**? | Trước 20/12/2026 (mở bán T4) | Thu tiền vào tài khoản cá nhân mà không kiểm tra ngưỡng miễn thuế là rủi ro truy thu — Cục Thuế đã truy thu 203 tỷ từ nhóm developer App Store [FACT — r06] |
| **7** | Nếu **G4 (30/06/2027) fail**: chuyển hẳn B2B hay chấp nhận định nghĩa B vĩnh viễn? | Viết câu trả lời **hôm nay**, mở ra đọc vào 30/06/2027 | Cùng lý do v2 §9 mục 12 viết kill gate hôm nay: 30/06/2027 founder sẽ không còn khách quan |

### Ba con số cần kiểm chứng, không được dùng để ra quyết định trước khi kiểm chứng
1. **eCPM web display VN $0,25–0,60** — [ước lượng]. Số có nguồn là eCPM **in-app** ($1,51 interstitial, $2,34 app-open) [FACT — MonetizeMore 2026]. Nếu eCPM web thật ≥$1,00 thì §3.4 phải tính lại và quảng cáo lên hạng.
2. **Giá in sổ A5 60–100 trang + ship: 200.000–240.000đ** — [ước lượng]. Một cuộc gọi tới nhà in POD là đủ. Quyết định giá 399k của P2 đứng trên con số này.
3. **Ngưỡng doanh thu miễn thuế cho cá nhân/hộ kinh doanh 2026: 100 hay 200 triệu VND/năm** — [cần kiểm chứng]. Nó quyết định câu hỏi mở #6 và quyết định có phải lập pháp nhân sớm hay không.

---

_Nguồn chính: [RevenueCat State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps) · [Sacra — Discord](https://sacra.com/c/discord/) · [Sunset HQ — Geneva](https://www.sunsethq.com/blog/geneva-acquisition) · [Moloco — Locket case study](https://www.moloco.com/case-studies/locket-widget) · [MonetizeMore — 2026 eCPM Insights](https://www.monetizemore.com/blog/ecpm-insights/) · [Airwallex — Cổng thanh toán trực tuyến 2026](https://www.airwallex.com/vn/blog/cong-thanh-toan-truc-tuyen-so-sanh-va-huong-dan-2026) · [Mapendo — CPI by country 2025](https://mapendo.co/blog/cost-per-install-by-country-2025) · và các tài liệu nội bộ r02, r05, r06, r08, c-business, 01-dinh-nghia-san-pham-v2._
