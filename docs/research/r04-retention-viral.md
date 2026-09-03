# R04 — RETENTION, COLD START NHÓM & VÒNG LAN TRUYỀN
### Nghiên cứu nền cho Teemi (social challenge app private-first, nhóm bạn thân, VN, Gen Z 16–28)

> Ngày nghiên cứu: **2026-08-28**
> Quy ước độ tin cậy: **[FACT]** = có nguồn số liệu · **[INFERENCE]** = suy luận từ dữ liệu có nguồn · **[GUESS]** = phỏng đoán, chưa có bằng chứng
> Cảnh báo chung: mọi "benchmark retention" công khai đều là dữ liệu tổng hợp từ hàng chục nghìn app rất khác nhau. Dùng để **định vị thô**, không dùng để đặt OKR cứng.

---

## 0. TL;DR cho founder

1. **Đừng so với "social app trung bình" — con số đó vô nghĩa.** D30 trung bình của social app chỉ **3,9%** (Statista) đến **3,11%** (AppsFlyer), nhưng nhóm top thì **15–20%**. Khoảng cách 5x này không phải do "tối ưu onboarding" mà do **có/không có network effect thật**. Teemi phải nằm ở nhóm trên hoặc chết.
2. **Chỉ số sống-chết của Teemi không phải D1/D7 cá nhân, mà là "group activation": nhóm có ≥3 người nộp proof trong 48h đầu."** Đây là biến duy nhất đáng ám ảnh. Facebook có "7 friends in 10 days"; Teemi cần "3 proof-givers in 48 hours".
3. **Cold start nhóm là rủi ro số 1 và nó giết nhiều app hơn cả tính năng dở.** Poparazzi, Gas, Clubhouse đều chết vì lý do này (hoặc biến thể của nó). Locket và Yope sống vì thiết kế invite ngay trong bước onboarding bắt buộc.
4. **Benchmark tham chiếu tốt nhất cho Teemi không phải BeReal mà là Yope: D7 = 40%** — app chia sẻ ảnh nhóm riêng tư, cùng tệp Gen Z, cùng cấu trúc "nhóm nhỏ đóng". Đây là mục tiêu thực tế nhất.
5. **Novelty decay là mặc định, không phải rủi ro.** BeReal mất **~48% DAU trong 4 tháng** sau đỉnh. Gas mất **98% downloads trong ~8 tháng**. Cái phân biệt Discord/Strava với Gas/Poparazzi là **switching cost do dữ liệu tích luỹ + nhóm người thật**, không phải novelty.

---

## 1. BENCHMARK RETENTION — Teemi đang ở đâu?

### 1.1. Bảng benchmark tổng hợp 2025–2026

| Category | D1 (median) | D1 (top) | D7 (median) | D7 (top) | D30 (median) | D30 (top) |
|---|---|---|---|---|---|---|
| **Tất cả app** | 25% | 30–40% | 8% | 10–15% | 4% | 5–8% |
| **Social** | 40% | 50–60% | 18% | 25–30% | 12% | 15–20% |
| **Health & Fitness** | 25% | 35–45% | 10% | 15–22% | 5% | 8–12% |
| **Fintech** | 28% | 35–45% | 12% | 18–25% | 7% | 10–15% |

Nguồn: [UXCam — Mobile App Retention Benchmarks by Category (2026)](https://uxcam.com/blog/mobile-app-retention-benchmarks/), tổng hợp từ **AppsFlyer State of App Marketing 2025**, **Adjust Mobile App Trends 2026**, **data.ai State of Mobile 2026**. Dữ liệu phản ánh năm tài chính 2025. **[FACT]**

### 1.2. Bảng số liệu "trung bình thật" — thấp hơn nhiều

| Nguồn | Chỉ số | Con số |
|---|---|---|
| Business of Apps / Statista | iOS toàn ngành D1 | **25,4%** |
| Business of Apps / Statista | iOS toàn ngành D30 | **5,3%** |
| Business of Apps / Statista | Android toàn ngành D1 | **20,2%** |
| Business of Apps / Statista | Android toàn ngành D30 | **3,8%** |
| Statista | Social app D1 / D7 / D30 | **26,3% / 9,3% / 3,9%** |
| AppsFlyer | Social app D30 | **3,11%** |
| AppsFlyer | Health & Fitness D30 | **2,78%** |

Nguồn: [Business of Apps — App Retention Rates 2026](https://www.businessofapps.com/data/app-retention-rates/) (trang chặn crawler, số liệu lấy qua kết quả tìm kiếm và các bài trích dẫn lại), [UXCam](https://uxcam.com/blog/mobile-app-retention-benchmarks/), [Sendbird](https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry). **[FACT — nhưng lưu ý số Business of Apps được truy xuất gián tiếp, cần verify lại trước khi đưa vào pitch deck]**

### 1.3. Benchmark sát nhất với Teemi: các app nhóm nhỏ riêng tư

| App | Chỉ số công bố | Nguồn |
|---|---|---|
| **Yope** (ảnh nhóm riêng tư, Gen Z) | **D7 = 40%** · 2,2M MAU · 800K DAU · 5M+ downloads · tăng 30x trong 6 tháng | [TechCrunch 24/02/2025](https://techcrunch.com/2025/02/24/yope-is-sparking-genz-and-vc-interest-with-an-instagram-like-app-for-private-groups) |
| **Locket** (widget ảnh bạn thân) | 80M+ downloads · **9M+ DAU** · 10 tỷ ảnh · profitable 2024 với chỉ $12,5M gọi vốn | [TechCrunch 06/08/2025](https://techcrunch.com/2025/08/06/photo-sharing-app-locket-is-banking-on-a-new-celebrity-focused-feature-to-fuel-its-growth) |
| **BeReal** (đỉnh 2022) | DAU/MAU ≈ 20M/73,5M ≈ **27%** | [Charle Agency — BeReal Statistics 2026](https://www.charleagency.com/articles/bereal-statistics/) |
| **BeReal** (2025–2026) | DAU ~2,93M · engagement rate ngày 72% · session 9,2 phút → dưới 5 phút | Charle Agency (nguồn trên) |

**[FACT]**

### 1.4. Mục tiêu retention đề xuất cho Teemi

Đây là **inference** của tôi từ các benchmark trên, không phải số liệu có sẵn:

| Giai đoạn | Chỉ số | Ngưỡng "chết" | Ngưỡng "OK" | Ngưỡng "có cửa" |
|---|---|---|---|---|
| Beta đóng (10–30 nhóm) | **Group D7** (nhóm còn ≥2 người nộp proof) | < 30% | 40–50% | > 60% |
| Beta đóng | **User D7** | < 20% | 30–40% | > 45% |
| Sau launch | **User D30** | < 6% | 10–15% | > 18% |
| Sau launch | **DAU/MAU** | < 15% | 20–30% | > 35% |
| Luôn luôn | **% nhóm có ≥3 active member sau 14 ngày** | < 25% | 40% | > 55% |

**[INFERENCE]** — Lý do đặt D7 mục tiêu 40%: Yope đã chứng minh đây là con số đạt được với đúng tệp và đúng cấu trúc nhóm riêng tư. Lý do D30 15–18%: đó là dải "top performer" của social theo UXCam, và Teemi có thêm lớp habit/goal (cho lý do quay lại ngoài social) nên có quyền tham vọng hơn social thuần.

> **Cảnh báo đo lường:** với app nhóm, đo retention theo **user** sẽ đánh lừa. Một nhóm 5 người mà 4 người bỏ thì user retention còn 20% nhưng thực chất **nhóm đã chết 100%**. Teemi phải đo **cohort theo group**, không theo user. Đây có lẽ là quyết định analytics quan trọng nhất ở MVP.

---

## 2. COLD START NHÓM — vấn đề nghiêm trọng nhất

### 2.1. Vì sao đây là rủi ro số 1

Teemi cần **≥3 người** mới có giá trị (proof + reaction + boss chung). Nhưng invite là hành vi **có chi phí xã hội**: rủ bạn vào app lạ = đặt uy tín cá nhân lên bàn. Nếu người rủ vào thấy app trống, họ bỏ, và người rủ mất mặt → không rủ lần hai.

Bằng chứng thực nghiệm về mức độ dốc của vấn đề này:

> Nghiên cứu WeChat trên toàn bộ log nhóm chat: **gần 40% nhóm ngừng tương tác trong vòng 1 tuần**; chỉ **30% nhóm sống ≥30 ngày**. Nhóm dài hạn và ngắn hạn là **hai loại khác hẳn nhau về bản chất** (mô hình phân tách được với độ chính xác cao), phụ thuộc vào **vai trò xã hội và mục đích cụ thể** của nhóm.
> — [Qiu et al., "The Lifecycle and Cascade of WeChat Social Messaging Groups", WWW 2016](https://arxiv.org/abs/1512.07831) · [PDF](https://archives.iw3c2.org/www2016/WWW2016-Proceedings/proceedings/p311.pdf) **[FACT]**

Ý nghĩa với Teemi: **40% nhóm sẽ chết trong tuần đầu bất kể bạn làm gì.** Đây là baseline vật lý của group product. Việc của Teemi là đẩy con số 30% "nhóm sống ≥30 ngày" lên, và làm điều đó bằng cách **cho nhóm một mục đích cụ thể** — đúng như phát hiện của paper: nhóm sống lâu là nhóm có **function rõ ràng**. "Cả nhóm đánh boss chung" chính là function đó. Đây là điểm mạnh chiến lược của Teemi so với một group chat trống.

### 2.2. Cách các app đã giải — bảng so sánh chiến thuật

| App | Cơ chế cold start | Kết quả | Bài học cho Teemi |
|---|---|---|---|
| **Locket** | Onboarding **bắt buộc**: số điện thoại → quyền danh bạ → màn hình "invite bạn qua SMS" ngay lập tức. Giới hạn **20 bạn** (Gold mới unlimited). Widget hiện ảnh bạn bè ngay trên home screen. | 9M+ DAU, profitable | **Ép invite ngay trong onboarding**, không cho skip êm. Giới hạn số bạn = tín hiệu "đây là chỗ của người thân", làm tăng khả năng invite đúng người. Nguồn: [Locket Help Center](https://help.locket.com/en/articles/7915024-how-many-friends-can-i-have-on-locket), [ScreenRant](https://screenrant.com/locket-widget-app-add-friends-how/) **[FACT]** |
| **Yope** | Nhóm riêng tư = đơn vị cơ bản (không phải profile cá nhân). Widget lock screen + streak + recap slideshow. | D7 = 40% | **Group là first-class object.** User không có "profile" để chăm — họ có "nhóm" để nuôi. Teemi nên làm y hệt. **[FACT + INFERENCE]** |
| **Partiful** | **Guest không cần cài app.** Invite là một trang web đẹp, share được qua iMessage/IG/WhatsApp; khách RSVP, xem ai đi, nhận nhắc — không cần download. | +2M user 2025; 500K MAU Q1/2025 (+400% YoY); 5M user mới trong H1/2025; **không chi paid acquisition** | **Hạ rào cản xuống 0 cho người được mời.** Với Teemi: link mời phải mở ra **web preview** cho thấy nhóm đang chơi gì, boss còn bao nhiêu máu, ai đã nộp — trước khi bắt cài app. Nguồn: [CNBC 19/04/2025](https://www.cnbc.com/2025/04/19/meet-partiful-the-gen-z-party-planning-staple-thats-taking-on-apple.html), [Sacra](https://sacra.com/c/partiful/) **[FACT]** |
| **BeReal** | Không giải cold start bằng sản phẩm — giải bằng **campus ambassador + viral TikTok**. Khi hype hết thì cold start quay lại. | DAU 20M (10/2022) → 6M (03/2023) | **Viral acquisition không thay thế được cold-start design.** **[FACT + INFERENCE]** |
| **Gas** | Geo-fenced launch theo từng trường trung học — chỉ mở app ở một trường khi đủ mật độ học sinh. Đây là cold-start solution **rất tốt**. | Đỉnh 3,1M downloads/tháng (11/2022) → giảm **98%** → đóng cửa 07/11/2023 | Mật độ địa lý giải được cold start **nhưng không giải được retention**. Nguồn: [42matters](https://42matters.com/blog/?p=gas-downloads-down-98-following-discord-acquisition), [TechCrunch 19/10/2023](https://techcrunch.com/2023/10/19/discord-kills-gas-anonymous-compliments-app-bought-nine-months-ago) **[FACT]** |
| **Discord** | Bắt đầu từ **nhóm chơi game đã tồn tại sẵn** — không tạo nhóm mới, chỉ thay chỗ ở của nhóm cũ (thay Skype/TeamSpeak). | Sống >10 năm | **Đừng bắt user tạo nhóm mới. Hãy chiếm nhóm đã có.** Teemi nên coi group chat Zalo/Messenger sẵn có là "nhóm nguồn". **[INFERENCE]** |
| **Marco Polo** | Nhóm gia đình — đơn vị xã hội **không tan rã theo mùa**, khác nhóm bạn. Bùng nổ trong COVID (1,1M downloads trong vài tháng đầu). | >10M downloads, sống lâu | Nếu nhóm bạn tan, **gia đình/người yêu (Duo)** là fallback có retention cao hơn. Doc chiến lược đã ghi nhận Duo retention tốt — đúng. Nguồn: [Forbes 06/04/2020](https://www.forbes.com/sites/monicamelton/2020/04/06/why-more-than-1-million-usersincluding-pink-and-ice-tare-flocking-to-marco-polo-amid-covid-19s-epidemic-of-loneliness/) **[FACT + INFERENCE]** |
| **Poparazzi** | Không có cơ chế cold start ngoài virality. Concept "chỉ post ảnh người khác" **bắt buộc phải có bạn mới dùng được** — solo value = 0. | Top App Store 2021 → đóng cửa 05/2023 | **Solo value = 0 là án tử.** Nguồn: [TechCrunch 01/05/2023](https://techcrunch.com/2023/05/01/once-hot-photo-sharing-social-app-poparazzi-is-shutting-down/) **[FACT]** |

### 2.3. Bốn chiến thuật cụ thể cho Teemi

**(a) Seeding — "founding crew" thay vì "user"**
Không tuyển user lẻ ở beta. Tuyển **nhóm**. Form đăng ký beta yêu cầu nhập **tên 3 người bạn + link group chat**. Chỉ approve khi đủ 3. Đây là cách rẻ nhất để loại 40% nhóm sẽ chết trong tuần đầu ngay từ cửa. **[INFERENCE — dựa trên WeChat lifecycle study]**

**(b) Invite flow — hạ rào cản xuống 0**
- Link mời → **web landing page** hiển thị: tên nhóm, avatar 3 người đã vào, boss đang HP bao nhiêu, "Huy vừa nộp proof 12 phút trước". Đây là **social proof + FOMO** trước cả khi cài app. Học Partiful.
- Người mời được nhắc theo template có sẵn để paste thẳng vào Zalo: _"Vào đánh boss với tao, tao chọn kèo ngủ trước 12h. Mày chọn kèo gì?"_ — invite copy do product viết, không để user tự nghĩ.
- **Deferred deep link** (Branch/AppsFlyer OneLink) để sau khi cài app xong, user vào thẳng đúng nhóm, không phải nhập code.

**(c) Solo value tạm thời — "app không được trống"**
Poparazzi chết vì solo value = 0. Teemi phải có giá trị ngay cả khi mới 1 người:
- User solo vẫn có kèo riêng, vẫn nộp proof, vẫn có streak và recap cá nhân.
- Boss solo yếu hơn (HP thấp) để một người vẫn đánh được → nhưng **hiển thị rõ**: "Boss này 3 người đánh sẽ nhanh gấp 4 lần" → tạo lý do invite nội tại, không phải nút "Invite" khô khan.
- **AI/bot member tạm thời**: một "NPC" trong nhóm reaction/cà khịa proof của user trong 48h đầu, và **tự biến mất khi người bạn thật thứ 2 vào**. Rủi ro: nếu làm dở sẽ thành creepy/rẻ tiền. **[GUESS — chưa tìm được app nào công bố kết quả của cơ chế này; cần A/B test]**

**(d) "Ghost mode" / low-pressure participation**
Vấn đề: một số thành viên không muốn nộp proof mỗi ngày nhưng vẫn muốn ở trong nhóm. Nếu ép, họ rời → nhóm tụt dưới 3 người → chết.
Cơ chế đề xuất: **role "Khán giả"** — không có kèo, không bị tính miss, không làm boss hồi máu, nhưng vẫn xem được recap và **được cà khịa người khác**. Đây là cách giữ headcount nhóm ≥3 mà không tạo áp lực. Doc chiến lược đã có "Casual mode / Life Happens / Pause" — nên gộp thành một hệ thống trạng thái rõ ràng: `Active → Casual → Spectator → Paused`, chuyển đổi được bất kỳ lúc nào, và **boss chỉ tính trên số Active**. **[INFERENCE]**

---

## 3. INVITE LOOP & K-FACTOR

### 3.1. Công thức và ngưỡng

K = (số lời mời gửi đi mỗi user) × (tỉ lệ lời mời chuyển đổi). K > 1 = tăng trưởng tự nhân. Branch phân rã chi tiết hơn: **K = (download→activation) × (activation→share) × (share→new download)**.
Nguồn: [Branch.io — K-factor](https://www.branch.io/glossary/k-factor/), [First Round Review](https://review.firstround.com/glossary/k-factor-virality/) **[FACT]**

> **KHÔNG TÌM ĐƯỢC SỐ LIỆU** — không có benchmark k-factor công khai đáng tin riêng cho "small-group social app". Các nguồn đều nói benchmark thay đổi quá lớn theo platform/audience và khuyên không dùng làm target. Mọi con số k-factor bạn thấy trên blog marketing đều nên coi là **[GUESS]**.

### 3.2. Ước lượng thực tế cho Teemi **[INFERENCE + GUESS]**

Với app nhóm bạn thân, cấu trúc invite khác app viral:
- Số lời mời/user thấp (chỉ mời 3–7 người thân, không mời 200 follower) → **branching factor thấp**
- Nhưng conversion cao (bạn thân mời thì tin) → **conversion cao**

Ước lượng làm việc (cần đo lại sau beta):

| Bước | Ước lượng | Ghi chú |
|---|---|---|
| % user gửi ≥1 invite | 30–45% | Nếu ép invite trong onboarding kiểu Locket có thể lên 60%+ |
| Số invite TB/user gửi | 3–5 | Giới hạn tự nhiên của "nhóm bạn thân" |
| Invite → cài app | 20–35% | Bạn thân, tin cậy cao |
| **K ước tính** | **0,25 – 0,7** | **K < 1** → Teemi KHÔNG viral tự thân |

**Kết luận quan trọng: đừng kỳ vọng K > 1.** Teemi sẽ cần seeding thủ công + content marketing (TikTok kiểu Locket) làm nguồn top-of-funnel, và invite loop chỉ để **làm dày nhóm** (từ 2 lên 5 người), không phải để tăng trưởng số nhóm. Đây là mô hình Locket đã dùng: [nano-influencer TikTok trả phí một lần, hàng trăm video giống nhau](https://www.findmecreators.com/growth/locket-app-tiktok-strategy). **[FACT về Locket + INFERENCE về Teemi]**

### 3.3. Zalo/Messenger ở Việt Nam — kênh invite chính

Bối cảnh thị trường:

| Chỉ số | Con số | Nguồn |
|---|---|---|
| Zalo MAU tại VN (12/2025) | **79,6 triệu** (từ 77,8M cuối 2024) | [vietnam.vn](https://www.vietnam.vn/en/79-6-trieu-nguoi-dung-zalo-thuong-xuyen-hang-thang) |
| Messenger users VN | **55,9 triệu** (55,2% dân số, ~70% người dùng internet) | Vietnam Digital Report 2025 |
| Social media users VN (10/2025) | **79,0 triệu** (77,6% dân số), +5,3M (+7,2%) YoY | [DataReportal Digital 2026: Vietnam](https://datareportal.com/reports/digital-2026-vietnam) |
| Thời gian dùng app/ngày | **7,3 giờ**, ~29 app/tuần | Q&Me (Asia Plus), khảo sát 03/2025 |
| OS chiếm ưu thế | **Android** (iOS thiểu số) | [Statista — Vietnam mobile OS share 2025](https://www.statista.com/statistics/928956/vietnam-mobile-os-share/) |

**[FACT]**

**Zalo có chặn link lạ không? — CÓ, một phần.**
Zalo có hệ thống cảnh báo/chặn link lừa đảo. Khi domain bị đánh giá vi phạm chính sách bảo mật, **link sẽ hiện màn hình cảnh báo** ("Link này có thể không an toàn") thay vì mở thẳng, và trong trường hợp nặng thì bị chặn. Zalo có quy trình để chủ domain liên hệ gỡ cảnh báo.
Nguồn: [Zalo Help — Xử lý cảnh báo link lừa đảo](https://help.zalo.me/huong-dan/chuyen-muc/bao-mat-va-rieng-tu/xu-ly-canh-bao-link-lua-dao-tren-zalo/), [Báo Thanh Hóa](https://baothanhhoa.vn/chi-tiet-cach-xu-ly-link-cang-bao-lua-dao-tren-ung-dung-zalo-261585.htm) **[FACT]**

**Hành động bắt buộc cho Teemi:**
1. **Dùng domain riêng, có brand, có HTTPS, có nội dung thật** (`teemi.vn` hoặc `teemi.app`) cho link mời. **KHÔNG dùng link shortener** (bit.ly, t.co) và **KHÔNG dùng subdomain mặc định của Branch** (`xxx.app.link`) làm link chính — đây là dạng dễ bị flag nhất. **[INFERENCE — dựa trên cơ chế cảnh báo domain của Zalo]**
2. Chủ động đăng ký/whitelist domain với Zalo trước khi launch.
3. Link mời phải có **OpenGraph preview đẹp** (ảnh boss + tên nhóm) — trong Zalo/Messenger, một link có preview đẹp có tỉ lệ click cao hơn hẳn link trần. **[GUESS — không tìm được số liệu VN cụ thể]**
4. **Backup channel**: luôn có **mã nhóm 6 ký tự** gõ tay được, phòng khi link bị chặn. Rẻ và cứu được rất nhiều trường hợp.
5. Vì Android chiếm ưu thế ở VN, **Android phải là platform ngang hàng ngay từ MVP** — không làm iOS-first kiểu app Mỹ. Cũng lưu ý: retention Android thấp hơn iOS có hệ thống (D30 3,8% vs 5,3%), nên benchmark nội bộ phải tách theo OS.

---

## 4. NOTIFICATION

### 4.1. Opt-in rate 2025–2026

| Platform | Opt-in rate | Thay đổi |
|---|---|---|
| **Android** | **67%** | giảm từ 85% — do Android 13 áp dụng cơ chế xin phép giống iOS |
| **iOS** | **56%** | giảm nhẹ từ 58% |
| Trung bình | **61%** | |

Reaction rate trung bình (Airship): **4,6% Android / 3,4% iOS**.
Nguồn: [Pushwoosh — Push notification benchmarks 2025](https://www.pushwoosh.com/blog/push-notification-benchmarks/), [Airship 2025 Benchmarks (PDF)](https://growth.airship.com/rs/313-QPJ-195/images/Airship-2025-Push-Notification-Benchmarks-EN.pdf?version=0) **[FACT]**

> **Hệ quả trực tiếp cho Teemi:** ở VN — thị trường Android-dominant — Teemi sẽ mất ~33% user khỏi kênh push ngay từ đầu. Không được thiết kế ritual **phụ thuộc hoàn toàn** vào push.

### 4.2. Ngưỡng gây khó chịu

| Chỉ số | Con số | Nguồn |
|---|---|---|
| User uninstall khi quá nhiều noti | **6%** | Business of Apps / Upshot |
| User tắt noti khi quá nhiều | **10%** | như trên |
| User cho rằng brand gửi quá nhiều | **29%** | như trên |
| User thấy noti gây khó chịu | **~53%** | như trên |
| Nhận >20 noti/ngày | **22%** người dùng | như trên |
| (Khảo sát US 2021) đổi setting khi quá nhiều | **42%** | [Statista](https://www.statista.com/statistics/1242709/us-too-many-push-notifications-users-reaction) |
| (Khảo sát US 2021) tắt toàn bộ noti của app | **~40%** | như trên |

Nguồn tổng hợp: [Business of Apps — Push Notifications Statistics 2026](https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/) **[FACT]**

> **KHÔNG TÌM ĐƯỢC SỐ LIỆU** cho câu hỏi "bao nhiêu noti/ngày là ngưỡng chính xác". Không có nghiên cứu công khai đưa ra con số cứng. **[INFERENCE]** của tôi: với app social nhóm nhỏ, **≤2 push/ngày do hệ thống chủ động gửi** là an toàn; push do **hành động của bạn bè** (bạn reaction proof của bạn) không tính vào ngưỡng này vì user coi đó là "tin nhắn từ người thật", không phải marketing.

### 4.3. Cơ chế BeReal — hiệu quả và tác dụng phụ

**Hiệu quả:**
- **68% user mở app trong 3 phút** sau khi nhận notification. Đây là **con số reaction rate cao gấp ~15–20 lần** benchmark ngành (3,4–4,6%). **[FACT]** — [Charle Agency](https://www.charleagency.com/articles/bereal-statistics/)
- Engagement rate ngày: **72%**
- Chỉ 1 push/ngày → không bao giờ chạm ngưỡng fatigue

**Tác dụng phụ (quan trọng):**
1. **Thời điểm ngẫu nhiên = miss thường xuyên.** User đang họp/lái xe/ngủ thì mất lượt. Miss nhiều lần → cảm giác thất bại → churn.
2. **Trần engagement cứng.** 1 lần/ngày = tối đa 1 session/ngày. Session time BeReal rơi từ 9,2 phút xuống dưới 5 phút — không có gì để làm thêm. **[FACT]**
3. **Không có "lý do quay lại" nào khác.** Khi novelty hết, không còn gì giữ chân — đây là nguyên nhân cấu trúc của việc DAU rơi từ 20M xuống 6M trong 5 tháng.

**Khuyến nghị cho Teemi:** **KHÔNG copy cơ chế random-time của BeReal.** Thay bằng:
- **1 push cố định do NHÓM tự chọn giờ** (ví dụ 21:00 — "giờ nộp proof của nhóm mình"). Nhóm tự chọn → cảm giác sở hữu, không phải bị app điều khiển.
- **1 push recap cuối ngày** (22:30): "Boss còn 340 HP. Nam chưa nộp. Nhóm có 1 giờ."
- Push từ **hành động người thật** (reaction, cà khịa) — không giới hạn, vì đây là social signal chứ không phải noti hệ thống.

### 4.4. Widget có mạnh hơn notification không?

**Có — và đây có thể là insight quan trọng nhất phần này.**

Locket cố tình **không dùng push làm kênh chính**: widget tự refresh hiển thị ảnh mới nhất của bạn bè ngay trên home screen. Vòng lặp là **"liếc mắt → chạm → lặp lại"** — user thấy nội dung mà không cần app xin phép gì cả.
Nguồn: [Neoads — The Widget Effect](https://neoads.substack.com/p/the-widget-effect), [TechCrunch](https://techcrunch.com/2025/08/06/photo-sharing-app-locket-is-banking-on-a-new-celebrity-focused-feature-to-fuel-its-growth) **[FACT]**

Yope cũng dùng **lock screen widget** hiển thị ảnh nhóm gần nhất. **[FACT]**

**Ưu thế cấu trúc của widget so với push:**

| | Push | Widget |
|---|---|---|
| Cần opt-in | **Có** (mất 33–44% user) | **Không** |
| Bị tắt được | Có, dễ | Rất hiếm khi user gỡ widget đã đặt |
| Gây khó chịu | Có ngưỡng | Gần như không |
| Hiện diện | Thoáng qua | **Thường trực trên home screen** |
| Tần suất tiếp xúc | 1–2 lần/ngày | Mỗi lần mở khoá máy (~50–100 lần/ngày) |

**Khuyến nghị: widget là P0 cho Teemi, không phải P2.** Widget đề xuất: **thanh máu boss + số người đã nộp proof hôm nay** (`Boss: ███░░ 62% · 3/5 đã nộp · mày chưa`). Đây vừa là hiển thị trạng thái, vừa là social pressure, vừa là CTA — và không tốn một lượt opt-in nào. **[INFERENCE — mạnh, dựa trên bằng chứng Locket + Yope]**

---

## 5. NOVELTY DECAY — app viral tụt DAU sau bao lâu

### 5.1. Các case cụ thể theo mốc thời gian

| App | Đỉnh | Sau đỉnh | Mức giảm | Thời gian |
|---|---|---|---|---|
| **BeReal** | 20M DAU (10/2022); 73,5M MAU (08/2022) | 10,4M DAU (02/2023) | **−48%** | **4 tháng** |
| **BeReal** | | 6M DAU (03/2023) | **−70%** | **5 tháng** |
| **BeReal** | Downloads 31,5M (2023) | 12,7M (2024) | **−60% YoY** | 12 tháng |
| **BeReal** | | ~2,93M DAU (2025/26) | **−85%** so đỉnh | ~3 năm |
| **Gas** | 3,1M downloads/tháng (11/2022); đỉnh ngày 124.558 (10/11/2022) | ~2.900 downloads | **−98%** | **~8 tháng** → đóng cửa 07/11/2023 |
| **Clubhouse** | ~10M downloads/tháng (02/2021); 8,7M (06/2021) | 332K (06/2022) | **−95%** | **12 tháng** |
| **Poparazzi** | Top App Store (05/2021) | Hạng 41 category Photo/Video | — | đóng cửa 05/2023, **~24 tháng** |

Nguồn: [Charle Agency](https://www.charleagency.com/articles/bereal-statistics/), [42matters](https://42matters.com/blog/?p=gas-downloads-down-98-following-discord-acquisition), [TechCrunch/Gas](https://techcrunch.com/2023/10/19/discord-kills-gas-anonymous-compliments-app-bought-nine-months-ago), [Appfigures/Clubhouse](https://appfigures.com/resources/insights/20220701/amp?f=4), [TechCrunch/Poparazzi](https://techcrunch.com/2023/05/01/once-hot-photo-sharing-social-app-poparazzi-is-shutting-down/) **[FACT]**

> **Quy luật rút ra:** một social app viral thuần novelty có "half-life" khoảng **4–6 tháng** kể từ đỉnh. Nếu Teemi viral ở VN, hãy giả định **có 6 tháng** để chuyển từ novelty sang habit. **[INFERENCE]**

### 5.2. Cái gì phân biệt app SỐNG với app CHẾT?

| Yếu tố | App chết (Gas, Poparazzi, Clubhouse) | App sống (Discord, Strava, Locket) |
|---|---|---|
| **Dữ liệu tích luỹ** | Không có gì để mất khi rời đi | Discord: lịch sử server nhiều năm. Strava: toàn bộ lịch sử tập luyện. **Rời đi = mất tài sản.** |
| **Lý do quay lại ngoài novelty** | Chỉ có "cái mới" | Discord: bạn bè đang ở đó. Strava: kết quả tập luyện thật. |
| **Nhóm có sẵn hay nhóm mới** | Bắt tạo network mới từ đầu | Discord chiếm nhóm gaming đã tồn tại |
| **Solo value** | Poparazzi = 0 | Strava chạy một mình vẫn có giá trị đầy đủ |
| **Chiều sâu tương tác** | 1 hành động, không có gì thêm | Nhiều loại tương tác, nhiều nhịp |
| **Utility thật vs trò vui** | Trò vui thuần | Có utility đo lường được |

**Bằng chứng định lượng phía "sống":**

**Strava:**
- Ra mắt tính năng **Challenges** (2022) → retention 90 ngày tăng từ **18% lên 32%** (+78% tương đối), DAU **+28%**, premium subscription **+15%**
- **Social context kéo dài streak trung bình thêm 34%**
- Người log group activity có xác suất còn active sau **12 tháng** cao hơn người tập solo
- ~1 triệu clubs; 14 tỷ kudos năm 2025 (+20% YoY); ~55% Gen Z gia nhập club vì **cảm giác thuộc về**
Nguồn: [Trophy.so — Strava Gamification Case Study](https://trophy.so/blog/strava-gamification-case-study), [StriveCloud](https://www.strivecloud.io/blog/app-engagement-strava), [SQ Magazine](https://sqmagazine.co.uk/strava-statistics/) **[FACT]**

**Duolingo:**
- User có **shared streak với người khác** → khả năng hoàn thành bài học hằng ngày **cao hơn 22%**
- User có **add friend** → khả năng hoàn thành khoá học **cao hơn 5,6 lần**
- **Leagues** (leaderboard reset hằng tuần, 30 người ngẫu nhiên) → lesson completion **+25%**; đóng góp vào mức tăng daily usage **+65% YoY**
Nguồn: [Duolingo Blog — Friend Streak](https://blog.duolingo.com/friend-streak/), [Trophy.so — Duolingo Case Study](https://trophy.so/blog/duolingo-gamification-case-study), [Deconstructor of Fun — Duolingo Leagues](https://duolingo.deconstructoroffun.com/mechanics/leagues) **[FACT]**

> **Đây là bằng chứng mạnh nhất ủng hộ luận điểm cốt lõi của Teemi**: "5,6x nếu có bạn" và "+22% nếu có shared streak" chứng minh rằng **lớp xã hội là đòn bẩy retention lớn nhất trong habit product** — lớn hơn bất kỳ tối ưu UX nào. Teemi đặt lớp xã hội làm mặc định thay vì tính năng phụ. Về mặt chiến lược, đây là hướng đúng.

**Định vị Teemi trên trục sống/chết:**

| Yếu tố | Teemi có? | Ghi chú |
|---|---|---|
| Dữ liệu tích luỹ | ✅ **Timeline + Memory Capsule** | Đây là **moat quan trọng nhất** của Teemi. Ưu tiên cao. |
| Lý do quay lại ngoài novelty | ✅ Kèo cá nhân có giá trị thật | |
| Nhóm có sẵn | ⚠️ Cần thiết kế | Phải "chiếm" group Zalo/Messenger, không tạo network mới |
| Solo value | ⚠️ Đang yếu | Cần thiết kế rõ như mục 2.3(c) |
| Chiều sâu tương tác | ✅ proof + reaction + boss + recap | |
| Utility thật | ✅ Habit thật | |

**Kết luận:** Teemi có cấu trúc gần Strava/Discord hơn Gas/Poparazzi — **miễn là Memory/Timeline được build sớm chứ không để phase 2**. Nếu Timeline bị đẩy sang sau, Teemi sẽ chỉ là "boss game vui" và rơi vào nhóm chết. **[INFERENCE — mạnh]**

---

## 6. VÒNG ĐỜI NHÓM & CHIẾN LƯỢC "SEASON"

### 6.1. Nhóm sống được bao lâu?

**Dữ liệu tốt nhất tìm được:**
- **~40% nhóm messaging ngừng tương tác trong 1 tuần; ~30% sống ≥30 ngày.** (WeChat, WWW 2016) — [arXiv:1512.07831](https://arxiv.org/abs/1512.07831) **[FACT]**
- Nhóm sống lâu và nhóm chết sớm là **hai lớp khác biệt về bản chất**, phân biệt được bằng đặc trưng nhóm ngay từ sớm — nghĩa là **có thể dự báo nhóm nào sẽ chết trong vài ngày đầu**. **[FACT]**
- **Dunbar**: nếu không gặp mặt trực tiếp trong 6 tháng, quan hệ tụt xuống một "lớp" thân thiết. Giao tiếp text có hiệu ứng gắn kết gần tương đương **không liên lạc gì**. — [TIME, Whatsapp group chats & friendship](https://time.com/7304848/whatsapp-group-chats-friendship-loneliness/) **[FACT]**
- Nghiên cứu về media use trong nhóm bạn (2025): thời lượng tình bạn trung bình trong mẫu là **15 năm**; nhóm bạn phân tán địa lý **cần media để duy trì**. — [Lehmann & Utz, New Media & Society 2025](https://journals.sagepub.com/doi/10.1177/14614448251351282) **[FACT]**

> **KHÔNG TÌM ĐƯỢC SỐ LIỆU** cho câu hỏi cụ thể "nhóm bạn dùng chung một app bao lâu thì tan". Chưa có nghiên cứu công khai về vòng đời nhóm trong social challenge app.

**[INFERENCE]** Ước lượng làm việc cho Teemi: vòng đời nhóm hoạt động ~**4–12 tuần** trước khi cần một "sự kiện làm mới". Cơ sở: (a) 30% nhóm WeChat vượt mốc 30 ngày; (b) chu kỳ novelty decay 4–6 tháng của social app; (c) Duolingo/Strava đều chọn nhịp reset tuần–tháng.

**Hàm ý sản phẩm rất cụ thể:** Dunbar chỉ ra text không thay thế được gặp mặt. Điều này biến **"diệt boss xong đi ăn lẩu"** (đã có trong doc chiến lược) từ một câu đùa thành **cơ chế retention cốt lõi**: nhóm nào gặp nhau ngoài đời sẽ tồn tại lâu hơn nhóm chỉ chat. Teemi nên **chủ động ép sự kiện IRL** vào cuối mỗi season, không để nó là ngẫu nhiên.

### 6.2. Season reset — ai đã làm, kết quả gì?

| Sản phẩm | Cơ chế | Kết quả |
|---|---|---|
| **Duolingo Leagues** | 30 người ngẫu nhiên, **reset mỗi Chủ nhật**, lên/xuống hạng | **+25% lesson completion**; góp phần **+65% YoY daily usage**. Nỗi sợ **tụt hạng** thúc đẩy mạnh hơn hy vọng lên hạng. |
| **Strava Challenges** | Thử thách có thời hạn, lặp lại theo tháng | **Retention 90 ngày: 18% → 32%**; DAU +28% |
| **Fortnite / battle pass** | Season 8–10 tuần, reset progression, cốt truyện mới | Mô hình chuẩn ngành game live-service **[INFERENCE — không tìm được số liệu retention công khai riêng cho cơ chế season]** |

Nguồn: [Deconstructor of Fun](https://duolingo.deconstructoroffun.com/mechanics/leagues), [StriveCloud — Duolingo](https://www.strivecloud.io/blog/gamification-examples-boost-user-retention-duolingo), [Trophy.so — Strava](https://trophy.so/blog/strava-gamification-case-study) **[FACT cho 2 dòng đầu]**

**Vì sao season hiệu quả — 3 cơ chế:**
1. **Xoá nợ tâm lý.** Streak đứt = mất động lực vĩnh viễn (đúng như doc chiến lược đã nêu). Season reset cho **một khởi đầu sạch** hợp lệ.
2. **Tạo thời điểm re-engage tự nhiên.** Push "Season mới bắt đầu" không cảm giác spam — nó là tin tức.
3. **Tạo mốc kể chuyện.** Mỗi season kết thúc = một Memory Capsule = một lý do share.

**Thiết kế season đề xuất cho Teemi [INFERENCE]:**
- Độ dài **4 tuần** (khớp ước lượng vòng đời nhóm 4–12 tuần; cho phép 2–3 season trước khi nhóm mệt).
- Mỗi season = **1 boss có tên + tính cách riêng**.
- Kết season: **Memory Capsule tự động** + danh hiệu nhóm (Báo Thủ, Cứu Tinh, Nộp Phút 89) + **card share ra Story**.
- Giữa 2 season có **"tuần nghỉ"** 3–5 ngày: không tính miss, không áp lực, nhưng vẫn xem lại được recap. Đây chính là "Comeback Season" trong doc chiến lược — nên chuẩn hoá thành lịch cố định.
- **Season mới = điểm invite tự nhiên**: "Nhóm mày sắp vào Season 2, rủ thêm đứa nữa không?"

---

## 7. 10 CHIẾN THUẬT CHO TEEMI — xếp theo ROI/độ khó

| # | Chiến thuật | ROI | Độ khó | Khi nào |
|---|---|---|---|---|
| **1** | **Đo cohort theo GROUP, không theo user.** Định nghĩa "group activation = ≥3 người nộp proof trong 48h đầu" và biến nó thành North Star. | ⭐⭐⭐⭐⭐ | 🔧 Thấp | Trước beta |
| **2** | **Seeding theo nhóm, không theo cá nhân.** Beta chỉ nhận đơn có ≥3 người. Founder tự onboard 20–30 nhóm đầu bằng tay. | ⭐⭐⭐⭐⭐ | 🔧 Thấp (tốn công) | Ngay |
| **3** | **Widget "thanh máu boss + X/Y đã nộp".** Không cần opt-in, không có ngưỡng fatigue, hiện diện thường trực. Bằng chứng: Locket, Yope. | ⭐⭐⭐⭐⭐ | 🔧🔧 Trung bình | MVP — P0, không phải P2 |
| **4** | **Link mời có web preview (Partiful model).** Người được mời thấy nhóm + boss + ai đã nộp TRƯỚC khi cài app. Kèm mã nhóm 6 ký tự dự phòng khi Zalo cảnh báo link. | ⭐⭐⭐⭐⭐ | 🔧🔧 Trung bình | MVP |
| **5** | **Trạng thái thành viên: Active / Casual / Spectator / Paused.** Boss chỉ tính trên Active. Giữ headcount nhóm ≥3 mà không tạo áp lực → chống churn dây chuyền. | ⭐⭐⭐⭐ | 🔧🔧 Trung bình | MVP |
| **6** | **Season 4 tuần + Memory Capsule cuối season + tuần nghỉ.** Bằng chứng: Duolingo Leagues +25%, Strava Challenges 18%→32%. | ⭐⭐⭐⭐ | 🔧🔧 Trung bình | MVP hoặc v1.1 |
| **7** | **Ép invite trong onboarding kiểu Locket** (danh bạ → template message sẵn cho Zalo). Không cho skip êm; skip phải là lựa chọn thứ hai rõ ràng. | ⭐⭐⭐⭐ | 🔧 Thấp | MVP |
| **8** | **Push discipline: đúng 2 push hệ thống/ngày, giờ do NHÓM chọn.** Không copy random-time của BeReal. Push từ người thật không giới hạn. | ⭐⭐⭐⭐ | 🔧 Thấp | MVP |
| **9** | **Ép sự kiện IRL cuối season** ("diệt boss xong đi ăn lẩu" → app tạo poll chọn ngày/quán). Dunbar: text không thay thế gặp mặt. | ⭐⭐⭐ | 🔧🔧 Trung bình | v1.1 |
| **10** | **Solo value + "boss yếu khi ít người"** hiển thị rõ để tạo lý do invite nội tại. (Tuỳ chọn: NPC cà khịa 48h đầu — **cần A/B test, rủi ro cringe**.) | ⭐⭐⭐ | 🔧🔧🔧 Cao | v1.1 — trừ phần solo value cơ bản phải có ở MVP |

**Ba việc bị đánh giá thấp mà nên làm sớm:** #1 (analytics theo group), #3 (widget), #5 (trạng thái thành viên). Cả ba đều rẻ, đều không phải "feature hấp dẫn" nên dễ bị đẩy xuống dưới, nhưng đều tác động trực tiếp lên biến sống-chết của app.

---

## 8. RED FLAGS

1. **Nếu Timeline/Memory bị đẩy sang phase 2, Teemi rơi vào nhóm Gas/Poparazzi.** Dữ liệu tích luỹ là moat duy nhất chống novelty decay. Không có nó, app chỉ có ~6 tháng.
2. **Đo retention theo user sẽ che giấu việc nhóm đang chết.** Nếu founder nhìn D7 user 35% và thấy ổn, trong khi 60% nhóm đã tụt dưới 3 người active — quyết định sản phẩm sẽ sai hoàn toàn.
3. **K-factor gần chắc chắn < 1.** Không có kế hoạch acquisition ngoài invite loop = không tăng trưởng.
4. **Zalo có thể cảnh báo/chặn domain lạ** — nếu kênh invite chính bị chặn ở VN mà không có phương án dự phòng, growth về 0 chỉ sau một đêm.
5. **Android chiếm ưu thế ở VN nhưng retention Android thấp hơn iOS có hệ thống** (D30 3,8% vs 5,3%) và opt-in push Android vừa rơi từ 85% xuống 67%. Benchmark tham chiếu của app Mỹ (iOS-heavy) sẽ khiến Teemi tự đánh giá quá lạc quan.
6. **Boss chung có thể phản tác dụng.** Nếu một người miss làm boss hồi máu, người đó chịu áp lực từ cả nhóm. Với 4 người còn lại đây là gia vị; với người miss đây có thể là lý do gỡ app — và mất 1 người có thể kéo nhóm xuống dưới 3. Cần cơ chế giảm sốc (Life Happens / Spectator) ngay từ MVP, không để sau. **[INFERENCE]**

---

## 9. NGUỒN

- [UXCam — Mobile App Retention Benchmarks by Category (2026)](https://uxcam.com/blog/mobile-app-retention-benchmarks/)
- [Business of Apps — App Retention Rates (2026)](https://www.businessofapps.com/data/app-retention-rates/)
- [Business of Apps — Push Notifications Statistics (2026)](https://www.businessofapps.com/marketplace/push-notifications/research/push-notifications-statistics/)
- [Sendbird — App retention benchmarks by industry](https://sendbird.com/blog/app-retention-benchmarks-broken-down-by-industry)
- [Pushwoosh — Push notification benchmarks 2025](https://www.pushwoosh.com/blog/push-notification-benchmarks/)
- [Airship — 2025 Push Notification Benchmarks (PDF)](https://growth.airship.com/rs/313-QPJ-195/images/Airship-2025-Push-Notification-Benchmarks-EN.pdf?version=0)
- [Charle Agency — 40+ BeReal Statistics for 2026](https://www.charleagency.com/articles/bereal-statistics/)
- [TechCrunch — Discord kills Gas (19/10/2023)](https://techcrunch.com/2023/10/19/discord-kills-gas-anonymous-compliments-app-bought-nine-months-ago)
- [42matters — Gas downloads down 98%](https://42matters.com/blog/?p=gas-downloads-down-98-following-discord-acquisition)
- [TechCrunch — Poparazzi shutting down (01/05/2023)](https://techcrunch.com/2023/05/01/once-hot-photo-sharing-social-app-poparazzi-is-shutting-down/)
- [Appfigures — Clubhouse slowest month since peak](https://appfigures.com/resources/insights/20220701/amp?f=4)
- [TechCrunch — Yope, Instagram-like app for private groups (24/02/2025)](https://techcrunch.com/2025/02/24/yope-is-sparking-genz-and-vc-interest-with-an-instagram-like-app-for-private-groups)
- [TechCrunch — Locket celebrity feature (06/08/2025)](https://techcrunch.com/2025/08/06/photo-sharing-app-locket-is-banking-on-a-new-celebrity-focused-feature-to-fuel-its-growth)
- [Locket Help Center — friend limit](https://help.locket.com/en/articles/7915024-how-many-friends-can-i-have-on-locket)
- [Neoads — The Widget Effect](https://neoads.substack.com/p/the-widget-effect)
- [FindMeCreators — Locket TikTok nano-influencer strategy](https://www.findmecreators.com/growth/locket-app-tiktok-strategy)
- [CNBC — Partiful, Gen Z party-planning staple (19/04/2025)](https://www.cnbc.com/2025/04/19/meet-partiful-the-gen-z-party-planning-staple-thats-taking-on-apple.html)
- [Sacra — Partiful](https://sacra.com/c/partiful/)
- [Qiu et al. — The Lifecycle and Cascade of WeChat Social Messaging Groups (WWW 2016)](https://arxiv.org/abs/1512.07831) · [PDF](https://archives.iw3c2.org/www2016/WWW2016-Proceedings/proceedings/p311.pdf)
- [Lehmann & Utz — Media use in groups of friends (New Media & Society, 2025)](https://journals.sagepub.com/doi/10.1177/14614448251351282)
- [TIME — When the Group Chat Replaces the Group](https://time.com/7304848/whatsapp-group-chats-friendship-loneliness/)
- [Duolingo Blog — Friend Streak](https://blog.duolingo.com/friend-streak/) · [5 product lessons from Friend Streak](https://blog.duolingo.com/product-lessons-friend-streak/)
- [Trophy.so — Duolingo Gamification Case Study](https://trophy.so/blog/duolingo-gamification-case-study) · [Strava Gamification Case Study](https://trophy.so/blog/strava-gamification-case-study)
- [Deconstructor of Fun — Duolingo Leagues](https://duolingo.deconstructoroffun.com/mechanics/leagues)
- [StriveCloud — Strava app engagement](https://www.strivecloud.io/blog/app-engagement-strava)
- [DataReportal — Digital 2026: Vietnam](https://datareportal.com/reports/digital-2026-vietnam)
- [vietnam.vn — 79,6 triệu người dùng Zalo hằng tháng](https://www.vietnam.vn/en/79-6-trieu-nguoi-dung-zalo-thuong-xuyen-hang-thang)
- [Zalo Help — Xử lý cảnh báo link lừa đảo trên Zalo](https://help.zalo.me/huong-dan/chuyen-muc/bao-mat-va-rieng-tu/xu-ly-canh-bao-link-lua-dao-tren-zalo/)
- [Statista — Vietnam mobile OS market share 2025](https://www.statista.com/statistics/928956/vietnam-mobile-os-share/)
- [Branch.io — K-factor](https://www.branch.io/glossary/k-factor/) · [First Round Review — K-factor](https://review.firstround.com/glossary/k-factor-virality/)
- [Mixpanel — Magic numbers are an illusion](https://mixpanel.com/blog/magic-numbers-are-an-illusion/) (caveat về "7 friends in 10 days")
