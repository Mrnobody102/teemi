import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts", "src/**/*.test.ts"],
    environment: "node",
    // Mọi mốc thời gian trong nghiệp vụ đều quy về giờ Việt Nam (UTC+7),
    // một múi giờ duy nhất. Ép TZ để test không đổi kết quả theo máy chạy.
    env: {
      TZ: "Asia/Ho_Chi_Minh",
    },
    coverage: {
      provider: "v8",
      include: ["src/core/**/*.ts"],
    },
  },
});
