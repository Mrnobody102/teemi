# 06 — METRICS, GIẢ THUYẾT KIỂM CHỨNG & KILL CRITERIA
### Sản phẩm: **Chốt Sổ** (`chotso.vn`) · Viết 03/09/2026 · Dựa trên `01-dinh-nghia-san-pham-v2.md`

> ## ⚖️ ĐÃ ĐỐI CHIẾU VỚI BẢNG PHÁN QUYẾT TRỌNG TÀI — 2026-09-03
>
> Toàn bộ tài liệu này đã được rà lại theo **`docs/plan/_rulings.md`** (ban hành 03/09/2026: 53 phán quyết mâu thuẫn, 25 phán quyết scope creep, 123 dòng từ điển giá trị chuẩn).
> - **Mọi hằng số trong tài liệu này lấy từ `_rulings.md` mục A (từ điển giá trị chuẩn).** Khi tài liệu này và `_rulings.md` khác nhau, `_rulings.md` thắng.
> - Chủ quyền của tài liệu này là **ĐỊNH NGHĨA METRIC** (nguyên tắc 2). Nó **không** khai schema (schema nguồn duy nhất: `04` §1 — A32), **không** khai danh mục event (danh mục duy nhất: `04` §7.1, 32 event — A51), **không** đặt chi phí hạ tầng (chủ quyền: `03` — A74).
> - Ký hiệu `[A##]` dưới đây trỏ tới dòng tương ứng trong từ điển giá trị chuẩn.
> - Mục "Đã cắt" ở cuối tài liệu liệt kê mọi thứ đã bị cắt kèm điều kiện mở lại. Mục "Bất đồng với phán quyết" ghi hai chỗ tài liệu này vẫn thấy còn căng.

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
> 1. **E7 `heart_sent` bị CẮT** cùng nút thả tim (QĐ-05b) ⇒ trường `hearts_recv_14d` trong E8 **không tồn tại** ⇒ **HM-1 và HM-3 ở §4.2 phải viết lại** — xem ghi chú tại đó.
> 2. **Ngân sách đã định giá lại: 0,65 pw**, không phải 0,5 pw. Hạng mục 8 của v2 §4.10 cấp 0,5 pw cho ~14 event; 32 event + 2 counter pháp lý không nằm vừa trong đó. Khoản chênh +0,15 pw đã ghi vào `docs/adr/pw-ledger.md` kèm khoản đối trừ.

Phản biện #22 nói đúng một điều mà không có cách gì sửa muộn: **thêm event sau khi đã có dữ liệu = mất toàn bộ lịch sử.**

| # | Event | Payload | Vì sao tồn tại |
|---|---|---|---|
| E1 | `book_created` | `group_id, ts, source` | mẫu số của mọi cohort sổ |
| E2 | `member_joined` | `group_id, member_id, ts, via(link\|code), rank` | `rank` = người thứ mấy vào sổ → funnel hình thành |
| E3 | `proof_submitted` | `group_id, member_id, day_key, ts, label(xong\|toang), is_replace` | biến lõi: `q_c`, `q_x` |
| E4 | `proof_deleted_by_self` | `group_id, member_id, ts, age_minutes` | hối hận sau khi đăng — tín hiệu tác hại rẻ nhất |
| E5 | `card_generated` | `group_id, member_id, day_key, ts` | ai gánh việc chốt sổ |
| E6 | `card_opened` | `group_id, member_id\|null, day_key, ts, delta_minutes` | **H1 sống chết ở đây** |
| ~~E7~~ | ~~`heart_sent`~~ | — | **CẮT (QĐ-05b)** — nút thả tim không có trong MVP-0 |
| E8 | `member_left` → event 20 | `book_id, person_id, ts, days_in, misses_7d, toang_14d, was_removed_by_moderation, kept_proofs` | tách churn-vì-chán khỏi churn-vì-áp-lực. **`hearts_recv_14d` đã bỏ** |
| E9 | `report_created` / `report_resolved` | `group_id, target_type, ts` (+`resolved_ts`) | Report-to-Proof Ratio + hồ sơ tuân thủ |
| E10 | `member_blocked` | `group_id, ts` (**không tên, không id người bị chặn trong analytics**) | chặn trong nhóm bạn thân là tín hiệu nặng |
| E11 | `safety_screen_shown` | `reason_bucket, ts` (**không user_id**) | lấp lỗ quan sát của blocklist client-side |
| E12 | `goal_changed` | `group_id, member_id, ts` | kèo đặt sai → đo được, không phải đoán |
| E13 | `pulse_survey` | `group_id, member_hash, day(14\|28), bucket(vui\|thường\|mệt)` | khảo sát 1 câu, xem §4 |
| E14 | `exit_survey` | `group_id, pressured(bool), free_text?` | Apple 5.1.1(v)-friendly, bỏ qua được |

**Một quyết định kỹ thuật quyết định toàn bộ chất lượng dashboard: một dòng/sổ/ngày, đóng băng.**
[CHỐT 2026-08-28, QĐ-02b] Bảng đó tên là **`book_day`** và schema của nó ở `04` §1.5 — **không phải `day_rolled`, không phải `ngay_so`** (ba tên cho cùng một bảng là lỗi của vòng viết song song). Cron **04:05** (QĐ-21, không phải 04:00) ghi một dòng cho mỗi sổ mỗi ngày. Ánh xạ cột từ ký hiệu của tài liệu này:

```
book_day(book_id, book_date, day_number, active_count /*A*/, roster_size /*mẫu số q_c*/,
         k_required, present_count, xong_count, toang_count, is_full_table,
         is_frozen, day_counts /*counted*/, misses_7d, streak_after,
         proof_total_after, finalized_at)
```
Ba cột của bản cũ **không** nằm trong `book_day` và lấy từ nơi khác: `n_vang` = `roster_size − present_count` (P2: **không tồn tại hàng dữ liệu biểu diễn VẮNG**) · `rest_used_7d` suy ra từ `misses_7d` + `day_counts` · `card_generated_by` = `card.rendered_by` · `card_opens_24h` đếm từ `card_open`.

Không có bảng này, mọi chỉ số cấp sổ phải tính lại từ log mỗi lần xem → định nghĩa trôi, số hôm nay khác số tuần trước, và founder sẽ tin con số đẹp hơn. **Có bảng này, toàn bộ §2 là một câu `SELECT` trên một bảng.** Chi phí: ~0,05 pw, nằm trong 0,5 pw đã cấp.

---

## 1. METRIC BẮC ĐẨU (OMTM)

> # **`sổ-D28` = tỉ lệ sổ, trong cohort mở ra ở tuần W, vẫn `group_alive` (≥3 người nộp ≥1 tấm trong 7 ngày) vào ngày thứ 28.**

Một con số. Cấp sổ. Đo theo cohort tuần. Không cộng dồn, không trung bình trôi.

### Tại sao là nó

1. **Nó là chỉ số duy nhất mà cả bốn kill gate đã viết trong v2 đều trỏ vào.** v2 đã dùng `group-D28 < 25%` cho kill gate founder (31/03/2027) và `group-D28 ≥ 35% trên ≥30 sổ` cho việc mở khoá app native + widget. Chọn OMTM khác nghĩa là dashboard đo một thứ còn quyết định dựa trên một thứ khác — đó là cách founder tự lừa mình miễn phí.
2. **Nó không thể bị làm đẹp bằng feature.** Không có nút nào, không có noti nào, không có copy nào làm một sổ đã tụt xuống 2 người active quay lại 3 người. Ngược lại, DAU có thể tăng chỉ vì founder nhắn tin nhắc.
3. **Nó tự động phạt đúng thứ đáng phạt.** Sổ chết vì chán và sổ chết vì có người bị dập cùng rơi khỏi tử số. §4 tồn tại để **tách** hai loại đó ra, nhưng OMTM không cần phân biệt để làm việc.
4. **28 ngày là đúng khoảng thời gian mà "nghi thức" khác với "trò mới".** Cửa sổ 7 ngày quá dễ (novelty đủ nuôi), 90 ngày quá chậm với founder có 10 tuần build.

### Tại sao KHÔNG chọn DAU

| Lý do | Cụ thể |
|---|---|
| **Sai đơn vị** | DAU không biết 5 người đó thuộc 1 sổ hay 5 sổ. Nhóm là sản phẩm; người là linh kiện. |
| **Che giấu cái chết** | 30 sổ × 5 người, 20 sổ tụt còn 2 người active: DAU giảm từ 80 xuống 60 (−25%, "hơi giảm"), trong khi **67% sổ đã chết** (−67%). Cùng một sự kiện, hai câu chuyện. |
| **Founder bơm được** | Ở 30 sổ beta, một tin nhắn của founder nâng DAU hôm đó lên 20–30%. Không có tin nhắn nào nâng được `sổ-D28`. |
| **DAU đúng ở đây còn tệ hơn DAU sai** | Mục tiêu của sản phẩm là ~40 giây/người/ngày, trong đó 27 giây trong web. DAU cao mà thời lượng cao là **dấu hiệu xấu** (sản phẩm đang ăn thời gian nó hứa không ăn). Một OMTM mà "càng cao càng tốt" không đúng thì không dùng làm OMTM. |
| **Ngưỡng pháp lý dùng đơn vị khác** | NĐ 147/2024 đếm **"lượt truy cập/tháng" HOẶC "người dùng thường xuyên/tháng"** (ngưỡng OR), không đếm DAU. Hai counter pháp lý (QĐ-04) đo riêng, không suy ra từ DAU. |

### Cái giá của lựa chọn này, nói thẳng
`sổ-D28` có **độ trễ 28 ngày** và ở beta 30 sổ có **khoảng tin cậy ±17 điểm phần trăm** (Wilson 95%, 10/30 → 19,2%–51,2%). Nó không dùng để lái tuần. Vì vậy nó đi kèm **đúng một chỉ số dẫn hằng tuần**, và chỉ số đó **không phải OMTM**:

> **`sổ-có-nhịp` (proxy tuần) = % sổ đang mở có ≥4/7 ngày `counted = true` trong 7 ngày gần nhất.**
> Ở A=5, q_c=0,53 mô hình cho P(ngày tính)=84,8% ⇒ kỳ vọng ~5,9/7 ngày. Sổ dưới 4/7 đang trượt.

Quy tắc chống tự lừa: **`sổ-có-nhịp` không bao giờ được viết vào một quyết định đi/dừng.** Nó chỉ được dùng để chọn sổ nào gọi điện phỏng vấn tuần này.

---

## 2. BẢNG METRIC CẤP SỔ

Tất cả tính từ `day_rolled` + E2/E3/E8, trừ chỗ ghi khác. `t` = ngày hiện tại, `g` = sổ.

| Metric | Định nghĩa toán học | Tính từ event | Xấu (DỪNG) | Trung bình | Tốt | Tần suất |
|---|---|---|---|---|---|---|
| **`A(g,t)` — Active** | `\|{m : ∃ E3(m,g,d), d ∈ [t−6, t]}\|` | E3 | ≤2 | 3 | ≥4 | ngày (trong `day_rolled`) |
| **`group_alive(g,t)`** | `A(g,t) ≥ 3` | E3 | — | — | — | ngày |
| **`sổ-D7`** | `\|{g ∈ C_W : alive(g, t_g+7)}\| / \|C_W\|`, `C_W` = cohort sổ có E1 trong tuần W | E1+E3 | **<40%** | 40–60% | **>60%** | tuần (theo cohort) |
| **`sổ-D14`** | như trên, ngày 14 | E1+E3 | **<30%** | 30–45% | **>45%** | tuần |
| **`sổ-D28` (OMTM)** | như trên, ngày 28 | E1+E3 | **<25%** | 25–35% | **≥35%** | tuần |
| **`sổ tụt <3` (hazard)** | `\|{g : A(g,t) < 3}\| / \|{g đang mở}\|`, tích luỹ | E3 | >50% ở D14 | 30–50% | <30% | tuần |
| **`Δ A` — trượt biên** | `% sổ có A(g,t) ≤ A(g,t−14) − 1` | E3 | >45% | 25–45% | <25% | 2 tuần |
| **`tỉ lệ ngày tính`** | `Σ counted / (7 × số sổ)` trong 7 ngày | `day_rolled.counted` | <0,55 | 0,55–0,75 | >0,75 | tuần |
| **`ngày ≥3 người`** | `Σ 1[n_xong+n_toang ≥ 3] / 7` | `day_rolled` | <0,25 | 0,25–0,45 | >0,45 | tuần |
| **`ngày đủ mâm`** | `Σ 1[n_xong+n_toang = A] / 7` | `day_rolled` | (không có ngưỡng — đây là jackpot) | | | tháng |
| **`q_c` (sổ)** | `(Σ n_xong + n_toang) / (Σ A)` trên cửa sổ | `day_rolled` | **<0,35** | 0,35–0,45 | **≥0,45** | tuần |
| **`q_x` (sổ)** | `Σ n_xong / Σ A` | `day_rolled` | <0,22 | 0,22–0,30 | ≥0,30 | tuần |
| **`chuỗi trung vị`** | median(`streak_after`) trên các sổ đang mở | `day_rolled` | <3 | 3–7 | >7 | tuần |
| **`van tiêu thụ`** | `mean(rest_used_7d)` (tối đa 2) | `day_rolled` | ≥1,8 | 1,2–1,8 | <1,2 | tuần |
| **`card open 24h` (H1)** | `\|{m Active mở card ngày d trong 24h}\| / A(g,d)` | E5+E6 | **<40%** | 40–60% | **≥60%** | tuần |
| **`tỉ lệ tự chốt sổ`** | `% ngày có E5 bởi member ≠ founder` | E5 | <50% | 50–75% | >75% | tuần |
| **`tập trung người chốt`** | `max_m(E5 của m) / Σ E5` trong 14 ngày | E5 | **>0,70** | 0,45–0,70 | <0,45 | 2 tuần |
| **`tỉ lệ TOANG`** | `Σ n_toang / (Σ n_xong + n_toang)` | `day_rolled` | <0,05 **hoặc** >0,45 | 0,05–0,10 / 0,35–0,45 | **0,10–0,35** | tuần |
| **`sổ hình thành 48h`** | `% sổ có ≥3 member nộp ≥1 tấm trong 48h từ E1` | E1+E3 | <35% | 35–55% | >55% | tuần |
| **`đa sổ hạt giống`** | `% thành viên (không phải người mở) tự mở sổ thứ 2 trong 60 ngày` | E1+E2 | <3% | 3–8% | >8% | tháng |

### Ba ghi chú không được bỏ qua khi đọc bảng này

**(a) Ngưỡng `sổ-D7 < 40%` NGHIÊM hơn r04.** r04 §64 đặt Group-D7 "chết <30%, OK 40–50%" nhưng định nghĩa của r04 là **≥2 người nộp proof**. Ở đây định nghĩa là **≥3**. Cùng một sổ có thể pass ngưỡng r04 và fail ngưỡng này. Đó là chủ ý: ADR-000 đã chốt `group_alive = ≥3` và `duo_alive = ≥2` **đo song song nhưng không được thay thế**. Nếu đến tháng thứ 3 founder thấy mình đang trích dẫn `duo_alive` trong một quyết định, đó là dấu hiệu định nghĩa đã bị nới để qua ngưỡng — chính lỗi mà phản biện #6 dự đoán.

**(b) Ngưỡng `tỉ lệ TOANG` có hai đầu, và đầu thấp mới là đầu nguy hiểm.** TOANG < 5% có **hai** cách giải thích ngược nhau: mọi người đang thắng thật (tốt) hoặc **nhãn TOANG đang bị coi là nhục nên không ai dám bấm** (rất xấu — đây là §9 mục 10 của v2). Con số không tự phân biệt được. Cách phân biệt duy nhất: đối chiếu với `q_x`. Nếu `TOANG < 5%` **và** `q_x ≥ 0,45` → mọi người thắng thật. Nếu `TOANG < 5%` **và** `q_x < 0,30` → người ta đang chọn **VẮNG thay vì TOANG**, tức nhãn đang gây nhục. Ngưỡng cảnh báo cứng: `TOANG < 0,05 AND q_x < 0,30` ⇒ đọc tay toàn bộ sổ đó trong tuần.

**(c) `tập trung người chốt > 0,70` là chỉ số rủi ro cấu trúc số 1 của cả hướng này.** v2 đã tách chốt-sổ khỏi cơ chế tính ngày (P11), nên điểm chết đơn này chỉ giết kênh phân phối chứ không giết cơ chế. Nhưng nếu 1 người tạo >70% số card trong 14 ngày, sổ đó thực chất đang sống nhờ một người — và khi người đó bận thi, sổ tắt. Can thiệp có sẵn, 0 pw: dòng "mai tới lượt Linh" trên card đã tồn tại; nếu chỉ số vẫn >0,70 sau 2 tuần thì vấn đề không nằm ở copy.

---

## 3. METRIC CẤP USER & FUNNEL

Cấp user tồn tại để **giải thích** cấp sổ, không bao giờ để **thay thế** nó. Chỉ 6 chỉ số:

| Metric | Định nghĩa | Ngưỡng xấu | Tốt |
|---|---|---|---|
| `q_c(m)` cá nhân | ngày có mặt / ngày Active | <0,30 | ≥0,55 |
| `time-to-first-proof` | E2 → E3 đầu tiên | >24h | <2h |
| `ngày VẮNG liên tiếp` | chuỗi ngày không nộp mà chưa rời | ≥5 (cờ đỏ, xem §4) | ≤2 |
| `tim nhận/tuần` | count E7 target = m | 0 trong 14 ngày (cờ đỏ) | ≥3 |
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

**Đọc cho đúng:** con số "29 lượt cài → 1 nhóm sống" trong phản biện #5 thực chất là **29 lượt cài → 1 nhóm HÌNH THÀNH**. Nếu áp cùng tỉ lệ sống sót 20% lên nó, app-based cần ~145 lượt cài cho 1 nhóm **sống**. Chốt Sổ cần ~50 lượt mở link. Lợi thế thật là **~2,9× ở tử số, cộng với việc mỗi đơn vị top-of-funnel rẻ hơn nhiều lần** (một lượt mở link ≠ một lượt cài về chi phí xã hội lẫn chi phí tiền). Nhưng con số **50 lượt mở link cho 1 sổ sống** vẫn phải dán lên tường — nó nói rằng ở beta 30 sổ, founder cần chạm được ~1.500 lượt mở link, và không có kênh nào ngoài tay founder đang cung cấp con số đó. [suy luận, chuỗi nhân — mọi tham số đều là GUESS/suy luận, **cần đo lại ở Bước 0 và beta**]

---

## 4. METRIC PHÁT HIỆN TÁC HẠI

### 4.1. Thừa nhận trước, thiết kế sau

Phản biện #22 đề xuất bộ metric tác hại xoay quanh `roast_received` và **max_share của roast**. **Bộ đó không chạy được trên Chốt Sổ.** Cà khịa xảy ra trong Zalo: không log được, không đếm được, không can thiệp được (§9 mục 8 của v2 đã ghi nhận đúng chuyện này nhưng không rút ra hệ quả đo lường).

Cho nên bộ metric dưới đây được thiết kế lại quanh một câu hỏi khác:

> Khi không nhìn thấy được sự công kích, ta nhìn thấy **cái bóng** của nó: **sự vắng mặt của phản hồi tích cực**, **sự im lặng kéo dài**, và **hành vi rút lui**.

Cụ thể: bề mặt reaction duy nhất bên trong sản phẩm là **nút thả tim ẩn danh** (E7). Tác hại vì vậy **không** hiện ra dưới dạng "một người nhận quá nhiều tim tiêu cực" — nó hiện ra dưới dạng **một người nhận quá ít tim trong khi cả sổ vẫn nhộn nhịp**. Đó là chỉ số loại trừ, không phải chỉ số bắt nạt. Nó yếu hơn, và phải nói thẳng là yếu hơn.

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

### 4.3. Khảo sát một câu — `pulse_survey` (E13)

Bổ sung so với v2 (v2 chỉ có exit survey, tức **chỉ nghe được người đã bỏ đi**).

- **Khi nào:** đúng **hai lần** trong đời một thành viên — ngày 14 và ngày 28 kể từ E2. Hiện trong màn **Của tôi**, không chặn luồng nào, bỏ qua được.
- **Câu hỏi, nguyên văn:** _"Tuần này ở trong sổ này, mày thấy sao?"_ → **😄 vui · 😐 thường · 😮‍💨 mệt**
- **Vì sao ba lựa chọn, không phải thang 1–5:** ở n = 30 sổ, mọi thang Likert đều cho trung bình 3,4 và không hành động được. Ba nhãn cho một phân bố đọc được bằng mắt.
- **Ngưỡng:** bất kỳ ai chọn **"mệt"** ⇒ founder đọc tay sổ đó tuần này. **≥15% "mệt" toàn cohort** ⇒ đóng băng mọi feature, chạy §7 (phỏng vấn) trước khi viết thêm dòng code nào.
- **Chi phí:** 1 bảng 4 cột + 1 component 3 nút ≈ **0,05 pw**. [CHỐT 2026-08-28, QĐ-05b] `pulse_survey` chuyển từ "bổ sung" thành **BẮT BUỘC**: sau khi HM-1/HM-3 bị bỏ, nó là kênh **duy nhất** còn nghe được người đang ở lại mà mệt. Nó là **event 30** trong danh mục hợp nhất (`04` §7.1). Lịch bắn: **ngày 7 và ngày 21** kể từ khi vào sổ (không phải 14/28 — ngày 28 thì phần lớn cohort đã rụng, theo chính bảng `sổ-D28` của tài liệu này).

### 4.4. Ba giới hạn phải nói ra, không được giấu trong footnote

1. **Bộ này không phát hiện được bắt nạt.** Nó phát hiện được **loại trừ** và **rút lui**. Cà khịa độc hại trong Zalo vẫn hoàn toàn vô hình. Không có ngân sách nào trong 6,5 pw sửa được điều này, và giả vờ ngược lại là tự lừa.
2. **Ở beta 30 sổ, gần như mọi ngưỡng trong bảng đều có mẫu số một chữ số.** Vì vậy **luật vận hành ở beta là: đọc tay 100% mọi E8, E9, E10, E13-"mệt", E14.** Với ~30 sổ và ~10 phút/sổ/tuần (đúng ngân sách 5 giờ/tuần ở §9 v2), việc này khả thi. Ngưỡng trong bảng chỉ có hiệu lực từ **≥100 sổ** trở lên.
3. **Không chốt ngưỡng trước khi có phân bố** — đúng như phản biện #22 cảnh báo về con số "8%". Mọi ngưỡng trong bảng trên là **[ước lượng, cần hiệu chỉnh lại sau 3 tháng có dữ liệu thật]**, trừ HM-6 (đọc tay 100%, không có ngưỡng) và HM-9 (đếm thô).

---

## 5. BẢNG GIẢ THUYẾT — 14 GIẢ THUYẾT, XẾP THEO MỨC ĐỘ CHẾT

Xếp theo: **nếu giả thuyết SAI thì dự án chết** (GT-01…) → **nếu SAI thì phải đổi hướng** → **nếu SAI thì mất tiền/thời gian**.

| # | Giả thuyết | Phát biểu kiểm chứng được (có số) | Cách đo | Mẫu tối thiểu | Thời gian | Nếu SAI |
|---|---|---|---|---|---|---|
| **GT-01** ☠️☠️☠️ | **Nghi thức có nhịp thật, không phải founder đẩy** (= H2 của v2) | Trong cửa sổ im lặng (ngày 8, 11, 14 — founder không nói gì): `q_c ≥ 0,45` **và** `q_x ≥ 0,30` **và** ≥3/5 sổ nhánh A giữ chuỗi ≥5 ngày | `day_rolled` chỉ 3 ngày đó; mẫu số = thành viên Active | 5 sổ × 3 ngày ≈ 60 người-ngày Active | Bước 0, ngày 15/18/21 (08–21/09) | `q_c < 0,35` ⇒ **DỪNG toàn bộ hướng nộp-ảnh-mỗi-ngày.** Tiết kiệm 6,5 pw. 0,35–0,45 ⇒ chạy lại cohort mới 14 ngày, **cấm thêm feature** |
| **GT-02** ☠️☠️☠️ | **Card trong nhóm Zalo thay được push riêng** (= H1) | ≥60% thành viên Active mở card trong 24h, trung bình các sổ, tuần 2 | E5 → E6 với `day_key`; ở Bước 0 đo tay bằng "ai rep/thả cảm xúc vào card trong Zalo" | 8 sổ × 14 ngày | Bước 0 → lặp lại tuần 2 của beta | <40% ⇒ **DỪNG**, không patch. 40–60% ⇒ ship Android web push (+0,3 pw), đo lại 7 ngày, **không thêm feature nào khác** |
| **GT-03** ☠️☠️☠️ | **Sổ giữ được ≥3 người Active tới D28** | `sổ-D28 ≥ 25%` trên cohort ≥30 sổ | E1+E3, cohort theo tuần | 30 sổ (CI ±17đ — xem §7) | tuần 24 của beta | <25% ⇒ trùng kill gate founder 31/03/2027. Không có phiên bản "gia hạn" |
| **GT-04** ☠️☠️ | **Người thứ 2–3 vào được mà không cài app** | `P(sổ hình thành từ 6 lời mời) ≥ 15%`, tức `p/người mời ≥ 0,12` (mô hình dự báo 0,142) | E2.`rank` / số lời mời gửi (đo tay ở Bước 0, đo bằng `card_opened` unique ở beta) | 20 sổ khởi tạo | tuần 4 beta | p < 0,08 ⇒ lợi thế "không cài app" không tồn tại trên thực tế ⇒ xem lại toàn bộ lý do chọn hướng D |
| **GT-05** ☠️☠️ | **Kèo tạo giá trị, không phải thuế** (= H3) | `q_c(nhánh A có kèo) ≥ q_c(nhánh B không kèo) − 5 điểm` trong cửa sổ im lặng | 5 sổ A vs 3 sổ B, đo tay | 8 sổ (**chỉ đủ cho dấu, không đủ cho ý nghĩa** — §7) | Bước 0 | B hơn A ≥10 điểm ⇒ **BỎ KÈO**, sản phẩm thành "Locket trong nhóm Zalo". Đây là kết luận hợp lệ, tiết kiệm ~1,0 pw + rủi ro Điều 38.2 |
| **GT-06** ☠️☠️ | **Zalo không chặn/cảnh báo domain `chotso.vn`** | 3/3 tài khoản test dán link vào nhóm mà **không** hiện màn "Link này có thể không an toàn"; và ở beta: `% card_opened / card_generated ≥ 0,5` không sụt đột ngột >30 điểm trong 7 ngày | Test tay 04/09 + monitor E6/E5 hằng ngày | 3 tài khoản (Bước 0); 30 sổ (beta) | 04/09/2026, rồi hằng ngày | Bị chặn ⇒ chuyển sang **mã sổ 6 ký tự gõ tay** (đã có từ ngày 1). Nếu mã tay cho `p` < 0,05 ⇒ hướng này chết. **Đây là rủi ro chết nhanh, rẻ** |
| **GT-07** ☠️☠️ | **Webview Zalo chọn/upload ảnh chạy trên Android tầm trung** | 0 lỗi trên **3 máy thật** (Xiaomi / Oppo / Samsung tầm trung), `% E3 thành công / lượt bấm Gửi ≥ 95%` | Test tay trên máy thật + tỉ lệ lỗi upload ở beta | 3 máy | 04/09/2026 (trước dòng code đầu) | Lỗi trên ≥1 dòng máy phổ biến ⇒ >85% thị trường VN là Android ⇒ phải giải trước khi viết code, không phải sau |
| **GT-08** ☠️ | **TOANG được dùng thật và không bị coi là nhục** | `0,10 ≤ tỉ lệ TOANG ≤ 0,35` **và** không có sổ nào có `độ lệch TOANG > 0,60` | `day_rolled` + HM-8 | 8 sổ × 14 ngày | Bước 0, rồi tuần 4 beta | TOANG <0,05 kèm `q_x` <0,30 ⇒ nhãn đang gây nhục ⇒ đổi từ nhãn nhị phân sang "đã có mặt" không phân loại (0,1 pw). >0,45 ⇒ kèo đặt quá khó hoặc kèo vô nghĩa ⇒ sửa preset |
| **GT-09** ☠️ | **Chốt sổ không phải điểm chết đơn** | `tập trung người chốt ≤ 0,70` trên 14 ngày **và** `tỉ lệ tự chốt sổ ≥ 50%` (không phải founder) | E5 | 8 sổ | Bước 0 (đo tay: ai nhắc?) | >0,70 ⇒ dòng "mai tới lượt Linh" không đủ ⇒ cân nhắc mở mục 3 §6 v2 (Android web push cho **riêng người tới lượt**, không phải cho cả sổ) |
| **GT-10** ☠️ | **Sản phẩm không tạo ra người bị dập** | `im lặng rồi rời` ≤35% · 0 sổ có "người vô hình" kéo dài >14 ngày · <15% chọn "mệt" ở pulse survey · 0 report chưa xử lý quá 48h | HM-1…HM-9 + E13 | đọc tay 100% ở beta | liên tục | Vượt bất kỳ ngưỡng nào ⇒ **đóng băng feature**, phỏng vấn trước. Đây là loại kill gate không có "vùng xám" |
| **GT-11** | **Van 2 ngày nghỉ đủ, không cần cơ chế "gánh"** | `van tiêu thụ trung bình < 1,4/2` **và** <35% ngày hụt là loại "chỉ 1 người có mặt" | `day_rolled.rest_used_7d` + phân bố `n_xong+n_toang` | 8 sổ × 14 ngày | Bước 0 | van ≥1,8 ⇒ `q_c` thật thấp hơn báo cáo. Nếu phần lớn ngày hụt là "đúng 1 người có mặt" ⇒ mở mục 17 §6 v2 (cơ chế "gánh", +0,2 pw) |
| **GT-12** | **Sổ thứ 2 là vòng lan truyền thật** | ≥5% thành viên (không phải người mở sổ đầu) tự mở sổ thứ 2 trong 60 ngày | E1 + E2 (`rank > 1` ở sổ cũ, `rank = 1` ở sổ mới) | 30 sổ × 60 ngày | tuần 24 | <3% ⇒ mục 14 §6 v2 (đa sổ ở v1.1) không đáng 0,3 pw. Cột `group_id` vẫn giữ (chi phí 0) |
| **GT-13** | **Trần doanh thu tính bằng quảng cáo khác trần tính bằng IAP** | eCPM thật của tệp VN × impression khả dĩ ≠ 2,6 tỷ VND/năm ở 1 triệu MAU, sai khác >±30% | Việc bàn giấy 3 giờ (§10b v2), nguồn eCPM VN **cần kiểm chứng** | — | 06/09/2026 | Nếu trần quảng cáo cũng <3 tỷ VND/năm ⇒ xác nhận đây là **small profitable business hoặc portfolio piece**, và founder phải nói ra điều đó bằng miệng trước 22/09 |
| **GT-14** | **Founder giữ được ≤10 giờ/tuần** | Số giờ ghi tay mỗi tuần vào cùng một Sheet, ≤10 giờ | tự ghi, 1 dòng/tuần | 1 người | mỗi tuần, vĩnh viễn | >10 giờ trong 3 tuần liên tiếp ⇒ **giảm số sổ beta**, không giảm giấc ngủ. >15 giờ/tuần vào 31/03/2027 ⇒ kill gate founder |

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
| **Tuần 2** | 22/09/2026 | GT-01 (`q_c_roster`, `q_x_roster` cửa sổ im lặng) + GT-05 + **cổng phi số** | `q_c_roster < 0,35` · **hoặc 0/8 sổ tự hỏi "mai còn chốt sổ không?"** · hoặc <4/8 sổ còn ≥3 người ngày 14 · **hoặc H1 click-shortlink <40%** | `q_c_roster ≥ 0,45` và `q_x_roster ≥ 0,30` và **≥60% sổ nhánh A đạt ≥9/14 ngày tính** (QĐ-06, thay cho "≥3/5 sổ giữ chuỗi ≥5") | `q_c_roster ≥ 0,55` và ≥6/8 sổ tự hỏi ⇒ rút ngắn build bằng cách cắt màn 6 (Của tôi) xuống mức tối thiểu, ship sớm |
| **Tuần 4** | 05/10/2026 | Kỷ luật scope (không có user) | Tổng pw trong backlog **>6,5** · hoặc slot màn 8 đã bị lấp mà Bước 0 không chứng minh nó bắt buộc | Backlog ≤6,5 pw, 0 hạng mục thêm không kèm hạng mục cắt | — |
| **Tuần 8** | 02/11/2026 | Tiến độ build vs lịch | Hoàn thành <45% số hạng mục §4.10 (tức <2,9/6,5 pw) ⇒ **cắt scope ngay, không dời lịch** | ≥55% (3,6/6,5 pw) | ≥75% ⇒ được phép mở **1** hạng mục từ §6 v2, ưu tiên Android web push |
| **Tuần 12** | **30/11/2026** | Sẵn sàng beta — **tiêu chí phải quan sát được ĐÚNG NGÀY 30/11** [CHỐT 2026-08-28] | **≥10 sổ chưa ghi danh** vào 30/11 · hoặc feature freeze chưa xảy ra ⇒ dừng build, ship thứ đang có | **≥10 sổ đã ghi danh và feature freeze đã xảy ra** vào 30/11 | ≥20 sổ đã ghi danh chờ |
| **Tuần 14** | **15/12/2026** | Trần cứng beta (v2 §4.10) | **Beta chưa chạy vào 15/12/2026 ⇒ DỪNG BUILD, ship thứ đang có, không gia hạn** | Beta đã chạy từ 02/12 với ≥12 sổ | — |
| **Tuần 18** | 11/01/2027 | `sổ-D14`, GT-02, GT-10 | `sổ-D14 < 30%` · hoặc `card open 24h < 40%` · hoặc bất kỳ ngưỡng tác hại nào ở §4.2 bị vượt và không giải thích được | `sổ-D14 ≥ 30%` và `card open ≥ 45%` | `sổ-D14 ≥ 45%` và `card open ≥ 60%` ⇒ mở kênh tuyển sổ thứ hai (TikTok nano, 1 lần) |
| **Tuần 20** | **26/01/2027** [CHỐT 2026-08-28, QĐ-13 — ngày DUY NHẤT của cổng này, thay cho 20/01 ở `09`, 31/01 ở `10`, 22/02 ở bản trước] | **`sổ-D28` (OMTM)** trên **cohort tuần 1–4 của beta (02/12→29/12/2026), n ≥ 24** | **`sổ-D28 < 25%`** | 25–35% | **≥35% trên ≥24 sổ ⇒ mở khoá app native + widget** (mục 2 §6 v2). Điều kiện "≥30 sổ" đã hạ xuống ≥24: dự báo cơ sở của `09` §1.2 chỉ sinh 24 sổ ở 4 tuần đầu và trần vận hành là 35 sổ sống, nên ≥30 nghĩa là **cổng không bao giờ mở được ở kịch bản cơ sở**. Với n=24, KTC 95% là **±17 điểm** — phải in kèm mỗi lần trích dẫn |
| **Tuần 30** | **31/03/2027** [CHỐT 2026-08-28 — bản gốc v2 §9 mục 12, khớp `09` §6 và `10` G3; "30/03" ở bản trước là lỗi chép] | **KILL GATE FOUNDER** | >15 giờ/tuần **và** `sổ-D28 < 25%` ⇒ **DỪNG DỨT KHOÁT trong tuần đó**. **Vế "doanh thu = 0" ĐÃ BỊ BỎ khỏi điều kiện dừng** [QĐ-01]: nếu pháp lý cấm phát sinh doanh thu ở tier Giấy xác nhận thông báo (`05` §0 kết luận 3) thì doanh thu 0 là **hệ quả pháp lý, không phải tín hiệu thị trường** — dùng nó làm tiêu chí là tự lừa mình | ≤10 giờ/tuần **hoặc** `sổ-D28 ≥ 25%` | `sổ-D28 ≥ 35%` và ≤10 giờ/tuần ⇒ đây mới là lúc được nghĩ đến pháp nhân |
| **Liên tục** | mỗi tuần | **Hai counter pháp lý** [CHỐT 2026-08-28, QĐ-04 — thay hoàn toàn con số 700] | `monthly_visits` **≥8.500** HOẶC `monthly_active_persons` **≥850** ⇒ **dừng nhận sổ mới ngay trong ngày** | dưới đèn vàng | `monthly_visits` **≥6.000** HOẶC `monthly_active_persons` **≥600** ⇒ **khởi động hồ sơ Giấy phép MXH**. Ngưỡng NĐ 147/2024 là **OR**, và nhánh `10.000 lượt truy cập/tháng` bind trước ~2,5 lần — con số 700 cũ báo động **muộn 2,5 lần** (`05` §0 kết luận 2) |

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
| 30 sổ, đo `sổ-D28` | 10/30 = 33,3% ⇒ CI **19,2% – 51,2%** (±17 điểm) |
| Muốn đo `sổ-D28` tới ±10 điểm ở p≈0,30 | cần **≈81 sổ**. Beta 30 sổ **không bao giờ** cho con số đó |

> **Hệ quả bắt buộc:** ngưỡng ở §6 là **cổng quyết định**, không phải phép kiểm định. Chúng tồn tại để founder không được phép viết "gần đạt rồi", chứ không phải để chứng minh điều gì. v2 §11 đã cảnh báo đúng chuyện này; đây là phần định lượng của cảnh báo đó.

### 7.2. Bốn phương pháp thay thế được thống kê ở n nhỏ

**(a) Thiết kế trong-sổ (within-group), không phải giữa-sổ.** Đây là phương pháp mạnh nhất còn dùng được. **Cửa sổ im lặng chính là một thí nghiệm within-subject**: mỗi sổ là control của chính nó. So `q_c` ngày 8/11/14 (im lặng) với ngày 7/10/13 (founder có mặt), **theo cặp**, trên 8 sổ. Sign test: cần 7/8 sổ cùng chiều để nói được điều gì. Sức mạnh của thiết kế này cao hơn hẳn so A-vs-B giữa 5 sổ và 3 sổ, vì nó khử toàn bộ khác biệt giữa các nhóm bạn.

**(b) Đọc tay 100%.** Ở ≤30 sổ, mọi E8 (rời), E9 (report), E10 (chặn), E13-"mệt" đều được founder đọc từng cái. Không lấy mẫu, không tổng hợp. **Với 30 sổ × 10 phút/tuần = 5 giờ/tuần**, đúng bằng ngân sách §9 v2. Đây không phải giải pháp tạm — ở quy mô này nó **chính xác hơn** mọi dashboard.

**(c) Phân tích chuỗi sự kiện của từng cái chết.** Mỗi sổ chết được viết **một đoạn 5 dòng**: ngày mở, ngày A tụt xuống 2, ai rời trước, người đó có tim/TOANG bất thường không, có ai hỏi gì trong Zalo không. Sau 15 cái chết, đọc lại toàn bộ 15 đoạn cùng lúc. Đây là cách duy nhất phát hiện **kiểu chết** (mode of death) — thứ mà trung bình cộng xoá sạch. [phương pháp: mortality review, mượn từ y khoa]

**(d) Neo nội bộ thay vì benchmark ngoài.** v2 §11 đã chốt: gọi `group-D14` đo tay ở Bước 0 là **B**; ngưỡng cho beta là `group-D14 ≥ B`. Không dùng Yope D7 = 40% (đó là **user** retention ở đỉnh tăng trưởng — trộn đơn vị). Diễn giải trần trụi: **nếu app không bằng founder ngồi dán card Canva mỗi tối, app không có lý do tồn tại.**

### 7.3. Phỏng vấn ai, khi nào

| Nhóm | Ai | Khi nào | Bao nhiêu |
|---|---|---|---|
| **P1 — Người rời sớm nhất** | thành viên rời trong 14 ngày đầu | trong 72h sau khi rời | 100%, tối đa 8 |
| **P2 — Người im lặng nhưng chưa rời** | có ≥5 ngày VẮNG liên tiếp (HM-4) | ngay khi cờ bật | 100% |
| **P3 — Sổ sống khoẻ nhất** | 2 sổ có `tỉ lệ ngày tính` cao nhất | tuần 4 và tuần 12 của beta | 2 sổ, phỏng vấn **2 người/sổ**, một là người mở sổ, một **không phải** |
| **P4 — "Người vô hình"** | người bị cờ HM-1 | trong tuần cờ bật | 100% |
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

**Đúng một trang. Xem đúng một lần mỗi tuần, thứ Hai, 12 phút. Không có bản hằng ngày.** Lý do có giới hạn thời gian: dashboard xem hằng ngày ở n=30 sổ chỉ tạo ra nhiễu và lo lắng, và nó ăn vào trần 10 giờ/tuần.

### Khối 1 — Ba dòng, không hơn (2 phút)

| | Tuần này | Tuần trước | Ngưỡng |
|---|---|---|---|
| **`sổ-D28`** (cohort đã đủ 28 ngày) | | | DỪNG <25% · TĂNG TỐC ≥35% |
| **`sổ-có-nhịp`** (≥4/7 ngày tính) | | | chỉ để chọn sổ đi phỏng vấn |
| **Số sổ đang mở / số sổ `group_alive`** | | | |

### Khối 2 — Bảng một dòng mỗi sổ (6 phút)

Mỗi sổ đang mở là **một dòng**, sắp xếp theo `A` tăng dần (sổ yếu nhất lên đầu — đây là thứ tự đúng, không phải theo sổ khoẻ nhất):

`group_id · A · ngày tính 7d · q_c · q_x · chuỗi · van dùng · card open 24h · tỉ lệ TOANG · 🚩`

Cột `🚩` bật khi bất kỳ điều nào đúng: `A ≤ 2` · `van ≥ 1,8` · `card open < 0,4` · có cờ HM-1/HM-4/HM-8 · có E9 chưa `resolved` quá 48h.

### Khối 3 — Hộp tác hại (3 phút, đọc tay 100%)

Danh sách phẳng, không tổng hợp: mọi `member_left`, `report_created`, `member_blocked`, `pulse_survey = mệt`, `exit_survey.pressured = true` trong 7 ngày, kèm 3 trường ngữ cảnh (`days_in`, `misses_7d`, `hearts_recv_14d`). **Danh sách rỗng vẫn phải mở ra nhìn** — mở nó là một phần của nghi thức, không phải một cảnh báo.

### Khối 4 — Ba con số vận hành (1 phút)

`giờ founder tuần này` (tự ghi tay) · **`monthly_visits`** (vàng 6.000 / đỏ 8.500) · **`monthly_active_persons`** (vàng 600 / đỏ 850) · `chi phí hạ tầng tháng` (**báo động >$60**, kỳ vọng **$28–37** ở beta — QĐ-09: Supabase Pro $25 là bắt buộc từ ngày beta chạy vì Free không có backup hằng ngày trong khi sản phẩm hứa giữ thumbnail vĩnh viễn. Ngưỡng cũ "$25 khi kỳ vọng ~$12" sẽ kêu vĩnh viễn ngay từ tháng đầu).

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

| Tiêu chí | ở `q_c = 0,35` (fail) | ở `q_c = 0,45` (đạt) | ở `q_c = 0,53` (thiết kế) |
|---|---|---|---|
| 1 sổ đạt **≥9/14 ngày tính** | 39,9% | 87,7% | 98,8% |
| 1 sổ đạt **≥11/14 ngày tính** | 8,6% | 50,0% | 84,7% |
| **≥3/5 sổ đạt ≥9/14** | **31,6%** | **98,5%** | **100%** |

⇒ **Đề xuất thay thế:** _"≥3/5 sổ nhánh A đạt ≥9/14 ngày tính trong Bước 0."_ Cùng dữ liệu, cùng 0 pw, nhưng tách được kịch bản fail khỏi kịch bản đạt với tỉ số 1 : 3,1 thay vì gần 1 : 1.

### BĐ-3 — H1 **không đo được** ở Bước 0 như cách v2 mô tả

**v2 viết:** H1 = _"≥60% thành viên Active mở card trong 24h"_, đo trong Bước 0 (card làm bằng Canva, dán tay vào Zalo).

**Vấn đề:** một ảnh Canva dán vào Zalo **không có sự kiện "mở"**. Zalo không trả về ai đã xem. Bước 0 vì vậy **không thể sinh ra con số của H1**, trong khi H1 là một trong ba giả thuyết mà quyết định 22/09 phụ thuộc vào.

**Sửa, chi phí ~30 phút, trước 08/09:** mỗi card Bước 0 mang **một shortlink riêng cho từng ngày từng sổ** (`chotso.vn/s/<sổ>/<ngày>` redirect về một trang tĩnh có ảnh lớn + dòng "ngày thứ N"). Đo `unique click / A(g,d)`. Ghi rõ giới hạn: shortlink đo **click**, không đo **xem**; nó là cận dưới. Vì vậy ngưỡng ở Bước 0 phải đọc là _"≥60% **click**"_ — nghiêm hơn ngưỡng "mở", tức nếu pass thì pass thật.
Đo song song, đếm tay, làm số kiểm chứng chéo: **số người rep hoặc thả cảm xúc vào card trong Zalo / A**.

### BĐ-4 — Payload `member_left` của v2 thiếu đúng hai trường làm nên giá trị của nó

**v2 viết** (§8, xử lý #22): `member_left{misses_7d, was_kicked}`.

**Vấn đề:** hai trường đó tách được *rời vì hụt nhiều* khỏi *bị đá*, nhưng **không** tách được *rời vì bị bỏ rơi* — đúng cơ chế tác hại mà #22 mô tả. Thiếu chúng, HM-1/HM-3 không tính được, và **không thể thêm hồi tố** (dữ liệu quá khứ không tồn tại).

**Sửa, chi phí 0 (hai cột trong cùng một `INSERT`):** thêm `hearts_recv_14d` và `toang_14d` vào payload, cộng `days_in`.

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

**Giá trị đo lường thu được:** `member_paused` là **tín hiệu tự khai báo về ý định ở lại** — thứ duy nhất trong toàn bộ hệ thống phân biệt được "bận" với "bị đẩy ra". Nếu tỉ lệ `paused` cao mà `member_left` thấp, sản phẩm đang hoạt động đúng. Nếu người ta bỏ qua nút Nghỉ và im lặng rồi rời (HM-2 > 35%), đó là bằng chứng mạnh cho tác hại — bằng chứng mà **hôm nay không có cách nào thu được**.

**Đã bác, và hệ quả đã được ghi bằng văn bản** ở §4.2 (HM-4 đánh dấu "mơ hồ có chủ ý") và ở `11-nhat-ky-quyet-dinh.md` QĐ-23.

---

## 10. CÂU HỎI MỞ CẦN FOUNDER QUYẾT

Xếp theo hạn chót. Mỗi câu có **hình dạng câu trả lời** yêu cầu — không chấp nhận "để xem sao".

| # | Câu hỏi | Hạn | Vì sao không hoãn được | Dạng câu trả lời cần |
|---|---|---|---|---|
| **CH-1** | **Chấp nhận BĐ-1 (mẫu số đóng băng `q_c_roster`) không?** | **07/09/2026** | Nếu không chốt trước 08/09, Google Sheet Bước 0 sẽ ghi sai cột và **không sửa hồi tố được** | "Có, cột `q_c_roster` là con số so ngưỡng" / "Không, và tôi chấp nhận rủi ro sổ chết vẫn PASS H2" |
| **CH-2** | **Chấp nhận BĐ-3 (shortlink theo ngày cho card Bước 0) không?** | **07/09/2026** | Không có nó thì H1 **không có số** vào ngày 22/09 | "Có, tôi làm 8 sổ × 14 shortlink" / "Không, và H1 chuyển sang chỉ đo bằng đếm tay rep/cảm xúc" |
| **CH-3** | **Đổi tiêu chí H2 từ "chuỗi ≥5" sang "≥9/14 ngày tính" (BĐ-2)?** | **07/09/2026** | Ngưỡng phải viết trước khi có dữ liệu, đúng luật của chính v2 | "Có" / "Không" — không có phương án thứ ba |
| **CH-4** | **Nút "Nghỉ 7 ngày" đổi lấy Tết freeze (BĐ-5)?** | **22/09/2026** (trước dòng code đầu) | Cột `paused_until` phải có trong schema đầu tiên | "Có, ghi vào §4.10" / "Không, và tôi chấp nhận HM-4 mãi mơ hồ" |
| **CH-5** | **`sổ-D28 = 25%` là ngưỡng dừng — nhưng phản biện #6 nói dải thật là 12,5%–19,1%. Nếu beta ra 20%, đó là DỪNG hay là "đúng như mô hình dự báo"?** | **22/09/2026** | Đây là câu hỏi tự-lừa-mình nguy hiểm nhất trong hồ sơ. Trả lời **sau** khi thấy 20% thì câu trả lời sẽ là "đúng như dự báo" | Một câu viết tay, ký tên, dán tường: hoặc _"20% là DỪNG"_ hoặc _"ngưỡng thật của tôi là X%, và tôi đổi 25% thành X ngay hôm nay"_ |
| **CH-6** | **Tham vọng thật là gì: small profitable business, portfolio piece, hay gọi vốn?** | **22/09/2026** | v2 §9 mục 5 đã ghi: nếu xây để gọi vốn/exit thì chiến lược này sai từ ngày 1. Mọi ngưỡng trong tài liệu này được hiệu chỉnh cho phương án 1–2 | Một từ, nói ra miệng trước một người khác |
| **CH-7** | **Khi `sổ-D28` nằm trong 25–35% suốt 8 tuần liên tiếp (vùng xám kéo dài) thì làm gì?** | **tuần 24** | P8 nói "chạy lại cohort mới, cấm thêm feature" — nhưng lặp vô hạn cũng là một cách chết | Đặt **số lần lặp tối đa** hôm nay. Đề xuất: **2 lần**, lần thứ 3 = DỪNG |
| **CH-8** | **Ai là người thứ hai được xem dashboard?** | **trước beta** | Bus factor = 1 áp dụng cho cả việc *đọc số*. Founder một mình sẽ hợp lý hoá mọi con số xấu; đó là lý do kill gate cần một nhân chứng | Một cái tên + lời hứa gửi ảnh chụp dashboard mỗi thứ Hai |
| **CH-9** | **eCPM thật của tệp Gen Z VN là bao nhiêu?** (GT-13) | **06/09/2026** | Trần doanh thu 2,6 tỷ VND/năm đang được tính trên IAP trong khi đối thủ cùng tệp kiếm tiền bằng quảng cáo | Một bảng số, một kết luận. **Cần kiểm chứng — tài liệu này không có con số eCPM đáng tin cho VN** |
| **CH-10** | **Định nghĩa "người dùng thường xuyên/tháng" VÀ "lượt truy cập/tháng" theo NĐ 147/2024 là gì?** | **theo lịch hẹn luật sư** (câu 1b, `05` §11) | `05` §12 mục 2: chênh lệch giữa ba cách hiểu là **hơn 10 lần**, quyết định trần beta là 60 sổ hay 600 sổ. **Định nghĩa tạm dùng cho tới khi có câu trả lời** [CHỐT 2026-08-28, QĐ-24]: `monthly_active_persons` = số `person` khác nhau có ≥1 `proof` trong 30 ngày · `monthly_visits` = số phiên khác nhau (`session_id` mới sau 30 phút không hoạt động) chạm bất kỳ route nào của `chotso.vn`, kể cả trang public. **Đếm rộng, báo động sớm** — sai theo hướng an toàn | Câu trả lời của luật sư, ghi vào ADR-002 |

---

### Ba thứ trong tài liệu này KHÔNG được thương lượng

1. **`group_alive = ≥3 người nộp ≥1 tấm trong 7 ngày`** — nới sang ≥2 để qua ngưỡng là hình thức tự lừa mình đã được phản biện #6 dự báo bằng bằng chứng trong chính repo này (r04 §13 vs §64).
2. **14 event ở §0 phải có trước dòng code đầu tiên.** Không có phiên bản "thêm sau khi có user".
3. **Cổng phi số** (0/8 sổ tự hỏi "mai còn chốt sổ không?" ⇒ DỪNG) đứng trên mọi phần trăm trong tài liệu này.

_Hết._
