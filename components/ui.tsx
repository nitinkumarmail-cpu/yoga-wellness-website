import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginInline: center ? "auto" : 0,
        maxWidth: 760,
      }}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="title">{title}</h2>
      {text && (
        <p className="lede" style={{ marginInline: center ? "auto" : 0 }}>
          {text}
        </p>
      )}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={image ? "page-hero page-hero-with-image" : "page-hero"}>
      <div className={image ? "container page-hero-grid" : "container"}>
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display" style={{ maxWidth: 900 }}>
            {title}
          </h1>
          <p className="lede">{text}</p>
        </div>
        {image && (
          <div className="page-hero-image">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 44vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
export function ImageCard({
  title,
  text,
  href,
  image = "/images/hero-wellness.png",
  tag,
}: {
  title: string;
  text: string;
  href: string;
  image?: string;
  tag?: string;
}) {
  return (
    <article className="card" style={{ padding: 0 }}>
      <div className="image-wrap">
        <Image src={image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
      </div>
      <div style={{ padding: 26 }}>
        {tag && <p className="eyebrow">{tag}</p>}
        <h3 style={{ fontSize: "1.7rem", margin: "0 0 10px" }}>{title}</h3>
        <p className="lede" style={{ fontSize: ".95rem" }}>
          {text}
        </p>
        <Link href={href} className="text-link">
          Learn more <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
export function CTA() {
  return (
    <section className="section band">
      <div className="container cta">
        <div>
          <p className="eyebrow" style={{ color: "#bfd2c3" }}>
            A practice that begins with you
          </p>
          <h2 className="title cta-title">Ready to begin your wellness journey?</h2>
          <p className="lede">
            Tell us where you are and what you hope to make space for. We’ll
            help you find a thoughtful next step.
          </p>
        </div>
        <div className="cta-actions">
          <Link
            className="btn"
            style={{ background: "white", color: "var(--green)" }}
            href="/book"
          >
            Book your session
          </Link>
          <Link className="btn btn-light" href="/contact">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
