import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true }, // optional: keeps export simple if you later add <Image/>
};

export default nextConfig;
