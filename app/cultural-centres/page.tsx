import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Cultural Centres" };

export default function Page() {
  return (
    <ContentPage
      eyebrow="Collaborate"
      title="Cultural & Institutional Engagements"
      intro="Wellness as a Bridge Between Cultures"
      blocks={[
        {
          title: "Cultural Centres",
          text: "Yoga is one of India's most widely recognised traditions, yet its deeper value extends beyond physical practice. It carries principles of balance, self-awareness, mindful living, breath, discipline and the relationship between individual and collective well-being.",
          paragraphs: [
            "CFIW seeks to bring these traditions into contemporary settings through meaningful engagement with cultural institutions, international communities, educational organisations and other institutions, presenting Yoga and wellness in a way that is authentic, accessible and culturally respectful.",
            "The idea is to create opportunities for cultural exchange, shared learning and human connection through wellness. Each collaboration can be shaped around its audience, cultural context and purpose, from an intimate conversation or experiential workshop to a larger cultural event, commemorative occasion or longer-term institutional engagement.",
            "Through this work, CFIW hopes to create a space where traditional Indian knowledge meets contemporary well-being, and where wellness becomes a meaningful bridge between people, cultures and ways of living.",
          ],
          quote: "Tradition. Well-being. Cultural Connection.",
          image: {
            src: "/images/cultural-wellness.jpeg",
            alt: "A guided group yoga and wellness practice outdoors",
          },
        },
      ]}
    />
  );
}
