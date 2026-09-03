import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Project SAANIDHYA",
  description: "CFIW's social wellness initiative supporting elders through movement, breath, participation and connection.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Better Patient Support. Healthier Healthcare Teams."
      title="Project SAANIDHYA"
      intro="A Little More Care. A Little More Connection."
      blocks={[
        {
          id: "a-little-more-care",
          title: "A Little More Care. A Little More Connection.",
          text: "At CFIW, we believe wellness should also reach those who may need a little more care, attention and connection. Project SAANIDHYA is our social initiative for elders, particularly those living in old-age homes and care communities.",
          paragraphs: [
            "As we grow older, changes in mobility, strength, balance and lifestyle-related health conditions can gradually make everyday activities more difficult. But well-being is not only physical. Sometimes what is equally needed is time, conversation, participation and the feeling of being connected.",
            "Through gentle yoga, therapeutic movement, breath practices, relaxation and lifestyle awareness, SAANIDHYA supports elders in staying mobile, active and engaged while creating space for conversation, companionship and moments of togetherness.",
          ],
        },
        {
          id: "our-first-commitment",
          title: "Our First Commitment: 500 Elders",
          text: "To reach, move and connect with 500 elders, one person, one visit and one community at a time.",
          paragraphs: [
            "Our intention is simple: to help people continue doing what they can for themselves, remain involved in everyday life and experience the warmth of human connection as they grow older.",
            "Because care is not only about looking after someone.",
          ],
        },
      ]}
    />
  );
}
