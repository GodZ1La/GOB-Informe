/** @type {import('next').NextConfig} */

const nextConfig = {
  // output: "export",
  experimental: { esmExternals: "loose" },
  reactStrictMode: true,
  transpilePackages: ["react-daisyui"],
  webpack: config => {
    config.externals = [...config.externals, "canvas", "jsdom"];
    return config;
  },
};

export default nextConfig;
