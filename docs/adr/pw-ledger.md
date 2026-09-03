# SỔ CÁI pw — nguồn duy nhất kiểm tra nguyên tắc P7

- **Trạng thái**: đã chốt · **Mở sổ**: 2026-08-28 · **Người giữ sổ**: founder (duy nhất)
- **Thay thế**: bảng §4.10 của `01-dinh-nghia-san-pham-v2.md` với tư cách ngân sách. Bảng đó giờ chỉ là bối cảnh.

---

## 0. VÌ SAO FILE NÀY TỒN TẠI

Nguyên tắc **P7** (v2 §7) là thứ **duy nhất** trong hồ sơ chống scope creep: _"mọi hạng mục thêm vào phải cắt một hạng mục đang có, ghi rõ pw"_. Nó giả định có **một người giữ sổ**.

Trong vòng viết 03/09/2026, chín tài liệu được viết **song song**, không tài liệu nào đọc tài liệu kia. Kết quả:

- Tổng khoản xin thêm: **+1,3 đến +1,9 pw** trên một trần 6,5 pw mà `02` §3.2 và `07` §0 đã **độc lập** chứng minh là không lọt lịch **ngay cả khi không thêm gì**.
- **Nhiều tài liệu trả nợ bằng CÙNG MỘT khoản cắt.** Ba ví dụ đã xác minh:
  - _"Nút thả tim (0,2 pw)"_ — chi bởi `03` §10 câu 7, **và** `04` §9.4, **và** `07` MVP-0. **Ba lần cho một khoản.**
  - _"Tết freeze (0,10 pw)"_ — chi bởi `06` BĐ-5 (đổi lấy nút Nghỉ), **và** `07` §0 hạng mục 7.
  - _"Lưu ảnh riêng ở màn 4 (−0,10) + preview dùng chung (−0,10)"_ — chi bởi `09` §5 (Asset 2/3), **và** `09` Bất đồng #1 (nút Mở sổ mới). `09` tự thừa nhận trùng.
- ⇒ **P7 không kiểm tra được.** Không có nơi nào cho biết tổng pw hiện tại là bao nhiêu.

**Luật của sổ này — ba dòng, không có ngoại lệ:**

1. **Một khoản cắt chỉ được chi MỘT LẦN.** Chi rồi thì cột `Đã chi cho` có tên, và không ai được chi lại.
2. **Mọi khoản thêm phải có một dòng ở §2**, có tài liệu nguồn, có ngày, có khoản đối trừ **đã còn** trong §3.
3. **Không PR nào được merge nếu tổng ở §4 vượt trần đã chốt.** Đây là kill gate tuần 4 của `06` §6 (05/10/2026), và nó áp dụng ngay từ hôm nay.

---

## 1. TRẦN ĐÃ CHỐT

| | Giá trị | Nguồn |
|---|---|---|
| Trần gốc v2 | 6,5 pw | v2 §4.10 — **giả định 40 h/tuần**, không còn đúng |
| Giờ thật của founder | **~20 h/tuần** | brief |
| Hệ số hiệu suất | 0,65 | v2 §4.10 — ⚠️ **[ước lượng không nguồn]**, xuất hiện lần đầu ở đó, được `02` và `07` dùng làm trục lập luận, `07` lại bỏ nó khi tính 159 h |
| **Scope đã chốt (QĐ-25)** | **MVP-0** — beta 02/12/2026, 12 sổ đợt 1, trần cứng 15/12 | `07` §0 |
| **Ước lượng MVP-0 theo bảng hạng mục** | 3,65 pw | `07` §0 |
| **Ước lượng MVP-0 theo bảng US chi tiết** | **4,58 pw** ← **con số làm việc** | `07` §0 bảng ánh xạ |
| Giờ tương ứng ở 20 h/tuần, không trừ hao | **183 h ≈ 9,2 tuần** | số học |
| Cửa sổ build thật (T4 → T12, sau khi trừ vận hành Bước 0 + quyết định + tuyển) | **~180 h** | `07` §0 |
| **Đệm** | **≈ −3 giờ** | Âm. Đây là lý do 2 tuần 16/11→02/12 phải là **đệm rủi ro**, không phải scope |

> **Trần vận hành là một trần thứ hai và nó cũng đang bị nới bằng cách hỏi.** v2 §9 tính 10 h/tuần cho beta 30 sổ. `09` §2.2 quy hoạch tới 35 sổ. `05` §12 câu 2 hỏi có nên nâng lên 60 sổ — và tự ghi rằng 60 sổ = **đúng 10 h/tuần, không còn đệm**. Chốt: **60 sổ là trần hành chính pháp lý, KHÔNG phải mục tiêu vận hành.** Mục tiêu vận hành giữ ở ≤30 sổ.

---

## 2. KHOẢN THÊM — mỗi dòng phải có khoản đối trừ đã còn

| # | Khoản thêm | +pw | Nguồn | Khoản đối trừ | Trạng thái |
|---|---|---|---|---|---|
| L-01 | **32 event hợp nhất** (thay 14) + 2 counter pháp lý | **+0,15** | QĐ-02, QĐ-04 · `04` §7.1 | C-01 | ✅ **DUYỆT** — không backfill được, không có lựa chọn |
| L-02 | **`audit_log`** ≥2 năm (IP truncated, login, moderation, export) | **+0,15** | QĐ-19 · `05` GIAI ĐOẠN 2 | C-02 | ✅ **DUYỆT** — "rẻ nhất khi làm sớm, không thể làm bù" |
| L-03 | **Auto-hide toàn cục** ở report đầu tiên (trigger DB) | **+0,02** | QĐ-16 · `05` §8.3 | C-02 | ✅ **DUYỆT** — cột `hidden_at` và policy đã có |
| L-04 | **SLA kép** + script khoá sổ khẩn cấp + `RUNBOOK.md` | **+0,10** | QĐ-17 · `05` Bất đồng #5 | C-02 | ✅ **DUYỆT** — nghĩa vụ luật định, không thương lượng |
| L-05 | **Cột `roster_size`** trong `book_day` + 2 cột Sheet Bước 0 | **0,00** | QĐ-03 · `06` BĐ-1 | — | ✅ **DUYỆT** — một cột, chi phí 0. Hạn **07/09** |
| L-06 | **`A_eff = min(A(D), A(D−1))`** | **0,00** | QĐ-14b · `04` §9.1 | — | ✅ **DUYỆT** — một hàm `min()`. Trước commit đầu |
| L-07 | **Cột `membership.paused_until`**, KHÔNG có UI | **0,00** | QĐ-23 · `06` BĐ-5 | — | ✅ **DUYỆT** — chi phí một cột = 0 |
| L-08 | **Shortlink đo H1** ở Bước 0 (Short.io free) | **0,00** | QĐ-05 · `06` BĐ-3 | — | ✅ **DUYỆT** — 30 phút setup, không phải code sản phẩm. Hạn **07/09** |
| L-09 | **Script export ZIP chạy tay** (nghĩa vụ ToS + Luật 91/2025) | **+0,10** | `05` §8.1 mục 7, §8.2 điều 6 | C-02 | ✅ **DUYỆT** — không có nó thì lời hứa trong ToS là lời hứa suông, và `10` §3.1 đang định **bán** đúng quyền luật định này |
| L-10 | **Lưới card thích ứng 2×4** cho sổ 7–8 người + fixture snapshot | **+0,05** | QĐ-30 · `08` §4 vs `04` §1.3 | C-03 | ✅ **DUYỆT** — lưới 6 ô cố định sẽ im lặng loại 2 người đã nộp ⇒ vi phạm P2 |
| L-11 | **Bảng chữ mã sổ 28 ký tự** trong `remote_config` + test CI `slug ⊅ code6` | **+0,02** | QĐ-12, QĐ-12b | C-03 | ✅ **DUYỆT** — lỗ hổng thật: slug công khai chứa mã vào sổ kín |
| — | **CỘNG ĐÃ DUYỆT** | **+0,59** | | | |
| L-20 | ~~Nút thả tim ẩn danh~~ | — | `03`/`04`/`07` | — | ❌ **CẮT** (QĐ-05b). Xem C-01 |
| L-21 | ~~Nút "Nghỉ 7 ngày" (UI)~~ | +0,10 | `06` BĐ-5 | *không còn* | ❌ **BÁC** (QĐ-23) — khoản đối trừ (Tết freeze) đã bị chi. Giữ cột, hoãn nút |
| L-22 | ~~Asset 2 "Sổ tháng" 9:16~~ | +0,15 | `09` §5 | *không còn* | ❌ **HOÃN T13+** (QĐ-35) — phụ thuộc lưới 30 ngày đã cắt; **chưa có luồng đồng ý đăng công khai** |
| L-23 | ~~Asset 3 "Thẻ TOANG" 1:1~~ | +0,05 | `09` §5 | *không còn* | ❌ **HOÃN T13+** (QĐ-35) — cùng lý do; đưa ảnh + nhãn 💀 ra kênh công khai |
| L-24 | ~~Nút "Mở sổ mới" (đa sổ)~~ | +0,15 | `09` Bất đồng #1 | *đã chi cho L-22/23* | ❌ **HOÃN T13+** (QĐ-08) — `G ≡ 0` là quyết định có ý thức, ghi thành văn. **Ưu tiên số 1 của T13+** |
| L-25 | ~~Fake door "Bao cả sổ" chiếm slot 8~~ | +0,20 | `10` Bất đồng #3 | — | ❌ **BÁC** (QĐ-32) — slot 8 dành cho phát hiện của Bước 0, không cho một màn bán hàng; và QĐ-01 khoá mọi bề mặt doanh thu |
| L-26 | ~~Email magic link (entitlement đã trả tiền)~~ | +0,40 | `10` Bất đồng #3 | — | ❌ **BÁC** — hệ quả tất yếu của việc thu tiền, mà thu tiền đã bị QĐ-01 khoá |
| L-27 | ~~SMS OTP~~ | +0,40 | `03` §2.4 | — | ⏸ **CÓ ĐIỀU KIỆN** — chỉ mở ở đèn đỏ QĐ-04, hoặc sớm hơn ~4× nếu luật sư trả lời câu 2 là "áp cả tier thông báo" |
| L-28 | ~~Android web push~~ | +0,30 | v2 §11, `03` §2.6 | — | ⏸ **CÓ ĐIỀU KIỆN** — chỉ mở khi H1 rơi vùng xám 40–60%. ⚠️ **Có thể không tồn tại**: Service Worker trong webview Zalo (`03` §9 B4), phải kiểm chứng 04/09 |
| L-29 | ~~Chức năng kick + nghi thức 7 ngày grace~~ | +0,40 | `04` §2.2 vs digest #20 | — | ❌ **BÁC** (QĐ-18) — không có vai "chủ sổ" ở MVP. Hệ quả: yêu cầu nghi thức kick của digest #20 **tan biến cùng với thứ nó bảo vệ** |

---

## 3. KHOẢN CẮT — mỗi khoản chỉ chi được MỘT LẦN

| # | Khoản cắt | −pw | Đã chi cho | Còn không? |
|---|---|---|---|---|
| C-01 | **Nút thả tim ẩn danh** (giữ trang public, chỉ cắt nút) | **−0,20** | **L-01** | 🔴 **ĐÃ CHI** |
| C-02 | **Màn Của tôi** (US-15) — 2 nút bắt buộc chuyển sang hạng mục 9 | **−0,30** | **L-02, L-03, L-04, L-09** (cộng 0,37 > 0,30 ⇒ thâm hụt 0,07, xem §4) | 🔴 **ĐÃ CHI, ÂM 0,07** |
| C-03 | **Cron 21:00 `mo_chot_so`** | **−0,10** | **L-10, L-11** | 🔴 **ĐÃ CHI** |
| C-04 | **Lưới 30 ngày** (US-07) → T13+ | **−0,30** | *chưa chi* | 🟢 **CÒN** |
| C-05 | **Biến thể card "đủ mâm" + mốc sổ** (US-13) → T13+ | **−0,10** | *chưa chi* | 🟢 **CÒN** |
| C-06 | **Dashboard UI** → 6 truy vấn SQL chạy tay | **−0,40** | *chưa chi* | 🟢 **CÒN** |
| C-07 | **OG preview động** → một ảnh OG tĩnh | **−0,07** | *chưa chi* | 🟢 **CÒN** |
| C-08 | **Tết freeze** → T13, hạn hoàn thành 25/01/2027 | **−0,10** | **`07` MVP-0** | 🔴 **ĐÃ CHI** — đây là khoản `06` BĐ-5 định chi lần thứ hai |
| C-09 | **"Lưu ảnh" riêng ở màn 4** → share sheet trình duyệt | **−0,10** | *trả lại sổ sau QĐ-35* | 🟢 **CÒN** |
| C-10 | **Preview dùng chung một màn**, đổi tỉ lệ | **−0,10** | *trả lại sổ sau QĐ-35* | 🟢 **CÒN** |
| | **Tổng khoản cắt CÒN** | **−1,07** | | |

---

## 4. TỔNG — con số phải kiểm mỗi lần merge

```
Scope MVP-0 (bảng US chi tiết, 07 §0)          4,58 pw
+ Khoản thêm đã duyệt (§2)                    +0,59 pw
− Khoản cắt đã chi cho các khoản đó (C-01..03) −0,60 pw
                                              ─────────
TỔNG BACKLOG HIỆN TẠI                          4,57 pw
```

**Đối chiếu với các trần:**

| Trần | Giá trị | Tình trạng |
|---|---|---|
| Trần gốc v2 (40 h/tuần) | 6,5 pw | 🟢 dưới trần |
| Giờ thật khả dụng T4–T12 (20 h/tuần) | ~4,50 pw | 🔴 **VƯỢT 0,07 pw ≈ 3 giờ** |
| Kill gate tuần 4 của `06` §6 ("backlog >6,5 ⇒ DỪNG") | 6,5 pw | 🟢 không kích hoạt |

> **Thâm hụt 0,07 pw (≈3 giờ) là thật và không được làm tròn xuống.** Nó đến từ C-02: màn Của tôi (−0,30) đã bị chi cho bốn khoản cộng lại 0,37. **Cách trả duy nhất được phép:** chi thêm **C-07 (OG preview động, −0,07)**. Sau khi chi C-07, sổ cân bằng ở **4,50 pw**.
>
> **C-04, C-05, C-06, C-09, C-10 là toàn bộ dự trữ còn lại: −0,90 pw.** Đó là số tiền duy nhất để mua bất kỳ thứ gì mới trong 12 tuần tới, và nó **phải** đủ cho cả các cạm bẫy ở `02` §3.1 (8 cạm bẫy, mỗi cái +2 đến +3 pd — nếu 1/3 sập là +0,4 đến +0,6 pw). **Thực tế: dự trữ đã gần hết trước khi viết dòng code đầu tiên.**

---

## 5. QUY TRÌNH — ba câu hỏi trước mỗi lần thêm

1. **Khoản đối trừ nào?** Phải là một dòng ở §3 có cột "Còn không?" = 🟢. Nếu không còn khoản nào, câu trả lời là **không thêm**, không phải "tìm chỗ khác".
2. **Có phải thứ không hồi tố được không?** Nếu có (event, cột schema, mẫu số của một phép đo, `audit_log`), nó được ưu tiên tuyệt đối trước mọi thứ có UI — vì thêm sau nghĩa là **mất lịch sử**, không phải mất thời gian.
3. **Có phá được một phép đo nào không?** `02` là tài liệu duy nhất ghi rõ hạng mục nào giết phép đo nào. Tra §4.3 của nó trước khi cắt bất cứ gì (ví dụ: cắt trang public giết M2 — đó là lý do trang public được giữ dù cả hai bản cắt đều đề nghị cắt).

---

## 6. LỊCH SỬ THAY ĐỔI

| Ngày | Thay đổi |
|---|---|
| 2026-08-28 | Mở sổ. Hợp nhất khoản thêm/cắt của 10 tài liệu. Phát hiện 3 khoản cắt bị chi nhiều lần. Chốt trần làm việc 4,50 pw. |
