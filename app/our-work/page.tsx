import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
export const metadata: Metadata = { title: "Our Work" };
export default function Page() {
  return (
    <ContentPage
      eyebrow="Our work"
      title="Create health where people live, work, learn, heal and connect"
      intro="Our work extends beyond a yoga class. CFIW brings movement, breath, health education and mindful attention into personal, professional, healthcare and community settings."
      blocks={[
        {
          title: "Personal Wellness",
          text: "One-to-one, family and small-group experiences designed around the person's goals, movement, breath, routine and stage of life.",
          items: [
            "Strength & fitness",
            "Mobility & flexibility",
            "Meditation & breathwork",
            "Healthy ageing",
          ],
        },
        {
          title: "Therapeutic Wellness",
          text: "Person-centred and carefully adapted practices that may support mobility, function, confidence and participation alongside appropriate professional care. CFIW does not diagnose or replace clinical treatment.",
          items: [
            "Preventive lifestyle wellness",
            "Therapeutic yoga",
            "Movement support",
            "Professional boundaries",
          ],
        },
        {
          title: "Education & Capacity Building",
          text: "Workshops and learning experiences that help institutions, facilitators and communities understand the body, develop shared language and sustain useful wellness practices.",
          items: [
            "Awareness workshops",
            "Facilitator learning",
            "Community programmes",
          ],
        },
        {
          title: "Institutional Collaboration",
          text: "We partner with organisations, schools, hospitals, healthcare teams, cultural centres, NGOs and communities to design programmes around people, place and purpose.",
          items: [
            "Corporate wellness",
            "Hospitals & healthcare",
            "Schools & institutions",
            "NGOs & communities",
          ],
        },
      ]}
    />
  );
}
