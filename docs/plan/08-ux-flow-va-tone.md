# 08 — UX FLOW, ONBOARDING & TONE OF VOICE

> ### ⚖️ ĐÃ ĐỐI CHIẾU VỚI BẢNG PHÁN QUYẾT TRỌNG TÀI — 03/09/2026
> Tài liệu này đã được rà soát từng dòng theo **bảng phán quyết trọng tài ngày 2026-09-03**, đặt tại `/home/huypq/teemi/docs/plan/_rulings.md` (53 phán quyết mâu thuẫn · 25 phán quyết scope creep · từ điển giá trị chuẩn A01–A123 · 10 mục cần founder quyết D-01…D-10).
> **Mọi hằng số trong tài liệu này lấy từ `_rulings.md`, không lấy từ trí nhớ và không lấy từ các bản trước.** Khi tài liệu này mâu thuẫn với `_rulings.md`, `_rulings.md` thắng.
> Chủ quyền của tài liệu này theo nguyên tắc 2 của bảng phán quyết: **TONE + UX**. Nó thắng ở caption card (A99), ở việc không có chức năng kick (A61), và ở lưới ảnh thích ứng trên card (A100). Nó **thua** ở: số màn (A79), auto-hide report (A60), số domain (A68), ngưỡng ngủ đông (A12), số event analytics (A51).
> Những hạng mục bị CẮT bởi phán quyết được liệt kê ở mục **"Đã cắt"** cuối tài liệu, kèm điều kiện mở lại.

_Tài liệu thiết kế trải nghiệm cho **Chốt Sổ** (`chotso.vn`). Viết 03/09/2026, rà soát theo phán quyết trọng tài 03/09/2026. Nguồn duy nhất về sản phẩm: `/home/huypq/teemi/docs/plan/01-dinh-nghia-san-pham-v2.md`; nguồn duy nhất về hằng số: `_rulings.md`. Trần backlog cứng là **6,5 pw** [A83]; sổ cái pw duy nhất là **`docs/adr/pw-ledger.md`** [A87] — mọi khoản ±pw nêu trong tài liệu này chỉ có hiệu lực khi đã được ghi vào sổ cái đó, và **một khoản cắt chỉ được chi MỘT LẦN**. Bất đồng với v2 nằm ở mục cuối, không nằm rải rác trong thân bài._

**Phạm vi:** **7 màn web + 1 slot dự phòng ĐỂ TRỐNG** [A79 · CHỐT 2026-08-28, QĐ-32] (Next.js, chạy trong webview Zalo lẫn browser). v2 §5 chốt 7 màn, trần 8, và slot 8 **chỉ** được lấp nếu Bước 0 chứng minh một màn là bắt buộc, lý do ghi vào ADR-000 — `02` DoD 7.1 biến điều đó thành tiêu chí Definition of Done nhị phân. **Không có wireframe cho màn 8 trong tài liệu này**: một bản vẽ dự phòng là scope dưới tên khác.
**Ba yêu cầu lấp slot 8 đều đã bị bác** [S19]: (a) fake door "Bao cả sổ" của `10` §4 — một fake door bán hàng không phải phát hiện của Bước 0, và A62 khoá mọi bề mặt doanh thu trong 6 tháng đầu; (b) màn preview của `09`; (c) **chế độ demo "Sổ mẫu" ở màn 1 của chính tài liệu này** — nó là màn thứ 8 dưới tên khác, đã bị cắt ở §1.1 dưới đây.
Phạm vi còn lại giữ nguyên: luồng onboarding, luồng mời, luồng nộp, toàn bộ chữ do app sinh ra, và các hàng rào an toàn ở tầng UI.
**Ngoài phạm vi:** mọi thứ xảy ra trong Zalo (sticker, voice, cà khịa) — đó là 13/40 giây của core loop và **0 pw**. Tài liệu này không viết một dòng roast template nào, vì §6 mục 4 của v2 cấm reaction/comment/chat trong sản phẩm.

---

## 0. BỐN QUYẾT ĐỊNH UX ĐẮT NHẤT TRONG TÀI LIỆU NÀY

Đọc bốn dòng này là đủ nếu không đọc gì khác.

| # | Quyết định | Chi phí | Nó cứu cái gì |
|---|---|---|---|
| **UX-1** | **Nhãn XONG/TOANG CHÍNH LÀ nút Gửi.** Không có nút "Gửi" thứ ba. Chạm nhãn = nộp xong, kèm thanh Hoàn tác 10 giây | −0,05 pw (bớt một nút, một state) — **chỉ có hiệu lực khi đã ghi vào `docs/adr/pw-ledger.md`** [A87] | Kéo bước 4 từ 18–22 giây (3 hành động) xuống **11–15 giây** (2 hành động). Đây là khác biệt giữa đạt và không đạt mục tiêu ≤15 giây |
| **UX-2** | **In mã sổ 6 ký tự LÊN card**, góc dưới phải, font mono, tương phản ≥4,5:1 | 0 pw (một dòng text trong template satori) | Nếu Zalo cảnh báo/chặn domain (rủi ro §9 mục 7 của v2 — "growth về 0"), **ảnh không bị chặn**. Mã đọc được bằng mắt là đường thoát hiểm duy nhất sống sót qua sự cố đó |
| **UX-3** | **Chế độ nghỉ không cần build.** VẮNG đã render ra số 0 pixel ⇒ "tạm nghỉ" chỉ là một dòng chữ giải thích trong màn Của tôi, không phải một cơ chế. Cột `paused_until` **vẫn có trong schema từ commit đầu** (chi phí cột = 0), **nhưng KHÔNG có UI ở MVP-0** [A50 · S06] | 0 pw | Xoá hẳn nhu cầu "pause mode" mà 4 hướng trước đều định build. Người nghỉ đã vô hình sẵn — việc còn lại là **nói cho họ biết điều đó**, vì họ không tự đoán được |
| **UX-4** | **Sản phẩm của 90 giây đầu (92 giây thật sau cổng tuổi bắt buộc — §1.1) là MỘT TẤM CARD ĐỂ GỬI, không phải một tài khoản.** Onboarding kết thúc ở share sheet, không kết thúc ở màn chính | 0 pw (đảo thứ tự màn) | Trả lời câu "app cần ≥2 người mới có nghĩa": người thứ 1 một mình **không** dùng sản phẩm, họ **sản xuất ra vật phẩm** để kéo người thứ 2. Xem §1.4 |

---

## 1. ONBOARDING 90 GIÂY — NGƯỜI ĐẦU TIÊN, MỘT MÌNH

### 1.1. Đồng hồ bấm giây, từng màn, từng dòng chữ

Điểm vào: chạm link `chotso.vn` từ tin nhắn của founder, từ TikTok, hoặc từ card của một sổ khác. **Không splash, không carousel, không đăng nhập, không xin quyền.**

| Giây | Màn | Người dùng thấy gì | Dòng chữ chính xác | Hành động |
|---|---|---|---|---|
| 0–5 | **1 · Sổ hôm nay (trạng thái chưa-có-sổ)** | **MỘT ẢNH CARD MẪU TĨNH** (một file PNG dựng sẵn, nhúng thẳng vào trang) + câu định vị. **KHÔNG phải một sổ mẫu đang chạy thật**, không có dữ liệu giả sinh động, không có state — xem khối cắt ngay dưới bảng | Câu: `Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm, không ai cài app.`<br>Nút chính: **`Mở sổ của nhóm mình`** | Cuộn hoặc chạm nút |
| 5–14 | **3 · Mở sổ** | Một ô text + 4 gợi ý tên | `Sổ này tên gì?`<br>Placeholder: `Ví dụ: Sổ nhà 4 đứa`<br>Gợi ý: `Sổ lớp mình` · `Sổ phòng trọ` · `Sổ 5 đứa` · `Sổ cày đêm`<br>Nút: **`Tiếp`** | 1 chạm gợi ý **hoặc** gõ ≤24 ký tự |
| 14–22 | **3 · Mở sổ (bước 2)** | Ô tên hiển thị **+ cổng tuổi** | `Tên bạn hiện trên card là gì?`<br>Placeholder: `Linh`<br>Chú thích nhỏ: `≤12 ký tự. Cả sổ sẽ thấy tên này.`<br>Ô tick **không-bỏ-qua-được**: `Tôi từ 16 tuổi trở lên.` — **không ô năm sinh, không ô ngày sinh** [A47 · QĐ-20], hệ thống chỉ lưu `is_16_plus` + `age_gate_at` | Gõ + **1 chạm** |
| 22–34 | **3 · Chọn kèo** | 8 nút preset, 2 cột × 4 hàng, + 1 ô "Tự viết" | Tiêu đề: `Kèo của bạn tháng này`<br>Preset: `Ngủ trước 12h` · `Đi bộ 20 phút` · `Học 15 phút` · `Đọc 5 trang` · `Không trà sữa hôm nay` · `Tập 15 phút` · `Không bỏ bữa sáng` · `Không mất tích`<br>Chú thích: `Chỉ người trong sổ thấy kèo của bạn. Kèo không bao giờ lên card.` | **1 chạm** |
| 34–58 | **2 · Nộp** | Nút mở thư viện chiếm 60% màn | `Một tấm cho hôm nay`<br>Nút: **`Chọn ảnh`** (nút phụ nhỏ: `Chụp`)<br>Sau khi chọn: 2 nút lớn **`XONG ✓`** / **`TOANG 💀`**<br>Chú thích: `Ảnh gì cũng được. Cái nhãn mới là chuyện.` | 3 chạm (mở picker → chọn ảnh → chạm nhãn = gửi luôn) |
| 58–72 | **4 · Card chốt sổ** | Card 4:5 render xong, có ảnh vừa nộp | Trên card: tên sổ · `Ngày thứ 1 · 1 tấm` · ảnh + ✓ · `Linh chốt sổ` · mã `K7QM2P`<br>Dưới card: **`Chia sẻ vào Zalo`** (chính) · `Lưu ảnh` (phụ) · `Chép lời mời` (phụ) | 1 chạm |
| 72–92 | Share sheet của hệ điều hành | Danh sách nhóm Zalo | Caption đã nằm sẵn trong clipboard (xem §2.2) | Chọn nhóm → Gửi |

**Tổng: 92 giây, 9–10 lần chạm, 0 lần cài, 0 lần nhập số điện thoại, 0 lần đọc điều khoản.**
> **Vì sao 92 chứ không phải 90.** Cổng tuổi bắt buộc [A47 · `05` §6 mục 2] tốn **+1 chạm và +2 giây** — con số này được cộng vào thay vì làm tròn xuống. "90 giây" trong tiêu đề §1 là **mục tiêu thiết kế**; 92 là **con số trung thực**, cùng kỷ luật với câu "không đạt ≤15 giây trên máy tầm thấp" ở §3.1. Cổng tuổi **không được** tách thành màn riêng — đó sẽ là màn thứ 8, và slot 8 để trống [A79].

> ### ❌ [PHÁN QUYẾT 03/09/2026 — S19] CHẾ ĐỘ DEMO "SỔ MẪU" BỊ CẮT.
> Bản trước mở màn 1 bằng **một sổ mẫu đang chạy thật** (dữ liệu giả, 3 ảnh, nhãn, dòng số động). Phán quyết S19 xếp nó cùng nhóm với fake door "Bao cả sổ" của `10` §4 và màn preview của `09`: **cả ba đều là cách lấp slot màn 8 dưới một cái tên khác**, và v2 §5 giữ slot đó **để trống** cho đúng một màn được **Bước 0 chứng minh** là bắt buộc [A79].
> **Thay bằng:** một **ảnh PNG tĩnh** của một card mẫu (chính là artefact card 4:5 mà template satori đã sinh ra — dựng một lần, xuất một file, nhúng vào trang). Chi phí **0 pw**, không state, không route, không fixture, không snapshot test thứ hai.
> **Điều kiện mở lại:** chỉ khi Bước 0 (08/09→21/09/2026) chứng minh bằng dữ liệu rằng người mở link lần đầu **không hiểu sản phẩm** nếu không thấy một sổ đang chạy — lý do phải ghi vào `docs/adr/ADR-000-bat-bien.md` [A103] và khoản pw phải vào `docs/adr/pw-ledger.md` [A87].

### 1.2. Bảng số chạm chi tiết (để dựng UI, không phải để marketing)

| Bước | Số chạm | Giây (máy tầm trung, 4G) | Giây (máy tầm thấp ≤3GB RAM) | Rủi ro |
|---|---|---|---|---|
| Mở link → paint xong màn 1 | 0 | 1,2–2,5 | 3,0–5,0 | Bundle JS. Ngân sách: **≤120 KB gzip cho first paint** |
| Đặt tên sổ | 1–2 | 6 | 8 | Bàn phím tiếng Việt bật chậm trên máy yếu |
| Tên hiển thị | 1 | 6 | 8 | — |
| **Cổng tuổi** (tick `Tôi từ 16 tuổi trở lên`) | 1 | 2 | 2 | Bắt buộc [A47]. Không lưu năm sinh ⇒ không có ô nhập, không có date picker (date picker trên Android tầm thấp tốn 4–8 giây) |
| Chọn kèo | 1 | 5 | 5 | — |
| Mở picker ảnh | 1 | 1,5–3 | 3–6 | **Rủi ro nền tảng: `<input type=file>` trong webview Zalo. Là câu 2 trong buổi kiểm chứng nền tảng 04/09/2026 — 7 câu, ma trận ≥3 máy Android thật** [A105] |
| Chọn ảnh | 1 | 4 | 6 | — |
| Nén + strip EXIF client | 0 | 0,8–1,5 | 2–5 | **OOM canvas trên máy 2–3GB với ảnh 12MP. Xem §8.2** |
| Chạm nhãn (= gửi) | 1 | 0,3 | 0,3 | Upload **~110 KB** `[chưa đo — phải đo trên 20 ảnh Android thật, A37]` chạy nền, UI không chờ |
| Render card server-side | 0 | 0,9–1,8 | 0,9–1,8 | satori/@vercel/og; card ~**150 KB** [A41]; phụ thuộc cold start |
| Share sheet | 1 | 8–14 | 10–18 | **Web Share API level 2 (chia sẻ file ảnh) trong webview Zalo — chưa kiểm chứng, là câu 5 của buổi 04/09** [A105]. Phương án B đã viết sẵn: xem bất đồng #6 [D-09] |

### 1.3. Người thứ 2 trở đi (vào sổ có sẵn) — 44 giây

Người này đến từ card trong nhóm Zalo, tức đã thấy sản phẩm trước khi chạm.

| Giây | Màn | Dòng chữ | Chạm |
|---|---|---|---|
| 0–6 | **1 · Sổ hôm nay (chế độ public)** | Ảnh của bạn bè **mờ 12px**, tên hiện rõ, ba con số hiện rõ. Nút duy nhất: **`Vào sổ này`**. **Không có nút `♡`** — nút thả tim đã bị cắt khỏi MVP-0 [A27 · S01], xem §6.2. Trang public ở MVP-0 là **chỉ-đọc, không có hành động nào ngoài `Vào sổ này`** | 1 |
| 6–14 | **3 · Vào sổ** | `Tên bạn hiện trên card là gì?` + ô tick `Tôi từ 16 tuổi trở lên.` [A47] + dòng không-bỏ-qua-được của S9: `Ảnh bạn nộp có thể xuất hiện trên card mà cả sổ gửi vào nhóm chat.` | gõ + **1 chạm** |
| 14–24 | **3 · Chọn kèo** | y hệt §1.1 | 1 |
| 24–42 | **2 · Nộp** | y hệt §1.1 | 3 |
| 42–44 | **1 · Sổ hôm nay** | Ảnh hết mờ. Ô của mình nằm **sau** ảnh người khác (nguyên tắc P5) | 0 |

**Không có bước "xác nhận tham gia", không có bước "đọc nội quy nhóm", không có peer-approval kèo** (v2 §4.8 đã cắt).

### 1.4. Bài toán "app cần ≥2 người mới có nghĩa" — trả lời thẳng

**Trả lời trung thực trước: trong 5 phút đầu, một mình, sản phẩm gần như không có giá trị sử dụng.** Mọi câu trả lời kiểu "bạn có thể tự theo dõi thói quen" là tự lừa mình — có 40 app làm việc đó tốt hơn, miễn phí, và không cần bạn.

Thiết kế vì vậy **không cố tạo giá trị solo**. Nó chuyển mục tiêu của 90 giây đầu (92 giây thật, §1.1) từ *"làm người dùng thấy hay"* sang *"sản xuất ra một vật phẩm gửi đi được"*. Ba thứ người thứ 1 cầm trong tay sau 90 giây, và cả ba đều chỉ có nghĩa khi được gửi đi:

| Vật phẩm | Giá trị solo | Giá trị khi gửi |
|---|---|---|
| 1 tấm ảnh có nhãn của chính mình | ~0 | Người thứ 2 nhận **một bức ảnh của bạn mình**, không phải một lời mời trống (v2 §8, phản biện #5) |
| 1 card 4:5 có tên mình + `Ngày thứ 1` | ~0 | Là nội dung dán vào nhóm, tỉ lệ chạm ước lượng 45% vs 35% của link trần [ước lượng, option-D §9] |
| 1 mã sổ 6 ký tự + link | 0 | Là toàn bộ cơ chế cold start |

**Hệ quả thiết kế cứng:** onboarding **không được** kết thúc ở màn Sổ hôm nay. Nó kết thúc ở share sheet. Nếu người dùng bấm back khỏi share sheet, màn Sổ hôm nay hiện một dải cố định trên đầu:

> `Sổ mới có mình bạn.` **`Gửi card vào nhóm`**

Dải này **không đếm ngược, không đỏ, không rung, không đổi chữ theo thời gian**. Nó biến mất vĩnh viễn khi A ≥ 2.

**Cứu hộ 48 giờ (0 pw, chỉ là một điều kiện render):** nếu sau 48 giờ vẫn A = 1, dải đổi thành:

> `Chưa ai vào sổ. Thường là do card trôi mất trong nhóm.` **`Gửi lại card`** · `Chép mã K7QM2P`

Không có chữ nào nói về việc bạn bè bạn không quan tâm. Nguyên nhân được gán cho **card trôi**, không gán cho **người**.

**Và một điều v2 đã làm sẵn mà onboarding phải nói ra:** `k = 1 khi A_eff ≤ 2`, với **`A_eff = min(A(D), A(D−1))`** [A06–A07]. Nghĩa là **sổ một người vẫn tính ngày, vẫn lên chuỗi.** Dòng chữ ở màn Của tôi: `Sổ vẫn tính ngày kể cả khi chỉ có một người nộp.` Đây là sự thật cơ chế, không phải lời an ủi — và nó là lý do người thứ 1 không mất chuỗi trong 3 ngày chờ bạn vào.

---

## 2. FLOW RỦ BẠN

### 2.1. Ba đường vào, theo thứ tự ưu tiên

| Đường | Cách hoạt động | Sống sót khi Zalo chặn domain? | Ưu tiên |
|---|---|---|---|
| **A · Card ảnh + caption có link** | Ảnh 4:5 gửi vào nhóm, caption kèm `chotso.vn/s/<slug>` | Ảnh sống, link chết | 1 |
| **B · Mã 6 ký tự in trên card** | Người nhận vào `chotso.vn` gõ mã | **Sống hoàn toàn** — mã nằm trong pixel của ảnh, không phải trong text. Mã này là **khoá VÀO sổ**, độc lập hoàn toàn với `share_token` trong slug (QĐ-12b), và chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi** [A45 · A46] | 2 (dự phòng) |
| **C · Link trần** | Chép link, dán | Chết | 3 |

**Slug:** dựng từ **`share_token`** — 10 ký tự ngẫu nhiên base32 (không phải số thứ tự), `noindex, nofollow` trên mọi trang sổ, cộng `robots.txt`, không sitemap. Lý do: URL đoán được = một người lạ duyệt qua ảnh của các nhóm bạn 17 tuổi.
**`share_token` có TTL = 7 NGÀY** [A42 · QĐ-36]. Hết 7 ngày, link công khai ngừng phục vụ; người muốn vào sổ dùng mã 6 ký tự (điều kiện ở A45) hoặc xin card mới. Hai đầu bị bác: **24 giờ** giết phép đo M2 (card lan trong nhóm nhiều ngày sau khi dán), **vĩnh viễn** để lộ lưới ảnh của người 16 tuổi ra ngoài nhóm mãi mãi. Cả `share_token` lẫn TTL của nó do `04` §8.5 định nghĩa; tài liệu này không tự khai.
**Mã 6 ký tự:** [CHỐT 2026-08-28, QĐ-12] bảng chữ **đúng 28 ký tự**, liệt kê tường minh vì ba tài liệu từng ghi ba bảng chữ khác nhau:

```
2 3 4 5 6 7 8 9   A C D E F G H J K M N P Q R T U V W X Y
```
Loại: `0`/`O` · `1`/`I`/`L` · `B` (vs 8) · `S` (vs 5) · `Z` (vs 2). **28⁶ = 481.890.304 ≈ 481 triệu** tổ hợp. Bảng chữ nằm trong `remote_config['book.code_alphabet']`, không hardcode.
⚠️ Regex cũ trong `04` §1.3 (`^[2-9A-HJ-NP-Z]{6}$`) cho ra 32 ký tự và **vẫn chứa chữ `L`** (dải J–N bao gồm L) — đúng ký tự dễ đọc nhầm thành `1`/`I` trên ảnh JPEG đã qua nén của Zalo. Vì UX-2 quyết định **in mã lên card** làm đường thoát hiểm duy nhất khi Zalo chặn domain, một ký tự dễ đọc nhầm là lỗi **giết chính đường thoát hiểm đó**. Regex của `04` đã được sửa.

> ### 🔐 [CHỐT 2026-08-28 — QĐ-12b] SLUG CÔNG KHAI KHÔNG ĐƯỢC CHỨA MÃ SỔ. Đây là một lỗ hổng thật, không phải chi tiết trình bày.
> Ví dụ cũ trong mục 2.2 dưới đây là `chotso.vn/s/w9td4mz2hb` đi kèm mã `K7QM2P` — **slug công khai chứa nguyên mã sổ làm tiền tố**. Card được thiết kế để **lan ra ngoài nhóm**; ai thấy một link công khai đều **đoán ra mã vào sổ kín**, và với mô hình danh tính L3 (device token, không mật khẩu) thì vào được sổ là **mạo danh được**. Đây đúng là lỗ hổng mà `03` §9 B2 đang cố bịt bằng cách tách `view_key` khỏi `code6`.
> **Chốt — cả `03` và UX-2 đều đúng một nửa, và giải pháp lấy cả hai:**
> 1. Đường thoát hiểm phải nằm **trong pixel** của ảnh (UX-2 đúng: ảnh không bị chặn khi domain bị chặn).
> 2. Nhưng thứ in trong pixel **không được là khoá VÀO sổ** (`03` B2 đúng).
> 3. ⇒ **`share_token` (chỉ để XEM trang public) và `book.code` (khoá VÀO sổ) là hai chuỗi độc lập, sinh riêng, không suy ra được từ nhau.** Slug công khai dùng `share_token`.
> 4. Vào sổ bằng mã còn phải thoả điều kiện mặc định của `03` §10 câu 1: **sổ < 8 người [A46] VÀ card ≤ 7 ngày tuổi [A45]**. Hai con số 7 ngày này **trùng giá trị nhưng khác đối tượng**: TTL của `share_token` là 7 ngày [A42], cửa sổ dùng được của `code6` là 7 ngày tuổi của **card**. Không được gộp thành một hằng số.
> 5. **Test CI bắt buộc:** `slug` không được chứa `code6` như substring (và ngược lại).
> Mọi ví dụ URL dưới đây đã được sửa để slug và mã **không liên quan nhau**.

### 2.2. Nội dung tin nhắn mời — viết thật, dùng luôn

Ba biến thể, mỗi cái gắn với một tình huống. **Cả ba đều chứa đủ ba chữ bắt buộc** (`chốt sổ` · `một tấm` · `không cài app`) và **không chứa chữ nào trong bảy chữ bị cấm**.

**(M1) Người thứ 1 mở sổ mới — caption đi kèm card, có sẵn trong clipboard:**

```
Tao mở sổ. Tối nào cũng chốt sổ, mỗi đứa một tấm, không ai cài app.
Bấm vô: chotso.vn/s/w9td4mz2hb
Hoặc vô chotso.vn gõ mã K7QM2P
```

**(M2) Card chốt sổ hằng ngày — caption soạn sẵn, đổi theo bank câu (§5.5):**

```
Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.
chotso.vn/s/w9td4mz2hb · mã K7QM2P
```

**(M3) Người trong sổ rủ thêm bạn — nút `Chép lời mời`:**

> ⚠️ **[CHỐT 2026-08-28, QĐ-34] Nút `Chép lời mời` chỉ tồn tại ở MÀN 4 (dưới card), KHÔNG ở màn 6.** v2 §5 liệt kê màn 6 (Của tôi) gồm đúng 5 thứ: kèo · tỉ lệ riêng tư · đổi kèo · rời sổ · xoá dữ liệu — không có nút mời. `02` US-15 cũng không có. Và **MVP-0 cắt màn 6 xuống 0,00 pw** (`07`), nên một nút ở đó là một hạng mục chưa qua bảng đối trừ nào. Ở màn 4 nó **miễn phí** (cùng chuỗi caption đã có trong clipboard) và nằm đúng chỗ người ta vừa tạo ra thứ để chia sẻ. Đây là **cơ chế mời thứ ba** xuất hiện trong hồ sơ — hai cái kia là link trong card và mã 6 ký tự — và nó không được sinh thêm cái thứ tư mà không qua sổ cái pw.

```
Nhóm tao đang chốt sổ được 34 ngày rồi. Mày vô cho vui, một tấm mỗi tối thôi, không cài app.
chotso.vn/s/w9td4mz2hb · mã K7QM2P
```

**Ba thứ bị cấm trong mọi tin nhắn mời:**

| Cấm | Lý do |
|---|---|
| `Bấm vô nộp đi` | Là mệnh lệnh nhắm vào người **chưa** nộp — phiên bản mềm của chữ cấm `đứa nào chưa` (v2 §1). Xem bất đồng #2 |
| Tên bất kỳ ai đang VẮNG | Nguyên tắc P2 |
| Nội dung kèo của bất kỳ ai | Nguyên tắc P3, có test CI |

### 2.3. Người được mời thấy gì TRƯỚC khi chạm

Đây là bề mặt quyết định 45% tỉ lệ chạm, và nó gồm đúng ba lớp:

| Lớp | Nội dung | Kiểm soát bằng |
|---|---|---|
| **Ảnh card trong khung chat Zalo** | 4:5, ảnh thật của bạn mình, ba con số, tên người chốt sổ, mã | Template satori, snapshot test |
| **Caption text** | §2.2 | Bank câu + test CI |
| **Link preview (OG)** | `og:image` = **chính card đó** · `og:title` = tên sổ · `og:description` = `Ngày thứ 34 · 71 tấm` | **Chưa kiểm chứng Zalo có render OG cho domain lạ không — là câu 3 trong **7 câu** của buổi kiểm chứng nền tảng **04/09/2026**, ma trận ≥3 máy Android thật [A105]** |

**Trang public (người chưa vào sổ mở link) hiện gì:**

| Hiện | Không hiện |
|---|---|
| Tên sổ, ba con số | Kèo của bất kỳ ai |
| Ảnh của người đã nộp, **mờ 12px** | Ảnh rõ |
| Tên người đã nộp | Tên người VẮNG |
| Nút `Vào sổ này` — **hành động DUY NHẤT** trên trang public ở MVP-0 | Bất kỳ mẫu số nào ("3/5") · **nút `♡`** (đã cắt sang T13+ [A27 · C03 · S01], xem §6.2) |

**Mờ 12px chứ không phải mờ hoàn toàn** vì mục tiêu là đủ để hiểu "đây là ảnh đời thường của bạn tao", không đủ để nhận diện nội dung. Người lạ nhặt được link vẫn không xem được ảnh.

### 2.4. Phương án dự phòng khi Zalo chặn link — kịch bản đã viết sẵn

Rủi ro §9 mục 7 của v2 là rủi ro **chết nhanh**: một sáng thức dậy, mọi link `chotso.vn` dán vào Zalo hiện màn "Link này có thể không an toàn". Kế hoạch, theo thứ tự, không cần code mới:

| Bậc | Hành động | Thời gian triển khai | Mất gì |
|---|---|---|---|
| 0 | **Đã có sẵn từ ngày 1:** mã 6 ký tự in trên card | 0 | ~10–20 giây/người vào sổ [ước lượng] |
| 1 | Đổi caption mặc định sang bản **không có link**, chỉ có mã: `Sổ tối nay đây. Vô chotso.vn gõ mã K7QM2P.` | 1 dòng remote config (v2 P6 đã bắt mọi hằng số nằm trong DB) | Tỉ lệ chạm giảm — **cần kiểm chứng, không có số** |
| 2 | **Mua domain thứ hai NGAY TRONG TUẦN** rồi trỏ cùng app — **không mua trước** [A68 · QĐ-37]. Điều kiện kích hoạt bậc này: buổi **04/09/2026** cho thấy Zalo **cảnh báo** domain `.vn` lạ, hoặc sự cố chặn đã xảy ra thật | ~2 giờ mua + trỏ DNS (nhà đăng ký `.vn` cấp trong ngày) | Uy tín thương hiệu · ~750.000đ/năm [A67, `[cần báo giá thật 03/09]`] |
| 3 | Liên hệ Zalo xin whitelist | ngày–tuần | — |

> ### ✂️ [PHÁN QUYẾT 03/09/2026 — A68 · C45 · QĐ-37] DOMAIN THỨ HAI **BỊ CẮT** KHỎI MVP-0.
> Bản trước của mục này viết: *"mua **hai** domain, không phải một"*. Phán quyết: **MỘT domain (`chotso.vn`) ở MVP-0**, giá **≈750.000đ/năm** [A67] `[cần báo giá thật 03/09/2026]`. Lý do bác: đường thoát hiểm thật khi Zalo chặn domain **không phải** domain thứ hai (nó cũng là một domain `.vn` lạ, chịu đúng cơ chế chặn) mà là **mã 6 ký tự in trong pixel của card** — UX-2, chi phí **0đ**, đã có sẵn từ ngày 1 (bậc 0 của bảng trên).
> **Điều kiện mở lại — mua ngay trong tuần, không cần hỏi lại:** buổi kiểm chứng nền tảng **04/09/2026** cho thấy Zalo **cảnh báo** domain `.vn` lạ. Khi đó bậc 2 chuyển từ "dự phòng chưa mua" sang "việc phải làm tuần này", và khoản 750.000đ ghi thẳng vào bảng chi phí của `07` §7.
> Xem bất đồng #5 ở cuối tài liệu — điểm bất đồng đó **đã được rút lại** theo phán quyết.

---

## 3. FLOW NỘP PROOF — MỤC TIÊU ≤15 GIÂY

### 3.1. Đường đi tối ưu, đếm chạm

```
[Card trong Zalo]
   │ chạm 1 ─────────────────► webview mở màn 1 (Sổ hôm nay)
   │                            ảnh mọi người ở trên, ô mình ở dưới
   │ chạm 2 ─────────────────► nút "Nộp" (dính đáy màn, vùng ngón cái)
   │ chạm 3 ─────────────────► "Chọn ảnh" → picker hệ điều hành
   │ chạm 4 ─────────────────► chọn ảnh (picker tự đóng)
   │ chạm 5 ─────────────────► "XONG ✓" hoặc "TOANG 💀"  ◄── ĐÂY LÀ NÚT GỬI
   ▼
[Về màn 1, ảnh đã ở đó, thanh "Đã nộp · Hoàn tác" 10 giây]
```

**5 chạm.** Ngân sách thời gian:

| Đoạn | Máy tầm trung | Máy tầm thấp |
|---|---|---|
| Webview mở + paint | 1,2 | 3,0 |
| Nhìn ảnh mọi người (bước thưởng, **không rút ngắn**) | 4,0 | 4,0 |
| Mở picker | 1,5 | 4,0 |
| Chọn ảnh | 4,0 | 5,5 |
| Nén + strip EXIF + hiện preview | 1,0 | 3,0 |
| Chạm nhãn → optimistic UI về màn 1 | 0,3 | 0,3 |
| **Tổng thấy được** | **12,0 s** | **19,8 s** |

**Đạt mục tiêu ≤15 giây trên máy tầm trung. Không đạt trên máy tầm thấp** — và phải nói thẳng như vậy thay vì làm tròn. Ba đòn bẩy còn lại, theo thứ tự hiệu quả trên máy yếu:

1. **Upload chạy nền, UI không bao giờ chờ mạng.** Chạm nhãn → về màn 1 ngay với ảnh local. Nếu upload lỗi: thanh xám `Đang gửi lại…`, tự thử 3 lần (2s/8s/30s). **Không bao giờ hiện chữ "Lỗi" trong ngày đầu tiên của một người.**
2. **Nén bằng `createImageBitmap(blob, {resizeWidth:1080, resizeQuality:'medium'})`** thay vì `<img>` + canvas full-res — tránh giải nén 12MP (≈48 MB RGBA) trên máy 2–3GB. Xem §8.2.
3. **Bỏ bước xem trước ảnh cỡ lớn.** Preview 160px là đủ; ảnh to chỉ tốn thời gian decode.

### 3.2. Bốn tình huống xấu — xử lý cụ thể

| Tình huống | Xảy ra bao nhiêu | Thiết kế | Chữ chính xác |
|---|---|---|---|
| **Quên nộp** | ~47% số ngày-người ở `q_c` = **0,53** `[suy luận, chưa đo — giả thuyết H2, A17]` | **Không có push, không có nhắc, không có gì.** Kênh nhắc duy nhất là card do người thật dán vào Zalo (giả thuyết H1) | — (im lặng là thiết kế) |
| **Nộp muộn** | Ranh giới 04:00 ⇒ nộp 1h–3h59 sáng vẫn tính cho hôm trước | Không có nhãn "muộn", không có màu khác, không có dòng chữ nào. Người nộp lúc 2h sáng và người nộp lúc 21h **trông giống hệt nhau trên card** | — |
| **Nộp bù ngày hôm kia** | — | **Không cho.** 1 tấm/người/ngày, không backfill | Nếu người dùng cuộn tới ô trống ngày cũ: `Ngày này đã đóng sổ.` (trung tính, không trách) |
| **Không có gì để chụp** | Rất phổ biến với kèo dạng "không làm X" | Nhãn mang toàn bộ ý nghĩa, ảnh chỉ là bằng chứng có mặt. Chú thích cố định dưới nút Chọn ảnh | **`Ảnh gì cũng được. Cái nhãn mới là chuyện.`** |
| **Ngày xấu (không muốn ai thấy)** | — | Ba đường, không đường nào bị nêu tên: (a) chọn **TOANG** với ảnh bất kỳ; (b) **không làm gì** — VẮNG render 0 pixel; (c) nộp rồi **tự xoá ảnh của mình** ở màn 5 | Ở màn Của tôi: `Không nộp thì sổ không hiện gì cả. Không tên, không ô trống, không con số nào nhắc tới bạn.` |
| **Chạm nhầm nhãn** | [ước lượng 2–4% lượt nộp] | Thanh **Hoàn tác 10 giây** ở đáy màn 1 | `Đã nộp · Hoàn tác` |
| **Nộp lại ảnh khác** | — | Ghi đè, không cộng thêm (v2 §4.2). Nút `Đổi ảnh` trong màn 5, chỉ với ảnh của chính mình | `Đổi ảnh hôm nay` |

### 3.3. Một quyết định cần nói rõ: nút "Nộp" ở đâu trên màn 1

Nguyên tắc P5 của v2 bắt **pixel đầu tiên dưới header phải là ảnh người khác**, không phải nút Nộp. Nhưng nếu nút Nộp nằm cuối trang thì flow trên hỏng.

Giải: nút Nộp là **thanh dính đáy màn (sticky bottom bar)**, không nằm trong luồng nội dung. Nó không chiếm pixel đầu tiên dưới header, nhưng luôn nằm trong vùng ngón cái. Snapshot test của P5 kiểm tra **thứ tự trong DOM và vị trí `y` của phần tử đầu tiên trong luồng cuộn**, không kiểm tra phần tử `position: fixed`. Ghi rõ điều này vào test, nếu không test sẽ chặn đúng cái thiết kế đúng.

---

## 4. WIREFRAME — 7 MÀN + 1 SLOT DỰ PHÒNG ĐỂ TRỐNG

Khung `44 ký tự` ≈ tỉ lệ màn điện thoại dọc. `[ ]` = nút, `▓` = ảnh, `░` = ảnh mờ.

### Màn 1 — Sổ hôm nay (thành viên)

```
┌──────────────────────────────────────────┐
│  Sổ nhà 4 đứa                        [⚙] │
│  Ngày thứ 34 · 71 tấm · chuỗi 6          │
├──────────────────────────────────────────┤
│  HÔM NAY                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐        │
│  │▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓│        │
│  │▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓│        │
│  │ Linh ✓ │ │ Minh 💀│ │ An   ✓ │        │
│  └────────┘ └────────┘ └────────┘        │
│                                          │
│  ┌────────┐                              │
│  │   +    │  ← ô của MÌNH, nằm SAU       │
│  │ Của tao│                              │
│  └────────┘                              │
├──────────────────────────────────────────┤
│  30 NGÀY QUA          (cuộn xuống)       │
│  ▓▓▓▓▓ ▓▓▓░▓ ▓▓▓▓▓ ░▓▓▓▓ ▓▓             │
│  ▓░▓▓▓ ▓▓▓▓▓ ▓▓░▓▓ ▓▓▓▓▓ ▓▓             │
│                                          │
│  Sổ này còn 2 ngày nghỉ trong tuần.      │
├──────────────────────────────────────────┤
│ [   Nộp   ]            [ Chốt sổ ]       │  ← dính đáy
└──────────────────────────────────────────┘
```

Ghi chú dựng UI: hàng HÔM NAY **chỉ render người đã nộp**. Không placeholder, không ô xám có tên, không mẫu số. Nếu 0 người nộp: một dòng `Chưa có tấm nào hôm nay.` — không có tên ai.

### Màn 1b — Sổ hôm nay (người CHƯA vào sổ, mở từ link)

```
┌──────────────────────────────────────────┐
│  Sổ nhà 4 đứa                            │
│  Ngày thứ 34 · 71 tấm · chuỗi 6          │
├──────────────────────────────────────────┤
│  HÔM NAY                                 │
│  ┌────────┐ ┌────────┐ ┌────────┐        │
│  │░░░░░░░░│ │░░░░░░░░│ │░░░░░░░░│        │
│  │ Linh ✓ │ │ Minh 💀│ │ An   ✓ │        │
│  └────────┘ └────────┘ └────────┘        │
│  (không có nút nào ở đây — trang public  │
│   ở MVP-0 là CHỈ-ĐỌC. Nút ♡ đã cắt       │
│   sang T13+, xem §6.2)                   │
├──────────────────────────────────────────┤
│  Tối nào nhóm cũng chốt sổ:              │
│  mỗi đứa một tấm, không ai cài app.      │
├──────────────────────────────────────────┤
│ [        Vào sổ này        ]             │
└──────────────────────────────────────────┘
```

### Màn 2 — Nộp

```
┌──────────────────────────────────────────┐
│ [←]        Một tấm cho hôm nay           │
├──────────────────────────────────────────┤
│                                          │
│        ┌──────────────────────┐          │
│        │                      │          │
│        │      Chọn ảnh        │          │  ← 60% chiều cao
│        │                      │          │
│        └──────────────────────┘          │
│                 Chụp                     │  ← nút phụ, chữ nhỏ
│                                          │
│   Ảnh gì cũng được.                      │
│   Cái nhãn mới là chuyện.                │
└──────────────────────────────────────────┘

   ── sau khi chọn ảnh ──

┌──────────────────────────────────────────┐
│ [←]                          [ Đổi ảnh ] │
├──────────────────────────────────────────┤
│        ┌──────────────────────┐          │
│        │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│          │
│        │▓▓▓▓  preview 160px   │          │
│        └──────────────────────┘          │
├──────────────────────────────────────────┤
│  ┌──────────────────┐ ┌────────────────┐ │
│  │     XONG  ✓      │ │   TOANG  💀    │ │  ← 56dp cao
│  └──────────────────┘ └────────────────┘ │
│  Chạm là gửi luôn. Có 10 giây để hoàn tác│
└──────────────────────────────────────────┘
```

### Màn 3 — Mở sổ / Vào sổ (3 bước trong 1 màn, cuộn ngang)

```
┌──────────────────────────────────────────┐
│  ● ○ ○        Mở sổ                      │
├──────────────────────────────────────────┤
│  Sổ này tên gì?                          │
│  ┌──────────────────────────────────────┐│
│  │ Ví dụ: Sổ nhà 4 đứa                  ││
│  └──────────────────────────────────────┘│
│  [Sổ lớp mình] [Sổ phòng trọ]            │
│  [Sổ 5 đứa]    [Sổ cày đêm]              │
│                                          │
│              [    Tiếp    ]              │
├──────────────────────────────────────────┤
│  Đã có sổ rồi?  ┌────────┐ [ Vào ]       │
│                 │ MÃ 6 KT│                │
│                 └────────┘                │
└──────────────────────────────────────────┘

   ── bước 3: chọn kèo ──

┌──────────────────────────────────────────┐
│  ○ ○ ●     Kèo của bạn tháng này         │
├──────────────────────────────────────────┤
│  [ Ngủ trước 12h  ] [ Đi bộ 20 phút ]    │
│  [ Học 15 phút    ] [ Đọc 5 trang   ]    │
│  [ Không trà sữa  ] [ Tập 15 phút   ]    │
│  [ Không bỏ bữa   ] [ Không mất tích]    │
│  ┌──────────────────────────────────────┐│
│  │ Tự viết (≤30 ký tự)                  ││
│  └──────────────────────────────────────┘│
│                                          │
│  Chỉ người trong sổ thấy kèo của bạn.    │
│  Kèo không bao giờ lên card.             │
└──────────────────────────────────────────┘
```

### Màn 4 — Card chốt sổ

```
┌──────────────────────────────────────────┐
│ [←]         Card tối nay                 │
├──────────────────────────────────────────┤
│  ╔════════════════════════════════════╗  │
│  ║  SỔ NHÀ 4 ĐỨA                      ║  │
│  ║  Ngày thứ 34 · 71 tấm · chuỗi 6    ║  │
│  ║                                    ║  │
│  ║  ┌─────┐ ┌─────┐ ┌─────┐           ║  │
│  ║  │▓▓▓▓▓│ │▓▓▓▓▓│ │▓▓▓▓▓│           ║  │
│  ║  │Linh✓│ │Minh💀│ │An  ✓│          ║  │
│  ║  └─────┘ └─────┘ └─────┘           ║  │
│  ║                                    ║  │
│  ║  Minh chốt sổ · mai tới lượt Linh  ║  │
│  ║                          K7QM2P    ║  │ ← mã, mono
│  ╚════════════════════════════════════╝  │
│  ⓘ Lưới ảnh THÍCH ỨNG theo số người đã   │
│    nộp (QĐ-30): 1 · 1×2 · 2×2 · 2×3 ·    │
│    2×4. Trần sổ là 8 người, nên PHẢI có  │
│    nhánh 2×4 — lưới 6 ô cố định sẽ im    │
│    lặng loại 2 người ĐÃ nộp khỏi card,   │
│    vi phạm P2. Snapshot test bắt buộc có │
│    một fixture 8 người.                  │
│                                          │
│ [    Chia sẻ vào Zalo    ]               │
│ [ Lưu ảnh ]      [ Chép lời mời ]        │
└──────────────────────────────────────────┘
```

### Màn 5 — Ảnh chi tiết

```
┌──────────────────────────────────────────┐
│ [←]                                  [⋮] │
├──────────────────────────────────────────┤
│                                          │
│    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          │
│    ▓▓▓▓▓▓▓  ảnh full 4:5  ▓▓▓▓▓          │
│    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓          │
│                                          │
│    Linh · 12/09 · ✓                      │
└──────────────────────────────────────────┘
      menu [⋮]:
      ├ Báo cáo ảnh này
      ├ Chặn người này
      └ Xoá ảnh của tôi   (chỉ hiện với ảnh của mình)
```

### Màn 6 — Của tôi

```
┌──────────────────────────────────────────┐
│ [←]            Của tôi                   │
├──────────────────────────────────────────┤
│  Tên hiển thị      Linh          [Sửa]   │
│  Kèo hiện tại      Ngủ trước 12h [Đổi]   │
│                    (đổi được sau 18 ngày)│
├──────────────────────────────────────────┤
│  Bạn đã có mặt 23/30 ngày.               │
│  Chỉ mình bạn thấy dòng này.             │
├──────────────────────────────────────────┤
│  NHÓM THẤY GÌ VỀ BẠN                     │
│  ✓ ảnh bạn nộp, nhãn, tên hiển thị       │
│  ✓ kèo của bạn (chỉ người trong sổ)      │
│  ✗ giờ bạn nộp                           │
│  ✗ những ngày bạn không nộp              │
│  ✗ vị trí, thiết bị, số điện thoại       │
├──────────────────────────────────────────┤
│  Không nộp thì sổ không hiện gì cả.      │
│  Không tên, không ô trống, không con số  │
│  nào nhắc tới bạn.                       │
├──────────────────────────────────────────┤
│  (KHÔNG có nút mời ở màn này — QĐ-34)    │
│  [ Rời sổ ]                              │
│  [ Rời sổ và xoá ảnh của tôi ]           │
│  [ Chính sách & an toàn ]                │
└──────────────────────────────────────────┘
```

### Màn 7 — Chính sách & an toàn

```
┌──────────────────────────────────────────┐
│ [←]      Chính sách & an toàn            │
├──────────────────────────────────────────┤
│  Ảnh gốc tự xoá sau 72 giờ. Sau đó sổ    │
│  chỉ giữ bản nhỏ 320px.                  │
│                                          │
│  Chốt Sổ không dùng nhận diện khuôn mặt, │
│  không đọc vị trí, không lưu EXIF.       │
│                                          │
│  Dịch vụ dành cho người từ 16 tuổi.      │
│                                          │
│  Báo cáo nội dung: chúng tôi trả lời     │
│  trong vòng 48 giờ. Yêu cầu của cơ quan  │
│  nhà nước: 24 giờ (khẩn cấp 6 giờ).      │
│  Email: an-toan@chotso.vn                │
│                                          │
│  Nếu bạn hoặc bạn của bạn đang gặp khó   │
│  khăn về tâm lý:                         │
│  · Tổng đài Quốc gia Bảo vệ Trẻ em 111   │
│  · Đường dây Ngày Mai 1900 599 088       │
│                                          │
│  [ Điều khoản ] [ Quyền riêng tư ]       │
│  [ Xoá toàn bộ dữ liệu của tôi ]         │
└──────────────────────────────────────────┘
```

### Màn 8 — để trống có chủ đích

Không vẽ. v2 §5 giữ slot này cho **đúng một** màn được chứng minh bắt buộc trong Bước 0. Nếu Bước 0 không phát hiện, không lấp. (Ứng viên duy nhất tôi thấy — "Nhóm thấy gì về bạn" — đã được nhét thành một block trong màn 6 với chi phí 0.)

---

## 5. TONE OF VOICE

### 5.1. Định nghĩa lại vấn đề trước khi viết câu nào

Phản biện `c-social-harm §1` nói đúng: **"cà khịa nhưng không toxic" không phải nguyên tắc, nó là một câu chưa được định nghĩa.** Keltner et al. (2001) cho biết tease chỉ giữ tính thân thiện khi có **markers báo hiệu chơi đùa** và **đối xứng quyền lực** — app xoá sạch cả hai [FACT, `c-social-harm §1`].

Nhưng v2 đã giải bài này bằng cấu trúc, không bằng chữ: **app không cà khịa ai cả.** Cà khịa xảy ra trong Zalo, giữa người thật, có giọng nói, có sticker, có quyền phản đòn cân xứng — tức là **đủ ba marker mà app không thể tái tạo**. Đây là lý do sâu nhất để v2 §6 mục 4 cắt reaction/comment/chat, sâu hơn cả lý do tiết kiệm 1,5 pw.

**Hệ quả:** tone of voice của Chốt Sổ **không phải giọng cà khịa**. Nó là giọng của **người ghi sổ**: ngắn, khô, ghi lại sự việc, không bình luận. Cà khịa là việc của nhóm; app chỉ được phép **đặt lên bàn một sự việc buồn cười** (tấm ảnh TOANG) rồi im.

> **Một câu định nghĩa giọng:** _App là đứa ghi sổ, không phải đứa cà khịa. Nó nói ai đã làm gì, rồi im._

### 5.2. Bốn luật cứng, kiểm tra được bằng máy

| Luật | Phát biểu | Test |
|---|---|---|
| **T1** | Mọi câu chỉ tham chiếu **trạng thái** (`xong` `toang` `vắng` `streak` `số ngày` `số tấm`), không bao giờ tham chiếu `goal_text` | CI quét bank câu tìm `{goal}`, `{goal_text}` (v2 P3) |
| **T2** | Không câu nào chứa **tên người** trong ngữ cảnh phủ định. Tên chỉ đi cùng động từ đã-làm: `nộp`, `chốt sổ`, hoặc nhãn do chính người đó chọn | CI quét: tên biến `{name}` không được xuất hiện trong cùng câu với `chưa`, `thiếu`, `không`, `mất`, `quên`, `vắng` |
| **T3** | Không câu nào chứa **mẫu số** (`x/y`) ở cấp con người | CI quét regex `\{\w+\}/\{\w+\}` trong bank câu |
| **T4** | Không câu nào chứa cấu trúc **bản sắc**: `là`, `nhất`, `luôn`, `lại`, `kiểu người`, `đứa` + tính từ | CI quét danh sách cấm; `đứa` được phép khi chỉ số lượng (`mỗi đứa một tấm`) |

Bốn luật này chạy trong cùng job CI với test template bank ở v2 §4.10 mục 10 — **0 pw thêm**.

### 5.3. 20 mẫu câu ĐÚNG

Đây là toàn bộ giọng của sản phẩm. Mỗi câu ghi rõ nó sống ở đâu và tại sao an toàn.

| # | Câu | Chỗ dùng | Vì sao an toàn |
|---|---|---|---|
| 1 | `Tối nào nhóm cũng chốt sổ: mỗi đứa một tấm, không ai cài app.` | trang public, landing | Câu duy nhất của v2 §1. Chủ ngữ là **nhóm**, không phải một người |
| 2 | `Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.` | caption card | Mô tả sự việc, không ra lệnh cho ai. Đủ 3 chữ bắt buộc |
| 3 | `Linh vừa nộp.` | màn 1, card | Tên đi với hành động **đã xảy ra**. Không có phản đề ngầm |
| 4 | `Linh 💀` (nhãn dưới ảnh, **không phải câu chữ**) | card, màn 1 | Nhãn do **chính Linh chọn**. App chỉ hiển thị lại lựa chọn của chủ thể — đây là ranh giới giữa tự trào và bị gán nhãn |
| 5 | `Hôm nay đủ mâm.` | card ngày `q_c^A` | Cấp **sổ**, khẳng định, không mẫu số, không ai bị thiếu |
| 6 | `Sổ này 100 tấm rồi.` | card mốc | Con số chỉ tăng (P4). Không quy công cho ai |
| 7 | `Ngày thứ 34 · 71 tấm · chuỗi 6` | mọi nơi | Ba dữ kiện, không tính từ, không cảm xúc |
| 8 | `Chuỗi bắt đầu lại từ hôm nay.` | card sau khi đứt chuỗi | **Không nêu nguyên nhân.** Câu hướng về tương lai, không hướng về lỗi |
| 9 | `Hôm nay sổ nghỉ.` | card ngày không tính | Chủ ngữ là **sổ**. Không ai nghỉ, sổ nghỉ |
| 10 | `Minh chốt sổ · mai tới lượt Linh.` | chân card | Phân vai, công khai, **tích cực**. Chuyện vặt biến thành một vai có danh (v2 §4.7) |
| 11 | `Ảnh gì cũng được. Cái nhãn mới là chuyện.` | màn 2 | Hạ chuẩn bằng chứng xuống mức không ai trượt được. Chống rủi ro "ảnh proof lặp lại" |
| 12 | `Chạm là gửi luôn. Có 10 giây để hoàn tác.` | màn 2 | Nói trước hậu quả của thao tác. Tôn trọng, không hù |
| 13 | `Không nộp thì sổ không hiện gì cả. Không tên, không ô trống, không con số nào nhắc tới bạn.` | màn 6 | **Câu quan trọng nhất trong sản phẩm.** Người dùng không tự đoán được cơ chế này; nói ra là cách duy nhất để nó có tác dụng an ủi |
| 14 | `Sổ vẫn tính ngày kể cả khi chỉ có một người nộp.` | màn 6, sổ mới | Sự thật cơ chế: **`k = 1` khi `A_eff ≤ 2`**, với **`A_eff = min(A(D), A(D−1))`** [A06–A07]. Gỡ nỗi sợ "tao làm hỏng của cả nhóm" |
| 15 | `Sổ này còn 2 ngày nghỉ trong tuần.` | màn 1 | Tài nguyên **của sổ**, không của người. Không ai "dùng hết phần của người khác" |
| 16 | `Bạn đã có mặt 23/30 ngày.` | màn 6, **chỉ mình thấy** | Tỉ lệ riêng tư, không so sánh, không chuỗi. Mẫu số là ngày, không phải người |
| 17 | `Chưa có tấm nào hôm nay. Bấm Nộp là có tấm đầu tiên.` | màn 1, trạng thái rỗng | Không tên ai. Mời, không thúc |
| 18 | `Sổ mới có mình bạn. Gửi card vào nhóm.` | màn 1, A=1 | Mô tả trạng thái + một việc làm được ngay. Không nói gì về bạn bè người dùng |
| 19 | `Chưa ai vào sổ. Thường là do card trôi mất trong nhóm.` | màn 1, A=1 sau 48h | **Gán nguyên nhân cho card, không cho người.** Kỹ thuật attribution rẻ nhất và hiệu quả nhất trong tài liệu này |
| 20 | `Ngày này đã đóng sổ.` | ô ngày cũ | Trung tính tuyệt đối. Không `bạn đã bỏ lỡ`, không `tiếc quá` |

### 5.4. 15 mẫu câu SAI

Không câu nào dưới đây được phép tồn tại trong bank, kể cả sau A/B test, kể cả khi người dùng xin.

| # | Câu SAI | Vi phạm | Hại cụ thể |
|---|---|---|---|
| 1 | `Nam chưa nộp.` | T2, P2 | Ô trống **có tên người**. Đây là dòng chữ mà toàn bộ hàng rào chống phản biện #18 tồn tại để chặn |
| 2 | `Còn thiếu 2 người nữa là đủ mâm.` | T3 | Không nêu tên nhưng tạo **một khoảng trống đếm được**, và trong nhóm 5 người ai cũng biết đó là ai trong 3 giây. Nêu tên gián tiếp còn tệ hơn nêu thẳng vì nó chối được |
| 3 | `Tuần này ai là Báo Thủ?` | T4 | Nhãn **bản sắc** (`là`). r03 xếp đây là điểm rủi ro shame cao nhất toàn product. Shame → rút lui → bỏ app |
| 4 | `Nam lại dùng kỹ năng mất tích có điều kiện.` | T4 | Chữ `lại` biến một ngày thành một **thuộc tính lặp**. Đây là câu DOC 1 tự hào nhất và là câu nguy hiểm thứ hai |
| 5 | `Chuỗi đứt vì hôm qua thiếu người.` | v2 §4.6 | Quy nhân quả cho thành viên. Đây chính là hình dạng của "boss hồi máu vì mày" sau khi bỏ boss |
| 6 | `Nộp phút 89 à?` | T2 + Keltner | Là tease thật, và app **không có markers báo hiệu chơi đùa** — không giọng, không mặt, không quyền phản đòn. Câu này trong Zalo thì vui; app nói thì là đánh giá |
| 7 | `Đừng để cả sổ chờ mày.` | P1 | Group contingency ở dạng thuần khiết nhất. Maggin et al. 2017 liệt kê thẳng scapegoating là rủi ro đã biết |
| 8 | `Minh 28/30 · Nam 11/30` | T3, v2 §6 mục 6 | Xếp hạng người với người. Không có điều kiện mở lại, vĩnh viễn |
| 9 | `Bạn đang có mặt ít hơn 3 người trong sổ.` | T3 | Xếp hạng ngụy trang thành thông tin riêng tư. Vẫn là so sánh người-với-người |
| 10 | `Cai trà sữa mà vẫn cầm ly à?` | T1, P3 | Tham chiếu `goal_text`. Vừa vi phạm test CI vừa là đường ngắn nhất mất miễn trừ Điều 38.2 Luật 91/2025 (app phải *đọc hiểu* kèo để nói được câu này) |
| 11 | `Hôm nay bạn thất bại.` | T4 | Đánh giá **con người**, không đánh giá hành vi. Đúng định nghĩa shame trong MDPI 2025 |
| 12 | `Nam đã rời sổ.` | v2 §4.6 | Phát tán một sự kiện tiêu cực có tên. Rời sổ phải **im lặng tuyệt đối** — xem §6.5 |
| 13 | `Nhóm bạn đang nguội dần 😢` | — | Tự ứng nghiệm. Một nhóm 2/5 người là **trạng thái phổ biến nhất** (§7), không phải trạng thái bệnh. Gọi nó là bệnh thì nó chết |
| 14 | `Chỉ 1 người nộp hôm nay.` | T3 | Chữ `chỉ` biến một sự việc thành một thiếu hụt. Đúng cùng dữ kiện, viết `Linh vừa nộp.` là an toàn |
| 15 | `Thả tim cho Linh đi để Nam thấy mà nộp.` | P9 | Biến một thành viên thành **công cụ gây áp lực** lên thành viên khác. Không có nút tiêu cực nào, kể cả nút tiêu cực gián tiếp |

### 5.5. Thay thế cho các nhãn nguy hiểm trong DOC 1

**Bốn điều kiện để một nhãn được phép tồn tại** (nếu thiếu một, cắt):

1. **Do chính chủ thể chọn** — không phải hệ thống gán.
2. **Gắn với một NGÀY**, không gắn với một con người.
3. **Hết hạn trong 24 giờ** — không tích luỹ thành hồ sơ.
4. **Không có phiên bản so sánh giữa người** — không tồn tại "ai nhiều 💀 nhất".

| Nhãn DOC 1 | Vì sao nguy hiểm | Thay bằng | Thoả 4 điều kiện? |
|---|---|---|---|
| **Báo Thủ** | Bản sắc, hệ thống gán, tích luỹ, so sánh được | **TOANG 💀** | ✅ tự chọn · ✅ gắn ngày · ✅ hết hạn · ✅ không xếp hạng |
| **Người Mất Tích** | Bản sắc + nêu tên người vắng | **Không có gì cả** (VẮNG render 0 pixel) | ✅ (nhãn không tồn tại) |
| **Nộp Phút 89** | Bản sắc dựa trên timestamp | **Không có gì cả** (giờ nộp không hiển thị, ranh giới 04:00 xoá khái niệm "muộn") | ✅ |
| **Người Cứu Team** | Nhãn tích cực nhưng vẫn là xếp hạng — có "cứu tinh" thì có "người cần cứu" | **`Minh chốt sổ · mai tới lượt Linh`** — một **vai xoay vòng**, không phải một danh hiệu | ✅ luân phiên · ✅ gắn ngày · ✅ hết hạn |
| **vote "sus"** | Nút tiêu cực nhắm vào người | **Không có gì cả** (P9) | ✅ |
| **Streak cá nhân công khai** | Biến ngày hụt thành mất mát có tên | **Chuỗi của SỔ** (công khai) + **`bạn đã có mặt 23/30 ngày`** (riêng tư) | ✅ |

**Điểm cần nói thẳng:** TOANG hoạt động **chỉ vì** người dùng tự chạm vào nó. Nếu bao giờ có ý tưởng "tự động gán TOANG cho người quên nộp", nó lập tức trở thành Báo Thủ với một cái tên khác. Ghi dòng này vào ADR.

### 5.6. Cần bao nhiêu câu để 30 ngày không lặp

Chỉ có **một** bề mặt cần bank câu: **caption của card** — chuỗi chữ duy nhất do app sinh ra và đi vào nhóm Zalo. Mọi màn hình khác dùng chữ tĩnh (bảng §5.3), không cần biến thể.

Tần suất từng trạng thái trong 30 ngày, **A = 5**, `q_c` = **0,53** `[suy luận, chưa đo — giả thuyết H2, A17]` (số học từ v2 §4.5):

| Trạng thái card | Xác suất/ngày | Lần/30 ngày | Số câu cần | Lý do |
|---|---|---|---|---|
| Ngày thường (tính, không đủ mâm, không mốc) | ~74% | **22,2** | **26** | Cần > số lần xuất hiện để rút ngẫu nhiên không lặp; +18% đệm |
| Đủ mâm (`q_c^5 = 4,2%`) | 4,2% | 1,3 | **8** | Hiếm nhưng lặp qua nhiều tháng (≈15 lần/năm) |
| Chạm mốc (25·50·100·250·500 tấm) | — | 2,0 | **6** | 5 mốc + 1 dự phòng |
| Ngày không tính (`1 − 0,848`) | 15,2% | 4,6 | **8** | |
| Chuỗi bắt đầu lại | ~2,5%/ngày [suy ra từ P(hụt lần thứ 3 trong tuần)] | 0,8 | **5** | Trạng thái nhạy cảm nhất — cần nhiều biến thể để không thành "câu quen thuộc của thất bại" |
| Ngày đầu của sổ | — | 1,0 | **3** | |
| Tết / nghỉ lễ (freeze) | — | — | **4** | ⚠️ **Ngoài MVP-0.** Tết freeze build ở **T13–T18**, hạn hoàn thành **25/01/2027** [A121]; Mùng 1 Tết Đinh Mùi = **06/02/2027**, cửa sổ freeze `book_date` **03/02 → 12/02/2027** [A119–A120]. 4 câu này **không** viết trong đợt 60 câu của MVP-0 |
| **Tổng** | | | **60 câu** | |

> **Hai chú thích số học bắt buộc, để bảng trên không bị đọc sai:**
> **(a) A = 5 là một sổ ĐẦY, không phải sổ trung bình.** Hệ số quy đổi chuẩn của toàn hồ sơ là **A trung bình = 4,0 người/sổ** [A70]. Tính lại ở A = 4, `q_c` = 0,53, `k` = 2: P(ngày tính) = 1 − 0,47⁴ − 4·0,53·0,47³ = **73,1%** (thay 84,8%) · đủ mâm = 0,53⁴ = **7,9%** ⇒ **2,4 lần/30 ngày** (thay 1,3) · ngày không tính = **26,9%** ⇒ **8,1 lần** (thay 4,6). Hướng lệch: sổ 4 người **hụt nhiều hơn** và **đủ mâm nhiều hơn** sổ 5 người.
> **(b) Vì vậy bank 60 câu vẫn đủ, và đây là con số thận trọng hơn:** ở A = 4 số câu cần cho "ngày không tính" tăng (4,6 → 8,1 lần/tháng) nhưng **8 câu vẫn phủ được**, còn "đủ mâm" tăng (1,3 → 2,4 lần) và **8 câu vẫn phủ được**. Không mục nào phải viết thêm câu; chỉ **thứ tự ưu tiên khi viết** đổi: viết đủ 8 câu "ngày không tính" **trước** 8 câu "đủ mâm".

**60 câu, không phải 200–300.** Con số 200–300 trong `r05` là phrase bank **roast** — thứ v2 đã cắt hoàn toàn. Đây là một khoản tiết kiệm chưa được ghi nhận: **~1,5–2 ngày công viết + toàn bộ nghĩa vụ audit từng câu**.

### 5.7. Ai viết, quy trình, chi phí

| Việc | Ai | Thời gian | Ghi chú |
|---|---|---|---|
| Viết 60 câu bản v1 | **Founder** | ~4 giờ | Không thuê ngoài. Giọng nhóm bạn Việt là thứ duy nhất founder có lợi thế tuyệt đối, và 60 câu quá ít để đáng thuê |
| Sinh câu ứng viên | LLM **offline, lúc soạn thảo** | ~1 giờ | **Được phép.** Đây là công cụ viết, không phải AI runtime — v2 §6 mục 11 cấm AI **trong sản phẩm**, không cấm dùng nó để nghĩ. Ranh giới: không dòng nào của LLM đi thẳng vào bank mà không qua audit người |
| Audit 4 luật T1–T4 | Founder + CI | 30 phút | Mỗi câu qua 4 câu hỏi: có tên trong ngữ cảnh phủ định không? có mẫu số không? có chữ bản sắc không? có tham chiếu kèo không? |
| **Kiểm tra người thật** | 2 người trong tệp (16–28 tuổi), **không phải bạn founder** | 1 giờ | Chấm mỗi câu 1–5 cho đúng một câu hỏi: **"Câu này gửi vào nhóm mày thì có kỳ không?"** Câu ≤3 điểm → viết lại. Đây là bài kiểm tra duy nhất có giá trị |
| Bổ sung sau Bước 0 | Founder | ~1 giờ | Bước 0 dán card thủ công ⇒ founder sẽ tự viết caption 14 tối × 8 sổ = **112 caption thật**. Đây chính là bank câu, thu thập miễn phí. **Ghi lại mọi caption đã dùng vào Google Sheet ngay từ ngày 08/09** |

**Việc tuần này:** thêm một cột `caption_đã_dùng` vào Google Sheet Bước 0. ⚠️ Sheet đó **có 8 cột, không phải 6** [A96 · QĐ-03]: `q_c_roster · q_x_roster · q_c_sliding · q_x_sliding · roster_size · số người nộp · số XONG · số TOANG` (pseudonymised, xoá sau 22/09) — cột caption là **cột thứ 9**, và nó là cột duy nhất tài liệu này được thêm. Chi phí 0, và nó biến 14 ngày Bước 0 thành công đoạn viết content của MVP.

---

## 6. SAFEGUARD TRONG UX — MỖI CÁI LÀ MỘT QUYẾT ĐỊNH UI

### 6.1. Bảng tổng

| # | Rủi ro (nguồn) | Quyết định UI cụ thể | pw |
|---|---|---|---|
| S1 | Scapegoating có tên (c-social-harm §2) | Hàng HÔM NAY **chỉ render mảng người đã nộp**. Component không nhận `member.name` trong nhánh `status === 'vắng'` — kiểm bằng test CI (P2) | 0 |
| S2 | Nghỉ/pause bị nêu tên | **Không build pause mode.** VẮNG đã vô hình. Thay bằng một dòng chữ trong màn 6 (câu #13 §5.3) | 0 |
| S3 | Reaction tiêu cực | **MVP-0 KHÔNG có reaction nào — kể cả reaction tích cực.** Nút `♡` đã bị CẮT sang T13+ [A27 · C03 · S01]. Trang public là **chỉ-đọc**, hành động duy nhất là `Vào sổ này`. Đặc tả `♡` giữ nguyên ở §6.2 cho T13+ | **0** — khoản 0,2 pw của nút này **không còn là tiền** (đã bị bán 3 lần, xem `docs/adr/pw-ledger.md`; một khoản cắt chỉ được chi MỘT LẦN [A87]) |
| S4 | Xếp hạng | Không tồn tại màn, không tồn tại API trả về mảng sắp xếp theo `count`. Endpoint sổ trả về mảng **theo thứ tự thời gian nộp**, không theo số lượng | 0 |
| S5 | Hiển thị ai kém nhất | Không có mẫu số ở bất kỳ đâu. Card không in `3/5`. Màn 1 không in `3/5`. Chỉ có `71 tấm` | 0 |
| S6 | Rời nhóm êm | Hai nút tách bạch (§6.5). **Không thông báo cho ai.** Ảnh cũ ở lại nếu chọn nút 1, biến mất nếu chọn nút 2 | trong 0,3 pw |
| S7 | Report/block | Màn 5, menu `⋮`. **Report đầu tiên ẩn ảnh TOÀN CỤC ngay** (QĐ-16). Block = hai chiều, tức thì, không thông báo cho người bị chặn. **SLA kép công bố ở màn 7: 48 giờ (khiếu nại người dùng) · 24 giờ, khẩn cấp 6 giờ (cơ quan nhà nước)** — QĐ-17 | trong 0,5 pw |
| S8 | Kèo nhạy cảm (phản biện #19) | Chặn từ khoá **client-side**, kết quả **không rời thiết bị**, → màn hỗ trợ + 3 preset an toàn + số 111 / 1900 599 088. Chỉ ghi `safety_screen_shown{reason_bucket}` | 0,05 |
| S9 | Ảnh người khác bị phát tán ra ngoài nhóm | Card chứa ảnh thật. Ở bước Vào sổ, một dòng **không bỏ qua được**: `Ảnh bạn nộp có thể xuất hiện trên card mà cả sổ gửi vào nhóm chat.` | 0 |
| S10 | Vị thành niên (Luật ANM 116/2025) | **Cổng tuổi dạng khẳng định ở màn 3**: một dòng không-bỏ-qua-được `Tôi từ 16 tuổi trở lên`. **KHÔNG có ô năm sinh, KHÔNG có ô ngày sinh** [A47 · QĐ-20] — hệ thống chỉ lưu `person.is_16_plus` + `age_gate_at`, kiểm tra tuổi làm ở **tầng ứng dụng** (tối thiểu hoá dữ liệu, Luật 91/2025). Không xác nhận → không mở/vào sổ được. **Hàng rào giấy tờ, không phải kỹ thuật** — v2 §9 đã nói đúng như vậy | trong 0,5 pw |

### 6.2. Chi tiết S3 — nút thả tim: **ĐÃ CẮT KHỎI MVP-0**

> ### ❌ [CHỐT 2026-08-28 — QĐ-05b] Nút `♡` KHÔNG có trong MVP-0. Đặc tả dưới đây giữ lại cho T13+.
> Ba tài liệu độc lập chọn nút này làm nguồn trả nợ pw: `03` §10 câu 7 (mặc định: cắt) · `04` §9.4 (ứng viên cắt rẻ nhất) · `07` MVP-0 (cắt sang T13+). Cùng lúc ba tài liệu khác coi nó **như đã có**: `06` §4.2 xây HM-1/HM-3 và trường `hearts_recv_14d` trên nó · `05` §3 dùng nó làm dấu hiệu "tương tác" khi đối chiếu Điều 3 NĐ 147 · `09` §3 tuyên bố nó "đã giải xong" bài toán spectator mode. **Vừa bị cắt vừa được coi là đã có** — đó là trạng thái không thể tồn tại sau ngày hôm nay.
> **Hệ quả đã được áp ngược vào các tài liệu kia:**
> - `06` §4.2: **HM-1 và HM-3 bị bỏ.** Bộ chỉ số tác hại từ nay chỉ phát hiện **rút lui** (HM-2, HM-4), không phát hiện **loại trừ**. Đây là một điểm mù đã biết, được ghi thành văn.
> - `06` E7 `heart_sent` và trường `hearts_recv_14d` **không tồn tại** trong danh mục event hợp nhất (`04` §7.1).
> - `05` §3 mất một dấu hiệu "tương tác" — điều này **có lợi** cho lập luận không-phải-MXH, không có hại.
> - `09` §3: spectator mode ở MVP-0 chỉ còn là **xem được trang public**, không có hành động nào. Phải ghi rõ thay vì coi là đã giải.
> - **Trang public thì GIỮ** (QĐ-05b): nó là bề mặt phân phối duy nhất, và M2 phụ thuộc vào nó.
> **Điều kiện mở lại:** T13+ trong nhánh (a). Nếu mở lại, phải quyết trước một câu hỏi mà đặc tả cũ dưới đây né được nhờ giới hạn "chỉ người ngoài": **có mở tim cho thành viên trong sổ không?** Nếu có ⇒ chấp nhận rủi ro xếp hạng ngầm mà chính mục này cảnh báo. Nếu không ⇒ HM-1 mãi mãi không đo được thứ nó định đo.

**Đặc tả giữ lại cho T13+ — vì sao chỉ một reaction, và vì sao nó ẩn danh**


`♡` nằm ở **trang public**, dành cho người **chưa vào sổ**. Nó tồn tại vì một lý do cold start: người thứ 2 mở link nhưng chưa sẵn sàng vào sổ vẫn có một hành động để làm, và sổ nhận được tín hiệu sống.

Ba ràng buộc, mỗi cái chặn một cách lạm dụng:

| Ràng buộc | Chặn gì |
|---|---|
| **Ẩn danh** (chỉ hiện tổng số) | Chặn "ai thả tim cho ai" → chặn bảng xếp hạng ngầm về độ được yêu quý |
| **Chỉ tăng, không bỏ được sau 5 giây** | Chặn "rút tim" như một hành vi trừng phạt |
| **Rate-limit 1/ảnh/thiết bị/ngày** | Chặn một người tạo cảm giác ảnh của A được yêu thích hơn ảnh của B |

Tổng tim hiển thị **ở cấp sổ trên trang public** (`♡ 12`), **không hiển thị per-ảnh trong màn 1 của thành viên**. Nếu hiển thị per-ảnh cho thành viên, nó lập tức thành xếp hạng — đây là lỗi dễ mắc nhất khi implement.

### 6.3. Chi tiết S8 — màn hỗ trợ khi kèo chạm từ khoá nhạy cảm

Kích hoạt bởi danh sách: `kcal` `calo` `cân` `kg` `giảm cân` `nhịn` `ăn kiêng` `nhịn ăn` `eat clean` `detox` (v2 §4.8). Chạy **trên máy**, không gửi server, không lưu cờ.

```
┌──────────────────────────────────────────┐
│                                          │
│  Kèo liên quan tới cân nặng hay ăn uống  │
│  thường không hợp với kiểu sổ này.       │
│                                          │
│  Sổ chỉ ghi lại một tấm mỗi tối. Nó      │
│  không phải chỗ để theo dõi cơ thể.      │
│                                          │
│  Thử một trong ba kèo này nhé:           │
│  [ Ngủ trước 12h ]                       │
│  [ Đi bộ 20 phút ]                       │
│  [ Không mất tích ]                       │
│                                          │
│  Nếu bạn đang thấy khó khăn:             │
│  Tổng đài 111 · Ngày Mai 1900 599 088    │
│                                          │
│  [ Viết kèo khác ]                       │
└──────────────────────────────────────────┘
```

Ba chi tiết quan trọng: **(a)** không có nút "Bỏ qua, tôi vẫn muốn dùng kèo này" — nếu có, chặn từ khoá thành trang trí; **(b)** không có chữ nào phán xét người dùng; **(c)** không ghi nội dung kèo vào bất kỳ log nào, kể cả log lỗi.

### 6.4. Chi tiết S7 — report/block, quy trình một người vận hành nổi

| Bước | UI | Backend | Thời gian founder |
|---|---|---|---|
| Người dùng chạm `Báo cáo ảnh này` | Modal 3 lựa chọn: `Ảnh nhạy cảm` · `Không phải ảnh của người này` · `Khác` | `report_created{reason_bucket}` | 0 |
| Ngay lập tức | **Ảnh ẩn TOÀN CỤC — với tất cả mọi người trong sổ**, không chờ duyệt | [CHỐT 2026-08-28, QĐ-16] Trigger DB đặt `proof.hidden_at = now()` ngay ở report **đầu tiên** (N=1); policy `proof_read` đã lọc `hidden_at`. Chi phí thêm ≈ **0** — cột và policy đã có trong `04` §1.4/§1.8 | 0 |
| Trong 48h | Founder xem hàng đợi | `report_resolved` | ~5 phút/vụ |
| Chạm `Chặn người này` | Chặn **hai chiều tức thì**, không hỏi lại, không thông báo cho người bị chặn | | 0 |

> ### 🔴 [CHỐT 2026-08-28 — QĐ-16] VÌ SAO ẨN TOÀN CỤC, KHÔNG PHẢI ẨN CLIENT-SIDE VỚI NGƯỜI BÁO CÁO.
> Thiết kế cũ ("ảnh ẩn với người báo cáo ngay, flag client-side") để **nội dung vi phạm tiếp tục hiển thị với 4 người còn lại trong tối đa 48 giờ**. Luật ANM 116/2025 Điều 16 khoản 3 đòi **"biện pháp kỹ thuật để phát hiện, ngăn chặn, gỡ bỏ kịp thời"** — một flag chỉ ảnh hưởng tới người đã nhìn thấy và đã báo cáo **không phải một biện pháp ngăn chặn**. `05` §8.3 gọi auto-hide toàn cục là câu trả lời rẻ nhất cho nghĩa vụ này, và nó đúng: chi phí ≈ 0, vì `proof.hidden_at` đã tồn tại.
> **Rủi ro ngược đã cân nhắc:** một người có thể ẩn ảnh của người khác bằng một report sai. Chấp nhận được vì (a) sổ ≤8 người **đều là bạn thân ngoài đời**, không phải người lạ; (b) founder xử trong 48h và **khôi phục** (`hidden_at = null`); (c) mọi report + hành động đều vào `audit_log` (QĐ-19), nên lạm dụng lặp lại là nhìn thấy được. Ở quy mô beta ≤30 sổ [A91], tỉ lệ report ước lượng 0,1–0,5% ⇒ **4–18 vụ/tháng** (tính lại theo hệ số quy đổi chuẩn **4,0 người/sổ** [A70], xem đoạn "Ước lượng tải" ngay dưới) ⇒ rủi ro này là lý thuyết.

> ### ⏱ [CHỐT 2026-08-28 — QĐ-17] SLA LÀ **HAI** CON SỐ CHO **HAI** ĐỐI TƯỢNG.
> Bản trước ghi một con số và ghi rõ "48 giờ, **không phải 24**" — câu đó đúng cho khiếu nại người dùng nhưng **phủ nhận một nghĩa vụ luật định** khi áp lên yêu cầu của cơ quan nhà nước.
>
> | Đối tượng | SLA | Tính chất |
> |---|---|---|
> | **Khiếu nại của người dùng** (report, xin gỡ ảnh, xin xoá dữ liệu) | **48 giờ** | Cam kết tự đặt. v2 §10(d) đúng: một người không giữ nổi 24h vĩnh viễn, và SLA bị vi phạm tệ hơn SLA khiêm tốn |
> | **Yêu cầu của cơ quan nhà nước** | **24 giờ · khẩn cấp 6 giờ** | **Luật định, không thương lượng** (Luật ANM 116/2025). Không giữ được bằng cách "cố gắng" — phải giữ được bằng **công cụ**: công tắc `remote_config['service.paused']` + **script khoá một sổ khẩn cấp**, cả hai nằm trong `RUNBOOK.md` |
>
> **Trang chính sách (màn 7) phải in CẢ HAI con số**, không được in một. Và vì bus factor = 1: `RUNBOOK.md` phải có **tên một người thứ hai** trước ngày beta, đặc biệt cho cửa sổ **03/02 04:00 → 13/02 03:59 ICT**, tức **10 `book_date`** 03/02→12/02/2027 (Tết, A120).

**Ước lượng tải (tính lại theo A70):** ở **30 sổ** beta đợt 2 [A91] × **4,0 người/sổ** [A70 — hệ số quy đổi DUY NHẤT của hồ sơ, thay con số 5 của bản trước] × 30 ngày = **3.600 tấm/tháng**. Với tỉ lệ báo cáo `[ước lượng 0,1–0,5% — cần kiểm chứng, không có số cho tệp này]` → **4–18 vụ/tháng** × ~5 phút/vụ → **20–90 phút/tháng**. Nằm trong trần vận hành **35 sổ sống cùng lúc / 10 giờ tuần** [A92] và dưới trần pháp lý **60 sổ** [A93].

### 6.5. Chi tiết S6 — rời sổ êm

Hai nút, hai ngữ nghĩa, **không bao giờ gộp** (c-social-harm §5):

| Nút | Ảnh cũ | Tên trong lưới 30 ngày | Thông báo cho nhóm |
|---|---|---|---|
| `Rời sổ` | ở lại | ở lại | **không có** |
| `Rời sổ và xoá ảnh của tôi` | xoá cứng (media + thumbnail) | thay bằng ô trống **không tên** | **không có** |

**Không có chức năng kick ở MVP.** Lý do: kick cần đa số tuyệt đối, notification cho người bị kick, grace period 7 ngày export — tổng cộng ≥0,4 pw cho một tính năng mà tác hại chính của nó là drama. Nhóm bạn xử lý việc này ngoài đời. Nếu cần đuổi ai đó: nhóm mở sổ mới bằng một mã khác — **chi phí 0, và nó không tạo ra một sự kiện bị-đuổi có dấu vết**.

Hệ quả cần chấp nhận và ghi rõ: một người khó chịu ở lại được trong sổ. Đổi lại, không có cơ chế nào cho phép 4 người dùng sản phẩm để loại 1 người.

> ### 🧾 [PHÁN QUYẾT 03/09/2026 — C39 · A61 · S17] HỆ QUẢ THỨ HAI, PHẢI GHI RA: **YÊU CẦU CỦA DIGEST #20 TAN BIẾN.**
> Digest phản biện #20 kê toa một "nghi thức kick" gồm ba phần: **biểu quyết đa số + 7 ngày grace period + export ZIP dữ liệu cho người bị gỡ**. Toa đó giả định có chức năng kick. **Không có kick thì cả ba phần đều không có đối tượng** — chúng không bị "hoãn", chúng **tan biến**, và không được nằm trong bất kỳ bảng pw nào.
> Kèm theo: **không có vai "chủ sổ"** ở MVP-0 [A61 · S17]. State `removed` trong `04` §2.2 **chỉ** dùng cho ca moderation của founder, không phải cho "chủ sổ gỡ thành viên"; event 20 dùng trường **`was_removed_by_moderation`**, không phải `was_kicked` [A52].
> **Điều kiện mở lại:** nếu sau này mở kick, phải trả **đủ một lượt**: ≥0,4 pw cho UI + notification cho người bị gỡ + đường tải dữ liệu về, ghi vào `docs/adr/pw-ledger.md` [A87] **trước** khi viết dòng code đầu tiên của tính năng.

### 6.5b. Rời sổ — người rời NHÌN THẤY gì, và dữ liệu của họ đi đâu

> **Lỗ hổng được lấp ở đây:** §6.5 có hai nút và một bảng 3 cột; nhưng không nơi nào nói **màn xác nhận viết gì**, **sau khi bấm thì người đó thấy gì**, và **đủ danh sách thứ gắn với một người đi đâu**. Người dùng đang đứng trước một nút không thể hoàn tác, và câu chữ ở đó là toàn bộ thông tin họ có.

**a) Màn xác nhận — nguyên văn, hai biến thể, không thêm câu**

```
┌──────────────────────────────────────────┐   ┌──────────────────────────────────────────┐
│  Rời sổ?                                 │   │  Rời sổ và xoá ảnh?                      │
│                                          │   │                                          │
│  Ảnh cũ của bạn vẫn ở lại trong sổ.      │   │  23 tấm của bạn sẽ bị xoá khỏi sổ.       │
│  Kèo của bạn bị xoá.                     │   │  Kèo của bạn bị xoá.                     │
│  Nhóm sẽ không nhận được thông báo nào.  │   │  Không lấy lại được.                     │
│                                          │   │  Nhóm sẽ không nhận được thông báo nào.  │
│         [ Ở lại ]      [ Rời sổ ]        │   │                                          │
└──────────────────────────────────────────┘   │      [ Ở lại ]   [ Xoá và rời sổ ]       │
                                               └──────────────────────────────────────────┘
```

**Bốn luật của hai màn này:**
1. **Số tấm phải là số thật của người đó** (`23 tấm`), không phải "ảnh của bạn". Con số làm người ta dừng lại đúng lúc cần dừng.
2. **Câu "Nhóm sẽ không nhận được thông báo nào" là bắt buộc ở CẢ HAI màn.** Đây là câu duy nhất trả lời nỗi lo thật của người sắp rời (`08` §5.3 câu #12 cấm phát tán sự kiện rời sổ), và nếu không nói ra thì người dùng phải tự đoán.
3. **Không có câu giữ chân.** Không `Chắc chưa?`, không `Sổ sẽ nhớ bạn`, không hiện chuỗi đang có. Nút rời sổ là hàng rào an toàn (`05` §8.4), và làm khó một hàng rào an toàn là một dạng dark pattern.
4. **Không có bước thứ ba.** Hai chạm là hết: mở overlay → xác nhận.

**b) Sau khi bấm — 3 giây tiếp theo**

- Về thẳng **màn 0** (chưa có sổ), không có màn trung gian, không có toast ăn mừng.
- Một dòng duy nhất, tự tắt sau 3 giây: `Đã rời sổ.` — không dấu chấm than, không emoji.
- **Không đề nghị mở sổ mới ngay.** Người vừa rời một nhóm bạn không phải một cơ hội chuyển đổi.

**c) Dữ liệu đi đâu — bảng đầy đủ ở `13` §8.1**

Ở đây chỉ ghi **bốn điều có mặt trên UI** và vì thế thuộc chủ quyền tài liệu này:

| Người rời thấy | Người ở lại thấy |
|---|---|
| Mất quyền vào sổ **ngay lập tức**; muốn quay lại phải được mời lại | **Không thấy gì cả.** Không dòng nào trong sổ, không thay đổi nào trên card |
| Card cũ đã gửi vào Zalo **vẫn còn ảnh của họ** tới hết TTL **90 ngày** — nói rõ điều này nếu họ hỏi, đừng để họ phát hiện | Số người trong lưới ảnh giảm từ **hôm sau**, không phải ngay |
| Kèo (`goal_text`) **xoá ngay, không hỏi** (A69) | `k` giảm theo `A_eff` ⇒ sổ **dễ** tính ngày hơn, và **không được hiển thị sự kiện này** |
| Quyền đòi bản sao dữ liệu **vẫn còn** sau khi rời (`13` §9, SLA 10 ngày) | Chuỗi của sổ **không đứt** vì có người rời (P4) |

⚠️ **Một hệ quả ngược đời phải nói ra:** mẫu số `q_c` là **`roster_size` đóng băng** (A14/A15) — nó **không co lại** khi có người rời. Nghĩa là một sổ mất 2/5 người sẽ thấy `q_c` tụt kể cả khi 3 người còn lại nộp đủ mỗi ngày. Đây là lựa chọn có ý thức (chống gian lận mẫu số), nhưng nó có nghĩa là **UI tuyệt đối không được hiển thị `q_c` cho người dùng** — con số đó chỉ đúng với vai trò đo lường, và sai với vai trò phản hồi. Dòng riêng tư `Bạn đã có mặt 23/30 ngày` dùng mẫu số khác (**số ngày sổ có tính**), và hai mẫu số này không được đứng cạnh nhau trên cùng một màn.

---

## 7. UX CHO SỔ ĐANG TÀN — TRẠNG THÁI PHỔ BIẾN NHẤT

### 7.1. Đây không phải edge case

P(nhóm 5 người sống 30 ngày) ≈ 12,5% [v2 §9 mục 6]. ~40% nhóm messaging chết trong tuần đầu (Qiu et al., WWW 2016). **Nghĩa là: đa số thời gian tồn tại của sản phẩm diễn ra trong một sổ có 1–2 người còn hoạt động.** Nếu UX chỉ đẹp khi A=5, sản phẩm xấu trong đa số vòng đời của nó.

### 7.2. Bốn trạng thái sổ, và UI của từng cái

| Trạng thái | Định nghĩa | Màn 1 hiện gì | Card hiện gì | App nói gì |
|---|---|---|---|---|
| **Sống** | A ≥ 3 | như wireframe §4 | đủ | bình thường |
| **Còn hai** | A = 2 | **y hệt**, chỉ ít ảnh hơn. `k` tự động về 1 (**tính trên `A_eff = min(A(D), A(D−1))`**, không trên `A` của ngày hiện tại [A06–A07]) — sổ dễ tính ngày hơn, không khó hơn | đủ | **không một chữ nào về việc nhóm nhỏ đi** |
| **Còn một** | A = 1 | y hệt + dải `Sổ mới có mình bạn · Gửi card vào nhóm` | đủ, 1 ảnh | câu #18/#19 §5.3 |
| **Ngủ đông** | **`book.status = 'dormant'`** = 7 ngày liên tiếp `A < 3` [CHỐT 2026-08-28, QĐ-15 — thay ngưỡng "0 tấm trong 14 ngày" của bản trước] | Lưới 30 ngày **lên đầu trang**, thành trang ký ức. Nút chính đổi thành `Chốt sổ lại` | — | `Sổ này ngủ từ 12/10. 71 tấm vẫn còn đây.` |
| **Ngủ sâu** | **`book.status = 'dead'`** = 21 ngày liên tiếp không tấm nào | **Cùng layout Ngủ đông**, không có trạng thái riêng trên UI | — | cùng câu, số ngày lớn hơn |

> ### 🔗 [CHỐT 2026-08-28 — QĐ-15] UI ĐỌC `book.status`, KHÔNG TỰ ĐỊNH NGHĨA NGƯỠNG.
> Bản trước dùng ngưỡng riêng ("0 tấm trong 14 ngày") để đổi hẳn layout màn 1, trong khi `04` §2.3 có một máy trạng thái 3 mức (`active → dormant` khi `A<3` liên tiếp 7 ngày `→ dead` sau 21 ngày không tấm). Hai định nghĩa cho **cùng một khái niệm mà UI phải render** — và không có ánh xạ nào giữa chúng, vì bảng này phân loại theo `A` còn `04` phân loại theo `status`.
> **Chốt: `book.status` là nguồn duy nhất** (nó là cột dashboard đọc; `04` §2.3 nói rõ "không có định nghĩa thứ hai trong repo"). Ba trạng thái trên (Sống / Còn hai / Còn một) vẫn phân loại theo `A` — hợp lệ, vì cả ba đều nằm trong `status = 'active'` và chỉ đổi **nội dung**, không đổi **layout**. Chỉ trạng thái đổi layout mới phải đọc `status`. Bảng ánh xạ đầy đủ ở `04` §2.3.

**Ba luật cứng cho sổ đang tàn:**

1. **Không có trạng thái "chết".** Không màn "Sổ của bạn đã kết thúc", không email tiếc nuối, không "chúng tôi nhớ bạn". Sổ ngủ đông, và **hai con số không bao giờ đi xuống vẫn đứng nguyên đó** (`Ngày thứ 34 · 71 tấm`). Đây là toàn bộ giá trị của nguyên tắc P4 — nó tồn tại chính xác cho ngày này.
2. **`k` giảm theo A là một món quà, không phải một cảnh báo.** Khi A tụt từ 3 xuống 2, `k` tụt từ 2 xuống 1, và P(ngày tính) **tăng** từ 54,5% lên 77,9% (`q_c` = 0,53 `[chưa đo, A17]`; A=3 k=2 ⇒ 1−0,47³−3·0,53·0,47² = 0,545 · A=2 k=1 ⇒ 1−0,47² = 0,779). Sổ hai người dễ giữ chuỗi hơn sổ ba người. **Không được hiển thị sự kiện này**, nhưng nó là lý do sổ tàn không sụp ngay.
   > ⚠️ **[CHỐT 2026-08-28, QĐ-14b] Luật này tính trên `A_eff = min(A(D), A(D−1))`, không phải trên `A` của ngày hiện tại.** Chiều ngược lại tạo ra một lỗi thật (`04` §9.1): sổ 2 người (k=1) có **người thứ 3 nộp tấm đầu tiên một mình** ⇒ `A` nhảy 2→3 ⇒ `k` nhảy 1→2 ⇒ present=1 < 2 ⇒ **sổ mất ngày và mất chuỗi ĐÚNG vào ngày có thêm bạn**. Một hàm `min()` là toàn bộ chi phí; phải vào **trước commit đầu** vì sau đó là dữ liệu lịch sử.
3. **Không bao giờ so sánh với quá khứ của chính sổ đó.** Cấm mọi câu dạng `Tuần trước sổ có 12 tấm, tuần này 4`. Con số duy nhất được so sánh là con số chỉ tăng.
4. **Van nghỉ là tài nguyên CỦA SỔ, và UI chỉ được nói ba điều về nó.** Van = **2 ngày hụt trên cửa sổ 7 ngày trượt** [A10]. Ngày được van đỡ: chuỗi **đóng băng** (không tăng, không đứt) · **không** tính vào mẫu số `q_c` · tiêu 1 slot van [A11]. Ba hệ quả cho copy, không có ngoại lệ:
   - Câu duy nhất được phép ở màn 1: **`Sổ này còn 2 ngày nghỉ trong tuần.`** (câu #15 §5.3) — chủ ngữ là **sổ**, không phải người.
   - Câu duy nhất được phép trên card ngày van đỡ: **`Hôm nay sổ nghỉ.`** (câu #9 §5.3). **Cấm** mọi biến thể nêu ai đã tiêu slot van — đó là `Nam chưa nộp` viết bằng chữ khác, vi phạm T2 và P2.
   - Vì ngày van đỡ **không vào mẫu số `q_c`**, dòng riêng tư `Bạn đã có mặt 23/30 ngày` (câu #16) **không được** đếm ngày đó vào mẫu số 30. Đây là một con số dẫn xuất: mẫu số thật là *số ngày sổ có tính*, không phải *số ngày lịch*.

### 7.3. Một cơ hội bị bỏ lỡ nếu không thiết kế: sổ ngủ đông là kênh tái sinh rẻ nhất

Sổ ngủ đông giữ nguyên: mã 6 ký tự, tên sổ, lưới ảnh, hai con số. Bấm `Chốt sổ lại` → sinh card mang **cả lịch sử cũ**: `Sổ nhà 4 đứa · Ngày thứ 34 · 71 tấm · ngủ 26 ngày`.

Card đó dán vào nhóm Zalo là một loại nội dung khác hẳn card thường: nó là **ký ức**, không phải nghĩa vụ. Chi phí: 0 pw (cùng template, một biến thêm). [Ước lượng, chưa có dữ liệu] đây là hành vi đáng đo trong beta: tỉ lệ sổ ngủ đông được đánh thức trong 60 ngày.

> ⚠️ **Hệ quả của A45 chưa tài liệu nào ghi ra — nó chạm đúng luồng này.** Mã 6 ký tự chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi**. Một sổ ngủ 26 ngày có card cũ **quá 7 ngày** ⇒ **mã 6 ký tự không mở được sổ đó**. Đường vào duy nhất của người quay lại là **link trong card MỚI** vừa sinh ra. Ba việc bắt buộc: (1) màn `Chốt sổ lại` phải nhắc `Gửi card mới vào nhóm để mọi người vào lại` chứ không nhắc mã; (2) **không in mã 6 ký tự lên card tái sinh** khi card đó thuộc sổ đã ngủ >7 ngày — in một mã không dùng được là tệ hơn không in; (3) luồng này phải có **snapshot test riêng**, vì nó là ca duy nhất trong sản phẩm mà hai hằng số TTL cắt nhau.

> 🔧 **Phần VẬN HÀNH của sổ chết ở `13` §7** — cái founder phải làm (chính xác là **không làm gì**), năm điều cấm khi một sổ chết, và cách sổ chết được đọc trong `sổ-D28` / `B` / trần vận hành / trần pháp lý. Ba luật cứng ở mục này là luật **UI**; `13` §7.2 là luật **hành vi của founder**, và cái thứ hai là cái hay bị vi phạm lúc 22:00 khi thấy một sổ im lặng ba ngày.

> ### 🖼 [CHỐT 2026-08-28 — QĐ-07 & QĐ-11] Hai lời hứa của mục này đã được bảo vệ bằng hai quyết định ở tài liệu khác.
> **(a) Card cũ không được vỡ ảnh trong lịch sử chat.** Ba tài liệu từng ghi ba vòng đời cho card PNG: 90 ngày (`03` §2.5), 30 ngày (`04` §1.6 và §6.1), "không bao giờ vỡ" (mục này). **Chốt 90 ngày, và hết hạn thì THAY bằng một ảnh tĩnh trung tính cùng key** ("Sổ này đã lưu ở chotso.vn") — **không trả 404**. Lập luận quyết định là `03` §9 B3: một dãy ảnh vỡ trong nhóm Zalo là **thiệt hại thương hiệu diễn ra chậm và không ai báo**. Kích thước card chốt **~150 KB** (một con số duy nhất, thay cho 150 KB ở `03` và 180 KB ở `04`).
> **(b) Thumbnail KHÔNG bị xoá.** `10` §5 mục 12 từng đặt luật "sổ 0 tấm 90 ngày ⇒ **xoá thumbnail**" vì lý do chi phí — tức xoá đúng tài sản mà mục này hứa giữ, và xoá đúng ở **trạng thái phổ biến nhất của vòng đời sản phẩm**. Bác bằng con số của chính `04` §6.1: toàn bộ thumbnail của **10.000 sổ** ≈ 200 GB ≈ **$3/tháng**. Luật mới: sổ ngủ 180 ngày ⇒ chuyển sang lưu trữ lạnh; chỉ xoá khi mọi thành viên đã rời (`archived`), báo trước 30 ngày, có đường tải về. **Câu `71 tấm vẫn còn đây` giờ là một lời hứa có thể giữ.**

---

## 8. ACCESSIBILITY & THỰC TẾ VIỆT NAM

### 8.1. Tiếng Việt có dấu — chỗ hỏng cụ thể

| Vấn đề | Hậu quả | Xử lý |
|---|---|---|
| Font trên card render server-side (satori) **phải nhúng file font có subset Vietnamese** | Thiếu glyph → ô vuông tofu trên đúng thứ rời khỏi hệ thống | Nhúng **Be Vietnam Pro** (Google Fonts, thiết kế cho tiếng Việt) hoặc **Inter** (có Vietnamese). Không dùng font hệ thống |
| Chuỗi test bắt buộc trong snapshot test card | | `Đặng Thị Hường · ăn phở · cà khịa · ngủ nghỉ · ĐỦ MÂM 💀 ✓` — phủ `ă â ê ô ơ ư đ` + 5 dấu + chữ hoa có dấu + 2 emoji |
| Dấu tiếng Việt làm tăng chiều cao dòng (`Ằ`, `ộ`) | Chữ bị cắt ngọn ở nút cao cố định | `line-height ≥ 1,45` ở mọi nơi. Nút cao **tối thiểu 48dp**, nút XONG/TOANG **56dp** |
| **Không bao giờ bỏ dấu** tên người | `Nguyen Thi Huong` là xúc phạm nhẹ và trông như spam | Lưu và render UTF-8 nguyên vẹn, mọi nơi |
| Emoji `💀` trên Android tầm thấp cũ | Có thể render khác/thiếu | Kèm ký tự `✓`/`💀` **cộng màu nền khác nhau**. Nhãn không được phụ thuộc duy nhất vào emoji |

### 8.2. Máy Android tầm thấp

**Thị phần Android VN — ✅ ĐÃ CHỐT 04/09/2026:** StatCounter T8/2026 = **Android 57,33% · iOS 42,64% · khác 0,03%** (`docs/adr/ADR-003-thi-phan-android-vn.md`). Con số 60,38% mà mục này từng dẫn (r02/StatCounter T7/2026) là **cùng nguồn, tháng cũ**; con số ">85%" của r05 **bị thu hồi nhãn `[FACT]`**. Kết luận thiết kế **không đổi** — Android vẫn là đa số, test Android trước — nhưng **iOS là ~43% chứ không ~15%**, nên không màn nào được để iOS sau.

> ### ✅ [D-08 · ĐÃ ĐÓNG 04/09/2026] `>85%` ĐÃ BỊ THU HỒI NHÃN `[FACT]`.
> `01-v2` §6 mục 3, `03` R3 và `07` §8(b) từng dùng **">85% [FACT]"**; mục này dẫn r02/StatCounter T7/2026 = **60,38%**. Kiểm chứng trực tiếp ngày 04/09/2026 (StatCounter T8/2026) cho **57,33% Android / 42,64% iOS** ⇒ **nhánh (b) thắng**, và cả ba tài liệu kia đã được sửa.
>
> | Lựa chọn | Nếu chọn thì phải làm gì |
> |---|---|
> | ~~**(a) >85% đúng**~~ | ❌ **BỊ BÁC.** Nhãn `[FACT]` đã gỡ khỏi ">85%" ở v2 §6 mục 3, `03` R3, `07` §8(b) |
> | ✅ **(b) con số StatCounter đúng** | **Android 57,33% · iOS 42,64% (T8/2026)** — thấp hơn cả 60,38%. ~43% tệp là iOS ⇒ **web push chỉ phủ ~57%**, và S09 (Android web push, đã CẮT khỏi MVP-0) mất thêm một phần lý do để quay lại |
>
> **Đã làm:** 15 phút ngày 04/09/2026 trên StatCounter, chốt **đúng một** con số, ghi ở `docs/adr/ADR-003-thi-phan-android-vn.md` (A103 chốt MỘT file ADR bất biến; ADR-003 là bản ghi kiểm chứng sự thật, không phải một bất biến thứ hai — xem mục "Việc còn tồn" ở `00` §8 việc 3). **Cho tới lúc đó, mọi lập luận dựa trên ">85%" phải mang nhãn `[cần kiểm chứng]`.** Quyết định này **không đổi thiết kế của tài liệu này** — bảng dưới đây giả định máy Android tầm thấp trong mọi trường hợp.

| Vấn đề | Chi tiết | Xử lý |
|---|---|---|
| **OOM khi nén ảnh** | Ảnh 12MP (4000×3000) giải nén thành ~48 MB RGBA trong canvas. Trên máy 2–3GB RAM chạy trong webview Zalo (đã tốn RAM cho Zalo), tab bị kill im lặng | `createImageBitmap(blob, {resizeWidth:1080, resizeQuality:'medium'})` → không giải nén full-res. Bọc `try/catch`, fallback sang `<img>` + canvas; nếu vẫn lỗi: `Ảnh này nặng quá, thử tấm khác nhé.` **Không hiện chữ "Lỗi"** |
| **Webview Zalo dùng engine gì** | Android: Android System WebView (bản Chromium theo máy) · iOS: WKWebView | **Cần kiểm chứng trên máy thật** — nằm trong **7 câu** của buổi **04/09/2026** [A105]. Đặt sàn: Chrome 90+ / iOS 15+ |
| **`<input type=file accept="image/*">` trong webview Zalo** | Nếu bị chặn, toàn bộ core loop chết | Là **câu 2 trong 7 câu** của buổi **04/09/2026** [A105]. Nếu chặn: hiện nút `Mở trong trình duyệt` (deep link ra Chrome) — mất ~6 giây, còn hơn mất luồng |
| **Bàn phím tiếng Việt (Laban Key, Gboard) đẩy layout** | Nút bị che khi gõ tên sổ | Dùng `env(keyboard-inset-height)` hoặc `visualViewport` listener. Nút `Tiếp` không bao giờ nằm dưới bàn phím |
| **Vùng ngón cái** | | Mọi nút chính nằm trong **25% dưới** màn hình |
| **Tương phản** | Màn hình rẻ ngoài nắng | Chữ chính ≥ **4,5:1**, chữ trên card ≥ **7:1** (card bị nén JPEG khi qua Zalo, giảm tương phản thực tế) |

### 8.3. Mạng

Tốc độ mobile median VN **152,17 Mbps** [FACT, DataReportal 2025 qua r02 §45] — băng thông **không** phải rào cản. Rào cản là **thời gian tải lần đầu** và **mạng chập chờn**, không phải tốc độ đỉnh.

| Ngân sách | Giá trị | Vì sao |
|---|---|---|
| JS gzip cho first paint | **≤120 KB** | Màn 1 phải paint trong ≤2,5s trên 4G, máy tầm thấp |
| Tổng byte màn 1 khi sổ đầy | 120 KB JS + 144 KB thumbnail = **~264 KB** | Dẫn xuất từ hai dòng trên sau khi sửa trần 6→8 người |
| LCP màn 1 | **≤2,5 s** (4G, máy tầm trung) | Ngưỡng "good" của Core Web Vitals |
| Thumbnail hàng HÔM NAY | 320px × **18 KB** [A39] × tối đa **8** = **144 KB** | Trần người/sổ là **8** [A46 · `04` §1.3]. Con số cũ **108 KB** tính trên 6 người — sai đúng cùng lỗi với lưới card 6 ô mà QĐ-30 đã bác (§4 màn 4): giả định ngầm rằng sổ không quá 6 người |
| Upload 1 tấm | **~110 KB** `[chưa đo — phải đo trên 20 ảnh Android thật, A37]` | ~0,5s ở 4G bình thường; ~4s ở 3G kém |
| Hành vi khi mất mạng giữa chừng | **Không hiện lỗi.** Ảnh hiện local, hàng đợi thử lại 2s/8s/30s, thanh xám `Đang gửi lại…` | Người dùng đã hoàn thành nghĩa vụ tâm lý ở cú chạm nhãn; đừng lấy lại |

### 8.4. Tên hiển thị

| Quy định | Giá trị | Lý do |
|---|---|---|
| Độ dài | **≤12 ký tự** | Vừa 3 ô ngang trên card 4:5 |
| Trùng tên trong cùng sổ | Bắt người vào **sau** đổi ngay tại chỗ: `Tên này có rồi, thêm gì đó cho khác nhé.` | Rẻ hơn mọi thuật toán tự sinh, và không tạo nhãn xấu ("Linh 2") |
| Ký tự cho phép | Chữ + số + khoảng trắng, có dấu | Chặn emoji trong tên để không vỡ layout card |
| Đổi tên | Bất cứ lúc nào, màn 6, không thông báo | |
| Tên thật hay không | **Không bắt buộc** | Xem câu hỏi mở #1 |
| Avatar | **Không có ở MVP** | Ảnh proof đã là avatar. Tiết kiệm một upload flow, một bề mặt moderation, một cột DB |

### 8.5. Những thứ CÓ LÀM về accessibility (rẻ) và KHÔNG LÀM (ở MVP)

**Có làm — tổng ~0,05 pw, nằm trong hạng mục hiện có:**
- HTML ngữ nghĩa (`<button>` thật, không `<div onclick>`), thứ tự tab đúng.
- `alt` trên mọi ảnh: `Ảnh của Linh, nhãn xong` — không mô tả nội dung ảnh (app không biết, và đoán là rủi ro).
- `prefers-reduced-motion`: tắt mọi chuyển động.
- Vùng chạm ≥48dp, khoảng cách giữa hai nút ≥8dp.
- Không dùng **màu là kênh thông tin duy nhất** — XONG/TOANG luôn có ký tự đi kèm.

**Không làm ở MVP, ghi rõ:** đọc màn hình đầy đủ (VoiceOver/TalkBack) chưa được test; chế độ tương phản cao riêng; chỉnh cỡ chữ trong app (dựa vào cỡ chữ hệ thống, dùng `rem`); tiếng Anh. **Không tuyên bố tuân thủ WCAG.**

---

## 9. BA CHỈ SỐ UX CẦN ĐO TỪ DÒNG CODE ĐẦU TIÊN

> ### 📇 [PHÁN QUYẾT 03/09/2026 — C10 · A51 · QĐ-02] TÀI LIỆU NÀY **KHÔNG CÒN TỰ KHAI DANH MỤC EVENT**.
> Danh mục hợp nhất **DUY NHẤT** là **32 event ở `04` §7.1**. Bản trước của mục này khai riêng 3 event, `06` §0 khai riêng 14, `04` khai 28 — ba danh mục cho cùng một đường ống. Từ nay mục này **chỉ mô tả cách đọc**, và mọi tên/số hiệu event tra ở `04` §7.1.
> Hai event UX của tài liệu này (**`submit_abandoned`** và cặp **`card_rendered`/`card_shared`**) **đã được gộp** vào danh mục 32 event đó. Một event bị **bỏ**: **`submit_committed` trùng event 9** — thời gian nộp đo bằng chênh giây giữa `submit_started` và **event 9**, không sinh event thứ hai. Số **25 (`heart_sent`) để trống vĩnh viễn, KHÔNG tái sử dụng** [A51].
> Định giá lại đã ghi sổ: hạng mục 8 của v2 §4.10 cấp 0,5 pw cho 14 event, danh mục hợp nhất có 32 event + 2 counter pháp lý ⇒ **+0,15 pw** vào `docs/adr/pw-ledger.md` [A53 · A87]. Tài liệu này **không** được chi lại khoản đó.

Ba phép đo UX phải đọc được **từ dòng code đầu tiên** (23/09/2026, A110), tất cả dùng event đã có trong `04` §7.1 — **0 pw thêm**:

| Phép đo | Đọc từ event nào (`04` §7.1) | Ngưỡng đáng lo |
|---|---|---|
| Thời gian thật của bước 4 | chênh giây giữa `submit_started` và **event 9** (`submit_committed` đã bị bỏ vì trùng) | trung vị >20s ⇒ luồng nộp hỏng trên máy thật |
| Bỏ giữa chừng ở đâu | `submit_abandoned{step}`: mở picker / chọn ảnh / chọn nhãn | >25% bỏ ở bước mở picker ⇒ vấn đề webview Zalo, không phải vấn đề động lực |
| Card render xong nhưng không được gửi | `card_shared` ÷ `card_rendered` | <60% ⇒ share sheet hỏng ⇒ kích hoạt **phương án B** ở bất đồng #6 [D-09] |

Hai counter pháp lý (`monthly_visits`, `monthly_active_persons`) và hai event cảnh báo (`visits_alert` số 28, `persons_alert` số 29) [A54–A55] **cũng phải đếm từ dòng code đầu tiên** — chúng không backfill được. Chúng không phải chỉ số UX, nhưng chúng chạm vào UI ở một chỗ: khi đèn đỏ bật, sản phẩm **dừng nhận sổ mới ngay trong ngày** [A58] ⇒ màn 3 phải có sẵn một trạng thái "tạm khoá mở sổ mới" (một dòng chữ, 0 pw): `Sổ mới đang tạm khoá. Sổ đang chạy không bị ảnh hưởng.`

---

## Đã cắt — danh sách đầy đủ và điều kiện mở lại

Mọi mục dưới đây **từng tồn tại** trong bản trước của tài liệu này và **đã bị bảng phán quyết trọng tài 03/09/2026 cắt**. Không mục nào được quay lại nếu thiếu một trong ba thứ: (a) điều kiện mở lại ở cột cuối đã thoả · (b) khoản pw đã ghi vào **`docs/adr/pw-ledger.md`** [A87] — **một khoản cắt chỉ được chi MỘT LẦN** · (c) tổng backlog vẫn **≤ 6,5 pw** [A83], nếu vượt thì kill gate **05/10/2026** kích hoạt [A111].

| # | Thứ bị cắt | Nó nằm ở đâu trong tài liệu này | Phán quyết | Tiền hoàn về sổ cái | Điều kiện mở lại |
|---|---|---|---|---|---|
| 1 | **Chế độ demo "Sổ mẫu"** ở màn 1 (sổ giả đang chạy, dữ liệu động, có state) | §1.1 hàng 0–5 giây | **CẮT** — S19 · C44 · A79. Nó là **màn thứ 8 dưới một cái tên khác** | **0 pw** — thay bằng một ảnh PNG tĩnh xuất từ chính template satori | Chỉ khi Bước 0 (**08/09 → 21/09/2026** [A107–A108]) chứng minh **bằng dữ liệu** rằng người mở link lần đầu không hiểu sản phẩm nếu không thấy một sổ đang chạy. Lý do ghi vào `docs/adr/ADR-000-bat-bien.md` [A103] |
| 2 | **Màn 8** (bất kỳ nội dung nào) | §4, cuối phần wireframe | **ĐỂ TRỐNG CÓ CHỦ ĐÍCH** — A79 · QĐ-32. Ba yêu cầu lấp slot đã bị bác: fake door "Bao cả sổ" của `10`, màn preview của `09`, demo "Sổ mẫu" của chính tài liệu này | 0 pw | Đúng một màn, được **Bước 0 chứng minh** là bắt buộc. `02` DoD 7.1 biến điều này thành tiêu chí nhị phân |
| 3 | **Nút thả tim `♡`** — trên trang public, trong wireframe màn 1b, trong bảng §2.3, trong §6.1 S3 | §2.3 · §4 màn 1b · §6.1 S3 · §6.2 · câu hỏi mở #3 | **CẮT sang T13+** — C03 · S01 · A27. Đặc tả kỹ thuật **giữ nguyên** ở §6.2 để không phải nghĩ lại | **0đ tiền mới.** Khoản 0,2 pw của nó **đã bị bán 3 lần** (`03` §10 c7, `04` §9.4, `07` MVP-0) ⇒ nó **không còn là tiền**, chỉ còn là một khoản cắt | T13+ trong nhánh (a). Trước khi mở, phải trả lời câu ở §6.2: **có mở tim cho thành viên trong sổ không?** Hệ quả đã ghi: HM-1/HM-3 chết, `heart_sent` (event 25) **để trống vĩnh viễn**, `hearts_recv_14d` không tồn tại [A51–A52] |
| 4 | **Nút `Chép lời mời` ở màn 6** | §4 màn 6 | **CẮT khỏi màn 6 · GIỮ ở màn 4** — S20 · A102 · QĐ-34 | 0 pw | Chỉ khi màn 6 được cấp lại ngân sách > 0,00 pw (`07` hiện cắt nó xuống 0,00) **và** v2 §5 — vốn liệt kê màn 6 gồm **đúng 5 thứ** — được sửa bằng văn bản |
| 5 | **Domain dự phòng thứ hai** | §2.4 bậc 2 · bất đồng #5 | **CẮT** — C45 · A68 · QĐ-37 | **+750.000đ/năm** không phải chi ở MVP-0 [A67] | Mua **ngay trong tuần**, không cần hỏi lại, nếu buổi kiểm chứng **04/09/2026** cho thấy Zalo **cảnh báo** domain `.vn` lạ [A105] |
| 6 | **Vai "chủ sổ" + chức năng kick** (+ nghi thức kick / 7 ngày grace / export ZIP của digest #20) | §6.5 | **CẮT** — C39 · A61 · S17 | **≥0,4 pw không bao giờ được chi** — nó chưa từng nằm trong bảng pw nào, nên đây **không** phải tiền để tiêu chỗ khác | Nếu mở lại phải trả **đủ một lượt**: ≥0,4 pw UI + notification cho người bị gỡ + đường tải dữ liệu về. State `removed` tới lúc đó **chỉ** dùng cho ca moderation của founder |
| 7 | **UI "Nghỉ 7 ngày" / pause mode** | UX-3 · §6.1 S2 | **CẮT UI · GIỮ CỘT** — C34 · S06 · A50 | 0 pw. Cột `paused_until` **vẫn vào schema từ commit đầu** (chi phí cột = 0) | Khoản trả bù "Tết freeze" mà `06` định dùng **đã bị `07` tiêu** ⇒ cần một nguồn đối trừ mới. Đổi lại, `06` phải mang nhãn **"HM-4 MƠ HỒ CÓ CHỦ Ý"** bằng văn bản: không có nút Nghỉ thì "người bận" và "người bị đẩy ra" sinh chuỗi event **giống hệt nhau** |
| 8 | **Đóng gói lưới 30 ngày thành vật phẩm chia sẻ hoặc hàng bán** (Memory Capsule / Asset 2 / PDF P1) | §7.3 | **CẮT bản thương mại · GIỮ trang ký ức** — S14 · S15 | 0 pw — "trang ký ức" chỉ là **layout của màn 1**, không phải tính năng | Trang ký ức: **giữ, không cần điều kiện**. Bản thương mại: T13+ và phải qua A62 (doanh thu **0đ tuyệt đối** 6 tháng đầu). ⚠️ Bề mặt công khai chứa ảnh cá nhân + nhãn 💀 là **CẮT VĨNH VIỄN** — v2 §6 mục 6 là mục **duy nhất không có điều kiện mở lại** [S15] |
| 9 | **4 câu caption Tết trong bank 60 câu** | §5.6 hàng "Tết / nghỉ lễ" | **NGOÀI MVP-0** — C06 · A121. Tết freeze build ở **T13–T18** | 0 pw ở MVP-0 | Hạn hoàn thành **25/01/2027** [A121]. Mốc đúng: Mùng 1 Tết Đinh Mùi = **06/02/2027** [A119]; cửa sổ freeze `book_date` **03/02 → 12/02/2027**, 10 ngày [A120]. Con số `17/02/2027` của các bản trước là **SAI** (đó là Tết Bính Ngọ 2026) |
| 10 | **Event `submit_committed` tự khai** | §9 | **BỎ** — C10 · A51. Trùng **event 9** của `04` §7.1 | 0 pw (định giá lại danh mục event là **+0,15 pw**, đã ghi sổ [A53]) | **Không bao giờ.** Thời gian nộp đo bằng chênh giây giữa `submit_started` và event 9 |
| 11 | **Ngưỡng ngủ đông riêng "0 tấm trong 14 ngày"** | §7.2 | **BỎ** — C26 · A12 · A13 · QĐ-15 | 0 pw | **Không bao giờ.** UI đọc `book.status` [`04` §2.3], không tự định nghĩa ngưỡng. `dormant` = 7 ngày liên tiếp `A < 3`; `dead` = 21 ngày không tấm |
| 12 | **Auto-hide chỉ-với-người-báo-cáo (flag client-side)** | §6.4 | **BỎ** — C23 · A60 · QĐ-16 | 0 pw (thay bằng auto-hide toàn cục, chi phí ≈ 0 vì `proof.hidden_at` đã có) | **Không bao giờ.** Nó không thoả Luật ANM 116/2025 Điều 16 khoản 3 |
| 13 | **Ô năm sinh ở màn 3** | §6.1 S10 | **BỎ** — A47 · QĐ-20 | 0 pw | **Không bao giờ.** Chỉ lưu `person.is_16_plus` + `age_gate_at`; **không** năm sinh, **không** ngày sinh (tối thiểu hoá dữ liệu, Luật 91/2025) |

**Ba thứ tài liệu này GIỮ được sau phán quyết, ghi ra để không ai cắt nhầm lần nữa:** (1) **trang public** — `02` §4.3 nói thẳng "cắt cái này thì **M2 không đo được**" [S23] · (2) **mã 6 ký tự in lên card** — UX-2, đường thoát hiểm duy nhất sống sót khi Zalo chặn domain [A45] · (3) **caption `Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`** — tài liệu này thắng ở C22 nhờ chủ quyền tone [A99].

---

## Bất đồng với định nghĩa sản phẩm v2

Sáu điểm. Không điểm nào đòi tăng scope; bốn điểm **giảm** scope hoặc bằng 0.
**Sau phán quyết trọng tài 03/09/2026:** điểm **2 THẮNG** (caption, C22/A99) · điểm **4 THẮNG một nửa** (mã in lên card GIỮ, nhưng nó không được là khoá vào vô điều kiện — C32/A45) · điểm **5 ĐÃ RÚT LẠI** (C45/A68) · điểm **6 đã được nâng thành D-09** và có phương án B viết sẵn ngay dưới. Điểm 1 và 3 chưa bị ai bác.

**1. Bước 4 không phải 16 giây nếu giữ 3 hành động (chọn ảnh → chọn nhãn → Gửi).**
v2 §3 ghi bước Nộp = 16 giây với ba hành động. Bảng §3.1 của tôi cho **18–22 giây** trên máy tầm trung với ba hành động. Đề nghị chốt vào ADR: **nhãn XONG/TOANG chính là nút Gửi**, kèm Hoàn tác 10 giây. **−0,05 pw** (bớt một nút, một trạng thái, một lần render).

**2. Caption mặc định trên card đang chứa một mệnh lệnh nhắm vào người chưa nộp.**
v2 §4.6 ghi caption: _"Sổ tối nay đây. Bấm vô nộp đi, không cần cài app."_ Vế `Bấm vô nộp đi` là mệnh lệnh chỉ có nghĩa với người **chưa** nộp — đúng hình dạng ngữ nghĩa của chữ cấm `đứa nào chưa` mà chính §1 gọi là "chữ nguy hiểm nhất trong toàn bộ hồ sơ". Đề nghị: **`Sổ tối nay đây. Mỗi đứa một tấm, không cần cài app.`** Vẫn đủ 3 chữ bắt buộc, mất mệnh lệnh. **0 pw.**

**3. Card không nên in thành chữ câu "Linh toang".**
v2 §4.6 cho phép app nói `"Linh toang"`. Nhãn 💀 dưới ảnh Linh đã truyền đạt đủ, và khác biệt không nhỏ: khi app **in ra một câu**, app là bên phát ngôn; khi app **hiển thị một nhãn**, app là bên ghi lại lựa chọn của Linh. Đề nghị: trên card chỉ có `Linh 💀` dạng nhãn, không có câu `Linh toang`. **0 pw.**

**4. Mã sổ 6 ký tự phải được in lên card.**
Không có trong danh sách "card CHỨA đúng những thứ này" ở v2 §4.6. Nhưng §9 mục 7 gọi việc Zalo chặn domain là rủi ro "growth về 0", và giảm thiểu duy nhất là "mã sổ 6 ký tự gõ tay". **Mã đó phải nằm trên ảnh** — vì ảnh không bị chặn link. Nếu mã chỉ nằm trong caption text, nó chết cùng lúc với link. **0 pw**, một dòng trong template. Đây là bất đồng tôi cho là quan trọng nhất trong sáu điểm.

**5. ~~Phải mua hai domain, không phải một.~~ — BẤT ĐỒNG NÀY ĐÃ ĐƯỢC RÚT LẠI [A68 · C45 · QĐ-37].**
Bản trước lập luận: domain dự phòng là bậc 2 trong kịch bản §2.4 nên phải tồn tại **trước** khi cần. **Phán quyết bác**, và tài liệu này chấp nhận: **MỘT domain (`chotso.vn`) ở MVP-0**, **≈750.000đ/năm** [A67] `[cần báo giá thật 03/09/2026]`.
Lý do bác đứng vững hơn lập luận cũ: domain thứ hai **cũng là một domain `.vn` lạ**, chịu đúng cơ chế cảnh báo mà nó định né. Đường thoát hiểm thật là **mã 6 ký tự trong pixel của card** (UX-2, **0đ**, có sẵn từ ngày 1). Mua trước = trả tiền cho một lớp bảo hiểm không chắc chắn bảo hiểm được gì.
**Điều kiện mở lại đã ghi vào §2.4 bậc 2:** mua ngay trong tuần nếu buổi **04/09/2026** cho thấy Zalo **cảnh báo** domain `.vn` lạ.

**6. Câu Web Share có thể là câu đắt nhất trong buổi kiểm chứng nền tảng — và nó suýt không có trong danh sách.**
Danh sách gốc của v2 §10(h) chỉ có ba câu (Zalo chặn domain? · `chooseImage`/camera trong webview? · OG preview 4:5?). Tài liệu này đề nghị bổ sung câu dưới đây; **phán quyết A105 đã nhận và mở rộng danh sách lên 7 câu**, và câu này là **câu 5**:

> **Câu 5/7: Trong webview Zalo trên Android và iOS, `navigator.share({files:[...]})` (Web Share API level 2) có chia sẻ được file ảnh không?**

Nếu **không**, luồng share đổi từ `[Chia sẻ] → chọn nhóm → gửi` (1 chạm, 8–14s) thành `[Lưu ảnh] → thoát web → mở Zalo → mở nhóm → đính kèm → chọn ảnh trong thư viện → gửi` (**6 chạm, +20–30 giây, rời khỏi sản phẩm**). `[Ước lượng]` tỉ lệ hoàn tất bước chia sẻ giảm **15–30 điểm phần trăm** — và bước chia sẻ **là** kênh phân phối duy nhất của cả hướng này.
⚠️ **Đính chính về số câu:** danh sách kiểm chứng nền tảng **không còn là 3 câu**. Buổi **04/09/2026** có **7 câu** trên ma trận ≥3 máy Android thật [A105]: Zalo cảnh báo domain `.vn` · `chooseImage`/`<input type=file>` · OG preview 4:5 crop · Service Worker trong webview · **`navigator.share({files})`** · danh sách "Đã xem" của Zalo · generated column `AT TIME ZONE` + `CREATE TABLE`. Câu của mục này là **câu 5 trong 7**, không phải "câu thứ 4 còn thiếu".

> ### 🅱️ [CẦN FOUNDER QUYẾT — D-09 · hạn 04/09/2026] PHƯƠNG ÁN B ĐÃ VIẾT SẴN, CHỜ KẾT QUẢ TEST.
> Phán quyết D-09 yêu cầu **viết sẵn phương án B hôm nay**, không đợi kết quả. Đây là nó — không dòng nào trong này được build trước khi buổi 04/09 trả lời, và cả hai nhánh đều **không** cần màn mới (slot 8 vẫn để trống [A79]).
>
> | Nhánh | Nếu `navigator.share({files})` … | Làm gì ở màn 4 | pw |
> |---|---|---|---|
> | **(a)** | **CHẠY** trên cả Android lẫn iOS trong webview Zalo | Giữ nguyên §1.1 và §4 màn 4: nút chính `Chia sẻ vào Zalo`, 1 chạm | 0 |
> | **(b)** | **KHÔNG chạy** trên ít nhất một nền tảng | Nút chính đổi thành **`Lưu ảnh`** + **một dòng hướng dẫn duy nhất dưới card**: `Ảnh đã lưu vào máy. Mở Zalo, chọn nhóm, gửi ảnh vừa lưu.` Cộng: hỗ trợ **long-press vào card để lưu** (hành vi mặc định của webview, không phải code). **Không** hiện chữ "Lỗi", **không** hiện chữ "trình duyệt của bạn không hỗ trợ" | **0,05** — phải ghi vào `docs/adr/pw-ledger.md` [A87] **trước** khi build, và nó là **khoản thêm**, không có nguồn đối trừ nào đang trống |
>
> **Cả hai nhánh đều bắt buộc đo `card_shared ÷ card_rendered` từ ngày đầu** (§9) — đó là cách duy nhất biết thiệt hại thật thay vì tin vào ước lượng 15–30 điểm.
> **Nếu CẢ HAI đường đều hỏng** (share API không chạy **và** tỉ lệ lưu-rồi-gửi thủ công < 40% ở tuần 2 beta): **mã 6 ký tự [A45] là đường sống duy nhất còn lại**, và nó phải được **in TO HƠN** trên card — một thay đổi template satori, 0 pw, nhưng phải đi kèm nhắc lại điều kiện chặn của A45: mã chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi**.
> **Khuyến nghị:** viết nhánh (b) thành một biến `remote_config['card.share_mode']` với hai giá trị (`native` / `save_then_send`) ngay ở commit đầu — chi phí một cột config đã có, và nó biến một quyết định-sau-khi-test thành một dòng `UPDATE`, không phải một lần deploy.

---

## Câu hỏi mở cần founder quyết

| # | Câu hỏi | Vì sao phải quyết trước dòng code đầu | Khuyến nghị của tôi |
|---|---|---|---|
| 0 | **[D-01 · hạn 22/09/2026] Cắt thêm 1,08 pw ở đâu — và hai trong bốn ứng viên nằm trong tài liệu này?** | Bảng US chi tiết ra **4,58 pw** cho đúng scope mà QĐ-25 gọi là **3,5 pw** [A84–A85] ⇒ **thiếu 1,08 pw**. Hai ứng viên đầu tiên đều là UI của tài liệu này: (1) **trang public xuống chỉ-đọc, không thả tim, không lưới** (−0,4 pw) · (2) **preset kèo từ 8 xuống 4** (−0,15 pw) · (3) màn 5 gộp thành overlay (−0,3) · (4) biến thể card mốc sổ (−0,25) | **Hai lựa chọn, founder quyết, máy không quyết hộ.** **(a)** Lấy (1)+(2)+(4) = −0,80 pw và giữ nguyên màn 5 · **(b)** Lấy (1)+(3) = −0,70 pw, gộp màn 5 thành overlay. ⚠️ **Ràng buộc cứng nếu chọn (b):** overlay **phải** chứa đủ `Báo cáo` / `Chặn` / `Xoá ảnh của tôi` — `05` §8.4 bắt buộc report + block, và màn 5 hiện là **nơi duy nhất** chứa chúng; mất chúng là mất nghĩa vụ luật định, không phải mất một tính năng.<br>**Khuyến nghị: (a).** Ứng viên (1) đã **thi hành một phần** trong tài liệu này (trang public là chỉ-đọc, §1.3 + §2.3); phần lưới 30 ngày trên trang public vẫn còn và là chỗ cắt tiếp theo rẻ nhất. Ứng viên (2) tốn đúng 4 dòng string ở §1.1. Không lựa chọn nào ở đây được coi là đã quyết cho tới **22/09/2026** |
| 1 | Tên hiển thị có bắt buộc là tên thật không? | Ảnh hưởng ToS, ảnh hưởng khả năng một người lạ nhận diện nhóm từ card bị chia sẻ ra ngoài | **Không bắt buộc.** Gợi ý tên gọi thân mật. Giảm bề mặt rủi ro với ~0 chi phí |
| 2 | Trang public có nên hiện **tên** thành viên cho người chưa vào sổ không? | v2 §5 ghi "ảnh mờ + tên". Tên thật của 5 người ở một URL công khai là dữ liệu cá nhân | Hiện tên (cần cho nhận diện "đây là nhóm tao"), nhưng **bắt buộc** slug ≥10 ký tự ngẫu nhiên + `noindex` |
| 3 | ~~Người lạ (chưa vào sổ) có được thả `♡` không, hay chỉ thành viên?~~ **CÂU HỎI NÀY ĐÃ HẾT ĐỐI TƯỢNG Ở MVP-0** | Nút `♡` đã bị CẮT sang T13+ [A27 · C03 · S01]. Không có nút thì không có câu hỏi | **Hoãn tới T13+.** Khi mở lại, câu phải quyết **trước** không phải câu này mà là câu ở §6.2: **có mở tim cho thành viên trong sổ không?** — có ⇒ chấp nhận rủi ro xếp hạng ngầm; không ⇒ HM-1 mãi mãi không đo được thứ nó định đo |
| 4 | Có cần một màn consent một lần về việc **ảnh của tôi sẽ nằm trên card gửi vào nhóm chat** không? | Điều 32 BLDS 2015 (quyền hình ảnh). Ai bấm Chia sẻ là đang phát tán ảnh 4 người khác | Một dòng không-bỏ-qua-được ở bước Vào sổ (S9). Không làm màn riêng |
| 5 | Giờ chốt sổ 21:00 cố định hay sổ tự chọn? | Ảnh hưởng cron, ảnh hưởng remote config, ảnh hưởng card | **Cố định 21:00 ở MVP.** Một hằng số trong remote config. Cho sổ tự chọn = một màn cài đặt + một lớp bug múi giờ |
| 6 | Ngày TOANG có được tính vào `bạn đã có mặt 23/30 ngày` không? | Có — `q_c` = tỉ lệ **có mặt (XONG hoặc TOANG)** [A15]. Nhưng người dùng có thể đọc "có mặt" thành "hoàn thành" | Giữ nguyên cách tính, đổi chữ thành `Bạn gửi tấm 23/30 ngày.` — mô tả hành vi, không mô tả kết quả. ⚠️ Hai mẫu số **khác nhau, không được trộn**: `q_c` cấp sổ dùng **`roster_size` đóng băng** [A15 · A14]; dòng riêng tư này dùng **số ngày sổ có tính**, đã trừ ngày van đỡ [A11] |
| 7 | Sổ có được đổi tên sau khi mở không? | Ảnh hưởng card lịch sử, ảnh hưởng OG cache | Cho đổi, không giới hạn. Card cũ giữ tên cũ (đó là ký ức, không phải bug) |
| 8 | Bank 60 câu caption viết **trước** Bước 0 hay **thu từ** Bước 0? | Ảnh hưởng việc tuần này | **Thu từ Bước 0.** Viết 10 câu tạm dùng ngày 08/09, ghi lại toàn bộ **112 caption** thật (8 sổ × 14 ngày [A94 · A107–A108]), chốt bank sau ngày **22/09** [A109] |
| 9 | Nếu **câu 5 trong 7 câu** của buổi 04/09/2026 (Web Share, `navigator.share({files})`) trả lời **không** — có đủ lý do dừng không? [A105 · D-09] | Đây là kênh phân phối duy nhất | **Không đủ để dừng.** Phương án B đã viết sẵn ở bất đồng #6 (0,05 pw, chưa có nguồn đối trừ). Bắt buộc đo `card_shared ÷ card_rendered` từ ngày đầu, ngưỡng **<40% trong tuần 2 của beta ⇒ xem lại toàn hướng** |
