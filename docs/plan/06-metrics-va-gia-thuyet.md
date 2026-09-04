# 06 — METRICS, GIẢ THUYẾT KIỂM CHỨNG & KILL CRITERIA
### Sản phẩm: **Chốt Sổ** (`chotso.vn`) · Viết 03/09/2026 · Dựa trên `01-dinh-nghia-san-pham-v2.md`

> ## ⚖️ ĐÃ ĐỐI CHIẾU VỚI BẢNG PHÁN QUYẾT TRỌNG TÀI — 2026-09-03
>
> Toàn bộ tài liệu này đã được rà lại theo **`docs/plan/_rulings.md`** (ban hành 03/09/2026: 53 phán quyết mâu thuẫn, 25 phán quyết scope creep, 123 dòng từ điển giá trị chuẩn).
> - **Mọi hằng số trong tài liệu này lấy từ `_rulings.md` mục A (từ điển giá trị chuẩn).** Khi tài liệu này và `_rulings.md` khác nhau, `_rulings.md` thắng.
> - Chủ quyền của tài liệu này là **ĐỊNH NGHĨA METRIC** (nguyên tắc 2). Nó **không** khai schema (schema nguồn duy nhất: `04` §1 — A32), **không** khai danh mục event (danh mục duy nhất: `04` §7.1, 32 event — A51), **không** đặt chi phí hạ tầng (chủ quyền: `03` — A74).
> - Ký hiệu `[A##]` dưới đây trỏ tới dòng tương ứng trong từ điển giá trị chuẩn.
> - Mục "Đã cắt" ở cuối tài liệu liệt kê mọi thứ đã bị cắt kèm điều kiện mở lại. Mục "Bất đồng với phán quyết" ghi hai chỗ tài liệu này vẫn thấy còn căng.
> - **Vòng rà thứ hai: 04/09/2026.** Vòng thi hành đầu bị ngắt giữa chừng; vòng này soát lại từng phán quyết ở mục A/B/C có tên `06`, và **tính lại mọi con số dẫn xuất** từ các hằng số đã đổi (n = 24 thay 30 · cửa sổ im lặng 2 ngày thay 3 · beta 12 sổ thay 30 · mẫu số `roster_size` thay `A`).

> ## ⚠️ CẦN FOUNDER QUYẾT — TÊN SẢN PHẨM (chưa duyệt tính tới 04/09/2026)
>
> Tài liệu này viết tên là **Chốt Sổ** và domain `chotso.vn`, nhưng **founder chưa duyệt việc đổi tên khỏi Teemi**. Bảng phán quyết chốt domain (`chotso.vn` — A68) nhưng **không** chốt tên sản phẩm. Hai lựa chọn, không tự quyết ở đây:
> - **(a) Giữ `Teemi`** làm tên sản phẩm, `chotso.vn` chỉ là domain. Chi phí đổi lại tài liệu ≈ 0 (tìm-thay); rủi ro: tên sản phẩm và tên miền lệch nhau, người dùng gõ nhầm.
> - **(b) Đổi hẳn sang `Chốt Sổ`.** Khớp domain, khớp caption card (A99), khớp `book_id` (C52 viện dẫn "khớp tên sản phẩm Chốt Sổ"). Rủi ro: chưa tra nhãn hiệu, chưa hỏi 8 sổ Bước 0 xem họ gọi nó là gì.
>
> **Khuyến nghị: (b), nhưng chỉ chốt sau ngày 22/09/2026** — Bước 0 là dịp duy nhất nghe được người thật gọi nó bằng cái gì (câu 10 của bộ phỏng vấn §7.4 đo đúng chuyện này). **Không đổi tên trong lúc Bước 0 đang chạy.** Cho tới khi founder ký, mọi chỗ ghi "Chốt Sổ" trong tài liệu này đọc là **"tên sản phẩm (tạm)"**.

> **Luật số 0 của tài liệu này (nguyên tắc P10 của v2):**
> **Đơn vị đo là SỔ, không phải user.** Nếu cột đầu tiên của một bảng không phải **khoá sổ**, bảng đó đã sai trước khi có số.
>
> [CHỐT 2026-08-28, QĐ-02c] Tên cột khoá sổ trong toàn bộ code và schema là **`book_id`**, không phải `group_id` — schema nguồn là `04-data-model-va-co-che.md` §1. Câu chữ P10 đọc theo **nghĩa** ("cột đầu tiên là khoá sổ"), không đọc theo **mặt chữ** ("phải là `group_id`"); nếu đọc theo mặt chữ thì luật này fail trên chính schema đã chốt. Mọi ký hiệu `group_id` còn lại trong tài liệu này đọc là `book_id`.
>
> Lý do không phải triết lý: một sổ 5 người mà 4 người bỏ cho ra **user-retention 20%** — nghe như "hơi thấp" — trong khi **sổ đó đã chết 100%**. Đo theo user biến một cái chết thành một con số trung bình. [r04 §371 nêu đúng cơ chế này; c-retention-reality xác nhận]

**Ba con số neo lấy từ v2, không được sửa ở đây:**
`group_alive` = **≥3 thành viên nộp ≥1 tấm trong 7 ngày gần nhất** [A08] · `NGÀY` (`book_date`) = **04:00:00 → 03:59:59 ICT (UTC+7)** [A01] · `q_c` (có mặt = XONG hoặc TOANG) tách khỏi `q_x` (XONG).

**Bốn hằng số của thuật toán chấm ngày, lấy nguyên từ `04` §4 — tài liệu này chỉ đọc, không định nghĩa lại:**
`A_eff = min(A(D), A(D−1))` [A06] · `k = 1` nếu `A_eff ≤ 2`, `k = 2` nếu `A_eff ≥ 3` [A07] · van nghỉ **2 ngày hụt / cửa sổ 7 ngày trượt** [A10] · ngày được van đỡ thì chuỗi **đóng băng**, **không vào mẫu số `q_c`**, tiêu 1 slot van [A11].
Công thức `ceil(0,6 × A)` đã chết (gãy đơn điệu ở A=4) và **không được xuất hiện ở bất kỳ phép tính nào trong tài liệu này**.

> **[CHỐT 2026-08-28 — QĐ-03] MẪU SỐ CỦA `q_c` ĐÃ ĐỔI, và đây là sửa đổi quan trọng nhất trong tài liệu này.** Bản trước ghi mẫu số là "thành viên Active" (trượt 7 ngày). §9 BĐ-1 của chính tài liệu này chứng minh mẫu số trượt làm **`q_c` TĂNG khi sổ chết** (0,54 → 0,90 khi sổ mất 3/5 người). Chốt:
> - **`q_c_roster` = `sum(present_count) / sum(roster_size)`** — mẫu số **đóng băng**: số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, giữ nguyên 14 ngày. **Đây là con số so với ngưỡng** (0,45 / 0,35).
> - `q_c` mẫu số trượt: giữ làm **cột báo cáo phụ**, không bao giờ dùng cho quyết định đi/dừng.
> - Cột `roster_size` đã được thêm vào `book_day` (`04` §1.5) [A14]. **Google Sheet Bước 0 (8 cột — A96) phải chốt xong ngày 07/09/2026 và có hiệu lực từ ngày đầu Bước 0 (08/09/2026)** [A19, A106] — sau ngày 08/09 roster ngày 1–3 không tái dựng lại được, không sửa hồi tố được.
> - `roster_size` = số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, **đóng băng, giữ nguyên 14 ngày** [A14].

---

## 0. NỀN TẢNG ĐO — DANH MỤC EVENT

> ### ⛔ [CHỐT 2026-08-28 — QĐ-02] MỤC NÀY KHÔNG CÒN LÀ DANH MỤC EVENT CÓ HIỆU LỰC.
>
> **Danh mục event duy nhất của dự án là `04-data-model-va-co-che.md` §7.1 (32 event).** Trước ngày này tồn tại ba danh mục không tương thích cho cùng một hệ thống — `04` (28 event, tên tiếng Anh), bảng E1–E14 dưới đây (14 event, tên khác), và `08` §9 (3 event phễu nộp) — trong khi **cả ba đều tuyên bố "phải có trước dòng code đầu tiên, thêm sau là mất lịch sử"**. Danh mục hợp nhất lấy khung của `04` và **đã nhận đủ mọi thứ tài liệu này đòi**: `pulse_survey` (E13, thành event 30), `days_in` + `toang_14d` vào `member_left` (E8 → event 20), và giữ `silence_window_day` của `04` (event 27) mà bảng E1–E14 thiếu — trớ trêu vì chính tài liệu này quyết định H2/H3 đọc ngày nào.
>
> **Bảng E1–E14 dưới đây giữ lại như BẢNG ĐỐI CHIẾU** (đọc `06` → tra sang tên thật), không phải như spec. Bảng đổi tên: `proof_submitted` → `proof_committed` · `card_generated` → `card_rendered` · `member_blocked` → `block_created` · `was_removed` → `was_removed_by_moderation`.
>
> **Hai thay đổi nội dung, không chỉ đổi tên:**
> 1. **E7 `heart_sent` bị CẮT** cùng nút thả tim (QĐ-05b) ⇒ trường `hearts_recv_14d` trong E8 **không tồn tại** ⇒ **HM-1 và HM-3 ở §4.2 ĐÃ BỊ BỎ** (không phải "viết lại") — xem ghi chú tại đó và mục 11 "Đã cắt".
> 2. **Ngân sách đã định giá lại: 0,65 pw**, không phải 0,5 pw. Hạng mục 8 của v2 §4.10 cấp 0,5 pw cho ~14 event; 32 event + 2 counter pháp lý không nằm vừa trong đó. Khoản chênh +0,15 pw đã ghi vào `docs/adr/pw-ledger.md` kèm khoản đối trừ.

Phản biện #22 nói đúng một điều mà không có cách gì sửa muộn: **thêm event sau khi đã có dữ liệu = mất toàn bộ lịch sử.**

**Bảng ánh xạ E → số hiệu event.** Cột "Payload" đã bị **xoá khỏi tài liệu này** (C10/C02): payload là schema, và schema chỉ được khai ở `04` §1 + `04` §7.1. Bảng dưới chỉ để đọc ký hiệu `E##` cũ trong §2–§8 và tra sang tên thật:

| Ký hiệu cũ | Tên chuẩn ở `04` §7.1 | Số hiệu | Metric nào dùng nó |
|---|---|---|---|
| E1 | `book_created` | **1** | mẫu số của mọi cohort sổ (`sổ-D7/14/28`) |
| E2 | `member_joined` (có `rank`) | **4** | funnel hình thành sổ, `time-to-first-proof` |
| E3 | `proof_committed` (**đổi tên** từ `proof_submitted`) | **9** | biến lõi: `q_c`, `q_x`, `A`, mọi thứ ở §2 |
| E4 | `proof_deleted_by_self` | **11** | HM-5 |
| E5 | `card_rendered` (**đổi tên** từ `card_generated`) | **12** | `tỉ lệ tự chốt sổ`, `tập trung người chốt` |
| E6 | `card_opened` | **14** | **H1 sống chết ở đây** (chỉ có từ beta — xem §9 BĐ-3) |
| ~~E7~~ | ~~`heart_sent`~~ | **25 — để trống VĨNH VIỄN, không tái sử dụng** [A51] | **CẮT (QĐ-05b)** cùng nút thả tim. HM-1, HM-3, `tim nhận/tuần` chết theo |
| E8 | `member_left` | **20** | HM-2. Payload chuẩn ở A52; **`hearts_recv_14d` KHÔNG tồn tại** |
| E9 | `report_created` / `report_resolved` | **21 / 22** | HM-6 + hồ sơ tuân thủ |
| E10 | `block_created` (**đổi tên** từ `member_blocked`) | **23** | HM-7 |
| E11 | `safety_screen_shown` | **7** | HM-9 |
| E12 | `goal_changed` | **6** | `số lần đổi kèo` |
| E13 | `pulse_survey` | **30** | §4.3 — **BẮT BUỘC**, bắn **ngày 7 và ngày 21** [A28] |
| E14 | `exit_survey_answered` (**đổi tên** từ `exit_survey`) | **24** | GT-10 |
| — | `silence_window_day` | **27** | đánh dấu ngày cửa sổ im lặng (15/09 · 18/09) — bảng E1–E14 cũ **thiếu** event này |
| — | `visits_alert` / `persons_alert` | **28 / 29** | hai counter pháp lý ở §6 dòng "Liên tục" và §8 Khối 4 [A54–A55] |

**Một quyết định kỹ thuật quyết định toàn bộ chất lượng dashboard: một dòng/sổ/ngày, đóng băng.**
[CHỐT 2026-08-28, QĐ-02b] Bảng đó tên là **`book_day`** và schema của nó ở `04` §1.5 — **không phải `day_rolled`, không phải `ngay_so`** (ba tên cho cùng một bảng là lỗi của vòng viết song song). Cron **04:05** (QĐ-21, không phải 04:00) ghi một dòng cho mỗi sổ mỗi ngày. **Danh sách cột của `book_day` KHÔNG được chép lại ở đây** (C02/A32 — `06` §0 không tự khai schema): xem `04` §1.5. Tài liệu này chỉ ghi ba ánh xạ suy ra, để đọc §2 không phải đoán:

- `n_vang` = `roster_size − present_count` (P2: **không tồn tại hàng dữ liệu biểu diễn VẮNG**, con số này chỉ tồn tại trong truy vấn)
- `rest_used_7d` suy ra từ `misses_7d` + cờ ngày-tính của `04` §1.5
- `card_generated_by` = `card.rendered_by` · `card_opens_24h` đếm từ event `card_opened` (E6)

Không có bảng này, mọi chỉ số cấp sổ phải tính lại từ log mỗi lần xem → định nghĩa trôi, số hôm nay khác số tuần trước, và founder sẽ tin con số đẹp hơn. **Có bảng này, toàn bộ §2 là một câu `SELECT` trên một bảng.** Chi phí: ~0,05 pw, nằm trong **0,65 pw** đã định giá lại (0,50 pw của v2 §4.10 + 0,15 pw ghi vào `docs/adr/pw-ledger.md` — QĐ-02/A53). **Không được tiếp tục viết "nằm trong 0,5 pw đã cấp"**: 0,5 pw đó được cấp cho 14 event, danh mục thật có 32.

---

## 1. METRIC BẮC ĐẨU (OMTM)

> # **`sổ-D28` = tỉ lệ sổ, trong cohort mở ra ở tuần W, vẫn `group_alive` (≥3 người nộp ≥1 tấm trong 7 ngày) vào ngày thứ 28.**

Một con số. Cấp sổ. Đo theo cohort tuần. Không cộng dồn, không trung bình trôi.

> **[C13/A23] `sổ-D28` là cổng của THÁNG 01/2027, không phải cổng của 12 tuần build.** Cohort quyết định là **tuần 1–4 của beta (02/12→29/12/2026)**, đọc ngày **26/01/2027** (A118). 12 sổ đợt 1 (A90) **không đủ** cho cổng này — n≥24 chỉ có được khi đợt 2 mở tới ≤30 sổ từ tuần 15 (A91). Trong 12 tuần build (23/09→29/11/2026) **không có, và không thể có, một con số `sổ-D28` nào**; ai trích dẫn `sổ-D28` trước 26/01/2027 là đang trích dẫn một ô trống.

### Tại sao là nó

1. **Nó là chỉ số duy nhất mà cả bốn kill gate đã viết trong v2 đều trỏ vào.** v2 đã dùng `group-D28 < 25%` cho kill gate founder (31/03/2027 — A122) và `group-D28 ≥ 35%` cho việc mở khoá app native + widget; cỡ mẫu của cổng đó đã **hạ từ ≥30 xuống ≥24 sổ** (A25/QĐ-13) vì kịch bản cơ sở của `09` §1.2 chỉ sinh 24 sổ ở 4 tuần đầu — giữ ≥30 nghĩa là cổng **không bao giờ mở được**. Chọn OMTM khác nghĩa là dashboard đo một thứ còn quyết định dựa trên một thứ khác — đó là cách founder tự lừa mình miễn phí.
2. **Nó không thể bị làm đẹp bằng feature.** Không có nút nào, không có noti nào, không có copy nào làm một sổ đã tụt xuống 2 người active quay lại 3 người. Ngược lại, DAU có thể tăng chỉ vì founder nhắn tin nhắc.
3. **Nó tự động phạt đúng thứ đáng phạt.** Sổ chết vì chán và sổ chết vì có người bị dập cùng rơi khỏi tử số. §4 tồn tại để **tách** hai loại đó ra, nhưng OMTM không cần phân biệt để làm việc.
4. **28 ngày là đúng khoảng thời gian mà "nghi thức" khác với "trò mới".** Cửa sổ 7 ngày quá dễ (novelty đủ nuôi), 90 ngày quá chậm với founder có **12 tuần build** (23/09→29/11/2026 — A110/A88). Câu "10 tuần" của v2 chỉ đúng ở 40 giờ/tuần; ở 13 giờ code/tuần thì 1 pw ≈ 3,1 tuần lịch (A82).

### Tại sao KHÔNG chọn DAU

| Lý do | Cụ thể |
|---|---|
| **Sai đơn vị** | DAU không biết 5 người đó thuộc 1 sổ hay 5 sổ. Nhóm là sản phẩm; người là linh kiện. |
| **Che giấu cái chết** | 30 sổ × 4,0 người/sổ (A70) = 120 người; 20 sổ tụt còn 2 người active: DAU đi từ 120 xuống 100 (−17%, "hơi giảm"), trong khi **67% sổ đã chết** (−67%). Cùng một sự kiện, hai câu chuyện. |
| **Founder bơm được** | Ở beta ≤30 sổ, một tin nhắn của founder nâng DAU hôm đó lên 20–30%. Không có tin nhắn nào nâng được `sổ-D28`. |
| **DAU đúng ở đây còn tệ hơn DAU sai** | Mục tiêu của sản phẩm là ~40 giây/người/ngày, trong đó 27 giây trong web. DAU cao mà thời lượng cao là **dấu hiệu xấu** (sản phẩm đang ăn thời gian nó hứa không ăn). Một OMTM mà "càng cao càng tốt" không đúng thì không dùng làm OMTM. |
| **Ngưỡng pháp lý dùng đơn vị khác** | NĐ 147/2024 đếm **"lượt truy cập/tháng" HOẶC "người dùng thường xuyên/tháng"** (ngưỡng OR), không đếm DAU. Hai counter pháp lý (QĐ-04) đo riêng, không suy ra từ DAU. |

### Cái giá của lựa chọn này, nói thẳng
`sổ-D28` có **độ trễ 28 ngày** và ở **cỡ mẫu cổng n = 24 sổ** (A25) có **khoảng tin cậy ±17 điểm phần trăm**: Wilson 95% cho **8/24 = 33,3%** ⇒ **18,0% – 53,3%** (nửa khoảng 17,7 điểm; A25 quy định in kèm **±17 điểm** mỗi lần trích dẫn). Nói thẳng hệ quả: ở n=24, **25% và 40% không phân biệt được bằng thống kê** — ngưỡng §6 là cổng quyết định, không phải phép kiểm định (§7.1). Nó không dùng để lái tuần. Vì vậy nó đi kèm **đúng một chỉ số dẫn hằng tuần**, và chỉ số đó **không phải OMTM**:

> **`sổ-có-nhịp` (proxy tuần) = % sổ đang mở có ≥4/7 ngày tính trong 7 ngày gần nhất.**
> Ở A=5 (⇒ `A_eff ≥ 3` ⇒ `k = 2`, A07), `q_c = 0,53` `[suy luận, chưa đo — đây là giả thuyết H2; A17]` mô hình nhị thức cho P(ngày tính) = P(X≥2 | n=5, q=0,53) = **84,8%** ⇒ kỳ vọng **~5,9/7 ngày**. Sổ dưới 4/7 đang trượt.

Quy tắc chống tự lừa: **`sổ-có-nhịp` không bao giờ được viết vào một quyết định đi/dừng.** Nó chỉ được dùng để chọn sổ nào gọi điện phỏng vấn tuần này.

---

## 2. BẢNG METRIC CẤP SỔ

Tất cả tính từ `book_day` + E2/E3/E8, trừ chỗ ghi khác. `t` = ngày hiện tại, `g` = sổ.

| Metric | Định nghĩa toán học | Tính từ event | Xấu (DỪNG) | Trung bình | Tốt | Tần suất |
|---|---|---|---|---|---|---|
| **`A(g,t)` — Active** | `\|{m : ∃ E3(m,g,d), d ∈ [t−6, t]}\|` | E3 | ≤2 | 3 | ≥4 | ngày (trong `book_day`) |
| **`group_alive(g,t)`** | `A(g,t) ≥ 3` | E3 | — | — | — | ngày |
| **`sổ-D7`** | `\|{g ∈ C_W : alive(g, t_g+7)}\| / \|C_W\|`, `C_W` = cohort sổ có E1 trong tuần W | E1+E3 | **<40%** | 40–60% | **>60%** | tuần (theo cohort) |
| **`sổ-D14`** | như trên, ngày 14 | E1+E3 | **<30%** | 30–45% | **>45%** | tuần |
| **`sổ-D28` (OMTM)** | như trên, ngày 28 | E1+E3 | **<25%** | 25–35% | **≥35%** | tuần |
| **`sổ tụt <3` (hazard)** | `\|{g : A(g,t) < 3}\| / \|{g đang mở}\|`, tích luỹ | E3 | >50% ở D14 | 30–50% | <30% | tuần |
| **`Δ A` — trượt biên** | `% sổ có A(g,t) ≤ A(g,t−14) − 1` | E3 | >45% | 25–45% | <25% | 2 tuần |
| **`tỉ lệ ngày tính`** | `Σ counted / (7 × số sổ)` trong 7 ngày | cờ ngày-tính của `book_day` (`04` §1.5) | <0,55 | 0,55–0,75 | >0,75 | tuần |
| **`ngày ≥3 người`** | `Σ 1[n_xong+n_toang ≥ 3] / 7` | `book_day` | <0,25 | 0,25–0,45 | >0,45 | tuần |
| **`ngày đủ mâm`** | `Σ 1[n_xong+n_toang = A] / 7` | `book_day` | (không có ngưỡng — đây là jackpot) | | | tháng |
| **`q_c_roster` (sổ) — con số SO NGƯỠNG** | `Σ present_count / Σ roster_size` trên cửa sổ (mẫu số **đóng băng**) [A15] | `book_day` | **<0,35** | 0,35–0,45 | **≥0,45** | tuần |
| **`q_x_roster` (sổ) — con số SO NGƯỠNG** | `Σ xong_count / Σ roster_size` [A18] | `book_day` | <0,22 | 0,22–0,30 | **≥0,30** | tuần |
| `q_c_sliding` / `q_x_sliding` | như trên nhưng mẫu số `Σ A` (trượt 7 ngày) | `book_day` | — **báo cáo phụ, CẤM dùng cho quyết định đi/dừng** | | | tuần |
| **`chuỗi trung vị`** | median(`streak_after`) trên các sổ đang mở | `book_day` | <3 | 3–7 | >7 | tuần |
| **`van tiêu thụ`** | `mean(rest_used_7d)` (tối đa 2) | `book_day` | ≥1,8 | 1,2–1,8 | <1,2 | tuần |
| **`card open 24h` (H1)** | `\|{m Active mở card ngày d trong 24h}\| / A(g,d)` | E5 (`card_rendered`) + E6 (`card_opened`) | **<40%** | 40–60% | **≥60%** | tuần — **chỉ từ beta**. Ở Bước 0 chỉ số này **không tồn tại**; thay bằng `click-shortlink` và **chỉ có quyền DỪNG <40%** [A21–A22, §9 BĐ-3] |
| **`tỉ lệ tự chốt sổ`** | `% ngày có E5 bởi member ≠ founder` | E5 | <50% | 50–75% | >75% | tuần |
| **`tập trung người chốt`** | `max_m(E5 của m) / Σ E5` trong 14 ngày | E5 | **>0,70** | 0,45–0,70 | <0,45 | 2 tuần |
| **`tỉ lệ TOANG`** | `Σ n_toang / (Σ n_xong + n_toang)` | `book_day` | <0,05 **hoặc** >0,45 | 0,05–0,10 / 0,35–0,45 | **0,10–0,35** | tuần |
| **`sổ hình thành 48h`** | `% sổ có ≥3 member nộp ≥1 tấm trong 48h từ E1` | E1+E3 | <35% | 35–55% | >55% | tuần |
| ~~**`đa sổ hạt giống`**~~ | ~~`% thành viên (không phải người mở) tự mở sổ thứ 2 trong 60 ngày`~~ | E1+E2 | **KHÔNG ĐO ĐƯỢC Ở MVP-0** — A101 chốt **1 sổ/thiết bị**, tức `G ≡ 0` trong 12 tháng đầu **do thiết kế**, không do người dùng. Ô này sẽ luôn bằng 0 và **cấm đọc nó như tín hiệu lan truyền**. Mở lại cùng trần 3 sổ/thiết bị ở v1.1 | | | — |

### Ba ghi chú không được bỏ qua khi đọc bảng này

**(a) Ngưỡng `sổ-D7 < 40%` NGHIÊM hơn r04.** r04 §64 đặt Group-D7 "chết <30%, OK 40–50%" nhưng định nghĩa của r04 là **≥2 người nộp proof**. Ở đây định nghĩa là **≥3**. Cùng một sổ có thể pass ngưỡng r04 và fail ngưỡng này. Đó là chủ ý: ADR-000 đã chốt `group_alive = ≥3` và `duo_alive = ≥2` **đo song song nhưng không được thay thế**. Nếu đến tháng thứ 3 founder thấy mình đang trích dẫn `duo_alive` trong một quyết định, đó là dấu hiệu định nghĩa đã bị nới để qua ngưỡng — chính lỗi mà phản biện #6 dự đoán.

**(b) Ngưỡng `tỉ lệ TOANG` có hai đầu, và đầu thấp mới là đầu nguy hiểm.** TOANG < 5% có **hai** cách giải thích ngược nhau: mọi người đang thắng thật (tốt) hoặc **nhãn TOANG đang bị coi là nhục nên không ai dám bấm** (rất xấu — đây là §9 mục 10 của v2). Con số không tự phân biệt được. Cách phân biệt duy nhất: đối chiếu với `q_x_roster` (mẫu số đóng băng — A18; dùng `q_x_sliding` ở đây sẽ cho kết luận ngược khi sổ đang chết). Nếu `TOANG < 5%` **và** `q_x_roster ≥ 0,45` → mọi người thắng thật. Nếu `TOANG < 5%` **và** `q_x_roster < 0,30` → người ta đang chọn **VẮNG thay vì TOANG**, tức nhãn đang gây nhục ⇒ đổi sang "đã có mặt" không phân biệt (A18). Ngưỡng cảnh báo cứng: `TOANG < 0,05 AND q_x_roster < 0,30` ⇒ đọc tay toàn bộ sổ đó trong tuần.

**(c) `tập trung người chốt > 0,70` là chỉ số rủi ro cấu trúc số 1 của cả hướng này.** v2 đã tách chốt-sổ khỏi cơ chế tính ngày (P11), nên điểm chết đơn này chỉ giết kênh phân phối chứ không giết cơ chế. Nhưng nếu 1 người tạo >70% số card trong 14 ngày, sổ đó thực chất đang sống nhờ một người — và khi người đó bận thi, sổ tắt. Can thiệp có sẵn, 0 pw: dòng "mai tới lượt Linh" trên card đã tồn tại; nếu chỉ số vẫn >0,70 sau 2 tuần thì vấn đề không nằm ở copy.

---

## 3. METRIC CẤP USER & FUNNEL

Cấp user tồn tại để **giải thích** cấp sổ, không bao giờ để **thay thế** nó. **Chỉ 5 chỉ số** (bản trước ghi 6 — chỉ số thứ sáu `tim nhận/tuần` đã chết cùng nút thả tim, xem "Đã cắt"):

| Metric | Định nghĩa | Ngưỡng xấu | Tốt |
|---|---|---|---|
| `q_c(m)` cá nhân | ngày có mặt / ngày trong roster (mẫu số đóng băng, A15) | <0,30 | ≥0,55 |
| `time-to-first-proof` | E2 → E3 đầu tiên | >24h | <2h |
| `ngày VẮNG liên tiếp` | chuỗi ngày không nộp mà chưa rời | ≥5 (cờ đỏ, xem §4) | ≤2 |
| ~~`tim nhận/tuần`~~ | ~~count E7 target = m~~ | **BỎ (QĐ-05b/C03)** — E7 `heart_sent` bị cắt, số hiệu 25 để trống vĩnh viễn | — |
| `số lần đổi kèo` | count E12 | ≥2 trong 30 ngày (kèo đặt sai) | 0–1 |
| `user-D28` | có E3 trong ngày 22–28 kể từ E2 | — | — (**chỉ để báo cáo, cấm dùng ra quyết định**) |

### Funnel hình thành sổ — có số, có nguồn

Funnel của Chốt Sổ **không có bước "cài app"**. Đó là toàn bộ lý do hướng này tồn tại. Bảng dưới lấy nguyên tham số từ §9 hướng D (đã được v2 giữ nguyên ở phản biện #5):

| Bước | App-based (phản biện #5) | **Chốt Sổ (web)** | Nguồn tham số |
|---|---|---|---|
| Đọc tin trong nhóm Zalo | 85% | 85% | [GUESS, digest #5] |
| Chạm vào card / link | 35% | **45%** | [suy luận: card 4:5 có mặt bạn mình ≠ link trần] |
| Mở được nội dung | (gộp trong "cài 30%") | **90%** | [suy luận: webview Zalo, không rời app] |
| Cài app | 30% | **— xoá bước** | quyết định thiết kế |
| Xong onboard (đặt kèo 1 chạm) | 60% | **75%** | [suy luận: không login] |
| **Nộp tấm đầu** | 60% | **55%** | [suy luận: cam kết nhẹ ⇒ cũng dễ bỏ hơn] |
| **Tích luỹ p** | **3,2%** | **14,2%** | phép nhân |

**Cần bao nhiêu lượt để có 1 sổ?** `Bin(6, p)`, `P(X ≥ 2)` (cần ≥2 người vào để sổ có 3 người):

| | App-based (p=0,032) | Chốt Sổ (p=0,142) |
|---|---|---|
| P(sổ hình thành từ 6 lời mời) | **1,41%** | **20,5%** |
| Người khởi tạo / 1 sổ **hình thành** | ~71 | **4,88** |
| Lời mời gửi đi / 1 sổ hình thành | ~426 | **29,3** |
| **Lượt mở nội dung thật / 1 sổ hình thành** | (≈29 lượt cài, digest #5) | **10,1** |

> **Sửa số của hồ sơ cũ:** hướng D ghi 1,6% cho cột app-based; số đúng là **1,41%** (`Bin(6; 0,032)`, `P(X≥2)`). Đã sửa trong v2, giữ nguyên ở đây.

**Và đây là con số mà không tài liệu nào trong hồ sơ đã viết ra — từ "sổ hình thành" đến "SỔ SỐNG":**

| P(sổ hình thành sống tới D28) | Người khởi tạo / 1 sổ sống | Lời mời / 1 sổ sống | Lượt mở nội dung / 1 sổ sống |
|---|---|---|---|
| 12% (đầu bi quan, phản biện #6) | **40,7** | 244 | **84** |
| **20% (ước lượng làm việc)** | **24,4** | **146** | **50** |
| 25% (đầu lạc quan) | 19,5 | 117 | 40 |

**Đọc cho đúng:** con số "29 lượt cài → 1 nhóm sống" trong phản biện #5 thực chất là **29 lượt cài → 1 nhóm HÌNH THÀNH**. Nếu áp cùng tỉ lệ sống sót 20% lên nó, app-based cần ~145 lượt cài cho 1 nhóm **sống**. Chốt Sổ cần ~50 lượt mở link. Lợi thế thật là **~2,9× ở tử số, cộng với việc mỗi đơn vị top-of-funnel rẻ hơn nhiều lần** (một lượt mở link ≠ một lượt cài về chi phí xã hội lẫn chi phí tiền). Nhưng con số **50 lượt mở link cho 1 sổ sống** vẫn phải dán lên tường. Tính lại theo kế hoạch beta đã chốt (A90/A91 — **12 sổ đợt 1**, ≤30 sổ đợt 2, **không phải "beta 30 sổ"**):

| Mục tiêu | Sổ **sống** cần có | Lượt mở link cần chạm (×50) | Lời mời cần gửi (×146) |
|---|---|---|---|
| Đợt 1 (02/12→29/12/2026) | 12 sổ **hình thành** ⇒ ~2,4 sổ sống tới D28 ở 20% | **~600** | ~1.760 |
| Cả beta ở trần đợt 2 | 30 sổ hình thành ⇒ ~6 sổ sống | **~1.500** | ~4.390 |
| Đủ n=24 cho cổng `sổ-D28` (A25) | 24 sổ **hình thành** trong cohort tuần 1–4 | **~1.200** | ~3.510 |

Và không có kênh nào ngoài tay founder đang cung cấp những con số đó. Đọc thẳng: **cổng 26/01/2027 đòi 24 sổ hình thành trong 4 tuần đầu beta (= 12 sổ đợt 1 + ≥12 sổ từ đợt 2 mở từ tuần 15), tức ~1.200 lượt mở link trong 4 tuần — ~300/tuần, một mình.** Đây là ràng buộc nặng hơn mọi ràng buộc kỹ thuật trong hồ sơ, và nó **không nằm trong bảng pw nào**. [suy luận, chuỗi nhân — mọi tham số đều là GUESS/suy luận, **cần đo lại ở Bước 0 và beta**]

---

## 4. METRIC PHÁT HIỆN TÁC HẠI

### 4.1. Thừa nhận trước, thiết kế sau

Phản biện #22 đề xuất bộ metric tác hại xoay quanh `roast_received` và **max_share của roast**. **Bộ đó không chạy được trên Chốt Sổ.** Cà khịa xảy ra trong Zalo: không log được, không đếm được, không can thiệp được (§9 mục 8 của v2 đã ghi nhận đúng chuyện này nhưng không rút ra hệ quả đo lường).

Cho nên bộ metric dưới đây được thiết kế lại quanh một câu hỏi khác:

> Khi không nhìn thấy được sự công kích, ta nhìn thấy **cái bóng** của nó: **sự vắng mặt của phản hồi tích cực**, **sự im lặng kéo dài**, và **hành vi rút lui**.

> ⛔ **Đoạn này đã bị viết lại 04/09/2026 (C03/S01).** Bản trước ghi: _"bề mặt reaction duy nhất bên trong sản phẩm là nút thả tim ẩn danh (E7)"_ và xây cả bộ chỉ số loại trừ trên đó. **Nút thả tim đã bị CẮT khỏi MVP-0.**

Cụ thể: sau khi cắt nút thả tim, **bên trong sản phẩm không còn bề mặt reaction nào cả**. Không có tim, không có comment, không có emoji — mọi phản hồi xã hội xảy ra trong Zalo, ngoài tầm log. Hệ quả đo lường: tác hại **không** hiện ra dưới dạng "ai nhận quá ít phản hồi" (không có dữ liệu đó), mà chỉ còn hiện ra dưới dạng **im lặng kéo dài rồi rút lui** (HM-2, HM-4), **hối hận sau khi đăng** (HM-5), **thua cố định** (HM-8), và **tự khai báo mệt** (`pulse_survey`, event 30). Đó là bộ chỉ số rút lui, không phải chỉ số bắt nạt, và cũng không còn là chỉ số loại trừ. Nó yếu hơn, và phải nói thẳng là yếu hơn.

### 4.2. Bảng chỉ số tác hại — **7 chỉ số, không phải 9**

> ### ⛔ [CHỐT 2026-08-28 — QĐ-05b] HM-1 và HM-3 ĐÃ BỊ BỎ. Bộ chỉ số tác hại **không còn phát hiện được sự LOẠI TRỪ**, chỉ còn phát hiện sự RÚT LUI.
>
> Cả HM-1 ("người vô hình") lẫn HM-3 ("từ ngày tối tăm đến lúc rời") được xây trên **dữ liệu tim theo từng thành viên** (E7). Hai vấn đề độc lập, mỗi vấn đề đủ để giết chúng:
> 1. **Nút thả tim đã bị cắt khỏi MVP-0** — `03` §10 câu 7 (mặc định: cắt), `04` §9.4 (ứng viên cắt rẻ nhất), `07` MVP-0 (cắt sang T13+). Không có nút thì không có E7.
> 2. **Ngay cả khi giữ nút, HM-1 vẫn đo sai thứ.** `08-ux-flow-va-tone.md` §6.2 đặc tả tim là: **ẩn danh · chỉ trên TRANG PUBLIC dành cho người CHƯA vào sổ · hiển thị tổng ở cấp sổ · không hiển thị per-ảnh trong màn 1**. Tức nguồn tim là **người ngoài nhóm**. HM-1 khi đó đo "người lạ ít thả tim cho ai", **không** đo "nhóm đang phớt lờ ai" — nó trả lời một câu hỏi khác câu hỏi nó được lập ra để trả lời.
>
> **Phương án (a) — giữ tim và mở cho thành viên trong sổ — đã bị loại,** vì nó đòi sửa `08` §6.2 và tạo ra đúng thứ `08` cảnh báo: một **bảng xếp hạng ngầm theo người** trong nhóm bạn thân, tức cùng họ với "Báo Thủ" mà v2 §6 mục 6 cấm vĩnh viễn. Đổi một chỉ số tác hại lấy một cơ chế gây tác hại là một giao dịch lỗ.
>
> **Cái giá phải nói thẳng, không được giấu:** từ nay bộ chỉ số này **không có cách nào phát hiện một người đang bị cả nhóm phớt lờ trong khi vẫn nộp ảnh đều**. Đó là một điểm mù đã biết, không phải một điểm mù bị bỏ sót. Thứ thay thế gần nhất là **HM-8 (độ lệch TOANG)** — nó bắt được "đứa thua cố định" nhưng không bắt được "đứa vô hình" — và **event 30 `pulse_survey`**, thứ duy nhất còn nghe được người **đang ở lại** mà mệt. Vì vậy `pulse_survey` chuyển từ "bổ sung" sang **bắt buộc**.
> **Điều kiện xem lại:** nếu nút thả tim được mở lại ở T13+ **và** được mở cho thành viên trong sổ, HM-1/HM-3 quay lại — nhưng lúc đó phải trả lời câu hỏi xếp hạng ngầm trước.


| # | Chỉ số | Định nghĩa toán học | Từ event | Mẫu số tối thiểu để bật ngưỡng | Ngưỡng cảnh báo | Hành động |
|---|---|---|---|---|---|---|
| ~~HM-1~~ | ~~`người vô hình`~~ | **BỎ (QĐ-05b)** — xây trên E7, mà E7 đã bị cắt; và ngay cả khi có, nó đo tim của **người ngoài nhóm** chứ không đo sự phớt lờ **trong** nhóm | — | — | — | Điểm mù đã biết. Thay thế gần nhất: HM-8 + `pulse_survey` |
| **HM-2** | **`im lặng rồi rời`** | `% E8 mà member đó có 0 tấm trong 7 ngày trước khi rời VÀ ≥5 tấm trước đó` | E8+E3 | ≥10 lượt rời tích luỹ | **>35%** | đây là chân dung "rút lui âm thầm". >35% ⇒ dừng thêm feature, chuyển sang phỏng vấn |
| ~~HM-3~~ | ~~`ngày tối tăm → rời`~~ | **BỎ (QĐ-05b)** — cùng lý do HM-1 | — | — | — | Thay thế một phần: HM-2 (im lặng rồi rời) vẫn bắt được **hình dạng** rút lui, chỉ không bắt được **nguyên nhân** |
| **HM-4** | **`VẮNG kéo dài tại chỗ`** | `% thành viên Active có ≥5 ngày VẮNG liên tiếp mà chưa rời` | E3 | ≥20 thành viên | **>20%** | đây là người đang mắc kẹt. **[CHỐT 2026-08-28, QĐ-23] HM-4 GIỮ LẠI nhưng được đánh dấu MƠ HỒ CÓ CHỦ Ý**: không có nút "Nghỉ" thì "người bận" và "người bị đẩy ra" sinh chuỗi event **giống hệt nhau**. Mọi cờ HM-4 chỉ giải được bằng một cuộc gọi. Bù lại: cột `membership.paused_until` **phải có trong schema từ migration đầu** (chi phí cột = 0), nút để sau |
| **HM-5** | **`xoá ảnh của mình`** | `Σ E4 / Σ E3` theo tuần; tách riêng `age_minutes < 60` (hối hận tức thì) | E4+E3 | ≥50 tấm | **>4%** tổng, hoặc **>2%** ở nhóm <60 phút | hối hận sau khi đăng = sản phẩm đang khiến người ta đăng thứ họ không muốn đăng |
| **HM-6** | **`report rate`** | `Σ E9 / 1.000 tấm` | E9 | **không có** — đọc tay 100% ở mọi quy mô | bất kỳ report nào | **[QĐ-16]** report đầu tiên **tự động ẩn ảnh TOÀN CỤC** ngay, founder xử trong SLA. **[QĐ-17] SLA là hai con số:** 48h cho khiếu nại người dùng · 24h (khẩn cấp 6h) cho yêu cầu cơ quan nhà nước. Đo cả `p50(resolved_ts − ts)` cho từng loại riêng |
| **HM-7** | **`chặn trong sổ`** | `% sổ có ≥1 E10 trong vòng đời` | E10 | ≥15 sổ | **>5%** | chặn giữa những người **đã là bạn thân ngoài đời** là tín hiệu nặng gấp nhiều lần chặn người lạ |
| **HM-8** | **`độ lệch TOANG`** | với sổ có `Σ TOANG ≥ 8` trong 14 ngày: `max_m(TOANG_m) / Σ TOANG` | E3 | ≥8 TOANG | **>0,60** | một người đang là "đứa thua cố định" của sổ. Đây là bản thay thế gần nhất cho `roast max_share` của #22 |
| **HM-9** | **`màn hình an toàn`** | `Σ E11` theo `reason_bucket`/tuần | E11 | không | bất kỳ bucket nào >0 trong tuần | đếm tổng hợp, **không có user_id** — chỉ để biết blocklist rối loạn ăn uống có đang bắn không |

### 4.3. Khảo sát một câu — `pulse_survey` (E13 → **event 30**, BẮT BUỘC)

Bổ sung so với v2 (v2 chỉ có exit survey, tức **chỉ nghe được người đã bỏ đi**).

- **Khi nào:** đúng **hai lần** trong đời một thành viên — **ngày 7 và ngày 21** kể từ khi vào sổ (E2) [A28]. **Không phải 14/28**: ngày 28 thì phần lớn cohort đã rụng theo chính bảng `sổ-D28` của tài liệu này, nên câu hỏi ngày 28 chỉ hỏi được người còn sống — đúng lỗi sống-sót mà §9 BĐ-1 bác.
- **Hiện ở đâu:** **KHÔNG phải màn Của tôi** — màn đó đã bị cắt xuống 0,00 pw (A86). Bề mặt cụ thể do `08` quyết (chủ quyền TONE + UX); ràng buộc từ phía đo lường chỉ có hai: không chặn luồng nào, và bỏ qua được bằng một chạm.
- **Câu hỏi, nguyên văn:** _"Tuần này ở trong sổ này, mày thấy sao?"_ → **😄 vui · 😐 thường · 😮‍💨 mệt**
- **Vì sao ba lựa chọn, không phải thang 1–5:** ở beta ≤30 sổ, mọi thang Likert đều cho trung bình 3,4 và không hành động được. Ba nhãn cho một phân bố đọc được bằng mắt.
- **Ngưỡng:** bất kỳ ai chọn **"mệt"** ⇒ founder đọc tay sổ đó tuần này. **≥15% "mệt" toàn cohort** ⇒ đóng băng mọi feature, chạy §7 (phỏng vấn) trước khi viết thêm dòng code nào.
- **Chi phí:** 1 bảng 4 cột + 1 component 3 nút ≈ **0,05 pw** — khoản GIỮ hợp lệ (S25), đối trừ bằng nút thả tim đã cắt, **đã ghi vào `docs/adr/pw-ledger.md`, chỉ được ghi MỘT LẦN** (A87). [CHỐT 2026-08-28, QĐ-05b] `pulse_survey` chuyển từ "bổ sung" thành **BẮT BUỘC**: sau khi HM-1/HM-3 bị bỏ, nó là kênh **duy nhất** còn nghe được người đang ở lại mà mệt. Nó là **event 30** trong danh mục hợp nhất (`04` §7.1).
- **Hệ quả của lịch 7/21 lên ngưỡng "≥15% mệt":** mẫu số bây giờ là **người còn trong sổ ở ngày 7** (rộng hơn nhiều so với ngày 14) và **ở ngày 21**. Ở beta đợt 1 12 sổ × ~4 người (A70) ≈ **48 người** được hỏi ở ngày 7 ⇒ 15% ≈ **7 người**; ở ngày 21, sau khi trừ rụng, mẫu số một chữ số hoặc hai chữ số thấp ⇒ **ngưỡng 15% ở lần bắn thứ hai không có ý nghĩa thống kê, chỉ dùng làm cờ đọc tay** (§7.1).

### 4.4. Ba giới hạn phải nói ra, không được giấu trong footnote

1. **Bộ này không phát hiện được bắt nạt.** Nó phát hiện được **loại trừ** và **rút lui**. Cà khịa độc hại trong Zalo vẫn hoàn toàn vô hình. Không có ngân sách nào trong 6,5 pw sửa được điều này, và giả vờ ngược lại là tự lừa.
2. **Ở beta 12 sổ đợt 1 (A90) — và ≤30 sổ kể cả sau đợt 2 (A91) — gần như mọi ngưỡng trong bảng đều có mẫu số một chữ số.** Ví dụ HM-7 đòi mẫu số tối thiểu 15 sổ: đợt 1 **không đạt**, phải chờ đợt 2. Vì vậy **luật vận hành ở beta là: đọc tay 100% mọi E8, E9, E10, E13-"mệt", E14.** Chi phí tính lại theo trần vận hành đã chốt (A92 — **35 sổ sống, 8,4 phút/sổ/tuần, trần 10 giờ/tuần cho TOÀN BỘ ops**): 12 sổ × 8,4 phút ≈ **1,7 giờ/tuần**; 30 sổ × 8,4 phút ≈ **4,2 giờ/tuần**; 35 sổ ≈ **4,9 giờ/tuần**. Phần đọc tay này vì vậy chiếm **tối đa khoảng một nửa** trần 10 giờ, phần còn lại là moderation, SLA và phỏng vấn. Ngưỡng trong bảng chỉ có hiệu lực từ **≥100 sổ** trở lên — con số đó **vượt trần pháp lý 60 sổ (A93)**, nghĩa là trong 12 tháng đầu **không ngưỡng nào trong bảng này bao giờ có hiệu lực thống kê**; chúng chỉ là cờ để gọi điện.
3. **Không chốt ngưỡng trước khi có phân bố** — đúng như phản biện #22 cảnh báo về con số "8%". Mọi ngưỡng trong bảng trên là **[ước lượng, cần hiệu chỉnh lại sau 3 tháng có dữ liệu thật]**, trừ HM-6 (đọc tay 100%, không có ngưỡng) và HM-9 (đếm thô).

---

## 5. BẢNG GIẢ THUYẾT — 14 GIẢ THUYẾT, XẾP THEO MỨC ĐỘ CHẾT

Xếp theo: **nếu giả thuyết SAI thì dự án chết** (GT-01…) → **nếu SAI thì phải đổi hướng** → **nếu SAI thì mất tiền/thời gian**.

| # | Giả thuyết | Phát biểu kiểm chứng được (có số) | Cách đo | Mẫu tối thiểu | Thời gian | Nếu SAI |
|---|---|---|---|---|---|---|
| **GT-01** ☠️☠️☠️ | **Nghi thức có nhịp thật, không phải founder đẩy** (= H2 của v2) | Trong cửa sổ im lặng (**ngày 8 và ngày 11 = 15/09 và 18/09/2026**, founder không dán card, không nhắc, không trả lời trong nhóm — A97/A98): `q_c_roster ≥ 0,45` [A16] **và** `q_x_roster ≥ 0,30` [A18] **và** **≥60% sổ nhánh A đạt ≥9/14 ngày tính** [A20/QĐ-06 — thay tiêu chí "≥3/5 sổ giữ chuỗi ≥5 ngày" đã chết ở §9 BĐ-2] | Google Sheet 8 cột (A96); mẫu số = **`roster_size` đóng băng** (A14/A15), **KHÔNG phải thành viên Active** | 5 sổ nhánh A × **2 ngày** im lặng × ~4 người/sổ (A70) ≈ **40 người-ngày roster** (bản trước ghi 60 vì đếm 3 ngày im lặng — A98 chỉ có 2) | Bước 0 (08–21/09); đọc số **22/09** (A109) | `q_c_roster < 0,35` ⇒ **DỪNG toàn bộ hướng nộp-ảnh-mỗi-ngày.** Tiết kiệm 6,5 pw. 0,35–0,45 ⇒ chạy lại cohort mới 14 ngày, **cấm thêm feature** |
| **GT-02** ☠️☠️☠️ | **Card trong nhóm Zalo thay được push riêng** (= H1) | **Bước 0: `click-shortlink` — CHỈ có quyền DỪNG `<40%`, KHÔNG có quyền ĐI** [A21]. Ngưỡng `≥60%` dời sang **tuần 2 của beta**, khi mới có event `card_opened` thật | Bước 0: **112 shortlink** (8 sổ × 14 ngày, dịch vụ rút gọn bên thứ ba — A22/S18), chốt trước **07/09**. Beta: E5 `card_rendered` → E6 `card_opened`. Đếm tay "ai rep/thả cảm xúc vào card trong Zalo" là **số kiểm chứng chéo**, không phải số chính | 8 sổ × 14 ngày = 112 link | Bước 0 → lặp lại tuần 2 của beta | <40% ⇒ **DỪNG**, không patch. 40–60% ⇒ **cân nhắc** Android web push (+0,3 pw) — nhưng nó **ĐÃ BỊ CẮT khỏi MVP-0 (S09)** và `03` §9 B4 cho rằng Service Worker **nhiều khả năng không đăng ký được trong webview Zalo**, tức phương án dự phòng này **có thể không tồn tại**. Cấm ghi nó vào bảng pw như khoản "đã ngân sách" |
| **GT-03** ☠️☠️☠️ | **Sổ giữ được ≥3 người `group_alive` tới D28** | `sổ-D28 ≥ 25%` trên **cohort tuần 1–4 của beta (02/12→29/12/2026), n ≥ 24 sổ** [A23–A25] | E1+E3, cohort theo tuần, `group_alive` tính trên roster đóng băng | **24 sổ** (Wilson 95% cho 8/24 = 18,0%–53,3%, **±17 điểm — in kèm mỗi lần trích dẫn**) | đọc **26/01/2027** (A118 — mốc tuần 20, KHÔNG phải "tuần 24") | <25% ⇒ trùng kill gate founder 31/03/2027 (A122). Không có phiên bản "gia hạn". Xem cảnh báo **D-05** ở §10 CH-5 |
| **GT-04** ☠️☠️ | **Người thứ 2–3 vào được mà không cài app** | `P(sổ hình thành từ 6 lời mời) ≥ 15%`, tức `p/người mời ≥ 0,12` (mô hình dự báo 0,142) | E2.`rank` / số lời mời gửi (đo tay ở Bước 0, đo bằng `card_opened` unique ở beta) | 20 sổ khởi tạo | tuần 4 beta | p < 0,08 ⇒ lợi thế "không cài app" không tồn tại trên thực tế ⇒ xem lại toàn bộ lý do chọn hướng D |
| **GT-05** ☠️☠️ | **Kèo tạo giá trị, không phải thuế** (= H3) | `q_c_roster(nhánh A có kèo) ≥ q_c_roster(nhánh B không kèo) − 5 điểm` trong cửa sổ im lặng | 5 sổ A vs 3 sổ B, đo tay | 8 sổ (**chỉ đủ cho dấu, không đủ cho ý nghĩa** — §7) | Bước 0 | B hơn A ≥10 điểm ⇒ **BỎ KÈO**, sản phẩm thành "Locket trong nhóm Zalo". Đây là kết luận hợp lệ, tiết kiệm ~1,0 pw + rủi ro Điều 38.2 |
| **GT-06** ☠️☠️ | **Zalo không chặn/cảnh báo domain `chotso.vn`** | 3/3 tài khoản test dán link vào nhóm mà **không** hiện màn "Link này có thể không an toàn"; và ở beta: `card_opened / card_rendered ≥ 0,5` không sụt đột ngột >30 điểm trong 7 ngày | Test tay 04/09 (1 trong **7 câu** của buổi kiểm chứng nền tảng — A105) + monitor `card_opened`/`card_rendered` hằng ngày | 3 tài khoản (Bước 0); ≤30 sổ (beta) | 04/09/2026, rồi hằng ngày | Bị chặn ⇒ chuyển sang **mã sổ 6 ký tự gõ tay** (bảng chữ 28 ký tự, A43; có in trên card từ ngày 1). **Giới hạn phải nói kèm (A45): mã 6 ký tự chỉ dùng được khi sổ < 8 người VÀ card ≤ 7 ngày tuổi** — nó là đường thoát hiểm, không phải khoá vào vô điều kiện. Nếu mã tay cho `p` < 0,05 ⇒ hướng này chết. Nếu buổi 04/09 cho thấy Zalo **cảnh báo** domain `.vn` lạ ⇒ mua domain thứ hai ngay trong tuần (A68). **Đây là rủi ro chết nhanh, rẻ** |
| **GT-07** ☠️☠️ | **Webview Zalo chọn/upload ảnh chạy trên Android tầm trung** | 0 lỗi trên **3 máy thật** (Xiaomi / Oppo / Samsung tầm trung), `% E3 thành công / lượt bấm Gửi ≥ 95%` | Test tay trên máy thật + tỉ lệ lỗi upload ở beta | 3 máy | 04/09/2026 (trước dòng code đầu) | Lỗi trên ≥1 dòng máy phổ biến ⇒ >85% thị trường VN là Android ⇒ phải giải trước khi viết code, không phải sau |
| **GT-08** ☠️ | **TOANG được dùng thật và không bị coi là nhục** | `0,10 ≤ tỉ lệ TOANG ≤ 0,35` **và** không có sổ nào có `độ lệch TOANG > 0,60` | `book_day` + HM-8 | 8 sổ × 14 ngày | Bước 0, rồi tuần 4 beta | TOANG <0,05 kèm `q_x_roster` <0,30 ⇒ nhãn đang gây nhục ⇒ đổi từ nhãn nhị phân sang "đã có mặt" không phân loại (0,1 pw). >0,45 ⇒ kèo đặt quá khó hoặc kèo vô nghĩa ⇒ sửa preset |
| **GT-09** ☠️ | **Chốt sổ không phải điểm chết đơn** | `tập trung người chốt ≤ 0,70` trên 14 ngày **và** `tỉ lệ tự chốt sổ ≥ 50%` (không phải founder) | E5 | 8 sổ | Bước 0 (đo tay: ai nhắc?) | >0,70 ⇒ dòng "mai tới lượt Linh" không đủ ⇒ cân nhắc mở mục 3 §6 v2 (Android web push cho **riêng người tới lượt**, không phải cho cả sổ) |
| **GT-10** ☠️ | **Sản phẩm không tạo ra người bị dập** | `im lặng rồi rời` (HM-2) ≤35% · `VẮNG kéo dài tại chỗ` (HM-4) ≤20% · <15% chọn "mệt" ở `pulse_survey` · **0 report quá SLA — SLA là HAI con số: 48h cho khiếu nại người dùng, 24h (khẩn cấp 6h) cho yêu cầu cơ quan nhà nước** [A59] · ~~0 sổ có "người vô hình"~~ **vế này đã chết cùng HM-1** | **7 chỉ số: HM-2, HM-4…HM-9** (không phải HM-1…HM-9) + event 30 | đọc tay 100% ở beta | liên tục | Vượt bất kỳ ngưỡng nào ⇒ **đóng băng feature**, phỏng vấn trước. Đây là loại kill gate không có "vùng xám". **Điểm mù đã biết: không phát hiện được LOẠI TRỪ** (§4.2) |
| **GT-11** | **Van 2 ngày nghỉ đủ, không cần cơ chế "gánh"** | `van tiêu thụ trung bình < 1,4/2` **và** <35% ngày hụt là loại "chỉ 1 người có mặt" | cờ van của `book_day` (`04` §1.5) + phân bố `n_xong+n_toang` | 8 sổ × 14 ngày | Bước 0 | van ≥1,8 ⇒ `q_c_roster` thật thấp hơn báo cáo (ngày được van đỡ **không vào mẫu số `q_c`** — A11). Nếu phần lớn ngày hụt là "đúng 1 người có mặt" ⇒ mở mục 17 §6 v2 (cơ chế "gánh", +0,2 pw) |
| ~~**GT-12**~~ | ~~**Sổ thứ 2 là vòng lan truyền thật**~~ | **KHÔNG KIỂM CHỨNG ĐƯỢC TRONG 12 THÁNG ĐẦU.** A101 chốt **1 sổ/thiết bị ở MVP-0** ⇒ `G ≡ 0` **do thiết kế**. Giả thuyết này không có mẫu, và một kết quả "0%" ở đây **không phải bằng chứng chống lan truyền** — nó là hệ quả của chính quyết định đã ghi | — | — | **hoãn tới v1.1** (trần 3 sổ/thiết bị, hằng số đặt trước, chưa có hiệu lực) | Không có nhánh SAI. Cột `book_id` là khoá sổ ở mọi bảng, đa sổ **không tốn thêm cột nào** (chi phí 0 — A30) |
| **GT-13** | **Trần doanh thu tính bằng quảng cáo khác trần tính bằng IAP** | eCPM thật của tệp VN × impression khả dĩ ≠ 2,6 tỷ VND/năm ở 1 triệu MAU, sai khác >±30% | Việc bàn giấy 3 giờ (§10b v2). **Con số chuẩn để dùng: eCPM web display VN = $0,25–0,60** `[ước lượng thuần — A77]`. 🔎 **[TRA CỨU 04/09/2026, `11` §7.5] VẪN KHÔNG ĐÓNG ĐƯỢC, và dải nguồn thứ cấp còn RỘNG HƠN: $0,04 – $1,00.** Nguồn công khai chỉ có (a) eCPM **in-app**, (b) giá CPM **người mua trả** (12.500–25.000đ/1.000 hiển thị ≈ $0,50–1,00) — không phải doanh thu nhà xuất bản web; một nguồn ghi AdSense VN ≈ **$0,04**. Không có nguồn nào cho tệp Gen Z VN trên web. **Giữ $0,25–0,60 làm dải làm việc; kết luận "quảng cáo là ÂM" KHÔNG đổi — nó chỉ mạnh thêm nếu con số thật là $0,04.** Hai con số có nguồn $1,51/$2,34 là eCPM **in-app**, **không dùng được** cho web | — | 06/09/2026 | Nếu trần quảng cáo cũng <3 tỷ VND/năm ⇒ xác nhận đây là **small profitable business hoặc portfolio piece**, và founder phải nói ra điều đó bằng miệng trước 22/09. **Lưu ý ràng buộc cứng: doanh thu = 0đ TUYỆT ĐỐI trong 6 tháng đầu, kể cả quảng cáo (A62)** — GT-13 là việc bàn giấy để định cỡ trần, không phải kế hoạch bật quảng cáo |
| **GT-14** | **Founder giữ được ≤10 giờ/tuần VẬN HÀNH** | Số giờ ghi tay mỗi tuần vào cùng một Sheet, ≤10 giờ ops (A92) | tự ghi, 1 dòng/tuần | 1 người | mỗi tuần, vĩnh viễn | >10 giờ ops trong 3 tuần liên tiếp ⇒ **giảm số sổ**, không giảm giấc ngủ (A92). >15 giờ/tuần **tổng** vào 31/03/2027 ⇒ kill gate founder (A122). ⚠️ **Hai con số này chưa khớp nhau — xem cảnh báo D-02 ngay dưới bảng** |

> ## ⚠️ CẦN FOUNDER QUYẾT — D-02: SỐ GIỜ/TUẦN CAM KẾT BẰNG VĂN BẢN, **20 HAY 15?** (hạn 22/09/2026)
>
> GT-14 đo **10 giờ/tuần vận hành**; kill gate 31/03/2027 dừng ở **>15 giờ/tuần**; kế hoạch build giả định **20 giờ/tuần**. Ba con số này không thể cùng đúng, và tài liệu này **không được tự chọn** — đây là câu hỏi về đời sống của founder.
> - **(a) Ghi 15 giờ/tuần** (nhất quán với chính kill gate). Hệ quả tính lại bằng A81–A82: 15 × 0,65 = **9,75 giờ code/tuần** ⇒ 1 pw = 40 giờ ⇒ **4,1 tuần/pw** ⇒ scope MVP-0 3,5 pw (A84) = **14,4 tuần** ⇒ **beta KHÔNG thể chạy 02/12/2026** (A88), phải cắt scope hoặc dời beta.
> - **(b) Sửa kill gate lên 20 giờ bằng văn bản.** Giữ được lịch 02/12 (20 × 0,65 = 13 giờ code/tuần ⇒ 3,1 tuần/pw ⇒ 3,5 pw ≈ 10,9 tuần), nhưng phải chấp nhận rằng ngưỡng dừng đã bị nới **trước** khi có dữ liệu, và ghi lý do.
>
> **Khuyến nghị: (a) — ghi 15 giờ/tuần, và cắt scope cho vừa**, vì luật 2 của §6 cấm nới ngưỡng, và ngưỡng bị nới đầu tiên bao giờ cũng là ngưỡng về chính mình. **Tuyệt đối không để hai con số cùng tồn tại** — đó là cách tự lừa mình rẻ nhất trong hồ sơ. Nếu founder không trả lời trước 22/09, khuyến nghị tự động có hiệu lực và ghi vào ADR-000 kèm dòng "quyết định mặc định do quá hạn".

**Ba giả thuyết KHÔNG có trong bảng này, và lý do:**
- *"Người dùng thích sản phẩm"* — không kiểm chứng được, không có ngưỡng, không có hành động. Thay bằng GT-01 và cổng phi số ở §6.
- *"Sản phẩm khác biệt so với Locket"* — khác biệt không phải giả thuyết, nó là mô tả. Thứ kiểm chứng được là GT-05.
- *"Cà khịa trong Zalo tạo ra giá trị"* — **không đo được**, và tài liệu này từ chối viết một ngưỡng giả cho nó (§4.4 mục 1).

---

## 6. KILL CRITERIA — BẢNG MỐC THỜI GIAN

**Tuần 1 = 08/09/2026** (ngày bắt đầu Bước 0 theo §12 v2). Mọi mốc dưới đây có ngày lịch, không có "khi nào xong thì tính".

| Mốc | Ngày | Metric quyết định | **DỪNG** | **TIẾP** | **TĂNG TỐC** |
|---|---|---|---|---|---|
| **Tuần 0** | 04/09/2026 | GT-06, GT-07 (kiểm chứng nền tảng) | Zalo chặn link **và** mã 6 ký tự cũng không dùng được · hoặc upload ảnh hỏng trên ≥2/3 máy Android | 3/3 máy chạy, link không bị cảnh báo | — (không có tăng tốc ở mốc này) |
| **Tuần 2** | 22/09/2026 | GT-01 (`q_c_roster`, `q_x_roster` cửa sổ im lặng) + GT-05 + **cổng phi số** | `q_c_roster < 0,35` · **hoặc 0/8 sổ tự hỏi "mai còn chốt sổ không?"** · hoặc **<50% số sổ Bước 0 còn ≥3 người ngày 14** (tức <4/8; phát biểu theo **tỉ lệ %** chứ không theo "4/8" — C53) · **hoặc H1 `click-shortlink` <40%** (A21 — H1 ở Bước 0 **chỉ có quyền DỪNG**) | `q_c_roster ≥ 0,45` và `q_x_roster ≥ 0,30` và **≥60% sổ nhánh A đạt ≥9/14 ngày tính** (QĐ-06/A20, thay cho "≥3/5 sổ giữ chuỗi ≥5"). ⚠️ **H1 KHÔNG có quyền ĐI ở mốc này** — không có `card_opened` thật thì không có vế ĐI | `q_c_roster ≥ 0,55` và ≥75% số sổ (≥6/8) tự hỏi ⇒ **rút ngắn build** — nhưng **KHÔNG được chi bằng "cắt màn 6 (Của tôi)"**: khoản đó đã bị cắt xuống 0,00 pw ở A86 và **một khoản cắt chỉ được chi MỘT LẦN** (A87/C08). Khoản chi hợp lệ phải là một hạng mục còn sống, ghi vào `docs/adr/pw-ledger.md` cùng ngày |
| **Tuần 4** | 05/10/2026 | Kỷ luật scope (không có user) | Tổng pw trong backlog **>6,5** (A83) · hoặc slot màn 8 đã bị lấp mà Bước 0 không chứng minh nó bắt buộc (A79) | Backlog ≤6,5 pw, 0 hạng mục thêm không kèm hạng mục cắt, mọi khoản ghi ở `docs/adr/pw-ledger.md` (A87) | — |
| **Tuần 8** | 02/11/2026 | Tiến độ build vs lịch | Hoàn thành <45% số hạng mục §4.10 (tức <2,9/6,5 pw) ⇒ **cắt scope ngay, không dời lịch** | ≥55% (3,6/6,5 pw) | ≥75% ⇒ được phép mở **1** hạng mục từ §6 v2. **KHÔNG mặc định là Android web push**: nó đã bị cắt khỏi MVP-0 (S09) và `03` §9 B4 cho rằng Service Worker nhiều khả năng **không đăng ký được** trong webview Zalo ⇒ phải kiểm chứng trước khi tiêu 0,3 pw vào nó |
| **Tuần 12** | **30/11/2026** | Sẵn sàng beta — **tiêu chí phải quan sát được ĐÚNG NGÀY 30/11** [CHỐT 2026-08-28, C47/A113] | **chưa đủ 10 sổ ghi danh** vào 30/11 · hoặc feature freeze chưa xảy ra ⇒ dừng build, ship thứ đang có (đọc trạng thái **đúng ngày 30/11**, không phải "sẽ kịp") | **≥10 sổ đã ghi danh và feature freeze đã xảy ra** vào 30/11 | ≥20 sổ đã ghi danh chờ |
| **Tuần 14** | **15/12/2026** | Trần cứng beta (v2 §4.10) | **Beta chưa chạy vào 15/12/2026 ⇒ DỪNG BUILD, ship thứ đang có, không gia hạn** | Beta đã chạy từ 02/12 với ≥12 sổ | — |
| **Tuần 18** | 11/01/2027 | `sổ-D14`, GT-02, GT-10 | `sổ-D14 < 30%` · hoặc `card open 24h < 40%` · hoặc bất kỳ ngưỡng tác hại nào ở §4.2 bị vượt và không giải thích được | `sổ-D14 ≥ 30%` và `card open ≥ 45%` | `sổ-D14 ≥ 45%` và `card open ≥ 60%` ⇒ mở kênh tuyển sổ thứ hai (TikTok nano, 1 lần) |
| **Tuần 20** | **26/01/2027** [CHỐT 2026-08-28, QĐ-13 — ngày DUY NHẤT của cổng này, thay cho 20/01 ở `09`, 31/01 ở `10`, 22/02 ở bản trước] | **`sổ-D28` (OMTM)** trên **cohort tuần 1–4 của beta (02/12→29/12/2026), n ≥ 24** | **`sổ-D28 < 25%`** | 25–35% | **≥35% trên ≥24 sổ ⇒ mở khoá app native + widget** (mục 2 §6 v2). Điều kiện "≥30 sổ" đã hạ xuống ≥24: dự báo cơ sở của `09` §1.2 chỉ sinh 24 sổ ở 4 tuần đầu và trần vận hành là 35 sổ sống, nên ≥30 nghĩa là **cổng không bao giờ mở được ở kịch bản cơ sở**. Với n=24, KTC 95% là **±17 điểm** — phải in kèm mỗi lần trích dẫn |
| **Tuần 30** | **31/03/2027** [CHỐT 2026-08-28 — bản gốc v2 §9 mục 12, khớp `09` §6 và `10` G3; "30/03" ở bản trước là lỗi chép] | **KILL GATE FOUNDER** | >15 giờ/tuần **và** `sổ-D28 < 25%` ⇒ **DỪNG DỨT KHOÁT trong tuần đó**. **Vế "doanh thu = 0" ĐÃ BỊ BỎ khỏi điều kiện dừng** [QĐ-01]: nếu pháp lý cấm phát sinh doanh thu ở tier Giấy xác nhận thông báo (`05` §0 kết luận 3) thì doanh thu 0 là **hệ quả pháp lý, không phải tín hiệu thị trường** — dùng nó làm tiêu chí là tự lừa mình | ≤10 giờ/tuần **hoặc** `sổ-D28 ≥ 25%` | `sổ-D28 ≥ 35%` và ≤10 giờ/tuần ⇒ đây mới là lúc được nghĩ đến pháp nhân |
| **Liên tục** | mỗi tuần | **Hai counter pháp lý** [CHỐT 2026-08-28, QĐ-04 — thay hoàn toàn con số 700] | `monthly_visits` **≥8.500** HOẶC `monthly_active_persons` **≥850** ⇒ **dừng nhận sổ mới ngay trong ngày** | dưới đèn vàng | `monthly_visits` **≥6.000** HOẶC `monthly_active_persons` **≥600** ⇒ **khởi động hồ sơ Giấy phép MXH**. Ngưỡng NĐ 147/2024 là **OR**, và nhánh `10.000 lượt truy cập/tháng` bind trước ~2,5 lần — con số 700 cũ báo động **muộn 2,5 lần** (`05` §0 kết luận 2) |

> ### ⛔ [C14] TRẠNG THÁI BACKLOG TÍNH TẠI 03/09/2026: **7,25 pw** trên trần **6,5 pw** — cổng tuần 4 (05/10) **ĐÃ KÍCH HOẠT TRÊN GIẤY**
>
> Cộng đúng sổ cái, backlog hiện là **≈7,25 pw** (tới **8,35 pw** nếu tính cả khoản có điều kiện). Ngưỡng ở dòng "Tuần 4" **giữ nguyên, không nới**. Nhưng đọc cho đúng: **đây KHÔNG phải lý do dừng dự án — nó là lý do cắt tiếp, trước 22/09**, và việc cắt cụ thể là **D-01** (bảng US chi tiết ra 4,58 pw cho scope mà QĐ-25 gọi là 3,5 pw ⇒ thiếu 1,08 pw — A84/A85). Nếu tới 05/10 backlog vẫn >6,5 pw thì kill gate này **đã kêu hai lần**, và luật 2 dưới đây cấm sửa nó.

### Bốn luật chống tự lừa, áp lên toàn bộ bảng trên

1. **Vùng xám không được sửa bằng feature** (P8 của v2). Chỉ số rơi giữa DỪNG và TIẾP ⇒ **chạy lại đúng sản phẩm đó với cohort mới**. Nếu founder bắt gặp mình viết "gần đạt rồi, thêm cái này nữa là được" trong commit message, luật này đã bị phá.
2. **Ngưỡng được viết trước khi có dữ liệu, và không được sửa sau khi nhìn thấy dữ liệu.** Nếu phải sửa, sửa **kèm ngày và lý do bằng văn bản**, và ngưỡng mới có hiệu lực từ **cohort sau**, không phải cohort đang đo.
3. **Không nới định nghĩa.** `group_alive` = ≥3. Nếu một báo cáo dùng ≥2 để qua ngưỡng, báo cáo đó bị vứt. `duo_alive` được đo song song và **chỉ để tham khảo**.
4. **Cổng phi số đứng trên mọi phần trăm** (v2 §11). Sau ngày 14 của Bước 0: **0/8 sổ tự hỏi "mai còn chốt sổ không?" mà founder không khơi mào ⇒ DỪNG**, bất kể `q_c` đẹp thế nào.

---

## 7. ĐO KHI CHỈ CÓ 5–8 SỔ — THỐNG KÊ KHÔNG DÙNG ĐƯỢC, DÙNG GÌ

### 7.1. Trước hết, nói rõ thống kê chết ở đâu

| Tình huống | Con số thật |
|---|---|
| 8 sổ, đo tỉ lệ | Wilson 95% cho **3/8** = 37,5% ⇒ khoảng **13,7% – 69,4%**. Nói cách khác: 3/8 và 6/8 **không phân biệt được** |
| 8 sổ, so A vs B bằng dấu (sign test) | chỉ **7/8** hoặc **8/8** mới khác một đồng xu công bằng (p = 0,035 và 0,004). **6/8 không có ý nghĩa gì cả** |
| **24 sổ** (cỡ mẫu cổng đã chốt, A25), đo `sổ-D28` | 8/24 = 33,3% ⇒ Wilson 95% **18,0% – 53,3%** (nửa khoảng 17,7 điểm ⇒ **in kèm ±17 điểm**). Ngưỡng DỪNG 25% và ngưỡng TĂNG TỐC 35% **cùng nằm trong khoảng này** |
| 12 sổ (đợt 1 một mình, A90), đo `sổ-D28` | 4/12 = 33,3% ⇒ Wilson 95% ≈ **13,8% – 60,9%** (±23,6 điểm) — **vô dụng cho một cổng đi/dừng**. Đây là lý do đợt 2 phải mở (A91) |
| Muốn đo `sổ-D28` tới ±10 điểm ở p≈0,30 | cần **≈81 sổ**. Beta ở trần ≤30 sổ (A91) — và trần pháp lý 60 sổ (A93) — **không bao giờ** cho con số đó. **Ta chấp nhận ±17 điểm một cách có ý thức** (C31), không đi tìm ≈81 sổ |

> **Hệ quả bắt buộc:** ngưỡng ở §6 là **cổng quyết định**, không phải phép kiểm định. Chúng tồn tại để founder không được phép viết "gần đạt rồi", chứ không phải để chứng minh điều gì. v2 §11 đã cảnh báo đúng chuyện này; đây là phần định lượng của cảnh báo đó.

### 7.2. Bốn phương pháp thay thế được thống kê ở n nhỏ

**(a) Thiết kế trong-sổ (within-group), không phải giữa-sổ.** Đây là phương pháp mạnh nhất còn dùng được. **Cửa sổ im lặng chính là một thí nghiệm within-subject**: mỗi sổ là control của chính nó. So `q_c_roster` **ngày 8 và ngày 11** (= **15/09 và 18/09/2026**, im lặng — A98) với **ngày 7 và ngày 10** (14/09 và 17/09, founder có mặt), **theo cặp**, trên 8 sổ. Sign test: cần **7/8 sổ cùng chiều** để nói được điều gì. Sức mạnh của thiết kế này cao hơn hẳn so A-vs-B giữa 5 sổ và 3 sổ, vì nó khử toàn bộ khác biệt giữa các nhóm bạn.
**Tính lại sau khi cửa sổ im lặng rút từ 3 ngày xuống 2 (A98):** mỗi sổ góp **2 cặp ngày** thay vì 3 ⇒ tổng **16 cặp** thay vì 24. Sign test vẫn chạy trên **đơn vị SỔ** (mỗi sổ một dấu, lấy trung bình 2 cặp), nên ngưỡng 7/8 **không đổi**; thứ mất đi là độ ổn định của mỗi dấu — một ngày mưa cũng lật được dấu của một sổ. **Ghi rõ giới hạn này khi đọc số ngày 22/09.**
**Giao thức bắt buộc trong hai ngày đó (A97):** founder **làm card rồi gửi RIÊNG cho người trực** của sổ đó; **không tự dán card vào nhóm, không post, không nhắc, không trả lời trong nhóm**. Người trực quên dán ⇒ **để nguyên** — đó chính là phép đo điểm chết đơn, miễn phí.

**(b) Đọc tay 100%.** Ở ≤30 sổ, mọi E8 (rời), E9 (report), E10 (chặn), E13-"mệt" đều được founder đọc từng cái. Không lấy mẫu, không tổng hợp. Chi phí theo hằng số vận hành đã chốt (A92 — **8,4 phút/sổ/tuần**, trần **10 giờ/tuần** cho toàn bộ ops): **12 sổ ≈ 1,7 giờ/tuần · 30 sổ ≈ 4,2 giờ/tuần · 35 sổ (trần vận hành) ≈ 4,9 giờ/tuần.** Đây không phải giải pháp tạm — ở quy mô này nó **chính xác hơn** mọi dashboard.

**(c) Phân tích chuỗi sự kiện của từng cái chết.** Mỗi sổ chết được viết **một đoạn 5 dòng**: ngày mở, ngày A tụt xuống 2, ai rời trước, người đó có **TOANG bất thường** (`toang_14d` trong payload event 20) không — **không còn trường tim, A52** — có ai hỏi gì trong Zalo không. Sau 15 cái chết, đọc lại toàn bộ 15 đoạn cùng lúc. Đây là cách duy nhất phát hiện **kiểu chết** (mode of death) — thứ mà trung bình cộng xoá sạch. [phương pháp: mortality review, mượn từ y khoa]

**(d) Neo nội bộ thay vì benchmark ngoài.** v2 §11 đã chốt: gọi `group-D14` đo tay ở Bước 0 là **B**; ngưỡng cho beta là `group-D14 ≥ B`. **Công thức chuẩn của `B` (A26/QĐ-26), không được viết khác:** `B = % sổ nhánh A còn group_alive ở ngày 14`, **mẫu số = 5 sổ nhánh A**, **loại sổ số 0 (nhóm founder)** khỏi mọi phép đo (A95), `group_alive` tính trên **roster đóng băng**. ⚠️ **Phải in kèm mỗi lần dùng `B`:** với n=5, `B` chỉ nhận được các giá trị **{0, 20, 40, 60, 80, 100}%** — **bước nhảy 20 điểm**, tức "B tăng 15 điểm" là một câu không thể tồn tại. Đọc beta `group-D14` ngày **16/12/2026** (A116). Không dùng Yope D7 = 40% (đó là **user** retention ở đỉnh tăng trưởng — trộn đơn vị). Diễn giải trần trụi: **nếu app không bằng founder ngồi dán card Canva mỗi tối, app không có lý do tồn tại.**

### 7.3. Phỏng vấn ai, khi nào

| Nhóm | Ai | Khi nào | Bao nhiêu |
|---|---|---|---|
| **P1 — Người rời sớm nhất** | thành viên rời trong 14 ngày đầu | trong 72h sau khi rời | 100%, tối đa 8 |
| **P2 — Người im lặng nhưng chưa rời** | có ≥5 ngày VẮNG liên tiếp (HM-4) | ngay khi cờ bật | 100% |
| **P3 — Sổ sống khoẻ nhất** | 2 sổ có `tỉ lệ ngày tính` cao nhất | tuần 4 và tuần 12 của beta | 2 sổ, phỏng vấn **2 người/sổ**, một là người mở sổ, một **không phải** |
| ~~**P4 — "Người vô hình"**~~ | ~~người bị cờ HM-1~~ | **BỎ (C03)** — HM-1 đã chết cùng nút thả tim, **không còn cờ nào bật nhóm này**. Thay thế gần nhất, không tương đương: người chọn **"mệt"** ở `pulse_survey` (event 30) và người bị cờ **HM-8** (đứa thua cố định) | gộp vào P2 |
| **P5 — Sổ chết gọn** | sổ từng có 5 người active rồi tụt <3 trong 14 ngày | trong 7 ngày sau khi chết | 3 sổ |

**Quy tắc:** phỏng vấn qua **thoại hoặc voice Zalo, 12–15 phút**, không phải form. Không nói tên sản phẩm trong 5 câu đầu. Không giải thích tính năng. Không bào chữa.

### 7.4. Bộ 10 câu hỏi phỏng vấn — dùng nguyên văn

Nguyên tắc: **hỏi hành vi đã xảy ra, không hỏi ý định**; **không mớm tên sản phẩm**; **không hỏi câu nào trả lời được bằng "có/không" ở 5 câu đầu**.

1. **"Tối qua từ 9 giờ tới lúc ngủ, mày làm gì? Kể theo thứ tự."** *(Mở bằng hành vi thật, chưa nhắc sản phẩm. Nếu Chốt Sổ không tự bật ra ở đây, nó chưa phải nghi thức.)*
2. **"Lần cuối mày mở cái sổ là lúc nào, đang làm gì lúc đó?"** *(Đo trigger thật. Câu trả lời "khi thấy card trong nhóm" = GT-02 đúng; "khi rảnh" = chưa có trigger.)*
3. **"Ai trong nhóm hay bấm chốt sổ nhất? Có bao giờ mày bấm không — lần đó vì sao?"** *(GT-09, điểm chết đơn. Nghe cả cách họ gọi tên vai đó.)*
4. **"Kể cho tao nghe cái ảnh gần nhất mày gửi. Sao lại chọn tấm đó?"** *(Đo ma sát thật của bước 4 core loop — 16 giây trên giấy là bao nhiêu giây trong đời.)*
5. **"Có hôm nào mày định gửi rồi thôi không? Hôm đó chuyện gì?"** *(Đây là câu bắt được HM-5 và cái nhục ngầm. Câu quan trọng nhất trong bộ.)*
6. **"Cái nút TOANG — mày hiểu nó là gì? Mày bấm bao giờ chưa?"** *(GT-08. Nếu người ta mô tả nó là "thừa nhận thua" thay vì "vẫn có mặt", nhãn đang gây nhục.)*
7. **"Trong nhóm, ai là đứa hay bị nói nhất về chuyện sổ sách này?"** *(Cửa duy nhất nhìn vào phần cà khịa trong Zalo — thứ không log được. Hỏi về người khác dễ trả lời thật hơn hỏi về mình.)*
8. **"Nếu ngày mai cái sổ biến mất không báo trước, nhóm mày sẽ nói gì trong nhóm chat?"** *(Bài test Sean Ellis biến thể, đặt ở cấp nhóm. "Chắc không ai nhắc" = sản phẩm chưa tồn tại.)*
9. **"Có ai trong nhóm bớt tham gia hẳn không? Theo mày vì sao?"** *(Bắt HM-2/HM-4 từ góc nhìn người còn ở lại — góc mà event không bao giờ thấy.)*
10. **"Nếu mày phải mô tả cái này cho một đứa bạn chưa biết, mày nói sao?"** *(Đặt CUỐI CÙNG, không bao giờ đặt đầu. Nếu câu họ nói không chứa `chốt sổ` / `một tấm` / `không cài app`, câu định vị 13 từ ở §1 v2 chưa vào được đầu ai.)*

**Cấm hỏi:** "mày có thích app không", "mày có giới thiệu cho bạn không", "mày muốn thêm tính năng gì". Ba câu này cho ra câu trả lời lịch sự và vô dụng, và với founder bus-factor-1 thì thời gian phỏng vấn là tài nguyên khan hiếm nhất.

---

## 8. DASHBOARD TỐI THIỂU

> ### ⛔ [S08] Ở MVP-0 **KHÔNG CÓ UI DASHBOARD.** Cái được build là: **32 event trong schema** (bắt buộc, không backfill được — A51) + **6 truy vấn SQL chạy tay ≈ 0,10 pw**, kết quả dán vào **một Google Sheet**. Bốn khối dưới đây là **đặc tả 6 truy vấn đó và bố cục tờ giấy**, không phải đặc tả một trang web. Mục này trước đây nở từ 0,5 pw thành "14 event + 9 HM + pulse ×2 + 4 khối + 5 nhóm phỏng vấn" và đã bị cắt xuống: **9 HM còn 7**, 5 nhóm phỏng vấn còn 4, không UI. Định giá lại **+0,15 pw** đã ghi vào `docs/adr/pw-ledger.md`, **chỉ một lần** (A87).

**Đúng một trang. Xem đúng một lần mỗi tuần, thứ Hai, 12 phút. Không có bản hằng ngày.** Lý do có giới hạn thời gian: xem hằng ngày ở beta ≤30 sổ chỉ tạo ra nhiễu và lo lắng, và nó ăn vào trần **10 giờ/tuần** (A92).

### Khối 1 — Ba dòng, không hơn (2 phút)

| | Tuần này | Tuần trước | Ngưỡng |
|---|---|---|---|
| **`sổ-D28`** (cohort đã đủ 28 ngày) | | | DỪNG <25% · TĂNG TỐC ≥35% **trên n ≥ 24 sổ, in kèm ±17 điểm** (A24–A25). Ô này **trống cho tới 26/01/2027** |
| **`sổ-có-nhịp`** (≥4/7 ngày tính) | | | chỉ để chọn sổ đi phỏng vấn |
| **Số sổ đang mở / số sổ `group_alive`** | | | |

### Khối 2 — Bảng một dòng mỗi sổ (6 phút)

Mỗi sổ đang mở là **một dòng**, sắp xếp theo `A` tăng dần (sổ yếu nhất lên đầu — đây là thứ tự đúng, không phải theo sổ khoẻ nhất):

`book_id · A · roster_size · ngày tính 7d · q_c_roster · q_x_roster · chuỗi · van dùng · card open 24h · tỉ lệ TOANG · 🚩`

(`book_id`, không phải `group_id` — A30/C52. `q_c_roster`/`q_x_roster`, không phải bản trượt — A15/A18; bản trượt nằm ở tab báo cáo phụ.)

Cột `🚩` bật khi bất kỳ điều nào đúng: `A ≤ 2` · `van ≥ 1,8` · `card open < 0,4` · có cờ **HM-4 / HM-8** (~~HM-1~~ đã chết — C03) · có E9 chưa `resolved` quá **SLA của loại đó: 48h nếu là khiếu nại người dùng, 24h — khẩn cấp 6h — nếu là yêu cầu cơ quan nhà nước** (A59).

### Khối 3 — Hộp tác hại (3 phút, đọc tay 100%)

Danh sách phẳng, không tổng hợp: mọi `member_left` (event 20), `report_created`, `block_created` (event 23), `pulse_survey = mệt` (event 30), `exit_survey.pressured = true` trong 7 ngày, kèm **3 trường ngữ cảnh: `days_in`, `misses_7d`, `toang_14d`**. ~~`hearts_recv_14d`~~ **KHÔNG tồn tại** — nó chết cùng nút thả tim (A52/C03); trường thứ ba thay thế là `toang_14d`. **Danh sách rỗng vẫn phải mở ra nhìn** — mở nó là một phần của nghi thức, không phải một cảnh báo.

### Khối 4 — Ba con số vận hành (1 phút)

`giờ founder tuần này` (tự ghi tay) · **`monthly_visits`** (vàng 6.000 / đỏ 8.500 — event 28) · **`monthly_active_persons`** (vàng 600 / đỏ 850 — event 29).

**Quy đổi sang đơn vị SỔ để đọc nhanh** (A72–A73, dùng **25 lượt/người/tháng** `[ước lượng, ảnh hưởng 🔴 Rất cao — nó quyết định trần beta là 60 sổ hay 600 sổ]` và **A trung bình = 4,0 người/sổ** — A70):

| Mốc | Lượt/tháng | ÷ 25 = người | ÷ 4,0 = **sổ** |
|---|---|---|---|
| **Đèn vàng** | 6.000 | 240 | **60 sổ** ← đây cũng là **trần cứng hành chính** (A93), không nới bằng cách hỏi lại |
| **Đèn đỏ** | 8.500 | 340 | **85 sổ** |
| Ngưỡng luật NĐ 147/2024 | 10.000 | 400 | **100 sổ** |

Đọc thẳng hai hệ quả: (1) trần **vận hành** 35 sổ sống (A92) nằm **dưới** trần **pháp lý** 60 sổ — hai trần khác nhau, **cấm trộn**; (2) beta ở trần đợt 2 ≤30 sổ (A91) còn cách đèn vàng đúng **một lần nhân đôi**, nên counter phải được nhìn **mỗi tuần**, không phải mỗi quý.

> ### ➕ [BỔ SUNG 04/09/2026] Hai điều chỉnh cho hai counter pháp lý — `11` §3 và §6
>
> **(a) Đèn chi phí phải có HÀNH ĐỘNG, không chỉ có ngưỡng.** Trước hôm nay hồ sơ có ngưỡng >$60 (A75) và DoD ≤$40 (A76) nhưng **không dòng nào nói làm gì khi vượt**. Thang 4 nấc nay ở **`11` §3.4**, nối vào hai công tắc đã tồn tại: 🟢 >$40 ghi sổ · 🟡 >$60 điều tra trong 48h · 🟠 >$100 bật `signup_paused` **trong ngày** · 🔴 >$200 bật `service_paused` **trong 2 giờ**. **0 pw** — không thêm công tắc mới. Kèm chứng minh có số ở `11` §3.2: **R2 = $0 trong toàn bộ vòng đời hợp pháp** (rời free tier 10 GB cần ~719 sổ-năm, gấp ~12 lần trần 60 sổ) ⇒ đèn $60 nếu sáng thì **sáng vì Supabase compute add-on, không vì ảnh** — đó là chỗ phải nhìn đầu tiên.
>
> **(b) 🟡 Ngưỡng 10.000 lượt có thể tính theo TRUNG BÌNH 6 THÁNG LIÊN TỤC, không phải tháng đỉnh.** Cụm *"số liệu thống kê trung bình trong thời gian 06 tháng liên tục"* được xác minh chắc chắn cho ngưỡng **100.000 lượt xuyên biên giới (NĐ 147 Điều 23 khoản 3)**; một nguồn thứ cấp áp nó cho cả ngưỡng 10.000 (`11` §6 #5). **Nếu đúng thì thiết kế hiện tại đang báo động sớm hơn thực tế đáng kể** — một tháng vọt lên 7.000 lượt không kích hoạt gì nếu trung bình 6 tháng vẫn thấp. **KHÔNG đổi ngưỡng hôm nay** (chưa xác nhận, và báo sớm là hướng thận trọng đúng); nhưng **thêm một cột `monthly_visits_avg6` vào bảng đọc thứ Hai từ ngày đầu** — cột này không backfill được, và nếu luật sư xác nhận, nó là thứ quyết định đèn vàng có bật hay không. Chi phí: **một cột, 0 pw**.

**Con số vận hành thứ ba:** `chi phí hạ tầng tháng` (**báo động >$60** — A75; kỳ vọng **$28–37** ở beta — A74/QĐ-09: Supabase Pro $25 là bắt buộc từ ngày beta chạy vì Free không có backup hằng ngày trong khi sản phẩm hứa giữ thumbnail vĩnh viễn. Ngưỡng cũ "$25 khi kỳ vọng ~$12" sẽ kêu vĩnh viễn ngay từ tháng đầu).

### KHÔNG có trên dashboard, có chủ ý

DAU · MAU · session length · số ảnh tổng · biểu đồ đường tăng trưởng · funnel realtime · heatmap · retention curve theo user · bất kỳ đồ thị nào nhiều hơn một đường. **Mỗi thứ trong danh sách này đều là một cách để cảm thấy bận rộn mà không ra được một quyết định.**

---

## 9. BẤT ĐỒNG VỚI ĐỊNH NGHĨA SẢN PHẨM v2

Năm điểm. Bốn cái đầu là **lỗi đo lường có thể sửa bằng 0 hoặc gần 0 person-week**; cái thứ năm là một đề xuất scope kèm khoản cắt trả bù theo luật P7.

### BĐ-1 [NẶNG NHẤT] — Mẫu số của `q_c` trong v2 tự thổi phồng khi sổ đang chết

**v2 viết** (§11, ghi chú đo lường): _"`q` tính trên thành viên Active (đã nộp ≥1 tấm trong 7 ngày qua)… Tính sai mẫu số là cách tự lừa mình rẻ nhất."_

**Vấn đề:** chính định nghĩa đó chứa lỗi mẫu số mà nó cảnh báo. `A` là tập **trượt**: người ngừng hẳn sẽ **rơi khỏi mẫu số** sau 7 ngày. Hệ quả là `q_c` **tăng khi sổ chết**.

> **Ví dụ số:** sổ 5 người. 2 người bền (`q ≈ 0,90`), 3 người tắt dần rồi ngừng hẳn từ ngày 8.
> Ngày 1–7: `A = 5`, `q_c ≈ (2×0,9 + 3×0,3)/5 = 0,54`.
> Ngày 8–14: 3 người kia rơi khỏi `A` ⇒ `A = 2`, `q_c ≈ 0,90`.
> **Founder đọc: `q_c` tăng từ 0,54 lên 0,90 ⇒ GT-01 PASS.** Thực tế: sổ vừa mất 60% thành viên và `group_alive` = FALSE.

Đây không phải rủi ro lý thuyết — nó là kịch bản **có xác suất cao nhất** ở Bước 0 (phản biện #6: ~40% nhóm messaging chết trong tuần đầu là baseline vật lý).

**Sửa, chi phí 0 (một cột trong Google Sheet):** ở Bước 0 và ở mọi phép đo H2/GT-01, mẫu số là **roster đóng băng** = tập người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, giữ nguyên suốt 14 ngày. Gọi là `q_c_roster`. `q_c` trượt vẫn được báo cáo, nhưng **`q_c_roster` mới là con số so với ngưỡng 0,45 / 0,35**. Hai cột, không phải một.

> ✅ **[CHỐT 2026-08-28 — QĐ-03] ĐÃ ÁP DỤNG, KHÔNG CÒN LÀ ĐỀ XUẤT.** Cột `roster_size` đã vào `book_day` (`04` §1.5); truy vấn `q_c` ở `04` §7.2 đã được viết lại để dùng mẫu số đóng băng (bản cũ dùng `sum(present_count)/sum(active_count)` — đúng câu SQL mà mục này bác); `02` §5.6 đã được sửa để Google Sheet Bước 0 có hai cột. **Hạn cuối 07/09/2026** — sau ngày 08/09 không sửa hồi tố được vì roster ngày 1–3 không tái dựng lại được.

### BĐ-2 — Tiêu chí "≥3/5 sổ giữ chuỗi ≥5 ngày" của H2 gần như không phân biệt được gì

**v2 viết** (§11, H2, cột "Đạt"): _"…VÀ ≥3/5 sổ nhánh A giữ được chuỗi ≥5 ngày liên tiếp."_

**Vấn đề:** van 2 ngày nghỉ/tuần khiến chuỗi chỉ đứt ở **lần hụt thứ ba trong một tuần**. Chuỗi 5 ngày vì thế gần như tự động, kể cả ở kịch bản tệ. Một tiêu chí mà cả trường hợp đạt lẫn trường hợp fail đều pass thì nó không phải tiêu chí — nó là trang trí.

**Thay bằng tiêu chí có sức phân biệt đo được** (nhị thức, `A=5`, van không ảnh hưởng vì đếm ngày tính chứ không đếm chuỗi):

| Tiêu chí | ở `q_c = 0,35` (fail) | ở `q_c = 0,45` (đạt) | ở `q_c = 0,53` (thiết kế) `[chưa đo — A17]` |
|---|---|---|---|
| 1 sổ đạt **≥9/14 ngày tính** | 39,9% | 87,7% | 98,8% |
| 1 sổ đạt **≥11/14 ngày tính** | 8,6% | 50,0% | 84,7% |
| **≥60% sổ nhánh A đạt ≥9/14** (= ≥3/5) | **31,6%** | **98,5%** | **100%** |

⇒ **Tiêu chí thay thế:** _"**≥60% sổ nhánh A** đạt ≥9/14 ngày tính trong Bước 0."_ Cùng dữ liệu, cùng 0 pw, nhưng tách được kịch bản fail khỏi kịch bản đạt với tỉ số 1 : 3,1 thay vì gần 1 : 1.

> ✅ **[QĐ-06 / C33 / A20] ĐÃ ÁP DỤNG, KHÔNG CÒN LÀ ĐỀ XUẤT.** Tiêu chí `≥60% sổ nhánh A đạt ≥9/14 ngày tính` đã thay `"≥3/5 sổ giữ chuỗi ≥5 ngày"` ở **cả ba nơi**: `01` §11 H2, `07` §4 CỔNG #1, `10` §7 G0 — và ở §5 GT-01 + §6 tuần 2 của chính tài liệu này. **Phát biểu bằng TỈ LỆ %, không bằng "3/5"** (C53): sàn tuyệt đối của Bước 0 là 6 sổ (4A+2B), và nếu rơi xuống sàn thì "3/5" trở thành một câu vô nghĩa trong khi "60%" vẫn đọc được. ⚠️ **In kèm mỗi lần dùng:** với n=5 sổ nhánh A, chỉ số này chỉ nhận {0, 20, 40, 60, 80, 100}% — **bước nhảy 20 điểm**, nên "59%" không tồn tại; ngưỡng 60% trên thực tế là "3 trong 5 sổ". **Hạn viết ngưỡng: 07/09/2026** (A106) — sau ngày đó là sửa ngưỡng khi đã nhìn thấy dữ liệu, tức phá luật 2 của §6.

### BĐ-3 — H1 **không đo được** ở Bước 0 như cách v2 mô tả

**v2 viết:** H1 = _"≥60% thành viên Active mở card trong 24h"_, đo trong Bước 0 (card làm bằng Canva, dán tay vào Zalo).

**Vấn đề:** một ảnh Canva dán vào Zalo **không có sự kiện "mở"**. Zalo không trả về ai đã xem. Bước 0 vì vậy **không thể sinh ra con số của H1**, trong khi H1 là một trong ba giả thuyết mà quyết định 22/09 phụ thuộc vào.

**Sửa — BẮT BUỘC, hạn 07/09/2026:** mỗi card Bước 0 mang **một shortlink riêng cho từng ngày từng sổ**: **8 sổ × 14 ngày = 112 link** (A22). Đo `unique click / roster_size` (mẫu số đóng băng, không phải `A` trượt — A15).

> ✅ **[C21 / S18 / A21–A22] ĐÃ ÁP DỤNG. Ba điều kiện, không thương lượng:**
> 1. **Bắt buộc, không phải "nên có".** Không có 112 link thì ngày 22/09 **không có một con số H1 nào** — và H1 là một trong ba giả thuyết mà quyết định 22/09 phụ thuộc vào.
> 2. **Dùng dịch vụ rút gọn của BÊN THỨ BA** (Short.io free hoặc tương đương). **KHÔNG tự host, KHÔNG viết một dòng code sản phẩm nào** trong Bước 0 (A107 — Bước 0 có 0 dòng code sản phẩm). Đây là ngoại lệ có ý thức, ghi vào ADR-000, không để nó trôi vào.
> 3. **Ngưỡng đã đổi: H1 ở Bước 0 CHỈ có quyền DỪNG (`click-shortlink < 40%`), KHÔNG có quyền ĐI.** Câu _"≥60% click"_ ở bản trước **đã bị bác** — shortlink đo **click**, không đo **xem**, và một chỉ số cận dưới không được phép mở cổng. Ngưỡng `≥60%` dời sang **tuần 2 của beta**, khi có event `card_opened` thật.
>
> Đo song song, đếm tay, làm số kiểm chứng chéo: **số người rep hoặc thả cảm xúc vào card trong Zalo / `roster_size`**. Số này **không** được dùng thay `click-shortlink`.

### BĐ-4 — Payload `member_left` của v2 thiếu đúng hai trường làm nên giá trị của nó

**v2 viết** (§8, xử lý #22): `member_left{misses_7d, was_kicked}`.

**Vấn đề:** hai trường đó tách được *rời vì hụt nhiều* khỏi *bị đá*, nhưng **không** tách được *rời vì bị bỏ rơi* — đúng cơ chế tác hại mà #22 mô tả. Thiếu chúng, HM-1/HM-3 không tính được, và **không thể thêm hồi tố** (dữ liệu quá khứ không tồn tại).

~~**Sửa, chi phí 0 (hai cột trong cùng một `INSERT`):** thêm `hearts_recv_14d` và `toang_14d` vào payload, cộng `days_in`.~~ — **đề xuất gốc, giữ lại để đọc lịch sử; đã bị chấp nhận một phần ngay dưới đây.**

> ⚠️ **[CHỐT 2026-08-28 — QĐ-05b] CHẤP NHẬN MỘT PHẦN.** `toang_14d` và `days_in` **đã vào** payload `member_left` (event 20 của danh mục hợp nhất). **`hearts_recv_14d` KHÔNG vào**, vì nút thả tim đã bị cắt khỏi MVP-0 — không có nguồn dữ liệu. Hệ quả trực tiếp và phải nói thẳng: **HM-1 và HM-3 bị bỏ** (xem §4.2), và bộ chỉ số tác hại từ nay **chỉ phát hiện được sự rút lui (HM-2, HM-4), không phát hiện được sự loại trừ**. Đó là cái giá của việc cắt nút thả tim, và nó đã được ghi vào `docs/adr/pw-ledger.md` như một khoản mất, không phải một khoản tiết kiệm thuần.

### BĐ-5 — Không có nút "Nghỉ", nên trạng thái mắc kẹt không phân biệt được với trạng thái bị hại

**v2 quyết định:** không có pause/skip (P9 — không tồn tại nút tiêu cực). Ba trạng thái: XONG / TOANG / VẮNG.

**Vấn đề đo lường:** một người thi cuối kỳ 10 ngày và một người đang bị nhóm đẩy ra ngoài **sinh ra chuỗi event giống hệt nhau**: VẮNG liên tiếp, tim về 0, rồi `member_left`. HM-4 phát hiện được cả hai nhưng **không phân biệt được**, và founder sẽ phải phỏng vấn 100% — tốn đúng thứ khan hiếm nhất (giờ founder, trần 10 giờ/tuần).

**Lưu ý về P9:** nút "Nghỉ 7 ngày" **không phải** nút tiêu cực theo định nghĩa của P9. P9 cấm affordance **biểu đạt sự phản đối nhắm vào một người khác**. Nút này nhắm vào chính chủ, giống hệt "rời sổ" và "đổi kèo" — hai thứ v2 đã có.

**Đề xuất, kèm khoản trả theo luật P7 (1-1):**

| Thêm | +pw | Cắt để trả | −pw |
|---|---|---|---|
| Nút **"Nghỉ 7 ngày"** trong màn Của tôi: một cột `paused_until`, người nghỉ **không tính vào `A`**, **không hiện gì trên card** (đúng P2), tự bật lại sau 7 ngày | **+0,10** | ~~Tết freeze~~ — **KHOẢN NÀY KHÔNG CÒN ĐỂ CHI** | — |

> ❌ **[CHỐT 2026-08-28 — QĐ-23] BÁC ĐỀ XUẤT NÚT "NGHỈ 7 NGÀY" Ở MVP-0, vì hai lý do độc lập:**
> 1. **Khoản trả bù không tồn tại.** Đề xuất trả bằng "Tết freeze (0,10 pw)" — nhưng `07` §0 đã cắt Tết freeze khỏi MVP-0 rồi, tức khoản đó **đã được chi một lần**. Luật mới của `docs/adr/pw-ledger.md`: **một khoản cắt chỉ được chi một lần**.
> 2. **Lý do cắt Tết freeze ở `07` dựa trên NGÀY SAI, nhưng kết luận vẫn đứng.** `07` viết "Tết 2027 là 17/02, ngoài cửa sổ 12 tuần" — **17/02 là mùng 1 Tết Bính Ngọ 2026**; mùng 1 Tết Đinh Mùi là **06/02/2027 (thứ Bảy)**, và cửa sổ đóng băng đúng là **03/02 → 12/02/2027** (QĐ-06b). Ngày đúng vẫn nằm ngoài cửa sổ 12 tuần (kết thúc 29/11/2026) ⇒ **Tết freeze vẫn được hoãn sang T13, hạn hoàn thành 25/01/2027**. Nhưng lưu ý ngược lại: nếu beta chạy 02/12/2026 → 23/02/2027 thì **Tết rơi đúng tuần 10–11 của beta**, tức **trong** cửa sổ beta — nó bóp méo cohort D28 và đó là lý do QĐ-13 chốt cohort quyết định là **tuần 1–4 (02/12→29/12)**, đọc D28 ngày 26/01/2027, **trước Tết**.
>
> **Thứ ĐƯỢC GIỮ từ đề xuất này, chi phí 0:** cột **`membership.paused_until`** vào schema ngay từ migration đầu tiên, **không có UI**. Chi phí một cột = 0 pw; chi phí thêm cột sau khi có dữ liệu = một migration + một lớp bug. Nút mở ở T13+ nếu HM-4 vượt 20%.
>
> **Hệ quả phải chấp nhận bằng văn bản (đúng như mục này yêu cầu):** HM-4 mãi mãi là chỉ số **mơ hồ**, mọi cờ HM-4 phải giải bằng một cuộc gọi, và chi phí đó ăn vào trần 10 giờ/tuần. Đã ghi ở §4.2 và ở `11-nhat-ky-quyet-dinh.md`.

**Giá trị đo lường ĐÃ MẤT vì bác đề xuất này** (viết ở thì đã mất, không phải thì tương lai — nút chỉ mở lại ở T13+ nếu HM-4 vượt 20%): `member_paused` **đáng lẽ** là **tín hiệu tự khai báo về ý định ở lại** — thứ duy nhất trong toàn bộ hệ thống phân biệt được "bận" với "bị đẩy ra". Nếu tỉ lệ `paused` cao mà `member_left` thấp, sản phẩm đang hoạt động đúng. Nếu người ta bỏ qua nút Nghỉ và im lặng rồi rời (HM-2 > 35%), đó là bằng chứng mạnh cho tác hại — bằng chứng mà **hôm nay không có cách nào thu được**.

**Đã bác, và hệ quả đã được ghi bằng văn bản** ở §4.2 (HM-4 đánh dấu "mơ hồ có chủ ý") và ở `11-nhat-ky-quyet-dinh.md` QĐ-23.

---

## 10. CÂU HỎI MỞ CẦN FOUNDER QUYẾT

Xếp theo hạn chót. Mỗi câu có **hình dạng câu trả lời** yêu cầu — không chấp nhận "để xem sao".

| # | Câu hỏi | Hạn | Vì sao không hoãn được | Dạng câu trả lời cần |
|---|---|---|---|---|
| ~~**CH-1**~~ | ~~Chấp nhận BĐ-1 (mẫu số đóng băng `q_c_roster`)?~~ | — | **ĐÃ QUYẾT — QĐ-03/C05.** `q_c_roster` là con số so ngưỡng; cột `roster_size` đã vào `book_day` (`04` §1.5); Sheet Bước 0 có **8 cột** (A96). Việc còn lại chỉ là **dựng Sheet trước 07/09** | không còn là câu hỏi |
| ~~**CH-2**~~ | ~~Chấp nhận BĐ-3 (shortlink theo ngày)?~~ | — | **ĐÃ QUYẾT — C21/A22.** Shortlink **BẮT BUỘC**, 112 link, dịch vụ bên thứ ba, hạn 07/09. Nhánh "không làm" **không còn tồn tại** | không còn là câu hỏi |
| ~~**CH-3**~~ | ~~Đổi tiêu chí H2 sang "≥9/14 ngày tính"?~~ | — | **ĐÃ QUYẾT — QĐ-06/C33/A20.** Tiêu chí là **≥60% sổ nhánh A đạt ≥9/14 ngày tính**, đã lan sang `01`, `07`, `10` | không còn là câu hỏi |
| ~~**CH-4**~~ | ~~Nút "Nghỉ 7 ngày" đổi lấy Tết freeze?~~ | — | **ĐÃ QUYẾT — QĐ-23/C34/S06: BÁC nút, GIỮ cột.** Khoản trả bù "Tết freeze" đã bị `07` tiêu, một khoản cắt chỉ chi một lần (A87). `paused_until` vào schema từ migration đầu, **không UI ở MVP-0** (A50). Hệ quả đã ghi: HM-4 mang nhãn "MƠ HỒ CÓ CHỦ Ý" | không còn là câu hỏi |
| **CH-5** | **⚠️ D-05 — xem khối cảnh báo ngay dưới bảng.** `sổ-D28 = 25%` giữ hay hạ? | **22/09/2026** | Đây là câu hỏi tự-lừa-mình nguy hiểm nhất trong hồ sơ. Trả lời **sau** khi thấy 20% thì câu trả lời sẽ là "đúng như dự báo" | Một câu viết tay, ký tên, dán tường — hai lựa chọn ở khối dưới |
| **CH-6** | **Tham vọng thật là gì: small profitable business, portfolio piece, hay gọi vốn?** | **22/09/2026** | v2 §9 mục 5 đã ghi: nếu xây để gọi vốn/exit thì chiến lược này sai từ ngày 1. Mọi ngưỡng trong tài liệu này được hiệu chỉnh cho phương án 1–2 | Một từ, nói ra miệng trước một người khác |
| **CH-7** | **Khi `sổ-D28` nằm trong 25–35% suốt 8 tuần liên tiếp (vùng xám kéo dài) thì làm gì?** | **26/01/2027** (A118 — cùng ngày cổng G2; "tuần 24" ở bản trước là mốc không tồn tại) | P8 nói "chạy lại cohort mới, cấm thêm feature" — nhưng lặp vô hạn cũng là một cách chết | Đặt **số lần lặp tối đa** hôm nay. Đề xuất: **2 lần**, lần thứ 3 = DỪNG |
| **CH-8** | **Ai là người thứ hai được xem dashboard?** | **trước beta** | Bus factor = 1 áp dụng cho cả việc *đọc số*. Founder một mình sẽ hợp lý hoá mọi con số xấu; đó là lý do kill gate cần một nhân chứng | Một cái tên + lời hứa gửi ảnh chụp dashboard mỗi thứ Hai |
| **CH-9** | **eCPM thật của tệp Gen Z VN là bao nhiêu?** (GT-13) | **06/09/2026** | Trần doanh thu 2,6 tỷ VND/năm đang được tính trên IAP trong khi đối thủ cùng tệp kiếm tiền bằng quảng cáo | Một bảng số, một kết luận. **Cần kiểm chứng — tài liệu này không có con số eCPM đáng tin cho VN** |
| **CH-10** | **Định nghĩa "người dùng thường xuyên/tháng" VÀ "lượt truy cập/tháng" theo NĐ 147/2024 là gì?** | **theo lịch hẹn luật sư** (câu 1b, `05` §11) | `05` §12 mục 2: chênh lệch giữa ba cách hiểu là **hơn 10 lần**, quyết định trần beta là 60 sổ hay 600 sổ. **Định nghĩa tạm dùng cho tới khi có câu trả lời** [CHỐT 2026-08-28, QĐ-24]: `monthly_active_persons` = số `person` khác nhau có ≥1 `proof` trong 30 ngày · `monthly_visits` = số phiên khác nhau (`session_id` mới sau 30 phút không hoạt động) chạm bất kỳ route nào của `chotso.vn`, kể cả trang public. **Đếm rộng, báo động sớm** — sai theo hướng an toàn | Câu trả lời của luật sư, ghi vào **`docs/adr/ADR-000-bat-bien.md` §3 (pháp lý)** — **KHÔNG có file ADR-002**; ba ADR đã gộp thành MỘT (A103/S21). Câu này là **1 trong 7 câu gửi luật sư trong MỘT email, MỘT lần trả phí** (A65), gửi **03/09/2026** (A104), chi phí ý kiến **5–15 triệu đồng** (A66) |

---

> ## ⚠️ CẦN FOUNDER QUYẾT — D-05: NGƯỠNG `sổ-D28 < 25%` GIỮ HAY HẠ? (hạn 22/09/2026)
>
> **Vấn đề, nói thẳng:** hồ sơ tự dự báo `sổ-D28` rơi vào dải **12,5% – 19,1%**. Tức dự án đang được thiết kế để **trượt cổng của chính nó**. Máy không quyết được vì đây là đánh đổi giá trị, không phải mâu thuẫn logic. Hai lựa chọn, cả hai đều hợp lệ **nếu chọn hôm nay**:
> - **(a) GIỮ 25%**, và viết thêm **một câu bằng văn bản, ký tên, dán tường ngay hôm nay**: _"Nếu beta ra 15–25%, đó là **DỪNG**, không phải 'đúng như mô hình'."_ Không có câu đó thì ngày 26/01/2027 con số 19% sẽ được đọc thành "khớp dự báo" — và đó là cách hồ sơ này chết mà không ai bấm nút dừng.
> - **(b) HẠ xuống 20% NGAY BÂY GIỜ**, kèm lý do bằng văn bản, và sửa đồng thời ở `06` §1/§6/§8, `07`, `09`, `10`, v2 §6 mục 2. Hợp lệ **chỉ vì chưa có dữ liệu**.
>
> **Khuyến nghị: (a) — GIỮ 25%.** Lý do: hạ ngưỡng **sau** khi nhìn thấy dữ liệu là tự lừa mình (luật 2 của §6); hạ **trước** thì hợp lệ nhưng ở đây không có căn cứ mới nào ngoài chính dự báo bi quan — hạ ngưỡng để khớp dự báo bi quan là biến kill gate thành tấm gương. **Không được chọn "để xem sao"**: sau 22/09 mọi lần đụng vào con số này đều là sửa ngưỡng khi đã có dữ liệu. Nếu founder không trả lời trước hạn, **(a) tự động có hiệu lực** và ghi vào ADR-000 kèm dòng "quyết định mặc định do quá hạn".
>
> ⚠️ Nhắc kèm để không đọc nhầm: ở n=24, KTC 95% quanh 33,3% là **18,0%–53,3%**. Ngưỡng 25% nằm **trong** khoảng đó, nghĩa là ngay cả khi giữ 25%, quyết định 26/01/2027 vẫn là một **cổng kỷ luật**, không phải một kết luận thống kê (§7.1).

---

## 11. ĐÃ CẮT — VÀ ĐIỀU KIỆN MỞ LẠI

> Mọi thứ dưới đây từng nằm trong tài liệu này và **đã bị cắt theo mục C của `_rulings.md`**. Ghi ra để không ai "phát hiện lại" chúng như ý tưởng mới. Luật kèm theo (A87/C08): **một khoản cắt chỉ được chi MỘT LẦN** vào `docs/adr/pw-ledger.md`; thứ đã bị cắt mà quay lại thì **mặc định bị cắt lần nữa**.

| # | Thứ bị cắt | Ruling | Nó kéo theo cái gì chết trong tài liệu này | Điều kiện mở lại |
|---|---|---|---|---|
| 1 | **Nút thả tim ẩn danh** (0,20 pw) | S01 / C03 / QĐ-05b | E7 `heart_sent` (số hiệu **25, để trống vĩnh viễn**) · **HM-1** "người vô hình" · **HM-3** "ngày tối tăm → rời" · chỉ số user `tim nhận/tuần` · nhóm phỏng vấn **P4** · trường `hearts_recv_14d` trong event 20 và trong §8 Khối 3 | T13+ **và** nút được mở cho **thành viên trong sổ** (nguồn tim hiện tại là người ngoài nhóm, đo sai thứ) **và** trả lời được câu hỏi "bảng xếp hạng ngầm theo người" mà `08` §6.2 cảnh báo. Vì đã bị bán 3 lần, khoản 0,2 pw này **không còn là tiền**, chỉ là một khoản cắt |
| 2 | **Nút "Nghỉ 7 ngày"** (UI, +0,10 pw) | S06 / C34 / QĐ-23 | Tín hiệu `member_paused` — thứ **duy nhất** phân biệt được "bận" với "bị đẩy ra" ⇒ **HM-4 mãi mơ hồ**, mọi cờ HM-4 phải giải bằng một cuộc gọi, ăn vào trần 10 giờ/tuần | **GIỮ cột `membership.paused_until`** trong schema từ migration đầu (chi phí 0 — A50). Mở UI ở **T13+ nếu HM-4 vượt 20%**. Khoản trả bù "Tết freeze" **KHÔNG còn hợp lệ** (đã bị `07` tiêu) — phải tìm khoản cắt khác |
| 3 | **UI dashboard** (mục §8 nở từ 0,5 pw) | S08 | 4 khối của §8 xuống còn **đặc tả 6 truy vấn SQL chạy tay (0,10 pw) + một Google Sheet**. 9 HM còn **7**. 5 nhóm phỏng vấn còn **4** | Sau beta, và chỉ khi số sổ vượt mức đọc tay khả thi (>35 sổ sống — A92). Trần pháp lý 60 sổ (A93) khiến điều kiện này gần như không đến trong 12 tháng đầu |
| 4 | **Android web push** (+0,3 pw) | S09 | Nhánh "40–60% ⇒ ship web push" của GT-02 và vế "ưu tiên Android web push" ở §6 tuần 8 **mất tư cách khoản đã ngân sách** | Chỉ mở khi **H1 rơi vùng xám** (v2 §6 mục 3) **VÀ** buổi 04/09 chứng minh **Service Worker đăng ký được trong webview Zalo** — `03` §9 B4 cho rằng nhiều khả năng là không, tức phương án dự phòng này **có thể không tồn tại** |
| 5 | **Giả thuyết GT-12 (đa sổ / vòng lan truyền)** | S02 / A101 | Chỉ số `đa sổ hạt giống` ở §2 và GT-12 ở §5 — cả hai đo một thứ mà MVP-0 **cấm bằng thiết kế** (1 sổ/thiết bị) | v1.1, cùng trần 3 sổ/thiết bị (hằng số đã đặt trước, **chưa có hiệu lực**) |
| 6 | **Danh mục event riêng của `06`** (14 event E1–E14) | C10 / C02 / A51 | Bảng E1–E14 và các bộ cột `day_rolled` tự khai ⇒ còn lại **bảng ánh xạ E→số hiệu** trỏ `04` §7.1 (**32 event**) | Không mở lại. Danh mục event là chủ quyền của `04`; `06` chỉ định nghĩa **metric**, không định nghĩa **schema** |

**Một khoản GIỮ, ghi ra để không bị cắt nhầm:** `pulse_survey` (+0,05 pw, S25) — sau khi HM-1/HM-3 chết, đây là kênh **duy nhất** còn nghe được người **đang ở lại** mà mệt. Đối trừ bằng nút thả tim đã cắt. Và **shortlink 112 link** (S18) — ngoại lệ có điều kiện, không phải tiền lệ cho code trong Bước 0.

---

## 12. BẤT ĐỒNG VỚI PHÁN QUYẾT

> Theo quy tắc hiệu lực của `_rulings.md`: tài liệu này **đã sửa theo phán quyết**, và ghi bất đồng ở đây thay vì cãi trong nội dung. Hai điểm.

**BĐ-P1 — `n ≥ 24` (A25) làm cổng `sổ-D28` mất gần hết sức phân biệt, và phán quyết biết điều đó nhưng vẫn chọn.**
Ở n=24, KTC 95% quanh 33,3% là **18,0%–53,3%**. Cả ngưỡng DỪNG (25%) lẫn ngưỡng TĂNG TỐC (35%) **đều nằm trong khoảng này** — nghĩa là cùng một sự thật ngầm có thể cho ra cả hai quyết định trái ngược tuỳ may rủi. Tài liệu này **vẫn thi hành** A25, vì lập luận của phán quyết đúng (giữ ≥30 thì cổng không bao giờ mở được ở kịch bản cơ sở, tức thà đo thô còn hơn không đo). Nhưng ghi lại một hệ quả mà phán quyết không nói: **quyết định 26/01/2027 nên được viết như một quyết định của founder có số làm nền, không phải một kết luận do số ép ra.** Nếu kết quả rơi vào 25–35% (vùng xám), luật 1 của §6 — chạy lại cohort mới — là đường duy nhất, và CH-7 giới hạn việc lặp lại ở **2 lần**.

**BĐ-P2 — Bộ chỉ số tác hại sau khi cắt nút thả tim là bộ chỉ số của một sản phẩm khác, và cái giá đó lớn hơn 0,2 pw.**
Phán quyết C03 cắt nút thả tim với lý do "ba tài liệu độc lập chọn nó làm ứng viên cắt" và ghi hệ quả là "mất khả năng phát hiện LOẠI TRỪ". Tài liệu này **đồng ý cắt** (lý do thứ hai của C03 — tim từ người ngoài nhóm đo sai thứ — là lý do đúng, và nó đứng vững kể cả khi có thừa 0,2 pw). Bất đồng nằm ở **cách ghi sổ**: 0,2 pw được ghi như một khoản **tiết kiệm** ở ba nơi khác nhau trong hồ sơ, trong khi ở tài liệu này nó là một khoản **mất năng lực đo**. Đề nghị `docs/adr/pw-ledger.md` ghi nó thành **hai dòng** — "−0,20 pw scope" **và** "−1 năng lực phát hiện tác hại, không có khoản bù" — để lần sau không ai cộng nó vào cột lợi ích.

---

### Ba thứ trong tài liệu này KHÔNG được thương lượng

1. **`group_alive = ≥3 người nộp ≥1 tấm trong 7 ngày`** (A08) — nới sang ≥2 để qua ngưỡng là hình thức tự lừa mình đã được phản biện #6 dự báo bằng bằng chứng trong chính repo này (r04 §13 vs §64). `duo_alive` (≥2 — A09) **đo song song, CHỈ tham khảo**, không được thay `group_alive` trong bất kỳ quyết định nào.
2. **32 event ở `04` §7.1 phải có trước dòng code đầu tiên** (A51 — không phải "14 event ở §0"; §0 chỉ còn là bảng ánh xạ). Không có phiên bản "thêm sau khi có user". Riêng `monthly_visits` phải đếm session **từ dòng code đầu**, **không backfill được** (A55).
3. **Cổng phi số** (0/8 sổ tự hỏi "mai còn chốt sổ không?" ⇒ DỪNG) đứng trên mọi phần trăm trong tài liệu này.

_Hết._
