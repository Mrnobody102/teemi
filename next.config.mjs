// Config để .mjs chứ không .ts: Next dùng TS compiler API để đọc config .ts,
// và API đó chưa tương thích với TypeScript 7 (bản Go) mà repo đang dùng.

/** @type {import('next').NextConfig} */
const config = {
  // Ảnh proof sẽ đi qua R2 ở giai đoạn sau. Demo dùng placeholder nội bộ nên
  // chưa cần khai remote pattern nào.
  turbopack: {},
};

export default config;
