# C — PHẢN BIỆN: THỰC TẾ RETENTION VÀ VÒNG ĐỜI
### Góc tấn công: giả định "nhóm bạn sẽ quay lại MỖI NGÀY"

> Ngày: 2026-08-28 · Đối tượng phản biện: `docs/00-source/doc-01-product-strategy.md` §7, §9, §12
> Quy ước: **[FACT]** = có nguồn trong corpus nghiên cứu · **[INFERENCE]** = suy luận từ số có nguồn · **[GUESS]** = tôi đoán, chưa có bằng chứng
> **Cảnh báo minh bạch:** ngân sách WebSearch của session này đã cạn (200/200 lượt). Mọi con số [FACT] dưới đây lấy từ `docs/research/r01–r08` đã verify nguồn. Mọi mô hình xác suất là **của tôi**, đánh dấu [INFERENCE]/[GUESS] — founder phải tự thay tham số bằng số đo thật sau beta.

---

## 0. Kết luận trước, lý lẽ sau

Doc chiến lược §7 viết: *"Điều cần chứng minh là: một nhóm bạn có quay lại mỗi ngày để nộp proof, reaction, xem boss và đọc recap không?"*

Câu trả lời từ số học: **gần như chắc chắn là KHÔNG, với nghĩa "mỗi ngày" mà cả sản phẩm đang giả định.**

Từ 1.000 lượt cài đầu tiên (chất lượng cao — founder tự nurture), mô hình của tôi cho ra:

| Mốc | Số còn lại | Ghi chú |
|---|---|---|
| 1.000 lượt cài (seed) | 1.000 | founder-nagged, không phải organic |
| Nhóm activate (≥3 người nộp proof trong 48h) | **~250 nhóm** | 25% |
| Nhóm còn ≥3 người Active ở D30 | **~31 nhóm** | 12,5% của nhóm đã activate |
| Nhóm bắt đầu Season 2 | **~19 nhóm** | |
| Nhóm sống hết Season 2 (~D60) | **~7 nhóm** | 0,7% của seed |

Và con số giết chết cả concept: **ngày mà cả 5 người cùng nộp proof — khoảnh khắc cảm xúc mà toàn bộ sản phẩm được thiết kế để tạo ra — xảy ra khoảng 1 lần trên 100 ngày** ở tỉ lệ tuân thủ thực tế. Chi tiết ở §3.

---

## 1. Cold start: xác suất một nhóm 3 người thật sự hình thành

### 1.1. Funnel và phép nhân

Doc §7 bước 1 là "User tham gia nhóm" — một dòng chữ che giấu 5 bước rơi rụng.

**Kịch bản A — invite thụ động (thả link vào group Zalo):**

| Bước | Tỉ lệ | Nguồn / cơ sở |
|---|---|---|
| Tin nhắn được đọc trong group chat | 85% | [GUESS] |
| Bấm vào link (có OG preview đẹp) | 35% | [GUESS] — r04 ghi rõ "KHÔNG TÌM ĐƯỢC SỐ LIỆU VN" cho CTR link trong Zalo |
| Link → store → cài thật | 30% | [GUESS] — dải conversion store page phổ thông |
| Cài → xong onboarding (Google/Apple sign-in + chọn kèo if-then 3 trường + join nhóm) | 60% | [INFERENCE] — onboarding Teemi nặng hơn Locket ("1 hành động, 0 giây setup", r02) nhiều lần |
| Onboard xong → nộp proof ngày đầu | 60% | [INFERENCE] |
| **Tích** | **3,2%** | 0,85×0,35×0,30×0,60×0,60 |

**Kịch bản B — invite chủ động (rủ mặt đối mặt, nhắn riêng, réo trong lớp):** 0,60×0,50×0,75×0,70 = **15,8%/người bạn**.

### 1.2. Xác suất nhóm hình thành

Cần ≥2 người bạn đi hết funnel (người mời + 2 = 3 người, ngưỡng "group activation" mà r04 đề xuất làm North Star).

| Kịch bản | p mỗi người | Số người được mời | P(≥2 người vào) |
|---|---|---|---|
| Organic TikTok, thả link Zalo | 0,08 | 4 | **3,4%** |
| Founder-nagged, mời tích cực | 0,16 | 6 | **24,7%** |
| Beta được founder onboard tận tay | 0,25 | 6 | **46,6%** |

**[INFERENCE — phân phối nhị thức, tham số là GUESS của tôi]**

### 1.3. Vì sao con số này là án tử cho growth

Ở kịch bản organic (kịch bản DUY NHẤT tạo được quy mô, vì K-factor ước tính 0,25–0,7 < 1 theo r04):

- **Cần ~29 lượt cài organic để tạo ra 1 nhóm sống 3 người** (1 / 0,034).
- CPI VN đo được: **$0,86 ≈ 22.600đ** ([Mapendo CPI 2025](https://mapendo.co/blog/cost-per-install-by-country-2025), r08) **[FACT]**
- → **Chi phí thật cho 1 nhóm hoạt động ≈ 664.000đ (~$25).**
- Doanh thu cơ sở r08 ước ~2.600đ thực nhận/MAU/năm → 1 nhóm 3 người = **7.800đ/năm**.
- **LTV/CAC ≈ 0,012.** Không phải "khó", mà là sai 2 bậc độ lớn.

> Điều này không phải phát hiện mới — r08 đã kết luận LTV/CAC < 1 ở mọi kịch bản. Cái mới là **hiểu ĐÚNG nguyên nhân**: không phải vì user VN không trả tiền. Mà vì **đơn vị sản phẩm của Teemi không phải 1 install, mà là 29 install**. Mọi bảng tài chính tính theo CPI/user đều sai đơn vị.

**Cách sửa duy nhất còn lại:** làm invite thành hành động của NHÓM chứ không của cá nhân — link mời phải mở ra web preview chơi được ngay (Partiful model, r04 §2.3b), người được mời **reaction và cà khịa được trên web trước khi cài app**. Nếu người thứ 2 và 3 chỉ đóng vai "khán giả web" trong 3 ngày đầu mà vẫn làm nhóm sống, tỉ lệ 3,4% có thể nâng lên 15–20%. Đây là thay đổi kiến trúc, không phải tối ưu UX — phải quyết TRƯỚC khi code.

---

## 2. Nhóm bạn không đồng đều — và người bỏ trước là người NHIỆT TÌNH NHẤT

### 2.1. Xác suất nhóm 5 người sống 30 ngày

Mô hình 2 lớp (vì thành viên trong nhóm có tương quan, không độc lập) **[INFERENCE]**:

- 30% nhóm là "nhóm khoẻ": D30 mỗi thành viên = 45%
- 70% nhóm là "nhóm yếu": D30 mỗi thành viên = 8%
- Trung bình gia quyền = **19% user D30** — cố tình đặt cao hơn dải top social 15–20% (UXCam, r04) để không bị chê bi quan.

| Kết quả | Nhóm khoẻ | Nhóm yếu | Tổng gia quyền |
|---|---|---|---|
| P(còn ≥3 Active ở D30) | 40,7% | 0,45% | **12,5%** |
| P(còn ≥2 Active ở D30) | 74,4% | 5,4% | **26,1%** |

### 2.2. Va chạm trực diện với chính tiêu chí kill của dự án

r08 đề xuất: *"Mục tiêu duy nhất của MVP là chứng minh D30 retention CẤP NHÓM ≥ 25%. Không đạt thì dừng dự án."*

**Mô hình của tôi nói ngưỡng đó gần như không đạt được nếu định nghĩa "nhóm sống = ≥3 người Active" (12,5%), và chỉ vừa đạt nếu định nghĩa "≥2 người" (26,1%).**

Nghĩa là: **định nghĩa "nhóm sống" quyết định dự án sống hay chết, chứ không phải sản phẩm.** Nếu founder không chốt định nghĩa này TRƯỚC khi chạy beta, người ta sẽ (một cách vô thức) nới định nghĩa để qua ngưỡng. Đó là cách mọi dự án tự lừa mình.

Và nếu định nghĩa "nhóm sống = 2 người" thì phải thừa nhận: **Teemi thực chất là app Duo, không phải app nhóm.** Toàn bộ định vị "Cả nhóm một boss", role pack, Báo Thủ, recap 5 người — là thiết kế cho một trạng thái chiếm 12,5% thời gian tồn tại của sản phẩm.

### 2.3. Cơ chế: người nhiệt tình bỏ TRƯỚC, không phải sau

Founder gần như chắc chắn đang giả định: người nhiệt tình là trụ cột giữ nhóm. Bằng chứng nói ngược lại.

- Karau & Williams (1993), meta-analysis 78 nghiên cứu, >15.000 người: social loafing **d ≈ -0,44** (r03) **[FACT]**
- Schnake (1991), sucker effect: người thấy đồng đội free-ride sẽ **tự giảm nỗ lực để không làm "thằng ngu"** (r03) **[FACT]**
- Zhang et al. (2016), RCT n=790: nhánh **social support (bạn bè động viên) đạt 2,4 lượt tập/ngày — THẤP HƠN nhóm control 2,9** (r03) **[FACT]**

Kịch bản cụ thể, dùng chính nhóm ví dụ trong doc §9.1:

> **Ngày 1.** Huy (người rủ, kèo học tiếng Anh 15 phút) nộp proof lúc 21:03. Nam, Linh, An, Minh nộp trong tối. Boss mất 5 hit. Group chat Zalo có 40 tin nhắn về app. Cảm giác tuyệt vời.
> **Ngày 3.** Minh (kèo "không uống trà sữa") quên. Boss hồi máu. Ai đó gõ "Boss hồi máu vì mày đấy 💀". Minh cười, nộp bù hôm sau.
> **Ngày 6.** An bận deadline, miss 2 ngày liên tiếp. Chuyển sang Casual.
> **Ngày 9.** Nam đã miss 4/9 ngày. Không ai cà khịa nữa — cà khịa lần thứ tư không còn vui, nó thành nhắc nợ. Nam tắt noti.
> **Ngày 12.** Huy vẫn nộp 12/12 ngày. Huy nhìn màn hình boss: 1/5 đã nộp. Huy là người duy nhất đang đánh. Huy mở app không phải để vui mà để **xác nhận là mình đang gánh**.
> **Ngày 14.** Huy dừng. Không phải vì lười — vì **sucker effect**. Nhóm chết ngày 14.

**Ước tính ngày chết trung vị của nhóm: D9–D14** [INFERENCE — nội suy giữa WeChat "40% nhóm chết trong 1 tuần" và "30% sống ≥30 ngày", r04] **[FACT cho 2 mốc WeChat]**

Hệ quả sản phẩm: **cơ chế "boss hồi máu khi có người miss" biến người nhiệt tình thành nạn nhân, và người nhiệt tình chính là người duy nhất bạn không được để mất.** r01/r03 đã khuyến nghị bỏ hồi máu — tôi đồng ý, và bổ sung lý do: hồi máu không phạt người lười (người lười không mở app để thấy), nó chỉ phạt **người đang mở app**.

---

## 3. [PHẢN BIỆN NẶNG NHẤT] Khoảnh khắc "cả nhóm nộp đủ" gần như không bao giờ xảy ra

Toàn bộ Köhler effect mà r03 dựa vào chỉ hoạt động ở nhiệm vụ **conjunctive** — r03 khuyến nghị: *"chỉ khi CẢ NHÓM nộp đủ trong ngày mới mở khoá critical hit/combo"*. Hãy tính xác suất sự kiện đó.

Gọi q = tỉ lệ một thành viên Active nộp proof trong một ngày bất kỳ.

| q (tỉ lệ nộp/người/ngày) | P(cả 5 nộp) = q⁵ | Tần suất |
|---|---|---|
| 40% | **1,0%** | 1 lần / 98 ngày |
| 50% | 3,1% | 1 lần / 32 ngày |
| 60% | **7,8%** | 1 lần / 13 ngày |
| 80% | 32,8% | 1 lần / 3 ngày |
| 95% (không thực tế) | 77,4% | |

q = 80% có thực tế không? Đối chiếu:

- **BeReal — sản phẩm ép buộc nhất về thời gian từng tồn tại — chỉ 55% user đăng trong cửa sổ 2 phút** ([bereal.com/ads/audience](https://bereal.com/ads/audience), r07) **[FACT]**. Mà BeReal chỉ đòi bấm nút, không đòi làm gì trước.
- **Duolingo** — app có 600+ experiment riêng cho streak — DAU/MAU công bố khoảng 30% [KHÔNG VERIFY ĐƯỢC trong session này, founder phải tự check]. Tức người dùng tháng trung bình mở app ~9 ngày/30.

**Kết luận số học: q thực tế của Teemi nằm ở 35–55%, không phải 80%.** Vì proof của Teemi = q của BeReal × xác suất user thật sự đã đi bộ 20 phút hôm đó.

→ **Combo "cả nhóm nộp đủ" xảy ra 1–3 lần mỗi tháng.** Trong 28 ngày của một season, nhóm nhìn thấy khoảnh khắc đỉnh cao khoảng **0–2 lần**. Ba tuần đầu tiên, boss HP tụt lệt bệt và không có gì đáng ăn mừng.

→ Nếu boss **hồi máu** khi có người miss: ở q=45%, số người miss kỳ vọng mỗi ngày = **2,75/5**. Boss hồi máu **mỗi ngày, gần như không có ngoại lệ**. Sau 7 ngày, HP boss cao hơn ngày đầu. **Cơ chế lõi tự phá huỷ trong tuần đầu tiên.**

**Đây là lỗi thiết kế toán học, không phải lỗi tuning.** Không sửa được bằng cách giảm HP boss. Phải đổi hàm: damage phải là **hàm đơn điệu tăng theo tổng proof tích luỹ, không bao giờ giảm**, và "combo cả nhóm" phải hạ ngưỡng xuống 3/5 hoặc "≥60% Active member", nếu không nó là một feature dead code.

---

## 4. Teemi đòi công sức cao hơn BeReal 60–120 lần — và BeReal đã chết

| | BeReal | Teemi |
|---|---|---|
| Chi phí ngày của user | Bấm nút, 2 ảnh: **10–30 giây** | Thực hiện hành vi (15–30 phút) + chụp: **15–30 phút** |
| Proof có phải là hành vi không? | Proof = hành vi (chụp là xong) | **Proof TÁCH RỜI hành vi** |
| Kết quả | −48% DAU trong 4 tháng; −85% trong 3 năm (r04) **[FACT]** | ? |

Đối chiếu ngược với **Yeolpumta/YPT** (~6,9M tải, ~160k tải/30 ngày, hạng #5 Education, r01) **[FACT]**: proof của YPT là **timer tự chạy** — proof CHÍNH LÀ hành vi, ma sát biên bằng 0. Và **Spar!** làm gần đúng ý tưởng Teemi (video proof + nhóm + thử thách chung) và **vô hình về mặt thị trường — KHÔNG TÌM ĐƯỢC bất kỳ số liệu DAU nào** (r01) **[FACT]**.

**Hệ quả cho ngân sách kỹ thuật:** r01 khuyến nghị "proof ≤3 giây, ≤2 chạm". Đúng, nhưng **đó là tối ưu 0,3% chi phí ngày của user**. 99,7% chi phí nằm ở 20 phút đi bộ mà app không chạm tới được. Mọi effort dồn vào "làm luồng nộp proof nhanh hơn" là **tối ưu sai biến số**.

Biến số thật là: **app có làm hành vi 20 phút kia dễ hơn không?** Câu trả lời hiện tại là không — Teemi chỉ quan sát và ghi điểm. Cái duy nhất trong backlog thật sự tác động vào đó là **implementation intention 3 trường if-then (d = 0,65, Gollwitzer & Sheeran 2006, meta 94 test, >8.000 người, r03)** **[FACT]** — và nó đang bị xếp ngang hàng với boss skin.

Và ngay cả nó cũng có hạn sử dụng: **Milkman et al. 2021 (Nature, 54 chương trình, 61.293 người): 45% can thiệp có hiệu quả (+9–27% lượt/tuần) nhưng hiệu ứng KHÔNG kéo dài quá giai đoạn can thiệp 4 tuần** (r03) **[FACT]**.

> Dịch sang tiếng Việt trần trụi: **megastudy lớn nhất từng chạy về động lực tập luyện nói rằng hiệu ứng biến mất sau 4 tuần.** Teemi đang bán một sản phẩm mà khoa học nói là có hiệu lực 4 tuần, với mô hình doanh thu giả định 12 tháng.

---

## 5. Tại sao nhóm bạn phải mở app THỨ HAI khi Zalo group miễn phí?

Số nền **[FACT, r02]**:
- 98% Gen Z VN dùng Zalo hằng tuần; 79,6 triệu MAU; **>2,1 tỷ tin nhắn/ngày**
- Người Việt dùng ~27 app/tuần, **7,2h/ngày**, top 6 app ăn gần hết
- AppsFlyer: lượt cài app VN **đã plateau**

**Cơ chế thất bại — "value leak":**

Teemi tạo ra 2 thứ: (a) **nghĩa vụ** (nộp proof), (b) **phần thưởng** (được cà khịa, được cười).

Nhưng (b) **rò rỉ ngược về Zalo**, vì:
1. Zalo có sticker, voice, meme, free-text, gọi video. Teemi có template roast do product viết sẵn (mà r06 khuyến nghị BẮT BUỘC dùng template để tránh Apple Guideline 1.2 về bullying). **Cà khịa bằng template thua cà khịa tự do — luôn luôn.**
2. r02 đã dự đoán đúng: recap/boss HP sẽ bị **screenshot rồi paste vào Zalo**. Nhưng hệ quả bị bỏ qua: **cú cười xảy ra trong Zalo, không trong Teemi.**

→ Teemi giữ lại 100% chi phí và mất phần lớn phần thưởng. Session Teemi = **~40 giây/ngày = 0,15% thời gian màn hình của user**. Một app ở mức đó bị gỡ ở đợt dọn máy đầu tiên.

**Locket không dính lỗi này** vì widget CHÍNH LÀ phần thưởng và **không tái tạo được trong Zalo** — không có cách nào để ảnh bạn thân xuất hiện trên home screen qua group chat. Đó là lý do Locket 9M DAU và có lãi (r01/r04) **[FACT]**.

**Câu hỏi sống-chết cho founder:** *Cái gì trong Teemi KHÔNG thể screenshot vào Zalo?* Nếu câu trả lời là "không có gì", Teemi là một tính năng của Zalo chứ không phải một app. Ứng viên duy nhất tôi thấy: **widget** + **timeline tích luỹ nhiều tháng**. Cả hai đang bị r05 khuyến nghị hoãn sang v1.1 vì chi phí kỹ thuật. **Đây là mâu thuẫn nghiêm trọng nhất giữa các bản nghiên cứu và cần được ra quyết định, không được để lửng.**

---

## 6. "Life Happens" / Casual / Spectator: giải áp lực bằng cách xoá nghĩa vụ

r04 khuyến nghị 4 trạng thái `Active → Casual → Spectator → Paused`, boss chỉ tính trên Active. Nghe rất nhân văn. Đây là mâu thuẫn logic không có lối thoát:

**Nếu boss damage chuẩn hoá theo số Active:** nhóm 5 người có 1 Active + 4 Spectator hạ boss **cùng tốc độ** với nhóm 5 người đều Active. → Boss không đo lường gì cả. → "Cả nhóm một boss" là hoạt cảnh, không phải cơ chế. → Không còn indispensability → mất sạch Köhler effect mà r03 dùng làm nền khoa học.

**Nếu boss damage KHÔNG chuẩn hoá:** Spectator trở thành hình phạt hiển thị công khai. → Không ai chọn Spectator, họ chọn **gỡ app** (rẻ hơn về mặt thể diện). → Đúng cái mà cơ chế này sinh ra để ngăn.

**Không có phương án thứ ba.** Duolingo giải bài này bằng cách **BÁN** Streak Freeze — lối thoát bị định lượng bằng giá tiền nên không lạm phát (r07) **[FACT]**. Teemi định phát miễn phí không giới hạn.

Ước tính drift **[GUESS]**: ở q=45%, đến D30 khoảng **50–60% thành viên còn lại của nhóm sẽ ở trạng thái không-Active**. Nhóm 5 người còn 2 Active. Màn hình chính hiển thị "2/5 đã nộp" mỗi ngày trong 3 tuần — và đó là **hình ảnh trực quan của sự thất bại được render 30 lần/tháng.**

**Đề xuất thay thế:** bỏ Spectator. Thay bằng **hạn ngạch có định lượng**: mỗi season 28 ngày cấp **4 "ngày nghỉ"** (1/tuần), dùng hết là hết, hiển thị số còn lại. Có giới hạn → có ý nghĩa. Kèm cơ chế Comeback x2 damage (Milkman 2021: 2 trong 5 can thiệp tốt nhất là thưởng cho việc QUAY LẠI sau khi lỡ) **[FACT, r03]**.

---

## 7. Mùa vụ: 3 lỗ đen cấu trúc trong 12 tháng đầu

Doc §12 không nhắc mùa vụ. Với thị trường VN và tệp 16–28 tuổi, lịch năm có 3 khoảng chết **[INFERENCE, r02 đã cảnh báo Tết]**:

| Cửa sổ | Thời lượng | Cơ chế |
|---|---|---|
| **Tết Âm lịch** (cuối T1–giữa T2) | 10–20 ngày | Cả nước về quê, đảo lộn hoàn toàn nhịp sinh hoạt, wifi quê, họ hàng. Streak đứt tập thể. |
| **Mùa thi HK1** (giữa T12–đầu T1) | 3–4 tuần | Sinh viên/học sinh biến mất |
| **Mùa thi HK2 + THPT QG** (T5–cuối T6) | 5–6 tuần | Như trên, nặng hơn |

Cộng lại: **~10–13 tuần/năm (20–25% số ngày trong năm) là vùng mà "nghi thức hằng ngày" không thể tồn tại**, không phải vì sản phẩm dở mà vì đời sống người dùng không cho phép.

**Hệ quả:** Teemi không phải app daily. Teemi là app **theo mùa với 2–3 mùa/năm**. Nếu chấp nhận điều này ngay, thiết kế đúng là: season 28 ngày → **ngủ đông có chủ đích** (boss ngủ, timeline vẫn xem được, không tính miss) → season mới với push "tin tức" chứ không phải push "nhắc nợ". Nếu không chấp nhận, Tết đầu tiên sẽ xoá 60–80% DAU trong 2 tuần và founder sẽ tưởng sản phẩm hỏng.

---

## 8. Season 2: bao nhiêu % nhóm bắt đầu lại?

**KHÔNG TÌM ĐƯỢC SỐ LIỆU** — r04 xác nhận không có nghiên cứu công khai về vòng đời nhóm trong social challenge app; không có số retention công khai riêng cho cơ chế season/battle pass.

Ước lượng **[GUESS, có cấu trúc]**:

| Bước | Tỉ lệ | Lý do |
|---|---|---|
| Nhóm sống hết Season 1 (≥3 Active ở D28) | 12,5% | §2.1 |
| Trong đó, bấm "bắt đầu Season 2" | 60% | Đã qua sàng lọc mạnh, đây là nhóm khoẻ |
| **Rủi ro "tuần nghỉ" 3–5 ngày** | −25% | Cue biến mất 5 ngày; re-engage phải vượt push opt-in Android 67% (r04) VÀ ROM Xiaomi/Oppo kill background (r05) **[FACT cho 2 con số]** |
| Sống hết Season 2 | 60% của tỉ lệ Season 1 | Novelty đã hết; boss thứ 2 không còn mới |
| **Tổng: nhóm hoàn thành Season 2** | **~3,4% của nhóm activate** | 0,125 × 0,60 × 0,75 × 0,60 |

**Cảnh báo về "tuần nghỉ":** r04 khuyến nghị nghỉ 3–5 ngày giữa season. Về mặt behavioral, đây là bước **nguy hiểm nhất** trong toàn roadmap. Lally 2010 nói lỡ MỘT ngày không ảnh hưởng (r03) **[FACT]** — nhưng 5 ngày có chủ đích thì khác hẳn: nó xoá cue, xoá noti, và trả user về trạng thái phải **quyết định lại từ đầu**. Nếu vẫn làm, tuần nghỉ phải có nội dung riêng (Memory Capsule mở dần, poll chọn quán lẩu, bình chọn boss mùa sau) chứ không được là khoảng trắng.

---

## 9. Sai lầm đo lường: benchmark Yope là so sánh sai hạng cân

r04 đặt mục tiêu **Group D7 = 40%** vì "Yope đã chứng minh với cùng tệp Gen Z và cùng cấu trúc nhóm nhỏ".

**Đây là category error và nó nguy hiểm vì nó tạo cảm giác an toàn giả.**

| | Yope | Teemi |
|---|---|---|
| Chỉ số D7=40% là của | **USER** retention | đang bị dùng làm mục tiêu **GROUP** retention |
| Hành động ngày | Đăng ảnh bất kỳ đang làm gì (~5 giây, không có điều kiện tiên quyết) | Hoàn thành hành vi 15–30 phút RỒI chụp |
| Có thể fail không? | Không có khái niệm fail | Có miss, có streak đứt, có boss hồi máu |

Yope không có trạng thái thất bại. Teemi có. **Một app có trạng thái thất bại luôn có retention thấp hơn app không có, với cùng tệp người dùng** [INFERENCE mạnh].

Mượn 40% của Yope làm target = founder sẽ thấy con số 22% ở beta và nghĩ "gần đạt rồi, tối ưu onboarding thêm chút" — trong khi sự thật là **mô hình sai, không phải onboarding sai**.

**Benchmark đúng để so là Habitica**: cùng cơ chế party boss, cùng damage khi có người miss, tồn tại >10 năm, ~86k lượt tải/tháng, 5M tải trọn đời (r01) **[FACT]**. Habitica là hình ảnh của Teemi sau 10 năm nếu mọi thứ chạy đúng như thiết kế hiện tại — một sản phẩm tử tế, có lãi nhỏ, không bao giờ thoát niche.

---

## 10. Ba mốc kiểm chứng cứng — đo từ tuần 1, không phải sau launch

Nếu chỉ giữ lại 3 dòng từ toàn bộ tài liệu này:

1. **q — tỉ lệ nộp proof/Active member/ngày, đo trên 20 nhóm beta trong 14 ngày.**
   - q ≥ 0,65 → mô hình boss chung có cửa
   - 0,45 ≤ q < 0,65 → phải bỏ hồi máu, hạ ngưỡng combo xuống 3/5, và chấp nhận Teemi là app Duo
   - q < 0,45 → **dừng dự án hoặc đổi hướng sang solo-first (mô hình Finch, ~$4M/tháng gần như không có social, r01 [FACT])**

2. **Ngày chết trung vị của nhóm.** Nếu median < D14, vấn đề là cấu trúc nhóm chứ không phải feature — mọi feature thêm vào đều lãng phí.

3. **Tỉ lệ "ngày full house" (cả nhóm nộp đủ) trong 28 ngày đầu.** Nếu < 3 ngày/28, khoảnh khắc cảm xúc mà cả sản phẩm được xây để tạo ra **không tồn tại trên thực tế** — và cần thiết kế lại hàm boss trước khi làm bất cứ thứ gì khác.

**Và một mốc âm:** nếu sau 30 ngày beta, lượng tin nhắn trong group Zalo của các nhóm beta **không giảm** (họ vẫn cà khịa nhau trong Zalo chứ không trong Teemi), thì Teemi đã thua đối thủ thật của nó, bất kể retention là bao nhiêu.

---

## 11. Điều tôi có thể sai

Trung thực về giới hạn của bản phản biện này:

- Tham số funnel §1 là **GUESS của tôi**. Nếu p thật là 0,30 thay vì 0,16 thì P(nhóm hình thành) lên 58% và §1 mất phần lớn sức nặng. Founder phải đo, không được tin tôi.
- Mô hình 2 lớp §2.1 giả định phân bố 30/70 — không có nguồn.
- q⁵ ở §3 giả định các thành viên **độc lập**. Thực tế nhóm bạn có tương quan dương (thấy bạn nộp thì nộp theo) — nếu tương quan mạnh, P(full house) cao hơn đáng kể so với q⁵. Nhưng ngay cả với tương quan hào phóng, con số vẫn không lên tới mức đủ để boss hồi máu hoạt động.
- Tôi **không** phản biện được luận điểm mạnh nhất của Teemi: Duolingo Friend Streak +22%, add friend → 5,6x hoàn thành khoá học (r03/r04) **[FACT]**. Lớp xã hội thật sự là đòn bẩy retention lớn nhất trong habit product. Vấn đề của Teemi **không phải hướng đi sai** — mà là **đơn vị sản phẩm quá lớn (nhóm 5 người) so với xác suất hình thành và tồn tại của nó**. Duolingo có 1 người dùng làm đơn vị, và bạn bè là lớp phủ. Teemi làm ngược lại và trả giá theo cấp số nhân.
