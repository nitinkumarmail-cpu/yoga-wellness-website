import type { Metadata } from "next";
import { PageHero, CTA } from "@/components/ui";
export const metadata: Metadata = { title: "Events & Workshops" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Events & workshops"
        title="Learn, practise and connect"
        text="Upcoming workshops and shared-practice experiences will appear here as dates are confirmed."
      />
      <section className="section">
        <div className="container grid3">
          {[
            "Yoga for Everyday Life",
            "Workplace Mobility Workshop",
            "Meditation Foundations",
          ].map((x, i) => (
            <article className="card" key={x}>
              <p className="eyebrow">Date & location to be confirmed</p>
              <h2 style={{ fontSize: "1.8rem" }}>{x}</h2>
              <p className="lede" style={{ fontSize: ".94rem" }}>
                Sample event listing. Registration details will be published
                once the programme is scheduled.
              </p>
              <span className="btn" aria-disabled="true">
                Registration coming soon
              </span>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
