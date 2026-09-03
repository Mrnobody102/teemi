# C-SOCIAL-HARM — Phản biện: Động lực xã hội & tác hại

_Critic pass, 2026-08-28. Đối tượng phản biện: `/home/huypq/teemi/docs/00-source/doc-01-product-strategy.md` và bộ research r01–r08._
_Nhãn: **FACT** (có nguồn) · **INFERENCE** (suy luận từ fact) · **GUESS** (đoán, cần test)_

---

## 0. Luận điểm tổng

doc-01 xử lý toàn bộ mặt tác hại trong đúng **một mục 8 dòng** (§12.4), và giải pháp là một danh sách danh từ: "Casual mode; Life Happens; Skip; Pause; private reason; Support Mode; không roast goal nhạy cảm; Comeback Season". Không có định nghĩa, không có ngưỡng, không có ai chịu trách nhiệm, không có cách đo.

Trong khi đó, **cà khịa + ảnh proof + xếp hạng tiêu cực + đổ lỗi tập thể chính là 4/6 cơ chế lõi của sản phẩm**. Nghĩa là: mặt rủi ro tác hại không phải một rủi ro bên lề của Teemi — nó **là** Teemi. Một sản phẩm mà cơ chế bán hàng và cơ chế gây hại là cùng một cơ chế thì không thể "để phase sau".

Tệ hơn: bộ research hiện tại chứa **ít nhất hai mâu thuẫn nội tại chưa ai phát hiện** (§3 và §7 dưới đây), trong đó một cái làm cho lời khuyên pháp lý và lời khuyên an toàn triệt tiêu lẫn nhau.

---

## 1. "Cà khịa nhưng không toxic" không phải nguyên tắc — nó là một câu chưa được định nghĩa

**Vấn đề.** doc-01 §10.1 viết "Troll nhưng không toxic" như một nguyên tắc lõi. Nhưng ranh giới đó trong đời thật được thương lượng ngầm qua nhiều năm, bằng giọng nói, biểu cảm mặt, và quyền phản đòn cân xứng. App xoá sạch cả ba.

**FACT.** Keltner, Capps, Kring, Young & Heerey (2001), *Psychological Bulletin* 127(2):229–248 — tease là "playful provocation" và chỉ giữ được tính affiliative khi có **markers báo hiệu chơi đùa** và **đối xứng quyền lực**; tease trở nên **thù địch hơn khi được khởi xướng bởi người status cao và bởi người thân quen**. https://greatergood.berkeley.edu/dacherkeltner/docs/keltner.teasing.psychbull.2001.pdf

**FACT.** Shame (đánh giá con người) → rút lui, né tránh. Guilt (đánh giá hành vi) → hành động sửa chữa. https://www.mdpi.com/2076-328X/15/6/725 · https://pmc.ncbi.nlm.nih.gov/articles/PMC6143989/

**INFERENCE — con số của sự bất đối xứng.** Trong một nhóm 5 người, một season 28 ngày, với phân bố tuân thủ thực tế (giả định 90/85/80/70/50% — dải này khớp với thực tế BeReal chỉ có 55% người đăng trong cửa sổ đúng giờ, https://bereal.com/ads/audience):

| Thành viên | Ngày miss / 28 | Lượt roast nhận (giả định 50% người còn lại roast mỗi lần miss) |
|---|---|---|
| A (90%) | 2,8 | ~5,6 |
| B (85%) | 4,2 | ~8,4 |
| C (80%) | 5,6 | ~11,2 |
| D (70%) | 8,4 | ~16,8 |
| **E (50%)** | **14** | **~28** |

Tỉ lệ E:A là **5:1 trong một season**, **15:1 sau ba season (12 tuần)** — 84 lượt so với 17. Đây không phải "cà khịa qua lại". Đây là một máy phân phối sự chú ý tiêu cực, và nó **tự động chọn đúng người yếu nhất trong nhóm** làm đích. App không tạo ra dynamic này; app **khuếch đại** nó và cấp cho nó thẩm quyền số học.

**Safeguard cụ thể (làm được ở MVP):**
1. **Roast budget theo ĐÍCH, không theo người gửi:** mỗi user chỉ nhận tối đa **3 roast/ngày** và **10 roast/tuần** từ toàn nhóm. Roast thứ 4 bị nuốt im lặng (người gửi thấy "đã gửi", đích không nhận). Chi phí: một bảng đếm + 1 constraint. ~0,5 ngày công.
2. **Reciprocity meter ẩn:** nếu tỉ lệ roast gửi/nhận của một user < 0,3 trong 14 ngày, tự động hạ mức consent của người đó xuống Gentle và hiện cho họ (không hiện cho nhóm) nút "Tắt cà khịa với mình 7 ngày".
3. **Roast không vào timeline.** Roast là ephemeral, TTL 72h. Memory Capsule chỉ lấy proof + reaction tích cực. Điều này cắt đứt "bằng chứng lưu vĩnh viễn" mà không mất vibe.
4. **Template-only, không free-text** (khớp khuyến nghị r06 về Apple 1.2). Phrase bank 200–300 câu, mỗi câu phải qua audit: cấm mọi cấu trúc "mày LÀ X", chỉ cho "mày ĐÃ/CHƯA làm X".

---

## 2. "Boss hồi máu vì mày đấy" là đổ lỗi công khai có tên người — và founder đang liệt kê nó như một thành tựu

doc-01 §8 liệt kê "Boss hồi máu vì mày đấy" trong danh sách những câu **mong muốn** trở thành ngôn ngữ nhóm. Đây là câu nguy hiểm nhất trong toàn bộ tài liệu.

**FACT.** Meta-analysis về group contingency (Maggin, Pustejovsky & Johnson 2017) liệt kê thẳng ba rủi ro đã biết của interdependent group contingency: **sabotage, negative peer pressure, scapegoating**. https://journals.sagepub.com/doi/10.1177/0741932517716900

**FACT.** Karau & Williams (1993), meta-analysis 78 nghiên cứu, >15.000 người: sucker effect — thấy người khác free-ride thì tự giảm nỗ lực → vòng xoáy đi xuống.

**Kịch bản cụ thể.** Minh, 19 tuổi, kèo "hôm nay không uống trà sữa". Tuần thi cuối kỳ, Minh miss 3 ngày liên tiếp. Boss hồi 30% HP. Bốn người còn lại nộp đủ 28/28 proof trong 2 tuần, thấy tiến độ 6 ngày công của cả nhóm bốc hơi. Recap tối hôm đó hiện: "Boss hồi 30% máu". Nhóm chat Zalo có 4 người + Minh. Minh biết chính xác 4 người kia đang nghĩ gì kể cả khi không ai nói. **Minh gỡ app.** Nhóm tụt xuống 4 người, rồi theo cascade sucker effect, xuống 2 trong vòng một tuần.

Điểm chết: **tổn thất không nằm trong app, nó nằm trong quan hệ**. Không patch được.

**Safeguard cụ thể:**
1. **Boss KHÔNG BAO GIỜ hồi máu.** Miss chỉ làm **damage của ngày đó bằng 0**, không âm. Mất tiến độ đã có là hình phạt tâm lý nặng nhất trong game design; ở đây nó nhắm vào một người cụ thể.
2. **Damage floor:** dù chỉ 1/5 người nộp, boss vẫn mất máu. Nhóm không bao giờ đứng yên. Điều này giết chết câu "vì mày mà cả nhóm đứng im".
3. **Cấm attribution tiêu cực ở tầng render.** Kỹ thuật: server trả về `damage_today` + `contributors[]` (chỉ người ĐÃ nộp). Client **không có dữ liệu** để dựng câu "vì X". Đây là ràng buộc API, không phải guideline copywriting — guideline sẽ bị vi phạm, API thì không.
4. **Combo/critical chỉ thưởng khi cả nhóm nộp đủ** (giữ Köhler effect) nhưng **không hiển thị ai làm hụt combo**, chỉ hiện "Hôm nay chưa mở được combo".

---

## 3. Goal nhạy cảm: MÂU THUẪN NỘI TẠI giữa lời khuyên pháp lý và lời khuyên an toàn — chưa ai trong bộ research phát hiện

Đây là phát hiện quan trọng nhất của bản phản biện này.

- **r06 (legal) khuyến nghị:** goal phải lưu **free-text, KHÔNG phân loại theo taxonomy sức khoẻ** — để giữ miễn trừ 5 năm theo Điều 38 khoản 2 Luật 91/2025 (miễn DPIA/TIA/DPO tới 01/01/2031).
- **r03 (behavior) + doc-01 §12.4 khuyến nghị:** "không roast goal nhạy cảm".

**Hai điều này loại trừ nhau.** Muốn biết goal nào nhạy cảm để không roast, app **phải phân loại nội dung goal**. Phân loại "giảm 5kg", "nhịn ăn tối", "không trà sữa", "cai thuốc", "uống thuốc đúng giờ", "đi ngủ trước 12h" chính là **suy luận dữ liệu sức khoẻ từ text** — tức là trực tiếp xử lý dữ liệu cá nhân nhạy cảm, tức là **mất ngay miễn trừ 5 năm**. Nếu không phân loại, app mù hoàn toàn và "không roast goal nhạy cảm" là câu nói suông.

**Vì sao đây là rủi ro thật, không phải rủi ro giấy tờ.**

**FACT.** Zelkowitz et al. (2022), *International Journal of Eating Disorders*, DOI 10.1002/eat.23813 (PMID 36165444), **n = 1.451 học sinh cấp 3 đô thị Việt Nam** (51% nữ): latent profile analysis tìm ra **7 nhóm hành vi ăn uống rối loạn** (nhịn ăn + purging, binge, tập luyện + nhịn ăn...), và **odds thuộc nhóm NSSI (tự gây thương tích không tự sát) cao tăng đáng kể ở gần như MỌI lớp DE**.

**FACT.** NAMHS Việt Nam, *The Lancet* 2024 (PMID 38588689, DOI 10.1016/S0140-6736(23)02641-7), 5.996 hộ gia đình, vị thành niên 10–17 tuổi: **3,3%** có rối loạn tâm thần trong 12 tháng qua (95% CI 2,7–4,1); **ý định tự tử 1,4%** (95% CI 1,0–1,9). *(Lưu ý phương pháp: đây là khảo sát hộ gia đình, con số thấp bất thường so với các khảo sát trường học VN; dùng nó làm SÀN, không phải trần.)*

**INFERENCE — quy ra người dùng.** Nếu Teemi đạt 100.000 user vị thành niên, ngay ở con số sàn 3,3% thì đó là **~3.300 người có rối loạn tâm thần chẩn đoán được trong 12 tháng qua**, và **~1.400 người có ý định tự tử**. App đang đặt vào tay họ: một mục tiêu hạn chế ăn uống do chính họ nhập, một lịch nộp bằng chứng hằng ngày, một khán giả cố định 4 người, và một hệ thống điểm số công khai.

**Kịch bản cụ thể.** Linh, 17 tuổi, đặt kèo free-text "hôm nay ăn dưới 1200 kcal". Mỗi tối Linh chụp ảnh bữa ăn. Nhóm thả 🔥. Boss mất máu. Streak lên 21. Ngày 22 Linh ăn bình thường → miss → boss không mất máu → nhóm hỏi "ơ hôm nay sao thế". **Teemi vừa cung cấp một reinforcement schedule hằng ngày, có khán giả, có phần thưởng thị giác, cho hành vi hạn chế ăn.** Đây không phải "goal nhạy cảm bị roast" — đây là app **thưởng** cho hành vi rối loạn, và roast chỉ là lớp trên cùng.

**Safeguard cụ thể — cách thoát mâu thuẫn mà KHÔNG mất miễn trừ pháp lý:**
1. **App không cần biết goal là gì.** Ràng buộc kiến trúc cứng: **roast template và recap KHÔNG BAO GIỜ tham chiếu nội dung goal**, chỉ tham chiếu **trạng thái** (`submitted` / `not_submitted` / `late`). "Nam lại dùng kỹ năng mất tích có điều kiện" hoạt động mà không cần biết Nam đang cai gì. Đây vừa là an toàn, vừa là compliance, vừa rẻ hơn.
2. **Cờ do CHÍNH USER đặt, mặc định BẬT bảo vệ.** Màn tạo kèo có toggle: "Kèo này là chuyện riêng của mình" — **mặc định ON**. Khi ON: nhóm thấy trạng thái nộp/chưa nộp nhưng **không thấy tên kèo**, không sus được, không roast được. User phải chủ động tắt để mở cà khịa. Đây là dữ liệu do chủ thể tự khai về mức riêng tư — **không phải app suy luận sức khoẻ**.
3. **Chặn tại nguồn bằng blocklist client-side, không lưu kết quả.** Một danh sách ~150 từ khoá (kcal, calo, cân nặng, kg, nhịn, purge, thuốc, tự tử, cắt...) chạy **trên máy, không gửi server, không lưu cờ**. Nếu khớp → hiện màn hình mềm: "Kèo liên quan tới cơ thể/sức khoẻ thường không hợp với chế độ cà khịa. Mình bật chế độ riêng tư cho kèo này nhé?" + link tổng đài 111 (Tổng đài Quốc gia Bảo vệ Trẻ em) và 1900 599 088 (Ngày Mai). **Kết quả match không bao giờ rời khỏi thiết bị** → không cấu thành xử lý dữ liệu nhạy cảm.
4. **Cấm hẳn goal dạng định lượng cơ thể ở MVP** trong ToS + blocklist: cân nặng, calo, số đo. Chấp nhận mất use case, đổi lấy việc không phải là app đầu tiên ở VN bị báo chí gắn với một ca rối loạn ăn uống.
5. **AI roast: KHÔNG ở MVP.** r05 đã khuyến nghị bỏ vì chất lượng giọng. Lý do thật mạnh hơn: LLM sinh câu roast từ text goal **buộc phải đọc goal**, tức là đưa nội dung nhạy cảm sang bên thứ ba xuyên biên giới (rủi ro phạt 5% doanh thu theo NĐ 330/2026), và không thể đảm bảo không sinh câu chạm vào cân nặng/ngoại hình.

---

## 4. Ảnh proof hằng ngày = lateral surveillance mà user không có mô hình tinh thần để hiểu

**Số học.** 5 người × 1 proof/ngày × 365 ngày = **1.825 ảnh/nhóm/năm**, mỗi ảnh gắn `submitted_at` (server timestamp), `logical_date`, `group_id`, `user_id`. Kèo "ngủ trước 12h" → chuỗi timestamp = **bản ghi giờ ngủ 365 ngày**. Kèo "đi bộ 20 phút" → ảnh ngoài trời + giờ = **bản ghi lịch di chuyển**. Kèo "không trà sữa" → **nhật ký ăn uống**. Sau một season 28 ngày, nhóm đã có 140 ảnh + 140 timestamp về nhau.

**INFERENCE.** Đây là hồ sơ hành vi **chi tiết hơn bất cứ thứ gì một group chat Zalo tạo ra**, vì nó có cấu trúc, có nhãn, có thời gian đều đặn — tức là truy vấn được. Và nó nằm trong tay 4 người bạn 19 tuổi cộng với server của một startup 2 người.

**FACT liên quan.** *Communications Psychology* (Nature, 2024): giám sát bằng thuật toán làm giảm cảm giác tự chủ và tăng kháng cự **mạnh hơn** giám sát bởi con người. https://www.nature.com/articles/s44271-024-00102-8 — đây là lập luận ủng hộ hướng peer-social của Teemi, nhưng nó **không** miễn trừ Teemi khỏi việc peer surveillance vẫn là surveillance.

**Vấn đề widget.** r04 khuyến nghị widget P0 với nội dung "**3/5 đã nộp · mày chưa**". Widget này hiển thị **trạng thái thiếu sót của một người trên màn hình khoá của 4 người khác**. GUESS (không có nguồn cho VN): nếu mỗi người mở khoá máy ~60 lần/ngày, đó là **~240 lượt phơi bày/ngày** trạng thái "Minh chưa nộp". Đó không phải một lời nhắc. Đó là một bảng thông báo treo trong túi bốn người.

**Safeguard cụ thể:**
1. **Widget chỉ hiện số, không hiện tên người CHƯA nộp.** "3/5 đã nộp" + avatar của 3 người ĐÃ nộp. Người chưa nộp thấy trên máy MÌNH dòng "mày chưa" (self-facing), người khác không thấy. Chi phí: một tham số `viewer_id` khi render widget.
2. **Màn hình "Nhóm thấy gì về bạn"** trong Settings, bắt buộc xem 1 lần ở onboarding: liệt kê đúng những trường nhóm nhìn được (proof, giờ nộp, streak, trạng thái) và những trường không (goal nếu private, vị trí, thiết bị). Đây là consent surface thật, không phải ToS.
3. **Ảnh proof TTL 90 ngày mặc định.** Muốn giữ vĩnh viễn thì phải **pin vào Timeline** — một hành động chủ động. Đảo nguyên tắc từ "mọi thứ đều lưu" sang "ký ức phải được CHỌN". Vừa cắt chi phí storage (r05), vừa cắt bề mặt rủi ro, vừa làm Memory Capsule ý nghĩa hơn.
4. **Strip EXIF/GPS client-side, không xin quyền Location** (khớp r06). Không tích hợp HealthKit/Google Fit ở MVP.

---

## 5. Người rời nhóm và người bị đá: chưa có ai trả lời, và câu trả lời xung đột trực tiếp với mô hình doanh thu

doc-01 không có một dòng nào về việc rời nhóm. Đây không phải thiếu sót nhỏ.

**Xung đột 1 — pháp lý.** NĐ 356/2025 buộc hoàn tất yêu cầu xoá dữ liệu trong **20 ngày**; NĐ 147/2024 buộc mạng xã hội lưu nhật ký tối thiểu **02 năm**. Điều 32 Bộ luật Dân sự 2015 quy định dùng hình ảnh cá nhân phải có sự đồng ý của người đó *(FACT — luật hiện hành; không fetch được nguyên văn trong phiên này, cần verify với luật sư)*. Sau khi Minh rời nhóm, Teemi tiếp tục lưu và hiển thị ảnh mặt Minh cho 4 người còn lại — **trên cơ sở đồng ý nào?**

**Xung đột 2 — thương mại.** r08 đề xuất paywall đặt ở **loss aversion**: free lưu 90 ngày, 399k/năm để "mở khoá toàn bộ kho ký ức nhóm". Nghĩa là Teemi **bán một kho ký ức chứa dữ liệu của người đã rút lại sự đồng ý**. Nếu tôn trọng quyền xoá, sản phẩm trả phí bị đục lỗ. Nếu không, đó là vi phạm có thu tiền — tình tiết tăng nặng.

**Kịch bản cụ thể.** Nhóm 5 người, tháng thứ 8, đã trả 399k/năm. Hai người cãi nhau ngoài đời; Minh bị 4 người còn lại vote kick. Timeline nhóm còn 240 ảnh có mặt Minh, 3 danh hiệu "Báo Thủ của tuần" gắn tên Minh, và một Memory Capsule cuối season có ảnh Minh làm cover. Minh gửi yêu cầu xoá. Teemi có **20 ngày** để trả lời. Bốn người kia đã trả tiền cho chính kho ảnh đó. **Không có phương án nào làm hài lòng cả hai bên — nên phải quyết định TRƯỚC, không phải khi nhận email đầu tiên.**

**Safeguard cụ thể:**
1. **Tách hai nút, hai ngữ nghĩa:** "Rời nhóm" (giữ dữ liệu, không tham gia nữa) và "Rời nhóm + xoá dấu vết của tôi" (xoá cứng media + tên + avatar). Không bao giờ gộp.
2. **Xoá phân tầng, ghi rõ trong Privacy Policy TRƯỚC khi user tạo proof đầu tiên:** (a) xoá cứng media + PII + nội dung do user tạo; (b) giữ event đã ẩn danh ("một thành viên đã nộp proof") để recap lịch sử không vỡ; (c) giữ log kỹ thuật tối thiểu (IP, timestamp login) theo nghĩa vụ luật định.
3. **Quyền phủ quyết ảnh:** bất kỳ ai xuất hiện trong một ảnh proof đều có quyền gỡ ảnh đó khỏi Timeline nhóm, kể cả sau khi rời. Cần một bảng `photo_subjects` do người đăng tự tag — đơn giản, không dùng face detection (face detection sẽ giết miễn trừ Điều 38, xem r06).
4. **Kick không được im lặng.** Kick sinh notification cho người bị kick + **7 ngày grace period** để export dữ liệu của mình (ZIP ảnh + JSON) trước khi mất quyền truy cập. Kick cần **đa số tuyệt đối** và **không cho kick trong 48h sau một sự kiện miss** (chống kick vì tức giận).
5. **Danh hiệu tiêu cực của người rời bị xoá tự động.** "Báo Thủ" gắn tên người đã rời không được tồn tại quá 0 giây sau khi họ rời — nó không có giá trị memory, chỉ có giá trị làm nhục.
6. **Ghi rõ trên paywall:** "Kho ký ức có thể thay đổi nếu thành viên yêu cầu xoá dữ liệu của họ." Nếu không ghi, đó là quảng cáo sai về sản phẩm đang bán.

---

## 6. Vị thành niên: age gate tự khai không hoạt động, và tiền lệ store là án gỡ app không báo trước — RỦI RO CHÍ TỬ

**FACT.** Luật An ninh mạng 116/2025/QH15, Điều 16 khoản 2 (hiệu lực 01/07/2026, **đang áp dụng**): cha mẹ/người giám hộ phải **đăng ký tài khoản bằng thông tin của mình** cho trẻ dưới 16 tuổi. NĐ 330/2026 (19/08/2026): xử lý dữ liệu trẻ em trái phép phạt tới **3 tỷ đồng** với tổ chức.

**FACT.** Apple App Store Review Guideline 1.1.1 cấm nội dung mean-spirited có khả năng làm nhục cá nhân cụ thể; Guideline 1.2 nói app dùng chủ yếu cho bullying hoặc objectification of real people **không thuộc App Store và có thể bị gỡ không cần báo trước**. https://developer.apple.com/app-store/review/guidelines/

**FACT — tiền lệ đã xảy ra, không phải giả định:**
- **Sarahah**: petition khởi xướng 12/01/2018 bởi một người mẹ có con gái 13 tuổi nhận tin nhắn lăng mạ, đạt **~470.000 chữ ký**; **cả Apple và Google gỡ app** trong tháng 02/2018. https://en.wikipedia.org/wiki/Sarahah
- **Yik Yak**: bị cấm ở hàng loạt trường học Mỹ, buộc phải **geofence ~85% trường cấp 2–3 Mỹ**, downloads giảm **76% trong năm 2016**, đóng cửa 05/05/2017; relaunch 08/2021 với $6,25M seed rồi bị Sidechat mua 03/2023 và **gỡ khỏi Google Play**. https://en.wikipedia.org/wiki/Yik_Yak

**Vì sao Teemi ở đúng vùng này.** Ghép ba thứ: (a) nhóm bạn học cấp 3 là phân khúc **viral nhất** của Teemi — chính doc-01 §9.1 nhắm vào đó; (b) age gate tự khai bị bypass trong 5 giây; (c) ranking "Báo Thủ" + vote "sus" + roast = mô tả sách giáo khoa của peer bullying trong cộng đồng khép kín mà nạn nhân không thoát ra được (giống Yik Yak trong campus). Một screenshot "Báo Thủ tuần này: [tên]" trong nhóm lớp 11 đăng lên một fanpage — và đó là toàn bộ nội dung cần cho một bài báo.

**FACT bổ sung.** NAMHS Việt Nam: cyberbullying victimization 1,2% (95% CI 0,9–1,67) ở vị thành niên 10–17. *(Con số này thấp bất thường vì phương pháp khảo sát hộ gia đình — dùng làm sàn, không phải trần.)*

**Safeguard cụ thể:**
1. **Age gate neutral + hard block <16** (hỏi ngày sinh, không gợi ý đáp án đúng), lưu ngày sinh **hash + coarse bucket**, không lưu ngày chính xác. Ghi rõ trong ToS.
2. **Minor-safe mode ở cấp NHÓM, không cấp cá nhân:** nếu **bất kỳ** thành viên nào khai <18, toàn nhóm bị khoá cứng vào chế độ an toàn — **không roast, không sus, không ranking tiêu cực, không danh hiệu nhắm cá nhân**. Không cho nhóm tắt. Cách này chặn được cả trường hợp một đứa 15 tuổi khai 17 lọt vào nhóm 19 tuổi, vì đủ một người khai đúng là đủ.
3. **Bốn thành phần Apple 1.2 phải có TRƯỚC lần submit đầu, không phải sau reject:** (i) lọc nội dung (template-only + blocklist từ khoá); (ii) nút report trên **mọi** proof/roast, SLA xử lý 24h (gỡ nội dung + có thể loại user); (iii) **block user** — người bị block không thấy proof, không roast được, kể cả cùng nhóm; (iv) contact email công bố + EULA nêu rõ không dung thứ nội dung phản cảm.
4. **Country availability = Vietnam only ở MVP** (khớp r06) — loại COPPA/GDPR/DSA/luật age assurance Úc-Brazil-Utah-Louisiana khỏi bề mặt rủi ro.
5. **Tự nâng age rating lên 16+** khi khai bộ câu hỏi mới của Apple (hiệu lực từ 24/07/2025), khai trung thực có UGC + social features.
6. **Runbook khủng hoảng viết sẵn (1 trang):** ai trả lời báo chí, trong bao lâu, kill-switch để tắt toàn bộ tính năng roast trên server bằng một feature flag trong <5 phút. Nếu chưa có flag đó thì chưa được launch.

---

## 7. "Báo Thủ" + nguyên tắc "màn hình nào cũng phải đẹp khi screenshot" = MÂU THUẪN NỘI TẠI THỨ HAI

- **r02 khuyến nghị** làm design principle bắt buộc: *"mọi màn hình quan trọng phải đẹp khi bị screenshot nguyên trạng"*, vì screenshot-vào-Zalo là kênh phân phối thật.
- **doc-01 §8 muốn** "Tuần này ai là Báo Thủ?" trở thành ngôn ngữ nhóm.

Ghép hai điều này lại: Teemi đang **tối ưu khả năng lan truyền của nội dung làm nhục một người có tên thật**. Recap card có chữ to, contrast cao, tỉ lệ dễ crop — và ở giữa là dòng "Báo Thủ tuần này: Minh". Nội dung này rời khỏi context riêng tư trong đúng một cú chạm, và Teemi **không có cách nào thu hồi**.

**FACT.** Danh hiệu gắn nhãn **bản sắc** ("mày LÀ Báo Thủ") kích hoạt shame → withdrawal, đúng hành vi bỏ app. r03 xếp đây là "chỗ có rủi ro shame cao nhất trong toàn bộ product".

**Safeguard cụ thể:**
1. **Hai bản recap khác nhau, không phải một.** Recap trong app (đầy đủ) ≠ **share card** (bản xuất ra ngoài). Share card **strip toàn bộ tên gắn với nhãn tiêu cực**, chỉ giữ tổng hợp nhóm ("Nhóm Báo Chống Lười — 23/28 ngày, boss còn 12% máu"). Đây là 1 template renderer riêng, ~1 ngày công.
2. **Ranking tiêu cực không tồn tại ở dạng bảng.** "Ai nộp ít nhất" chỉ hiển thị **self-facing** cho chính người đó. Bảng xếp hạng chỉ có chiều dương.
3. **Danh hiệu tiêu cực phải là badge TỰ NHẬN.** Minh có thể tự gắn "Báo Thủ" cho mình (đó mới là hài hước tự trào — cấu trúc đã có trong văn hoá group chat VN). Hệ thống **không bao giờ** tự gán.
4. **Luôn phát cặp đôi:** mỗi danh hiệu tiêu cực opt-in phải đi kèm một danh hiệu tích cực trong cùng recap ("Người Cứu Team"), và reset **mỗi tuần** để không ai bị đóng đinh.
5. **Screenshot detection ở màn hình nhạy cảm** (iOS `userDidTakeScreenshot`): không chặn, chỉ hiện toast "Nhớ là cái này chỉ vui trong nhóm mình nha" — một nudge chuẩn mực, chi phí ~2 giờ.

---

## 8. Duo mode (n=2): cấu hình coercive control mà doc-01 đang quảng cáo là "retention tốt"

doc-01 §9.2 nói Duo dành cho "bạn thân, người yêu, crush, mentor/mentee" và "Duo có retention tốt".

**INFERENCE.** Trong nhóm 5, người bị roast có 3 người khác chứng kiến và có thể can. Trong Duo, roast là **1:1, riêng tư, không nhân chứng, không ai can**, và người bị áp lực không thể rời mà không phá vỡ chính quan hệ đó. Đây là mô tả cấu trúc của coercive control. Retention "tốt" của Duo có thể một phần đến từ việc **người ta không thoát ra được**, không phải vì họ thích.

**Kịch bản cụ thể.** A và B là người yêu. A thuyết phục B lập Duo. Kèo của B: "đi gym 5 buổi/tuần" + proof ảnh mỗi ngày. Boss chung nghĩa là B miss thì A "chịu thiệt". Sau 3 tuần, app đã tạo ra: bản ghi lịch trình hằng ngày của B, 21 ảnh cơ thể B, một cơ chế A biết chính xác khi nào B không làm, và một khung đạo đức cho A trách B. **Teemi không phát minh ra hành vi này — Teemi cung cấp hạ tầng cho nó.**

**Safeguard cụ thể:**
1. **Duo: tắt sus và tắt ranking mặc định, không cho bật lại.** Ở n=2, "sus" không phải trò đùa của nhóm mà là một người nghi ngờ một người.
2. **Kèo luôn self-authored.** Kỹ thuật: `goals.author_id` phải bằng `goals.owner_id`, enforce ở DB constraint. Không ai được tạo hay sửa kèo cho người khác, không có "gợi ý kèo cho bạn".
3. **"Rời và chặn" một chạm, không thông báo cho đối phương**, không hiện "đã rời lúc mấy giờ".
4. **Không hiển thị "last active" / "đang online"** ở bất kỳ đâu trong app. Đây là trường dữ liệu duy nhất trong toàn sản phẩm mà lợi ích engagement rõ ràng nhỏ hơn rủi ro giám sát bạn tình.
5. **Không đặt tên "Crush Mode"** — doc-01 đã đúng ở điểm này, giữ nguyên.

---

## 9. Ba metric an toàn phải đo từ ngày 1 (nếu không đo thì không biết mình đang gây hại)

Founder sẽ đo DAU, group retention, reaction density. Không cái nào phát hiện được tác hại. Thêm ba cái này, chi phí gần bằng 0:

| Metric | Định nghĩa | Ngưỡng báo động |
|---|---|---|
| **Roast Gini** | Hệ số Gini của phân bố "roast nhận được" trong mỗi nhóm/tuần | > 0,45 → nhóm có một mục tiêu cố định. Tự động hạ mức roast toàn nhóm + gửi nudge |
| **Silent exit rate** | % user rời nhóm trong 48h sau khi nhận ≥3 roast trong một ngày | > 8% → cơ chế roast đang đẩy người đi, không phải giữ người |
| **Report-to-proof ratio** | Số report / tổng proof | Bất kỳ giá trị nào > 0,1% cần đọc thủ công 100% |

Cộng thêm: **exit survey một câu** cho mọi người xoá tài khoản — "Có phải vì cảm thấy áp lực/khó chịu trong nhóm không? (có/không)". Một câu, một trường boolean. Đây là tín hiệu tác hại rẻ nhất tồn tại.

---

## 10. Kết luận thẳng

Mặt tác hại của Teemi **không phải rủi ro cần giảm thiểu — nó là cùng một cơ chế với giá trị sản phẩm**. Cà khịa là điểm khác biệt; cà khịa cũng là vector bắt nạt. Boss chung là moat; boss chung cũng là máy đổ lỗi. Timeline là chống novelty decay; timeline cũng là kho bằng chứng vĩnh viễn về người yếu nhất nhóm.

Điều đó **không** có nghĩa là bỏ dự án. Nó có nghĩa là: **các safeguard không phải phase 2, chúng là spec của MVP**, và phần lớn chúng rẻ (tổng ước lượng 6–10 ngày công cho toàn bộ danh sách trên — GUESS). Cái đắt không phải làm chúng; cái đắt là làm chúng sau khi Apple gỡ app, hoặc sau khi một bài báo tên "app cà khịa khiến học sinh..." lên trang nhất.

Hai mâu thuẫn nội tại (§3 và §7) phải được giải **trước khi viết dòng code đầu tiên**, vì cả hai đều là quyết định kiến trúc, không phải quyết định copywriting.

---

## Nguồn

- Keltner et al. (2001), *Psychological Bulletin* 127(2):229–248 — https://greatergood.berkeley.edu/dacherkeltner/docs/keltner.teasing.psychbull.2001.pdf
- Shame Withdraws, Guilt Corrects (2025), *Behavioral Sciences* 15(6):725 — https://www.mdpi.com/2076-328X/15/6/725
- Reconsidering the Differences Between Shame and Guilt — https://pmc.ncbi.nlm.nih.gov/articles/PMC6143989/
- Maggin, Pustejovsky & Johnson (2017), group contingency meta-analysis — https://journals.sagepub.com/doi/10.1177/0741932517716900
- Zelkowitz et al. (2022), *Int J Eat Disord*, n=1.451 học sinh cấp 3 VN — DOI 10.1002/eat.23813 (PMID 36165444)
- NAMHS Việt Nam, *The Lancet* (2024) — DOI 10.1016/S0140-6736(23)02641-7 (PMID 38588689)
- Algorithmic vs human surveillance (2024), *Communications Psychology* — https://www.nature.com/articles/s44271-024-00102-8
- Apple App Store Review Guidelines 1.1.1 & 1.2 — https://developer.apple.com/app-store/review/guidelines/
- Sarahah (petition ~470k chữ ký, Apple+Google gỡ 02/2018) — https://en.wikipedia.org/wiki/Sarahah
- Yik Yak (geofence ~85% trường Mỹ, downloads -76% năm 2016, đóng cửa 05/05/2017) — https://en.wikipedia.org/wiki/Yik_Yak
- BeReal audience stats (55% đăng trong cửa sổ 2 phút) — https://bereal.com/ads/audience
- Luật An ninh mạng 116/2025/QH15 Điều 16.2 — https://xaydungchinhsach.chinhphu.vn/nhung-noi-dung-moi-trong-luat-an-ninh-mang-so-116-2025-qh15-119260629145615168.htm
- NĐ 330/2026/NĐ-CP (mức phạt) — https://baochinhphu.vn/muc-xu-phat-vi-pham-hanh-chinh-doi-voi-hanh-vi-vi-pham-ve-bao-ve-du-lieu-ca-nhan-102260822154959691.htm
- Luật 91/2025 Điều 38.2 (miễn trừ 5 năm) + NĐ 356/2025 (xoá 20 ngày) — https://www.frasersvn.com/vi/legal-updates-and-publications/the-next-chapter-in-data-protection-new-decree-guiding-the-personal-data-protection-law
