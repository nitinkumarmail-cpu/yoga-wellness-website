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
      title="Health should be created, not simply restored"
      intro="CFIW was created to make yoga and well-being personal, practical and responsive to the lives people actually lead."
      blocks={[
        {
          title: "Our Story",
          text: "The Centre for Integrative Wellness grew from years of working with corporate professionals, healthcare settings, expatriate communities, educators, senior citizens and individuals seeking healthier, more balanced lives. Across these different settings, the same challenges appeared: long working hours, physical inactivity, chronic stress, poor sleep, persistent discomfort and very little time to understand the body. CFIW brings timeless yogic wisdom into conversation with anatomy, physiology, movement science and preventive healthcare so that creating health becomes practical and relevant to modern life.",
        },
        {
          title: "Our Approach",
          text: "Our work begins by listening. We understand the individual, organisation or community, review the factors influencing well-being, and shape a programme around real needs, abilities, health context and goals. Movement, breathing, sleep, nutrition, behaviour and environment are understood as connected parts of one living system.",
          items: [
            "Understand",
            "Assess",
            "Personalise",
            "Guide",
            "Create health",
          ],
        },
        {
          title: "Integrative Wellness",
          text: "Integrative wellness is a person-centred and evidence-informed approach that recognises the interaction between biological, psychological, behavioural, social and environmental factors. At CFIW, contemporary health understanding is combined with Yoga Science, mindful movement, breath, relaxation and lifestyle education to support prevention, participation, recovery and quality of life.",
        },
        {
          title: "Salutogenesis & Preventive Wellness",
          text: "Salutogenesis asks a different question: what creates health? This health-promoting philosophy guides us to strengthen a person's capacity to adapt, recover and thrive through movement, breath, mindful living, education and supportive environments. CFIW programmes complement, and do not replace, medical advice, diagnosis or treatment.",
        },
        {
          title: "Vision & Mission",
          text: "Our vision is a healthier society where well-being is accessible, inclusive and integrated into everyday life. Our mission is to bridge traditional yogic wisdom with contemporary health understanding through evidence-informed yoga, therapeutic movement, breathwork, mindfulness, lifestyle education and preventive wellness. We bring this work into the spaces where people live, work, learn, heal and connect.",
        },
        {
          title: "Our Values",
          text: "Care, dignity and thoughtful practice guide every interaction.",
          items: [
            "Prevention first",
            "Compassion",
            "Integrity",
            "Evidence-informed practice",
            "Inclusivity",
            "Lifelong learning",
            "Community well-being",
            "Respect for individual needs",
          ],
        },
      ]}
    />
  );
}
