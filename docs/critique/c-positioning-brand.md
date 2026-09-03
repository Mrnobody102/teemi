# PHẢN BIỆN — ĐỊNH VỊ, TÊN GỌI, MOAT
_Góc: brand & defensibility. Ngày: 2026-08-28. Nguồn đối chiếu: doc-01-product-strategy.md + r01/r03/r04/r06/r08._

> **Ghi chú về giới hạn nghiên cứu:** ngân sách WebSearch của phiên này đã cạn trước khi tôi tra được cơ sở dữ liệu nhãn hiệu (IP Vietnam / USPTO / WIPO). Vì vậy phần **trademark chưa được kiểm chứng** và được ghi rõ là KHÔNG TÌM ĐƯỢC — không bịa. Các dữ kiện về App Store, Google Play và domain bên dưới **đã được kiểm chứng trực tiếp** bằng cách gọi API công khai, không qua bên thứ ba.

---

## 0. Verdict ngắn

Mảng định vị/tên/moat **không tự nó giết Teemi**, nhưng nó đang làm ba việc tệ cùng lúc:

1. **Tên gọi rò rỉ chính xác ở kênh phân phối quan trọng nhất của sản phẩm** — truyền miệng.
2. **Câu định vị không dịch được sang lời của người dùng**, nên chuỗi truyền miệng đứt ở bậc thứ hai.
3. **Không có moat nào tồn tại trong 6 tháng đầu**, đúng khoảng thời gian mà mọi app trong r01 đã chết.

Cộng lại: Teemi không chết vì mảng này, nhưng mảng này biến Teemi từ "có thể thành hiện tượng" thành "một app tử tế mà không ai tìm thấy".

---

## 1. FACT — Gõ "teemi" vào App Store, kết quả số 1 là **Temu**. Ở cả US lẫn VN.

Tôi gọi trực tiếp Apple iTunes Search API:

```
GET https://itunes.apple.com/search?term=teemi&entity=software&country=vn
```

**Kết quả trả về (VN, 2026-08-28):**

| # | App | Nhà phát hành |
|---|-----|---------------|
| 1 | **Temu: Shop Like a Billionaire** | Whaleco Inc. |
| 2 | SHEIN | Roadget Business |
| 3 | AliExpress | Alibaba Singapore |
| 4 | Alibaba.com B2B | Alibaba |
| 5 | Google Chrome | Google |
| 6 | Trendyol | DSM Grup |

Bản US thêm TeeShee, Draumi, TeePak Hub. **Không có app nào tên Teemi ở bất kỳ vị trí nào.**

Google Play (gl=VN, q=teemi) còn tệ hơn theo cách khác:

| # | App | Nhà phát hành |
|---|-----|---------------|
| 1 | TEEM: Family Location Tracking | Aleksandr Kutsenko |
| 2 | **Teemy** | **TEEMYTECH LDA** |
| 3 | Teem — Collaborate & Connect | Eptura, Inc |
| 4 | **Temu** | Temu |
| 5 | Teamie | Teamie |
| 6 | tedee | Tedee sp. z o.o. |
| 7 | **Viettel Tammi** | **VIETTEL TELECOM** |

Ba điều rút ra, không cái nào tốt:

- **Branded search của Teemi = 0.** Truy vấn đúng tên sản phẩm không trả về sản phẩm. Đây không phải "cần thời gian để index" — đây là thuật toán fuzzy match của cả hai store đang chủ động ánh xạ `teemi → temu`, và Temu là một trong những app được tải nhiều nhất hành tinh. Một app mới ra không bao giờ thắng được Temu ở truy vấn này.
- **"Teemy" — phương án B của tên — đã có chủ** (TEEMYTECH LDA). Nếu founder định né bằng cách đổi một chữ, cửa đó đóng rồi.
- **"Viettel Tammi" xuất hiện trong top 10 tại VN** — tức đã có sản phẩm của một tập đoàn viễn thông VN nằm ở vùng âm gần.

### Kịch bản thất bại cụ thể

Huy cài Teemi, thích, ngồi quán trà sữa bảo Nam: _"Mày cài Teemi đi, tao với thằng An đang đánh boss."_ Nam mở App Store, gõ `teemi`. Màn hình đầu tiên: **Temu**. Nam không hỏi lại — không ai hỏi lại vì một cái app miễn phí. Nam hoặc bỏ qua, hoặc tệ hơn là cài Temu và tưởng mình đã làm xong việc.

Đây không phải rủi ro nhỏ vì **truyền miệng chính là toàn bộ kế hoạch tăng trưởng**. r08 kết luận ngân sách paid acquisition phải bằng 0đ cho tới khi RPI thực đo > 3.000đ; r04 ước K-factor 0,25–0,7 và nói thẳng invite loop chỉ đủ làm dày nhóm chứ không tăng số nhóm. Nếu 20–30% người được rủ đứt ở đúng bước "gõ tên vào store" (ước lượng, không có nguồn), K tụt xuống dải 0,18–0,5. Với một sản phẩm cần **tối thiểu 3 người mới có giá trị**, việc mất 25% ở bước cuối cùng của funnel không cộng tuyến tính — nó nhân lên: xác suất một nhóm 5 người tụ đủ 3 người giảm theo luỹ thừa.

Đây là loại lỗi rẻ để sửa **hôm nay** (đổi tên khi chưa có user = miễn phí) và đắt kinh khủng để sửa **sau launch** (mất toàn bộ brand equity, mất review, mất ranking, phải làm lại ASO từ đầu).

## 2. FACT — teemi.com đang nằm trong tay dân buôn domain, và r04 đã nói domain riêng là bắt buộc

RDAP Verisign trả về:

```
Domain: TEEMI.COM
Registrar: DropCatch.com 489 LLC (NameBright)
Created: 2019-08-02   Expires: 2028-08-02
Status: clientTransferProhibited
```

**DropCatch là dịch vụ drop-catching** — nó không phải người dùng cuối, nó là bên chuyên bắt lại domain hết hạn để bán. Việc holder gia hạn tới **2028** là tín hiệu rõ ràng: họ giữ để bán, không để rơi. Giá domain 5 ký tự phát âm được trên thị trường thứ cấp thường ở dải 4 chữ số USD trở lên — **GUESS, tôi không tra được giá niêm yết cụ thể** (trang teemi.com không phản hồi khi fetch).

Vì sao điều này quan trọng hơn nó có vẻ: r04 đã kết luận Zalo có hệ thống cảnh báo/chặn link theo domain, và khuyến nghị **bắt buộc dùng domain riêng có brand cho link mời, không dùng shortener, không dùng subdomain `*.app.link`**. Nếu Teemi không sở hữu được `.com` và phải lùi về một biến thể (`teemiapp.com`, `getteemi.com`, `teemi.vn`), thì:

- Chuỗi truyền miệng thêm một bước phải nhớ đúng.
- Rủi ro phishing tăng: domain gốc do người khác giữ, họ có thể dựng bất cứ thứ gì ở đó.
- Giấy phép MXH theo r06 yêu cầu **tên miền .vn** — mà `teemi.vn` tôi **KHÔNG kiểm chứng được** (whois.com từ chối tra .vn; VNNIC không có RDAP công khai). Đây là việc phải làm trong 1 giờ, không phải để sau.

**Fix:** trước khi viết thêm một dòng code, chốt tên bằng một quy trình 30 phút: (a) itunes search API + Play search phải trả về **0 kết quả trùng và không map sang app lớn nào**; (b) `.com` hoặc `.vn` phải **mua được ngay**; (c) handle TikTok + Instagram trống. Tên nào trượt bất kỳ điều kiện nào thì loại, không tiếc.

## 3. INFERENCE — Người Việt không đọc được "Teemi", và "Team + Me" là một câu đố phải giải thích

Tiếng Việt không có quy tắc đọc cho cụm `ee`. Người Việt không thạo tiếng Anh sẽ đọc `Teemi` theo âm vị Việt: **"tê-mi"** hoặc **"te-mi"**. Người thạo tiếng Anh đọc **"ti-mi"**. Ba cách đọc cho một cái tên nghĩa là truyền miệng bằng giọng nói không hội tụ — mà truyền miệng của Gen Z Việt phần lớn là **nói**, không phải gõ link.

Tệ hơn: dạng "ti mi" nằm sát **"tỉ mỉ"** (nghĩa: chi li, cẩn thận, khô) — đúng cái vibe mà DOC 1 §5 tuyên bố muốn tránh; và âm tiết "ti" trong tiếng Việt đời thường có nghĩa thân thể (bú/ti), đủ để một nhóm bạn 16-22 tuổi biến tên app thành trò cười trong 5 phút đầu. Đó không hẳn là thảm hoạ (Gen Z thích chế), nhưng nó nghĩa là founder **mất quyền kiểm soát nghĩa của tên** ngay ngày đầu.

Về "Team + Me": nó chỉ hiện ra khi bạn **viết hoa** thành `TeeMi` và **giải thích**. Chữ `Tee` chỉ đọc thành /tiː/ trong tiếng Anh; `Mi` không phải "me". Đối chiếu các tên đã thắng ở đúng tệp này (r01/r02): **Locket** (cái mặt dây chuyền đựng ảnh — nghĩa tự hiển lộ, đúng chức năng), **BeReal** (mệnh lệnh, tự hiểu), **Gas** (tiếng lóng "gas someone up" = khen), **Finch**. Không cái nào cần chú thích.

**Quy tắc kiểm tra rẻ nhất:** nói tên qua điện thoại cho 10 người, không đánh vần. Nếu >2 người gõ sai vào ô search, tên đó hỏng. Hiện tại tôi dự đoán tỉ lệ hỏng rất cao vì cả hai store đều đang tự sửa `teemi` thành `temu`.

**Mức độ:** major. Nhưng đây là mục **duy nhất trong toàn bộ báo cáo này sửa được trong một buổi chiều với chi phí gần 0** — miễn là sửa trước khi có user.

## 4. MAJOR — "Kèo" là từ lõi của định vị, và nghĩa mạnh nhất của nó trong tiếng Việt hiện đại là **cá độ**

"Mỗi người một kèo. Cả nhóm một boss." là câu hay — về nhịp. Nhưng thử tách nghĩa: trong tiếng Việt Gen Z 2026, "kèo" đứng một mình gợi trước hết **kèo bóng đá / kèo cá độ**, sau đó mới tới nghĩa "hẹn/vụ" ("kèo này ngon", "bắt kèo"). DOC 1 dùng nó ở nghĩa thứ hai và giả định người đọc cũng thế.

Hậu quả xếp chồng:

- **Với người dùng:** Linh nghe Nam kể lại (Nam không mở app), Nam nói _"app kèo riêng boss chung"_. Linh hình dung app cá cược. Nó không giết chết gì cả nhưng nó tiêu tốn đúng 5 giây quý giá của lần giới thiệu đầu tiên vào việc **đính chính** thay vì việc **thuyết phục**.
- **Với App Review:** r06 đã chỉ ra Teemi đang đi trên dây với Apple 1.1.1/1.2 vì cơ chế roast. Thêm một từ khoá gambling trong tagline chính thức, trong App Store description, trong screenshot — đó là tự bổ sung bề mặt rủi ro miễn phí.
- **Với pháp lý VN:** r06 và r08 độc lập cảnh báo rủi ro phân loại **G1** cho cơ chế boss, và NĐ147 cấm quy đổi vật phẩm ảo. Ngôn ngữ marketing dùng "kèo" + "boss" + "gacha cosmetic pool" (§11.3) là bộ ba từ khoá tệ nhất có thể chọn nếu mục tiêu là **không** bị đọc như một trò chơi có yếu tố may rủi.

**Fix:** giữ "kèo" làm **tiếng lóng nội bộ trong app** (nơi context đã rõ, và nó thật sự hợp vibe), nhưng **cấm nó xuất hiện trong tagline chính thức, App Store description, website, pitch deck**. Câu bán ra ngoài phải dùng từ trung tính: "việc mình hứa", "cam kết nhỏ", "mục tiêu riêng".

## 5. MAJOR — Ba câu định vị khác nhau nghĩa là không có câu định vị nào

DOC 1 §6.2 đưa ra ba phương án "NÊN được định vị là", §6.3 một câu pitch ngắn, §6.4 một câu pitch đời hơn, §1 một câu định vị lõi, §13 một "câu định vị mạnh nhất" khác nữa. **Sáu câu.** Đó là dấu hiệu của một sản phẩm mà founder chưa dám chọn.

Và câu được dùng nhiều nhất — _"Daily social ritual cho nhóm bạn thân"_ — là **ngôn ngữ của người làm sản phẩm**. Không có người dùng 19 tuổi nào ở Việt Nam từng nói "social ritual". Hãy so:

| App | Câu người dùng thật dùng để mô tả | Số từ | Khái niệm mới cần dạy |
|-----|-----------------------------------|-------|----------------------|
| Locket | "app đưa ảnh người yêu/bạn thân lên màn hình chính" | 10 | 0 |
| BeReal | "app bắt chụp 2 camera cùng lúc mỗi ngày" | 8 | 0 |
| Duolingo | "app học ngoại ngữ có con cú" | 6 | 0 |
| **Teemi** | "app mà mỗi đứa chọn một mục tiêu riêng rồi cả nhóm nộp ảnh chứng minh mỗi ngày để đánh một con boss chung" | **~24** | **3** (kèo riêng / proof / boss chung) |

**Kịch bản đứt gãy — truyền miệng bậc 3.** Huy (đã cài, hiểu) → Nam (nghe, chưa cài) → Linh (nghe từ Nam, Nam không mở app cho xem). Ở bậc 2, Nam phải tái tạo lại 3 khái niệm mới từ trí nhớ. Nam sẽ bỏ 2 trong 3 và giữ cái dễ nhớ nhất — gần như chắc chắn là **"boss"**. Linh nghe được: _"app gì đó đánh boss chung"_ → Linh nghĩ đó là game → Linh không cài (Linh không chơi game) hoặc cài rồi thất vọng vì không có gameplay (đúng rủi ro §6.1 đã tự nêu).

Nói cách khác: **cái phần dễ lan truyền nhất của Teemi (boss) lại là cái phần gây hiểu sai định vị nặng nhất, và cũng là cái phần rủi ro pháp lý cao nhất (G1).** Đó là một xung đột kiến trúc, không phải vấn đề copywriting.

## 6. MODERATE — Định nghĩa bằng phủ định: §6.1 liệt kê 11 thứ "không phải", nhưng câu trả lời trung thực là "habit tracker nhóm có lớp game"

DOC 1 §5 tuyên bố _"Teemi không nên cạnh tranh bằng cách track habit tốt hơn"_. Nhưng §7 mô tả flow: chọn mục tiêu cá nhân → nộp proof mỗi ngày → streak → recap → timeline. **Đó là định nghĩa từ điển của một habit tracker.** Lớp game (boss) và lớp xã hội (nhóm, cà khịa) là bao bì đặt trên đó, không phải một loại sản phẩm khác.

Phủ nhận danh mục của chính mình gây ra ba tổn thất cụ thể:

1. **Mất quyền học từ đối thủ.** Nếu "không phải habit tracker" thì founder không nghiên cứu Habitica (5M tải, boss chung đã tồn tại 10 năm — r01), không nghiên cứu Finch ($30M ARR, D30 tốt hơn Duolingo, gần như không có social — r01), không nghiên cứu **Habitify** (founder Hà Nội, $1,2M/năm — r01). Ba đối thủ này chứa gần như toàn bộ bài học sẵn có, miễn phí.
2. **Chọn sai App Store category và sai đối thủ ASO.** r06 khuyến nghị chọn Social Networking hoặc Health & Fitness và tuyệt đối tránh Games. Nếu founder tin mình "không phải habit tracker", founder sẽ chọn Social — nơi r04 cho thấy retention median D30 chỉ 3,9% và cạnh tranh với Zalo/Messenger. Health & Fitness có D30 tệ hơn chút nhưng **RevenueCat cho thấy trial→paid 37,7% so với Social & Lifestyle 20–23%** (r08). Chọn sai category là chọn sai cả benchmark lẫn cả kinh tế.
3. **Mất một danh từ để bám vào.** Người dùng cần một cái hộc tủ để cất sản phẩm mới. Nếu bạn không đưa cho họ, họ tự chọn — và họ sẽ chọn "app tracking" hoặc "game", cả hai đều tệ hơn cái bạn muốn.

**Fix:** chấp nhận danh từ. _"Teemi là habit tracker cho nhóm bạn"_ — rồi khác biệt hoá **bên trong** danh mục ("cái duy nhất mà mỗi người một mục tiêu khác nhau", "cái duy nhất có bạn thân thật soi"), thay vì phủ nhận danh mục.

## 7. MAJOR — Sáu mâu thuẫn nội tại trong chính DOC 1

| # | Nguyên tắc tuyên bố | Cơ chế thực tế trong cùng tài liệu | Ai thua |
|---|--------------------|-----------------------------------|---------|
| 1 | §10.1 "Vui trước, kỷ luật sau" | §7 bước 6: boss **hồi máu** khi có người miss | Người miss. Đây không phải kỷ luật cá nhân — đây là **hình phạt tập thể**, dạng kỷ luật nặng nhất về mặt tâm lý. r03 đã đặt tên: scapegoating, và r01 xác nhận đây là cơ chế đẩy người dùng rời Habitica. |
| 2 | §10.1 "Private-first, share-out optional" | §11.2 share card là free core; r08 kết luận **recap/share card là kênh acquisition duy nhất có unit economics dương** | Cả hai. Private càng chặt → share card càng rỗng (chỉ còn "boss còn 40% máu", không ai share). Share card càng giàu (ảnh proof, tên bạn, ai báo thủ) → "private-first" thành khẩu hiệu. Không có phương án dung hoà nào được nêu. |
| 3 | §10.1 "Troll nhưng không toxic" | §8 tôn vinh câu _"Boss hồi máu vì mày đấy"_ như inside joke đáng mơ ước | Người bị nhắm. r03: shame nhắm bản sắc → withdrawal (= gỡ app). r06: Apple 1.1.1 cấm nội dung mean-spirited nhắm cá nhân cụ thể, 1.2 cấm bullying, và Apple **có thể gỡ app không cần báo trước**. "Troll không toxic" là một điều ước, không phải nguyên tắc thiết kế — vì nó không nói ai quyết định ranh giới. |
| 4 | §10.1 "Reward là gia vị, không phải động cơ chính" | §11.3 bán **Gacha cosmetic pool**, boss skin, role pack | Tính nhất quán. Nếu reward là gia vị thì nó không thể đồng thời là mặt hàng chủ lực. r03 còn thêm: reward hữu hình hứa trước làm giảm động lực nội sinh (d = −0,28 đến −0,40). |
| 5 | §6.1 "KHÔNG phải game mobile thuần" | §11.3 kinh tế học của game (skin, gacha, season); r06+r08 độc lập cảnh báo rủi ro **G1** | Pháp lý. Bạn không được vừa nói với người dùng "đây không phải game" vừa xây kinh tế của game vừa hy vọng cơ quan quản lý đọc theo cách thứ nhất. |
| 6 | §10.1 "MVP phải cực rõ, cực nhỏ" | §7 flow **9 bước**; §11.2 free core **9 hạng mục** | MVP. Chín bước không phải là "cực nhỏ". §12.1 tự cảnh báo scope creep rồi §11.3 liệt kê 14 tính năng premium. |

Mâu thuẫn #1 và #2 là **cấu trúc** — không sửa được bằng copywriting, phải sửa bằng cách bỏ một vế. Khuyến nghị: bỏ vế "boss hồi máu" (đồng thuận với r01 và r03), và chọn dứt khoát rằng **share card chỉ chứa dữ liệu cấp nhóm đã trừu tượng hoá** (boss, biệt danh, số ngày) chứ không chứa ảnh proof — chấp nhận share card yếu hơn, đổi lấy "private-first" là sự thật.

## 8. FATAL-adjacent — Moat: không có gì trong 6 tháng đầu, và 6 tháng đầu là toàn bộ tuổi thọ của category này

Câu hỏi cần trả lời thẳng: **nếu ritual này chạy, ai copy được, mất bao lâu?**

- Boss chung + party damage: **Habitica đã có nguyên vẹn hơn 10 năm** (r01).
- Proof ảnh hằng ngày trong nhóm nhỏ: BeReal, Locket, Yope.
- Recap tự động + capsule: Spotify Wrapped, Google Photos Memories.
- Streak nhóm: Duolingo Friend Streak, ra 8/2024, +22% completion, 1/3 DAU dùng (r01).

Không có một mảnh nào là mới. Cái mới duy nhất là **tổ hợp** — mà tổ hợp thì không được bảo hộ và copy được trong 2–4 tuần bởi bất kỳ team 3 người nào.

### "Nếu nó chạy, tại sao Zalo/Duolingo/Locket không làm?"

Câu trả lời trung thực **không phải** "vì họ chưa nghĩ ra". Là:

- **Duolingo đã làm rồi và đã tự giới hạn.** Họ ship Friend Streak, đo được +22%, rồi **phân tích và kết luận mở rộng quá 5 người không đáng thử nghiệm** (r01). Họ không thiếu ý tưởng — họ có dữ liệu nói rằng phần mở rộng không đáng.
- **Locket có 9M DAU, có lãi, có widget trên màn hình chính của 10M+ máy ở VN** (r01/r02). Nếu Teemi chứng minh được ritual này giữ chân người dùng, Locket có thể ship "Locket Goals" trong một sprint và bơm thẳng vào tệp đã có. Teemi lúc đó vẫn đang đi tìm nhóm thứ 200.
- **Zalo không làm vì nó không hợp mô hình kinh doanh của Zalo**, không phải vì khó.

Đây là định nghĩa của một thị trường không có moat: **kẻ mạnh không vào vì phần thưởng nhỏ, chứ không phải vì cửa đóng.** Nếu phần thưởng lớn lên, cửa mở ra ngay.

### Network effect cấp nhóm là moat yếu nhất trong các loại network effect

Facebook khó rời vì phải bỏ 500 mối quan hệ. **Teemi chỉ cần thuyết phục 4 người — và 4 người đó ngồi cùng bàn với bạn.** Chi phí chuyển đổi của cả một nhóm Teemi bằng đúng **một tin nhắn Zalo**: _"thôi bỏ app đó đi, chán rồi"_. Không có dữ liệu bị khoá, không có danh bạ bị kẹt, không có nội dung của người ngoài nhóm để tiếc.

### Moat khả dĩ duy nhất — và cái hố nó không lấp được

r04 đã xác định đúng: moat duy nhất là **dữ liệu tích luỹ** (Timeline + Memory Capsule). Vấn đề là **thời gian**:

- Ký ức chỉ đủ nặng để tạo switching cost sau **6–12 tháng** sử dụng (GUESS — không có nguồn đo trực tiếp).
- Novelty decay của category này giết app sau **4–6 tháng** kể từ đỉnh (r01: BeReal mất 48% DAU trong ~4 tháng; Gas chết trong ~8 tháng; Poparazzi từ 4M MAU về ~2.500).

Có một **khoảng trũng từ tháng 5 đến tháng 10**: novelty đã hết, ký ức chưa đủ nặng, sponsor chưa tới, premium chưa bán được. DOC 1 không có kế hoạch nào cho khoảng trũng này. Mọi app trong bảng r01 đều chết đúng trong khoảng đó.

**Fix (không phải sửa moat — moat không sửa được — mà là đổi kỳ vọng):** chấp nhận r08, chọn định vị "small profitable business + portfolio piece", giữ team ≤2 người, chi phí gần 0, và **đầu tư sớm bất thường vào Memory** để rút ngắn thời gian ký ức trở thành switching cost. Cụ thể: Memory Capsule đầu tiên phải rơi ở **cuối season 4 tuần**, không phải cuối năm — để nhóm nếm được vị "tiếc nếu mất" ở tuần 4 thay vì tháng 12.

## 9. Nếu phải cắt bỏ 80% để giữ một câu bán được

Ba ràng buộc cho câu đó, rút từ toàn bộ phân tích trên: **(a) không quá 15 từ; (b) không quá 1 khái niệm cần dạy; (c) không chứa từ "kèo", "boss", "ritual", "challenge".**

Ứng viên tôi đề xuất:

> **"Nhóm bạn 5 đứa. Mỗi ngày mỗi đứa gửi 1 tấm ảnh chứng minh đã làm được việc mình hứa."**

Vì sao câu này:
- Có **danh từ** (nhóm bạn), có **con số** (5, 1, mỗi ngày), có **hành động vật lý** (gửi 1 tấm ảnh).
- **Zero khái niệm mới.** Ai cũng biết "hứa", "chứng minh", "gửi ảnh".
- Nó **tự chứa lý do tồn tại**: "việc mình hứa" đánh trúng insight §4 ("nói mục tiêu nhiều nhưng không làm") mà không dùng từ "mục tiêu" — từ khô nhất trong tiếng Việt sản phẩm.
- Nó **sống sót qua truyền miệng bậc 3**: Nam có thể kể lại nguyên văn cho Linh mà không cần mở app.
- Nó **né G1**: không có chữ nào gợi game.
- Nó **để chỗ cho boss ở câu thứ hai**: _"Và có con boss chung để cả nhóm đánh cho vui."_ Boss trở thành **phần thưởng khi khám phá**, không phải rào cản khi giải thích. Đây là thay đổi định vị quan trọng nhất tôi đề xuất trong toàn bộ tài liệu này: **boss phải rời khỏi câu bán và ở lại trong sản phẩm.**

Còn tên: nếu buộc phải giữ một cái tên có gốc "team", hãy chọn cái mà (1) Apple/Google không tự sửa thành Temu, (2) người Việt đọc được ngay không cần biết tiếng Anh, (3) mua được `.com` hoặc `.vn` hôm nay. Ba điều kiện đó loại "Teemi" ở điều kiện thứ nhất, và tôi khuyến nghị loại nó **trước khi có người dùng đầu tiên**, khi chi phí đổi tên vẫn còn bằng 0.

---

## Việc phải làm trong 24 giờ tới

1. Tra `teemi.vn`, `teemi.app`, handle TikTok/Instagram `@teemi` — **KHÔNG TÌM ĐƯỢC** trong phiên này, phải tự làm.
2. Tra nhãn hiệu tại IP Vietnam (ipvietnam.gov.vn) cho nhóm 09/42 với "Teemi" và các âm gần (Temu/Whaleco, Timi, Teemy/TEEMYTECH) — **KHÔNG TÌM ĐƯỢC**, ngân sách search cạn.
3. Test đọc tên qua điện thoại với 10 người, đếm số người gõ sai vào App Store.
4. Chốt câu định vị **một** câu và xoá năm câu còn lại khỏi DOC 1.
