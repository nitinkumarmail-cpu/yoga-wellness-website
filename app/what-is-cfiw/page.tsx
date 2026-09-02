import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "What is CFIW?",
  description:
    "Learn how the Centre for Integrative Wellness creates preventive, personalised and practical wellness programmes.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="What is CFIW?"
      title="A platform for creating health and living better"
      intro="The Centre for Integrative Wellness is a wellness initiative of Navyaanta Ventures Private Limited, created with a simple belief: health is not only about treating illness, but about creating the conditions to live well."
      blocks={[
        {
          title: "Who We Are",
          text: "CFIW brings together traditional yogic knowledge and contemporary approaches to health and well-being. We support individuals, organisations and communities through personal wellness, therapeutic wellness, education and structured institutional programmes.",
          items: [
            "Person-centred",
            "Evidence-informed",
            "Preventive",
            "Collaborative",
            "Practical",
            "Inclusive",
          ],
        },
        {
          title: "Why CFIW?",
          text: "Our programmes span the continuum of health. For one person, that may mean greater mobility, strength, flexibility and balance. For another, it may mean appropriately adapted practices that support function, healthy ageing or participation alongside professional care. Beyond individual practice, we partner with organisations, schools, healthcare institutions, cultural centres, NGOs and communities.",
        },
        {
          title: "What Creates Health?",
          text: "We begin by understanding the person, building a useful foundation and helping create sustainable habits. Lasting health is shaped through knowledge, awareness, movement, breath, lifestyle and consistent everyday practice, not a single class or a one-size-fits-all prescription.",
        },
      ]}
    />
  );
}
