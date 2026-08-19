import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { FAQ } from "@/components/faq";
import { programmes } from "@/lib/site";
export const metadata: Metadata = { title: "Personal Wellness" };
export default function Page() {
  return (
    <>
      <ContentPage
        eyebrow="Personal wellness"
        title="A practice made personal"
        intro="Private guidance that considers your experience, mobility, lifestyle, goals and preferences from the first conversation onward."
        blocks={[
          {
            title: "One-to-One Wellness",
            text: "There is no assumed starting point. Sessions are designed around the person you are today and adjusted through observation, conversation and regular review.",
            items: [
              "Individual attention",
              "Flexible scheduling",
              "Online or in person",
            ],
          },
          {
            title: "What to Expect",
            text: "A simple process keeps the experience clear and collaborative.",
            items: [
              "01. Initial consultation",
              "02. Understand goals & lifestyle",
              "03. Create a personal plan",
              "04. Guided sessions",
              "05. Review & progression",
            ],
          },
        ]}
      />
      <section className="section">
        <div className="container">
          <h2 className="title">Programmes</h2>
          <div className="grid3">
            {programmes.map((p) => (
              <article className="card" key={p.slug}>
                <p className="eyebrow">{p.tag}</p>
                <h3>{p.title}</h3>
                <p className="lede" style={{ fontSize: ".94rem" }}>
                  {p.text}
                </p>
                <Link className="text-link" href={`/programmes#${p.slug}`}>
                  Explore programme
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section rule">
        <div className="container">
          <h2 className="title">Frequently asked questions</h2>
          <FAQ />
        </div>
      </section>
    </>
  );
}
