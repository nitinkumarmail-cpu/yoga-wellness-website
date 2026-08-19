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
            title: "Corporate Wellness",
            text: "Custom sessions and series for organisations seeking practical movement, mindfulness and well-being experiences.",
          },
          {
            title: "Hospitals & Healthcare",
            text: "Collaborative wellness experiences for appropriate settings, developed with stakeholder input. CFIW programmes are supportive and educational; they do not replace clinical care.",
          },
          {
            title: "Schools & Institutions",
            text: "Age-appropriate movement, mindfulness, wellness awareness and healthy-routine programmes designed with institutional needs in mind.",
          },
          {
            title: "Embassies & Cultural Centres",
            text: "Cultural and community-facing wellness experiences that connect people through accessible shared practice.",
          },
          {
            title: "NGOs & Communities",
            text: "Inclusive programmes shaped around local needs, access, language and the strengths already present within a community.",
          },
          {
            title: "Partnerships Process",
            text: "A transparent five-stage pathway from first conversation to learning review.",
            items: [
              "Enquiry",
              "Consultation",
              "Programme design",
              "Implementation",
              "Review",
            ],
          },
          {
            title: "Case Studies",
            text: "Verified partnership stories and outcomes will be published here as CFIW’s case-study library grows.",
          },
        ]}
      />
      <section className="section" style={{ background: "var(--sage)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h2 className="title">Discuss a partnership</h2>
          <EnquiryForm kind="corporate" />
        </div>
      </section>
    </>
  );
}
