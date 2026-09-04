# ROADMAP 12 TUẦN — CHỐT SỔ

> ## 📌 ĐÃ ĐỐI CHIẾU BẢNG PHÁN QUYẾT TRỌNG TÀI — 2026-09-03
>
> Toàn bộ tài liệu này **đã được rà soát và sửa theo** `/home/huypq/teemi/docs/plan/_rulings.md` (bảng phán quyết trọng tài ban hành **03/09/2026**: 53 mâu thuẫn + 25 mục scope creep + 123 dòng từ điển giá trị chuẩn).
>
> **Mọi hằng số trong tài liệu này lấy từ `_rulings.md` mục A (từ điển giá trị chuẩn).** Khi tài liệu này và `_rulings.md` khác nhau, `_rulings.md` thắng. Không được sửa một con số ở đây mà không sửa dòng A tương ứng trước.
>
> Ba thay đổi lớn nhất so với bản trước của chính file này:
> 1. **Beta chạy 02/12/2026, không phải 16/11** (A88). Hai tuần chênh (16/11→29/11) là **đệm rủi ro, KHÔNG phải scope** — dùng nó để thêm tính năng là vi phạm P7.
> 2. **Con số "700 người dùng" bị bác hoàn toàn**, thay bằng **hai counter** báo động sớm hơn ~2,5 lần: `monthly_visits` vàng 6.000/đỏ 8.500 · `monthly_active_persons` vàng 600/đỏ 850 (A54).
> 3. **Mùng 1 Tết Đinh Mùi là 06/02/2027**, không phải 17/02 (đó là Tết Bính Ngọ 2026) — A119. Kết luận cắt Tết freeze khỏi MVP-0 vẫn đứng, nhưng lý do đã viết lại.
>
> Sổ cái pw duy nhất: **`docs/adr/pw-ledger.md`** (A87). File ADR duy nhất: **`docs/adr/ADR-000-bat-bien.md`** (A103) — không còn ADR-001/ADR-002.

_Viết 03/09/2026, sửa theo phán quyết trọng tài 03/09/2026. Bám `01-dinh-nghia-san-pham-v2.md`. Cửa sổ build: **T0 = 03/09–06/09** (việc của §12, coi như tiền đề) rồi **T1 = 07/09/2026 → T12 = 29/11/2026**. **Beta nằm NGOÀI cửa sổ 12 tuần: T13–T14 = 02/12 → 15/12/2026**, đọc `group-D14` ngày **16/12/2026** (A114–A116)._

---

## 0. CON SỐ QUYẾT ĐỊNH TOÀN BỘ TÀI LIỆU NÀY

Brief nói founder làm **~20 giờ/tuần**. v2 §4.10 nói MVP là **6,5 pw** (A83 — đây cũng là **trần backlog cứng**, vượt là kích hoạt kill gate 05/10) và lịch của nó là _"10 tuần lịch cho một người"_, beta 02/12/2026.

Ba phép chia, cùng một định nghĩa **`1 pw = 40 giờ tập trung`** (A80):

| Giả định | Số tuần để hết 6,5 pw |
|---|---|
| 40 h/tuần, hệ số hiệu suất **0,65** `[không có nguồn — A81]` (đúng công thức v2) | **10,0 tuần** ← lịch trong v2 |
| 20 h/tuần, **không** trừ hao gì cả | **13,0 tuần** |
| 20 h/tuần, cùng hệ số 0,65 của v2 → **13 giờ code/tuần** (A82) | **20,0 tuần** |

**Con số chuẩn (A82): 20 h/tuần × 0,65 = 13 giờ code/tuần ⇒ 1 pw ≈ 3,1 tuần lịch ⇒ 6,5 pw ≈ 20 tuần lịch, KHÔNG phải 10.**

**Kết luận không tránh được: lịch trong v2 §4.10 được tính cho một founder toàn thời gian. Ở 20 giờ/tuần, MVP 6,5 pw kết thúc khoảng tuần 20 (giữa tháng 1/2027), không phải 02/12/2026.**

> ⚠️ **Bảng §4.10 của v2 KHÔNG còn là ngân sách pw** (A87). Sổ cái pw duy nhất là **`docs/adr/pw-ledger.md`**, và luật của nó là: **một khoản cắt chỉ được chi MỘT LẦN**. Mọi bảng pw trong tài liệu này là bối cảnh, không phải quyền chi.

Giờ thực sự còn lại để code trong cửa sổ 12 tuần, sau khi trừ vận hành:

| Khối | Giờ |
|---|---|
| Tổng 12 tuần × 20 h | 240 |
| T1–T2: vận hành Bước 0 (v2 §9: ~15 h/tuần) + admin | −40 |
| T3: chốt số liệu, quyết định văn bản, kiểm chứng nền tảng lần 2, ADR | −10 |
| T4–T9: vận hành nền (2 h/tuần) | −12 |
| T10: tuyển 12 sổ beta | −4 |
| T11–T12: đệm rủi ro + chuẩn bị beta (kịch bản trực, checklist, tuyển nốt) + báo cáo, 5 h/tuần | −15 |
| **Còn lại để build trong 12 tuần** | **159 h ≈ 4,0 pw danh nghĩa** |
| _(nằm NGOÀI 240 h trên)_ T13–T14: trực beta 02/12 → 15/12, 5 h/tuần | _−10_ |

> ### ⚠️ BA CON SỐ PHẢI ĐỌC CÙNG NHAU — chúng không bằng nhau và không được làm tròn cho bằng
>
> | | Giờ | pw | Nguồn |
> |---|---|---|---|
> | **Giờ build THẬT có trong 12 tuần** | **159 h** | 4,0 | bảng trừ hao ngay trên |
> | **Trần scope MVP-0 (QĐ-25)** | **140 h** | **3,5 pw** | A84 |
> | **Ước lượng TRUNG THỰC MVP-0 (bảng US chi tiết)** | **183 h** | **4,58 pw** | A85 |
>
> ⇒ **Thiếu 24 giờ (0,6 pw) so với giờ thật có · thiếu 43 giờ (1,08 pw) so với trần.** Cắt đủ 1,08 pw thì lọt cả hai (140 h < 159 h, đệm 19 h ≈ 12%). Đây là **D-01**, hạn quyết **22/09/2026** — khối cảnh báo ở §10.

Nên chỉ có hai lựa chọn, và tài liệu này chọn cái thứ hai:

- **(a) Giữ scope 6,5 pw, dời ngày** → không có người ngoài dùng sản phẩm cho tới ~tuần 20, tức 12 tuần này kết thúc mà chưa học được gì mới sau Bước 0.
- **(b) Giữ ngày, cắt scope** → định nghĩa **MVP-0 = 3,5 pw (140 h, đệm 19 h ≈ 12%)**, người ngoài vào từ **02/12/2026** (A88 — **không phải 16/11**, xem QĐ-25 ngay dưới), 12 tuần kết thúc bằng **cổng sẵn sàng beta 30/11**, và `group-D14` đo trên sổ ngoài đọc được ngày **16/12/2026** (A116).

Đây là bất đồng #1 với v2 và được ghi ở cuối tài liệu.

> ## ✅ [CHỐT 2026-08-28 — QĐ-25] MỘT KẾ HOẠCH BETA DUY NHẤT. Bốn tài liệu từng đưa bốn kế hoạch không tương thích; đây là bản có hiệu lực, ba tài liệu kia trỏ về đây.
>
> Bốn bản cũ: v2 §4.10 (6,5 pw · beta 02/12 · 30 sổ) · `02` §4.3 (3,8 pw · beta 02/12 · 5 sổ) · `07` bản trước (3,5 pw · beta **16/11** · 12 sổ) · `09` §8 (beta 02/12 · 20–30 sổ). Chỉ riêng số sổ đã có năm giá trị: 5 / 8–10 / 12 / 20–30 / 30.
>
> | Tham số | **CHỐT** | Vì sao chọn con số này |
> |---|---|---|
> | **Scope MVP-0** | **3,5 pw** | Con số **thận trọng hơn** trong hai (3,5 của `07` vs 3,8 của `02`). `02` §3.2 và `07` §0 **độc lập** chứng minh lịch không lọt ngay cả khi không thêm gì — nên khi hai bản cắt bất đồng, lấy bản cắt sâu hơn |
> | **Ngày beta** | **02/12/2026** | Bốn tài liệu (v2, `02`, `09`, `10`) dùng ngày này; chỉ `07` dùng 16/11. Quan trọng hơn số phiếu: **cohort quyết định của `sổ-D28` (QĐ-13) neo vào 02/12**, và đổi ngày beta là đổi cả cổng mở khoá widget |
> | **Hai tuần chênh (16/11 → 02/12)** | **ĐỆM RỦI RO, KHÔNG PHẢI SCOPE** | Đây là điểm quan trọng nhất của quyết định này. Bản trước dùng ngày sớm để lấy thêm 2 tuần đo; bản này dùng 2 tuần đó để **hấp thụ cạm bẫy** — `02` §3.1 liệt kê 8 cạm bẫy, mỗi cái +2 đến +3 pd. Nếu 1/3 số đó sập, 2 tuần này biến mất và beta vẫn chạy 02/12. **Không được dùng 2 tuần này để thêm tính năng.** Vi phạm luật này là vi phạm P7 |
> | **Trần cứng** | **15/12/2026** | Nguyên văn v2 §4.10. Beta chưa chạy vào ngày này ⇒ ship thứ đang có, không gia hạn (`06` §6 mốc "Tuần 14") |
> | **Số sổ đợt 1** | **12 sổ** (02/12 → 29/12/2026) | Đây là **cohort quyết định** của `sổ-D28`, đọc 26/01/2027 (QĐ-13) |
> | **Số sổ tối đa đợt 2** | **≤30 sổ**, mở dần từ tuần 15 | Trần vận hành `09` §2.2 là 35 sổ sống ở 8,4 phút/sổ/tuần |
> | **Trần cứng hành chính** | **60 sổ**, không nới bằng cách hỏi lại | Đèn vàng pháp lý (`05` §10, QĐ-04/QĐ-10). 60 sổ an toàn dưới đèn đỏ ở cả A=4 lẫn A=5 |
> | **Danh sách cắt** | **Bảng MVP-0 ngay dưới đây**, có sửa 1 dòng | Lấy khung hạng mục của `07` (nó phân rã theo §4.10 của v2, tức đối chiếu được với trần cứng), **đối chiếu** với bảng US của `02` (nó là tài liệu duy nhất tính pd theo từng user story và chỉ rõ hạng mục nào giết phép đo nào) |
>
> **Một dòng bị sửa so với cả hai bản cắt: TRANG PUBLIC ĐƯỢC GIỮ.** `02` §4.3 cắt trang public và **tự cảnh báo rằng cắt nó thì M2 không đo được** — M2 ("≥1 sổ mở mới không do founder tuyển") là **một trong đúng hai tiêu chí thành công của MVP** (`02` §1.3). Cắt bề mặt phân phối duy nhất rồi đo phân phối là tự vô hiệu hoá thí nghiệm. Giữ trang public (trạng thái xem, OG preview tĩnh), **cắt nút thả tim** trên đó (QĐ-05b).
>
> ### Bảng ánh xạ US (`02` §2) ↔ hạng mục §4.10 (v2) ↔ MVP-0 — thứ mà không tài liệu nào có
>
> | US | Hạng mục §4.10 | pd gốc | Trong MVP-0? | Ghi chú |
> |---|---|---|---|---|
> | US-00 | 1 | 3,0 | ✅ 2,5 | Bỏ UI quản trị config |
> | US-01, US-02 | 1 | 3,0 | ✅ 2,5 | Mã 6 ký tự dùng **bảng chữ 28 ký tự** (QĐ-12) |
> | US-03 | 4 | 1,0 | ✅ 1,0 | 8 preset + ô tự viết, không lưu `preset_id` |
> | US-04 | 2 | 2,5 | ✅ 2,0 | Cắt lưới 30 ngày (US-07) và thả tim |
> | US-05, US-06 | 3 | 3,8 | ✅ 3,8 | **Không cắt gì.** Màn duy nhất không bỏ được |
> | US-07 (lưới 30 ngày) | 2 | 1,5 | ❌ T13+ | Khoản cắt lớn nhất. Giao của cả hai bản cắt |
> | US-08, US-09 | 5 | 3,5 | ✅ 2,0 | Một layout card duy nhất; cắt biến thể đủ mâm + mốc sổ (US-13) |
> | US-10 (trang public) | 5 | 1,2 | ⚠️ **0,6 — GIỮ, cắt nút tim** | **Khác cả `02` lẫn bản cắt cũ.** Giữ vì M2 |
> | US-11, US-12 | 7 | 2,0 | ✅ 1,25 | Cắt Tết freeze sang T13 (hạn 25/01/2027). `k` dùng **`A_eff = min(A(D), A(D−1))`** (QĐ-14b) |
> | US-13 | 5 | 0,5 | ❌ T13+ | |
> | US-14 | 5 | 0,2 | ✅ 0,2 | Dòng chân card, rẻ và là cơ chế xoay vòng |
> | US-15 (Của tôi) | 6 | 1,5 | ❌ 0,0 | Hai nút bắt buộc (rời sổ, xoá dữ liệu) chuyển sang hạng mục 9 |
> | US-16, US-17, US-18 | 9 | 2,3 | ✅ 2,3 | **Không cắt.** Chặn người ngoài vào. Thêm: auto-hide toàn cục (QĐ-16), SLA kép (QĐ-17) |
> | US-19 | 9 | 0,7 | ✅ 0,7 | R2 lifecycle 72h |
> | US-20 (dashboard) | 8 | 2,5 | ⚠️ **0,65** | Event + cột vào schema từ commit đầu (**32 event**, QĐ-02, không backfill được). Dashboard = 6 truy vấn SQL chạy tay |
> | US-21 | 1 | 0,5 | ✅ 0,3 | `remote_config`, không UI |
> | US-22 | 10 | 1,0 | ✅ 1,0 | **Không cắt.** P1/P2/P3 |
> | US-23 (đo H1) | 8 | 0,8 | ✅ 0,8 | `card_opened` thật. Đây là thứ làm ngưỡng H1 ≥60% có hiệu lực từ tuần 2 beta |
> | US-24 | 7 | 1,0 | ✅ 0,5 | **Chỉ còn 1 cron** (rollover 04:05, QĐ-21); cron 21:00 đã cắt (QĐ-22) |
> | **audit_log** (mới, `05`) | 9 | — | ✅ **0,75** | QĐ-19: lưu ≥2 năm, "rẻ nhất khi làm sớm, không thể làm bù" |
> | | | **32,5 pd** | **≈ 22,9 pd = 4,58 pw** | ⚠️ **VƯỢT 3,5 pw — xem dòng dưới** |
>
> ### ⚠️ Con số thật sau khi cộng lại là **4,58 pw, không phải 3,5 pw**. Nói thẳng thay vì làm tròn xuống.
> Bảng hạng mục của `07` ra 3,5 pw; bảng US chi tiết hơn ra 4,58 pw cho **cùng một scope**. Chênh 1,08 pw đến từ: (a) `07` ước lượng theo hạng mục "cảm giác", `02` ước lượng theo từng tiêu chí hoàn thành; (b) ba hạng mục bắt buộc phát sinh sau khi hợp nhất (32 event thay vì 14: +0,15 · `audit_log`: +0,15 · auto-hide + SLA kép: +0,05). **Lấy 4,58 pw làm con số làm việc.** Ở 20 h/tuần không trừ hao, 4,58 pw = **183 giờ ≈ 9,2 tuần** — vừa khít cửa sổ T4–T12 (36 tuần-người... không: 9 tuần × 20 h = 180 h), **đệm âm 3 giờ**. Đó là lý do hai tuần 16/11→02/12 phải là đệm, và là lý do **không** có chỗ cho bất kỳ khoản thêm nào. Sổ cái: `docs/adr/pw-ledger.md`.

### MVP-0 = 3,5 pw — cắt gì khỏi bảng §4.10

| §4.10 | Hạng mục | pw gốc | MVP-0 | Cắt gì / lý do |
|---|---|---|---|---|
| 1 | Khung, schema, device token, mã 6 ký tự, config | 0,9 | **0,50** | `config` là một bảng đọc lúc boot, không có UI quản trị. `group_id` + RLS giữ nguyên từ commit đầu (v2 §6 mục 14) |
| 3 | **Màn Nộp** (nén, strip EXIF, signed PUT R2, XONG/TOANG) | 0,9 | **0,75** | Không cắt gì. Đây là màn duy nhất không bỏ được (v2 §3: "bước 4") |
| 2 | **Màn Sổ hôm nay** | 1,3 | **0,50** | Cắt **lưới 30 ngày** (US-07) và **nút thả tim** (US-10 một phần) sang T13+. **GIỮ trang public** — cắt nó thì M2 không đo được (`02` §4.3 tự cảnh báo điều này) |
| 4 | Mở sổ / Vào sổ + 8 preset | 0,7 | **0,35** | Cắt OG preview động → một ảnh OG tĩnh |
| 5 | **Card chốt sổ** (satori 4:5) | 0,8 | **0,40** | Một layout duy nhất. Cắt biến thể "đủ mâm" + mốc sổ sang T13+ |
| 7 | Logic ngày 04:00 + chuỗi + 2 van | 0,4 | **0,25** | Cắt **Tết freeze** sang T13 (hạn hoàn thành **25/01/2027**) và **cron 21:00** (QĐ-22). ⚠️ **Lý do cũ ghi sai ngày Tết:** mùng 1 Tết Đinh Mùi là **06/02/2027**, không phải 17/02 (đó là Tết Bính Ngọ 2026). Kết luận "ngoài cửa sổ 12 tuần" **vẫn đúng**, nhưng Tết rơi **trong** cửa sổ beta (tuần 10–11) — đó là lý do cohort quyết định là tuần 1–4, đọc trước Tết (QĐ-13) |
| 9 | ToS, riêng tư, báo cáo/chặn, xoá dữ liệu, age gate ≥16, chặn từ khoá | 0,5 | **0,45** | **Không cắt.** Đây là thứ chặn người ngoài vào |
| 8 | **32 event hợp nhất** (QĐ-02) + 2 counter pháp lý (QĐ-04) + bảng cấp sổ | 0,5 → **0,65** | **0,25** | Event + cột vào schema từ commit đầu (không cắt được — thêm sau là mất lịch sử). Cắt dashboard → **6 truy vấn SQL chạy tay**. Định giá lại từ 0,5 lên 0,65: hạng mục này được cấp cho ~14 event, danh mục hợp nhất có 32 |
| 10 | Test bất biến 10.000 mô phỏng + CI quét template | 0,2 | **0,20** | **Không cắt.** P1/P2/P3 |
| 6 | Màn Của tôi | 0,3 | **0,00** | Gộp 2 nút bắt buộc (rời sổ, xoá dữ liệu của tôi) vào mục 9 |
| | **TỔNG (bảng hạng mục)** | **6,5** | **3,65** | ⚠️ Bảng US chi tiết ở trên ra **4,58 pw** cho cùng scope. **Dùng 4,58** làm con số làm việc — xem hộp QĐ-25 |

Luật đánh đổi 1-1 (P7) vẫn hiệu lực: mọi thứ thêm vào MVP-0 phải cắt một thứ trong bảng trên.

---

## 1. BẢNG 12 TUẦN

### T0 — 03/09 → 06/09 (tiền đề, đã có trong v2 §12)
Domain `chotso.vn` (hoá đơn, không phải "còn trống") · thư 1 câu cho luật sư · ADR-000 · buổi kiểm chứng nền tảng 3 câu (§10h) trên máy thật · kill gate dán tường · tuyển 8 sổ · template Canva + Google Sheet 6 cột · 3 giờ tính lại trần doanh thu bằng eCPM.
**Thêm một việc mà v2 không có:** chốt **thiết bị đo H1**. Card Canva không có nút nào để đếm. Hai phương án, chọn trong ngày 04/09: (1) danh sách **"Đã xem"** của tin nhắn nhóm Zalo — _cần kiểm chứng_ Zalo có hiện đủ danh sách người xem cho ảnh trong nhóm >5 người; (2) fallback: **một short link riêng cho mỗi sổ mỗi ngày** in trên card, đếm unique click 24h (Cloudflare Worker ~10 dòng hoặc Short.io free). Không có thiết bị đo thì H1 không tồn tại, và H1 là giả thuyết trung tâm của cả hướng.

| T | Ngày | Mục tiêu DUY NHẤT | Việc (3–5) | Output nhìn thấy được | Test | Go/No-go cuối tuần |
|---|---|---|---|---|---|---|
| **1** | 07–13/09 | Bước 0 chạy 6 tối liên tiếp, **0 dòng code sản phẩm** | 1) 08/09 khởi động 8 sổ (5 nhánh A + 3 nhánh B) · 2) mỗi 21:00: gom ảnh → card Canva → dán vào nhóm · 3) ghi Sheet 6 cột mỗi tối trước 23:30 · 4) ghi số "Đã xem"/click 24h cho từng card · 5) 13/09 báo cáo giữa kỳ 1 trang | **48 card đã dán** (6 tối × 8 sổ) + Sheet 48 dòng | H1, H2, H3 | ≥3/8 sổ chết (0 tấm 2 tối liên tiếp) → **không** cứu bằng nhắc riêng; phỏng vấn 3 người rời; tiếp tục để giữ tính hợp lệ của cửa sổ im lặng |
| **2** | 14–20/09 | **Cửa sổ im lặng** ngày 15 và 18: founder câm tuyệt đối | 1) 15/09 và 18/09: không post, không nhắc, không trả lời trong cả 8 sổ · 2) **[CHỐT 2026-08-28, QĐ-29] founder KHÔNG tự dán card vào nhóm trong ngày im lặng.** Founder làm card rồi **gửi RIÊNG cho người trực** của sổ đó (`02` §5.5 + script S6 §5.9); người trực quên dán thì **để nguyên**, không nhắc. Bản trước ("vẫn dán card 21:00") làm founder xuất hiện trong nhóm đúng ngày phải vắng mặt — tức hỏng phép đo H2, cổng quyết định 22/09. Cách này giữ được cả cơ chế phân phối lẫn tính hợp lệ, và **thu miễn phí một phép đo điểm chết đơn** (người trực quên = cơ chế phụ thuộc một người) · 3) 6 tối còn lại chạy bình thường · 4) tính `q_c`, `q_x` **riêng cho ngày im lặng** · 5) đếm số lần nhóm tự nhắc nhau | Bảng 2 dòng: `q_c/q_x` ngày thường vs ngày im lặng, cho từng nhánh A và B | H2 (chính), H3 | Không có gate giữa chừng — cắt ngang cửa sổ im lặng là huỷ thí nghiệm |
| **3** | 21–27/09 | Ra **quyết định bằng văn bản** rồi viết dòng code đầu tiên | 1) 21/09 ngày im lặng thứ 3, kết thúc Bước 0 · 2) 22–23/09 xử lý dữ liệu + văn bản quyết định có số, có ngày, có chữ ký · 3) 24/09 repo + Next.js + Supabase + deploy `chotso.vn` HTTPS · 4) dán link thật vào 3 nhóm Zalo → chụp màn hình (rủi ro VNG, lần 2 với domain thật) · 5) ADR-001 (Supabase SG + R2 + `StorageAdapter`) | Văn bản quyết định + **trang `chotso.vn` mở được trong Zalo**, có ảnh chụp | — | **CỔNG LỚN #1** (§4) |
| **4** | 28/09–04/10 | **Walking skeleton**: một tấm ảnh thật đi hết đường | 1) schema đầy đủ (`sổ/thành viên/kèo/tấm/ngày`) + RLS + `group_id` + 4 event an toàn · 2) device token + mã 6 ký tự · 3) màn Nộp: chọn ảnh → nén 1080/q0,72 → strip EXIF → signed PUT R2 · 4) màn Sổ hôm nay bản thô: hàng ảnh hôm nay · 5) chạy trên **1 Android tầm trung + 1 iPhone**, trong webview Zalo | **Video 40 giây quay màn hình máy thật**: mở link → nộp ảnh → thấy ảnh trong sổ | — | Chưa đi hết đường end-to-end → tuần sau **chỉ** làm nó, dời toàn bộ T5 |
| **5** | 05–11/10 | Sổ có **nhiều người**, ngày biết tự tính | 1) Mở sổ / Vào sổ + 8 preset + ô tự viết ≤30 ký tự · 2) link mời + mã 6 ký tự · 3) enum `xong/toang/vắng` + nhãn ✓/💀 · 4) logic NGÀY 04:00–03:59 ICT, `k=1 nếu A_eff≤2, 2 nếu A_eff≥3` với **`A_eff = min(A(D), A(D−1))`** [CHỐT 2026-08-28, QĐ-14b — bắt buộc, xem `04` §9.1: `k` tính trên `A` cùng ngày làm sổ 2 người **mất chuỗi đúng vào ngày có thêm bạn mới**. Một hàm `min()`, 0 pw, phải vào **trước commit đầu**] · 5) `A` = nộp ≥1 tấm trong 7 ngày | **Hai điện thoại khác nhau** cùng một sổ, hai tấm nằm chung một hàng, một cái ✓ một cái 💀 | — | Hai máy chưa thấy nhau → lỗi kiến trúc, dừng thêm tính năng cho tới khi sửa |
| **6** | 12–18/10 | **Card chốt sổ do máy sinh** trông không tệ hơn card Canva | 1) satori/@vercel/og render 4:5 · 2) nút Chia sẻ + caption soạn sẵn · 3) dòng chân `Minh chốt sổ · mai tới lượt Linh` · 4) snapshot test card (P2: không ô trống có tên; P4: hai con số không giảm) · 5) dán thử vào 3 nhóm, 3 dòng máy | **Ảnh card máy sinh dán trong nhóm Zalo, đặt cạnh card Canva Bước 0** | H1 (chuẩn bị đo lại) | **Điểm kiểm tra chậm tiến độ** — xem §5 |
| **7** | 19–25/10 | **Bất biến được máy canh**, không canh bằng mắt | 1) chuỗi sổ + 2 van/cửa sổ 7 ngày trượt · 2) 3 con số công khai · 3) test 10.000 mô phỏng 30 ngày, assert không cột nào giảm ngoài `chuỗi` (P1) · 4) test CI quét template bank tìm `{goal}`/`{goal_text}` (P3) · 5) `config` table + lint chặn số ma (P6) | **CI xanh**, log in ra `0 cột giảm ngoài chuỗi / 0 template tham chiếu goal_text` | — | CI đỏ → không được viết tính năng mới |
| **8** | 26/10–01/11 | **Hàng rào pháp lý & an toàn xong TRƯỚC khi có người lạ** | 1) ToS + Chính sách riêng tư tiếng Việt + màn 7, **SLA KÉP (QĐ-17): 48h cho khiếu nại người dùng · 24h (khẩn cấp 6h) cho yêu cầu cơ quan nhà nước** — trang chính sách in cả hai · **auto-hide toàn cục ở report đầu tiên (QĐ-16)** · `RUNBOOK.md` + công tắc `service.paused` + script khoá sổ khẩn cấp · 2) age gate ≥16 — **chỉ lưu cờ boolean `is_16_plus`, KHÔNG lưu năm sinh** (QĐ-20, nguyên tắc tối thiểu hoá dữ liệu Luật 91/2025); <16 không mở được sổ · 3) báo cáo / chặn / xoá ảnh của mình / xoá dữ liệu của tôi · 4) chặn 10 từ khoá RLAU → màn hỗ trợ + `safety_screen_shown{reason_bucket}` · 5) R2 lifecycle: ảnh gốc TTL 72h → chỉ còn thumbnail 320px | **7 URL công khai** + checklist ký tay + ảnh chụp R2 lifecycle rule | — | **Tuần này chưa xong ⇒ T11 không được mở cho người ngoài.** Ràng buộc cứng |
| **9** | 02–08/11 | **Dogfood 7 ngày liên tục** trên bản thật | 1) 1 sổ 5 người (bạn founder) chạy 02→08/11 trên sản phẩm thật · 2) sửa lỗi chặn đường mỗi sáng · 3) trạng thái public của link mời (ảnh mờ + nút vào sổ) · 4) 2 nút bắt buộc: rời sổ, xoá dữ liệu · 5) đo tay `q_c/q_x` sổ nội bộ | **7 ngày liên tiếp có tấm trong DB production**, ảnh chụp bảng `ngày` | H2 (nội bộ) | ≥1 lỗi chặn đường còn sống sau 7 ngày → hoãn beta 1 tuần |
| **10** | 09–15/11 | **Khoá tính năng** và có 12 sổ ngoài đã ghi danh | 1) **feature freeze 11/11**, sau đó chỉ sửa P0 · 2) 6 truy vấn SQL: `group-D7/D14`, `q_c`, `q_x`, card-open-24h, tỉ lệ TOANG · 3) form tuyển: bắt nhập **link nhóm chat có sẵn + tên 3 người**, chỉ duyệt khi đủ 3 (v2 §12) · 4) soạn 5 tin nhắn tuyển, gửi ~60 lời mời · 5) sửa đúng 1 lỗi P0 | **12 sổ đã ghi danh**, danh sách có tên nhóm + ngày bắt đầu 16/11 | — | **CỔNG LỚN #2** (§4) |
| **11** | 16–22/11 | **12 sổ người ngoài chạy 7 ngày**, founder không viết tính năng mới | 1) mở beta 16/11 · 2) trực 30 phút/tối, **trần 5 h/tuần** · 3) mọi lỗi vào một danh sách, chỉ sửa P0 · 4) **19/11 và 22/11 = ngày im lặng** · 5) 22/11 chạy 6 truy vấn | **Bảng số ngày 22/11**: group-D7, `q_c`, `q_x`, card-open-24h, tỉ lệ TOANG | H1, H2 | >2 sổ chết trong 7 ngày đầu → dừng tuyển thêm, chuyển sang phỏng vấn |
| **12** | 23–29/11 | Có **group-D14 của sổ ngoài** và so được với neo B của Bước 0 | 1) beta chạy tới hết ngày 14 (29/11) · 2) ngày im lặng 25/11 và 29/11 · 3) exit survey 1 câu cho người rời · 4) **5 cuộc gọi 10 phút** với người đã ngừng nộp · 5) báo cáo 2 trang | **Báo cáo "12 sổ × 14 ngày"**, có `group-D14` beta đặt cạnh `B` (group-D14 đo tay ở Bước 0) | H1, H2, H3 | **CỔNG LỚN #3** (§4) |

**Mốc lịch cần nhớ:** code bắt đầu **24/09 (T3)** · build chạy trên máy thật **04/10 (T4)** · người ngoài dùng **16/11 (T11)**.

---

## 2. GANTT

```mermaid
gantt
    title Chốt Sổ — 12 tuần (07/09 → 29/11/2026)
    dateFormat YYYY-MM-DD
    axisFormat %d/%m

    section Tiền đề
    Domain chotso.vn + thư luật sư + ADR-000   :done, t0a, 2026-09-03, 2d
    Kiểm chứng nền tảng + thiết bị đo H1       :done, t0b, 2026-09-04, 1d
    Tuyển 8 sổ + template Canva + Sheet        :done, t0c, 2026-09-05, 2d

    section Bước 0 làm tay
    8 sổ chạy 14 ngày (5A + 3B)                :crit, b0, 2026-09-08, 14d
    Cửa sổ im lặng 15/18/21-09                 :milestone, sil, 2026-09-21, 0d
    Xử lý dữ liệu + QUYẾT ĐỊNH VĂN BẢN         :crit, dec1, 2026-09-22, 2d

    section Pháp lý (đường găng)
    Thư ý kiến luật sư (1 câu) chờ trả lời     :legal1, 2026-09-03, 21d
    Hàng rào an toàn + ToS + age gate + TTL72h :crit, legal2, 2026-10-26, 7d
    Dashboard 2 counter phap ly (QD-04)       :legal3, 2026-11-09, 3d

    section Build MVP-0 (3,5 pw)
    Repo + deploy + schema + RLS               :crit, b1, 2026-09-24, 5d
    Walking skeleton (Nộp + Sổ, máy thật)      :crit, b2, 2026-09-28, 7d
    Mở sổ / Vào sổ + logic ngày 04:00          :crit, b3, 2026-10-05, 7d
    Card chốt sổ satori 4:5                    :crit, b4, 2026-10-12, 7d
    Chuỗi + 2 van + test bất biến + CI         :b5, 2026-10-19, 7d
    Dogfood 7 ngày liên tục                    :crit, b6, 2026-11-02, 7d
    Feature freeze + truy vấn SQL              :b7, 2026-11-09, 5d

    section Beta người ngoài
    Tuyển 12 sổ                                :r1, 2026-11-09, 7d
    12 sổ chạy 14 ngày                         :crit, beta, 2026-11-16, 14d
    Báo cáo + CỔNG LỚN #3                      :milestone, dec3, 2026-11-29, 0d
```

---

## 3. ĐƯỜNG GĂNG — CÁI GÌ CHẶN CÁI GÌ

**Chuỗi dài nhất (84 ngày lịch, không có đường tắt):**

```
Bước 0 14 ngày  →  quyết định 22–23/09  →  repo + schema + RLS  →  walking skeleton
(máy thật)      →  mở sổ nhiều người    →  card satori          →  HÀNG RÀO PHÁP LÝ/AN TOÀN
                →  dogfood 7 ngày       →  feature freeze       →  beta 14 ngày  →  quyết định T12
```

**Hai khối không nén được, chiếm 28/84 ngày (33%):** Bước 0 = 14 ngày lịch và beta = 14 ngày lịch. Không thể rút bằng cách làm nhiều giờ hơn — chúng là thời gian trôi, không phải công. Điều đó có nghĩa: **56 ngày còn lại phải chứa toàn bộ 3,5 pw code.**

**Pháp lý nằm ở đâu — trên đường găng, đúng ba chỗ:**

| Việc pháp lý | Vị trí | Chặn cái gì | Lead time |
|---|---|---|---|
| Mua `chotso.vn` | **T0, ngày đầu tiên** | Giấy phép MXH sau này đòi tên miền `.vn` còn hiệu lực **≥6 tháng** (r06). Mua muộn 1 tháng = ngưỡng giấy phép lùi 1 tháng | Vài giờ, nhưng đồng hồ 6 tháng chạy từ ngày mua |
| Thư ý kiến luật sư — **7 câu hợp nhất** (`05` §11, QĐ-14) | Gửi **T0**, nhận ~T3. **Câu 3 bắt buộc có trả lời trước 20/12/2026** | Không chặn code. **Chặn: (1) nhận sổ thứ 31 · (2) thu một đồng nào (T4 của `10`) · (3) mở quá đèn vàng QĐ-04** | 2–3 tuần (_cần kiểm chứng_ với 3 văn phòng — **lấy 3 báo giá thật trước 10/09**) |
| **Hàng rào an toàn T8** (ToS, riêng tư, age gate ≥16, báo cáo/chặn, xoá dữ liệu, chặn từ khoá, TTL 72h) | **T8, trước beta** | **Chặn T11.** Người ngoài không được vào trước khi 7 URL này sống | 1 tuần công |

Đây là nghĩa đúng của "pháp lý chạy trên đường găng": T8 không phải một việc song song để làm khi rảnh — **nó là điều kiện tiên quyết của T11**, và nếu T8 trượt thì beta trượt theo, không có ngoại lệ.

**Tài khoản developer Apple/Play — KHÔNG nằm trên đường găng, và đó là quyết định có chủ đích.**
v2 §6 mục 2 khoá app native sau `group-D28 ≥ 35%` trên ≥30 sổ. Trong 12 tuần này **không mua tài khoản nào, chi 0đ**. Nhưng phải biết cái giá của việc hoãn, vì lead time là thật:

| Khoản | Số | Nguồn |
|---|---|---|
| Apple Developer Program | **$99/năm** | r06 §10 |
| Google Play Developer | **$25 một lần** | r06 §10 |
| D-U-N-S (bắt buộc cho Apple dạng Organization) | miễn phí, **7–30 ngày làm việc** + đòi pháp nhân | r06 §10 |
| **Play: tài khoản cá nhân tạo sau 13/11/2023** phải chạy **closed test 12 người dùng thử liên tục ≥14 ngày** mới xin được quyền phát hành production, cộng 1–3 ngày duyệt bản phát hành | **≥17–20 ngày lịch**, tính từ khi đã có bản build | [Play Console Help](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en) |
| Thời gian xác minh danh tính tài khoản cá nhân Play tại VN | **cần kiểm chứng** — các nguồn nói "vài ngày đến vài tuần", không có SLA công bố | — |

Diễn giải: **nếu một ngày quyết định làm native, phải cộng ≥6 tuần lead trước khi có bản production đầu tiên** (D-U-N-S/pháp nhân + 12 tester × 14 ngày + duyệt). Đó là lý do quyết định này phải được ra ở tuần 13–14 nếu tín hiệu T12 tốt, chứ không phải lúc cần app.

---

## 4. BA CỔNG QUYẾT ĐỊNH LỚN

### CỔNG #1 — 22–23/09/2026 (T3): _Bước 0 nói gì?_

| Điều kiện | Hành động |
|---|---|
| **ĐI** | `q_c_roster ≥ 0,45` **và** `q_x_roster ≥ 0,30` **chỉ trên 3 ngày im lặng** · **và** **≥60% sổ nhánh A đạt ≥9/14 ngày tính** · **và** `q_c(A) ≥ q_c(B) − 5đ` · **và** ≥1/8 sổ tự hỏi "mai còn chốt sổ không" |
| **BỎ KÈO** | `q_c(B)` hơn `q_c(A)` ≥10 điểm → viết lại §4.8, cắt ~1,0 pw, MVP-0 còn ~2,7 pw, sản phẩm thành "gửi một tấm hôm nay tao thế nào trong nhóm Zalo". **Đây là kết luận hợp lệ, không phải thất bại** |
| **CHẠY LẠI** (vùng xám) | `0,35 ≤ q_c_roster < 0,45` hoặc H1 click-shortlink 40–60% → **cohort mới 14 ngày, cấm thêm feature (P8)**. Beta lùi tối đa tới trần cứng 15/12 |
| **DỪNG** | `q_c_roster < 0,35` **hoặc** H1 click-shortlink **<40%** **hoặc** 0/8 sổ tự hỏi "mai còn chốt sổ không" → dừng toàn bộ hướng nộp-ảnh-mỗi-ngày. **Tiết kiệm 4,58 pw + 180 giờ** |

> ## ⛔ [CHỐT 2026-08-28 — QĐ-05] BA SỬA ĐỔI Ở CỔNG #1. Bản trước cho một proxy KHÔNG TỒN TẠI quyền phủ quyết cả dự án.
>
> **(a) H1 mất quyền ĐI, chỉ còn quyền DỪNG.** Bản trước đặt `card-open-24h ≥ 60%` làm một trong sáu điều kiện **bắt buộc** để đi tiếp. Nhưng `02` §5.7 + §8(4) chứng minh cả ba proxy đo H1 ở Bước 0 đều **lệch đã biết**, và `06` BĐ-3 chỉ ra điều nặng hơn: **một ảnh Canva dán vào Zalo không sinh sự kiện "mở"** — Zalo không trả về ai đã xem. Tức ngày 22/09, để điền vào ô "card-open-24h" founder sẽ phải **bịa một con số**. Chốt: H1 ở Bước 0 **chỉ đủ để DỪNG (<40% click), không đủ để ĐI TIẾP**. Ngưỡng ≥60% dời sang **tuần 2 của beta**, khi US-23 chạy và có event `card_opened` thật.
>
> **(b) Thiết bị đo H1 là BẮT BUỘC, hạn 07/09/2026.** Không có thiết bị thì ngay cả quyền DỪNG cũng không thực thi được — ngày 22/09 sẽ không có số nào. **Chốt phương án: một shortlink riêng cho mỗi sổ mỗi ngày** (`chotso.vn/s/<sổ>/<ngày>` hoặc Short.io free), in trên card Canva, đếm unique click 24h. **30 phút setup.** Phương án "danh sách Đã xem của Zalo" bị loại làm nguồn chính vì nó chưa được kiểm chứng và không đếm được click. ⚠️ Lưu ý xung đột đã biết: v2 §12 cấm viết code sản phẩm trong Bước 0 và `05` GIAI ĐOẠN 0 dựng lập luận pháp lý "không máy chủ, không dịch vụ" — vì vậy **dùng Short.io free, KHÔNG tự host**, và ghi rõ lựa chọn đó thay vì để nó trôi vào.
>
> **(c) Tiêu chí H2 đổi từ "chuỗi ≥5 ngày" sang "≥9/14 ngày tính".** `06` BĐ-2 tính sức phân biệt: với van 2 ngày nghỉ/tuần, "giữ chuỗi ≥5 ngày" gần như tự động đạt kể cả ở kịch bản fail. Tiêu chí ≥9/14 tách nhóm fail/đạt ở **31,6% vs 98,5%**. Cùng dữ liệu, 0 pw. Mẫu số là **`q_c_roster`** (QĐ-03), không phải `q_c` trượt.

### CỔNG #2 — 15/11/2026 (T10): _Có được thả người ngoài vào không?_

| Điều kiện | Hành động |
|---|---|
| **ĐI** | 6 màn lõi chạy end-to-end trên **≥2 dòng máy thật** trong webview Zalo · **và** 7 URL pháp lý sống · **và** dogfood 7 ngày liên tục không đứt · **và** CI xanh (P1/P2/P3) · **và** ≥12 sổ đã ghi danh |
| **HOÃN 1 TUẦN** | Thiếu đúng một trong các điều trên → beta 23/11, đo group-D7 thay group-D14, cổng #3 lùi sang T14 |
| **CẮT** | Thiếu ≥2 điều → chạy danh sách cắt ở §5, giảm 12 sổ xuống 8 sổ, vẫn giữ ngày 16/11 |
| **KHÔNG BAO GIỜ** | Mở beta khi hàng rào T8 chưa xong. Không có ngoại lệ, kể cả "chỉ 3 sổ bạn thân" |

### CỔNG #3 — **16/12/2026** (beta ngày 14): _App có bằng founder ngồi dán card Canva không?_

_Ngày đổi từ 29/11 sang 16/12 theo QĐ-25 (beta chạy 02/12, D14 rơi vào 15/12; đọc số ngày 16/12)._

Neo là **B** = `group-D14` đo tay ở Bước 0 (v2 §11).

> ### 📐 [CHỐT 2026-08-28 — QĐ-26] CÔNG THỨC TÍNH `B` — trước đây không tài liệu nào định nghĩa, dù ba tài liệu dùng nó làm tiêu chí đi/dừng.
> `B` là con số neo của **M1**, tiêu chí thành công duy nhất của MVP (`02` §1.3, `07` cổng #3, `10` G2). Định nghĩa chốt:
> - **Mẫu số: 5 sổ nhánh A**, không phải 8. Sổ nhánh B (không kèo) chạy một cơ chế khác và không so được; **sổ số 0 (nhóm của chính founder) bị loại** khỏi mọi phép đo (`09` §1.5).
> - **Tử số:** số sổ nhánh A còn `group_alive` (≥3 người nộp ≥1 tấm trong 7 ngày kết thúc ở ngày 14) vào **ngày 14 của Bước 0 = 21/09/2026**.
> - **Mẫu số của `group_alive` bên trong là roster đóng băng** (QĐ-03), không phải Active trượt.
> - ⚠️ **Độ phân giải phải in kèm mỗi lần trích dẫn `B`:** với n=5, `B` chỉ nhận được các giá trị **{0, 20, 40, 60, 80, 100}%** — bước nhảy **20 điểm**. Beta 12 sổ có bước nhảy 8,3 điểm. **So một con số bước-8,3 với một con số bước-20 không phải một phép đo chính xác**, và không tài liệu nào trước đây nói ra điều đó. Hệ quả thực hành: **chỉ tuyên bố "đạt" khi `group-D14(beta) ≥ B` với biên ≥1 bậc của B (tức ≥ B + 20 điểm), hoặc khi cả hai đều ≥60%.** Chênh lệch nhỏ hơn thế là nhiễu.
> - **Cấm đặt giá trị cho `B` trước 22/09/2026** (`02` §1.3). Công thức được chốt hôm nay; con số thì không.

| Điều kiện | Hành động |
|---|---|
| **TÍN HIỆU TỐT** | `group-D14(beta) ≥ B` **và** card-open-24h ≥ 60% (đo bằng `card_opened` thật, không phải proxy) **và** `q_c_roster ≥ 0,45` trên ngày im lặng | → nhánh (a) §8 |
| **MỜ** | Lệch trong khoảng ±5 điểm so với B, hoặc card-open 40–60% | → nhánh (b) §8 |
| **XẤU** | `group-D14(beta) < B − 10đ` **hoặc** `q_c < 0,35` **hoặc** card-open <40% **hoặc** 0/12 sổ tự hỏi "mai còn chốt sổ không" | → nhánh (c) §8 |

**Diễn giải trần trụi (v2 §11):** _nếu app không bằng founder ngồi dán card Canva bằng tay, cái được xây không phải sản phẩm._

---

## 5. NẾU CHẬM — CẮT THEO THỨ TỰ NÀY, KHÔNG CẮT THEO CẢM HỨNG

**Điểm kiểm tra: hết T6 (18/10).** Câu hỏi nhị phân duy nhất: _đã có video walking skeleton (T4) và card máy sinh (T6) chưa?_

**Nếu ĐÃ có cả hai** → đúng tiến độ, không cắt gì.
**Nếu CHƯA có walking skeleton tính đến 18/10** → founder đang chậm ≥2 tuần trên 159 giờ. Chạy danh sách cắt, **từ trên xuống, dừng ngay khi đủ giờ**:

| # | Cắt | Tiết kiệm | Mất gì |
|---|---|---|---|
| 1 | Mã 6 ký tự → chỉ còn link mời dạng UUID | 0,10 pw | Mất đường thoát hiểm nếu Zalo chặn domain (v2 §9 mục 7). **Chỉ cắt nếu buổi kiểm chứng T0 cho thấy Zalo không cảnh báo domain** |
| 2 | 8 preset → 4 preset (ngủ trước 12h · đi bộ 20 phút · học 15 phút · không mất tích) | 0,05 pw | Ít lựa chọn hơn, không mất cơ chế |
| 3 | Card: bỏ dòng `mai tới lượt Linh` | 0,05 pw | Mất biện pháp giảm rủi ro "điểm chết đơn người chốt sổ" (v2 §4.7). Đo bằng tay ở beta thay thế |
| 4 | Chuỗi + 2 van → **chỉ giữ 2 con số không giảm** (ngày thứ N, số tấm) | 0,25 pw | Mất một con số, nhưng P4 vẫn thoả (P4 đòi ≥2 con số không giảm). Van quay lại ở T13 |
| 5 | Beta 12 sổ → **8 sổ** | 0 pw, tiết kiệm 2 h/tuần vận hành | Cỡ mẫu nhỏ hơn — vốn đã không có ý nghĩa thống kê (v2 §11) |
| 6 | Card satori server-side → **card client-side bằng `canvas` + tải xuống** | 0,15 pw | Xấu hơn, không có OG preview. Loop vẫn nguyên vẹn |
| 7 | Dogfood 7 ngày → 4 ngày | 0 pw, +3 ngày lịch | Rủi ro lỗi lọt ra beta tăng |

**KHÔNG BAO GIỜ CẮT, kể cả chậm 4 tuần:**
1. Hàng rào pháp lý & an toàn T8 (7 URL + age gate + báo cáo/chặn + xoá dữ liệu + chặn từ khoá + TTL 72h)
2. 4 event an toàn + `group_id` + RLS trong schema từ commit đầu — thêm sau là mất toàn bộ lịch sử (v2 §8 #22)
3. Test bất biến 10.000 mô phỏng + CI quét template bank (P1/P2/P3)
4. Beta đủ **14 ngày lịch** — cắt xuống 7 ngày là đo group-D7 rồi gọi nó là D14, tức tự lừa mình
5. Cửa sổ im lặng

**Nếu chậm ≥4 tuần (chưa có card máy sinh tính đến 01/11):** dừng build, kết thúc 12 tuần bằng **báo cáo Bước 0 + walking skeleton**, dời cổng #3 sang tuần 16, và viết một câu vào nhật ký: _"3,5 pw ở 20 h/tuần vẫn quá lớn"_ — vì đó là dữ liệu về năng lực thật, đắt hơn mọi tính năng.

---

## 6. KHÔNG LÀM TRONG 12 TUẦN NÀY

Ngoài toàn bộ 20 mục ở v2 §6 (vẫn hiệu lực nguyên vẹn), 12 tuần này còn hoãn thêm:

| # | Không làm | Vì sao trong 12 tuần này |
|---|---|---|
| 1 | **Mua tài khoản Apple ($99) và Play ($25)** | Không có app native để đăng. Mua sớm không rút ngắn được đồng hồ 12-tester-14-ngày, vì đồng hồ đó chạy trên bản build chứ không trên tuổi tài khoản |
| 2 | **Lập TNHH, D-U-N-S, MST, tài khoản Merchant** | v2 §6 mục 20. Điều kiện mở: **30 sổ** nếu quyết định đi tiếp (`05` §10 bước 3), hoặc đèn vàng pháp lý (QĐ-04) — tuỳ cái nào tới trước. **KHÔNG phải "700 người dùng"** |
| 3 | **Lưới 30 ngày, nút thả tim, biến thể card "đủ mâm" và mốc sổ** | Cắt sang T13+ để MVP-0 lọt 3,5 pw. Chúng là phần thưởng, không phải vòng lặp |
| 4 | **Tết freeze** | Tết 2027 rơi vào 17/02/2027, ngoài cửa sổ. 0,05 pw, làm ở T14 |
| 5 | **Dashboard analytics** | 6 truy vấn SQL chạy tay mỗi thứ Bảy. Dashboard cho 12 sổ là đồ trang trí |
| 6 | **Android web push** | Chỉ mở nếu H1 rơi **vùng xám 40–60%** (v2 §6 mục 3). Không mở vì "cho chắc" |
| 7 | **Zalo Mini App, Zalo Bot, ZNS** | v2 §6 mục 8, 9, 10. Không đặt đường găng lên API beta của công ty khác |
| 8 | **Landing page marketing, TikTok, PR, cộng đồng** | Tuyển 12 sổ bằng tin nhắn tay. Kênh tăng trưởng là câu hỏi của quý sau, không phải của 12 tuần này |
| 9 | **Thiết kế thương hiệu, logo, art** | Card 4:5 với chữ đen trên nền trắng đo được đúng thứ cần đo |
| 10 | **Đa sổ trong UI, đa múi giờ, realtime, anti-cheat** | v2 §6 mục 14, 15, 16, 18 |
| 11 | **Bất kỳ hình thức doanh thu nào** | Kể cả thử nghiệm quảng cáo. Việc duy nhất liên quan tiền trong 12 tuần là 3 giờ bàn giấy tính eCPM ở T0 |
| 12 | **Viết thêm tài liệu chiến lược** | Hồ sơ đã có 8 research + 6 phản biện + 5 tài liệu kế hoạch. Tài liệu thứ 20 không làm ai nộp thêm một tấm ảnh |

---

## 7. TIỀN MẶT THEO TUẦN

| T | Khoản | VND | Ghi chú |
|---|---|---|---|
| T0 | Tên miền `chotso.vn` năm đầu | **≈750.000** [CHỐT 2026-08-28, QĐ-27 — một con số duy nhất thay cho ba: 460k / 550–770k / 750k] | Lấy mốc **cao nhất trong ba ước lượng** vì cả ba đều chưa có báo giá thật. **Việc bắt buộc ngày 03/09: lấy báo giá THẬT từ một nhà đăng ký và thay con số này.** Đây là việc rẻ nhất và có lead time dài nhất (đồng hồ "tên miền .vn hiệu lực ≥6 tháng" cho hồ sơ giấy phép MXH). **Chốt mua MỘT domain, không hai** — `08` Bất đồng #5 đòi domain dự phòng cho ca Zalo chặn; hoãn lại vì chưa có bằng chứng Zalo chặn, nhưng ghi rõ: domain dự phòng chỉ có tác dụng nếu **mua TRƯỚC** khi bị chặn, nên đây là quyết định phải xem lại **ngay khi có tín hiệu chặn đầu tiên**, không phải sau |
| T0 | Thư ý kiến luật sư, **7 câu** [CHỐT 2026-08-28, QĐ-14] | **5.000.000 – 15.000.000** | Không mua thư 1 câu nữa. `05` §11 đã hợp nhất thành **7 câu trong một email, một lần trả phí** — trong đó câu 3 (được thu tiền không) có thể **xoá toàn bộ đường ray doanh thu của `10`**, và hai câu Điều 32 BLDS (ảnh người đã rời; bán bản in chứa ảnh nhiều người) chi phối cả sản phẩm lẫn cả hai phương án monetization. Hỏi 7 câu một lần rẻ hơn hỏi 1 câu bốn lần. **Việc bắt buộc trước 10/09: 3 báo giá thật để thay dải 5 lần này bằng một con số** |
| T1–T2 | Bước 0 | **0** | Canva free, Google Sheet free, Zalo free. **Không trả tiền cho người tham gia trong 14 ngày đo** — trả tiền là làm hỏng phép đo |
| T3 | Quà cảm ơn 8 sổ, trả **sau** ngày 14 | **800.000** | 100.000/sổ |
| T3 | Máy Android tầm trung để test (Xiaomi/Oppo) | **0 – 2.500.000** | 0 nếu mượn được. §10(h) đòi test trên máy thật, không emulator |
| T4–T10 | Hạ tầng (chưa có người ngoài) | **0** | Vercel Hobby 0đ · Supabase Free 0đ · R2 free tier · Cloudflare DNS 0đ |
| **T11+** | **Hạ tầng từ NGÀY BETA CHẠY (02/12)** | **≈650.000/tháng** | [CHỐT 2026-08-28, QĐ-09] **Supabase Pro $25/tháng là bắt buộc từ ngày beta**, vì Free **không có backup hằng ngày** trong khi sản phẩm hứa giữ thumbnail vĩnh viễn và ToS hứa giữ ảnh. Tổng kỳ vọng **$28–37/tháng**, đèn báo động **>$60** |
| T11–T12 | Trực beta | **0** | |
| T12 | Quà cảm ơn 12 sổ beta | **1.200.000** | 100.000/sổ, trả sau ngày 14 |
| — | Đệm (tên miền phụ, email domain, phát sinh) | **1.000.000** | |
| | **TỔNG TIỀN MẶT 12 TUẦN** | **8.750.000 – 21.450.000 VND** | Trung tâm ≈ **15 triệu**. Tăng so với bản trước vì: thư luật sư 7 câu (không phải 1), domain lấy mốc cao, và hạ tầng beta không còn 0đ. **~70% khoản này là thư luật sư** — nó vẫn là dòng chi lớn nhất và vẫn là dòng chi đáng nhất |

**Chi phí thật không nằm ở bảng trên.** 12 tuần × 20 h = **240 giờ**. Quy theo cùng đơn giá v2 dùng ở §2 (6,5 pw ≈ 70–95 triệu cho ~400 giờ, tức ~175–240 nghìn/giờ): **42 – 57 triệu VND chi phí cơ hội**, gấp **5–6 lần** toàn bộ tiền mặt. Mọi quyết định "thôi làm thêm cái này cho chắc" phải được định giá bằng cột đó, không bằng cột tiền mặt.

---

## 8. SAU TUẦN 12 — BA NHÁNH

### (a) TÍN HIỆU TỐT — `group-D14(beta) ≥ B`, card-open ≥60%, `q_c ≥ 0,45`

| Tuần | Việc |
|---|---|
| T13 | Viết ADR "đi tiếp", ghi số. ~~Tạo tài khoản Google Play ($25)~~ — **ĐÃ XOÁ** [CHỐT 2026-08-28, QĐ-28]. Nó mâu thuẫn với chính §6 mục 1 của tài liệu này ("KHÔNG mua tài khoản Apple/Play trong 12 tuần") **và** với lý do §6 đưa ra ("đồng hồ 12-tester chạy trên bản build, không trên tuổi tài khoản" — tức mua sớm vô ích), **và** nó nằm **trước** cổng mở khoá native của v2 §6 mục 2 (`sổ-D28 ≥ 35%`), thứ chỉ có số ở 26/01/2027 |
| T13–T18 | Build nốt phần còn lại: **lưới 30 ngày** (ưu tiên 1 — nó là memory layer, và Asset 2 của `09` phụ thuộc vào nó) · nút thả tim · biến thể card đủ mâm + mốc sổ · Của tôi đầy đủ · **Tết freeze — hạn hoàn thành 25/01/2027**, cửa sổ đóng băng **03/02 → 12/02/2027** (QĐ-06b; **KHÔNG phải 17/02**, đó là Tết 2026) · dashboard cấp sổ |
| T15–T20 | Mở lên **≤30 sổ** (cần ~150 lời mời ở tỉ lệ hình thành 20,5% — **mọi tham số trong chuỗi đó là [ước lượng], không phải đo**). Trần vận hành 10 h/tuần — vượt 3 tuần liên tiếp thì giảm số sổ, không giảm giấc ngủ. **Trần cứng hành chính 60 sổ** (đèn vàng pháp lý, QĐ-04) |
| **26/01/2027** | **Đo `sổ-D28` trên cohort tuần 1–4 (02/12→29/12/2026), n≥24** [QĐ-13]. Đây là cổng mở khoá widget/native (v2 §6 mục 2: ≥35%). Điều kiện "≥30 sổ" đã hạ xuống ≥24 vì kịch bản cơ sở của `09` không sinh nổi 30 sổ trong 4 tuần. In kèm KTC ±17 điểm |
| T20 | Câu hỏi bổ sung cho luật sư: hồ sơ giấy phép MXH cần gì, mất bao lâu. Dashboard cảnh báo bằng **hai counter** (QĐ-04): `monthly_visits` vàng 6.000 / đỏ 8.500 · `monthly_active_persons` vàng 600 / đỏ 850. **Con số 700 cũ đã bị bác** — nó báo động muộn 2,5 lần |
| ~T24 | Đối chiếu kill gate founder: **31/03/2027 — >15 h/tuần VÀ `sổ-D28` <25% ⇒ dừng.** [QĐ-01] Vế "doanh thu = 0" **đã bị bỏ** khỏi điều kiện: nếu pháp lý cấm phát sinh doanh thu ở tier thông báo thì doanh thu 0 là hệ quả pháp lý, không phải tín hiệu thị trường |

### (b) MỜ — vùng xám, lệch ±5 điểm quanh B

**Luật P8 chi phối tuyệt đối: vùng xám không được sửa bằng feature.**

| Tuần | Việc |
|---|---|
| T13 | Chỉ **một** thay đổi được phép, và chỉ khi H1 xám (card-open 40–60%): ship **Android web push** (+0,3 pw, 0đ). ⚠️ **HAI CẢNH BÁO phải đọc trước khi tin vào phương án này:** (1) `03` §9 B4 nói **Service Worker nhiều khả năng KHÔNG đăng ký được trong webview Zalo** — nếu đúng thì phương án dự phòng này **không tồn tại**, và cả ba phương án thay thế ở `03` §4c đều đắt hơn hoặc phá câu bán. Buổi kiểm chứng 04/09 phải trả lời câu này. (2) Con số "phủ >85% máy VN" **đang mâu thuẫn trong hồ sơ**: r05 ghi >85%, r02 dẫn StatCounter T7/2026 ghi **60,38%** (`08` §8.2). Chưa ai giải. Ở 60% thì lập luận yếu đi rõ rệt |
| T13 | Nếu H1 đạt nhưng H2 xám (`0,35 ≤ q_c < 0,45`): đọc **phân bố** ngày hụt, không đọc trung bình. Nếu phần lớn ngày hụt là "chỉ 1 người có mặt" → mở đúng mục 17 ở v2 §6 (cơ chế "gánh", +0,2 pw) |
| T14–T16 | **Chạy lại đúng sản phẩm đó với 12 sổ mới**, 14 ngày, **đảo người tuyển** (để tách vốn xã hội của founder khỏi tín hiệu) |
| T17 | Cổng lặp lại. **Vùng xám lần 2 = kết quả xấu.** Không có lần 3 — hai lần xám liên tiếp là câu trả lời, không phải sự thiếu may mắn |

### (c) XẤU — `q_c < 0,35`, hoặc card-open <40%, hoặc 0/12 sổ tự hỏi "mai còn chốt sổ không"

| Tuần | Việc |
|---|---|
| T13 | **Dừng build trong tuần đó.** Không patch, không "thử thêm một tính năng" |
| T13 | Đọc kết quả H3 để biết dừng cái gì: nếu nhánh không-kèo thắng ≥10 điểm ở Bước 0 thì cái chết là của **lớp kèo**, không phải của **lớp nhìn thấy nhau** — còn một sản phẩm khả dĩ ("gửi một tấm hôm nay tao thế nào trong nhóm Zalo"), rẻ hơn ~1,0 pw. Nếu cả hai nhánh cùng chết thì nghi thức hằng ngày không tồn tại và **không còn gì để cứu** |
| T14 | **Báo trước ≥14 ngày** (nghĩa vụ ToS, `05` §8.2 điều 6) → **mở đường cho user tải ảnh về** → rồi mới xoá dữ liệu 12 sổ beta, chụp màn hình bảng trống. ⚠️ **Công cụ export CHƯA TỒN TẠI** trong bất kỳ bảng pw nào — và trớ trêu là `10` §3.1 định **bán** đúng thứ đó (P1, 99k/sổ/năm). Chốt: một script export ZIP chạy tay (~0,1 pw) phải nằm trong hạng mục 9, vì bán một quyền luật định là rủi ro riêng và vì không có nó thì lời hứa trong ToS là lời hứa suông |
| T14 | Viết **post-mortem 2 trang công khai**: 240 giờ, ~9 triệu, ba giả thuyết, số thật. Đây là tài sản duy nhất còn lại và nó có giá trị thật |
| T14 | Giữ `chotso.vn` thêm 1 năm (**≈750.000đ**, QĐ-27 — một con số duy nhất) — rẻ hơn mọi lựa chọn khác nếu quay lại |
| T15+ | Không bắt đầu dự án mới trong 2 tuần. Quy tắc chống việc "chạy trốn bằng cách khởi động lại" |

---

## 9. BẤT ĐỒNG VỚI ĐỊNH NGHĨA SẢN PHẨM v2

**1. [Lớn] Lịch §4.10 được tính cho founder toàn thời gian, brief nói 20 h/tuần.** `6,5 pw ÷ 0,65 = 10 tuần` chỉ đúng nếu một "tuần" là 40 giờ. Ở 20 h/tuần cùng hệ số đó, MVP 6,5 pw kết thúc **tuần 20**, tức khoảng 20/01/2027 — không phải 02/12/2026, và trần cứng 15/12/2026 trong v2 sẽ bị vi phạm bằng số học, không phải bằng sự lười. Tài liệu này chọn **giữ ngày, cắt scope xuống MVP-0 = 3,5 pw**, để trong 12 tuần có được thứ đắt giá nhất: `group-D14` đo trên sổ người ngoài. Nếu founder không đồng ý cắt, thì phải sửa lịch §4.10 chứ không được giữ cả hai.

**2. [Lớn] Trần vận hành 10 h/tuần mâu thuẫn với chính bảng đứng ngay trên nó.** v2 §9 ghi Bước 0 tốn **~15 h/tuần** rồi ghi trần cứng vận hành **10 h/tuần** trong cùng một bảng. Ở founder 20 h/tuần, hai tuần Bước 0 tiêu 75% quỹ giờ — nghĩa là **T1–T2 build được 0 giờ**, và roadmap này giả định đúng như vậy. Đề nghị sửa v2: trần 10 h/tuần áp dụng **từ giai đoạn build trở đi**, Bước 0 là ngoại lệ có tên.

**3. [Vừa] H1 không có thiết bị đo trong Bước 0.** v2 đặt ngưỡng "≥60% Active mở card trong 24h" nhưng card Canva dán tay không đếm được gì. Không chốt thiết bị đo trong ngày 04/09 thì đến 22/09 sẽ phải ước lượng H1 bằng cảm giác — và H1 là giả thuyết trung tâm của cả hướng. Đề xuất ở T0 mục thêm.

**4. [Vừa] Ngày quyết định 22/09 quá sát ngày im lặng cuối 21/09.** Một ngày để tổng hợp 8 sổ × 14 ngày × 6 cột rồi ra văn bản có chữ ký là mỏng đến mức mời gọi kết luận cẩu thả. Đề nghị: quyết định **23/09**, dòng code đầu **24/09**. Tổng lịch không đổi, chỉ đổi thứ tự trong T3.

**5. [Nhỏ, nhưng là 0,1 pw miễn phí] "cron 21:00" ở §4.10 mục 7 là hạng mục thừa.** §4.7 nói rõ nếu 23:00 chưa ai chốt thì hệ thống **không làm gì**, và §6 mục 3 cấm mọi push. Vậy cron 21:00 không gửi gì cho ai — trạng thái "sẵn sàng chốt" tính được từ giờ hiện tại lúc render, không cần job. Cắt được ~0,1 pw và một điểm hỏng.

**6. [Vừa] "Beta 30 sổ" trong bảng giờ §9 không khớp với toán cold start của chính v2.** Ở tỉ lệ hình thành 20,5%/6 lời mời, 30 sổ cần ~150 lời mời — không phải việc của một tuần với founder một mình. Roadmap này đặt **12 sổ ở T11** và để 30 sổ ở tuần 15–20 (nhánh a). Con số 30 nên được ghi lại trong v2 kèm mốc thời gian, không đứng trần.

**7. [Ghi nhận, không phản đối] MVP-0 làm §9 mục 4 (moat = 0) tệ hơn nữa** vì cắt cả lưới 30 ngày lẫn thả tim. Chấp nhận có ý thức: trong 12 tuần này thứ được mua không phải sự phòng thủ, mà là **một con số đo trên người lạ**.

---

## 10. CÂU HỎI MỞ CẦN FOUNDER QUYẾT

| # | Câu hỏi | Hạn chót | Vì sao không hoãn được |
|---|---|---|---|
| 1 | **Chấp nhận cắt xuống MVP-0 = 3,5 pw, hay chấp nhận beta trượt sang ~tuần 20?** | 06/09 (T0) | Toàn bộ T4–T12 phụ thuộc câu trả lời |
| 2 | 20 h/tuần là con số **thật** hay con số hy vọng? Nếu thật chỉ là 12–15 h/tuần thì MVP-0 phải xuống ~2,2 pw | 06/09 | Đo bằng cách ghi giờ thật trong T1–T2 rồi hiệu chỉnh ở cổng #1 |
| 3 | Thiết bị đo H1: danh sách "Đã xem" của Zalo có đủ tin cậy không, hay phải dùng short link riêng mỗi sổ mỗi ngày? | 04/09 | Không có thiết bị đo thì cổng #1 mất một trong ba tiêu chí |
| 4 | Có máy Android tầm trung (Xiaomi/Oppo/Vivo) để test không, hay phải mua ~2,5 triệu? | 20/09 | §10(h) đòi test trên máy thật; webview Zalo là nơi lỗi `chooseImage` sống |
| 5 | Báo giá thật cho **một thư ý kiến luật sư 1 câu** — 3 văn phòng | 10/09 | Dải 3–15 triệu quá rộng để lập ngân sách |
| 6 | Nếu Bước 0 ra kết quả **BỎ KÈO** (nhánh B thắng ≥10 điểm), founder có thật sự build "Locket trong nhóm Zalo" không, hay sẽ dừng? | 22/09 | Trả lời **trước** khi nhìn số. Trả lời sau khi nhìn số là hợp lý hoá |
| 7 | Trần vận hành 10 h/tuần: nếu T11 vượt trần, cắt số sổ beta xuống 8 — founder chấp nhận cỡ mẫu nhỏ hơn chứ? | 09/11 | Quyết định trước, để lúc mệt không phải quyết |
| 8 | ~~Ngưỡng 700 đếm bằng định nghĩa nào?~~ **ĐÃ CHỐT TẠM (QĐ-24), chờ luật sư xác nhận:** `monthly_active_persons` = số person khác nhau có ≥1 tấm trong 30 ngày · `monthly_visits` = số phiên khác nhau (session mới sau 30 phút không hoạt động) chạm bất kỳ route nào, kể cả trang public. **Đếm rộng, báo động sớm** | Câu 1b gửi luật sư | `05` §12 mục 2: chênh lệch giữa ba cách hiểu là **hơn 10 lần** — quyết định trần beta là 60 sổ hay 600 sổ |
| 9 | Ai là người thứ hai biết mật khẩu Supabase/R2/domain? Bus factor = 1 hiện đang bao gồm cả hạ tầng | 24/09 | Một tài khoản mất là mất cả 240 giờ |
