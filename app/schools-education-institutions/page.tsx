import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Schools & Education Institutions" };

export default function Page() {
  return (
    <ContentPage
      eyebrow="Collaborate"
      title="Wellness Where People Learn"
      intro="Age-appropriate yoga, mindful movement, breath awareness and wellness education designed with the needs of each learning community in mind."
      blocks={[
        { title: "Student Wellness", text: "Accessible practices that encourage healthy movement, body awareness, calm attention and sustainable everyday routines." },
        { title: "Educator & Staff Wellness", text: "Thoughtful sessions supporting movement, recovery, stress awareness and well-being for the people who guide and support learners." },
        { title: "Education & Capacity Building", text: "Workshops that build a shared understanding of movement, breath, preventive health and responsible wellness practice." },
        { title: "Designed Together", text: "We begin with the institution's context, age groups, setting and objectives before shaping an appropriate programme.", items: ["Understand", "Design", "Deliver", "Review"] },
      ]}
    />
  );
}
