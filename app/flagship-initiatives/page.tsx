import type { Metadata } from "next";
import { PageHero, ImageCard, CTA } from "@/components/ui";
export const metadata: Metadata = { title: "Flagship Initiatives" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Flagship initiatives"
        title="Project SAANIDHYA"
        text="A little more care. A little more connection."
      />
      <section className="section">
        <div className="container flagship-single">
          <ImageCard
            title="Project SAANIDHYA"
            tag="Featured initiative"
            text="A little more care and connection through gentle movement, breath and companionship for elders."
            href="/flagship-initiatives/project-saanidhya"
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
