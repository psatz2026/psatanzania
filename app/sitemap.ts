import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { causes } from "@/data/causes";
import { legalPages } from "@/data/legal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/causes",
    "/team",
    "/faqs",
    "/contact",
    "/become-a-volunteer",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const causeRoutes = causes.map((c) => ({
    url: `${SITE_URL}/causes/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const legalRoutes = legalPages.map((p) => ({
    url: `${SITE_URL}/legal-pages/${p.slug}`,
    lastModified: p.lastUpdated ? new Date(p.lastUpdated) : now,
    changeFrequency: "yearly" as const,
    priority: 0.2,
  }));

  return [...staticRoutes, ...causeRoutes, ...legalRoutes];
}
