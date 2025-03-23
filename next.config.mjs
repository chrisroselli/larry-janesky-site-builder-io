import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const nextConfig = BuilderDevTools()(
  BuilderDevTools()({
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "img.youtube.com",
          port: "",
          pathname: "/vi/**",
        },
      ],
    },
  })
);

export default nextConfig;
