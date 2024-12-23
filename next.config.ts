import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `
    @import "src/styles/_main.scss";
  `,
  },
};

export default nextConfig;
