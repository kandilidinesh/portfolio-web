/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        useDeploymentId: true,
        useDeploymentIdServerActions: true
    }
};

export default nextConfig;
