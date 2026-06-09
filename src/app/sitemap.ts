import type { MetadataRoute } from "next";

const BASE = "https://www.stutterheimschool.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/",               priority: 1.0, changeFrequency: "weekly" },
    { url: "/about",          priority: 0.9, changeFrequency: "monthly" },
    { url: "/admissions",     priority: 0.9, changeFrequency: "monthly" },
    { url: "/fees",           priority: 0.9, changeFrequency: "monthly" },
    { url: "/staff",          priority: 0.8, changeFrequency: "monthly" },
    { url: "/leadership",     priority: 0.8, changeFrequency: "monthly" },
    { url: "/welcome",        priority: 0.8, changeFrequency: "monthly" },
    { url: "/pre-school",     priority: 0.8, changeFrequency: "monthly" },
    { url: "/primary-school", priority: 0.8, changeFrequency: "monthly" },
    { url: "/high-school",    priority: 0.8, changeFrequency: "monthly" },
    { url: "/subjects",       priority: 0.7, changeFrequency: "monthly" },
    { url: "/achievements",   priority: 0.7, changeFrequency: "monthly" },
    { url: "/gallery",        priority: 0.6, changeFrequency: "weekly"  },
    { url: "/events",         priority: 0.6, changeFrequency: "weekly"  },
    { url: "/contact",        priority: 0.7, changeFrequency: "monthly" },
    { url: "/apply",          priority: 0.9, changeFrequency: "monthly" },
  ] as const;

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
