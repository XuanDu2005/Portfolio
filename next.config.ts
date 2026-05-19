import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Truy cập dev qua IP mạng (điện thoại, máy khác) — tránh cảnh báo CORS
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://26.81.179.158:3000",
    "26.81.179.158",
  ],
};

export default nextConfig;
