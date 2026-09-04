# E03 — ĐỊNH GIÁ LẠI HƯỚNG APP NATIVE Ở 20 GIỜ/TUẦN

_Ngày viết: 04/09/2026. Ràng buộc cứng: giữ tên **Teemi**; 20 giờ/tuần (~13 giờ code); cơ chế boss CHƯA quyết — thiết kế phải để ngỏ cả hai đường._

> **Câu hỏi thật của tài liệu này:** founder nghiêng về làm app riêng. Ước lượng cũ nói hướng A = 11,0 pw, hướng B = 12,25 pw, hướng D (web) = 6,5 pw. **Có phải người ta thổi phồng con số app để hướng web thắng không?** Tôi kiểm tra lại từng dòng, và trả lời thẳng ở §1.4.

---

## 0. TL;DR — bốn con số

| Câu hỏi | Trả lời |
|---|---|
| Ước lượng app cũ (11,0 / 12,25 pw) có bị thổi phồng để web thắng không? | **KHÔNG. Ngược lại — nó bị ước LƯỢNG THIẾU ~35–45%.** Con số trung thực cho cùng core loop là **12,5–17 pw**, trung tâm **14,3 pw** |
| Bao lâu tới bản 5 nhóm bạn dùng thật, ở 13 giờ code/tuần? | **29–37 tuần lịch ≈ 7–8,5 tháng** (bản không lên store công khai, phát APK + TestFlight) |
| Bao lâu tới bản công khai trên 2 store? | **44–55 tuần lịch ≈ 10–13 tháng** |
| Tiền mặt năm 1 cho hướng app? | **~5,5–8 triệu VND** — tiền KHÔNG phải vấn đề. **Tuần lịch mới là vấn đề** |

Và một số học quyết định toàn bộ mục "làm Android trước cho rẻ":

> Android chiếm **60,38%** thiết bị VN, iOS **39,60%** (StatCounter T7/2026, r02 §1.4).
> P(cả 5 người trong một nhóm bạn đều dùng Android) = 0,6038⁵ = **8,0%**.
> ⇒ **App Android-only phục vụ được 8% số nhóm.** Không có đường tắt "làm Android trước". Sản phẩm nhóm bắt buộc ship 2 nền tảng từ ngày 1.

---

## 1. BẢNG ƯỚC LƯỢNG PERSON-WEEK — KIỂM TRA LẠI TỪNG DÒNG

### 1.1. Quy ước

- 1 pw = **40 giờ code thuần**, người đã quen React Native + Expo + Postgres.
- Phạm vi định giá = **đúng core loop founder mô tả**: chọn kèo → nộp ảnh proof → nhóm thấy → tiến trình chung. **Không** boss, **không** HP, **không** season — vì cơ chế boss chưa quyết, tôi định giá phần *chung cho cả hai đường*. Chi phí thêm nếu chốt có boss: **+1,5 pw** (engine damage + rollover cron + remote config, theo hướng B §10 mục 5) — tôi đã kiểm và con số này hợp lý.
- Ba cột ước lượng: **Lạc quan** (mọi thứ chạy đúng lần đầu) · **Trung tâm** (dùng con số này) · **Bi quan** (gặp 2–3 vũng lầy).

### 1.2. Bảng chi tiết — bản đầy đủ (2 nền tảng, có widget, lên store)

| # | Hạng mục | A ước | B ước | **LQ** | **TT** | **BQ** | Cạm bẫy dễ đánh giá thấp |
|---|---|---|---|---|---|---|---|
| 1 | Setup Expo/EAS, credentials, dev build chạy trên máy thật | (gộp) | (gộp) | 0,3 | **0,6** | 1,0 | Lần đầu tạo provisioning profile + keystore + EAS credentials thường mất 1–2 ngày trọn. Không phải code, nhưng là tuần lịch |
| 2 | Auth Google + Apple, xoá tài khoản trong app | 0,8 | (gộp 1,5) | 0,7 | **1,0** | 1,5 | Apple **bắt buộc** Sign in with Apple nếu đã có Google (Guideline 4.8). Entitlement + native config + test trên 2 OS = gấp đôi công |
| 3 | Schema + RLS + `StorageAdapter` | 0,7 | (gộp) | 0,6 | **0,8** | 1,2 | RLS policy sai thì rò dữ liệu nhóm khác. Cần test tự động, không review bằng mắt |
| 4 | Vào nhóm: deep link + mã 6 ký tự | 1,2* | 1,0 | 0,4 | **0,7** | 1,0 | *A gộp cả trang web preview vào 1,2 pw — tách ra thì phần app-side chỉ ~0,7. Universal Link/App Link cần verify domain, hay hỏng im lặng |
| 5 | Chọn kèo: 8 preset + ô tự viết | 0,3 | 0,5 | 0,2 | **0,3** | 0,5 | — |
| 6 | **Camera → nén → strip EXIF → upload → hàng đợi offline** | 2,0 | 1,5 | 1,8 | **2,5** | 3,5 | **Hạng mục đắt nhất và cả A lẫn B đều ước thiếu.** Offline outbox + retry + resume upload + xử lý app bị ROM kill giữa chừng là bài toán trạng thái thật sự. B ước 1,5 pw là quá lạc quan |
| 7 | Màn Hôm nay + reaction + comment + throttle | 1,0 | 1,0 | 1,0 | **1,3** | 1,8 | Comment free-text kéo theo UI báo cáo/chặn/ẩn — không tách rời được |
| 8 | Tường/lưới tích luỹ + render ảnh share | 0,8 | 1,0 | 0,7 | **1,0** | 1,4 | Render share card trên thiết bị (`react-native-view-shot`) lệch font/scale giữa iOS và Android, phải chỉnh tay 2 lần |
| 9 | **Widget Android** (Glance + native module + đồng bộ dữ liệu) | 0,5 | 0,5 | 0,8 | **1,3** | 2,0 | **Cả A lẫn B ước thiếu hơn 2 lần.** Widget không có framework cross-platform: Glance là Kotlin-only (r05 §1.4). Còn phải test widget trên 3 launcher khác nhau |
| 9b | **Widget iOS** | hoãn | hoãn | 0,4 | **0,6** | 1,0 | 2026 đã dễ hơn: `expo-widgets` cho viết widget bằng React component, nhưng **chỉ hỗ trợ iOS** ([docs.expo.dev](https://docs.expo.dev/versions/latest/sdk/widgets/)) |
| 10 | Push: Expo Push → FCM/APNs, cron nhắc, gộp/throttle, hướng dẫn tắt tối ưu pin theo hãng | 0,4 | 0,75 | 0,6 | **0,9** | 1,4 | Hạ tầng $0, nhưng **độ tin cậy trên ROM VN mới là công việc**. Phải làm local notification backup + onboarding riêng cho Xiaomi/Oppo/Vivo ([dontkillmyapp.com/xiaomi](https://dontkillmyapp.com/xiaomi), [/oppo](https://dontkillmyapp.com/oppo)) |
| 11 | Analytics cấp nhóm + dashboard kill-criteria | 0,4 | 0,5 | 0,4 | **0,5** | 0,7 | — |
| 12 | **An toàn/pháp lý đủ bộ Apple 1.2** (filter chủ động + report + block + contact + EULA + nhật ký moderation + privacy policy) | 0,6 | 1,0 | 0,8 | **1,2** | 2,0 | r06 §6 liệt **11 hạng mục**, trong đó "method for filtering" (blocklist tiếng Việt có dấu/không dấu/teencode + phân loại ảnh) là thứ Apple reject nếu chỉ có nút report. A ước 0,6 pw là không đủ |
| 13 | QA trên máy Android tầm trung thật + sửa lỗi đặc thù ROM | 0,8* | 1,0 | 0,8 | **1,2** | 2,0 | Bug chỉ xuất hiện trên máy 3GB RAM/Android 12 của Việt Nam thì không debug được bằng simulator |
| 14 | **Chuẩn bị + nộp 2 store** (ảnh nhiều kích cỡ, mô tả, privacy nutrition label, age rating questionnaire 5 bậc, Data safety form, điều phối closed test, xử lý 1–2 vòng reject) | (gộp trong 13) | (gộp trong 14) | 0,8 | **1,3** | 2,2 | **Hạng mục bị bỏ quên rõ nhất ở cả A lẫn B.** Đây không phải code, nhưng nó ăn giờ thật và ăn tuần lịch thật |
| 15 | Nội dung/thiết kế: icon, preset, copy, layout share card, ảnh store | 1,5 | (không tách) | 1,0 | **1,5** | 2,2 | — |
| | **TỔNG (2 nền tảng, có widget, lên store)** | **11,0** | **12,25** | **10,8** | **16,7** | **24,4** | |

\* = con số của A gộp nhiều việc, đã tách lại ở cột của tôi.

### 1.3. Ba mức phạm vi — dùng cái nào tuỳ mục tiêu

| Mức | Gồm gì | pw (TT) | Dùng để làm gì |
|---|---|---|---|
| **S1 — Bản chạy trên máy thật** | Mục 1–8 + 10 (push cơ bản) + 13 (QA) + 0,5 nội dung. **Không** widget, **không** store, **không** đủ bộ Apple 1.2 | **9,4** | Đưa cho 5 nhóm bạn: Android phát APK trực tiếp, iOS qua TestFlight |
| **S2 — Bản lên store công khai** | S1 + mục 11, 12, 14 + nội dung đầy đủ | **14,3** | Bản công khai, chịu được review |
| **S3 — Bản có widget 2 nền tảng** | S2 + 9 + 9b | **16,2** | Bản có lá chắn duy nhất đã được kiểm chứng ở VN (Locket) |
| _(+ nếu chốt CÓ boss)_ | engine damage + cron rollover + remote config | **+1,5** | Cộng vào bất kỳ mức nào |

### 1.4. Trả lời thẳng: A và B có bị thổi phồng để D thắng không?

**KHÔNG. Kiểm tra từng dòng cho kết quả ngược lại — A (11,0) và B (12,25) đều ước LƯỢNG THIẾU.**

Ba chỗ thiếu lớn nhất, không phải chỗ nhỏ:

1. **Widget 0,5 pw** — sai ít nhất 2 lần. Không tồn tại đường cross-platform cho widget; Glance là Kotlin-only, WidgetKit là Swift-only (r05 §1.4 nói đúng điều này rồi lại tự ước 0,5 pw ở A §10 — mâu thuẫn nội bộ).
2. **Nộp store gộp chung vào QA 0,8 pw** — chuẩn bị metadata cho 2 store, trả lời bộ câu hỏi age rating mới (5 bậc, bắt buộc khai UGC/messaging/social từ 24/07/2025 — r06 §6), Data safety form của Google, và 1–2 vòng reject là **1,3 pw riêng**, chưa kể tuần lịch chờ.
3. **Apple 1.2 chỉ 0,6 pw ở hướng A** — trong khi chính r06 §6 liệt 11 hạng mục bắt buộc và ghi rõ Apple từ chối app **chỉ có nút report mà không có method for filtering** ([App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)).

**Nhưng có một thiên lệch khác, tinh vi hơn, và founder nên biết:** con số 6,5 pw của hướng D **không đo cùng một sản phẩm**. Hướng D không có widget, không có push của riêng mình, không có reaction trong sản phẩm, không lên store, không chịu Apple 1.2. So 6,5 với 11,0 là so **hai sản phẩm khác nhau**, không phải hai cách hiện thực hoá cùng một sản phẩm.

So sòng phẳng, **cùng một core loop**:

| | Web (Next.js, mở trong Zalo) | Native (Expo, 2 nền tảng) | Chênh |
|---|---|---|---|
| Core loop + màn hình | 3,2 | 3,9 | +0,7 |
| Nhận/nén/upload ảnh | 1,0 | 2,5 | **+1,5** |
| Danh tính | 0,3 (device token) | 1,0 (Google+Apple) | +0,7 |
| Thông báo | 0,3 (mượn noti Zalo) | 0,9 | +0,6 |
| An toàn/pháp lý | 0,8 | 1,2 | +0,4 |
| Widget | **không làm được** | 1,9 | +1,9 |
| Store | 0 | 1,3 | **+1,3** |
| Setup/build/QA thiết bị | 0,5 | 1,8 | +1,3 |
| Nội dung | 1,0 | 1,5 | +0,5 |
| **Tổng** | **~7,1** | **~16,0** | **+8,9 pw** |

**Kết luận trung thực: hướng app đắt hơn hướng web khoảng 8–9 pw, tức ~2,2 lần — chứ không phải 1,7 lần như bộ tài liệu cũ ngụ ý. Bộ tài liệu cũ làm hướng app trông RẺ hơn thực tế, không đắt hơn.**

---

## 2. QUY RA TUẦN LỊCH Ở 13 GIỜ CODE/TUẦN

1 pw = 40 giờ ⇒ **1 pw = 3,08 tuần lịch** ở 13 giờ/tuần.

Nhưng 13 giờ/tuần bị chia thành 3–4 phiên rời rạc. Chi phí "nhớ lại mình đang làm gì" là thật với người làm một mình. Tôi đưa hai kịch bản thay vì giả vờ biết chính xác: **không phạt** và **phạt 20%** (3,85 tuần/pw). [suy luận — không có nghiên cứu đo riêng cho founder solo VN]

| Mức | pw | Tuần lịch (không phạt) | Tuần lịch (phạt 20%) | Tháng | Ngày dự kiến (bắt đầu code 15/09/2026) |
|---|---|---|---|---|---|
| **S1 — chạy trên máy thật, đưa 5 nhóm bạn** | 9,4 | **29 tuần** | **36 tuần** | 6,7–8,3 | **~05/04/2027 → ~24/05/2027** |
| **S2 — lên store công khai** | 14,3 | **44 tuần** | **55 tuần** | 10,1–12,7 | **~20/07/2027 → ~05/10/2027** |
| **S3 — có widget 2 nền tảng** | 16,2 | **50 tuần** | **62 tuần** | 11,5–14,3 | **~31/08/2027 → ~20/11/2027** |
| _+ boss (nếu chốt)_ | +1,5 | +4,6 tuần | +5,8 tuần | | |
| _(đối chiếu)_ Hướng web ~7,1 pw | 7,1 | 22 tuần | 27 tuần | 5,0–6,3 | ~15/02/2027 → ~22/03/2027 |

**Hai điều phải đọc từ bảng này, không được bỏ qua:**

1. **Ở 20 giờ/tuần thì KHÔNG có đường nào nhanh.** Ngay cả hướng web cũng mất 5–6 tháng. Sự khác biệt không phải "web nhanh, app chậm" — mà là **5 tháng vs 8,5 tháng để trả lời cùng một câu hỏi**, và **12,7 tháng nếu muốn lên store**.
2. **Ba thanh chờ nằm ngoài tầm kiểm soát, không đổi được bằng cách code nhanh hơn** — xem §3.

---

## 3. CHI PHÍ HƯỚNG APP PHẢI TRẢ MÀ HƯỚNG WEB KHÔNG PHẢI TRẢ

### 3.1. Bảng định lượng đầy đủ

| Khoản | Tiền | pw | **Tuần lịch chờ (không code được)** | Nguồn |
|---|---|---|---|---|
| **Apple Developer Program** | **$99/năm** (~2,6tr VND), hiển thị bằng VND khi đăng ký | 0 | Duyệt tài khoản cá nhân **24–72 giờ** | [developer.apple.com/support/enrollment](https://developer.apple.com/support/enrollment/), [hoanghamobile — Apple Developer 2026 tại VN](https://hoanghamobile.com/tin-tuc/apple-developer/) |
| **Google Play Console** | **$25 một lần**, không hoàn nếu xác minh trượt | 0 | Xác minh danh tính **2–5 ngày làm việc** (giấy tờ tuỳ thân + có thể phải chụp selfie) | [support.google.com/googleplay/android-developer](https://support.google.com/googleplay/android-developer/answer/6112435), [TesterBee — Play Developer Verification 2026](https://testerbee.com/blog/google-play-developer-verification-2026) |
| **Play: 12 tester × 14 ngày liên tục** — bắt buộc với mọi **tài khoản cá nhân mở sau 13/11/2023**, áp dụng cho từng app cho tới khi có production access | 0đ | ~0,2 (điều phối) | **≥14 ngày lịch, tính từ khi đủ 12 người ĐÃ opt-in thật** (chỉ thêm email vào danh sách là vô nghĩa — mỗi người phải bấm link, bấm "Become a tester", cài từ Play bằng đúng tài khoản đó) | [Play Console Help 14151465](https://support.google.com/googleplay/android-developer/answer/14151465), [testerscommunity.com](https://www.testerscommunity.com/blog/google-play-closed-testing-requirements-2026) |
| **Review app MỚI** | 0đ | 0 | Apple: hãng công bố >90% dưới 24h, thực tế 2026 app mới **2–5 ngày, đỉnh 7+ ngày**. Play: app đầu tiên của developer mới **7–14 ngày** | [lowcode.agency](https://www.lowcode.agency/blog/app-store-review-time), [appstorereview.app — queue delays 2026](https://appstorereview.app/guides/app-store-review-queue-delays-2026), [appbuilder24](https://appbuilder24.com/blog/google-play-review-time) |
| **Review mỗi lần cập nhật** | 0đ | ~0,05/lần | Apple update **12–48h** (thực đo ~8h38 chờ + 1h52 review) | như trên |
| **EAS Build / EAS Update (OTA)** | Free: **15 build/OS/tháng + OTA cho 1.000 MAU + 100 GiB egress**. Vượt → Starter **$19/tháng** | ~0,2 cấu hình | 0 | [docs.expo.dev/billing/plans](https://docs.expo.dev/billing/plans/), [checkthat.ai — Expo pricing 2026](https://checkthat.ai/brands/expo/pricing) |
| **Push — hạ tầng** | **$0** (FCM, APNs, Expo Push đều miễn phí) | 0,9 | 0 | r05 §3.1 |
| **Push bị ROM Xiaomi/Oppo/Vivo giết** | 0đ nhưng **mất một phần người nhận** | +0,3 (local noti backup + onboarding tắt tối ưu pin theo hãng) | 0 | [dontkillmyapp.com/xiaomi](https://dontkillmyapp.com/xiaomi), [/oppo](https://dontkillmyapp.com/oppo) |
| **Đăng nhập** — tránh SMS OTP thì dùng gì? | **$0**: Google Sign-In + Apple Sign-In. (SMS OTP đi VN qua Twilio = **$0,2852/tin**, 10k đăng ký = **$2.852** — r05 §2.2. ZNS nội địa ~300đ/tin, rẻ hơn 26 lần, nhưng cần brandname duyệt hàng tuần–tháng) | 1,0 | 0 | r05 §2.2, §1 |
| **Máy Android tầm trung thật để test** | ~2–4tr VND | 0,4 | 0 | [ước lượng] |
| **Metadata store**: ảnh nhiều kích cỡ, mô tả, privacy nutrition label, age rating 5 bậc, Data safety form | 0đ | 0,8 | 0 | r06 §6 |
| **Đủ bộ Apple 1.2** (filter + report + block + contact + EULA + nhật ký) | 0đ | 1,2 | Reject 1 vòng = mất thêm 1–5 ngày | [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) |
| **TỔNG** | **~5,5–8 triệu VND năm 1** | **~4,8 pw** | **~3–6 tuần lịch thuần chờ đợi** | |

### 3.2. Ba câu trả lời thẳng cho ba câu hỏi cụ thể

**(a) Thời gian duyệt tài khoản Play cá nhân — kiểm chứng 2026.** Xác minh danh tính **2–5 ngày làm việc** (có trường hợp vài giờ). Nhưng **đó không phải rào cản thật**. Rào cản thật là **12 tester opt-in liên tục 14 ngày** trước khi được lên production — quy định vẫn còn hiệu lực năm 2026, đã giảm từ 20 xuống 12 người (12/2024) nhưng **14 ngày không đổi** ([Play Console Help](https://support.google.com/googleplay/android-developer/answer/14151465), [testerscommunity.com — lịch sử quy định](https://www.testerscommunity.com/blog/google-play-12-testers-policy)).

> **Điểm sáng bất ngờ:** 5 nhóm × 5 người = **25 người thật** — Teemi *đã có sẵn* nhiều hơn 12 tester cần thiết. Rào cản này với Teemi rẻ hơn với đa số app. Nhưng nó vẫn là **14 ngày lịch bắt buộc**, và những người đó phải thật sự bấm opt-in.

**(b) Có đường vòng nào cho bản đưa 5 nhóm bạn không? Có, và nó quan trọng.**
Để đưa cho 5 nhóm bạn dùng thật thì **không cần lên store**:
- **Android:** gửi thẳng file APK (hoặc Internal Testing của Play — không bị ràng buộc 12/14 ngày). $0, 0 ngày chờ.
- **iOS:** TestFlight. Cần **$99 Apple**. Internal testing (tối đa 100 người trong team, không cần review) hoặc External testing (tối đa 10.000, cần **Beta App Review** — nhẹ hơn full review nhưng vẫn là một vòng chờ).
⇒ **Bản S1 (9,4 pw) không phải trả $25, không phải qua 12 tester, không phải qua full review.** Đây là lý do tôi tách S1 khỏi S2.

**(c) Còn đường "làm Android trước cho rẻ"?** **Không tồn tại.** Xem §0: chỉ **8,0%** số nhóm 5 người ở VN có toàn bộ thành viên dùng Android. Với sản phẩm mà đơn vị là *nhóm*, một người iPhone là cả nhóm hỏng. Đây là **thuế cấu trúc mà chỉ hướng app phải trả** — web chạy 100% trên cả hai.

---

## 4. APP MUA ĐƯỢC GÌ MÀ WEB KHÔNG CÓ — ĐỊNH LƯỢNG, KHÔNG LIỆT KÊ

| Thứ mua được | Giá phải trả | Giá trị thật | **ĐÁNG với Teemi BÂY GIỜ?** |
|---|---|---|---|
| **Widget màn hình chính** | 1,9 pw = **6–7 tuần lịch** | **Cao nhất trong bảng.** Đây là moat DUY NHẤT đã được kiểm chứng ở thị trường VN: Locket sống bằng widget, 10M+ tải nội địa, App Store Awards Cultural Impact 2022 (r02 §2). Widget biến "phải mở app" thành "liếc là thấy" — xoá bước tốn kém nhất trong funnel hằng ngày | **CÓ — nhưng KHÔNG PHẢI BÂY GIỜ.** Widget khuếch đại một nghi thức đang chạy. Nó không tạo ra nghi thức. Widget gắn vào một sản phẩm chưa ai dùng = 7 tuần đổi lấy 0 |
| **Push notification riêng** | 0,9 + 0,3 pw | Trung bình, và **thấp hơn founder tưởng ở giai đoạn này**. Lý do: kênh thông báo thay thế (noti Zalo khi có người dán card) có **tỉ lệ tới máy 100%**, không bị ROM giết. Push riêng chỉ thắng khi cần chạy tự động **không có con người bấm nút** | **CHƯA.** Giá trị của push tăng vọt ở giai đoạn 2 (khi nghi thức phải tự chạy), gần bằng 0 ở giai đoạn kiểm chứng |
| **Camera mượt trong app** | ~1,0 pw (phần chênh so với `<input type=file>`) | **Thấp.** Chính hướng D đã quyết mở thẳng thư viện ảnh thay vì ép chụp — vì BeReal ép chụp và vẫn chỉ đạt 55% trong cửa sổ 2 phút; nghiêm khắc hoá sớm là rủi ro #1 (r07) | **KHÔNG** |
| **Danh tính bền (không mất tài khoản khi đổi máy)** | 1,0 pw | **Cao hơn founder tưởng.** Đây là **lỗ hổng thật của hướng web** mà tài liệu D nói chưa đủ mạnh: device token trong `localStorage` sẽ mất khi đổi máy, xoá dữ liệu duyệt web, hoặc **khi user mở link bằng webview Zalo lần này và Chrome lần sau — hai kho lưu trữ khác nhau**. Với sản phẩm mà tài sản là ảnh tích luỹ nhiều tháng, mất danh tính = mất toàn bộ giá trị | **CÓ — nhưng mua được rẻ hơn ở web:** magic link qua email/Zalo, hoặc `getUserID` khi đóng gói Zalo Mini App (miễn phí, ổn định theo OA). Không cần app native để có nó |
| **Có mặt trên store để tìm thấy** | 1,3 pw + $124 + 3–6 tuần chờ | **Gần bằng 0 với Teemi.** Tên "Teemi" trả về Temu ở vị trí #1 trên cả App Store VN lẫn US (phản biện #23 đã kiểm chứng trực tiếp). Founder đã chốt giữ tên Teemi ⇒ **chấp nhận rằng store search đóng góp ~0 install vĩnh viễn**. Cold start đến từ founder tuyển nhóm, không từ tìm kiếm | **KHÔNG** (theo đúng quyết định giữ tên) |
| **Cảm giác "sản phẩm thật"** | (đi kèm) | **Hai chiều, không phải một chiều.** Có app = nghiêm túc hơn. Nhưng cũng = **thêm một lần cài, một slot màn hình, một khoản dung lượng trên máy Android 64GB**. r02 ghi: 27 app/tuần cạnh tranh, slot "app xã hội thứ 4" cực khan hiếm. Với người dùng số 2–5 trong nhóm — người chưa tin sản phẩm — "phải tải app" là ma sát thật, không phải uy tín | **KHÔNG ĐO ĐƯỢC — đừng dùng nó làm lý do quyết định** |

**Tổng kết §4:** trong sáu thứ app mua được, **chỉ một thứ có giá trị cao và không thay thế được: widget.** Một thứ nữa (danh tính bền) có giá trị cao nhưng **mua được ở web với giá rẻ hơn**. Bốn thứ còn lại có giá trị thấp *ở giai đoạn hiện tại của Teemi*.

> Nói cách khác: **hướng app hiện đang được trả 8,9 pw để mua đúng một cái widget.** 8,9 pw ở 13 giờ/tuần = **27–34 tuần lịch**. Đó là cái giá của widget, viết trần trụi.

---

## 5. CON ĐƯỜNG LAI — LÀM WEB TRƯỚC RỒI BỌC THÀNH APP

### 5.1. Ba kỹ thuật, đánh giá thẳng

| Cách | Được gì | Mất gì / rủi ro | Chi phí bọc |
|---|---|---|---|
| **A. Next.js web + Capacitor** | Icon trên màn hình chính, **native push (FCM/APNs) thật**, storage bền (không phải localStorage), camera native, lên được cả 2 store. Dùng lại **100%** code UI web | ⚠️ **Rủi ro Apple Guideline 4.2 "minimum functionality"**: Apple từ chối app "chỉ là website đóng gói". Muốn qua thì phải có **lớp native thật**: push, tab bar native, xử lý offline, chia sẻ hệ thống — tức đúng phần công việc mình đang muốn né | **1,0–1,5 pw** bọc + **1,3 pw** store + **0,9 pw** push native = **3,2–3,7 pw** |
| **B. Expo + react-native-web (universal từ ngày 1)** | Một codebase cho cả web lẫn native | ⚠️ **Sai hình dạng sản phẩm.** Sản phẩm giai đoạn 1 là *một link mở trong webview Zalo trên máy Android rẻ*. RN-web đẩy bundle JS nặng vào đúng môi trường yếu nhất. Server-side render card ảnh (satori/@vercel/og) cũng không phải sân của RN-web | Không phải chi phí bọc, mà là **thuế trả trước ~1,5–2 pw** + chất lượng web kém hơn |
| **C. PWA → store (TWA/PWABuilder)** | Play chấp nhận TWA khá dễ | ❌ **Apple không chấp nhận PWA đóng gói trần** (4.2). ❌ **Không có widget.** ❌ Vẫn phải qua $25 + 12 tester + 14 ngày | ~0,5 pw nhưng **chỉ được Android, và không giải quyết vấn đề gì đáng giá** |

Nguồn: [Capacitor — Progressive Web Apps](https://capacitorjs.com/docs/web/progressive-web-apps), [Capacitor Push Notifications API](https://capacitorjs.com/docs/apis/push-notifications), [MobiLoud — webview wrapper và guideline](https://www.mobiloud.com/blog/app-store-review-guidelines-webview-wrapper), [PkgPulse — RN vs Expo vs Capacitor 2026](https://www.pkgpulse.com/guides/react-native-vs-expo-vs-capacitor-cross-platform-mobile-2026).

### 5.2. Phải làm lại từ đầu không? — KHÔNG, và đây là con số

Nếu làm web trước rồi sau đó quyết định viết native thật (không bọc), cái gì sống sót?

| Phần | Dùng lại được? | pw giữ lại |
|---|---|---|
| Schema DB, RLS, quan hệ group/member/goal/proof | **100%** | 0,8 |
| Backend logic: chuỗi/tiến trình, cron, rollover, quy tắc ngày | **100%** | 0,7 |
| Storage adapter, signed upload, TTL, strip EXIF phía server | **100%** | 0,5 |
| Render card ảnh server-side | **100%** | 0,8 |
| Analytics cấp nhóm, dashboard | **100%** | 0,5 |
| ToS/Privacy/quy trình moderation, nội dung, copy, preset | **~90%** | 1,3 |
| **UI/màn hình (React web → React Native)** | **~0%** (viết lại), nhưng **thiết kế + luồng + copy giữ nguyên** | mất ~2,8 |
| **Tổng dùng lại** | | **~4,6 / 7,1 pw = 65%** |

**Kết luận §5, không vòng vo:**
1. **Không phải làm lại từ đầu.** ~65% công của bản web sống sót nguyên vẹn vào bản native, vì phần đắt nhất (schema, logic, storage, pháp lý, nội dung) không phụ thuộc nền tảng.
2. **Bọc bằng Capacitor là con đường lai khả thi nhất về mặt kỹ thuật (3,2–3,7 pw)** — nhưng nó **không** cho widget, và phải vượt rào 4.2 bằng cách làm chính những thứ native mình muốn né.
3. **Điều quan trọng nhất:** những khoản đắt nhất của hướng app (store 1,3 · widget 1,9 · push 0,9 · Apple 1.2 1,2 = **5,3 pw**) **không được tiết kiệm bằng cách làm native trước — chúng chỉ được HOÃN.** Và hoãn chúng là miễn phí nếu nghi thức thất bại, còn trả trước chúng là mất trắng nếu nghi thức thất bại. Đây là lập luận tài chính thuần, không phải sở thích kiến trúc.

---

## 6. RỦI RO PHÁP LÝ SO SÁNH: APP NATIVE vs WEB APP

### 6.1. NĐ 147/2024 — kiểm chứng lại lời khẳng định của option-D §214

**option-D §214 ĐÚNG.** Nghị định 147/2024, Điều 3 định nghĩa mạng xã hội là hệ thống thông tin được thiết lập **trên nền tảng trang thông tin điện tử hoặc ứng dụng mạng**, cung cấp dịch vụ/công cụ cho người sử dụng cung cấp, trao đổi, tương tác, chia sẻ thông tin với nhau. Định nghĩa **bao trùm cả website lẫn ứng dụng**, và **không có ngoại lệ cho nhóm riêng tư**.

Nguồn: [Nghị định 147/2024 toàn văn](https://vanban.chinhphu.vn/?pageid=27160&docid=211654), [LSVN — thuật ngữ về mạng xã hội tại NĐ 147](https://lsvn.vn/nhung-thuat-ngu-ve-mang-xa-hoi-tai-nghi-dinh-147-2024-nd-cp-a150547.html), [Apolat Legal](https://apolatlegal.com/regulations-on-social-media-under-decree-147-2024-nd-cp/).

⇒ **Chọn app hay web KHÔNG thay đổi nghĩa vụ theo NĐ 147.** Ngưỡng ~1.000 người dùng thường xuyên/tháng, nghĩa vụ xác thực bằng SĐT VN hoặc số định danh cá nhân, lưu log ≥2 năm — áp dụng như nhau. Ai nói "làm web để né luật" là hiểu sai luật; ai nói "làm app thì mới bị luật đụng" cũng hiểu sai.

### 6.2. Nhưng app CÓ thêm ba rủi ro mà web không có

| Rủi ro chỉ có ở app | Mức | Chi tiết |
|---|---|---|
| **Apple Guideline 1.2 — UGC** | 🔴 | Đây là **cửa gác cứng**: không đủ bộ (filter chủ động + report + block + contact + EULA) thì **không được phát hành**, không phải "bị phạt sau". Nghĩa vụ pháp lý VN thì web cũng có, nhưng **không ai chặn web trước khi launch**. App biến một nghĩa vụ trải dài thành một cổng phải qua |
| **Guideline 1.1.1 "mean-spirited" + 1.2 "bullying / objectification of real people"** | 🔴 với cơ chế cà khịa/roast | Apple ghi rõ app dùng chủ yếu để bắt nạt hoặc "hot-or-not voting" về người thật **có thể bị gỡ không báo trước**. Cập nhật 06/02/2026 mở rộng 1.2 sang app có chat ngẫu nhiên/ẩn danh (r06 §6.1). **Đây là ràng buộc trực tiếp lên quyết định boss/roast đang để ngỏ** |
| **5.1.1(v) + privacy label + age rating** | 🟠 | Thiếu chức năng xoá tài khoản trong app là một trong 3 lý do reject phổ biến nhất 2026; Apple reject ~25% lượt submit (r06 §6) |

### 6.3. Và một rủi ro web có mà app không có — để công bằng

Hướng web sống nhờ (a) link mở được trong Zalo, (b) card render đẹp, (c) noti của Zalo — **cả ba do VNG kiểm soát**, và Zalo có hệ thống cảnh báo/chặn domain lạ (option-D §8.1). App thì phụ thuộc Apple/Google.

**Cả hai đường đều thuê nhà. Chỉ khác chủ nhà.** Điểm khác biệt thật: chủ nhà store **kiểm tra trước khi cho vào** (mất tuần lịch, nhưng biết trước luật chơi); chủ nhà Zalo **có thể đuổi bất kỳ lúc nào mà không báo** (không mất tuần lịch, nhưng rủi ro đuôi cao hơn). [suy luận]

### 6.4. Rủi ro G1 — không đổi theo nền tảng

Nếu chốt **có boss**, rủi ro bị xếp là trò chơi điện tử G1 ("tương tác giữa nhiều người chơi đồng thời thông qua hệ thống máy chủ" — NĐ 147) tồn tại **y hệt trên web lẫn app**. Nền tảng không phải yếu tố phân loại; **cơ chế** mới là. Biện pháp giảm thiểu (tính HP theo batch cuối ngày thay vì realtime, không bán vật phẩm ảo, không dùng chữ "boss" trong metadata) áp dụng cho cả hai. **Điểm khác duy nhất:** trên app, chữ "boss" trong mô tả store là **bằng chứng công khai, có dấu vết, đọc được bởi cả reviewer Apple lẫn cơ quan quản lý**. Trên web không có metadata nào bị soi như vậy. ⇒ **Nếu chốt có boss, app làm rủi ro pháp lý DỄ NHÌN THẤY hơn, dù không làm nó LỚN hơn.** [suy luận]

---

## 7. KẾT LUẬN

### 7.1. Bao lâu để có bản đưa cho 5 nhóm bạn dùng thật?

**7–8,5 tháng** (S1 = 9,4 pw, phát APK Android + TestFlight iOS, chưa có widget, chưa lên store công khai). Tức khoảng **tháng 4 đến tháng 6/2027** nếu bắt đầu code giữa tháng 9/2026.

Nếu muốn bản công khai trên store: **10–13 tháng** (tháng 7 đến tháng 10/2027).
Nếu muốn có widget — thứ duy nhất đáng tiền trong toàn bộ danh sách ở §4: **11,5–14,3 tháng**.

### 7.2. Con số đó có chấp nhận được không? — Trả lời thẳng: KHÔNG, ở vị trí HIỆN TẠI. CÓ, ở vị trí sau Bước 0.

Ba lý do, xếp theo sức nặng:

1. **Nó tiêu 7–8,5 tháng để trả lời một câu hỏi mà Bước 0 trả lời trong 14 ngày với 0 đồng.** Câu hỏi đó là: *nhóm bạn có tự chạy nghi thức này không?* Nếu câu trả lời là không — và theo r07, ~40% nhóm messaging chết trong tuần đầu là baseline vật lý — thì 9,4 pw là mất trắng, tức **29–36 tuần đời của founder**.
2. **Cơ chế boss CHƯA quyết, mà app là nơi đắt nhất để đổi ý.** Sửa một cơ chế trên web = deploy 3 phút. Sửa trên app = OTA nếu chỉ đổi JS, nhưng **một vòng review 12–48h nếu đụng native**, và toàn bộ hằng số phải nằm trong remote config từ ngày đầu (hướng B §8.2 đã cảnh báo). Founder muốn để Bước 0 trả lời câu hỏi boss — vậy thì **không được xây cái đắt nhất trước khi có câu trả lời**.
3. **8,9 pw chênh lệch đang mua đúng một cái widget** (§4), và widget khuếch đại một nghi thức đang chạy chứ không tạo ra nghi thức.

**Nhưng — và đây là chỗ tôi không đồng ý với cách bộ tài liệu cũ đóng khung vấn đề:**

App **không phải là hướng sai**. Nó là hướng **đặt sai thứ tự**. Bằng chứng nằm ở §5.2: **65% công của bản web sống sót nguyên vẹn vào bản app**. Nghĩa là làm web trước **không phải là đi đường vòng** — nó là trả trước phần dùng chung, và hoãn 5,3 pw phần chỉ-app-mới-cần cho tới khi biết chúng có đáng không.

### 7.3. Điều kiện số để mở khoá hướng app

Viết vào ADR **trước** khi có dữ liệu, không sửa sau:

| Cổng | Ngưỡng | Nếu qua | Nếu trượt |
|---|---|---|---|
| **Bước 0** (14 ngày, thủ công, 0 pw) | ≥50% nhóm còn ≥3 người gửi ảnh ở D14 **VÀ** ≥2/6 nhóm tự nhắc nhau | → làm bản web ~7,1 pw | Dừng. Tiết kiệm 9,4–16,2 pw |
| **Bản web, D28** | group-D28 ≥ 20% trên ≥15 nhóm **VÀ** q ≥ 0,40 | → cân nhắc bọc Capacitor (3,2–3,7 pw) | Sửa nghi thức, không sửa nền tảng |
| **Sau khi bọc, D28 lần 2** | group-D28 ≥ 35% | → **mở khoá widget (1,9 pw)** — đây là lúc widget đáng tiền | Không đầu tư thêm một pw nào vào native |

Con số 35% ở cổng cuối trùng với điều kiện mà chính option-D §10 đặt cho hạng mục "App native + widget". Tôi giữ nguyên, và ghi chú rằng option-D ước hạng mục đó **8–10 pw** — kiểm tra lại thì con số đúng là **12,5–16,2 pw** nếu tính đủ store và Apple 1.2, nhưng chỉ **~9–11 pw** nếu tính là "viết lại UI native trên nền backend đã có" (vì đã trừ 4,6 pw dùng lại). **Ước lượng của option-D không sai nhiều — nó chỉ đúng vì lý do khác với lý do nó nêu.**

---

## 8. GHI CHÚ VỀ ĐỘ TIN CẬY

| Khẳng định | Loại |
|---|---|
| Apple $99/năm, Play $25 một lần, 12 tester/14 ngày, thời gian review, giá EAS, `expo-widgets` chỉ hỗ trợ iOS, NĐ 147 Điều 3 bao gồm cả website lẫn ứng dụng, Android 60,38%/iOS 39,60% VN | **[FACT + nguồn URL]** |
| P(nhóm 5 người toàn Android) = 8,0%; các phép quy đổi pw → tuần lịch | **[tính toán từ FACT]** |
| Mọi con số pw ở cột LQ/TT/BQ | **[ước lượng]** — dựa trên phân rã hạng mục, không có dữ liệu đo từ dự án thật |
| Hệ số phạt 20% cho làm việc rời rạc 13 giờ/tuần | **[ước lượng]** — không tìm được nghiên cứu đo riêng cho founder solo VN |
| Tỉ lệ push bị ROM VN giết (con số %) | **KHÔNG TÌM ĐƯỢC** — dontkillmyapp có xếp hạng định tính cho Xiaomi/Oppo/Vivo nhưng không có số % cho thị trường VN |
| Tỉ lệ reject cụ thể của app UGC nhóm kín ở App Store VN | **KHÔNG TÌM ĐƯỢC** |

---

### Nguồn

- [Play Console Help — App testing requirements for new personal developer accounts](https://support.google.com/googleplay/android-developer/answer/14151465)
- [Testers Community — Google Play Closed Testing Requirements 2026](https://www.testerscommunity.com/blog/google-play-closed-testing-requirements-2026) · [12 Testers Policy — lịch sử 20→12](https://www.testerscommunity.com/blog/google-play-12-testers-policy)
- [Get started with Play Console](https://support.google.com/googleplay/android-developer/answer/6112435) · [TesterBee — Google Play Developer Verification 2026](https://testerbee.com/blog/google-play-developer-verification-2026)
- [Apple Developer — Enrollment](https://developer.apple.com/support/enrollment/) · [Hoàng Hà Mobile — Apple Developer 2026 tại VN](https://hoanghamobile.com/tin-tuc/apple-developer/)
- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [LOW/CODE — App Store Review Time 2026](https://www.lowcode.agency/blog/app-store-review-time) · [AppStoreReview — Queue Delays 2026](https://appstorereview.app/guides/app-store-review-queue-delays-2026) · [AppBuilder24 — Google Play Review Time 2026](https://appbuilder24.com/blog/google-play-review-time)
- [MobiLoud — App Store Review Guidelines: Will Your Webview App Be Rejected?](https://www.mobiloud.com/blog/app-store-review-guidelines-webview-wrapper)
- [Expo Docs — Widgets (iOS only)](https://docs.expo.dev/versions/latest/sdk/widgets/) · [Expo blog — Home screen widgets and Live Activities](https://expo.dev/blog/home-screen-widgets-and-live-activities-in-expo)
- [Expo Docs — Subscriptions, plans, and add-ons](https://docs.expo.dev/billing/plans/) · [checkthat.ai — Expo Pricing 2026](https://checkthat.ai/brands/expo/pricing) · [Stallion — EAS Update pricing at scale](https://stalliontech.io/expo-eas-update-pricing)
- [Capacitor — Progressive Web Apps](https://capacitorjs.com/docs/web/progressive-web-apps) · [Capacitor — Push Notifications API](https://capacitorjs.com/docs/apis/push-notifications) · [PkgPulse — RN vs Expo vs Capacitor 2026](https://www.pkgpulse.com/guides/react-native-vs-expo-vs-capacitor-cross-platform-mobile-2026)
- [Don't kill my app — Xiaomi](https://dontkillmyapp.com/xiaomi) · [Oppo](https://dontkillmyapp.com/oppo)
- [Nghị định 147/2024/NĐ-CP toàn văn](https://vanban.chinhphu.vn/?pageid=27160&docid=211654) · [LSVN — thuật ngữ mạng xã hội tại NĐ 147](https://lsvn.vn/nhung-thuat-ngu-ve-mang-xa-hoi-tai-nghi-dinh-147-2024-nd-cp-a150547.html) · [Apolat Legal](https://apolatlegal.com/regulations-on-social-media-under-decree-147-2024-nd-cp/)
- [StatCounter — Mobile OS market share Vietnam](https://gs.statcounter.com/os-market-share/mobile/viet-nam)
- Hồ sơ nội bộ: `research/r02-vietnam-market.md`, `research/r05-tech-stack.md`, `research/r06-legal-compliance.md`, `plan/option-A-witness.md` §10, `plan/option-B-fixed-boss.md` §10, `plan/option-D-chat-native.md` §10, §214
