# R03 — KHOA HỌC HÀNH VI: CÁI GÌ THẬT SỰ LÀM NGƯỜI TA DUY TRÌ

_Nghiên cứu nền tảng cho cơ chế của Teemi — accountability, streak, boss chung, cà khịa, SDT, habit formation._
_Ngày: 2026-08-28 · Trạng thái: research draft, chưa qua phản biện của founder_

---

## 0. Cách đọc tài liệu này

Mỗi khẳng định được gắn nhãn độ tin cậy:

| Nhãn | Nghĩa |
|---|---|
| **FACT** | Có nguồn cụ thể, có URL, đọc được methodology hoặc abstract |
| **INFERENCE** | Suy luận logic từ FACT sang bối cảnh Teemi — chưa ai test đúng trên app kiểu Teemi |
| **GUESS** | Phán đoán của người viết, cần test bằng user research/A-B, không được dùng làm căn cứ quyết định lớn |

**Cảnh báo tổng quát trước khi đọc:** rất nhiều "số liệu behavior design" lan truyền trên internet là bịa hoặc bị bóp méo. Phần 1 dưới đây bắt đầu bằng việc dập một con số mà **founder gần như chắc chắn sẽ gặp khi đọc blog growth**.

---

## 1. ACCOUNTABILITY — hiệu quả thật đến đâu

### 1.1. Con số 65% / 95% của "ASTD" là RÁC. Đừng dùng.

Con số lan truyền: _"Bạn có 65% khả năng đạt mục tiêu nếu cam kết với ai đó, và 95% nếu có lịch hẹn accountability định kỳ — theo American Society of Training and Development."_

**FACT (negative):** Không tồn tại bài nghiên cứu ASTD nào với methodology, sample size, hay dataset công khai đứng sau hai con số này. Nó được lặp lại qua hàng trăm blog coaching/fitness/Forbes Council mà **không blog nào dẫn được về nguồn gốc**. Ví dụ điển hình của việc lặp lại tạo ra "sự thật".
- [Entrepreneur — An Accountability Partner Makes You Vastly More Likely to Succeed](https://www.entrepreneur.com/leadership/an-accountability-partner-makes-you-vastly-more-likely-to/310062) (lặp lại con số, không dẫn nguồn gốc)
- [Forbes Coaches Council](https://www.forbes.com/sites/forbescoachescouncil/2018/08/14/three-steps-to-overcoming-resistance/) (tương tự)

**Hệ quả cho Teemi:** không được đưa con số này vào pitch deck, landing page, hay App Store description. Một nhà đầu tư hoặc một journalist tra 5 phút là ra. Rủi ro uy tín > lợi ích marketing.

### 1.2. Nghiên cứu Matthews (Dominican University) — có thật, nhưng yếu hơn người ta tưởng

**FACT:** Gail Matthews (Dominican University of California) tuyển 267 người, chia ngẫu nhiên 5 nhóm, theo dõi 4 tuần:

| Nhóm | Điều kiện |
|---|---|
| 1 | Chỉ **nghĩ** về mục tiêu |
| 2 | **Viết** mục tiêu ra |
| 3 | Viết + cam kết hành động |
| 4 | Viết + cam kết + **gửi cho một người bạn** |
| 5 | Viết + cam kết + gửi bạn + **gửi update tiến độ hàng tuần** |

Kết quả được công bố: hơn **70%** nhóm 5 (gửi update hàng tuần cho bạn) báo cáo đạt mục tiêu hoặc đi được hơn nửa đường, so với **35%** nhóm 1 (chỉ nghĩ, không viết).
- [Dominican University news release](https://scholar.dominican.edu/cgi/viewcontent.cgi?article=1265&context=news-releases)
- [Trang conference presentation của Matthews](https://scholar.dominican.edu/psychology-faculty-conference-presentations/3/)

**FACT (giới hạn quan trọng):** chỉ **149/267** người hoàn thành nghiên cứu; kết quả là **self-report**; và nghiên cứu **không được xuất bản trên tạp chí peer-review** — nó tồn tại dưới dạng conference presentation + press release.
- [Bulletproof Musician — phân tích phê phán](https://bulletproofmusician.com/how-important-is-it-to-write-down-your-goals/)

**INFERENCE cho Teemi:** hướng đi (viết goal + báo cáo tiến độ định kỳ cho một người thật) là **đúng hướng và được ủng hộ bởi nhiều literature khác**, nhưng độ lớn hiệu ứng không được phóng đại. Điểm hành động rõ nhất từ Matthews: **cái tạo khác biệt lớn nhất là "gửi update định kỳ", không phải "nói ra mục tiêu một lần"** — đó chính xác là kiến trúc proof-hằng-ngày của Teemi. Đây là điểm mạnh khoa học nhất của Teemi.

### 1.3. Commitment device — literature kinh tế học, chắc chắn hơn nhiều

**FACT — Giné, Karlan & Zinman (2010), AEJ: Applied Economics.** Sản phẩm CARES cho người hút thuốc ở Philippines: gửi tiền vào tài khoản 6 tháng, test nước tiểu; đậu thì lấy lại tiền, rớt thì tiền sung từ thiện. Take-up **11%**. Người được mời tham gia có xác suất đậu test cao hơn nhóm control **3 điểm phần trăm**, và hiệu ứng còn giữ ở test bất ngờ tháng 12.
- [AEA](https://www.aeaweb.org/articles?id=10.1257%2Fapp.2.4.213) · [PDF Dartmouth](https://digitalcommons.dartmouth.edu/cgi/viewcontent.cgi?article=3386&context=facoa)

**FACT — Ashraf, Karlan & Yin (SEED, Philippines).** Tài khoản tiết kiệm có ràng buộc: take-up **28%**, người được mời tăng số dư tiết kiệm ~**80%** so với control sau 1 năm.

**FACT — Bryan, Karlan & Nelson (2010), "Commitment Devices", Annual Review of Economics** — tổng quan literature.
- [PDF](http://houdekpetr.cz/!data/public_html/papers/Bryan%20et%20al%202010.pdf)

**FACT (nhưng là dữ liệu tự công bố, có self-selection bias) — stickK.** Theo số liệu stickK: tỉ lệ thành công **29%** khi không có referee và không có tiền cược; **59%** khi có referee; **~71.5%** khi có tiền cược; gần **80%** khi có cả hai.
- [stickK — About](https://www.stickk.com/aboutus)

> **Cảnh báo:** đây KHÔNG phải RCT. Người tự chọn đặt referee + tiền cược vốn đã là người có động lực cao hơn. Con số 80% là **tương quan**, không phải nhân quả. Đừng trích như bằng chứng nhân quả.

**INFERENCE cho Teemi — bài học quan trọng nhất từ commitment device literature:**
1. **Take-up luôn thấp** (11–28%). Người ta *nói* muốn bị ràng buộc nhiều hơn *thực sự chọn* bị ràng buộc. Nếu Teemi bắt buộc commitment nặng ngay onboarding → mất phần lớn user ở bước đó.
2. **Referee (người xác nhận) làm tăng hiệu quả rõ rệt** — và đây chính là cơ chế "nhóm duyệt proof / pass / sus" của Teemi. Đây là feature có nền tảng khoa học tốt nhất trong toàn bộ product.
3. Cược **tiền thật** hiệu quả nhưng đắt về mặt trải nghiệm và pháp lý — chiến lược "MVP không voucher/tiền thật" của doc-01 là đúng.

### 1.4. NGHỊCH LÝ NGUY HIỂM: nói mục tiêu ra có thể làm GIẢM hành động

**FACT — Gollwitzer, Sheeran, Michalski & Seifert (2009), Psychological Science 20(5):612–618.** 4 thí nghiệm: ý định hành vi **liên quan tới bản sắc** (identity-related, ví dụ "tôi sẽ đọc tạp chí luật đều để trở thành luật sư") mà **được người khác ghi nhận** thì được chuyển thành hành động **ít hơn** so với khi bị phớt lờ. Cơ chế (Study 4): việc người khác công nhận ý định tạo ra **cảm giác đã sở hữu bản sắc đó rồi** (premature sense of completeness). Hiệu ứng chỉ xuất hiện ở người **cam kết mạnh** với identity goal.
- [Psychological Science](https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2009.02336.x) · [PubMed](https://www.unboundmedicine.com/medline/citation/19389130/)

**Đây là red flag trực tiếp với Teemi.** Teemi có một bước "user tuyên bố kèo với cả nhóm". Nếu nhóm **reaction rầm rộ vào lúc tuyên bố kèo** (like, "cố lên", "quá đỉnh"), user có thể nhận reward xã hội cho **ý định**, không phải cho **hành động** → giảm động lực làm thật.

**INFERENCE — thiết kế đối phó:** ăn mừng phải nằm ở **proof**, không nằm ở **tuyên bố**. Cụ thể: khi user set goal, UI nên **im lặng, khô, mang tính hợp đồng** ("Kèo đã khoá. Ngày mai nộp proof đầu tiên."). Reaction/cà khịa/hiệu ứng chỉ mở khoá sau proof đầu tiên. Xem Nguyên tắc P1 ở §7.

---

## 2. STREAK — con dao hai lưỡi

### 2.1. Streak thật sự làm tăng engagement — bằng chứng

**FACT — Silverman & Barasch (2023), Journal of Consumer Research 49(6):1095–1117, "On or Off Track: How (Broken) Streaks Affect Consumer Decisions".** 7 nghiên cứu. Streak **còn nguyên** được highlight trong log làm tăng hành vi tiếp theo so với streak **bị đứt**. Điểm cốt lõi: hiệu ứng này **độc lập với hành vi quá khứ thực tế** — nó chỉ phụ thuộc vào **cách log biểu diễn hành vi đó**, vì người ta coi việc giữ streak là một mục tiêu tự thân.
- [JCR / Oxford Academic](https://academic.oup.com/jcr/article-abstract/49/6/1095/6623414) · [INSEAD](https://www.insead.edu/faculty-research/publications/journal-articles/or-track-how-broken-streaks-affect-consumer)

**Hai moderator quan trọng nhất (FACT, từ chính bài đó):**
- Hiệu ứng tiêu cực của streak đứt **mạnh hơn khi user tự quy lỗi cho bản thân** (internal attribution) thay vì cho yếu tố ngoại cảnh.
- Hiệu ứng tiêu cực **giảm hẳn khi user có thể "sửa" (repair) streak đã đứt**.

> Đây là bằng chứng học thuật trực tiếp nhất cho việc Teemi **phải có** cơ chế "Life Happens / Skip / streak repair", và **phải cho phép user gán lý do ngoại cảnh** ("hôm nay ốm", "đi công tác"). Doc-01 đã liệt kê Life Happens / Skip / Pause — literature ủng hộ mạnh.

**FACT — dữ liệu Duolingo (self-reported, không phải peer-review nhưng là A/B test quy mô lớn):**
| Số liệu | Nguồn |
|---|---|
| Streak Wager làm tăng retention D1/D7/D14 có ý nghĩa thống kê; D7 tăng **+14%** | [Duolingo Blog](https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/) |
| Weekend Amulet: user được mời **+4%** khả năng quay lại sau 1 tuần, **−5%** khả năng mất streak | như trên |
| DAU giảm **5–10%** vào cuối tuần → lý do ra đời Weekend Amulet | như trên |
| Người đạt streak 7 ngày có khả năng hoàn thành khoá cao gấp **3.6 lần** | [Duolingo](https://blog.duolingo.com/how-duolingo-streak-builds-habit) (số liệu quan sát, có self-selection) |
| Người có ít nhất 1 **Friend Streak** có khả năng hoàn thành bài học hàng ngày cao hơn **22%** | Duolingo Blog |

**Tại sao Duolingo tạo ra Streak Freeze / Weekend Amulet (FACT + INFERENCE):** để chống "streak-snapping frustration" và burnout — tức là chính họ nhận ra streak đứt gây bỏ app. Duolingo đã chạy **hơn 600 experiment chỉ riêng cho streak**.
- [Duolingo — improving the streak](https://blog.duolingo.com/improving-the-streak)

### 2.2. Mặt tối: streak anxiety và "what the hell effect"

**FACT — Snapchat streaks & adolescents.** Nghiên cứu định tính và định lượng cho thấy streak vừa tạo social validation vừa tạo **stress và cảm giác nghĩa vụ**; thiếu niên coi việc đứt streak như **sự từ chối cá nhân**, và streak được dùng như thước đo độ mạnh của quan hệ bạn bè. Có liên hệ với problematic smartphone use và FOMO.
- [ScienceDirect (2023)](https://www.sciencedirect.com/science/article/pii/S2772503023000476)

> Đối tượng của nghiên cứu này (early adolescents) **trẻ hơn** target 16–28 của Teemi, nhưng cơ chế "streak = thước đo tình bạn" là cực kỳ liên quan vì Teemi là app **nhóm bạn thân**.

**FACT — "What the hell effect" / abstinence violation effect (Cochran & Tesser, 1996).** Khi người ta vi phạm một tiêu chuẩn dù chỉ một chút, họ có xu hướng buông luôn, vì với họ "thất bại lớn không khác chất so với thất bại nhỏ". Nghiên cứu gần đây gọi là "setback effect".
- [ten Broeke et al. 2023, European Journal of Social Psychology](https://onlinelibrary.wiley.com/doi/full/10.1002/ejsp.2931)
- [Adriaanse et al. 2022, Applied Psychology: Health and Well-Being](https://iaap-journals.onlinelibrary.wiley.com/doi/10.1111/aphw.12302)

**FACT — Lally 2010 (chi tiết ở §6): bỏ lỡ MỘT cơ hội thực hiện hành vi KHÔNG ảnh hưởng đáng kể tới quá trình hình thành thói quen.** Nghĩa là: về mặt habit science, đứt một ngày **không quan trọng**. Nhưng về mặt tâm lý streak, nó **rất quan trọng** — và sự lệch pha này là do **thiết kế app tạo ra**, không phải do sinh học.

### 2.3. Loss aversion — đừng xây cả sản phẩm trên nó

**FACT (tranh cãi học thuật).** Gal & Rucker (2018, Journal of Consumer Psychology 28:497–516) lập luận rằng loss aversion **không phải hiện tượng phổ quát tỉ lệ 2:1** như textbook nói; hiệu ứng tồn tại nhưng **phụ thuộc bối cảnh** và nhỏ hơn nhiều so với cách nó được phổ biến.
- [JCP](https://myscp.onlinelibrary.wiley.com/doi/abs/10.1002/jcpy.1047) · [Undark — tổng hợp tranh luận](https://undark.org/2021/11/15/among-social-scientists-a-vigorous-debate-over-loss-aversion/)

**INFERENCE:** con số "mất đau gấp 2 lần được vui" thường bị các blog gamification trích như định luật. Teemi không nên xây cơ chế cốt lõi dựa vào giả định loss aversion mạnh. Boss **hồi máu** khi có người miss là một cơ chế loss-framing — nó có thể hiệu quả, nhưng phải test, không được coi là chắc chắn.

### 2.4. Kết luận về streak cho Teemi

**Streak lợi hay hại cho habit dài hạn?** Trả lời trung thực từ literature: **streak tốt cho engagement ngắn–trung hạn, nhưng rủi ro cho habit dài hạn nếu không có cơ chế phục hồi.** Lý do:
- Nó tạo mục tiêu thay thế (giữ số) lấn át mục tiêu thật (học/tập/ngủ sớm) — Silverman & Barasch chỉ rõ streak trở thành goal tự thân.
- Nó biến một lần miss (vô hại theo Lally) thành một sự kiện có ý nghĩa lớn → kích hoạt what-the-hell effect.

**INFERENCE — khuyến nghị cho Teemi:** Teemi có lợi thế lớn ở đây vì **đã có boss chung làm metric nhóm**. Nên **hạ streak cá nhân xuống hạng hai** (hiển thị nhỏ, không phải con số to nhất màn hình), và để **HP của boss + recap nhóm** là metric chính. Streak cá nhân giữ ở dạng "nhịp" (consistency ring / 7 ô tuần) chứ không phải "chuỗi số dễ vỡ".

---

## 3. MỤC TIÊU KHÁC NHAU + THƯỞNG CHUNG — phần rủi ro nhất của Teemi

Đây là cơ chế lõi và cũng là chỗ Teemi có thể chết. Cấu trúc của Teemi là một **interdependent group contingency với goal dị biệt** — một cấu hình mà literature vừa ủng hộ vừa cảnh báo.

### 3.1. Cấu trúc mục tiêu hợp tác: bằng chứng ủng hộ

**FACT — Johnson & Johnson, meta-analysis cooperative learning.** Cấu trúc hợp tác cho effect size **d ≈ 0.49** so với cạnh tranh và **d ≈ 0.53** so với cá nhân hoá, trên nhiều loại nhiệm vụ.
- [Johnson, Johnson & Smith PDF](https://karlsmithmn.org/wp-content/uploads/2017/08/Johnson-Johnson-Smith-Cooperative_Learning-JECT-Small_Group_Learning-draft.pdf)

**FACT — Group contingency trong lớp học (meta-analysis).** Maggin, Pustejovsky & Johnson (2017), *Remedial and Special Education*: group contingency nhìn chung hiệu quả; **85%** nghiên cứu dùng dạng interdependent.
- [SAGE](https://journals.sagepub.com/doi/10.1177/0741932517716900)

**FACT — nhưng cùng literature đó liệt kê rủi ro rõ ràng:** sabotage (thành viên cố tình phá để nhóm không đạt thưởng), **peer pressure tiêu cực**, và **scapegoating** (nhóm đổ lỗi cho một người). Khuyến nghị chuẩn là phải có biện pháp giảm cảm giác bất công.
- [Journal of Behavioral Education (2019)](https://link.springer.com/article/10.1007/s10864-019-09321-0)

> Dịch sang ngôn ngữ Teemi: **"Boss hồi máu vì mày đấy"** — câu mà doc-01 liệt kê như một inside joke đáng mơ ước — chính xác là **cơ chế scapegoating** mà literature cảnh báo. Nó có thể là joke vui trong nhóm bạn thân, và có thể là lý do một người rời nhóm. Ranh giới nằm ở §4.

### 3.2. Social loafing — mất động lực khi đóng góp bị hoà tan

**FACT — Karau & Williams (1993), JPSP, meta-analysis 78 nghiên cứu, >15,000 người.** Effect size trung bình **d ≈ −0.44**: người ta nỗ lực ít hơn khi làm việc tập thể so với làm cá nhân. Moderator mạnh nhất: **evaluation potential (khả năng bị đánh giá cá nhân)**, kỳ vọng về nỗ lực của đồng đội, **task meaningfulness**, và văn hoá.
- [PDF Purdue](http://www.psych.purdue.edu/~willia55/392F-'06/KarauWilliamsMetaAnalysisJPSP.pdf)

**Điều then chốt:** social loafing xảy ra khi **đóng góp cá nhân không nhận diện được**. Teemi **may mắn miễn nhiễm phần lớn** vì proof là **cá nhân, có tên, hiển thị công khai trong nhóm**. Đây là thiết kế đúng — và là lý do **không bao giờ được ẩn danh hoá proof hay gộp proof thành con số tổng**.

### 3.3. Sucker effect và free-rider — rủi ro thật của Teemi

**FACT — Sucker effect.** Người cảm thấy mình làm nhiều hơn phần công bằng sẽ **chủ động giảm nỗ lực** để khôi phục công bằng. Đây là một **vòng xoáy đi xuống**: thấy người khác free-ride → giảm nỗ lực để khỏi bị làm "thằng ngu" → nhóm sụp.
- [Schnake (1991), Journal of Management, "Equity in Effort: The Sucker Effect in Co-Acting Groups"](https://journals.sagepub.com/doi/abs/10.1177/014920639101700104)
- [Sage Encyclopedia — Sucker Effect](https://sk.sagepub.com/ency/edvol/processes/chpt/sucker-effect)

**FACT (từ cùng literature):** giữa hai chiến lược can thiệp — **goal setting** và **punishment** — thì **goal setting hiệu quả hơn punishment** trong việc giảm sucker effect.

**INFERENCE cho Teemi:** đây là bằng chứng để **không** làm app phạt. Doc-01 đã loại "app phạt tiền" — đúng. Thay vào đó, cơ chế đúng là **làm rõ và điều chỉnh mục tiêu** (goal setting), ví dụ: khi một thành viên miss 3 ngày liên tiếp, app **không** phạt mà **đề xuất hạ độ khó kèo của người đó**.

### 3.4. Köhler effect — bằng chứng MẠNH NHẤT ủng hộ mô hình "boss chung"

Đây là literature quan trọng nhất mà founder nên đọc kỹ.

**FACT — Köhler motivation gain effect.** Trong nhiệm vụ **conjunctive** (kết quả nhóm = kết quả của thành viên **yếu nhất**), thành viên yếu hơn **tăng nỗ lực** so với khi làm một mình. Hai cơ chế: (a) cảm giác **không thể thiếu (indispensability)** với nhóm, (b) **social comparison** hướng lên với partner mạnh hơn.

**FACT — điều kiện tối ưu về chênh lệch năng lực.** Motivation gain **lớn nhất khi chênh lệch năng lực ở mức vừa phải** — trong nghiên cứu gốc của Köhler, cực đại khi một người có thể kiên trì lâu hơn người kia khoảng **1.4 lần**. Quá bằng nhau → không có gain. Quá chênh lệch → sụp.

**FACT — đã được tái lập trong exergame với partner do phần mềm sinh ra** (Feltz, Kerr, Irwin, Forlenza, Samendinger và cộng sự):
- [Feltz et al. — A Test of the Köhler Motivation Effect in Exergames (PDF)](https://kar.kent.ac.uk/41319/1/Feltz%20et%20al.2014.CyberBuddy.pdf)
- [Forlenza, Kerr, Irwin & Feltz (2012) — Is My Exercise Partner Similar Enough?](https://journals.sagepub.com/doi/abs/10.1089/g4h.2012.0047)
- [Irwin et al. — Buddy Up: The Köhler Effect Applied to Health Games (PDF)](https://www.researchgate.net/profile/Brandon-Irwin/publication/51539278_Buddy_Up_The_Kohler_Effect_Applied_to_Health_Games/links/0912f5135f5d069fde000000/Buddy-Up-The-Kohler-Effect-Applied-to-Health-Games.pdf)
- [Introductory dialogue and the Köhler Effect (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC5703210/)

**INFERENCE — trả lời trực tiếp câu hỏi của founder: "boss chung có tạo shared stakes thật không khi goal khác nhau + độ khó khác nhau?"**

**Có — NHƯNG chỉ khi thoả 4 điều kiện sau.** Đây là kết luận tổng hợp từ Köhler + group contingency + CEM (Karau & Williams):

| Điều kiện | Vì sao (nguồn) | Teemi phải làm gì |
|---|---|---|
| **1. Đóng góp cá nhân phải nhìn thấy được và quy về từng người** | Karau & Williams: evaluation potential là moderator mạnh nhất chống loafing | Proof luôn có tên, có avatar, không bao giờ gộp ẩn danh |
| **2. Đóng góp phải được cảm nhận là "indispensable"** — thiếu tôi thì nhóm hụt thật | Köhler effect: indispensability là cơ chế chính | Damage của mỗi người phải hiển thị rõ trên HP bar boss; nhóm 4–6 người là hợp lý (nhóm càng lớn, cảm giác không-thể-thiếu càng loãng) |
| **3. Đóng góp phải được cảm nhận là CÔNG BẰNG dù goal khác nhau** | Sucker effect: bất công cảm nhận → tự giảm nỗ lực | **Damage phải chuẩn hoá theo độ khó tương đối của goal từng người, không theo độ khó tuyệt đối** — xem §3.5 |
| **4. Chênh lệch năng lực/độ đều đặn ở mức VỪA PHẢI, không quá lớn** | Köhler: gain cực đại ở tỉ lệ ~1.4x; chênh quá lớn thì sụp | Có Casual mode / Support mode để kéo người yếu lên trước khi họ bị bỏ lại |

### 3.5. Vấn đề kỹ thuật quan trọng nhất chưa được giải trong doc-01: quy đổi damage

**INFERENCE (cao độ tin cậy về logic, chưa có nghiên cứu trực tiếp):** Nếu Huy học tiếng Anh 15 phút và Minh "hôm nay không uống trà sữa" cùng gây **damage bằng nhau** cho boss, Huy sẽ cảm thấy bất công → sucker effect. Nhưng nếu damage tỉ lệ với độ khó **khách quan**, thì Minh cảm thấy vô dụng → mất indispensability → bỏ.

**Giải pháp đề xuất (GUESS, cần test):** damage nên tính theo **effort tương đối của chính người đó**, không theo độ khó tuyệt đối. Cụ thể:
- Mỗi người nộp proof đúng kèo của mình = **1 hit chuẩn**, bằng nhau cho mọi người. (Công bằng theo *nỗ lực tương đối*.)
- Boss chỉ nhận **combo/critical damage khi CẢ NHÓM nộp đủ trong ngày** — đây là phần **conjunctive**, tạo Köhler effect và tạo lý do thật để nhắc nhau.
- Độ khó goal cá nhân **không đổi damage**, mà đổi **phần thưởng cá nhân** (XP cá nhân, badge, title) — tách bạch "phần chung" và "phần riêng".

Nguyên tắc rút ra: **shared stakes phải dựa trên hành vi có mặt (showing up), không dựa trên thành tích (achievement).** Showing up là thứ mọi người đều có thể làm ngang nhau. Achievement thì không.

### 3.6. Cảnh báo phản trực giác: support có thể thua competition

**FACT — Zhang, Brackbill, Yang, Becker, Herbert & Centola (2016), Preventive Medicine Reports.** RCT 4 nhánh, 790 sinh viên đại học (tuổi TB 25.2), quan hệ hỗ trợ vs so sánh, thưởng cá nhân vs thưởng nhóm. Kết quả: nhánh **social comparison** đạt trung bình **5.1 và 5.5 lượt đi lớp tập/ngày**, cao hơn có ý nghĩa so với control (**2.9**); trong khi nhánh **social support** lại **tăng chậm hơn cả control**, chỉ **2.4 lượt/ngày**.
- [PubMed](https://www.ncbi.nlm.nih.gov/pubmed/27617191) · [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2211335516300936)

**INFERENCE — nhưng đọc kỹ giới hạn:** trong nghiên cứu đó, mạng lưới là **người lạ được ghép ngẫu nhiên**, không phải nhóm bạn thân có sẵn. Cơ chế support giữa người lạ vốn yếu. Teemi hoạt động trên **nhóm bạn có sẵn quan hệ**, nơi social support có ý nghĩa hơn nhiều.

**Tuy nhiên bài học vẫn còn giá trị:** một app **chỉ toàn động viên** ("cố lên bro") có nguy cơ nhạt và không đổi được hành vi. Teemi có lợi thế vì nó **trộn cả hai**: cà khịa/so sánh (comparison) + boss chung/hỗ trợ (cooperation). Đây là cấu hình có cơ sở — nhưng cần đo, không giả định.

---

## 4. CÀ KHỊA vs SHAMING — ranh giới ở đâu

### 4.1. Teasing: cơ chế hai mặt, đã được mô hình hoá

**FACT — Keltner, Capps, Kring, Young & Heerey (2001), Psychological Bulletin 127(2):229–248, "Just Teasing: A Conceptual Analysis and Empirical Review".** Định nghĩa tease là **"playful provocation"** — một hành động khiêu khích mang tính chơi đùa nhắm vào điều gì đó liên quan tới đối tượng, phân tích qua khái niệm **face** và **strategic interaction** của Goffman. Khung này giải thích **khi nào tease dẫn tới kết quả gắn kết (affiliative) và khi nào dẫn tới thù địch (hostile)**.

Các phát hiện thực nghiệm chính:
- **Vi phạm chuẩn mực và xung đột là thứ kích hoạt tease.**
- Trẻ em học tease theo cách playful, đặc biệt quanh **11–12 tuổi**, và càng lớn càng hiểu và thích tease hơn.
- **Tease thường xuyên hơn và thù địch hơn khi được khởi xướng bởi người có STATUS CAO và người thân quen.**
- [PDF đầy đủ — Greater Good, Berkeley](https://greatergood.berkeley.edu/dacherkeltner/docs/keltner.teasing.psychbull.2001.pdf) · [PubMed](https://pubmed.ncbi.nlm.nih.gov/11316012/)

**INFERENCE — biến số quyết định là gì:** theo khung face/Goffman, một tease "an toàn" cần **markers báo hiệu tính chơi đùa** (giọng, cường điệu, exaggeration, biểu cảm) và **sự đối xứng quyền lực**. Tease trở thành shaming khi: (a) mất markers báo hiệu playful — chỉ còn nội dung tấn công; (b) **bất đối xứng status** — nhiều người khịa một người; (c) nhắm vào **bản sắc** thay vì **hành vi**.

**Đây là điểm nguy hiểm nhất của Teemi:** một app cà khịa **loại bỏ chính xác những marker này** — không có giọng nói, không có biểu cảm mặt, chỉ còn text/sticker. Và cơ chế "cả nhóm reaction vào 1 người miss" **tạo ra bất đối xứng many-vs-one** một cách có hệ thống.

### 4.2. Shame vs Guilt — khung quyết định rõ nhất cho copywriting của app

**FACT.** Shame = đánh giá tiêu cực về **con người mình** (global, gắn với đặc điểm cố định) → dẫn tới **rút lui, né tránh, giấu**. Guilt = đánh giá tiêu cực về **hành vi cụ thể** (có thể sửa) → dẫn tới **hành động sửa chữa (reparative)**.
- [Shame Withdraws, Guilt Corrects — Behavioral Sciences (MDPI, 2025)](https://www.mdpi.com/2076-328X/15/6/725)
- [Reconsidering the Differences Between Shame and Guilt (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6143989/)
- [The social side of shame: approach versus withdrawal](https://www.tandfonline.com/doi/full/10.1080/02699931.2017.1422696)

**FACT bổ sung:** người có shame-proneness cao + guilt-proneness thấp có xu hướng hành xử **ngược** mục tiêu; ngược lại guilt cao + shame thấp thì tự kiểm soát tốt hơn.

**Đây là quy tắc copywriting cứng cho Teemi:**

| Loại câu | Nhắm vào | Hệ quả tâm lý | Dùng? |
|---|---|---|---|
| "Hôm nay chưa thấy proof của Nam" | Hành vi, mô tả | Guilt nhẹ → sửa | ✅ |
| "Nam nộp phút 89 à?" | Hành vi, playful, có nhịp | Guilt + affiliative tease | ✅ |
| "Nam lại dùng kỹ năng mất tích có điều kiện" | Hành vi, cường điệu hoá → có playful marker | Affiliative | ✅ (nhưng chỉ khi user tự chọn tone) |
| "Boss hồi máu vì mày đấy" | Hành vi + quy trách nhiệm tập thể | Shame nếu lặp lại, scapegoating | ⚠️ giới hạn tần suất, không auto-broadcast |
| "Nam là Báo Thủ của tuần" | **Bản sắc** (mày LÀ...) | **Shame → rút lui → bỏ app** | ❌ trừ khi user tự bật, và phải luân phiên/có phiên bản tích cực |

**INFERENCE quan trọng:** doc-01 có role "Báo Thủ". Danh hiệu **gắn nhãn bản sắc**, không phải hành vi. Đây là chỗ có rủi ro shame cao nhất trong toàn bộ product. Đề xuất: role phải (a) **tự nguyện opt-in ở cấp nhóm**, (b) **luân phiên nhanh** (theo tuần, reset), (c) đi kèm role tích cực cân bằng ("Người Cứu Team"), (d) không bao giờ hiển thị ngoài nhóm.

### 4.3. Nguyên tắc "consent trước, khịa sau"

**GUESS (chưa tìm được nghiên cứu trực tiếp về app, cần test):** trong nhóm bạn ngoài đời, quyền cà khịa được thương lượng ngầm qua thời gian. Trong app, nó bị mặc định bật. Vì vậy Teemi nên có **roast consent** ở cấp cá nhân: mỗi user chọn mức độ (Gentle / Normal / Savage) và **danh sách chủ đề cấm** (cân nặng, tiền, gia đình, học hành, ngoại hình). Nhóm không được override lựa chọn cá nhân. Đây cũng là hàng rào pháp lý/an toàn cho một app có user 16 tuổi.

---

## 5. SELF-DETERMINATION THEORY — Teemi thoả và vi phạm chỗ nào

### 5.1. Chấm điểm thiết kế Teemi theo 3 nhu cầu

**FACT nền:** SDT (Deci & Ryan) đặt ra 3 nhu cầu tâm lý cơ bản — **autonomy, competence, relatedness**. Trong mHealth app có gamification, intrinsic motivation chịu ảnh hưởng có ý nghĩa từ cả ba: autonomy (β=.312), competence (β=.346), relatedness (β=.165).
- [The Impact of Gamification-Induced Users' Feelings on Continued Use of mHealth Apps (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8391751/)

**FACT — meta-analysis gamification & SDT:** gamification làm tăng intrinsic motivation, autonomy và relatedness, nhưng **tác động lên competence rất nhỏ**; hai vấn đề lớn nhất được ghi nhận là học viên **thiếu cảm giác competence và thiếu autonomy** trong lớp gamified.
- [Springer, Educational Technology R&D](https://link.springer.com/article/10.1007/s11423-023-10337-7)
- [Kurnaz (2025), Psychology in the Schools — meta-analysis, g = 0.654](https://onlinelibrary.wiley.com/doi/10.1002/pits.70056)

**Bảng chấm điểm Teemi:**

| Nhu cầu | Teemi thoả mãn ở đâu | Teemi VI PHẠM ở đâu | Fix |
|---|---|---|---|
| **Autonomy** | ✅ Điểm mạnh lớn nhất: **mỗi người tự chọn kèo riêng**. Đây là điều gần như không app habit nhóm nào làm. | ⚠️ Boss chung tạo áp lực bên ngoài; notification kiểu "cả nhóm đang chờ mày" là **controlling language** → giảm autonomy | Notification dùng **informational language** ("Boss còn 40% HP, bạn còn 3 giờ") thay vì controlling ("Nộp ngay không cả nhóm chết") |
| **Competence** | ✅ Proof hằng ngày = feedback ngay; HP bar boss = progress rõ | ❌ **Điểm yếu chung của gamification (theo meta-analysis)**. Nếu goal quá khó, user liên tục fail → competence sụp | Bắt buộc có **cơ chế hạ độ khó** ("kèo dễ hơn" sau 3 lần miss); goal mặc định phải **dễ đến mức hơi buồn cười** |
| **Relatedness** | ✅✅ Điểm mạnh nhất về mặt lý thuyết: nhóm bạn thật, reaction, recap, memory capsule | ⚠️ Nếu cà khịa lệch sang shaming → relatedness đảo chiều thành nguồn đau | Xem §4 |

### 5.2. Overjustification effect — reward ngoại sinh làm hỏng động lực nội sinh ở mức nào

**FACT — Deci, Koestner & Ryan (1999), Psychological Bulletin 125(6):627–668, meta-analysis 128 nghiên cứu.** Reward hữu hình, được kỳ vọng trước, **làm giảm** free-choice intrinsic motivation: engagement-contingent **d = −0.40**, completion-contingent **d = −0.36**, performance-contingent **d = −0.28**.
- [PDF](https://home.ubalt.edu/tmitch/642/articles%20syllabus/Deci%20Koestner%20Ryan%20meta%20IM%20psy%20bull%2099.pdf) · [Deci, Koestner & Ryan (2001), Review of Educational Research](https://www.selfdeterminationtheory.org/SDT/documents/2001_DeciKoestnerRyan.pdf)

**Đọc chính xác kết quả này (rất hay bị trích sai):**
- Reward **hữu hình + được biết trước + gắn với việc làm hành vi** → hại nhất.
- Reward **bất ngờ (unexpected)** và **verbal praise / positive feedback** → **KHÔNG** làm hại, thậm chí có thể tăng intrinsic motivation.
- Hiệu ứng đo trên **free-choice behavior sau khi reward biến mất** — tức là đúng vấn đề "user có tiếp tục sau khi hết season không".

**INFERENCE cho Teemi — đây là căn cứ khoa học cho nguyên tắc "reward là gia vị" của doc-01:**
- ❌ **KHÔNG** hứa trước: "nộp proof 7 ngày liên tiếp → nhận voucher X". Đây là **expected tangible performance-contingent reward** — cấu hình gây hại nhất.
- ✅ **CÓ** thể làm: reaction/lời khen từ bạn (verbal, social — không nằm trong nhóm reward gây hại), **cosmetic bất ngờ** (boss skin drop ngẫu nhiên không báo trước), recap/memory (đây là **thông tin về tiến bộ**, không phải reward).
- Đây là lý do mạnh để giữ **sponsor/voucher ra khỏi MVP** — không chỉ vì anti-cheat như doc-01 nói, mà vì nó **trực tiếp phá động lực nội sinh**.

---

## 6. HABIT FORMATION — và độ dài season nên là bao nhiêu

### 6.1. Lally 2010 — số liệu thật, và cái mà số "66 ngày" che giấu

**FACT — Lally, van Jaarsveld, Potts & Wardle (2010), European Journal of Social Psychology 40(6):998–1009.** 96 tình nguyện viên chọn một hành vi ăn/uống/vận động thực hiện hằng ngày trong cùng bối cảnh, trong **12 tuần**, đo Self-Report Habit Index mỗi ngày.
- Thời gian để đạt **95% mức tự động hoá tối đa**: dao động **18 đến 254 ngày**.
- **Median 66 ngày** — nhưng chỉ ở nhóm thiểu số thành công đạt asymptote.
- **Bỏ lỡ một cơ hội thực hiện KHÔNG ảnh hưởng đáng kể tới quá trình hình thành thói quen.**
- [Wiley](https://onlinelibrary.wiley.com/doi/abs/10.1002/ejsp.674) · [BPS Research Digest](https://www.bps.org.uk/research-digest/how-form-habit)

**Điểm quan trọng bị bỏ qua khi trích "66 ngày":** đó là **median của một phân bố cực rộng và lệch**, trên n=96, với hành vi **đơn giản** (uống nước, ăn hoa quả). Hành vi phức tạp (tập gym) mất lâu hơn nhiều. Nên nói **"vài tuần tới vài tháng, tuỳ hành vi và tuỳ người"**, không nói "66 ngày".

### 6.2. Implementation intentions — can thiệp rẻ nhất có effect size lớn nhất

**FACT — Gollwitzer & Sheeran (2006), Advances in Experimental Social Psychology 38:69–119.** Meta-analysis **94 test độc lập, >8,000 người**: implementation intention (dạng "Nếu tình huống X xảy ra, tôi sẽ làm Y") có effect size **d = 0.65** lên goal attainment — mức trung bình-lớn.
- [ScienceDirect](https://www.sciencedirect.com/science/chapter/bookseries/abs/pii/S0065260106380021) · [PDF NCI](https://cancercontrol.cancer.gov/sites/default/files/2020-06/goal_intent_attain.pdf)

**INFERENCE — hành động rẻ nhất, hiệu quả nhất mà Teemi có thể làm ngay trong MVP:** ở bước tạo kèo, **không** cho user gõ "Học tiếng Anh". Bắt buộc điền theo template if-then:
> **"Sau khi [ăn tối] , tôi sẽ [học tiếng Anh 15 phút] tại [bàn học]."**

Ba trường: **cue (khi nào/sau việc gì) → hành vi → nơi chốn**. Thêm một trường **"giờ nộp proof mặc định"** để lên lịch notification đúng cue. Chi phí kỹ thuật gần bằng 0, effect size d=0.65. Đây là feature có tỉ lệ ROI cao nhất trong toàn bộ danh sách.

### 6.3. Hiệu ứng can thiệp phai rất nhanh — bằng chứng quy mô lớn

**FACT — Milkman et al. (2021), Nature 600:478–483, "Megastudies improve the impact of applied behavioural science".** 30 nhà khoa học, 15 đại học, **54 chương trình can thiệp 4 tuần**, **61,293** thành viên chuỗi phòng gym Mỹ. **45%** can thiệp làm tăng số lần đi gym/tuần trong 4 tuần (tăng ~9–27%). **Nhưng khi theo dõi về sau, người tham gia quay lại thói quen cũ** — hiệu ứng **không kéo dài** quá giai đoạn can thiệp.
- [Nature](https://www.nature.com/articles/s41586-021-04128-4) · [Penn Today](https://penntoday.upenn.edu/news/wharton-study-best-ways-boost-workout-habits)

**FACT (chi tiết quan trọng):** trong 5 can thiệp hiệu quả nhất, **hai** là **thưởng bonus cho việc QUAY LẠI sau khi lỡ một buổi tập**. Đây là bằng chứng thực nghiệm quy mô lớn cho cơ chế **comeback**.

> **Điều này xác nhận trực tiếp "Comeback Season" trong doc-01 là feature có căn cứ mạnh** — mạnh hơn cả streak. Nên nâng comeback từ "biện pháp giảm rủi ro" lên **cơ chế cốt lõi**.

### 6.4. Fresh start effect — căn cứ để chia season

**FACT — Dai, Milkman & Riis (2014), Management Science.** Ba nghiên cứu field: lượt search "diet", lượt đi gym, và lượt cam kết mục tiêu đều **tăng sau các mốc thời gian** (đầu tuần, đầu tháng, đầu năm, sinh nhật, ngày lễ). Cơ chế: mốc thời gian tạo **kỳ kế toán tinh thần mới**, đẩy thất bại quá khứ về "kỳ trước".
- [Management Science](https://pubsonline.informs.org/doi/10.1287/mnsc.2014.1901) · [PDF Wharton](https://faculty.wharton.upenn.edu/wp-content/uploads/2014/06/Dai_Fresh_Start_2014_Mgmt_Sci.pdf)

### 6.5. Kết luận: SEASON CỦA TEEMI NÊN DÀI BAO NHIÊU?

Tổng hợp 4 nguồn trên:

| Ràng buộc | Nguồn | Hàm ý |
|---|---|---|
| Habit cần vài tuần → vài tháng, median 66 ngày | Lally 2010 | Season <2 tuần thì quá ngắn để tạo habit thật |
| Hiệu ứng can thiệp phai nhanh sau 4 tuần | Milkman 2021 | Season >6–8 tuần thì hiệu ứng đã cạn, cần reset |
| Mốc thời gian tạo động lực mới | Dai 2014 | Cần điểm kết thúc/bắt đầu rõ ràng, gắn với mốc lịch |
| Comeback sau khi lỡ là can thiệp hiệu quả nhất | Milkman 2021 | Phải có cơ chế "vào lại" giữa season |

**Khuyến nghị (INFERENCE):**
- **Season = 4 tuần (28 ngày)**, bắt đầu vào **Thứ Hai** hoặc **mốc đầu tháng** để cưỡi fresh start effect.
- Có **mid-season checkpoint ở tuần 2** để điều chỉnh độ khó kèo (chống competence collapse).
- Giữa hai season có **khoảng nghỉ 2–3 ngày** — đây vừa là fresh start, vừa là lúc phát Memory Capsule (recap season) — biến sự kết thúc thành **phần thưởng cảm xúc**, không phải sự bỏ rơi.
- **KHÔNG** làm season vô hạn (streak chạy mãi) — vì đó là cấu hình khiến đứt streak = mất tất cả.
- Người muốn habit dài hạn sẽ đi qua **2–3 season liên tiếp ≈ 56–84 ngày**, khớp median 66 ngày của Lally một cách tự nhiên mà không bắt user cam kết 66 ngày ngay từ đầu.

---

## 7. KẾT LUẬN HÀNH ĐỘNG — 12 nguyên tắc thiết kế

| # | Nguyên tắc | Căn cứ | Quyết định cụ thể trong app |
|---|---|---|---|
| **P1** | **Ăn mừng ở PROOF, im lặng ở TUYÊN BỐ** | Gollwitzer 2009 — public intention tạo cảm giác đã hoàn thành | Màn hình "tạo kèo" không có confetti, không broadcast rầm rộ, không cho react. Reaction/animation mở khoá **sau proof đầu tiên** |
| **P2** | **Bắt buộc if-then khi tạo kèo** | Gollwitzer & Sheeran 2006, d=0.65 | Form tạo kèo có 3 trường bắt buộc: *sau khi [cue]* → *tôi sẽ [hành vi]* → *tại [nơi]* + giờ nộp proof mặc định |
| **P3** | **Damage bằng nhau cho mọi người; goal khó thì thưởng CÁ NHÂN cao hơn, không phải damage cao hơn** | Sucker effect (Schnake 1991) + Köhler indispensability | 1 proof = 1 hit chuẩn. Tách hoàn toàn "đóng góp nhóm" khỏi "thành tích cá nhân" |
| **P4** | **Bonus conjunctive: chỉ khi CẢ NHÓM đủ proof mới có critical hit** | Köhler effect mạnh nhất ở nhiệm vụ conjunctive | Boss có 2 thanh: damage tích luỹ cá nhân + "combo cả nhóm" mở khoá đòn đặc biệt |
| **P5** | **Proof luôn có danh tính, không bao giờ gộp ẩn danh** | Karau & Williams 1993 — evaluation potential là moderator mạnh nhất chống social loafing | Không có màn hình nào chỉ hiện "4/5 đã nộp" mà không hiện là ai |
| **P6** | **Bắt buộc có streak repair + cho phép gán lý do ngoại cảnh** | Silverman & Barasch 2023 — repair và external attribution triệt tiêu tác hại của streak đứt | "Life Happens": user chọn lý do (ốm/bận/đi xa), streak hiển thị dạng "tạm dừng" không phải "đứt"; giới hạn N lần/season |
| **P7** | **Boss HP là metric chính, streak cá nhân là metric phụ** | Silverman & Barasch — streak trở thành goal thay thế; Lally — miss 1 ngày vô hại | Home screen: HP boss to nhất. Streak cá nhân hiển thị nhỏ, dạng 7 ô tuần (consistency ring), không phải con số chuỗi |
| **P8** | **Comeback là cơ chế lõi, không phải feature giảm đau** | Milkman 2021 — 2/5 can thiệp tốt nhất là bonus cho việc quay lại sau khi lỡ | Miss 1 ngày → hôm sau nộp được **"đòn hồi sinh"** damage x2 + nhóm nhận notification tích cực ("Nam comeback") |
| **P9** | **Cà khịa phải có consent cá nhân + danh sách chủ đề cấm** | Keltner 2001 — tease thù địch hơn khi bất đối xứng status; app đã tước mất playful markers | Onboarding cá nhân chọn Gentle/Normal/Savage + chọn chủ đề cấm. Nhóm KHÔNG override được cá nhân |
| **P10** | **Copy nhắm HÀNH VI, không nhắm BẢN SẮC** | Shame withdraws, guilt corrects (MDPI 2025; Tangney) | Audit toàn bộ microcopy: cấm cấu trúc "mày LÀ X". Role kiểu "Báo Thủ" phải opt-in cấp nhóm, reset hàng tuần, luôn có role tích cực đối trọng |
| **P11** | **KHÔNG hứa trước phần thưởng hữu hình gắn với việc hoàn thành** | Deci, Koestner & Ryan 1999, d = −0.28 đến −0.40 | MVP: không voucher, không tiền, không "hoàn thành 7 ngày nhận X". Chỉ social praise + cosmetic **bất ngờ** + recap/memory |
| **P12** | **Season 4 tuần, khởi động vào mốc lịch, có checkpoint tuần 2 để hạ độ khó** | Lally 2010 + Milkman 2021 + Dai 2014 + meta-analysis competence | Season 28 ngày bắt đầu Thứ Hai; tuần 2 app chủ động hỏi "kèo này có quá khó không?"; nghỉ 2–3 ngày giữa season + phát Memory Capsule |

**Bonus P13 (nếu chọn được 13):** **Kích thước nhóm 4–6 người.** GUESS dựa trên Köhler (indispensability loãng khi nhóm to) + social loafing (tăng theo kích thước nhóm) + thực tế nhóm bạn thân Việt Nam. Cần test, nhưng đừng để nhóm 20 người ở MVP.

---

## 8. RED FLAGS — điều có thể giết Teemi, từ góc nhìn khoa học hành vi

1. **Scapegoating là hệ quả cấu trúc, không phải tai nạn.** "Boss hồi máu vì mày" được literature group contingency gọi thẳng tên là rủi ro. Nếu không có hàng rào, một nhóm 5 người sẽ nhanh chóng có một người bị đổ lỗi và người đó rời app — kéo theo cả nhóm chết vì nhóm 4 người mất nhịp.
2. **Vòng xoáy sucker effect làm nhóm chết đột ngột, không chết dần.** Khác với habit tracker cá nhân (user chán từ từ), app nhóm chết theo cascade: 1 người bỏ → người còn lại cảm thấy bất công → giảm nỗ lực → nhóm sập trong vài ngày. **Retention của Teemi nên đo ở cấp NHÓM, không cấp user.**
3. **Nghịch lý public intention (Gollwitzer 2009) có thể làm chính core loop phản tác dụng** nếu app thưởng cho việc tuyên bố kèo.
4. **Nếu thêm voucher/sponsor sớm, overjustification sẽ ăn mất động lực nội sinh** — và tác hại chỉ lộ ra **sau khi reward dừng**, tức là quá muộn để sửa.
5. **Đối tượng 16-18 tuổi + cơ chế streak + shaming = rủi ro an toàn thật.** Nghiên cứu Snapchat streak liên hệ với problematic smartphone use và FOMO ở thiếu niên. Cần chính sách rõ, không chỉ vì đạo đức mà vì rủi ro store review và báo chí.
6. **Bằng chứng cho "social support tăng vận động" yếu hơn nhiều người tưởng** (Centola 2016 — nhánh support thua cả control). Teemi không được giả định "có bạn bè là tự khắc hiệu quả".

---

## 9. NHỮNG GÌ CHƯA CÓ BẰNG CHỨNG — cần founder tự test

| Câu hỏi | Vì sao chưa trả lời được | Cách test rẻ nhất |
|---|---|---|
| Boss chung có tạo shared stakes thật với goal dị biệt không? | **KHÔNG TÌM ĐƯỢC NGHIÊN CỨU** nào về group contingency với **mục tiêu khác nhau giữa các thành viên** — literature hầu hết dùng cùng một hành vi mục tiêu | Wizard-of-Oz 2 nhóm bạn thật trong 2 tuần qua group chat, không cần app |
| Damage bằng nhau có bị coi là bất công không? | GUESS thuần | Hỏi trực tiếp 10 người: "Nếu bạn học 1 tiếng và bạn kia bỏ trà sữa, cùng gây damage như nhau — bạn thấy sao?" |
| Ngưỡng cà khịa của Gen Z Việt ở đâu | Keltner là nghiên cứu phương Tây; văn hoá "cà khịa" Việt Nam có chuẩn mực riêng, và yếu tố **thể diện** có thể làm shaming nặng hơn | Test 20 câu roast, chấm điểm 1-5 "vui / hơi quá / tổn thương" |
| Tỉ lệ nhóm sống sót hết 1 season | Không có benchmark cho category này | Đo group-level D7/D14/D28 ở beta |

---

## 10. DANH SÁCH NGUỒN CHÍNH

**Accountability & commitment**
- Gollwitzer, Sheeran, Michalski & Seifert (2009). When Intentions Go Public. *Psychological Science* 20(5), 612–618. https://journals.sagepub.com/doi/abs/10.1111/j.1467-9280.2009.02336.x
- Giné, Karlan & Zinman (2010). Put Your Money Where Your Butt Is. *AEJ: Applied Economics*. https://www.aeaweb.org/articles?id=10.1257%2Fapp.2.4.213
- Bryan, Karlan & Nelson (2010). Commitment Devices. http://houdekpetr.cz/!data/public_html/papers/Bryan%20et%20al%202010.pdf
- Matthews, G. (2015). Dominican University goal-setting study. https://scholar.dominican.edu/psychology-faculty-conference-presentations/3/
- stickK — self-reported success data. https://www.stickk.com/aboutus

**Streak**
- Silverman & Barasch (2023). On or Off Track. *JCR* 49(6), 1095–1117. https://academic.oup.com/jcr/article-abstract/49/6/1095/6623414
- Duolingo Blog — How Streaks Keep Learners Committed. https://blog.duolingo.com/how-streaks-keep-duolingo-learners-committed-to-their-language-goals/
- Duolingo Blog — Improving the Streak. https://blog.duolingo.com/improving-the-streak
- Snapchat streaks, problematic smartphone use & FOMO (2023). https://www.sciencedirect.com/science/article/pii/S2772503023000476
- Gal & Rucker (2018). The Loss of Loss Aversion. *JCP* 28, 497–516. https://myscp.onlinelibrary.wiley.com/doi/abs/10.1002/jcpy.1047
- ten Broeke et al. (2023). Understanding the setback effect. *EJSP*. https://onlinelibrary.wiley.com/doi/full/10.1002/ejsp.2931

**Interdependence, loafing, Köhler**
- Karau & Williams (1993). Social Loafing meta-analysis. *JPSP*. http://www.psych.purdue.edu/~willia55/392F-'06/KarauWilliamsMetaAnalysisJPSP.pdf
- Schnake (1991). Equity in Effort: The Sucker Effect. *Journal of Management*. https://journals.sagepub.com/doi/abs/10.1177/014920639101700104
- Maggin, Pustejovsky & Johnson (2017). Group Contingency meta-analysis. https://journals.sagepub.com/doi/10.1177/0741932517716900
- Interdependent Group Contingencies Reduce Disruption (2019). *J Behav Educ*. https://link.springer.com/article/10.1007/s10864-019-09321-0
- Johnson, Johnson & Smith. Cooperative Learning. https://karlsmithmn.org/wp-content/uploads/2017/08/Johnson-Johnson-Smith-Cooperative_Learning-JECT-Small_Group_Learning-draft.pdf
- Feltz et al. Köhler Motivation Effect in Exergames. https://kar.kent.ac.uk/41319/1/Feltz%20et%20al.2014.CyberBuddy.pdf
- Forlenza, Kerr, Irwin & Feltz (2012). Is My Exercise Partner Similar Enough? https://journals.sagepub.com/doi/abs/10.1089/g4h.2012.0047
- Zhang, Brackbill, Yang, Becker, Herbert & Centola (2016). Support or Competition? *Preventive Medicine Reports*. https://www.sciencedirect.com/science/article/pii/S2211335516300936

**Teasing, shame/guilt**
- Keltner, Capps, Kring, Young & Heerey (2001). Just Teasing. *Psychological Bulletin* 127(2), 229–248. https://greatergood.berkeley.edu/dacherkeltner/docs/keltner.teasing.psychbull.2001.pdf
- Shame Withdraws, Guilt Corrects (2025). *Behavioral Sciences* 15(6), 725. https://www.mdpi.com/2076-328X/15/6/725
- The social side of shame: approach versus withdrawal. *Cognition and Emotion*. https://www.tandfonline.com/doi/full/10.1080/02699931.2017.1422696

**SDT & reward**
- Deci, Koestner & Ryan (1999). *Psychological Bulletin* 125(6), 627–668. https://home.ubalt.edu/tmitch/642/articles%20syllabus/Deci%20Koestner%20Ryan%20meta%20IM%20psy%20bull%2099.pdf
- Deci, Koestner & Ryan (2001). *Review of Educational Research*. https://www.selfdeterminationtheory.org/SDT/documents/2001_DeciKoestnerRyan.pdf
- Gamification & SDT meta-analysis (2024). *ETR&D*. https://link.springer.com/article/10.1007/s11423-023-10337-7
- Kurnaz (2025). Gamification & K-12 motivation meta-analysis. *Psychology in the Schools*. https://onlinelibrary.wiley.com/doi/10.1002/pits.70056
- mHealth gamification & SDT SEM. https://pmc.ncbi.nlm.nih.gov/articles/PMC8391751/

**Habit formation**
- Lally, van Jaarsveld, Potts & Wardle (2010). *EJSP* 40(6), 998–1009. https://onlinelibrary.wiley.com/doi/abs/10.1002/ejsp.674
- Gollwitzer & Sheeran (2006). Implementation Intentions meta-analysis. *AESP* 38, 69–119. https://cancercontrol.cancer.gov/sites/default/files/2020-06/goal_intent_attain.pdf
- Milkman et al. (2021). Megastudies. *Nature* 600, 478–483. https://www.nature.com/articles/s41586-021-04128-4
- Dai, Milkman & Riis (2014). The Fresh Start Effect. *Management Science*. https://pubsonline.informs.org/doi/10.1287/mnsc.2014.1901
