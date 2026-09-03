# Đánh giá chiến lược Teemi

> Viết ngày 2026-08-28. Đầu vào: DOC 1 (`docs/00-source/doc-01-product-strategy.md`), 8 file nghiên cứu `r01..r08`, 6 file phản biện `c-*.md`, và bản tổng hợp `_issues-digest.md` (61 red flag + 26 phản biện fatal/major đã qua một vòng phản bác đối kháng).
> Giả định về bối cảnh: founder là team 1 người, bus factor = 1, ngân sách thấp, chưa có pháp nhân.
> Quy ước nguồn: **[FACT]** = có nguồn kiểm chứng được · **[suy luận]** = rút ra từ dữ kiện đã nêu · **[ước lượng]** = con số do tôi hoặc corpus đặt ra, không có nguồn ngoài.

---

## 1. Phán quyết trong 5 câu

1. **Làm — nhưng không làm thứ DOC 1 đang mô tả:** cơ chế "boss hồi máu khi có người miss" và điều kiện "cả nhóm nộp đủ mới có combo" phải bị xoá khỏi tài liệu trong hôm nay, vì đó là lỗi toán học (P(cả 5 nộp) = q⁵ → 1 lần/98 ngày ở q=0,40), không phải lỗi tuning HP boss.
2. **Trong 14 ngày tới không được viết một dòng code sản phẩm nào:** giả thuyết lõi của DOC 1 §7 ("nhóm bạn có quay lại mỗi ngày không?") trả lời được bằng 6 group Zalo, một Google Sheet và một ảnh Canva mỗi tối — nếu nó không hiện ra ở đó, 11,5–33 person-week code cũng không làm nó hiện ra.
3. **Đơn vị sản phẩm là NHÓM SỐNG, không phải install và không phải user** — mọi metric, mọi kill criterion, mọi khoá cohort phải viết bằng đơn vị đó và phải chốt bằng văn bản trước khi có dòng dữ liệu đầu tiên, vì định nghĩa "nhóm sống" đã trôi ngay trong chính repo này (r04 §13 nói ≥3 người, r04 §64 nói ≥2 người, cách nhau 50 dòng, chưa có một user nào).
4. **Đổi tên trước khi có user đầu tiên và đưa "boss" ra khỏi mọi câu bán:** hôm nay chi phí đổi tên bằng 0, sau launch là mất toàn bộ brand equity; và cùng một hành động đó cũng cắt luôn phần lớn rủi ro bị xếp loại trò chơi điện tử G1 theo Nghị định 147/2024.
5. **Gọi đúng tên tham vọng ngay bây giờ:** trần doanh thu VN-only ước ~2,6 tỷ VND/năm ở 1 triệu MAU (r08) nghĩa là đây là *small profitable business hoặc portfolio piece*, không phải venture business — nếu founder xây Teemi để gọi vốn hoặc để exit, chiến lược này sai từ ngày 1 và nên dừng bây giờ chứ không phải sau 12 tháng.

---

## 2. Điều DOC 1 đã đúng

Đây không phải phần khen cho lịch sự. Sáu thứ dưới đây vững vì có bằng chứng đứng sau, và founder nên bảo vệ chúng khi cắt scope.

**2.1. "Mỗi người một kèo" là khoảng trống thật.**
r01 khảo sát 16 app và không tìm được app nào giải bài "nhóm bạn ngẫu nhiên ngoài đời, mỗi người một cuộc sống khác nhau, vẫn có một nghi thức chung". Apple Fitness Competitions gần nhất nhưng chỉ 1:1 và chỉ đo vận động. Habitica bắt cả party dùng chung một hệ đo; BeReal/Locket/Yope không có mục tiêu cá nhân nào. **[FACT — r01]** Đây là nửa đúng của luận đề lõi và là thứ duy nhất trong sản phẩm không copy được từ ai. Giữ nó.

**2.2. Chọn đúng tệp người dùng và đúng hình thái nhóm.**
Nhóm nhỏ, riêng tư, 4–6 người, Gen Z — đây là tệp DUY NHẤT đang thắng trong toàn bộ dataset: Yope 2,2M MAU / 800k DAU / D7 = 40% / tăng 30x trong 6 tháng, 70–80% tăng trưởng organic **[FACT — TechCrunch 24/02/2025]**; Locket 91M cài, ~9M DAU, **có lãi từ 2024** với chỉ $12,5M gọi vốn, hạng #4 social app tại VN với 10M+ lượt tải nội địa **[FACT — TechCrunch 06/08/2025, 42matters]**. Ngược lại mọi app public-feed cùng thời đều chết. DOC 1 §9.1 chọn đúng.

**2.3. §11.1 — không khoá core ritual sau paywall.**
Đúng, và lý do mạnh hơn founder viết: r08 kết luận **không có kịch bản nào cho LTV/CAC ≥ 1 trong năm đầu**, kể cả kịch bản lạc quan phi thực tế vẫn chỉ đạt 0,79 **[FACT — r08 §264]**. Nghĩa là organic/share card là kênh acquisition duy nhất có unit economics dương. Spotify Wrapped miễn phí không phải vì hào phóng mà vì tính chia sẻ chính là hình thức thanh toán.

**2.4. §10.2 — bộ lọc 3 câu hỏi cho mỗi feature.**
Đây là quản trị định tính thật, và nó tốt hơn phần lớn tài liệu chiến lược indie. Vấn đề duy nhất: chưa ai chĩa nó vào chính DOC 1. Nếu áp §10.2 nghiêm khắc lên §11.2, phần lớn "free core" tự rụng — weekly recap, highlight, Memory Capsule đều trượt câu hỏi 1 ("nó có làm nhóm mở app MỖI NGÀY không?").

**2.5. §12.7 — giới hạn media, nén, không lưu video dài, free storage có hạn.**
Đúng và khớp với mô hình đã kiếm được tiền thật: Day One (doanh thu ~$400k/tháng theo Sensor Tower qua r08) cho **unlimited text entries + unlimited journals miễn phí**, và đặt paywall ở đúng chỗ có chi phí biên — số ảnh/entry, sync đa thiết bị, transcription **[FACT — dayoneapp.com/pricing, verify 2026-08-28]**. §12.7 đã đúng trong khi §11.4 lại viết ngược (xem mục 6).

**2.6. Hai quyết định nhỏ nhưng đúng:** không gọi Duo là "Crush Mode" (§9.2) — tránh lệch use case sang dating; và context isolation mặc định giữa các nhóm (§12.5) — đúng, và rẻ, vì nó chỉ là cột `group_id` + RLS policy mà một app private-first phải viết dù có đa nhóm hay không.

**2.7. Câu chốt "build một social ritual trước, không build một feature platform" đúng.** Vấn đề là chính DOC 1 mô tả một feature platform rồi gọi nó là ritual.

---

## 3. Điều DOC 1 sai hoặc rủi ro cao

Xếp theo mức nghiêm trọng thực tế (kết hợp: xác suất xảy ra × chi phí sửa sau × mức độ không thể đảo ngược).

| # | Vấn đề | Cơ chế thất bại | Bằng chứng | Hướng sửa | Sửa được hay đổi hướng |
|---|---|---|---|---|---|
| 1 | **§7 bước 6: "boss mất máu hoặc hồi máu"** | q = tỉ lệ Active nộp proof/ngày ≈ 0,35–0,55 **[ước lượng]**. Ở q=0,45, n=5 → kỳ vọng 2,75 người miss/ngày → boss hồi máu **mỗi ngày**, sau 7 ngày HP cao hơn ngày đầu. Nhóm nhìn thấy bằng chứng trực quan rằng nỗ lực của họ vô nghĩa, trong tuần đầu tiên | Số học q⁵ **[FACT]**; Habitica chạy boss chung 10+ năm với HP **đơn điệu giảm** **[suy luận mạnh từ cơ chế Habitica]**; r01 §176 và r03 §363 đã khuyến nghị bỏ hồi máu từ trước khi DOC 1 được viết lại | `boss_hp(t) = HP0 − Σ(damage)`, đơn điệu giảm. Miss chỉ làm **hệ số damage/ngày giảm** (multiplier = 0,6 + 0,4 × tỉ lệ nộp hôm nay), không bao giờ cộng HP | **Sửa được — 1 dòng điều kiện, làm hôm nay.** Không thương lượng |
| 2 | **Combo/critical hit chỉ mở khi CẢ NHÓM nộp đủ** | Ở q=0,40 và n=5, full house xảy ra 1,02%/ngày = **1 lần/98 ngày**. Trong một season 28 ngày, nhóm thấy khoảnh khắc đỉnh cao 0–2 lần. Cả sản phẩm được xây quanh một sự kiện gần như không tồn tại | Bảng q⁵: q=0,60 vẫn chỉ 7,78% (1 lần/13 ngày) **[FACT — số học]**. BeReal, sản phẩm ép buộc thời gian nhất từng tồn tại, chỉ đạt 55% user đăng trong cửa sổ 2 phút **[FACT — bereal.com/ads/audience]** | `combo = ceil(0.6 × số Active)`, tối thiểu 2. Ở n=5 → 3/5. Cùng q=0,40: từ 1 lần/98 ngày lên **1 lần/3,2 ngày — cải thiện 31 lần** | **Sửa được — đây là thay đổi đòn bẩy cao nhất trong toàn bộ backlog.** Nếu chỉ được làm một việc tuần này, làm việc này |
| 3 | **Đơn vị đo là user, và định nghĩa "nhóm sống" chưa chốt** | Nhóm 5 người mất 4 người → user retention còn 20% nhưng nhóm đã chết 100%. Founder nhìn D7 user 35%, thấy ổn, trong khi 60% nhóm đã tụt dưới 3 người active → mọi quyết định sản phẩm tiếp theo đều sai. Khi không chốt định nghĩa trước, người ta sẽ vô thức nới nó ("≥2 người cũng tính") để qua ngưỡng | r04 §13 định nghĩa group activation = ≥3 người; r04 §64 định nghĩa Group D7 = nhóm còn ≥2 người. **Hai định nghĩa khác nhau, cùng một file, cách nhau 50 dòng, chưa có user nào** **[FACT — đọc file]** | ADR chốt cứng: `group_alive` = **≥3 thành viên nộp proof trong 7 ngày gần nhất** (dùng cho kill/tiếp); `duo_alive` ≥2 đo song song nhưng **KHÔNG được thay thế**. Khoá cohort = `group_id` | **Sửa được — 10 phút viết, nhưng phải làm TRƯỚC dòng tracking đầu tiên.** Sửa sau 3 tháng = mất toàn bộ dữ liệu lịch sử |
| 4 | **Không tồn tại một metric phát hiện tác hại nào** trong cả DOC 1 lẫn 8 file research | Nhóm có một người ăn 70% số roast vẫn cho reaction density cao và group retention tốt — cho tới ngày người đó rời và nhóm sập. Trong dashboard, sự kiện này xuất hiện cùng bucket với "nhóm chết vì chán" → founder kết luận "cần thêm feature giữ chân" → đầu tư vào đúng hướng làm vấn đề tệ hơn | Grep toàn bộ `docs/research/` cho mọi biến thể metric an toàn: **không có kết quả nào** **[FACT — đọc repo]** | 4 event + 1 form, tổng <1 ngày công: `roast_received` (tính `max_share` 7 ngày, chỉ khi tổng roast ≥10), `member_left{roasts_received_48h, misses_7d, was_kicked}`, `report_created/resolved`, `safety_screen_shown{reason_bucket}` (counter tổng hợp, không user_id), + exit survey 1 câu có ô free-text | **Sửa được, gần như miễn phí — nhưng nếu bỏ qua thì mọi phản biện khác trở nên KHÔNG THỂ kiểm chứng bằng thực nghiệm** |
| 5 | **§8 liệt kê "Boss hồi máu vì mày đấy" như ngôn ngữ nhóm đáng mơ ước** | Đây là cơ chế thiết kế DUY NHẤT trong toàn sản phẩm biến một lần miss của một người thành **mất mát ĐÃ CÓ** của bốn người khác. Tổn thất nằm ở quan hệ, không nằm trong app — nên không patch được sau | Meta-analysis group contingency (Maggin, Pustejovsky & Johnson 2017) liệt kê scapegoating, sabotage, negative peer pressure là rủi ro đã biết của interdependent contingency **[FACT]**; r03 §380 gọi đây là "hệ quả cấu trúc, không phải tai nạn" | 3 tầng: (a) bỏ hồi máu (mục 1); (b) reframe — khi combo hụt, hiện nút "Ai đỡ hộ được không?" cho phép thành viên khác tặng đòn thay, chuyển từ contingency trừng phạt sang contingency hỗ trợ; (c) API chỉ trả `damage_today` + `contributors[]` để **app không bao giờ tự phát ngôn quy trách nhiệm** | **Cơ chế sửa được. Nhưng đừng tự lừa: nhóm 5 người luôn suy ra được ai thiếu trong 2 giây.** Ràng buộc API chặn phát ngôn của app, không chặn suy luận của người |
| 6 | **Pháp lý: ngưỡng MXH quá thấp + boss chung khớp mô tả G1** | ~1.000 người dùng thường xuyên/tháng ≈ **200 nhóm 5 người** → đã phải xin Giấy phép MXH (30 ngày làm việc xử lý, đòi pháp nhân VN + tên miền .vn + máy chủ VN + nhân sự VN quản lý nội dung + log 2 năm). "Nhiều người chơi tương tác đồng thời qua hệ thống máy chủ" là mô tả **nguyên văn** G1 | r06 §2.2, xác nhận bởi 2 nguồn độc lập (Vạn Luật, Thư viện Pháp luật) **[FACT — nhưng chưa trích được nguyên văn Công báo; cần luật sư]**; r06 §112–117 cho G1 | (a) Dưới ngưỡng, nghĩa vụ chỉ là **Giấy xác nhận thông báo** — nhẹ hơn nhiều; đặt trigger nộp hồ sơ ở **500 người dùng thường xuyên/tháng**. (b) Boss rời khỏi mọi câu bán, App Store description, metadata; không chọn category Games; không dùng chữ "game"/"kèo" đối ngoại. (c) Hỏi luật sư **đúng 2 câu** ngay tuần này | **Cơ chế giữ được, cách trình bày phải đổi.** Lưu ý: rủi ro này chỉ bắn khi thành công — nó là rủi ro của người thắng |
| 7 | **Cold start: DOC 1 §7 bước 1 "User tham gia nhóm" che giấu một funnel nhân** | Cần ≥3 người cùng cài, cùng onboard, cùng nộp proof trong 48h. Với mỗi bước hoàn thành 85%: 0,85⁶ = 37,7%/người → 0,377⁴ = **2,0%** cho một nhóm 5 người | Số học **[FACT]**; r04 độc lập xác nhận cold start là rủi ro #1; Poparazzi chết vì solo value = 0 **[FACT — r01]** | (a) **Bỏ ràng buộc ≥3 người để BẮT ĐẦU** — nhóm 1–2 người vẫn chạy đủ proof + reaction + widget + recap, boss hiển thị dạng "boss tập luyện" không thua được. Xoá số hạng 0,735⁴ khỏi funnel. (b) Kèo ép xuống **1 chạm**: 8 preset + ô tự viết, bỏ 3 trường if-then khỏi onboarding. (c) Web preview chơi được (1 route Next.js read-only, ~3–5 ngày). (d) Form beta bắt nhập **tên 3 người bạn + link group chat**, chỉ approve khi đủ 3 | **Sửa được phần lớn — nhưng ~40% nhóm messaging chết trong tuần đầu là baseline vật lý** (Qiu et al. WWW 2016, toàn bộ log WeChat) **[FACT]**. Không chiến thuật nào xoá được con số này |
| 8 | **Tên "Teemi"** | Gõ `teemi` vào App Store VN và US → kết quả #1 là **Temu**, không có app nào tên Teemi ở bất kỳ vị trí nào. Tệ hơn: `temi` (có 2 app tên đúng ở #3 và #5) vẫn bị Temu đè #1; `tumi`, `tuma` cũng → Temu #1. Cả họ hình dạng t-nguyên âm-m-nguyên âm đều bị hút | Probe trực tiếp itunes.apple.com/search 2026-08-28 **[FACT, với cảnh báo: đây là endpoint metadata legacy, không phải thuật toán ranking on-device]**. Nhóm đối chứng: `locket`→Locket #1, `yope`→yope #1, `finch`→Finch #1 — exact title token thắng cả giant | Đổi tên, với quy trình 30 phút: (a) itunes search + Play search trả **≤2 kết quả** và không map sang app lớn nào; (b) `.com` hoặc `.vn` mua được **hôm nay**; (c) handle TikTok + Instagram trống; (d) nói tên qua điện thoại cho 10 người, **≤2 người gõ sai**. Shortlist đã sàng: **Chụm/Chum, Chumi, Rusi** | **Sửa được trong một buổi chiều, chi phí ≈ 0 — nhưng CHỈ trước khi có user.** Lý do đúng để đổi không phải "rủi ro sinh tử" mà là **bất đối xứng chi phí** |
| 9 | **Sáu câu định vị = không có câu nào** | §1, §6.2 (ba câu), §6.3, §6.4, §13. Câu được chọn ở §13 dẫn đầu bằng "kèo" + "boss" — tức chính câu đang được chọn mang cả misread (Linh nghe "app đánh boss" → nghĩ là game → không cài) lẫn rủi ro pháp lý (G1). "Kèo" đứng một mình trong tiếng Việt Gen Z gợi trước hết **kèo cá độ** | Đứt gãy truyền miệng bậc 3: Nam phải tái tạo 3 khái niệm mới từ trí nhớ, sẽ bỏ 2 và giữ cái dễ nhớ nhất **[suy luận]**. So sánh: Locket = 10 từ / 0 khái niệm mới; Teemi = ~24 từ / 3 khái niệm mới | Chọn **một** câu ≤15 từ, 0 khái niệm mới, không chứa "kèo"/"boss"/"ritual"/"challenge". Đề xuất: *"Nhóm bạn thân, mỗi ngày mỗi đứa gửi 1 tấm ảnh chứng minh đã làm điều mình hứa."* Câu hai là thứ khác biệt hoá thật, không phải thứ vui nhất: *"Ai không nộp thì cả nhóm biết."* Xoá §6.2/§6.3/§6.4 khỏi file | **Sửa được. Boss phải rời khỏi câu bán và ở lại trong sản phẩm** — đây là thay đổi định vị quan trọng nhất |
| 10 | **Zalo hút mất phần thưởng, Teemi giữ lại nghĩa vụ** | Nghĩa vụ (nộp proof) ở lại trong Teemi; phần thưởng (được cà khịa, được cười) rò rỉ về Zalo, nơi có sticker, voice, meme, free-text. Cà khịa bằng template luôn thua cà khịa tự do | 98% Gen Z VN dùng Zalo hằng tuần, 79,6M MAU, >2,1 tỷ tin nhắn/ngày; người Việt dùng ~27 app/tuần, top 6 app ăn gần hết **[FACT — r02]** | Câu hỏi sống-chết: *cái gì trong Teemi KHÔNG thể screenshot vào Zalo?* Có đúng 3 ứng viên: **(a) widget** — trạng thái sống; **(b) timeline tích luỹ** — hàm của thời gian, không của nội dung; **(c) trạng thái boss dùng chung real-time** — Zalo không có state. Cả ba vào MVP. Và biến rò rỉ thành phân phối: mọi card render dễ crop, chữ to, nhúng deep-link ở chân | **Sửa được — nhưng phải giải mâu thuẫn r04 (widget P0) vs r05 (hoãn v1.1).** Đáp án: widget **Android** v1 qua `react-native-android-widget` (có Expo config plugin, ~0,5 pw, phủ >85% thị trường VN), iOS v1.1 |
| 11 | **Kinh tế: payer rate trong r08 giả định 12% của active** | r08 §7.2 cột "Cơ sở": 10.000 active → 1.200 payer = **12%**, tức gấp 3,4–3,75 lần Discord (3,2–3,6% MAU) ở một thị trường mà chỉ 7–10% game user VN từng trả một đồng nào **[FACT — Antom qua r02]**. Sửa về 3,5% → doanh thu cơ sở rơi từ 259tr → ~75tr/năm, LTV/CAC từ 0,18 → ~0,05 | Đọc chính bảng r08 **[FACT]** | (a) Sửa spreadsheet về ≤3,5% MAU. (b) **Cắt fixed cost xuống <$50/tháng trước khi làm bất cứ điều gì khác** — cấu hình sống sót ở 5k DAU ≈ $28/tháng (PocketBase VPS $6 + R2 $7 + FCM $0 + OTA tự host + Sentry free + Apple/domain $10). (c) Đo bằng **doanh thu/DAU/tháng**, mục tiêu ≥$0,03 | **Chi phí sửa được ngay. Trần doanh thu VN-only KHÔNG sửa được** → phải đổi kỳ vọng, không đổi sản phẩm |
| 12 | **Không có phép đo willingness-to-pay nào ở beta** | DOC 1 + r08 §9.2 chỉ đặt MỘT tiêu chí ra khỏi beta: D30 nhóm ≥25%. Founder sẽ kết thúc beta biết chính xác nhóm có quay lại không nhưng không biết gì về việc có ai rút ví không — và WTP đỉnh ở **cuối season 1, ngay sau khi hạ boss**, cửa sổ đó không mở lại trong cùng cohort | Geneva: retention tốt, nhóm bạn yêu app, Bumble mua $17,5M, tạo ra **0 đồng**, đóng cửa 9/2025 **[FACT]**. Retention không phân biệt được Locket với Geneva | **Tiền thật, không fake-door.** Ở màn hình ngay sau khi nhóm hạ boss season 1: "Founding Crew — 1.000 suất, 690.000đ trọn đời cho nhóm ≤6", qua IAP thật + RevenueCat entitlement server-side. Ngưỡng viết bằng **tiền tuyệt đối**, không bằng tỉ lệ: sau 8 tuần, doanh thu thực nhận/nhóm-hoàn-thành-season < 50.000đ → giả thuyết B2C subscription chết | **Sửa được — nhưng phép đo phải sẵn sàng TRƯỚC tuần 4 của beta**, không phải sau |
| 13 | **Vị thành niên: age gate tự khai + "Báo Thủ" + vote "sus"** | Nhóm bạn cấp 3 là phân khúc viral nhất (§9.1 tự nhắm vào đó), age gate tự khai bypass trong 5 giây, và ranking tiêu cực trong cộng đồng khép kín mà nạn nhân không thoát ra được **đọc như mô tả peer bullying** với một App Reviewer không có ngữ cảnh văn hoá cà khịa Việt | Apple 1.2 nguyên văn: app "**end up being used primarily for**... bullying do not belong on the App Store and **may be removed without notice**" **[FACT]**. Luật ANM 116/2025 Điều 16.2 (hiệu lực 01/07/2026) buộc cha mẹ đứng tên cho <16; phạt xử lý dữ liệu trẻ em trái phép tới 3 tỷ đồng **[FACT về mức phạt, r06 §226]** | **Minor-safe mode ở CẤP NHÓM**: nếu BẤT KỲ thành viên nào khai <18, toàn nhóm khoá cứng vào chế độ an toàn, nhóm không tắt được. Biến age assurance từ bài toán *xác minh* (không giải được) thành bài toán *xác suất* — chỉ cần 1/5 người khai đúng là cả nhóm được bảo vệ. Cộng: 4 thành phần Apple 1.2 (filter + report SLA 24h + **block user thật** + contact công bố), xoá tài khoản trong app, feature flag tắt roast server-side <5 phút, 1 trang "Safety by design" gửi kèm App Review notes | **Sửa được, và toàn bộ gói fix đều rẻ. Nhưng nó fatal NẾU launch mà không làm** — đây là một điều kiện, không phải một bản án. Lưu ý dịch thuật: "Slacker of the Week" trong store listing tiếng Anh là dòng đầu tiên reviewer nhìn thấy |
| 14 | **Người rời nhóm / bị đá: DOC 1 không có MỘT DÒNG nào** | Minh bị vote kick ở tháng 8. Timeline còn 240 ảnh có mặt Minh. Minh yêu cầu xoá. NĐ 356/2025 cho 20 ngày; NĐ 147/2024 buộc lưu log 2 năm; Điều 32 BLDS 2015 quy định dùng hình ảnh cá nhân phải có sự đồng ý. Bốn người kia đã trả tiền cho chính kho ảnh đó | r06 §7 đã giải phần lớn phần xoá dữ liệu; nhưng **Điều 32 BLDS, nghi thức kick, và disclosure trên paywall hoàn toàn vắng mặt trong cả DOC 1 lẫn 8 file research** **[FACT — grep repo]** | (a) Hai nút, hai ngữ nghĩa, không bao giờ gộp: "Rời nhóm" vs "Rời nhóm + xoá dấu vết của tôi". (b) Xoá phân tầng: media + PII + nội dung do user tạo xoá cứng; event đã ẩn danh giữ lại; log kỹ thuật tối thiểu theo luật. (c) Gỡ toàn bộ media **do người đó ĐĂNG** (không cần tag, không cần face detection — face detection giết miễn trừ Điều 38 ngay lập tức). (d) Kick sinh notification + 7 ngày grace export ZIP, cần đa số tuyệt đối. (e) Danh hiệu tiêu cực của người rời **xoá tự động**. (f) Một dòng trên màn thanh toán: "Kho ký ức có thể thay đổi nếu thành viên yêu cầu xoá dữ liệu của họ" | **Phải chốt TRƯỚC dòng code lưu ảnh đầu tiên.** Migration schema để hỗ trợ xoá phân tầng sau khi đã có 240 ảnh và đã thu tiền tốn hơn 10 lần |
| 15 | **Mùa vụ: DOC 1 §12 không nhắc một chữ** | Tết Âm (10–20 ngày) + mùa thi HK1 (3–4 tuần) + mùa thi HK2/THPT QG (5–6 tuần) = **~10–13 tuần/năm, tức 20–25% số ngày trong năm** là vùng mà "nghi thức hằng ngày" không thể tồn tại — không phải vì sản phẩm dở mà vì đời sống người dùng không cho phép | r02 đã cảnh báo Tết là "nguy hiểm nhất" **[FACT]**; ba cửa sổ là **[suy luận từ lịch VN]** | Chấp nhận sự thật: **Teemi không phải app daily quanh năm, nó là app 2–3 mùa/năm.** Thiết kế đúng: season 28 ngày → **ngủ đông có chủ đích** (boss ngủ, timeline vẫn xem được, không tính miss) → season mới với push dạng "tin tức", không phải push "nhắc nợ" | **Phải đổi cách nghĩ về sản phẩm.** Nếu không chấp nhận, Tết đầu tiên sẽ xoá 60–80% DAU trong 2 tuần **[ước lượng]** và founder sẽ tưởng sản phẩm hỏng |
| 16 | **Duo (n=2) được quảng cáo là "retention tốt"** | Trong nhóm 5, người bị roast có 3 nhân chứng có thể can. Trong Duo, roast là 1:1, riêng tư, không nhân chứng, và người bị áp lực không thể rời mà không phá vỡ chính quan hệ đó. Retention "tốt" của Duo có thể một phần đến từ việc **người ta không thoát ra được** | **[suy luận]** — không có dữ liệu định lượng, nhưng cơ chế mô tả đúng cấu hình coercive control | Duo: tắt sus và ranking mặc định, **không cho bật lại**. Kèo luôn self-authored, enforce ở DB constraint (`goals.author_id = goals.owner_id`). "Rời và chặn" một chạm, không thông báo. **Không hiển thị "last active"/"đang online" ở bất kỳ đâu trong app** | **Sửa được, rẻ. Nhưng phải làm ngay ở MVP** vì Duo sẽ là hình thái phổ biến nhất khi nhóm 5 co lại |
| 17 | **Goal nhạy cảm: app THƯỞNG cho hành vi hạn chế** | Linh 17 tuổi đặt kèo "ăn dưới 1200 kcal", chụp ảnh bữa ăn mỗi tối, nhóm thả 🔥, boss mất máu, streak lên 21. Teemi vừa cung cấp một reinforcement schedule **hằng ngày, có khán giả, có điểm số** cho hành vi hạn chế ăn. Roast chỉ là lớp trên cùng — vấn đề gốc không biến mất kể cả khi bỏ sạch cà khịa | Nền dịch tễ VN có tồn tại (Zelkowitz 2022, NAMHS Lancet 2024) **[FACT theo r03/c-social-harm, chưa verify trực tiếp được nguyên văn]** — nhưng lập luận không phụ thuộc vào độ chính xác con số, chỉ cần tỉ lệ khác 0 ở tuổi 16–18 | (a) **Ràng buộc kiến trúc**: mọi roast template, recap copy, notification, share card chỉ tham chiếu **TRẠNG THÁI** (`submitted`/`not_submitted`/`late`/`streak`), **KHÔNG BAO GIỜ** tham chiếu nội dung goal — kèm test tự động quét template bank tìm `{goal_text}`. (b) Cấm goal định lượng cơ thể (cân nặng/calo/số đo) trong ToS + blocklist ~150 từ khoá client-side. (c) **Streak và damage bị chặn trần theo NGÀY, không cộng dồn theo cường độ** — người ăn 1200 kcal và người ăn 800 kcal nhận cùng 1 hit. Không được có đường nào để "làm gắt hơn" đổi lấy phần thưởng lớn hơn | **Sửa được, và (a) là fix rẻ nhất + an toàn nhất + tốt-cho-compliance nhất trong toàn bộ danh sách.** Nó giải luôn mâu thuẫn pháp lý ở mục 6.4 |
| 18 | **"MVP cực rõ, cực nhỏ" (§10.1) vs bảng feature thật** | §7 flow 9 bước + §11.2 free core 9 hạng mục + §11.3 14 tính năng premium + §12.4/§12.5 safeguard. Đếm trung thực (gộp reaction/sus/roast thành 1 bảng, gộp daily/weekly recap thành 1 engine, gộp Timeline/Capsule/highlight thành 3 view trên `proofs`) ra **~7–8 hệ thống thật ≈ 11,5 pw** — vẫn là 3,5–4 tháng cho 1 người ở hiệu suất thực tế | c-scope §9 bảng 11,5 pw **[ước lượng]**; tiền lệ đội ngũ: BeReal 2 người, Locket 1 người **[FACT]** | Trần scope đặt theo **NGÀY LỊCH**, không theo person-week ("beta phải chạy trước 15/12/2026") — trần pw tự lừa mình được bằng cách định nghĩa lại pw, ngày lịch thì không. Cộng luật đánh đổi **1-1**: mọi feature mới phải cắt một feature đang có | **Sửa được bằng kỷ luật, không bằng kỹ thuật.** Rủi ro thật không phải "thị trường đóng cửa sau 6 tháng" mà là (a) động lực của một người suy giảm khi không có phản hồi từ user thật, (b) mỗi tuần code trước khi có tín hiệu là một tuần học được số 0 |
| 19 | **Moat = 0 trong 6 tháng đầu, và khoảng trũng tháng 5–10 không có kế hoạch** | Novelty hết ở tháng 4–6; ký ức tích luỹ chưa đủ nặng để tạo switching cost trước 6–12 tháng; sponsor chưa tới; premium chưa bán được. **Mọi app trong bảng r01 đều chết đúng ở đó** | 0/7 app social ritual viral Gen Z giữ được đà; BeReal −48% DAU trong ~4 tháng; Gas 1M DAU → ~2.900 tải/tháng trong 12 tháng; Poparazzi 4M MAU → ~2.500 **[FACT — r01]** | Dữ liệu chứa cả toa thuốc: r01 kết luận **Locket là app duy nhất chưa từng sụp, VÌ nó là utility, không phải novelty**. Nên: **build lớp utility ở v1** (widget "3/5 nộp rồi, còn mày") — nó vẫn hoạt động sau khi boss hết buồn cười. Và Memory Capsule phải chứa **artifact do nhóm tự tạo** (voice note, biệt danh, caption, chuỗi reaction) — thứ Google Photos không có và không bao giờ có; ảnh thuần thì tái tạo được | **Sửa được về hướng, nhưng không có gì đảm bảo.** Đây là chỗ founder nên khiêm tốn nhất |

---

## 4. Bốn thứ có thể giết dự án (theo thứ tự khả năng xảy ra)

Cảnh báo trước: các con số xác suất dưới đây là **[ước lượng]** của tôi, hiệu chỉnh theo base rate của category (0/7 app social ritual viral Gen Z giữ được đà; ~40% nhóm messaging chết trong tuần đầu; D30 social median 3,11–3,9% **[FACT]**). Chúng không độc lập với nhau — xác suất sống sót qua cả bốn thấp hơn tích các xác suất riêng lẻ.

### 4.1. Nhóm không hình thành, hoặc chết theo cascade trong 2 tuần đầu — **~55–65%**

**Cơ chế.** Đơn vị sản phẩm là nhóm, nhưng cái chết của nhóm không diễn ra dần: một người bỏ → những người còn lại thấy bất công → tự giảm nỗ lực để khỏi làm "thằng ngu" (sucker effect) → nhóm sập trong vài ngày. Mô hình 2 lớp cho P(nhóm 5 người còn ≥3 Active ở D30) nằm trong dải **12,5%–19,1%** **[suy luận từ r04 + số học]** — tức đầu cao vẫn dưới ngưỡng 25% mà r08 tự đặt làm tiêu chí sống.

**Thời điểm lộ ra.** D7–D14 của Bước 0, hoặc D7–D14 của beta. Sớm hơn mọi rủi ro khác.

**Dấu hiệu sớm (theo thứ tự xuất hiện):**
- Trong Bước 0: **không nhóm nào tự nhắc nhau "nộp proof chưa" mà không có founder khơi mào** trong 14 ngày. Đây là tín hiệu sớm nhất và rẻ nhất.
- `installs_per_activated_group` > 15 trên 200 install đầu (activated = nhóm có ≥3 người nộp proof trong 48h).
- Ngày chết trung vị của nhóm < D14.
- Số nhóm tụt xuống 2 người trong tuần đầu > 40%.

**Cách phòng.** Bước 0 thủ công trước khi code (chi phí ~28 giờ, 0đ). Form tuyển beta bắt nhập tên 3 người bạn + link group chat, chỉ approve khi đủ 3 — đây là cách rẻ nhất biến p≈0,08 thành p≈0,25 và loại trước phần lớn nhóm sẽ chết. Bỏ ràng buộc ≥3 người để bắt đầu. Web preview chơi được. Và microcopy: nhóm tụt từ 5 → 2 người phải được hệ thống gọi là **"chuyển sang Duo"**, không phải "nhóm đang chết" — khác biệt một dòng chữ này quyết định nhóm có ở lại không.

### 4.2. Founder cạn kiệt trước khi có tín hiệu — **~40–50%**

**Cơ chế.** Bus factor = 1, không có tiền thuê, và một người phải đồng thời là dev RN, dev backend, game economy designer, copywriter giọng Gen Z, hoạ sĩ, người onboard 20–30 nhóm beta bằng tay, người làm TikTok organic, và người lo pháp lý. Không phải app chết — người chết trước. Đây là chế độ thất bại phổ biến nhất của dự án một người và nó không xuất hiện trong bất kỳ dashboard nào.

**Thời điểm lộ ra.** Tháng 3–5 tính từ dòng code đầu tiên. Muộn hơn 4.1, nên nếu 4.1 đã giết dự án thì 4.2 không kịp bắn.

**Dấu hiệu sớm:**
- Trượt mốc lịch đầu tiên quá 2 tuần mà không cắt scope tương ứng.
- Có ≥7 ngày liên tiếp không commit gì trong giai đoạn đang build.
- Thêm feature vào backlog mà **không** cắt một feature khác ra (vi phạm luật 1-1).
- Founder bắt đầu làm việc "dễ chịu" (vẽ boss, chỉnh màu, viết roast) thay vì việc trên đường găng.

**Cách phòng.** Trần theo ngày lịch, không theo person-week. Luật đánh đổi 1-1 viết ra và ký. Và điều rẻ nhất mà chưa ai làm: **6 nhóm × 5 người của Bước 0 là 30 người đang rảnh và đang quan tâm** — trong đó 1–2 người viết caption duyên hơn founder (→ đồng sở hữu giọng), 2–3 người có máy Android tầm trung khác nhau (→ QA thiết bị thật, xoá một dòng ~1,5 pw), 1 người làm TikTok tốt hơn founder. Chi phí: 0đ + sự ghi nhận. Bus factor không lên 3 được, nhưng số việc chỉ-founder-làm-được giảm rõ rệt.

### 4.3. Cơ chế boss không tạo được nhịp — **~35–45% nếu giữ nguyên thiết kế DOC 1; ~20–25% sau khi bỏ hồi máu + hạ combo về 3/5**

**Cơ chế.** Ba đường chết song song. (a) Toán: q⁵ làm khoảnh khắc lõi biến mất (mục 3.2). (b) Thông tin: boss HP là **hàm xác định của đúng một biến** — số người đã nộp proof hôm nay — mà biến đó đã hiển thị nguyên trạng trên màn hình chính là "3/5 đã nộp". Boss HP không thêm một bit thông tin nào; nó là cùng dữ liệu vẽ lại bằng thanh máu. User không phản đối bằng lý trí, họ chỉ **thôi nhìn** — nên founder sẽ không nghe ai phàn nàn, không thấy review 1 sao, chỉ thấy một feature tốn 6 tuần dev nằm im. (c) Bằng chứng khoa học không áp dụng được: Köhler effect có moderator trung tâm là chênh lệch năng lực ~1,4 lần, nhưng các kèo của Teemi **không thể so sánh được** — bạn không thể "giỏi hơn 1,4 lần" ở việc không uống trà sữa so với người đọc 5 trang sách. Đây không phải bằng chứng yếu; đây là bằng chứng không áp dụng được đang được trình bày như bằng chứng ủng hộ **[FACT — r03 tự ghi "KHÔNG TÌM ĐƯỢC" nghiên cứu group contingency với mục tiêu khác nhau giữa các thành viên]**.

**Thời điểm lộ ra.** Tuần 2–4 của beta. Boss trở thành *solved game* sau chưa đầy 1/3 season: hết ngày 4, nhóm đã biết nhịp và biết kết cục.

**Dấu hiệu sớm:**
- q < 0,40 trên ≥20 nhóm trong 14 ngày liên tục.
- Số ngày full house < 3/28.
- **% session có mở/chạm màn boss < 20% sau tuần 3** — chỉ số này một mình đủ để kết luận, không cần tranh luận thêm.
- Trong Bước 0: không ai nhắc tới boss một cách tự nhiên trong 14 ngày, ở nơi bối cảnh xã hội mạnh nhất có thể (nhóm bạn thân + founder ngồi bơm tay).

**Cách phòng.** Bỏ hồi máu, hạ combo về `ceil(0.6 × Active)`, thiết kế 3 tầng payoff (hằng ngày: "boss mất 12% máu hôm nay", luôn > 0 nếu có ≥1 người nộp; tuần: milestone HP 75/50/25%; hiếm: full house = critical hit). Thêm một lớp coupling p² đã có bằng chứng số công khai ở quy mô 50M DAU: **buddy trong nhóm** — mỗi season ghép ngẫu nhiên từng cặp, cặp nào cả hai cùng nộp thì có bonus riêng (Duolingo Friend Streak: +22% khả năng hoàn thành bài học hằng ngày, 57% user có ít nhất một người bạn) **[FACT — blog.duolingo.com]**. Và quan trọng nhất: **viết kill criterion cho boss vào ADR TRƯỚC khi có dữ liệu** — v1.1 bật boss cho 50% nhóm, so group-D28; chênh < 10 điểm phần trăm → boss xuống hạng cosmetic vĩnh viễn. Nếu founder không sẵn sàng viết ra ngưỡng đó, boss không phải một giả thuyết sản phẩm — nó là một niềm tin.

### 4.4. Pháp lý và store — **~15–25%, nhưng có điều kiện: chỉ bắn khi thành công**

**Cơ chế.** Hai đường độc lập. (a) **Ngưỡng MXH**: ~1.000 người dùng thường xuyên/tháng ≈ 200 nhóm — quy mô một app viral nhẹ ở một trường đại học. "Thành công" và "vi phạm" có thể xảy ra trong cùng một tuần. Cộng NĐ 53/2022 (data localization) và NĐ 330/2026 (chuyển dữ liệu xuyên biên giới, phạt tới 5% doanh thu năm trước liền kề). Chiến lược "công ty Singapore để né" **không hoạt động**: pháp nhân nước ngoài không xin được giấy phép MXH VN, và khi vượt 100.000 lượt truy cập từ VN/tháng thì bị nghĩa vụ xuyên biên giới **nặng hơn** (Điều 23 NĐ 147) **[FACT — r06]**. (b) **App Store**: roast + "Báo Thủ" + vote "sus" đi trên dây Apple 1.1.1 và 1.2.

**Thời điểm lộ ra.** Đường (b) trước: lần submit App Store đầu tiên. Đường (a) sau: tuần 2–8 sau launch công khai **nếu** có traction.

**Dấu hiệu sớm:**
- Chạm 500 người dùng thường xuyên/tháng (một nửa ngưỡng) → đã trễ để bắt đầu, phải nộp hồ sơ từ mốc này.
- Một screenshot "Báo Thủ tuần này: [tên]" lan ra ngoài nhóm kín, lên một fanpage.
- App Review hỏi lại về cơ chế roast, hoặc yêu cầu "provide a plan to improve your compliance".
- Report-to-proof ratio > 0,1%.

**Cách phòng.** Xếp theo tính đảo ngược và chi phí, không theo "pháp lý vs sản phẩm":

*Làm ngay (rẻ, đảo ngược được, không chặn gì):* Apple Developer **INDIVIDUAL $99** — không cần D-U-N-S, không cần công ty, đủ cho cả TestFlight lẫn App Store **[FACT — developer.apple.com/programs/enroll]**; nên "khởi động D-U-N-S ngay tuần này" là lời khuyên sai thứ tự, vì D-U-N-S chỉ cần cho enrollment dạng Organization, mà dạng đó lại đòi pháp nhân đã tồn tại. Mua tên miền .vn giữ chỗ. Đặt lịch luật sư CNTT và hỏi **đúng hai câu** quyết định kiến trúc: *"Teemi (nhóm kín, không feed công khai, không profile công khai, không chat 1-1) có phải MXH theo Điều 3 NĐ 147 không, và cách đo 'người sử dụng thường xuyên' là gì?"* và *"boss chung có bị xếp G1 không?"* Ba câu còn lại hỏi vòng sau, khi đã có màn hình thật để mô tả — luật sư trả lời chính xác hơn nhiều khi có thứ để nhìn.

*Làm sau khi Bước 0 qua (đắt, khó đảo ngược):* lập TNHH → D-U-N-S → đổi sang Apple Organization. Nộp Giấy xác nhận thông báo khi còn nhỏ (nhẹ hơn nhiều so với xin giấy phép khi đã bị chú ý), trigger ở 500 người dùng thường xuyên/tháng, cộng đệm cho 30 ngày làm việc xử lý.

*Bảo hiểm kiến trúc rẻ:* ADR-001 quyết định khởi động trên Supabase Singapore **với hai ràng buộc coi như luật**: (a) không dùng Supabase Edge Functions/Auth theo cách khoá cứng, (b) mọi truy cập media đi qua một `StorageAdapter` interface. Kèm một dòng trong ADR: *"nếu ý kiến luật sư nói phải đặt tại VN, chi phí di chuyển dự kiến ≤1 pw."* Đây là cách biến một quyết định không thể đảo ngược thành một quyết định đảo ngược được — mục tiêu thật của ADR.

---

## 5. Mọi giả định ẩn trong DOC 1, viết lại thành mệnh đề CÓ THỂ SAI

Nguyên tắc: một mệnh đề chỉ hợp lệ nếu nó có **ngưỡng số**, có **cách đo cụ thể**, và có thể **sai**. "User sẽ thích app" không phải mệnh đề. "≥35% nhóm 4 người nộp proof ≥5/7 ngày trong tuần đầu" mới là.

| # | Giả định ẩn trong DOC 1 | Mệnh đề kiểm chứng được | Cách kiểm chứng | Chi phí | Thời gian |
|---|---|---|---|---|---|
| A1 | "Nhóm bạn sẽ quay lại mỗi ngày" (§7) | **≥50% nhóm 5 người còn ≥3 người gửi proof ở ngày 14** của Bước 0 thủ công | 6 nhóm × 5 người trong group Zalo có sẵn; founder post ảnh recap Canva mỗi tối 21:00; đếm trong Google Sheet | ~28 giờ công, **0đ** | 14 ngày |
| A2 | "Nộp proof mỗi ngày là khả thi" (§7 bước 4) | **q = số proof / số thành viên Active / ngày ≥ 0,55**, đo liên tục 14 ngày trên ≥20 nhóm | Đếm event `proof_submitted` chia số Active. Phân nhánh: q≥0,55 → boss nhóm 4–5 chạy được; 0,40–0,55 → ép nhóm mặc định xuống 3 người; <0,40 → đổi hướng solo-first | 0đ thêm (analytics đã có) | 14 ngày |
| A3 | "Khoảnh khắc cả nhóm nộp đủ là đỉnh cảm xúc của sản phẩm" (§2) | **≥3 ngày có full house trong 28 ngày** (full house tính trên số Active, không phải headcount danh nghĩa) | Đếm. Nếu <3/28, khoảnh khắc lõi mà cả sản phẩm được xây để tạo ra **không tồn tại trên thực tế** | 0đ | 28 ngày |
| A4 | "Boss chung làm nhóm gắn kết hơn" (§1, §7) | **Nhánh có boss hơn nhánh không boss ≥10 điểm phần trăm group-D28**, ≥60 nhóm mỗi nhánh | A/B 50/50 ở v1.1 bằng feature flag. Ngưỡng ghi vào ADR **trước** khi có dữ liệu | ~0,5 ngày công (flag) | 28 ngày sau khi đủ 120 nhóm |
| A5 | "Boss là thứ người ta muốn nhìn" (ngầm trong §7 bước 6) | **≥20% session có mở hoặc chạm vào màn boss, đo sau tuần 3** | Một analytics event. Nếu <20%, boss đã chết và không cần tranh luận thêm | ~1 giờ | 21 ngày |
| A6 | "Nhóm sẽ tự tạo ngôn ngữ riêng quanh Teemi" (§8) | **≥2/6 nhóm có ít nhất 1 lần tự nhắc tới proof/boss mà founder không khơi mào trước**, trong 14 ngày | Đọc log group Zalo của Bước 0, đếm thủ công | 0đ | 14 ngày |
| A7 | "Cà khịa là điểm khác biệt, không phải vector bắt nạt" (§10.1) | **max_share ≤ 0,5 ở ≥80% nhóm** — max_share = (roast của người nhận nhiều nhất)/(tổng roast nhóm), cửa sổ 7 ngày, chỉ tính khi tổng roast ≥10 | Event `roast_received{target, sender, group, ts}` | <1 ngày công (cùng gói 4 event an toàn) | 28 ngày |
| A8 | "Nhóm bạn là đơn vị viral tự nhiên" (§8) | **installs_per_activated_group ≤ 10** trên 200 install đầu (activated = ≥3 người nộp proof trong 48h) | Analytics, hai chỉ số: `installs_per_activated_group` và `cost_per_living_group`. **Đừng dự đoán 29 hay 4 — đo nó** | 0đ thêm | 4–6 tuần |
| A9 | "Có thể kiếm tiền từ nhóm bạn" (§11) | **Doanh thu thực nhận / nhóm-hoàn-thành-season ≥ 50.000đ** sau 8 tuần beta | Offer tiền thật ở màn hình ngay sau khi hạ boss season 1 (tuần 4): "Founding Crew 690.000đ trọn đời, 1.000 suất", IAP + RevenueCat entitlement server-side. Con số tuyệt đối ổn định ở cỡ mẫu nhỏ hơn nhiều so với tỉ lệ phần trăm | ~3–5 ngày công | 8 tuần, **phải sẵn sàng TRƯỚC tuần 4** |
| A10 | "Tên Teemi dùng được" (§1) | **≤2/10 người gõ đúng tên vào ô search App Store** sau khi nghe qua điện thoại, không đánh vần | Gọi 10 người, đọc tên, bảo họ gõ, chụp màn hình kết quả | 1 giờ, 0đ | 1 ngày |
| A11 | "Câu định vị truyền được qua truyền miệng" (§6.3) | **Người thứ 6 trong chuỗi truyền miệng bậc 3 không nói ra từ "game"** khi kể lại | Đọc câu cho 5 người → bảo họ kể lại cho người thứ 6 → nghe người thứ 6 nói lại | 2 giờ, 0đ | 1 ngày |
| A12 | "Teemi thêm giá trị mà Zalo group không có" (§4) | **Lượng tin nhắn trong group Zalo của nhóm beta giảm ≥20% sau 30 ngày dùng Teemi** — hoặc ít nhất có ≥1 hành vi lặp lại chỉ xảy ra trong Teemi | Đếm thủ công trên 6 nhóm + hỏi trực tiếp. Nếu tin nhắn Zalo **không giảm**, Teemi đã thua đối thủ thật của nó, bất kể retention là bao nhiêu | 0đ | 30 ngày |
| A13 | "Widget giữ chân" (r04, không có trong DOC 1) | **Nhóm có ≥1 người cài widget Android có group-D28 cao hơn nhóm không ai cài ≥8 điểm phần trăm** | Analytics + so sánh cohort tự nhiên | ~0,5 pw dev | 28 ngày |
| A14 | "Nhóm sẽ chơi tiếp season 2" (§13 roadmap) | **≥50% nhóm sống hết season 1 bấm bắt đầu season 2 trong vòng 5 ngày** | Analytics. Ước lượng hiện tại của corpus: chỉ **~3,4%** nhóm activate sẽ hoàn thành season 2 **[ước lượng có cấu trúc]** — nếu đúng, toàn bộ mô hình doanh thu 12 tháng sai | 0đ | 5 ngày sau season 1 |
| A15 | "Notification sẽ đến được máy user" (ngầm trong toàn bộ ritual) | **≥70% push recap 21:00 được deliver trên máy Xiaomi/Oppo/Vivo** trong nhóm beta | Test trên thiết bị thật + đối chiếu delivery report FCM. Nền: >85% user VN là Android, ROM Trung Quốc kill background aggressive, opt-in push Android vừa rơi 85%→67% do Android 13 **[FACT — r05, r04]** | ~2 ngày công | 1 tuần |
| A16 | "Ritual hằng ngày sống được quanh năm" (§7) | **q trong 14 ngày Tết ≥ 60% của q trung bình 14 ngày trước Tết** | Đo. Nếu trượt, chấp nhận Teemi là app 2–3 mùa/năm và thiết kế ngủ đông có chủ đích | 0đ | Tết Âm 2027 |
| A17 | "Người dùng hiểu và chấp nhận việc bị nhóm nhìn thấy" (§10.1 private-first) | **≤5% user bật toggle "kèo này là chuyện riêng của mình"** trong 28 ngày đầu — nếu cao hơn nhiều, mô hình social proof không được chấp nhận | Analytics. Kèm màn "Nhóm thấy gì về bạn" bắt buộc xem 1 lần ở onboarding (consent surface thật, không phải ToS) | ~0,5 ngày công | 28 ngày |

---

## 6. Mâu thuẫn nội tại trong DOC 1

Mỗi mâu thuẫn dưới đây phải chọn **một bên**. Giữ cả hai nghĩa là chưa quyết định, và chưa quyết định nghĩa là sẽ quyết định sai vào lúc tệ nhất — giữa lúc đang code.

**6.1. §1 đặt "boss" vào chính giữa câu định vị lõi ⟷ §6.1 cấm định vị là "game mobile thuần".**
Không thể giữ cả hai, và bên phải giữ đã rõ vì có ba nguồn độc lập chỉ vào cùng một phần tử: r01 §176 (boss hồi máu là đúng cơ chế khiến người dùng bỏ Habitica), r06 §117 (boss chung qua máy chủ là mô tả đúng chữ của G1), r03 §380 (boss tạo scapegoating cấu trúc).
→ **CHỌN: boss rời khỏi câu bán, ở lại trong sản phẩm.** Không xuất hiện trong tagline, App Store description, website, pitch deck, screenshot. Nó trở thành phần thưởng khi khám phá, không phải rào cản khi giải thích. Chi phí sản phẩm: **0**.

**6.2. §10.1 "Vui trước, kỷ luật sau" ⟷ §7 bước 6 "boss mất máu hoặc hồi máu".**
Hồi máu không phải kỷ luật cá nhân — nó là **hình phạt tập thể**, dạng nặng nhất về tâm lý. Và nó không chạm người lười (họ không mở app), nó chỉ phạt người đang mở app.
→ **CHỌN: bỏ hồi máu vĩnh viễn.** `boss_hp(t) = HP0 − Σ(damage)`, đơn điệu giảm. Miss = damage ngày đó bằng 0, không âm. Bù lại Köhler effect bằng damage floor + conjunctive bonus ở ngưỡng 3/5. Recap khi combo hụt hiển thị "Hôm nay chưa mở được combo" — **không tên ai**.

**6.3. §10.1 "Private-first, share-out optional" ⟷ §11.2 share card là free core, và r08 xác định đây là kênh acquisition duy nhất có unit economics dương.**
Private càng chặt thì share card càng rỗng (chỉ còn "boss còn 40% máu", không ai share); share card càng giàu (ảnh proof, tên bạn, ai báo thủ) thì "private-first" thành khẩu hiệu.
→ **CHỌN cửa thứ ba, nhưng vẫn là chọn một bên của lời hứa:** *"Share card chỉ được chứa dữ liệu do CHÍNH NGƯỜI SHARE tạo ra."* Ảnh proof của tôi, streak của tôi, mục tiêu của tôi — không bao giờ ảnh của người khác, không bao giờ "ai báo thủ". Private-first là lời hứa về **dữ liệu của NGƯỜI KHÁC**, không phải về dữ liệu của chính bạn. Đây chính xác là cách Strava, Duolingo và Locket giải. Ghi thành invariant một dòng trong ADR: *"A share card may only contain data authored by the sharer."* — kiểm được trong code review.

**6.4. §12.4 "không roast goal nhạy cảm" ⟷ khuyến nghị pháp lý "goal phải free-text, không phân loại theo taxonomy sức khoẻ".**
Muốn biết goal nào nhạy cảm thì phải phân loại nội dung goal; mà phân loại "giảm 5kg / nhịn ăn tối / cai thuốc" chính là suy luận dữ liệu sức khoẻ từ text.
→ **CHỌN: app không bao giờ đọc nội dung goal.** Ràng buộc kiến trúc: mọi roast template, recap copy, notification, share card **chỉ tham chiếu TRẠNG THÁI** (`submitted`/`not_submitted`/`late`/`streak`). "Nam lại dùng kỹ năng mất tích có điều kiện" hoạt động hoàn hảo mà không cần biết Nam cai gì. Viết thành ADR + một test tự động quét template bank tìm placeholder `{goal_text}`. Đây là fix rẻ nhất, an toàn nhất và tốt-cho-compliance nhất trong toàn bộ danh sách — nó giải một lúc ba vấn đề: an toàn vị thành niên, miễn trừ Điều 38, và rủi ro Apple 1.1.1.

**6.5. §8 muốn "Tuần này ai là Báo Thủ?" thành ngôn ngữ nhóm ⟷ r02 đặt design principle "mọi màn hình quan trọng phải đẹp khi bị screenshot".**
Ghép hai điều này lại, Teemi đang **tối ưu khả năng lan truyền của nội dung làm nhục một người có tên thật**.
→ **CHỌN: danh hiệu tiêu cực chỉ tồn tại dưới dạng badge TỰ NHẬN.** Minh có thể tự gắn "Báo Thủ" cho mình — đó mới là hài hước tự trào, và cấu trúc đó đã có sẵn trong văn hoá group chat VN. Hệ thống **không bao giờ** tự gán. Cộng: hai bản recap khác nhau (recap trong app đầy đủ ≠ share card đã strip mọi tên gắn nhãn tiêu cực, ~1 ngày công cho template renderer riêng); ranking tiêu cực chỉ hiển thị self-facing; mỗi danh hiệu tiêu cực opt-in phải đi kèm một danh hiệu tích cực trong cùng recap và reset mỗi tuần.

**6.6. §10.1 "Reward là gia vị, không phải động cơ chính" ⟷ §11.3 bán Gacha cosmetic pool + boss skin + role pack.**
→ **CHỌN: ở MVP, cosmetic là phần thưởng KIẾM ĐƯỢC, không phải hàng bán.** Lý do kinh tế, không phải lý do đạo đức: cosmetic economy chỉ hoà vốn từ ~20.000 MAU và chỉ có ý nghĩa kinh doanh từ ~100.000 MAU — dưới 20k MAU, mỗi bộ skin vẽ ra là **lỗ** **[FACT — r08 §133]**. Ràng buộc bổ sung: **không có bất kỳ reward hữu hình nào được hứa trước và gắn với việc hoàn thành habit** (Deci, Koestner & Ryan 1999: engagement-contingent d = −0,40) **[FACT]**. Lưu ý sắc: một cái theme bạn **mua** không phải reward contingent — meta-analysis đó không cấm bán theme, nó cấm hứa thưởng cho việc hoàn thành.

**6.7. §10.1 "MVP phải cực rõ, cực nhỏ" ⟷ §7 flow 9 bước + §11.2 free core 9 hạng mục + §11.3 14 tính năng premium.**
→ **CHỌN: trần theo NGÀY LỊCH + luật đánh đổi 1-1.** "Beta phải chạy trước 15/12/2026." Trần person-week tự lừa mình được bằng cách định nghĩa lại pw; ngày lịch thì không. Và: đừng cắt Timeline/Memory khỏi **pitch**, chỉ cắt khỏi **build** — ship lưới ảnh 30 ngày (~0,5 pw) và gọi nó là Timeline; lớp ký ức tích luỹ là câu trả lời duy nhất cho novelty decay, cắt nó khỏi câu chuyện là xoá lý do tin rằng Teemi sống lâu hơn BeReal.

**6.8. §11.4 "Storage là hạ tầng. Memory mới là sản phẩm." ⟷ mô hình duy nhất trong category thật sự kiếm được tiền.**
Day One cho ký ức không giới hạn miễn phí và đặt paywall đúng chỗ có chi phí biên. Câu của DOC 1 viết ngược.
→ **CHỌN: "Memory là sản phẩm marketing (miễn phí, để share). Storage / độ phân giải / export là sản phẩm bán được (có chi phí biên)."** Tiện thể nó khớp luôn với §12.7 vốn đã đúng. Và **bỏ mốc "khoá archive sau 90 ngày"** — r04 đo chỉ 30% nhóm sống ≥30 ngày, nên paywall ở ngày 90 là dựng quầy bán trước một cohort đã rụng ~70%. Chuyển offer về **cuối season 1 (tuần 4), ngay sau khoảnh khắc hạ boss**, và nội dung offer phải **hướng tương lai** (theme season 2, quyền đặt tên boss, badge người bao team) chứ không phải "mở khoá kho ký ức" — bán cho một nhóm ĐANG THẮNG, không bán cho một nhóm sắp tan.

**6.9. Hai mâu thuẫn nằm trong research chứ không trong DOC 1, nhưng phải giải cùng lúc:**
- **r04 §13 (group activation = ≥3 người) ⟷ r04 §64 (Group D7 = nhóm còn ≥2 người).** → CHỌN `group_alive` = ≥3 nộp proof/7 ngày cho mọi quyết định kill/tiếp; `duo_alive` ≥2 là chỉ số riêng có tên riêng, đo song song, **không được thay thế**.
- **r04 (widget là P0) ⟷ r05 (hoãn widget sang v1.1).** → Không phải ngã ba, đây là câu hỏi có đáp án: iOS bắt buộc Swift/SwiftUI + prebuild; Android viết được bằng JSX/TSX qua `react-native-android-widget` có Expo config plugin **[FACT]**. Mà VN >85% Android. → **CHỌN: widget Android v1 (~0,5 pw, phủ ~85% thị trường mục tiêu), widget iOS v1.1.** Nếu trễ, cắt feature khác — cắt Memory Capsule nâng cao, cắt boss skin, cắt gacha. **Đừng cắt widget**, vì đó là câu trả lời duy nhất đã được kiểm chứng cho câu hỏi "cái gì không screenshot được vào Zalo".
- **r03 "miss 3 ngày liên tiếp → app đề xuất hạ độ khó kèo" ⟷ nguy cơ tự động hoá cuộc đua xuống đáy.** → CHỌN: app gợi ý **Skip/Pause** sau 3 miss, **KHÔNG** gợi ý hạ kèo. Hạ kèo vẫn cho phép nhưng cần ≥1 người khác peer-approve, giới hạn 1 lần/season, và ghi vào Timeline như một sự kiện trung tính ("Season 2 · ngày 9 · Huy đổi kèo") thay vì thông báo đẩy có tính bêu tên.

---

## 7. Kill criteria

Nguyên tắc trước bảng — ba luật chống tự lừa mình, đọc trước khi đọc số:

1. **Ngưỡng nào cũng phải kèm điều kiện q ≥ 0,55.** Không có q, `group_alive` có thể đạt bằng 3 người mở app xem recap mà không ai nộp proof.
2. **Vùng xám không được sửa bằng feature.** Nếu chỉ số rơi giữa ngưỡng dừng và ngưỡng tiếp: **cấm thêm feature**, chạy lại đúng sản phẩm đó với một cohort mới. Không có dòng này, mọi kill criteria đều bị lách bằng câu "gần đạt rồi, thêm cái này nữa là được".
3. **Cổng phi số, vì n=30 không đỡ nổi bất kỳ ngưỡng phần trăm nào:** kết thúc season 14 ngày, **có nhóm nào tự hỏi khi nào có season tiếp theo không?** Không nhóm nào hỏi = dừng, bất kể phần trăm đẹp thế nào.

| Mốc thời gian | Metric (định nghĩa cứng) | Ngưỡng DỪNG | Ngưỡng TIẾP TỤC |
|---|---|---|---|
| **Bước 0, D14** (chưa code) | % nhóm còn ≥3 người gửi proof vào group Zalo ở ngày 14 | **< 50%** → không viết một dòng code nào | ≥ 50% |
| **Bước 0, D14** | Số nhóm có ≥1 lần tự nhắc nhau "nộp proof chưa" mà founder không khơi mào | **0/6 nhóm** → dừng dự án tại đây, tiết kiệm 11,5 pw | ≥ 2/6 nhóm |
| **Bước 0, D14** | Reaction trung bình / proof (neo: Strava ~3,5 kudos/hoạt động **[FACT]**) | **< 2** → nhóm chưa đủ ấm, chạy lại với cohort khác | ≥ 3 |
| **Beta, 14 ngày liên tục, ≥20 nhóm** | **q** = proof / thành viên Active / ngày | **< 0,40** → đổi hướng solo-first (mô hình Finch, ~$4M/tháng, gần như không social **[FACT — r01]**) | ≥ 0,55. Vùng 0,40–0,55 → **không kill**, nhưng ép nhóm mặc định xuống 3 người và chạy lại 1 season |
| **Beta, D28** | Số ngày full house / 28 (tính trên Active) | **< 3/28** → khoảnh khắc lõi không tồn tại; thiết kế lại hàm boss trước khi làm bất cứ thứ gì khác | ≥ 3/28 |
| **Beta, D28** | Ngày chết trung vị của nhóm (ngày đầu tiên nhóm tụt <3 người nộp proof/7 ngày) | **< D14** → vấn đề là cấu trúc, mọi feature thêm vào đều lãng phí | > D21 |
| **Beta, D28** | % session có mở hoặc chạm màn boss, đo sau tuần 3 | **< 20%** → boss xuống hạng cosmetic, không đầu tư thêm | ≥ 35% |
| **Beta, D30** | **`group_alive` D30** = % nhóm còn ≥3 thành viên nộp proof trong 7 ngày gần nhất | **< 15%** → kill dự án | ≥ 25% → tiếp, mở rộng. Vùng **15–25%** → **không kill nhưng bắt buộc pivot sang Duo-first** và chạy lại 1 season |
| **Beta, tuần 8** | Doanh thu thực nhận / nhóm hoàn thành season | **< 50.000đ** → giả thuyết B2C subscription chết, chuyển sang ads **hoặc** B2B — chọn MỘT, không làm cả hai | ≥ 50.000đ |
| **Bất kỳ lúc nào** | `max_share` roast 7 ngày (chỉ tính khi tổng roast nhóm ≥10) | **> 0,5 ở >20% số nhóm** → tắt roast bằng feature flag, thiết kế lại trước khi bật lại | ≤ 0,5 ở ≥80% nhóm |
| **Bất kỳ lúc nào** | Report-to-proof ratio | **> 0,1%** → đọc thủ công 100% ngay; đây cũng là bằng chứng "timely responses" cho Apple 1.2 | — |
| **v1.1, sau 28 ngày A/B, ≥60 nhóm/nhánh** | Chênh lệch group-D28 giữa nhánh có boss và nhánh không boss | **< 10 điểm phần trăm** → **gỡ boss vĩnh viễn**, dồn toàn bộ nguồn lực sang Timeline/Memory | ≥ 10 điểm phần trăm |
| **Tháng 4 sau launch** | Doanh thu / DAU / tháng (đo thật, không mô hình) | **< $0,01** → đóng nhánh B2C subscription | ≥ $0,03 |
| **Tháng 5 sau launch** | DAU so với đỉnh; và User D30 | **mất > 50% DAU** hoặc **D30 < 6%** → cấm thêm feature, cắt về paired streak n=2–5 kiểu Duolingo Friend Streak, bỏ hẳn boss | — |
| **Tháng 9 sau launch** | Doanh thu thực nhận vs chi phí hạ tầng | **doanh thu < chi phí** → dừng. Không có ngoại lệ "sắp viral tới nơi" | — |
| **Ngưỡng pháp lý (không phải kill, là trigger)** | Người dùng thường xuyên / tháng | **chạm 500** → bắt đầu hồ sơ Giấy xác nhận thông báo ngay (30 ngày làm việc + đệm), không đợi tới 1.000 | — |

**Neo đường cơ sở.** Đừng dùng Yope D7 = 40% làm OKR — đó là **user** retention ở quy mô 800k DAU đo tại đỉnh tăng trưởng, dùng để neo một **group** retention với n=30 là trộn hai đơn vị ở hai quy mô. Dùng **neo nội bộ**: đo Group D14 bằng tay ở Bước 0, gọi con số đó là **B**. Ngưỡng cho beta app: **Group D14 ≥ B**. Diễn giải trần trụi — *nếu app không bằng founder ngồi post ảnh Canva mỗi tối, app không có lý do tồn tại.* Đây là phép thử duy nhất không phụ thuộc benchmark ngoài và không bị lỗi trộn đơn vị.

---

## 8. Việc quan trọng nhất phải làm trong 14 ngày tới

Xếp theo thứ tự thực hiện. Mỗi việc có output kiểm chứng được — nếu không có output đó, việc chưa xong.

**Ngày 1 — Sửa DOC 1 tại chỗ (≈3 giờ).**
Output: một commit với diff cụ thể.
- §7 bước 6: xoá "hoặc hồi máu" → *"Boss chung mất máu. Boss không bao giờ hồi máu."*
- Thêm vào §7: `combo = ceil(0.6 × số Active)`, tối thiểu 2.
- §11.4: đảo câu thành *"Memory là sản phẩm marketing (miễn phí, để share). Storage/độ phân giải/export là sản phẩm bán được."*
- Xoá §6.2 (hai câu thay thế), §6.3, §6.4. Giữ **một** câu định vị. Gắn nhãn câu §13 là "CHỈ DÙNG NỘI BỘ".
- §12.6: thu hẹp "không quảng cáo kiếm tiền" thành *"không quảng cáo dạng reward/incentivized, không interstitial, không chen vào ritual; chấp nhận tối đa 1 native ad ở màn recap sau khi recap đã hiển thị đầy đủ."*

**Ngày 1 — ADR-000 "Đơn vị đo và các invariant" (≈2 giờ).**
Output: file `docs/adr/000-don-vi-do.md`, đã commit. Nội dung tối thiểu — 7 dòng, mỗi dòng là một quyết định không bàn lại:
`group_alive` = ≥3 nộp proof/7 ngày · `duo_alive` = ≥2, chỉ số riêng · cohort key = `group_id` · `boss_hp` đơn điệu giảm · combo = `ceil(0.6×Active)` min 2 · share card chỉ chứa dữ liệu do người share tạo · roast/recap/notification/share card không bao giờ tham chiếu `goal_text`.

**Ngày 1–2 — Chốt tên (≈4 giờ).**
Output: **một** tên đã chốt + domain đã **mua xong** (không phải "còn trống") + 2 handle đã đăng ký. Quy trình: itunes search API + Play search trả ≤2 kết quả và không map sang app lớn nào → `.com` hoặc `.vn` mua được hôm nay → handle TikTok + Instagram trống → test đọc qua điện thoại 10 người, ≤2 người gõ sai. Shortlist đã sàng sơ bộ: **Chụm/Chum, Chumi, Rusi** (đều trả 0 kết quả trên store VN; DNS-free ≠ available, phải xác nhận ở registrar).

**Ngày 2 — Apple Developer INDIVIDUAL $99 (≈1 giờ).**
Output: tài khoản active. Không D-U-N-S, không công ty, không TNHH. Đủ cho cả TestFlight lẫn App Store.

**Ngày 2 — Gửi luật sư đúng 2 câu (≈30 phút).**
Output: email đã gửi + lịch hẹn đã đặt. Đúng hai câu, không hơn: *"Teemi (nhóm kín, không feed công khai, không profile công khai, không chat 1-1) có phải MXH theo Điều 3 NĐ 147/2024 không, và cách đo 'người sử dụng thường xuyên' là gì?"* và *"Cơ chế boss chung có bị xếp là trò chơi điện tử G1 không?"* Ba câu còn lại (miễn trừ Điều 38, log 2 năm vs xoá 20 ngày, Điều 32 BLDS) hỏi vòng sau khi đã có sản phẩm thật để mô tả.

**Ngày 2–3 — Tuyển 6 nhóm × 5 người cho Bước 0 (≈4 giờ).**
Output: 6 group Zalo có founder trong đó, 30 người đã chọn xong kèo, 1 Google Sheet có sẵn cột. Form đăng ký **bắt nhập tên 3 người bạn + link group chat**, chỉ approve khi đủ 3 — đây là cơ chế lọc rẻ nhất tồn tại.

**Ngày 3 — Test câu định vị truyền miệng bậc 3 (≈2 giờ, chạy song song).**
Output: một câu ≤15 từ đã qua test, kèm ghi chú người thứ 6 có nói ra từ "game" không. Nếu có, câu chưa đạt, viết lại.

**Ngày 3–16 — CHẠY BƯỚC 0 (≈20 phút/nhóm/tối, tổng ~28 giờ).**
Output: 14 ảnh recap Canva × 6 nhóm, và một sheet có đúng 4 cột số: proof/ngày/người · reaction/proof · ngày nhóm tụt xuống <3 người · số lần nhóm tự nhắc nhau mà founder không khơi mào. **Đây là việc quan trọng nhất trong 14 ngày.** Mọi việc khác là để dọn đường cho nó.

**Ngày 4 — Viết DOC 2 "Kế hoạch có thể sai", một trang (≈2 giờ).**
Output: file + một ảnh chụp tờ giấy đã dán lên tường. Nội dung: bảng kill criteria ở mục 7 của tài liệu này, kèm ngày cụ thể, kèm ba luật chống tự lừa mình. DOC 1 là tuyên ngôn định vị — nó hữu ích và nên tồn tại; vấn đề là **không có tài liệu thứ hai**.

**Ngày 5–6 — Chốt schema tracking trước dòng code sản phẩm đầu tiên (≈1 ngày công).**
Output: file `docs/analytics/events.md` + bảng đã tạo. Bốn event an toàn (`roast_received`, `member_left{roasts_received_48h, misses_7d, was_kicked}`, `report_created/resolved`, `safety_screen_shown{reason_bucket}`) + hai chỉ số cold start (`installs_per_activated_group`, `cost_per_living_group`) + exit survey 1 câu có ô free-text. **Thêm event sau khi đã có dữ liệu nghĩa là mất toàn bộ lịch sử** — và lịch sử chính là thứ duy nhất trả lời được mọi câu hỏi còn lại.

**Ngày 7 — Van Westendorp n=100 ngoài app (≈3 giờ).**
Output: một dải giá có số. Google Form + đăng trong 3 group sinh viên. Rẻ, không đụng cohort beta, và cho dải giá trước khi phải quyết SKU.

**Ngày 10 — ADR-001 "Vị trí dữ liệu" (≈2 giờ).**
Output: file ADR. Quyết định: Supabase Singapore, **với hai ràng buộc coi như luật** (không khoá cứng vào Edge Functions/Auth; mọi truy cập media qua `StorageAdapter` interface), kèm dòng *"nếu luật sư nói phải đặt tại VN, chi phí di chuyển dự kiến ≤1 pw."*

**Ngày 14–16 — Đọc số Bước 0 và ra quyết định BẰNG VĂN BẢN.**
Output: một đoạn văn có số cụ thể, có ngày, có chữ ký, dán cạnh DOC 2: *đi tiếp / đổi hướng sang Duo-first / đổi hướng sang solo-first / dừng* — theo đúng ngưỡng ở mục 7. Không được viết "gần đạt rồi".

### Những việc TUYỆT ĐỐI không làm trong 14 ngày này

Viết code sản phẩm · thiết kế art cho boss · lập TNHH · đăng ký D-U-N-S · mua `teemi.com` từ dân buôn domain · làm gacha, AI recap, memory search, vector DB, sponsor, Buddy Match, public feed, chat, B2B · làm widget iOS · tích hợp HealthKit/Google Fit · gọi vốn · làm pitch deck.

Mọi thứ trong danh sách này đều là việc *cảm giác như tiến bộ* mà không trả lời được câu hỏi duy nhất đáng hỏi trong 14 ngày tới: **một nhóm bạn thật có tự nhắc nhau nộp proof khi không có ai bơm không?**

---

## Ghi chú cuối, không thuộc cấu trúc

Hai điều tôi có thể sai, nói ra để founder tự cân:

**Một.** Tôi có thể đang đánh giá thấp boss. Toàn bộ lập luận chống boss dựa trên toán học q⁵ (chắc chắn đúng) cộng với giả định các thành viên **độc lập**. Nhóm bạn thật có tương quan dương — thấy bạn nộp thì nộp theo. Nếu tương quan mạnh, P(full house) cao hơn q⁵ đáng kể. Nhưng ngay cả với tương quan hào phóng, con số vẫn không lên tới mức đủ để **hồi máu** hoạt động — nên mục 6.2 vẫn đứng, còn mục 4.3 thì founder có quyền đặt cược ngược lại tôi, miễn là đặt cược bằng một kill criterion viết trước.

**Hai.** Luận điểm mạnh nhất của Teemi mà không phản biện nào trong repo phá được: **lớp xã hội thật sự là đòn bẩy retention lớn nhất trong habit product** — Duolingo Friend Streak +22% hoàn thành bài hằng ngày, add friend → 5,6x hoàn thành khoá học **[FACT]**. Hướng đi của DOC 1 **không sai**. Cái sai là **đơn vị sản phẩm quá lớn**: Duolingo lấy 1 người dùng làm đơn vị và bạn bè là lớp phủ; Teemi làm ngược lại và trả giá theo cấp số nhân ở mọi bước — funnel, retention, monetization, moderation.

Nếu phải nén cả tài liệu này thành một câu hành động: **giữ "mỗi người một kèo", hạ đơn vị sản phẩm từ nhóm 5 xuống 2–3 người, bỏ hồi máu, và đừng viết dòng code nào cho tới khi 6 group Zalo trả lời xong câu hỏi trong 14 ngày.**
