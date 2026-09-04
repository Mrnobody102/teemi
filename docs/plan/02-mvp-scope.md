# PHẠM VI MVP — CHỐT SỔ

_Viết 03/09/2026. Tài liệu con của `/home/huypq/teemi/docs/plan/01-dinh-nghia-san-pham-v2.md` (§4.10, §5, §6, §11, §12). Mọi con số ở đây phải khớp với file đó; chỗ nào tôi thấy file đó sai hoặc thiếu, tôi ghi vào §8 "Bất đồng" chứ không tự đi hướng khác._

> ### 🔒 ĐÃ ĐỐI CHIẾU VỚI BẢNG PHÁN QUYẾT TRỌNG TÀI — 2026-09-03
> Toàn bộ tài liệu này đã được đối chiếu với **`/home/huypq/teemi/docs/plan/_rulings.md`** (bảng phán quyết trọng tài ban hành 03/09/2026: 53 mâu thuẫn · 25 mục scope creep · 123 dòng từ điển giá trị chuẩn).
> **Mọi hằng số, ngưỡng, ngày tháng và con số pw trong file này lấy từ từ điển giá trị chuẩn của `_rulings.md` (mục A01–A123).** Khi tài liệu này và `_rulings.md` khác nhau, **`_rulings.md` thắng** — chỗ nào tôi thấy phán quyết sai, tôi ghi vào §8 "Bất đồng" và **vẫn sửa theo phán quyết**.
> Các mục đã bị **CẮT** theo phán quyết scope creep được liệt kê đầy đủ ở **§10 "ĐÃ CẮT"** cuối tài liệu, kèm điều kiện mở lại.
> Các mục **CẦN FOUNDER QUYẾT** không được máy tự quyết — chúng xuất hiện dưới dạng khối cảnh báo ⚠️ nêu đúng **hai lựa chọn kèm khuyến nghị**. Tài liệu này sở hữu **ba** khối như vậy: **tên sản phẩm** (ngay dưới đây, hạn 07/09) · **D-02 số giờ/tuần cam kết** (cuối §3.2, hạn 22/09) · **D-01 cắt thêm 1,08 pw ở đâu** (cuối §4.3, hạn 22/09). Bảy mục D còn lại (D-03…D-10) thuộc chủ quyền của `03`, `05`, `06`, `08`, `09`, `10` và **không** được quyết ở đây; chỗ nào chúng chạm vào tài liệu này thì được **trích dẫn**, không phải **trả lời** (D-06 export ở DoD 7.4, D-08 thị phần Android và D-09 `navigator.share({files})` ở §9 câu 5).
> **Ngày rà lại: 04/09/2026.** Vòng sửa trước bị ngắt giữa chừng; vòng này soát lại toàn bộ A/B/C/D và tính lại mọi con số dẫn xuất (tổng pw §2 và §3.1, bảng tuần lịch §3.2, chi phí hạ tầng §1.4/§4.1/§4.2, cỡ mẫu cổng store §4.4).

**Lịch dùng trong tài liệu này lấy từ mục A104–A123 của `_rulings.md`:** gửi luật sư + báo giá domain 03/09 · buổi kiểm chứng nền tảng **04/09** (7 câu) · hạn chốt bất biến **07/09** · Bước 0 chạy **08/09 → 21/09/2026** · Cổng #1 + quyết định bằng văn bản **22/09** · dòng code đầu tiên **23/09** · kill gate kỷ luật scope **05/10** · cổng tiến độ build **02/11** · cổng sẵn sàng beta **30/11** · beta chạy **02/12** · **trần cứng 15/12/2026** · đọc `group-D14` beta **16/12** · cổng `sổ-D14` **11/01/2027** · cổng `sổ-D28`/widget **26/01/2027** · kill gate founder **31/03/2027**.

> ### ⚠️ CẦN FOUNDER QUYẾT — TÊN SẢN PHẨM (chưa được duyệt, máy không tự quyết)
> Tài liệu này đang viết tên **Chốt Sổ** ở tiêu đề, ở domain `chotso.vn` và trong 9 script Bước 0 (§5.9). **Founder chưa duyệt việc đổi tên khỏi tên gốc `Teemi`.** Bảng phán quyết không có dòng nào phán quyết tên sản phẩm — nó chỉ giả định `chotso.vn` khi chốt A67/A68 (một domain, **770.000đ**/năm).
> **Hai lựa chọn, chọn trước 07/09/2026** (hạn mua domain + hạn chốt bank câu của Bước 0 — sau 08/09 tên đã đi vào 112 lần dán card vào nhóm bạn thật, đổi sau là đổi trong đầu người dùng chứ không phải đổi trong file):
> - **(a) Chốt tên `Chốt Sổ`** — mua `chotso.vn`, giữ nguyên mọi thứ trong file này. Giá: bỏ tên `Teemi` và mọi tài sản gắn với nó.
> - **(b) Giữ tên `Teemi`** — phải sửa tiêu đề tài liệu, S1–S9 ở §5.9, và **lấy lại báo giá domain** (A67 là báo giá cho `.vn`, không phụ thuộc tên, nhưng chuỗi tên miền thì có).
>
> **Khuyến nghị: (a)**, đúng một lý do kiểm chứng được — `04` đã đặt khoá chính là `book_id` và bảng là `book` (A30/C52) vì "khớp tên sản phẩm Chốt Sổ"; đổi tên bây giờ không làm hỏng schema, nhưng đổi tên **sau 23/09** thì mọi câu chữ hướng người dùng đã in vào card. **Đây là khuyến nghị, không phải quyết định. Nếu quá hạn 07/09 mà founder chưa trả lời, ghi vào `ADR-000` dòng "quyết định mặc định do quá hạn".**

---

## 1. MVP LÀ GÌ TRONG DỰ ÁN NÀY

### 1.1. Định nghĩa dùng làm luật

> **MVP của Chốt Sổ không phải "phiên bản đầu tiên của sản phẩm". Nó là thí nghiệm rẻ nhất đủ sức làm founder ĐỔI Ý.**

Phép thử để biết một hạng mục có thuộc MVP hay không, hỏi đúng một câu:

> _"Nếu bỏ hạng mục này, có giả thuyết nào ở §11 trở nên không đo được không?"_

- Không → hạng mục đó **không thuộc MVP**, bất kể nó rẻ đến đâu.
- Có → nó thuộc MVP, bất kể nó chán đến đâu.

Luật này quan trọng vì cạm bẫy của founder một mình không phải là làm feature to. Nó là làm **hai chục thứ nhỏ, mỗi thứ nửa ngày** — đúng thứ mà phản biện #9 đã bắt được ở DOC 1: "MVP cực nhỏ" hoá ra là 17 hệ thống ≈ 33 pw (c-scope-execution §1).

### 1.2. MVP KHÔNG trả lời câu hỏi nào

Ba câu hỏi dưới đây **không** do MVP trả lời. Nếu founder viết code để trả lời chúng, đó là vi phạm phạm vi:

| Câu hỏi | Ai trả lời | Khi nào |
|---|---|---|
| "Nhóm bạn thật có tự chốt sổ vào một tối founder im lặng không?" | **Bước 0 làm tay** (§5) | 08/09 → 22/09/2026, **0 dòng code** |
| "Kèo có giá trị hay chỉ là thuế?" (H3) | **Bước 0**, hai nhánh | cùng cửa sổ trên |
| "Sản phẩm này có thành một doanh nghiệp không?" | Không giai đoạn nào trong tài liệu này | v2 §9 mục 5 đã gọi đúng tên: small profitable business hoặc portfolio piece |

### 1.3. MVP trả lời ĐÚNG MỘT câu hỏi

> **"Khi cái sổ do phần mềm dựng thay vì do founder dựng tay mỗi tối, nhịp có giữ nguyên không — và nó có lan sang sổ thứ hai mà founder không đi tuyển không?"**

Tách thành hai chỉ số nhị phân, không có vùng diễn giải:

| Ký hiệu | Định nghĩa | Ngưỡng | Đọc kết quả |
|---|---|---|---|
| **M1** | `group-D14(app)` trên **≥12 sổ beta** (cohort đợt 1, 02/12→29/12/2026 — A90) | **≥ B**, với `B` = công thức chốt ở A26 | Nếu app **không bằng** founder ngồi dán card Canva, app không có lý do tồn tại (v2 §11, neo nội bộ) |
| **M2** | Số sổ mở mới **không do founder tuyển** trong 28 ngày beta | **≥ 1** | M2 = 0 nghĩa là card không phải kênh phân phối, mà chỉ là một tấm ảnh đẹp |

**Công thức `B` (A26, QĐ-26) — chốt, không diễn giải lại:** `B` = **% sổ nhánh A còn `group_alive` ở ngày 14 của Bước 0**, mẫu số = **5 sổ nhánh A**, **loại sổ số 0 (nhóm founder) khỏi mẫu số** (A95), `group_alive` tính trên **roster đóng băng** (A08 + A14).

> ⚠️ **Với n = 5, `B` chỉ nhận các giá trị {0 · 20 · 40 · 60 · 80 · 100}% — bước nhảy 20 điểm.** Con số này **phải được in kèm mỗi lần trích dẫn `B`**. Nếu nhánh A rơi xuống 4 sổ (§5.4), bước nhảy thành **25 điểm** và phải ghi lại.

`B` chưa tồn tại hôm nay. **Không được đặt một con số cho `B` trước 22/09** — đặt trước là tự viết đề bài dễ cho mình.

### 1.4. Ba thứ MVP phải làm được, ngoài chuyện chạy

1. **Đo được H1, H2, H3 mà không cần founder mở SQL bằng tay.** Một dashboard đọc trong 3 phút mỗi sáng Chủ nhật. Nếu phải viết query tay thì founder sẽ không đo, và không đo thì 6,63 pw (§2, tổng đã tính lại) là tiền đổ xuống sông.
2. **Xoá được sạch.** Một nút "xoá dữ liệu của tôi" hoạt động thật, vì đây là hàng rào pháp lý rẻ nhất (Luật 91/2025, NĐ 53/2022) và vì nó là điều kiện để dừng dự án cho tử tế.
3. **Chết được rẻ.** Deploy = một lệnh; rollback < 10 phút; hạ tầng **$28–37/tháng** ở quy mô beta — **không phải $0–12** (A74/QĐ-09: Supabase Pro **$25/tháng bắt buộc từ ngày beta chạy 02/12** vì bản Free không có backup hằng ngày, trong khi ToS hứa giữ ảnh và A38 hứa giữ thumbnail vĩnh viễn). Đèn báo động chi phí: **>$60/tháng** (A75). Với bus factor = 1, độ dài vòng lặp sửa lỗi quan trọng hơn độ đẹp (v2 §2, lý do 3).

---

## 2. BẢNG USER STORY

Quy ước: **1 pw = 40 giờ tập trung** (A80) **= 5 pd**. Cột "Mức" dùng ở §4: **WS** = Walking skeleton · **MVP** = MVP thật. Hai cột cuối là **bắt buộc theo C09** (không có chúng thì hai hệ toạ độ cắt của `02` và `07` không ánh xạ được vào nhau).

> ### ⚠️ TỔNG ĐÃ TÍNH LẠI: **33,15 pd = 6,63 pw**, KHÔNG còn là 32,5 pd = 6,5 pw
> Bảng này trước đây cộng ra đúng 32,5 pd vì nó **chưa ghi ba khoản creep hợp lệ** và **chưa ghi hai khoản cắt của chính nó**. Sau khi thi hành phán quyết:
> | Khoản | pw | pd | Căn cứ |
> |---|---|---|---|
> | `audit_log` từ migration đầu | **+0,15** | +0,75 | S24 / A49 — "rẻ nhất khi làm sớm, **không thể làm bù**" |
> | `pulse_survey` (event 30, ngày 7 và 21) | **+0,05** | +0,25 | S25 / A28 — kênh **duy nhất** còn lại sau khi HM-1/HM-3 chết |
> | Định giá lại danh mục event (0,5 pw cấp cho 14 event, nay là **32 event**) | **+0,15** | +0,75 | C10 / A53 |
> | Cắt nút thả tim (nằm trong US-10) | **−0,12** | −0,60 | S01 / C03 |
> | Cắt cron 21:00 `mo_chot_so` (nằm trong US-24) | **−0,10** | −0,50 | A04 / QĐ-22 |
> | **Ròng** | **+0,13** | **+0,65** | |
>
> `6,5 + 0,13 = **6,63 pw = 33,15 pd**.`
> ⚠️ **Con số này VƯỢT trần backlog cứng A83 (6,5 pw) đúng 0,13 pw.** Theo A83, vượt trần ⇒ **kill gate kỷ luật scope 05/10/2026 kích hoạt**. Phải cắt bù ≥0,13 pw và ghi vào `docs/adr/pw-ledger.md` trước 05/10 — **không được cắt bằng cách viết lại con số ở đây**.
> ⚠️ **Khoản cắt "nút thả tim" ở bảng này trị giá 0,12 pw, không phải 0,20 pw.** Con số 0,20 pw lưu hành ở `06`/`07` là ước lượng của tài liệu khác cho cùng khoản. Theo nguyên tắc 1 (con số thận trọng hơn thắng) và luật A87 (**một khoản cắt chỉ được chi MỘT LẦN**), sổ cái ghi **0,12 pw** và chỉ ghi một lần.

| ID | Story | Tiêu chí hoàn thành (kiểm chứng được) | pd | Phụ thuộc | Mức | Hạng mục §4.10 | Trong MVP-0? |
|---|---|---|---|---|---|---|---|
| **US-00** | Là founder, tôi có khung dự án + schema + RLS + deploy để mọi thứ khác đứng lên được | [A29–A32, C02/C52] Schema **tiếng Anh**, **nguồn duy nhất là `04` §1** — tài liệu này **không tự khai bảng**. Bảng lõi: `book · membership · person · proof · book_day · event · remote_config · card · report · block · audit_log`. **Cột đầu tiên của mọi bảng và mọi event là khoá sổ `book_id`** (P10 đọc lại theo C52 — **không** `group_id`, **không** `sổ`/`thành viên`) · khoá duy nhất bảng tấm = `UNIQUE(book_id, person_id, book_date)` (A33) · RLS policy viết **trước** UI cho mọi bảng · `vercel --prod` chạy 1 lệnh · rollback đo được <10 phút | **3,0** | — | WS | 1 | **Y** |
| **US-01** | Là người mở sổ, tôi đặt tên sổ và nhận mã 6 ký tự + link mời | [CHỐT 2026-08-28, QĐ-12] Bảng chữ **đúng 28 ký tự**, đọc từ `remote_config['book.code_alphabet']`: `23456789 A C D E F G H J K M N P Q R T U V W X Y` (loại `0/O`, `1/I/L`, `B` vs 8, `S` vs 5, `Z` vs 2). 28⁶ ≈ **481 triệu** tổ hợp. ⚠️ Regex cũ của `04` `^[2-9A-HJ-NP-Z]{6}$` **CHỨA chữ L** (dải J–N) — đúng ký tự dễ đọc nhầm thành 1/I trên ảnh JPEG đã qua nén của Zalo, tức nó giết chính đường thoát hiểm mà mã này tồn tại để cung cấp. Test CI: **`slug` công khai không được chứa `code6` như substring** · sinh 200 mã liên tiếp không trùng, không ra từ tục · link mời mở được trong webview Zalo | 1,5 | US-00 | WS | 5 | **Y** |
| **US-02** | Là người được mời, tôi vào sổ bằng link hoặc mã, **không đăng nhập** | Device token trong `localStorage` · vào lại sau khi đóng app vẫn đúng người · nhập mã 6 ký tự khôi phục được trên máy khác · **0 màn đăng nhập** | 1,5 | US-01 | WS | 1 | **Y** |
| **US-03** | Là thành viên, tôi chọn kèo bằng 8 nút preset hoặc tự viết ≤30 ký tự | 8 preset đúng danh sách v2 §4.8 · preset **copy thành text** vào `goal_text`, `preset_id` không lưu per-user trên server · 10 từ khoá rối loạn ăn uống kích hoạt màn hỗ trợ + ghi `safety_screen_shown{reason_bucket}` | 1,0 | US-02 | WS | 5 | **Y** |
| **US-04** | Là thành viên, tôi mở sổ và **thấy ảnh của mọi người trước**, ô của mình sau | Pixel đầu tiên dưới header là hàng ảnh hôm nay, không phải nút Nộp (snapshot test, P5) · người VẮNG **không render gì cả** — không ô, không tên (test CI, P2) · ba con số hiển thị | **2,5** | US-02 | WS | 4 | **Y** |
| **US-05** | Là thành viên, tôi nộp một tấm kèm nhãn XONG hoặc TOANG | Chọn từ thư viện **mặc định**, không ép chụp · nén cạnh dài 1080 q=0,72 → mục tiêu **~110 KB** `[chưa đo — A37]`, **trần chấp nhận 150 KB**, đo thật trên **20 ảnh Android tầm trung** trước khi tin con số nào · **strip EXIF trước khi upload** · presigned PUT thẳng R2, bytes không đi qua API server · nhãn bắt buộc, không có lựa chọn thứ ba | **3,5** | US-00 | WS | 2 | **Y** |
| **US-06** | Là thành viên, tôi nộp lại và tấm cũ bị ghi đè | 1 tấm/người/ngày · nộp lần 2 ghi đè, không cộng thêm vào `số tấm` | 0,3 | US-05 | WS | 2 | **Y** |
| **US-07** | Là thành viên, tôi cuộn xuống thấy lưới 30 ngày | ⛔ **CẮT khỏi MVP-0** (A86/QĐ-25 · S14 giữ lưới ở T13+). Khi làm lại: trong **cùng màn** Sổ hôm nay, không phải màn riêng · thumbnail 320px (**giữ vĩnh viễn**, A38) · lazy load | 1,5 | US-04 | MVP | 4 | **N** — A86 |
| **US-08** | Là bất kỳ ai trong sổ, tôi bấm "Chốt sổ" và nhận card 4:5 | Render server-side (satori) <2s p95 · font Việt **có dấu** nhúng sẵn, 0 ký tự tofu · chỉ ảnh người ĐÃ nộp · dòng chân `Minh chốt sổ · mai tới lượt Linh` · snapshot test card (P4) | **3,0** | US-04 | WS | 3 | **Y** |
| **US-09** | Là người chốt sổ, tôi chia sẻ card vào Zalo hoặc lưu ảnh | Nút Chia sẻ dùng Web Share API, fallback "Lưu ảnh" + copy caption · caption soạn sẵn đúng chuỗi v2 §4.6 · **test bằng tay trên Zalo iOS + Zalo Android** | 0,5 | US-08 | WS | 3 | **Y** |
| **US-10** | Là người chưa vào sổ, tôi mở link và thấy trang public | [CHỐT 2026-08-28, QĐ-05b] **GIỮ trang public, CẮT nút thả tim** khỏi MVP-0. Ảnh mờ + tên sổ + nút vào sổ · OG preview 4:5 (ảnh tĩnh ở MVP-0). **Vì sao giữ trang public dù cả hai bản cắt đều đề nghị cắt:** M2 ("≥1 sổ mở mới không do founder tuyển") là 1 trong 2 tiêu chí thành công của MVP, và trang public là bề mặt phân phối duy nhất — cắt nó rồi đo phân phối là tự vô hiệu hoá thí nghiệm (§4.3 của chính tài liệu này đã cảnh báo). **Vì sao cắt nút tim:** không giả thuyết nào gắn với nó, và HM-1/HM-3 xây trên nó đã bị bỏ (`06` §4.2) | **0,6** | US-08 | MVP | 4 | **Y** |
| **US-11** | Là hệ thống, tôi tính "ngày" đúng ranh giới 04:00 ICT và ngưỡng `k` | `NGÀY = 04:00:00 → 03:59:59 ICT (UTC+7)` (A01) · **[CHỐT 2026-08-28, QĐ-14b] `k` tính trên `A_eff = min(A(D), A(D−1))`**: `k=1` nếu `A_eff ≤2`, `k=2` nếu `A_eff ≥3`. Lý do (`04` §9.1, cùng họ với lỗi `ceil(0,6×A)` mà v2 đã bắt): nếu `k` tính trên `A` của **cùng ngày**, thì sổ 2 người (k=1) có người thứ 3 nộp một mình sẽ nhảy lên k=2, present=1 < 2 ⇒ **mất ngày và mất chuỗi ĐÚNG vào ngày có thêm bạn**. Sổ bị phạt vì có thêm bạn. Sửa là một hàm `min()`, **0 pw, phải vào trước commit đầu** vì sau đó là dữ liệu lịch sử · rollover **04:05 ICT** (A03/QĐ-21 — cron `5 21 * * *` UTC; **không phải 04:00**, vì biên nộp muộn kỹ thuật là **120 giây** trên `intent_at`, A02) · nộp lúc 01:00 tính cho hôm trước · rollover chạy **theo lô lúc 04:05**, không realtime · mọi hằng số đọc từ remote config (P6) | 1,2 | US-05 | WS | 6 | **Y** |
| **US-12** | Là hệ thống, tôi giữ chuỗi với 2 van ngày nghỉ / cửa sổ 7 ngày trượt | 2 ngày hụt đầu → icon xám **không tên** · ngày hụt thứ 3 mới đứt · chuỗi chỉ giảm về đúng 0 (test bất biến US-22) | 0,8 | US-11 | MVP | 6 | **Y** |
| **US-13** | Là thành viên, tôi thấy "Hôm nay đủ mâm" và mốc sổ 25/50/100/250/500 | ⛔ **CẮT khỏi MVP-0** — "biến thể card (đủ mâm + mốc sổ)" nằm nguyên văn trong danh sách cắt A86/QĐ-25. Khi làm lại: card đổi màu · **không** nêu tên ai đóng góp nhiều nhất · không vật phẩm, không tiền tệ | 0,5 | US-08 | MVP | 3 | **N** — A86 |
| **US-14** | Là thành viên, tôi thấy tên người chốt sổ **ngày mai** trên card | Chỉ số xoay vòng theo thứ tự vào sổ · **ai cũng bấm được bất cứ lúc nào**, không khoá · ngày vẫn tính khi không ai chốt (unit test, P11) | 0,2 | US-08 | WS | 3 | **Y** |
| **US-15** | Là thành viên, tôi vào "Của tôi" xem tỉ lệ riêng tư, đổi kèo, rời sổ, xoá dữ liệu | ⛔ **CẮT khỏi MVP-0 — màn Của tôi xuống 0,00 pw** (A86/QĐ-25). ⚠️ **Ngoại lệ không được cắt:** nút **"xoá dữ liệu của tôi"** vẫn phải chạy thật ở MVP-0 (nghĩa vụ Luật 91/2025, DoD 7.4) — nó chuyển thành **một liên kết trong màn 7**, không phải một màn. Export (bản sao dữ liệu) làm **bằng tay 0 pw**: một truy vấn SQL + zip, SLA 10 ngày, ghi vào `RUNBOOK.md` (D-06). Khi mở lại màn: "Bạn đã có mặt 23/30 ngày" **chỉ mình thấy** · đổi kèo 1 lần/30 ngày | 1,5 | US-03 | MVP | 7 | **N** — A86 |
| **US-16** | Là thành viên, tôi mở một ảnh và báo cáo / chặn / xoá ảnh của chính mình | [A60/C23] Báo cáo ghi `report_created`, gửi email founder, **và `proof.hidden_at = now()` ẩn TOÀN CỤC ngay ở report ĐẦU TIÊN** — ẩn với **tất cả**, không phải chỉ với người báo cáo (Luật ANM 116/2025 Điều 16 khoản 3); founder xử trong SLA và **khôi phục nếu report sai** · chặn = ẩn ảnh người đó với riêng tôi (`block_created`) · xoá ảnh mình ghi `proof_deleted_by_self` | 1,2 | US-04 | MVP | 9 | **Y** |
| **US-17** | Là người dùng, tôi đọc được ToS, quyền riêng tư, cách báo cáo, **SLA KÉP** | Trang tĩnh, có email thật, có ngày cập nhật · [CHỐT 2026-08-28, QĐ-17] ghi **hai** con số cho **hai** đối tượng: **48 giờ** cho khiếu nại người dùng (v2 §10d) · **24 giờ, khẩn cấp 6 giờ** cho yêu cầu của cơ quan nhà nước (**luật định, không thương lượng** — Luật ANM 116/2025). Bản trước ghi một con số 48h và ghi rõ "không phải 24h", tức **phủ nhận đúng nghĩa vụ luật định** | 0,8 | — | MVP | 9 | **Y** |
| **US-18** | Là hệ thống, tôi chặn người khai <16 tuổi mở sổ | [CHỐT 2026-08-28, QĐ-20] **Một ô tick "tôi đủ 16 tuổi", lưu cờ boolean `is_16_plus` + `age_gate_at`. KHÔNG lưu năm sinh, KHÔNG lưu ngày sinh** — nguyên tắc tối thiểu hoá dữ liệu (Luật 91/2025), và đây là nhóm người dùng nhạy cảm nhất trong sản phẩm. Kiểm tra ở **tầng ứng dụng** · <16 không mở được sổ · ToS ghi "dành cho người ≥16" · gọi đúng tên: **hàng rào giấy tờ, không phải hàng rào kỹ thuật** | 0,3 | US-01 | MVP | 9 | **Y** |
| **US-19** | Là hệ thống, tôi xoá ảnh gốc sau 72h và giữ thumbnail 320px | TTL ảnh gốc **72 giờ** (A36) = R2 Lifecycle + **job đối soát 04:10 ICT** (A05), kiểm bằng cách đặt TTL 1h ở staging · thumbnail 320px (~18 KB, A39) **giữ VĨNH VIỄN** đến khi chủ ảnh xoá; sổ ngủ 180 ngày ⇒ chuyển **lớp lạnh R2 IA, KHÔNG xoá** (A38) · lưới 30 ngày vẫn hiển thị đủ sau khi gốc bị xoá | 0,7 | US-05 | MVP | 2 | **Y** |
| **US-20** | Là founder, tôi đọc H1/H2/H3 trong 3 phút | Cột đầu tiên là **`book_id`** (P10, QĐ-02c) · `group_alive = ≥3 người nộp trong 7 ngày` · **32 event của danh mục hợp nhất** (`04` §7.1) + bảng `audit_log` có trong schema **từ commit đầu** — không backfill được · `pulse_survey` ngày 7 và 21 · exit survey 1 câu · ở MVP-0: **6 truy vấn SQL chạy tay**, không phải UI | **4,25** | US-11 | MVP | 8 | **Y** |
| **US-21** | Là founder, tôi đổi hằng số cơ chế mà không deploy | `k`, số van, giờ chốt, TTL, ngưỡng mốc đọc từ bảng `config` · `grep` không tìm thấy số ma trong logic ngày/chuỗi (lint CI, P6) | 0,5 | US-00 | MVP | 1 | **Y** |
| **US-22** | Là founder, tôi có test chặn được vi phạm nguyên tắc | 10.000 mô phỏng 30 ngày, assert không cột nào giảm ngoài `chuỗi` (P1) · test CI quét template bank tìm `{goal}` / `{goal_text}` (P3) · test CI quét cây render tìm `member.name` trong nhánh `vắng` (P2) · **đỏ = không merge** | 1,0 | US-12 | MVP | 10 | **Y** |
| **US-23** | Là founder, tôi đo được **tỉ lệ mở card trong 24h** (H1) | Link trên card mang `?c=<card_id>` · ghi `card_opened{card_id, member_id, ts}` · dedupe theo member · báo cáo theo sổ, theo tuần | 0,8 | US-08 | MVP | 8 | **Y** |
| **US-24** | Là hệ thống, tôi rollover lúc **04:05 ICT** (QĐ-21). **Cron 21:00 đã bị cắt** (QĐ-22 — trạng thái "sẵn sàng chốt" suy ra được từ giờ server, và v2 §4.7 nói hệ thống không gửi gì lúc 21:00) | Cron chạy 2 lần không sinh 2 bản ghi (**idempotency key `unique(book_id, book_date, kind)`** — A30/A31/C52: khoá sổ là `book_id`, bảng tổng hợp ngày là `book_day`/`book_date`; **không** `group_id`, **không** `logical_date`) · chạy đúng giờ ICT khi server ở UTC · **không** gửi noti nào của mình | **0,5** | US-11 | MVP | 6 | **Y** |
| | **TỔNG** | | **33,15 pd = 6,63 pw** | | | | |
| | **Tập MVP-0 (cột cuối = Y)** | 33,15 − (US-07 1,5 + US-13 0,5 + US-15 1,5) | **29,65 pd = 5,93 pw** | | | | |

**Không có story nào cho:** đăng nhập · reaction · comment · chat · **nút thả tim** (S01/C03) · **vai "chủ sổ" và chức năng kick** (A61/S17 — không tồn tại ở MVP-0; state `removed` **chỉ** dùng cho ca moderation của founder) · boss · xếp hạng · season · cửa hàng · danh sách nhiều sổ · onboarding carousel · push của mình · **Android web push** (S09) · caption trên proof. Xem §6 và §10.

> ### ⚠️ Chênh lệch phải giải trước 23/09 — bảng này ra **5,93 pw** cho tập MVP-0, `07` ra **4,58 pw** cho **cùng** scope
> A85 chốt con số làm việc cho MVP-0 là **4,58 pw**, trần A84 là **3,5 pw** ⇒ **thiếu 1,08 pw** ⇒ **D-01**. Bảng US chi tiết ở trên lại cộng ra **5,93 pw** cho đúng tập đó. Chênh **1,35 pw**.
> Đây chính là lý do **C09** bắt buộc phải có **bảng ánh xạ `US ↔ hạng mục §4.10 ↔ MVP-0`**, viết **22–23/09** cùng văn bản quyết định. Hai cột cuối của bảng trên là nửa việc của `02`; nửa còn lại là cột "US nào" mà `07` §0 phải thêm vào bảng 10 hạng mục. **Hai bảng phải cộng ra cùng một tập US sống.**
> Cho tới phiên 22–23/09: **con số làm việc là 4,58 pw** (A85 thắng theo luật đọc từ điển), và chênh lệch 1,35 pw được ghi vào §8 "Bất đồng với bảng phán quyết" — **không** được giấu bằng cách sửa pd của từng dòng.

---

## 3. ƯỚC LƯỢNG THEO HẠNG MỤC KỸ THUẬT + CẠM BẪY

### 3.1. Bảng chính

Cột cuối là **số ngày đội thêm nếu trúng bẫy** — không cộng vào tổng, nhưng là thứ phải nhìn khi đọc lịch. Nguồn: r05 (tech stack), c-scope-execution, v2 §10(h).

| # | Hạng mục | pw | Cạm bẫy dễ đánh giá thấp | Đội thêm nếu trúng |
|---|---|---|---|---|
| 1 | Khung + schema (**tiếng Anh, nguồn `04` §1**) + **RLS** + deploy + danh tính nhẹ | 0,9 | **RLS không có `auth.uid()` khi danh tính là device token.** Mọi hướng dẫn Supabase giả định user đã đăng nhập. Với `localStorage` token, founder phải chọn: Supabase Anonymous Sign-in, hoặc tự viết API route dùng service key và tự kiểm quyền — cả hai đều đắt hơn "bật RLS". **Chọn sai ở tuần 1 = viết lại lớp truy cập ở tuần 6.** · `localStorage` trong webview Zalo có thể bị dọn theo cache; ITP trên iOS giới hạn storage do script ghi [cần kiểm chứng cho webview Zalo cụ thể] → mất tài khoản, ~5–10% người dùng [ước lượng, option-D §242] | +3 pd |
| 2 | **Media pipeline** (nén, EXIF, presigned R2, thumbnail, TTL) | 0,9 | **HEIC của iPhone** không decode được bằng canvas ở một số WebView → phải fallback · **EXIF orientation**: strip EXIF mà không xoay trước = ảnh nằm ngang 90° cho một nửa người dùng Android · ảnh 12MP làm hết bộ nhớ tab trên máy tầm trung → phải resize theo bước · **CORS trên R2 cho presigned PUT** phải cấu hình riêng, không mặc định · số **110 KB** (v2 §4.2, A37) mang nhãn `[chưa đo]` — r05 §456 và A37 đều yêu cầu đo thật **20 ảnh Android** trước khi tin; thumbnail **~18 KB** (A39) | +4 pd |
| 3 | **Render card server-side** (satori / @vercel/og) | 0,8 | **Font tiếng Việt có dấu phải nhúng thủ công** — satori không tự nạp font; thiếu là ra ô vuông, và card là bề mặt marketing duy nhất · satori chỉ hỗ trợ một tập con CSS (không grid đầy đủ, không nhiều thuộc tính) → layout phải viết lại · ảnh từ R2 phải fetch + inline base64, làm card nặng và chậm · cold start edge function | +3 pd |
| 4 | Màn Sổ hôm nay + lưới 30 ngày + trang public | **1,18** _(1,3 − 0,12 cắt nút thả tim, S01)_ | Hàng ảnh "người khác trước" nghe như CSS nhưng là **ràng buộc kiểm chứng bằng snapshot test** (P5) · lưới 30 ngày với sổ 6 người = 180 thumbnail → phải phân trang/lazy ngay từ đầu · trạng thái "chưa vào sổ" là một nhánh render thứ hai của cùng màn, dễ rò rỉ dữ liệu qua RLS | +2 pd |
| 5 | Mở sổ / Vào sổ / chọn kèo + **deep link mời + OG** | 0,7 | **Zalo cache OG preview rất dai** — sửa card xong link cũ vẫn ra ảnh cũ, phải thêm tham số version vào URL [cần kiểm chứng độ dài cache] · webview Zalo có thể cắt query param khi mở link [cần kiểm chứng — nằm trong buổi kiểm chứng nền tảng 04/09] · nếu Zalo cảnh báo domain `.vn` lạ thì toàn bộ kênh phân phối về 0 (v2 §9 mục 7) — **mã 6 ký tự gõ tay là đường thoát bắt buộc, không phải tính năng phụ** | +2 pd |
| 6 | **Logic ngày + cron + timezone** | **0,30** _(0,4 − 0,10 cắt cron 21:00 `mo_chot_so`, A04/QĐ-22)_ | Ngay cả sau khi trừ cron 21:00, **0,30 pw vẫn là con số lạc quan nhất trong bảng**. **Cron chạy UTC, ngày là ICT** — `rollover` ở `5 21 * * *` UTC = **04:05 ICT** (A03); `0 21 * * *` chạy đúng 04:00:00 ICT, **trước cả biên 120 giây** (A02) ⇒ vỡ bất biến `book_day`. Job đối soát TTL ảnh gốc ở **04:10 ICT** (A05); viết đúng một lần thì rẻ, viết sai thì sinh bug ma xuất hiện mỗi đêm · **idempotency bắt buộc**: cron retry hoặc deploy giữa chừng = chạy 2 lần (r05 §184) · Vercel Hobby giới hạn cron [cần kiểm chứng: Hobby có thể chỉ cho 1 lần/ngày] → có thể phải dùng pg_cron hoặc Cloudflare Worker · backfill khi tấm đến muộn phải recompute idempotent | +3 pd |
| 7 | Màn Của tôi | 0,3 | "Xoá dữ liệu của tôi" **chạy thật** đụng R2 + Postgres + cache. Làm nửa vời là rủi ro pháp lý, không phải nợ kỹ thuật | +1 pd |
| 8 | **Analytics cấp sổ (32 event) + `audit_log` + `pulse_survey` + đo H1** | **0,85** _(0,5 + 0,15 định giá lại 32 event C10/A53 + 0,15 `audit_log` S24/A49 + 0,05 `pulse_survey` S25/A28)_ | Hạng mục dễ bị hoãn nhất và **không được hoãn**: thêm event sau khi có dữ liệu = mất toàn bộ lịch sử (v2 §8, phản biện #22) · dashboard cấp sổ khác hẳn dashboard cấp user; công cụ có sẵn (PostHog free) đều mặc định cấp user → nhiều khả năng phải tự viết một view SQL + một trang | +2 pd |
| 9 | Pháp lý & an toàn (ToS, riêng tư, báo cáo/chặn, soft delete, age gate, chặn từ khoá) | 0,5 | Viết ToS/privacy không phải copy mẫu — nó phải khớp với TTL ảnh gốc **72h** (A36), với thumbnail **vĩnh viễn** (A38), với "không nhận diện khuôn mặt", và với **SLA KÉP 48h / 24h–6h** (A59) · **báo cáo phải có nơi tới**: một email founder đọc thật, và founder phải chấp nhận **cả hai** con số là lời hứa ràng buộc mình mỗi ngày trong năm — trong đó 24h/6h cho cơ quan nhà nước là **luật định, không thương lượng** | +2 pd |
| 10 | Test bất biến + test CI template bank/render | 0,2 | 10.000 mô phỏng cần một máy sinh dữ liệu — tức phải mô hình hoá cơ chế lần thứ hai. Đây là chỗ 0,2 pw hay thành 0,6 pw | +2 pd |
| | **TỔNG** | **6,63** | | **+24 pd** (tối đa lý thuyết = **+4,8 pw**) |

**Đọc cột cuối cho đúng:** không phải mọi cái bẫy đều sập. Nhưng nếu **một phần ba** số bẫy sập (8 pd = 1,6 pw — kịch bản bình thường với founder chưa từng làm satori + R2 + webview Zalo), tổng thật là **6,63 + 1,6 = 8,23 ≈ 8,2 pw**.

> **Hai bảng này phải cộng ra CÙNG một tổng, và chúng cộng ra 6,63 pw.** Ánh xạ chi tiết từng US vào từng hạng mục thì **chưa** khớp 1-1 — đó đúng là thứ C09 bắt phải làm ngày 22–23/09. Hạng mục 8 (0,85 pw) chẳng hạn ôm cả US-20 và US-23; hạng mục 4 ôm US-04, US-07 và US-10.

**Số 110 KB ở hạng mục 2 mang nhãn `[chưa đo]` (A37), không phải `[FACT]`** — nó phải được thay bằng số đo thật trên 20 ảnh Android trước khi bất kỳ bảng chi phí nào dùng lại nó.

### 3.2. Đổi ra tuần lịch — phần mà v2 chưa làm

v2 §4.10 viết "6,5 pw ÷ 0,65 ≈ 10 tuần lịch". Phép chia đó **ngầm giả định founder làm 40 giờ/tuần**. Nhưng chính v2 §9 mục 12 đặt kill gate ở _">15 giờ/tuần"_ như một dấu hiệu xấu. Hai chỗ này không thể cùng đúng. Bảng dưới tính lại minh bạch:

`6,63 pw × 40 giờ = 265,2 giờ nominal` (A80: 1 pw = **40 giờ tập trung**). Hiệu suất **0,65** `[không có nguồn — xuất hiện lần đầu ở v2 §4.10, A81 buộc mang nhãn này ở mọi nơi]` = phần thời gian dự án thực sự vào code (phần còn lại: pháp lý, tuyển beta, trả lời tin nhắn, hạ tầng). A82 chốt: **20 giờ/tuần × 0,65 = 13 giờ code/tuần ⇒ 1 pw ≈ 3,1 tuần lịch.**

| Kịch bản giờ | Giờ code hiệu dụng/tuần | Tuần lịch cho **6,63 pw = 265,2 giờ** | Ngày beta nếu bắt đầu 23/09 | Có kịp trần cứng 15/12/2026 (A89/A115)? |
|---|---|---|---|---|
| Toàn thời gian 40h/tuần (giả định ngầm của v2) | 26,0 | **10,2** | 03/12/2026 | ✅ khít, 0 đệm |
| **20h/tuần (đề bài tài liệu này)** | **13,0** | **20,4** | **13/02/2027** | ❌ **trễ 8,5 tuần** |
| 20h/tuần, bàn giấy làm ngoài giờ dự án | 20,0 | **13,3** | 25/12/2026 | ❌ trễ 1,4 tuần |
| **15h/tuần (con số D-02 khuyến nghị, khớp kill gate)** | **9,75** | **27,2** | **01/04/2027** | ❌ trễ 15,3 tuần |
| 20h/tuần **+ một phần ba số bẫy sập** (8,23 pw = 329,2 giờ) | 13,0 | **25,3** | 19/03/2027 | ❌ trễ 13,5 tuần |

**Kết luận số học, không phải quan điểm:**

> Ở 20 giờ/tuần, **6,63 pw không vừa với trần 15/12/2026.** Cửa sổ 23/09 → 15/12 là **11,9 tuần × 13 giờ = 154 giờ = 3,85 pw** năng lực lý thuyết. **Trần scope MVP-0 đã chốt là 3,5 pw** (A84/QĐ-25 — con số thận trọng hơn trong hai: 3,5 của `07` vs 3,8 của bản trước tài liệu này). **3,5 pw là con số phải dùng; 3,8 pw đã chết.**

Founder có đúng ba lựa chọn, và phải chọn bằng văn bản trước 23/09:

| Lựa chọn | Nội dung | Cái giá |
|---|---|---|
| **(a) Toàn thời gian 10,2 tuần** | 40h/tuần từ 23/09 đến 03/12 | Mâu thuẫn trực tiếp với kill gate ">15 giờ/tuần" của v2 §9 (xem D-02); và 10 tuần toàn thời gian với bus factor 1 không có đệm ốm đau |
| **(b) Cắt scope xuống 3,5 pw** (A84) | Ship đúng **mức WS + phần MVP không nằm trong danh sách cắt A86** ở §4, hoãn phần còn lại sang sau beta | Ước lượng trung thực cho **cùng** scope đó là **4,58 pw** (A85) ⇒ **vẫn thiếu 1,08 pw** ⇒ phải cắt thêm, và cắt gì là **D-01** |
| ~~**(c) Dời trần sang 15/02/2027**~~ | ~~Giữ đủ 6,63 pw ở 20h/tuần~~ | ⛔ **BỊ CHẶN.** A89/A115 chốt trần cứng beta **15/12/2026 — "chưa chạy ⇒ ship thứ đang có, KHÔNG gia hạn"**. (c) là đúng thứ mà trần cứng tồn tại để cấm. Giữ lại ở đây **chỉ để ghi rằng nó đã bị bác**, không phải để chọn |

**Khuyến nghị:** **(b)**. Lý do: trần lịch là thứ duy nhất trong hồ sơ này chống được scope creep, và (c) đúng một lần thì lần sau cũng sẽ đúng — nay nó còn bị A89 cấm thẳng.

> ### ⚠️ D-02 — CẦN FOUNDER QUYẾT: **số giờ/tuần cam kết bằng văn bản là 20 hay 15?** (hạn **22/09/2026**)
> Máy không quyết được: đây là câu hỏi về đời sống của founder, không phải mâu thuẫn logic. Nhưng **hai con số không được cùng tồn tại** — v2 §9 đặt kill gate ở ">15 giờ/tuần ⇒ dừng", tức con số 20 giờ/tuần mà toàn bộ §3.2 này đang dùng **vi phạm kill gate của chính nó**.
> - **(a) Ghi 15 giờ/tuần** — nhất quán với kill gate ⇒ 9,75 giờ code/tuần ⇒ **3,5 pw = 14,4 tuần** ⇒ dòng code đầu 23/09 + 14,4 tuần = **đầu tháng 01/2027** ⇒ **beta không thể chạy 02/12/2026**, và trần cứng 15/12 bị vượt. Nghĩa là: chọn (a) thì phải cắt scope sâu hơn 3,5 pw nữa, hoặc chấp nhận ship ít hơn vào 15/12.
> - **(b) Sửa kill gate lên 20 giờ/tuần bằng văn bản** — giữ lịch 02/12, nhưng phải viết ra rằng ngưỡng cảnh báo kiệt sức đã bị dời, và **ai kiểm tra nó**. Lưu ý số học: riêng Bước 0 đã ngốn **15,2 giờ/tuần** (§5.4), nên 20 giờ/tuần không phải mức trần lý thuyết mà là mức đã chạm trong 14 ngày đầu.
> **Khuyến nghị: (a) — ghi 15 giờ/tuần**, vì đó là con số thận trọng hơn và là con số đã có trong kill gate; rồi cắt scope theo D-01 cho vừa. **Đây là khuyến nghị, không phải quyết định.** Nếu quá hạn 22/09 mà không có câu trả lời, khuyến nghị tự động có hiệu lực và phải ghi vào `ADR-000` kèm dòng "quyết định mặc định do quá hạn".

---

## 4. BA MỨC PHẠM VI

### 4.0. Mức 0 — Bước 0 làm tay (KHÔNG PHẢI phần mềm)

| | |
|---|---|
| **Làm gì** | Toàn bộ §5 |
| **Bao lâu** | 14 ngày lịch (08/09 → 21/09), **~30 giờ** của founder, **0 dòng code sản phẩm** |
| **Học được** | H1 (proxy), H2, H3, cổng phi số, và giá trị `B` để làm neo cho MVP |
| **Chi phí tiền mặt** | ~**0đ** cho Bước 0. (Domain `chotso.vn` **770.000đ/năm** — một con số duy nhất, QĐ-27 — mua trong tuần này vì lý do pháp lý, không vì Bước 0. ⚠️ **Hạn lấy báo giá thật là 03/09 — ĐÃ QUÁ HẠN tính từ 04/09. Lấy trong hôm nay và thay con số này.** Chỉ **MỘT** domain, A68 — domain dự phòng đã cắt; đường thoát hiểm là mã 6 ký tự trên card, 0đ) |
| **Điều kiện đi tiếp** | H2 đạt theo tiêu chí A20 (**≥60% sổ nhánh A đạt ≥9/14 ngày tính**) **và** H3 không fail **và** **≥12,5% số sổ** (≥1 trên 8; nếu rơi xuống sàn 6 sổ thì vẫn là **≥12,5%**, không phải "≥1/6") tự hỏi "mai còn chốt sổ không?". [C53/A94: mọi ngưỡng phát biểu bằng **%**, không bằng phân số trên cỡ mẫu] |

### 4.1. Mức 1 — Walking skeleton (1 nhóm bạn thật của founder)

**Mục đích:** chứng minh đường ống chạy từ đầu tới cuối trên máy thật, trong Zalo thật, với người thật — **không** để đo retention.

| | |
|---|---|
| **Làm gì** | US-00 (3,0) · US-02 (1,5) · US-03 (1,0) · US-04 (2,5) · US-05 (3,5) · US-06 (0,3) · US-08 (3,0) · US-09 (0,5) · US-11 (1,2) · US-14 (0,2) |
| **Được phép làm tay (wizard-of-oz)** | **US-01 bị bỏ hẳn: mở sổ = founder chạy một câu SQL insert** · người chốt sổ = chỉ founder · không có lưới 30 ngày · không có trang public · không có dashboard (đọc SQL tay) · không có TTL (ảnh nằm đó) · không có màn Của tôi · không có báo cáo/chặn (**vì chỉ có nhóm bạn founder, và founder ngồi cạnh**) |
| **pw** | **16,7 pd = 3,34 pw** |
| **Bao lâu ở 20h/tuần** | 16,7 pd × 8h = 133,6 giờ ÷ 13h hiệu dụng ≈ **10,3 tuần lịch**. Ở 40h/tuần (26h hiệu dụng): **5,1 tuần** |
| **Học được** | 3 điều mà không cách nào khác biết được: (1) `chooseImage`/camera trong webview Zalo có chạy đồng nhất trên Xiaomi/Oppo/Samsung không · (2) card satori có font Việt đúng và Zalo có preview đúng 4:5 không · (3) **số KB thật** của ảnh sau nén trên máy thật, thay số [ước lượng] 110 KB bằng số [FACT] |
| **Chi phí hạ tầng** | **$0/tháng ở mức này và CHỈ ở mức này** (Vercel Hobby + Supabase Free + R2 free tier 10 GB), vì WS chạy **trước 02/12**. ⚠️ Từ **02/12/2026** (ngày beta, A114) con số này chết: **Supabase Pro $25/tháng là BẮT BUỘC** (A74/QĐ-09 — Free không có backup hằng ngày) ⇒ kỳ vọng **$28–37/tháng**. ⚠️ Vercel Hobby cấm dùng thương mại — hợp lệ ở đây vì A62 khoá **doanh thu 0đ tuyệt đối trong 6 tháng đầu**, nhưng phải chuyển Pro ($20/tháng) trước khi có bất kỳ đồng nào |
| **Cổng ra** | Founder + 4 người bạn dùng **7 ngày liên tiếp** không có bug chặn đường. Không đo retention ở mức này — n=1 sổ, và đó là nhóm của founder |

### 4.2. Mức 2 — MVP thật (**12 sổ** ngoài, không quen founder trực tiếp — A90/QĐ-25)

| | |
|---|---|
| **Làm gì thêm** | Toàn bộ 15 story còn lại: US-01, 07, 10, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24. ⚠️ Ba trong số đó — **US-07, US-13, US-15** — nằm trong danh sách cắt MVP-0 (A86) và **chỉ được làm sau beta** |
| **Làm gì thêm (chi tiết)** | US-01 (1,5) · 07 (1,5) · 10 (**0,6** — sau khi cắt nút thả tim) · 12 (0,8) · 13 (0,5) · 15 (1,5) · 16 (1,2) · 17 (0,8) · 18 (0,3) · 19 (0,7) · 20 (**4,25** — gồm `audit_log` 0,75 + `pulse_survey` 0,25 + định giá lại 32 event 0,75) · 21 (0,5) · 22 (1,0) · 23 (0,8) · 24 (**0,5** — sau khi cắt cron 21:00) |
| **Không còn được làm tay** | Mở sổ tự phục vụ · bất kỳ ai chốt sổ được · TTL chạy thật · xoá dữ liệu chạy thật · dashboard tự tính |
| **pw** | **+16,45 pd = +3,29 pw → tổng 33,15 pd = 6,63 pw** (tính lại theo §2) |
| **Bao lâu ở 20h/tuần** | +16,45 pd × 8h = 131,6 giờ ÷ 13 ≈ **+10,1 tuần** → **tổng ~20,4 tuần lịch** kể từ 23/09 (khớp §3.2) |
| **Học được** | **M1** (`group-D14(app)` ≥ `B`, đọc ngày **16/12/2026** — A116, vì D14 rơi vào 15/12) và **M2** (≥1 sổ sinh ra không do founder tuyển) · H1 đo bằng số thật thay vì proxy · phân bố ngày hụt (1 người có mặt hay 0 người) → quyết định mở/không mở cơ chế "gánh" · tỉ lệ TOANG/tổng tấm theo tuần |
| **Chi phí hạ tầng** | **$28–37/tháng** (A74/QĐ-09), **không phải $0–12**. R2 ở 12 sổ vẫn nằm **trong free tier** (12 × 20 MB/năm = 240 MB), nhưng **Supabase Pro $25/tháng là bắt buộc từ 02/12** — Free không có backup hằng ngày, mà ToS hứa giữ ảnh và A38 hứa giữ thumbnail vĩnh viễn; mất DB = mất tài sản của mọi sổ, không có đường về. Đèn báo động: **>$60/tháng** (A75). DoD hoá đơn tháng đầu: **≤$40** (A76). Con số $3/tháng của v2 §4.5 là chi phí thumbnail cho **10.000 sổ**, không phải cho beta |
| **Chi phí vận hành** | **~5 giờ/tuần** (v2 §9), trần cứng 10 giờ/tuần |
| **Cổng ra** | **≥12 sổ** chạy đủ 28 ngày (A90/QĐ-25 — cohort đợt 1 02/12→29/12/2026 là **cohort quyết định**, không phải trần beta; đợt 2 mở tới **≤30 sổ** từ tuần 15, A91) · dashboard đọc được trong 3 phút · **M1 đạt** |

### 4.3. Nếu chọn (b) — cắt xuống **3,5 pw** (A84/QĐ-25) cho vừa trần cứng 15/12

Danh sách cắt **không do tài liệu này chọn** — nó là **A86/QĐ-25**, và nó gồm đúng sáu khoản. Cắt theo thứ tự này, **không** cắt theo cảm giác:

| Cắt (A86) | pd tiết kiệm ở bảng §2 | pw | Vì sao cắt được | Hậu quả chấp nhận |
|---|---|---|---|---|
| **US-07 lưới 30 ngày** | 1,5 | 0,30 | Không giả thuyết nào chết vì thiếu nó trong 28 ngày đầu. S14 giữ lưới ở **T13+, ưu tiên 1** — nó **chính là** memory layer | Mất "switching cost" — nhưng switching cost ở beta 28 ngày là ảo |
| **US-13 biến thể card (đủ mâm + mốc sổ)** | 0,5 | 0,10 | Là phần thưởng, không phải phép đo | Card kém vui hơn |
| **US-15 màn Của tôi → 0,00 pw** | 1,5 | 0,30 | Đổi kèo/rời sổ làm được bằng nhắn founder ở quy mô 12 sổ | Ops +10 phút/tuần. ⚠️ **Nút "xoá dữ liệu của tôi" KHÔNG nằm trong khoản cắt này** — nó là nghĩa vụ Luật 91/2025, chuyển thành một liên kết ở màn 7 |
| **Nút thả tim** | 0,6 (trong US-10) | 0,12 | S01/C03 — ba tài liệu độc lập chọn nó làm ứng viên cắt | HM-1, HM-3, event `heart_sent`, `hearts_recv_14d` **chết theo**. Bộ chỉ số tác hại còn **7** (A27) và **chỉ còn phát hiện RÚT LUI, không phát hiện LOẠI TRỪ** |
| **Cron 21:00 `mo_chot_so`** | 0,5 (trong US-24) | 0,10 | A04/QĐ-22 — trạng thái "sẵn sàng chốt" suy ra từ giờ server; v2 §4.7 nói hệ thống **không gửi gì** lúc 21:00 | 0 |
| **Tết freeze** | — | 0,10 | S07/C06 — build ở T13–T18, **ngoài** MVP-0, hạn 25/01/2027 | Không nằm trong bảng §2 nên không trừ được ở đây. **Khoản 0,10 pw này đã bị `07` tiêu, không được bán lần hai** (A87) |
| **Tổng cắt trừ được trong bảng §2** | **3,5 pd** | **0,70** | | |

**Số học sau khi cắt, không làm tròn cho đẹp:**

`6,63 pw − 0,70 pw = **5,93 pw**` — đó là tập MVP-0 theo bảng US của tài liệu này. Ba khoản "thả tim / cron 21:00 / Tết freeze" **đã nằm sẵn trong 6,63 pw** ở dạng đã trừ, nên **không được trừ lần thứ hai** (luật A87).

Nhưng con số làm việc chính thức là của A85: **4,58 pw** cho cùng scope, trần A84 là **3,5 pw** ⇒ **thiếu 1,08 pw**. Chênh 1,35 pw giữa 5,93 và 4,58 là việc của bảng ánh xạ C09 ngày 22–23/09 (xem hộp cảnh báo cuối §2), và được ghi vào §8.

⛔ **Phương án "beta 5 sổ" của bản trước ĐÃ BỊ BÁC** (C07/QĐ-25). Có **một** kế hoạch beta duy nhất: **02/12/2026 · 12 sổ đợt 1 · ≤30 sổ đợt 2 từ tuần 15 · trần hành chính 60 sổ · trần cứng 15/12/2026**. Không được cắt scope bằng cách cắt cỡ mẫu — cắt xuống 5 sổ thì `sổ-D28` không bao giờ đạt `n ≥ 24` (A25) và OMTM của `06` không chạy được.

> ### ⚠️ D-01 — CẦN FOUNDER QUYẾT: **cắt thêm 1,08 pw ở đâu?** (hạn **22/09/2026**)
> Máy không quyết được: đây là chọn giữa các tính năng **còn sống**, mỗi lựa chọn giết một phép đo khác nhau, và hồ sơ không có tiêu chí khách quan nào để xếp hạng chúng.
> **Hai lựa chọn:**
> - **(a) Cắt tiếp bốn khoản theo thứ tự khuyến nghị của bảng phán quyết:** (1) trang public xuống **chỉ-đọc, không thả tim, không lưới** (−0,4 pw) — giữ M2 đo được ở mức tối thiểu · (2) preset kèo **từ 8 xuống 4** (−0,15 pw) · (3) màn 5 "Ảnh chi tiết" gộp thành **overlay** (−0,3 pw) ⚠️ **CHỈ được làm nếu overlay vẫn chứa đủ Báo cáo / Chặn / Xoá ảnh** — `05` §8.4 bắt buộc report + block, và màn 5 hiện là nơi **duy nhất** chứa chúng · (4) **biến thể card mốc sổ** (−0,25 pw, đã cắt sẵn ở A86 nên chỉ còn là xác nhận). Tổng ≈ **−1,1 pw**.
> - **(b) Không cắt thêm và chấp nhận ship muộn**: giữ nguyên 4,58 pw, ship thứ đang có vào **15/12/2026** theo A89 ("chưa chạy ⇒ ship thứ đang có, không gia hạn") và chấp nhận beta khởi động với một sản phẩm còn lỗ hổng chức năng.
>
> **Khuyến nghị: (a)**, theo đúng thứ tự bốn khoản ở trên, vì mỗi khoản đều được chọn sao cho **không** giết M1/M2/H1/H2/H3 — trong khi (b) đẩy rủi ro vào đúng ngày không có đệm. **Đây là khuyến nghị, không phải quyết định.** Quá hạn 22/09 ⇒ khuyến nghị tự động có hiệu lực, ghi vào `ADR-000` kèm dòng "quyết định mặc định do quá hạn".

### 4.4. Mức 3 — "v1 lên store": KHÔNG TỒN TẠI Ở LỘ TRÌNH NÀY

Đề bài yêu cầu mô tả "v1 lên store". Trả lời trung thực theo v2 §6 mục 2: **không có mức đó, và việc nó không tồn tại là một quyết định, không phải một thiếu sót.**

| | |
|---|---|
| **v1 công khai = web, không phải store** | Mở đăng ký tự do trên `chotso.vn` (**MỘT** domain, A68). Đa sổ: **trần 3 sổ/thiết bị là hằng số đặt trước cho v1.1 và CHƯA có hiệu lực** (A101/C25) — ở MVP-0 là **1 sổ/thiết bị**, `G ≡ 0` trong 12 tháng đầu là **quyết định có ý thức**, được ghi ra. Android web push: **đã CẮT khỏi MVP-0** (S09) và **có thể không tồn tại được** — `03` §9 B4 cho rằng Service Worker nhiều khả năng không đăng ký được trong webview Zalo; buổi 04/09 phải trả lời |
| **pw** | +1,5 pw [ước lượng] |
| **Chi phí hạ tầng** | Vercel Pro $20 + Supabase Pro $25 + R2 ~$3 + domain ≈ **$50/tháng ≈ 1,3 triệu VND/tháng** |
| **Cửa mở store (nấc 4)** | **`sổ-D28 ≥ 35%` trên `n ≥ 24 sổ`** của cohort tuần 1–4 (02/12→29/12/2026), đọc **đúng ngày 26/01/2027** (A23–A25, A118). ⚠️ **In kèm mỗi lần trích dẫn: KTC 95% = ±17 điểm.** Cỡ mẫu hạ từ ≥30 xuống ≥24 vì kịch bản cơ sở của `09` chỉ sinh 24 sổ ở 4 tuần đầu — giữ ≥30 nghĩa là cổng **không bao giờ mở được**. `< 25%` ⇒ DỪNG; vùng xám 25–35%. Khoá cứng, ghi vào **`ADR-000`** hôm nay (A103 — **MỘT** file ADR, không ba) |
| **Nếu mở** | App native + widget: **+8 đến +12 pw** `[ước lượng dựa r05: WidgetKit Swift-only 1–2 tuần/nền tảng, cộng store review, cộng EAS]` · cộng **pháp nhân VN** (đường găng dài nhất) · cộng Apple Guideline 1.1.1/1.2 quay lại thành rủi ro thật. ⚠️ **Tài khoản Google Play $25 KHÔNG được mua ở T13** (S10/C50) — nó nằm trước cổng 26/01/2027 |
| **Cửa pháp lý bắt buộc trước mọi thứ** | [CHỐT 2026-08-28, QĐ-04] **Đèn vàng: `monthly_visits` 6.000 HOẶC `monthly_active_persons` 600** (≈60 sổ ở A=4,0) → bắt đầu hồ sơ Giấy phép MXH (3–6 tháng, cần pháp nhân VN + người chịu trách nhiệm nội dung quốc tịch VN). **Đèn đỏ: 8.500 lượt / 850 người → dừng nhận sổ mới ngay trong ngày.** Ngưỡng luật là **OR** và nhánh lượt-truy-cập bind trước ~2,5 lần — con số "700 người" cũ báo động **muộn 2,5 lần** |

Nói gọn: **store không phải nấc tiếp theo của MVP. Nó là một dự án khác, mở khoá bằng một con số, và con số đó chưa tồn tại.**

---

## 5. LÀM BẰNG TAY TRƯỚC KHI CODE — BƯỚC 0, 14 NGÀY, 0 DÒNG CODE

_Đây là phần quan trọng nhất của tài liệu. Nếu founder chỉ đọc một mục, đọc mục này._

### 5.1. Nguyên tắc: mô phỏng đúng MA SÁT, không mô phỏng đúng công nghệ

Sai lầm phổ biến của Bước 0 làm tay là làm cho nó **dễ hơn sản phẩm** — rồi kết luận sai rằng nhịp tồn tại. Trong sản phẩm, người dùng phải **bấm một link, mở một trang, chọn ảnh, chọn nhãn, gửi**. Nếu Bước 0 chỉ yêu cầu "dán ảnh vào nhóm", nó bỏ mất chính bước có ma sát cao nhất.

Cách xử lý: **Bước 0 chia hai giai đoạn, và độ chênh giữa hai giai đoạn là phép đo ma sát** — một con số không tài liệu nào trong hồ sơ đang có.

| Giai đoạn | Ngày | Cách nộp | Đo cái gì |
|---|---|---|---|
| **G1 — trần trên** | 1–7 (08/09→14/09) | Dán ảnh **thẳng vào nhóm Zalo** kèm một chữ `XONG` hoặc `TOANG`; founder dán card | Nhịp có tồn tại ở dạng dễ nhất không. **Nếu `q_c_roster`(G1) < 0,45 thì trần trên đã dưới ngưỡng ĐI của A16 ⇒ dừng ngay ngày 7, không cần chạy G2** |
| **G2 — có ma sát thật** | 8–14 (15/09→21/09) | Bấm link → **Google Form** → tải ảnh + chọn nhãn → gửi. **Người trực dán card**, không phải founder | Con số so với ngưỡng H2. Chứa **cả 2 ngày cửa sổ im lặng: 15/09 và 18/09** (A98 — **không phải 3 ngày**; ngày 21/09 đã bị bỏ khỏi cửa sổ) |
| **`Δ_link+trực` = `q_c_roster`(G1) − `q_c_roster`(G2)** | | | ⚠️ **KHÔNG được gọi là "thuế của cái link"** (C20, phái sinh bắt buộc). Giữa G1 và G2 có **HAI** thay đổi cùng lúc — thêm cái link **và** đổi người dán card từ founder sang người trực — nên `Δ` gộp cả hai và **không tách được** bằng dữ liệu Bước 0. Nếu `Δ_link+trực` > 0,20 thì một phần đáng kể của 6,63 pw đang dùng để dựng chính hai thứ đó, nhưng **không biết phần nào là của cái nào** |

> ⚠️ **Hệ quả của việc không tách được:** nếu founder muốn con số "thuế của cái link" thuần, cần một thiết kế thứ ba (đổi người dán card **trong G1**), và **thiết kế đó không có trong 14 ngày này**. Đừng bịa ra nó ở ngày 22/09.

### 5.2. Bộ đồ nghề — 5 thứ, tất cả miễn phí

| Công cụ | Dùng làm gì | Ghi chú |
|---|---|---|
| **Google Form (tuyển)** | Lọc sổ đủ điều kiện | Bắt nhập **tên 3 người bạn + link nhóm chat ĐÃ CÓ**. Chỉ duyệt khi đủ 3. **Không tạo nhóm mới — chiếm nhóm đã có** |
| **Google Form (nộp hằng ngày, G2)** | Thay màn Nộp | 1 form/sổ. 3 câu: tên (dropdown, không gõ tay) · ảnh (file upload) · nhãn (radio XONG/TOANG) |
| **Google Sheet** | Thay database + dashboard | **3 sheet**: `raw` · `daily` (đúng **8 cột** A96) · `obs` (bốn con số quan sát + đối chứng A72) — §5.6 |
| **Canva** | Thay màn Card chốt sổ | 1 template 1080×1350, **lưới THÍCH ỨNG theo số người ĐÃ NỘP: 1 · 1×2 · 2×2 · 2×3 · 2×4, tối đa 8 ô** (A100/QĐ-30 + A46). ⚠️ Lưới 6 ô cố định là đúng cái lỗi QĐ-30 đã bác — ở sổ 7–8 người nó **im lặng loại 2 người đã nộp** khỏi card, vi phạm P2. Ô của người vắng **không tồn tại** (không ô xám, không silhouette) |
| **Zalo** | Kênh phân phối + kênh cà khịa | Không thay thế bằng gì cả — đó là toàn bộ luận điểm |

⚠️ **Cạm bẫy đã biết của Google Form:** tải file lên **bắt buộc đăng nhập Google**. Trên Android gần như ai cũng có sẵn; trên iOS thì không chắc [cần kiểm chứng ngay ngày 8 với 8 sổ]. **Bắt buộc có đường thoát:** ai không đăng nhập được thì gửi ảnh riêng cho founder trên Zalo, và founder **ghi lại đường nào được dùng** ở cột `path`. Số người phải dùng đường thoát là một phát hiện, không phải một phiền toái.

### 5.3. Cấu hình 8 sổ — hai nhánh, để thí nghiệm có thể sai

| | Nhánh A (5 sổ) | Nhánh B (3 sổ) |
|---|---|---|
| Kèo | Có, 8 preset hoặc tự viết | **Không có** |
| Nhãn | XONG / TOANG | **Không có nhãn** |
| Nội dung ảnh | Ảnh liên quan tới kèo | "Hôm nay tao thế nào" (bất kỳ) |
| Card | Ảnh + `Ngày thứ N · X tấm · chuỗi Y` | Ảnh + `Ngày thứ N` |
| Đây là | Sản phẩm trong tài liệu v2 | Đối chứng kiểu Locket |

**Luật tuyển:** không tuyển bù sau **ngày 3**. Sổ chết trong 14 ngày là **dữ liệu**, không phải sự cố cần vá.

**Ba ràng buộc chốt ở C53/A94–A95, không diễn giải lại:**
1. **Cỡ mẫu giữ ở 8 sổ (5A + 3B).** Sàn tuyệt đối là **6 sổ (4A + 2B)** — dưới sàn thì Bước 0 không kết luận được gì và phải hoãn, không phải hạ ngưỡng.
2. **Nếu rơi xuống sàn, MỌI ngưỡng phải phát biểu lại theo tỉ lệ `%`, không theo phân số kiểu "3/5".** Với nhánh A = 4 sổ, `B` chỉ nhận {0 · 25 · 50 · 75 · 100}% — **bước nhảy 25 điểm**, và phải in kèm (§1.3).
3. **Sổ số 0 — nhóm bạn của chính founder — KHÔNG nằm trong mẫu số của bất kỳ phép đo nào, kể cả `B`** (A95). Nó chỉ dùng để tập thao tác Canva/Sheet trước 08/09. Tính nó vào là tự cộng một sổ chắc chắn sống vào tử số.

### 5.4. Một tối của founder — timeline chính xác

| Giờ | Việc | Phút/sổ nhánh A | Phút/sổ nhánh B |
|---|---|---|---|
| 20:40 | Mở Sheet, mở Form response, tải ảnh trong ngày | 6 | 3 |
| 20:50 | Kéo ảnh vào template Canva, sửa 3 con số, xuất PNG | 8 | 4 |
| 21:00 | Dán card + caption vào nhóm Zalo (**ngày 1–7**) **hoặc** gửi RIÊNG cho người trực (**ngày 8–14**, giao thức A97) | 3 | 2 |
| 21:10 | Ghi `raw`: ai XONG/TOANG/VẮNG, ai đã xem card, có ai tự nhắc nhau không | 3 | 1 |
| | **Tổng/sổ** | **20** | **10** |

`5 × 20 + 3 × 10 = 130 phút/tối × 14 tối = 1.820 phút = 30,3 giờ ≈ **15,2 giờ/tuần**.` Khớp bảng §9 của v2.

> ⚠️ **Số này va thẳng vào D-02.** Riêng Bước 0 đã ngốn **15,2 giờ/tuần** — tức bằng đúng ngưỡng kill gate ">15 giờ/tuần" của v2 §9, trước khi có một dòng code nào. Nếu founder chọn cam kết **15 giờ/tuần**, thì trong 14 ngày Bước 0 **không còn giờ nào** cho việc gì khác (pháp lý, báo giá domain, chuẩn bị ADR-000).

> **Cảnh báo vận hành:** 2 giờ 10 phút **mỗi tối, 14 tối liên tiếp, không nghỉ** là mức mà một người bình thường sẽ bỏ ở tối thứ 9. Chuẩn bị trước ngày 08/09: template Canva phải kéo-thả được trong 2 phút, và Form response phải xuất ảnh về một thư mục Drive đặt sẵn tên theo ngày. Nếu ngày 3 vẫn mất 20 phút/sổ, **giảm nhánh A từ 5 xuống 4 sổ** (= sàn tuyệt đối của C53, kèm nghĩa vụ phát biểu lại mọi ngưỡng theo **%** và ghi lại rằng bước nhảy của `B` thành **25 điểm**) — đừng giảm số ngày, và tuyệt đối đừng giảm giấc ngủ.

### 5.5. Cửa sổ im lặng — cách làm ĐÚNG, khác với cách v2 viết

v2 §10(f) yêu cầu ba ngày im lặng; **A98 chốt lại còn HAI ngày: 15/09 và 18/09/2026** (= ngày 8 và ngày 11 của Bước 0). Ngày 14 (21/09) **đã bị bỏ khỏi cửa sổ** — đó là ngày cuối, và im lặng ở ngày cuối chỉ làm hỏng exit survey chứ không thêm phép đo nào. Nội dung yêu cầu: founder **"không post gì, không nhắc gì, không trả lời gì"**. Nếu hiểu theo nghĩa đen thì founder cũng không dán card — mà card là **cơ chế phân phối của chính sản phẩm**. Bỏ card đi rồi đo `q_c` là đo một sản phẩm khác, và nó sẽ fail vì lý do sai.

**Cách làm đúng, giữ nguyên tinh thần của v2 và giữ được phép đo:**

- **Từ ngày 8 (15/09) đến ngày 14 (21/09)**, mỗi tối 20:45 founder làm card như thường rồi **gửi RIÊNG** cho thành viên đang tới lượt trực — đúng cơ chế xoay vòng của sản phẩm (US-14). **Founder KHÔNG tự dán card vào nhóm** trong toàn bộ G2 (A97).
- **Hai ngày im lặng tuyệt đối: 15/09 và 18/09** — founder **không gõ một chữ nào trong nhóm** từ 04:00 ngày đó đến 04:00 ngày hôm sau (ranh giới ngày A01).
- Nếu người trực **quên dán**, founder **để nguyên**. Ngày đó không có card. **Đó chính là phép đo điểm chết đơn** ở v2 §9 mục 9 — miễn phí, không cần code.
- Exit survey và mọi câu hỏi của founder dời sang **ngày 15 = 22/09**, sau khi cửa sổ đo đã đóng. **Không hỏi gì trong 15/09 và 18/09.**

Hai con số lấy từ hai ngày đó, và **chỉ hai ngày đó**, mới được đem so với ngưỡng H2/H3. ⚠️ **n = 2 ngày × 8 sổ** là một cỡ mẫu nhỏ — kết luận phải phát biểu kèm câu đó, không được nói "đã chứng minh".

### 5.6. Google Sheet — cấu trúc chính xác

**Sheet `raw`** — một dòng cho mỗi người, mỗi ngày (8 sổ × ~5 người × 14 ngày = **560 dòng**; nếu rơi xuống sàn 6 sổ thì 6 × 5 × 14 = **420 dòng**. Nhập tay ~3 phút/tối/sổ):

| Cột | Giá trị | Ghi chú |
|---|---|---|
| `date` | 2026-09-08 | ranh giới 04:00: ảnh gửi lúc 01:00 ghi cho ngày hôm trước |
| `book_id` | A1..A5, B1..B3 | **`book_id`, không phải `group_id`** — A30/C52: khoá sổ là cột đầu tiên của mọi bảng và mọi event |
| `branch` | A / B | |
| `member_id` | A1-m1.. | **không ghi tên thật vào sheet** |
| `status` | xong / toang / vắng | nhánh B chỉ có `co` / `vang` (không có nhãn — §5.3) |
| `in_roster` | y / n | `y` nếu người này đã nộp ≥1 tấm trong **3 ngày đầu** ⇒ nằm trong `roster_size` đóng băng (A14). Cột này là thứ **không tái dựng được sau 08/09** |
| `received_at` | giờ:phút | để tính phân bố giờ nộp — dữ liệu cho US-24 |
| `path` | form / zalo-riêng / nhóm | đo cạm bẫy đăng nhập Google ở §5.2 |
| `seen_card` | y / n / ? | §5.7 |
| `self_nudge` | 0/1 | người này có tự nhắc người khác mà founder không khơi mào không |
| `founder_spoke` | y / n | **n** ở đúng **15/09 và 18/09** (A98), `y` ở 12 ngày còn lại |

**Sheet `daily`** — **đúng 8 cột bắt buộc theo A96**, không thêm không bớt, tất cả suy ra bằng công thức:

| # | Cột | Ghi chú |
|---|---|---|
| 1 | **`q_c_roster`** | **Con số so ngưỡng** A16: DỪNG `< 0,35` · ĐI `≥ 0,45` · xám 0,35–0,45 = chạy lại cohort mới |
| 2 | **`q_x_roster`** | **Con số so ngưỡng** A18: ĐI `≥ 0,30`; `< 0,30` ⇒ nhãn XONG/TOANG **đang gây nhục** ⇒ đổi sang "đã có mặt" không phân biệt |
| 3 | `q_c_sliding` | **Báo cáo phụ. KHÔNG BAO GIỜ dùng cho quyết định đi/dừng** |
| 4 | `q_x_sliding` | như trên |
| 5 | **`roster_size`** | Số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ; nhập một lần cuối ngày 3, **đóng băng, giữ nguyên 11 ngày còn lại** (A14) |
| 6 | `số người nộp` | |
| 7 | `số XONG` | |
| 8 | `số TOANG` | |

Toàn bộ sheet **pseudonymised** (không tên thật) và **xoá sau 22/09/2026** (A96).

**Bốn con số quan sát khác** — số ngày sổ tụt dưới 3 người có mặt (`group_alive` = FALSE, A08) · số lần tự nhắc nhau · tỉ lệ TOANG/tổng tấm · **tỉ lệ `click-shortlink` trong 24h** — ghi ở **một sheet phụ `obs`**, không chen vào 8 cột trên. Lý do: 8 cột của A96 là hợp đồng với `06`; trộn thêm cột vào đó là cách nhanh nhất để hai tài liệu lệch nhau lần nữa.

> ### ⛔ [CHỐT 2026-08-28 — QĐ-03] MẪU SỐ CỦA `q_c` ĐÃ ĐỔI. Đây là sửa đổi đắt nhất nếu bỏ sót, và hạn của nó là **07/09/2026**.
> Bản trước của mục này ghi: _"`q_c` và `q_x` tính trên thành viên Active = đã nộp ≥1 tấm trong 7 ngày gần nhất"_ — **đó chính là lỗi mà `06` §9 BĐ-1 bắt được**, và nó bắt bằng một ví dụ số: sổ 5 người, 3 người bỏ hẳn từ ngày 8. Ba người đó **rơi khỏi mẫu số Active** sau 7 ngày ⇒ `q_c` **nhảy từ 0,54 lên 0,90** trong khi sổ vừa mất 60% thành viên và `group_alive` = FALSE. Founder đọc "GT-01 PASS" trên một cái sổ đang chết.
> **Luật chốt:**
> - **`q_c_roster` = (số lượt có mặt) / (roster_size)** — `roster_size` = số người đã nộp ≥1 tấm trong **3 ngày đầu** của sổ, **đóng băng 14 ngày**. **Đây là con số so với ngưỡng 0,45 / 0,35.**
> - `q_c_sliding` (mẫu số Active trượt) giữ lại làm **cột báo cáo phụ**, **không bao giờ** dùng cho quyết định đi/dừng.
> - **Phải sửa Sheet TRƯỚC 08/09.** Sau ngày đó không sửa hồi tố được: roster ngày 1–3 không tái dựng lại được từ dữ liệu đã thu.

### 5.7. Đo H1 mà không có code

Trong sản phẩm, "mở card" = mở trang web (US-23). Ở Bước 0 không có trang web, nên cần proxy. Ba lựa chọn, theo thứ tự ưu tiên:

| Cách | Cách làm | Điểm yếu |
|---|---|---|
| **(1) Trạng thái "đã xem" của Zalo** | Zalo hiển thị số người đã xem một tin nhắn trong nhóm; chạm vào xem danh sách. Founder ghi lại lúc 21:00 hôm sau. **[cần kiểm chứng trong buổi kiểm chứng nền tảng 04/09 — nếu Zalo không cho xem danh sách theo tin nhắn nhóm, dùng cách 2]** | Đo "thấy tin nhắn", không đo "mở nội dung" |
| **(2) Link rút gọn riêng cho từng sổ, từng ngày — CHỐT, BẮT BUỘC** | **8 sổ × 14 ngày = 112 link** (A22), tạo sẵn bằng **Short.io gói free**, trỏ tới Form; đọc số click hôm sau. Tên chỉ số là **`click-shortlink`**, không phải `card-open` (C21) | Đếm click, không dedupe theo người. **Founder tuyệt đối không tự bấm link của mình** |
| **(3) Timestamp nộp trên Form** | Số người nộp trong 24h / số Active | Gộp "mở" với "nộp" — chính là biến mà H1 cần tách. Chỉ dùng làm chặn dưới |

**Ghi vào kết luận ngày 22/09 đúng như sau:** `click-shortlink` ở Bước 0 là **proxy có sai lệch đã biết**; con số H1 thật chỉ có sau US-23 ở beta. **`click-shortlink < 40%` ⇒ DỪNG. Không có ngưỡng ĐI** — ngưỡng `≥60%` dời sang **tuần 2 của beta**, khi event `card_opened` chạy thật (A21). Nếu proxy ≥ 60% thì **chưa** đủ để ăn mừng và **không được ghi là "H1 PASS"**.

> ### ✅ [CHỐT 2026-08-28 — QĐ-05] Cách (2) là BẮT BUỘC, không phải "ưu tiên 2". Và H1 chỉ có quyền DỪNG.
> **(a) Thiết bị đo chốt là shortlink theo sổ theo ngày** (cách 2), setup trước **07/09/2026**, ~30 phút, dùng **Short.io gói free** (không tự host — giữ nguyên lập luận pháp lý "không máy chủ, không dịch vụ" của `05` GIAI ĐOẠN 0, và giữ nguyên lệnh cấm viết code sản phẩm của v2 §12). Cách (1) — danh sách "Đã xem" của Zalo — **xuống làm dữ liệu tham khảo**, vì `06` BĐ-3 chỉ ra điều quyết định: **một ảnh Canva dán vào Zalo không sinh sự kiện "mở"**, nên không có shortlink thì ngày 22/09 **không có con số H1 nào tồn tại**.
> **(b) `07` §4 CỔNG #1 đã được sửa theo:** H1 mất vế "≥60% mới ĐI", giữ vế "<40% thì DỪNG". Ngưỡng ≥60% dời sang **tuần 2 của beta**, khi US-23 chạy. Lý do: cho một proxy không có thiết bị đo quyền phủ quyết một dự án là cách chắc chắn nhất để founder phải bịa một con số ở ngày quyết định.

### 5.8. Template card Canva — quy cách

- **Khổ 1080 × 1350 px (4:5).** Không đổi khổ giữa chừng — v2 §4.6 khoá.
- **Dòng 1:** tên sổ do nhóm tự đặt.
- **Dòng 2:** `Ngày thứ 9 · 31 tấm · chuỗi 4` (nhánh B: chỉ `Ngày thứ 9`).
- **Khối giữa:** lưới **thích ứng theo số người đã nộp** [CHỐT 2026-08-28, QĐ-30], **chỉ ô của người đã nộp**. Ô của người vắng **không tồn tại** — không ô xám, không silhouette, không tên. Đây là ràng buộc P2, và Bước 0 phải tuân đúng như sản phẩm.
  - 1 người → 1 ô lớn · 2 người → 1×2 · 3–4 người → 2×2 · 5–6 người → 2×3 · **7–8 người → 2×4 (ô nhỏ hơn)**
  - **Vì sao phải có nhánh 7–8:** trần thành viên/sổ là **8** (`04` §1.3, thực thi bằng trigger, và con số 8 đã đi vào câu hỏi gửi luật sư nên nó là ràng buộc pháp lý). Lưới 2×3 cố định chỉ có **6 ô** ⇒ ở ngày đủ mâm của một sổ 7–8 người, **hai người đã nộp sẽ không lên card mà không có quy tắc nào nói ai bị cắt**. Đó đúng là loại quyết định mà nguyên tắc **P2** tồn tại để tránh: không được có ô trống có tên, nhưng cũng **không được im lặng loại bỏ một người đã nộp**.
  - **Bắt buộc: snapshot test của card (P4) phải có một fixture 8 người.**
- **Nhãn nhỏ trên mỗi ảnh:** `✓` hoặc `💀` (nhánh A). Nhánh B không có nhãn.
- **Dòng chân:** `Minh chốt sổ · mai tới lượt Linh`.
- **Không bao giờ có trên card:** nội dung kèo của bất kỳ ai · tên người vắng · "còn thiếu 2 người" · bất kỳ con số nào có thể giảm ngoài chuỗi.

### 5.9. Script tin nhắn — dùng nguyên văn, không "cải tiến"

> ### ⚠️ [CHỐT 2026-08-28 — QĐ-31] LUẬT T2 CỦA `08` ÁP LÊN TOÀN BỘ 8 SCRIPT DƯỚI ĐÂY.
> `08-ux-flow-va-tone.md` §2.2 chỉ ra rằng **`Bấm vô nộp đi` là một mệnh lệnh chỉ có nghĩa với người CHƯA nộp** — tức cùng hình dạng ngữ nghĩa với chữ cấm vĩnh viễn `đứa nào chưa` mà v2 §1 gọi là "chữ nguy hiểm nhất trong toàn bộ hồ sơ". Caption chốt: **`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`** (vẫn đủ ba chữ bắt buộc, mất mệnh lệnh, 0 pw).
> **Hệ quả cho mục này — ĐÃ THI HÀNH ở S5 bên dưới:** script **S5** dùng _"Gửi tấm của mày vô đây, 20 giây"_ — **cùng hình dạng mệnh lệnh nhắm vào người chưa nộp**. Nó được thay bằng **đúng chuỗi chuẩn A99, nguyên văn, không thêm "20 giây"**: **_`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`_** (Bản trung gian "…Mỗi đứa một tấm, **20 giây**" cũng bị bỏ: A99 là **một chuỗi duy nhất** dùng ở cả v2 §4.6, `09` §1.4(c) và ở đây — ba nơi ghi ba biến thể là cách mâu thuẫn quay lại.) Soát lại cả **9** script theo cùng một luật trước 08/09: **không câu nào được chỉ có nghĩa với người chưa làm.**
> Đây là loại lỗi **rẻ hôm nay và không sửa được sau khi đã vào bank câu thu từ Bước 0** — caption này sẽ được dán **112 lần** (8 sổ × 14 ngày) vào nhóm bạn thật.

Cả **9** script dưới đây đã kiểm tra không chứa 7 chữ bị cấm (`boss`, `game`, `nhiệm vụ`, `gamification`, `ritual`, `đứa nào chưa`, `thử thách`), không nêu tên người vắng, và **không câu nào chỉ có nghĩa với người chưa làm** (luật T2 của `08`).

**S1 — tin tuyển (đăng story / nhắn riêng), 05/09:**
> Tao đang thử một thứ trong 14 ngày: **tối nào nhóm cũng chốt sổ — mỗi đứa một tấm, không ai cài app.**
> Cần vài nhóm bạn **đã có sẵn nhóm chat**. Tụi mày không phải tải gì, không phải đăng ký gì. Mỗi tối gửi một tấm ảnh, hết.
> Phần bày biện tao lo. Nhóm nào tham gia thì điền form 2 phút: [link]

**S2 — Form tuyển, 5 câu, chỉ duyệt khi đủ:**
> 1. Nhóm chat của tụi mày đã có sẵn chưa? (có / chưa có)
> 2. Tên (hoặc nickname) của 3 người sẽ tham gia cùng bạn
> 3. Nhóm này thường nhắn nhau mấy lần một tuần? (hằng ngày / vài lần / hiếm)
> 4. Số người trong nhóm chat đó
> 5. Tất cả đều từ 16 tuổi trở lên? (có / không) — **"không" = loại, không thương lượng**

**S3 — kickoff nhánh A, 20:00 ngày 08/09:**
> Chào cả nhóm. 14 ngày tới tối nào tụi mình cũng chốt sổ. Luật đúng ba dòng:
> **1.** Mỗi đứa chọn một kèo cho riêng mình: ngủ trước 12h · đi bộ 20 phút · học 15 phút · đọc 5 trang · không trà sữa hôm nay · tập 15 phút · không bỏ bữa sáng · không mất tích. Hoặc tự viết một câu ngắn.
> **2.** Mỗi tối gửi **đúng một tấm ảnh**, kèm một chữ: **XONG** hoặc **TOANG**. TOANG vẫn tính — miễn là có mặt. Tấm toang thường là tấm buồn cười nhất.
> **3.** 21:00 tao dán sổ của cả nhóm vào đây.
> Không ai bị nêu tên vì không gửi. Không có bảng xếp hạng. Ảnh chỉ nằm trong nhóm này.
> Kèo của mày là gì? Rep một dòng.

**S4 — kickoff nhánh B, 20:00 ngày 08/09:**
> Chào cả nhóm. 14 ngày tới tối nào tụi mình cũng gửi **một tấm "hôm nay tao thế nào"** vào đây. Không luật gì thêm, không phải làm gì hết, ảnh gì cũng được.
> 21:00 tao dán sổ của cả nhóm vào đây.
> Ảnh chỉ nằm trong nhóm này.

**S5 — caption card hằng tối, ngày 1–14 (đã sửa theo A99/QĐ-31 — dùng NGUYÊN VĂN, không "cải tiến"):**
> Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.
> 👉 [link rút gọn riêng của sổ này, riêng tối nay]

_Bản cũ **"Sổ tối nay đây 👇 Gửi tấm của mày vô đây, 20 giây"** đã chết: "Gửi tấm của mày vô đây" là **mệnh lệnh chỉ có nghĩa với người CHƯA nộp** — cùng hình dạng ngữ nghĩa với chữ cấm vĩnh viễn `đứa nào chưa`._

**S6 — bàn giao trực, nhắn RIÊNG ngày 14/09 (không đăng vào nhóm) — lịch đã sửa theo A98/C51:**
> Nhờ mày việc này: **từ tối 15/09 tới hết 21/09**, khoảng 20:45 tao gửi riêng cho mày cái sổ của tối đó, mày dán vào nhóm giúp tao.
> **Hai tối 15/09 và 18/09** tao sẽ im hẳn trong nhóm — không rep, không thả tim, không gì cả. Đây là phần quan trọng nhất, mày đừng nói với ai.
> Và nếu có tối nào mày quên dán thì **cứ để quên**, đừng dán bù. Quên cũng là kết quả tao cần biết.

**S7 — exit survey, nhắn RIÊNG từng người, đúng một câu, CHỈ ngày 22/09** (ngày 15 của Bước 0, sau khi cửa sổ đo đã đóng — **tuyệt đối không hỏi trong 15/09 và 18/09**, đó là hai ngày im lặng của A98):
> Hỏi thật một câu thôi: **nếu từ mai không ai dán sổ vào nhóm nữa thì mày thấy sao?** Trả lời một dòng, thật lòng, tao không giận.

**S8 — khi một sổ im 3 ngày liên tiếp (nhắn RIÊNG người mở sổ, KHÔNG nhắn vào nhóm):**
> Nhóm mày ngưng rồi hả? Không sao đâu, tao chỉ cần biết lý do thật: chán · quên · phiền · hay bận? Một chữ thôi cũng được.

**S9 — thông báo & đồng ý dữ liệu, nhắn vào nhóm NGAY SAU S3/S4 ngày 08/09. BẮT BUỘC, hạn chốt văn bản 07/09 (A106).**
_Lỗ hổng do audit bắt: tám script trên không có một dòng nào về quyền riêng tư, trong khi G2 thu **ảnh thật của ~35 người** vào Google Drive của founder. Không có script này thì Bước 0 đang xử lý dữ liệu cá nhân mà không có cơ sở, và `05` không thể viết Privacy Policy khớp với thực tế đã xảy ra._
> Một chuyện tao phải nói trước, đọc 30 giây thôi:
> **1.** Ảnh tụi mày gửi trong 14 ngày này tao lưu trong một thư mục Drive riêng của tao, **không đăng đi đâu, không đưa cho ai**.
> **2.** Tao ghi lại **ai có mặt / ai vắng theo mã (A1-m1…), KHÔNG ghi tên thật** vào một bảng tính.
> **3.** **Xong ngày 22/09 tao xoá hết** — ảnh và bảng tính. Trước đó, đứa nào nhắn tao "xoá ảnh của tao" thì tao xoá **trong ngày**, không hỏi lý do.
> **4.** Cái này **chưa phải sản phẩm**, chỉ là 14 ngày thử. Không có tài khoản, không có app, không thu gì.
> **5.** Ai không muốn tham gia thì nói riêng với tao, **không cần lý do**, và không ai trong nhóm biết.
> Ai OK thì thả một 👍 cho tao biết.

_Điều kiện áp dụng: người trả lời "không" ở câu 5 của S2 (dưới 16 tuổi) **đã bị loại từ vòng tuyển**, không thương lượng._

### 5.10. Ba thứ TUYỆT ĐỐI không làm trong 14 ngày này

1. **Không viết code sản phẩm.** Không "làm sẵn schema cho đỡ phí thời gian". Nếu Bước 0 fail, schema đó là rác.
2. **Không nhắc trong nhóm ở 15/09 và 18/09** (A98 — hai ngày, không phải ba) — kể cả thả tim, kể cả trả lời câu hỏi. Và **không tự dán card vào nhóm trong toàn bộ ngày 8–14**; card đi qua người trực (A97).
3. **Không cứu sổ đang chết.** Sổ chết là dữ liệu tốt nhất trong toàn bộ thí nghiệm.

### 5.11. Nhánh B (không kèo) — đặc tả đủ để chạy được ngày 08/09

> **Lỗ hổng được lấp ở đây** (`_audit-report.md` THIẾU): *"Nhánh B (không kèo) của Bước 0 chưa được đặc tả đủ để chạy… card nhánh B trông thế nào, `q_x` không định nghĩa được, và nếu H3 kết luận BỎ KÈO thì `08` (toàn bộ tone, 20 câu mẫu, nhãn ✓/💀), `09` §5 phải viết lại."* Ba sổ nhánh B chiếm **37,5% cỡ mẫu** của Bước 0 và trước hôm nay chúng có đúng một dòng mô tả.

**a) Ba sổ nhánh B chạy đúng như thế nào**

| Thứ | Nhánh A (5 sổ) | **Nhánh B (3 sổ) — chốt** |
|---|---|---|
| Câu hỏi trong Form | `Ảnh hôm nay` + `Nhãn: XONG / TOANG` | **`Ảnh hôm nay`** — **một câu, không có câu thứ hai** |
| Kèo (`goal_text`) | có, 8 preset hoặc tự viết | **không có ô nhập kèo.** Không hỏi, không gợi ý, không "mục tiêu của tuần" |
| Nhãn trên ảnh | ✓ / 💀 | **không có nhãn nào** |
| Dòng 2 của card | `Ngày thứ N · X tấm · chuỗi Y` | **`Ngày thứ N · X tấm · chuỗi Y`** — giống hệt. Ba con số này **không phái sinh từ kèo** |
| Chân card | `✓ 4  💀 1` | **bỏ hẳn dòng này**, không thay bằng gì |
| Caption khi dán | như A | **giống hệt A** — nếu đổi caption thì đang đo hai biến |
| Script tin nhắn | S1–S9 | **cùng S1–S9**, chỉ bỏ mọi câu nhắc tới kèo/TOANG |

**Luật một-biến:** giữa A và B **chỉ được khác đúng một thứ — lớp kèo** (kèo + nhãn + chân card). Mọi thứ khác giống hệt. Đây là điều kiện để H3 nói được gì.

**b) `q_x` ở nhánh B — không tồn tại, và phải ghi ra là không tồn tại**

`q_x` = tỉ lệ tấm mang nhãn XONG. Nhánh B **không có nhãn** ⇒ `q_x_roster(B)` và `q_x_sliding(B)` **KHÔNG ĐỊNH NGHĨA ĐƯỢC**.

- Trong sheet `daily`, hai cột đó ở dòng của sổ nhánh B ghi **`n/a`**, **tuyệt đối không ghi `0`**. Ghi `0` sẽ kéo trung bình toàn mẫu xuống và tạo ra một kết luận sai về việc "người ta không hoàn thành kèo".
- Ngưỡng `q_x_roster ≥ 0,30` ở CỔNG #1 (`07` §4) **chỉ tính trên 5 sổ nhánh A**. Mẫu số là 5, không phải 8.
- Chỉ số duy nhất so được giữa A và B là **`q_c_roster`** (có mặt hay không) và **% sổ đạt ≥9/14 ngày tính**.

**c) H3 đọc thế nào — và điều gì chết nếu BỎ KÈO thắng**

`q_c(B) − q_c(A) ≥ 10 điểm` ⇒ **BỎ KÈO** (`07` §4 CỔNG #1). Đây là **kết luận hợp lệ, không phải thất bại**. Danh sách thứ phải viết lại, chốt trước để ngày 22/09 không phải nghĩ:

| Phải viết lại | Ở đâu | Quy mô |
|---|---|---|
| Ô nhập kèo, 8 preset kèo, US-13 đổi kèo | `02` bảng US | **−1,0 pw** (đây là nguồn của con số "MVP-0 còn ~3,58 pw") |
| Nhãn XONG/TOANG ở luồng nộp, chân card `✓/💀` | `08` §3, §4 màn 4 | −0,15 pw |
| **Toàn bộ tone**: 20/60 câu bank nhắc tới kèo/TOANG | `08` §5.3, §5.6 | 0 pw, nhưng ~4 giờ viết lại |
| Asset 3 "Thẻ TOANG" | `09` §5 | **đã CẮT VĨNH VIỄN** (S15) ⇒ không có gì để viết lại |
| `proof.status` | `04` §8.9 — mặc định `'xong'`, cột giữ nguyên | 0 pw |
| Câu định vị §1 của `01` | `01` §1 | phải viết lại — sản phẩm thành *"gửi một tấm hôm nay tao thế nào trong nhóm Zalo"* |

⚠️ **Điều KHÔNG được làm khi BỎ KÈO thắng:** giữ kèo lại "cho chắc" vì đã thiết kế xong. Nhánh B thắng nghĩa là lớp kèo **làm giảm** tỉ lệ có mặt — giữ nó lại là trả 1,0 pw để làm sản phẩm tệ hơn.

**d) Nhánh B **không** làm cỡ mẫu nhánh A nhỏ đi**

Sàn tuyệt đối là **6 sổ = 4A + 2B** (C53/A94). Khi phải cắt xuống sàn, cắt **cả hai nhánh theo tỉ lệ**, không dồn hết vào B để giữ nhánh A đủ 5 — làm thế thì H3 mất luôn khả năng kết luận, và H3 là giả thuyết rẻ nhất trong ba giả thuyết.

---

### 5.12. Đo `monthly_visits` ngay trong Bước 0 — 0đ, 5 phút/tuần

> **Lỗ hổng được lấp ở đây** (`_audit-report.md` THIẾU): *"Không có ai đo `monthly_visits` trong Bước 0… baseline để hiệu chỉnh giả định 25 lượt/người/tháng — tham số quyết định trần beta là 60 hay 600 sổ — sẽ không được thu thập ở đúng lúc rẻ nhất."*

Bước 0 không có code, nên không có counter. Nhưng **112 shortlink đã tồn tại** (§5.7) và chúng đo đúng thứ cần đo.

| Đại lượng | Cách lấy ở Bước 0 | Ghi vào |
|---|---|---|
| **Số lượt/người/tháng** (đối chiếu A72 = 25) | `tổng click 112 shortlink ÷ tổng người trong roster ÷ 14 ngày × 30` | Sheet `obs`, cột `visits_per_person_30d` |
| **Số lượt/sổ/tháng** | `tổng click ÷ số sổ ÷ 14 × 30` | Sheet `obs` |
| **Đối chứng số lần nộp** | `tổng response Form ÷ số người ÷ 14 × 30` | Sheet `obs` |

**Vì sao con số này đắt giá:** A72 (25 lượt/người/tháng) là số nhân **một mình** biến ngưỡng luật 6.000/8.500/10.000 lượt thành trần **60/85/100 sổ**, và nó mang nhãn `[ước lượng, ảnh hưởng 🔴 rất cao]` mà **không có thiết bị đo nào trước beta trong toàn hồ sơ**. Bước 0 là lần duy nhất đo được nó với chi phí **0đ**.

⚠️ **Giới hạn phải ghi kèm khi trích dẫn:** shortlink đếm **click**, không dedupe theo người; ở Bước 0 mỗi ngày chỉ có **một** link/sổ trong khi sản phẩm thật có nhiều đường vào. Con số ra sẽ là **chặn dưới**, không phải ước lượng trung tâm. Nếu nó đã ≥25 lượt/người/tháng thì A72 đang **lạc quan** và trần pháp lý thật **thấp hơn 60 sổ** — đó là phát hiện quan trọng nhất mà 5 phút/tuần có thể mua.

**Chủ sở hữu tiếp theo:** từ tháng đầu beta, phép hiệu chỉnh này chuyển sang `13` §5 (đối chiếu `monthly_visits ÷ monthly_active_persons` thật), hạn đọc số đầu tiên **01/01/2027**.

---

### 5.13. Ngày 15 (22/09) và kịch bản kết quả xám — xem `13` §2

Toàn bộ giao thức **đóng Bước 0** (đóng băng dữ liệu 08:00 · tính 6 con số · exit survey 4 câu · tin nhắn đóng gửi vào 8 nhóm · **xoá ảnh trên Drive trong ngày** · mẫu văn bản quyết định có mục "ba điều tôi đã sai") nằm ở **`13` §2** — runbook vận hành, tài liệu mới ngày 04/09/2026.

Và **kịch bản "Bước 0 cho kết quả xám"** — trước hôm nay chỉ có một dòng ở `07` §4 — nằm ở **`13` §2.7** với ba thứ mà tài liệu này không chứa được:
- **Chi phí lịch của một lần chạy lại: 0,70 pw** (code bắt đầu 08/10 thay vì 23/09 = trễ 15 ngày lịch ⇒ cửa sổ tới feature freeze còn **2,41 pw** thay vì 3,11 pw) ⇒ D-01 đổi từ "cắt 1,08 pw" thành **"cắt ≥1,78 pw"**.
- **Đổi đúng MỘT biến** khi chạy lại (đảo người tuyển · bỏ đường thoát hiểm Google · kéo cửa sổ im lặng lên 4 ngày) — không được đổi hai.
- **Trần số lần: xám lần 2 đọc là XẤU.** Không có lần thứ 3, và luật này phải vào ADR-000 **hôm nay**, không phải quyết vào ngày 07/10 khi đang thất vọng.

⚠️ Nhánh chưa ai viết: **xám + D-02 chọn 15 giờ/tuần** ⇒ 3,5 pw = 14,4 tuần lịch ⇒ beta không chạy được 02/12 kể cả khi **không** chạy lại. Trong nhánh đó **cấm chạy lại**; chọn thẳng DỪNG hoặc cắt MVP-0 xuống ≤2,4 pw (`13` §2.7d).

---

## 6. DANH SÁCH KHÔNG LÀM — ĐẦY ĐỦ

20 mục đầu giữ nguyên từ v2 §6 (không nhắc lại ở đây để tránh trôi bản). Dưới đây là **7 mục bổ sung ở tầng phạm vi MVP** mà v2 chưa liệt kê vì nó nói về sản phẩm chứ không nói về công trường:

| # | Không làm ở MVP | Lý do | Điều kiện mở lại |
|---|---|---|---|
| 21 | **Màn đăng nhập, tài khoản, khôi phục qua email** | Device token + mã 6 ký tự (**bảng chữ 28 ký tự**, A43) đủ cho ≤12 sổ đợt 1 / ≤30 sổ đợt 2. Auth là hố 3–5 pd với RLS | Khi mất tài khoản >10% người dùng beta, đo bằng số lần nhập mã khôi phục |
| 22 | **Đa sổ trong UI / nút "Mở sổ mới"** | v2 §6 mục 14 đã khoá; S02/C25 cắt lần nữa. **1 sổ/thiết bị ở MVP-0**, và **`G ≡ 0` trong 12 tháng đầu là một quyết định CÓ Ý THỨC, được ghi ra thay vì để nó xảy ra âm thầm** (A101). Nhưng **cột `book_id` + RLS vẫn viết từ commit đầu** (C52 — khoá sổ, **không** `group_id`) — chi phí hôm nay bằng 0, chi phí retrofit là 3–5 pw | v1.1. Trần **3 sổ/thiết bị** là hằng số đặt trước, **chưa có hiệu lực** |
| 23 | **Dashboard đẹp / công cụ analytics của bên thứ ba** | PostHog & co. mặc định đo cấp **user**; dùng chúng là vi phạm P10 ngay từ cấu hình. Một view SQL + một trang tĩnh là đủ | Khi >100 sổ, việc tự viết mới đắt hơn |
| 24 | **Tối ưu hiệu năng, cache CDN, ảnh responsive nhiều size** | Ở 12 sổ, tổng traffic dưới 1 GB/tháng. Tối ưu bây giờ là tối ưu cho một sản phẩm chưa chắc tồn tại | >1.000 sổ hoặc hoá đơn R2 >$20/tháng |
| 25 | **Thiết kế thương hiệu, art, illustration, animation** | c-scope-execution ước ~8 pw nội dung/thiết kế cho DOC 1. Ở đây: 1 font, 2 màu, 0 illustration. Card là bề mặt duy nhất cần đẹp | Sau khi M1 đạt |
| 26 | **i18n / tiếng Anh** | Một múi giờ, một ngôn ngữ. v2 §6 mục 18 | >5% người dùng ngoài VN |
| 27 | **Test end-to-end đầy đủ (Playwright/Cypress)** | Chỉ giữ 3 test có ý nghĩa: bất biến 10.000 mô phỏng, quét template bank, quét cây render. Chúng bảo vệ **nguyên tắc**, không bảo vệ pixel | Khi có người thứ hai trong đội — đó là lúc test bắt đầu trả lãi |

**Luật đánh đổi 1-1 (P7) áp dụng nguyên vẹn:** mọi hạng mục thêm vào tài liệu này phải cắt một hạng mục đang có, ghi rõ pd, ghi vào commit message.

---

## 7. DEFINITION OF DONE

MVP **xong** khi và chỉ khi cả 5 khối dưới đây đều tick hết. Không có "gần xong".

### 7.1. Sản phẩm

- [ ] Đúng **7 màn + 1 slot dự phòng để trống**. [CHỐT 2026-08-28, QĐ-32] Slot 8 **chỉ** được lấp nếu Bước 0 chứng minh một màn là bắt buộc, và lý do phải nằm trong ADR. **Yêu cầu của `10` §4 luật 1 (lấp slot 8 bằng fake door "Bao cả sổ", +0,2 pw) BỊ TỪ CHỐI ở MVP-0**: một fake door bán hàng không phải một phát hiện của Bước 0, và nó đang bị khoá thêm bởi QĐ-01 (doanh thu 0 tuyệt đối). Fake door T3 của `10` chuyển sang **tuần 4 của beta ở dạng một dòng text trong màn Của tôi**, không phải một màn
- [ ] Một người mới, không quen founder, tự mở sổ → mời 3 bạn → cả 4 nộp tấm đầu tiên, **không nhắn founder một câu nào**
- [ ] Toàn bộ luồng chạy trong **webview Zalo trên máy thật**: 1 Xiaomi, 1 Oppo, 1 Samsung tầm trung, 1 iPhone
- [ ] Card render <2s p95, font Việt đủ dấu, preview đúng 4:5 trong Zalo
- [ ] Mã 6 ký tự gõ tay vào được sổ khi link bị chặn

### 7.2. Nguyên tắc (tự động, không review bằng mắt)

- [ ] Test 10.000 mô phỏng 30 ngày **xanh**: không cột nào giảm ngoài `chuỗi`, và `chuỗi` chỉ giảm về đúng 0 khi hết van (P1)
- [ ] Test CI quét cây render: 0 chỗ nhận `member.name` trong nhánh `vắng` (P2)
- [ ] Test CI quét template bank: 0 placeholder `{goal}` / `{goal_text}` (P3)
- [ ] Snapshot test card: luôn có ≥2 con số không bao giờ giảm (P4)
- [ ] Snapshot test layout: pixel đầu tiên dưới header là ảnh người khác, không phải nút Nộp (P5)
- [ ] Lint/grep CI: 0 số ma trong logic ngày/chuỗi/ngưỡng (P6)
- [ ] Unit test: `ngày_tính` không phụ thuộc `card_shared` (P11)
- [ ] Tổng pd trong backlog ≤ **trần cứng 6,5 pw** (A83), **kiểm bằng `docs/adr/pw-ledger.md`** (P7) [CHỐT 2026-08-28, QĐ-33]. ⚠️ **Hôm nay backlog = 6,63 pw (§2) ⇒ ĐANG VƯỢT TRẦN 0,13 pw ⇒ theo A83, kill gate kỷ luật scope 05/10/2026 sẽ kích hoạt nếu chưa cắt bù.** Luật: **một khoản cắt chỉ được chi một lần**; không PR nào được merge nếu tổng vượt trần. Trước ngày này, sáu tài liệu độc lập cùng tiêu một khoản cắt ("nút thả tim 0,2 pw" được bán **ba lần**) và không có nơi nào cho biết tổng pw hiện tại là bao nhiêu — tức P7 **không kiểm tra được**

### 7.3. Đo lường

- [ ] Dashboard cấp **sổ**, cột đầu là **`book_id`** (QĐ-02c), đọc H1/H2/H3 trong **3 phút**. Ở MVP-0 dashboard = **6 truy vấn SQL chạy tay**, không phải UI
- [ ] **Toàn bộ 32 event của danh mục hợp nhất** (`04` §7.1, QĐ-02) có mặt trong schema **từ commit đầu tiên** — không backfill được. Trong đó 4 event an toàn: `member_left{misses_7d, was_removed_by_moderation, days_in, toang_14d, kept_proofs}` · `report_created/resolved` · `safety_screen_shown{reason_bucket}` · `proof_deleted_by_self`
- [ ] Bảng `audit_log` (QĐ-19) có mặt từ migration đầu — nghĩa vụ lưu ≥2 năm, không làm bù được
- [ ] `group_alive` cài đúng định nghĩa đã chốt: **≥3 người nộp tấm trong 7 ngày gần nhất**
- [ ] **Hai** dòng cảnh báo tự động [CHỐT 2026-08-28, QĐ-04]: `monthly_visits` (vàng **6.000** / đỏ **8.500**) và `monthly_active_persons` (vàng **600** / đỏ **850**). **Con số 700 cũ đã bị bác** — ngưỡng NĐ 147/2024 là **OR** và nhánh lượt-truy-cập bind trước ~2,5 lần (`05` §0 kết luận 2)
- [ ] `q_c_roster` (mẫu số đóng băng) là con số so ngưỡng; `q_c` trượt chỉ là cột báo cáo (QĐ-03)
- [ ] `card_opened` dedupe theo thành viên, đủ để tính H1 thật

### 7.4. Pháp lý & an toàn

- [ ] ToS + quyền riêng tư online, khớp với TTL 72h và với "không nhận diện khuôn mặt"
- [ ] **SLA KÉP công bố ở màn 7** [CHỐT 2026-08-28, QĐ-17]: **48 giờ** cho khiếu nại của người dùng · **24 giờ (khẩn cấp 6 giờ)** cho yêu cầu của cơ quan nhà nước. Hai con số cho hai đối tượng — con số thứ hai là **luật định, không thương lượng** (Luật ANM 116/2025) và không được gộp vào 48h
- [ ] **Auto-hide TOÀN CỤC ngay ở report đầu tiên** [QĐ-16]: `proof.hidden_at = now()` ẩn với **tất cả**, không chỉ với người báo cáo. Founder xử trong 48h, khôi phục nếu report sai. Thiết kế cũ của `08` §6.4 (ẩn client-side chỉ với người báo) để nội dung vi phạm hiển thị với 4 người còn lại tối đa 48 giờ ⇒ **không thoả nghĩa vụ "gỡ bỏ kịp thời"** của Luật ANM 116/2025 Điều 16 khoản 3
- [ ] `RUNBOOK.md` tồn tại và chứa: công tắc `remote_config['service.paused']` · **script khoá một sổ khẩn cấp** · một login Supabase chỉ-đọc · câu trả lời mẫu cho khiếu nại · **tên một người thứ hai** · **quy trình export bằng tay** (một truy vấn SQL + zip, **SLA 10 ngày**) — D-06: nghĩa vụ "cung cấp bản sao" đã công bố trong Privacy Policy nhưng **không nằm trong bảng pw nào**, nên nó phải là **0 pw bằng tay**, không phải một tính năng
- [ ] `goal_text` **xoá cùng sổ, không giữ sau khi thành viên rời** (A69); không một câu copy nào tham chiếu `goal_text` (test P3)
- [ ] Age gate lưu **cờ boolean `is_16_plus`, KHÔNG lưu năm sinh** (QĐ-20, tối thiểu hoá dữ liệu — Luật 91/2025)
- [ ] Age gate ≥16 ở luồng Mở sổ (kiểm tra ở **tầng ứng dụng**, không phải CHECK constraint gọi `now()` — Postgres cấm hàm không-IMMUTABLE trong CHECK)
- [ ] Chặn 10 từ khoá rối loạn ăn uống ở ô kèo tự viết → màn hỗ trợ + 3 preset an toàn + event
- [ ] "Xoá dữ liệu của tôi" chạy thật, kiểm bằng cách xoá rồi query DB **và** query R2
- [ ] EXIF bị strip, kiểm bằng `exiftool` trên 5 ảnh đã upload
- [ ] Ảnh gốc thật sự biến mất sau 72h, kiểm ở staging với TTL 1h

### 7.5. Vận hành & thoát

- [ ] Deploy = **1 lệnh**; rollback đo được **<10 phút**
- [ ] Hoá đơn hạ tầng tháng đầu **≤$40** [CHỐT 2026-08-28, QĐ-09 — thay cho ≤$12]. Kỳ vọng **$28–37**: **Supabase Pro $25 là bắt buộc từ ngày beta chạy** vì Free **không có backup hằng ngày**, trong khi sản phẩm hứa giữ thumbnail vĩnh viễn và ToS hứa giữ ảnh. Tiêu chí ≤$12 cũ sẽ **fail bằng thiết kế**. Đèn báo động: **>$60/tháng**
- [ ] Giờ vận hành của founder ≤**5 giờ/tuần** trong 2 tuần beta liên tiếp
- [ ] Ảnh nằm ở R2, không nằm ở Supabase Storage; mọi truy cập media đi qua một `StorageAdapter` (điều kiện của **`ADR-000` §2** để di chuyển ≤1 pw nếu luật sư yêu cầu đặt tại VN — A103/S21: **MỘT** file ADR duy nhất `docs/adr/ADR-000-bat-bien.md`, cộng `docs/adr/pw-ledger.md`; "ADR-001"/"ADR-002" **không tồn tại**)
- [ ] Kill gate của founder vẫn dán trên tường, chưa bị gỡ xuống

### 7.6. Cổng cuối — vượt qua thì mới gọi là MVP thành công

- [ ] **M1**: `group-D14(app) ≥ B` trên **≥12 sổ beta** (A90/QĐ-25), **đọc ngày 16/12/2026** (A116). `B` tính theo công thức chốt ở A26/QĐ-26 (mẫu số **5 sổ nhánh A**, loại sổ số 0, roster đóng băng). ⚠️ **Với n=5, `B` chỉ nhận giá trị {0,20,40,60,80,100}% — bước nhảy 20 điểm.** Chỉ tuyên bố "đạt" khi biên ≥1 bậc của B, hoặc khi cả hai đều ≥60%
- [ ] **M2**: ≥1 sổ mở mới **không do founder tuyển** trong 28 ngày
- [ ] **H1 thật** (từ `card_opened`, không phải proxy `click-shortlink` của Bước 0) ≥60%. Nếu 40–60%: **Android web push đã bị CẮT khỏi MVP-0** (S09) ⇒ nó **không phải** một khoản đã ngân sách, và chỉ được mở lại bằng một khoản đối trừ ghi vào `pw-ledger.md`. ⚠️ Phương án dự phòng này **có thể không tồn tại**: `03` §9 B4 cho rằng Service Worker nhiều khả năng không đăng ký được trong webview Zalo. Buổi kiểm chứng **04/09** phải trả lời (câu 4 trong 7 câu của A105)
- [ ] Không có sự cố an toàn nào phải xử lý quá 48h

---

## 8. BẤT ĐỒNG VỚI ĐỊNH NGHĨA SẢN PHẨM v2

Bốn điểm. Không điểm nào đòi đổi hướng; cả bốn đều là chỗ v2 **thiếu một con số hoặc mâu thuẫn với chính nó**.

**(1) Lịch 10 tuần của §4.10 chỉ đúng nếu founder làm 40 giờ/tuần — và điều đó mâu thuẫn với kill gate ">15 giờ/tuần" của §9.**
6,63 pw = **265,2 giờ** (A80). Ở 20 giờ/tuần và hiệu suất **0,65** `[không có nguồn — A81]` thì ra **20,4 tuần lịch**, tức beta chạy **13/02/2027**, **trễ trần cứng 15/12/2026 khoảng 8,5 tuần**. Ở 15 giờ/tuần thì **27,2 tuần**. Đề nghị: trước 23/09 founder ghi vào `ADR-000` đúng một con số — số giờ/tuần cam kết (**D-02**) — rồi chọn (a) toàn thời gian 10,2 tuần hay (b) cắt scope xuống **3,5 pw** (A84). Phương án (c) "dời trần sang 15/02/2027" **đã bị A89 chặn** ("chưa chạy ⇒ ship thứ đang có, không gia hạn"). Phương án "beta 5 sổ" của bản trước **đã bị C07/QĐ-25 bác** — beta là **12 sổ đợt 1**, và cắt cỡ mẫu thì `sổ-D28` không bao giờ đạt `n ≥ 24`. **Khuyến nghị (b).** Trần lịch là hàng rào duy nhất chống scope creep; phá nó một lần là phá vĩnh viễn.

**(2) "Cửa sổ im lặng" của §10(f) hiểu theo nghĩa đen sẽ giết luôn phép đo.**
Nếu ngày 8/11/14 founder "không post gì" thì card không được dán, mà card **là** cơ chế phân phối của sản phẩm. Đo `q_c` trong điều kiện không có card là đo một sản phẩm khác. Đề nghị sửa thành: founder làm card như thường, **gửi riêng cho thành viên đang tới lượt trực** (đúng cơ chế xoay vòng US-14), và im lặng tuyệt đối trong nhóm. Người trực quên dán → **để nguyên**, và đó chính là phép đo điểm chết đơn ở §9 mục 9, thu được miễn phí.

**(3) Bước 0 một-giai-đoạn sẽ đo ra một con số dễ hơn sản phẩm.**
Dán ảnh thẳng vào nhóm Zalo **không có** bước bấm link — chính là bước ma sát cao nhất của sản phẩm thật. Đề nghị chia G1 (ngày 1–7, dán vào nhóm) và G2 (ngày 8–14, qua Google Form), lấy **`Δ_link+trực` = `q_c_roster`(G1) − `q_c_roster`(G2)**. ⚠️ **Không được gọi con số này là "thuế của cái link"** (C20): G1→G2 đổi **hai** thứ cùng lúc (thêm link **và** đổi người dán card từ founder sang người trực), nên `Δ` gộp cả hai và Bước 0 **không tách được**. Chỉ `q_c_roster`(G2) mới được đem so ngưỡng H2. Chi phí: 0đ, 0 pw, khoảng 40 phút chuẩn bị thêm.

**(4) v2 không nói ai đo H1 ở Bước 0 và bằng cách nào.** §11 đặt ngưỡng "≥60% mở card trong 24h" cho cả Bước 0 lẫn MVP, nhưng ở Bước 0 không có trang web để đo "mở". Ba proxy khả dĩ ở §5.7 đều có sai lệch đã biết. Đề nghị ghi rõ trong kết luận 22/09: **H1 ở Bước 0 chỉ đủ để DỪNG (nếu <40%), không đủ để ĐI TIẾP.** Ngưỡng ≥60% chỉ có hiệu lực sau khi US-23 chạy ở beta.

_Ghi chú lịch, không phải bất đồng: bản đầu của tài liệu này viết theo giả định "hôm nay là 28/08/2026". **Hôm nay là 04/09/2026** — tức **buổi kiểm chứng nền tảng 7 câu (A105) là HÔM NAY**, và hạn 03/09 (gửi luật sư + 3 báo giá + báo giá domain, A104) **đã qua**. Nếu hai việc đó chưa xong thì chúng là việc trễ hạn, không phải việc sắp tới. Đệm còn lại tới 08/09 là **4 ngày**, và A106 xếp kín nó rồi: shortlink 112 link · cột `roster_size` · ngưỡng H2 ≥9/14 · ToS/Privacy nháp · script S9 thông báo đồng ý. **Đừng dùng 4 ngày đó để mở rộng phạm vi.**_

---

## 8b. BẤT ĐỒNG VỚI BẢNG PHÁN QUYẾT TRỌNG TÀI

_Theo luật hiệu lực của `_rulings.md`: ghi bất đồng ra đây, và **vẫn sửa theo phán quyết**. Cả ba mục dưới đây đã được thi hành đúng phán quyết trong tài liệu này._

**(i) A85 chốt MVP-0 = 4,58 pw, nhưng bảng US chi tiết của tài liệu này cộng ra 5,93 pw cho cùng tập story.** Chênh **1,35 pw**. Nguyên tắc 1 của chính bảng phán quyết ("con số thận trọng hơn thắng") sẽ chọn 5,93; luật đọc từ điển ("mọi con số phải khớp cột GIÁ TRỊ CHUẨN") chọn 4,58. Đã thi hành theo **4,58** và ghi chênh lệch ra. **Đề nghị:** phiên ánh xạ C09 ngày 22–23/09 phải kết thúc bằng **một** con số, và nếu con số đó là 5,93 thì D-01 không còn là "cắt 1,08 pw" mà là "cắt **2,43 pw**" — một bài toán khác hẳn về mức độ.

**(ii) A83 (trần 6,5 pw) và ba khoản creep hợp lệ A49 + A28 + A53 (+0,35 pw) không thể cùng đúng.** Sau khi ghi đủ ba khoản đó và trừ hai khoản cắt phân biệt được của bảng này (−0,22 pw), backlog = **6,63 pw**, vượt trần **0,13 pw** ngay tại thời điểm ban hành phán quyết. Đã thi hành: giữ nguyên cả hai con số và ghi ra rằng trần **đang bị vượt**, thay vì làm tròn 6,63 xuống 6,5. **Đề nghị:** hoặc nâng A83 lên 6,65 pw bằng văn bản, hoặc chỉ định một khoản cắt bù ≥0,13 pw trước **05/10/2026**.

**(iii) A84 (trần 3,5 pw) chọn con số của `07` vì "thận trọng hơn", nhưng 3,5 pw ở đây là *trần khả năng*, không phải *ước lượng công việc*.** Với 13 giờ code/tuần, cửa sổ 23/09→15/12 cho **3,85 pw**; chọn 3,5 pw là tự trừ thêm 0,35 pw đệm — hợp lý — nhưng nó **không** làm khối lượng công việc nhỏ đi. Đã thi hành theo 3,5 pw. **Đề nghị:** viết rõ trong `ADR-000` rằng 3,5 pw là **trần**, và 4,58 pw là **ước lượng**, để không ai đọc nhầm rằng scope đã vừa.

---

## 9. CÂU HỎI MỞ CẦN FOUNDER QUYẾT

Xếp theo hạn chót. Mỗi câu phải trả lời bằng một câu văn có số, ghi vào ADR.

| # | Câu hỏi | Hạn | Vì sao không hoãn được |
|---|---|---|---|
| 1 | **Bao nhiêu giờ/tuần cho dự án này, con số thật — 20 hay 15?** (= **D-02**, khối cảnh báo ở cuối §3.2) | **22/09/2026** | Toàn bộ §3.2 phụ thuộc câu này. Không có nó thì mọi lịch trong hồ sơ là hư cấu. Riêng Bước 0 đã ngốn 15,2 giờ/tuần |
| 2 | Chọn (a) toàn thời gian 10,2 tuần / (b) **cắt scope còn 3,5 pw** (A84)? — beta **luôn là 12 sổ** (A90), và (c) "dời trần sang 15/02/2027" **đã bị A89 chặn** | 22/09/2026 | Chọn sau khi đã viết code là chọn muộn |
| 3 | **Danh tính: Supabase Anonymous Sign-in hay API route + service key?** | **23/09/2026** (trước dòng code đầu) | Chọn sai = viết lại lớp truy cập ở tuần 6, +3 pd |
| 4 | Nếu H2 đạt nhưng H3 **fail** (nhánh không-kèo thắng ≥10 điểm) — founder có thật sự bỏ kèo không? | 22/09/2026 | Trả lời câu này **trước** khi thấy dữ liệu. Trả lời sau là hợp lý hoá |
| 5 | **Cả 7 câu của buổi kiểm chứng nền tảng** (A105): Zalo cảnh báo domain `.vn` lạ · `chooseImage`/`<input type=file>` · OG preview 4:5 crop · Service Worker trong webview · `navigator.share({files})` · danh sách "Đã xem" của Zalo · generated column `AT TIME ZONE` + `CREATE TABLE` — trên ma trận **≥3 máy Android thật** | **04/09/2026 — HÔM NAY** | Ba câu đầu có thể làm sụp kênh phân phối; biết trước tốn 1 buổi, biết sau tốn 6,63 pw. Nếu Zalo **cảnh báo** domain `.vn` thì phải mua domain thứ hai **ngay trong tuần** (A68) |
| 6 | Google Form file upload bắt đăng nhập Google — bao nhiêu % thành viên vướng? | Ngày 8 của Bước 0 | Nếu >30% vướng thì `q_c_roster`(G2) đang đo Google, không đo sản phẩm |
| 7 | Zalo có cho xem **danh sách người đã xem** một tin nhắn nhóm không? | 04/09/2026 | Quyết định proxy H1 ở §5.7 |
| 8 | Luật sư trả lời gì cho **7 câu** đã hợp nhất ở `05` §11 (QĐ-14)? **MỘT email, MỘT lần trả phí, ngân sách 5–15 triệu đồng** (A65/A66 — không mua thư 1 câu 3–5 triệu nữa) | Gửi **03/09/2026 — ĐÃ QUÁ HẠN**; **câu 3 bắt buộc có trước 20/12/2026** (ngày T4 của `10`) | Câu 1b quyết định trần beta là 60 hay 600 sổ. Câu 3 quyết định toàn bộ §3–§7 của `10` có tồn tại không. Hai câu Điều 32 BLDS quyết định card (ảnh 4–8 người) và cả hai phương án monetization |
| 9 | Giá thật của `.vn` năm 2026 và thời gian chờ cấp? ✅ **ĐÃ CÓ SỐ THẬT: 770.000đ/năm đầu, 460.000đ/năm sau** (`11` §7.2, kiểm chứng 04/09/2026), **MỘT** domain (A67/A68) | ~~03/09/2026~~ — **đã xong 04/09** | Giấy phép MXH đòi tên miền còn hiệu lực ≥6 tháng — đây là việc rẻ nhất mà tốn thời gian chờ nhất |
| 10 | Trần doanh thu tính lại bằng eCPM thật của tệp VN là bao nhiêu? | 06/09/2026 (3 giờ bàn giấy) | Con số 2,6 tỷ VND/năm tính trên IAP, trong khi Locket kiếm tiền bằng quảng cáo. Không được dùng con số cũ để ra quyết định chiến lược |
| 11 | Nếu ngày 3 của Bước 0 vẫn mất 20 phút/sổ, cắt nhánh A xuống 4 sổ (= **sàn tuyệt đối** C53, `B` nhảy 25 điểm) hay giữ 5 và chấp nhận 15,2 giờ/tuần? | 10/09/2026 | Bước 0 chết vì kiệt sức ở tối thứ 9 là kịch bản thất bại có thật nhất |
| 12 | `B` (`group-D14` đo tay ở Bước 0) bằng bao nhiêu? Nhớ in kèm: **n=5 ⇒ B ∈ {0,20,40,60,80,100}%, bước nhảy 20 điểm** (A26) | 22/09/2026, **không sớm hơn** | Đặt trước là tự ra đề dễ cho mình |

**Ba câu hỏi mở của bản trước đã bị bảng phán quyết đóng, không hỏi lại:** "beta 5 sổ hay 10?" (⇒ **12 sổ**, A90) · "ngưỡng MAU 700?" (⇒ **hai counter** 6.000/8.500 lượt và 600/850 người, A54) · "SLA 48h hay 24h?" (⇒ **cả hai, cho hai đối tượng khác nhau**, A59).

---

## 10. ĐÃ CẮT — DANH SÁCH ĐẦY ĐỦ KÈM ĐIỀU KIỆN MỞ LẠI

_Mọi mục dưới đây bị cắt theo phán quyết scope creep của `_rulings.md` mục C (nguyên tắc 4: **scope creep = CẮT**; thứ đã bị cắt mà quay lại thì mặc định bị cắt lần nữa, trừ khi có khoản đối trừ đã ghi vào `docs/adr/pw-ledger.md`). Cột "pw" là giá trị mà **tài liệu này** ghi vào sổ cái — **mỗi khoản chỉ được chi MỘT LẦN** (A87)._

| # | Đã cắt | Ở đâu trong tài liệu này | pw ghi sổ cái | Căn cứ | Điều kiện mở lại |
|---|---|---|---|---|---|
| 1 | **Nút thả tim ẩn danh** | US-10 (1,2 → **0,6 pd**), §4.3 | **−0,12** | S01 / C03 | **T13+**, và chỉ khi có một giả thuyết gắn với nó. Hệ quả đã chấp nhận: **HM-1, HM-3, event `heart_sent` (số 25, để trống VĨNH VIỄN, không tái sử dụng), trường `hearts_recv_14d` chết theo**; bộ chỉ số tác hại còn **7** (A27) và **chỉ còn phát hiện RÚT LUI, không phát hiện LOẠI TRỪ** — điểm mù đã biết, thay thế gần nhất là HM-8 + `pulse_survey` |
| 2 | **Cron 21:00 `mo_chot_so`** | US-24 (1,0 → **0,5 pd**) | **−0,10** | A04 / QĐ-22 | **Không mở lại.** Trạng thái "sẵn sàng chốt" suy ra được từ giờ server, và v2 §4.7 chốt rằng hệ thống **không gửi gì** lúc 21:00. Chỉ còn **một** cron: `rollover` ở `5 21 * * *` UTC = **04:05 ICT** (A03) |
| 3 | **US-07 — lưới 30 ngày** | Bảng §2 (cột "Trong MVP-0?" = N), §4.3 | −0,30 (chỉ khi chọn (b)) | A86 / QĐ-25 | **T13+, ưu tiên 1** (S14: lưới 30 ngày **chính là** memory layer, nên nó về trước mọi thứ khác). Không mở lại trong 28 ngày beta đầu |
| 4 | **US-13 — biến thể card (đủ mâm + mốc sổ)** | Bảng §2, §4.3 | −0,10 (chỉ khi chọn (b)) | A86 / QĐ-25 | Sau khi **M1 đạt**. Là phần thưởng, không phải phép đo |
| 5 | **US-15 — màn "Của tôi" xuống 0,00 pw** | Bảng §2, §4.3 | −0,30 (chỉ khi chọn (b)) | A86 / QĐ-25 | Sau beta. ⚠️ **Hai thứ KHÔNG được cắt theo:** nút **"xoá dữ liệu của tôi"** (Luật 91/2025 — chuyển thành một liên kết ở màn 7) và **export bằng tay SLA 10 ngày** trong `RUNBOOK.md` (D-06) |
| 6 | **Tết freeze (build)** | Không nằm trong bảng §2 | — (khoản 0,10 pw **đã bị `07` tiêu**, không được bán lần hai) | S07 / C06 / A121 | Build ở **T13–T18, hạn 25/01/2027**. Giữ lại **đúng một hằng số 0 pw**: `remote_config['freeze.dates']` = **`[["2027-02-03","2027-02-12"]]`** (A120 — mùng 1 Tết Đinh Mùi là **06/02/2027**, không phải 17/02) |
| 7 | **Android web push** | DoD 7.6 | — (**chưa bao giờ được ngân sách**, không phải tiền) | S09 | Chỉ khi H1 rơi **vùng xám 40–60%** ở beta **và** buổi 04/09 chứng minh Service Worker **đăng ký được** trong webview Zalo. `03` §9 B4 cho rằng nó nhiều khả năng **không** đăng ký được ⇒ phương án dự phòng này **có thể không tồn tại** |
| 8 | **Đa sổ trong UI / nút "Mở sổ mới"** | §6 mục 22 | — (v2 §6 mục 14 đã cắt; **không có khoản đối trừ**) | S02 / C25 / A101 | **v1.1.** `G ≡ 0` trong 12 tháng đầu là **quyết định có ý thức**. Cột `book_id` + RLS vẫn viết từ commit đầu (0 pw). Trần **3 sổ/thiết bị** là hằng số đặt trước, **chưa có hiệu lực** |
| 9 | **Vai "chủ sổ" + chức năng kick** | §2 (dòng "Không có story nào cho") | — | S17 / A61 / C39 | **Không mở lại ở MVP-0.** State `removed` **chỉ** dùng cho ca moderation của founder; trường event đổi tên thành `was_removed_by_moderation` |
| 10 | **Lấp slot màn 8** (fake door "Bao cả sổ", màn preview, demo "Sổ mẫu") | DoD 7.1 | — | S04 / S19 / C44 / A79 | **Slot 8 để TRỐNG CÓ CHỦ ĐÍCH.** Chỉ mở nếu **Bước 0 chứng minh** một màn là bắt buộc, và lý do phải nằm trong `ADR-000`. Fake door bán hàng **không** phải phát hiện của Bước 0, và còn bị A62 (doanh thu 0đ tuyệt đối) khoá thêm |
| 11 | **Nút "Nghỉ 7 ngày" — UI** | Không có UI ở MVP-0 | −0,10 (do `06` ghi, **không** ghi lại ở đây) | S06 / C34 / A50 | Cột **`paused_until` VÀO SCHEMA TỪ COMMIT ĐẦU** (chi phí cột = 0), UI thì không. Đổi lại: **HM-4 phải mang nhãn "MƠ HỒ CÓ CHỦ Ý" bằng văn bản** |
| 12 | **Phương án "beta 5 sổ"** | §3.2 lựa chọn (b), §4.3, §8(1) | — | C07 / QĐ-25 / A90 | **Không mở lại.** Một kế hoạch beta duy nhất: **02/12/2026 · 12 sổ đợt 1 · ≤30 sổ đợt 2 từ tuần 15 · trần hành chính 60 sổ · trần cứng 15/12/2026**. Cắt cỡ mẫu thì `sổ-D28` không bao giờ đạt `n ≥ 24` (A25) |
| 13 | **Phương án (c) "dời trần sang 15/02/2027"** | §3.2 bảng lựa chọn | — | A89 / A115 | **Không mở lại.** "Chưa chạy ⇒ ship thứ đang có, **không gia hạn**" |
| 14 | **Ba file ADR (ADR-000/001/002)** | DoD 7.5 | — | S21 / A103 | **MỘT** file: `docs/adr/ADR-000-bat-bien.md` (3 mục: đơn vị đo · schema & đặt tên · pháp lý) + `docs/adr/pw-ledger.md`. Mọi tham chiếu "ADR-001"/"ADR-002" đổi thành "`ADR-000` §2"/"§3" |
| 15 | **Tài khoản Google Play $25 ở T13** | §4.4 | — | S10 / C50 | Sau cổng **`sổ-D28 ≥ 35%` trên n ≥ 24, đọc 26/01/2027** (A118). Mua trước là mua trước cổng |

**Một ngoại lệ đi ngược mặc định — đã ghi ra để không ai tưởng là creep trôi vào:**

| Giữ | Vì sao được giữ dù mặc định là CẮT | Điều kiện ràng buộc |
|---|---|---|
| **Shortlink 112 link ở Bước 0** (8 sổ × 14 ngày) | S18 — không có nó thì **ngày 22/09 không có con số H1 nào tồn tại**; ảnh Canva dán vào Zalo **không sinh sự kiện "mở"** | **Dịch vụ rút gọn của bên thứ ba** (Short.io gói free hoặc tương đương). **KHÔNG tự host. KHÔNG viết một dòng code sản phẩm nào.** Ghi thành lựa chọn có ý thức trong `ADR-000` |
| **Trang public (US-10, không có nút tim)** | S23 — `02` §4.3 nói thẳng: cắt nó thì **M2 không đo được**, mà M2 là 1 trong 2 tiêu chí thành công của MVP | Nếu D-01 chọn nhánh (a) thì trang public xuống **chỉ-đọc, không lưới** (−0,4 pw) — vẫn giữ được M2 ở mức tối thiểu |
| **`audit_log` (+0,15 pw) và `pulse_survey` (+0,05 pw)** | S24 / S25 — creep **được thêm đúng cách**: nghĩa vụ lưu ≥2 năm và kênh duy nhất còn nghe được người ở lại mà mệt. Cả hai **không thể làm bù** | Đã cộng vào US-20 (§2). Khoản đối trừ: nút thả tim đã cắt. **Chỉ được ghi vào `pw-ledger.md` một lần** |
