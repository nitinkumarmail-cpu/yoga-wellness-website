import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA } from "@/components/ui";
import { programmes } from "@/lib/site";
export const metadata: Metadata = { title: "Wellness Programs" };
const programmeLinks = {
  "yoga-classes": "/yoga-classes",
  "therapeutic-wellness": "/therapeutic-wellness",
  "corporate-wellness": "/corporate-wellness",
} as const;
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Wellness programs"
        title="Three pathways. One thoughtful approach."
        text="Explore Yoga Classes, Therapeutic Yoga and Corporate Wellness on their dedicated pages."
      />
      <section className="section">
        <div className="container grid3">
          {programmes.map((p) => (
            <article className="card" id={p.slug} key={p.slug}>
              <p className="eyebrow">{p.tag}</p>
              <h2 style={{ fontSize: "2rem" }}>{p.title}</h2>
              <p className="lede" style={{ fontSize: ".96rem" }}>
                {p.text}
              </p>
              <Link
                className="btn btn-primary"
                href={programmeLinks[p.slug]}
              >
                Explore programme
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
