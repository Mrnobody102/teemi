# HƯỚNG B — GIỮ BOSS, SỬA TOÁN HỌC VÀ TÂM LÝ

_Thiết kế sản phẩm v2 cho Teemi. Ngày viết: 2026-08-28. Người viết: product designer, hướng B._
_Tài liệu này CHỈ thiết kế hướng B. Không so sánh, không đề xuất kết hợp với hướng khác._

**Đặt cược của hướng này, viết trần trụi:** boss không phải là cơ chế tạo động lực. Boss là **máy sinh ngôn ngữ nhóm**. Thứ giữ nhóm lại là được nhìn thấy nhau; thứ khiến nhóm có cái để *nói với nhau mỗi tối* là một vật thể chung có trạng thái thay đổi theo hành vi của cả nhóm. DOC 1 đúng khi tin vào boss và sai hoàn toàn ở hàm số điều khiển nó. Hướng B giữ vật thể, thay hàm.

---

## 1. Câu định vị

**Câu người dùng nói với bạn mình (câu chính, dùng để test truyền miệng):**

> **"Mỗi đứa hứa một việc, tối gửi ảnh chứng minh — cả nhóm chung một con boss, hai tuần hạ một con."**

17 từ. Có danh từ cụ thể (ảnh, con boss), có số (một việc, hai tuần, một con), có hành động vật lý (gửi ảnh). Không có "ritual", không có "daily social", không có "accountability" — đó là ngôn ngữ founder.

**Câu bán ở store / màn hình mời (boss KHÔNG xuất hiện):**

> "Nhóm bạn thân, mỗi ngày mỗi đứa gửi 1 tấm ảnh chứng minh đã làm điều mình hứa."

Hai câu khác nhau là **có chủ ý**, không phải mâu thuẫn. Lý do: phản biện #23/#24 chỉ ra boss trong metadata store là đầu vào trực tiếp cho rủi ro phân loại G1 (NĐ 147) và cho việc reviewer đọc app như game. Boss là **phần thưởng khi mở app**, không phải lời hứa lúc cài. Người dùng sẽ tự đưa boss vào câu của họ — đó chính là bằng chứng cơ chế hoạt động, và nó không nằm trong tài sản pháp lý của công ty.

**Ràng buộc phân phối kèm theo:** tên app phải đổi (query `teemi` map sang Temu ở cả store VN lẫn US — phản biện #23). Mọi lời mời phải mang theo **link hoặc mã nhóm**, không bao giờ mang theo một cái tên phải gõ vào ô tìm kiếm.

---

## 2. Core loop — 5 bước, kèm thời gian thực

Đo bằng giây vì mọi giây ma sát ở bước 2 là đòn bẩy phi tuyến lên toàn bộ mô hình (FIX 5, phản biện #1: ở q=0,50, thêm 5 điểm phần trăm q làm số ngày combo tăng ~28%).

| # | Bước | Người dùng làm gì | Giây |
|---|---|---|---|
| 1 | **Nhắc** | Nhận noti 20:30 "Boss còn 62%. Tối nay mày sao rồi?" → mở app, vào thẳng Home | **3s** |
| 2 | **Nộp proof** | Bấm nút to giữa màn → camera in-app mở sẵn → chụp → tự gửi. Không caption bắt buộc, không chọn goal (goal đã chốt đầu season) | **8s** |
| 3 | **Thấy kết quả tức thì** | Thanh HP tụt có animation + dòng "−25 · đòn phối hợp mở khoá" + hàng avatar những đứa đã nộp hôm nay | **5s** |
| 4 | **Khịa / reaction** | Vuốt qua 2–4 tấm proof của nhóm, thả emoji hoặc chọn 1 câu khịa template | **12s** |
| 5 | **Recap tối 21:30** | Noti thứ hai (gộp, không bắn lẻ): "Hôm nay 3/5 · boss còn 54% · Nam comeback" → mở, xem, đóng | **7s** |

**Tổng: ~35 giây/ngày.** Đây là con số thiết kế, không phải ước lượng lạc quan: session ngắn là dấu hiệu của app utility, không phải dấu hiệu sắp bị gỡ (phản biện #7 — biến dự báo gỡ app là *số ngày không mở*, không phải độ dài session).

**Bước 4 là bước duy nhất có thể bỏ mà loop vẫn chạy.** Bước 1–3 là bắt buộc và phải chạy được kể cả khi noti bị ROM Xiaomi/Oppo/Vivo giết (phản biện [tech]): backup là **local notification** đặt bởi client + **widget Android** hiển thị `Boss ███░░ 62% · 3/5 đã nộp · mày chưa`.

---

## 3. Màn hình MVP — đúng 8 màn, không hơn

| # | Màn | Nội dung tối thiểu |
|---|---|---|
| 1 | **Vào nhóm** | Mở từ link/mã nhóm → xem trước boss + proof nhóm (web preview, chưa cần cài) → đăng nhập Google/Apple → chọn kèo từ **8 preset + 1 ô tự viết** (1 chạm, ~5 giây; KHÔNG có form if-then 3 trường) |
| 2 | **Home (boss)** | Thanh HP + tên/mặt boss + hàng avatar "hôm nay đã nộp" + nút NỘP to nhất màn + dòng đếm ngược tới nửa đêm |
| 3 | **Camera proof** | Camera in-app, 1 chạm chụp, 1 chạm gửi. Nén client-side ≤300KB. Strip EXIF/GPS trước khi upload (rủi ro [legal] về dữ liệu nhạy cảm) |
| 4 | **Proof detail** | Ảnh + tên người + emoji reaction + 6 câu khịa template + **nút report** (bắt buộc cho Apple 1.2) |
| 5 | **Recap** | 2 trạng thái dùng chung 1 màn: *recap tối* (HP hôm nay, ai nộp, tier nào mở) và *kết season* (Memory Capsule v0: số boss hạ, lưới ảnh 14 ngày, 1 share card) |
| 6 | **Lưới 14 ngày** | Timeline v0 = lưới ảnh proof của cả nhóm theo ngày. Đây là lớp dữ liệu tích luỹ — moat duy nhất chống novelty decay (phản biện #9 fix 1) |
| 7 | **Nhóm** | Danh sách thành viên + trạng thái (Active / Life Happens / Đã rời) + mã mời + **block user** + rời nhóm |
| 8 | **Cài đặt** | Noti (giờ nhắc), hướng dẫn tắt tối ưu pin, **xoá tài khoản trong app** (Apple 5.1.1(v)), trang an toàn + email liên hệ |

**Không có ở MVP:** chat, feed công khai, gacha, AI recap, memory search, Buddy Match, sponsor, boss skin shop, ranking giữa các nhóm, trust score, vote-to-fail, widget iOS, HealthKit.

---

## 4. Cơ chế toán học — bảng số đầy đủ

### 4.1. Bốn bất biến (invariant), viết vào ADR trước dòng code đầu tiên

1. **`boss_hp(t) = HP0 − Σ damage`. Đơn điệu giảm. Không có nhánh nào cộng HP.** Miss = damage 0, không âm. Đây là sửa lỗi hàm, không phải tuning (phản biện #1 FATAL).
2. **Không có bảng xếp hạng damage cá nhân.** App hiển thị *ai đã nộp* (avatar sáng — vì tấm ảnh của họ vốn đã ở đó), nhưng không bao giờ hiển thị *ai chưa nộp* dưới dạng danh sách, không tổng damage theo người, không "Báo Thủ".
3. **Season 14 ngày, có ngày kết thúc in trên màn hình từ ngày 1.** Thất bại không tích luỹ quá 14 ngày.
4. **HP không bao giờ được scale LÊN giữa season.** Khi số Active giảm, HP còn lại scale xuống theo tỉ lệ `HP(n_mới)/HP(n_cũ)`; khi có người quay lại, HP giữ nguyên và người đó chỉ cộng damage. Bất biến #1 được bảo toàn trong mọi trường hợp.

### 4.2. Sáu tầng damage

| Tầng | Điều kiện | Damage | Nhịp mong muốn |
|---|---|---|---|
| **Hit** | mỗi proof hợp lệ | **+10** | mỗi ngày, luôn > 0 nếu có ≥1 người nộp |
| **Comeback** | proof đầu tiên sau ≥1 ngày miss | **+5** (cộng thêm) | hay gặp; hiện thị "Nam comeback", KHÔNG hiện "Nam đã miss 3 ngày" |
| **Đòn đôi** | ≥2 người nộp trong ngày (chưa đạt combo) | **+8** | 3,5–6,5 lần/tuần |
| **COMBO** | k ≥ T = `max(2, ceil(0,6 × Active))` | **+25** | **2–4 lần/tuần** ← mục tiêu chính |
| **Full house ngày** | k = Active | **+40** + share card | jackpot hiếm (variable-ratio) |
| **Đủ mặt tuần** | mọi Active có ≥1 proof trong 7 ngày | **+60**, phát tối Chủ Nhật | 60–95% số tuần |

Ghi chú: với n=2 và n=3, T=2 nên "đòn đôi" và "COMBO" trùng nhau → chỉ tính COMBO (+25), không cộng dồn.

**Lý do có tầng "đủ mặt tuần":** ở n≥4, full house theo NGÀY gần như không tồn tại (bảng 4.3). Nhưng Köhler effect cần **indispensability** — cảm giác thiếu tôi thì nhóm hụt thật (r03 §3.4). Cửa sổ 7 ngày cho mỗi người 7 cơ hội thay vì 1, nên nó **đạt được** (60–95%) mà vẫn **conjunctive**. Và nó chỉ hiển thị khi ĐẠT, không bao giờ hiển thị khi hụt — đó là cách giữ Köhler mà không xây máy in scapegoat (phản biện #18).

### 4.3. Bảng tần suất sự kiện theo q và n

`T = max(2, ceil(0,6×Active))`. Cột "COMBO/tuần" là cột quan trọng nhất.

| n | q | T | ≥2 người/tuần | **COMBO/tuần** | Full house/season 14d | Đủ mặt tuần |
|---|---|---|---|---|---|---|
| 2 | 0,30 | 2 | 0,63 | **0,63** | 1,26 | 84,2% |
| 2 | 0,40 | 2 | 1,12 | **1,12** | 2,24 | 94,5% |
| 2 | 0,50 | 2 | 1,75 | **1,75** | 3,50 | 98,4% |
| 2 | 0,60 | 2 | 2,52 | **2,52** | 5,04 | 99,7% |
| 3 | 0,30 | 2 | 1,51 | **1,51** | 0,38 | 77,3% |
| 3 | 0,40 | 2 | 2,46 | **2,46** | 0,90 | 91,8% |
| 3 | 0,50 | 2 | 3,50 | **3,50** | 1,75 | 97,7% |
| 3 | 0,60 | 2 | 4,54 | **4,54** | 3,02 | 99,5% |
| 4 | 0,30 | 3 | 2,44 | **0,59** | 0,11 | 70,9% |
| 4 | 0,40 | 3 | 3,67 | **1,25** | 0,36 | 89,3% |
| 4 | 0,50 | 3 | 4,81 | **2,19** | 0,88 | 96,9% |
| 4 | 0,60 | 3 | 5,75 | **3,33** | 1,81 | 99,3% |
| 5 | 0,30 | 3 | 3,30 | **1,14** | 0,03 | 65,1% |
| 5 | 0,40 | 3 | 4,64 | **2,22** | 0,14 | 86,8% |
| 5 | 0,50 | 3 | 5,69 | **3,50** | 0,44 | 96,2% |
| 5 | 0,60 | 3 | 6,39 | **4,78** | 1,09 | 99,2% |
| 6 | 0,30 | 4 | 4,06 | **0,49** | 0,01 | 59,7% |
| 6 | 0,40 | 4 | 5,37 | **1,25** | 0,06 | 84,3% |
| 6 | 0,50 | 4 | 6,23 | **2,41** | 0,22 | 95,4% |
| 6 | 0,60 | 4 | 6,71 | **3,81** | 0,65 | 99,0% |

**Đọc bảng này trung thực:**
- Ở dải q thực tế mà kill criteria của dự án nhắm tới (**q ≥ 0,45**), COMBO rơi đúng 2–4 lần/tuần cho mọi n từ 3 đến 6. Đạt yêu cầu thiết kế.
- Ở q = 0,40, n=4 và n=6 tụt xuống 1,25 lần/tuần — **dưới mục tiêu**. Đây là hệ quả của việc `ceil` làm tròn 0,6n lên 0,75n (n=4) và 0,67n (n=6). Chính vì lỗ này mà tầng "**đòn đôi**" tồn tại: ở đúng hai ô đó, ≥2 người/tuần là 3,67 và 5,37 — nhóm vẫn có payoff nhìn thấy được 4–5 tối/tuần.
- Ở n=2 và q=0,30, mọi thứ đều mỏng (0,63 combo/tuần). Duo yếu là cấu hình xấu nhất của hướng này. Xem mục 7.
- **Full house theo ngày ở n≥5 thực tế bằng 0** (0,03–1,09 lần/season). Tôi không giả vờ sửa được điều này — q⁵ là số học. Nó được thiết kế thành *jackpot*, và tầng "đủ mặt tuần" mới là thứ gánh vai trò conjunctive.

### 4.4. HP boss và kết quả season

HP boss #1 được hiệu chỉnh sao cho **nhóm yếu nhất (q = 0,30) vẫn hạ được boss vào khoảng ngày 11–12** của season 14 ngày. Chuỗi trong season: **B1 = HP, B2 = 1,5×HP, B3 = 2,0×HP**.

| Active n | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|
| **HP boss #1** | 190 | 280 | 300 | 360 | 400 |

| n | q | damage/ngày | Hạ B1 vào ngày | Số boss hạ/season | % HP B1 còn lại ở ngày 7 | Số ngày damage = 0 |
|---|---|---|---|---|---|---|
| 2 | 0,30 | 17,6 | 11 | 1 | 35,3% | 6,9 |
| 2 | 0,40 | 22,5 | 9 | 1 | 17,1% | 5,0 |
| 2 | 0,50 | 27,2 | 7 | 1 | 0% | 3,5 |
| 2 | 0,60 | 31,9 | 6 | 1 | 0% | 2,2 |
| 3 | 0,30 | 25,3 | 12 | 1 | 36,9% | 4,8 |
| 3 | 0,40 | 34,8 | 9 | 1 | 12,9% | 3,0 |
| 3 | 0,50 | 44,6 | 7 | 1 | 0% | 1,8 |
| 3 | 0,60 | 55,0 | 6 | **2** | 0% | 0,9 |
| 4 | 0,30 | 26,8 | 12 | 1 | 37,4% | 3,4 |
| 4 | 0,40 | 36,7 | 9 | 1 | 14,3% | 1,8 |
| 4 | 0,50 | 46,6 | 7 | 1 | 0% | 0,9 |
| 4 | 0,60 | 57,1 | 6 | **2** | 0% | 0,4 |
| 5 | 0,30 | 32,5 | 12 | 1 | 36,9% | 2,4 |
| 5 | 0,40 | 44,5 | 9 | 1 | 13,4% | 1,1 |
| 5 | 0,50 | 55,7 | 7 | 1 | 0% | 0,4 |
| 5 | 0,60 | 66,5 | 6 | **2** | 0% | 0,1 |
| 5 | 0,70 | 77,5 | 5 | **2** | 0% | 0,0 |
| 6 | 0,30 | 35,3 | 12 | 1 | 38,3% | 1,6 |
| 6 | 0,40 | 47,8 | 9 | 1 | 16,4% | 0,7 |
| 6 | 0,50 | 59,3 | 7 | 1 | 0% | 0,2 |
| 6 | 0,70 | 82,1 | 5 | **2** | 0% | 0,0 |

**Ba tính chất được đảm bảo bằng số, không bằng lời hứa:**

1. **Nhóm yếu vẫn thắng.** Mọi cấu hình n ∈ [2,6], q ≥ 0,30 đều hạ được boss #1 trong 14 ngày. Xác suất "kết thúc season mà không hạ được con nào" ở q=0,30 là gần 0 — nhóm cần trượt xuống q < 0,25 mới hụt.
2. **Nhóm mạnh vẫn thách thức.** Ở q ≥ 0,60 boss #1 chết vào ngày 5–6, và câu hỏi chuyển thành *"season này hạ được mấy con?"* — B2 nặng gấp 1,5 lần nên 2 con là thành tích thật, 3 con gần như không đạt được ở n≤6. **Thang đo thành tích là SỐ BOSS, không phải thắng/thua.**
3. **Không có ngày vô vọng.** Ở ngày 7 (giữa season), nhóm yếu nhất vẫn thấy HP đã tụt về 35–38% — tức đã đi được gần 2/3 đường. Không có cấu hình nào mà nhóm ở ngày 7 nhìn thấy HP cao hơn ngày 1, vì hàm đơn điệu giảm. Số ngày damage = 0 (không ai nộp) ở n≥4, q≥0,40 là **dưới 2 ngày/season**.

### 4.5. Quy đổi damage giữa các kèo khó/dễ

Đây là "giả định lớn nhất chưa được kiểm chứng của toàn bộ sản phẩm" theo digest. Hướng B chọn dứt khoát:

- **1 proof = 1 hit = 10 damage. Bằng nhau tuyệt đối, bất kể kèo khó hay dễ** (r03 P3). Không có hệ số độ khó, không có admin chấm điểm.
- Độ khó chỉ ảnh hưởng **phần thưởng cá nhân** (nhãn kèo hiện trên proof của chính người đó, số ngày liên tiếp riêng tư), không ảnh hưởng đóng góp nhóm.
- **Chống đua xuống đáy bằng peer-approval, không bằng thuật toán:** mỗi kèo cần ≥1 người trong nhóm bấm "kèo này ok" trước khi season bắt đầu. ~1 ngày công. Môi trường thông tin của nhóm bạn thân gần như hoàn hảo — bốn đứa kia biết Minh có uống trà sữa hay không (phản biện #3, phản bác b).
- **Đổi kèo giữa season: tối đa 1 lần, cần peer-approval, ghi vào lưới 14 ngày như sự kiện trung tính**, không có notification bêu tên.
- **Tách bạch với "Life Happens":** miss vì ốm/bận/về quê → user chọn trạng thái Life Happens, không cần duyệt, không giới hạn, không mất tiến độ, và ngày đó **không tính vào mẫu số của q**. App gợi ý Life Happens sau 3 miss — **không** gợi ý hạ kèo (giải mâu thuẫn r03 vs phản biện #3).

### 4.6. Bảng thông báo — cái gì được nói, cái gì cấm

| Sự kiện | App ĐƯỢC nói | App CẤM nói |
|---|---|---|
| Có người nộp | "Linh vừa nộp · boss −10" | — |
| Combo mở | "Đòn phối hợp! Boss −25" | "Hụt combo vì thiếu Nam" |
| Combo không mở | *(im lặng, hoặc)* "Hôm nay chưa mở được đòn phối hợp" | tên bất kỳ ai |
| Có người miss | *(không có thông báo nào)* | "Boss hồi máu vì mày đấy" — câu này bị xoá khỏi mọi tài liệu |
| Comeback | "Nam comeback · +5" | "Nam đã miss 3 ngày" |
| Kết season | "Nhóm hạ 2 con boss · 47 proof" | xếp hạng thành viên theo damage |
| Nudge | 1-1, riêng tư, do **người** bấm, tối đa 1 lần/người/ngày | broadcast tên người thiếu vào recap nhóm |

Throttle noti: **tối đa 1 push/10 phút/user**, gộp ("3 người vừa khịa proof của bạn"), tối đa 3 push/ngày.

---

## 5. Cắt gì so với DOC 1, và tại sao cắt được

| Cắt | Lý do cắt được |
|---|---|
| **Boss hồi máu** (§7 bước 6) | Lỗi hàm. Ở q=0,45 n=5, kỳ vọng 2,75 người miss/ngày → boss hồi mỗi ngày, sau 7 ngày HP cao hơn ngày đầu. Không sửa được bằng tuning. Köhler được giữ lại bằng combo + đủ mặt tuần thay vì bằng trừng phạt |
| **Combo "cả nhóm nộp đủ"** | q⁵ = 1 lần/98 ngày ở q=0,40. Thay bằng `ceil(0,6×Active)` → 1 lần/3,2 ngày. Cải thiện 31 lần từ một dòng điều kiện |
| **"Báo Thủ" + mọi role gắn nhãn bản sắc** | Điểm rủi ro shame cao nhất toàn product, và là dòng chữ đầu tiên App reviewer đọc nếu dịch thành "Slacker of the Week" (phản biện #21) |
| **Vote "proof hơi sus" / vote-to-fail** | Tổn thất nằm ở quan hệ, không patch được. Giữ lại "sus" **chỉ như một emoji reaction đùa**, không có hiệu lực cơ học lên damage |
| **Season vô hạn / streak cá nhân làm metric chính** | Streak đứt = mất tất cả. Thay bằng season 14 ngày + 7 ô nhịp tuần hiển thị nhỏ (r03 P7) |
| **Form kèo if-then 3 trường** | Đẩy bước chọn kèo từ ~60s xuống ~5s. 8 preset + 1 ô tự viết. Bước này là số hạng lớn nhất trong funnel onboarding |
| **Ràng buộc "phải đủ 3 người mới chơi được"** | Xoá số hạng 0,735⁴ khỏi funnel. Nhóm 1 người vẫn có "boss tập luyện" HP 100, hạ được trong ~7 ngày một mình |
| **Memory Capsule, AI recap, memory search, gacha, sponsor, Buddy Match, boss skin shop, chat, feed** | Không có cái nào trả lời được câu hỏi duy nhất của MVP. Memory Capsule v0 = màn kết season + lưới 14 ngày, 0,5 pw |
| **Widget iOS** | VN >85% Android. Widget Android viết được bằng TSX qua `react-native-android-widget` (~0,5 pw), iOS cần SwiftUI riêng (1–2 tuần). Hoãn |
| **Phone OTP** | $0,2852/SMS đi VN qua Twilio. Google/Apple sign-in cho beta; SĐT là cổng thêm vào TRƯỚC mốc pháp lý, đi qua Zalo ZNS |
| **Realtime subscription** | $207/tháng ở 100k DAU cho thứ user không nhận ra. Boss HP tính ở **rollover cuối ngày** (batch), poll khi mở app. Đây đồng thời là biện pháp giảm rủi ro G1 — xem mục 8 |
| **Đa nhóm trong UI** | Giữ cột `group_id` + RLS ở tầng dữ liệu (chi phí 0), chỉ expose MỘT nhóm active ở UI |

---

## 6. Hướng này giải quyết phản biện nào

Trích tên phản biện từ `_issues-digest.md`:

- **#1 [FATAL] "Khoảnh khắc 'cả nhóm nộp đủ' xảy ra 1 lần/98 ngày — và boss hồi máu mỗi ngày không nghỉ"** — giải quyết trọn vẹn. Bất biến `boss_hp` đơn điệu giảm (FIX 1); `T = ceil(0,6×Active)` (FIX 2); ba tầng cảm xúc hằng ngày / tuần / hiếm (FIX 4) được nâng thành sáu tầng có bảng số; ràng buộc proof ≤8 giây ≤2 chạm (FIX 5). Bảng 4.4 chứng minh không tồn tại ngày HP tăng.
- **#18 [MAJOR] "'Boss hồi máu vì mày đấy' là đổ lỗi công khai có tên người"** — giải quyết ở tầng cơ chế, không ở tầng câu chữ: không có nhánh code nào biến một lần miss của một người thành **mất mát đã có** của bốn người kia. Cộng bảng thông báo ở §4.6 và cấm bảng xếp hạng damage.
- **#2 [MAJOR] "Duolingo... Teemi đang thêm lại đúng thứ họ bỏ"** — nhận trọn bài học đúng ("coupling ở bậc thấp của số mũ, không phải n=5"): ngưỡng tính trên **Active** chứ không phải headcount danh nghĩa; combo là **trạng thái đạt được**, không bao giờ là trạng thái mất; nudge tồn tại nhưng **1-1, do người bấm**, không auto-broadcast.
- **#3 [MAJOR] "Tự đặt độ khó + thưởng chung = cuộc đua xuống đáy"** — peer-approval kèo, đổi kèo tối đa 1 lần/season ghi vào timeline trung tính, tách "hạ kèo" khỏi "Life Happens", câu hỏi cuối season "Kèo này có thật sự khó với mày không?".
- **#6 [MAJOR] "Xác suất nhóm 5 người sống 30 ngày ≈ 12,5%"** — HP có bảng scale theo n ∈ {1..6} **từ ngày đầu**; nhóm tụt từ 5 xuống 2 được hệ thống gọi là **"chuyển sang Duo"** kèm HP giảm tương ứng, không phải "nhóm đang chết". Bất biến #4 làm điều này an toàn về mặt toán.
- **#8 [tech] "Push bị chặn bởi ROM Android VN" + "Spam noti reaction"** — widget Android ở v1, local notification backup, throttle 1 push/10 phút + gộp, trần 3 push/ngày.
- **#22 [MAJOR] "Không có metric nào phát hiện được tác hại"** — 4 event + 1 form vào schema trước dòng code đầu tiên: `roast_received` (→ `max_share` 7 ngày), `member_left{roasts_received_48h, misses_7d, was_kicked}`, `report_created/resolved`, `safety_screen_shown{reason_bucket}`, exit survey 1 câu.
- **#21 [MAJOR] "Vị thành niên"** — **Minor-Safe Mode ở cấp nhóm**: bất kỳ ai khai <18 → cả nhóm khoá cứng chế độ an toàn (không khịa, không sus, không danh hiệu cá nhân, tên kèo ẩn khỏi nhóm). Một người khai đúng là cả nhóm được bảo vệ.
- **#24 [MAJOR] "SÁU câu định vị khác nhau"** — đúng hai câu, phân vai rõ (mục 1), boss không xuất hiện trong câu bán.
- **#9 [MAJOR] "17 hệ thống ≈ 33 person-week"** — 8 màn, bảng pw ở mục 10, trần cứng.

---

## 7. Phản biện hướng này KHÔNG giải quyết được — nói thẳng

1. **#4 "Giả thuyết thay thế thắng về bằng chứng: thứ giữ chân là ĐƯỢC NHÌN THẤY NHAU, và boss chính là thuế đánh lên nó."** Hướng B **không phản bác được** phản biện này, chỉ hoãn nó. Tôi giảm thuế (kèo 1 chạm ~5 giây, bỏ ràng buộc ≥3 người, bỏ if-then) nhưng thuế vẫn > 0: người dùng Locket bỏ ra 0 giây setup, người dùng hướng B bỏ ra ~20 giây và một quyết định. **Cách duy nhất để biết là A/B ở v1.1**: bật boss cho 50% nhóm, so group-D28. Ngưỡng viết trước vào ADR: **chênh < 10 điểm phần trăm → gỡ boss vĩnh viễn**, dồn nguồn lực sang lưới ảnh/Memory. Hướng B phải chấp nhận nó có thể tự bị bác bởi chính phép đo của nó.

2. **#5 "Cold start: 29 lượt cài organic mới ra 1 nhóm sống"** — không giải được bằng thiết kế boss. Boss không làm người thứ hai cài app. Web preview + tuyển beta bắt nhập tên 3 người bạn là giảm thiểu, không phải lời giải.

3. **#13 "Ở 10.000 DAU app đã lỗ — hoà vốn lương 1 người cần 60k–120k DAU tại VN"** và **#66 "trần ~2,6 tỷ VND/năm ở 1 triệu MAU"** — hướng B không đụng gì tới kinh tế đơn vị. Boss được sửa cũng không tạo ra doanh thu. Đây vẫn là small profitable business hoặc portfolio piece, không phải venture business.

4. **#7 "Zalo group hút mất phần thưởng, Teemi giữ lại toàn bộ nghĩa vụ"** — chỉ giảm được một phần. Boss HP là artifact **chỉ tạo được trong app** (đó là lập luận phòng thủ thật), nhưng cú cười vẫn xảy ra trong Zalo khi ảnh recap bị screenshot. Tôi coi đó là phân phối, nhưng thừa nhận đó là niềm tin, không phải bằng chứng.

5. **#26 "MOAT bằng 0 trong 6 tháng đầu"** — cơ chế boss có thể copy trong 2 tuần bởi bất kỳ ai. Bảng số ở mục 4 là tài sản dễ sao chép nhất trong tài liệu này.

6. **Duo yếu (n=2, q≤0,35) là cấu hình xấu nhất của hướng B.** 5–7 ngày damage-0 trên 14 ngày, combo 0,6–0,9 lần/tuần. Nếu phần lớn nhóm co về Duo — kịch bản mà phản biện #6 cho là nhiều khả năng nhất — thì boss chạy ở chế độ tệ nhất của nó. Tôi không có fix nào cho ô này ngoài việc hạ HP; hạ nữa thì boss thành trang trí.

7. **#32 "Bài toán quy đổi damage giữa goal khó/dễ HIỆN CHƯA ĐƯỢC GIẢI"** — tôi chọn một phía (damage bằng nhau) và chống đua-xuống-đáy bằng peer-approval. Đó là một **cược**, không phải một lời giải. Nếu người dùng thấy bất công, sucker effect vẫn bắn.

---

## 8. Rủi ro MỚI do chính hướng B tạo ra

1. **Rủi ro pháp lý tăng so với phương án bỏ boss.** Giữ boss = giữ nguyên cơ sở để bị xếp là **trò chơi điện tử G1** theo NĐ 147/2024 ("nhiều người chơi tương tác đồng thời qua máy chủ"). Ba biện pháp giảm thiểu đã đưa vào thiết kế: (a) **boss HP tính ở rollover cuối ngày, batch, không realtime** — phá vế "đồng thời"; (b) **không bán vật phẩm ảo, không tiền tệ trong game, không gacha** — tránh NĐ 174/2026 (phạt 60–80tr cho mua bán vật phẩm ảo, 170–200tr nếu quy đổi ra tiền); (c) **boss không xuất hiện trong metadata store, screenshot, hay mô tả app**. Dù vậy rủi ro vẫn tồn tại và phải hỏi luật sư đúng câu: *"Cơ chế boss chung có bị xếp là trò chơi điện tử G1 không?"*

2. **Bảng số này là một hệ thống phải tune, và founder 1 người sẽ không có thời gian tune nó.** Sáu tầng damage × HP theo n × ba con boss/season = 30 tham số. Nếu q thực đo lệch khỏi giả định, phải sửa và phải sửa nhanh. **Bắt buộc**: mọi hằng số ở §4.2 và §4.4 phải nằm trong **remote config đọc từ DB**, không hard-code — nếu không, mỗi lần tune là một lần chờ store review.

3. **"Số boss/season" tạo một trục so sánh mới giữa các nhóm.** Nếu để lộ ra ngoài (share card có ghi "3 boss"), nhóm yếu tự so với nhóm mạnh và thấy mình kém — tái tạo đúng vấn đề mà tôi vừa xoá ở tầng cá nhân, ở tầng nhóm. **Ràng buộc:** share card chỉ ghi *tên boss đã hạ + số proof + lưới ảnh*, không bao giờ ghi số boss dưới dạng có thể xếp hạng.

4. **Boss hạ sớm ở nhóm mạnh tạo khoảng trống động lực.** Ở q=0,60, boss #1 chết ngày 6, boss #2 (1,5×HP) gần như không hạ nổi trong 8 ngày còn lại → 8 ngày cuối season nhóm thấy một thanh HP không nhúc nhích đáng kể. Đây là **lỗi ngược của lỗi cũ** và tôi chưa có lời giải hoàn chỉnh; giảm nhẹ bằng cách hiển thị mốc 75/50/25% của B2 có animation riêng.

5. **Nhóm có thể "farm" tầng đủ-mặt-tuần.** Vì cửa sổ 7 ngày, tối ưu là mỗi người nộp đúng 1 lần/tuần vào ngày cuối. Damage/ngày rơi từ ~44 xuống ~19 ở n=5 → boss không chết, nhóm chán. Giảm nhẹ: tầng này chỉ +60 (nhỏ hơn tổng 7 hit), nên farm không phải chiến lược trội. Nhưng cần **theo dõi phân bố ngày nộp trong tuần** ở beta.

6. **Peer-approval kèo tạo một điểm ma sát mới ở đúng chỗ nguy hiểm nhất: onboarding.** Nếu không ai bấm duyệt trong 24h, kèo tự động được duyệt. Nếu không có luật này, người thứ 2 vào nhóm sẽ bị kẹt và bỏ.

7. **Season 14 ngày ngắn hơn khuyến nghị 28 ngày của r03** (Lally 2010: median 66 ngày để tạo habit). Hướng B chấp nhận đánh đổi: **ưu tiên "nhóm nào cũng có ít nhất một lần thắng" hơn là "tạo habit thật"**. Nếu app thật sự đổi hành vi ai, đó là do 3–4 season liên tiếp, không do season đầu.

---

## 9. Cold start — 90 giây đầu của người dùng số 1, và người số 2

**Người dùng số 1 (founder tự tay tuyển, không phải organic):**

| Giây | Chuyện gì xảy ra |
|---|---|
| 0–10 | Mở link mời trong Zalo → **web preview**, không cần cài: thấy con boss HP 100%, thấy tên nhóm, thấy 0 tấm proof, thấy dòng "Nhóm này bắt đầu tối nay" |
| 10–25 | Bấm "Vào nhóm" → App Store/Play → cài (thời gian cài không tính vào 90s vì nằm ngoài kiểm soát) |
| 25–35 | Mở app → đăng nhập Google 1 chạm (không OTP, không SĐT) |
| 35–45 | **Chọn kèo**: 8 preset ("ngủ trước 12h", "đi bộ 20 phút", "không trà sữa", "đọc 5 trang", "học 15 phút", "tập 10 phút", "uống 2 lít nước", "không lướt trước khi ngủ") + ô tự viết. 1 chạm |
| 45–60 | **Camera mở ngay lập tức** — không có màn hình "bạn đã sẵn sàng chưa". Chụp tấm proof đầu tiên |
| 60–70 | Boss HP tụt từ 100% → 90%. Animation. Dòng chữ: **"Đòn đầu tiên. Boss còn 90%."** |
| 70–90 | Màn hình mời: **mã nhóm 6 ký tự + nút "Copy link gửi Zalo"** với text đã soạn sẵn: *"Vô đây với tao, mỗi đứa một kèo, tối gửi ảnh. Mã: XXXXXX"* |

**Điều kiện thành công của 90 giây này: người dùng số 1 đã gây damage TRƯỚC KHI có người thứ hai.** Đây là lý do "boss tập luyện" (HP 100, n=1) phải tồn tại ở MVP — nếu boss chỉ chạy khi đủ 3 người, người số 1 đứng trước một màn hình chờ và bỏ.

**Làm sao có người thứ 2:**

1. **Nguồn duy nhất ở giai đoạn này là founder, không phải store.** Tên app map sang Temu → store search đóng góp ~0 install vĩnh viễn. Mọi lời mời mang link hoặc mã.
2. **Form đăng ký beta bắt nhập tên 3 người bạn + link group chat, chỉ approve khi đủ 3** (r04 §105). Đây là bộ lọc rẻ nhất tồn tại và nó biến p≈0,08 thành p≈0,25.
3. **Web preview là kênh conversion, không phải đơn vị retention.** Người xem web được thả 1 reaction lên proof của bạn mình mà không cần cài — họ "có mặt" trước khi cài. Nhưng **khán giả web không bao giờ được tính vào `group_alive`** — nới định nghĩa đó là cách tự lừa mình nhanh nhất.
4. **Đo hai chỉ số này từ install đầu tiên, không dự đoán:** `installs_per_activated_group` (tử số = nhóm có ≥3 người nộp proof trong 48h) và `cost_per_living_group`.
5. **Cửa sổ khởi động:** nhóm mới bắt đầu season vào **Thứ Hai gần nhất**, không phải "ngay bây giờ". Fresh start effect (Dai 2014) + tất cả cùng ngày 1 → không ai vào giữa season và thấy boss đã còn 30%.

---

## 10. Ước lượng person-week

Giả định: 1 người, full-stack, React Native + Expo + Supabase, đã quen stack. Hệ số hiệu suất thực tế 65% đã **không** được tính vào đây — đây là pw thuần, nhân 1,54 để ra tuần lịch.

| # | Hạng mục | pw | Ghi chú |
|---|---|---|---|
| 1 | Hạ tầng: Expo app skeleton, Supabase schema + RLS, auth Google/Apple, `StorageAdapter` interface | 1,5 | ADR-001 ràng buộc: không khoá cứng Edge Functions/Auth |
| 2 | Nhóm: tạo/join bằng mã, thành viên, trạng thái Active/Life Happens/Đã rời, block user | 1,0 | |
| 3 | Kèo: 8 preset + tự viết + peer-approval + đổi kèo 1 lần/season | 0,5 | |
| 4 | Proof: camera in-app, nén ≤300KB client-side, strip EXIF, upload lên R2 (KHÔNG Supabase Storage) | 1,5 | Egress R2 $0 vs Supabase $0,09/GB |
| 5 | **Engine boss**: 6 tầng damage, HP theo n, chuỗi 3 boss, rollover cuối ngày (cron), remote config toàn bộ hằng số | **1,5** | Trái tim của hướng B |
| 6 | Home + animation HP + hàng avatar đã nộp | 1,0 | |
| 7 | Reaction + 6 câu khịa template + report + Minor-Safe Mode (feature flag tắt roast server-side) | 1,0 | Gate bắt buộc trước submit lần đầu |
| 8 | Recap tối + kết season + share card + lưới 14 ngày | 1,0 | Memory Capsule v0 |
| 9 | Notification: push + local backup + throttle/gộp + hướng dẫn tắt tối ưu pin | 0,75 | |
| 10 | Widget Android (`react-native-android-widget`) | 0,5 | iOS hoãn v1.1 |
| 11 | Web preview (1 route Next.js read-only + 1 reaction) | 0,5 | Kênh conversion |
| 12 | Analytics: 4 event an toàn + 2 chỉ số cold start + exit survey + dashboard group-level | 0,5 | **Phải xong trước dòng code sản phẩm đầu tiên** |
| 13 | Tuân thủ: xoá tài khoản trong app, trang an toàn, EULA, privacy policy, App Review notes | 0,5 | 3 lý do reject phổ biến nhất 2026 |
| 14 | QA trên máy Android giá rẻ VN thật + TestFlight/Internal Testing + sửa lỗi | 1,0 | |
| | **TỔNG** | **12,25 pw** | ≈ **19 tuần lịch** ở hiệu suất 65% |

**Trần cứng: 12 pw, luật đánh đổi 1-1** (thêm cái gì thì phải bỏ cái gì có pw tương đương). Và trần theo **ngày lịch**, không theo pw: beta phải chạy trước **15/12/2026** — trần pw có thể tự lừa mình bằng cách định nghĩa lại pw, ngày lịch thì không.

**12,25 pw này CHỈ được bắt đầu sau khi Bước 0 (6 nhóm × 5 người trong Zalo, 14 ngày, ~28 giờ, 0đ) qua ngưỡng.** Nếu Bước 0 trượt, con số tiết kiệm được là toàn bộ 12,25 pw.

---

## 11. Đường lớn lên nếu hướng này chạy

**v1.1 (sau 28 ngày beta) — phép đo quan trọng nhất, không phải feature.**
A/B boss on/off, 50% nhóm mỗi nhánh, ≥60 nhóm/nhánh, so `group_alive` D28. Ngưỡng viết vào ADR **trước** khi có dữ liệu: chênh ≥10 điểm phần trăm → boss là lõi, đầu tư tiếp; chênh <10 điểm → boss xuống hạng cosmetic hoặc gỡ. Kèm: widget iOS, season 21 ngày cho nhóm đã qua 2 season.

**v1.2 — Comeback Season và lớp season thứ hai.** r03 xếp comeback là can thiệp mạnh hơn cả streak. Nhóm chết giữa season được mời quay lại ở season sau với boss HP giảm 25% cho 7 ngày đầu. Đây là cơ chế lõi, không phải feature giảm đau.

**v1.3 — Boss có personality và tên do nhóm đặt.** Đây là chỗ giá trị thật của hướng B nằm: khi nhóm tự đặt tên con boss ("con Deadline", "con Trà Sữa"), boss thành inside joke thay vì thành metric. Chi phí dev gần bằng 0 (một trường text), giá trị bản sắc cao nhất trong toàn roadmap.

**v2 — Lớp ký ức.** Lưới 14 ngày → timeline nhiều season → "Năm của nhóm". Dữ liệu tích luỹ là moat duy nhất chống novelty decay. **Miễn phí** — Spotify Wrapped miễn phí là có lý do kinh tế, không phải hào phóng. Cái bán được là độ phân giải, export, lưu trữ dài.

**Mốc pháp lý, chạy song song không phải nối tiếp:** chạm **500 người dùng thường xuyên/tháng** → bắt đầu hồ sơ Giấy xác nhận thông báo ngay (không đợi tới ngưỡng 1.000). Lập TNHH chỉ sau khi Bước 0 và beta đã qua.

**Điều KHÔNG làm dù hướng này chạy:** gacha, sponsor voucher, public feed, B2B, gọi vốn VC. Trần VN-only ~2,6 tỷ VND/năm ở 1 triệu MAU — con số đó là small profitable business, và mọi bước đi giả vờ nó là venture business đều sai từ ngày 1.

---

## 12. Kiểm chứng — 3 giả thuyết có ngưỡng số

Mỗi giả thuyết có một phép đo, một ngưỡng, một ngày, và một hành động nếu trượt. Không có "gần đạt rồi".

### GT-1 — Boss tạo được nhịp hằng ngày mà không tạo scapegoat

**Đo:** (a) `q` = proof/thành viên Active/ngày, cửa sổ 14 ngày liên tục, ≥20 nhóm; (b) số ngày mở COMBO trong 28 ngày; (c) `max_share` roast 7 ngày (chỉ tính khi tổng roast nhóm ≥10).

**Ngưỡng ĐÚNG:** q ≥ 0,45 **VÀ** ngày combo ≥ 6/28 **VÀ** `max_share` ≤ 0,5 ở ≥80% số nhóm.

**Ngưỡng SAI:** q < 0,40 → hàm boss không cứu được, đổi hướng. Ngày combo < 6/28 → thiết kế lại ngưỡng T trước khi làm bất cứ thứ gì khác. `max_share` > 0,5 ở >20% nhóm → tắt roast bằng feature flag ngay, thiết kế lại rồi mới bật.

*Lưu ý sửa gate cũ:* kill gate trong đánh giá chiến lược ghi "full house < 3/28 → thiết kế lại". Với thiết kế này, full house ở n≥4 là **jackpot cố ý hiếm** (0,03–1,81 lần/season) nên gate đó sẽ luôn bắn nhầm. Gate đúng cho hướng B là **ngày COMBO ≥ 6/28**.

**Ngày đo:** D28 của beta.

### GT-2 — Nhóm nào cũng thắng ít nhất một lần, và cảm nhận được điều đó

**Đo:** (a) % nhóm hạ được ≥1 boss trong season 14 ngày đầu; (b) % nhóm bắt đầu season thứ hai trong vòng 3 ngày sau khi season 1 kết thúc; (c) cổng phi số: **có nhóm nào tự hỏi khi nào có season tiếp theo không?**

**Ngưỡng ĐÚNG:** ≥85% nhóm hạ ≥1 boss (mô hình dự đoán ~gần 100% ở q≥0,30 — nếu thực tế dưới 85% thì HP đang đặt sai, không phải người dùng sai) **VÀ** ≥40% nhóm bắt đầu season 2 **VÀ** ≥2/6 nhóm tự hỏi về season tiếp theo.

**Ngưỡng SAI:** <85% hạ boss → hạ HP toàn bảng 20% và chạy lại 1 season, không thêm feature. <25% bắt đầu season 2 → season 14 ngày không tạo được cảm giác kết thúc đáng ăn mừng; vấn đề nằm ở màn kết season, không ở boss. **0 nhóm hỏi về season tiếp theo → dừng, bất kể phần trăm đẹp thế nào.**

**Ngày đo:** D17 (3 ngày sau khi season 1 kết thúc).

### GT-3 — Boss thật sự đóng góp, chứ không phải thuế đánh lên lớp "được nhìn thấy nhau"

Đây là giả thuyết mà hướng B **có thể tự bị bác**. Nó phải được đo, không được tin.

**Đo:** A/B ở v1.1. Nhánh A: đầy đủ boss. Nhánh B: cùng app, ẩn hoàn toàn boss (vẫn proof + reaction + recap + lưới ảnh + widget). ≥60 nhóm/nhánh, 28 ngày. Metric chính: **`group_alive` D28** = % nhóm còn ≥3 thành viên nộp proof trong 7 ngày gần nhất. Metric phụ: % session có mở/chạm màn boss, đo sau tuần 3.

**Ngưỡng ĐÚNG:** `group_alive` D28 nhánh A − nhánh B **≥ 10 điểm phần trăm** VÀ ≥35% session chạm màn boss sau tuần 3.

**Ngưỡng SAI:** chênh < 10 điểm phần trăm → **gỡ boss vĩnh viễn**, dồn toàn bộ nguồn lực sang lưới ảnh/Memory. Chênh âm → boss đang là thuế, gỡ ngay không cần đợi hết 28 ngày. <20% session chạm màn boss → boss xuống hạng cosmetic, không đầu tư thêm một pw nào.

**Ngày đo:** 28 ngày sau khi bật A/B ở v1.1.

**Điều kiện chung cho cả ba giả thuyết:** mọi ngưỡng đều kèm điều kiện `q ≥ 0,45`. Không có q, `group_alive` có thể đạt bằng 3 người mở app xem recap mà không ai nộp proof — và đó là cách tự lừa mình rẻ nhất tồn tại.

---

## Phụ lục — bảng hằng số để đưa vào remote config

```
HIT            = 10
COMEBACK_BONUS = 5
PAIR_BONUS     = 8      # chỉ áp dụng khi T > 2
COMBO_BONUS    = 25
FULLHOUSE_DAY  = 40
FULLWEEK_BONUS = 60
COMBO_T(n)     = max(2, ceil(0.6 * n_active))
HP_BOSS1       = {1:100, 2:190, 3:280, 4:300, 5:360, 6:400}
HP_CHAIN       = [1.0, 1.5, 2.0]          # nhân với HP_BOSS1
SEASON_DAYS    = 14
ROLLOVER       = 00:00 Asia/Ho_Chi_Minh   # batch, KHÔNG realtime
PUSH_THROTTLE  = 1 / 10 phút / user, tối đa 3/ngày
```

**Bất biến phải được test tự động, không phải review bằng mắt:** một test chạy 10.000 season ngẫu nhiên và assert `boss_hp(t+1) <= boss_hp(t)` với mọi t, mọi n, mọi q. Nếu test này đỏ, không được merge. Đây là cách duy nhất đảm bảo lỗi FATAL #1 không quay lại qua một PR nào đó ba tháng sau.
