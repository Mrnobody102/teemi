# C-BUSINESS — Phản biện mô hình kinh doanh Teemi

_Ngày: 2026-08-28 · Vai trò: critic khắc nghiệt · Góc: khả năng ra tiền_
_Tỉ giá làm việc: **26.300 VND/USD** (suy ra từ r08: CPI VN $0,86 ≈ 22.600đ). Mọi con số USD trong tài liệu này dùng tỉ giá đó._

> **Phán quyết một câu:** Teemi không có mô hình kinh doanh — nó có một danh sách các dòng doanh thu mà **mỗi dòng đều bị chặn bởi chính nguyên tắc sản phẩm của doc-01**. Ở 10.000 DAU (một thành công thật sự với app indie VN), kịch bản cơ sở **lỗ ~65 USD/tháng**. Điểm hoà vốn để trả lương **một** người nằm ở **60.000–120.000 DAU (≈180.000–370.000 MAU) tại Việt Nam** — mức mà 0/7 app social ritual Gen Z trong nghiên cứu đối thủ từng giữ được.

---

## 0. Phương pháp và nhãn

- **[FACT]** = có nguồn URL. **[INFERENCE]** = tính toán từ FACT, có công thức hiện rõ. **[GUESS]** = ước lượng, chưa có số liệu.
- Ngân sách WebSearch của phiên này đã cạn (200/200) trước khi tôi kịp verify Timehop và một số case cũ. Những chỗ đó tôi ghi rõ **KHÔNG VERIFY ĐƯỢC**, không bịa.
- Hai fact tôi **tự verify trực tiếp hôm nay bằng WebFetch**: bảng giá Day One và trạng thái timehop.com — xem §3.

---

## 1. SỐ LIỆU TRUNG TÂM: doanh thu thật ở 10.000 DAU

### 1.1. Giả định

| Tham số | Giá trị | Nhãn |
|---|---|---|
| DAU | 10.000 | đề bài |
| DAU/MAU | 33% (mục tiêu "top" của r04) | INFERENCE |
| MAU | **30.000** | INFERENCE |
| Kích thước nhóm active trung bình | 4 người | GUESS (r01 khuyến nghị 4–6) |
| Số nhóm active | **2.500** | INFERENCE |
| Tỉ lệ thực nhận sau phí sàn 15% + VAT 10% | **×0,77** | r08 [INFERENCE từ FACT] |
| Giá Teemi Crew | 399.000đ/năm (nhóm ≤6, 1 người trả) | r08 đề xuất |
| Giá Teemi Plus cá nhân | 199.000đ/năm | r08 đề xuất |

### 1.2. Bảng doanh thu (thực nhận, VND/năm)

| Dòng | Bi quan | **Cơ sở** | Lạc quan |
|---|---|---|---|
| **A. Group Pass** — % nhóm active convert | 2% → 50 nhóm | **5% → 125 nhóm** | 12% → 300 nhóm |
| Doanh thu A (thực nhận) | 15,4 tr | **38,4 tr** | 92,2 tr |
| **B. Gói cá nhân** — % MAU | 0,2% → 60 người | **0,5% → 150 người** | 1,2% → 360 người |
| Doanh thu B (thực nhận) | 9,2 tr | **23,0 tr** | 55,2 tr |
| **C. Cosmetic/Boost** (nếu mở shop) | 13,9 tr | **48,5 tr** | 187,0 tr |
| Chi phí art để nuôi shop (r08: 4–20tr/tháng) | −48 tr | **−96 tr** | −240 tr |
| **C ròng** | **−34,1 tr** | **−47,5 tr** | **−53,0 tr** |
| **TỔNG A+B (không mở shop)** | **24,6 tr/năm** | **61,4 tr/năm** | **147,4 tr/năm** |
| **→ USD/tháng** | **$78** | **$195** | **$467** |

**Neo cho tỉ lệ convert:** Discord — app social monetize tốt nhất thế giới — chỉ có 7,3M Nitro / ~200M MAU = **3,2–3,6%** ([Sacra](https://sacra.com/c/discord/), [DemandSage](https://www.demandsage.com/discord-statistics/)). Locket: >100.000 người trả / ~80M lượt tải = **0,125%** ([Moloco case study](https://www.moloco.com/case-studies/locket-widget)). Kịch bản cơ sở của tôi (150 payer cá nhân + 125 nhóm ≈ 275 payer trên 30.000 MAU = **0,92% MAU**) đã nằm ở khoảng 1/4 trần Discord — tôi coi đây là mức lạc quan vừa phải cho VN, nơi RLTV/payer chỉ **$14 vs Bắc Mỹ $32** ([RevenueCat 2026](https://www.revenuecat.com/state-of-subscription-apps)).

### 1.3. Đối chiếu chi phí

r05 §8: **~$260/tháng ở 10.000 DAU** (cấu hình khuyến nghị: no realtime, no AI, OTA tự host).

| | Cơ sở, không mở cosmetic shop |
|---|---|
| Doanh thu thực nhận | **$195/tháng** |
| Hạ tầng | **−$260/tháng** |
| **Biên** | **−$65/tháng** |
| Lương founder | **$0** |
| Chi phí pháp lý, support, moderation | **chưa tính** |

**Ở 10.000 DAU — mức mà 95% app indie VN không bao giờ đạt — Teemi lỗ.** Và nếu mở cosmetic shop để "tăng doanh thu", nó lỗ **nhiều hơn** (chi phí art vượt doanh thu ở mọi kịch bản dưới 100k MAU, đúng kết luận §3 của r08).

### 1.4. Ba mốc hoà vốn

Nội suy tuyến tính bảng chi phí r05 ($260 @10k → $1.900 @100k) và giữ doanh thu/DAU/tháng = $0,0195:

| Mốc | DAU cần | MAU tương đương | Đối chiếu thực tế |
|---|---|---|---|
| Hoà vốn hạ tầng (founder ăn 0đ) | **~47.000** | ~140.000 | Yope toàn cầu: 800k DAU |
| Trả lương 1 người (25tr VND/th = $950) — **cắt chi phí tối đa** (PocketBase VPS $6 + R2, bỏ Sentry/EAS) | **~60.000** | ~180.000 | |
| Trả lương 1 người — **giữ nguyên stack r05** | **~120.000** (và tới **~800.000** nếu chi phí biến đổi đúng như đường cong r05) | 360.000–2.400.000 | Locket có 10M+ lượt tải tại VN |

**[INFERENCE]** Việc con số này dao động **13 lần** tuỳ giả định phần nào của chi phí là fixed cho thấy đây chưa phải một mô hình kinh doanh — một business không có biên độ hoà vốn 13x. Nhưng kể cả đầu lạc quan nhất (60.000 DAU tại VN) cũng vượt mọi tiền lệ trong r01: **0/7** app social ritual Gen Z giữ được đà, và BeReal — người thắng lớn nhất — mất ~80% DAU từ đỉnh.

---

## 2. BỐN BỀ MẶT KIẾM TIỀN, BỐN CÁI BỊ CHÍNH DOC-01 CHẶN

Đây là phản biện nặng nhất. Không phải "khó kiếm tiền", mà là **mỗi nguyên tắc sản phẩm trong doc-01 vô hiệu hoá đúng một dòng doanh thu**:

| Bề mặt | Cần gì để hoạt động | Doc-01 / research nói gì | Kết quả |
|---|---|---|---|
| **Quảng cáo** | Session time, ad inventory | §12.6 "không quảng cáo kiếm tiền"; r02 định vị "2 phút/ngày, app duy nhất muốn mày dùng ít"; r05 "mở app <3 giây là xong việc" | Tự cắt inventory. Nhưng Locket — app duy nhất có lãi trong toàn bảng — **chạy ads** và ad revenue +87% sau khi tích hợp Moloco (r08) |
| **Subscription** | Một utility người ta **sợ mất** | Giá trị của Teemi là cảm xúc nhóm, bốc hơi khi nhóm nguội. r04: ~40% nhóm messaging chết trong 1 tuần ([WWW 2016](https://arxiv.org/abs/1512.07831)) | Bán được đúng lúc nhóm còn sống — mà nhóm là thứ chết trước |
| **Cosmetic** | Khán giả đủ đông để cosmetic có giá trị **địa vị** | Nhóm 4–6 người, private-first, không leaderboard liên nhóm (r06 khuyến nghị bỏ để né G1) | Khán giả cho bộ skin bạn mua = **4 người đã biết bạn quá rõ** |
| **Sponsor/voucher** | ~100k–300k MAU (r08 §5.2) + được phép phát thưởng | §11.5 hoãn sang phase sau; NĐ147 **cấm** đưa khuyến mại có thưởng tiền/hiện vật vào giao diện game; r08 §5.3 collusion không chặn được bằng peer review | Dòng duy nhất có thể ra tiền ở 10–30k MAU thì bị cấm cả bởi doc lẫn bởi luật |

**[INFERENCE]** Đây không phải trùng hợp. Định vị "private, nhỏ, nhanh, không áp lực, không quảng cáo, không reward thật" là một định vị **được thiết kế để không thể monetize**. Founder đang tối ưu cho một sản phẩm đẹp và một business trống rỗng cùng lúc, và chưa nhận ra hai mục tiêu đó xung đột trực tiếp.

---

## 3. "BÁN MEMORY" — KHÔNG CÓ TIỀN LỆ NÀO TRẢ TIỀN

Doc-01 §11.4: _"Storage là hạ tầng. Memory mới là sản phẩm."_ Câu này nghe hay và **ngược với mọi case thực tế**.

### 3.1. Day One — [FACT, tôi tự verify hôm nay 2026-08-28 qua dayoneapp.com/pricing]

Bảng giá hiện tại:
- **Free**: "Unlimited journal entries", "Unlimited journals", **1 ảnh/entry**, prompts, template, search, E2E encryption.
- **Silver $49,99/năm**: unlimited ảnh/video (30/entry), **multi-device sync**, ghi âm + transcription, integration, drawings.
- **Gold $74,99/năm**: thêm AI (Daily Chat, AI summaries, title suggestions, image generation).

Đọc kỹ: **Day One không tính tiền ký ức. Day One tính tiền MEDIA và SYNC và AI.** Bản free cho ký ức không giới hạn; paywall nằm ở đúng chỗ có chi phí biên (ảnh, video, đồng bộ). Nghĩa là Day One đang bán **hạ tầng**, và dùng "memory" làm marketing. Doc-01 nói ngược lại.

Và giá: $49,99–74,99/năm = **1,31–1,97 triệu VND/năm**. Đó là 3,3–4,9 lần giá Teemi Crew 399k đề xuất, bán cho một tệp Tây phương, cá nhân, có nghề. Không dùng làm bằng chứng cho Gen Z VN được.

### 3.2. Timehop — [KHÔNG VERIFY ĐƯỢC ĐẦY ĐỦ]

timehop.com **vẫn còn sống** hôm nay (tôi fetch trực tiếp), tagline "Celebrate your best memories, every day!", footer ghi thuộc nhóm **Sincere Corporation**. Trang chủ **không hề có** gói premium hay pricing. Không có nút trả tiền = không có mô hình subscription.

Tôi **không verify được** con số user/doanh thu/vụ data breach của Timehop vì hết ngân sách search — nhưng dữ kiện quan sát được đã đủ nói: một app "ký ức" tồn tại hơn 10 năm mà đến 2026 vẫn **không bán gì trên trang chủ**, và bị hấp thụ vào một tập đoàn khác. Đó là kết cục "sống nhưng vô hình", giống hệt Spar! trong r01.

### 3.3. Ba case còn lại đều xác nhận cùng một hướng

- **Google Photos**: Memories **miễn phí**, tiền đến từ **bán dung lượng**. Hạ tầng là sản phẩm.
- **Spotify Wrapped**: **miễn phí hoàn toàn**, vì tính chia sẻ CHÍNH LÀ hình thức thanh toán — ~200–300 triệu người tương tác trong 24h, tải app tăng 60–90% ([NoGood](https://nogood.io/blog/spotify-wrapped-marketing-strategy/)).
- **Geneva**: app group cho nhóm bạn, Bumble mua **$17,5 triệu** (7/2024), tạo ra **0 đồng doanh thu**, đóng cửa **9/2025** ([TechCrunch](https://techcrunch.com/2024/05/20/bumble-buys-community-building-app-geneva-to-expand-further-into-friendships/)).

### 3.4. Lỗi thời điểm chết người của paywall "khoá archive sau 90 ngày"

r08 §6.2 đề xuất: free lưu 90 ngày, sau đó khoá, bán "mở khoá cả kho ký ức nhóm" 399k/năm — "bán đúng lúc nhóm đã có 6 tháng kỷ niệm".

**[INFERENCE] Đó chính là lúc nhóm đã chết.** r01: novelty decay của social ritual app Gen Z là 2–4 tháng tới đỉnh, mất 50% DAU trong 4–6 tháng sau đỉnh. r04: chỉ 30% nhóm messaging sống ≥30 ngày. Nghĩa là ở tháng thứ 6, bạn dựng paywall trước mặt một cohort đã rụng quá nửa.

Tệ hơn: **ký ức nhóm có willingness-to-pay âm sau khi nhóm tan.** Day One bán được vì nhật ký cá nhân vẫn là tài sản của bạn kể cả khi bạn bỏ app. Kho ký ức của một nhóm bạn đã nguội không phải là hoài niệm — nó là **bằng chứng của một tình bạn đã nhạt**. Người ta không rút ví cho cảm giác đó.

---

## 4. GROUP SUBSCRIPTION: người trả tiền là người cần app ít nhất

### 4.1. Kịch bản cụ thể — nhóm "5 con báo chống lười"

Huy (organizer, học tiếng Anh, streak 62 ngày), Nam (Báo Thủ, miss 11/30 ngày), Linh, An, Minh.

**Ngày 90.** App hiện: _"Kho ký ức của nhóm sắp bị khoá. Mở khoá vĩnh viễn cho cả team — 399.000đ/năm."_

- **Ai thấy màn hình này nhiều nhất?** Huy — người mở app hằng ngày.
- **Huy được gì riêng khi trả?** Không gì. Theme nhóm và archive nhóm là hàng công cộng. Huy trả 399k để 4 người kia hưởng miễn phí.
- **Huy làm gì?** Screenshot paywall, quăng vào group Zalo: _"ê góp 80k/đứa coi"._
- **Nam trả lời:** _"thôi tao chụp màn hình recap lại là được rồi, cần gì mở khoá."_
- **Kết cục:** thu được 0đ, và Huy hơi quê.

### 4.2. Ba lỗi cấu trúc lộ ra từ kịch bản đó

**(a) Payer paradox.** Người sẵn sàng trả là người **đang thắng** — người đã có kỷ luật, người ít cần app nhất. Người hưởng lợi nhiều nhất (Nam, người bỏ nhiều nhất) là người **không bao giờ trả** và cũng là người **churn đầu tiên**. Doc-01 không có ai để bán.

**(b) Discord Server Boost không copy được xuống n=5.** r08 §2.2 khuyến nghị học Server Boost. Nhưng Boost hoạt động vì server Discord có **hàng trăm đến hàng nghìn người lạ** nhìn thấy tên bạn — bạn mua **địa vị trước một khán giả**. Trong nhóm 5 người bạn thân, "tao bao theme cho team" đổi được đúng một câu "ê cảm ơn nha" trong group chat, **một lần**. **[INFERENCE]** Kinh tế học địa vị sụp đổ khi khán giả = 4 người đã biết rõ bạn có bao nhiêu tiền.

**(c) Paywall bị đánh bại bởi chính chiến lược tăng trưởng.** r02 chốt design principle: _"mọi màn hình quan trọng phải đẹp khi bị screenshot nguyên trạng"_ vì screenshot-vào-Zalo là kênh phân phối thật. Chính cơ chế đó làm archive-lock vô nghĩa — recap và card đẹp, dễ crop, đã nằm sẵn trong Zalo group. Bạn không thể vừa tối ưu cho screenshot vừa bán quyền truy cập nội dung có thể screenshot. **Kênh acquisition và kênh monetization đang ăn thịt nhau.**

**(d) Churn cục.** Với ~125 nhóm trả tiền ở 10k DAU, mỗi nhóm churn = mất 5 user premium cùng lúc. 12 nhóm churn/tháng = **−10% MRR trong một tháng**. Ở quy mô nhỏ, group subscription biến churn từ dòng chảy đều thành **sốc**.

---

## 5. MÔ HÌNH TÀI CHÍNH TRONG r08 TỰ MÂU THUẪN Ở KỊCH BẢN CƠ SỞ

r08 §7.2, cột "Cơ sở": 100.000 installs → **10.000 người còn active ở D30** → **1.200 payer**.

**1.200 payer / 10.000 active = 12% người dùng active trả tiền.**

Đối chiếu: Discord = **3,2–3,6% MAU**. Teemi VN đang được giả định monetize **gấp 3,4–3,75 lần Discord**, ở thị trường có RLTV/payer thấp hơn Bắc Mỹ 2,3 lần và chỉ 7–10% game user VN từng trả một đồng nào (r02, [Antom](https://knowledge.antom.com/vietnam-gaming-payment-trends-report-unlocking-growth-in-a-young-dynamic-mobile-first-gaming-market)).

**[INFERENCE]** Sửa lại về 3,5% MAU (bằng trần Discord, đã là quá lạc quan): 10.000 active × 3,5% = **350 payer**, không phải 1.200. Doanh thu cơ sở r08 rơi từ 259 triệu → **~75 triệu VND/năm**. Và LTV/CAC cơ sở rơi từ 0,18 → **~0,05**.

Nghĩa là: **con số bi quan trong r08 mới là con số cơ sở thật.** Founder cần sửa lại spreadsheet trước khi ra bất kỳ quyết định nào dựa trên nó.

---

## 6. CHI PHÍ: mô hình r05 giả định churn = 0, và bị luật phá

### 6.1. Lỗ hổng số học

r05 §8 giả định: 1 ảnh/user/ngày × 165 KB × **giữ 12 tháng** → 6 TB ở 100k DAU. Phép tính đó chỉ đúng nếu **mọi user đều active suốt 365 ngày** — tức retention D365 = 100%.

Thực tế theo chính r04: D30 social top ~15–20%, trung bình 3–9%. Để **giữ** 100k DAU bạn phải liên tục nạp user mới. **[INFERENCE]** Giả sử cần ~300k install/tháng để duy trì 100k DAU, mỗi người churn để lại ~7 ảnh: 300.000 × 7 × 165 KB = **347 GB/tháng ảnh của user đã chết** = **4,2 TB/năm rác tích luỹ**. Storage thực ≈ **gấp đôi** dự toán → R2 từ $139 lên ~$280/tháng.

Không chí mạng (vẫn nhỏ so với doanh thu), nhưng nó nói lên điều quan trọng hơn: **bảng chi phí đang được xây trên giả định retention mà chính tài liệu retention bác bỏ.**

### 6.2. Rủi ro pháp lý phá vỡ nền tảng của cả bảng chi phí

Toàn bộ ưu thế chi phí của r05 nằm ở một fact duy nhất: **Cloudflare R2 egress = $0** (rẻ hơn S3 ~5×, rẻ hơn Supabase Storage ~4,6× ở 100k DAU).

Nhưng r06 [legal] kết luận: Giấy phép MXH (ngưỡng chỉ **>1.000 người dùng thường xuyên/tháng**) đòi **tối thiểu 01 máy chủ đặt tại Việt Nam**; và NĐ 330/2026 phạt chuyển dữ liệu xuyên biên giới trái quy định **tới 5% doanh thu năm trước**.

**[INFERENCE]** Nếu phải đưa object storage về VNG Cloud / Viettel IDC / FPT Cloud, **không nhà cung cấp nội địa nào có egress $0** — mô hình egress-free biến mất. **KHÔNG TÌM ĐƯỢC SỐ LIỆU** bảng giá object storage của VNG/Viettel (hết ngân sách search) nên tôi không đưa con số, nhưng cấu trúc rủi ro rõ ràng: **dòng chi phí rẻ nhất trong stack là dòng dễ bị luật xoá nhất**, và nó chưa được đưa vào bất kỳ mô hình tài chính nào.

Cộng thêm chi phí **chưa có trong mọi bảng**: nhân sự người Việt chịu trách nhiệm nội dung (điều kiện giấy phép MXH), lưu log 2 năm, và nghĩa vụ Apple Guideline 1.2 phải phản hồi report trong 24h — với app có tính năng **roast**, đây là headcount thật, 7 ngày/tuần, không phải $0.

---

## 7. "MỞ RỘNG SANG THỊ TRƯỜNG ARPU CAO" KHÔNG PHẢI MỘT KẾ HOẠCH

r08 §8.2 khuyến nghị: validate ở VN, mở bản EN cho US college, vì "cùng MAU, doanh thu cao hơn 2,3×".

**Ba lý do con số 2,3× là ảo:**

**(a) 2,3 × 0 = 0.** Nhân ARPU chỉ có nghĩa khi bạn có user ở đó. Ở Mỹ, Teemi không có phân phối, không có KOC, không có insight văn hoá, và phải cạnh tranh trực tiếp với xác BeReal, Locket đang sống, Yope đang tăng 30× trong 6 tháng, và mồ của Gas/Poparazzi/TBH.

**(b) LTV/CAC ở Mỹ TỆ HƠN, không tốt hơn.** ARPU cao hơn 2,3× nhưng CPI Mỹ cao hơn VN **khoảng 4–6 lần** (VN $0,86 theo [Mapendo](https://mapendo.co/blog/cost-per-install-by-country-2025); Mỹ thường ở dải $3–5 — **[GUESS]**, tôi không verify được con số Mỹ chính xác vì hết search budget). Nếu phải mua install, tỉ số LTV/CAC **xấu đi**. Chỉ organic mới cứu được — và organic ở Mỹ là sự kiện ít khả năng xảy ra nhất trong toàn bộ kế hoạch.

**(c) Moat của Teemi là thứ không dịch được.** r05 chốt: MVP dùng **phrase bank 200–300 câu roast tiếng Việt viết tay**, và lý do bỏ LLM **không phải tiền** ($7/tháng ở 1k DAU) mà là _"giọng cà khịa tiếng Việt viết tay hay hơn LLM và là tài sản thương hiệu"_. Nghĩa là founder đã tự xác định: **tài sản cạnh tranh của Teemi là hài hước bản địa.** Hài hước là loại nội dung **kém dịch được nhất tồn tại**. "Báo Thủ", "kỹ năng mất tích có điều kiện", "nộp phút 89" — không câu nào sống sót qua tiếng Anh.

**[INFERENCE]** Bỏ tiếng Việt = bỏ moat. Ra Mỹ với cơ chế trần trụi (boss chung + proof ảnh + nhóm nhỏ) là ra Mỹ **với đúng thứ Spar! đã làm và thất bại**, không có phần khiến Teemi đặc biệt. Chi phí i18n plumbing gần 0 là đúng; chi phí **viết lại 300 câu đùa cho một nền văn hoá khác** thì không — đó là bài toán comedy writing, không phải bài toán kỹ thuật.

Việc thiết kế i18n từ đầu vẫn đúng (rẻ). Việc **coi đó là đường ra doanh thu** thì sai.

---

## 8. PHẢN BIỆN "KHÔNG MONETIZE Ở MVP"

r08 §9.2 và doc-01 đều chốt: MVP = 0 paywall, 0 shop, 0 gacha; chỉ đo D30 retention cấp nhóm ≥25%.

**Tôi đồng ý bỏ paywall thật. Tôi phản đối bỏ phép đo willingness-to-pay.** Đó là hai thứ khác nhau và founder đang gộp làm một.

**Lập luận:** Geneva có retention tốt, có nhóm bạn yêu app, được mua $17,5M — và tạo ra **0 đồng**. Retention **không** phân biệt được Locket với Geneva. Nếu bạn ra khỏi beta với dữ liệu retention đẹp và **zero** dữ liệu giá, bạn đã trả 6 tháng để trả lời nửa câu hỏi, và nửa còn lại là nửa quyết định sống chết.

**Thời điểm bắt buộc:** WTP cao nhất ở **đỉnh cảm xúc** — cuối season 1, lúc nhóm vừa hạ boss (tuần 4). Nếu không có phép đo giá trước tuần 4 của beta, bạn đã bỏ lỡ cửa sổ WTP cao nhất mà beta có.

**Thiết kế cụ thể — chi phí 1 ngày công:**
1. Nhóm hoàn thành season 1 → màn hình duy nhất: _"Teemi Crew — mở khoá vĩnh viễn kho ký ức + theme nhóm — 399.000đ/năm cho cả team"_, nút **"Bao cho cả team"**.
2. Chạm nút → _"Chưa mở bán. Để lại số Zalo, mở bán tụi mình tặng 1 tháng."_ (fake door, không thu tiền → không làm nhiễu retention, không dính IAP review).
3. Đo: **% nhóm hoàn thành season 1 có ít nhất 1 người chạm nút**, và **% để lại số Zalo** (mức cam kết cao hơn nhiều lần).
4. **Ngưỡng cứng:** ≥5% nhóm chạm → giả thuyết group-pass còn sống. **<2% → giả thuyết chết**, chuyển ngay sang ads / B2B / kill.
5. Song song: **van Westendorp trên 50–100 người** (r02 đã khuyến nghị) để lấy dải giá, chạy 3 SKU (399k nhóm / 199k cá nhân / 39k season pass) xem SKU nào có tap rate cao nhất.

Đây là thí nghiệm ROI cao nhất trong toàn bộ backlog và **doc-01 không có nó**.

---

## 9. KỊCH BẢN XẤU NHẤT: 5.000 user vui, $200 doanh thu, $400 chi phí

### 9.1. Trước hết: $400 chi phí là một LỰA CHỌN, không phải sự thật

Ở 5.000 DAU, cấu hình tối thiểu khả thi (nội suy r05 + kế hoạch C của chính r05):

| Hạng mục | Cấu hình "sống sót" | $/tháng |
|---|---|---|
| Backend | PocketBase trên VPS (r05: chạy tốt tới 5–10k DAU) | 6 |
| Ảnh | Cloudflare R2 (~5k DAU) | 7 |
| Push | FCM + APNs + Expo Push | 0 |
| OTA | expo-updates tự host trên R2 + Worker | 0–5 |
| Sentry | free tier | 0 |
| Apple $99/năm + domain | | 10 |
| **Tổng** | | **~$28/tháng** |

**Với $200 doanh thu và $28 chi phí, "kịch bản xấu nhất" thành +$172/tháng lãi.** Founder đang mô tả một bài toán chi phí như thể nó là bài toán doanh thu. Hành động số 1: **cắt fixed cost xuống dưới $50/tháng trước khi làm bất cứ điều gì khác.** Điều đó biến một dự án chết thành một dự án có runway vô hạn — và runway vô hạn là thứ duy nhất mua được cơ hội tìm ra pivot.

### 9.2. Sau đó: cây quyết định

- **Nếu 5.000 user + fake-door WTP <2%** → giả thuyết B2C đã bị bác. Không thêm feature. Hai đường: (a) **ads** — dòng duy nhất tỉ lệ với tài sản thật (attention) chứ không với ví; (b) **B2B** (trường/CLB/gym/trung tâm tiếng Anh, r08 ước 50–150k/người/năm) — nhưng phá định vị private-first, phải chọn dứt khoát, không làm cả hai.
- **Nếu 5.000 user + WTP ≥5%** → chưa phải business, nhưng là bằng chứng đáng đầu tư thêm 6 tháng để đẩy lên 47.000 DAU (mốc hoà vốn hạ tầng).
- **Mốc kill cứng** (bổ sung cho 2 mốc trong r01): **nếu sau 9 tháng doanh thu thực nhận < chi phí hạ tầng, dừng.** Không có ngoại lệ "sắp viral tới nơi".

### 9.3. Exit: gần như không có

Toàn bộ exit trong category này đều có **user base Mỹ và acquirer Mỹ**: TBH → Facebook ~$100M (5M user, 9 tuần); Gas → Discord (đóng cửa 11/2023); Geneva → Bumble $17,5M; BeReal → Voodoo $537M (đang lỗ $3M/tháng).

**KHÔNG TÌM ĐƯỢC SỐ LIỆU** về bất kỳ thương vụ M&A đáng kể nào cho app social tiêu dùng thuần Việt (hết ngân sách search — cần verify). **[INFERENCE]** Acquirer tiềm năng ở VN (VNG, MoMo, Zalo, FPT) đều có thói quen **tự build** thay vì mua app nhỏ. Với 5.000 user VN, tập acquirer thực tế ≈ rỗng; exit khả dĩ duy nhất là **acquihire** (bán bản thân, không bán app) — mà acquihire không cần app phải sống, chỉ cần nó tồn tại và đẹp.

Kết luận thẳng: **nếu founder xây Teemi để exit, chiến lược này sai từ ngày 1.** Nếu xây để (a) học, (b) có portfolio piece mạnh, (c) có small profitable business nuôi 1 người ở mốc 120k DAU — thì hợp lệ, nhưng phải **gọi tên đúng** ngay hôm nay, vì tên gọi quyết định mức chi tiêu, mức rủi ro chấp nhận, và có gọi vốn hay không.

---

## 10. VIỆC PHẢI LÀM, THEO THỨ TỰ

1. **Sửa spreadsheet.** Thay payer rate 12%-of-active bằng ≤3,5% MAU (trần Discord). Xem lại mọi quyết định đã ra dựa trên bảng cũ.
2. **Cắt fixed cost xuống <$50/tháng** trước khi viết thêm feature. Đây là hành động có tác động lớn nhất tới xác suất sống sót.
3. **Fake-door price probe ở cuối season 1** (1 ngày công). Ngưỡng: ≥5% nhóm chạm = sống; <2% = giả thuyết B2C chết.
4. **Chọn một trong ba danh tính** — venture / small profitable business / portfolio piece — và viết nó ra. Ba cái đòi ba mức chi tiêu khác nhau.
5. **Bỏ "bán memory" khỏi kế hoạch doanh thu**, giữ nó làm retention hook (đúng như Google Photos và Spotify Wrapped). Nếu vẫn muốn bán, bán **media limit + sync + export** như Day One thật sự làm, không bán nostalgia.
6. **Đưa ads vào bàn thảo luận nghiêm túc.** App duy nhất có lãi trong toàn bảng nghiên cứu (Locket) chạy ads. Nếu định vị "app muốn mày dùng ít" khiến ads bất khả thi, thì định vị đó đang tốn của bạn dòng doanh thu khả thi nhất — hãy quyết định có ý thức, đừng quyết định bằng nguyên tắc.
7. **Đưa chi phí pháp lý và chi phí "máy chủ tại VN" vào mô hình tài chính** trước khi tin vào con số $0,019/DAU.

---

## 11. Nguồn

- RevenueCat — State of Subscription Apps 2026: https://www.revenuecat.com/state-of-subscription-apps
- Sacra — Discord revenue: https://sacra.com/c/discord/
- DemandSage — Discord Statistics 2026: https://www.demandsage.com/discord-statistics/
- Moloco — Locket Widget case study: https://www.moloco.com/case-studies/locket-widget
- TechCrunch — Bumble mua Geneva: https://techcrunch.com/2024/05/20/bumble-buys-community-building-app-geneva-to-expand-further-into-friendships/
- Day One pricing (verify trực tiếp 2026-08-28): https://dayoneapp.com/pricing/
- Timehop (verify trực tiếp 2026-08-28, không có pricing trên trang chủ): https://www.timehop.com/
- NoGood — Spotify Wrapped: https://nogood.io/blog/spotify-wrapped-marketing-strategy/
- Mapendo — CPI theo quốc gia 2025: https://mapendo.co/blog/cost-per-install-by-country-2025
- Antom — Vietnam gaming payment trends: https://knowledge.antom.com/vietnam-gaming-payment-trends-report-unlocking-growth-in-a-young-dynamic-mobile-first-gaming-market
- Qiu et al., WeChat group lifecycle (WWW 2016): https://arxiv.org/abs/1512.07831
- Cloudflare R2 pricing: https://developers.cloudflare.com/r2/pricing/
- Supabase pricing: https://supabase.com/pricing
- Nội bộ: `/home/huypq/teemi/docs/research/r05-tech-stack.md` §8 (bảng chi phí), `/home/huypq/teemi/docs/research/r08-monetization.md` §7 (unit economics)
