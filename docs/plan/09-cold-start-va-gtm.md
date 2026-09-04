# 09 — COLD START PLAYBOOK & GO-TO-MARKET (Chốt Sổ)

_Viết 03/09/2026. Dựa hoàn toàn vào `/home/huypq/teemi/docs/plan/01-dinh-nghia-san-pham-v2.md`. Mọi con số ở đây phải nhất quán với §4.5, §9, §11, §12 của tài liệu đó. Bất đồng ghi ở cuối, không tự đi hướng khác._

> ### ⚖️ ĐÃ ĐỐI CHIẾU BẢNG PHÁN QUYẾT TRỌNG TÀI — 2026-09-03
> Toàn bộ tài liệu này **đã được đối chiếu với bảng phán quyết trọng tài ngày 03/09/2026** và sửa theo. **Mọi hằng số trong file này lấy từ `/home/huypq/teemi/docs/plan/_rulings.md`** (mục A — Từ điển giá trị chuẩn). Khi file này và `_rulings.md` nói khác nhau, **`_rulings.md` thắng**.
>
> Các hằng số bị áp vào file này, theo số hiệu: **A08** `group_alive` = A ≥ 3 người nộp ≥1 tấm / 7 ngày · **A09** `duo_alive` chỉ tham khảo · **A23–A25** `sổ-D28` là OMTM, cohort tuần 1–4 (02/12→29/12/2026), **n ≥ 24, KTC ±17 điểm** · **A26** mẫu số `B` = 5 sổ nhánh A, bước nhảy 20 điểm · **A30** khoá sổ là `book_id` (mọi `*_group_id` đọc lại thành `*_book_id`) · **A62–A64** doanh thu **0đ tuyệt đối** 6 tháng đầu, kill gate 31/03/2027 **bỏ vế "doanh thu = 0"** · **A70** A = **4,0 người/sổ** · **A72** 25 lượt/người/tháng · **A54** đèn pháp lý = **hai counter** (`monthly_visits` vàng 6.000/đỏ 8.500 · `monthly_active_persons` vàng 600/đỏ 850), **con số 700 đã bị bác** · **A88–A93** beta 02/12/2026 · 12 sổ đợt 1 · ≤30 đợt 2 từ tuần 15 · trần vận hành **35 sổ** ≠ trần hành chính **60 sổ** · **A99** caption card · **A101** đa sổ bị bác ở MVP-0 (`G ≡ 0` có ý thức) · **A103** một file ADR duy nhất `docs/adr/ADR-000-bat-bien.md` + `docs/adr/pw-ledger.md` · **A118–A122** 26/01/2027 (cổng `sổ-D28`) · 06/02/2027 (mùng 1 Tết) · 03/02 04:00 → 13/02 03:59 ICT (freeze, **10 ngày**) · 31/03/2027 (kill gate founder).
>
> **File này THẮNG ở một mâu thuẫn (C06):** ngày mùng 1 Tết Đinh Mùi = **06/02/2027**, không phải 17/02/2027. Bốn tài liệu khác phải sửa theo file này.

> **Đơn vị của toàn bộ tài liệu này là SỔ, không phải người, không phải lượt cài** (P10). Không có lượt cài nào để đếm — sản phẩm là web. Mọi chỗ tài liệu cũ viết "install", ở đây đọc là **"người mở sổ"**.

---

## 0. BỐN CON SỐ ĐỊNH KHUNG MỌI THỨ PHÍA DƯỚI

| Con số | Giá trị | Nguồn |
|---|---|---|
| K-factor kỳ vọng | **0,25 – 0,7** — K < 1, không viral tự thân | r04 §3.2 [INFERENCE + GUESS] |
| Funnel người-thứ-2 app-based | 3,2%/người bạn → 1 nhóm/29 lượt cài | phản biện #5, digest [GUESS tham số] |
| Funnel người-thứ-2 web (Chốt Sổ) | **14,2%/người bạn** → P(sổ hình thành từ 6 lời mời) = **20,5%** | option-D §9, Bin(6; 0,142) P(X≥2) [số học trên tham số ước lượng] |
| P(nhóm messaging chết trong tuần đầu) | **~40%**, baseline vật lý | Qiu et al., WWW 2016, toàn bộ log WeChat [FACT] |

**Hệ quả một dòng:** cải thiện ×4,4 của hướng web làm cho việc *hình thành* sổ rẻ đi, **không** làm sổ sống dai hơn (§9 mục 6 của v2 đã nói đúng điều này). Vì vậy toàn bộ playbook dưới đây tối ưu **giờ founder trên mỗi sổ SỐNG D28**, không tối ưu lượt truy cập.

**Chỉ số duy nhất dán lên tường:**

> `sổ_sống_không_cần_founder` = số sổ đạt `group_alive` (≥3 người nộp trong 7 ngày) **mà founder không gửi một tin nhắn nào trong 14 ngày gần nhất**.

Đây là phiên bản GTM của "cửa sổ im lặng" ở §10(f). Mọi chỉ số khác đều nói dối được; chỉ số này không.

---

## 1. HAI MƯƠI SỔ ĐẦU TIÊN ĐẾN TỪ ĐÂU

Không có kênh nào. Có **bốn vòng đồng tâm**, và ba vòng đầu là người founder gọi tên được.

### 1.1. Bảng bốn vòng — có xác suất, có số cuộc trò chuyện

Funnel tuyển 1-1 gồm đúng 3 bước, đo được từng bước:

`p(hình thành) = p(đồng ý thử) × p(thực sự mở sổ + dán card trong 48h) × p(≥2 người bạn nộp trong 72h)`

| Vòng | Là ai | p1 đồng ý | p2 mở sổ+dán | p3 đủ 3 người | **p(hình thành)** | Cuộc/1 sổ | Phút/cuộc | **Giờ/1 sổ hình thành** | D28 giả định | **Giờ/1 sổ SỐNG D28** |
|---|---|---|---|---|---|---|---|---|---|---|
| **0** | Nhóm bạn của chính founder (founder ở trong nhóm) | 0,95 | 0,95 | 0,85 | **76,7%** | 1,3 | 15 | **0,33** | 0,45 | **0,7** |
| **1** | Bạn trực tiếp của founder, mỗi người là "chủ xị" một nhóm khác | 0,55 | 0,70 | 0,60 | **23,1%** | 4,3 | 15 | **1,08** | 0,40 | **2,7** |
| **2** | Bạn của bạn — do chủ xị vòng 1 giới thiệu đích danh | 0,35 | 0,60 | 0,55 | **11,6%** | 8,6 | 20 | **2,87** | 0,30 | **9,6** |
| **3** | Người lạ tự tìm đến từ kênh công khai | 0,20 | 0,45 | 0,45 | **4,1%** | 24,7 | 12 | **4,94** | 0,20 | **24,7** |

Tất cả p1/p2/p3 là **[ước lượng của tôi]**, không phải đo. Chúng phải được ghi vào Google Sheet ở §12 và thay bằng số thật sau Bước 0 — đó là mục đích của bảng, không phải để tin.

### 1.2. Cấu tạo 20 sổ đầu — và ràng buộc làm nó khó hơn founder tưởng

| Nguồn | Số sổ | Cuộc trò chuyện | Giờ founder |
|---|---|---|---|
| Vòng 0 — nhóm bạn của chính founder | **2** | 2,6 | 0,7 |
| Vòng 1 — bạn trực tiếp làm chủ xị | **10** | 43 | 10,8 |
| Vòng 2 — giới thiệu bởi chủ xị vòng 1 | **8** | 69 | 22,9 |
| **Tổng 20 sổ hình thành** | **20** | **~115** | **~34 giờ** |

**Ràng buộc bị bỏ sót ở mọi tài liệu trước — vòng 1 CẠN.** Nếu pool vòng 1 thật của founder là ~30 người có thể nhắn mà không ngại, thì ở p = 23,1% vòng 1 tối đa cho **~7 sổ**, không phải 10. Nghĩa là **20 sổ bắt buộc phải đi qua vòng 2**, và vòng 2 không tự có — nó là một cơ chế phải bấm.

> **Việc bấm vòng 2, 2 phút, 0đ, làm ở ngày 10 của mỗi sổ:** nhắn riêng chủ xị đúng một câu —
> _"Trong nhóm mày, đứa nào còn có một nhóm khác mà mày nghĩ nó sẽ mở sổ?"_
>
> Không hỏi "mày giới thiệu ai được không" (câu đó xin ơn). Hỏi tên một người cụ thể trong một nhóm cụ thể. Ghi tên đó vào sheet cột `nguồn = vòng2/<tên chủ xị>`.

### 1.3. Đúng những nhóm nào — 8 hình dạng nhóm, xếp theo độ hợp

Không tuyển "người dùng". Tuyển **nhóm đã tồn tại, đã có nhịp nhắn tin hằng ngày** (bài học Discord, r04 §98: chiếm nhóm đã có, không tạo nhóm mới).

| # | Hình dạng nhóm | Vì sao hợp | Rủi ro | Xếp hạng |
|---|---|---|---|---|
| 1 | **Nhóm bạn thân 4–6 đứa cùng trường/cùng lớp cũ**, đã chat hằng ngày ≥6 tháng | Đúng định nghĩa sản phẩm. Nhịp có sẵn, chỉ thêm một tấm ảnh | Không | **A+** |
| 2 | **Nhóm ở trọ / cùng phòng ký túc** 3–5 người | Gặp nhau ngoài đời mỗi ngày → cà khịa có hậu quả thật, `q_c` cao nhất | Nhóm tan khi hết học kỳ | **A** |
| 3 | **Nhóm ôn thi / học nhóm cùng lớp** (không phải group ôn thi công khai) | Kèo "học 15 phút"/"đọc 5 trang" là preset có sẵn | Tan sau kỳ thi | **A** |
| 4 | **Nhóm đồng nghiệp trẻ cùng team** 4–6 người | Nhịp 21:00 khớp giờ tan làm | Ranh giới công việc — kèo cá nhân bị đồng nghiệp đọc | **B+** |
| 5 | **Nhóm CLB/ban cán sự** (CLB nhảy, bóng, tình nguyện) | Có chủ xị tự nhiên (trưởng ban) | Là nhóm việc, không phải nhóm thân → cà khịa nhạt | **B** |
| 6 | **Nhóm anh chị em ruột / họ** | Không tan theo mùa (bài học Marco Polo, r04) | Nhỏ (2–3 người), lệch tuổi, có thể có <16 | **B** |
| 7 | **Nhóm tập gym cùng phòng tập** | Kèo sẵn có | Không phải nhóm chat thân, đã có app khác phục vụ | **C** |
| 8 | **Server/group người lạ cùng sở thích** | Nhiều người | **Vi phạm tinh thần §6 mục 7 (không ghép người lạ 12 tháng đầu)** — loại | **LOẠI** |

### 1.4. Nói gì — kịch bản nhắn tin, nguyên văn

Ba đoạn dưới đây là **vật liệu bán hàng**, phải chứa `không cài app` · `chốt sổ` · `một tấm`, và không được chứa 7 chữ bị cấm ở §1.

**(a) Nhắn chủ xị vòng 1 — 1-1, Zalo, không gửi hàng loạt:**

> "Ê. Nhóm [tên nhóm] còn chat mỗi ngày không?
> Tao đang thử một thứ: tối nào nhóm cũng chốt sổ, mỗi đứa gửi một tấm, không ai cài app gì hết.
> Mày dán giùm tao một tấm vào nhóm mỗi tối trong 14 ngày được không? Tao làm hết phần còn lại."

Ba câu. Câu 1 là **sàng lọc** (nhóm chết thì dừng ở đây, không tốn giờ). Câu 2 là câu bán ở §1 nói theo giọng nhắn tin. Câu 3 là **ask cụ thể có thời hạn** — không phải "dùng thử app tao".

**(b) Câu founder KHÔNG được nói,** vì nó làm hỏng phép đo ở §10(f):
`"ủng hộ tao với"` · `"giúp tao một tay"` · `"làm ơn"` · `"tao sắp ra mắt"`. Sổ nào được tuyển bằng những chữ này phải bị **đánh dấu `nhờ_vả = true` trong sheet và loại khỏi phép tính `q_c` của cửa sổ im lặng.** Nếu không làm việc này thì Bước 0 đo vốn xã hội của founder, đúng như §10(f) cảnh báo.

**(c) Caption soạn sẵn trên card** — bản chuẩn duy nhất [A99]:
_"**Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.**"_ + link

> ### ✏️ [CHỐT 2026-08-28 — QĐ-31 · xác nhận lại 03/09/2026 — A99] Caption đã ĐỔI. Bản cũ (`Bấm vô nộp đi`) bị bác. Câu "đã chốt ở §4.6, giữ nguyên" **đã bị xoá khỏi mục (c)** — nó là dấu vết của bản caption cũ và đọc nhầm sẽ khôi phục lại bản đã chết.
> `08-ux-flow-va-tone.md` §2.2 lập luận: **`Bấm vô nộp đi` là một mệnh lệnh chỉ có nghĩa với người CHƯA nộp** — tức **cùng hình dạng ngữ nghĩa** với chữ cấm vĩnh viễn `đứa nào chưa`, thứ mà v2 §1 gọi là _"chữ nguy hiểm nhất trong toàn bộ hồ sơ"_. Bản mới vẫn đủ **ba chữ bắt buộc** (`chốt sổ`/`sổ` · `một tấm` · `không cài app`), mất mệnh lệnh, **0 pw**.
> Đây là **bề mặt phát ngôn quan trọng nhất của sản phẩm**: chuỗi chữ do app sinh ra, đi vào nhóm Zalo mỗi tối, **112 lần chỉ riêng trong Bước 0**. `08` là tài liệu sở hữu tone of voice và lập luận của nó bám thẳng vào danh sách chữ cấm của v2 §1 ⇒ nó thắng. Đã sửa đồng thời ở `01-v2` §4.6 và ở script S5 của `02` §5.9.

### 1.5. Sổ số 0 — nhóm bạn của chính founder

Bắt buộc có, và bắt buộc **không** được tính vào phép đo H1/H2/H3. Lý do: `nhờ_vả` là giá trị mặc định trong nhóm của chính founder. Vai trò của nó là **kiểm thử vận hành**: founder là người đầu tiên phát hiện card render lỗi trên Xiaomi, link bị Zalo cảnh báo, hay ảnh bị crop ở 4:5 (§10(h)). Coi nó là môi trường staging có người thật, không phải một điểm dữ liệu.

> ### ⚠️ HỆ QUẢ SỐ HỌC CỦA VIỆC LOẠI SỔ SỐ 0 — phải in kèm mỗi lần trích `B` [A26, A95]
> Sổ số 0 **không nằm trong mẫu số của bất kỳ phép đo nào**, kể cả `B`. Bước 0 chạy **8 sổ = 5 nhánh A + 3 nhánh B** [A94], và sổ số 0 nằm trong 5 sổ nhánh A đó ⇒ **mẫu số của `B` = 5 sổ nhánh A, không kể sổ số 0**.
> `B` = % sổ nhánh A còn `group_alive` ở ngày 14, `group_alive` tính trên **roster đóng băng** [A08, A14].
> **Với n = 5, `B` chỉ nhận đúng 6 giá trị: {0 · 20 · 40 · 60 · 80 · 100}%** — **bước nhảy 20 điểm phần trăm**. Nghĩa là một sổ đổi ý làm `B` nhảy 20 điểm, và không có ngưỡng nào đặt ở giữa hai bậc mà có nghĩa. Câu này **bắt buộc in kèm** mỗi lần con số `B` xuất hiện trong bất kỳ văn bản quyết định nào.
> Nếu Bước 0 rơi xuống **sàn tuyệt đối 6 sổ (4A + 2B)** thì mẫu số `B` = 4 ⇒ bước nhảy **25 điểm**, và mọi ngưỡng phải phát biểu lại theo **tỉ lệ %**, tuyệt đối không phát biểu theo "3/5" [A94].

---

## 2. LÀM THỦ CÔNG KHÔNG SCALE — TRẦN THẬT LÀ BAO NHIÊU SỔ

### 2.1. Trần trong Bước 0 là **8 sổ**, và đó là số học chứ không phải sở thích

| Việc | Phút/sổ/tối | Sổ | Giờ/tuần |
|---|---|---|---|
| Nhánh A: dựng card Canva (đọc sheet, ghép ảnh, gõ 3 con số, dán) | 20 | 5 | 11,7 |
| Nhánh B: card tối giản (ảnh + đếm ngày) | 10 | 3 | 3,5 |
| **Tổng** | | **8** | **15,2** |

Khớp đúng con số `~15 giờ/tuần` ở §9 của v2. Ở trần 15 giờ/tuần, **sổ thứ 9 không tồn tại** — nó chỉ tồn tại bằng cách rút ngắn thời gian cho 8 sổ kia, tức làm hỏng chính phép đo. **Mục tiêu là 8 sổ (5A + 3B) [A94] — đây là con số bắt buộc, không phải con số mong muốn.** Chỉ khi đến **07/09** (hạn chốt danh sách, ngày trước khi Bước 0 bắt đầu 08/09 [A106–A107]) mà không đủ thì mới rơi xuống **sàn tuyệt đối 6 sổ (4A + 2B)**, ghi rõ cỡ mẫu, và **phát biểu lại mọi ngưỡng theo tỉ lệ %, không theo "3/5"** [A94]. Đừng ép cho đủ 8 bằng nhóm không đạt chuẩn — cảnh báo cỡ mẫu ở §11 đã nói n = 3–5 không cho ý nghĩa thống kê, thêm một sổ rác không sửa được điều đó nhưng làm bẩn mẫu số.

### 2.2. Trần sau khi có MVP là **~35 sổ**

Khi card tự sinh, chi phí/sổ/tuần sụp:

| Việc vận hành | Phút/sổ/tuần |
|---|---|
| Liếc dashboard + mở sổ xem có gì bất thường | 2,0 |
| 1 tin nhắn cho chủ xị (chỉ sổ đang tụt) | 3,0 |
| Xử lý câu hỏi/sự cố (30% số sổ × 8 phút) | 2,4 |
| Xử lý báo cáo nội dung (dự phòng — **SLA kép [A59]: 48h cho khiếu nại người dùng · 24h cho yêu cầu cơ quan nhà nước, khẩn cấp 6h**) | 1,0 |
| **Tổng** | **8,4 phút/sổ/tuần** |

Ngân sách 10 giờ/tuần (trần cứng §9) trừ đi 3 giờ tuyển vòng 2 và 1 giờ làm nội dung ⇒ **6 giờ = 360 phút ⇒ 42 sổ lý thuyết ⇒ đặt trần vận hành ở 35 sổ** (đệm 17%). `[ước lượng — 8,4 phút/sổ/tuần chưa đo]`

> ### 🚧 HAI TRẦN KHÁC NHAU, TUYỆT ĐỐI KHÔNG ĐƯỢC TRỘN [A92, A93 — S22]
> | Trần | Con số | Bản chất | Cái gì bị chạm khi vượt |
> |---|---|---|---|
> | **Trần VẬN HÀNH** | **35 sổ sống cùng lúc** | Số học giờ founder: 8,4 phút/sổ/tuần × 35 ≈ 4,9 giờ/tuần trên ngân sách 10 giờ/tuần | Chất lượng chăm sóc, và qua đó là chính phép đo `sổ-D28` |
> | **Trần HÀNH CHÍNH (pháp lý)** | **60 sổ** | Quy đổi đèn vàng: 6.000 lượt/tháng ÷ 25 lượt/người/tháng ÷ 4,0 người/sổ = 60 sổ [A70, A72, A73] | Nghĩa vụ **Giấy phép MXH** — 3–6 tháng thủ tục, cần pháp nhân VN [A57] |
>
> **60 sổ KHÔNG phải mục tiêu và KHÔNG phải phần thưởng cho việc chạy tốt — nó là trần không được chạm** [A93]. Việc "nới trần vận hành từ 35 lên 60 vì thấy vẫn kham được" đã bị **CẮT** (S22): 60 sổ ở 8,4 phút/sổ/tuần đã ăn đúng 8,4 giờ/tuần, tức **hết sạch đệm** — vượt trần vận hành ở đó nghĩa là vừa hỏng chăm sóc vừa bật đèn vàng pháp lý cùng lúc.
> Khi chạm **đèn vàng** (`monthly_visits` ≥ 6.000 **HOẶC** `monthly_active_persons` ≥ 600 — hai counter, quan hệ **HOẶC** [A54]): **bắt đầu soạn hồ sơ Giấy phép MXH** [A57]. Khi chạm **đèn đỏ** (8.500 lượt / 850 người): **dừng nhận sổ mới ngay trong ngày** [A58].

> **Luật viết trước, khi founder còn khách quan:** _"Sổ thứ 36 bị TỪ CHỐI, đưa vào danh sách chờ, không phải được nhận rồi bỏ bê."_ Sổ bị bỏ bê tệ hơn sổ không tồn tại: nó tạo một điểm dữ liệu `group_alive = false` mà nguyên nhân là founder, và nó làm sổ-D28 — con số mở khoá widget ở §6 mục 2 — sai theo hướng bi quan.

### 2.3. Làm tay kéo dài bao lâu — điều kiện thoát, không phải ngày

Không đặt "3 tháng". Đặt **hai cổng, thoát khi cổng nào đến trước**:

| Cổng | Điều kiện | Ý nghĩa |
|---|---|---|
| **Cổng thoát tốt** | ≥50% sổ mới trong **4 tuần liên tiếp** có `parent_book_id ≠ null` (do sổ cũ đẻ ra), founder không nhắn ai | Vòng lan truyền đã chạy → chuyển giờ từ tuyển sang sản phẩm |
| **Cổng thoát xấu** | Đến **31/03/2027** mà `sổ_sống_không_cần_founder < 8` | Trùng kill gate founder ở §9 mục 12 → dừng |

Giữa hai cổng đó, **làm tay là công việc chính, không phải việc tạm**. Paul Graham gọi là "do things that don't scale"; ở đây nó có một lý do cụ thể hơn: với 8→35 sổ, founder là **kênh phân phối duy nhất có tỉ lệ chuyển đổi >10%**. Mọi kênh khác ở §4 đều dưới 5%.

### 2.4. Founder tự làm recap và tự nhắc — làm gì và KHÔNG làm gì

| Được làm | Không được làm | Lý do |
|---|---|---|
| Dựng card mỗi tối (Bước 0) | Nhắc **cá nhân** một người chưa nộp | Vi phạm P2 ở tầng con người: một tin nhắn riêng "hôm nay mày chưa nộp" chính là ô trống có tên người, chỉ chuyển từ pixel sang Zalo |
| Nhắn **chủ xị**, nói về **sổ** | Nhắn thành viên, nói về **người** | Giữ nguyên bất biến P1/P2 kể cả khi vận hành bằng tay |
| Trả lời câu hỏi kỹ thuật bất kỳ lúc nào | Trả lời trong 3 ngày im lặng (ngày 8, 11, 14) | §10(f), không thương lượng |
| Gửi 1 ảnh recap tuần cho chủ xị | Gửi recap cho từng người | 8× chi phí, 0 lợi ích đo được |

---

## 3. BÀI TOÁN "CẦN 3 NGƯỜI MỚI CÓ GIÁ TRỊ" — XẾP HẠNG CÁC CÁCH GIẢI

Trước khi xếp hạng: **v2 đã trả tiền cho một nửa bài toán này rồi mà không gọi tên nó.** `k = 1 khi A_eff ≤ 2` (`k = 2` khi `A_eff ≥ 3`; `A_eff = min(A(D), A(D−1))` — [A06, A07]) nghĩa là **sổ 2 người vẫn tính ngày bình thường**, và "ngày thứ N" + "số tấm" không bao giờ đi xuống (§4.5 Bảng 5) nghĩa là **sổ 1 người vẫn có hai con số tăng**. Poparazzi chết vì solo value = 0; Chốt Sổ không ở tình trạng đó.

| Hạng | Cách giải | pw thêm | ROI | Độ khó | Phán quyết |
|---|---|---|---|---|---|
| **1** | **Chiếm nhóm chat đã có** — form tuyển bắt nhập tên 3 bạn + link group chat, chỉ mở sổ khi đủ 3 | **0** (đã có, §12) | **Rất cao** | Thấp (kỷ luật tuyển) | Đây là cách giải chính. Nó không "giải" bài toán 3 người — nó **bỏ qua** bài toán bằng cách chỉ nhận nhóm đã có 3 người |
| **2** | **`k=1` khi `A_eff≤2` + hai con số không bao giờ giảm** (giá trị solo/duo tạm) | **0** (đã có) | Cao | 0 | Giữ nguyên. Đây là lý do sổ không "trống" khi mới 1–2 người. Ngưỡng tính trên **`A_eff = min(A(D), A(D−1))`**, không phải `A` cùng ngày [A06] |
| **3** | **Seeding người thật** — founder + 2–3 người tin cậy làm chủ xị thay | 0 (giờ, không pw) | Cao ở n<35 | Trung bình (tốn 34 giờ cho 20 sổ, §1.2) | Làm ngay. Đây là §1 và §2 |
| **4** | **Ghost/spectator CHỈ-ĐỌC** — người xem trang public của sổ, không nộp, không bị đếm, **không có hành động nào** | **0** (trang public đã có, §4.10 mục 2) | Trung bình | 0 | ⚠️ **Không được coi là "đã giải xong"** [S23]: **nút thả tim đã bị CẮT khỏi MVP-0** (QĐ-05b/S01), nên ở MVP-0 cái còn lại chỉ là **xem được trang public**, không có bất kỳ hành động nào cho người xem. Trang public **GIỮ** (cắt nó thì M2 không đo được). Chỉ cần đừng che nó sau tường đăng nhập |
| **5** | **Duo trước rồi lớn lên** | 0 | Trung bình | Thấp | Ẩn trong `k=1 khi A_eff≤2`. Không cần cơ chế riêng — §2 của v2 đã bác hướng C bằng 3 lý do, trong đó `duo_alive` D30 = 6,5–19,1% **không** hơn `group_alive` D30 = 12,5–19,1%. ⚠️ `duo_alive` (A ≥ 2) **chỉ đo song song để tham khảo, KHÔNG được thay thế `group_alive` (A ≥ 3) trong bất kỳ quyết định nào** [A08, A09] |
| **6** | **Nhóm dựng sẵn theo chủ đề, ghép người lạ** | ≥1,5 | **Âm** | Cao | **LOẠI.** Vi phạm §6 mục 7; mở toàn bộ bề mặt an toàn cho founder một mình; kéo thẳng vào định nghĩa MXH của NĐ 147/2024 ở tốc độ nhanh nhất |
| **7** | **NPC/bot cà khịa 48h đầu** (r04 §2.3c gợi ý) | ≥0,8 | Âm | Cao | **LOẠI.** Vi phạm P12 (không tự làm thứ Zalo làm tốt hơn) và §6 mục 4. Chưa có app nào công bố kết quả cơ chế này [GUESS, r04 tự ghi] |

**Kết luận có thể hành động:** 4 trong 6 cách giải đã được trả tiền, chi phí thêm bằng 0. Cách duy nhất còn hấp dẫn về trực giác (nhóm dựng sẵn theo chủ đề) là cách tệ nhất theo cả pháp lý lẫn an toàn. **Bài toán 3 người không cần một tính năng mới — nó cần một kỷ luật tuyển.**

---

## 4. KÊNH — ĐÁNH GIÁ THỰC TẾ CHO VN 2026, ĐO BẰNG GIỜ FOUNDER

Funnel cho lưu lượng **ẩn danh** (khác funnel 1-1 ở §1.1):

`click → mở sổ (đặt tên + chọn kèo + nộp tấm đầu) 8% → dán card vào nhóm 45% → ≥2 bạn nộp trong 72h 35%` = **1,26% mỗi click** [ước lượng; ba tham số này phải được đo bằng 3 event từ ngày đầu]. Nhân D28 = 0,20 ⇒ **0,25% mỗi click ra 1 sổ sống D28** ⇒ **~400 click/1 sổ sống**.

| # | Kênh | Tiền/tháng | Giờ founder/tháng | Sản lượng ước tính/tháng | **Giờ/1 sổ SỐNG D28** | 0đ được? | Phán quyết & thời điểm |
|---|---|---|---|---|---|---|---|
| 1 | **Vòng 1 — nhắn 1-1 chủ xị** | 0đ | 12 | 2,8 sổ hình thành → 1,1 sống | **2,7** | Có | **Bắt đầu hôm nay.** Kênh rẻ nhất, cạn sau ~7 sổ |
| 2 | **Vòng 2 — chủ xị giới thiệu đích danh** | 0đ | 12 | 4,2 hình thành → 1,3 sống | **9,6** | Có | **Bật ở ngày 10 của mỗi sổ.** Kênh duy nhất có thể đưa từ 8 lên 35 sổ |
| 3 | **Sổ cũ đẻ sổ mới** (thành viên sổ A mở sổ B) | 0đ | ~2 | 0 hôm nay — **bị khoá bởi §6 mục 14** | **~1 nếu chạy** | Có | **Kênh duy nhất có thể scale. Xem Bất đồng #1** |
| 4 | **Facebook Group** (trường, ký túc xá, CLB) | 0đ | 8 | 1 post/group × 8 group ≈ 175 click → 2,2 hình thành → 0,44 sống | **~18** | Có | Thử **8 post trong 2 tuần**. Nếu <1 sổ sống thì bỏ. FB vẫn 91% weekly usage VN [FACT, r02] nhưng reach organic của post lạ trong group rất thấp |
| 5 | **Threads** | 0đ | 7 (20 post × 20 phút) | ~1 post đạt 10–15k view → ~90 click → 1,1 hình thành → 0,22 sống | **~32** | Có | **Nếu buộc phải làm content, làm Threads TRƯỚC TikTok** — cùng rủi ro, chi phí giờ thấp hơn ~7 lần/đơn vị. Threads VN: penetration 10% Q2, Gen Z >25% user [FACT, r02 §2.4] |
| 6 | **Trường đại học — qua CLB/ban cán sự** | 0đ + đi lại | 10 | 1 CLB = 1–3 sổ, nhưng đây thực chất là **vòng 2 có địa chỉ**, không phải kênh đại chúng | **~8** | Có | Làm trong tháng 9 và cuối tháng 8/2027 (đầu năm học). Không phát tờ rơi — **tìm 1 người, không tìm 100 người** |
| 7 | **Nhóm ôn thi (cùng lớp, tự lập 4–6 đứa)** | 0đ | 8 | Hình dạng nhóm hạng A ở §1.3 | **~9** | Có | **Cửa sổ Q1–Q2/2027** (thi tốt nghiệp 6/2027; lứa sinh 2009 đã 18 tuổi, qua age gate ≥16). Kênh thời vụ tốt nhất sau vòng 1–2 |
| 8 | **TikTok organic (account 0 follower)** | 0đ | 25 (10 video × 2,5h) | Kỳ vọng: 9 video <1k view, 1 video ~20k → 80 click → 1,0 hình thành → 0,2 sống | **~125** | Có (0đ nhưng đắt bằng GIỜ) | **KHÔNG làm trước tuần 12.** Đắt hơn nhắn tin tay **13–46 lần** tính bằng giờ founder. Locket viral nhờ TikTok [FACT] nhưng Locket có widget + 0 giây setup, và trả tiền cho hàng trăm nano-KOC |
| 9 | **Micro-KOC TikTok trả phí** | **612k–3,06tr VND/video** [FACT, r02 §4.2]; cần ≥10 video mới tạo cảm giác trend ⇒ **6–30 triệu** | 6 | 1 video 3tr ≈ 30k view → 120 click → 1,5 hình thành → 0,3 sống | **~10 triệu VND/sổ sống** | **Không** | **KHOÁ** cho tới khi sổ-D28 ≥25% trên ≥30 sổ. r02 §4.3 đã kết luận: không chạy paid trước khi D7 >20%. Ở đây thay bằng đơn vị đúng: **trước khi sổ-D28 >25%** |
| 10 | **Phòng gym** | 0đ | 8 | Nhóm gym ≠ nhóm chat thân; kèo tập đã có app riêng | **cần kiểm chứng, ước >40** | Có | **Bỏ**, trừ khi qua một PT làm chủ xị nhóm học viên — và nhóm học viên là quan hệ quen-lỏng, `q_c` dự kiến thấp |
| 11 | **Discord / cộng đồng học tập** | 0đ | 8 | Server là tập hợp **người lạ** | — | Có | **Bỏ.** Vi phạm tinh thần §6 mục 7. Quy mô Discord ở Gen Z VN: **cần kiểm chứng** |
| 12 | **TikTok/Meta Ads trả phí** | CPM 25–50k VND, CPI ước 10–30k VND [r02 §4.3] | 4 | Mua click, không mua sổ | **≥600k VND/sổ sống** ở CPC 4k VND × 400 click ÷ ... thực tế cao hơn vì click quảng cáo lạnh hơn click bạn bè | **Không** | **KHÔNG BAO GIỜ trong 12 tháng đầu.** Doanh thu 0đ; và mọi click mua về đều tạo "sổ một mình" làm bẩn mẫu số `q_c` |

### 4.1. Ba kết luận đi ngược trực giác từ bảng trên

1. **Kênh rẻ nhất và kênh duy nhất scale là hai kênh khác nhau.** Nhắn tay rẻ nhất (2,7 giờ/sổ sống) nhưng cạn ở ~7 sổ. "Sổ cũ đẻ sổ mới" là thứ duy nhất không cạn — và nó đang bị khoá bởi một quyết định scope (Bất đồng #1).
2. **Threads đánh bại TikTok cho founder một mình**, không vì Threads tốt hơn mà vì 20 phút/post so với 2,5 giờ/video. Ở ngân sách giờ 10/tuần, chi phí sản xuất quan trọng hơn trần reach.
3. **Không kênh công khai nào ra dưới 18 giờ/sổ sống.** Nghĩa là ở quy mô ≤35 sổ (trần vận hành, §2.2), **kênh công khai không có vai trò gì.** Chúng chỉ có nghĩa nếu trần vận hành được nâng — mà nâng trần vận hành đòi người thứ hai, thứ mà §6 mục 19 đã khoá.

---

## 5. NỘI DUNG CÓ THỂ LAN — 3 SHARE ASSET

Phân biệt hai thứ mà mọi tài liệu trước gộp làm một:

| | **Asset PHÂN PHỐI** | **Asset ACQUISITION** |
|---|---|---|
| Đi đâu | vào **trong** nhóm Zalo đã có | ra **ngoài** công chúng (Threads, TikTok, story) |
| Ai xem | người đã biết nhau | người lạ |
| Mục tiêu | giữ nhịp, kéo người 2–5 vào sổ | tạo người mở sổ mới |
| Đã có ở v2 | **Card chốt sổ (§4.6)** | **KHÔNG CÓ GÌ** |

Đây là lỗ hổng thật: v2 có một asset xuất sắc cho phân phối và **không có asset nào cho acquisition**. Ba asset dưới đây lấp chỗ đó với chi phí tối thiểu.

### Asset 1 — Card chốt sổ hằng tối (4:5) — ĐÃ CÓ, không sửa

Giữ nguyên §4.6. Ba luật bổ sung, ghi vào ADR:

- **Không bao giờ nằm sau bất kỳ tường nào** — không đăng nhập, không trả phí, không "share để mở khoá". Đây là kênh acquisition duy nhất; khoá nó là tự cắt mạch máu.
- **Không chứa `goal_text`** (P3, có test CI) — kể cả trong asset 2 và 3.
- **Không chứa tên người VẮNG** (P2) — kể cả khi ai đó thấy card "trống" và muốn giải thích.

### Asset 2 — "Sổ tháng" (9:16) — asset acquisition chính, +0,15 pw

Sinh **tự động** khi sổ chạm mốc 30 ngày hoặc 100 tấm. Nội dung:

```
        SỔ [tên nhóm]
   Ngày thứ 30 · 84 tấm · chuỗi 11
   [ lưới 5×6 thumbnail 30 ngày ]
   ✓ 61   💀 23
        chotso.vn
```

Vì sao asset này lan được mà card hằng tối thì không: **lưới 30 ngày là một hình ảnh mà người lạ hiểu trong 1 giây và không cần biết ai trong ảnh.** Nó kể một câu chuyện về **thời gian**, không về người — đúng thứ post được lên Threads mà không lộ ai. Nó cũng là thứ duy nhất chứng minh câu bán ở §1 là thật.

- Kích thước 9:16 vì đích đến là Threads/story, không phải nhóm chat.
- **Ô ảnh của người đã rời sổ hoặc đã xoá ảnh bị bỏ trống, không tô xám, không ghi tên** (P2).
- Chỉ người **đang ở trong sổ** mới sinh được nó. Không có URL công khai đoán được.

### Asset 3 — "Thẻ TOANG" (1:1) — asset meme, ~0,05 pw

```
   [ ảnh TOANG toàn khung ]
   💀  Ngày 34: toang.
       chotso.vn
```

Đây là thứ buồn cười nhất trong sản phẩm (§4.3 đã lập luận: đứa thất bại ngoạn mục mới là đứa được rep 15 tin). Dùng chung renderer với asset 1 nên gần như miễn phí.

> **Hàng rào an toàn cụ thể, bắt buộc:** nút sinh Thẻ TOANG **chỉ hiện cho chính chủ tấm ảnh đó**. Không ai khác có nút. Nếu bất kỳ ai khác share được ảnh TOANG của người khác kèm nhãn 💀, sản phẩm vừa tự chế tạo lại "Báo Thủ" — thứ §6 mục 6 cấm vĩnh viễn — chỉ đổi kênh phát hành.

### Bảng đối trừ scope (P7 — luật đánh đổi 1-1)

| Thêm | +pw | Cắt | −pw |
|---|---|---|---|
| Asset 2 "Sổ tháng" 9:16 | +0,15 | Nút **"Lưu ảnh"** riêng ở màn 4 → dùng share sheet của trình duyệt | −0,10 |
| Asset 3 "Thẻ TOANG" 1:1 | +0,05 | Preview riêng cho từng asset → dùng chung một màn preview, đổi tỉ lệ | −0,10 |
| **Cộng** | **+0,20** | | **−0,20** |

> ### ⏸ [CHỐT 2026-08-28 — QĐ-35] CẢ HAI ASSET HOÃN SANG T13+. Ba lý do, mỗi lý do đủ một mình.
> **(1) Asset 2 phụ thuộc một thứ đã bị cắt.** Nó render **lưới 30 ngày thumbnail** — và lưới 30 ngày là khoản cắt lớn nhất của MVP-0 (`07`, US-07, hoãn T13+). Không có lưới thì không có Asset 2. Trớ trêu: chính khoản cắt đó là thứ trả tiền cho các khoản thêm khác.
> **(2) Số bề mặt rời hệ thống tăng từ 1 lên 3.** v2 chỉ có **một** bề mặt rời hệ thống (card 4:5) và gọi đó là _"bề mặt được kiểm soát chặt nhất"_. Ba bề mặt = **ba bộ snapshot test**, ba nơi P2/P3 có thể bị phá, ba nơi phải kiểm tra "không tên người vắng, không `goal_text`" — chi phí thật cao hơn +0,20 pw.
> **(3) 🔴 CHƯA CÓ LUỒNG ĐỒNG Ý CHO VIỆC ĐĂNG CÔNG KHAI. Đây là lý do nặng nhất và nó là lý do pháp lý, không phải lý do scope.**
> Asset 2 chứa lưới thumbnail của **4–8 người**, và nó được thiết kế để đăng lên **Threads/story cho người lạ**. Asset 3 đưa **ảnh đời thường toàn khung của một người kèm nhãn 💀** ra kênh công khai. Hồ sơ hiện có **đúng một dòng consent** (`08` S9) và nó chỉ nói về việc ảnh xuất hiện **trên card gửi vào NHÓM CHAT** — một phạm vi hoàn toàn khác. `05` §8.2 điều 4 và `10` §3.2 đều viện dẫn **Điều 32 BLDS 2015** cho việc **in ảnh ra giấy**, nhưng **không ai viện dẫn nó cho việc đăng công khai** — dù đăng công khai là hành vi rủi ro hơn hẳn.
> **Điều kiện mở (cả ba phải đủ):** (a) lưới 30 ngày đã build · (b) **một luồng đồng ý riêng, tường minh, trước mỗi lần sinh asset công khai**, nêu rõ ảnh của những người nào sẽ ra khỏi nhóm và đi đâu · (c) **câu hỏi số 5 gửi luật sư đã có trả lời** (`05` §11, QĐ-14: cần đồng ý riêng của từng người có hình hay đồng ý khi tham gia sổ là đủ?).
> **Hàng rào của Asset 3 ("chỉ chính chủ sinh được") là đúng và bắt buộc giữ, nhưng nó KHÔNG đủ**: nó chặn được việc A bêu B, nó **không** chặn được việc chính B tự đưa ảnh mình ra kênh công khai gắn nhãn 💀 ở tuổi 16 — và đó là loại quyết định mà nguyên tắc mặc-định-an-toàn của v2 tồn tại để bảo vệ.
> **Hệ quả:** hai khoản cắt (−0,10 "Lưu ảnh" và −0,10 "preview dùng chung") **được trả lại sổ cái** và có thể chi cho khoản khác, **đúng một lần**.

---

## 6. TIMING — LỊCH CỤ THỂ, VÀ TẾT

Neo theo lịch ở §4.10 của v2: Bước 0 08–21/09/2026 · code từ 23/09 · **beta chạy 02/12/2026**, trần cứng 15/12/2026.

| Cửa sổ | Ngày | Đánh giá | Việc |
|---|---|---|---|
| **Beta kín** | 02/12/2026 → 31/12/2026 | Đúng. Chưa công khai, chỉ vòng 0–2 | Chạy 20–30 sổ, đo sổ-D28 của cohort tuần 1–4 |
| **Tết dương / đầu năm 2027** | **01/01/2027** | **Cửa sổ ra mắt công khai tốt nhất.** Cao điểm "kèo đầu năm" toàn cầu [r02 §5] | Bật asset 2, post Threads, mở form tuyển công khai |
| Trước Tết Âm | 06/01 → 30/01/2027 | Chi phí quảng cáo tăng (không liên quan — ta không chạy ads). Nhịp sinh hoạt vẫn bình thường | Đẩy vòng 2 mạnh nhất ở đây, vì sau đó là 2 tuần chết |
| **TẾT ĐINH MÙI** | **mùng 1 = 06/02/2027 (thứ Bảy)**; nghỉ ~03/02 → 12/02 [FACT] | **NGUY HIỂM NHẤT.** Cả nước đảo lộn nhịp 1–2 tuần | **Tết Mode bắt buộc bật từ 03/02** |
| Sau Tết | 16/02 → 15/03/2027 | "Comeback" — cửa sổ tuyển tốt thứ ba | Card "Sổ mở lại, chuỗi vẫn còn N" |
| **Kill gate founder** | **31/03/2027** | §9 mục 12 | Quyết định bằng văn bản |
| Đầu năm học | cuối T8 → đầu T9/2027 | Cửa sổ acquisition tốt thứ hai [r02 §5] | Kênh #6, #7 ở §4 |

### 6.1. Rủi ro Tết — và vì sao nó nguy hiểm gấp đôi ở beta này

Tết rơi vào **tuần 10–11 của 12 tuần beta**. Hai hệ quả:

1. **Rủi ro sản phẩm:** 11 ngày nhịp sinh hoạt vỡ hoàn toàn. Không có Tết Mode ⇒ mọi sổ đứt chuỗi cùng lúc ⇒ churn hàng loạt đúng lúc founder không ngồi máy.
2. **Rủi ro ĐO LƯỜNG, nghiêm trọng hơn:** cohort mở sổ từ tuần 5 trở đi sẽ đo D28 **xuyên qua Tết**, và con số đó vô nghĩa theo cả hai chiều. Nó có thể làm founder dừng một sản phẩm đang chạy được, hoặc mở khoá widget (§6 mục 2) trên một phép đo bẩn.

> **Luật đo lường, viết trước Tết:** _"Cohort dùng để ra quyết định sổ-D28 là cohort mở sổ trong tuần 1–4 của beta (02/12 → 29/12/2026), hoàn tất D28 trước 26/01/2027. Cohort tuần 5–9 chỉ dùng để quan sát, không dùng để mở khoá bất cứ thứ gì."_

### 6.2. "Tết Mode" cần đúng những gì — spec, nằm trong 0,4 pw đã ngân sách

§4.10 mục 7 của v2 đã ghi "Tết freeze" trong hạng mục 0,4 pw nhưng **chưa định nghĩa nó**. Đây là spec:

| Thành phần | Quy định | Chi phí |
|---|---|---|
| Cửa sổ đóng băng | `03/02/2027 04:00 → 13/02/2027 03:59 ICT` (11 ngày), đọc từ remote config (P6) | 1 hằng số |
| Chuỗi | **KHÔNG đứt** trong cửa sổ, bất kể có ai nộp hay không | 1 nhánh if |
| Van 2 ngày nghỉ/tuần | **KHÔNG bị tiêu** trong cửa sổ — nếu tiêu, ra Tết là sổ đã hết van | 1 nhánh if |
| Ngày thứ N, số tấm | **Vẫn tăng bình thường** — P4 không được vi phạm ngay lúc dễ vi phạm nhất | 0 |
| Tần suất card | Giảm 1 card/ngày → **1 card/3 ngày** (mùng 1, mùng 4, mùng 7). Không tắt hẳn — tắt hẳn là quên hẳn | 1 điều kiện cron |
| Copy card trong Tết | "Sổ nghỉ Tết. Mùng 6 mở lại." — không tên ai, không số ai (P2) | 1 dòng copy |
| Card ngày ra băng | **"Sổ mở lại. Chuỗi vẫn còn 34."** — đây là khoảnh khắc chuỗi được cứu có giá trị cảm xúc cao nhất trong cả năm | 1 dòng copy |
| 3 preset Tết thay 3 preset thường | "không ngủ quá trưa" · "đi bộ 20 phút sau khi ăn" · "nhắn 1 người lâu không gặp". **Tuyệt đối không preset liên quan ăn uống/cân nặng** — chặn từ khoá §4.8 vẫn chạy | 3 chuỗi |

**Chỉ số Tết — phép thử tự nhiên tốt nhất cả năm:** `% sổ chốt lại trong 3 ngày sau khi hết băng (13–16/02/2027)`. Nếu ≥40% ⇒ nghi thức có thật, độc lập với founder và với thói quen. Nếu <15% ⇒ thứ đang chạy là quán tính, không phải nghi thức — và đó là tín hiệu mạnh hơn mọi con số D28.

---

## 7. ANTI-PATTERN — NHỮNG CÁCH GROWTH SẼ GIẾT SẢN PHẨM NÀY

| # | Anti-pattern | Vì sao giết **sản phẩm này cụ thể** | Dấu hiệu sớm (có số) |
|---|---|---|---|
| 1 | **Founder tự vào nhóm lạ dán card** | Zalo có hệ thống cảnh báo/chặn domain (§9 mục 7 — rủi ro chủ nhà). Vài lần bị report spam là `chotso.vn` hiện màn "Link này có thể không an toàn" ⇒ **growth về 0 trong một đêm**, không cứu được | Bất kỳ báo cáo nào từ một chủ xị rằng link hiện cảnh báo ⇒ dừng mọi hoạt động dán link, kích hoạt đường thoát mã 6 ký tự |
| 2 | **Ép share mới xem được ảnh người khác** | Cắt đúng kênh acquisition duy nhất. Và nó phá P5 (phần thưởng đứng trước nghĩa vụ) ngay ở pixel đầu tiên | Nếu ý tưởng này xuất hiện trong bất kỳ ticket nào ⇒ đóng, dẫn dòng này |
| 3 | **Khoá asset share sau paywall** | Cùng lý do #2, cộng: doanh thu kỳ vọng 0đ trong 12 tháng ⇒ đổi một kênh miễn phí lấy 0đ | — |
| 4 | **ZNS hàng loạt để nhắc** | 300đ/tin × 5 người × 30 ngày = **45.000đ/sổ/tháng** (§9 mục 9). Ở 35 sổ = 1,58 triệu/tháng cho doanh thu 0đ. Cộng thủ tục brandname | Bất kỳ dòng ngân sách ZNS nào >0 trước khi H1 rơi vùng xám |
| 5 | **Web push xin quyền ở màn đầu** | Opt-in push Android đã rơi 85% → 67% [r04/r05]. Xin sớm = mất vĩnh viễn. Và §6 mục 3 khoá web push cho tới khi H1 vào vùng xám | Nếu prompt quyền xuất hiện trước tấm thứ 3 của user |
| 6 | **Mua click rẻ (TikTok/Meta Ads)** | Không có install để mua. Click lạnh tạo **"sổ một mình"**, và mỗi sổ một mình làm bẩn mẫu số `q_c` — tức tiền mua về một phép đo sai | Tỉ lệ sổ có A=1 sau 72h vượt 40% |
| 7 | **Tạo sổ giả / seed ảnh bot cho sổ trông đông** | Phá `group_alive`, phá H2, và khi lộ thì phá quan hệ với chính chủ xị vòng 1 — người founder cần nhất | Bất kỳ hàng nào trong DB không có người thật đứng sau |
| 8 | **Minigame "share nhận quà"** | Thu hút người săn quà (sổ chết ngay sau khi trao), cộng rủi ro NĐ 174/2026 nếu có bất kỳ vật phẩm/quy đổi nào (§6 mục 12) | — |
| 9 | **Bảng xếp hạng sổ trên trang công khai** | Là "Báo Thủ" đội lốt cấp nhóm. §6 mục 6 — mục duy nhất **không có** điều kiện mở lại | — |
| 10 | **Nhắc riêng từng người chưa nộp** (kể cả founder nhắn tay) | P2 ở tầng con người. Đây là anti-pattern dễ mắc nhất vì nó *có vẻ* là chăm sóc khách hàng | Đếm số tin nhắn 1-1 founder gửi cho **thành viên không phải chủ xị**: mục tiêu = 0 |
| 11 | **Chạy đua số sổ mới khi số sổ sống đang giảm** | Đổ nước vào thùng thủng. Ở 35 sổ trần vận hành, mỗi sổ mới lấy giờ khỏi sổ đang sống | Sổ sống giảm 2 tuần liên tiếp trong khi sổ mới không giảm ⇒ **dừng tuyển 2 tuần** |

---

## 8. DỰ BÁO 12 TUẦN — 02/12/2026 → 23/02/2027

**Định nghĩa cột (chốt bằng văn bản, khớp ADR-000):**
- `sổ mới` = sổ có ≥3 người nộp ≥1 tấm trong 72h đầu (= "sổ hình thành")
- `sổ sống` = `group_alive`: ≥3 người nộp tấm trong 7 ngày gần nhất
- `user active` = số người nộp ≥1 tấm trong 7 ngày gần nhất, cộng trên các sổ sống

Đường cong sống dùng để tính (giả định, phải thay bằng số thật): xấu D28=12% · cơ sở D28=30% · tốt D28=45%.

### 8.1. Kịch bản CƠ SỞ (sổ-D28 = 30%)

| Tuần | Ngày | Sổ mới | Sổ sống | User active | Nguồn chính | Việc phải làm |
|---|---|---|---|---|---|---|
| 1 | 02/12 | 8 | 8 | 29 | Bước 0 chuyển tiếp + vòng 0/1 | Onboard tay 100%; kiểm card trên Xiaomi/Oppo/Samsung thật |
| 2 | 09/12 | 6 | 12 | 42 | Vòng 1 | Bật câu hỏi vòng 2 ở ngày 10 của cohort tuần 1 |
| 3 | 16/12 | 5 | 13 | 48 | Vòng 1 + vòng 2 đầu tiên | Đo H1 (mở card 24h) lần 1 trên ≥10 sổ |
| 4 | 23/12 | 5 | 15 | 53 | Vòng 2 | **Chốt cohort quyết định (tuần 1–4).** Ship asset 2 |
| 5 | 30/12 | 6 | 17 | 61 | Vòng 2 + "kèo đầu năm" | **01/01 mở công khai**, post Threads đầu tiên |
| 6 | 06/01 | 6 | 19 | 67 | Vòng 2 + Threads | **Cổng kiểm tra: ≥10% sổ mới có `parent_book_id`?** Nếu không → xem §9 |
| 7 | 13/01 | 4 | 18 | 66 | Vòng 2 | 8 post Facebook Group (thử nghiệm, 2 tuần) |
| 8 | **26/01** [CHỐT 2026-08-28, QĐ-13 — ngày DUY NHẤT của cổng này, thay cho 20/01 ở bản này, 31/01 ở `10` G2, 22/02 ở `06` tuần 24] | 4 | 18 | 66 | FB group + vòng 2 | **Đọc `sổ-D28` của cohort tuần 1–4 (02/12→29/12), n ≥ 24.** Quyết định widget/dừng. Điều kiện "≥30 sổ" của v2 §6 mục 2 **đã hạ xuống ≥24**: chính bảng này chỉ sinh 8+6+5+5 = **24 sổ** ở cohort quyết định, và trần vận hành là 35 sổ sống — giữ ≥30 nghĩa là cổng **không bao giờ mở được ở kịch bản cơ sở**. Với n=24, KTC 95% ≈ **±17 điểm**, phải in kèm |
| 9 | 27/01 | 2 | 17 | 60 | — | **Đẩy vòng 2 hết sức trước khi cả nước nghỉ.** Ship Tết Mode, test bằng cách đổi ngày hệ thống |
| 10 | 03/02 | 1 | 15 | 53 | — | **TẾT MODE BẬT.** Founder nghỉ. Card 3 ngày/lần |
| 11 | 10/02 | 3 | 15 | 56 | Comeback | Card "Sổ mở lại, chuỗi vẫn còn N" ngày 13/02 |
| 12 | 17/02 | 5 | 18 | 65 | Comeback + vòng 2 | Đo `% sổ chốt lại trong 3 ngày sau băng`. Viết báo cáo 12 tuần |

**Cộng dồn cơ sở: 55 sổ hình thành, 18 sổ sống cuối tuần 12, ~65 user active.**

### 8.2. Kịch bản XẤU (sổ-D28 = 12%, khớp cận dưới digest)

| Tuần | Sổ mới | Sổ sống | User active | Ghi chú |
|---|---|---|---|---|
| 1 | 6 | 6 | 18 | Vòng 1 chuyển đổi thấp hơn ước tính |
| 2 | 4 | 7 | 22 | |
| 3 | 3 | 7 | 21 | |
| 4 | 2 | 6 | 18 | **Sổ sống bắt đầu giảm ở tuần 4** — dấu hiệu đầu tiên |
| 5 | 2 | 6 | 17 | |
| 6 | 2 | 5 | 16 | Vòng 2 không sinh ra sổ nào (0 `parent_book_id`) |
| 7 | 1 | 4 | 13 | |
| 8 | 1 | 4 | 12 | **sổ-D28 cohort tuần 1–4 ≈ 12% ⇒ vào vùng quyết định** |
| 9 | 0 | 3 | 8 | |
| 10 | 0 | 2 | 6 | Tết |
| 11 | 1 | 2 | 8 | |
| 12 | 1 | 3 | 9 | **23 sổ hình thành, 3 sổ sống.** |

**Hành động ở kịch bản xấu:** không patch. Đây là hình dạng mà §11 gọi tên — nếu `sổ_sống_không_cần_founder` ở tuần 12 là 0 hoặc 1, kết luận là **hướng nộp-ảnh-mỗi-ngày không có nhịp thật**, và kill gate 31/03/2027 chỉ là thủ tục xác nhận.

### 8.3. Kịch bản TỐT (sổ-D28 = 45%)

| Tuần | Sổ mới | Sổ sống | User active | Ghi chú |
|---|---|---|---|---|
| 1 | 10 | 10 | 40 | |
| 2 | 9 | 17 | 68 | |
| 3 | 8 | 22 | 87 | |
| 4 | 8 | 26 | 103 | |
| 5 | 10 | 31 | 125 | Kèo đầu năm |
| 6 | 11 | 37 | 147 | **37 sổ > trần vận hành 35** |
| 7 | 9 | 40 | 160 | **Founder đã vỡ trần. Phải cắt.** |
| 8 | 8 | 42 | 167 | |
| 9 | 4 | 40 | 159 | |
| 10 | 2 | 37 | 147 | Tết |
| 11 | 7 | 40 | 159 | |
| 12 | 12 | 48 | 190 | **98 sổ hình thành, 48 sổ sống, ~190 user active** |

**Điều quan trọng nhất trong kịch bản tốt, và nó không dễ chịu:** ở tuần 6–7, số sổ sống vượt trần vận hành 35 (§2.2). Founder phải chọn **trước khi tới đó**, không phải lúc đó:

| Lựa chọn | Được | Mất |
|---|---|---|
| **(a) Dừng tuyển ở 35 sổ sống**, danh sách chờ | Giữ chất lượng chăm sóc, giữ sổ-D28 sạch | Bỏ lỡ đà; danh sách chờ nguội |
| **(b) Giữ tuyển, bỏ chăm tay** (chỉ dashboard, không nhắn) | Đo được sản phẩm không có founder — chính là chỉ số ở §0 | sổ-D28 tụt, có thể tụt dưới ngưỡng widget một cách giả tạo |
| **(c) Tăng trần bằng người thứ hai** | — | **§6 mục 19 đã khoá; và bus factor 1 là ràng buộc, không phải lựa chọn** |

**Khuyến nghị viết trước:** chọn **(b)**, nhưng đánh dấu cohort. Sổ tuyển sau khi vỡ trần được gắn `nurtured = false` và báo cáo D28 **tách riêng**. So sánh D28(nurtured=true) với D28(nurtured=false) là **phép đo giá trị nhất trong cả 12 tuần** — nó trả lời trực tiếp câu hỏi ở §0, và nó chỉ xuất hiện trong kịch bản tốt.

**Cũng lưu ý — [CHỐT 2026-08-28, QĐ-04] con số này đã đổi và đổi theo hướng GẤP HƠN.** 190 user active ở tuần 12 **không** còn "cách ngưỡng rất xa": ngưỡng bind trước là **lượt truy cập**, không phải số người. Ở 25 lượt/người/tháng, 190 người ≈ **4.750 lượt/tháng = 79% đèn vàng (6.000)**. Đèn vàng rơi vào khoảng **tháng 2–3/2027** ở kịch bản tốt, không phải tháng 5–6/2027. **Đó là hạn chót thật để có câu trả lời của luật sư — và nó nằm trước Tết, không phải sau.**

---

## 9. ĐIỀU GÌ PHẢI ĐÚNG ĐỂ TĂNG TRƯỞNG TỰ CHẠY

### 9.1. Đúng một phương trình

Không dùng K-factor (đơn vị người — sai theo P10). Dùng:

> **G = số sổ MỚI hình thành do một sổ SỐNG sinh ra trong vòng đời của nó.**
> Tăng trưởng tự chạy ⟺ **G ≥ 1**.

`G = A × P(một người active mở sổ thứ hai với nhóm khác trong 90 ngày)`

Với **A = 4,0** [CHỐT 2026-08-28, QĐ-10 — hệ số quy đổi DUY NHẤT của hồ sơ, thay cho 3,6 ở bản này, 5 ở `05`, 2,65 DAU/sổ ở `03`], G ≥ 1 đòi **P ≥ 25,0%**. Ước lượng thực tế cho P: **8–15%** [ước lượng — không tìm được benchmark cho hành vi "mở nhóm thứ hai"; **cần kiểm chứng** bằng chính cột `parent_book_id`].

⇒ **G ≈ 0,29 – 0,54.** Cùng kết luận với K < 1 của r04, nhưng lần này đo đúng đơn vị và **chỉ ra chính xác biến số phải nâng**: không phải "số lời mời", mà **xác suất một thành viên hài lòng mở sổ thứ hai**.

### 9.2. Bốn điều phải đúng — theo thứ tự, thiếu một là G ≡ 0

| # | Phải đúng | Trạng thái hôm nay | Nếu sai |
|---|---|---|---|
| 1 | **Người dùng có thể mở sổ thứ hai mà không mất sổ thứ nhất** | ❌ **Bị khoá** — §6 mục 14 hoãn đa sổ UI sang v1.1 | G ≡ ~0 về mặt cấu trúc. Không phải "thấp" — là **bằng 0** |
| 2 | **Đo được sổ nào đẻ ra sổ nào** | ❌ `parent_book_id` không có trong §4.10 mục 1 hay mục 8 | Không bao giờ biết G. Thêm cột sau khi có dữ liệu = mất toàn bộ lịch sử (lỗi mà §8 #22 đã cảnh báo cho event an toàn) |
| 3 | **Sổ sống đủ lâu để có câu chuyện đáng kể** — mốc 30 ngày / 100 tấm | ✅ Mốc sổ đã có (§4.5 Bảng 4) | Không có gì để share |
| 4 | **Tồn tại một asset đi ra ngoài nhóm gốc** | ❌ Không có ở v2 → Asset 2 ở §5 | Card chỉ luẩn quẩn trong nhóm đã biết nhau |

**Hai trong bốn điều kiện đang sai, và cả hai đều rẻ để sửa** (0,15 pw + 1 cột DB). Đây là phát hiện quan trọng nhất của tài liệu này.

### 9.3. Dấu hiệu cho biết nó sẽ KHÔNG BAO GIỜ tự chạy — có mốc thời gian

| Mốc | Dấu hiệu | Diễn giải | Hành động |
|---|---|---|---|
| **Tuần 6** | <10% sổ mới có `parent_book_id ≠ null` | G < 0,15. Ở tốc độ đó G không bao giờ chạm 1 | Ngừng đầu tư vào kênh; chuyển 100% giờ sang giữ sổ đang sống |
| **Tuần 8** | Tỉ lệ sổ hình thành **không có tin nhắn nào của founder** < 20% | Sản phẩm chưa tự bán được | Không mở kênh công khai. Kênh công khai chỉ nhân lên một thứ đã hoạt động |
| **Tuần 10** | Sổ sống giảm 2 tuần liên tiếp **trong khi** sổ mới không giảm | Thùng thủng | Dừng tuyển 2 tuần, không thêm feature (P8) |
| **Tuần 12** | Giờ/1 sổ sống **không giảm** so với tuần 4 | Không có learning curve — mỗi sổ vẫn đắt như sổ đầu tiên | Đây là dấu hiệu cấu trúc: sản phẩm không có đòn bẩy nào |
| **Bất kỳ lúc nào** | Founder im lặng 3 ngày và **0 sổ nào tự chốt** | Trùng cổng phi số ở §11 | Dừng |
| **31/03/2027** | `sổ_sống_không_cần_founder < 8` | Kill gate §9 mục 12 | Dừng dứt khoát trong tuần đó |

### 9.4. Điều KHÔNG phải là dấu hiệu (đừng tự lừa mình)

- **Số lượt truy cập trang public tăng** — người xem không phải người mở sổ. Trang public tồn tại để hạ ma sát, không để đo gì.
- **Một video TikTok viral** — Gas đạt đỉnh 3,1M lượt tải/tháng rồi mất 98% trong ~8 tháng [FACT, 42matters]. Đỉnh acquisition không phải bằng chứng về retention.
- **Tổng số sổ hình thành cộng dồn** — cột `cum` ở §8 là con số dễ chịu nhất và vô dụng nhất trong bảng.
- **User active tăng khi số sổ sống đứng yên** — nghĩa là sổ đang dày lên, tốt, nhưng không phải tăng trưởng.

---

## Bất đồng với định nghĩa sản phẩm v2

**1. §6 mục 14 hoãn "đa sổ trong UI" sang v1.1 — điều này khoá vòng lan truyền duy nhất có thể đạt G ≥ 1.**
Chính §6 mục 14 tự viết: _"đây là vòng lan truyền quan trọng nhất (thành viên hài lòng của sổ A mở sổ B) và nó rẻ vì đã trả tiền trước"_ — rồi hoãn phần UI. Nhưng cột `group_id` trong DB không tạo ra một sổ nào; **cái nút mới tạo.** Không có nút, G ≡ 0 về mặt cấu trúc, và toàn bộ §9 của tài liệu này không thể xảy ra.
**Đề nghị (không phải đa sổ đầy đủ):** thêm đúng **một dòng "Mở sổ mới"** ở màn 6 (Của tôi) + khôi phục sổ cũ bằng mã 6 ký tự đã có. Không danh sách sổ, không chuyển đổi nhanh, không badge. **+0,15 pw.**

> ### ❌ [CHỐT 2026-08-28 — QĐ-08] BÁC ở MVP-0. G ≡ 0 trong 12 tháng đầu là một quyết định CÓ Ý THỨC, và nó được ghi ra thay vì để nó xảy ra âm thầm.
> **(a) Khoản đối trừ không tồn tại.** Đề nghị này trả bằng "Lưu ảnh riêng ở màn 4 (−0,10) + preview dùng chung (−0,10)" — **đúng hai khoản đã chi cho Asset 2/3 ở §5**, và chính mục này thừa nhận trùng. Luật mới của `docs/adr/pw-ledger.md`: **một khoản cắt chỉ được chi một lần.** Ngoài ra màn 6 đã bị cắt xuống 0,00 pw trong MVP-0 (`07`), nên một dòng ở đó không phải +0,15 mà là +0,15 **cộng chi phí dựng lại màn 6**.
> **(b) Lập luận của mục này ĐÚNG và không bị bác — nó chỉ bị hoãn.** Không có nút thì `G ≡ 0` **về mặt cấu trúc**, tức sản phẩm không có bất kỳ cơ chế lan truyền nội sinh nào và mọi sổ đều do founder tuyển. Đó là lập luận mạnh nhất trong hồ sơ cho một khoản scope quay lại. **Điều kiện mở:** ngay khi `sổ-D28 ≥ 25%` ở cổng 26/01/2027 — mở nút "Mở sổ mới" là **hạng mục ưu tiên số 1** của T13+, trước cả lưới 30 ngày.
> **(c) Hệ quả phải áp ngược vào các tài liệu khác:**
> - `10` §5 mục 8 ("trần 3 sổ/thiết bị") đã sửa thành **1 sổ ở MVP**, giữ số 3 làm hằng số cho ngày mở.
> - Khoá CSDL dùng **`UNIQUE(book_id, person_id, book_date)`** của `04` §1.4, **KHÔNG** dùng `UNIQUE(person_id, logical_date)` của bản schema cũ ở `03` §3.2 — khoá đó chặn **cứng** đa sổ ở tầng CSDL và biến một quyết định 12 tháng thành một quyết định vĩnh viễn. Schema `03` đã được gỡ (QĐ-02b).
> - `09` §3 hạng 4 không được coi spectator mode là "đã giải xong": ở MVP-0 nó chỉ còn là **xem được trang public**, không có hành động nào (nút thả tim đã cắt — QĐ-05b).

**2. `parent_book_id` và `source_channel` không có trong §4.10.**
§8 (#22) lập luận rất đúng rằng thêm event sau khi có dữ liệu là mất toàn bộ lịch sử — rồi áp dụng nguyên tắc đó cho 4 event an toàn mà **không** áp dụng cho hai cột đo tăng trưởng. Chi phí: 2 cột, ~0 pw. Không có chúng thì G không bao giờ đo được, và mọi cổng ở §9.3 đều không chạy.

**3. §12 xếp việc "tuyển 8 sổ" vào một ngày (05/09).**
Theo funnel §1.1, 8 sổ (2 vòng 0 + 6 vòng 1) cần ~28 cuộc trò chuyện ≈ **7 giờ**, không kể thời gian chờ người ta trả lời (thường 1–2 ngày). Không khả thi trong một ngày đã có 2 việc khác. **Đề nghị:** bắt đầu nhắn **ngay 03/09**, coi 05/09 là hạn chốt danh sách, và **chấp nhận 6 sổ (4A + 2B)** nếu không đủ — Bảng 1 §4.5 vẫn đọc được, và cảnh báo cỡ mẫu ở §11 đã nói n=3–5 không cho ý nghĩa thống kê nên 8 so với 6 không đổi bản chất.

**4. §1 cấm dùng hai câu — tôi tuân thủ, nhưng cần phân biệt "câu bán" với "câu hỏi tuyển".**
Câu ở §1 bán hoàn hảo cho **người thứ 2–5** (họ đúng là không phải cài gì). Nó **không** bán được cho **người thứ 1** — người đó phải đặt tên sổ, chọn kèo, nộp tấm, dán card. Với người thứ 1, câu bán vẫn là câu ở §1, nhưng phải kèm một **ask có thời hạn** (§1.4a câu 3). Đây không phải câu định vị thứ hai — nó là lời đề nghị. Nếu founder đọc §1 theo nghĩa "không được nói gì khác ngoài 13 từ đó", việc tuyển sổ sẽ không hoạt động.

**5. Tết rơi đúng tuần 10–11 của beta, và v2 chưa xử lý hệ quả ĐO LƯỜNG.**
"Tết freeze" đã nằm trong 0,4 pw (§4.10 mục 7) nhưng chưa có spec (§6.2 ở trên là đề xuất spec, chi phí 0 thêm). Vấn đề lớn hơn là sổ-D28 của cohort tuần 5–9 sẽ bị Tết bóp méo, và đó chính là con số mở khoá widget ở §6 mục 2. **Đề nghị ghi vào ADR-000 hôm nay:** cohort quyết định = tuần 1–4 (02/12→29/12/2026).

**6. Một điểm không phải bất đồng mà là ghi nhận:** trang public của link mời + nút thả tim ẩn danh (§4.10 mục 2) **đã là spectator mode**. v2 xây nó vì lý do khác (hạ ma sát) và không nhận ra mình đã giải xong hạng 4 ở §3. Đừng xây thêm gì cho việc này.

---

## Câu hỏi mở cần founder quyết

| # | Câu hỏi | Vì sao phải quyết bây giờ | Hạn |
|---|---|---|---|
| 1 | **Pool vòng 1 thật có bao nhiêu người?** Đếm tay tối nay: bao nhiêu người bạn mà founder nhắn được không ngại, VÀ họ là chủ xị một nhóm 4+ đang chat hằng ngày | Con số này quyết định 20 sổ có khả thi không. Nếu <20 người, kế hoạch ở §1.2 phải đổi tỉ trọng sang vòng 2 sớm hơn | 03/09 |
| 2 | ~~+0,15 pw cho nút "Mở sổ mới"~~ **ĐÃ QUYẾT (QĐ-08): hoãn sang T13+, chấp nhận `G ≡ 0` trong 12 tháng đầu, ghi thành văn.** Điều kiện mở: `sổ-D28 ≥ 25%` ở cổng 26/01/2027, và khi mở thì đó là hạng mục ưu tiên số 1 | Luật P7. Khoản đối trừ đề xuất đã bị chi cho Asset 2/3 | ✅ đã chốt 28/08 |
| 3 | **Chấp nhận trần 35 sổ và TỪ CHỐI sổ thứ 36 không?** | Nếu không quyết trước, kịch bản tốt sẽ vỡ trần ở tuần 6–7 và quyết định sẽ được đưa ra lúc mệt nhất | trước 02/12 |
| 4 | **Vỡ trần thì chọn (a) dừng tuyển hay (b) bỏ chăm tay?** | §8.3. Khuyến nghị (b) + gắn cờ `nurtured` | trước 02/12 |
| 5 | **Ra mắt công khai 01/01/2027, hay hoãn tới 16/02 (sau Tết)?** | 01/01 cho cửa sổ "kèo đầu năm" nhưng cohort đó sẽ đo D28 xuyên Tết. 16/02 sạch hơn nhưng mất cửa sổ tốt nhất trong năm | trước 15/12 |
| 6 | **Nếu H3 fail (bỏ kèo, thành "Locket trong nhóm Zalo") — playbook này còn đúng không?** | Trả lời của tôi: §1–§4 (vòng 1/2, kênh, trần vận hành) giữ nguyên 100%; §5 phải viết lại (asset 2 mất nhãn ✓/💀, asset 3 biến mất hoàn toàn); §9 giữ nguyên. Founder cần xác nhận cách đọc này | 22/09 |
| 7 | **Có chi 3–9 triệu cho 3 micro-KOC ở tuần 12 như một PHÉP ĐO không?** (không phải để tăng trưởng, mà để biết chi phí thật/sổ sống của kênh trả phí) | Nếu không bao giờ đo, con số "10 triệu/sổ sống" ở §4 mãi là ước lượng của tôi | tuần 10 |
| 8 | **Ai là người thứ hai được phép trả lời báo cáo nội dung khi founder về quê ăn Tết 03–13/02?** | SLA công bố là 48h (§10d). Tết dài 11 ngày. Hoặc có người, hoặc công bố tạm ngừng nhận sổ mới trong Tết | trước 20/01 |
