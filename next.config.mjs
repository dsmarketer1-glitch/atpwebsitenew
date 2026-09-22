/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // firebase-admin uses dynamic requires (grpc / @google-cloud/firestore) that
  // Vercel's serverless file-tracing drops when the package is bundled, which
  // crashes the /api/pins function at load (HTTP 500). Marking it external keeps
  // the whole package in node_modules so it resolves correctly at runtime.
  serverExternalPackages: ['firebase-admin'],
};

export default nextConfig;
