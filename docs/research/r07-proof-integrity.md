# R07 — Tính toàn vẹn của Proof & Chống gian lận

_Research cho Teemi — social challenge app private-first cho nhóm bạn thân (VN, Gen Z 16–28)._
_Ngày: 2026-08-28. Người viết: research agent. Trạng thái: draft để founder phản biện._

> **Quy ước độ tin cậy trong tài liệu này**
> - **[FACT]** = có nguồn URL, số liệu công bố.
> - **[INFERENCE]** = suy luận logic từ fact + đặc thù sản phẩm Teemi.
> - **[GUESS]** = phỏng đoán, chưa có bằng chứng, cần test.
> Khi không tìm được số liệu, tài liệu ghi thẳng **"KHÔNG TÌM ĐƯỢC SỐ LIỆU"**.

---

## 0. TL;DR cho founder (đọc 60 giây)

1. **Proof của Teemi không phải là bằng chứng pháp lý. Nó là _tín hiệu xã hội_.** Giá trị của nó nằm ở việc "cả nhóm nhìn thấy mày đã làm", không nằm ở việc "hệ thống chứng minh được mày đã làm". Mọi quyết định kỹ thuật phải bám nguyên tắc này.
2. **MVP nên chỉ có 3 dạng proof: ảnh chụp trong app (in-app camera), text/emoji ngắn, và self-check (checkbox).** Không HealthKit, không GPS, không NFC, không Screen Time ở MVP.
3. **Anti-cheat MVP = 4 thứ rẻ tiền:** server-side timestamp (không tin đồng hồ máy), bắt buộc in-app camera cho proof ảnh, perceptual hash chống nộp lại ảnh cũ, và rate limit. Tổng chi phí dev ước ~3–5 ngày công. **[INFERENCE]**
4. **Không làm "fail" bằng vote nhóm ở MVP.** Chỉ có nút **"sus"** mang tính đùa (đếm số, không đổi kết quả). Vote-to-fail là cửa ngõ trực tiếp dẫn tới bắt nạt trong nhóm bạn — mà nhóm bạn thân là môi trường khép kín, nạn nhân không thoát ra được.
5. **Không làm Trust Score ở MVP.** Trust Score chỉ có lý do tồn tại khi có **giá trị thật** (voucher, tiền, giải thưởng). Chiến lược gốc đã nói sponsor để phase sau → trust score cũng để phase sau.
6. **Rủi ro lớn nhất không phải là gian lận. Rủi ro lớn nhất là app quá nghiêm khắc đến mức không ai muốn chơi.** Với nhóm 5 người bạn thân, chi phí xã hội của việc "bị bắt gian" đã đủ răn đe hơn mọi thuật toán.

---

## 1. Bản đồ các dạng proof

### 1.1. Bảng so sánh tổng hợp

Cột "Ma sát (giây)" là **[GUESS] có cơ sở** — ước lượng thời gian từ lúc user chạm notification đến lúc proof được gửi thành công, trên máy tầm trung, mạng 4G VN. Không tìm được benchmark công khai cho từng dạng proof trong app habit/social → đây là ước lượng của tôi dựa trên số bước thao tác.

| Dạng proof | Độ tin cậy | Ma sát (giây, ước tính) | Cách gian lận phổ biến nhất | Chi phí kỹ thuật (MVP) | Rủi ro riêng tư | Verdict cho Teemi |
|---|---|---|---|---|---|---|
| **Checkbox tự khai** | Rất thấp | **2–4s** | Bấm bừa | Rất thấp (1 API) | Không có | ✅ **MVP** — cho goal nhạy cảm/khó chụp |
| **Text ngắn (1 dòng) + emoji** | Thấp | **8–15s** | Gõ bừa | Rất thấp | Thấp | ✅ **MVP** — rẻ, tạo chất liệu cho recap |
| **Ảnh chụp trong app (in-app camera, không cho chọn từ thư viện)** | Trung bình–khá | **10–20s** | Chụp lại màn hình khác, chụp ảnh dàn dựng, nhờ người chụp hộ | Thấp–TB (camera view + upload + nén) | TB (ảnh có thể lộ nhà, mặt người khác) | ✅ **MVP — proof mặc định** |
| **Ảnh từ thư viện (gallery upload)** | Thấp | **12–25s** | Nộp lại ảnh cũ, tải ảnh trên mạng, ảnh của bạn | Thấp | TB | ⚠️ **Cho phép nhưng gắn nhãn "từ thư viện"**, không cấm |
| **Ảnh dual-camera (trước+sau kiểu BeReal)** | Khá | **15–30s** | Vẫn dàn dựng được, nhưng khó hơn nhiều | TB (2 camera, ghép ảnh) | **Cao** — bắt buộc lộ mặt | ⚠️ **Phase 2, và phải optional** |
| **Video ngắn 3–10s** | Khá | **20–40s** | Quay lại video cũ, quay màn hình | TB–Cao (transcode, storage, bandwidth) | Cao | ❌ **Không MVP** (chiến lược gốc §12.7 đã cảnh báo hạ tầng media nặng) |
| **Audio ngắn 5–15s** | Thấp–TB | **12–25s** | Rất dễ giả | Thấp–TB | TB (giọng nói, tiếng nền) | ⚠️ **Phase 2** — giá trị nằm ở _vibe/kỷ niệm_ chứ không phải verify |
| **Screenshot app khác (Duolingo, Kindle, Spotify…)** | TB (có thể chỉnh sửa) | **15–35s** (phải rời app → chụp → quay lại) | Chụp screenshot cũ, chỉnh Photoshop, đổi giờ máy rồi screenshot | Thấp (chỉ là ảnh) | TB–Cao (screenshot lộ notification, tin nhắn) | ⚠️ **Cho phép như "ảnh thường"**, không parse |
| **HealthKit / Google Fit / Health Connect** | **Cao nếu đọc đúng metadata**, thấp nếu tin số liệu thô | **3–6s sau khi đã cấp quyền**, nhưng **60–180s cho lần setup đầu** | Ghi dữ liệu giả vào HealthKit bằng app bên thứ ba; lắc điện thoại; buộc máy vào chó | **Cao** — 2 SDK khác nhau, permission flow, App Review giải trình | **Cao** — dữ liệu sức khỏe, nhiều quy định | ❌ **Không MVP.** Phase 2 cho goal thể chất |
| **Screen Time API (iOS) / UsageStats (Android)** | TB | Setup rất nặng | Dùng máy khác, dùng web | **Rất cao** — iOS cần entitlement `com.apple.developer.family-controls` phải xin Apple duyệt | Rất cao | ❌ **Không làm.** Xem §1.3 |
| **GPS check-in (vị trí)** | TB (spoof được) | **8–20s** (chờ fix GPS) | Fake GPS app (Android trivial, iOS cần công cụ) | TB | **Rất cao** — vị trí là dữ liệu nhạy cảm nhất | ❌ **Không MVP** |
| **NFC tag (dán tag ở phòng gym/bàn học)** | **Cao** (phải có mặt vật lý) | **4–8s** khi đã có tag | Mang tag theo người; clone tag NDEF | TB (Android tốt, iOS cần iPhone 7+ và có giới hạn) | Thấp | ❌ **Không MVP** — đòi hỏi user mua/dán tag, giết onboarding |

### 1.2. Ghi chú kỹ thuật quan trọng cho từng dạng

**Ảnh + EXIF.** Đừng phụ thuộc EXIF. Khi user chọn ảnh từ thư viện qua trình chọn ảnh của hệ điều hành hoặc upload qua web, metadata thường bị lược bỏ hoặc thay đổi — WebKit có bug report đúng về việc "Uploading photos from iOS photo library strips EXIF data" ([bugs.webkit.org](https://bugs.webkit.org/show_bug.cgi?id=207088)) **[FACT]**. iOS 15+ còn cho user tắt Location ngay trong share sheet ([applestan.com](https://applestan.com/blog/posts/remove-metadata-from-photos-iphone/)) **[FACT]**. → **EXIF chỉ dùng như tín hiệu phụ, không bao giờ là điều kiện pass/fail.** **[INFERENCE]**

**HealthKit không đáng tin như bạn nghĩ.** HealthKit có cờ `HKMetadataKeyWasUserEntered` để đánh dấu dữ liệu do người nhập tay, và `sourceRevision` cho biết app nào ghi. Nhưng đã có repo công khai (`nextglabs/healthkit-write-steps`) làm đúng việc **ghi số bước vào HealthKit mà né cờ "Was User Entered"** ([github.com](https://github.com/nextglabs/healthkit-write-steps)) **[FACT]**. → Nếu sau này Teemi đọc HealthKit, **phải whitelist `sourceRevision.source.bundleIdentifier`** (chỉ chấp nhận `com.apple.health` / Apple Watch / Fitbit / Garmin…), chứ không chấp nhận mọi nguồn. **[INFERENCE]**

### 1.3. Screen Time API — vì sao nên gạch thẳng khỏi roadmap

Đây là kết luận cứng, không phải "để sau":
- Dữ liệu usage **chỉ đọc được bên trong app extension, không kéo được về app chính** — "if you attempt to extract the usage data to your main app, it returns absolutely nothing"; hệ thống trả về **opaque token** thay vì tên app/URL, và **Apple không bao giờ để developer nhìn thấy dữ liệu usage của user** ([medium.com/@nikkieke001](https://medium.com/@nikkieke001/what-no-one-tells-you-about-building-with-apples-screen-time-api-e061d14d1f66), [reshade.app](https://reshade.app/guides/screen-time-api-limits/)) **[FACT]**.
- Cần entitlement `com.apple.developer.family-controls` phải nộp đơn xin Apple duyệt **[FACT]**.
- iOS 26 (2025) có regression nặng: DeviceActivity threshold không fire, dữ liệu usage sai ([developer.apple.com forum](https://developer.apple.com/forums/thread/819997)) **[FACT]**.

→ Nghĩa là: **bạn không thể gửi "Huy đã dùng Duolingo 15 phút" về server để trừ máu boss.** Cơ chế boss chung của Teemi cần dữ liệu ở server. Screen Time API về mặt kiến trúc **không tương thích** với cơ chế lõi của Teemi. **[INFERENCE — mức độ chắc chắn cao]**

---

## 2. Ma sát: mỗi bước xác minh tốn bao nhiêu?

### 2.1. Số liệu nền

Không tìm được nghiên cứu đo trực tiếp "thêm bước verify proof làm giảm bao nhiêu % completion trong habit app" — **KHÔNG TÌM ĐƯỢC SỐ LIỆU trực tiếp**. Phải suy từ hai nguồn gián tiếp:

**(a) Friction trong form/onboarding:**

| Nguồn | Số liệu |
|---|---|
| HubSpot 2024 (dẫn lại) | Mỗi field thêm vào làm conversion giảm trung bình **~4.1%** ([brixongroup.com](https://brixongroup.com/en/lead-forms-in-b2b-the-perfect-balancing-act-between-data-depth-and-conversion-rate)) |
| Baymard (dẫn lại) | Mỗi field vượt quá 2 tốn khoảng **8–10 điểm phần trăm** conversion ([ivyforms.com](https://ivyforms.com/blog/your-multi-step-forms-are-killing-conversions/)) |
| Ước lượng chung | Mỗi field giảm hoàn thành **5–7%** ([reform.app](https://www.reform.app/blog/multi-step-form-drop-off-rates-how-to-reduce-them)) |

⚠️ **Cảnh báo chất lượng nguồn:** đây đều là nội dung marketing/blog dẫn lại nhau, không phải nghiên cứu peer-reviewed. Coi là **[FACT yếu]** — chỉ dùng để nói **hướng và độ lớn**, không dùng làm con số dự báo.

**(b) BeReal — bằng chứng thực tế tốt nhất chúng ta có:**
BeReal ép chụp 2 camera trong cửa sổ 2 phút. Trang quảng cáo chính thức của BeReal nói **"55% of users post daily within the same two-minute window"** ([bereal.com/ads/audience](https://bereal.com/ads/audience)) **[FACT — nguồn first-party]**.

→ **Đọc ngược lại: ~45% người dùng BeReal đang hoạt động vẫn đăng MUỘN, dù toàn bộ sản phẩm được thiết kế quanh cửa sổ 2 phút và có phạt xã hội rõ ràng ("late" hiển thị công khai).** **[INFERENCE]**

Đây là con số quan trọng nhất trong toàn bộ tài liệu này. Nó nói: **ngay cả sản phẩm ép buộc nhất về thời gian cũng chỉ đạt ~55% tuân thủ đúng luật, và họ vẫn sống được vì họ KHÔNG cấm người đăng muộn — họ chỉ gắn nhãn.** BeReal sau đó còn phải ra "Bonus BeReal" để *thưởng* cho người đăng đúng giờ thay vì *phạt* người đăng muộn ([techcrunch.com](https://techcrunch.com/2023/04/24/bonus-bereal-20-million-daus/amp/)) **[FACT]**.

**Bài học trực tiếp cho Teemi:** thiết kế "nộp muộn" là **trạng thái có nhãn** ("Nộp phút 89", đúng ngôn ngữ đã có sẵn trong chiến lược gốc §8), **không phải trạng thái bị từ chối**.

### 2.2. Ngân sách ma sát cho Teemi

Đề xuất một **hard budget**: **proof mặc định phải xong trong ≤ 15 giây, ≤ 3 lần chạm.** **[INFERENCE / khuyến nghị]**

Luồng đạt được điều đó:
```
Notification → chạm → camera mở SẴN (không phải màn hình trung gian)
→ chạm chụp → chạm gửi. Hết.
Caption là optional, hiện sau khi đã gửi.
```

Anti-pattern phải tránh: chọn goal → chọn loại proof → chọn ảnh → viết caption bắt buộc → chọn ai được xem → gửi. Đó là 6 bước, và theo mọi nguồn ở trên nó sẽ giết completion. **[INFERENCE]**

### 2.3. Chi phí ẩn: giám sát giết động lực nội tại

Đây là điểm ít founder nghĩ tới nhưng có nền tảng nghiên cứu vững:
- Giám sát chặt làm **giảm động lực tự chủ (self-determined motivation)** và làm người bị giám sát cảm thấy **mất quyền tự chủ, hiệu suất kém hơn** ([nature.com/Communications Psychology 2024](https://www.nature.com/articles/s44271-024-00102-8)) **[FACT]**.
- Giám sát **bằng thuật toán** còn tạo cảm giác mất tự chủ và kháng cự **mạnh hơn** giám sát bởi con người (cùng nguồn Nature 2024) **[FACT]**.

→ Với Teemi, điều này có nghĩa là: **để nhóm bạn "soi" nhau (giám sát xã hội, có quan hệ, có đùa) ÍT gây hại hơn để thuật toán chấm điểm bạn (giám sát máy móc, lạnh, không giải thích được).** Đây là lập luận mạnh nhất ủng hộ hướng peer-social thay vì hướng anti-cheat kỹ thuật. **[INFERENCE — dựa trực tiếp trên kết quả nghiên cứu]**

---

## 3. Gian lận: người ta gian lận thế nào và phát hiện ra sao

### 3.1. Tiền lệ từ các app thật

| App | Cách gian lận | Phản ứng của nền tảng | Nguồn |
|---|---|---|---|
| **Strava** | GPS spoofing bằng fake GPS app; sửa file GPX/FIT để đổi timestamp và tốc độ; đi xe máy/ô tô rồi log thành chạy/đạp | Auto-detect "impossible efforts" trên Segment; **xoá hơn 1.5 triệu hoạt động bằng xe khỏi Segment Leaderboards (1/2026)**; thêm "Verified Segments"; cho user flag | [cybernews.com](https://cybernews.com/tech/strava-cleanup-segment-leaderboards/), [support.strava.com](https://support.strava.com/hc/en-us/articles/31523071638797-Segment-Updates-Verified-Segments-Decluttering-and-Leaderboard) **[FACT]** |
| **Sweatcoin** | Lắc điện thoại, đặt máy lên máy giặt / lên lưng chó / lưng thỏ, đi xe hơi | ML phân tích pattern chuyển động + đối chiếu location, tốc độ, hướng, gia tốc; **trung bình chỉ ~65% số "bước" máy ghi nhận được quy đổi thành sweatcoin → ~35% bị loại** | [sweatco.in/verification-algorithm](https://sweatco.in/verification-algorithm) **[FACT]** |
| **STEPN** | GPS spoofing gây lạm phát token | Ra hệ thống anti-cheat "SMAC" dùng ML (2022); bị DDoS ngay sau khi bật | [coincodex.com](https://coincodex.com/article/15258/popular-app-stepn-struggles-with-ddos-attacks-after-rolling-out-anti-cheating-system) **[FACT]** |
| **Duolingo** | Streak Freeze / Streak Repair — "gian lận hợp pháp" do chính nền tảng bán | **Hợp thức hoá và bán nó.** Cộng đồng cãi nhau streak freeze có phải cheat không, nhưng Duolingo coi đó là sản phẩm trong shop | [duoplanet.com](https://duoplanet.com/duolingo-streak-freeze/), [duolingo.fandom.com](https://duolingo.fandom.com/wiki/Shop/Streak_freeze) **[FACT]** |
| **BeReal** | Đăng muộn rồi dàn dựng ảnh; chụp lại 3–4 lần trước khi post | Không cấm — chỉ **gắn nhãn công khai**: hiện "late", hiện số lần retake | [bereal.com](https://bereal.com/ads/audience), [gwi.com](https://www.gwi.com/blog/7-truths-about-bereal) **[FACT]** |
| **stickK** | Referee là bạn dễ tính → duyệt bừa | Chấp nhận honor system; dữ liệu của stickK nói **có referee làm tăng gấp đôi tỉ lệ thành công** | [stickk.zendesk.com](https://stickk.zendesk.com/hc/en-us/articles/206833157-How-it-Works), [accountablo.com](https://www.accountablo.com/blog/stickk-alternatives) **[FACT — số "gấp đôi" là dữ liệu tự công bố của stickK, chưa peer-review]** |
| **Forfeit** | (app đặt cọc tiền thật) | Vì có tiền thật nên verify nặng: **>30 phương thức proof**, ảnh do AI verify, timelapse do **người** verify, và **mọi khiếu nại đều có người thật xử lý trong 12 giờ**. Tỉ lệ forfeit thất bại chỉ ~6% | [forfeit.app](https://www.forfeit.app/), [accountablo.com](https://www.accountablo.com/blog/forfeit-overlord-review) **[FACT]** |

**Pattern quan trọng nhất rút ra:** *Mức độ đầu tư anti-cheat tỉ lệ thuận với giá trị vật chất đặt cược, không tỉ lệ với "mức độ nghiêm túc của mục tiêu".* Strava, STEPN, Sweatcoin, Forfeit đều phải làm nặng vì có **leaderboard toàn cầu / token / tiền thật**. BeReal và Duolingo — nơi phần thưởng chỉ là cảm xúc xã hội — chọn **gắn nhãn hoặc bán luôn cái "gian lận"**. **Teemi ở MVP thuộc nhóm thứ hai.** **[INFERENCE]**

### 3.2. Bảng kỹ thuật phát hiện — làm gì ở MVP, để gì lại sau

| Kỹ thuật | Chống được gì | Chi phí dev (ước tính) | False positive | MVP? |
|---|---|---|---|---|
| **Server-side timestamp** (server tự ghi giờ, không tin `Date()` của client) | Đổi giờ hệ thống để "nộp bù" ngày hôm qua | **~0.5 ngày** | 0 | ✅ **BẮT BUỘC MVP** |
| **In-app camera bắt buộc cho proof ảnh** (không cho chọn thư viện ở luồng mặc định) | Nộp ảnh cũ, ảnh tải trên mạng | **~1–2 ngày** | Thấp | ✅ **MVP** |
| **Perceptual hash (dHash 128-bit hoặc pHash 64-bit) chống trùng ảnh** | Nộp lại đúng ảnh cũ / ảnh của bạn cùng nhóm | **~1 ngày** (thư viện có sẵn) | Có — ngưỡng Hamming 4–5 bắt đầu dính false positive; nên đặt ngưỡng chặt (1–2 bit trên dHash 128-bit) | ✅ **MVP nhưng chỉ để GẮN NHÃN, không auto-fail** |
| **Rate limit / quota nộp proof** | Spam, bot | ~0.5 ngày | 0 | ✅ **MVP** |
| **EXIF/timestamp analysis** | Ảnh cũ | ~1 ngày | **Cao** — EXIF thường bị strip | ⚠️ Tín hiệu phụ, không gate |
| **Device attestation (App Attest / Play Integrity)** | Client giả, emulator, app mod, gọi API trực tiếp | **~3–5 ngày** + backend verify + xử lý tỉ lệ fail hợp lệ (máy root, máy cũ) | Trung bình — sẽ chặn nhầm user Android root/ROM cook, khá phổ biến ở VN | ❌ **Không MVP.** Chỉ bật khi có reward thật, và chỉ trên **endpoint nhạy cảm** (đúng khuyến nghị chung: chỉ bảo vệ signup/login/redeem/payment) — [medium/Balwant Singh](https://medium.com/@balwant.matharu/enhancing-app-security-protecting-unauthenticated-apis-with-app-attest-and-play-integrity-apis-80df0247d2ad) |
| **Reverse image search (ảnh lấy trên mạng)** | Ảnh tải từ Google | Cao (phải gọi API bên thứ ba, tốn tiền/ảnh) | TB | ❌ Không MVP |
| **Phát hiện ảnh chụp lại màn hình (moiré / recapture detection)** | Chụp lại screenshot trên màn hình khác | **Cao** — cần model ML; nghiên cứu có (SafeScreen dùng moiré cho cận cảnh, ViT cho recaptured screen) nhưng chưa có SDK plug-and-play | Cao | ❌ Không MVP — [dl.acm.org/SafeScreen](https://dl.acm.org/doi/10.1145/3743715), [sciencedirect ViT](https://www.sciencedirect.com/science/article/abs/pii/S1047320322002127) |
| **ML phân tích pattern hành vi** (kiểu Sweatcoin/SMAC) | Gian lận tinh vi, có hệ thống | Rất cao, cần dữ liệu | Cao | ❌ Không bao giờ ở giai đoạn này |

**Về perceptual hash — con số cụ thể để implement:** pHash chuyển ảnh sang grayscale, resize 32×32, DCT 2D, lấy khối 8×8 tần số thấp → fingerprint 64-bit. Một implementation thực tế đặt ngưỡng **2 bit trên dHash 128-bit**; ngưỡng **4–5 bắt đầu dính false positive** (ảnh khác nhau nhưng fingerprint gần) ([benhoyt.com](https://benhoyt.com/writings/duplicate-image-detection/)) **[FACT]**. pHash bền với nén JPEG, resize, overlay nhỏ nhưng **yếu với lật ảnh, crop, đổi màu** ([emergentmind](https://www.emergentmind.com/topics/perceptual-hashing-filtering), [MDPI Electronics 2026](https://www.mdpi.com/2079-9292/15/7/1493)) **[FACT]**.

→ **Kết luận vận hành:** ai muốn né pHash chỉ cần crop nhẹ hoặc lật ảnh. Nên pHash trong Teemi **không phải là hàng rào — nó là cái cớ để nhóm cười.** Khi trùng, hiện badge kiểu *"Ảnh này quen quen 🤨"* và để nhóm tự xử. **[INFERENCE]**

---

## 4. Peer review: thiết kế "pass / sus" mà không thành công cụ bắt nạt

### 4.1. Vì sao vote-to-fail nguy hiểm hơn bình thường ở Teemi

Nhóm bạn thân là môi trường **khép kín, không thoát ra được, và có lịch sử quan hệ ngoài đời**. Khác với mạng xã hội mở, ở đây:
- Bị 3/5 người vote fail không phải là "mất điểm" — nó là **một sự kiện xã hội thật** trong nhóm bạn thật. **[INFERENCE]**
- Kết quả của vote ảnh hưởng lên **boss chung** → tạo áp lực "mày làm cả nhóm mất máu" → chính xác là cơ chế biến cà khịa thành đổ lỗi. Chiến lược gốc §12.4 đã nhận diện rủi ro này. **[INFERENCE]**

Bằng chứng bên ngoài về nguy cơ: các app có cơ chế phán xét ẩn danh trong cộng đồng khép kín (Yik Yak) đã liên tục dẫn tới bắt nạt tới mức **hệ thống UNC cấm app ẩn danh trên campus (3/2024)**, và Yik Yak từng phải đóng cửa năm 2017 vì bullying ([insidehighered.com](https://www.insidehighered.com/news/tech-innovation/teaching-learning/2024/03/13/unc-system-banning-anonymous-social-apps-over), [ebsco.com](https://www.ebsco.com/research-starters/business-and-management/yik-yak)) **[FACT]**. Điểm chung: **phán xét + ẩn danh + cộng đồng đóng = độc hại**.

### 4.2. Thiết kế đề xuất cho MVP

| Câu hỏi | Khuyến nghị | Lý do |
|---|---|---|
| Ai được vote? | **Chỉ thành viên trong nhóm đó**, và **luôn hiện danh tính** (ai bấm sus là thấy tên) | Ẩn danh là biến số làm bùng bắt nạt. Có tên → tự điều tiết, và biến sus thành trò đùa có chủ ngữ ("Nam sus proof của Linh") **[INFERENCE]** |
| Bao nhiêu vote thì fail? | **Không có ngưỡng fail nào ở MVP** | Proof đã nộp = boss mất máu. Chấm hết. |
| Có nên có "fail" không? | **Không ở MVP.** Chỉ có `pass` (mặc định, ngầm định) và `sus` (đùa, đếm số) | Xem BeReal: chỉ gắn nhãn "late", không xoá bài. Vẫn sống. **[FACT + INFERENCE]** |
| Sus có tác dụng gì? | **Tác dụng xã hội và tác dụng recap**: proof nhiều sus nhất trong ngày lên recap cuối ngày ("Proof sus nhất hôm nay"). **Không trừ máu boss, không trừ streak.** | Giữ đúng "vui trước, kỷ luật sau" §10.1 |
| Chống lạm dụng sus? | Giới hạn **1 sus / người / proof**; nếu 1 người bị sus > X lần trong tuần bởi cùng 1 người → **giấu bớt, không thông báo**, và không lên recap | Chống "sus bomb" nhắm vào 1 người **[INFERENCE]** |
| Người bị sus có quyền gì? | **"Kháng cáo bằng meme"** — nộp thêm 1 ảnh/1 dòng giải thích, hiện ngay cạnh. Không có toà án. | Giữ tinh thần đùa, cho nạn nhân quyền nói lại |
| Goal nhạy cảm? | Cho user đánh dấu goal là **"nhạy cảm"** → proof chỉ hiện dạng checkbox + không cho sus | Chiến lược gốc §12.4: "không roast goal nhạy cảm" |

### 4.3. Tiền lệ để tham chiếu
- **stickK — referee**: mô hình "1 người duyệt" thay vì "cả nhóm bỏ phiếu". Điểm mạnh: theo stickK, có referee **tăng gấp đôi tỉ lệ thành công**. Điểm yếu công khai: verify yếu, phụ thuộc referee dễ tính ([stickk.zendesk.com](https://stickk.zendesk.com/hc/en-us/articles/206833157-How-it-Works), [accountablo.com](https://www.accountablo.com/blog/stickk-alternatives)) **[FACT]**. → **Với Teemi, mô hình "1 referee luân phiên trong tuần" là phương án dự phòng đáng test ở phase 2** nếu sus tỏ ra vô nghĩa. **[INFERENCE]**
- **Forfeit — friend-verify** là 1 trong hơn 30 phương thức, đứng cạnh AI-verify và human-verify ([forfeit.app](https://www.forfeit.app/)) **[FACT]**. Cho thấy peer verify là hợp lệ, nhưng ở app có tiền thật nó **không đứng một mình**.

---

## 5. Trust Score

### 5.1. Khi nào cần
Trust Score chỉ có lý do tồn tại khi **kết quả của proof quy đổi ra giá trị bên ngoài nhóm**: voucher, quà tài trợ, giải thưởng, xếp hạng công khai giữa các nhóm, hoặc tiền. Chiến lược gốc §11.5 đã liệt kê đúng thứ tự điều kiện: *"Chỉ làm khi đã có user thật, retention thật, anti-cheat, trust score, quota, audit…"* → **Trust score là điều kiện tiên quyết của sponsor, không phải của MVP.** **[INFERENCE trực tiếp từ doc gốc]**

### 5.2. Nếu làm (phase sau) thì thiết kế thế nào

| Nguyên tắc | Cụ thể |
|---|---|
| **Vô hình với user thường** | Không bao giờ hiển thị con số. User không nên biết mình có "điểm tin cậy". Nghiên cứu về giám sát thuật toán cho thấy nó làm giảm tự chủ và tăng kháng cự mạnh hơn giám sát bởi người ([Nature 2024](https://www.nature.com/articles/s44271-024-00102-8)) **[FACT]** |
| **Chỉ dùng ở "cổng"** | Trust score chỉ được đọc ở đúng 1 chỗ: khi user đổi phần thưởng có giá trị thật. Không dùng ở boss, recap, streak, timeline |
| **Per-account, không per-group** | Không để điểm ở nhóm này ảnh hưởng nhóm khác — đúng nguyên tắc context isolation §12.5 |
| **Tín hiệu đầu vào (gợi ý)** | tuổi tài khoản; % proof qua in-app camera; tỉ lệ trùng pHash; số lần đổi giờ hệ thống bị phát hiện; device attestation pass/fail; tốc độ nộp bất thường (nộp 7 proof trong 40 giây); số nhóm tham gia đột biến |
| **Luôn có recourse** | Bị chặn đổi thưởng → phải có nút "phản hồi" và người thật xem (Forfeit làm đúng: khiếu nại có người xử trong 12h) **[FACT]** |

### 5.3. Rủi ro
- **Rủi ro tâm lý:** Gen Z rất nhạy với cảm giác bị chấm điểm (liên tưởng "social credit"). Một trust score hiển thị công khai có thể là **feature giết app**. **[GUESS — cần test định tính]**
- **Rủi ro công bằng:** user Android máy cũ / ROM cook / máy root ở VN sẽ fail attestation nhiều hơn → trust score thấp oan. Android chiếm **60.38%** thị phần mobile OS ở VN (7/2026, [StatCounter](https://gs.statcounter.com/os-market-share/mobile/viet-nam)) **[FACT]** → đây không phải nhóm nhỏ.
- **Rủi ro sản phẩm:** trust score là thứ dễ build và cho cảm giác "đã làm anti-cheat", nhưng nó **không ngăn được cách gian lận phổ biến nhất của Teemi** (chụp một bức ảnh dàn dựng). **[INFERENCE]**

---

## 6. Cụ thể hoá nguyên tắc: "gian lận phần vui thì được, gian lận phần có giá trị thật thì không"

Đề xuất chia proof của Teemi thành **3 tầng**, mỗi tầng có ngưỡng kỹ thuật rõ ràng:

| Tầng | Cái gì thuộc tầng này | Hệ quả nếu gian lận | Yêu cầu kỹ thuật | Ai phán xử |
|---|---|---|---|---|
| **T0 — Vui (Fun tier)** | Proof hằng ngày, reaction, sus, boss chung, recap, timeline, streak nhóm, badge cosmetic, gacha cosmetic | Chỉ hại chính người gian lận và một chút không khí nhóm | **Server timestamp + in-app camera + pHash gắn nhãn.** Không auto-fail bất cứ thứ gì | **Nhóm bạn.** Hệ thống không phán xử |
| **T1 — Ký ức (Memory tier)** | Memory Capsule, Year in Review, timeline dài hạn, dữ liệu premium | Làm hỏng giá trị kỷ niệm của chính nhóm | Thêm: chống mất/ghi đè dữ liệu, immutability nhẹ (không cho sửa proof cũ quá 24h) | Nhóm + hệ thống bảo toàn dữ liệu |
| **T2 — Giá trị thật (Value tier)** — *phase sau* | Voucher/sponsor, giải thưởng, xếp hạng liên nhóm công khai, bất kỳ thứ gì quy đổi ra tiền | Gian lận = chiếm đoạt giá trị của người khác / của sponsor | **Toàn bộ bộ đồ nghề**: device attestation (App Attest/Play Integrity), trust score, quota, audit log, human review, ToS rõ ràng | **Hệ thống + người thật review + có quyền khiếu nại** |

**Quy tắc một dòng để founder cầm đi họp:**
> **Chừng nào phần thưởng chỉ là cảm xúc và ký ức của chính nhóm đó, người ngoài không mất gì khi bạn gian lận → không cần chứng minh chặt. Ngay khi có một đồng giá trị chảy từ bên ngoài vào, mọi thứ phải chứng minh chặt.**

Điều này giải thích tại sao Strava/STEPN/Sweatcoin/Forfeit phải làm nặng còn BeReal/Duolingo thì không — và Teemi ở MVP đứng cùng phe BeReal. **[INFERENCE có nền tảng từ bảng §3.1]**

---

## 7. Khuyến nghị cho MVP

### 7.1. LÀM (theo thứ tự ưu tiên)

1. **In-app camera là luồng proof mặc định.** Mở app từ notification → camera đã sẵn sàng. Nút "chọn từ thư viện" tồn tại nhưng nằm ở lớp thứ hai và proof từ thư viện bị **gắn nhãn nhẹ** (icon nhỏ, không phải cảnh báo đỏ).
2. **Server-side timestamp cho mọi proof.** Không bao giờ tin `Date()` từ client. Nếu client gửi timestamp lệch server > 5 phút → vẫn nhận nhưng ghi log.
3. **Trạng thái "Nộp phút 89"** cho proof nộp sau giờ chốt nhưng trong ngày. Nhãn vui, không phải phạt. (Ngôn ngữ này đã có sẵn trong doc gốc §8 — đây là lợi thế, dùng đi.)
4. **Perceptual hash chống trùng ảnh, chỉ để gắn nhãn.** dHash 128-bit, ngưỡng Hamming ≤ 2. So trong phạm vi: proof của **cùng user, 60 ngày gần nhất** (rẻ, đủ bắt trò nộp lại ảnh cũ) + proof của **cùng nhóm trong ngày** (bắt trò gửi ảnh cho nhau qua Zalo rồi cùng nộp).
5. **Nút "sus" hiện danh tính, 1 lần/người/proof, không đổi kết quả.** Feed thẳng vào recap cuối ngày.
6. **Rate limit:** tối đa N proof/user/ngày (N = số goal đang active + 2), tối đa 1 proof/10 giây.
7. **Nhãn goal nhạy cảm** → proof dạng checkbox, không cho sus, không lên recap trừ khi user chọn.
8. **"Life Happens" / Skip / Pause** như doc gốc §12.4 — đây thực chất là **anti-cheat tốt nhất**: cho người ta một lối thoát trung thực thì họ không cần nói dối. Duolingo thương mại hoá đúng insight này bằng Streak Freeze **[FACT + INFERENCE]**.
9. **Nén ảnh phía client** (cạnh dài ≤ 1440px, JPEG q≈0.7) trước khi upload — đúng cảnh báo hạ tầng media §12.7.

**Tổng ước lượng: 5–8 ngày công cho toàn bộ lớp integrity ở MVP.** **[GUESS có cơ sở]**

### 7.2. KHÔNG LÀM ở MVP

| Không làm | Lý do một câu |
|---|---|
| Vote-to-fail của nhóm | Cửa ngõ bắt nạt trong nhóm đóng; không có upside tương xứng |
| Trust score | Chưa có giá trị thật để bảo vệ; rủi ro "bị chấm điểm" cao |
| Device attestation | Đắt, chặn nhầm Android VN (60%+ thị phần), bảo vệ thứ chưa tồn tại |
| HealthKit / Google Fit / Health Connect | 2 SDK, permission nặng, và vẫn spoof được (`healthkit-write-steps`) |
| Screen Time API | **Về kiến trúc không gửi được dữ liệu về server** → không tương thích cơ chế boss |
| GPS / NFC | Riêng tư cao / đòi phần cứng; giết onboarding |
| Video proof | Hạ tầng nặng, ma sát cao |
| AI verify ảnh khớp mô tả (kiểu Forfeit) | Tốn tiền/ảnh, sai nhiều với ngữ cảnh VN, và **biến bạn thành trọng tài** — sai định vị |
| Reverse image search, moiré/recapture detection | Chi phí cao, false positive cao, ROI ~0 khi phần thưởng chỉ là cảm xúc |
| Ẩn danh trong mọi cơ chế phán xét | Xem Yik Yak |

### 7.3. Ba chỉ số cần đo ngay từ ngày 1 (để quyết định có siết proof hay không)

1. **Tỉ lệ proof qua in-app camera vs. thư viện.** Nếu > 60% đi đường thư viện → luồng camera đang có vấn đề UX, không phải user gian lận. **[INFERENCE]**
2. **Thời gian từ notification → proof gửi thành công (p50, p90).** Mục tiêu p50 ≤ 15s. Nếu p90 > 60s → ma sát đang giết ritual.
3. **Tỉ lệ trùng pHash.** Đây là **thước đo thực nghiệm duy nhất** cho câu hỏi "user có gian lận nhiều không". Nếu < 2% → toàn bộ lo lắng về anti-cheat là lo hão, đầu tư chỗ khác. **[INFERENCE]**

---

## 8. Red flags & câu hỏi mở

**Red flags (thứ có thể giết dự án từ mảng này):**
- **Nghiêm khắc hoá quá sớm.** Nếu proof trở thành thủ tục hành chính, ritual chết. BeReal có ~45% người đăng muộn và vẫn không cấm — Teemi nghiêm hơn BeReal là tự sát. **[INFERENCE từ FACT]**
- **Vote-to-fail gây drama thật ngoài đời.** Một nhóm bạn tan vì app là kịch bản tệ nhất, và nó không thể sửa bằng patch.
- **Chi phí lưu trữ ảnh không kiểm soát.** 5 người × 1 proof/ngày × 300KB × 365 ngày ≈ 550MB/nhóm/năm. 10.000 nhóm ≈ 5.5TB/năm. **[INFERENCE — số học]** Cần chính sách retention từ ngày 1.
- **Ảnh riêng tư trong nhóm bạn = trách nhiệm pháp lý.** Nội dung nhạy cảm/khiêu dâm trong nhóm kín, người dưới 18 tuổi (target 16–28 có bao gồm vị thành niên). Cần nút report + xoá + chính sách rõ ngay MVP, dù không làm moderation chủ động.
- **Screen Time API là bẫy roadmap.** Nghe rất hợp lý cho goal "bớt dùng điện thoại" nhưng về kiến trúc không dùng được. Nếu ai đó hứa feature này với user thì sẽ phải nuốt lời.

**Câu hỏi mở cần nghiên cứu tiếp / test với người dùng thật:**
- Người dùng VN 16–28 phản ứng thế nào với nhãn "sus"? Nó vui hay xúc phạm? (Cần 5–10 phỏng vấn định tính, không đoán được.)
- Có nên cho nộp proof cho ngày hôm qua không (backfill)? Đây là quyết định integrity lớn nhất chưa được trả lời trong doc gốc.
- Duo mode: peer review với n=2 nghĩa là gì? "Sus" giữa 2 người có khác hoàn toàn về mặt cảm xúc so với nhóm 5 người? **[GUESS: có, và có thể cần tắt sus ở Duo]**

---

## 9. Nguồn

**Gian lận & anti-cheat trên nền tảng thật**
- [Cybernews — Strava xoá >1.5M hoạt động bằng xe khỏi Segment Leaderboards](https://cybernews.com/tech/strava-cleanup-segment-leaderboards/)
- [Strava Support — Verified Segments & leaderboard cleanup](https://support.strava.com/hc/en-us/articles/31523071638797-Segment-Updates-Verified-Segments-Decluttering-and-Leaderboard)
- [Sweatcoin — Step Verification Algorithm (chỉ ~65% bước được quy đổi)](https://sweatco.in/verification-algorithm)
- [Sweat Team — Step verification and fraud detection](https://medium.com/sweat-economy/step-verification-and-fraud-detection-a2f0f8947f3c)
- [CoinCodex — STEPN ra anti-cheat SMAC và bị DDoS](https://coincodex.com/article/15258/popular-app-stepn-struggles-with-ddos-attacks-after-rolling-out-anti-cheating-system)
- [TestDevLab — Fitness App Testing: Beating Step Counter Algorithms](https://www.testdevlab.com/blog/testing-fitness-apps-can-you-cheat-the-algorithm)
- [GitHub — healthkit-write-steps (ghi step vào HealthKit né cờ Was User Entered)](https://github.com/nextglabs/healthkit-write-steps)
- [Apple Developer Forums — location spoofing không bị `isSimulatedBySoftware` bắt](https://developer.apple.com/forums/thread/803179)

**Ma sát & hành vi**
- [BeReal (first-party) — 55% user đăng trong cửa sổ 2 phút, 40M+ MAU](https://bereal.com/ads/audience)
- [TechCrunch — BeReal ra Bonus BeReal để thưởng người đăng đúng giờ](https://techcrunch.com/2023/04/24/bonus-bereal-20-million-daus/amp/)
- [GWI — 7 truths about BeReal](https://www.gwi.com/blog/7-truths-about-bereal)
- [Brixon — HubSpot 2024: mỗi field giảm ~4.1% conversion](https://brixongroup.com/en/lead-forms-in-b2b-the-perfect-balancing-act-between-data-depth-and-conversion-rate)
- [IvyForms — Baymard: mỗi field vượt quá 2 tốn 8–10 điểm %](https://ivyforms.com/blog/your-multi-step-forms-are-killing-conversions/)
- [Reform — Multi-step form drop-off rates](https://www.reform.app/blog/multi-step-form-drop-off-rates-how-to-reduce-them)
- [Nature / Communications Psychology 2024 — giám sát thuật toán làm giảm tự chủ và tăng kháng cự hơn giám sát bởi người](https://www.nature.com/articles/s44271-024-00102-8)

**Kỹ thuật phát hiện**
- [Ben Hoyt — Duplicate image detection with perceptual hashing (ngưỡng Hamming thực tế)](https://benhoyt.com/writings/duplicate-image-detection/)
- [MDPI Electronics — so sánh perceptual hashing vs deep embedding cho dedup ảnh](https://www.mdpi.com/2079-9292/15/7/1493)
- [Emergent Mind — Advanced Perceptual Hashing Filtering (điểm yếu của pHash)](https://www.emergentmind.com/topics/perceptual-hashing-filtering)
- [ACM — SafeScreen: phát hiện màn hình bằng moiré + deep learning](https://dl.acm.org/doi/10.1145/3743715)
- [ScienceDirect — Recaptured screen image identification bằng Vision Transformer](https://www.sciencedirect.com/science/article/abs/pii/S1047320322002127)
- [Medium/Balwant Singh — App Attest & Play Integrity: chỉ bảo vệ endpoint nhạy cảm](https://medium.com/@balwant.matharu/enhancing-app-security-protecting-unauthenticated-apis-with-app-attest-and-play-integrity-apis-80df0247d2ad)
- [Adjoe — Apple DeviceCheck & App Attest](https://adjoe.io/company/engineer-blog/prevent-fraud-on-ios-with-apple-devicecheck-and-app-attest/)
- [WebKit bug 207088 — upload ảnh từ thư viện iOS bị strip EXIF](https://bugs.webkit.org/show_bug.cgi?id=207088)

**Screen Time API**
- [Medium/Nikki Eke — What no one tells you about building with Apple's Screen Time API](https://medium.com/@nikkieke001/what-no-one-tells-you-about-building-with-apples-screen-time-api-e061d14d1f66)
- [Reshade — What iOS Screen Time APIs allow app blockers to do](https://reshade.app/guides/screen-time-api-limits/)
- [Apple Developer Forums — Screen Time API regressions trên iOS 26](https://developer.apple.com/forums/thread/819997)

**Peer review / accountability precedents**
- [stickK — How it Works (referee, honor system)](https://stickk.zendesk.com/hc/en-us/articles/206833157-How-it-Works)
- [Accountablo — stickK alternatives (điểm yếu verify của referee)](https://www.accountablo.com/blog/stickk-alternatives)
- [Forfeit — 30+ proving methods, AI + human verify, appeal trong 12h](https://www.forfeit.app/)
- [Accountablo — Forfeit & Overlord review (6% forfeit fail)](https://www.accountablo.com/blog/forfeit-overlord-review)
- [Duoplanet — Duolingo Streak Freeze](https://duoplanet.com/duolingo-streak-freeze/)
- [Duolingo Wiki — Streak Freeze trong shop](https://duolingo.fandom.com/wiki/Shop/Streak_freeze)
- [Inside Higher Ed — UNC cấm app ẩn danh vì cyberbullying (3/2024)](https://www.insidehighered.com/news/tech-innovation/teaching-learning/2024/03/13/unc-system-banning-anonymous-social-apps-over)
- [EBSCO — Yik Yak research starter](https://www.ebsco.com/research-starters/business-and-management/yik-yak)

**Thị trường VN**
- [StatCounter — Mobile OS market share Viet Nam (7/2026: Android 60.38%, iOS 39.6%)](https://gs.statcounter.com/os-market-share/mobile/viet-nam)

---

## Phụ lục A — Cảnh báo về chất lượng nguồn

Trong quá trình nghiên cứu, phần lớn "thống kê BeReal" trên web đến từ các site tổng hợp SEO (thinkimpact, helplama, electroiq, charleagency…) dẫn lại nhau, có số liệu **mâu thuẫn trực tiếp** với nhau (ví dụ cùng năm 2025 vừa "DAU tăng 12%" vừa "usage giảm 40%"). **Tài liệu này chỉ dùng con số BeReal từ trang first-party của chính BeReal.** Founder nên áp dụng cùng bộ lọc này cho mọi research khác về app social: **first-party > báo lớn > site tổng hợp SEO.**

## Phụ lục B — Checklist implement lớp integrity MVP

```
[ ] Server ghi created_at, KHÔNG nhận timestamp từ client (client_ts chỉ để log)
[ ] Endpoint POST /proof: rate limit 1 req/10s/user, quota ngày
[ ] Camera view in-app là màn hình đầu tiên sau khi mở từ notification
[ ] Cờ source: "in_app_camera" | "gallery" | "text" | "checkbox"  → lưu, hiển thị nhãn nhẹ
[ ] dHash 128-bit tính client-side, gửi kèm; server so với 60 ngày gần nhất của user
    + proof cùng nhóm trong ngày; Hamming <= 2 → gắn cờ duplicate_suspect
[ ] duplicate_suspect KHÔNG chặn nộp, chỉ hiện badge "quen quen 🤨"
[ ] Nén ảnh client: cạnh dài <= 1440px, JPEG ~0.7
[ ] Bảng sus: (proof_id, voter_id) UNIQUE → 1 sus/người/proof
[ ] Goal flag is_sensitive → ẩn khỏi sus + recap
[ ] Nút report + soft delete proof; retention policy media (mặc định 12 tháng free tier)
[ ] Metrics: % in_app_camera, p50/p90 time-to-proof, % duplicate_suspect
```

_Hết._
