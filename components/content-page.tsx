import { PageHero, SectionHeading, CTA } from "./ui";
export type Block = { title: string; text: string; items?: readonly string[] };
export function ContentPage({
  eyebrow,
  title,
  intro,
  blocks,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  blocks: readonly Block[];
  cta?: boolean;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={intro} />
      <section className="section">
        <div className="container prose">
          {blocks.map((b, i) => (
            <section
              key={b.title}
              id={b.title
                .toLowerCase()
                .replaceAll(" ", "-")
                .replaceAll("&", "")}
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
              {b.items && (
                <div className="grid3" style={{ marginTop: 25 }}>
                  {b.items.map((x) => (
                    <div className="card" key={x}>
                      <h3 style={{ fontSize: "1.3rem", margin: 0 }}>{x}</h3>
                    </div>
                  ))}
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
