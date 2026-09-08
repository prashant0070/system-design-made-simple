import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/learn/[slug]": ["./content/**/*"],
  },
};

export default nextConfig;
