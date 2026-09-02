import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Therapeutic Wellness",
  description:
    "Person-centred therapeutic yoga and lifestyle-oriented wellness designed to complement appropriate professional care.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Yoga therapy"
      title="Therapeutic wellness to support health"
      intro="Health needs change over time. CFIW brings together therapeutic movement, yoga, breathwork, restorative practices and lifestyle-oriented wellness according to each person's health context, capacity and stage of life."
      blocks={[
        {
          title: "Preventive & Lifestyle Wellness",
          text: "You do not need to wait for a health problem to start caring for your health. Long working hours, screen exposure, travel, sedentary routines, irregular schedules and sustained stress may gradually influence posture, mobility, energy, sleep, recovery and overall vitality.",
          items: [
            "Strength, mobility & postural balance",
            "Energy & vitality",
            "Stress prevention & lifestyle balance",
            "Sleep & recovery",
            "Weight & active living",
            "Workplace wellness",
            "Mindful living & sustainable habits",
            "Healthy & graceful ageing",
          ],
        },
        {
          title: "Therapeutic Yoga & Individual Support",
          text: "When someone is living with pain, reduced mobility, a diagnosed condition, physical limitation or a recovery-related need, the practice requires greater individualisation. We consider medical history, current treatment, physical capacity, movement limitations and lifestyle before shaping an appropriate programme.",
          items: [
            "Musculoskeletal & spinal health",
            "Movement & functional recovery",
            "Lifestyle & metabolic health",
            "Respiratory wellness",
            "Stress, sleep & mind-body wellness",
            "Healthy ageing",
          ],
        },
        {
          title: "How We Work",
          text: "Therapeutic wellness begins with the person behind the condition. We listen, review the health context, assess movement and function, personalise the practice, review progress and adapt with care.",
          items: [
            "Listen",
            "Review",
            "Assess",
            "Personalise",
            "Practise",
            "Progress",
          ],
        },
        {
          title: "Alongside Medical Care",
          text: "CFIW does not diagnose, prescribe or replace clinical treatment. When a person is already receiving medical care, our role is complementary. With consent, a programme can take account of guidance from the person's doctor, physiotherapist or other treating healthcare professional.",
        },
      ]}
    />
  );
}
