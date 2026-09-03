# R05 — KIẾN TRÚC & CHI PHÍ HẠ TẦNG
### Teemi — Social challenge app private-first cho nhóm bạn (VN, Gen Z 16–28)

> Ngày nghiên cứu: **2026-08-28**
> Giả định: team **1–3 người**, ngân sách thấp, mục tiêu chứng minh ritual "kèo riêng → proof → cà khịa → boss → recap".
> Quy ước: **[FACT]** = có nguồn URL · **[INFERENCE]** = suy luận từ số liệu có nguồn · **[GUESS]** = ước lượng, không có nguồn.

---

## 0. TL;DR — Khuyến nghị dứt khoát

| Hạng mục | Chốt | Lý do một câu |
|---|---|---|
| Mobile | **React Native + Expo SDK 55+** (New Architecture, EAS Build + EAS Update) | OTA update là vũ khí sống còn cho app "vibe" phải sửa copy/roast hàng tuần; 1 ngôn ngữ (TS) cho cả client lẫn backend. |
| Backend | **Supabase** (Postgres + RLS + Auth + pg_cron + Edge Functions) | RLS Postgres là mô hình đúng nhất cho "dữ liệu nhóm private"; escape hatch rẻ vì là Postgres thuần. |
| Auth | **Google + Apple Sign-In**. KHÔNG phone OTP ở MVP. | SMS đi VN qua Twilio giá **$0.2852/tin** — bất khả thi kinh tế. |
| Ảnh proof | **Cloudflare R2** (không phải Supabase Storage) | R2 egress = $0; Supabase egress $0.09/GB sẽ giết bạn ở 10k DAU. |
| Push | **Expo Push Service → FCM v1 + APNs** (miễn phí) + cron 15 phút/lần | FCM/APNs/Expo Push đều $0; chi phí thật chỉ là cron. |
| Realtime | **KHÔNG dùng ở MVP.** Push + pull-to-refresh + refetch-on-foreground. | Nhóm 5 người tương tác vài lần/ngày; độ trễ 30s vô hình. |
| AI recap/roast | **KHÔNG dùng LLM ở MVP.** Dùng template + phrase bank tiếng Việt viết tay. | Chất lượng cà khịa tiếng Việt viết tay > LLM; đưa LLM vào v1.1 làm premium. |
| Chi phí | **~$55/tháng @ 1k DAU · ~$260/tháng @ 10k DAU · ~$1.900/tháng @ 100k DAU** | Xem §8. |

---

## 1. MOBILE: chọn framework

### 1.1. Bối cảnh thị trường VN
- Android chiếm **>85%** thị phần mobile OS ở Việt Nam ([Statista](https://www.statista.com/statistics/928956/vietnam-mobile-os-share/), [Statcounter VN](https://gs.statcounter.com/os-market-share/mobile/viet-nam)). **[FACT]**
- → **Hệ quả hành động:** build và test Android trước, iOS sau. Nhưng iOS vẫn phải làm vì nhóm bạn Gen Z ở HCM/HN hay có 1–2 iPhone, và app nhóm chết nếu 1 người không cài được. **[INFERENCE]**

### 1.2. So sánh 4 lựa chọn

| Tiêu chí | RN + Expo (SDK 55) | Flutter | Native (Swift + Kotlin) | Kotlin Multiplatform |
|---|---|---|---|---|
| Tốc độ ra MVP (1–3 người) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| Camera / media | ⭐⭐⭐⭐ `expo-camera`, `expo-image-picker`, `expo-image-manipulator` | ⭐⭐⭐⭐ `camera`, `image_picker` | ⭐⭐⭐⭐⭐ | ⭐⭐ (vẫn phải viết 2 UI) |
| Push notification | ⭐⭐⭐⭐⭐ `expo-notifications` + Expo Push Service (free, FCM v1 + APNs) | ⭐⭐⭐⭐ `firebase_messaging` | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Widget** (WidgetKit / Glance) | ⚠️ phải viết native, xem §1.4 | ⚠️ phải viết native | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ (Compose/SwiftUI) |
| OTA update | ⭐⭐⭐⭐⭐ **EAS Update** built-in | ⭐⭐⭐ Shorebird (bên thứ 3, trả phí) | ❌ không có | ❌ không có |
| Animation game-y (boss) | ⭐⭐⭐⭐ qua Skia / Rive / Lottie | ⭐⭐⭐⭐⭐ (Impeller, native canvas) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Hiring ở VN | ⭐⭐⭐⭐⭐ 200+ job RN đang tuyển ([Indeed VN](https://vn.indeed.com/q-react-native-developer-vi%E1%BB%87c-l%C3%A0m.html)) | ⭐⭐⭐⭐⭐ rất mạnh trong outsourcing VN | ⭐⭐⭐ đắt hơn, cần 2 người | ⭐ pool cực nhỏ |
| Lương tham chiếu VN | \~15–35tr (1–3 năm), 50–70tr senior ([nguồn tổng hợp tuyển dụng VN](https://www.topcv.vn/tim-viec-lam-lap-trinh-vien-react-native)) **[FACT — số liệu từ job board, độ chính xác trung bình]** | tương đương | cao hơn \~20–30% **[GUESS]** | không có mẫu **[GUESS]** |

### 1.3. Phiên bản Expo hiện tại **[FACT]**
- **Expo SDK 55** phát hành **25/02/2026**, kèm **React Native 0.83 + React 19.2**, đã **bỏ hẳn Legacy Architecture** ([Expo changelog SDK 55](https://expo.dev/changelog/sdk-55)).
- SDK 54 (RN 0.81) là bản cuối còn Legacy Architecture ([Expo changelog SDK 54](https://expo.dev/changelog/sdk-54)).
- SDK 56 (RN 0.85) dự kiến Q2/2026.
- → **Hành động:** khởi tạo dự án trên **SDK 55**, New Architecture bật mặc định. Đừng dùng thư viện chưa hỗ trợ New Arch.

### 1.4. Widget — câu trả lời thẳng
**Có làm được từ RN/Flutter không? Có, NHƯNG phải viết code native.** **[FACT]**
- `WidgetKit` là **Swift-only**, `Jetpack Glance` là **Kotlin-only** — không framework cross-platform nào chạy trực tiếp trên đó.
- Cách làm thực tế với Expo: dùng **config plugin** (`@bacons/apple-targets` / expo-apple-targets) để inject một Widget Extension viết SwiftUI vào build EAS, chia sẻ dữ liệu qua **App Group** (`UserDefaults(suiteName:)`); Android thì viết một `AppWidgetProvider`/Glance widget + native module đọc từ `SharedPreferences`.
- Năm 2026 có thư viện **Voltra** cho phép viết widget WidgetKit + Glance bằng component React Native ([tham khảo tổng hợp](https://medium.com/@faheem.tfora/building-dynamic-home-screen-widgets-in-react-native-android-ios-complete-2025-dc060feacddc)) — nhưng đây là dependency non-trivial, chưa đủ trưởng thành để cược MVP vào. **[INFERENCE]**
- **Ước lượng công sức: 1–2 tuần/platform.** **[GUESS]**
- → **Quyết định: KHÔNG làm widget ở MVP.** Widget "Boss còn X máu / còn N người chưa nộp" là feature retention cực mạnh nhưng thuộc v1.1. Ở MVP dùng **local notification** + app icon badge để thay thế.

### 1.5. ❗Cảnh báo chi phí EAS Update
EAS: Free (1.000 MAU updates, 15 build/OS/tháng) · **Starter $19/tháng** (3.000 MAU, $45 build credit) · **Production $199/tháng**. Egress bundle **$0.10/GiB** ([Expo pricing 2026](https://checkthat.ai/brands/expo/pricing), [phân tích EAS Update pricing](https://stalliontech.io/expo-eas-update-pricing)). **[FACT]**
Ở **100k MAU**, hoá đơn OTA ước \~**$1.326/tháng** ($199 plan + $250 MAU overage + $877 bandwidth) **[FACT — theo phân tích của Stallion]**.
→ **Hành động:** `expo-updates` hỗ trợ **custom update server**. Khi vượt \~30k MAU, tự host manifest + bundle trên **R2 + Cloudflare Worker** (egress $0) → chi phí OTA về gần $0. Thiết kế trước, đừng để bị khoá.

### 1.6. Chốt
> **React Native + Expo SDK 55, New Architecture, EAS Build. Boss animation dùng `@shopify/react-native-skia` hoặc Rive để không bị giới hạn "cảm giác game". Widget hoãn sang v1.1.**

Lý do quyết định (không phải Flutter): OTA update. Teemi bán **vibe và ngôn ngữ nhóm** — bạn sẽ phải sửa 200 câu roast, chỉnh tone, đổi copy boss hàng tuần dựa trên feedback nhóm bạn thật. Với Flutter mỗi lần đổi câu chữ là một vòng review App Store 24–48h. Với EAS Update là 3 phút. Với team 1–3 người, đây là khác biệt sống chết. **[INFERENCE]**

---

## 2. BACKEND

### 2.1. Bảng so sánh

| Tiêu chí | **Supabase** | Firebase | Convex | Appwrite | PocketBase | Custom Node/Go + PG |
|---|---|---|---|---|---|---|
| Model dữ liệu | Postgres (quan hệ) ✅ | Firestore (document) ❌ join khó | Custom doc DB | MariaDB/PG | SQLite | Postgres ✅ |
| **RLS cho nhóm private** | ✅ native, policy theo bảng `group_members` | ⚠️ Security Rules dài & dễ sai | ⚠️ tự viết trong function | ⚠️ permission theo document | ⚠️ API rules | tự viết |
| Auth social | ✅ Google/Apple free | ✅ free ≤50k MAU | qua bên thứ 3 (Clerk/Auth0) | ✅ | ✅ | tự làm |
| **Phone OTP VN** | ⚠️ qua Twilio/MessageBird **hoặc Send SMS Hook** (cắm ZNS/SMS nội địa) | ❌ Firebase không list VN trong bảng giá phone verification | ❌ | ⚠️ | ❌ | tự làm |
| Realtime | Postgres CDC | ✅ mạnh | ✅ reactive mặc định | ✅ | ✅ | tự làm |
| Storage ảnh | ✅ nhưng **egress $0.09/GB** ⚠️ | GCS | ✅ | ✅ | filesystem | S3/R2 |
| Cron (recap) | ✅ **pg_cron + pg_net** miễn phí | Cloud Scheduler (trả phí) | ✅ cron function | ⚠️ | ❌ (tự cron OS) | ✅ |
| Giá khởi điểm | **$25/tháng Pro** | pay-as-you-go | **$25/dev/tháng** | $15/tháng | **\~$6 VPS** | \~$10–20 VPS |
| Rủi ro lock-in | **Thấp** (PG thuần) | **Rất cao** | **Cao** (DB riêng) | Trung bình | Thấp | Không |

**Giá Supabase chính thức [FACT]** ([supabase.com/pricing](https://supabase.com/pricing)):

| Hạng mục | Free | Pro ($25) | Overage |
|---|---|---|---|
| MAU | 50.000 | 100.000 | $0,00325/MAU |
| Database size | 500 MB | 8 GB | $0,125/GB |
| File storage | 1 GB | 100 GB | $0,0213/GB |
| Egress | 5 GB | 250 GB | **$0,09/GB** |
| Cached egress | 5 GB | 250 GB | $0,03/GB |
| Realtime peak connections | 200 | 500 | **$10 / 1.000** |
| Realtime messages | 2 M | 5 M | $2,50/M |
| Edge Function invocations | 500K | 2 M | $2/M |

**Giá Convex [FACT]**: Free 1M function calls + 0,5 GB storage; **Professional $25/developer/tháng** (25M function calls, 50 GB); DB bandwidth $0,20–0,22/GB ([tổng hợp Convex pricing 2026](https://toolradar.com/tools/convex/pricing)). → Model **per-seat** làm giá tăng theo số người trong team, không theo tải — bất lợi khi team lớn dần.

### 2.2. Auth: vấn đề LỚN NHẤT là phone OTP ở VN

**[FACT] Giá thực tế gửi 1 OTP tới số Việt Nam:**

| Kênh | Giá/tin | Nguồn |
|---|---|---|
| **Twilio SMS → VN** | **$0,2852** (\~7.500đ) | [twilio.com/en-us/sms/pricing/vn](https://www.twilio.com/en-us/sms/pricing/vn) |
| SMS Brandname nội địa | 600–1.000đ (\~$0,023–0,038) | [bảng giá ZNS/SMS 2026](https://www.smsthuonghieu.com/gia-zns/) |
| **Zalo ZNS xác thực** | **300đ (\~$0,011)** | [bảng giá ZNS 2026](https://www.smsthuonghieu.com/gia-zns/) |
| Firebase Phone Auth | $0,01 (US) → $0,46 (đắt nhất); **VN không có trong bảng giá công bố** | [firebase.google.com/docs/phone-number-verification/pricing](https://firebase.google.com/docs/phone-number-verification/pricing) |

**Ràng buộc pháp lý [FACT]:** muốn gửi SMS thương mại/OTP ở VN phải **đăng ký brandname** với Viettel/Vinaphone/MobiFone, tuân thủ **Nghị định 91/2020/NĐ-CP**; thời gian duyệt tính bằng **tuần đến tháng** ([Vietnam SMS guide](https://www.sent.dm/en/resources/sms-compliance/vietnam-sms-guide), [Clickatell VN](https://www.clickatell.com/sms-country-regulations/vietnam/)).

**→ Quyết định:**
1. **MVP: chỉ Google Sign-In + Apple Sign-In.** Cả hai miễn phí. **Bắt buộc có Apple Sign-In** nếu đã có Google Sign-In (App Store Guideline 4.8). **[FACT — quy định App Store]**
2. Mời bạn vào nhóm bằng **invite link/QR + mã nhóm 6 ký tự**, KHÔNG cần số điện thoại. Đây cũng là UX viral tốt hơn.
3. Nếu sau này bắt buộc phone: dùng **Supabase Send SMS Hook** ([docs](https://supabase.com/docs/guides/auth/auth-hooks/send-sms-hook)) trỏ về một Edge Function gọi **ZNS** (300đ) — rẻ hơn Twilio **26 lần**. **[FACT + INFERENCE]**
4. Chi phí OTP nếu làm sai: 10.000 user đăng ký × Twilio = **$2.852**. Cùng lượng đó qua ZNS = **$110**. Đây là red flag hạng nhất.

### 2.3. Kiến trúc dữ liệu & RLS (cụ thể, để làm ngay)

```
users(id PK = auth.uid, display_name, avatar_url, tz DEFAULT 'Asia/Ho_Chi_Minh')
groups(id, name, owner_id, tz, day_cutoff_hour DEFAULT 4, notify_hour DEFAULT 21, invite_code)
group_members(group_id, user_id, role, joined_at)   -- bảng gốc cho MỌI policy
goals(id, group_id, user_id, title, proof_rule, active)
proofs(id, goal_id, group_id, user_id, media_key, caption,
       submitted_at timestamptz DEFAULT now(),      -- SERVER time, không tin client
       logical_date date)                            -- tính ở server, xem §7
reactions(proof_id, user_id, kind)
boss_state(group_id, season, hp, max_hp, updated_at)
recaps(group_id, logical_date, payload jsonb)
```

Policy mẫu (áp dụng cho `proofs`, `goals`, `reactions`, `boss_state`, `recaps`):
```sql
create policy "member_read" on proofs for select
using (exists (select 1 from group_members m
               where m.group_id = proofs.group_id and m.user_id = auth.uid()));
```
Đây chính là điều Firestore Security Rules làm rất khổ: một dòng SQL vs một khối rule lồng nhau khó test. **[INFERENCE]**

**Nguyên tắc "context isolation" trong doc chiến lược (§12.5) map 1-1 vào RLS:** mọi bảng đều mang `group_id` và mọi policy đều đi qua `group_members`. Không có query nào cross-group. Thiết kế này miễn phí về mặt kỹ thuật nếu làm từ đầu, và cực đắt nếu retrofit.

### 2.4. Phương án thoát vendor (exit plan)
Supabase = Postgres thuần → `pg_dump` chạy được sang Neon / RDS / VPS tự host. Để giữ chi phí thoát ở mức thấp, tuân 4 luật ngay từ commit đầu:
1. **Đừng để bytes ảnh trong Supabase Storage** — để ở R2 (S3-compatible, portable).
2. **Bọc `supabase-js` trong một lớp `data/` riêng** trong app (repository pattern mỏng), không rải `supabase.from(...)` khắp UI.
3. **Bảng `users` của bạn có PK riêng** + cột `auth_provider_id`, không dùng thẳng `auth.users.id` làm khoá ngoại mọi nơi → đổi auth provider không phải migrate toàn DB.
4. **Logic nghiệp vụ viết trong Edge Function (Deno/TS)**, không nhét sâu vào trigger/PLpgSQL độc quyền.
Kế hoạch B nếu ngân sách = $0 tuyệt đối: **PocketBase** (1 binary Go + SQLite) trên VPS $6/tháng — chạy tốt tới \~5–10k DAU nhưng bạn tự ôm backup/uptime. **[INFERENCE]**

**Chốt: Supabase.**

---

## 3. PUSH NOTIFICATION

### 3.1. Chi phí — gần như bằng 0 **[FACT]**
- **FCM miễn phí hoàn toàn**, không giới hạn số tin, không phí overage, trên cả Spark lẫn Blaze ([PushEngage 2026](https://www.pushengage.com/firebase-push-notification-pricing/)).
- **APNs miễn phí** (chỉ cần Apple Developer $99/năm).
- **Expo Push Service miễn phí**, không phí/tin, không cap volume; giới hạn **600 notification/giây/project** ([Expo docs](https://docs.expo.dev/push-notifications/sending-notifications/), [Courier](https://www.courier.com/blog/expo-notifications)).
- → 100k DAU × 3 noti/ngày = 300k noti/ngày ≈ 3,5 noti/giây trung bình. Kể cả dồn hết vào 1 phút cao điểm cũng chỉ 5.000/giây → **phải chia batch**, xem §3.3.

### 3.2. Độ tin cậy ở VN — rủi ro thật nằm ở device, không ở FCM **[INFERENCE]**
Điện thoại Android phổ biến ở VN (Xiaomi/MIUI-HyperOS, Oppo/ColorOS, Vivo/FuntouchOS, Samsung One UI) có **battery optimization rất hung hãn**, thường xuyên kill background process và chặn noti của app "lạ". Đây là nguyên nhân mất noti lớn hơn FCM nhiều lần.
**→ Hành động cụ thể:**
- Onboarding có bước "Bật thông báo + tắt tối ưu pin cho Teemi" với hướng dẫn theo hãng máy (detect `Device.manufacturer`).
- Gửi noti nhóm ở **priority `high`** (Android) / `interruption-level: time-sensitive` (iOS) cho noti "chốt sổ 30 phút cuối" — nhưng dùng tiết chế, iOS phạt app spam.
- **Backup channel: local notification.** Nhắc cá nhân "nộp proof đi" nên là `expo-notifications.scheduleNotificationAsync` chạy trên máy — không phụ thuộc mạng, không phụ thuộc server, không tốn gì.

### 3.3. Gửi 1 noti/ngày cho từng nhóm ĐÚNG GIỜ theo timezone
**Kiến trúc khuyến nghị (rẻ và đơn giản nhất):**
```
pg_cron chạy mỗi 15 phút
  → SELECT groups WHERE
        extract(hour from now() AT TIME ZONE g.tz) = g.notify_hour
    AND extract(minute ...) < 15
    AND NOT EXISTS (sent_notifications WHERE group_id AND logical_date AND kind='daily_nudge')
  → pg_net.http_post → Edge Function
  → Edge Function batch 100 token/request → Expo Push API
  → INSERT sent_notifications (unique(group_id, logical_date, kind))  -- idempotency
```
- **Idempotency key `unique(group_id, logical_date, kind)`** là bắt buộc — cron chạy 2 lần (retry, deploy) không được spam.
- Chia noti thành 3 loại với 3 kênh khác nhau:

| Noti | Kênh | Giờ | Chi phí |
|---|---|---|---|
| "Nộp proof đi" (cá nhân) | **Local notification** trên máy | user tự chọn | $0 |
| "Còn 2 người chưa nộp, boss sắp hồi máu" | Server push (batch cron) | `notify_hour` của nhóm | $0 |
| "Recap hôm nay đã sẵn sàng" | Server push | sau day cutoff 15' | $0 |
| Reaction/cà khịa của bạn bè | Server push (event-driven, throttle 1 tin/10 phút/user) | tức thời | $0 |

> ⚠️ Throttle noti reaction là bắt buộc. Nhóm 5 người cà khịa nhau 30 reaction/tối → 30 noti = uninstall.

---

## 4. MEDIA PIPELINE (ảnh proof)

### 4.1. Nén phía client — chốt format
| Format | Đánh giá | Kết luận |
|---|---|---|
| **WebP** | `expo-image-manipulator` hỗ trợ `SaveFormat.WEBP`; chạy trên Android và **iOS 14+** ([Expo docs](https://docs.expo.dev/versions/latest/sdk/imagemanipulator/)) **[FACT]** | ✅ **CHỌN** |
| HEIC | iOS chụp ra HEIC nhưng decode phía Android/web/backend rắc rối, phải transcode | ❌ convert sang WebP ngay trên máy |
| AVIF | Nén tốt hơn WebP nhưng **encode trên mobile rất chậm** và thư viện RN 2026 còn yếu **[INFERENCE]** | ❌ hoãn |
| JPEG | Fallback an toàn tuyệt đối | ✅ fallback khi WebP encode fail |

**Pipeline client cụ thể:**
```
expo-camera / expo-image-picker (quality 0.8)
  → expo-image-manipulator: resize long-edge 1440px, SaveFormat.WEBP, compress 0.7
      → full.webp   (~150 KB)
  → expo-image-manipulator: resize long-edge 320px,  SaveFormat.WEBP, compress 0.6
      → thumb.webp  (~15 KB)
  → 2 × presigned PUT thẳng lên R2 (KHÔNG proxy bytes qua API server)
```
> **Thumbnail riêng là quyết định tiết kiệm lớn nhất của toàn bộ hạ tầng.** Feed và recap chỉ load thumb 15 KB; ảnh full chỉ load khi tap. Giảm egress **\~5–8×**. **[INFERENCE]**

Kích thước giả định: **full 150 KB + thumb 15 KB = 165 KB/proof**. **[GUESS — cần đo lại bằng ảnh thật]**

### 4.2. Lưu trữ & phục vụ
- **Object key:** `proofs/{group_id}/{logical_date}/{proof_id}_{full|thumb}.webp`
- **Bucket private.** Hai cách phục vụ:
  - **(a) Presigned GET ngắn hạn (5–15 phút), sinh theo lô** khi client load feed (1 request → 20 URL). **← chọn cái này.** Rẻ, đơn giản.
  - (b) Cloudflare Worker verify JWT rồi stream từ R2 — an toàn hơn nhưng tốn CPU-ms và code.
  - ⚠️ Presigned URL làm hỏng cache CDN nếu signature nằm trong cache key → dùng **custom cache key** bỏ qua query string, hoặc dùng path-token ngắn.
- **Lifecycle (đây chính là monetization hook "Memory business" ở §11.4 doc chiến lược):**

| Tuổi object | Hành động | Giá |
|---|---|---|
| 0–60 ngày | R2 **Standard** | $0,015/GB |
| 60–365 ngày | R2 **Infrequent Access** | $0,010/GB + $0,01/GB khi đọc |
| >365 ngày (free tier) | **Xoá** (báo trước 14 ngày, chào upgrade) | $0 |
| >365 ngày (premium) | Giữ vĩnh viễn | phần chi phí này premium trả |

### 4.3. So sánh giá kho ảnh **[FACT — giá công bố]**

| Provider | Storage $/GB-tháng | Egress $/GB | Ghi | Đọc | Nguồn |
|---|---|---|---|---|---|
| **Cloudflare R2** | **0,015** (IA: 0,010) | **$0 (miễn phí)** ✅ | Class A $4,50/M | Class B $0,36/M | [developers.cloudflare.com/r2/pricing](https://developers.cloudflare.com/r2/pricing/) |
| AWS S3 (us-east-1) | 0,023 | 0,09 → 0,05 (100 GB đầu free) | PUT ~$5/M | GET ~$0,40/M | [tổng hợp S3 pricing 2026](https://infratally.com/articles/aws-s3-pricing-explained-2026/) |
| Supabase Storage | 0,0213 | **0,09** (cached 0,03) | trong Pro | trong Pro | [supabase.com/pricing](https://supabase.com/pricing) |
| Bunny Storage + CDN | 0,010 (HDD) / 0,020 (SSD) | **0,03 (Asia/Oceania)**; storage→CDN free | – | – | [bunny.net/pricing/storage](https://bunny.net/pricing/storage/) |

**✅ Kiểm chứng "R2 không tính egress": ĐÚNG.** Trang giá chính thức Cloudflare ghi egress = Free cho mọi storage class; free tier 10 GB storage + 1M Class A + 10M Class B/tháng. Lưu ý duy nhất: **Infrequent Access có phí retrieval $0,01/GB** — đó không phải egress internet mà là phí đọc từ tầng lạnh. **[FACT]**

### 4.4. Ước tính dung lượng & chi phí ảnh

**Giả định [GUESS, ghi rõ để bạn chỉnh]:**
- 1 ảnh proof/user/ngày, 165 KB (full+thumb)
- Mỗi user xem \~10 lượt ảnh/ngày (chủ yếu thumb 15 KB + vài full) ⇒ **\~2 MB egress/user/ngày**
- Nhóm trung bình 5 người · giữ ảnh 12 tháng ⇒ bảng dưới là **trạng thái tháng thứ 12**

| | 1.000 DAU | 10.000 DAU | 100.000 DAU |
|---|---|---|---|
| Upload/ngày | 1.000 | 10.000 | 100.000 |
| Dung lượng mới/tháng | **5 GB** | **50 GB** | **500 GB** |
| Tổng lưu trữ (tháng 12) | **60 GB** | **600 GB** | **6 TB** |
| Egress/tháng | **60 GB** | **600 GB** | **6 TB** |
| Class A ops/tháng (2/upload) | 60K | 600K | 6M |
| Class B ops/tháng | \~600K | \~6M | \~60M |

**Chi phí ảnh/tháng ở trạng thái tháng 12:**

| Provider | 1k DAU | 10k DAU | 100k DAU |
|---|---|---|---|
| **Cloudflare R2** | **\~$1,4** | **\~$14** | **\~$139** |
| Bunny (HDD + CDN Asia) | \~$2,4 | \~$24 | \~$240 |
| Supabase Storage | \~$1,3 (egress trong quota) | \~$45 | \~$645 |
| AWS S3 (+internet egress) | \~$2 | \~$64 | \~$723 |

> **Kết luận: R2 rẻ hơn S3 \~5× và rẻ hơn Supabase Storage \~4,6× ở mốc 100k DAU. Quyết định "ảnh không nằm trong Supabase" tiết kiệm \~$500/tháng ở 100k DAU và tốn của bạn đúng 1 ngày code.** **[INFERENCE từ giá FACT]**

---

## 5. REALTIME — có thật sự cần không?

**Câu trả lời: KHÔNG cần ở MVP.**

**Lý do [INFERENCE]:**
1. Nhịp tương tác của Teemi là **vài sự kiện/ngày/nhóm**, không phải chat. Người dùng nộp proof lúc 22h, bạn bè reaction lúc 22h05. Độ trễ 30 giây không ai nhận ra.
2. **Push notification ĐÃ LÀ realtime** ở góc nhìn người dùng: "Nam vừa nộp proof phút 89" đến ngay lập tức, mở app thì refetch. Bạn được cảm giác realtime mà không trả tiền cho WebSocket.
3. Realtime connection tốn tiền và tốn pin: Supabase tính **$10/1.000 peak connections** + **$2,50/triệu message**.

**Chi phí nếu bật realtime [INFERENCE từ giá FACT]:**
Giả định peak concurrent ≈ 10% DAU:

| | Peak conn | Chi phí connection | Messages/tháng (ước) | Chi phí message | Tổng |
|---|---|---|---|---|---|
| 1k DAU | 100 | $0 (trong 500 free của Pro) | \~0,5M | $0 | **$0** |
| 10k DAU | 1.000 | $5 | \~5M | $0 | **$5** |
| 100k DAU | 10.000 | **$95** | \~50M | **$112** | **\~$207** |

**Kiến trúc thay thế ở MVP:**
- Refetch khi app vào foreground (`AppState` change)
- Pull-to-refresh
- Push notification làm tín hiệu invalidate cache (React Query `invalidateQueries` trong notification handler)
- Polling 15s **chỉ khi** đang mở màn hình nhóm và **chỉ trong 5 phút** đầu, rồi dừng

**Khi nào thêm realtime:** khi có màn "boss fight live" cuối tuần (cả nhóm cùng online xem boss mất máu). Lúc đó bật Postgres Changes cho **duy nhất bảng `boss_state`** — bảng nhỏ nhất, message ít nhất.

---

## 6. AI — LLM cho recap/roast

### 6.1. Chi phí thực tế **[FACT — bảng giá model]**

Giả định 1 recap = **1.200 token input** (tên thành viên, goal, ai nộp/miss, tone guide) + **250 token output**.

| Model | $/1M in | $/1M out | $/recap | **$/1.000 recap** |
|---|---|---|---|---|
| Claude Haiku 4.5 | $1,00 | $5,00 | $0,00245 | **$2,45** (batch −50%: $1,23) |
| Claude Sonnet 5 | $2,00 | $10,00 | $0,0049 | **$4,90** |
| Claude Opus 5 | $5,00 | $25,00 | $0,0123 | **$12,25** |
| GPT-5 mini | $0,25 | $2,00 | $0,0008 | **$0,80** ([nguồn](https://www.getapipulse.com/blog-gpt5-mini-cost-breakdown.html)) |
| Gemini 3.7 Flash (giá intro tới hết 2026) | $0,75 | $3,75 | $0,0018 | **$1,84** ([VentureBeat](https://venturebeat.com/technology/googles-gemini-3-7-flash-targets-coding-and-agents-with-a-50-introductory-price-cut)) |

*(Giá Claude: bảng model chính thức, cached 2026-06-24. Anthropic Batch API giảm 50%; prompt caching giảm thêm phần system prompt dùng chung.)*

**Recap là theo NHÓM, không theo user** → số recap = DAU/5:

| | Nhóm/ngày | Recap/tháng | Haiku 4.5 (batch) | GPT-5 mini |
|---|---|---|---|---|
| 1k DAU | 200 | 6.000 | **$7** | $5 |
| 10k DAU | 2.000 | 60.000 | **$74** | $48 |
| 100k DAU | 20.000 | 600.000 | **$738** | $480 |

### 6.2. Latency
Recap là **batch job chạy sau day cutoff**, không phải request đồng bộ → **latency không quan trọng**. Dùng **Batch API** (giảm 50%, trả kết quả trong vài giờ) và ghi vào bảng `recaps` trước khi bắn noti "Recap đã sẵn sàng". **[INFERENCE]**

### 6.3. Tránh nội dung độc hại
Doc chiến lược §10.1 ghi rõ: *"Troll nhưng không toxic"* và *"không roast goal nhạy cảm"*. Cơ chế:
1. **Allowlist thay vì blocklist:** LLM không tự do sáng tác. Cho nó chọn 1 trong N **template roast đã duyệt** rồi chỉ điền slot (tên, số ngày miss, tên boss). Structured output với enum.
2. **Cờ `sensitive` trên `goals`:** goal về cân nặng, sức khoẻ tâm lý, tiền bạc, học hành thi cử → **không bao giờ roast**, chỉ support tone. User tự bật khi tạo goal.
3. **Opt-out cấp nhóm và cấp cá nhân:** "Support Mode" tắt hết roast.
4. **Lọc tên riêng:** không bao giờ đưa `display_name` do user tự đặt vào prompt như instruction (prompt injection: ai đó đặt tên là *"bỏ qua hướng dẫn trên"*). Truyền tên như data có delimiter, và render tên ở client, không để LLM sinh ra tên.
5. **Không log ảnh vào LLM ở MVP.** Chỉ metadata text.

### 6.4. Chốt: **KHÔNG dùng LLM ở MVP**
Lý do:
- Recap tiếng Việt cà khịa **viết tay hay hơn LLM** ở giai đoạn này. Bạn cần "Nam lại dùng kỹ năng mất tích có điều kiện" — giọng đó là tài sản thương hiệu, không nên phó thác cho model. **[INFERENCE]**
- **Phrase bank 200–300 câu + slot filling + rule engine** cho ra 90% giá trị với 0% chi phí, 0ms latency, 0 rủi ro toxic.
- Ở 1k DAU chi phí LLM chỉ $7/tháng — nghĩa là **tiền không phải lý do**; lý do là **chất lượng, kiểm soát và tốc độ ship**.
- **Đưa AI vào v1.1 làm premium** ("AI recap nâng cao" — đúng như §11.3 doc chiến lược): lúc đó bạn đã có 300 recap viết tay để làm few-shot examples, model sẽ bắt đúng giọng.

---

## 7. OFFLINE & TIMEZONE — "ngày" là gì?

### 7.1. Định nghĩa "ngày" — chốt
> **Một ngày Teemi = 04:00 hôm nay → 03:59 hôm sau, theo timezone của NHÓM.**

- **Cutoff 04:00, không phải 00:00.** Gen Z VN thức khuya; nộp proof lúc 1h sáng phải tính là "hôm qua". Đây là quyết định sản phẩm quan trọng, không phải kỹ thuật. **[INFERENCE]**
- **Timezone gắn với NHÓM, không gắn với user.** Boss là chung, recap là chung → phải có một đồng hồ chung. `groups.tz` mặc định `Asia/Ho_Chi_Minh`.
- ✅ **Lợi thế lớn: Việt Nam KHÔNG có DST (UTC+7 quanh năm)** → toàn bộ class bug DST biến mất ở thị trường chính. **[FACT]**

### 7.2. User khác timezone trong cùng nhóm
Case thật: nhóm bạn có 1 đứa đi du học Úc/Nhật/Đức.
**Xử lý:**
- Ngày logic vẫn theo `groups.tz` (một sự thật duy nhất cho boss/recap).
- **UI hiển thị đối chiếu:** với thành viên lệch múi giờ, hiện "Còn 3h nữa chốt sổ (05:00 giờ của bạn)". Không bao giờ chỉ hiện giờ tuyệt đối.
- **Noti gửi theo giờ nhóm**, nhưng cho phép per-user "quiet hours" (không gửi push trong 23:00–07:00 giờ local của user) — dùng `users.tz`.
- Trường hợp lệch quá gắt (>6h): cho user bật "Flex member" — được cộng thêm 6h grace, boss không hồi máu vì họ. Feature nhỏ, cứu retention nhóm có bạn du học. **[GUESS — cần validate]**

### 7.3. Gian lận đổi giờ điện thoại
**Nguyên tắc: server là nguồn thời gian duy nhất.**
```sql
-- proofs.submitted_at KHÔNG BAO GIỜ nhận từ client
submitted_at timestamptz not null default now(),
logical_date date generated always as (
  (submitted_at AT TIME ZONE <group_tz> - interval '4 hours')::date
) stored
```
- Client chỉ gửi `client_ts` để **đo skew, không để tính ngày**. Nếu `abs(client_ts - server_ts) > 5 phút` → set cờ `clock_skew_flag`, KHÔNG chặn.
- **Ở MVP đừng chống gian lận thêm gì nữa.** Doc chiến lược §11.5 đã chốt đúng: *"Người dùng có thể gian lận phần vui, nhưng không được gian lận phần có giá trị thật."* MVP không có reward thật → gian lận vô nghĩa (bạn lừa được 4 đứa bạn thân, mà chúng nó biết thừa). Đầu tư anti-cheat chỉ khi có sponsor/voucher. **[INFERENCE]**
- Điều **thực sự** cần chặn: **backdate** — không cho nộp proof cho `logical_date` trong quá khứ. Một dòng check.

### 7.4. Offline
- Người dùng có thể chụp ảnh trong hầm gửi xe không sóng.
- **Optimistic UI + outbox queue:** lưu proof vào SQLite/MMKV local, upload nền khi có mạng (`expo-task-manager` / `expo-background-task`).
- **Nhưng `logical_date` vẫn do server quyết định lúc nhận được.** Nếu upload trễ qua cutoff → server trả `late: true`, client hiện "Nộp trễ, tính vào hôm nay" — đây thậm chí là **content vui** ("Nộp phút 89 à?" → "Nộp phút 91, boss cười").
- Cache đọc: React Query + persist (MMKV) để mở app offline vẫn thấy feed hôm qua.

---

## 8. BẢNG CHI PHÍ TỔNG ($/tháng)

**Giả định:** nhóm 5 người · 1 ảnh/user/ngày · 165 KB/ảnh · 2 MB egress/user/ngày · giữ ảnh 12 tháng · MAU ≈ 2,5 × DAU **[GUESS]**

| Hạng mục | 1.000 DAU | 10.000 DAU | 100.000 DAU |
|---|---|---|---|
| Supabase (plan + compute) | $25 (Pro, Micro) | $25 + $60 (Medium) = $85 | $25 + $210 (XL) + replica ≈ $450 |
| Supabase DB storage | ~$0 | ~$2 | ~$25 |
| Supabase egress (JSON API) | $0 (trong 250 GB) | ~$10 | ~$60 |
| Supabase Realtime | $0 (tắt) | $0 (tắt) | $0 (tắt) / $207 nếu bật |
| **Cloudflare R2** (ảnh) | $1,4 | $14 | $139 |
| Cloudflare Workers (cron/edge) | $0 (free) | $5 | $5–20 |
| Push (FCM + APNs + Expo Push) | **$0** | **$0** | **$0** |
| EAS Update (OTA) | $19 (Starter) | $19–99 | **$1.326** ⚠️ → tự host ≈ $20 |
| AI recap (nếu bật, Haiku batch) | $7 | $74 | $738 → **$0 nếu template** |
| Apple Dev ($99/năm) + Google Play ($25 once) | ~$8 | ~$8 | ~$8 |
| Sentry / logging | $0 (free tier) | $26 | $80 |
| Domain + misc | $2 | $2 | $5 |
| **TỔNG (cấu hình khuyến nghị: no realtime, no AI, OTA tự host ở scale)** | **≈ $55** | **≈ $260** | **≈ $1.900** |
| *Tổng nếu bật hết (realtime + AI + EAS Production)* | *$62* | *$400* | *$4.200* |

**Chi phí/DAU/tháng:** $0,055 → $0,026 → $0,019. **[INFERENCE]**
→ **Đơn vị kinh tế lành mạnh.** Nếu premium giá 39.000đ/tháng (\~$1,5) và chỉ 2% user trả → doanh thu $0,03/DAU/tháng, vừa đủ hoà vốn hạ tầng ở 100k DAU. Cần **>3% conversion** để hạ tầng có lãi. **[INFERENCE — con số cần kiểm chứng với stream pricing]**

---

## 9. RỦI RO KỸ THUẬT (red flags)

| # | Rủi ro | Mức độ | Giảm thiểu |
|---|---|---|---|
| 1 | **Phone OTP**: Twilio $0,2852/SMS đi VN → 10k đăng ký = $2.852 | 🔴 Cao | Bỏ phone auth ở MVP. Nếu cần: Supabase Send SMS Hook → **ZNS 300đ** (rẻ hơn 26×). Brandname mất hàng tuần–tháng để duyệt. |
| 2 | **EAS Update $1.326/tháng @100k MAU** | 🟠 Trung bình | `expo-updates` custom server trên R2 + Worker ngay từ khi thiết kế. |
| 3 | **Supabase egress $0,09/GB** nếu để ảnh trong Storage | 🔴 Cao | Ảnh nằm ở R2 từ commit đầu tiên. |
| 4 | **Widget không free** với RN/Flutter (WidgetKit Swift-only, Glance Kotlin-only) | 🟡 Thấp | Hoãn sang v1.1. Đừng hứa trong pitch MVP. |
| 5 | **Battery optimization của Xiaomi/Oppo/Vivo giết push** ở VN | 🟠 Trung bình | Onboarding hướng dẫn theo hãng + local notification làm backup. |
| 6 | **Nghị định 53/2022/NĐ-CP — data localization**: doanh nghiệp nước ngoài cung cấp dịch vụ mạng xã hội cho user VN có thể bị yêu cầu lưu dữ liệu tại VN (dữ liệu cá nhân, nhật ký truy cập, nội dung liên lạc), thời hạn tối thiểu 24 tháng ([nguồn](https://vngcloud.vn/vi/blog/huong-dan-ve-noi-dia-hoa-du-lieu-tai-viet-nam)) | 🟠 **Chưa rõ — cần luật sư** | Chọn Supabase region **Singapore** ở MVP (latency VN tốt). Kiến trúc R2 + Postgres cho phép chuyển sang VNG Cloud/Viettel IDC nếu bị yêu cầu. **[FACT về nghị định + INFERENCE về áp dụng]** |
| 7 | Prompt injection qua `display_name` khi bật AI | 🟡 Thấp | Render tên ở client, không cho LLM sinh tên. |
| 8 | Spam noti reaction làm uninstall | 🟠 Trung bình | Throttle 1 tin/10 phút/user, gộp "3 người vừa cà khịa bạn". |

---

## 10. Kiến trúc đề xuất (một hình)

```
┌──────────────── Expo SDK 55 (RN 0.83, New Arch) ─────────────────┐
│ expo-camera → expo-image-manipulator (WebP 1440 + thumb 320)      │
│ React Query + MMKV persist (offline cache + outbox)               │
│ expo-notifications (local nudge + push receive)                   │
│ Skia/Rive (boss animation)                                        │
└──────┬──────────────────────────────┬─────────────────────────────┘
       │ presigned PUT (2 objects)    │ REST/RPC (supabase-js qua lớp data/)
       ▼                              ▼
┌─────────────────┐        ┌────────────────────────────────────────┐
│ Cloudflare R2   │        │ Supabase (region Singapore)            │
│ bucket private  │◀───────│ • Postgres + RLS (group_members)       │
│ lifecycle:      │ signed │ • Auth: Google + Apple                 │
│  60d → IA       │  GET   │ • Edge Functions (Deno): sign URL,     │
│  365d → delete  │        │   push fanout, recap builder           │
│ egress = $0     │        │ • pg_cron mỗi 15' + pg_net             │
└─────────────────┘        └───────────────┬────────────────────────┘
                                           │ batch 100 token
                                           ▼
                              Expo Push Service → FCM v1 / APNs   ($0)
```

---

## 11. Việc cần làm tuần 1 (checklist)

1. `npx create-expo-app` trên **SDK 55**, bật New Architecture, tạo EAS project.
2. Supabase project region **Singapore**; schema §2.3; viết RLS policy cho **cả 6 bảng** trước khi viết UI.
3. R2 bucket private + Edge Function `sign-upload` / `sign-batch-read`.
4. Đo thật: chụp 20 ảnh proof bằng điện thoại Android tầm trung → nén WebP 1440/q0.7 → **ghi lại kích thước trung bình thật** để thay số 150 KB [GUESS] bằng số [FACT].
5. Google + Apple Sign-In. Không đụng vào phone OTP.
6. pg_cron job recap + bảng `sent_notifications` với unique index idempotency.
7. Viết **200 câu roast tiếng Việt** vào bảng `roast_templates` (đây là công việc sản phẩm, không phải kỹ thuật, và nó quan trọng hơn mọi thứ ở trên).

---

## Nguồn tham khảo
- Expo SDK 55 changelog — https://expo.dev/changelog/sdk-55
- Expo SDK 54 changelog — https://expo.dev/changelog/sdk-54
- Expo pricing 2026 — https://checkthat.ai/brands/expo/pricing
- EAS Update pricing analysis — https://stalliontech.io/expo-eas-update-pricing
- Expo ImageManipulator docs — https://docs.expo.dev/versions/latest/sdk/imagemanipulator/
- Expo push notifications docs — https://docs.expo.dev/push-notifications/sending-notifications/
- Supabase pricing — https://supabase.com/pricing
- Supabase Send SMS Hook — https://supabase.com/docs/guides/auth/auth-hooks/send-sms-hook
- Cloudflare R2 pricing — https://developers.cloudflare.com/r2/pricing/
- Cloudflare Workers pricing — https://developers.cloudflare.com/workers/platform/pricing/
- Bunny Storage pricing — https://bunny.net/pricing/storage/
- AWS S3 pricing 2026 — https://infratally.com/articles/aws-s3-pricing-explained-2026/
- Twilio SMS pricing Vietnam — https://www.twilio.com/en-us/sms/pricing/vn
- Bảng giá ZNS 2026 — https://www.smsthuonghieu.com/gia-zns/
- Vietnam SMS compliance guide — https://www.sent.dm/en/resources/sms-compliance/vietnam-sms-guide
- Clickatell Vietnam SMS regulations — https://www.clickatell.com/sms-country-regulations/vietnam/
- Firebase phone verification pricing — https://firebase.google.com/docs/phone-number-verification/pricing
- FCM pricing 2026 — https://www.pushengage.com/firebase-push-notification-pricing/
- Convex pricing 2026 — https://toolradar.com/tools/convex/pricing
- Statcounter Vietnam mobile OS — https://gs.statcounter.com/os-market-share/mobile/viet-nam
- GPT-5 mini pricing — https://www.getapipulse.com/blog-gpt5-mini-cost-breakdown.html
- Gemini 3.7 Flash pricing — https://venturebeat.com/technology/googles-gemini-3-7-flash-targets-coding-and-agents-with-a-50-introductory-price-cut
- Nghị định 53/2022 data localization — https://vngcloud.vn/vi/blog/huong-dan-ve-noi-dia-hoa-du-lieu-tai-viet-nam
- RN widgets 2026 — https://medium.com/@faheem.tfora/building-dynamic-home-screen-widgets-in-react-native-android-ios-complete-2025-dc060feacddc
