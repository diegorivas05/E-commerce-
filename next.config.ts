import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.penguinrandomhouse.com" },
      { protocol: "https", hostname: "proassetspdlcom.comstatics2.com" },
      { protocol: "https", hostname: "www.librosdelaballena.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
};

export default nextConfig;