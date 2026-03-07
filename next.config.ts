import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgSite = repository?.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS === "true" && repository && !isUserOrOrgSite
    ? `/${repository}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
