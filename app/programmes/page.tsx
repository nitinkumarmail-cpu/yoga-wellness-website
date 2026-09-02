import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CTA } from "@/components/ui";
import { programmes } from "@/lib/site";
export const metadata: Metadata = { title: "Wellness Programs" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Wellness programs"
        title="Choose a useful place to begin"
        text="These pathways are starting points. Every personal program can be adjusted after an initial conversation."
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
              <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                Format, frequency and progression are agreed personally. Pricing
                and availability will be confirmed during enquiry.
              </p>
              <Link
                className="btn btn-primary"
                href={`/book?programme=${p.slug}`}
              >
                Enquire now
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
