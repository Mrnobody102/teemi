# 13 — RUNBOOK VẬN HÀNH (Chốt Sổ / Teemi)

> **Trạng thái:** tạo mới **04/09/2026** để lấp 6 lỗ hổng mảng SẢN PHẨM/VẬN HÀNH trong `_audit-report.md` mục THIẾU:
> (1) *"Một runbook Bước 0 duy nhất — founder cần MỘT tờ giấy đọc lúc 20:40 mỗi tối, không phải bảy tài liệu"* ·
> (2) *"RUNBOOK.md + kế hoạch người thứ hai"* (được `03` §10 câu 6 viện dẫn như mặc định, chưa từng tồn tại) ·
> (3) *"Không có quy trình bàn giao cho Tết"* ·
> (4) *"Quyền truy cập / cung cấp bản sao dữ liệu (export)"* — nơi D-06 phương án (a) phải sống ·
> (5) *"Không có kế hoạch dữ liệu cho việc dừng dự án"* / *"Kế hoạch dừng/đóng cửa tử tế"* ·
> (6) *sổ chết thì làm gì · người rời sổ thì dữ liệu xử lý ra sao* — phần **vận hành** của hai câu đó.
>
> **File này CHÍNH LÀ `RUNBOOK.md`** mà `03` §10, `05` §8.1 mục 7, `10` §3.1 và `09` câu hỏi #8 trỏ tới. Không tạo thêm file `RUNBOOK.md` thứ hai ở gốc repo — một tài liệu, một địa chỉ.
>
> **Hằng số:** mọi con số trong file này lấy từ `docs/plan/_rulings.md` mục A. Khi file này lệch với bảng phán quyết, **bảng phán quyết thắng** và file này phải sửa.
> **File này KHÔNG được phép:** đặt hằng số mới · ghi sổ cái pw (`docs/adr/pw-ledger.md` là nơi duy nhất — A87) · quyết thay founder các mục D.

---

## 0. CÁCH DÙNG TÀI LIỆU NÀY

| Bạn đang ở đâu | Đọc mục nào | Mất bao lâu |
|---|---|---|
| 20:40 mỗi tối, **08/09 → 21/09/2026** (Bước 0) | **§1** — in ra giấy, dán cạnh máy | đọc 1 lần, sau đó nhìn 10 giây |
| 22/09/2026, ngày đóng Bước 0 | **§2** | 1 ngày làm việc |
| 21:00 mỗi tối, **từ 02/12/2026** (beta) | **§3** | 6 phút/tối |
| Sáng Chủ nhật | **§4** | 20 phút |
| Ngày 1 mỗi tháng | **§5** | 30 phút |
| Có chuyện xảy ra | **§6** — bảng 12 ca, tra theo dấu hiệu | ≤2 phút để biết phải làm gì |
| Một sổ vừa chết | **§7** | 0 phút/sổ (cố ý) |
| Có người rời sổ | **§8** | 0 phút/lần (tự động) |
| Có người đòi bản sao dữ liệu | **§9** | 20–30 phút/yêu cầu |
| Tháng 01/2027, chuẩn bị Tết | **§10** | 2 giờ, một lần |
| Phải dừng dự án | **§11** | 14 ngày lịch |
| Bất cứ lúc nào | **§12** — bí mật, truy cập, bus factor | — |

**Một luật bao trùm cả tài liệu:** _nếu một việc không có trong runbook này thì tối nay nó không được làm._ Runbook tồn tại để chống lại đúng một thứ: founder solo, 20:40 tối thứ Ba, mệt, và quyết định một việc ngoài kế hoạch mà sáng hôm sau sẽ hối hận.

---

## 1. BƯỚC 0 — MỘT TỐI CỦA FOUNDER (08/09 → 21/09/2026)

### 1.1. Tờ giấy dán cạnh máy — 14 tối, không đổi

```
┌──────────────────────────────────────────────────────────────┐
│  CHỐT SỔ · BƯỚC 0 · TỐI NGÀY ___ /14        NGÀY ___/09/2026 │
├──────────────────────────────────────────────────────────────┤
│  20:40  [ ] Mở Google Form response · tải ảnh trong ngày     │
│         [ ] Mở Google Sheet, tab `raw`                       │
│  20:50  [ ] 8 card Canva: kéo ảnh, sửa 3 số, xuất PNG        │
│  21:00  [ ] Ngày 1–7  : DÁN card + caption vào 8 nhóm Zalo   │
│         [ ] Ngày 8–14 : GỬI RIÊNG card cho người trực        │
│                         (KHÔNG tự dán — A97)                 │
│  21:10  [ ] Ghi `raw`: ai XONG / TOANG / VẮNG, đường nộp     │
│         [ ] Ghi `daily`: 8 cột (§1.4)                        │
│  21:15  ĐÓNG MÁY.                                            │
├──────────────────────────────────────────────────────────────┤
│  HÔM NAY LÀ 15/09 HOẶC 18/09?  →  IM LẶNG TUYỆT ĐỐI.         │
│  Không gõ một chữ nào trong 8 nhóm, từ 04:00 tới 04:00.      │
│  Người trực quên dán card → ĐỂ NGUYÊN. Đó là phép đo.        │
├──────────────────────────────────────────────────────────────┤
│  BA ĐIỀU KHÔNG BAO GIỜ LÀM (02 §5.10)                        │
│  1. Không viết code sản phẩm.                                │
│  2. Không nhắc trong nhóm ở 15/09 và 18/09.                  │
│  3. Không cứu sổ đang chết. Sổ chết là dữ liệu tốt nhất.     │
└──────────────────────────────────────────────────────────────┘
```

### 1.2. Ngân sách thời gian — và điều phải làm khi vượt

| | Nhánh A (5 sổ, có kèo) | Nhánh B (3 sổ, không kèo) | Tổng |
|---|---|---|---|
| Phút/sổ/tối | 20 | 10 | — |
| Phút/tối | 100 | 30 | **130** |
| 14 tối | | | **1.820 phút = 30,3 giờ = 15,2 giờ/tuần** |

⚠️ **15,2 giờ/tuần bằng đúng ngưỡng kill gate `>15 giờ/tuần` của v2 §9 — trước khi có một dòng code.** Đây là dữ kiện của **D-02** (cam kết 15 hay 20 giờ/tuần, hạn 22/09). Trong 14 ngày này, mọi việc khác (báo giá domain, email luật sư, ADR-000) phải nằm **ngoài** 130 phút đó hoặc không xảy ra.

**Van vượt giờ — luật cứng, không thương lượng:**

| Dấu hiệu | Hành động | Cấm làm |
|---|---|---|
| Hết ngày 3 mà vẫn >20 phút/sổ nhánh A | **Giảm nhánh A từ 5 xuống 4 sổ** (= sàn tuyệt đối C53: 4A+2B). Ghi lại rằng bước nhảy của `B` thành **25 điểm** và phát biểu lại mọi ngưỡng theo **%** | Giảm số ngày · giảm giấc ngủ · bỏ ghi `raw` |
| Ba tối liên tiếp kết thúc sau 22:00 | Giảm xuống sàn 6 sổ ngay tối thứ tư | Bù bằng cách làm 2 tối dồn 1 |
| Rơi xuống dưới 6 sổ | **Hoãn Bước 0**, không hạ ngưỡng. Dưới sàn thì thí nghiệm không kết luận được gì | Chạy tiếp và "diễn giải cẩn thận" |

### 1.3. Tuần chuẩn bị — phải xong TRƯỚC 20:40 ngày 08/09

| Việc | Hạn | Xong chưa |
|---|---|---|
| Template Canva 1080×1350, lưới **thích ứng** (1 · 1×2 · 2×2 · 2×2 · 3×2 · 4 ô — QĐ-30), kéo-thả ≤2 phút/card | 07/09 | ☐ |
| **112 shortlink** (8 sổ × 14 ngày) tạo sẵn trên **Short.io free**, đặt tên `s<sổ>-d<ngày>` (A22/S18). **KHÔNG tự host** | **07/09** | ☐ |
| Google Sheet `raw` + `daily` + `obs` với **đúng 8 cột** ở `daily` (§1.4) | **07/09** | ☐ |
| 8 Google Form nộp (1 form/sổ), dropdown tên — **không gõ tay** | 07/09 | ☐ |
| Thư mục Drive `buoc0/<sổ>/<ngày>/`, đặt sẵn 14 thư mục ngày | 07/09 | ☐ |
| Script **S9 — thông báo & đồng ý dữ liệu** gửi vào cả 8 nhóm trước tin nhắn đầu tiên (`02` §5.9) | **08/09, trước 20:40** | ☐ |
| Ngưỡng H2 `≥9/14 ngày tính` viết ra giấy, dán cạnh máy (A20) | 07/09 | ☐ |
| Sổ số 0 (nhóm của chính founder) đã chạy thử **3 tối** để tập thao tác | 07/09 | ☐ |

⚠️ **Sổ số 0 KHÔNG nằm trong mẫu số của bất kỳ phép đo nào** (A95), kể cả `B`. Nó chỉ để tập tay.

### 1.4. Ghi số — 8 cột, không thêm cột thứ 9 vào `daily`

Sheet `daily`, **một dòng/sổ/ngày**, đúng 8 cột (A96/QĐ-03), **pseudonymised** (không tên thật, dùng `P1`…`P8`), **xoá sau 22/09/2026**:

`q_c_roster` · `q_x_roster` · `q_c_sliding` · `q_x_sliding` · `roster_size` · `số người nộp` · `số XONG` · `số TOANG`

- **Mẫu số so ngưỡng luôn là `roster_size` ĐÓNG BĂNG** (A14/A15) — **số người đã nộp ≥1 tấm trong 3 NGÀY ĐẦU của sổ**, chốt một lần vào cuối ngày 3 (**10/09**) và **không sửa sau đó**, giữ nguyên 14 ngày, không co lại khi có người bỏ cuộc. ⚠️ Bản trước ghi "số người trong sổ tại ngày 1" — **sai theo A14**; ngày 1 chưa biết ai thật sự nộp. Cột `_sliding` **chỉ để báo cáo, cấm dùng ra quyết định**.
- 4 quan sát cũ (số ngày tụt dưới 3 · tự nhắc · TOANG · click) chuyển sang sheet phụ **`obs`**, không vào `daily`.
- Sheet `raw`: một dòng/người/ngày, có cột `in_roster` và cột `path` (đường nộp: `form` hay `zalo-thoát-hiểm`).

### 1.5. Ba thứ đọc mỗi tối, không phân tích

Chỉ **nhìn**, ghi lại, **không kết luận gì trước 22/09**:

1. Có sổ nào **0 người nộp 2 ngày liên tiếp** không → ghi vào `obs`, **không nhắn gì**.
2. Có ai dùng **đường thoát hiểm** (gửi ảnh riêng cho founder vì không đăng nhập Google được) không → đếm. Nếu >30% thì `q_c(G2)` đang đo Google chứ không đo sản phẩm — đó là một **phát hiện**, phải viết vào văn bản 22/09.
3. Có ai **tự nhắc nhau** trong nhóm mà không phải founder không → ghi nguyên văn câu đó. Đây là tín hiệu định tính đắt nhất của cả 14 ngày và không có cột nào chứa nó.

---

## 2. NGÀY 15 — 22/09/2026: ĐIỀU XẢY RA NGAY SAU KHI BƯỚC 0 KẾT THÚC

> **Lỗ hổng được lấp ở đây:** hồ sơ mô tả rất kỹ 14 ngày chạy và rất kỹ ngày bắt đầu code (23/09), nhưng **không tài liệu nào nói ngày 22/09 làm gì theo thứ tự nào** — trong khi ngày đó có: 8 nhóm bạn thật đang chờ biết chuyện gì tiếp theo, một kho ảnh của ~32 người trên Drive phải xử lý, và một văn bản quyết định phải ký trước khi được viết dòng code đầu tiên.

### 2.1. Lịch giờ của ngày 22/09

| Giờ | Việc | Kết quả phải có |
|---|---|---|
| **08:00–08:30** | **ĐÓNG BĂNG DỮ LIỆU.** Khoá 8 Google Form (không nhận nộp mới). Sao chép Sheet sang bản `FROZEN-2026-09-22`, đặt chế độ chỉ-đọc | Không một ô nào được sửa sau giờ này. Sửa số sau khi đã nhìn số là cách tự lừa mình rẻ nhất |
| **08:30–10:00** | Tính **6 con số**, đúng công thức, không làm tròn có lợi: `q_c_roster` và `q_x_roster` **chỉ trên 2 ngày im lặng 15/09 và 18/09** · `q_c(A)` vs `q_c(B)` · **% sổ nhánh A đạt ≥9/14 ngày tính** · `B` (§2.2) · `click-shortlink` 14 ngày · `Δ_link+trực` = `q_c_roster`(G1) − `q_c_roster`(G2) | 6 số, viết tay ra giấy trước khi mở tài liệu nào |
| **10:00–11:00** | **Exit survey** — gửi vào 8 nhóm, 4 câu (§2.4). Không hỏi trước ngày này (A98) | ≥50% người trả lời trong 24h |
| **11:00–12:00** | **Tin nhắn đóng Bước 0** gửi vào 8 nhóm (§2.5) — nói thật chuyện gì xảy ra tiếp | 8/8 nhóm đã nhận |
| **13:00–16:00** | **Viết văn bản quyết định** (§2.3). Có số, có ngày, có chữ ký, lưu `docs/adr/ADR-000-bat-bien.md` | 1 file, ký ngày 22/09 |
| **16:00–17:00** | **Xử lý dữ liệu Bước 0** (§2.6): xoá ảnh trên Drive, pseudonymise và giữ Sheet `FROZEN` | Kho ảnh về 0 byte |
| **17:00–17:30** | Nhìn lại: có mục nào trong văn bản quyết định để trống không? | Không được để trống ô nào |
| **23/09 sáng** | **Dòng code đầu tiên** (A110), hoặc không có dòng nào — tuỳ kết quả | — |

### 2.2. `B` — chốt con số vào đúng hôm nay, không sớm hơn

Công thức đã chốt (A26/QĐ-26), **cấm diễn giải lại**:

> `B` = **% sổ nhánh A còn `group_alive` ở ngày 14 (21/09/2026)**
> · mẫu số = **5 sổ nhánh A** (không phải 8) · **loại sổ số 0** (A95)
> · `group_alive` = ≥3 người nộp ≥1 tấm trong 7 ngày kết thúc ở ngày 14, tính trên **roster đóng băng**

⚠️ **In kèm mỗi lần trích dẫn:** với n=5, `B` ∈ {0 · 20 · 40 · 60 · 80 · 100}% — **bước nhảy 20 điểm**. Nếu nhánh A rơi xuống 4 sổ thì bước nhảy **25 điểm**.
⚠️ **Beta 12 sổ có bước nhảy 8,3 điểm.** So một số bước-8,3 với một số bước-20 **không phải phép đo chính xác** — cổng #3 (16/12) chỉ được tuyên "đạt" khi `group-D14(beta) ≥ B + 20 điểm`, **hoặc** khi cả hai đều ≥60%.

### 2.3. Mẫu văn bản quyết định 22/09 — điền hết, không để trống

```
QUYẾT ĐỊNH SAU BƯỚC 0 — ký ngày 22/09/2026
Người ký: ______________________

A. SỐ THẬT (chép từ Sheet FROZEN, không làm tròn)
   A1. q_c_roster (2 ngày im lặng 15+18/09) = ______
   A2. q_x_roster (2 ngày im lặng)          = ______
   A3. % sổ nhánh A đạt ≥9/14 ngày tính     = ______%
   A4. q_c(A) = ______   q_c(B) = ______   chênh = ______ điểm
   A5. B = ______%  (n = ____ sổ, bước nhảy ____ điểm)
   A6. click-shortlink 14 ngày              = ______%
   A7. Δ_link+trực                          = ______
   A8. Số sổ còn sống ngày 14 / số sổ khởi động = ____ / ____
   A9. Số người phải dùng đường thoát hiểm  = ____ / ____ (___%)

B. ĐỌC KẾT QUẢ — khoanh ĐÚNG MỘT (07 §4 CỔNG #1)
   ☐ ĐI       (A1 ≥ 0,45 · A2 ≥ 0,30 · A3 ≥ 60% · A4 chênh ≤5đ có lợi cho B · ≥1/8 sổ tự hỏi "mai còn chốt sổ không")
   ☐ BỎ KÈO   (q_c(B) − q_c(A) ≥ 10 điểm)
   ☐ XÁM      (0,35 ≤ A1 < 0,45  hoặc  A6 trong 40–60%)  → chạy giao thức §2.7
   ☐ DỪNG     (A1 < 0,35  hoặc  A6 < 40%  hoặc  0/8 sổ tự hỏi)

C. NĂM CÂU PHẢI TRẢ LỜI TRƯỚC DÒNG CODE ĐẦU (23/09)
   C1. D-01 — cắt thêm 1,08 pw ở đâu:  ______________________
   C2. D-02 — cam kết 15 hay 20 giờ/tuần: ______ giờ/tuần
   C3. D-04 — định nghĩa thành công A hay B: ______
   C4. D-05 — giữ hay hạ ngưỡng sổ-D28 25%: ______
   C5. TÊN SẢN PHẨM — Teemi hay Chốt Sổ: ______

D. BA ĐIỀU TÔI ĐÃ SAI (bắt buộc điền, không được để trống)
   D1. ______________________________________________
   D2. ______________________________________________
   D3. ______________________________________________

E. NẾU KẾT QUẢ LÀ DỪNG
   ☐ Đã báo 8 nhóm  ☐ Đã xoá ảnh Drive  ☐ Đã viết post-mortem 1 trang
   ☐ Đã giữ domain thêm 12 tháng   ☐ Không khởi động dự án mới trong 2 tuần
```

**Luật của mục D:** nếu không điền được ba điều mình đã sai thì chưa đọc dữ liệu, mới chỉ đang tìm trong dữ liệu thứ mình đã tin từ trước.

### 2.4. Exit survey — 4 câu, gửi vào nhóm, không gửi riêng

1. `Nếu mai không có ai dán card nữa, tụi mày có tự chốt sổ không?` (có / không / không biết)
2. `Chỗ nào phiền nhất?` (mở)
3. `Có lúc nào mày MUỐN nộp mà không nộp được không? Vì sao?` (mở — đây là câu đo ma sát công cụ, tách khỏi ma sát động lực)
4. `Nếu có app làm đúng việc này, mày trả bao nhiêu/tháng?` (0đ / 10k / 20k / 50k — **T2 của `10`**, chỉ ghi nhận, **không bán gì**)

**Cấm:** hỏi "tụi mày thấy hay không", hỏi trong 15/09 và 18/09, và hỏi riêng từng người trước khi hỏi trong nhóm (câu trả lời riêng lịch sự hơn câu trả lời trước mặt bạn bè — và câu trước mặt bạn bè mới là câu đúng cho sản phẩm này).

### 2.5. Tin nhắn đóng Bước 0 — nguyên văn, gửi vào cả 8 nhóm

> `Cảm ơn tụi mày 14 ngày vừa rồi. Từ tối nay tao không dán card nữa.`
> `Ảnh mọi người gửi qua form tao xoá hết trong hôm nay, không giữ lại gì.`
> `Sổ này tụi mày muốn tự chốt tiếp thì cứ tự chốt — không cần tao.`
> `Nếu tao làm được cái app đó thì tháng 12 tao rủ lại. Không hứa.`

**Ba luật của tin nhắn này:**
- **Không hứa ngày ra mắt.** Beta 02/12 là kế hoạch nội bộ, không phải cam kết với người thật.
- **Không rủ ai giữ nhịp tiếp để "giữ cohort".** Sổ nào tự sống là dữ liệu thật; sổ nào sống vì founder xin thì là dữ liệu hỏng.
- **Nói đúng việc xoá ảnh, và làm đúng trong ngày.** Đây là lần đầu tiên người dùng thật thấy sản phẩm này giữ lời về dữ liệu — hoặc không.

### 2.6. Xử lý dữ liệu Bước 0 — bắt buộc trong ngày 22/09

| Thứ | Nằm ở đâu | Xử lý | Hạn |
|---|---|---|---|
| **Ảnh gốc của ~32 người** | Google Drive `buoc0/` | **XOÁ CỨNG**, kể cả thùng rác Drive (Drive giữ 30 ngày — phải xoá vĩnh viễn thủ công) | **22/09/2026** |
| **Google Form responses** (có ảnh nhúng) | Form + Drive | Xoá toàn bộ response, xoá cả 8 form | 22/09/2026 |
| **Sheet `raw`** (có tên thật ở cột người) | Google Sheet | **Pseudonymise** → `P1…P8`/sổ, xoá cột tên thật, rồi mới đóng băng | 22/09/2026 |
| **Sheet `daily` + `obs`** | Google Sheet | Giữ (đã pseudonymised từ đầu). Đây là bằng chứng của quyết định | Giữ tới 31/03/2027, xoá sau kill gate |
| **112 shortlink** | Short.io | Giữ số click (đã ẩn danh), **xoá link** để không ai bấm nhầm sau này | 22/09/2026 |
| **Ảnh trong 8 nhóm Zalo** | Máy của người dùng | **Không đụng tới** — đó là tin nhắn của họ trong nhóm của họ | — |

⚠️ **Đây là hoạt động xử lý dữ liệu cá nhân thật** (`_audit-report.md` THIẾU: *"kho ảnh trên Drive… không có văn bản đồng ý, không có thời hạn lưu, không có kế hoạch xoá"*). Script S9 ở ngày 08/09 đã hứa đúng ba điều: **chỉ dùng cho thí nghiệm này · xoá hết ngày 22/09 · ai muốn rút thì nhắn một câu**. Ngày 22/09 là ngày phải giữ lời.

### 2.7. 🔶 KỊCH BẢN "BƯỚC 0 CHO KẾT QUẢ XÁM" — giao thức đầy đủ

> **Lỗ hổng được lấp ở đây:** `07` CỔNG #1 có một dòng cho vùng xám (*"cohort mới 14 ngày, cấm thêm feature"*) và không tài liệu nào tính chi phí lịch của việc chạy lại, không ai nói được phép xám mấy lần, và không ai nói xám thì **đổi gì**.

**Định nghĩa vùng xám (không mở rộng):** `0,35 ≤ q_c_roster < 0,45` **HOẶC** `click-shortlink` trong khoảng **40–60%**. Mọi thứ khác không phải vùng xám.

**a) Chi phí lịch của một lần chạy lại — con số quyết định**

| | Không chạy lại | Chạy lại 1 lần |
|---|---|---|
| Ngày bắt đầu code | 23/09/2026 | **08/10/2026** (Bước 0 lần 2: 23/09→06/10; đọc số 07/10) |
| Cửa sổ tới feature freeze 29/11 | 67 ngày = **9,57 tuần** | 52 ngày = **7,43 tuần** |
| Ở 13 giờ code/tuần (A82) | 124,4 giờ = **3,11 pw** | 96,6 giờ = **2,41 pw** |
| Khoảng cách với ước lượng trung thực **4,58 pw** (A85) | thiếu **1,47 pw** | thiếu **2,17 pw** |
| Khoảng cách với trần MVP-0 **3,5 pw** (A84) | thiếu 0,39 pw | thiếu **1,09 pw** |

⇒ **Một lần chạy lại tiêu 0,70 pw năng lực build** (15 ngày lịch = 2,14 tuần × 13 giờ = **27,9 giờ**) **và biến D-01 từ "cắt 1,08 pw" thành "cắt ≥1,78 pw".** Con số này phải nằm trên bàn **trước** khi chọn chạy lại, không phải sau.

**b) Chạy lại thì ĐỔI gì — đúng một biến, không hơn**

Chạy lại với **cùng thiết kế** chỉ mua thêm nhiễu. Chọn **đúng một** biến để đổi, ghi rõ vào văn bản 22/09:

| Biến đổi | Khi nào chọn | Đo được gì thêm | Cấm kèm theo |
|---|---|---|---|
| **Đảo người tuyển** (8 sổ mới, không quen founder trực tiếp) | `q_c` xám **và** ≥6/8 sổ vòng 1 là bạn thân founder | Tách vốn xã hội của founder khỏi tín hiệu sản phẩm | Không đổi script, không đổi card |
| **Bỏ đường thoát hiểm Google** (bắt buộc qua Form) | ≥30% người vòng 1 dùng đường thoát hiểm (§1.5 mục 2) | `q_c` thật khi ma sát công cụ không được miễn | Không đổi người |
| **Kéo cửa sổ im lặng lên 4 ngày** (ngày 8, 10, 12, 14) | `q_c` xám **và** cỡ mẫu 2 ngày là lý do chính của độ rộng | 4 điểm dữ liệu/sổ thay vì 2 | Không đổi người, không đổi công cụ |

⚠️ **Cấm tuyệt đối trong lần chạy lại:** thêm tính năng, thêm nhắc nhở, thêm quà, founder tự dán card ngày 8–14, hoặc "chăm sóc" sổ đang tụt. Luật **P8** (vùng xám không được sửa bằng feature) áp cho Bước 0 y như áp cho beta.

**c) Trần số lần — hai lần xám là câu trả lời**

- **Lần xám thứ 1** → được chạy lại **đúng một lần**, 14 ngày, đổi đúng một biến.
- **Lần xám thứ 2** → **đọc là XẤU**, không phải "chưa may mắn". Chuyển sang nhánh **BỎ KÈO** nếu `q_c(B) > q_c(A)`, ngược lại **DỪNG**.
- **Không có lần thứ 3.** Điều này phải viết vào ADR-000 hôm nay, không phải quyết vào ngày 07/10 khi đang thất vọng.

**d) Nếu xám nhưng lịch không cho chạy lại**

Có một nhánh không tài liệu nào viết: xám **và** founder đã chọn D-02 = **15 giờ/tuần**. Khi đó 3,5 pw = 14,4 tuần lịch (A80–A82 với 9,75 giờ code/tuần), beta **không thể** chạy 02/12 kể cả khi không chạy lại. Trong nhánh này:

> **Không được chạy lại.** Chọn thẳng một trong hai: (i) **DỪNG** và tiết kiệm 4,58 pw = 183 giờ; hoặc (ii) **cắt MVP-0 xuống ≤2,4 pw** (bỏ trang public, bỏ preset kèo, bỏ biến thể card, gộp màn 5 thành overlay **vẫn giữ đủ Báo cáo/Chặn/Xoá ảnh** — `05` §8.4) và giữ beta 02/12. Chạy lại Bước 0 trong nhánh này là cách chắc chắn nhất để tiêu hết cửa sổ lịch rồi không có gì để beta.

---

## 3. BETA — MỘT TỐI CỦA FOUNDER TỪ 02/12/2026

Sau khi có phần mềm, tối của founder **phải ngắn hơn Bước 0 một bậc**, nếu không thì phần mềm không làm được việc mà nó được xây để làm.

### 3.1. Checklist tối beta — 6 phút, 21:00

```
┌──────────────────────────────────────────────────────────────┐
│  BETA · TỐI ___ /___ /2026        SỐ SỔ SỐNG: ____ / trần 35 │
├──────────────────────────────────────────────────────────────┤
│  21:00  [ ] Mở dashboard SQL (6 truy vấn chạy tay, 0,10 pw)  │
│         [ ] Có report mới không?  → nếu CÓ, sang §6 ca 1     │
│         [ ] Có sổ nào 0 tấm 3 ngày liên tiếp? → GHI, KHÔNG   │
│              NHẮN (§7)                                       │
│  21:03  [ ] Nhìn 3 số: q_c_roster hôm qua · số sổ active ·   │
│              số card render lỗi                              │
│  21:05  [ ] Có lỗi 5xx nào trong 24h không? → §6 ca 5        │
│  21:06  ĐÓNG MÁY.                                            │
├──────────────────────────────────────────────────────────────┤
│  KHÔNG LÀM TRONG TỐI BETA:                                   │
│  · Không nhắn cho sổ đang tụt.  · Không sửa code.            │
│  · Không thêm sổ mới ngoài lịch tuyển.                       │
│  · Không đọc trung bình 7 ngày mỗi tối (đọc Chủ nhật).       │
└──────────────────────────────────────────────────────────────┘
```

**Ngân sách:** 6 phút/tối × 7 = 42 phút/tuần. Cộng với đọc số Chủ nhật (20 phút) và hành chính (§5) ⇒ **≈1,7 giờ/tuần ở 12 sổ**, **≈4,2 giờ/tuần ở 30 sổ**, **≈4,9 giờ/tuần ở 35 sổ** (A92: 8,4 phút/sổ/tuần `[ước lượng]`), trên trần **10 giờ/tuần** cho toàn bộ ops.

### 3.2. Ba việc tự động phải tự chạy — founder chỉ kiểm tra, không làm

| Job | Giờ (UTC → ICT) | Kiểm tra sáng hôm sau bằng cách nào | Hỏng thì sang |
|---|---|---|---|
| `rollover` | `5 21 * * *` → **04:05 ICT** | Có đúng 1 dòng `book_day` cho mỗi sổ active của ngày hôm qua | §6 ca 4 |
| `orig_ttl_audit` | `10 21 * * *` → **04:10 ICT** | Không còn ảnh gốc nào quá **72 giờ** trong `orig/` | §6 ca 6 |
| Job thứ 3 (đối soát/dọn) | trong khoảng 04:05–04:30 ICT | Log không có exception | §6 ca 5 |

⚠️ **Không có job nào chạy lúc 21:00.** Job `mo_chot_so` 21:00 **đã bị cắt** (A04, −0,10 pw); cờ "sẵn sàng chốt" **suy ra từ giờ server**, không phải từ một cron. Nếu thấy một cron 21:00 trong repo thì đó là lỗi, không phải tính năng.

---

## 4. SÁNG CHỦ NHẬT — 20 PHÚT, ĐỌC SỐ

| Phút | Việc | Số phải ghi lại |
|---|---|---|
| 0–5 | Chạy 6 truy vấn SQL, chép kết quả vào Sheet theo dõi | `q_c_roster` · `q_x_roster` · số sổ `active`/`dormant`/`dead` · số sổ mới không do founder tuyển (**M2**) |
| 5–10 | Đọc **phân bố**, không đọc trung bình: trong các ngày hụt, bao nhiêu ngày là "chỉ 1 người có mặt" | Nếu >50% ngày hụt là ca 1-người, đó là tín hiệu mở mục 17 v2 §6 (cơ chế "gánh", +0,2 pw) — **chỉ khi H1 đã đạt** |
| 10–15 | Đối chiếu **hai counter pháp lý** (§5) | `monthly_visits` · `monthly_active_persons` |
| 15–20 | Ghi **một câu** vào nhật ký: tuần này số nào bất ngờ nhất | 1 câu, không phải 1 đoạn |

**Luật đọc số:** không được đổi bất cứ thứ gì trong sản phẩm dựa trên một tuần dữ liệu. Cổng duy nhất được phép đổi hướng là các cổng có ngày (`07` §4). Giữa hai cổng, số chỉ để **nhìn**.

⚠️ **Bus factor của việc ĐỌC số cũng bằng 1.** `06` CH-8 đòi một cái tên: **người thứ hai được xem dashboard mỗi Chủ nhật**, hạn có tên **trước beta 02/12/2026**. Không có nhân chứng thì kill gate 31/03/2027 sẽ được đọc bởi đúng người có động cơ đọc sai nó.

---

## 5. NGÀY 1 MỖI THÁNG — 30 PHÚT HÀNH CHÍNH

| Việc | Ngưỡng | Vượt thì làm gì |
|---|---|---|
| **Hoá đơn hạ tầng tháng trước** | Ngân sách **$28–37/tháng** ở beta (A74). **Đèn báo động $60** (A75). DoD ≤**$40** (A76) | >$60 → §6 ca 7 |
| **`monthly_visits`** (phiên mới sau 30 phút không hoạt động, **mọi route kể cả trang public**) | 🟡 **6.000** (≈60 sổ) · 🔴 **8.500** (≈85 sổ) · ngưỡng luật **10.000** (≈100 sổ) | §6 ca 8 |
| **`monthly_active_persons`** (person khác nhau có ≥1 `proof` trong 30 ngày) | 🟡 **600** · 🔴 **850** · ngưỡng luật **1.000** | §6 ca 8 |
| **Số sổ sống cùng lúc** | Trần **vận hành 35 sổ** (A92) ≠ trần **hành chính/pháp lý 60 sổ** (A93) | >35 ba tuần liên tiếp → **giảm số sổ**, không giảm giấc ngủ. Chạm 60 → **dừng nhận sổ mới ngay trong ngày** |
| **Giờ/tuần thật của founder** | Kill gate **>15 giờ/tuần** (A64) — chờ D-02 chốt | Ghi số thật, không ghi số muốn |
| **Số report đã xử lý / còn treo** | SLA **48h** (người dùng) · **24h**, khẩn cấp **6h** (cơ quan nhà nước) — A59 | Còn treo quá SLA → §6 ca 1/ca 2 |

⚠️ **Quan hệ giữa hai counter là HOẶC, không phải VÀ.** Chạm **một** trong hai là chạm ngưỡng. Ở A=4,0 và 25 lượt/người/tháng (A72 `[ước lượng, ảnh hưởng rất cao]`), **nhánh `monthly_visits` bind trước ~2,5 lần** — nghĩa là đèn vàng sẽ sáng ở nhánh lượt truy cập trước khi nhánh người dùng kịp sáng.

⚠️ **A72 chưa từng được đo.** Nếu con số thật là 50 lượt/người/tháng thì trần pháp lý rơi xuống ~30 sổ — **thấp hơn cả trần vận hành 35 sổ**, tức hai trần đảo thứ tự. **Việc đo:** từ tháng đầu beta, đối chiếu `monthly_visits ÷ monthly_active_persons` và ghi số thật vào ô này. Đây là phép hiệu chỉnh rẻ nhất của toàn hồ sơ và không ai đang sở hữu nó — **runbook này nhận sở hữu, hạn đọc số đầu tiên 01/01/2027**.

---

## 6. XỬ LÝ SỰ CỐ — 12 CA, TRA THEO DẤU HIỆU

**Luật chung:** mỗi ca có **một hành động trong 15 phút đầu** và **một hành động trong 24 giờ**. Không có ca nào yêu cầu viết code trong đêm.

### Ca 1 — Có report nội dung (người dùng báo cáo một tấm ảnh)
- **15 phút:** kiểm tra **auto-hide đã chạy chưa**. Cơ chế chốt (A60/QĐ-16): ảnh bị ẩn **TOÀN CỤC ngay ở report ĐẦU TIÊN**, không phải "ẩn chỉ với người báo cáo" — ẩn-chỉ-với-người-báo-cáo **không thoả nghĩa vụ**. Nếu chưa ẩn → ẩn tay bằng SQL.
- **24 giờ:** xem ảnh, quyết giữ/xoá. **48 giờ:** trả lời người báo cáo (SLA A59).
- Nếu report **sai** → khôi phục ảnh, nhắn một câu cho chủ ảnh: `Ảnh của bạn bị báo cáo nhầm, đã khôi phục.` Không nêu tên người báo cáo.
- Ghi vào `audit_log` (A49): thời điểm, ai report, hành động, lý do.
- **Tải dự kiến:** 0,1–0,5% số tấm `[cần kiểm chứng, 08 §6.4]` ⇒ ở 30 sổ × 4,0 người × 30 ngày = 3.600 tấm/tháng ⇒ **4–18 vụ/tháng ≈ 20–90 phút/tháng**.

### Ca 2 — Yêu cầu từ cơ quan nhà nước
- **6 giờ** nếu được đánh dấu khẩn cấp · **24 giờ** cho yêu cầu thường (A59, vế luật định — **khác** SLA 48h của người dùng).
- **15 phút:** xác minh văn bản là thật (số công văn, cơ quan phát hành). Không hành động theo tin nhắn hay điện thoại.
- **Không tự trả lời nội dung pháp lý.** Xác nhận đã nhận, nêu thời hạn, rồi hỏi luật sư. Đây là lý do gói **7 câu / 5–15 triệu** (A65/A66) phải được gửi **trước** khi có sổ thật.
- **Kể cả khi bật `service_paused`** (Tết, nghỉ), vế 24h/6h **không được miễn** — phải có một đường liên lạc sống 365 ngày.

### Ca 3 — Người dùng đòi xoá dữ liệu / đòi bản sao dữ liệu
- Xoá: nút tự phục vụ có sẵn (DoD 7.4). Không cần founder.
- Bản sao (export): **§9**, SLA **10 ngày** (Luật 91/2025), làm tay.
- ⚠️ **Không được bán quyền này.** Gói P1 (99k/sổ/năm) **đã bị xoá** khỏi `10` §3.1 theo D-06.

### Ca 4 — `rollover` không chạy lúc 04:05 ICT
- **Dấu hiệu:** sáng dậy không có `book_day` của ngày hôm trước; UI hiện sai "Ngày thứ N".
- **15 phút:** chạy tay job rollover với `book_date` = ngày hôm trước. Job phải **idempotent** theo khoá `unique(book_id, book_date, kind)` — chạy lại không sinh dòng thứ hai.
- **Cấm:** sửa dữ liệu `book_day` bằng tay để "cho khớp". Chuỗi và số ngày là bất biến của sản phẩm (P4); vá tay một lần là hỏng vĩnh viễn.
- **24 giờ:** tìm nguyên nhân. Nếu là giới hạn cron của nền tảng (Vercel Hobby) `[cần kiểm chứng]` thì đây là ca phải đổi nền tảng cron, không phải đổi giờ chốt sổ.
- **Biên chấp nhận:** 120 giây (A03). Chạy lúc 04:07 là bình thường; chạy lúc 05:30 là sự cố.

### Ca 5 — Trang không mở được / lỗi 5xx / Supabase hoặc R2 down
- **15 phút:** xác định tầng hỏng (web / DB / storage). Nếu **storage** hỏng thì card không render nhưng nộp ảnh vẫn phải chạy — kiểm tra đúng thứ tự đó.
- **Thông báo:** một tin nhắn vào các nhóm beta, nguyên văn: `Sổ đang lỗi, tao đang sửa. Ảnh của tụi mày không mất.` Không im lặng, không giải thích kỹ thuật.
- **Rollback < 10 phút** là yêu cầu của DoD — nếu sự cố đến từ deploy vừa rồi thì rollback **trước**, tìm nguyên nhân sau.
- **Không sửa code sau 22:00.** Sản phẩm này có đúng một thời điểm quan trọng trong ngày (21:00) và nó đã trôi qua.

### Ca 6 — Ảnh gốc quá 72 giờ vẫn còn trong `orig/`
- **Dấu hiệu:** job `orig_ttl_audit` (04:10) báo còn key quá hạn.
- **15 phút:** xoá tay các key quá hạn. **TTL ảnh gốc = 72 giờ** (A36) — đây là lời hứa trong Chính sách, không phải tuỳ chọn tối ưu chi phí.
- ⚠️ **Thumbnail thì ngược lại: KHÔNG XOÁ** (A38). Sổ ngủ 180 ngày ⇒ chuyển **R2 Infrequent Access**, không xoá. Chỉ xoá khi sổ `archived` + báo trước 30 ngày + **đã có đường tải về**. Nhầm hai luật này là xoá đúng thứ sản phẩm hứa giữ.

### Ca 7 — Hoá đơn hạ tầng vượt $60/tháng
- **15 phút:** xem thành phần. Ở quy mô beta, thủ phạm gần như chắc chắn là **phí thao tác R2 (Class A/B)**, không phải dung lượng — ở 100k DAU phí thao tác chiếm **~77%** hoá đơn R2.
- **24 giờ:** nếu do lưu lượng thật (nhiều sổ hơn dự kiến) → đó là tin tốt nhưng phải đối chiếu ngay hai counter pháp lý (§5). Nếu do lỗi (vòng lặp render card, job chạy lặp) → sửa, và ghi vào `audit_log`.
- **Không bao giờ** giải quyết bằng cách xoá thumbnail của người dùng.

### Ca 8 — Chạm đèn vàng (🟡 6.000 lượt hoặc 600 người/tháng)
- **Trong ngày:** bắt đầu **soạn hồ sơ Giấy phép MXH** (A57): cần **pháp nhân VN** + **người chịu trách nhiệm nội dung quốc tịch VN**. Lead time là hàng tháng — đây là lý do đèn vàng đặt ở 60% ngưỡng luật chứ không phải ở 95%.
- **Trong tuần:** đối chiếu trần vận hành 35 sổ; nếu đã vượt thì giảm số sổ **trước**.
- Ghi ngày chạm đèn vàng vào ADR-000 — nó khởi động một đồng hồ pháp lý, không phải một cảnh báo cần ghi nhớ.

### Ca 9 — Chạm đèn đỏ (🔴 8.500 lượt hoặc 850 người/tháng)
- **NGAY TRONG NGÀY:** bật `remote_config['signup_paused'] = true` ⇒ **dừng nhận sổ mới** (A58). UI hiện trạng thái `tạm khoá mở sổ mới`, không hiện lỗi.
- Sổ đang chạy **không bị đụng tới**. Dừng nhận sổ mới ≠ dừng dịch vụ.
- **Cân nhắc phone OTP** nếu luật sư đã xác nhận Điều 27 khoản 3 áp cho tier thông báo (+0,4 pw + ~3,6 triệu SMS ở 320 người).
- **Không nới trần bằng cách hỏi lại.** 60 sổ là trần không được chạm, không phải mục tiêu (S22).

### Ca 10 — Zalo cảnh báo domain, hoặc link bị chặn
- **15 phút:** thử trên **≥2 máy khác**, ≥2 tài khoản Zalo khác. Một máy báo không đủ kết luận.
- **Nếu xác nhận:** mua **domain thứ hai ngay trong tuần** (A68, **770.000đ** — khoản này **không** nằm trong ngân sách MVP-0, phải ghi vào sổ tiền mặt). Điều kiện mở khoản chi này đã được viết sẵn từ 04/09; không cần họp lại.
- **Song song:** in **mã 6 ký tự to hơn** trên card (A45) — nó là đường vào **không phụ thuộc domain**. Nhớ giới hạn: mã 6 ký tự chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi**.

### Ca 11 — `share_token` hoặc link card lọt ra ngoài nhóm
- **Bối cảnh:** trang public là bề mặt **duy nhất** của sản phẩm hướng ra người lạ, và nó chứa ảnh đời thường của người từ 16 tuổi.
- **Hàng rào đã có:** `share_token` **TTL 7 ngày**, sinh **độc lập** với `book.code`, slug **không chứa** `code6`, `noindex` + `robots.txt` (A42–A44). Card PNG TTL **90 ngày** rồi **thay bằng ảnh tĩnh trung tính, không 404** (A40).
- **15 phút:** thu hồi token của sổ đó (sinh token mới ⇒ link cũ chết ngay), báo cho sổ bằng một câu.
- **24 giờ:** nếu ảnh đã bị chụp lại và phát tán ngoài tầm kiểm soát → đây là ca **xoá ảnh theo yêu cầu chủ ảnh** (ca 3) + ghi `audit_log`. Sản phẩm không có công cụ gỡ nội dung khỏi nơi khác và **không được hứa là có**.

### Ca 12 — Nội dung nghiêm trọng (ảnh khoả thân, nội dung liên quan trẻ em, đe doạ)
- **Ẩn ngay, không chờ SLA.** Auto-hide toàn cục là bước 1; bước 2 là xoá cứng media + thumbnail.
- **Không tự điều tra, không nhắn hỏi người trong ảnh.**
- Nếu có dấu hiệu liên quan **người dưới 16 tuổi** → đây là ca duy nhất trong runbook được phép **liên hệ luật sư ngoài lịch**, và là ca duy nhất được phép **khoá sổ** ngay lập tức mà không báo trước.
- Ghi `audit_log` đầy đủ: thời điểm, hành động, người thực hiện. `audit_log` giữ **≥2 năm** (`05` GIAI ĐOẠN 2) — đây chính là ca mà nó tồn tại để phục vụ.
- ⚠️ **Cổng tuổi:** sản phẩm chỉ lưu `is_16_plus` + `age_gate_at` (A47/QĐ-20), **không lưu năm sinh, không lưu ngày sinh**. Nghĩa là runbook **không thể** tra tuổi thật của ai. Đây là đánh đổi có ý thức (ít dữ liệu hơn = ít rủi ro hơn), và hệ quả là ca này phải xử lý theo **nội dung**, không theo **hồ sơ**.

---

## 7. SỔ CHẾT — QUY TRÌNH VẬN HÀNH

> **Lỗ hổng được lấp ở đây:** `08` §7 mô tả rất kỹ **UI** của sổ đang tàn, `04` §2.3 có máy trạng thái, nhưng không tài liệu nào nói **founder phải làm gì** khi một sổ chết — trong khi ở P(nhóm 5 người sống 30 ngày) ≈ 12,5%, đây là sự kiện **thường xuyên nhất** trong vận hành.

### 7.1. Máy trạng thái và hành động tương ứng

| `book.status` | Điều kiện vào | UI đổi gì | **Founder làm gì** | Dữ liệu |
|---|---|---|---|---|
| `active` | mặc định | wireframe §4 của `08` | **Không gì** | đầy đủ |
| `dormant` | **7 ngày liên tiếp `A < 3`** | Lưới ảnh lên đầu; nút chính đổi thành `Chốt sổ lại`; câu `Sổ này ngủ từ 12/10. 71 tấm vẫn còn đây.` | **Không gì.** Ghi vào Sheet theo dõi để đếm, không nhắn | đầy đủ |
| `dead` | **21 ngày liên tiếp không tấm nào** | **Cùng layout `dormant`**, không có trạng thái riêng trên UI | **Không gì** | đầy đủ; sau **180 ngày ngủ** ⇒ thumbnail chuyển **R2 Infrequent Access**, **KHÔNG xoá** (A38) |
| `archived` | **mọi thành viên đã rời sổ** | sổ không còn ai truy cập | Báo trước **30 ngày** + **đường tải về phải tồn tại** rồi mới dọn | chỉ khi đủ 2 điều kiện trên |

### 7.2. Năm điều CẤM khi một sổ chết

1. **Không nhắn cho sổ đang tụt.** Không "tụi mày ổn không", không "sổ nhớ tụi mày". Một tin nhắn của founder biến một phép đo tự nhiên thành một phép đo về founder.
2. **Không email/push nhắc lại.** Không có kênh nhắc nào ngoài card trong nhóm — đó là toàn bộ luận điểm của hướng D.
3. **Không hiển thị trạng thái "chết"** cho người dùng. Không màn "Sổ của bạn đã kết thúc", không câu tiếc nuối. Hai con số chỉ-tăng đứng nguyên đó (`Ngày thứ 34 · 71 tấm`) — đó là toàn bộ giá trị của nguyên tắc **P4**.
4. **Không xoá dữ liệu của sổ chết** để tiết kiệm chi phí. Toàn bộ thumbnail của **10.000 sổ** ≈ 200 GB ≈ **$3/tháng**. Chi phí không phải lý do đủ.
5. **Không tính sổ chết vào tử số của bất kỳ chỉ số nào**, và **không loại nó khỏi mẫu số**. Sổ chết là dữ liệu; loại nó khỏi mẫu số là cách gian lận phổ biến nhất trong đo lường retention.

### 7.3. Sổ chết được đọc như thế nào

| Chỉ số | Sổ chết ảnh hưởng thế nào |
|---|---|
| `sổ-D28` (OMTM) | Nằm trong **mẫu số**. Cohort tuần 1–4 beta đóng băng ngày 29/12/2026, đọc **26/01/2027**, **n≥24**, in kèm **KTC 95% ±17 điểm** |
| `B` / `group-D14` | Nằm trong mẫu số 5 sổ nhánh A. Sổ chết ngày 10 vẫn ở mẫu số ngày 14 |
| Trần vận hành 35 sổ | Sổ `dormant`/`dead` **không tính** vào 35 (không tốn phút vận hành) — trần đếm **sổ sống cùng lúc** |
| Trần pháp lý 60 sổ | Đếm theo **counter lượt truy cập/người hoạt động**, không theo số sổ tồn tại. Sổ chết tự rơi khỏi counter sau 30 ngày |

### 7.4. Tái sinh — kênh rẻ nhất, và cách không làm hỏng nó

Sổ `dormant` giữ nguyên mã 6 ký tự, tên sổ, lưới ảnh, hai con số. Bấm `Chốt sổ lại` ⇒ card mang **cả lịch sử cũ**: `Sổ nhà 4 đứa · Ngày thứ 34 · 71 tấm · ngủ 26 ngày`. Chi phí **0 pw** (cùng template, một biến thêm).

- **Việc của founder: đếm, không kích.** Chỉ số cần theo dõi: **tỉ lệ sổ `dormant` được đánh thức trong 60 ngày** `[ước lượng, chưa có dữ liệu]`.
- **Cấm** gửi thông báo "sổ của bạn đang ngủ" — đó là push nhắc nhở đội lốt, và nó phá đúng lập luận không-phải-mạng-xã-hội của `05`.
- ⚠️ **Nhắc lại giới hạn mã 6 ký tự:** chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi** (A45). Một sổ ngủ 26 ngày ⇒ card cũ **quá 7 ngày** ⇒ mã 6 ký tự **không mở được sổ đó**; đường vào duy nhất là link trong card mới. Đây là hệ quả thật của A45 mà chưa tài liệu nào ghi ra, và nó phải nằm trong snapshot test của luồng tái sinh.

---

## 8. NGƯỜI RỜI SỔ — DỮ LIỆU XỬ LÝ RA SAO

> **Lỗ hổng được lấp ở đây:** `08` §6.5 có **UI** của hai nút rời sổ; `04` §2.2/§6.2 có một phần hệ quả dữ liệu; D-04b còn treo. Nhưng **không bảng nào liệt kê đủ mọi thứ gắn với một người** và nói mỗi thứ đi đâu. Bảng dưới đây là bảng đó. Nó **không đặt hằng số mới** — chỗ nào chưa có phán quyết thì ghi rõ là chờ D-04b.

### 8.1. Hai nút, và hệ quả đầy đủ của từng nút

| Thứ gắn với người rời | `Rời sổ` | `Rời sổ và xoá ảnh của tôi` | Nguồn |
|---|---|---|---|
| **Ảnh gốc (`orig/`)** | đã tự xoá sau **72 giờ** rồi — không còn gì để xử lý | như trái | A36 |
| **Thumbnail (~18 KB/tấm)** | **ở lại** trong sổ | **xoá cứng** | `08` §6.5 |
| **Ô trong lưới ảnh** | ở lại | thay bằng **ô trống KHÔNG TÊN** | P2 |
| **`goal_text` (kèo)** | **XOÁ NGAY, không hỏi** | XOÁ NGAY | **A69 — không phải lựa chọn** |
| **Card PNG đã gửi vào Zalo** | **không đụng tới** — nó là tin nhắn trong nhóm của họ; card cũ vẫn hiển thị ảnh cũ tới hết TTL 90 ngày | như trái | A40 |
| **Thông báo cho nhóm** | **KHÔNG CÓ.** Rời sổ im lặng tuyệt đối | **KHÔNG CÓ** | `08` §5.3 câu #12 |
| **`roster_size` (mẫu số `q_c`)** | **KHÔNG co lại.** Roster đóng băng theo cohort; mẫu số không bao giờ nhỏ đi vì có người bỏ cuộc | như trái | A14/A15 |
| **`A` và `A_eff`** | giảm từ ngày hôm sau. `k` giảm theo ⇒ sổ **dễ** tính ngày hơn, không khó hơn | như trái | A06/A07 |
| **Chuỗi của sổ** | **không đứt** vì lý do có người rời | như trái | P4 |
| **Event log** | giữ event **20** `member_left` với trường **`was_removed_by_moderation`** (KHÔNG phải `was_kicked`) | như trái | A52 |
| **`audit_log`** | ghi 1 dòng: thời điểm + loại hành động. **Không ghi nội dung ảnh** | như trái | A49 |
| **Device token / đường quay lại** | mất quyền vào sổ ngay. Muốn quay lại phải được mời lại | như trái | — |
| **Quyền đòi bản sao dữ liệu** | **vẫn còn** — Luật 91/2025 không mất khi rời nhóm. Xử lý theo §9 | vẫn còn, nhưng nội dung bản sao gần như rỗng vì đã xoá | `05` §8.1 mục 7 |
| **Mặc định khi KHÔNG chọn gì** | ⏳ **CHỜ D-04b** (hạn 22/09): (a) giữ ảnh + có checkbox `keep_proofs_on_leave` — schema hiện tại · (b) mặc định xoá. **Khuyến nghị (a).** Vế `goal_text` luôn xoá ngay, **không phải lựa chọn** | | D-04b |

### 8.2. Không có chức năng "kick" — và ba hệ quả phải nói ra

- **Không có vai "chủ sổ"** ở MVP-0 (A61/S17). State `removed` **chỉ** dùng cho ca moderation của founder.
- **Nghi thức kick của digest #20** (biểu quyết đa số + 7 ngày grace + export ZIP) **tan biến**, không "hoãn" — không có kick thì cả ba phần đều không có đối tượng, và không được nằm trong bất kỳ bảng pw nào.
- **Hệ quả phải chấp nhận:** một người khó chịu **ở lại được** trong sổ. Đường thoát của nhóm là **mở sổ mới bằng một mã khác** — chi phí 0, và không tạo ra một sự kiện bị-đuổi có dấu vết. Nếu founder được nhờ "đuổi giùm", câu trả lời chuẩn: `Sản phẩm không có chức năng đuổi ai cả. Tụi mày mở sổ mới thì tao gửi mã.`

### 8.3. Khi CẢ SỔ rỗng (mọi người đã rời)

`book.status = 'archived'`. Ba điều kiện phải đủ **trước** khi dọn dữ liệu, thiếu một là không dọn:

1. Báo trước **30 ngày**.
2. **Đường tải dữ liệu về đã tồn tại** — hôm nay là quy trình tay ở §9, không phải một nút.
3. Không còn ai trong sổ có thể phản đối (theo định nghĩa của `archived`).

⚠️ **Cấm xoá bất kỳ sổ `archived` nào trước khi quy trình §9 đã chạy được ít nhất một lần thật.** Đây là ràng buộc của D-06 và nó là ràng buộc cứng.

---

## 9. EXPORT DỮ LIỆU LÀM TAY — D-06 PHƯƠNG ÁN (a)

> **Quyết định nền:** D-06 chọn **bản làm tay, 0 pw** thay vì nút export tự động (+0,3 pw). Gói **P1 (bán export 99k/sổ/năm) đã bị XOÁ** khỏi `10` §3.1 — **bán một quyền luật định là rủi ro riêng**. Quy trình dưới đây **là** cái mà `05` §8.1 mục 7 và `10` §3.1 trỏ tới. Nếu quy trình này không chạy được thì lời hứa trong ToS là lời hứa suông.

### 9.1. SLA và ngân sách

| | |
|---|---|
| **SLA** | **10 ngày** kể từ khi nhận yêu cầu (Luật 91/2025) |
| **Thời gian thực tế** | 20–30 phút/yêu cầu |
| **Tần suất dự kiến** | ở ≤35 sổ: **<1 yêu cầu/tháng** `[ước lượng]` |
| **Ngưỡng phải build thật** | ≥3 yêu cầu/tháng trong 2 tháng liên tiếp ⇒ mở lại D-06 và chi 0,3 pw |
| **pw** | **0** — đây là lý do phương án (a) thắng |

### 9.2. Quy trình 6 bước

1. **Xác minh người yêu cầu** — họ phải chứng minh quyền truy cập vào chính sổ đó (đọc được mã sổ, hoặc gửi từ thiết bị đang trong sổ). **Không xác minh bằng tên** — sản phẩm không lưu tên thật đủ tin cậy.
2. **Chạy 3 truy vấn SQL** trên `book_id` + `person_id`:
   - `proof` của người đó (thời điểm, `status` XONG/TOANG, `book_date`) → CSV
   - `book_day` của các sổ người đó tham gia (ngày, `present_count`, `roster_size`) → CSV
   - metadata thành viên (`joined_at`, `is_16_plus`, `age_gate_at`) → CSV
3. **Lấy thumbnail** từ R2 theo prefix `thumb/<book>/<date>/<person>/` → thư mục ảnh.
4. **Đóng ZIP** đặt tên `chotso-export-<book>-<person>-<YYYYMMDD>.zip`, kèm một file `DOC.txt` giải thích mỗi cột nghĩa là gì bằng tiếng Việt thường.
5. **Gửi bằng link tải hết hạn 7 ngày**, không gửi file đính kèm.
6. **Ghi `audit_log`**: thời điểm nhận, thời điểm gửi, `book_id`, không ghi nội dung.

### 9.3. Ba thứ KHÔNG nằm trong bản export

| Không xuất | Vì sao |
|---|---|
| **Ảnh gốc** | Đã xoá sau **72 giờ** (A36). Nói thẳng điều này trong `DOC.txt`, không để người dùng tự đoán |
| **Ảnh của người khác** trong cùng sổ | Bản sao dữ liệu là của **chủ thể dữ liệu đó**, không phải của cả nhóm |
| **`goal_text` đã xoá** | Xoá cùng sổ, không giữ sau khi thành viên rời (A69) — không có bản sao nào để xuất |

### 9.4. Mẫu trả lời trong 24 giờ đầu (để không quá SLA vì quên)

> `Tao nhận được yêu cầu lấy dữ liệu của mày rồi. Trong 10 ngày tao gửi một file zip gồm: danh sách các tấm mày đã nộp (ngày + nhãn XONG/TOANG), các ngày sổ có tính, và ảnh thu nhỏ của mày.`
> `Ảnh gốc thì không có — hệ thống xoá ảnh gốc sau 72 giờ, chỉ giữ ảnh thu nhỏ.`
> `Nếu mày muốn xoá luôn thay vì lấy về thì nói, tao làm ngay trong ngày.`

---

## 10. TẾT 2027 — BÀN GIAO VÀ TRỰC

> **Lỗ hổng được lấp ở đây:** *"Không có quy trình bàn giao cho Tết"* — SLA công bố 48h, founder về quê, bus factor = 1, và ba tài liệu cho ba hạn khác nhau.

### 10.1. Hằng số Tết — chốt, không tính lại

| | |
|---|---|
| **Mùng 1 Tết Đinh Mùi** | **06/02/2027** (thứ Bảy). ⚠️ **KHÔNG phải 17/02** — đó là Tết Bính Ngọ 2026, hai tài liệu từng chép sai |
| **Cửa sổ đóng băng** | `book_date` **03/02 → 12/02/2027** = **10 ngày sổ** (tức 03/02 04:00 ICT → 13/02 03:59 ICT) |
| **Băng tan** | `book_date` **13/02/2027** = **mùng 8** |
| **Câu trên card trong Tết** | `Sổ nghỉ Tết. Mùng 8 (13/02) mở lại.` |
| **Lịch card 1/3 ngày trong Tết** | 03/02 · 06/02 (mùng 1) · 09/02 (mùng 4) · 12/02 (mùng 7) |
| **Chỉ số Tết đọc ngày nào** | **13–15/02/2027** (3 ngày sau khi băng tan) |
| **Ở MVP-0 chỉ có** | **một hằng số** `remote_config['freeze.dates']` (**0 pw**). 6–7 thành phần hành vi còn lại: **T13–T18, hạn 25/01/2027** |

### 10.2. D-07 — người trực SLA: hai lựa chọn, một hạn

| | **(a) Người thứ hai** — KHUYẾN NGHỊ | **(b) `service_paused`** |
|---|---|---|
| Làm gì | Một người bạn có **login Supabase CHỈ-ĐỌC**, bộ **câu trả lời mẫu**, số điện thoại founder | Bật `remote_config['service_paused']` + **thông báo trước ≥14 ngày** (chậm nhất **20/01/2027**) |
| Giữ được gì | Giữ được **chỉ số Tết** — phép thử tự nhiên tốt nhất cả năm | Mất chỉ số Tết hoàn toàn |
| Nghĩa vụ pháp lý | Phải **khai người này là bên xử lý dữ liệu** trong Chính sách | Vẫn **KHÔNG miễn** được SLA **24h/6h** với cơ quan nhà nước |
| Chi phí | 1 giờ đào tạo + 1 trang câu trả lời mẫu | 0 pw, nhưng mất dữ liệu và mất niềm tin |

**Hạn quyết:** **15/12/2026** (con số thận trọng nhất trong ba tài liệu). **Hạn chót tuyệt đối để có một cái tên: 20/01/2027** — vì nhánh (b) đòi thông báo trước 14 ngày. Quá **20/01/2027** không có tên ⇒ **(b) tự động có hiệu lực** và thông báo phải phát trong ngày.

⚠️ **Ở CẢ HAI nhánh, phải có một đường liên lạc sống 365 ngày** cho vế 24h/6h của cơ quan nhà nước. `service_paused` dừng sản phẩm, **không dừng nghĩa vụ**.

### 10.3. Gói bàn giao — một trang, đưa cho người thứ hai trước 25/01/2027

```
NGƯỜI TRỰC: ______________  ĐT: ______________
TRỰC TỪ 03/02 ĐẾN 13/02/2027

BẠN ĐƯỢC LÀM (3 việc, không hơn):
1. Ẩn một tấm ảnh bị báo cáo   → mở dashboard, bấm Ẩn. KHÔNG cần hỏi ai.
2. Trả lời khiếu nại           → dùng 5 câu mẫu ở mặt sau. Không tự viết câu mới.
3. Gọi cho founder             → khi gặp bất kỳ thứ gì ở danh sách ĐỎ.

DANH SÁCH ĐỎ — GỌI NGAY, BẤT KỂ GIỜ:
· Văn bản từ cơ quan nhà nước (SLA 6 giờ nếu khẩn cấp)
· Ảnh khoả thân / nội dung liên quan trẻ em / đe doạ
· Trang không mở được quá 2 giờ
· Có người nói họ dưới 16 tuổi

BẠN KHÔNG ĐƯỢC LÀM:
· Không xoá dữ liệu của ai.  · Không sửa code, không deploy.
· Không nhắn vào nhóm của người dùng.  · Không hứa thời hạn gì.

MẬT KHẨU: bạn KHÔNG có mật khẩu nào. Chỉ có 1 login CHỈ-ĐỌC.
```

**Mặt sau — 5 câu trả lời mẫu:** (1) nhận khiếu nại · (2) ảnh đã bị ẩn, founder xem lại trong 48h · (3) muốn xoá dữ liệu — hướng dẫn tự bấm nút · (4) muốn lấy bản sao dữ liệu — nhận yêu cầu, SLA 10 ngày, founder xử lý sau Tết · (5) hỏi bao giờ có tính năng X — `Tao không biết, đợi founder trả lời.`

### 10.4. Checklist trước khi rời nhà

| Việc | Hạn | ☐ |
|---|---|---|
| `remote_config['freeze.dates']` đã đặt đúng 03/02→12/02/2027 | 25/01/2027 | ☐ |
| Người trực đã đăng nhập thử được login chỉ-đọc | 30/01/2027 | ☐ |
| Đã chạy thử một ca ẩn ảnh cùng người trực | 30/01/2027 | ☐ |
| Đã khai người trực là bên xử lý dữ liệu trong Chính sách (nếu nhánh a) | 30/01/2027 | ☐ |
| Đường liên lạc pháp lý (email + số ĐT) vẫn sống và có người đọc | 30/01/2027 | ☐ |
| Đã tắt mọi việc tuyển sổ mới trong cửa sổ Tết | 02/02/2027 | ☐ |
| Sổ tay này đã in ra giấy và đưa tận tay | 02/02/2027 | ☐ |

---

## 11. DỪNG DỰ ÁN TỬ TẾ — CHECKLIST 14 NGÀY

> Áp dụng cho: nhánh (c) của `07` §8 · kill gate **31/03/2027** (`>15 giờ/tuần` **VÀ** `sổ-D28 < 25%` — vế "doanh thu = 0" **đã bị bỏ**, A64) · hoặc quyết định dừng bất kỳ lúc nào.
>
> **Nghĩa vụ nền:** ToS (`05` §8.2 điều 6) hứa **báo trước ≥14 ngày** và **cho tải ảnh về**. Lời hứa đó chỉ giữ được nếu §9 đã chạy được thật.

| Ngày | Việc | Không được bỏ qua vì |
|---|---|---|
| **D0** | Viết quyết định dừng, có số, có ngày, ký. Lưu ADR-000 | Dừng không có văn bản sẽ biến thành "tạm nghỉ" rồi thành "bỏ dở" |
| **D0** | **Dừng nhận sổ mới**: `remote_config['signup_paused'] = true` | Nhận thêm sổ trong lúc sắp đóng là gây hại cho người thật |
| **D0** | **KHÔNG deploy gì nữa.** Feature freeze tuyệt đối | — |
| **D+1** | **Thông báo trong sản phẩm + trong các nhóm**: nêu **ngày tắt chính xác** (= D+14) và **cách tải ảnh về** | Nghĩa vụ ToS. Thiếu ngày chính xác thì thông báo không có giá trị |
| **D+1 → D+14** | **Mở cửa export**: nhận yêu cầu qua §9, SLA rút xuống **3 ngày** trong giai đoạn này | 10 ngày dài hơn cửa sổ 14 ngày ⇒ vô nghĩa |
| **D+3** | Đăng **post-mortem 2 trang công khai**: 240 giờ, **≈9,4 triệu tiền mặt ở ca thấp nhất**, ba giả thuyết, số thật | Đây là tài sản duy nhất còn lại và nó có giá trị thật |
| **D+7** | Nhắc lần 2 trong các nhóm: `Còn 7 ngày.` | Một thông báo là thông báo cho mình, hai là thông báo cho họ |
| **D+13** | Chốt danh sách yêu cầu export còn treo, xử lý hết | Không được tắt khi còn yêu cầu chưa trả lời |
| **D+14** | **Tắt dịch vụ.** Trang thay bằng một trang tĩnh: sản phẩm đã dừng ngày ___, dữ liệu đã xoá ngày ___, email liên hệ | Trang 404 là cách tệ nhất để kết thúc |
| **D+14** | **Xoá dữ liệu**: `proof`, `book_day`, `person`, media, thumbnail. **Giữ `audit_log`** | `audit_log` giữ **≥2 năm** — nghĩa vụ độc lập với việc dừng dịch vụ |
| **D+14** | Xử lý **ảnh Bước 0 còn sót** trên Drive (đáng lẽ đã xoá 22/09 — kiểm lại) | Đây là chỗ dữ liệu hay bị bỏ quên nhất |
| **D+14** | Giữ **`chotso.vn` thêm 12 tháng** (**770.000đ**) | Rẻ hơn mọi lựa chọn khác nếu quay lại; và giữ email liên hệ sống |
| **D+14 → D+30** | **Một người vẫn đọc email khiếu nại**, kể cả sau khi tắt | Nghĩa vụ trả lời không tắt cùng với server |
| **D+14 → D+28** | **Không khởi động dự án mới trong 2 tuần** | Quy tắc chống việc chạy trốn bằng cách khởi động lại |

⚠️ **Ai trả lời khiếu nại sau khi dừng** — đây là câu mà `_audit-report.md` nêu và chưa ai trả lời. **Chốt ở runbook này:** founder giữ **một địa chỉ email sống 12 tháng** sau ngày tắt (cùng thời hạn với domain), kiểm **1 lần/tuần**. Ghi địa chỉ đó vào trang tĩnh và vào Chính sách. Chi phí: 0đ, ~5 phút/tuần.

---

## 12. BÍ MẬT, TRUY CẬP, BUS FACTOR

### 12.1. Danh sách phải có người thứ hai biết — hạn **23/09/2026**, trước dòng code đầu

| Thứ | Ai giữ hôm nay | Người thứ hai | Hạn |
|---|---|---|---|
| Tài khoản domain `chotso.vn` | founder | ☐ ________ | 23/09/2026 |
| Supabase (project owner) | founder | ☐ ________ (login **chỉ-đọc** riêng cho vận hành) | 23/09/2026 |
| Cloudflare R2 | founder | ☐ ________ | 23/09/2026 |
| Repo + deploy | founder | ☐ ________ | 23/09/2026 |
| Google Sheet Bước 0 | founder | ☐ ________ | **07/09/2026** |
| Email liên hệ pháp lý | founder | ☐ ________ | 23/09/2026 |

**Cách làm rẻ nhất:** một phong bì niêm phong đưa cho một người tin cậy, mở khi founder không liên lạc được **7 ngày**. Chi phí 0đ, 20 phút. Không cần password manager doanh nghiệp.

### 12.2. Ba vai cần một cái tên, và ba hạn khác nhau

| Vai | Làm gì | Hạn có tên | Nếu quá hạn |
|---|---|---|---|
| **Nhân chứng đọc số** | Xem dashboard mỗi Chủ nhật, và đọc kill gate 31/03/2027 cùng founder | **trước 02/12/2026** | Kill gate được đọc bởi đúng người có động cơ đọc sai nó |
| **Người trực Tết** (D-07) | §10 | **15/12/2026**, chót **20/01/2027** | `service_paused` tự động |
| **Người giữ phong bì** | §12.1 | **23/09/2026** | Bus factor = 1 với toàn bộ tài sản kỹ thuật |

Ba vai này **có thể là cùng một người**. Điều không được phép là **không có ai**.

---

## 13. LIÊN KẾT NGƯỢC — mục nào của runbook lấp lỗ hổng nào

| Lỗ hổng trong `_audit-report.md` (THIẾU) | Lấp ở |
|---|---|
| "Một runbook Bước 0 duy nhất… MỘT tờ giấy đọc lúc 20:40" | **§1** |
| "Không có kế hoạch… ngay sau khi Bước 0 kết thúc" (phái sinh) + "Mẫu văn bản quyết định 22–23/09" (phần vận hành) | **§2** |
| Kịch bản "Bước 0 cho kết quả xám" | **§2.7** |
| "Thông báo/đồng ý xử lý dữ liệu cho chính Bước 0" (phần **xoá** sau khi kết thúc) | **§2.6** |
| "RUNBOOK.md + kế hoạch người thứ hai" | **§6, §10, §12** |
| "Không có quy trình bàn giao cho Tết" | **§10** |
| "Quyền truy cập / cung cấp bản sao dữ liệu (export)" | **§9** |
| "Không có kế hoạch dữ liệu cho việc dừng dự án" / "Kế hoạch dừng/đóng cửa tử tế" | **§11** |
| sổ chết thì làm gì (phần vận hành) | **§7** |
| người rời sổ thì dữ liệu xử lý ra sao (bảng đầy đủ) | **§8** |
| "Không có ai đo `monthly_visits`" → ai sở hữu việc hiệu chỉnh A72 | **§5** (runbook nhận sở hữu, hạn 01/01/2027) |

---

## 14. NHỮNG THỨ RUNBOOK NÀY CỐ Ý KHÔNG CHỨA

1. **Hằng số mới.** Mọi con số ở đây có nguồn ở `_rulings.md` mục A hoặc là phái sinh có ghi phép tính.
2. **Sổ cái pw.** `docs/adr/pw-ledger.md` là nơi duy nhất (A87). Runbook không cộng, không trừ, không hứa pw.
3. **Quyết định thay founder.** Các mục D (D-01, D-02, D-04, D-04b, D-06, D-07…) chỉ được **trỏ tới** kèm hạn và khuyến nghị.
4. **Nội dung pháp lý.** ToS / Chính sách quyền riêng tư / Quy tắc cộng đồng thuộc chủ quyền `05`. Runbook chỉ **thực thi** những gì các văn bản đó hứa.
5. **Quy trình cho quy mô >60 sổ.** Ở trên trần pháp lý thì runbook này không còn đúng, và việc cần làm là **dừng nhận sổ mới**, không phải mở rộng runbook.
