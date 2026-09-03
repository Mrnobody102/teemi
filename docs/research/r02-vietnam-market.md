# R02 — THỊ TRƯỜNG & HÀNH VI NGƯỜI DÙNG VIỆT NAM
_Research cho Teemi — social challenge app private-first cho nhóm bạn thân_

> Ngày nghiên cứu: **2026-08-28**
> Người dùng mục tiêu: Gen Z Việt Nam 16–28 tuổi
> Quy ước độ tin cậy: **[FACT]** = có nguồn số liệu · **[INFERENCE]** = suy luận từ dữ liệu có nguồn · **[GUESS]** = đoán, chưa có dữ liệu xác nhận

---

## 0. TL;DR cho founder

| Câu hỏi | Trả lời ngắn |
|---|---|
| Thị trường có đủ lớn không? | Có. ~15–18 triệu người 16–28, gần như 100% dùng smartphone, 7.2h/ngày trên app. **[INFERENCE]** |
| Người Việt có trả tiền app không? | Có nhưng ít và rẻ. Chỉ ~7–10% user game trả tiền trực tiếp; mức chi giải trí số 100k–500k VND/tháng cho **toàn bộ** subscription. **[FACT]** |
| Thanh toán có phải rào cản không? | **Không nữa.** MoMo/ZaloPay/ShopeePay/VNPAY đã là payment method chính thức trên cả App Store và Google Play. **[FACT]** — đây là thay đổi lớn nhất so với 3–4 năm trước |
| Rủi ro pháp lý? | **Nghiêm trọng và bị đánh giá thấp.** Nghị định 147/2024 buộc app dạng MXH có >1.000 người dùng thường xuyên/tháng phải xin **giấy phép MXH** và **xác thực SĐT** người dùng. **[FACT]** |
| Rủi ro cạnh tranh lớn nhất? | Không phải app khác — mà là **nhóm chat Zalo/Messenger đang miễn phí và đã ở đó rồi**. |
| CPI ước tính? | ~6.000–50.000 VND/install (~$0.25–2.0) tùy chất lượng creative. **[INFERENCE]** |

---

## 1. QUY MÔ THỊ TRƯỜNG

### 1.1. Dân số & nhân khẩu

| Chỉ số | Số liệu | Nguồn | Độ tin cậy |
|---|---|---|---|
| Dân số VN 2025 (trung bình) | **102,3 triệu** | [Tổng cục Thống kê / Nhân Dân](https://nhandan.vn/dan-so-trung-binh-cua-viet-nam-nam-2025-dat-1023-trieu-nguoi-post934760.html) | FACT |
| Tuổi trung vị | **33,4 tuổi** | [DataReportal Digital 2026 Vietnam](https://datareportal.com/reports/digital-2026-vietnam) | FACT |
| Nhóm 0–14 tuổi | 22,8% dân số | [GSO 2025](https://www.nso.gov.vn/tin-tuc-thong-ke/2026/01/thong-cao-bao-chi-ve-tinh-hinh-dan-so-lao-dong-viec-lam-quy-iv-va-nam-2025/) | FACT |
| Nhóm 15–59 tuổi | 62,7% dân số | GSO 2025 (link trên) | FACT |
| Gen Z VN 2025 | **~14,7 triệu**, ~30% tổng người tiêu dùng (Nielsen) | [Tuổi Trẻ](https://tuoitre.vn/chinh-phuc-the-he-tieu-dung-tre-gen-z-kho-lam-day-20250405021133301.htm) | FACT |
| **Nhóm 16–28 tuổi (target Teemi)** | **~15–18 triệu** | Suy ra từ tháp dân số VN (nhóm 15–29 ≈ 20–21% dân số) | **INFERENCE** |

> **Ghi chú:** con số Nielsen 14,7 triệu dùng định nghĩa Gen Z hẹp hơn (sinh 1997–2012, tính người trưởng thành). Dải 16–28 của Teemi trải qua cả cuối Gen Y nên rộng hơn. Dùng **16 triệu** làm con số làm việc.

### 1.2. Hạ tầng số — rất thuận lợi

| Chỉ số | 2025 (T1) | 2026 (dữ liệu T10/2025) | Nguồn |
|---|---|---|---|
| Người dùng Internet | 79,8 tr (78,8%) | **85,6 tr (84,2%)** | [DataReportal 2025](https://datareportal.com/reports/digital-2025-vietnam) / [2026](https://datareportal.com/reports/digital-2026-vietnam) |
| User mạng xã hội | 76,2 tr (75,2%) | **79,0 tr (77,6%)** | như trên |
| Kết nối di động | 127 tr (126%) | **137 tr (134%)** | như trên |
| Tốc độ mobile internet (median download) | 75,72 Mbps | **152,17 Mbps** | như trên |
| % kết nối là băng rộng 3G/4G/5G | **100%** | — | DataReportal 2025 |

**[FACT]** Tốc độ mobile internet VN **tăng gấp đôi trong 1 năm** (75,7 → 152,2 Mbps). Điều này quan trọng với Teemi vì core loop là **upload ảnh/video proof mỗi ngày** — băng thông không còn là rào cản kỹ thuật.

### 1.3. Thời gian dùng app & top app

| Chỉ số | Số liệu | Nguồn |
|---|---|---|
| Thời gian dùng app/ngày (2025) | **7,3 giờ** | [Q&Me](https://qandme.net/en/report/viet-nam-mobile-app-popularity-2025.html) |
| Thời gian dùng app/ngày (2026) | **7,2 giờ** (≤26 tuổi: **7,4h**, nữ: 7,3h) | [Q&Me Mobile App Popularity 2026](https://cdn.qandme.net/1773712237_Vietnam_mobile_app_popularity_2026_-_13032026.pdf) |
| Số app dùng/tuần | **~27,3 app** | Q&Me 2026 |

**Top app theo tỉ lệ dùng hàng tuần (Q&Me, T3/2026)** **[FACT]**

| # | App | % dùng hàng tuần |
|---|---|---|
| 1 | **Zalo** | **98%** |
| 2 | Facebook | 91% |
| 2 | App ngân hàng (nhóm) | 91% |
| 4 | Messenger | 88% |
| 5 | TikTok | 82% |
| 6 | YouTube | 71% |

Nguồn: [Q&Me qua Báo Nghệ An](https://baonghean.vn/en/zalo-thong-tri-thi-truong-ung-dung-di-dong-viet-nam-nam-2026-voi-ty-le-su-dung-cham-muc-98-10329834.html)

**Số user tuyệt đối (DataReportal Digital 2026, dữ liệu T10/2025)** **[FACT]**

| Nền tảng | Users | % dân số |
|---|---|---|
| Facebook | 79,0 tr | 77,6% |
| **Zalo** | **78,3 tr** | **77,0%** |
| TikTok (18+) | 76,1 tr | 102,9% của 18+ (số ad-reach, thổi phồng) |
| YouTube | 62,1 tr | 61,0% |
| Messenger | 57,8 tr | 56,8% |
| Instagram | 11,7 tr | 11,4% |

Zalo tự công bố **79,6 triệu MAU cuối T12/2025** và **>2,1 tỷ tin nhắn/ngày** ([vietnam.vn](https://www.vietnam.vn/en/79-6-trieu-nguoi-dung-zalo-thuong-xuyen-hang-thang)). **[FACT]**

> **Ý nghĩa với Teemi:** Instagram gần như KHÔNG tồn tại ở VN (11,4%). Mọi giả định thiết kế kiểu "share lên IG Story" là sai thị trường. Kênh share thực tế là **Zalo group, Messenger group, Facebook Story/Post, TikTok**.

### 1.4. iOS vs Android — quyết định tech & monetization

| Chỉ số | Số liệu | Nguồn |
|---|---|---|
| **Android VN (T7/2026)** | **60,38%** | [StatCounter](https://gs.statcounter.com/os-market-share/mobile/viet-nam) |
| **iOS VN (T7/2026)** | **39,60%** | như trên |

**[FACT + INFERENCE]** Tỉ lệ iOS ~40% ở VN **cao bất thường** so với các thị trường thu nhập tương đương ở SEA (Indonesia/Philippines iOS thường <15%). Nguyên nhân: iPhone là status symbol mạnh với Gen Z thành thị VN, cộng thị trường iPhone cũ/xách tay rất lớn.

**Hệ quả hành động:**
1. **Phải làm cả 2 platform ngay từ MVP** — bỏ iOS là bỏ ~40% thiết bị và ~70–80% doanh thu tiềm năng **[INFERENCE]**.
2. Chọn **cross-platform (Flutter / React Native / Expo)** thay vì native đôi — với team indie, đây gần như là bắt buộc.
3. **Doanh thu sẽ đến chủ yếu từ iOS**, nhưng **volume/viral sẽ đến từ Android**. Đo lường 2 funnel riêng.
4. Q&Me đo screentime bằng mẫu 100 iPhone user — nghĩa là data screentime VN có bias về iOS. Đừng dùng nó làm chuẩn cho Android user.

---

## 2. HÀNH VI NHÓM — nền tảng văn hoá của Teemi

### 2.1. Nhóm chat là "hạ tầng xã hội" của người Việt

| Chỉ số | Số liệu | Nguồn |
|---|---|---|
| Dùng Zalo để liên lạc với bạn bè/gia đình | **81%** | [Decision Lab Connected Consumer](https://www.decisionlab.co/blog/vietnams-digital-dynamics-q4-2025) |
| Dùng Facebook để liên lạc | 65% | như trên |
| Dùng TikTok để liên lạc | 21% | như trên |
| Dùng Instagram để liên lạc | 12% | như trên |
| **Nền tảng nhắn tin ưa thích nhất Q4/2025** | **Zalo 56%** · Facebook 23% · Messenger 15% | như trên |
| Tin nhắn Zalo/ngày | **>2,1 tỷ** | [vietnam.vn](https://www.vietnam.vn/en/79-6-trieu-nguoi-dung-zalo-thuong-xuyen-hang-thang) |

**Điểm quan trọng nhất từ Decision Lab Q4/2025 [FACT]:** với **Gen Z**, Facebook đang **mất sức hút**, còn **Zalo đã vượt YouTube để vào top 3 app không thể thiếu** — vì Gen Z bước vào thị trường lao động và cần Zalo cho nhu cầu liên lạc "thực dụng".

> **Ý nghĩa với Teemi:** kênh onboarding/invite **BẮT BUỘC phải tối ưu cho Zalo trước, Messenger sau**. Deep link, invite link, share card phải render đẹp trong Zalo chat. Nếu chỉ làm invite qua Messenger/IG là mất phần lớn thị trường.

### 2.2. Văn hoá "cà khịa", meme, screenshot

Không tìm được khảo sát định lượng chuẩn về tỉ lệ cà khịa/gửi meme trong nhóm chat VN — **KHÔNG TÌM ĐƯỢC SỐ LIỆU**. Nhưng có bằng chứng định tính có nguồn:

**[FACT — định tính]** Nghiên cứu về meme và Gen Z VN ghi nhận các kỹ thuật biểu đạt đặc trưng: *tạo meme từ văn hoá đại chúng, phóng đại tình huống đời thường, dùng tiếng lóng và lối nói mỉa, trộn tiếng Anh vào tiếng Việt, **dùng ảnh chụp màn hình tin nhắn**, và tạo plot twist bất ngờ* — [Nghề nghiệp và Cuộc sống](https://nghenghiepcuocsong.vn/lieu-meme-co-bat-mi-duoc-gen-z-dang-nghi-gi-ve-khuon-mau-gioi/).

**[FACT — định tính]** Hành vi "cà khịa ngược lại người gửi" trong group chat được mô tả là một dạng nhân vật quen thuộc trong mọi group chat VN — [Kenh14, 11/2025](https://kenh14.vn/10-kieu-nguoi-song-loi-group-chat-nao-cung-gap-215251112095653184.chn). Bài viết liệt kê "10 kiểu người sống lỗi group chat nào cũng gặp" — chính là các archetype Teemi có thể biến thành **role/danh hiệu trong app** (Báo Thủ, Người Mất Tích, Nộp Phút 89...).

**[INFERENCE quan trọng]** *"Dùng ảnh chụp màn hình tin nhắn"* được liệt kê là một kỹ thuật biểu đạt CHÍNH của Gen Z VN. Đây là bằng chứng mạnh cho giả thuyết sản phẩm của Teemi: **recap card và proof card sẽ được screenshot rồi paste vào Zalo group** — không cần chờ share intent. Vì vậy:
- Mọi màn hình quan trọng (recap, boss HP, bảng ai chưa nộp) phải **đẹp khi chụp màn hình nguyên trạng**, không chỉ đẹp khi export.
- Không đặt thông tin nhạy cảm/định danh ở rìa màn hình.
- Thiết kế theo tỉ lệ dễ crop, chữ to, contrast cao (xem trong chat Zalo trên màn hình nhỏ).

### 2.3. Tiền lệ: app private-first đã từng viral ở VN

**[FACT]** **Locket Widget** — app chia sẻ ảnh riêng tư giới hạn **20 người bạn**, không feed công khai, không like count — đã trở thành hiện tượng với Gen Z VN từ đầu 2022, lan chủ yếu **nhờ TikTok**, đoạt App Store Awards "Cultural Impact Winner" 2022. Nguồn: [Apple App Store Story](https://apps.apple.com/us/story/id1647059807?l=vi), [24hstore](https://24hstore.vn/huong-dan-ky-thuat/locket-la-gi-n7823).

> **Đây là precedent quan trọng nhất trong toàn bộ report này.** Nó chứng minh 3 điều cho Teemi: (1) Gen Z VN **có** cài app social mới ngoài Zalo/FB nếu nó đủ nhỏ và đủ vui; (2) **giới hạn nhóm nhỏ là feature, không phải bug**; (3) **TikTok là kênh viral chính**, không phải Facebook Ads.
> Nhưng cũng cảnh báo: Locket là **1 hành động duy nhất, 0 giây setup**. Teemi yêu cầu chọn goal + nộp proof + rủ nhóm — độ ma sát onboarding cao hơn nhiều lần.

### 2.4. Threads — kênh mới đang lên

**[FACT]** Threads tăng trưởng mạnh ở VN: penetration đạt 10% vào Q2 (tăng 5 điểm % so với quý trước); Q4/2025 Gen Z +6%, Gen Y +7%. Gen Z chiếm >25% user Threads VN. Nguồn: [Decision Lab qua Brands Vietnam](https://www.brandsvietnam.com/congdong/topic/343044-decision-lab-dinh-hinh-lai-xu-huong-tieu-dung-mang-xa-hoi-tai-viet-nam), [VnExpress — đại diện Meta](https://vnexpress.net/dai-dien-meta-threads-tang-truong-rat-tot-tai-viet-nam-5010759.html).

---

## 3. CHI TRẢ — người Việt trả tiền app thế nào

### 3.1. Mức chi & tỉ lệ trả tiền

| Chỉ số | Số liệu | Nguồn | Tin cậy |
|---|---|---|---|
| % user sẵn sàng trả cho gói premium giải trí số (nếu nội dung cá nhân hoá) | **~50%** | [Appota "Nhu cầu Giải trí số 2024–2025" qua VJST](https://vjst.vn/50-nguoi-viet-san-sang-chi-tien-cho-dich-vu-giai-tri-so-69929.html) | FACT (self-reported → thổi phồng) |
| Mức chi thực tế cho giải trí số | **100.000 – 500.000 VND/tháng** (tổng mọi dịch vụ) | Appota, link trên | FACT |
| % user game VN thực sự trả tiền (IAP) | **chỉ 7–10%**; ~2% "whale" tạo phần lớn doanh thu | [Antom / Vietnam Gaming & Payment Trends](https://knowledge.antom.com/vietnam-gaming-payment-trends-report-unlocking-growth-in-a-young-dynamic-mobile-first-gaming-market) | FACT |
| % user đã chuyển sang thanh toán số (bỏ tiền mặt/COD) | **80%** (2024) | Appota, link trên | FACT |
| Gen Z dùng 5–7h/ngày, ưu tiên mobile game + short video | — | Appota, link trên | FACT |

> **Đọc kỹ khoảng cách này:** 50% *nói* sẵn sàng trả, nhưng chỉ 7–10% *thực sự* trả trong game. **Đừng lấy 50% làm giả định model tài chính.** Giả định thực tế cho Teemi: **conversion free→paid 1–3%** ở VN **[INFERENCE]**.

### 3.2. Bảng giá tham chiếu — "neo giá" trong đầu Gen Z VN

| Dịch vụ | Giá VN | Nguồn |
|---|---|---|
| **Spotify Premium Individual** | **65.000 VND/tháng** (tăng 10,2% từ 59.000) | [VietnamNet](https://vietnamnet.vn/en/spotify-raises-premium-price-by-10-2-in-vietnam-2443684.html) |
| **Netflix Mobile** | **74.000 VND/tháng** | [Home Credit / FPT Shop](https://www.homecredit.vn/blog/gia-cac-goi-tai-khoan-netflix-101) |
| Netflix Basic | 114.000 VND/tháng | như trên |
| Netflix Standard | 231.000 VND/tháng | như trên |
| Netflix Premium | 273.000 VND/tháng | như trên |
| **YouTube Premium** | **79.000 VND/tháng** (ra mắt VN 4/2023) | [Vietnam Insiders](https://vietnaminsiders.com/youtube-premium-officially-appears-in-vietnam-priced-at-79000-vnd-month/) |
| Duolingo Super | ~300.000 VND/tháng (giá niêm yết); **thị trường xám bán 248.000 VND/NĂM** | [Woku Shop](https://wokushop.com/san-pham/tai-khoan-duolingo-super/) — GUESS về giá chính thức, FACT về giá chợ |

**[FACT quan trọng & nguy hiểm]** Tồn tại **thị trường xám tài khoản chia sẻ** rất lớn ở VN — hàng loạt shop bán "YouTube Premium, Spotify Premium, Netflix 4K, ChatGPT Plus, CapCut Pro, Office 365" giá rẻ, và cả các thread "mua chung tài khoản premium" trên [VOZ](https://voz.vn/t/mua-chung-tai-khoan-premium-youtube-premium-spotify-premium-netflix-4k-chatgpt-plus-capcut-pro-google-one-adobe-udemy-office-365.1172161/). Đây là hành vi mặc định của Gen Z VN với mọi subscription.

**Khuyến nghị pricing cho Teemi [INFERENCE]:**

| Gói | Giá đề xuất | Lý do |
|---|---|---|
| Teemi Premium (cá nhân) | **29.000 – 49.000 VND/tháng** | Phải nằm **dưới** Spotify (65k) rõ rệt — Teemi không có giá trị "utility" bằng nhạc/phim |
| Teemi Group Pass (cả nhóm 5 người) | **99.000 – 149.000 VND/tháng**, chia 20–30k/người | **Đây mới là gói đúng.** Tận dụng chính hành vi "mua chung tài khoản" thay vì chống lại nó. Một người trong nhóm trả, cả nhóm hưởng → conversion cao hơn nhiều |
| Cosmetic một lần (boss skin, theme, roast pack) | **15.000 – 39.000 VND** | Khớp hành vi micro-payment: Appota ghi nhận donate/super chat/quà ảo đang phổ biến với Gen Z |
| Season Pass | 79.000 – 99.000 VND/season (~3 tháng) | Neo dưới Netflix Basic |

> **Chiến lược quan trọng:** vì Teemi vốn dĩ là **app nhóm**, hãy bán **gói nhóm** ngay từ đầu. Việt Nam có văn hoá "gom tiền mua chung" cực mạnh — hãy biến nó thành kênh doanh thu chính thay vì để nó ăn mòn doanh thu.

### 3.3. Thanh toán & IAP — tin tốt lớn nhất của report này

**[FACT] Apple App Store tại Việt Nam chấp nhận:** Apple Account balance (thẻ App Store), **MoMo, ShopeePay, VNPAY, Zalopay**, và hầu hết thẻ tín dụng/ghi nợ. Nguồn: [Apple Support HT111741](https://support.apple.com/en-us/111741) · hướng dẫn tiếng Việt: [Thế Giới Di Động](https://www.thegioididong.com/game-app/cach-thanh-toan-app-store-bang-vi-dien-tu-momo-khong-can-the-1274413) · [MoMo](https://www.momo.vn/dich-vu-lien-ket)

**[FACT] Google Play tại Việt Nam chấp nhận:**
- Thẻ: **Visa, Mastercard, JCB, Napas** (Napas = thẻ nội địa!)
- Ví: **MoMo, ShopeePay, ZaloPay, VTC Pay**
- **Carrier billing: MobiFone, VinaPhone**
- Google Play balance / gift card
- Nguồn: [Google Play Help — Vietnam](https://support.google.com/googleplay/answer/2651410?hl=en&co=GENIE.CountryCode%3DVN)

**Hệ quả hành động:**
1. **Dùng IAP chuẩn của Apple/Google, KHÔNG cần tự tích hợp cổng thanh toán ở MVP.** Rào cản "Gen Z VN không có thẻ tín dụng" đã bị xoá bởi MoMo/ZaloPay/Napas/carrier billing.
2. Đổi lại phải chịu **hoa hồng 15–30%**. Với gói 49.000 VND/tháng, thực nhận ~34.300–41.650 VND. Đưa con số này vào model ngay.
3. Đăng ký **Apple Small Business Program** (doanh thu <$1M/năm → 15% thay vì 30%) — bắt buộc với indie.
4. Trong onboarding thanh toán, **hiển thị logo MoMo/ZaloPay** để user biết là trả được — nhiều user VN vẫn tưởng phải có thẻ Visa.
5. Bán web-based subscription (MoMo/VNPay trực tiếp, không mất 15–30%) chỉ nên làm ở **phase sau** — vướng cả policy của Apple lẫn chi phí vận hành.

**Quy mô thị trường app VN để tham chiếu [FACT]:** VN đứng **thứ 2 Đông Nam Á về lượt tải app**; Q1/2025 có **329 triệu lượt tải game** ([Sensor Tower SEA 2025](https://sensortower.com/blog/southeast-asia-mobile-gaming-2025)). Nhưng doanh thu thì Thái Lan ($162tr), Indonesia ($118tr), Malaysia ($103tr) dẫn đầu — **VN tải nhiều, trả ít**. Đây là đặc tính cấu trúc của thị trường.

---

## 4. KÊNH PHÂN PHỐI & CHI PHÍ ACQUISITION

### 4.1. Xếp hạng kênh cho Teemi

| # | Kênh | Vì sao | Chi phí |
|---|---|---|---|
| 1 | **TikTok organic (content tự làm)** | 82% Gen Z VN dùng hàng tuần; Locket viral chính nhờ TikTok VN | ~0đ + thời gian |
| 2 | **Zalo/Messenger group invite (viral loop trong sản phẩm)** | 81% dùng Zalo liên lạc bạn bè; Teemi vốn là app nhóm → k-factor tự nhiên | 0đ |
| 3 | **Micro-KOC TikTok (self-improvement, study-with-me, gym, "Ngày của tôi")** | Rẻ nhất trên mỗi lượt reach ở VN | 612k – 3,06tr VND/video |
| 4 | **Threads** | Đang tăng nhanh, Gen Z >25% user, text-based hợp kể chuyện nhóm | 0đ |
| 5 | **Facebook Group** (nhóm học tập, gym, "cai" gì đó, sinh viên trường X) | Vẫn 91% weekly usage, nhóm cực nhiều | 0đ |
| 6 | Paid ads (TikTok Ads / Meta Ads) | Chỉ dùng để scale sau khi có retention chứng minh | xem 4.3 |
| — | **Instagram** | **BỎ QUA** — chỉ 11,4% dân số VN | — |

### 4.2. Bảng giá KOL/KOC Việt Nam 2025 (theo tier)

| Tier | TikTok | Facebook | Instagram | YouTube |
|---|---|---|---|---|
| Nano | 122k – 612k VND | 612k – 6,1tr | 245k – 2,45tr | 490k – 4,9tr |
| **Micro** | **612k – 3,06tr VND** | 6,1tr – 30,6tr | 2,45tr – 12,2tr | 4,9tr – 24,5tr |
| Mid-tier | 3,06tr – 30,6tr | 30,6tr – 351tr | 12,2tr – 122tr | 24,5tr – 245tr |
| Macro | 30,6tr – 61,2tr | 351tr – 612tr | 122tr – 245tr | 245tr – 490tr |

Nguồn: [Revu Vietnam — Bảng giá KOL 2025](https://blog.vn.revu.net/thue_kol/) **[FACT]**

> **[INFERENCE]** TikTok rẻ hơn Facebook **~10 lần** ở cùng tier. Với ngân sách 30 triệu VND, có thể book **~10–50 micro-KOC TikTok** thay vì 1 KOC Facebook. Chiến lược đúng cho Teemi: **swarm nhiều micro-KOC TikTok cùng lúc** để tạo cảm giác "trend", thay vì đầu tư 1 người lớn.

### 4.3. CPI ước tính ở Việt Nam

**Dữ liệu nền [FACT]:**
- TikTok Ads VN: **CPM ~25.000–50.000 VND** ($1–2); **CPC 3.000–5.000 VND**; ngân sách tối thiểu 200.000 VND/ngày/ad group — [Ori Agency qua Brands Vietnam](https://www.brandsvietnam.com/congdong/topic/346263-chi-phi-quang-cao-tiktok-bao-nhieu-cach-toi-uu-ngan-sach)
- CPI trung bình toàn cầu: Android **~$1,20**, iOS **~$3,60**; APAC $1,50–3,00 — [Mapendo](https://mapendo.co/blog/cost-per-install-by-country-2025)
- CPI ở SEA thường thấp hơn Mỹ 70–90%

**Ước tính CPI cho Teemi ở VN [INFERENCE — tự tính, không phải số đo]:**

| Kịch bản | CTR | Click→Install | CPI |
|---|---|---|---|
| Creative kém | 0,5% | 8% | **~62.000 VND (~$2,4)** |
| Creative trung bình | 1,0% | 12% | **~21.000–42.000 VND ($0,8–1,6)** |
| Creative tốt (native TikTok, hook mạnh) | 2,5% | 25% | **~4.000–8.000 VND ($0,15–0,3)** |

_Công thức: CPI = CPM ÷ (1000 × CTR × Install-rate)._ **Dải làm việc khuyến nghị: 10.000–30.000 VND/install (~$0,4–1,2), Android rẻ hơn iOS ~2–3 lần.**

**[FACT — cảnh báo]** AppsFlyer ghi nhận **lượt cài app ở VN đã chững lại (plateau)** sau giai đoạn tăng mạnh từ 2018; thị trường giờ cạnh tranh bằng **engagement và platform mix**, không phải volume. Cũng ghi nhận **gian lận quảng cáo (fraud) cao** ở nhóm Finance. Nguồn: [AppsFlyer — State of App Marketing in Vietnam 2025](https://www.appsflyer.com/resources/reports/app-marketing-vietnam/)

> **Khuyến nghị:** với ngân sách indie, **KHÔNG chạy paid ads trước khi có D7 retention > 20%**. Ở VN, CPI rẻ nhưng LTV còn rẻ hơn. Đốt tiền vào paid quá sớm là cách chết nhanh nhất.

---

## 5. THỜI ĐIỂM & MÙA VỤ

### 5.1. Trend đang có lợi cho Teemi (2025–2026)

| Trend | Bằng chứng | Nguồn |
|---|---|---|
| **Bùng nổ chạy bộ** | Từ ~5 giải/năm (10 năm trước) → **gần 50 giải/năm (2025)**; **>500 CLB chạy bộ** toàn quốc; lịch 2026 kín giải | [CafeBiz](https://cafebiz.vn/bung-no-runner-hinh-thanh-thi-truong-ty-do-chay-bo-dang-bien-doi-kinh-te-tieu-dung-ra-sao-176260402183910487.chn) |
| **Tập luyện thành thói quen** | Tần suất tập tạ của người Việt **+26% YoY** | [Thể Hình](https://www.thehinh.com/2026/01/top-xu-huong-tap-luyen.html) |
| Thị trường giày thể thao VN | ~**780 triệu USD (2025), +12% YoY** | CafeBiz, link trên |
| **"Chữa lành" / self-care** | **80% Gen Z muốn tham gia hoạt động chữa lành**; Gen Z chiếm **41%** chi tiêu cho sản phẩm chữa lành | [Pháp Luật TP.HCM](https://plo.vn/80-gen-z-muon-tham-gia-cac-hoat-dong-chua-lanh-post901975.html), [VnEconomy](https://vneconomy.vn/khi-gen-z-chi-tien-de-chua-lanh-cam-xuc.htm) |
| **Ăn uống lành mạnh** | **77% người dùng** hướng tới chế độ ăn lành mạnh | [ThinkDigital](https://thinkdigital.com.vn/blog/sales-strategy/hanh-vi-tieu-dung-gen-z-2026-13954/) |
| **Giảm thời gian online, sống chậm** | Gen Z 2026 chuyển sang tự nấu ăn, **giảm thời gian online**, ưu tiên thời gian cho gia đình | [CafeBiz](https://cafebiz.vn/xu-huong-song-nguoc-doi-cua-gen-z-nam-2026-tuong-ki-la-nhung-lai-la-bi-quyet-song-tho-it-ai-ngo-176260421143046581.chn), [Thanh Niên](https://thanhnien.vn/nam-moi-2026-gen-z-dinh-nghia-thanh-cong-theo-cach-rat-khac-185251231231525311.htm) |

**[INFERENCE] Trend "giảm thời gian online" là con dao hai lưỡi.** Nó ủng hộ định vị Teemi ("app giúp mày sống thật hơn"), nhưng chống lại mô hình engagement kiểu mở app nhiều lần/ngày. Định vị đúng: **Teemi = 2 phút mỗi ngày, không phải app để lướt.** Đây có thể trở thành khác biệt marketing mạnh nhất: *"App duy nhất muốn mày dùng ít."*

**[GUESS]** Không tìm được số liệu định lượng riêng cho trend "cai" (cai trà sữa/cai điện thoại/cai thuốc) hay "study-with-me" ở VN — **KHÔNG TÌM ĐƯỢC SỐ LIỆU**. Nhưng cả hai đều hiện diện rõ trên TikTok VN dưới dạng hashtag/content format. Cần validate bằng cách tự tra TikTok Creative Center theo hashtag trước khi đặt cược marketing vào đó.

### 5.2. Mùa vụ — lịch hành động

| Thời điểm | Điều xảy ra | Việc Teemi nên làm |
|---|---|---|
| **1/1 (Tết dương)** | Cao điểm "New Year resolution" toàn cầu | **Cửa sổ ra mắt/relaunch tốt nhất.** Campaign "Kèo đầu năm" |
| **Tháng trước Tết Âm** | App e-commerce/ví bùng nổ; cài đặt app mua sắm từng tăng **+242%** trước Tết ([AppsFlyer qua VIR](https://vir.com.vn/shopping-app-installs-surge-242-per-cent-during-tet-2019-in-vietnam-69824.html)); chi phí quảng cáo tăng theo | Tránh đấu giá ads giai đoạn này. Đẩy content organic |
| **Trong Tết Âm (~1–2 tuần)** | **NGUY HIỂM NHẤT.** Người Việt về quê, đảo lộn hoàn toàn nhịp sinh hoạt. IAP game/shopping "muted" trong Tết rồi hồi sau đó | **BẮT BUỘC có "Tết Mode"**: pause streak toàn nhóm, boss ngủ đông, hoặc đổi kèo thành kèo Tết ("không cãi nhau với họ hàng", "không ngủ quá 12h trưa"). **Nếu không làm, sẽ churn hàng loạt đúng dịp Tết** |
| **Sau Tết (~tháng 3)** | "Comeback" — cảm giác tội lỗi sau Tết, muốn tập lại | **Comeback Season** — đúng với feature đã có trong chiến lược |
| **Cuối T8 – đầu T9** | Đầu năm học, sinh viên nhập học, nhóm bạn mới hình thành | **Cửa sổ acquisition tốt thứ 2.** Campaign trên các Facebook Group trường/ký túc xá |
| **Tháng 6–7** | Nghỉ hè, sinh viên rảnh | Test feature mới, season ngắn |

---

## 6. RỦI RO THỊ TRƯỜNG (xếp theo mức nguy hiểm)

### 6.1. 🔴 RỦI RO PHÁP LÝ — Nghị định 147/2024/NĐ-CP (nghiêm trọng nhất, hay bị bỏ sót)

**[FACT]** Nghị định 147/2024/NĐ-CP có hiệu lực **25/12/2024**, thay thế NĐ 72/2013 và NĐ 27/2018. Nội dung liên quan trực tiếp đến Teemi:

1. **Xác thực bắt buộc:** người dùng MXH tại VN **phải xác thực tài khoản bằng số điện thoại di động** (hoặc số định danh cá nhân nếu không có SĐT VN). **Chỉ tài khoản đã xác thực mới được đăng bài, bình luận, livestream, chia sẻ.** — [thuvienphapluat](https://thuvienphapluat.vn/banan/tin-tuc/nghi-dinh-1472024ndcp-chinh-thuc-bat-buoc-xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-12259), [Bộ KH&CN](https://mst.gov.vn/xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-cu-hich-moi-tu-nghi-dinh-147-2024-nd-cp-197241227105213649.htm)
2. **Ngưỡng cấp phép rất thấp:** MXH có **>10.000 lượt truy cập/tháng HOẶC >1.000 người dùng thường xuyên/tháng** phải xin **Giấy phép cung cấp dịch vụ MXH**. Dưới ngưỡng đó chỉ cần **Giấy xác nhận thông báo**. — [Luật Trí Minh](https://luattriminh.vn/giay-phep-mang-xa-hoi-la-gi.html), [thuvienphapluat — thủ tục](https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/chinh-sach-moi/75756/thu-tuc-cap-giay-phep-cung-cap-dich-vu-mang-xa-hoi-tu-25-12-2024)
3. **Điều kiện pháp nhân:** phải là tổ chức/doanh nghiệp thành lập theo pháp luật VN, ngành nghề đăng ký phù hợp; **người chịu trách nhiệm nội dung phải có quốc tịch VN**.
4. Thời hạn 90 ngày kể từ khi NĐ có hiệu lực để xác thực các tài khoản đang hoạt động.

**Hệ quả hành động cụ thể:**
- **Ngưỡng 1.000 user thường xuyên/tháng là cực thấp** — Teemi sẽ chạm ngưỡng này trong vài tháng đầu nếu có traction. Phải chuẩn bị hồ sơ pháp lý **song song** với build MVP, không phải sau.
- **Thiết kế auth bằng số điện thoại VN (OTP) ngay từ đầu**, không dùng email-only hay chỉ social login. Điều này vừa tuân thủ luật, vừa hợp hành vi (Zalo cũng auth bằng SĐT).
- **Cân nhắc định vị pháp lý:** Teemi là "MXH" hay "ứng dụng nhắn tin/công cụ nhóm riêng tư"? Sự phân biệt này quyết định có phải xin giấy phép MXH hay không. **Cần tham vấn luật sư công nghệ VN trước khi launch.** Vì Teemi là private-first, không có feed công khai, có lập luận để không rơi vào diện MXH — nhưng đây là câu hỏi phải hỏi luật sư, không phải đoán.
- Chi phí: xin giấy phép MXH thường mất **3–6 tháng** và yêu cầu hạ tầng/nhân sự **[GUESS]**.

### 6.2. 🔴 Zalo group đã "đủ tốt và miễn phí"

**[FACT]** 98% dùng Zalo hàng tuần; 81% dùng Zalo để liên lạc bạn bè; 2,1 tỷ tin nhắn/ngày.

Nhóm bạn VN **đã có** group chat, đã có ảnh, đã có cà khịa, đã có meme — **miễn phí, zero friction, không cần cài thêm gì**. Câu hỏi sinh tử của Teemi: *cái gì Zalo group KHÔNG làm được?*

Câu trả lời khả dĩ **[INFERENCE]**: **cấu trúc**. Zalo group không tự động biết ai đã nộp/chưa nộp, không có boss HP, không tự tổng hợp recap, không có timeline nhìn lại. Nhưng "cấu trúc" là lợi ích **trừu tượng** — khó bán cho Gen Z trong 5 giây đầu.

**Hệ quả:** value prop 5 giây của Teemi phải là thứ **nhìn thấy được ngay** (boss HP tụt, ai chưa nộp lộ mặt, recap đẹp để screenshot) chứ không phải "giúp nhóm có cấu trúc".

### 6.3. 🟠 App fatigue — không còn chỗ trên màn hình

**[FACT]** Người Việt dùng **~27 app/tuần**, **7,2 giờ/ngày**, và top 6 app chiếm gần hết thời gian. **[FACT]** AppsFlyer: lượt cài app ở VN đã **plateau**.

**[INFERENCE]** Slot "app xã hội thứ 4" trên điện thoại Gen Z VN cực khan hiếm. Teemi phải cạnh tranh không phải bằng feature mà bằng **lý do gỡ bỏ ma sát**: widget màn hình chính (như Locket), notification đúng nhịp, mở app <3 giây là xong việc.

### 6.4. 🟠 Lịch sử: MXH nội địa VN gần như thất bại 100%

**[FACT]** Gapo: VNG-backed rival, đầu tư 500 tỷ đồng lúc ra mắt, mục tiêu 50 triệu user sau 3 năm — sau 6 năm chưa đạt 10 triệu. Lotus: **90% user quay lại Facebook chỉ sau 3 tháng** dùng thử (Nielsen). Nguồn: [VietnamBiz](https://vietnambiz.vn/lotus-gapo-hahalolo-mang-xa-hoi-made-in-viet-nam-con-lai-gi-sau-nhung-man-ra-mat-ram-ro-2024321122021280.htm), [Thanh Niên](https://thanhnien.vn/thuc-trang-am-dam-cua-cac-mang-xa-hoi-viet-nam-185909292.htm)

**[INFERENCE]** Bài học: **mọi nỗ lực làm "Facebook Việt Nam" đều chết.** Nhưng Locket sống được vì nó **KHÔNG cạnh tranh trực diện** — nó chiếm một khe hẹp (ảnh riêng tư 20 người, widget). Teemi phải đi theo mô hình Locket: **hẹp, nhỏ, sâu**, không phải rộng.

### 6.5. 🟠 Willingness-to-pay thấp + văn hoá "mua chung/xài chùa"

**[FACT]** Chỉ 7–10% user game VN trả tiền. Thị trường xám tài khoản chia sẻ rất phát triển.
**[INFERENCE]** Nếu Teemi khoá tính năng theo cá nhân, user sẽ chia sẻ tài khoản. Nếu khoá theo nhóm (Group Pass), việc "chia sẻ" **chính là mô hình kinh doanh** → không có rò rỉ. **Ưu tiên monetize theo GROUP, không theo INDIVIDUAL.**

### 6.6. 🟡 Rủi ro Tết & tính mùa vụ của streak

Xem mục 5.2. Một app dựa trên **streak hằng ngày** + **boss hồi máu khi có người miss** sẽ bị **sốc tập thể** trong 1–2 tuần Tết. Đây là rủi ro retention cấu trúc, không phải rủi ro nhỏ.

### 6.7. 🟡 Nội dung UGC + moderation dưới luật VN

Teemi cho phép **ảnh/video proof + roast/cà khịa** trong nhóm riêng tư. Dù private, dưới NĐ147 nhà cung cấp dịch vụ vẫn có nghĩa vụ gỡ nội dung vi phạm theo yêu cầu cơ quan quản lý **[INFERENCE từ FACT về NĐ147]**. Cần: report/block trong nhóm, log tối thiểu, quy trình gỡ nội dung, điều khoản sử dụng tiếng Việt.

### 6.8. 🟡 Chi phí hạ tầng media so với ARPU VN

**[INFERENCE]** Với ARPU kỳ vọng rất thấp ở VN (conversion 1–3% × 30–50k VND/tháng → ARPU toàn user có thể chỉ **~500–1.500 VND/user/tháng**), chi phí lưu trữ ảnh/video proof hằng ngày có thể **vượt doanh thu**. Phải: nén mạnh, giới hạn độ phân giải, TTL cho media free tier, ưu tiên ảnh tĩnh + audio ngắn thay vì video (đúng như chiến lược gốc mục 12.7 đã nêu).

---

## 7. NHỮNG SỐ LIỆU KHÔNG TÌM ĐƯỢC (cần tự khảo sát)

Các câu hỏi sau **KHÔNG TÌM ĐƯỢC SỐ LIỆU** công khai — founder nên tự khảo sát 50–100 người trong target:

1. Tỉ lệ Gen Z VN dùng **Story** (Facebook Story / Zalo khoảnh khắc) hằng ngày.
2. Tần suất **screenshot rồi gửi vào group chat** (định lượng).
3. Kích thước nhóm bạn thân trung bình của Gen Z VN (giả định của Teemi là 3–6 người — cần xác nhận).
4. Tỉ lệ Gen Z VN đã từng dùng habit tracker và bỏ sau bao lâu.
5. Mức giá chấp nhận cụ thể cho app "vui + nhóm" (van Westendorp price test).
6. Quy mô định lượng của trend "study-with-me" và "cai X" trên TikTok VN.

---

## 8. KẾT LUẬN & 6 QUYẾT ĐỊNH CẦN RA NGAY

1. **Tech:** cross-platform, ship cả iOS + Android ở MVP (iOS 39,6% thiết bị nhưng phần lớn doanh thu).
2. **Auth:** đăng nhập bằng **số điện thoại + OTP** ngay từ v1 (tuân thủ NĐ147 + hợp hành vi VN).
3. **Pháp lý:** tham vấn luật sư về phân loại MXH **trước khi launch**; chuẩn bị hồ sơ trước khi chạm 1.000 user thường xuyên/tháng.
4. **Monetization:** bán **Group Pass 99–149k VND/tháng cho 5 người** làm gói chính; cá nhân 29–49k; cosmetic 15–39k. Dùng IAP chuẩn + Small Business Program (15%).
5. **Growth:** TikTok organic + micro-KOC TikTok (612k–3,06tr/video) + viral loop qua Zalo invite. **Bỏ Instagram. Không chạy paid trước khi D7 retention >20%.**
6. **Sản phẩm:** thiết kế **Tết Mode** vào roadmap MVP+1 (không phải phase sau) và làm mọi màn hình **đẹp khi bị screenshot**.

---

## PHỤ LỤC — Toàn bộ nguồn

**Quy mô & hạ tầng**
- [DataReportal — Digital 2025: Vietnam](https://datareportal.com/reports/digital-2025-vietnam)
- [DataReportal — Digital 2026: Vietnam](https://datareportal.com/reports/digital-2026-vietnam)
- [GSO — Thông cáo dân số, lao động, việc làm quý IV và năm 2025](https://www.nso.gov.vn/tin-tuc-thong-ke/2026/01/thong-cao-bao-chi-ve-tinh-hinh-dan-so-lao-dong-viec-lam-quy-iv-va-nam-2025/)
- [Nhân Dân — Dân số VN 2025 đạt 102,3 triệu](https://nhandan.vn/dan-so-trung-binh-cua-viet-nam-nam-2025-dat-1023-trieu-nguoi-post934760.html)
- [Tuổi Trẻ — Gen Z 14,7 triệu (Nielsen)](https://tuoitre.vn/chinh-phuc-the-he-tieu-dung-tre-gen-z-kho-lam-day-20250405021133301.htm)
- [StatCounter — Mobile OS Market Share Viet Nam](https://gs.statcounter.com/os-market-share/mobile/viet-nam)

**Hành vi app & nhóm**
- [Q&Me — Vietnam Mobile App Popularity 2026 (PDF)](https://cdn.qandme.net/1773712237_Vietnam_mobile_app_popularity_2026_-_13032026.pdf)
- [Q&Me — Vietnam Mobile App Usage Trends 2026](https://qandme.net/en/report/vietnam-mobile-app-usage-trends-2026.html)
- [Báo Nghệ An — Zalo 98% usage 2026](https://baonghean.vn/en/zalo-thong-tri-thi-truong-ung-dung-di-dong-viet-nam-nam-2026-voi-ty-le-su-dung-cham-muc-98-10329834.html)
- [Decision Lab — Vietnam's digital dynamics Q4 2025](https://www.decisionlab.co/blog/vietnams-digital-dynamics-q4-2025)
- [Decision Lab qua Brands Vietnam — xu hướng MXH VN](https://www.brandsvietnam.com/congdong/topic/343044-decision-lab-dinh-hinh-lai-xu-huong-tieu-dung-mang-xa-hoi-tai-viet-nam)
- [vietnam.vn — Zalo 79,6 triệu MAU, 2,1 tỷ tin nhắn/ngày](https://www.vietnam.vn/en/79-6-trieu-nguoi-dung-zalo-thuong-xuyen-hang-thang)
- [Kenh14 — 10 kiểu người "sống lỗi" group chat](https://kenh14.vn/10-kieu-nguoi-song-loi-group-chat-nao-cung-gap-215251112095653184.chn)
- [Nghề nghiệp & Cuộc sống — meme và Gen Z](https://nghenghiepcuocsong.vn/lieu-meme-co-bat-mi-duoc-gen-z-dang-nghi-gi-ve-khuon-mau-gioi/)
- [Apple App Store — Locket Widget, Cultural Impact Winner 2022](https://apps.apple.com/us/story/id1647059807?l=vi)
- [VnExpress — Meta: Threads tăng trưởng tốt tại VN](https://vnexpress.net/dai-dien-meta-threads-tang-truong-rat-tot-tai-viet-nam-5010759.html)

**Chi trả & thanh toán**
- [VJST — 50% người Việt sẵn sàng chi tiền cho giải trí số (Appota)](https://vjst.vn/50-nguoi-viet-san-sang-chi-tien-cho-dich-vu-giai-tri-so-69929.html)
- [Đại biểu Nhân dân — người trẻ tiêu tiền cho giải trí số](https://daibieunhandan.vn/nguoi-tre-dang-tieu-tien-cho-giai-tri-so-nhu-the-nao-10375361.html)
- [Antom — Vietnam Gaming & Payment Trends (7–10% paying users)](https://knowledge.antom.com/vietnam-gaming-payment-trends-report-unlocking-growth-in-a-young-dynamic-mobile-first-gaming-market)
- [Apple Support — Payment methods for Apple Account (Vietnam)](https://support.apple.com/en-us/111741)
- [Google Play Help — Accepted payment methods in Vietnam](https://support.google.com/googleplay/answer/2651410?hl=en&co=GENIE.CountryCode%3DVN)
- [MoMo — Dịch vụ liên kết (App Store, Google Play)](https://www.momo.vn/dich-vu-lien-ket)
- [VietnamNet — Spotify tăng giá 10,2% tại VN (65.000đ)](https://vietnamnet.vn/en/spotify-raises-premium-price-by-10-2-in-vietnam-2443684.html)
- [Home Credit — Bảng giá Netflix VN](https://www.homecredit.vn/blog/gia-cac-goi-tai-khoan-netflix-101)
- [Vietnam Insiders — YouTube Premium VN 79.000đ/tháng](https://vietnaminsiders.com/youtube-premium-officially-appears-in-vietnam-priced-at-79000-vnd-month/)
- [Sensor Tower — SEA Mobile Game Market 2025](https://sensortower.com/blog/southeast-asia-mobile-gaming-2025)

**Kênh & chi phí acquisition**
- [Revu Vietnam — Bảng giá KOL Việt Nam 2025](https://blog.vn.revu.net/thue_kol/)
- [Ori Agency qua Brands Vietnam — chi phí quảng cáo TikTok](https://www.brandsvietnam.com/congdong/topic/346263-chi-phi-quang-cao-tiktok-bao-nhieu-cach-toi-uu-ngan-sach)
- [Mapendo — Cost per Install by Country 2025](https://mapendo.co/blog/cost-per-install-by-country-2025)
- [AppsFlyer — State of App Marketing in Vietnam 2025](https://www.appsflyer.com/resources/reports/app-marketing-vietnam/)
- [VIR — Shopping app installs +242% dịp Tết (AppsFlyer)](https://vir.com.vn/shopping-app-installs-surge-242-per-cent-during-tet-2019-in-vietnam-69824.html)

**Trend & mùa vụ**
- [CafeBiz — Bùng nổ runner, thị trường tỷ đô](https://cafebiz.vn/bung-no-runner-hinh-thanh-thi-truong-ty-do-chay-bo-dang-bien-doi-kinh-te-tieu-dung-ra-sao-176260402183910487.chn)
- [Thể Hình — Top 7 xu hướng tập luyện 2026](https://www.thehinh.com/2026/01/top-xu-huong-tap-luyen.html)
- [Pháp Luật TP.HCM — 80% Gen Z muốn tham gia hoạt động chữa lành](https://plo.vn/80-gen-z-muon-tham-gia-cac-hoat-dong-chua-lanh-post901975.html)
- [VnEconomy — Gen Z chi tiền để chữa lành cảm xúc](https://vneconomy.vn/khi-gen-z-chi-tien-de-chua-lanh-cam-xuc.htm)
- [CafeBiz — Xu hướng sống "ngược đời" của Gen Z 2026](https://cafebiz.vn/xu-huong-song-nguoc-doi-cua-gen-z-nam-2026-tuong-ki-la-nhung-lai-la-bi-quyet-song-tho-it-ai-ngo-176260421143046581.chn)
- [Thanh Niên — Gen Z 2026 định nghĩa thành công khác](https://thanhnien.vn/nam-moi-2026-gen-z-dinh-nghia-thanh-cong-theo-cach-rat-khac-185251231231525311.htm)
- [ThinkDigital — Hành vi tiêu dùng Gen Z 2026](https://thinkdigital.com.vn/blog/sales-strategy/hanh-vi-tieu-dung-gen-z-2026-13954/)

**Pháp lý & rủi ro**
- [thuvienphapluat — NĐ 147/2024 bắt buộc xác thực tài khoản MXH bằng SĐT](https://thuvienphapluat.vn/banan/tin-tuc/nghi-dinh-1472024ndcp-chinh-thuc-bat-buoc-xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-12259)
- [thuvienphapluat — Thủ tục cấp Giấy phép cung cấp dịch vụ MXH từ 25/12/2024](https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/chinh-sach-moi/75756/thu-tuc-cap-giay-phep-cung-cap-dich-vu-mang-xa-hoi-tu-25-12-2024)
- [Bộ KH&CN — Xác thực tài khoản MXH bằng SĐT](https://mst.gov.vn/xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-cu-hich-moi-tu-nghi-dinh-147-2024-nd-cp-197241227105213649.htm)
- [Luật Trí Minh — Giấy phép mạng xã hội: điều kiện và thủ tục](https://luattriminh.vn/giay-phep-mang-xa-hoi-la-gi.html)
- [ABEI — NĐ 147 chính thức có hiệu lực](https://abei.gov.vn/thong-tin-dien-tu/nghi-dinh-147-ve-quan-ly-internet-va-thong-tin-tren-mang-chinh-thuc-co-hieu-luc/118622)
- [VietnamBiz — Lotus, Gapo, Hahalolo còn lại gì](https://vietnambiz.vn/lotus-gapo-hahalolo-mang-xa-hoi-made-in-viet-nam-con-lai-gi-sau-nhung-man-ra-mat-ram-ro-2024321122021280.htm)
- [Thanh Niên — Thực trạng ảm đạm của các MXH Việt Nam](https://thanhnien.vn/thuc-trang-am-dam-cua-cac-mang-xa-hoi-viet-nam-185909292.htm)
