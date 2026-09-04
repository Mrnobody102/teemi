import { defineConfig } from "drizzle-kit";

// Cấu hình sinh migration. Không phụ thuộc hướng sản phẩm (web hay native):
// đây chỉ là lớp CSDL + logic thuần.
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env["DATABASE_URL"] ?? "",
  },
});
