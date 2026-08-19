import type { Metadata } from "next";
import { PageHero, ImageCard, CTA } from "@/components/ui";
export const metadata: Metadata = { title: "Flagship Initiatives" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Flagship initiatives"
        title="Ideas given time, care and community"
        text="Longer-term initiatives that explore how integrative wellness can support particular groups, environments and shared needs."
      />
      <section className="section">
        <div className="container grid3">
          <ImageCard
            title="Project SAANIDHYA"
            tag="Featured initiative"
            text="Healthy ageing through movement, breath and meaningful community connection."
            href="/flagship-initiatives/project-saanidhya"
          />
          <ImageCard
            title="Modern Workplace Wellness"
            tag="In development"
            text="A structured initiative for bringing sustainable wellness practices into the changing world of work."
            href="/corporate-wellness"
            image="/images/corporate-wellness.png"
          />
          <ImageCard
            title="Community Wellness"
            tag="In development"
            text="Locally responsive programmes built through partnership, access and shared learning."
            href="/collaborate"
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
