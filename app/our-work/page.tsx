import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
export const metadata: Metadata = { title: "Our Work" };
export default function Page() {
  return (
    <ContentPage
      eyebrow="Our work"
      title="Wellness in personal, professional and community life"
      intro="Our work brings movement, breath and mindful attention into settings where they can be understood, practised and sustained."
      blocks={[
        {
          title: "Wellness",
          text: "Personal and small-group experiences that build awareness, confidence and a practical relationship with well-being.",
          items: [
            "Personal yoga",
            "Meditation & breathwork",
            "Mobility & flexibility",
          ],
        },
        {
          title: "Therapeutic Wellness",
          text: "Carefully adapted wellness practices that may support comfort, confidence and participation alongside appropriate professional care. We do not diagnose or promise medical outcomes.",
          items: [
            "Individual context",
            "Gentle adaptation",
            "Professional boundaries",
          ],
        },
        {
          title: "Education & Capacity Building",
          text: "Workshops and learning experiences that help institutions, facilitators and communities develop shared language and useful wellness practices.",
          items: [
            "Awareness workshops",
            "Facilitator learning",
            "Community programmes",
          ],
        },
      ]}
    />
  );
}
