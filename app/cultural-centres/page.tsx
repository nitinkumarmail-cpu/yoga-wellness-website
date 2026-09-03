import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Cultural Centres" };

export default function Page() {
  return (
    <ContentPage
      eyebrow="Collaborate"
      title="Wellness Through Culture and Community"
      intro="Inclusive yoga and wellness experiences that bring people together through movement, breath, awareness and shared participation."
      blocks={[
        { title: "Community Wellness", text: "Welcoming group experiences adapted for different ages, abilities, languages and cultural contexts." },
        { title: "Cultural Programmes", text: "Yoga, meditation and well-being sessions created for cultural centres, embassies and community organisations." },
        { title: "Workshops & Events", text: "Focused workshops, wellness days and special events designed around the audience and purpose of each gathering." },
        { title: "Collaborative Design", text: "We work with the host organisation to understand the community, shape accessible content and deliver with care.", items: ["Listen", "Co-create", "Deliver", "Learn"] },
      ]}
    />
  );
}
