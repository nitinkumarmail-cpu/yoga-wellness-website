import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/founder",
    "/our-work",
    "/personal-wellness",
    "/programmes",
    "/collaborate",
    "/corporate-wellness",
    "/flagship-initiatives",
    "/flagship-initiatives/project-saanidhya",
    "/resources",
    "/events",
    "/contact",
    "/book",
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
