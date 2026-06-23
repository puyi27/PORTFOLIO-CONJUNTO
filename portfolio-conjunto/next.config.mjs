/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Three.js / R3F compatibility with Next.js App Router
  transpilePackages: ['three'],

  // Turbopack is default in Next.js 16. No custom webpack config needed.
  // The TopoMesh component uses next/dynamic with ssr:false.
  turbopack: {},
};

export default nextConfig;
