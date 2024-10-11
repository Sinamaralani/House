/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "kawwnozvebkemjpsmlok.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
