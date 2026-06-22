import type { MetadataRoute } from "next";
import { getGameConfig, getItems } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const now = new Date();
  const staticRoutes = config.routes.map((route) => ({
    url: `${config.seo.baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: (route.path === "/codes" || route.path === "/updates" ? "daily" : "weekly") as "daily" | "weekly",
    priority: Number(route.priority)
  }));

  const itemRoutes = getItems().map((item) => ({
    url: `${config.seo.baseUrl}/tier-list/${item.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  return [...staticRoutes, ...itemRoutes];
}
