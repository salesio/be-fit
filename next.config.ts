import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'be-fit';
const basePath = isGitHubPages ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: 'export', trailingSlash: true, basePath } : {}),
  images: { unoptimized: isGitHubPages },
};

export default nextConfig;
