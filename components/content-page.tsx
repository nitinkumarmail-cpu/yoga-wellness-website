import { PageHero, SectionHeading, CTA } from "./ui";
import Link from "next/link";
import Image from "next/image";
export type Block = {
  id?: string;
  title: string;
  text?: string;
  paragraphs?: readonly string[];
  quote?: string;
  items?: readonly string[];
  details?: readonly { title: string; text: string }[];
  link?: { label: string; href: string };
  image?: { src: string; alt: string };
};
export function ContentPage({
  eyebrow,
  title,
  intro,
  blocks,
  cta = true,
  heroImage,
  heroImageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: readonly Block[];
  cta?: boolean;
  heroImage?: string;
  heroImageAlt?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        text={intro}
        image={heroImage}
        imageAlt={heroImageAlt}
      />
      <section className="section">
        <div className="container prose">
          {blocks.map((b, i) => (
            <section
              key={b.title}
              id={
                b.id ??
                b.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")
              }
              style={{
                padding: "36px 0",
                borderTop: i ? "1px solid var(--line)" : "0",
              }}
            >
              <SectionHeading
                eyebrow={String(i + 1).padStart(2, "0")}
                title={b.title}
                text={b.text}
              />
              {b.quote && <blockquote className="section-quote">{b.quote}</blockquote>}
              {b.paragraphs?.map((paragraph) => (
                <p className="content-paragraph" key={paragraph}>
                  {paragraph}
                </p>
              ))}
              {b.link && (
                <Link className="text-link content-link" href={b.link.href} target="_blank" rel="noreferrer">
                  {b.link.label}
                </Link>
              )}
              {b.items && (
                <div className="grid3" style={{ marginTop: 25 }}>
                  {b.items.map((x) => (
                    <div className="card" key={x}>
                      <h3 style={{ fontSize: "1.3rem", margin: 0 }}>{x}</h3>
                    </div>
                  ))}
                </div>
              )}
              {b.details && (
                <div className="detail-grid" style={{ marginTop: 25 }}>
                  {b.details.map((detail) => (
                    <article className="detail-card" key={detail.title}>
                      <h3>{detail.title}</h3>
                      <p>{detail.text}</p>
                    </article>
                  ))}
                </div>
              )}
              {b.image && (
                <div className="content-image">
                  <Image
                    src={b.image.src}
                    alt={b.image.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 900px"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
      {cta && <CTA />}
    </>
  );
}
