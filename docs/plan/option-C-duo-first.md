# HƯỚNG C — DUO-FIRST: bắt đầu từ 2 người

_Thiết kế sản phẩm v2 cho Teemi. Viết 2026-09-03. Người viết: product designer được giao DUY NHẤT hướng này._

> Ràng buộc tự đặt cho toàn bộ tài liệu: mọi con số đều ghi rõ **[FACT + nguồn]** / **[suy luận từ X]** / **[ước lượng]**. Không có câu nào mô tả tầm nhìn quá 12 tuần.

**Tên gọi.** Phán quyết chiến lược §8 đã chốt phải đổi tên (`teemi` → Temu ở cả App Store VN lẫn US, `temi`/`tumi`/`tuma` cũng vậy — [FACT, probe itunes.apple.com/search 2026-08-28]). Trong tài liệu này tôi dùng **Chụm** (từ shortlist đã sàng của phán quyết: Chụm/Chum, Chumi, Rusi) vì nó mô tả đúng đơn vị sản phẩm mới: hai cái đầu chụm lại. Nếu founder chọn tên khác, mọi thứ dưới đây không đổi.

---

## 1. Câu định vị — bằng ngôn ngữ người dùng

> **"Tao với mày kèo nhau đi: mỗi đứa một việc, tối chụp một tấm, đứt là đứt cả hai."**

Đây là câu **Huy nhắn cho Nam trong Zalo**, không phải câu founder viết trên landing page. Kiểm tra bằng ba tiêu chí của phản biện #24 ("SÁU câu định vị khác nhau = không có câu định vị nào; 'daily social ritual' là ngôn ngữ founder"):

- Không có từ nào là thuật ngữ sản phẩm: không "ritual", không "private-first", không "boss", không "proof" (dùng "chụp một tấm").
- Nói được trong một hơi, qua điện thoại, không cần giải thích lần hai.
- Chứa đúng ba thứ: **ai** (tao với mày — 2 người, không phải nhóm), **làm gì** (mỗi đứa một việc — giữ nguyên differentiator duy nhất mà r01 tìm ra trong 16 app), **cái gì mất nếu bỏ** (đứt là đứt cả hai — coupling ở n=2).

Câu cho store listing (khác câu người dùng nói, và đó là chuyện bình thường): *"Rủ đúng một đứa. Mỗi đứa một kèo. 14 ngày."*

**Từ "boss" bị xoá khỏi mọi câu bán** — theo phán quyết §8, cùng một hành động đó cắt luôn phần lớn rủi ro bị xếp trò chơi điện tử G1 theo NĐ 147/2024.

---

## 2. Core loop — 5 bước, kèm thời gian tính bằng giây

Ngân sách tổng: **≤30 giây/ngày/người**. Đây là ràng buộc thiết kế, không phải mong muốn. Lý do định lượng: FIX 5 của phản biện #1 — mọi giây ma sát proof đều là đòn bẩy phi tuyến; ở đơn vị duo, sự kiện lõi là q² nên +5 điểm q làm q² tăng **+21%** ở q=0,50 [suy luận: (0,55/0,50)² − 1].

| # | Bước | Người dùng làm gì | Giây |
|---|---|---|---|
| 1 | **Liếc** | Widget Android trên màn hình chính: `Nam nộp rồi · còn mày · ngày 9/14`. Không mở app. | **2** |
| 2 | **Chụp** | Chạm widget → app mở **thẳng vào camera** (không màn trung gian) → chụp → tự gửi. 2 chạm. | **9** |
| 3 | **Thấy nó** | Ảnh của đứa kia hiện ngay dưới ảnh mình. Thả 1 trong 5 emoji hoặc gõ 1 câu ngắn. | **8** |
| 4 | **Ô sáng** | Lưới 2×14 ô: ô hôm nay của mình sáng lên. Nếu cả hai cùng sáng → cột đó đổi màu ("ngày đôi"). Chỉ xem. | **3** |
| 5 | **21:00 — thẻ tối** | Push một ảnh recap của riêng cặp: `Ngày 9 · 2/2 · 6 ngày đôi`. Xem, đôi khi screenshot ném vào Zalo. | **6** |

**Tổng: 28 giây.** Bước 1 và 4 không cần mở app; bước 5 xem được ngay trên notification. Nghĩa là ngày nào bận, người dùng vẫn chạm sản phẩm mà không tốn session.

Việc thật (đi bộ 20 phút, học 15 phút) nằm **ngoài** vòng lặp và không được tính vào 28 giây — đây là chỗ mọi ước lượng của DOC 1 lẫn của r03 hay nhầm.

---

## 3. Màn hình MVP — 7 màn, không hơn

| # | Màn | Nội dung tối thiểu | Cắt gì khỏi nó |
|---|---|---|---|
| 1 | **Vào** | Google/Apple sign-in. Một nút. | Không phone OTP ở MVP (Twilio $0,2852/SMS đi VN [FACT, r05]; nghĩa vụ xác thực SĐT theo NĐ 147 gắn với mốc giấy tờ, không gắn ngày đầu TestFlight [suy luận từ phản biện #10]) |
| 2 | **Chọn kèo** | 8 preset + ô tự viết. 1 chạm. | Bỏ hoàn toàn form if-then 3 trường của r03 (đẩy xuống sau ngày 7) |
| 3 | **Camera → proof** | Mở thẳng camera, chụp, nén client-side, hàng đợi offline. | Không filter, không video, không chỉnh sửa, không caption bắt buộc |
| 4 | **Duo (home)** | Lưới 2×14 ô · trạng thái hôm nay · nút *chọc* (1-1) · nút *gánh* · switcher ngang nếu có duo thứ 2 | Không HP, không boss, không xếp hạng, không % |
| 5 | **Mời** | Link Zalo + mã 6 ký tự + web preview đọc-được-không-cần-cài | Không quyền danh bạ ở MVP (một permission prompt = một điểm rơi funnel) |
| 6 | **Thẻ mùa / recap** | Ảnh 9:16 render sẵn, chữ to, dễ crop, chân card có deep-link | Không AI, không theme, không skin |
| 7 | **Cài đặt & an toàn** | Life Happens · kết thúc mùa · report/block · xoá proof · xoá tài khoản · hướng dẫn tắt tối ưu pin | — |

**Không có màn Timeline riêng** — lưới 2×14 ở màn 4 *chính là* timeline; cuộn lên là mùa trước. Một object phục vụ ba việc (trạng thái hôm nay / ký ức tích luỹ / artifact để share), đúng cách phản biện #9 chỉ ra rằng 17 "hệ thống" thực chất là 7–8.

**Không có màn chat.** Đây là quyết định có chủ đích, xem §5 và §8.

---

## 4. Cơ chế: bảng số, không nói chung chung

### 4.1. Ba định nghĩa cứng (ghi ADR trước dòng code đầu tiên)

```
q          = tỉ lệ ngày một thành viên Active nộp proof
duo_active = duo có ≥1 người nộp proof trong 7 ngày gần nhất
duo_alive  = duo có CẢ HAI người nộp proof trong 7 ngày gần nhất   ← chỉ số kill/tiếp
```

Phản biện #6 chứng minh định nghĩa "nhóm sống" đã trôi ngay trong repo (r04 §13 nói ≥3, §64 nói ≥2) **trước khi có một user nào**. Ở n=2, khe hở đó biến mất: hoặc 2, hoặc chết. Đây là lợi ích quản trị lớn nhất của hướng C và nó miễn phí.

### 4.2. Sự kiện lõi: "ngày đôi" = q²

Không có boss, không có HP, không có damage. Đơn vị cảm xúc là **ngày đôi** — một cột trong lưới 2×14 mà cả hai ô đều sáng.

| q | P(ngày đôi) = q² | Ngày đôi kỳ vọng / mùa 14 ngày | P(có ít nhất 1 người nộp) = 1−(1−q)² |
|---|---|---|---|
| 0,35 | 12,3% | 1,7 | 57,8% |
| 0,40 | 16,0% | 2,2 | 64,0% |
| 0,45 | 20,3% | 2,8 | 69,8% |
| 0,50 | 25,0% | 3,5 | 75,0% |
| **0,55** | **30,3%** | **4,2** | **79,8%** |
| 0,60 | 36,0% | 5,0 | 84,0% |
| 0,65 | 42,3% | 5,9 | 87,8% |

[Toán thuần, giả định độc lập giữa hai người trong ngày — thực tế có tương quan dương vì họ nhắc nhau, nên q² là **ước lượng thận trọng**.]

**So với nhóm 5 (bảng gốc của phản biện #1):**

| q | duo 2/2 | nhóm 5, combo 5/5 | Lợi thế duo | nhóm 5, combo 3/5 |
|---|---|---|---|---|
| 0,40 | 16,0% | 1,02% | **×15,6** | 31,7% |
| 0,45 | 20,3% | 1,85% | **×11,0** | 40,7% |
| 0,50 | 25,0% | 3,12% | **×8,0** | 50,0% |
| 0,55 | 30,3% | 5,03% | **×6,0** | 59,3% |
| 0,60 | 36,0% | 7,78% | **×4,6** | 68,3% |

**Đọc bảng này trung thực, kể cả phần bất lợi:** duo đánh bại combo 5/5 từ 4,6 đến 15,6 lần — nhưng **thua ngưỡng 3/5** ở mọi giá trị q. Nếu chỉ so tần suất khoảnh khắc đỉnh, `ceil(0,6×Active)` trên nhóm 5 là cơ chế tốt hơn. Duo không thắng ở đó. Duo thắng ở chỗ khác: **xác suất đơn vị được HÌNH THÀNH** (§4.4) và **không có chỗ núp** (§4.6). Ai bán hướng C bằng bảng q² mà giấu cột 3/5 là đang bán sai hàng.

### 4.3. Cái thay thế boss: lưới 2×14 và thẻ mùa

Mùa cứng **14 ngày**. Lưới 28 ô. Mỗi proof = 1 ô sáng. **Đơn điệu tăng, không bao giờ mất ô** — đây là bản duo của FIX 1 ("boss chỉ mất máu, không hồi máu") và nó mạnh hơn: không có đại lượng nào có thể giảm, nên không tồn tại câu "hôm nay tụi mình tụt".

Số ô sáng cuối mùa ~ Binomial(28, q). Hạng thẻ mùa:

| Hạng | Ngưỡng ô | P(đạt) ở q=0,45 | P(đạt) ở q=0,55 |
|---|---|---|---|
| Đồng — *"có mặt"* | ≥10 | ~88% | ~99% |
| Bạc — *"đều"* | ≥15 | ~24% | ~57% |
| Vàng — *"cày"* | ≥20 | ~0,4% | ~4% |
| Full 28/28 | 28 | ~0% | ~0% |

[Xấp xỉ chuẩn với hiệu chỉnh liên tục; trung bình 28q, sd = √(28q(1−q)) ≈ 2,63. Giả định độc lập — thực tế phương sai **cao hơn** vì q khác nhau giữa người, nên đuôi trên sẽ dày hơn bảng này.]

Thiết kế theo FIX 4 của phản biện #1 — ba tầng cảm xúc, không dồn hết vào một sự kiện hiếm:
- **Hằng ngày:** ô của mình sáng (xác suất = q, luôn nằm trong tay mình, không phụ thuộc đứa kia).
- **Thường xuyên:** ngày đôi (20–30% số ngày, tức 3–4 lần/mùa) → cột đổi màu + một câu duy nhất trong recap.
- **Hiếm:** hạng Bạc/Vàng cuối mùa → thẻ mùa đẹp để ném vào Zalo.

Không có gacha, không vật phẩm ảo, không quy đổi. Lý do không phải thẩm mỹ: NĐ 174/2026 phạt 60–80 triệu nếu cho mua bán vật phẩm ảo, 170–200 triệu nếu quy đổi ra tiền/thẻ [FACT, r08 qua digest].

### 4.4. Toán cold start: duo cần 1 lời mời thành công, nhóm cần 2

Dùng đúng tham số của phần phản bác trong phản biện #5: người **chủ động mời** có p ≈ 0,16 mỗi lời mời (kịch bản rủ mặt đối mặt/nhắn riêng), không phải 0,08 (thả link thụ động).

| Số lời mời | P(tạo được duo) = 1−(1−p)^k | P(tạo được nhóm ≥3) = P(≥2 nhận) | Install / đơn vị sống — duo | Install / đơn vị sống — nhóm |
|---|---|---|---|---|
| 2 | 29,6% | 2,6% | 4,5 | 51,4 |
| 4 | 50,2% | 12,3% | 3,3 | 13,3 |
| 6 | 64,9% | 24,7% | 3,0 | 7,9 |

[Bin(k; 0,16); install kỳ vọng của một seed = 1 + 0,16k; chia cho xác suất đơn vị hình thành. Phép nhân là suy luận, tham số 0,16 là [ước lượng] kế thừa từ digest.]

**Kết luận có thể hành động:** ở kịch bản 6 lời mời, duo tốn **3,0 install để ra một đơn vị sống**, nhóm tốn **7,9** — rẻ hơn **2,6 lần**. Quy về đầu người (duo = 2 chỗ, nhóm = 3 chỗ): 1,5 vs 2,6 install/chỗ, rẻ hơn 1,75 lần. Đây là con số biện minh cho toàn bộ hướng C, và nó là con số duy nhất trong tài liệu này mà tôi tin là chắc.

### 4.5. Toán sống sót: duo KHÔNG sống dai hơn nhóm — và đây là chỗ hướng C yếu nhất

Dùng đúng mô hình 2 lớp của phản biện #6 (30% đơn vị "khoẻ" D30/người = 45%; 70% "yếu" = 8%):

| Mô hình tương quan nội bộ | duo_alive D30 (cần 2/2) | group_alive D30 (cần ≥3/5) |
|---|---|---|
| Độc lập có điều kiện | **6,5%** | 12,5% |
| Tương quan hoàn hảo | **19,1%** | 19,1% |

[0,3×0,45² + 0,7×0,08² = 6,5%; 0,3×0,45 + 0,7×0,08 = 19,1%. Số nhóm 5 lấy nguyên từ digest.]

**Nói thẳng: duo không cải thiện tuổi thọ của đơn vị. Nó cải thiện xác suất đơn vị ra đời.** Duo có **dự phòng bằng 0** — nhóm 5 chịu được 2 người rụng, duo chịu được 0.

Câu trả lời cấu trúc cho việc này là **danh mục duo**, không phải microcopy:

| Số duo song song của 1 người | P(còn ≥1 duo sống ở D30), p_duo = 0,19 | p_duo = 0,30 |
|---|---|---|
| 1 | 19,0% | 30,0% |
| 2 | 34,4% | 51,0% |
| 3 | **46,9%** | **65,7%** |

[1−(1−p)^k. Cảnh báo: các duo của cùng một người **không độc lập** (chung một q, chung một cái điện thoại, chung một tuần thi) — con số thật thấp hơn bảng này. Đây là ước lượng đầu trên.]

Trần cứng **3 duo/người**, và duo thứ 2 chỉ mở khoá sau khi duo thứ 1 đạt **≥5 ngày đôi**. Lý do đặt cổng: tránh phân tán ở onboarding (giai đoạn duy nhất mà sự tập trung có giá trị), và giữ MVP một-nhóm-một-màn. Tiền lệ: Duolingo giới hạn cứng 5 Friend Streak song song [FACT, blog.duolingo.com qua digest phản biện #2].

### 4.6. Ba cơ chế nhỏ, mỗi cái giải một phản biện cụ thể

**a) "Chọc" (nudge) — 1-1, do người bấm, không broadcast.** Duolingo đã ship đúng nút này cho 50M+ DAU và đo được **+22% khả năng hoàn thành bài học hằng ngày** ở người có ≥1 Friend Streak [FACT, r03 §106]. Ở n=2 nó an toàn hơn hẳn ở n=5: không có khán giả thứ ba, nên không thể biến thành bêu tên. Giới hạn 1 lần/ngày.

**b) "Gánh" — contingency hỗ trợ thay vì trừng phạt.** Nếu đứa kia chưa nộp và đã 21:00, mình bấm *gánh*: cột hôm nay sáng màu thứ ba (không phải màu ngày đôi), kèm dòng `Hôm nay Nam gánh`. **2 lượt/mùa/người.** Đây là bản rẻ nhất của TẦNG 2 phản biện #18 ("chuyển từ contingency trừng phạt sang contingency hỗ trợ"). Nó đổi câu chuyện từ *"mày làm hỏng"* thành *"tao đỡ mày"* — và ở n=2 câu đó có địa chỉ rõ ràng, không loãng như trong nhóm 5.

**c) "Life Happens" — 2 ngày nghỉ/mùa, không cần lý do, không hỏi.** Ô ngày đó xám trung tính, không phải ô trống. Chuỗi cá nhân đóng băng chứ không reset.

**Không có:** xếp hạng, role gắn nhãn bản sắc ("Báo Thủ"), vote sus, trust score, damage, HP, hồi máu. Bốn thứ đầu là điểm rủi ro shame cao nhất trong toàn product theo r03 và là vùng Apple Guideline 1.1.1/1.2 có thể gỡ app [FACT, r06 qua digest]; ở n=2 chúng còn vô nghĩa về mặt toán học (xếp hạng 2 người là một trò đùa nhạt).

### 4.7. Ngôn ngữ: mọi câu app viết ra chỉ tham chiếu TRẠNG THÁI

Ràng buộc kiến trúc, có test tự động quét template bank tìm placeholder `{goal_text}` — lấy nguyên FIX (1) của phản biện #19:

> Mọi push, recap, thẻ mùa, template chỉ được tham chiếu `submitted / not_submitted / late / streak`. **Không bao giờ** tham chiếu nội dung kèo.

`Nam nộp rồi, còn mày` chạy được mà không cần biết Nam cai gì. Điều này đồng thời giữ miễn trừ Điều 38.2 Luật 91/2025 (không suy luận dữ liệu sức khoẻ từ text) và chặn kịch bản "app thưởng cho hành vi hạn chế ăn" của phản biện #19.

### 4.8. Làm sao KHÔNG bị hiểu là dating app

DOC 1 §9.2 đã tự cảnh báo ("không nên gọi là Crush Mode vì dễ làm lệch hướng thành dating app"). Ở hướng C, rủi ro này tăng vọt vì đơn vị sản phẩm **là** một cặp. Bảy quyết định, tất cả đều rẻ:

1. **Không có bất kỳ cơ chế ghép người lạ nào — vĩnh viễn.** Không discovery, không matching, không "tìm bạn cùng kèo". Vào duo chỉ qua link/mã do người quen gửi. Đây cũng là quyết định an toàn và pháp lý rẻ nhất trong cả sản phẩm.
2. **Danh mục 3 duo hiển thị song song ngay trên home.** Dating app hàm ý độc quyền; ba ô nằm cạnh nhau phá vỡ cách đọc đó ngay từ giây đầu.
3. **Không có hộp thư/chat.** Chỉ reaction và câu ngắn gắn vào một tấm ảnh cụ thể. Không có inbox = không có surface dating.
4. **Không profile:** không ảnh đại diện bắt buộc, không tuổi, không giới tính, không bio, không vị trí. Sản phẩm không cần biết, nên không hỏi.
5. **Từ vựng:** "kèo", "đứa kia", "tụi mình", "gánh". Cấm trong toàn bộ copy: "partner", "cùng nhau mãi mãi", "một nửa", "cặp đôi", "match".
6. **Đồ hoạ:** không tim, không hai bóng người quay mặt vào nhau, không màu hồng chủ đạo. Lưới ô vuông là hình ảnh chính.
7. **Store:** category Health & Fitness hoặc Lifestyle (không Social Networking nếu tránh được), screenshot đầu tiên là **ba duo cùng lúc**, keyword không chứa partner/match/couple.

---

## 5. Cắt gì so với DOC 1 — và tại sao cắt được

| Cắt | Lý do cắt được |
|---|---|
| **Boss chung, HP, damage, hồi máu** | Phản biện #1 chứng minh đây là **lỗi hàm**, không phải lỗi tuning. Ở n=2 thì thanh HP chỉ là lưới ô viết theo kiểu khác — giữ nó là trả chi phí (game economy, cân bằng, rủi ro G1 theo NĐ 147) để mua 0 giá trị mới |
| **Nhóm 3–5 người ở MVP** | Là nguyên nhân trực tiếp của số hạng 0,735⁴ trong funnel (phản biện #4) và của tỉ lệ 7,9 install/nhóm (§4.4). Không cắt vĩnh viễn — hoãn tới §11 |
| **Role, "Báo Thủ", xếp hạng, vote sus** | Vô nghĩa ở n=2 + là vùng Apple 1.1.1/1.2 (phản biện #21) + điểm shame cao nhất theo r03 |
| **Roast template nhắm cá nhân** | Ở n=2 không có khán giả nên roast mất phần lớn giá trị hài; giữ reaction + câu ngắn tự gõ. Đây là **mất mát thật**, ghi ở §8 |
| **Memory Capsule, weekly recap, highlight, smart album** | Lưới 2×14 cuộn theo mùa *chính là* phiên bản 0,3 pw của cả ba. Đúng nhận định "3 view trên cùng bảng `proofs`" của phản biện #9 |
| **Gacha, theme, boss skin, premium** | MVP: 0 monetization (r08 §332). Cộng rủi ro NĐ 174/2026 về vật phẩm ảo |
| **AI recap, AI memory search, vector DB** | App AI có LTV Y1 cao hơn 41% nhưng retention 12 tháng tệ hơn 36% [FACT, RevenueCat 2026 qua digest] — AI đẩy conversion, không giữ người |
| **Đa nhóm + context isolation** | Cột `group_id` + RLS vẫn viết (chi phí 0, giữ đường lan truyền), nhưng UI chỉ có duo |
| **Phone OTP** | $0,2852/SMS đi VN + duyệt brandname hàng tuần–tháng. Google/Apple sign-in cho tới mốc pháp lý |
| **Realtime, video, widget iOS, Screen Time API** | Realtime ~$207/tháng ở 100k DAU cho thứ user không nhận ra [FACT, r05]; Screen Time API về kiến trúc không gửi được dữ liệu về server [FACT, r07] |
| **Duyệt luật chơi/proof rule của nhóm** | Một trường text ở n=2 = một câu nói ngoài đời. Không cần code |

**Giữ nguyên, không thương lượng:** mỗi người một kèo khác nhau (differentiator duy nhất trong 16 app khảo sát, r01); proof ảnh hằng ngày; private-first; widget Android; lưới tích luỹ; thẻ share dễ crop có deep-link.

---

## 6. Phản biện mà hướng C giải quyết

Trích đúng tên từ digest:

1. **#1 [FATAL] "Khoảnh khắc cả nhóm nộp đủ xảy ra 1 lần/98 ngày — và boss hồi máu mỗi ngày không nghỉ"** → Giải triệt để bằng cách xoá cả hai vế: không còn boss để hồi máu, và sự kiện lõi chuyển từ q⁵ sang q² (nhanh hơn 4,6–15,6 lần, §4.2). Đại lượng duy nhất trong sản phẩm là số ô sáng, đơn điệu tăng.
2. **#2 "Duolingo đã thử nghiệm QUA khỏi tính liên đới; Teemi đang thêm lại đúng thứ họ bỏ"** → Phần phản bác kết luận nguyên văn: *"bài học thật không phải bỏ coupling mà là COUPLING Ở n=2, KHÔNG PHẢI n=5"*. Hướng C **là** kết luận đó, không phải một cách diễn giải nó.
3. **#5 "Cold start: 29 lượt cài organic mới ra 1 nhóm sống"** → 3,0 install/đơn vị sống thay vì 7,9 (§4.4). Cần 1 lời mời thành công thay vì 2.
4. **#6 "Xác suất nhóm 5 người sống 30 ngày ≈ 12,5%"** → Giải phần **định nghĩa** (mục quan trọng nhất của phản biện đó): `duo_alive` không có khe hở để nới. Phần **tuổi thọ** thì KHÔNG giải được (§7).
5. **#18 "Boss hồi máu vì mày đấy là đổ lỗi công khai có tên người"** → Xoá quyết định thiết kế duy nhất biến một lần miss thành mất mát đã có của người khác. Không còn khán giả thứ ba để đổ lỗi trước mặt.
6. **Red flag [behavior] sucker effect / cascade** → Ở n=2 không tồn tại "kẻ ăn không" để so bì: đóng góp đối xứng, thông tin đối xứng, không có ai núp bóng ai. Nhóm chết theo cascade cần ≥3 người mới có cascade.
7. **#9 "MVP cực nhỏ thực chất là 17 hệ thống ≈ 33 person-week"** → 10,7 pw (§10), dưới trần cứng 12 pw của phán quyết.
8. **#21 "Vị thành niên: age gate tự khai không hoạt động"** → Giảm mạnh, không xoá: không xếp hạng, không roast có khán giả, không ẩn danh, không người lạ — tức không còn biến gây hại chung của Sarahah/Yik Yak.
9. **Red flag [legal] "Boss chung có thể bị xếp là trò chơi điện tử G1"** → Không có boss, không có trạng thái game dùng chung nhiều người qua máy chủ, không vật phẩm ảo. Còn lại là app chia sẻ ảnh riêng tư giữa 2 người.
10. **#23 tên "Teemi" → Temu** và **#24 "SÁU câu định vị = không có câu nào"** → Đổi tên + đúng một câu ở §1.
11. **#3 "cuộc đua xuống đáy"** → Giảm: ở n=2, người duy nhất nhìn kèo của bạn là người biết rõ nhất bạn có làm hay không. Môi trường thông tin gần như hoàn hảo, tức điều kiện tiên quyết của Goodhart bị vi phạm mạnh hơn hẳn so với n=5.

---

## 7. Phản biện mà hướng C KHÔNG giải quyết

Trung thực, không giảm nhẹ:

1. **#7 "Zalo group hút mất phần thưởng, Teemi giữ lại toàn bộ nghĩa vụ"** — hướng C làm phản biện này **nặng hơn**, không nhẹ đi. Hai người thân đã có sẵn một luồng chat 1-1 trong Zalo/Messenger; đó là bề mặt thay thế rẻ nhất và mạnh nhất có thể tưởng tượng. Câu trả lời duy nhất vẫn là widget + trạng thái sống, và nó chưa được chứng minh cho n=2.
2. **#13 "Ở 10.000 DAU app đã lỗ"** và **#66 "trần doanh thu ~2,6 tỷ VND/năm ở 1 triệu MAU"** — không đụng tới. Duo còn làm khó hơn: 10.000 DAU cần **5.000 duo sống**, trong khi ở nhóm 5 chỉ cần ~2.000–3.300 nhóm.
3. **#26 "MOAT bằng 0 trong 6 tháng đầu"** — nặng hơn hẳn. Một "duo streak có ảnh" là 2–3 tuần công của Duolingo hoặc Locket. Hướng C tự nguyện bỏ bộ ba mà r01 xác định là điểm khác biệt duy nhất trong 16 app ("mục tiêu khác nhau + trận đấu chung + private-first") — giữ được vế 1 và 3, mất vế 2.
4. **#6, phần tuổi thọ** — `duo_alive` D30 nằm trong dải **6,5%–19,1%**, không cao hơn nhóm 5 (§4.5). Danh mục 3 duo chỉ chuyển vấn đề từ cấp đơn vị lên cấp người dùng, và chưa có tiền lệ đo được nào cho việc đó ngoài Duolingo (nơi "duo" chỉ là lớp phụ trên một sản phẩm solo đã hoàn chỉnh).
5. **Toàn bộ khối pháp lý VN** — không đổi: ngưỡng ~1.000 người dùng thường xuyên/tháng của NĐ 147/2024 vẫn áp (nội dung do người dùng tạo, chia sẻ giữa các tài khoản); data localization NĐ 53/2022 vẫn áp vì vẫn lưu ảnh cá nhân của người VN; Luật ANM 116/2025 Điều 16.2 buộc cha mẹ đứng tên cho user <16 vẫn áp — mà duo hai đứa lớp 11 đúng là phân khúc viral nhất.
6. **#15/#17 "bán memory không có tiền lệ trả tiền" / tiền lệ Geneva** — hướng C không có mô hình doanh thu nào tốt hơn, và bề mặt bán còn ít hơn (không theme, không skin, không role pack).
7. **Rủi ro Tết** — nhịp hằng ngày vẫn vỡ 1–2 tuần khi cả nước về quê. Hướng C không có Tết Mode.
8. **#4 "thứ giữ chân là ĐƯỢC NHÌN THẤY NHAU, và boss là thuế đánh lên nó"** — chỉ giải một nửa. Bỏ boss là bỏ phần thuế đắt nhất, nhưng bước "chọn kèo" vẫn còn, nên vẫn còn thuế so với Locket (0 giây setup). Và câu hỏi "vậy sao không dùng thẳng Locket" chưa có câu trả lời bằng dữ liệu.
9. **#22 "Không có metric nào phát hiện được tác hại"** — hướng C thêm rủi ro mới (§8) mà chưa thêm metric nào để bắt nó.

---

## 8. Rủi ro MỚI do chính hướng C tạo ra

1. **Dự phòng bằng 0.** Một người bỏ = đơn vị chết ngay lập tức, không có giai đoạn thoi thóp để cứu. Ở nhóm 5, founder có 2–3 tuần nhìn thấy nhóm yếu đi và can thiệp; ở duo, tín hiệu và cái chết trùng nhau.
2. **Đổ lỗi 1-1 không có chỗ loãng.** Phản biện #18 nói tổn thất nằm ở quan hệ nên không patch được. Ở nhóm 5, một lần miss được chia cho 4 người quan sát; ở duo, nó đi thẳng vào một người, và người đó là bạn thân nhất. **Đây có thể là hại HƠN chứ không phải ít hơn** — chỉ khác là nó riêng tư nên founder không bao giờ nhìn thấy trong dữ liệu.
3. **Cặp yêu nhau là phân khúc retention cao nhất → sản phẩm bị kéo về app cặp đôi.** Nếu duo người yêu giữ chân tốt nhất (khả năng cao), mọi tối ưu hoá dựa trên số liệu sẽ đẩy sản phẩm về đúng chỗ DOC 1 §6.1 cấm. Kèm theo: chia tay = churn hai người cùng lúc kèm một kho ảnh chung cần xử lý, và bảy hàng rào ở §4.8 chỉ chống *cách đọc*, không chống *thực tế sử dụng*.
4. **Giám sát bạn đời.** Ảnh chứng minh hành vi hằng ngày, gửi cho đúng một người, mỗi ngày, có lịch sử — đây là hình dạng của công cụ kiểm soát trong quan hệ độc hại. Nhóm 5 có tính công khai nội bộ nên tự hạn chế; duo thì không. Bắt buộc: nút **kết thúc mùa một chạm không cần lý do**, không hiển thị "đã xem lúc mấy giờ", không vị trí, không EXIF, block/report ngay ở MVP.
5. **Mất phần vui.** "Cà khịa" cần khán giả. Ở n=2 không có ai để diễn, nên phần content đáng screenshot — chính là kênh phân phối duy nhất theo r02 — yếu đi rõ rệt. Không có bằng chứng nào nói thẻ mùa của 2 người đáng share bằng recap của 5 người.
6. **Bề rộng lan truyền hẹp hơn.** Một duo sinh ra tối đa 1 install mới; một nhóm 5 sinh ra 4. Duo rẻ hơn *trên mỗi đơn vị* nhưng cần **nhiều đơn vị hơn 2,5 lần** cho cùng một mức DAU. Nếu K < 1 (ước 0,25–0,7 theo r04), hướng C tới trần sớm hơn.
7. **Dễ bị đọc là "một tính năng, không phải một app".** Đây là rủi ro định vị: "Duolingo Friend Streak nhưng tách rời" là mô tả đúng và không hấp dẫn. Cần thẻ mùa + lưới tích luỹ đủ đẹp để sản phẩm có lý do tồn tại riêng, và điều đó chưa được kiểm chứng.

---

## 9. Cold start: 90 giây đầu của người dùng số 1, và người số 2 đến từ đâu

### 90 giây của người đầu tiên (Huy, 21 tuổi, được bạn gửi link Zalo)

| Giây | Màn | Huy làm gì | Ràng buộc thiết kế |
|---|---|---|---|
| 0–8 | Vào | Chạm "Bắt đầu" → Google sign-in một chạm | Không hỏi số điện thoại. Không hỏi tuổi bằng ô nhập ngày sinh dài |
| 8–22 | Chọn kèo | 8 ô preset. Chạm "đi bộ 20 phút". Xong | 1 chạm. Không if-then. Không "mô tả kèo của bạn" |
| 22–45 | Camera | Camera đã mở sẵn ở màn tiếp theo. Chụp đôi giày. Gửi | **Proof đầu tiên xảy ra TRƯỚC khi mời ai.** Đây là quyết định quan trọng nhất trong 90 giây: giá trị trước lời mời, giống Locket |
| 45–52 | Duo | Lưới 2×14 hiện ra: **ô của Huy sáng, cột bên cạnh trống và có dấu ?** | Ô trống là lời mời trực quan, không cần chữ |
| 52–75 | Mời | Nút "Rủ 1 đứa" → mở Zalo với card đã render sẵn (có ảnh Huy vừa chụp) + mã 6 ký tự. Text soạn sẵn: *"Tao vừa mở kèo đi bộ 20 phút. Mày kèo với tao 14 ngày không?"* | Chỉ **một** nút, chỉ **một** người. Không màn hình "mời nhiều bạn" |
| 75–90 | Bật nhắc | Cho phép thông báo + 1 màn hướng dẫn thêm widget + tắt tối ưu pin (ROM Xiaomi/Oppo/Vivo) | Bỏ qua được, hỏi lại sau 3 ngày |

**Nếu 24h không ai nhận:** app **không** ép mời tiếp và **không** ghép người lạ. Nó chuyển sang **"kèo trống"** — Huy vẫn nộp proof, ô vẫn sáng, cột bên vẫn trống với một nút duy nhất: "rủ đứa khác". Người dùng sống sót ở chế độ solo cho tới khi có người số 2. Đây là bản duo của "bỏ ràng buộc ≥3 người để bắt đầu" (phản biện #4, fix 2).

### Người thứ 2 đến từ đâu

- **Web preview chơi được, không cần cài** (phản biện #5, fix 2a): link mở ra một trang hiển thị ảnh proof của Huy + lưới + đếm ngược, cho phép thả **đúng một** reaction mà không cài. Người thứ 2 "có mặt" trước khi cài. ~0,4 pw.
- **Mã 6 ký tự gõ tay** làm phương án dự phòng nếu Zalo cảnh báo/chặn domain lạ (red flag [retention] đã nêu).
- **Tuyển beta bắt nhập tên đúng 1 người bạn + link chat 1-1** — bản duo của cơ chế r04 §105. Ở hướng C, cổng này rẻ hơn hẳn: chỉ cần 1 cái tên thay vì 3.
- **50 duo đầu do founder ghép bằng tay trong Zalo, không bao giờ trong app.** Ghép thủ công qua tin nhắn riêng là công việc vận hành; ghép trong app là một tính năng discovery với hệ quả pháp lý và an toàn hoàn toàn khác.

### Bước 0 phiên bản duo (chạy TRƯỚC khi viết dòng code nào)

Phán quyết chiến lược yêu cầu 14 ngày không code, 6 nhóm × 5 người, ~28 giờ. Bản duo: **12 cặp × 14 ngày trong chat 1-1 Zalo**, founder gửi một ảnh lưới Canva cho mỗi cặp lúc 21:00 — ~5 phút/cặp/tối × 12 cặp × 14 ngày ≈ **14 giờ, 0đ**, rẻ hơn một nửa. Ba số cần đếm: q, số ngày đôi/mùa, và số cặp tự nhắc nhau mà founder không khơi mào.

---

## 10. Ước lượng person-week

Neo: bảng 11,5 pw của c-scope §9 cho MVP nhóm-5. Cột "Δ" là chênh lệch do đổi sang duo.

| Hạng mục | pw | Δ so với bản nhóm-5 | Ghi chú |
|---|---|---|---|
| Setup + auth Google/Apple + xoá tài khoản | 1,0 | 0 | Không phone OTP |
| Schema 4 bảng (`users`, `duos`, `goals`, `proofs`) + RLS | 0,8 | −0,2 | `duos` là `groups` với `max_members=2`; giữ `group_id` để không đóng đường lớn lên |
| Vào duo: link + mã 6 ký tự + web preview | 1,0 | 0 | Web preview 0,4 nằm trong đây |
| Chọn kèo: 8 preset 1 chạm | 0,3 | −0,2 | Bỏ form if-then |
| Camera → proof ≤2 chạm + nén client + R2 + outbox offline | 2,0 | 0 | Hạng mục đắt nhất, không cắt được. R2 chứ không Supabase Storage (egress $0,09/GB vs $0) |
| Home duo: lưới 2×14 + trạng thái hôm nay + chọc + gánh | 1,0 | −0,5 | Không boss engine, không cân bằng damage |
| Danh mục ≤3 duo + switcher + cổng mở khoá | 0,3 | +0,3 | **Rủi ro mới #1 mua bảo hiểm ở đây** |
| Reaction 5 emoji + 20 câu template trạng thái + throttle | 0,5 | −0,5 | Bỏ roast nhắm cá nhân, bỏ vote sus |
| Recap 21:00 + thẻ mùa render (1 timezone: Asia/Ho_Chi_Minh) | 0,8 | −0,7 | Không weekly recap, không Memory Capsule |
| Widget Android (`react-native-android-widget` + Expo config plugin) | 0,5 | 0 | Phủ >85% thị trường VN. iOS v1.1 |
| Push: 1 nhắc + 1 recap + onboarding tắt tối ưu pin | 0,5 | 0 | Throttle 1 tin/10 phút/user |
| Analytics **cấp duo** + dashboard kill-criteria | 0,5 | 0 | Cohort là duo, không phải user. Sửa sau 3 tháng = mất toàn bộ lịch sử |
| An toàn: report/block/xoá proof/kết thúc mùa + minor-safe mặc định | 0,5 | +0,5 | Bắt buộc vì rủi ro mới #3, #4 |
| QA Android tầm trung + submit store | 1,0 | 0 | Máy thật, không emulator |
| **Tổng** | **10,7** | **−0,8** | |

**Đọc con số này cho đúng:** 10,7 pw ÷ 0,65 hiệu suất thực = **~16,5 tuần lịch cho một người ≈ 3,8 tháng**. Nếu bắt đầu code 15/09/2026 thì beta chạy khoảng đầu tháng 1/2027 — **trễ so với trần "beta trước 15/12/2026"** của phán quyết. Hai cách xử lý, phải chọn một bằng văn bản:

- **Lõi kiểm chứng 4,3 pw** (auth 1,0 + schema 0,8 + vào duo 1,0 + kèo 0,3 + camera/proof… cắt xuống 0,7 bản thô + home 0,5) → TestFlight cho 30 cặp trong ~6,5 tuần lịch, chấp nhận không có widget/recap/thẻ mùa. Đủ để đo q và ngày đôi — tức đủ để trả lời H2 ở §12.
- Hoặc lùi ngày lịch và ghi rõ lý do.

Luật đánh đổi **1-1** áp dụng từ ngày chốt bảng này: mọi hạng mục mới phải cắt một hạng mục đang có.

---

## 11. Đường lớn lên: nếu duo chạy thì bước tiếp theo là gì

Thứ tự này là thứ tự *bằng chứng*, không phải thứ tự *tham vọng*. Mỗi bước chỉ mở khi bước trước đạt ngưỡng.

**Bước 1 — Danh mục duo (v1.1, ~0,5 pw).** Mở duo thứ 2 và thứ 3. Câu hỏi đo được: người có ≥2 duo có D30 cao hơn người có 1 duo **≥15 điểm phần trăm** không? Nếu không, dự phòng bằng 0 là bệnh không chữa được và toàn bộ hướng C có trần thấp.

**Bước 2 — Duo → nhóm 3–5, bằng cách GỘP chứ không bằng cách tạo mới (v1.2, ~1,0 pw).** Nhóm không phải một object mới: nhóm là **hợp của các duo chồng lấn**. Khi hai duo có chung một người và cả hai đều đạt ≥5 ngày đôi, app đề nghị *"gộp thành 3 đứa?"*. Cơ chế kế thừa nguyên vẹn, chỉ đổi ngưỡng:

> `ngày đủ = ceil(0,6 × số Active)`, tối thiểu 2 — n=2→2/2, n=3→2/3, n=4→3/4, n=5→3/5.

Đây chính là FIX 2 của phản biện #1 (đòn bẩy cao nhất trong toàn bộ backlog: cải thiện 31 lần từ một dòng điều kiện ở q=0,40), và ở n=3 với q=0,45 nó cho P=42,6% — cao hơn cả duo. **Nghĩa là hướng C không đối lập với nhóm; nó là con đường an toàn để tới nhóm, đi qua đơn vị dễ hình thành nhất.**

**Bước 3 — Lớp ký ức (v1.3, ~1,0 pw).** Lưới nhiều mùa cuộn liên tục + thẻ "3 tháng trước hôm nay". Đây là moat duy nhất chống novelty decay (r04) và là thứ duy nhất không screenshot vào Zalo được, vì nó là hàm của **thời gian** chứ không của **nội dung**.

**Bước 4 — Pháp lý, kích hoạt bằng số chứ không bằng lịch.** Ở **500 người dùng thường xuyên/tháng** (đệm dưới ngưỡng 1.000 của NĐ 147, cộng 30 ngày làm việc xử lý): lập TNHH → D-U-N-S → chuyển Apple sang Organization → nộp Giấy xác nhận thông báo. Đặt sẵn một cảnh báo trong dashboard.

**Bước 5 — Doanh thu, và chỉ sau khi bước 3 có dữ liệu.** Không khoá thẻ mùa/share card (đó là kênh acquisition duy nhất — Spotify Wrapped miễn phí là quyết định kinh tế, không phải hào phóng). Bề mặt bán khả dĩ nhất: bản in/xuất thẻ mùa cuối năm. Trần vẫn ~2,6 tỷ VND/năm ở 1 triệu MAU và hướng C không sửa được điều đó.

---

## 12. Kiểm chứng: 3 giả thuyết, ngưỡng số cụ thể

Cả ba đo được từ **tuần 1** và không so với benchmark ngoài nào (tránh lỗi trộn đơn vị của phản biện #8/#11). Đơn vị cohort là **duo**, không phải user.

### H1 — HÌNH THÀNH: "một lời mời là đủ"

> Trong 100 install đầu tiên, **≥45%** trở thành `duo_active` (cả 2 người nộp ≥1 proof) trong **48 giờ**.

- Neo: §4.4 cho 50,2% ở 4 lời mời với p=0,16; đặt ngưỡng thấp hơn một chút vì tham số 0,16 là ước lượng.
- **< 30% → hướng C sai ở tiền đề.** Nếu ngay cả 1 lời mời cũng không đi qua được thì vấn đề không phải kích thước nhóm mà là chính lời mời — và không hướng nào cứu được.
- Đo bằng: `installs_per_activated_duo`. Mục tiêu ≤ 4,0.

### H2 — NHỊP: "q đủ cao để q² có nghĩa"

> **q ≥ 0,50** trung bình trên D1–D14 của mùa đầu, VÀ **≥3 ngày đôi / 14 ngày**.

- Neo: bảng §4.2 — q=0,50 cho 3,5 ngày đôi kỳ vọng; q=0,55 cho 4,2.
- **q < 0,40 → cơ chế sai, không phải onboarding sai.** Đây là ranh giới chẩn đoán quan trọng nhất trong cả tài liệu: nó phân biệt "sửa funnel" với "đổi sản phẩm". Ở q<0,40, ngày đôi ≤2,2/mùa và duo mất lý do tồn tại — khi đó câu trả lời đúng là solo-first kiểu Finch, không phải tune thêm.
- Kèm một cổng phi số: **có duo nào tự hỏi "mùa sau khi nào" không?** Với n=30 cặp, không phần trăm nào đủ tin cậy; tín hiệu định tính mang nhiều thông tin hơn.

### H3 — SỐNG SÓT VÀ DANH MỤC: "dự phòng bằng 0 có chữa được không"

> **≥30%** duo còn `duo_alive` ở D30 (cả 2 người nộp proof trong 7 ngày gần nhất), VÀ **≥25%** người dùng có ≥2 duo ở D30.

- Neo: dải 6,5%–19,1% ở §4.5 là mô hình *không có* danh mục và *không có* Bước 0 lọc trước. Ngưỡng 30% đòi hỏi thực tế phải tốt hơn mô hình — có lý do để tin (cohort tự khai mục đích + bạn thân sẵn), nhưng phải chứng minh.
- **< 15% → dừng hướng C.** Không "chạy thêm một mùa nữa", không "thêm feature". Chạy lại đúng sản phẩm đó với một cohort mới đúng một lần; vẫn <15% thì dừng.
- Vế thứ hai (danh mục) quan trọng ngang vế thứ nhất: nếu duo sống 30% nhưng không ai mở duo thứ 2, thì retention cấp người dùng bị chốt trần ở đúng 30% và sản phẩm không có đường lớn lên.

### Quy tắc vùng xám (bắt buộc, viết trước khi có dữ liệu)

> Nếu bất kỳ chỉ số nào rơi giữa ngưỡng dừng và ngưỡng đạt: **KHÔNG được thêm feature.** Chạy lại đúng sản phẩm đó với một cohort mới.

Không có dòng này, mọi kill criteria đều bị lách bằng câu "gần đạt rồi, thêm cái này nữa là được" — đúng vòng lặp mà phản biện #11 mô tả.

---

## Phán quyết của người thiết kế hướng này

Hướng C là hướng **dễ build nhất, dễ hình thành nhất, an toàn pháp lý nhất** trong không gian thiết kế của Teemi — và cũng là hướng **dễ bị copy nhất, ít khác biệt nhất, trần thấp nhất**. Nó mua khả năng cold start bằng cách bán đi một nửa differentiator (giữ "mỗi người một kèo" và "private-first", bỏ "trận đấu chung").

Nó đáng làm như **một phép thử 8 tuần với ngưỡng dừng viết sẵn**. Nó không đáng làm như một công ty, và bất kỳ ai bán nó như một công ty đều đang bỏ qua §7 và §8 của chính tài liệu này.
