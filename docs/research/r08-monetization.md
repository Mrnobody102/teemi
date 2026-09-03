# R08 — MÔ HÌNH KIẾM TIỀN & KINH TẾ ĐƠN VỊ (Teemi)

_Ngày nghiên cứu: 2026-08-28. Người viết: research agent. Trạng thái: bản phản biện, chưa qua duyệt của founder._

> **Kết luận trước, chi tiết sau:** Với thị trường Việt Nam và mô hình freemium social, Teemi **gần như chắc chắn không thể mua user bằng tiền**. Mọi kịch bản có paid acquisition đều cho LTV/CAC < 1. App này chỉ có thể thành business nếu (a) tăng trưởng gần như 100% organic/viral, và (b) monetize ở thị trường có ARPU cao hơn VN ít nhất 2–3x, hoặc chuyển sang B2B. Ở phạm vi "app cho nhóm bạn VN, freemium, cosmetic + premium recap", trần doanh thu thực tế ở 100k MAU chỉ khoảng **400–500 triệu VND/năm** — đủ nuôi 1 người, không đủ nuôi một công ty.

---

## 0. Cách đọc tài liệu này

Mỗi luận điểm được gắn nhãn:
- **[FACT]** — có nguồn công khai, kèm URL.
- **[INFERENCE]** — suy luận từ FACT, có logic tính toán rõ ràng.
- **[GUESS]** — ước lượng, không có số liệu công khai. Cần validate bằng thực nghiệm.

---

## 1. BENCHMARK: Tỉ lệ chuyển đổi free → paid

### 1.1. Con số nền

| Chỉ số | Giá trị | Nguồn |
|---|---|---|
| Freemium — download→paid tại D35 (median toàn ngành) | **2,1%** | RevenueCat State of Subscription Apps 2026 |
| Hard paywall — download→paid tại D35 (median) | **10,7%** | RevenueCat 2026 |
| Revenue per install (RPI) tại D60 — freemium | **$0,38** | RevenueCat 2026 |
| RPI tại D60 — hard paywall | **$3,09** | RevenueCat 2026 |
| Health & Fitness — download→paid D35 (median) | **2,9%** (top quartile > 6,2%) | RevenueCat 2026 |
| Health & Fitness — trial→paid (median) | **37,7%** | RevenueCat 2026 |
| **Social & Lifestyle — trial→paid (median)** | **~20–23%** | RevenueCat 2026 |
| Giữ chân subscriber sau 1 năm (freemium) | **28%** | RevenueCat 2026 |
| Median giá gói năm toàn cầu | **$34,80** | RevenueCat 2026 |

Nguồn: [RevenueCat — State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps) · [RevenueCat blog benchmark 2026](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026)

### 1.2. Social kém hơn health bao nhiêu? **[FACT + INFERENCE]**

- **[FACT]** Trial→paid: Social & Lifestyle ~20–23% vs Health & Fitness 37,7% → **social chuyển đổi kém hơn ~40–45% tương đối**.
- **[FACT]** RevenueCat 2025 ghi nhận Social & Lifestyle có **retention subscriber thấp nhất** trong tất cả category, ở cả gói tuần lẫn gói tháng ([RevenueCat 2025](https://www.revenuecat.com/state-of-subscription-apps-2025)).
- **[FACT]** Adapty: top 10% app Lifestyle chiếm **97,9%** toàn bộ doanh thu category — mức tập trung cao nhất trong báo cáo ([Adapty State of In-App Subscriptions 2026](https://adapty.io/state-of-in-app-subscriptions/)). Nghĩa là: nếu không lọt top 10%, doanh thu gần như bằng 0.
- **[INFERENCE]** Teemi là **freemium + social + không phải utility** — đúng ba đặc điểm tệ nhất cho conversion. Giả định hợp lý cho Teemi: **download→paid D35 khoảng 0,8–1,5%**, tức dưới median freemium 2,1%.

### 1.3. Bằng chứng đau nhất: social app lớn cũng chỉ ~3–4% **[FACT]**

| App | User | Người trả tiền | Tỉ lệ |
|---|---|---|---|
| Discord | ~200M MAU (5/2025) | 7,3M Nitro subscriber | **~3,2–3,6%** |
| Locket Widget | ~80M lượt tải tích luỹ | >100.000 paying user | **~0,1% trên tổng tải** |

Nguồn: [Discord Statistics 2026](https://www.demandsage.com/discord-statistics/) · [Sacra — Discord revenue](https://sacra.com/c/discord/) · [Locket case study — Helium](https://tryhelium.com/blog/how-locket-grew-subscriptions-by-77-with-helium)

Discord doanh thu 2025 là **$561M**, ~54% từ Nitro ([Sacra](https://sacra.com/c/discord/)). Với 200M MAU, đó là **~$2,8 doanh thu/MAU/năm** — và Discord là social app monetize tốt nhất thế giới. Teemi ở VN cần giả định thấp hơn con số này rất nhiều.

### 1.4. Ca cảnh báo bắt buộc phải đọc: **Geneva** **[FACT]**

Geneva — app "group & community" cho nhóm bạn, gần Teemi nhất về định vị — được Bumble mua **$17,5 triệu** (7/2024). Đến Q2/2025 Bumble công bố với nhà đầu tư rằng Geneva **tạo ra 0 đồng doanh thu** kể từ khi mua. App standalone bị **đóng cửa tháng 9/2025**, tech gộp vào Bumble BFF.

Nguồn: [TechCrunch](https://techcrunch.com/2024/05/20/bumble-buys-community-building-app-geneva-to-expand-further-into-friendships/) · [Sunset HQ — Geneva Acquisition](https://www.sunsethq.com/blog/geneva-acquisition)

**Ý nghĩa cho Teemi:** Sản phẩm "nhóm bạn yêu thích nhưng không ai trả tiền" là một failure mode **đã được chứng minh**, không phải rủi ro lý thuyết. Founder phải trả lời được câu "ai là người bấm nút trả tiền, và trả vì sợ mất cái gì?" **trước** khi build.

---

## 2. MÔ HÌNH GIÁ: Cá nhân vs Nhóm

### 2.1. Ai đã làm group subscription?

| Sản phẩm | Mô hình | Giá | Nhận xét |
|---|---|---|---|
| **Habitica** (habit RPG — gần Teemi nhất) | Group Plan: leader trả cho cả nhóm | **$9/tháng + $3/thành viên thêm** | Nhóm 4 người = $18/tháng. Group leader gộp thanh toán. ([Habitica Wiki](https://habitica.fandom.com/wiki/Group_Plans)) |
| **Discord Nitro + Server Boost** | Cá nhân trả, nhóm hưởng | Nitro $2,99 / $9,99; Boost $4,99/boost | Nhóm "góp boost" để lên level server — mô hình **đóng góp tập thể**, không phải 1 người trả tất |
| **Duolingo Family** | 1 người trả, tối đa 6 | $119,99/năm (~$1,67/người/tháng) | Giảm giá theo đầu người rất mạnh |
| **Spotify VN** | Family 6 tài khoản | **89.000đ/tháng** (~15.000đ/người); Duo 79.000đ; Individual 65.000đ; Student 33.000đ | ([Spotify VN](https://www.spotify.com/vn-vi/premium/)) |
| **Notion** | Per-seat, workspace trả | Team plan tính theo seat | Chỉ hoạt động khi có ngân sách công ty |

### 2.2. Bài học rút ra **[INFERENCE]**

1. **Group plan không phải để tăng ARPU — nó để giảm ma sát.** Duolingo Family và Spotify Family đều hạ giá/đầu người xuống 3–6 lần so với gói cá nhân. Lý do: người trả tiền cần **cảm giác mình đang tiết kiệm cho cả nhóm**, không phải trả thêm.
2. **Habitica là mô hình đúng nhất về cấu trúc, sai nhất về giá cho VN.** $18/tháng cho nhóm 4 người = ~470.000đ/tháng — bất khả thi với Gen Z VN.
3. **Discord Server Boost là mô hình đáng học nhất cho Teemi.** Nó không phải "1 người trả cho cả nhóm" mà là **"ai muốn thì góp, cả nhóm cùng hưởng, người góp được ghi công công khai"**. Với văn hoá nhóm bạn VN (góp tiền ăn lẩu, ai "chi" được cả nhóm cảm ơn), cơ chế này khớp về mặt xã hội hơn nhiều so với subscription cá nhân.
4. **Ràng buộc kỹ thuật [FACT]:** Apple/Google không hỗ trợ native việc "subscription của A mở khoá tính năng cho B, C, D". Bạn phải tự làm entitlement server-side (RevenueCat hỗ trợ được). Không phức tạp nhưng phải thiết kế từ đầu.

### 2.3. Neo giá thực tế ở Việt Nam **[FACT]**

- Spotify Individual VN: **65.000đ/tháng**; Family (6 người): **89.000đ/tháng**; Student: **33.000đ/tháng**.
- Chi tiêu trung bình của người trẻ VN cho **toàn bộ** giải trí số: **100.000–500.000đ/tháng**; ~50% người dùng sẵn sàng trả cho gói premium nếu nội dung hợp nhu cầu (khảo sát Appota, dẫn lại bởi [Đại biểu Nhân dân](https://daibieunhandan.vn/nguoi-tre-dang-tieu-tien-cho-giai-tri-so-nhu-the-nao-10375361.html) và [VJST](https://vjst.vn/50-nguoi-viet-san-sang-chi-tien-cho-dich-vu-giai-tri-so-69929.html)).

**[INFERENCE]** Nếu tổng ngân sách giải trí số là 100–500k/tháng và Spotify + Netflix + YouTube đã ăn 150–200k, phần còn lại cho một app "vui vui với nhóm bạn" là **20.000–50.000đ/tháng, và không phải mỗi tháng**. Teemi **không thể** định giá ngang Spotify.

### 2.4. Đề xuất bảng giá VND cho Teemi **[GUESS — cần A/B test]**

| Gói | Giá đề xuất | Lý do |
|---|---|---|
| **Teemi Plus (cá nhân)** | **29.000đ/tháng** · **199.000đ/năm** | Dưới ngưỡng "Spotify student 33k" → cảm giác rẻ. Gói năm giảm 43% để đẩy prepay. |
| **Teemi Crew (nhóm ≤6, 1 người trả)** | **59.000đ/tháng** · **399.000đ/năm** | ~66.000đ/người/năm. Người trả cảm thấy "bao cả team" mà rẻ hơn 1 bữa trà sữa/tháng/người. Đây nên là **gói chủ lực**. |
| **Season Pass (1 mùa 30 ngày)** | **39.000đ one-off** | Không ràng buộc auto-renew — Gen Z VN sợ auto-renew. Bán theo mùa khớp với nhịp "season" của sản phẩm. |
| **Boost nhóm (kiểu Discord)** | **19.000đ/lần** | Micro-transaction xã hội: ai boost được ghi tên trong recap. Đây là SKU có khả năng convert cao nhất vì nó mua **status trong nhóm**, không mua feature. |
| **Lifetime (giới hạn 1.000 suất, early adopter)** | **690.000đ** | Dùng để lấy tiền mặt sớm + tạo cohort đại sứ. **Cảnh báo:** lifetime giết LTV dài hạn, chỉ dùng như công cụ huy động vốn/validation, không phải trụ cột. |

**[FACT — cần lưu ý về thuế và phí sàn]**
- Apple Small Business Program: hoa hồng **15%** nếu doanh thu năm trước ≤ $1M ([Apple](https://www.businesswire.com/news/home/20201118005376/en)).
- Từ 21/8/2025 Apple thay đổi cơ chế thuế cho developer VN: tổ chức VN không còn được Apple nộp hộ FCT trên doanh thu, thay vào đó **5% FCT trên hoa hồng của Apple**; cá nhân VN chịu **2% PIT**; VAT áp dụng **10%** ([9to5Mac](https://9to5mac.com/2025/08/21/apple-details-new-app-store-taxes-and-price-changes-in-select-countries/), [PPC Land](https://ppc.land/apple-announces-tax-and-pricing-updates-affecting-global-developers/)).
- **[INFERENCE]** Tỉ lệ thực nhận ≈ `giá / 1,1 × 0,85 ≈ 77%` giá niêm yết. Gói Crew 399.000đ/năm → về tay **~307.000đ**.

---

## 3. COSMETIC ECONOMY: bán theme/skin/sticker có ra tiền không?

### 3.1. Bằng chứng

- **[FACT]** Locket Widget: mô hình "Locket Gold" (bỏ quảng cáo + tuỳ biến widget + xem lượt tương tác) → **>100.000 người trả tiền**, doanh thu ước ~$13,5M/năm ở đỉnh (2022), gần đây Sensor Tower ước ~$300k/tháng (3/2026). Locket **cũng phải chạy quảng cáo** — ad revenue tăng 87% sau khi tích hợp Moloco SDK (11/2025). ([Moloco case study](https://www.moloco.com/case-studies/locket-widget), [Helium](https://tryhelium.com/blog/how-locket-grew-subscriptions-by-77-with-helium))
- **[FACT]** Widgetable (widget + thú ảo cosmetic, đối thủ gần nhất về "cosmetic trong app social nhỏ"): Sensor Tower ước ~**700k lượt tải và $100k doanh thu** trong tháng gần nhất → **~$0,14 doanh thu/lượt tải**. ([Sensor Tower app profile](https://app.sensortower.com/overview/1641107226?country=US))
- **[FACT]** 2025 là năm đầu tiên chi tiêu cho app **không phải game** vượt game: $85 tỷ trên tổng $167 tỷ IAP toàn cầu ([Sensor Tower State of Mobile 2026](https://sensortower.com/press/press-release-boosted-by-gen-ai-services-consumers-spent-more-money-in-apps-than-games-for-first-time)).

### 3.2. Ngưỡng user để cosmetic có nghĩa **[INFERENCE]**

Mô hình đơn giản: `Doanh thu cosmetic/tháng = MAU × tỉ lệ mua × ARPPU`.

Giả định VN (nhãn GUESS cho từng tham số):
- Tỉ lệ MAU mua cosmetic trong 1 tháng: **1,5%** (mức phổ biến của game cosmetic-only; social app thường thấp hơn).
- ARPPU cosmetic/tháng: **45.000đ**.
- → **~675đ doanh thu gộp/MAU/tháng**, thực nhận **~520đ/MAU/tháng**.

| MAU | Doanh thu cosmetic thực nhận/tháng | Đánh giá |
|---|---|---|
| 5.000 | ~2,6 triệu đ | Không đủ trả tiền thuê hoạ sĩ vẽ theme |
| 20.000 | ~10,4 triệu đ | Hoà vốn chi phí art, không có lãi |
| 100.000 | ~52 triệu đ | Bắt đầu có nghĩa — nuôi được 1–2 người |
| 500.000 | ~260 triệu đ | Là một business nhỏ thật |

**Chi phí phía cung [GUESS]:** một bộ theme/boss skin doodle thuê hoạ sĩ VN khoảng **1–5 triệu đ/bộ**; muốn giữ shop "sống" cần **2–4 bộ mới/tháng** → chi phí art **4–20 triệu đ/tháng**.

**Kết luận mục 3:** Cosmetic economy chỉ **hoà vốn từ khoảng 20.000 MAU** và chỉ **có ý nghĩa kinh doanh từ ~100.000 MAU**. Dưới 20k MAU, mỗi bộ skin bạn vẽ là **lỗ**. Trong MVP, cosmetic nên là **phần thưởng kiếm được (earned)**, không phải hàng bán — bán chỉ khi đã qua ngưỡng.

**Điểm sáng riêng của Teemi [INFERENCE]:** cosmetic **cấp nhóm** (theme nhóm, boss skin dùng chung, danh hiệu hiển thị trong recap) có kinh tế tốt hơn cosmetic cá nhân, vì **một người mua, cả nhóm thấy** → tạo áp lực xã hội và exposure miễn phí. Đây là biến thể "Server Boost" và nên là SKU cosmetic đầu tiên.

---

## 4. GACHA: Có đáng làm không? — **KHÔNG, không ở MVP**

### 4.1. Rào cản App Store **[FACT]**

- Guideline **3.1.1**: app có loot box hoặc cơ chế trả tiền nhận vật phẩm ngẫu nhiên **phải công bố tỉ lệ (odds) từng loại vật phẩm trước khi mua** ([Fenwick](https://www.fenwick.com/insights/publications/apple-now-requires-disclosure-of-loot-box-odds), [National Law Review](https://natlawreview.com/article/apple-requires-disclosure-odds-loot-boxes)).
- Rating khu vực: Úc gán **15+** cho game có loot box mua được; **18+** nếu có Simulated Gambling mức Frequent/Intense. Hàn Quốc có rating khu vực riêng ([Apple Treats — age rating changes](https://appletreats.substack.com/p/app-store-age-ratings-to-change-in)).
- **[INFERENCE]** Teemi nhắm 16–28 tuổi. Bị đẩy lên rating cao hơn = mất một phần đáng kể tệp 16–17 tuổi + khó chạy quảng cáo + khó lên feature. Cái giá lớn hơn nhiều so với doanh thu gacha ở quy mô nhỏ.

### 4.2. Rào cản pháp lý Việt Nam **[FACT — đây là phần nguy hiểm nhất]**

**Nghị định 147/2024/NĐ-CP** (hiệu lực 25/12/2024):
- Vật phẩm ảo, đơn vị ảo, điểm thưởng **chỉ được dùng trong trò chơi**, **không được quy đổi ngược thành tiền, thẻ trả trước, thẻ ngân hàng, thẻ quà tặng** hay bất kỳ vật có giá trị giao dịch ngoài game.
- **Cấm người chơi mua bán vật phẩm ảo/điểm thưởng với nhau.**
- **Cấm** đưa chương trình khuyến mại có thưởng bằng **tiền thật hoặc hiện vật** vào giao diện/tính năng game.
- Doanh nghiệp chỉ được tạo vật phẩm ảo **theo đúng nội dung đã báo cáo/được phê duyệt**.

Nguồn: [LuatVietnam](https://luatvietnam.vn/tin-van-ban-moi/quy-dinh-ve-vat-pham-ao-diem-thuong-trong-game-tu-25-12-2024-186-99885-article.html) · [Bộ KH&CN](https://mst.gov.vn/nghi-dinh-147-2024-nd-cp-quan-ly-chat-che-dich-vu-tro-choi-dien-tu-tren-mang-va-thong-tin-tren-internet-197241227124622733.htm) · [Báo Nhân Dân](https://nhandan.vn/nghi-dinh-moi-cam-mua-ban-vat-pham-ao-trong-tro-choi-dien-tu-tren-mang-giua-nhung-nguoi-choi-post844806.html)

**Nghị định 174/2026/NĐ-CP** (hiệu lực 1/7/2026) — chế tài:
- Cá nhân mua/bán vật phẩm ảo: phạt **2–3 triệu đ**; tổ chức gấp đôi.
- Doanh nghiệp **để người chơi mua bán vật phẩm ảo với nhau**: phạt **60–80 triệu đ**.
- Doanh nghiệp **quy đổi vật phẩm ảo ra tiền/thẻ**: phạt **170–200 triệu đ**.

Nguồn: [Thư Viện Pháp Luật](https://thuvienphapluat.vn/banan/tin-tuc/nghi-dinh-174-2026-mua-ban-vat-pham-ao-trong-game-co-the-bi-phat-den-3-trieu-dong-tu-0172026-50220.html) · [LuatVietnam](https://luatvietnam.vn/tin-van-ban-moi/tu-01-7-2026-mua-ban-vat-pham-ao-trong-game-phat-den-3-trieu-dong-186-109743-article.html)

### 4.3. Rủi ro lớn hơn gacha: **Teemi có thể bị coi là "trò chơi điện tử trên mạng"** **[INFERENCE — RỦI RO CAO, CẦN LUẬT SƯ]**

Định nghĩa game **G1** theo Nghị định 147: trò chơi điện tử **có sự tương tác giữa nhiều người chơi với nhau thông qua hệ thống máy chủ của doanh nghiệp** ([Luật Việt An](https://luatvietan.vn/giay-phep-game-online-g1.html)).

Cơ chế lõi của Teemi — **boss chung, nhiều người cùng đánh, máu boss tính trên server** — **rơi rất sát vào định nghĩa này**. Nếu bị phân loại là G1, Teemi cần **giấy phép cung cấp dịch vụ trò chơi điện tử G1** + **quyết định phê duyệt nội dung kịch bản cho từng trò chơi**, kèm điều kiện về pháp nhân, máy chủ đặt tại VN, nhân sự.

**Đây là red flag pháp lý nghiêm trọng nhất trong toàn bộ tài liệu này** và độc lập với chuyện có gacha hay không. Cần hỏi luật sư chuyên ngành **trước khi** đặt "boss" vào tên/positioning chính thức. Đường lùi khả dĩ: mô tả boss như **thanh tiến độ nhóm có hình minh hoạ** (progress bar/mascot) chứ không phải "trận đánh", không có combat stat, không có leaderboard cạnh tranh giữa các nhóm lạ.

### 4.4. Phán quyết mục 4

| Phương án | Rủi ro | Khuyến nghị |
|---|---|---|
| Gacha mua bằng tiền thật | Odds disclosure, rating 15+/18+, NĐ147/174, mang tiếng "app cờ bạc" | **Không làm** |
| Gacha bằng tiền tệ **kiếm được** (không bán) | Thấp — không phải "trả tiền nhận ngẫu nhiên" | **Được**, dùng như phần thưởng giữ nhịp |
| Bán trực tiếp cosmetic (biết trước mình mua gì) | Rất thấp | **Nên làm** khi đủ MAU |

---

## 5. SPONSOR / VOUCHER: brand tài trợ challenge

### 5.1. Giá thật của một sponsored challenge **[FACT]**

- **Strava Sponsored Challenges**: giá **khởi điểm $20.000–30.000** cho một challenge; giá tính theo **reach tiềm năng, mùa vụ, độ dài** (1 ngày → 1 tháng); **không** tính theo đầu người tham gia. Strava có ~50 triệu athlete. ([Strava Business](https://business.strava.com/challenges), [The Lead Out](https://theleadout.cc/cycling-sponsorship/strava-sponsored-challenges-cycling-sponsorship/), [Startup Spells](https://startupspells.com/p/strava-sponsored-challenges-mobilize-50m-athletes-with-native-ads))
- **UpRace 2025 (VN)**: **914.000 người tham gia**, ~3,5 triệu km, huy động **hơn 3,7 tỷ đồng** từ VNG + DMF + CP Paper. Cơ chế: mỗi km chạy = nhà tài trợ cam kết quyên góp tối thiểu **1.000đ**. ([Hà Nội Mới](https://hanoimoi.vn/uprace-2025-thu-hut-914-000-nguoi-tham-gia-728028.html), [Nhân Dân](https://nhandan.vn/uprace-2025-hon-900000-nguoi-cung-chay-gan-35-trieu-km-post932790.html))
- **MoMo Lắc Xì**: **>12 triệu người chơi**, >300 triệu lượt lắc; tổng giá trị giải thưởng **100 tỷ đồng** (mùa 2023), mùa nhỏ hơn ~30 tỷ. ([Woay](https://www.woay.vn/thay-gi-tu-chien-dich-gamification-moi-toanh-cua-momo), [MarketingAI](https://marketingai.vn/duong-dua-tet-cua-cac-ngan-hang-va-vi-dien-tu-thang-dam-voi-gamification-tinh-nang-li-xi-online-194250206090000283.htm))

### 5.2. Suy ra ngưỡng user để brand quan tâm **[INFERENCE]**

- UpRace: 3,7 tỷ đ / 914k người = **~4.000đ giá trị tài trợ trên mỗi người tham gia mỗi mùa** — và đây là tiền **từ thiện**, không phải ngân sách marketing performance.
- Strava: $30.000 / một challenge trên nền 50M user. Nếu quy đổi thô, brand mua **reach**, không mua conversion.
- **[INFERENCE]** Để một brand VN ký hợp đồng có ý nghĩa (**150–500 triệu đ**, mức tối thiểu để đội brand marketing bận tâm ký hợp đồng và làm hợp đồng, [GUESS]) trên đơn giá ~4.000đ/participant, Teemi cần **~40.000–125.000 người tham gia thật một chiến dịch**, tức khoảng **100.000–300.000 MAU**.
- **Dưới 50.000 MAU**: deal khả thi duy nhất là **barter/voucher** (brand đưa mã giảm giá, không đưa tiền mặt) hoặc micro-sponsorship 10–30 triệu đ với brand local (quán cà phê, phòng gym, thương hiệu trà sữa). Không đủ để gọi là revenue stream.

### 5.3. Rủi ro gian lận khi reward có giá trị thật **[INFERENCE]**

Proof của Teemi là **ảnh/audio người dùng tự nộp, nhóm tự duyệt**. Khi phần thưởng có giá trị tiền mặt:
1. **Collusion (thông đồng):** cả nhóm 5 người thoả thuận pass toàn bộ proof rác → farm voucher. Đây là failure mode **không thể chặn bằng peer review**, vì peer chính là đồng phạm.
2. **Nhóm ma:** 1 người tạo 5 tài khoản, tự lập nhóm, tự duyệt.
3. **Rủi ro pháp lý VN [FACT]:** NĐ147 **cấm đưa chương trình khuyến mại có thưởng bằng tiền/hiện vật vào giao diện/tính năng trò chơi**, và cấm quy đổi điểm thưởng ra thẻ quà tặng/thẻ ngân hàng. Nếu Teemi bị coi là trò chơi điện tử (xem §4.3), toàn bộ mô hình "đánh boss xong nhận voucher" có thể **vi phạm trực tiếp**.

**Khuyến nghị:** giữ nguyên nguyên tắc trong bản chiến lược gốc ("người dùng có thể gian lận phần vui, nhưng không được gian lận phần có giá trị thật") và **đẩy sponsor về sau 100k MAU**. Trước đó, nếu muốn thử, chỉ làm **sponsor thương hiệu không có phần thưởng cá nhân** (brand tài trợ *skin boss* / *theme mùa*, không phát voucher) — dạng này không tạo động cơ farm.

---

## 6. "MEMORY BUSINESS": người ta có trả tiền cho ký ức không?

### 6.1. Bằng chứng thị trường

| Case | Mô hình | Kết quả | Nguồn |
|---|---|---|---|
| **Timehop** | Ký ức "ngày này năm xưa", ad-supported | Không bao giờ thành business đáng kể; phụ thuộc API bên thứ ba (Instagram tắt API → mất nguồn dữ liệu) | [Timehop Help Center](https://help.timehop.com/article/1028-instagram-is-shutting-down-their-api-here-s-what-that-means-for-timehop-users) |
| **Day One** | Subscription journaling, $2,92/tháng (trả năm) | Ước ~40k tải và **~$400k doanh thu/tháng** (Sensor Tower). 5/2025 **bỏ giới hạn journal ở bản free** → paywall dịch chuyển sang AI/coaching | [Sensor Tower](https://app.sensortower.com/overview/1044867788?country=US), [Day One](https://dayoneapp.com/) |
| **Google Photos Memories** | Miễn phí | Memories là **hook giữ chân**; tiền đến từ **bán dung lượng lưu trữ** | — |
| **Spotify Wrapped** | Miễn phí hoàn toàn | 2025: ~200–300 triệu người dùng tương tác trong 24h, ~500–630 triệu lượt share; tải app tăng vọt 60–90% ngày ra mắt | [NoGood](https://nogood.io/blog/spotify-wrapped-marketing-strategy/), [Gracker](https://gracker.ai/news/spotify-wrapped-2025-a-marketing-triumph-in-yearly-celebrations) |

### 6.2. Đánh giá thẳng thắn **[INFERENCE]**

**Không. Người ta không trả tiền cho bản recap. Người ta trả tiền để (a) không mất ký ức, và (b) tạo ra ký ức dễ hơn.**

Ba quan sát:

1. **Recap đẹp là tài sản marketing, không phải SKU.** Spotify Wrapped miễn phí vì **tính chia sẻ chính là hình thức thanh toán** — mỗi story Wrapped là một quảng cáo không mất phí. Nếu Teemi tính tiền cho recap đẹp, bạn vừa **giết kênh tăng trưởng chính** vừa **thu về rất ít**. Recap và Memory Capsule **phải miễn phí và phải dễ share**.
2. **Cái bán được là loss aversion, không phải nostalgia.** Day One và Google Photos kiếm tiền từ nỗi sợ **mất** dữ liệu, không phải từ niềm vui **xem lại**. Với Teemi, phiên bản khả thi là: free lưu 90 ngày; sau 90 ngày timeline bị mờ/khoá; **"Mở khoá toàn bộ kho ký ức của nhóm"** = 399.000đ/năm cho cả nhóm. Người trả là người **đã có 6 tháng kỷ niệm trong đó** — đúng thời điểm willingness-to-pay cao nhất.
3. **Cái bán được thứ hai là vật lý hoá.** Photobook/poster in kỷ niệm nhóm cuối mùa. **[GUESS]** giá in VN 150–300k, bán 399–599k, biên 40–50%. Đây là "memory business" duy nhất có người thực sự rút ví — nhưng nặng vận hành (in ấn, ship, hoàn tiền) và **không nên làm ở MVP**.

**Cảnh báo:** ý tưởng "AI kể lại câu chuyện nhóm" trong bản chiến lược gốc — RevenueCat 2026 ghi nhận app AI có **realized LTV năm 1 cao hơn 41%** ($30,16 vs $21,37) **nhưng retention 12 tháng tệ hơn 36%** ([RevenueCat 2026](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026)). AI đẩy conversion, không giữ người. Đừng xây business case dựa vào AI recap.

---

## 7. UNIT ECONOMICS — 3 kịch bản

### 7.1. Tham số đầu vào

| Tham số | Giá trị | Nhãn | Nguồn/lý do |
|---|---|---|---|
| CPI Việt Nam | **$0,86** (~22.600đ) | FACT | [Mapendo CPI by country 2025](https://mapendo.co/blog/cost-per-install-by-country-2025) |
| CPI Android SEA (tham chiếu) | ~$1,20 | FACT | Mapendo |
| Retention D1 / D7 mobile VN (gaming) | **19% / 5%** (vs toàn cầu 28% / 14%) | FACT | [PPC Land — Vietnam app market 2025](https://ppc.land/vietnams-app-market-hits-2-88b-downloads-what-the-data-really-shows/) |
| Retention D30 social app tốt | 15–20% | FACT | [UXCam benchmarks 2026](https://uxcam.com/blog/mobile-app-retention-benchmarks/) |
| Retention D30 trung bình toàn ngành | 5,4% | FACT | AppsFlyer/Adjust dẫn lại bởi UXCam |
| Y1 RLTV/payer — IN/SEA | **$14** | FACT | RevenueCat 2026 |
| Y1 RLTV/payer — Bắc Mỹ | **$32** | FACT | RevenueCat 2026 |
| Tỉ lệ thực nhận sau phí sàn + thuế VN | **~77%** | INFERENCE | Apple SBP 15% + VAT 10% |

**Lưu ý quan trọng [FACT]:** Retention của thị trường VN **thấp hơn rõ rệt** mức toàn cầu — D1 19% vs 28%, D7 5% vs 14%. Đây là dữ liệu vertical gaming nhưng cho thấy đặc tính thị trường: **tải nhiều, bỏ nhanh**. Vietnam xếp **hạng 11 thế giới về lượt tải (2,88 tỷ installs năm 2025)** nhưng IAP gaming chỉ **$259 triệu** — tức thị trường **volume cao, tiền thấp**.

### 7.2. Mô hình (tính trên 100.000 installs, năm 1)

| | **Bi quan** | **Cơ sở** | **Lạc quan** |
|---|---|---|---|
| Install → vào nhóm ≥3 người active | 10% (10.000) | 20% (20.000) | 32% (32.000) |
| Còn active ở D30 | 5% installs (5.000) | 10% (10.000) | 18% (18.000) |
| Tỉ lệ install trở thành **payer** (D365) | 0,5% | 1,2% | 2,5% |
| Số payer | 500 | 1.200 | 2.500 |
| ARPPU năm 1 (giá niêm yết) | 150.000đ | 280.000đ | 420.000đ |
| Doanh thu gộp | 75 triệu đ | 336 triệu đ | 1.050 triệu đ |
| **Doanh thu thực nhận (×0,77)** | **58 triệu đ** | **259 triệu đ** | **809 triệu đ** |
| **Revenue per install (RPI, thực nhận)** | **580đ** | **2.590đ** | **8.090đ** |
| Hệ số viral K (mỗi paid install kéo thêm) | 0,2 | 0,6 | 1,2 |
| **CAC hiệu dụng** (CPI 22.600đ ÷ (1+K)) | **18.800đ** | **14.100đ** | **10.300đ** |
| **LTV/CAC năm 1** | **0,03** | **0,18** | **0,79** |
| **Payback period** | Không bao giờ | ~5,5 năm | ~15 tháng (nếu retention giữ được) |

### 7.3. Đọc bảng trên **[INFERENCE — đây là kết luận quan trọng nhất của cả tài liệu]**

**Không có kịch bản nào cho LTV/CAC ≥ 1 trong năm đầu.** Kể cả kịch bản lạc quan phi thực tế (K=1,2 — mức chỉ BeReal/Locket ở đỉnh sóng đạt được; payer rate 2,5% — cao hơn median freemium toàn ngành) vẫn chỉ đạt 0,79.

**Hệ quả trực tiếp:**
1. **Không được chi một đồng nào cho paid user acquisition.** Ngân sách marketing phải bằng 0 hoặc gần 0. Mọi tăng trưởng phải đến từ: mời nhóm (invite loop), share card recap lên story, TikTok organic, seeding trong cộng đồng sinh viên.
2. **Đơn vị kinh tế đúng của Teemi không phải "user" mà là "nhóm".** Một nhóm 5 người, 1 người trả 399k/năm → doanh thu/nhóm = **307k thực nhận/năm**. Chi phí acquire một nhóm khi organic ≈ 0. Chi phí hạ tầng/nhóm/năm **[GUESS]** ~30–60k (media storage + push + backend). **Biên gộp ~80% — miễn là CAC = 0.**
3. **Trần doanh thu theo quy mô (kịch bản Cơ sở, thực nhận):**

| MAU | Doanh thu năm (thực nhận) | Nuôi được |
|---|---|---|
| 10.000 | ~26 triệu đ | Không gì cả |
| 50.000 | ~130 triệu đ | Một phần lương 1 người |
| 100.000 | ~259 triệu đ | 1 người full-time (chật vật) |
| 500.000 | ~1,3 tỷ đ | Team 3–4 người |
| 1.000.000 | ~2,6 tỷ đ | Team 6–8 người, vẫn chưa venture-scale |

### 7.4. Phán quyết: business hay dự án đam mê?

**[INFERENCE]** Ở phạm vi **VN-only, B2C, freemium**: Teemi **không phải là một venture business**. Để đạt 1 triệu MAU cho một social app private-first ở VN cần một hiện tượng văn hoá cỡ Locket — và ngay cả khi đạt được, 2,6 tỷ đ/năm không đủ hấp dẫn với VC.

Nhưng Teemi **có thể là ba thứ khác, đều hợp lệ**:
1. **Bàn đạp / portfolio piece.** Chi phí build thấp, câu chuyện sản phẩm mạnh, dễ được chú ý. Nếu đạt 50–100k MAU, đó là tài sản để gọi vốn cho thứ khác hoặc để được acquihire.
2. **Small profitable business** — nếu giữ team ≤2 người và chi phí gần 0. 100–300k MAU → 260 triệu–800 triệu đ/năm là thu nhập thật cho 1–2 người ở VN.
3. **Đường vòng sang B2B** (xem §8.3) — nơi willingness-to-pay thực sự tồn tại.

---

## 8. NẾU KHÔNG PHẢI VIỆT NAM: thị trường nào tốt hơn?

### 8.1. So sánh ARPU / RLTV **[FACT]**

| Thị trường | Y1 RLTV/payer (RevenueCat 2026) | Ghi chú khác |
|---|---|---|
| **Bắc Mỹ (US/CA)** | **$32** | Thị trường chi tiêu app lớn nhất: ~$59–60 tỷ năm 2025 (Sensor Tower) |
| **Tây Âu** | **$25** | |
| **Toàn cầu (median)** | **$23** | |
| **Ấn Độ / Đông Nam Á (gồm VN)** | **$14** | Chênh > 2x so với Bắc Mỹ |
| **Hàn Quốc** | ARPU ~**$30,77** (Niko Partners, gaming, 2025) — cao nhất châu Á | |
| **Nhật Bản** | ARPU ~**$21,82** (Niko Partners, gaming, 2025) | |
| **Indonesia / Ấn Độ** | Trong nhóm IN/SEA $14; đứng #1–2 thế giới về **thời gian dùng app**, thấp nhất về chi tiêu/người | Sensor Tower State of Mobile 2026 |

Nguồn: [RevenueCat 2026](https://www.revenuecat.com/state-of-subscription-apps) · [Sensor Tower State of Mobile 2026](https://sensortower.com/blog/state-of-mobile-2026)

### 8.2. Xếp hạng thị trường cho Teemi **[INFERENCE]**

| Hạng | Thị trường | Vì sao | Rủi ro |
|---|---|---|---|
| **1** | **Mỹ** | RLTV cao nhất ($32, **2,3x VN**); văn hoá "accountability buddy", "friend group app" đã tồn tại (BeReal, Locket, Gas, Partiful đều bùng nổ từ US college). CPI cao nhưng nếu organic thì không quan trọng | Cạnh tranh khốc liệt, chi phí support/moderation cao, không thể ở gần user |
| **2** | **Hàn Quốc** | ARPU cao nhất châu Á (~$30,77); văn hoá nhóm bạn thân + cosmetic/character rất mạnh; thị trường nhỏ, dễ dominate một ngách | Cần localization sâu, cạnh tranh KakaoTalk, rào cản văn hoá lớn |
| **3** | **Việt Nam** | Rẻ để test, founder hiểu văn hoá, CPI $0,86, virality Gen Z cao | ARPU $14, retention thị trường thấp (D7 5%), rủi ro pháp lý NĐ147/174 |
| **4** | **Indonesia** | Quy mô lớn, #2 thế giới về time-in-app | ARPU không hơn VN, thêm chi phí localization mà không thêm tiền |
| **5** | **Ấn Độ** | #1 thế giới về installs (25,5 tỷ) và time-in-app | ARPU thấp nhất; hầu như không thể monetize bằng subscription |

**[INFERENCE] Chiến lược 2 thị trường khuyến nghị:** build và validate ritual ở **VN** (chi phí thấp, feedback loop nhanh, founder hiểu ngôn ngữ cà khịa), nhưng thiết kế sản phẩm **song ngữ ngay từ đầu** và mở bản EN cho **US college campus** ngay khi retention D30 nhóm > 25%. Cùng một sản phẩm, cùng một MAU, doanh thu ở Mỹ cao hơn **~2,3 lần**.

### 8.3. Cửa thứ ba: B2B **[GUESS — chưa validate]**

Nhóm có ngân sách thực để mua "ritual giữ nhịp cả nhóm": **doanh nghiệp** (team wellness, onboarding), **trường học/CLB**, **phòng gym/trung tâm tiếng Anh**. Đơn giá per-seat B2B ở VN có thể **50–150k/người/năm** — cao hơn B2C nhiều lần, và người trả không phải người dùng. Đây là con đường duy nhất trong tài liệu này có unit economics tự nhiên dương. Nhưng nó **làm hỏng định vị "private-first cho nhóm bạn thân"** — phải chọn, không thể làm cả hai ở MVP.

---

## 9. KHUYẾN NGHỊ HÀNH ĐỘNG (ưu tiên theo thứ tự)

1. **Trước khi code thêm bất cứ gì: hỏi luật sư về rủi ro G1** (§4.3). Nếu Teemi bị phân loại là trò chơi điện tử trên mạng, toàn bộ roadmap thay đổi. Chi phí tư vấn ~5–15 triệu đ **[GUESS]**, rẻ hơn nhiều so với build sai 6 tháng.
2. **MVP: 0 monetization.** Không paywall, không cosmetic shop, không gacha. Mục tiêu duy nhất là chứng minh **D30 retention cấp nhóm ≥ 25%**. Không đạt → dừng, không cần đọc phần còn lại.
3. **SKU đầu tiên khi monetize: Teemi Crew 399.000đ/năm** (1 người trả, nhóm ≤6) + **Boost nhóm 19.000đ**. Không bán gói cá nhân trước — gói cá nhân dạy user rằng đây là app cá nhân.
4. **Paywall đặt ở loss aversion, không ở feature:** khoá archive sau 90 ngày, không khoá recap/share card. Recap phải miễn phí vì nó là kênh acquisition.
5. **Ngân sách paid acquisition = 0đ** cho tới khi RPI thực đo > 3.000đ.
6. **Cosmetic shop: chỉ mở khi vượt 20.000 MAU.** Trước đó cosmetic là phần thưởng kiếm được.
7. **Sponsor: chỉ đàm phán khi vượt 100.000 MAU**, và mùa đầu chỉ nhận **sponsor thương hiệu (skin/theme)**, không phát voucher có giá trị.
8. **Bản EN + thử nghiệm US ngay khi retention đạt ngưỡng.** Đây là đòn bẩy doanh thu lớn nhất (2,3x) và rẻ nhất trong tất cả các lựa chọn.

---

## 10. Danh mục nguồn

- RevenueCat — State of Subscription Apps 2026: https://www.revenuecat.com/state-of-subscription-apps
- RevenueCat — benchmark tóm tắt 2026: https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026
- RevenueCat — State of Subscription Apps 2025: https://www.revenuecat.com/state-of-subscription-apps-2025
- Adapty — State of In-App Subscriptions 2026: https://adapty.io/state-of-in-app-subscriptions/
- Sensor Tower — State of Mobile 2026: https://sensortower.com/blog/state-of-mobile-2026
- Sensor Tower — thông cáo IAP $167 tỷ: https://sensortower.com/press/press-release-boosted-by-gen-ai-services-consumers-spent-more-money-in-apps-than-games-for-first-time
- PPC Land — thị trường app Việt Nam 2,88 tỷ lượt tải: https://ppc.land/vietnams-app-market-hits-2-88b-downloads-what-the-data-really-shows/
- Mapendo — CPI theo quốc gia 2025: https://mapendo.co/blog/cost-per-install-by-country-2025
- UXCam — Mobile App Retention Benchmarks 2026: https://uxcam.com/blog/mobile-app-retention-benchmarks/
- TechCrunch — Bumble mua Geneva: https://techcrunch.com/2024/05/20/bumble-buys-community-building-app-geneva-to-expand-further-into-friendships/
- Sunset HQ — Geneva Acquisition (0 doanh thu, đóng cửa 9/2025): https://www.sunsethq.com/blog/geneva-acquisition
- Sacra — Discord revenue: https://sacra.com/c/discord/
- DemandSage — Discord Statistics 2026: https://www.demandsage.com/discord-statistics/
- Habitica Wiki — Group Plans: https://habitica.fandom.com/wiki/Group_Plans
- Spotify Việt Nam — bảng giá: https://www.spotify.com/vn-vi/premium/
- Moloco — Locket Widget case study: https://www.moloco.com/case-studies/locket-widget
- Helium — Locket tăng subscription 77%: https://tryhelium.com/blog/how-locket-grew-subscriptions-by-77-with-helium
- Fenwick — Apple yêu cầu công bố odds loot box: https://www.fenwick.com/insights/publications/apple-now-requires-disclosure-of-loot-box-odds
- LuatVietnam — quy định vật phẩm ảo NĐ147/2024: https://luatvietnam.vn/tin-van-ban-moi/quy-dinh-ve-vat-pham-ao-diem-thuong-trong-game-tu-25-12-2024-186-99885-article.html
- Thư Viện Pháp Luật — NĐ174/2026 chế tài vật phẩm ảo: https://thuvienphapluat.vn/banan/tin-tuc/nghi-dinh-174-2026-mua-ban-vat-pham-ao-trong-game-co-the-bi-phat-den-3-trieu-dong-tu-0172026-50220.html
- Luật Việt An — giấy phép G1: https://luatvietan.vn/giay-phep-game-online-g1.html
- Strava Business — Sponsored Challenges: https://business.strava.com/challenges
- Hà Nội Mới — UpRace 2025 914.000 người: https://hanoimoi.vn/uprace-2025-thu-hut-914-000-nguoi-tham-gia-728028.html
- Woay — chiến dịch gamification MoMo: https://www.woay.vn/thay-gi-tu-chien-dich-gamification-moi-toanh-cua-momo
- Đại biểu Nhân dân — chi tiêu giải trí số của người trẻ VN: https://daibieunhandan.vn/nguoi-tre-dang-tieu-tien-cho-giai-tri-so-nhu-the-nao-10375361.html
- NoGood — Spotify Wrapped marketing strategy: https://nogood.io/blog/spotify-wrapped-marketing-strategy/
- 9to5Mac — thay đổi thuế App Store 8/2025 (gồm VN): https://9to5mac.com/2025/08/21/apple-details-new-app-store-taxes-and-price-changes-in-select-countries/
