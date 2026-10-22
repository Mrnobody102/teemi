# DOC 2 — PRODUCT & TECH DESIGN

> Teemi — Thiết kế sản phẩm, UX, tính năng, dữ liệu và kỹ thuật

_Bản thảo gốc của founder, xuất từ `docs/references/Teemi app.pdf`. Đây là **input nguyên bản, chưa qua phản biện** — giữ nguyên văn, không sửa nội dung._

## 1. Product architecture tổng quan

Teemi nên được thiết kế quanh một lõi rất rõ:

Personal goals inside a private group ritual.

Tức là:

- Mỗi người có mục tiêu riêng
- Nhóm là nơi giữ nhịp
- Proof là bằng chứng nhẹ
- Reaction là tương tác xã hội
- Boss là tiến độ chung
- Recap là content
- Timeline là memory
- Premium/AI/reward là layer sau

Không nên thiết kế Teemi như một app có quá nhiều module ngang hàng.

Cấu trúc đúng nên là:

1. Group Ritual Core

## 2. Personal Goal System

## 3. Proof & Reaction

## 4. Boss & Recap

## 5. Timeline & Memory

## 6. Privacy & Context Boundary

## 7. Premium/AI/Reward layer sau

2. Core loop sản phẩm

2.1. Core loop đầy đủ

User tham gia nhóm → User chọn mục tiêu/cam kết cá nhân → Nhóm duyệt luật chơi/proof rule ban đầu → Mỗi ngày user nộp proof theo kèo riêng → Nhóm reaction/pass/sus/cà khịa → Boss chung mất máu hoặc hồi máu → Cuối ngày có recap → Cuối tuần/season có Memory Capsule → Khoảnh khắc đáng nhớ được lưu vào Group Timeline

2.2. Core loop ngắn

Kèo riêng → Proof → Cà khịa → Boss chung → Recap → Memory

2.3. Core loop ví dụ

Nhóm:

5 con báo chống lười

Mỗi người chọn một kèo:

- Huy: học tiếng Anh 15 phút/ngày
- Nam: ngủ trước 12h
- Linh: đi bộ 20 phút
- An: đọc 5 trang sách
- Minh: không trà sữa hôm nay

Hằng ngày:

- Huy gửi screenshot app học từ
- Nam tap check-in trước khi ngủ
- Linh gửi ảnh đi bộ
- An gửi ảnh sách
- Minh gửi ảnh cốc nước thay trà sữa

Nhóm reaction:

- Pass
- Respect
- Hơi sus
- Nộp phút 89
- Có cố

Boss mất máu theo số người hoàn thành.

Cuối ngày recap:

Hôm nay nhóm sống sót 4/5. Huy nói tiếng Anh như robot nhưng đều. Nam ngủ sớm lần đầu sau 3 ngày. Linh carry team. Minh thua trà sữa, boss hồi máu nhẹ.

3. Các module sản phẩm chính

3.1. Group Ritual

Đây là core chính.

Nhóm lý tưởng trong MVP:

3–8 người.

Nhóm có:

- Tên nhóm
- Avatar nhóm
- Vibe nhóm
- Boss hiện tại
- Thành viên
- Goal của từng người
- Proof feed
- Recap
- Timeline

Ví dụ tên nhóm:

- 5 con báo chống lười
- Hội anti nói mồm
- Deadline Survivors
- Nhóm chưa giỏi nhưng có cố
- Cục nợ nhiệm vụ

3.2. Personal Goal inside Group

Mỗi người chọn một mục tiêu/cam kết cá nhân. Ví dụ:

- Học tiếng Anh 15 phút/ngày
- Ngủ trước 12h
- Đi bộ 20 phút
- Đọc 5 trang sách
- Không uống trà sữa
- Dọn phòng 5 phút
- Không doomscroll sau 12h
- Gửi một check-in “tôi còn sống”

Điểm quan trọng:

Không bắt cả nhóm cùng mục tiêu.

Nhóm chỉ cùng nhau giữ nhịp.

3.3. Quick Challenge

Quick Challenge là entry point + spice + fallback, không phải core dài hạn chính.

Dùng khi:

- Người mới chưa biết chọn goal gì
- Một người không muốn goal nặng
- Nhóm muốn bốc kèo vui cuối tuần
- User cần nhiệm vụ nhẹ trong ngày nghỉ
- Party/office/group muốn chơi nhanh

Ví dụ Quick Challenge:

- Ra ngoài chạm cỏ 5 phút
- Chụp một vật màu đỏ
- Gửi voice 10 giây nói “hôm nay tôi đã cố”
- Dọn bàn trong 5 phút
- Chống đẩy 10 cái
- Nhắn cho một người bạn: “hôm nay sống ổn không?”

3.4. Duo Mode

Duo dùng cho:

- Hai bạn thân
- Người yêu
- Crush
- Mentor/mentee
- Hai người học/tập cùng nhau

Không nên gọi là Crush Mode trong core product.

Tên nên dùng:

- Duo Challenge
- Buddy Mode
- Pair Goal
- 2-Person Streak
- Private Challenge

3.5. Solo Mode

Solo là onboarding phụ.

Dùng để:

- User thử app trước
- Tạo goal private
- Làm quen proof/streak
- Sau đó mời bạn vào nhóm

Solo không nên là trọng tâm dài hạn.

4. Group setup flow

4.1. Tạo nhóm

User tạo nhóm, ví dụ:

5 con báo chống lười

Chọn vibe nhóm:

- Casual
- Balanced
- Hardcore nhẹ
- Supportive
- Bựa nhưng không toxic

Chọn boss đầu tiên:

- Con Lười Deadline
- Boss Trì Hoãn
- Ma Vương Nói Mồm
- Cục Nợ Nhiệm Vụ
- Slime Trì Hoãn

4.2. Mời thành viên

Mời qua invite link.

Không nên làm community lớn ở MVP.

MVP chỉ cần nhóm riêng tư 3–8 người.

4.3. Mỗi người chọn kèo cá nhân

App hỏi:

Bạn muốn nhóm giữ bạn accountable chuyện gì?

User chọn template hoặc tự nhập.

Template:

- Ngủ sớm
- Đi bộ
- Học tiếng Anh
- Đọc sách
- Gym
- Không trà sữa
- Dọn phòng
- Không doomscroll
- Mini mission nhẹ
- Tự nhập

4.4. Nhóm duyệt cam kết ban đầu

Ví dụ:

Huy

- Goal: Học tiếng Anh 15 phút/ngày
- Proof: Screenshot app học từ hoặc voice 30 giây
- Tần suất: 5 ngày/tuần
- Mức độ: Vừa

Nam

- Goal: Ngủ trước 12h
- Proof: Check-in trước khi ngủ hoặc tap done
- Tần suất: 4 ngày/tuần
- Mức độ: Nhẹ

Nhóm có thể bấm:

- Accept
- Hơi dễ quá
- Proof chưa rõ
- Góp ý
- Đổi sang goal nhẹ hơn

Sau khi nhóm duyệt, mỗi ngày chỉ cần nộp proof theo luật đã thống nhất.

5. Personal Goal System

5.1. Mỗi người có thể có mục tiêu khác nhau

Không bắt cả nhóm cùng làm một việc.

Ví dụ:

- Huy học tiếng Anh
- Linh đi bộ
- Nam ngủ sớm
- Minh bớt trà sữa
- An đọc sách

Tất cả vẫn tính vào boss chung nếu hoàn thành cam kết của mình.

5.2. Primary Goal và Side Quest

Để tránh loạn, mỗi người nên có:

Primary Goal: mục tiêu chính, tính điểm chính vào boss.

Ví dụ:

- Học tiếng Anh 15 phút/ngày
- Ngủ trước 12h
- Đi bộ 20 phút

Side Quest: mục tiêu phụ, chỉ tính bonus nhẹ hoặc recap.

Ví dụ:

- Dọn bàn
- Uống nước
- Đọc 2 trang sách
- Không doomscroll 30 phút

Rule nên là:

Mỗi người chỉ có 1 Primary Goal tính boss chính mỗi ngày. Side Quest chỉ tính bonus nhẹ.

5.3. Người không có mục tiêu gì thì sao?

Vẫn ok.

Có thể chọn Chill Goal.

Ví dụ:

- Ngủ đủ giấc
- Gửi check-in “tôi còn sống”
- Ra ngoài chạm cỏ 5 phút
- Dọn bàn 5 phút
- Uống một cốc nước
- Làm một mini mission app giao
- Không biến mất khỏi nhóm

Teemi không nên ép ai phải “phát triển bản thân” quá nghiêm túc.

5.4. Người có mục tiêu khó hơn có thiệt không?

Không nên tính điểm theo độ hoành tráng tuyệt đối.

Không nên:

- Chạy 5km = 100 điểm
- Uống nước = 10 điểm

Nên tính theo:

Hoàn thành cam kết cá nhân = đóng góp chính.

Ví dụ:

- Nam ngủ trước 12h = completed
- Huy học tiếng Anh 15 phút = completed
- Linh chạy 5km = completed

Boss damage nên gần bằng nhau để app không biến thành cuộc thi productivity.

Có thể có bonus nhẹ theo độ khó:

- Easy: 10 damage
- Normal: 15 damage
- Hard: 20 damage

Nhưng không nên chênh quá lớn.

5.5. Một người có nhiều goal thì sao?

Có thể có, nhưng phải giới hạn.

MVP nên khuyến khích:

- Mỗi user trong mỗi group: 1 Primary Goal
- Có thể có 0–2 Side Quest
- Mỗi user toàn app: khuyến khích tối đa 3 active Primary Goals

App có thể cảnh báo vui:

Bạn đang có 5 kèo active. Khả năng lươn tăng 72%. Có muốn tạm ẩn bớt không?

6. Daily Ritual UX

6.1. Mỗi ngày có một nhịp chung

Ví dụ:

Buổi sáng:

Kèo hôm nay đã mở.

Buổi tối:

Còn 2 người chưa nộp proof. Boss đang cười.

Cuối ngày: Recap hôm nay đã có.

6.2. Màn hình “Hôm nay”

Đây là màn hình quan trọng nhất.

Nên có:

- Mục tiêu hôm nay của mình
- Nút nộp proof
- Ai đã nộp
- Ai chưa nộp
- Boss HP
- Deadline
- Recap nhanh

Ví dụ:

Kèo hôm nay

- Huy: Học tiếng Anh 15 phút — đã nộp
- Nam: Ngủ trước 12h — chờ proof
- Linh: Đi bộ 20 phút — đã nộp
- Minh: Không trà sữa — proof hơi sus
- An: Life Happens hôm nay

Boss Trì Hoãn còn 35 HP.

6.3. Nút quan trọng nhất

Không nên là:

- Create Task
- Add Goal
- New Challenge

Nên là:

Nộp proof

Và với nhóm:

Réo người chưa nộp

Ví dụ notification:

Nhóm đang réo bạn. Boss hồi máu vì bạn đó. Cần giới hạn để không spam.

7. Proof System

### 7.1. Nguyên tắc

Proof phải nhẹ. Proof là niềm vui, không phải thủ tục hành chính.

Submit proof nên dưới 15 giây với đa số nhiệm vụ.

### 7.2. Các cấp proof

Level 1: Tap proof

- Bấm “đã làm”
- Chọn emoji
- Không upload gì

Dùng cho:

- Uống nước
- Dọn bàn
- Đọc vài trang
- Check-in nhẹ

Level 2: Quick proof

- 1 ảnh
- 1 audio 10–30 giây
- 1 dòng text
- 1 screenshot

Dùng cho đa số mission.

Level 3: Fun proof

- Video plank 10 giây
- Audio tiếng Anh hài
- Ảnh gym mặt nghiêm túc
- Screenshot streak
- Route chạy hình lạ

Level 4: Verified proof

- GPS
- Health data
- Timer
- AI check sơ bộ
- Timestamp
- OCR
- Strava/HealthKit/Health Connect

Không làm Level 4 ở MVP.

Chỉ dùng phase sau cho serious goal hoặc sponsor reward.

### 7.3. Safety cho proof

Không nên bắt user upload:

- Mặt
- Vị trí chính xác
- Nội dung quá riêng tư
- Người khác trong ảnh nếu chưa xin phép
- Bằng chứng gây ngại với goal nhạy cảm

Với goal nhạy cảm, nên cho:

Chỉ share pass/fail, không share proof.

## 8. Group Approval & Reaction

### 8.1. Duyệt mục tiêu từ đầu

Nhóm nên duyệt cam kết ban đầu, không duyệt lại mục tiêu mỗi ngày.

Flow:

User tạo goal → App gợi ý proof rule → Nhóm approve goal/proof rule → Mỗi ngày user nộp proof theo rule → Nhóm chỉ reaction/pass/sus

### 8.2. Reaction mỗi ngày

Reaction nên nhẹ:

- Pass
- Respect
- Hơi sus
- Làm lại
- Có cố
- Nộp phút 89
- Run như máy giặt
- Xấu nhưng pass
- Mờ nhưng thật

### 8.3. Pass nhưng sus

Đây là reaction rất hợp văn hóa nhóm.

Ví dụ:

Pass nhưng sus.

Nó cho phép nhóm vui vẻ nghi ngờ mà không quá căng.

### 8.4. Reject cần lý do

Nếu reject, phải chọn lý do:

- Proof không đúng
- Không đủ thời lượng
- Nộp sai deadline
- Proof quá mờ
- Nghi fake

Không nên để một người cố tình reject là fail ngay.

## 9. Boss System

### 9.1. Vai trò

Boss là progress bar có personality.

Nó không cần gameplay sâu.

Nó chỉ cần làm một việc: Biến việc mỗi người hoàn thành cam kết riêng thành cảm giác cả nhóm cùng đánh một mục tiêu chung.

### 9.2. Cơ chế đơn giản

- Mỗi người hoàn thành primary goal: boss mất HP
- Người fail nhẹ: boss hồi HP nhẹ
- Người dùng Life Happens hợp lệ: không tính fail
- Cả nhóm pass trong ngày: critical hit
- Nộp phút 89: vẫn damage nhưng bị roast
- Diệt boss: mở recap/rương/memory

### 9.3. Boss examples

- Con Lười Deadline
- Boss Trì Hoãn
- Ma Vương Nói Mồm
- Vịt Phán Xét
- Cục Nợ Nhiệm Vụ
- Slime Trì Hoãn
- Rồng Deadline

### 9.4. Không nên làm boss quá phức tạp ở MVP

Không cần:

- Skill tree
- Item
- Element
- PVP
- Boss nhiều phase
- Ranking toàn app

MVP chỉ cần:

HP bar + animation vui + câu cà khịa + recap.

Ví dụ boss quote:

Boss Trì Hoãn: “Nam chưa nộp proof, ta lại mạnh thêm rồi.”

## 10. Timeline / Memory System

### 10.1. Timeline là gì?

Timeline không phải social feed.

Timeline nên là:

Group Journey Timeline.

Đây là nơi lưu lại quá trình cả nhóm cùng tốt lên, fail, comeback, ăn mừng và tạo kỷ niệm.

### 10.2. Timeline nên lưu gì?

Daily recap

Ví dụ:

Ngày 5 — Nhóm sống sót 4/5

- Huy học tiếng Anh
- Linh đi bộ
- Nam ngủ sớm
- Minh fail vì mất tích
- Boss Trì Hoãn mất 45 HP
- Tag nổi bật: Nam comeback, Huy nộp phút 89

Weekly recap

Ví dụ:

Tuần này nhóm hoàn thành 27/35 kèo. Huy nói tiếng Anh như robot nhưng đều. Nam fail 2 ngày rồi comeback. Linh carry team. Boss Trì Hoãn còn 20 HP.

Highlight

Cho phép pin:

- Proof hài nhất
- Người comeback mạnh nhất
- Lần đầu cả nhóm pass 100%
- Boss đầu tiên bị diệt
- Buổi đi ăn mừng
- Ảnh nhóm sau challenge
- Câu roast huyền thoại
- Milestone quan trọng

After Quest

Khi hoàn thành season hoặc goal lớn, app gợi ý lưu lại khoảnh khắc ăn mừng.

Ví dụ:

After Quest unlocked: Đi ăn lẩu

Nhóm có thể upload:

- Ảnh đi ăn
- Video ngắn
- Caption
- Link album Google Photos/iCloud/Drive
- Ghi chú

Ví dụ caption:

Kèo này bắt đầu từ câu “mai làm” và kết thúc bằng nồi lẩu 699k.

### 10.3. Rule để timeline không bị loãng

Timeline chỉ lưu những thứ phát sinh từ challenge/goal/group journey.

Không nên biến thành nơi đăng:

- Selfie bất kỳ
- Status vu vơ
- Ảnh ăn uống không liên quan
- Feed công khai
- Comment dài như mạng xã hội

Timeline nên chỉ có:

- Proof
- Daily recap
- Weekly recap
- Boss event
- Role event
- Penalty event
- Milestone
- After Quest
- Memory Capsule
- Celebration photo
- External album link

### 10.4. MVP Timeline

MVP chỉ cần:

- Lưu daily recap
- Lưu weekly recap
- Lưu boss defeated moment
- Pin 1–3 highlight
- Upload 1–3 ảnh after quest
- Gắn link album ngoài
- Share recap card

Chưa cần:

- AI search
- Vector DB
- Album ảnh lớn
- Infinite feed
- Comment phức tạp
- Video recap
- Yearbook

## 11. Support Mode / Life Happens

### 11.1. Vì sao cần?

Nếu app chỉ biết fail và phạt, nó dễ toxic.

Người dùng có thể bận đột xuất, có chuyện buồn, vấn đề gia đình, sức khỏe, công việc hoặc lý do tế nhị. App phải có cơ chế nhân văn.

Nguyên tắc:

Life happens. App phải cho người dùng quyền tạm dừng mà không bị làm nhục.

### 11.2. Các trạng thái nghỉ

User có thể chọn:

- Xin nghỉ hôm nay
- Bận đột xuất
- Lý do cá nhân
- Không muốn chia sẻ
- Cần nghỉ vài ngày
- Đổi sang nhiệm vụ nhẹ
- Support Mode

Hiển thị với nhóm:

Nam xin nghỉ hôm nay. Không tính fail.

Hoặc:

Nam dùng quyền Life Happens. Boss không hồi máu hôm nay.

Không bắt user nói lý do chi tiết.

### 11.3. Có cần nhóm approve nghỉ không?

Tùy mode.

Casual group

- User tự dùng skip
- Ví dụ 2 skip/tuần
- Không cần duyệt

Serious group

- User xin nghỉ
- Nhóm accept
- Không mất streak
- Không làm boss hồi máu

Với lý do cá nhân/tế nhị, user có thể chọn:

Private reason

Nhóm chỉ thấy:

Lý do cá nhân.

### 11.4. Fail nhẹ vs fail nghiêm túc

Fail nhẹ

Ví dụ:

- Quên học
- Quên đi bộ
- Ngủ muộn
- Nộp muộn

Có thể roast nhẹ, boss hồi máu nhẹ, penalty vui.

Fail do đời thật

Ví dụ:

- Bận đột xuất
- Chuyện buồn
- Sức khỏe
- Gia đình
- Áp lực cá nhân

Không roast, không phạt, không boss hồi máu.

Fail mục tiêu lớn

Ví dụ:

- Thi trượt
- Trượt phỏng vấn
- Không đạt chứng chỉ
- Không đạt mục tiêu sức khỏe

Chuyển sang Support Mode hoặc Comeback Season.

## 12. Serious Goal / Comeback System

### 12.1. Không nên chỉ track outcome

Không nên chỉ track:

Đỗ kỳ thi hay không.

Vì outcome không hoàn toàn nằm trong kiểm soát.

Nên track process:

- Học 30 phút/ngày
- Làm 1 đề/tuần
- Ôn 20 từ/ngày
- Review lỗi sai
- Làm mock test
- Đi học đầy đủ

### 12.2. Nếu thi trượt hoặc goal lớn thất bại

App không nên roast.

Nên recap tử tế:

Bạn đã hoàn thành 42 buổi học, 6 mock test và 380 từ vựng. Kết quả lần này chưa đạt, nhưng quá trình vẫn được ghi nhận. Nhóm có thể cùng bạn tạo season comeback.

### 12.3. Comeback Season

Sau một thất bại lớn, app gợi ý:

Tạo Comeback Season?

Ví dụ:

- JLPT Comeback Season — 30 ngày reset
- Phỏng vấn comeback — 14 ngày luyện lại
- Ngủ lại từ đầu — 7 ngày nhẹ nhàng

### 12.4. Archive with respect

Nếu user muốn dừng goal, app cho archive tử tế:

Goal này đã được đóng lại. Không phải mọi hành trình đều kết thúc bằng win, nhưng nó vẫn là một phần timeline của bạn.

User chọn:

- Lưu vào timeline
- Chỉ lưu private
- Ẩn khỏi nhóm
- Xóa hoàn toàn

## 13. Multi-group Identity & Context Boundary

### 13.1. Vấn đề

Một người có thể thuộc nhiều nhóm:

- Nhóm bạn thân
- Nhóm gym
- Nhóm học tiếng Anh
- Nhóm đồng nghiệp
- Nhóm gia đình
- Nhóm đi du lịch
- Nhóm project

Nhưng mỗi nhóm là một context xã hội khác nhau.

Với bạn thân thì có thể bựa. Với đồng nghiệp thì phải lịch sự. Với gia đình thì riêng tư. Với nhóm gym thì có thể cạnh tranh hơn.

Nếu app tự động trộn dữ liệu giữa các nhóm, sẽ dễ gây drama.

Ví dụ:

- “Sao mày share thành tích bên nhóm kia mà không share bên này?”
- “Sao mày active nhóm kia hơn nhóm này?”
- “Sao proof bựa trong nhóm bạn thân lại lộ sang nhóm đồng nghiệp?”
- “Sao mày ăn mừng với nhóm kia mà không rủ nhóm này?”

### 13.2. Nguyên tắc

Context isolation by default. Cross-share only by explicit choice.

Nghĩa là:

- Mỗi nhóm là một không gian riêng
- Không tự động share proof giữa các nhóm
- Không tự động hiện user đang active ở nhóm khác
- Không tự động credit nhóm gốc khi share achievement
- Mọi cross-share phải do user chủ động chọn

### 13.3. Có nên giới hạn số nhóm không?

Có, nhưng nên giới hạn active group, không giới hạn toàn bộ group.

Active Group là nhóm đang có ritual hằng ngày/tuần.

Ví dụ:

- Nhóm bạn thân chống lười
- Nhóm học tiếng Anh 14 ngày
- Nhóm gym 21 ngày

Archived Group là nhóm đã kết thúc season, chỉ còn để xem timeline/memory.

Ví dụ:

- Nhóm Đà Nẵng tháng 6
- Nhóm 14 ngày gym cũ
- Nhóm project đã xong

Gợi ý MVP:

- Free: 2–3 active groups
- Premium: 5–10 active groups
- Archived groups: không giới hạn quá chặt, chỉ giới hạn storage/memory

Quan trọng:

App nên khuyến khích người dùng tập trung vào ít nhóm active, vì social ritual chỉ mạnh khi không bị loãng.

### 13.4. Một goal có thể share vào nhiều nhóm không?

Có, nhưng phải thiết kế khéo.

Mô hình đúng:

Personal Goal là gốc. Group Commitment là bản chia sẻ theo từng nhóm.

Ví dụ:

Personal Goal:

Ngủ trước 12h

Shared to:

- Nhóm bạn thân: share pass/fail + proof vui
- Nhóm gia đình: chỉ share pass/fail
- Duo: share proof chi tiết hơn

Cùng một goal, nhưng mỗi nhóm có quyền xem khác nhau.

### 13.5. Một proof có nên dùng cho nhiều nhóm không?

Có thể, nhưng không tự động.

Nên có lựa chọn:

Dùng proof này cho nhóm nào?

Ví dụ user nộp proof:

Hôm nay ngủ trước 12h

App hỏi:

- Share với Nhóm bạn thân
- Share với Nhóm gia đình
- Share với Duo
- Chỉ lưu cá nhân

Mặc định:

Chỉ share vào nhóm gắn với goal đó. Không tự động cross-share.

### 13.6. Achievement nên share thế nào?

Có 3 lớp achievement:

Personal Achievement thuộc về cá nhân.

Ví dụ:

Huy hoàn thành 7 ngày ngủ sớm.

Group Achievement thuộc về nhóm.

Ví dụ:

Nhóm 5 con báo diệt Boss Trì Hoãn.

Shared Journey Achievement thuộc về cả cá nhân và nhóm.

Ví dụ:

Huy hoàn thành goal cá nhân trong season của nhóm.

Khi share, user chọn:

- Share personal only
- Share group achievement
- Share shared journey
- Không share

Mặc định nên là:

Share thành tích dưới dạng personal milestone, không tự động credit nhóm gốc.

Ví dụ an toàn:

Huy đã hoàn thành 7 ngày ngủ sớm.

Không tự động ghi:

Cùng nhóm 5 con báo chống lười.

Trừ khi user chủ động chọn.

## 14. Reward / Gacha

### 14.1. Vai trò

Reward có thể có, nhưng không phải core.

Core là:

Kèo riêng → Proof → Nhóm reaction → Boss chung → Recap → Memory

Reward chỉ là gia vị.

### 14.2. MVP reward

MVP chỉ nên có reward vui:

- XP
- Meme Coin
- Badge
- Title
- Sticker
- Boss defeated badge
- Role vui

Không nên có:

- Voucher thật
- Mã cào
- Tiền thật
- Sponsor campaign
- Gacha quà thật

### 14.3. Gacha cosmetic

Có thể để V1/V2.

Gacha quay ra:

- Sticker bựa
- Title
- Avatar frame
- Boss skin
- Reaction đặc biệt
- Recap template
- Theme nhóm

Ví dụ title:

- Thánh Lươn
- Máy Chạy Deadline
- Cục Nợ Nhiệm Vụ
- Deadline Lord
- Báo Thủ Cải Tà
- Proof Hơi Sus
- Carry Team

### 14.4. Reward thật để phase sau

Voucher/sponsor chỉ triển khai khi có:

- User thật
- Anti-cheat
- Trust score
- Quota
- Audit
- Điều khoản rõ ràng
- Partner/sponsor thật

Nguyên tắc:

Người dùng có thể gian lận phần vui, nhưng không được gian lận phần có giá trị thật.

## 15. AI trong app

### 15.1. AI nên dùng để

- Gợi ý goal từ input mơ hồ
- Gợi ý proof rule
- Viết lại mission cho vui
- Tạo safe roast
- Tạo recap
- Tạo Memory Capsule
- Gợi ý Comeback Season
- Gợi ý mission nhẹ khi user mệt
- Phase sau: AI memory search
- Phase sau: risk scoring cho sponsor reward

### 15.2. AI không nên dùng để

- Tự quyết fail/pass tuyệt đối
- Phán xét người dùng quá nặng
- Tự publish trend
- Làm proof thành kiểm tra hành chính
- Biến app thành AI app thay vì social app

### 15.3. MVP AI

MVP có thể không cần AI hoặc chỉ dùng rất nhẹ.

Ưu tiên template trước.

AI chỉ nên thêm nếu không làm chậm build:

- Generate câu recap
- Rewrite mission vui hơn
- Gợi ý proof rule

## 16. Memory Business / Storage / AI Search

### 16.1. Có thể kinh doanh storage không?

Có, nhưng không nên bán kiểu:

Mua thêm 100GB lưu ảnh. Nên bán:

Memory experience.

Tức là:

- Lưu lại hành trình nhóm
- Tìm lại khoảnh khắc
- Tạo recap đẹp
- Tạo Memory Capsule
- Tạo Year in Review
- Tạo album thông minh
- AI kể lại câu chuyện nhóm

### 16.2. Free memory

Free nên có:

- Daily recap
- Weekly recap
- Một số proof gần đây
- Boss defeated moment
- Một số pinned highlight
- Link album ngoài

### 16.3. Premium memory

Premium có thể mở:

- Lưu timeline dài hơn
- Lưu nhiều ảnh/video hơn
- Unlimited highlights
- Memory Capsule đẹp hơn
- AI recap tháng/năm
- Smart album
- Export PDF/ảnh dài/video
- AI tìm lại khoảnh khắc
- Custom theme cho timeline
- Yearbook nhóm

### 16.4. AI Memory Search

Phase sau rất hợp.

User có thể search:

- “Lần Nam nộp phút 89”
- “Ảnh nhóm đi ăn lẩu sau challenge gym”
- “Khoảnh khắc Linh comeback”
- “Proof hài nhất tháng trước”
- “Lần đầu nhóm diệt boss”
- “Ảnh chuyến Đà Nẵng”
- “Những ngày cả nhóm pass 100%”

### 16.5. Vector DB có nên dùng không?

Có thể, nhưng để phase sau.

MVP không cần vector DB.

Lộ trình:

MVP: PostgreSQL + storage đơn giản + filter theo ngày/người/tag.

V1/V2: PostgreSQL full-text search + smart tags.

V3: pgvector hoặc Qdrant cho AI memory search.

Pipeline phase sau:

Ảnh/video/proof/recap/comment → Extract metadata → OCR nếu có text → Speech-to-text nếu audio/video → Image captioning nếu cần → Gắn tag người/goal/boss/event/cảm xúc → Tạo embedding → Lưu Vector DB → Search bằng natural language

## 17. Privacy & Safety

### 17.1. Privacy là core feature

Mọi thứ mặc định private.

Visibility:

- Chỉ mình tôi
- Chỉ nhóm này
- Chỉ hiện pass/fail
- Ẩn proof khỏi recap
- Xóa proof
- Không lưu sau season
- Public chỉ khi user chủ động share

### 17.2. User sở hữu proof của mình

User phải có quyền:

- Xóa proof
- Ẩn proof
- Không đưa proof vào recap
- Không cho AI dùng proof để search
- Khi rời nhóm, chọn giữ/xóa/ẩn dữ liệu của mình

### 17.3. AI memory phải tôn trọng quyền riêng tư

AI search không được trả ra nội dung user không có quyền xem.

Ví dụ:

Nếu Nam ẩn proof, người khác search cũng không được thấy proof đó.

### 17.4. Safety cho challenge

Không tạo nhiệm vụ:

- Nguy hiểm
- Làm phiền người lạ
- Quay người khác không xin phép
- Tự làm đau bản thân
- Nội dung nhạy cảm
- Vi phạm pháp luật
- Ép thể lực quá mức
- Ép chia sẻ chuyện riêng tư

## 18. Brand / Vibe / Visual

### 18.1. Visual direction

Phong cách chính:

Doodle nguệch ngoạc, vui nhộn, bựa nhẹ, hơi ngốc, dễ meme.

Nhưng UX vẫn phải sạch.

Tỷ lệ:

70% UX sạch, rõ, nhanh 30% doodle/meme/personality

### 18.2. Ngôn ngữ sản phẩm

Cần có ngôn ngữ riêng:

- Proof hơi sus
- Nộp phút 89
- Boss hồi máu rồi
- Báo thủ tuần
- Deadline Lord
- Có cố
- Run như máy giặt
- Bốc kèo
- Diệt Con Lười
- Cú comeback của người từng mất tích
- Life Happens
- Kèo riêng, boss chung

### 18.3. Custom theme

Không làm sâu ở MVP.

Để phase sau/premium:

- Wibu/anime-inspired
- Game thủ
- Gym bros
- Văn phòng toxic vui
- Hội trà sữa
- Hội deadline
- Hội anti nói mồm

### 18.4. Anime/wibu theme

Có thể làm, nhưng tránh copy IP. Không dùng trực tiếp:

- Naruto
- Luffy
- Goku
- Gojo
- Tên/hình/costume nhân vật có bản quyền

Nên dùng:

Anime-inspired original doodle characters.

Ví dụ:

- Kiếm sĩ Deadline
- Pháp sư Trà Sữa
- Senpai Không Nộp Proof
- Boss Otaku Lười Biếng
- Villain Arc Comeback
- Healer Động Viên
- Sensei Chống Lười

## 19. Tech stack đề xuất

### 19.1. Nguyên tắc kỹ thuật

Vì app có nguy cơ scope lớn và hạ tầng nặng, chiến lược kỹ thuật phải là:

Build nhỏ, scale sau.

Không build trước:

- Vector DB
- AI pipeline phức tạp
- Video processing
- Sponsor system
- Anti-cheat phức tạp
- Public feed
- Community lớn

### 19.2. Mobile

Nên dùng:

- Expo React Native + TypeScript
- Expo Router
- TanStack Query
- Zustand/Jotai
- React Hook Form
- Zod
- Expo Notifications
- Expo Image Picker / Camera / AV

### 19.3. Web

Dùng:

- Next.js + TypeScript

Web dùng cho:

- Landing page
- Waitlist
- Invite landing
- Public recap page opt-in
- Admin dashboard sau này

Không build web full app ngay.

### 19.4. Backend

Dùng:

- NestJS + TypeScript

Lý do:

- Đồng bộ TypeScript với frontend
- Build nhanh
- Dễ chia module
- Dễ làm API
- Dễ tích hợp queue/AI sau này

### 19.5. Database

- PostgreSQL
- Prisma hoặc Drizzle

MVP ưu tiên Prisma để build nhanh.

### 19.6. Storage

MVP:

- Supabase Storage hoặc Cloudflare R2
- Có giới hạn upload
- Nén ảnh/video
- Không lưu video dài
- Ưu tiên ảnh/audio ngắn

Không nên cho upload media vô hạn.

### 19.7. Auth

MVP:

- Supabase Auth
- Firebase Auth

### 19.8. Notification

- Expo Notifications
- Firebase Cloud Messaging

### 19.9. Analytics

- PostHog

Track rất sớm:

- group_created
- invite_sent
- invite_accepted
- goal_created
- goal_approved
- proof_submitted
- reaction_sent
- boss_damaged
- recap_viewed
- recap_shared
- timeline_opened
- season_restarted

## 20. Data model MVP

MVP không nên tạo quá nhiều bảng reward/sponsor/anti-cheat ngay.

### 20.1. Core tables

users

- id
- nickname
- avatar_url
- email/phone
- created_at

groups

- id
- name
- avatar_url
- vibe
- created_by
- status: active / archived
- created_at

group_members

- id
- group_id
- user_id
- role
- status
- joined_at

goals

- id
- owner_user_id
- title
- description
- category
- frequency
- difficulty
- proof_rule
- visibility
- status
- created_at

group_goal_commitments

- id
- goal_id
- group_id
- user_id
- visibility_in_group
- proof_visibility
- is_primary
- status
- created_at

goal_approvals

- id
- goal_commitment_id
- reviewer_id
- status
- comment
- created_at

daily_checkins

- id
- group_id
- user_id
- goal_commitment_id
- date
- status: pending / submitted / passed / skipped / failed
- submitted_at

proofs

- id
- checkin_id
- user_id
- proof_type
- content_url
- text_content
- visibility
- submitted_at
- status

reactions

- id
- proof_id
- user_id
- type
- comment
- created_at

bosses

- id
- group_id
- name
- hp_total
- hp_current
- status
- season_id
- created_at

boss_events

- id
- boss_id
- user_id
- event_type
- amount
- checkin_id
- created_at

recaps

- id
- group_id
- type: daily / weekly / season
- date_range
- content
- image_url
- created_at

timeline_events

- id
- group_id
- type
- title
- content
- related_entity_type
- related_entity_id
- pinned
- created_at

skips

- id
- group_id
- user_id
- date
- reason_type
- visibility
- status
- created_at

roles

- id
- group_id
- user_id
- role_type
- assigned_reason
- created_at

### 20.2. Phase sau mới thêm

- rewards
- wallets
- gacha_pulls
- sponsor_campaigns
- sponsor_tickets
- audits
- group_trust_scores
- theme_packs
- vector_embeddings
- smart_albums
- buddy_matches

## 21. Product conclusion

Thiết kế sản phẩm của Teemi phải luôn quay về một câu:

Mỗi người một kèo. Cả nhóm một boss. Tất cả module khác như reward, theme, AI, memory search, sponsor, buddy match đều chỉ nên được thêm khi chúng làm mạnh hơn ritual này.

Nếu một tính năng không giúp nhóm:

- Nộp proof nhiều hơn
- Reaction nhiều hơn
- Quay lại mỗi ngày nhiều hơn
- Có recap đáng nhớ hơn
- Có timeline cảm xúc hơn

thì không nên đưa vào MVP.
