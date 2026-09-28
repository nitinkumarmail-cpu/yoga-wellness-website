import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
import { EnquiryForm } from "@/components/forms";
export const metadata: Metadata = { title: "Collaborate" };
export default function Page() {
  return (
    <>
      <ContentPage
        eyebrow="Collaborate"
        title="Wellness shaped for your people and purpose"
        intro="CFIW works with organisations and institutions to develop thoughtful programmes grounded in context, participation and clear professional boundaries."
        blocks={[
          {
            title: "Hospitals & Healthcare",
            text: "Collaborative yoga and wellness programmes for patients and healthcare staff, developed with clinical stakeholders and clear professional boundaries. CFIW complements, and does not replace, clinical care.",
          },
          {
            title: "School & Education Institutions",
            text: "Age-appropriate movement, mindfulness, wellness awareness and healthy-routine programmes designed with institutional needs in mind.",
          },
          {
            title: "Cultural Centres",
            text: "Cultural and community-facing wellness experiences that connect people through accessible shared practice.",
          },
          {
            title: "Flagship Initiative",
            text: "Project SAANIDHYA brings gentle movement, breath, participation and companionship to elders in old-age homes and care communities.",
          },
        ]}
      />
      <section id="corporate-enquiry" className="section" style={{ background: "var(--sage)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="title">Discuss a partnership</h2>
          <EnquiryForm kind="corporate" />
        </div>
      </section>
    </>
  );
}
