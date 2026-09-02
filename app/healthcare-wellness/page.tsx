import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Hospitals & Healthcare",
  description:
    "Responsible yoga and wellness collaborations for patients, healthcare professionals and institutions.",
};

export default function Page() {
  return (
    <>
      <ContentPage
        eyebrow="Hospitals & healthcare institutions"
        title="Integrating yoga and wellness into healthcare"
        intro="Health is shaped not only by clinical treatment, but also by how people move, breathe, recover, manage stress and participate in everyday life. Appropriately adapted yoga can offer a complementary approach within clear professional boundaries."
        cta={false}
        blocks={[
          {
            title: "Patient Wellness & Clinical Collaboration",
            text: "CFIW works with healthcare professionals to develop therapeutic and preventive yoga programmes based on a person's medical context, functional capacity and stage of recovery. Clinical care remains central, and our programmes complement rather than replace it.",
            items: [
              "Orthopaedics & musculoskeletal health",
              "Pulmonology & respiratory health",
              "Endocrinology & metabolic health",
              "Women's wellness",
              "Cardiovascular & preventive wellness",
              "Geriatrics & healthy ageing",
            ],
          },
          {
            title: "Healthcare Staff Wellness",
            text: "Doctors, nurses, therapists and healthcare professionals work in environments that demand physical endurance, emotional resilience and sustained responsibility. CFIW creates structured programmes supporting movement, posture, stress awareness, recovery and team well-being.",
            items: [
              "Yoga & functional movement",
              "Posture & mobility",
              "Pranayama & breathwork",
              "Meditation",
              "Stress & recovery",
              "Sleep & lifestyle wellness",
              "Workshops & retreats",
            ],
          },
          {
            title: "Our Collaboration Approach",
            text: "We understand the need, collaborate with the healthcare team, design the programme, deliver responsibly and review learning together. Programmes can range from focused workshops and wellness days to regular staff sessions, leadership wellness and curated retreats.",
            items: [
              "Understand the need",
              "Collaborate",
              "Design",
              "Deliver",
              "Review",
            ],
          },
        ]}
      />
      <section className="section flagship-callout">
        <div className="container cta">
          <div>
            <p className="eyebrow">Flagship initiative</p>
            <h2 className="title">Better patient support. Healthier healthcare teams.</h2>
            <p className="lede">
              Project SAANIDHYA extends CFIW&apos;s commitment to care through gentle
              movement, breath, participation and connection for elders.
            </p>
          </div>
          <Link className="btn btn-primary" href="/flagship-initiatives/project-saanidhya">
            Explore Project SAANIDHYA
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
