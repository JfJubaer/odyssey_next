/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
};

export default nextConfig;
