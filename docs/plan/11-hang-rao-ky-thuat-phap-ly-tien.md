# 11 — HÀNG RÀO KỸ THUẬT · PHÁP LÝ · TIỀN

> **Trạng thái:** tạo mới **04/09/2026**. Lấp các LỖ HỔNG mảng kỹ thuật/pháp lý/tiền của `_audit-report.md` và kiểm chứng mục **CHƯA CÓ NGUỒN** bằng nguồn thật.
>
> **Phạm vi chủ quyền:** file này SỞ HỮU năm thứ chưa có chủ trong hồ sơ — (1) mô hình truy cập ảnh, (2) rate limit & chống lạm dụng, (3) xử lý vượt quota/chi phí, (4) backup & khôi phục, (5) sổ đăng ký khẳng định pháp lý. Nó KHÔNG sở hữu DDL (`04`), không sở hữu metric (`06`), không sở hữu sổ cái pw (`docs/adr/pw-ledger.md`).
>
> **Luật hiệu lực:** `_rulings.md` thắng mọi chỗ nó có nói. Chỗ nó không nói, file này chọn con số **thận trọng hơn** và ghi rõ vì sao. Mọi con số mới đều có nhãn: `[FACT + nguồn]` · `[ước lượng, chưa xác minh]` · `[suy luận]`.
>
> **Ngày kiểm chứng của toàn bộ §7:** 04/09/2026. Giá hạ tầng và văn bản pháp luật đổi được — **đọc lại §7 trước 02/12/2026** (ngày beta) và trước **26/01/2027** (cổng G2).

---

## 0. TL;DR — sáu thứ phải làm trước dòng code đầu tiên (23/09/2026)

| # | Việc | Vì sao không lùi được | pw | Bắt buộc? |
|---|---|---|---|---|
| 1 | **Key card thêm `nonce` 10 ký tự**: `card/<book>/<date>-<nonce>.png` | Bản hiện tại cho phép **đi bộ theo ngày**: một người nhận ĐÚNG MỘT card đọc được **mọi card của sổ đó, mọi ngày, 90 ngày**, không cần vào sổ. Sau commit đầu là dữ liệu lịch sử — key đã dán vào chat Zalo không đổi được | **0,02** | 🔴 CÓ |
| 2 | **Xoá ảnh phải xoá/vẽ lại card PNG** + purge CDN | `04` §6.2 xoá `thumb_key` + `orig_key` nhưng **KHÔNG chạm card PNG** — mà card công khai, cache 1 năm, chứa đúng khuôn mặt vừa được yêu cầu xoá. Đây là nghĩa vụ của Luật 91/2025, không phải tuỳ chọn | **0,08** | 🔴 CÓ (luật) |
| 3 | **Rate limit trên `book.code` (mã 6 ký tự)** | Không có giới hạn, ở 10.000 sổ một bot 1.000 req/s tìm ra một sổ sống trong **48 giây** (§2.2). Ở 60 sổ thì an toàn — nhưng luật phải viết TRƯỚC, vì nó là bảng đếm trong DB | **0,10** | 🔴 CÓ |
| 4 | **Bật `spend cap` của Supabase Pro và ghi rằng ĐÃ BẬT** | Mặc định Pro bật sẵn spend cap [FACT §7]. Founder chưa có pháp nhân, không có thẻ tín dụng doanh nghiệp ⇒ **chấp nhận dịch vụ tạm dừng còn hơn một hoá đơn bất ngờ**. Đây là quyết định, phải ghi | 0 | 🔴 CÓ |
| 5 | **`rclone sync` `thumb/` hằng tuần + MỘT lần diễn tập khôi phục** | R2 **không có backup**, không bật versioning mặc định. Một job `orig_ttl_audit` viết sai prefix xoá vĩnh viễn toàn bộ thumbnail — đúng thứ sản phẩm hứa giữ VĨNH VIỄN. Egress R2 = $0 nên backup này gần như miễn phí (§4) | **0,05** | 🔴 CÓ |
| 6 | **Sổ đăng ký 11 khẳng định pháp lý chưa có luật sư xác nhận** (§6) | Hồ sơ đang xây 20 tuần lịch và ~119 triệu chi phí thật trên các câu chưa ai ký. Sổ này là 0 pw và làm cho việc "chưa xác nhận" không biến mất khỏi tầm mắt | 0 | 🔴 CÓ |

**Tổng pw mới do file này đề xuất: +0,25 pw** (0,02 + 0,08 + 0,10 + 0,05), trong đó **0,10 pw là nghĩa vụ luật định** (mục 2) và **0,15 pw là hàng rào an toàn**.

> ⛔ **KHOẢN NÀY CHƯA ĐƯỢC GHI VÀO `docs/adr/pw-ledger.md`** [A87 — file này không được phép tự ghi sổ cái]. Backlog trước file này đã là **≈7,25 pw** trên trần cứng **6,5 pw** (C14). Cộng 0,25 pw ⇒ **≈7,50 pw**. Nó KHÔNG làm vỡ thêm điều gì mà chưa vỡ — nhưng nó làm khoản phải cắt của **D-01 lớn hơn 0,25 pw**. Ghi ra thay vì giấu.

---

## 1. AI XEM ĐƯỢC ẢNH CỦA AI — mô hình truy cập

> Lỗ hổng gốc: `_audit-report.md` mục THIẾU + `03` §10 khối D-06b. Hồ sơ có ba chuỗi bí mật (`book.code`, `card.share_token`, `book_id`) và bốn bề mặt ảnh, nhưng **không tài liệu nào viết ra bảng "ai đọc được gì bằng chuỗi nào"**. Dưới đây là bảng đó.

### 1.1. Bốn bề mặt ảnh và độ khó đoán thật

| Bề mặt | Key / URL | Entropy | Ai đọc được | Cache | Đánh giá |
|---|---|---|---|---|---|
| `orig/<book>/<date>/<person>/<cpid>.jpg` | presigned GET, TTL **10 phút** | không đoán được (chữ ký HMAC) | chỉ người có phiên hợp lệ trong sổ | không | ✅ An toàn |
| `thumb/<book>/<date>/<person>/<cpid>.jpg` | presigned GET theo lô | như trên | thành viên sổ + trang public còn hạn | không | ✅ An toàn |
| `card/<book>/<date>.png` | **công khai** `cdn.chotso.vn`, cache **1 năm** | `book_id` = UUID v4 = **122 bit** ⇒ không đoán được | **bất kỳ ai có link** | 1 năm | 🔴 **Đi bộ được — xem §1.2** |
| Trang public `/<slug>?t=<share_token>` | `share_token` TTL **7 ngày**, `noindex` | ≥ 64 bit | ai có link, trong 7 ngày | — | 🟡 Chấp nhận được |

### 1.2. 🔴 Lỗ hổng thật: card KHÔNG đoán được nhưng **ĐI BỘ được**

`book_id` không đoán được. Nhưng card được thiết kế để **dán vào nhóm Zalo mỗi tối** — tức `book_id` **rời khỏi vòng bí mật ngay ở lần dùng đầu tiên, đúng theo thiết kế**. Sau đó:

```
Người lạ nhận được 1 card bất kỳ (forward, screenshot có URL, ai đó gửi nhầm nhóm)
  → đọc được book_id từ URL
  → thay <date> trong URL:  card/<book>/2026-12-05.png
                            card/<book>/2026-12-06.png  …
  → tải về TOÀN BỘ card của sổ đó, mọi ngày, trong 90 ngày
  → mỗi card chứa thumbnail thật của tới 8 người (A46) + tên hiển thị + kèo
```

**Chi phí tấn công: một vòng `for`.** Không cần vào sổ, không cần `code6`, không cần `share_token`, không chạm rate limit nào vì đó là CDN tĩnh.

Đây chính xác là thứ mà `03` §9 B2 đã bắt được ở tầng `code6` (*"ai được forward card đều vào được sổ kín"*) nhưng **bỏ sót ở tầng chính cái ảnh**. Việc tách `share_token` khỏi `code6` (A42–A45) bảo vệ **đường VÀO sổ** — nó không bảo vệ **đường XEM ảnh**, vì ảnh không đi qua ứng dụng.

**BẢN VÁ (bắt buộc, 0,02 pw, phải vào trước commit đầu):**

| | |
|---|---|
| **Key mới** | `card/<book_id>/<book_date>-<asset_nonce>.png` |
| `asset_nonce` | **16 ký tự hex = 64 bit** — `encode(gen_random_bytes(8),'hex')`, sinh ngẫu nhiên **cho từng hàng `card`**, lưu ở cột `card.asset_nonce` (`text NOT NULL`). Dùng hex chứ không base64 vì base64 có `/` và `+`, không hợp lệ trong key R2 |
| Vì sao 64 bit | 16¹⁶ = 1,84×10¹⁹. Với 60 sổ × 365 ngày = **21.900 card sống**, số lần đoán kỳ vọng = 8,4×10¹⁴ ⇒ ở 1.000 req/s cần **~26.700 năm**. Ở 10.000 sổ (3,65 triệu card) vẫn còn **~160 năm** |
| Vì sao KHÔNG dùng lại `share_token` | `share_token` TTL 7 ngày (A42); card **không được hết hạn** (`03` §2.5 — lịch sử chat Zalo không được vỡ). Hai vòng đời khác nhau ⇒ hai chuỗi. Đây là cùng lập luận A42 đã dùng để tách `share_token` khỏi `code6` |
| Chi phí thật | 1 cột + 1 hàm ghép key + 1 CI check `test:card-key-has-nonce`. **Không** đổi renderer, **không** đổi lifecycle, **không** đổi TTL 90 ngày |
| Hệ quả phụ (tốt) | Vẽ lại card cùng một ngày (sau khi ai đó xoá ảnh — §1.3) sinh nonce mới ⇒ **bản cũ ở CDN trở thành URL mồ côi** và bị lifecycle dọn, thay vì phải purge từng edge |

> **Điều bản vá này KHÔNG làm được, phải nói thẳng trong Chính sách:** card đã được **gửi vào một cuộc trò chuyện Zalo** thì nằm ngoài tầm với của mọi biện pháp kỹ thuật — Zalo giữ bản sao của chính nó. Câu phải in ra: *"Ảnh card đã gửi vào nhóm chat nằm trong bản lưu của Zalo và của từng người nhận. Chúng tôi xoá được bản trên máy chủ của mình, không xoá được bản đã gửi đi."*

### 1.3. 🔴 Lỗ hổng thật thứ hai: xoá ảnh KHÔNG xoá card đã in mặt người đó

`04` §6.2 khi người dùng chọn *"Xoá dữ liệu VÀ mọi tấm của tôi"* xoá: `proof.thumb_key`, `proof.orig_key`, `device`, `is_16_plus`, `display_name`.

**Không có dòng nào chạm `card/<book>/<date>.png`** — trong khi mỗi card là một **bản sao đã nướng chín** (baked) thumbnail của người đó, công khai, cache 1 năm, tồn tại tới 90 ngày.

Kết quả hiện tại: người dùng bấm "xoá mọi tấm của tôi", nhận màn hình xác nhận, và ảnh của họ vẫn **công khai trên `cdn.chotso.vn` tối đa 90 ngày**. Với Luật 91/2025 (quyền yêu cầu xoá) + NĐ 356/2025 + NĐ 330/2026 (phạt tới **3 tỷ đ với tổ chức / 1,5 tỷ đ với cá nhân** — §7), đây không phải rủi ro lý thuyết.

**BẢN VÁ (bắt buộc theo luật, 0,08 pw):**

```
Khi proof của person P bị xoá cứng:
  1. xoá object thumb/ và orig/                       (đã có ở 04 §6.2)
  2. SELECT card WHERE book_id = P.book AND person_in_card @> P.person_id
  3. với mỗi card đó:
       a. vẽ lại card KHÔNG có ô của P, sinh asset_nonce MỚI
       b. ghi key mới vào hàng card
       c. XOÁ object cũ trên R2 (key cũ ⇒ 404 ⇒ lifecycle dọn)
       d. purge cache CDN theo ĐÚNG key cũ (1 lệnh API Cloudflare)
       e. audit_log('card_rerendered_after_erasure', book_id, card_date)
  4. SLA: hoàn tất trong 24 GIỜ (cùng SLA object R2 của 04 §6.2)
```

Cần thêm ở `04` §1: cột `card.person_ids uuid[]` (danh sách người có ô trong card đó) — **không có cột này thì bước 2 không chạy được** và phải quét toàn bộ card của sổ.

> **Vì sao không chọn "chỉ xoá card, không vẽ lại":** xoá trần ⇒ lịch sử chat Zalo vỡ (ảnh gãy), đúng thứ `03` §2.5 dựng cả cơ chế "ảnh tĩnh trung tính, KHÔNG 404" để tránh. Vẽ lại giữ được lời hứa đó **và** thoả nghĩa vụ xoá.

### 1.4. Header và cấu hình bắt buộc (0 pw, chỉ là cấu hình)

| Nơi | Cấu hình | Vì sao |
|---|---|---|
| `cdn.chotso.vn/card/*` | `X-Robots-Tag: noindex, noimageindex` | Không có header này thì Google Images lập chỉ mục ảnh mặt của trẻ 16 tuổi. `robots.txt` **không** chặn được ảnh đã được nhúng ở nơi khác |
| Trang public | `Referrer-Policy: no-referrer` | Không có ⇒ `book_id` + `share_token` rò sang mọi domain người dùng bấm tiếp |
| Bucket `chotso-media` | **Public access = OFF**, chỉ `card/` phục vụ qua Custom Domain có Transform Rule | Bucket listing bật = mọi key lộ một lần. Phải có CI check `test:r2-bucket-not-public` |
| Trang public | `<meta name="robots" content="noindex,nofollow">` (A42, đã có) | Giữ nguyên |
| Mọi phản hồi ảnh | `Cross-Origin-Resource-Policy: same-site` cho `thumb/`, **`cross-origin` cho `card/`** | Card PHẢI nhúng được ở nơi khác (đó là kênh phân phối); thumb thì không |

### 1.5. Bảng "ai xem được gì" — phiên bản sau bản vá (đưa nguyên vào Chính sách)

| Người | Ảnh gốc | Thumbnail trong sổ | Card của một ngày | Toàn bộ card của sổ |
|---|---|---|---|---|
| Thành viên trong sổ | ✅ 72h | ✅ | ✅ | ✅ |
| Người có link trang public (≤7 ngày) | ❌ | ✅ chỉ ngày đó | ✅ | ❌ |
| **Người được forward MỘT card** | ❌ | ❌ | ✅ **chỉ card đó** | ❌ **(bản vá §1.2)** |
| Người lạ đoán URL | ❌ | ❌ | ❌ | ❌ |
| Công cụ tìm kiếm | ❌ | ❌ | ❌ (`X-Robots-Tag`) | ❌ |
| Founder | ✅ (qua Supabase) — **phải khai trong Chính sách** | ✅ | ✅ | ✅ |

> **Dòng cuối là dòng người ta hay quên khai.** Founder có toàn quyền đọc DB và bucket. NĐ 356/2025 đòi khai rõ ai trong tổ chức truy cập được dữ liệu cá nhân. Với đội 1 người, câu khai là: *"Người sáng lập có quyền truy cập kỹ thuật vào toàn bộ dữ liệu, dùng cho vận hành và xử lý báo cáo vi phạm; mọi lần truy cập nội dung của một sổ cụ thể đều được ghi vào `audit_log`."* — và câu đó **chỉ đúng nếu `audit_log` (A49, 0,15 pw) thật sự tồn tại**.

---

## 2. RATE LIMIT VÀ CHỐNG LẠM DỤNG

> Lỗ hổng gốc: toàn hồ sơ có **đúng một** dòng rate limit (`10` §5 mục 9: *"10 tấm/giờ/thiết bị"*) và **lý do của nó sai về số học** (§2.4). Không có giới hạn nào cho `code6`, cho report, cho tạo sổ, cho `goal_text`.

### 2.1. Bảng giới hạn — bảy luật, một bảng đếm

Hiện thực: **một bảng `rate_bucket(subject_type, subject_id, action, window_start, n)`** + `UNIQUE(subject_type, subject_id, action, window_start)`, `UPSERT … n = n + 1`, dọn bằng job 04:20 ICT. Không cần Redis, không cần dịch vụ thứ ba. **0,10 pw cho cả bảy luật.**

| # | Hành động | Giới hạn | Chủ thể | Khi vượt | Vì sao con số này |
|---|---|---|---|---|---|
| 1 | Nộp ảnh | **10/giờ** | thiết bị | 429 + *"Chậm lại chút nha"* | Giữ nguyên `10` §5 mục 9. Ca dùng thật cao nhất: nộp lại vì ảnh mờ ≈ 3 lần |
| 2 | Ghi `proof` cho **cùng một** `(person, book_date)` | **5 lần** | người | 409 | Mô hình là 1 tấm/người/ngày (`UNIQUE(book_id, person_id, book_date)`). 5 = đủ cho retry 4G đứt |
| 3 | Xin presigned URL | **60/giờ** | thiết bị | 429 | Một màn sổ đầy = 8 thumb; 60 = 7 lần mở màn/giờ |
| 4 | 🔴 **Thử sai `book.code`** | **5 sai/giờ/thiết bị** · **20 sai/giờ/IP** · **500 sai/giờ TOÀN DỊCH VỤ ⇒ ngắt mạch 60 phút** | 3 tầng | tầng 1–2: 429 · tầng 3: tắt hẳn đường vào bằng `code6` 60 phút + cảnh báo founder | Xem §2.2 — đây là luật load-bearing nhất |
| 5 | Tạo sổ | **1/thiết bị** (A101) · **3/IP/ngày** | thiết bị + IP | 403 | `G ≡ 0` ở MVP-0 là quyết định có ý thức (A101), nhưng device token **reset được** ⇒ phải có tầng IP |
| 6 | 🔴 **Gửi report** | **10/ngày/người** · tối đa **3 tấm đang ẩn chờ xử lý cùng lúc/người** | người | report thứ 4 **vẫn được ghi nhận và vẫn vào SLA 48h, nhưng KHÔNG auto-hide** | Xem §2.3 — auto-hide toàn cục (A60) là vũ khí nếu không có trần |
| 7 | Sửa `goal_text` | **20/ngày/người** | người | 429 | `goal_text` là ô văn bản tự do duy nhất trong sản phẩm ⇒ là kênh chat/spam tiềm năng |

### 2.2. 🔴 Vì sao rate limit trên `code6` là bắt buộc, có số

Bảng chữ **28 ký tự**, độ dài **6** (A43) ⇒ không gian khoá = 28⁶ = **481.890.304**.

| Quy mô | Sổ đang có thể vào bằng `code6`¹ | Số lần đoán kỳ vọng | **Không** rate limit, bot 1.000 req/s | **Có** luật #4 (botnet 1.000 IP) |
|---|---|---|---|---|
| Beta 30 sổ | 30 | 16,1 triệu | **4,5 giờ** | ~33 ngày |
| Trần pháp lý 60 sổ | 60 | 8,03 triệu | **2,2 giờ** | ~17 ngày |
| 10.000 sổ (bài kiểm sức tải) | 10.000 | 48.189 | **48 giây** | ~2,4 giờ |

¹ A45: `code6` chỉ dùng được khi **sổ < 8 người VÀ card ≤ 7 ngày tuổi**. Điều kiện đó cắt tập mục tiêu, nhưng ở beta gần như mọi sổ đều thoả cả hai.

**Kết luận:** ngay ở quy mô beta hợp pháp (60 sổ), một script không bị chặn tìm ra một sổ sống trong **hơn hai giờ**. Đây không phải rủi ro của tương lai xa.

**Hệ quả nặng hơn tiền: MVP-0 KHÔNG CÓ chức năng kick** (A61/S17 — không có vai "chủ sổ"). Nghĩa là **thành viên không tự gỡ được người lạ đã vào**. Đường duy nhất là founder gỡ tay qua luồng moderation (`04` §2.2 state `removed`). Vì vậy `RUNBOOK.md` phải có sẵn mục **"Gỡ một người lạ khỏi một sổ"** — SQL + câu trả lời mẫu — trước ngày beta, không phải sau vụ đầu tiên.

> **Tầng 3 (ngắt mạch toàn dịch vụ) là tầng duy nhất chặn được botnet**, vì tầng thiết bị và tầng IP đều mua được rẻ. Đánh đổi: trong 60 phút ngắt mạch, người dùng **thật** đang nhập mã cũng bị chặn — chấp nhận được vì `code6` là *đường thoát hiểm* (A45), không phải đường vào chính (đường chính là link + cookie 400 ngày).

### 2.3. 🔴 Auto-hide toàn cục là một vũ khí — phải có trần

A60/QĐ-16 chốt: **một** report ⇒ ảnh bị ẩn **với mọi thành viên** ngay lập tức. Đó là lựa chọn đúng về nghĩa vụ pháp lý. Nhưng đọc lại nó như một kẻ phá:

> Trong một sổ 8 người, **một** thành viên bực bội có thể ẩn **mọi tấm của mọi người, mỗi ngày**, và founder phải xử từng vụ trong 48h. Với 4–18 vụ/tháng là tải bình thường (`08` §6.4), một người phá tạo được **240 vụ/tháng** một mình.

**Bản vá (nằm trong 0,10 pw của §2.1):** trần 3 tấm-đang-ẩn/người. Report thứ 4 trở đi **vẫn được ghi, vẫn vào SLA 48h, vẫn hiện cho founder** — chỉ mất hiệu lực auto-hide. Nghĩa vụ pháp lý (tiếp nhận + xử lý) **không bị giảm**; chỉ cơ chế *tự động* bị giới hạn. Thêm: người có **≥3 report liên tiếp bị kết luận sai** mất quyền auto-hide 30 ngày (report vẫn nhận). Ghi cả hai vào Quy tắc cộng đồng để không thành bất ngờ.

### 2.4. ❌ Sửa số sai: "5.000 ảnh = $22 Class A" (`10` §5 mục 9)

| | |
|---|---|
| Bản cũ | *"Chặn kịch bản 1 script đẩy 5.000 ảnh = **$22** Class A trong một buổi tối"* |
| Số học thật | 5.000 ảnh × 2 PUT (orig + thumb) = **10.000** thao tác Class A. Giá Class A = **$4,50/triệu** [FACT §7]. ⇒ 10.000 ÷ 1.000.000 × $4,50 = **$0,045** |
| Sai số | **~490 lần**. Muốn tốn $22 phải đẩy **4,9 triệu** thao tác, tức ~2,45 triệu ảnh |
| **Lý do đúng để vẫn giữ luật này** | (a) **trách nhiệm nội dung** — 5.000 ảnh lạ trong một sổ là 5.000 tấm founder phải chịu trách nhiệm theo NĐ 147/2024 và Apple 1.2/Play UGC; (b) **phình hàng DB** và làm hỏng mọi mẫu số của `06`; (c) đốt free tier Class A (1 triệu/tháng) trong ~1,2 ngày nếu chạy liên tục. **Không** phải vì tiền storage |

**Đã sửa tại `10` §5 mục 9.** Đây là ví dụ vì sao mọi con số $ trong hồ sơ cần một dòng phép tính bên cạnh: con số sai 490 lần vẫn dẫn tới **đúng** quyết định, nên không ai kiểm.

### 2.5. Chống lạm dụng KHÔNG làm ở MVP-0 — và vì sao

| Không làm | Vì sao | Điều kiện mở lại |
|---|---|---|
| CAPTCHA / Cloudflare Turnstile | Thêm một bước ma sát vào đúng luồng 92 giây (`08` §1.1) mà cả sản phẩm tồn tại để rút ngắn. Rate limit ba tầng (§2.2) rẻ hơn và không ai thấy | Tầng 3 ngắt mạch kích hoạt **≥3 lần/tuần** |
| Phân loại ảnh nhạy cảm tự động | ~0,4 pw + chi phí/ảnh (`05` §Apple 1.2). Chỉ bắt buộc **khi lên store**, mà store đã bị khoá sau cổng 26/01/2027 | Quyết định lên store |
| Chặn theo IP/ASN, WAF rule | Cần dữ liệu tấn công thật mới cấu hình đúng; cấu hình mù thì chặn nhầm nhà mạng VN | Có vụ tấn công thật đầu tiên |
| Xác thực SĐT (OTP) | Là câu hỏi **pháp lý** (§6 khẳng định #4), không phải câu hỏi chống lạm dụng | Luật sư trả lời Điều 27 khoản 3 |

---

## 3. VƯỢT QUOTA MIỄN PHÍ VÀ CHI PHÍ BẤT THƯỜNG

> Lỗ hổng gốc: hồ sơ có đèn báo động (**>$60/tháng**, A75) và DoD (**≤$40**, A76) nhưng **không có một dòng nào nói chuyện gì xảy ra khi vượt** — ai bị tính tiền, dịch vụ có sập không, tắt cái gì trước.

### 3.1. Ba nhà cung cấp, ba hành vi khi vượt — hoàn toàn khác nhau

| Nhà cung cấp | Khi vượt quota | Rủi ro thật | Quyết định |
|---|---|---|---|
| **Supabase Pro $25** | **Spend cap BẬT SẴN mặc định** trên Pro [FACT §7] ⇒ vượt quota thì **dịch vụ bị giới hạn/tạm dừng**, KHÔNG sinh hoá đơn thêm | Dịch vụ đứng | 🔴 **GIỮ SPEND CAP BẬT.** Founder chưa có pháp nhân, không có thẻ doanh nghiệp ⇒ **thà sập còn hơn nợ**. Ghi vào ADR-000 như một quyết định, không để nó là mặc định vô danh |
| **Cloudflare R2** | **Không có spend cap.** Tính sau, hậu kiểm | 🔴 **Đây là nguồn hoá đơn bất ngờ duy nhất trong hồ sơ** | Chống bằng: rate limit §2 + cảnh báo Cloudflare ở **$10 / $25 / $50** + truy vấn chi phí trong buổi đọc số thứ Hai |
| **Vercel Hobby $0** | Vượt quota ⇒ chặn build/bandwidth, không tính tiền | Thấp | ⚠️ Nhưng xem §3.3 — vấn đề của Vercel Hobby **không phải quota** |

### 3.2. Đèn báo động $60 sẽ KHÔNG BAO GIỜ sáng vì R2 — có số

Free tier R2: **10 GB lưu trữ · 1 triệu Class A · 10 triệu Class B mỗi tháng** [FACT §7].

Tiêu thụ ở **beta 30 sổ**, tính ở A = 4,0 (A70) và q_c = 0,53 `[chưa đo, A17]`:

| Hạng mục | Phép tính | Kết quả | % free tier |
|---|---|---|---|
| Số tấm/tháng | 30 × 4,0 × 30 × 0,53 | **1.908 tấm** | — |
| Class A/tháng | 1.908 × 2 (orig + thumb) + 30 × 30 (card) | **4.716** | **0,47%** |
| Class B/tháng | ~10.800 lượt mở màn × 4 thumb | **~43.200** | **0,43%** |
| Lưu trữ tăng thêm/tháng | 1.908 × 18 KB | **34 MB** | — |
| **Điểm rời free tier (lưu trữ)** | 10 GB ÷ (18 KB × 4,0 × 0,53 × 365) = 10 GB ÷ 13,9 MB/sổ-năm | **≈ 719 sổ-năm** | — |

**Kết luận có số: R2 = $0 trong toàn bộ vòng đời hợp pháp của dự án.** Trần pháp lý là 60 sổ (A93); rời free tier cần ~719 sổ-năm, tức **gấp ~12 lần** trần đó chạy đủ một năm. Vậy:

- Ngân sách **$28–37/tháng** (A74) thực chất là **Supabase Pro $25 + domain ~$2,5 + biên an toàn**. R2 đóng góp **$0**.
- Cột "$1 / $60" ở `03` §4b và §5 là **bài kiểm sức chịu tải ở 10k/100k DAU**, không phải ngân sách — `03` đã gắn nhãn này, §3.2 nay cấp cho nó phép tính.
- Đèn **>$60** (A75) chỉ sáng nếu **Supabase compute add-on** bị bật (Small $15 / Medium $60) hoặc **egress uncached Supabase vượt 250 GB** ($0,09/GB) — không phải vì ảnh.

### 3.3. ⚠️ Rủi ro Vercel Hobby KHÔNG phải quota, mà là điều khoản

Vercel Hobby là gói **phi thương mại** [xác minh nguồn thứ cấp §7]. Chừng nào **doanh thu = 0đ tuyệt đối trong 6 tháng đầu** (A62/C01) thì hợp lệ. Nhưng:

> **Ngày đầu tiên có một đồng doanh thu — kể cả một đồng quảng cáo, kể cả một khoản pre-order — Vercel Hobby không còn dùng được, phải lên Pro $20/tháng.**

Đây là **chi phí ẩn chưa có trong bảng nào**: mọi nhánh doanh thu của `10` (P1 đã xoá, P2 cắt, P3 cắt, T4, quảng cáo) phải cộng thêm **$20/tháng = 520.000đ/tháng = 6,24 triệu/năm** vào giá vốn trước khi tính lãi. Với dải doanh thu mà chính `10` §6.2 dự báo, khoản này một mình đủ lật dấu ở ca bi quan. **Đã ghi vào `10` §6.1.**

### 3.4. Thang phản ứng khi chi phí vượt ngưỡng — bốn nấc, viết trước

| Nấc | Điều kiện | Hành động | Thời gian | Ai làm |
|---|---|---|---|---|
| 🟢 **1 — Quan sát** | Hoá đơn dự kiến > **$40** (DoD A76) | Ghi vào Google Sheet buổi thứ Hai. Không làm gì khác | trong tuần | founder |
| 🟡 **2 — Điều tra** | > **$60** (đèn A75) | Chạy truy vấn phân bổ (sổ nào, thao tác nào). Kiểm §2 có luật nào bị vượt không | ≤ 48h | founder |
| 🟠 **3 — Hãm** | > **$100** hoặc tăng >3× tuần trước | Bật `remote_config['signup_paused']` (dừng nhận **sổ mới**, sổ đang chạy không đổi) + siết luật §2.1 #1 xuống 3/giờ | **trong ngày** | founder |
| 🔴 **4 — Dừng** | > **$200** hoặc bị nghi tấn công | Bật `remote_config['service_paused']`, thông báo trong sổ, xử lý xong mới mở | **≤ 2 giờ** | founder |

> **Nấc 3 và 4 dùng đúng hai công tắc đã tồn tại** (`signup_paused` từ `03` §2.4, `service_paused` từ `RUNBOOK.md`/D-07). File này **không thêm công tắc mới** — chỉ nối chúng vào ngưỡng tiền, thứ chưa ai làm. **0 pw.**
>
> **Ràng buộc pháp lý cắt ngang:** `service_paused` **không** miễn được SLA **24h / khẩn cấp 6h** với cơ quan nhà nước (A59). Trang chính sách và hộp thư liên hệ phải sống kể cả ở nấc 4.

---

## 4. BACKUP VÀ KHÔI PHỤC

> Lỗ hổng gốc: `03` dùng chữ "backup" **9 lần** làm lý do bắt buộc mua Supabase Pro $25, nhưng **không tài liệu nào nói backup gồm những gì, giữ bao lâu, khôi phục mất bao lâu, và ai đã thử một lần**. Và **không dòng nào nhắc R2** — nơi chứa đúng thứ sản phẩm hứa giữ VĨNH VIỄN.

### 4.1. Hai kho dữ liệu, hai mức bảo vệ rất lệch nhau

| Kho | Có gì | Backup hiện có | RPO | RTO | Đánh giá |
|---|---|---|---|---|---|
| **Postgres (Supabase Pro)** | `book`, `person`, `proof` (metadata), `book_day`, `event`, `audit_log` | **Backup hằng ngày, giữ 7 ngày** [FACT §7]. PITR là add-on trả thêm — **KHÔNG mua** | **≤ 24 giờ** | ~1–2 giờ (khôi phục tay) | 🟡 Chấp nhận được |
| **Cloudflare R2** | **Toàn bộ thumbnail** — tài sản duy nhất sản phẩm hứa giữ vĩnh viễn (A38) | 🔴 **KHÔNG CÓ GÌ.** Không versioning mặc định, không snapshot, không thùng rác | **∞ (mất là mất)** | **∞** | 🔴 **Không chấp nhận được** |

**Kịch bản mất dữ liệu thật nhất, không phải giả định:** job `orig_ttl_audit` (A05, 04:10 ICT) tồn tại **để xoá** object theo prefix. Một lỗi một ký tự trong prefix (`thumb/` thay vì `orig/`) xoá vĩnh viễn toàn bộ thumbnail của mọi sổ, **trong một đêm, không ai biết tới sáng**. Không có bản sao thứ hai thì đó là **kết thúc của dự án**, không phải một sự cố.

### 4.2. Bản vá: `rclone sync` hằng tuần (0,05 pw, gần như 0 tiền)

```
# Chạy tay thứ Hai, cùng buổi đọc số. Sau beta thì đưa vào GitHub Actions.
rclone sync r2:chotso-media/thumb  ./backup/thumb  --fast-list --checksum
rclone sync r2:chotso-media/card   ./backup/card   --fast-list --checksum
pg_dump  "$SUPABASE_URL" -Fc > ./backup/db-$(date +%F).dump
```

| Câu hỏi | Trả lời có số |
|---|---|
| Tốn bao nhiêu tiền? | **Egress R2 = $0** [FACT §7] ⇒ chỉ mất Class B. Beta 30 sổ có ~23.000 object/năm; `sync` chỉ tải object mới ⇒ **< 1 triệu Class B/năm = $0,36/năm**. Thực tế **$0** vì nằm trong free tier |
| Tốn bao nhiêu dung lượng? | 30 sổ × 13,9 MB/sổ-năm ≈ **420 MB/năm**. Ổ cứng của founder |
| Tốn bao nhiêu thời gian? | ~5 phút/tuần, gộp vào buổi thứ Hai đã có |
| Giữ mấy bản `pg_dump`? | **4 bản gần nhất + 1 bản đầu mỗi tháng.** Bù đúng chỗ Supabase chỉ giữ 7 ngày |
| Bản sao có phải dữ liệu cá nhân không? | **CÓ.** ⇒ phải khai trong Chính sách (*"bản sao lưu ngoại tuyến, giữ tối đa 90 ngày"*), phải **mã hoá ổ đĩa**, và yêu cầu xoá của người dùng phải **cuốn qua bản sao trong 90 ngày**, không phải 30 ngày như `04` §6.2 đang ghi cho backup Postgres |

> 🔴 **Hệ quả phải sửa ở `04` §6.2:** con số *"backup Postgres cuốn hết trong 30 ngày"* chỉ đúng khi backup duy nhất là của Supabase (7 ngày). Có thêm bản sao ngoại tuyến ⇒ **con số công bố phải là 90 ngày**, hoặc phải cam kết xoá tay trong bản sao. Chọn **90 ngày** (thận trọng hơn, và trung thực hơn). Con số này in vào Chính sách nên **không sửa lại được sau 07/09**.

### 4.3. Diễn tập khôi phục — MỘT lần, trước 02/12/2026

Backup chưa từng được khôi phục **không phải là backup**. Diễn tập bắt buộc, ≤ 90 phút, làm một lần trước ngày beta:

| # | Bước | Tiêu chí đạt |
|---|---|---|
| 1 | Tạo project Supabase thứ hai (Free, xoá sau) | có |
| 2 | Khôi phục `pg_dump` mới nhất vào đó | không lỗi |
| 3 | Trỏ app local vào DB khôi phục | màn 1 render |
| 4 | Đối chiếu **1 sổ**: `day_number`, `proof_total_after`, `streak` khớp bản gốc | 3/3 khớp |
| 5 | Đối chiếu 10 key `thumb/` ngẫu nhiên trong `./backup` có tồn tại | 10/10 |
| 6 | Ghi **thời gian thật** từ bước 1 → 4 vào `RUNBOOK.md` | đó là RTO thật, không phải RTO ước lượng |

**Nếu bước 4 fail:** dừng, sửa trước khi beta. `proof_total_after` là sổ cái sự kiện (`04` §6.3) — khôi phục sai nó là làm sai con số in trên card của mọi sổ, không sửa hồi tố được.

### 4.4. Thứ backup KHÔNG cứu được — nói thẳng

| Mất gì | Backup cứu? | Cứu bằng gì |
|---|---|---|
| DB hỏng, xoá nhầm bảng | ✅ | §4.2 |
| Xoá nhầm object R2 | ✅ (từ khi có §4.2) | §4.2 |
| Tài khoản Cloudflare/Supabase **bị khoá** (vi phạm ToS, tranh chấp thanh toán) | ❌ | Bản sao ngoại tuyến §4.2 là đường về **duy nhất**. Đây là lý do thứ hai để giữ nó |
| **Bus factor = 1** — founder mất khả năng truy cập | ❌ | Không phải bài toán kỹ thuật. Xem §8 — cần MỘT cái tên và một nơi giữ mật khẩu |
| Card đã gửi vào chat Zalo | ❌ (và không cần) | §1.2 |

---

## 5. SỰ CỐ DỮ LIỆU CÁ NHÂN — quy trình 72 giờ

> 🔴 **Đây là lỗ hổng pháp lý mới, không có trong `_audit-report.md`, vì văn bản chỉ có hiệu lực từ 19/08/2026 — 16 ngày trước hôm nay.**

**NĐ 330/2026/NĐ-CP** (ban hành **19/08/2026**, hiệu lực **ngay 19/08/2026**, 4 chương 82 điều) đặt chế tài hành chính cho vi phạm an ninh mạng và bảo vệ dữ liệu cá nhân: **phạt tối đa 3 tỷ đồng với tổ chức**, **cá nhân bằng 1/2 mức của tổ chức ⇒ tối đa 1,5 tỷ đồng**; hình phạt bổ sung gồm **tước giấy phép 1–24 tháng** và **đình chỉ hoạt động**. Nghĩa vụ **thông báo sự cố trong 72 giờ** được nêu rõ; không thông báo đủ trong 72 giờ vì lý do kỹ thuật thì phải **thông báo công khai** rồi gửi thông báo cá nhân hoá sau. [FACT §7]

**Founder đang hoạt động với tư cách CÁ NHÂN** (chưa pháp nhân) ⇒ khung phạt cá nhân, **tối đa 1,5 tỷ đồng**, gấp **~12,6 lần** toàn bộ chi phí thật của dự án (≈119 triệu, `10` §9). Đây là con số rủi ro lớn nhất trong hồ sơ và **chưa từng xuất hiện ở tài liệu nào**.

### 5.1. Quy trình 72 giờ — viết trước, dán vào `RUNBOOK.md` (0 pw)

| Giờ | Việc | Ghi chú |
|---|---|---|
| **T+0** | Phát hiện. **Đóng băng ngay**: `remote_config['service_paused'] = true` | Ưu tiên chặn lan rộng hơn giữ dịch vụ chạy |
| T+0 → T+2 | Chụp bằng chứng: log, `audit_log`, ảnh màn hình. **Không sửa gì trước khi chụp** | Sửa trước khi chụp = mất khả năng chứng minh phạm vi |
| T+2 → T+8 | Xác định **phạm vi**: bao nhiêu `person`, loại dữ liệu nào (ảnh = DLCN; `is_16_plus` = DLCN; **không có** ngày sinh, **không có** SĐT — A47 đã cắt sẵn, đây là chỗ quyết định A47 trả lãi) | Ghi ra bằng SQL, không bằng trí nhớ |
| T+8 → T+24 | Bịt lỗ. Xoay mọi khoá: R2 token, `SUPABASE_SERVICE_KEY`, shared secret của cron | Danh sách khoá phải có sẵn trong `RUNBOOK.md` |
| **T+24 → T+72** | **Thông báo**: (a) cơ quan có thẩm quyền theo mẫu của NĐ 356/2025; (b) **từng chủ thể dữ liệu bị ảnh hưởng** — trong sản phẩm này là một dòng ở đầu màn 1 của sổ liên quan + tin nhắn cho người trực | Nếu không kịp đủ trong 72h ⇒ **thông báo công khai** trên trang chính sách rồi bổ sung sau |
| T+72 → T+7 ngày | Báo cáo hậu sự cố vào `audit_log` + quyết định có mở lại `service_paused` không | |

### 5.2. Ba thứ phải có SẴN, nếu không thì 72 giờ là bất khả thi

1. **`audit_log` (A49, 0,15 pw)** — không có nó thì bước T+2→T+8 không trả lời được câu "ai đọc gì, lúc nào", và **không xác định được phạm vi ⇒ phải giả định phạm vi là toàn bộ**. Đây là lập luận mạnh nhất để KHÔNG cắt `audit_log` ở D-01.
2. **Danh sách khoá cần xoay**, viết sẵn trong `RUNBOOK.md`. 5 dòng, 0 pw.
3. **Một địa chỉ liên hệ sống** trên trang chính sách — cùng địa chỉ dùng cho SLA 24h/6h của cơ quan nhà nước (A59). Không được là địa chỉ chỉ founder kiểm mỗi tuần.

### 5.3. 🔴 Cổng tuổi ≥16 hiện đang là **bản ghi**, phải thành **rào chặn**

**Khoản 2 Điều 16 Luật An ninh mạng 2025 (hiệu lực 01/07/2026)**: trẻ em (dưới 16 tuổi, theo Luật Trẻ em 2016) dùng dịch vụ giá trị gia tăng trên không gian mạng thì **cha mẹ/người giám hộ phải đăng ký tài khoản bằng thông tin của MÌNH** và chịu trách nhiệm giám sát. Quy định này đã có sẵn ở **điểm a khoản 3 Điều 27 NĐ 147/2024** từ 25/12/2024. [FACT §7]

A47/QĐ-20 chốt: ô xác nhận ≥16, chỉ lưu `is_16_plus` + `age_gate_at`. **Nhưng không tài liệu nào nói điều gì xảy ra khi người dùng chạm "Chưa đủ 16".**

| Lựa chọn | Hệ quả | Đánh giá |
|---|---|---|
| (a) Vẫn cho vào, chỉ ghi `is_16_plus = false` | Vận hành một dịch vụ có nội dung do trẻ dưới 16 đăng tải, **không có luồng đăng ký của cha mẹ**. Rơi thẳng vào khoản 2 Điều 16 | 🔴 Không chọn |
| (b) **Chặn cứng**: không tạo sổ, không vào sổ, không nộp ảnh. Một màn giải thích bằng tiếng Việt thường | Mất một phần tệp (học sinh lớp 10 phần lớn 15–16 tuổi). Nhưng **0 pw** và là ranh giới duy nhất giữ được với đội 1 người | ✅ **CHỌN** |
| (c) Xây luồng đăng ký của cha mẹ | ≥0,8 pw + xác thực danh tính người lớn. Ngoài mọi trần | ❌ Không khả thi 12 tháng đầu |

**Đã ghi vào `05` §6 và `04` §6.** Chi phí: **0 pw** (chỉ là nhánh `else` của cổng tuổi đã có). Nhưng nó phải đúng **trước** khi có người dùng thật, vì mời một người 15 tuổi vào rồi đuổi ra là tệ hơn không mời.

> Hệ quả marketing, phải nói rõ với `09`: **mọi kênh tuyển nhắm học sinh cấp 3 đều chạm vào rào này.** Đây là lý do độc lập thứ tư để P3 B2B (bán cho lớp học) đã bị cắt (S11).

### 5.4. Điều 32 BLDS 2015 — hai hệ quả cứng, không phải câu hỏi mở

Nguyên tắc: **việc sử dụng hình ảnh của cá nhân phải được người đó đồng ý**; **dùng vì mục đích thương mại thì phải trả thù lao** cho người có hình ảnh, trừ khi có thoả thuận khác. Chế tài không chỉ là phạt hành chính: người có hình ảnh có quyền yêu cầu Toà buộc **thu hồi, tiêu huỷ, chấm dứt sử dụng và bồi thường**. Ngoại lệ chỉ gồm lợi ích quốc gia/công cộng và hoạt động công cộng. [FACT §7]

| Hệ quả | Việc phải làm | Hạn |
|---|---|---|
| **1. Card là "sử dụng hình ảnh"** — nó lấy ảnh của tối đa 8 người ghép thành một vật phẩm rồi phát tán | ToS phải có một câu người thường đọc hiểu, đứng **ngay tại chỗ nộp ảnh** (không phải chôn ở trang chính sách): *"Khi bạn gửi một tấm, tấm đó sẽ xuất hiện ở dạng ảnh nhỏ trên card của sổ tối nay và trên trang xem của ngày đó. Card đó được gửi vào nhóm chat của các bạn."* | **07/09/2026** (cùng ToS) |
| **2. Mọi bề mặt doanh thu dùng ảnh thành viên đều rơi vào vế "thương mại"** ⇒ phải có **đồng ý riêng** và có thể phải **trả thù lao** | Đây là lý do pháp lý **thứ tư, độc lập** để P2 Sổ in Tết đã bị cắt (S13) — và nó áp cho **mọi** phương án in/bán ảnh trong tương lai, kể cả sau khi có Giấy phép MXH. **Ghi thành ràng buộc vĩnh viễn ở `10`**, không phải điều kiện mở lại | đã ghi |

---

## 6. SỔ ĐĂNG KÝ KHẲNG ĐỊNH PHÁP LÝ — trạng thái sau ngày 04/09/2026

> Luật của sổ này: **mỗi khẳng định có đúng một trạng thái**, và mọi tài liệu trích nó **phải trích kèm trạng thái**. Cấm dùng một khẳng định 🟡 hoặc 🔴 mà không gắn nhãn.
>
> 🟢 = có nguồn công khai nhất quán, đã trích được số Điều · 🟡 = nguồn thứ cấp nhất quán, chưa trích nguyên văn Công báo hoặc chưa rõ phạm vi áp dụng · 🔴 = chưa có nguồn nào, là lập luận của người viết hồ sơ

| # | Khẳng định | Trạng thái 03/09 | **Trạng thái 04/09** | Căn cứ mới | Ai chốt được | Hạn |
|---|---|---|---|---|---|---|
| 1 | Ngưỡng **>10.000 lượt truy cập/tháng HOẶC >1.000 người sử dụng thường xuyên/tháng** ⇒ phải xin **Giấy phép**; dưới ⇒ chỉ **Giấy xác nhận thông báo** | 🔴 "không trích được Công báo" | 🟢 **XÁC MINH** | 4 nguồn độc lập nhất quán (Báo Quảng Ninh, Vạn Luật, VietnamNet, CSPL–Bộ TT&TT). Toàn bộ trần beta 60/85/100 sổ đứng vững | — (đã đủ để lập kế hoạch) | ✅ |
| 2 | **"Chỉ MXH có Giấy phép mới được livestream hoặc hoạt động phát sinh doanh thu dưới mọi hình thức"** | 🔴 "phát hiện nặng nhất, chưa trích nguyên văn" | 🟢 **XÁC MINH + CÓ SỐ ĐIỀU: NĐ 147/2024 Điều 24 khoản 6 điểm d** | Luật Việt An trích số điều. **Đây là dòng khoá toàn bộ `10` §3–§7** và làm cho A62 ("doanh thu 0đ tuyệt đối") thành **nghĩa vụ luật định**, không phải lựa chọn kinh doanh | luật sư xác nhận phạm vi | 10/09 |
| 3 | **Điều 27 khoản 3 điểm a/b** (xác thực SĐT VN; trẻ dưới 16 đăng ký bằng thông tin cha mẹ) có áp cho **tier thông báo** không | 🔴 | 🟡 **MỘT PHẦN** | Điều khoản tồn tại, nhắm *"tổ chức, doanh nghiệp cung cấp dịch vụ MXH trong nước"*; khoản 10 Điều 82 buộc xác thực tài khoản đang hoạt động trong 90 ngày. **Văn bản không phân biệt tier** ⇒ đọc thận trọng: **ÁP CHO CẢ HAI** | 🔴 **luật sư — câu 2/7** | 10/09 |
| 4 | 🔴 **MỚI — Điều kiện cấp Giấy phép MXH bao gồm MÁY CHỦ ĐẶT TẠI VIỆT NAM**, lưu dữ liệu ≥2 năm, xác thực bằng SĐT VN/số định danh, tên miền `.vn`, pháp nhân VN | (không ai nêu) | 🟡 **PHÁT HIỆN MỚI** | Vạn Luật. **Hệ quả kiến trúc:** Supabase Singapore + Cloudflare R2 hợp lệ ở **tier thông báo**; **vượt 60 sổ ⇒ phải di trú toàn bộ về hạ tầng VN**. Đây là biện minh mạnh nhất cho quy tắc `domain/` không I/O của `03` §1 — và là lý do trần 60 sổ là trần **kiến trúc**, không chỉ trần hành chính | 🔴 **luật sư — câu 7/7 (máy chủ VN)** | 10/09 |
| 5 | Ngưỡng 10.000 lượt tính theo **"số liệu thống kê trung bình trong 06 tháng liên tục"** | (không ai nêu) | 🟡 **MỘT PHẦN** | Cụm này được xác minh chắc chắn cho ngưỡng **100.000 lượt xuyên biên giới (Điều 23 khoản 3)**; một nguồn thứ cấp áp nó cho cả ngưỡng 10.000. **Nếu đúng, mọi đèn cảnh báo phải đo trên trung bình trượt 6 tháng, không phải trên một tháng đỉnh** — tức đệm rộng hơn nhiều so với thiết kế hiện tại | luật sư (câu phụ, 0 đ) | 10/09 |
| 6 | **Luật 91/2025/QH15** (BVDLCN) thông qua 26/06/2025, **hiệu lực 01/01/2026** | 🟡 | 🟢 **XÁC MINH** | Bộ Công an + nhiều nguồn | — | ✅ |
| 7 | **NĐ 356/2025/NĐ-CP** ban hành 31/12/2025, hiệu lực 01/01/2026, **thay NĐ 13/2023**, 5 chương 42 điều + 10 biểu mẫu | 🟡 | 🟢 **XÁC MINH** | Cổng TTĐT Chính phủ | — | ✅ |
| 8 | 🔴 **MỚI — NĐ 330/2026/NĐ-CP**, ban hành & hiệu lực **19/08/2026**, phạt tối đa **3 tỷ (tổ chức) / 1,5 tỷ (cá nhân)**, nghĩa vụ thông báo sự cố **72 giờ**, tước giấy phép 1–24 tháng | (không có trong hồ sơ) | 🟢 **XÁC MINH** | Cổng TTĐT Chính phủ + LuatVietnam. **Rủi ro tiền lớn nhất của hồ sơ.** Xem §5 | — | ✅ |
| 9 | Ngưỡng doanh thu miễn thuế hộ KD/cá nhân 2026 = **100 hay 200 triệu/năm?** | 🔴 hai con số | 🟢 **CẢ HAI ĐỀU SAI — đúng là 500 triệu đồng/năm** | Luật thuế TNCN & GTGT sửa đổi, hiệu lực 2026. Đồng thời **lệ phí môn bài BỊ XOÁ BỎ với hộ KD/cá nhân KD từ 01/01/2026** (Điều 10 Nghị quyết 198/2025/QH15) — trả lời luôn câu hỏi mở #6 của `05` | — | ✅ |
| 10 | **Điều 32 BLDS 2015**: dùng hình ảnh cá nhân phải được đồng ý; **dùng thương mại phải trả thù lao**; chế tài gồm buộc thu hồi/tiêu huỷ/bồi thường | 🔴 (digest #20 nêu, rơi khỏi email luật sư) | 🟢 **XÁC MINH nội dung** — nhưng 🔴 **áp dụng vào ca cụ thể thì chưa** | Xem §5.4. Hai câu ca cụ thể (ảnh người đã rời sổ; rút đồng ý sau khi bản sao đã phát tán) **vẫn phải hỏi luật sư** | 🔴 **luật sư — câu 5, 6/7** | 10/09 |
| 11 | *"Số đếm lịch sử của sổ (`proof_total_after`, `streak`) là thống kê tổng hợp đã ẩn danh, không phải dữ liệu cá nhân, nên không phải xoá theo yêu cầu"* | 🔴 | 🔴 **VẪN LÀ LẬP LUẬN CỦA NGƯỜI VIẾT** | Không tìm được nguồn nào xác nhận. Đây là **nền móng của nguyên tắc P1** và của cả `04` §6.3 | 🔴 **luật sư — câu 4/7** | 10/09 |

### 6.1. Bốn câu trong gói 7 câu KHÔNG được rút, dù có cắt gì

Sau ngày hôm nay, gói 7 câu (A65/A66, MỘT email, 5–15 triệu) đổi **trọng số**, không đổi số lượng: câu về ngưỡng 10.000/1.000 (#1) và câu về doanh thu (#2) đã **tự trả lời được ở mức lập kế hoạch**, nên bốn câu sau trở thành phần đắt nhất của email:

1. **Điều 27 khoản 3 có áp cho tier Giấy xác nhận thông báo không?** (#3) — quyết định $0/0,4 pw SMS-OTP và quyết định có nên lập TNHH sớm hay không.
2. **Máy chủ có bắt buộc đặt tại VN ở tier thông báo không, và ở tier Giấy phép thì bắt buộc tới mức nào?** (#4) — quyết định toàn bộ kiến trúc sau 60 sổ.
3. **Điều 32 BLDS áp thế nào cho card chứa ảnh 8 người và cho ảnh của người đã rời sổ?** (#10)
4. **`proof_total_after` không giảm khi xoá ảnh có đứng được trước Luật 91/2025 không?** (#11)

> **Hai câu #1 và #2 vẫn ở lại trong email**, nhưng dưới dạng *"xin xác nhận cách hiểu"* — rẻ hơn nhiều so với *"xin tra cứu"*, và giữ được bằng chứng đã hỏi.

---

## 7. BẢNG SỐ ĐÃ KIỂM CHỨNG — 04/09/2026

> Mọi con số dưới đây được tra ngày **04/09/2026**. Cột "trong hồ sơ" là con số đang được dùng trước hôm nay.

### 7.1. Hạ tầng

| Hạng mục | Trong hồ sơ | **Kiểm chứng 04/09** | Phán quyết |
|---|---|---|---|
| R2 lưu trữ Standard | $0,015/GB/tháng | **$0,015/GB/tháng** | ✅ ĐÚNG |
| R2 Class A | $4,50/triệu | **$4,50/triệu** | ✅ ĐÚNG |
| R2 Class B | $0,36/triệu | **$0,36/triệu** | ✅ ĐÚNG |
| R2 egress | $0 | **$0, mọi lớp lưu trữ** | ✅ ĐÚNG — và là thứ làm backup §4.2 gần như miễn phí |
| R2 free tier | (không tài liệu nào ghi) | **10 GB · 1 triệu Class A · 10 triệu Class B mỗi tháng** | ➕ BỔ SUNG — dẫn tới §3.2 |
| **R2 Infrequent Access** | "180 ngày ngủ ⇒ IA, không xoá" (A38) — được viết như **khoản tiết kiệm** | **$0,01/GB/tháng lưu trữ, NHƯNG Class A $9,00/triệu (2×), Class B $0,90/triệu (2,5×), phí lấy dữ liệu $0,01/GB, tối thiểu 30 ngày** | 🔴 **SAI HƯỚNG — xem §7.4** |
| Supabase Pro | $25/tháng | **$25/tháng · 8 GB DB · 100 GB storage · 250 GB egress · backup hằng ngày giữ 7 ngày · 100.000 MAU** | ✅ ĐÚNG |
| Supabase Free | "không backup, ngủ sau 7 ngày" | **500 MB DB · 1 GB storage · 5 GB egress · KHÔNG backup · KHÔNG PITR · project tạm dừng sau 7 ngày không hoạt động · 50.000 MAU** | ✅ ĐÚNG |
| Supabase egress vượt hạn | "$0,09/GB" | **$0,03/GB cached · $0,09/GB uncached, sau 250 GB** | ✅ ĐÚNG (con số hồ sơ là ca xấu, hợp lý) |
| **Supabase spend cap** | (không ai nhắc) | **BẬT SẴN mặc định trên Pro** ⇒ vượt quota thì giới hạn dịch vụ, không sinh hoá đơn thêm | ➕ BỔ SUNG — §3.1 |
| **Vercel Hobby cron** | `03` §2.7 chọn `pg_cron`, coi Vercel Cron là phương án loại | **Hobby: tối đa 1 lần/ngày mỗi job, và thời điểm chỉ đảm bảo TRONG GIỜ** (job đặt 04:05 có thể chạy bất kỳ lúc nào trước 05:00) | ✅ **Quyết định chọn `pg_cron` của `03` được xác minh là ĐÚNG và BẮT BUỘC** — biên 120 giây của `04` §3.5 **không thể** đạt bằng Vercel Cron |
| **Vercel Hobby — điều khoản** | (không ai nhắc) | Gói **phi thương mại** `[xác minh nguồn thứ cấp]` | ➕ BỔ SUNG — §3.3: có doanh thu ⇒ +$20/tháng |

### 7.2. Tiền mặt Việt Nam

| Hạng mục | Trong hồ sơ | **Kiểm chứng 04/09** | Phán quyết |
|---|---|---|---|
| **Tên miền `.vn` năm đầu** | ba con số: 460k / 550–770k / **750k** (A67) | **770.000đ** = lệ phí đăng ký 200.000 + phí duy trì 350.000 + dịch vụ quản trị 200.000; **đã gồm VAT** | 🔧 **SỬA: 750.000 → 770.000đ.** Ba con số cũ nay hoà giải được: **460k là phí NĂM SAU**, 770k là năm đầu |
| `.vn` các năm sau | (không ai ghi) | **460.000đ/năm** | ➕ BỔ SUNG |
| Ưu đãi miễn phí `.vn` | (không ai nhắc) | Có chương trình ưu đãi `id.vn`/`biz.vn` theo Thông tư 20/2023/TT-BTC, nhưng **đợt công bố đã hết 31/12/2025** và không áp cho `.vn` cấp 2 | ❌ Không dùng được — vẫn trả 770k |
| **Tài khoản Apple Developer** | $99/năm | **$99/năm** | ✅ ĐÚNG |
| **Tài khoản Google Play** | $25 một lần | **$25 MỘT LẦN, không gia hạn** | ✅ ĐÚNG |
| Luật chơi 12 tester Google Play | `07` §6: "đồng hồ chạy trên bản build chứ không trên tuổi tài khoản" | **Tài khoản cá nhân tạo sau 13/11/2023: closed test ≥12 tester THẬT, 14 ngày LIÊN TỤC chồng nhau; từ 2026 Google còn kiểm tester có dùng app thật. Một người rớt giữa chừng ⇒ đếm lại từ đầu** | ✅ Lập luận của `07` ĐÚNG và mạnh hơn nó tưởng — thêm lý do S10/C50 cấm mua tài khoản ở T13 |
| **ZNS OTP (Zalo)** | `03` §2.6: **300đ/tin** | **300đ/tin ZNS OTP · 200đ ZNS thường · 120đ ZNS tiện ích, chưa gồm 10% VAT** | ✅ `03` ĐÚNG |
| SMS Brandname | (không ai ghi) | **800–900đ/tin** | ➕ BỔ SUNG |
| **Chi phí SMS OTP nếu Điều 27 áp** | `05` §2 + §12: **$0,2852/SMS ⇒ 480 tin ≈ 3,6 triệu** | $0,2852 ≈ **7.500đ/tin** — đó là giá **SMS quốc tế qua Twilio**, không phải giá kênh VN | 🔧 **SỬA — sai 8–23 lần.** Xem §7.3 |
| Ngưỡng miễn thuế hộ KD/cá nhân | 100 hay 200 triệu/năm | **500 triệu đồng/năm** (Luật thuế TNCN & GTGT sửa đổi, từ 2026) | 🔧 **SỬA cả hai con số** |
| Lệ phí môn bài | "[cần kiểm chứng] có thể đã bãi bỏ" | **BÃI BỎ với hộ KD và cá nhân KD từ 01/01/2026** (Điều 10 NQ 198/2025/QH15) | ✅ Câu hỏi mở #6 của `05` **ĐÓNG** |

### 7.3. 🔧 Sửa số nặng nhất: chi phí SMS OTP sai 8–23 lần

| | Bản cũ (`05`) | **Bản đúng** |
|---|---|---|
| Đơn giá | $0,2852/tin ≈ **7.500đ** | **ZNS OTP 300đ + 10% VAT = 330đ** · SMS Brandname **800–900đ** |
| 480 tin (320 người × 1,5 lần) | ≈ **3,6 triệu đ** | **158.400đ** (ZNS) · **432.000đ** (SMS Brandname) |
| 600 tin (400 người) | ≈ 4,5 triệu | **198.000đ** · **540.000đ** |
| 1.500 tin (1.000 người) | ≈ **11 triệu** | **495.000đ** · **1,35 triệu** |
| Sai số | — | **8× (SMS Brandname) đến 23× (ZNS)** |

**Vì sao con số cũ sai:** $0,2852 là giá **Twilio gửi SMS quốc tế vào VN**. Nội dung xác thực trong nước đi bằng ZNS hoặc SMS Brandname của nhà mạng VN, rẻ hơn một bậc độ lớn. Chính `03` §2.6 đã có con số đúng (300đ) — **hai tài liệu trong cùng hồ sơ dùng hai giá chênh nhau 25 lần cho cùng một tin nhắn.**

**Hệ quả — và đây là hệ quả thật sự:**
- Vế **TIỀN** của bất đồng "phải bật SMS OTP không" (`05` §12 mục 2) **sụp**: 158k–540k không phải một khoản làm ai đổi ý.
- Vế còn sống là vế **SẢN PHẨM** (+0,4 pw và phá quyết định "không màn đăng nhập") và vế **PHÁP LÝ** (ZNS OTP đòi Zalo OA đã xác minh ⇒ **đòi pháp nhân**, tức nó buộc lập TNHH sớm — đúng thứ `05` đang cố hoãn).
- ⇒ Câu hỏi mở #2 của `05` phải viết lại: **không còn là câu hỏi về tiền, là câu hỏi về pháp nhân và về 0,4 pw.**

### 7.4. 🔧 Sửa hướng: R2 Infrequent Access cho thumbnail là **tối ưu ngược**

A38 chốt: sổ ngủ 180 ngày ⇒ chuyển thumbnail sang R2 Infrequent Access, không xoá. Đúng ở phần "không xoá". **Sai ở phần "chuyển sang IA".**

| | Standard | Infrequent Access |
|---|---|---|
| Lưu trữ | $0,015/GB/tháng | $0,010/GB/tháng (**tiết kiệm $0,005**) |
| Class B (đọc) | $0,36/triệu | **$0,90/triệu (đắt 2,5×)** |
| Class A (ghi/chuyển lớp) | $4,50/triệu | **$9,00/triệu (đắt 2×)** |
| Phí lấy dữ liệu | $0 | **$0,01/GB** |
| Tối thiểu lưu | không | **30 ngày** |

**Điểm hoà vốn:** tiết kiệm $0,005/GB/tháng bị xoá sạch bởi **một lần đọc toàn bộ mỗi 2 tháng** ($0,01/GB). Mà "sổ ngủ đông" trong sản phẩm này **không phải là dữ liệu không ai đọc** — cả `08` §7.2–7.3 lẫn A38 xây trên đúng ý *"một ngày nào đó nhóm mở lại và ảnh vẫn còn"*. Một lần mở lại = một lần đọc toàn bộ.

**Quy mô của khoản tiết kiệm ở trần pháp lý 60 sổ:** thumbnail tổng ≈ 60 sổ × 13,9 MB/sổ-năm ≈ **0,83 GB** ⇒ tiết kiệm tối đa **$0,004/tháng ≈ 105 đồng/tháng**, trong khi vẫn nằm trọn trong free tier 10 GB (tức tiết kiệm thật = **$0**).

**PHÁN QUYẾT (bảng trọng tài không nói ⇒ chọn phương án thận trọng hơn và ghi rõ):**
> **BỎ nhánh "chuyển sang Infrequent Access" khỏi MVP-0.** Giữ nguyên vế bắt buộc của A38: **thumbnail VĨNH VIỄN, KHÔNG xoá**. Lifecycle rule chuyển lớp là **tối ưu hoá sớm tốn 0,02 pw để tiết kiệm 0đ và làm chậm đúng khoảnh khắc cảm xúc mà sản phẩm sống nhờ**. Điều kiện mở lại: **tổng `thumb/` vượt 100 GB** (≈ 7.200 sổ-năm) — ở đó tiết kiệm mới đạt $0,5/tháng và mới đáng bàn.
>
> Đây là **thay đổi cách thi hành A38, không phải bác A38**. Đã ghi vào §9 Bất đồng #1.

### 7.5. Số vẫn KHÔNG xác minh được — giữ nguyên nhãn

| Con số | Nơi dùng | Trạng thái sau 04/09 | Vì sao không đóng được |
|---|---|---|---|
| **eCPM web display VN $0,25–0,60** | `10` §3.4, GT-13 | 🔴 **`[ước lượng, chưa xác minh]` — dải nguồn thứ cấp còn RỘNG HƠN: $0,04 – $1,00** | Nguồn công khai chỉ có eCPM **in-app** hoặc giá CPM **người mua trả** (12.500–25.000đ/1.000 hiển thị ≈ $0,50–1,00), không phải doanh thu nhà xuất bản web. Một nguồn ghi AdSense VN ≈ **$0,04**. Không có nguồn nào cho tệp Gen Z VN trên web. **Giữ $0,25–0,60 làm dải làm việc; kết luận "quảng cáo là ÂM" mạnh hơn nếu con số thật là $0,04, nên kết luận không đổi** |
| **q_c = 0,53** | khắp hồ sơ | 🔴 `[suy luận, chưa đo — H2]` | Chỉ đo được ở Bước 0 (08–21/09). Không có nguồn ngoài |
| **25 lượt truy cập/người/tháng** | quy đổi ngưỡng pháp lý ⇒ trần 60 sổ | 🔴 `[ước lượng, ảnh hưởng RẤT CAO]` | Phụ thuộc định nghĩa "lượt truy cập" mà văn bản không định nghĩa. **Nhưng §6 #5 làm nó bớt nguy hiểm**: nếu ngưỡng tính trên trung bình 6 tháng thì sai số của tham số này được san phẳng |
| **A = 4,0 người/sổ** | mọi bảng quy đổi | 🔴 `[ước lượng, A70]` | Đo được ở Bước 0 |
| **110 KB/ảnh sau nén** | mọi bảng chi phí | 🔴 `[chưa đo, A37]` | Đo được ở buổi 04/09 trên 20 ảnh Android thật — **hôm nay** |
| **8,4 phút/sổ/tuần ⇒ trần vận hành 35 sổ** | `09` §2.2, A92 | 🔴 `[ước lượng]` | Chỉ đo được khi beta chạy |
| **Thị phần Android VN** | D-08 | ✅ **ĐÃ ĐÓNG 04/09/2026** — StatCounter T8/2026: **Android 57,33% · iOS 42,64%** (`docs/adr/ADR-003-thi-phan-android-vn.md`) | Nhãn `[FACT]` của ">85%" **bị thu hồi**. Hệ quả chưa tính hết: web push phủ ~57%, iOS ~43% |
| **Giá in sổ A5 + ship 200–240k** | `10` P2 (đã cắt S13) | 🔴 `[ước lượng]` | P2 đã cắt ⇒ **hạ mức ưu tiên xuống 0**, không tốn thời gian kiểm |
| **Phí ý kiến luật sư 5–15 triệu** | ngân sách tiền mặt | 🔴 vẫn chưa có báo giá thật | **Đã trễ hạn A104 (03/09).** Không máy nào thay được ba cuộc gọi |

---

## 8. CẦN FOUNDER QUYẾT

> Theo luật của `_rulings.md` mục D: nêu **hai lựa chọn + hệ quả có số + khuyến nghị + hạn + mặc định khi quá hạn**. Không tự quyết.

### ⚠️ D-11 (MỚI) — chi 0,25 pw hàng rào an toàn, hay chấp nhận thiếu có ghi ngày?
| | |
|---|---|
| **(a) Chi đủ 0,25 pw** | Key card có nonce (0,02) + vẽ lại card khi xoá ảnh (0,08) + rate limit 7 luật (0,10) + backup R2 hằng tuần & diễn tập (0,05). Backlog **7,25 → 7,50 pw**, khoản D-01 phải cắt tăng từ 1,08 lên **1,33 pw** |
| **(b) Chỉ chi 0,10 pw phần luật định** | Chỉ làm mục 2 (vẽ lại card, 0,08) + nonce (0,02). Bỏ rate limit và backup R2 ⇒ **chấp nhận có ghi ngày**: sổ có thể bị dò `code6` trong 2,2 giờ ở 60 sổ (§2.2), và một lệnh xoá sai làm mất vĩnh viễn toàn bộ thumbnail (§4.1) |
| **Khuyến nghị** | **(a)**, nhưng đảo thứ tự thi hành: **backup `rclone` (§4.2) làm TRƯỚC, trong tuần này, vì nó là 20 phút cấu hình và 0 pw code** — kỹ thuật nó không phải hạng mục phát triển. Còn lại 0,20 pw vào D-01 |
| **Hạn** | **22/09/2026**, cùng D-01 |
| **Quá hạn** | (b) tự có hiệu lực và **§2, §4 phải được gắn nhãn "đã biết, đã chấp nhận, ngày 22/09/2026"** trong ADR-000 — chấp nhận có ghi ngày vẫn tốt hơn không biết |

### ⚠️ D-12 (MỚI) — spend cap của Supabase: giữ BẬT (dịch vụ sập) hay TẮT (hoá đơn không trần)?
| | |
|---|---|
| **(a) Giữ BẬT (mặc định)** | Vượt quota ⇒ dịch vụ bị giới hạn/tạm dừng. Hoá đơn không bao giờ vượt $25 + add-on đã chọn. Rủi ro: một tối đông người ⇒ sổ đứng, và **nó đứng đúng lúc 21:00** |
| **(b) TẮT** | Dịch vụ chạy tiếp, hoá đơn mở. Với founder chưa pháp nhân, dùng thẻ cá nhân, **không có trần trên** |
| **Khuyến nghị** | **(a) GIỮ BẬT.** Ở quy mô ≤60 sổ, §3.2 chứng minh khả năng chạm quota gần bằng 0, nên (a) gần như không có chi phí thật; còn (b) mở một rủi ro không giới hạn để đổi lấy một lợi ích không tồn tại |
| **Hạn** | **trước 02/12/2026** (ngày nâng Pro). Ghi một dòng vào ADR-000 |
| **Quá hạn** | (a) tự có hiệu lực (đó là mặc định của nhà cung cấp) |

### ✅ D-08 — ĐÃ ĐÓNG 04/09/2026
Thị phần Android VN = **57,33%** (iOS 42,64%, khác 0,03%) — StatCounter Global Stats, Mobile OS Viet Nam, **T8/2026**, truy cập 04/09/2026. Ghi ở `docs/adr/ADR-003-thi-phan-android-vn.md`. Nhãn `[FACT]` của ">85%" **bị thu hồi** ở `01` §6 mục 3, `03` R3, `07` §8(b), `08` §8.2. **Hệ quả phải tính lại:** Android web push (S09, +0,3 pw) phủ **~57%** chứ không ~85% ⇒ nếu H1 rơi vùng xám thì đây là khoản chi tệ hơn hồ sơ giả định; và iOS là **~43%** người dùng, nên mọi câu "để iOS sau" phải xem lại. Cảnh báo phương pháp: StatCounter đo **lưu lượng web** (thiên vị iOS so với thị phần thiết bị) — nhưng sản phẩm này *là* web trong webview, nên đó đúng là thước đo cần dùng.

### ⚠️ Việc đã quá hạn tính đến 04/09
| Việc | Hạn | Trạng thái |
|---|---|---|
| Gửi email 7 câu cho luật sư (một lần trả phí, 5–15 triệu) | **03/09** (A65/A66/A104) | 🔴 quá hạn 1 ngày. §6.1 đã sắp lại trọng số 7 câu — **nội dung email đã sẵn sàng, chỉ còn bấm gửi** |
| Lấy 3 báo giá luật sư + báo giá domain `.vn` | **03/09** (A104) | 🟡 domain **đã kiểm chứng được giá công khai 770.000đ (§7.2)** ⇒ chỉ còn 3 báo giá luật sư |

---

## 9. BẤT ĐỒNG VỚI BẢNG PHÁN QUYẾT

**Bất đồng #1 — A38, vế "180 ngày ngủ ⇒ chuyển R2 Infrequent Access".**
Đã thi hành đầy đủ vế chính của A38 (**thumbnail VĨNH VIỄN, KHÔNG xoá, chỉ dọn khi `archived` + báo trước 30 ngày + có đường tải về**) ở mọi nơi. Bất đồng chỉ ở **cơ chế**: §7.4 chứng minh bằng biểu giá công bố rằng chuyển sang IA **tiết kiệm 0đ trong toàn bộ vòng đời hợp pháp của dự án** (0,83 GB ở trần 60 sổ, nằm trọn free tier 10 GB) và **tăng giá mỗi lần đọc 2,5 lần** — trong khi "sổ ngủ được đánh thức" chính là khoảnh khắc sản phẩm tồn tại để phục vụ. Đề nghị trọng tài sửa A38 thành: *"thumbnail vĩnh viễn, lớp Standard; xét chuyển lớp lạnh khi `thumb/` > 100 GB"*. **Đã ghi hiện trạng ra ở `03` §2.5 và `04` §6.1 dưới dạng ghi chú, KHÔNG tự xoá chữ IA khỏi hai file đó** vì nó là hằng số của bảng phán quyết.

**Bất đồng #2 — A60 (auto-hide toàn cục ở report đầu tiên) không có trần.**
Đã thi hành A60 nguyên văn. Nhưng §2.3 chỉ ra nó là **vũ khí griefing**: một người trong sổ 8 người ẩn được mọi tấm của mọi người, mỗi ngày. Bản vá đề xuất (**trần 3 tấm đang ẩn/người; report thứ 4 vẫn ghi nhận, vẫn vào SLA 48h, chỉ mất hiệu lực tự động**) không giảm nghĩa vụ pháp lý nào — nhưng nó **đổi một hằng số của A60**, nên cần trọng tài phê chuẩn, không tự làm.

**Không có bất đồng nào khác.** Các sửa số ở §7 là sửa **sự thật kiểm chứng được** (giá, ngày, số điều), không phải bất đồng với phán quyết — theo luật "bảng phán quyết thắng khi hai nguồn lệch nhau, nhưng bảng phán quyết không phán quyết được biểu giá của Cloudflare".

---

## 10. NGUỒN KIỂM CHỨNG — 04/09/2026

**Hạ tầng:** [Cloudflare R2 Pricing (developers.cloudflare.com)](https://developers.cloudflare.com/r2/pricing) · [R2 Pricing 2026 — EgressCost](https://egresscost.com/cloudflare/) · [R2 free tier 2026 — Nubbo](https://nubbo.app/blog/cloudflare-r2-free-tier/) · [Supabase Pricing 2026 — UI Bakery](https://uibakery.io/blog/supabase-pricing) · [Supabase Pricing 2026 — Flexprice](https://flexprice.io/blog/supabase-pricing-breakdown) · [Supabase Free Tier Limits 2026](https://www.itpathsolutions.com/supabase-free-tier-limits) · [Vercel — Limits](https://vercel.com/docs/limits) · [Vercel Hobby cron limits](https://runhooks.app/blog/vercel-hobby-cron-job-limits-explained/) · [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby)

**Tiền mặt VN:** [Bảng giá tên miền — iNET](https://helpdesk.inet.vn/knowledgebase/bang-gia-ten-mien-va-cac-loai-phi) · [VNNIC biểu phí mới — PA Việt Nam](https://www.pavietnam.vn/vn/tin-tuc-thong-bao-ve-viec-vnnic-ap-dung-bieu-phi-moi-cho-ten-mien-vn.html) · [Ưu đãi phí tên miền .vn](https://www.vecomnet.vn/uu-dai-phi-le-phi-dang-ky-duy-tri-su-dung-ten-mien-vn-tao-dieu-kien-cho-nguoi-dan-doanh-nghiep-trong-cac-hoat-dong-kinh-te-so-xa-hoi-so) · [Google Play $25 một lần (2026)](https://www.iconikai.com/blog/google-play-developer-account-fee-2026) · [App Store & Google Play publishing costs 2026](https://gtstu.com/app-store-google-play-publishing-costs/) · [Google Play 12 tester / 14 ngày (2026)](https://ontest.app/blog/google-play-12-testers-14-days-requirement-explained) · [Bảng giá ZNS 2026](https://www.smsthuonghieu.com/gia-zns/) · [Bảng giá SMS Brandname + Zalo + Viber](https://modunsoft.com/bang-gia-cuoc-sms.html)

**Pháp lý:** [NĐ 147/2024 — CSPL Bộ TT&TT](https://cspl.mic.gov.vn/Pages/TinTuc/138924/NGHI-dINH-147-2024-Nd-CP-QUAN-LY-CUNG-CAP-SU-DUNG-DICH-VU-INTERNET--THONG-TIN-TREN-MANG.html) · [NĐ 147 Điều 24 khoản 6 điểm d (doanh thu/livestream) — Luật Việt An](https://luatvietan.vn/nghi-dinh-147-2024-nd-cp-quan-ly-cung-cap-su-dung-dich-vu-internet-va-thong-tin-tren-mang.html) · [MXH dưới 1.000 người không cần cấp phép — Báo Quảng Ninh](https://baoquangninh.vn/mang-xa-hoi-duoi-1-000-nguoi-su-dung-khong-can-xin-cap-phep-3330272.html) · [Điều kiện cấp GP MXH (máy chủ tại VN, lưu ≥2 năm) — Vạn Luật](https://vanluat.vn/giay-phep-mang-xa-hoi-998.html) · [Xác thực tài khoản MXH Điều 27 — Bộ KH&CN](https://mst.gov.vn/xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-cu-hich-moi-tu-nghi-dinh-147-2024-nd-cp-197241227105213649.htm) · [Luật 91/2025/QH15 — Bộ Công an](https://bocongan.gov.vn/chinh-sach-phap-luat/co-so-du-lieu-van-ban/luat-bao-ve-du-lieu-ca-nhan-1753688803) · [NĐ 356/2025/NĐ-CP — Cổng TTĐT Chính phủ](https://vanban.chinhphu.vn/?pageid=27160&docid=216387) · [NĐ 330/2026/NĐ-CP — Cổng TTĐT Chính phủ](https://vanban.chinhphu.vn/?docid=219266&pageid=27160) · [NĐ 330/2026 phạt tới 3 tỷ — LuatVietnam](https://luatvietnam.vn/tin-van-ban-moi/nghi-dinh-330-2026-vi-pham-ve-bao-ve-du-lieu-ca-nhan-co-the-bi-phat-den-3-ty-dong-186-111871-article.html) · [Trẻ dưới 16 — Luật An ninh mạng 2025 Điều 16 khoản 2, hiệu lực 01/7/2026](https://luatvietnam.vn/tin-van-ban-moi/tre-em-dung-mang-xa-hoi-phai-dang-ky-tai-khoan-bang-thong-tin-cua-cha-me-tu-hom-nay-01-7-2026-186-109991-article.html) · [Điều 32 BLDS 2015 — Thư viện Pháp luật](https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/tu-van-phap-luat/65989/quyen-cua-ca-nhan-doi-voi-hinh-anh-cua-minh-theo-bo-luat-dan-su-2015) · [Ngưỡng miễn thuế hộ KD 500 triệu/năm — Cổng Xây dựng chính sách](https://xaydungchinhsach.chinhphu.vn/thong-nhat-ho-kinh-doanh-co-doanh-thu-den-500-trieu-dong-nam-khong-phai-nop-thue-119251210100204058.htm) · [Bãi bỏ lệ phí môn bài từ 01/01/2026 — Thư viện Pháp luật](https://thuvienphapluat.vn/chinh-sach-phap-luat-moi/vn/ho-tro-phap-luat/chinh-sach-moi/100420/mien-thue-gtgt-thue-tncn-tu-2026-cho-ho-kinh-doanh-co-doanh-thu-duoi-500-hay-200-trieu)

**eCPM (không đủ để đóng):** [Giá CPM AdSense theo quốc gia](https://senads.vn/blog/gia-cpm-google-adsense/) · [Chi phí quảng cáo Google Ads 2026](https://vietnix.vn/chi-phi-quang-cao-google-ads/)
