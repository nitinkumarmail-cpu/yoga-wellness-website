import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/ui";
import { resources } from "@/lib/site";
export const metadata: Metadata = { title: "Resources" };
const groups = [
  {
    id: "articles",
    title: "Articles & Blogs",
    items: resources.map((x) => x.title),
  },
  {
    id: "videos",
    title: "Videos",
    items: [
      "Yoga foundations, video placeholder",
      "Breathing with awareness, video placeholder",
      "Everyday mobility, video placeholder",
    ],
  },
  {
    id: "practices",
    title: "Guided Practices",
    items: [
      "Morning mobility",
      "Five-minute breathing pause",
      "Desk stretching",
      "Evening relaxation",
    ],
  },
  {
    id: "library",
    title: "Wellness Library",
    items: ["Movement", "Breath", "Mindfulness", "Healthy ageing"],
  },
  {
    id: "research",
    title: "Research & Insights",
    items: [
      "Evidence-informed practice notes",
      "Responsible wellness communication",
      "Workplace well-being insights",
    ],
  },
];
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="A library for curious, practical well-being"
        text="Approachable articles, guided practices and professional insights, made to inform rather than overwhelm."
      />
      <section className="section">
        <div className="container">
          {groups.map((g) => (
            <section
              id={g.id}
              key={g.id}
              style={{
                padding: "36px 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <h2 className="title" style={{ fontSize: "2.7rem" }}>
                {g.title}
              </h2>
              <div className="grid3">
                {g.items.map((x) => (
                  <article className="card" key={x}>
                    <p className="eyebrow">Sample content</p>
                    <h3>{x}</h3>
                    <p className="lede" style={{ fontSize: ".9rem" }}>
                      This editable preview establishes the content structure.
                      Approved content and media can be added without changing
                      the design.
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
