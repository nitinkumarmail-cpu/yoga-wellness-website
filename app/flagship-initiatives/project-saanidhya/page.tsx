import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Project SAANIDHYA",
  description: "Supporting healthy ageing, independence and social connection through CFIW's voluntary social-impact initiative.",
};

export default function Page() {
  const highlight = "Healthy ageing is influenced not only by physical health, but also by a person’s ability to remain functional, participate in everyday life, maintain relationships and feel connected to others.";
  return <ContentPage
    eyebrow="Voluntary social-impact initiative"
    title="Project SAANIDHYA"
    intro="Supporting Healthy Ageing, Independence and Social Connection"
    blocks={[
      {
        title: "Presence, closeness and companionship",
        text: "Project SAANIDHYA is the voluntary social-impact initiative of the Centre for Integrative Wellness (CFIW), focused on supporting the health and well-being of older adults, particularly those living in old-age homes and care communities.",
        highlights: [highlight],
        paragraphs: [
          "SAANIDHYA (सान्निध्य) means presence, closeness and companionship.",
          "The name reflects the purpose of the initiative.",
          highlight,
          "With advancing age, changes in mobility, strength, balance and health can affect everyday functioning and independence. Social isolation and reduced participation can further influence well-being and quality of life.",
          "Project SAANIDHYA therefore takes a person-centred approach to healthy ageing, with a focus on maintaining functional ability, encouraging independence and participation, and strengthening opportunities for meaningful social connection.",
        ],
      },
      {
        id: "our-first-commitment",
        title: "Our First Commitment: 100 Elders",
        text: "CFIW’s first commitment through Project SAANIDHYA is to reach 100 older adults across old-age homes, elder-care communities and organisations working with older people.",
        paragraphs: ["The commitment to 100 provides a defined and measurable starting point. It will enable the initiative to understand needs across different communities, develop appropriate programme models, build institutional partnerships and assess how the programme can be strengthened and expanded over time."],
      },
      {
        title: "Our Aim",
        text: "To support older adults in maintaining the health, functional ability, independence and social connection that enable them to participate meaningfully in everyday life.",
      },
    ]}
  />;
}
