import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
export const metadata: Metadata = { title: "Corporate Wellness" };
export default function Page() {
  return (
    <ContentPage
      eyebrow="Corporate wellness"
      title="Wellness at work, designed around the work"
      intro="Human, adaptable programmes for teams navigating long hours, changing environments and different levels of movement experience."
      blocks={[
        {
          title: "Programme Formats",
          text: "Choose a one-off introduction, recurring sessions, a focused workshop series or a programme designed from the ground up.",
          items: [
            "Desk mobility",
            "Accessible yoga",
            "Guided mindfulness",
            "Breath awareness",
            "Wellness workshops",
            "Leadership sessions",
          ],
        },
        {
          title: "Designed for Participation",
          text: "Sessions can accommodate varied experience, roles and physical settings. We prioritise clear options and voluntary, respectful participation.",
        },
        {
          title: "A Collaborative Process",
          text: "We align on audience, environment, objectives and delivery before recommending format, cadence or content.",
          items: ["Discover", "Design", "Deliver", "Review"],
        },
      ]}
    />
  );
}
