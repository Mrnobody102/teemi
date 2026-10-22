# DOC 3 — EXECUTION PLAN & ROADMAP

> Teemi — Kế hoạch triển khai, MVP, validation, timeline và roadmap

_Bản thảo gốc của founder, xuất từ `docs/references/Teemi app.pdf`. Đây là **input nguyên bản, chưa qua phản biện** — giữ nguyên văn, không sửa nội dung._

## 1. Mục tiêu triển khai

Teemi có rất nhiều hướng phát triển tiềm năng:

- Group ritual
- Personal goal
- Proof
- Reaction
- Boss
- Recap
- Timeline
- Memory Capsule
- Reward
- Gacha
- Premium
- AI recap
- AI memory search
- Vector DB
- Sponsor
- Buddy Match
- B2B/community

Nhưng nếu build tất cả ngay, app sẽ quá nặng, tốn hạ tầng, khó hoàn thành và dễ mất định hướng.

Vì vậy kế hoạch triển khai phải đi theo nguyên tắc:

Build nhỏ, validate nhanh, chỉ mở rộng khi ritual thật sự sống.

Mục tiêu đầu tiên không phải là có nhiều tính năng.

Mục tiêu đầu tiên là chứng minh: Một nhóm bạn có quay lại mỗi ngày để nộp proof, reaction, xem boss và đọc recap không?

Nếu có, Teemi có nền để đi tiếp.

Nếu không, mọi feature nâng cao đều vô nghĩa.

## 2. MVP chốt

### 2.1. MVP là gì?

MVP của Teemi là:

App cho nhóm bạn 3–8 người, nơi mỗi người chọn một kèo cá nhân, nhóm duyệt luật chơi ban đầu, mỗi ngày nộp proof nhẹ, reaction/cà khịa nhau, cùng đánh boss chung và xem recap/timeline cơ bản.

### 2.2. MVP không phải là gì?

MVP không phải:

- Habit tracker đầy đủ
- Game boss phức tạp
- Mạng xã hội
- App chat
- App gacha
- App kiếm voucher
- App tìm bạn
- Cloud ảnh nhóm
- AI memory app
- B2B platform

### 2.3. Câu MVP cần giữ

Kèo riêng → Proof → Cà khịa → Boss chung → Recap → Memory

## 3. MVP feature scope

### 3.1. Account

Cần có:

- Đăng nhập
- Nickname
- Avatar
- Profile đơn giản

Không cần:

- Profile public
- Follow
- Bio dài
- Social graph phức tạp

### 3.2. Group

Cần có:

- Tạo nhóm
- Invite link
- Group 3–8 người
- Chọn vibe nhóm
- Chọn boss đầu tiên
- Archive group khi kết thúc season

Vibe nhóm ví dụ:

- Casual
- Balanced
- Hardcore nhẹ
- Supportive
- Bựa nhưng không toxic

Boss ví dụ:

- Con Lười Deadline
- Boss Trì Hoãn
- Ma Vương Nói Mồm
- Cục Nợ Nhiệm Vụ
- Slime Trì Hoãn

### 3.3. Personal Goal

Cần có:

- Mỗi người tạo 1 Primary Goal
- Chọn từ template hoặc tự nhập
- Chọn proof rule
- Chọn frequency
- Chọn difficulty
- Nhóm approve goal ban đầu
- Cho phép goal private/pass-fail only

Goal template:

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

### 3.4. Daily Check-in

Cần có:

- Mỗi ngày hiện mục tiêu của từng người
- Nút nộp proof
- Trạng thái ai đã/chưa nộp
- Deadline chung
- Nút réo nhẹ

Ví dụ màn hình:

Kèo hôm nay

- Huy: Học tiếng Anh 15 phút — đã nộp
- Nam: Ngủ trước 12h — chờ proof
- Linh: Đi bộ 20 phút — đã nộp
- Minh: Không trà sữa — proof hơi sus
- An: Life Happens hôm nay

Boss Trì Hoãn còn 35 HP.

### 3.5. Proof

Cần có:

- Tap done
- Text
- Ảnh
- Audio ngắn
- Screenshot

Không cần:

- Video dài
- GPS
- Strava
- HealthKit
- OCR
- AI proof verification

### 3.6. Reaction

Cần có:

- Pass
- Respect
- Hơi sus
- Làm lại
- Có cố
- Nộp phút 89

Ví dụ reaction:

Pass nhưng sus.

Có cố, nhưng camera run như máy giặt.

### 3.7. Boss

Cần có:

- Boss HP đơn giản
- Pass làm boss mất máu
- Fail làm boss hồi máu nhẹ
- Skip hợp lệ không làm boss hồi máu
- Diệt boss có recap

Không cần:

- Skill tree
- Item
- Boss nhiều phase
- PVP
- Ranking toàn app

### 3.8. Recap

Cần có:

- Daily recap
- Weekly recap
- Share card đơn giản

Ví dụ daily recap:

Hôm nay nhóm sống sót 4/5. Huy nói tiếng Anh như robot nhưng đều. Nam ngủ sớm lần đầu sau 3 ngày. Linh carry team. Minh thua trà sữa, boss hồi máu nhẹ.

### 3.9. Timeline

Cần có:

- Lưu recap
- Lưu boss defeated moment
- Pin highlight
- Upload 1–3 ảnh after quest
- Gắn link album ngoài

Không cần:

- Infinite feed
- Album ảnh lớn
- Comment dài
- AI search
- Vector DB
- Yearbook

### 3.10. Support

Cần có:

- Skip / Life Happens
- Pause goal
- Private reason
- Không roast khi user chọn lý do cá nhân

Ví dụ:

Nam xin nghỉ hôm nay. Không tính fail. Boss không hồi máu.

### 3.11. Privacy

Cần có:

- Private default
- Proof visibility
- Xóa proof
- Ẩn khỏi recap
- Không cross-share mặc định

## 4. MVP không nên làm

Không nên làm trong MVP:

- Public feed
- Stranger matching
- Buddy Match
- Chat trong app
- Payment
- Voucher thật
- Sponsor campaign
- Gacha quà thật
- Vector DB
- AI memory search
- OCR/transcript
- GPS/Strava
- HealthKit
- B2B dashboard
- Creator platform
- Public leaderboard
- Advanced anti-cheat
- Album ảnh lớn
- Video recap
- AI proof verification phức tạp
- Full web app

Lý do:

Những thứ này làm app phình scope, tăng hạ tầng, tăng moderation, tăng privacy risk và làm mờ ritual lõi.

## 5. Màn hình MVP

### 5.1. Home / Hôm nay

Màn hình chính.

Có:

- Goal hôm nay của mình
- Nút nộp proof
- Ai đã/chưa nộp
- Boss HP
- Deadline
- Nút réo nhẹ

Đây là màn hình quan trọng nhất.

Người dùng mở app phải hiểu ngay:

Hôm nay mình cần làm gì và nhóm còn ai chưa nộp?

### 5.2. Group

Có:

- Thành viên
- Goal của từng người
- Role hiện tại
- Proof feed
- Reaction

### 5.3. Boss

Có:

- Boss HP
- Lịch sử damage
- Ai làm boss mất máu
- Ai làm boss hồi máu
- Boss quote vui

Ví dụ boss quote:

Boss Trì Hoãn: “Nam chưa nộp proof, ta lại mạnh thêm rồi.”

### 5.4. Timeline

Có:

- Daily recap
- Weekly recap
- Highlight
- Boss defeated
- After Quest

### 5.5. Goal setup

Có:

- Chọn goal template
- Tự nhập goal
- Proof rule
- Frequency
- Difficulty
- Submit cho nhóm duyệt

### 5.6. Personal Dashboard

Có:

- Hôm nay tôi cần làm gì?
- Goal nào thuộc nhóm nào?
- Deadline nào gần nhất?
- Nhóm nào đang chờ tôi?

Ví dụ:

Hôm nay của Huy

1. Học tiếng Anh 15 phút Nhóm: 5 con báo học tiếng Anh Deadline: 22:00
2. Ngủ trước 12h Nhóm: Bạn thân / Gia đình Deadline: 23:59
3. Dọn bàn 5 phút Chỉ cá nhân Deadline: hôm nay

MVP có thể làm bản đơn giản trước.

## 6. Phase 0 — Validation không code hoặc ít code

### 6.1. Mục tiêu

Kiểm tra xem social ritual có thật sự hấp dẫn không trước khi build app đầy đủ.

Câu hỏi cần trả lời:

- Nhóm có chịu chọn goal không?
- Có chịu nộp proof không?
- Có reaction/cà khịa nhau không?
- Recap có khiến họ muốn quay lại không?
- Có ai share recap không?
- Có nhóm nào muốn chơi tuần 2 không?

### 6.2. Cách làm

Không cần code nhiều.

Có thể dùng:

- Landing page
- Figma prototype
- Zalo/Messenger/Discord group test thủ công
- Google Form để nộp proof
- Google Sheet để track
- Manual recap bằng AI/Canva
- Test với 3–5 nhóm bạn thật

### 6.3. Cách test thủ công

Tạo 3–5 nhóm thử nghiệm.

Mỗi nhóm 3–8 người. Trong 7 ngày:

- Mỗi người chọn một goal nhỏ
- Nhóm approve rule
- Mỗi ngày nộp proof vào group chat/form
- Người điều phối tạo recap thủ công
- Có boss HP đơn giản
- Có reaction/cà khịa
- Có recap cuối ngày/cuối tuần

### 6.4. Ví dụ test thủ công

Nhóm:

5 con báo chống lười

Goal:

- Huy: học tiếng Anh 15 phút
- Nam: ngủ trước 12h
- Linh: đi bộ 20 phút
- Minh: không trà sữa
- An: đọc 5 trang sách

Mỗi ngày cả nhóm gửi proof.

Người điều phối gửi recap:

Hôm nay nhóm sống sót 4/5. Nam nộp phút 89, nghi vấn vẫn online 00:17. Minh bị trà sữa dụ dỗ, boss hồi 10 HP. Linh carry team, đề nghị cả nhóm bớt báo.

### 6.5. Tiêu chí pass Phase 0

Tín hiệu tốt nếu:

- 50%+ thành viên nộp proof ngày đầu
- 3 ngày liên tiếp nhóm còn hoạt động
- Reaction/proof xuất hiện tự nhiên
- Có người tự cà khịa mà không cần nhắc
- Có người hỏi recap
- Có nhóm muốn chơi tuần 2
- Có người share recap/card ra ngoài group

Nếu không có những tín hiệu này, chưa nên build app lớn.

## 7. Phase 1 — MVP App

### 7.1. Mục tiêu

Build app thật nhưng scope nhỏ, chỉ tập trung vào ritual lõi.

### 7.2. Feature trong Phase 1

- Account
- Create group
- Invite link
- Goal setup
- Goal approval
- Daily check-in
- Proof submit
- Reaction
- Boss HP
- Daily recap
- Weekly recap
- Timeline nhẹ
- Skip/Life Happens
- Share card
- Context boundary cơ bản

### 7.3. Không làm trong Phase 1

- AI memory search
- Vector DB
- Sponsor
- Voucher
- Gacha thật
- Buddy Match
- Public feed
- Chat
- GPS
- Strava
- B2B
- Creator platform

### 7.4. Thời gian đề xuất

Nếu làm solo hoặc team nhỏ, có thể chia: Tuần 1–2: Setup nền

- Repo
- Auth
- Database
- Group
- Invite
- Basic UI

Tuần 3–4: Goal & Check-in

- Goal template
- Custom goal
- Group approval
- Daily check-in
- Status pending/submitted/skipped

Tuần 5–6: Proof & Reaction

- Upload ảnh
- Text proof
- Audio ngắn nếu kịp
- Reaction
- Proof feed
- Visibility cơ bản

Tuần 7–8: Boss & Recap

- Boss HP
- Boss event
- Daily recap
- Weekly recap
- Share card đơn giản

Tuần 9–10: Timeline & Support

- Timeline event
- Pin highlight
- Life Happens
- Pause goal
- Private reason
- Basic privacy controls

Tuần 11–12: Polish & Private Beta

- Fix UX
- Push notification
- Analytics
- Onboarding
- TestFlight/Internal testing
- Private beta 20–50 users

## 8. Phase 2 — Retention Layer

### 8.1. Mục tiêu

Sau khi ritual lõi có tín hiệu tốt, thêm các tính năng tăng retention.

### 8.2. Feature Phase 2

- Role tự động
- Better recap
- Memory Capsule
- More boss skins
- More goal templates
- Simple reward/cosmetic
- Basic premium theme
- Active group limit
- Archive group
- More share cards

### 8.3. Role tự động

Ví dụ:

- Deadline Lord
- Báo Thủ Tuần
- Người Phán Xử
- Carry Team
- Support Chính Hiệu
- Comeback King
- Ghost Member
- Proof Hơi Sus
- Boss Slayer

### 8.4. Memory Capsule

Ví dụ: 14 ngày chống lười của 5 con báo

Ngày 1: ai cũng hừng hực Ngày 3: Nam mất tích Ngày 5: Huy nộp proof 23:59 Ngày 9: Linh carry team Ngày 14: Boss Trì Hoãn bị tiêu diệt After Quest: cả nhóm đi ăn lẩu

## 9. Phase 3 — Premium Memory / AI nhẹ

### 9.1. Mục tiêu

Bắt đầu tạo giá trị premium mà không làm lệch core.

### 9.2. Feature Phase 3

- AI recap nâng cao
- Smart timeline tags
- Search theo người/ngày/tag
- Group Memory Premium
- Export recap đẹp
- Extended archive
- Custom theme nhóm
- Custom roast tone

### 9.3. Premium hợp lý

Premium có thể mở:

- Lưu timeline dài hơn
- Lưu nhiều ảnh/video hơn
- Unlimited highlights
- Memory Capsule đẹp hơn
- AI recap tháng/năm
- Export PDF/ảnh dài/video
- Theme nhóm
- Boss skin
- Role pack

## 10. Phase 4 — AI Memory / Vector DB

### 10.1. Mục tiêu

Biến Teemi thành nơi tìm lại và kể lại hành trình nhóm bằng AI.

### 10.2. Feature Phase 4

- AI memory search
- OCR
- Speech-to-text
- Image captioning
- pgvector hoặc Qdrant
- Smart album
- Year in Review

### 10.3. Ví dụ AI search

User hỏi:

- “Lần Nam nộp phút 89”
- “Ảnh nhóm đi ăn lẩu sau challenge gym”
- “Khoảnh khắc Linh comeback”
- “Proof hài nhất tháng trước”
- “Lần đầu nhóm diệt boss”
- “Ảnh chuyến Đà Nẵng”
- “Những ngày cả nhóm pass 100%”

### 10.4. Lưu ý

Không làm nếu dữ liệu chưa đủ nhiều.

AI memory search chỉ có giá trị khi nhóm đã có timeline, recap và proof đủ phong phú.

## 11. Phase 5 — Buddy Match / Sponsor / B2B

### 11.1. Chỉ làm khi có traction

Các tính năng này có thể hay, nhưng dễ làm lệch hướng.

Chỉ làm khi:

- Core retention tốt
- Có nhóm active thật
- Có bằng chứng user muốn mở rộng
- Có khả năng kiểm soát safety/moderation

### 11.2. Buddy Match

Không làm MVP.

Phase sau có thể làm:

- Buddy Match
- Find a Goal Buddy
- Tìm bạn cùng kèo
- Dual Challenge Match

Nguyên tắc:

- Opt-in hoàn toàn
- Không mở DM tự do ngay
- Match theo goal/timezone/tần suất
- Có trial 7 ngày
- Có block/report
- Có nickname/pseudonym

### 11.3. Sponsor Reward

Chỉ làm khi có anti-cheat.

Cần:

- Trust score
- Quota
- Random audit
- Proof có timestamp
- Một số challenge có GPS/timer
- Không cho nhóm mới farm reward
- Delay phát voucher nếu cần

### 11.4. B2B/community

Có thể phục vụ:

- Trung tâm tiếng Anh
- Phòng gym
- Running club
- Bootcamp code
- CLB sinh viên
- Team công ty

Nhưng không nên làm sớm vì sẽ kéo sản phẩm sang hướng enterprise/community platform.

## 12. Metrics cần đo

### 12.1. Activation

- % user tạo nhóm
- % invite được accept
- % thành viên tạo goal
- % goal được nhóm approve
- % user nộp proof ngày đầu

### 12.2. Ritual strength

- Proof submission rate mỗi ngày
- % group có ít nhất 3 người check-in/ngày
- Reaction per proof
- % group xem recap
- % group mở app ngày tiếp theo
- % group chơi sang tuần 2

### 12.3. Social signal

- Số invite/user
- Số reaction/proof
- Số lần réo người chưa nộp
- Số share recap
- Số highlight được pin
- Số after quest được tạo

### 12.4. Retention

- D1 retention
- D3 retention
- D7 retention
- D14 retention
- Group repeat week
- Season restart rate
- % group còn active sau 2 tuần

### 12.5. Memory signal

- Timeline open rate
- Recap revisit rate
- Highlight pin rate
- After Quest upload rate
- Memory Capsule view rate
- Export/share rate

### 12.6. Multi-group signal

- Trung bình active groups/user
- Tỷ lệ user quá tải goal
- Tỷ lệ group bị archive
- Tỷ lệ cross-share achievement
- Tỷ lệ user chỉnh visibility
- Tỷ lệ proof bị ẩn khỏi recap

### 12.7. Monetization signal phase sau

- % group muốn theme
- % group muốn lưu timeline lâu hơn
- % group muốn recap đẹp hơn
- % group muốn AI search
- % group click premium memory
- % group sẵn sàng trả theo season

## 13. Success criteria

### 13.1. Sau Phase 0

Có tín hiệu tốt nếu:

- Nhóm chơi đủ 7 ngày
- Reaction xảy ra tự nhiên
- Có người hỏi recap
- Có nhóm muốn chơi tuần 2
- Có người tự share recap
- Có người nói kiểu “mai nhớ réo tao”

### 13.2. Sau MVP private beta

Có tín hiệu tốt nếu:

- Invite accept rate cao
- Thành viên tạo goal sau khi vào nhóm
- D1 retention ổn
- D7 retention theo group đủ tốt
- Proof submission rate ổn
- Reaction/proof cao
- Recap được xem lại
- Nhóm restart season

### 13.3. Ngưỡng đáng cân nhắc tiếp tục

Các chỉ số tham khảo:

- Invite accept rate >= 50%
- 60% thành viên trong group nộp proof ngày đầu
- Reaction/proof >= 1
- 30% group còn active sau 7 ngày
- 20% group restart tuần/season mới
- Có share recap tự nhiên

Không cần tuyệt đối đúng các số này, nhưng chúng giúp đánh giá app có ritual thật hay không.

## 14. Rủi ro triển khai và cách xử lý

### 14.1. Rủi ro: Build quá nhiều

Cách xử lý:

- Chỉ build MVP ritual
- Cắt hết AI/vector/sponsor/buddy match
- Không thêm feature nếu không phục vụ core loop

### 14.2. Rủi ro: Hạ tầng media nặng

Cách xử lý:

- Giới hạn upload
- Nén ảnh
- Không video dài
- Cho link album ngoài
- Dùng storage managed
- Clean up media cũ nếu cần

### 14.3. Rủi ro: User không nộp proof

Cách xử lý:

- Proof cực nhẹ
- Tap done
- Reminder vui
- Nhóm réo nhẹ
- Recap làm người dùng thấy vui khi nộp

### 14.4. Rủi ro: Nhóm không reaction

Cách xử lý:

- Reaction one-tap
- Reaction hài
- Push notification nhẹ
- Role “Người Phán Xử”
- Recap highlight người reaction nhiều

### 14.5. Rủi ro: User thấy áp lực

Cách xử lý:

- Life Happens
- Skip
- Pause
- Casual mode
- Private reason
- Không boss hồi máu khi nghỉ hợp lệ

### 14.6. Rủi ro: Privacy/drama

Cách xử lý:

- Context isolation
- Không cross-share mặc định
- Visibility rõ
- Delete/Hide proof
- Không hiện active ở nhóm khác

## 15. Timeline triển khai đề xuất

Giai đoạn 1: 1–2 tuần — Research & Prototype

Mục tiêu:

- Chốt concept
- Chốt user flow
- Làm landing page
- Làm Figma prototype
- Test concept với bạn bè

Output:

- Product strategy
- Wireframe
- Landing page
- Test script
- Danh sách nhóm test

Giai đoạn 2: 1–2 tuần — Manual Pilot

Mục tiêu:

- Test ritual không cần app hoàn chỉnh

Cách làm:

- Dùng Zalo/Messenger/Discord
- Dùng Google Form/Sheet
- Recap thủ công
- Boss HP thủ công
- 3–5 nhóm test

Output:

- Dữ liệu proof
- Feedback nhóm
- Recap mẫu
- Tín hiệu retention thô

Giai đoạn 3: 8–12 tuần — Build MVP Mục tiêu:

- Build app mobile core

Scope:

- Account
- Group
- Invite
- Goal
- Approval
- Check-in
- Proof
- Reaction
- Boss
- Recap
- Timeline nhẹ
- Life Happens
- Privacy cơ bản

Output:

- MVP app
- Private beta
- Analytics tracking
- Feedback loop

Giai đoạn 4: 4–8 tuần — Private Beta

Mục tiêu:

- Test với 20–50 users hoặc 5–10 groups

Cần đo:

- Invite accept
- Proof submission
- Reaction
- Recap view
- Group retention
- Season restart

Output:

- Product iteration
- Bug fixing
- UX polish
- Core loop validation

Giai đoạn 5: Public Beta nhẹ

Mục tiêu:

- Mở rộng có kiểm soát

Scope thêm:

- Better onboarding
- Share card đẹp hơn
- More templates
- More boss skins
- Role cơ bản

Chưa thêm:

- AI memory search
- Sponsor
- Voucher
- Buddy Match
- Public feed

## 16. Ưu tiên build theo MoSCoW

Must-have

- Group
- Invite
- Personal goal
- Goal approval
- Daily check-in
- Proof nhẹ
- Reaction
- Boss HP
- Daily/weekly recap
- Life Happens
- Privacy cơ bản

Should-have

- Timeline nhẹ
- Pin highlight
- Share recap card
- Role cơ bản
- Group vibe
- Archive group
- Personal dashboard đơn giản

Could-have

- Quick Challenge
- Boss skin
- Cosmetic reward
- AI recap nhẹ
- More templates
- Theme nhóm cơ bản

Won’t-have trong MVP

- Public feed
- Buddy Match
- Sponsor/voucher
- Gacha thật
- Vector DB
- AI memory search
- B2B
- Creator platform
- GPS/Strava
- Full web app

## 17. Câu chốt execution

Teemi có thể đi rất sâu, nhưng không được bắt đầu quá sâu.

Bước đầu chỉ cần chứng minh một điều:

Nhóm bạn có thật sự hình thành ritual “nộp proof mỗi ngày và cà khịa nhau” không?

Nếu có, Teemi có thể mở rộng thành:

- Memory platform cho nhóm
- Premium recap
- AI memory search
- Custom theme
- Buddy Match
- Sponsor challenge
- B2B/community

Nếu không, thêm tính năng chỉ làm app nặng hơn.

Câu cuối cùng cho execution:

Đừng build app lớn. Hãy build một ritual nhỏ mà nhóm bạn muốn lặp lại mỗi ngày.
