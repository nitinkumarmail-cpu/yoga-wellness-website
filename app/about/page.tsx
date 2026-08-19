import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
export const metadata: Metadata = {
  title: "About CFIW",
  description:
    "Our story, integrative approach, values, vision and preventive wellness philosophy.",
};
export default function Page() {
  return (
    <ContentPage
      eyebrow="About CFIW"
      title="Wellness understood as a whole"
      intro="CFIW was created to make yoga and well-being more personal, practical and responsive to the lives people actually lead."
      blocks={[
        {
          title: "Our Story",
          text: "The Centre for Integrative Wellness began with a simple observation: lasting practices grow from attention, not prescription. CFIW creates room to listen, explore and build a relationship with movement, breath and awareness.",
        },
        {
          title: "Our Approach",
          text: "We begin with the person or community in front of us. Experience, mobility, routine, environment and intention inform how each programme is shaped and how it evolves.",
        },
        {
          title: "Integrative Wellness",
          text: "Movement, breathing, mindful attention, rest and everyday choices affect one another. Our work connects these elements in ways that are clear, realistic and appropriate.",
        },
        {
          title: "Salutogenesis & Preventive Wellness",
          text: "Salutogenesis asks what helps people move towards health and well-being. At CFIW, it means supporting useful habits, awareness and personal resources. Our programmes complement, not replace, medical advice, diagnosis or treatment.",
        },
        {
          title: "Vision & Mission",
          text: "Our vision is a culture in which well-being feels understandable and accessible. Our mission is to offer thoughtful teaching and responsible partnerships that help people participate actively in their own wellness.",
        },
        {
          title: "Our Values",
          text: "Care, individual dignity, thoughtful evidence, accessibility, integrity and sustainable progress guide every interaction.",
          items: [
            "Listen before designing",
            "Teach without judgement",
            "Respect individual context",
            "Make progress sustainable",
            "Collaborate responsibly",
            "Communicate with clarity",
          ],
        },
      ]}
    />
  );
}
