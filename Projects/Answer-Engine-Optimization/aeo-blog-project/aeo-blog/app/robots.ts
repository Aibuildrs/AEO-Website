import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://theaeoengine.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
      {
        userAgent: "GPTBot", // OpenAI
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User", // ChatGPT user browsing
        allow: "/",
      },
      {
        userAgent: "CCBot", // Common Crawl (used by many AI)
        allow: "/",
      },
      {
        userAgent: "anthropic-ai", // Claude
        allow: "/",
      },
      {
        userAgent: "Claude-Web", // Claude web browsing
        allow: "/",
      },
      {
        userAgent: "PerplexityBot", // Perplexity
        allow: "/",
      },
      {
        userAgent: "Bytespider", // TikTok/ByteDance
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
