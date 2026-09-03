import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/what-is-cfiw",
    "/founder",
    "/our-work",
    "/therapeutic-wellness",
    "/healthcare-wellness",
    "/personal-wellness",
    "/yoga-classes",
    "/programmes",
    "/collaborate",
    "/schools-education-institutions",
    "/cultural-centres",
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
