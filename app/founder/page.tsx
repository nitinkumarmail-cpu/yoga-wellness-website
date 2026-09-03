import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CTA } from "@/components/ui";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Founder & Instructor" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Founder & instructor"
        title="Teaching that starts with listening"
        text="Meet the person behind CFIW’s attentive, integrative approach."
      />
      <section className="section" id="meet-the-founder">
        <div className="container editorial">
          <div className="editorial-image">
            <Image
              src="/images/hero-wellness.png"
              alt="Placeholder portrait representing the CFIW founder"
              fill
              sizes="50vw"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow">{site.instructor.title}</p>
            <h2 className="title">{site.instructor.name}</h2>
            <p className="lede">
              Founder biography is awaiting approved business content. This
              space will describe the instructor’s path into yoga, professional
              experience and commitment to personalised, accessible teaching.
            </p>
            <h3 id="qualifications-certifications">Qualifications & certifications</h3>
            <p className="lede">
              Verified qualifications and certification details to be confirmed
              before publication.
            </p>
            <h3 id="areas-of-expertise">Areas of expertise</h3>
            <p className="lede">
              Personal yoga · Beginner support · Mobility · Breathwork ·
              Meditation · Workplace wellness · Healthy ageing
            </p>
            <h3 id="teaching-philosophy">Teaching philosophy</h3>
            <p className="lede">
              Practice should meet a person with curiosity and respect. Clear
              guidance, thoughtful adaptation and steady progress matter more
              than performance.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
