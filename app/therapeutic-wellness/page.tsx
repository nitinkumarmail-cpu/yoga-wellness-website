import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Therapeutic Yoga",
  description: "Individualised therapeutic yoga and lifestyle wellness designed to complement appropriate medical care.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Therapeutic Yoga"
      title="Therapeutic Wellness to Restore Health"
      intro="Health needs change over time. At the Centre for Integrative Wellness, Yoga Therapy brings together therapeutic movement, yoga, breathwork, restorative practices and lifestyle-oriented wellness to support each individual according to their health, capacity and stage of life."
      heroImage="/images/therapeutic-yoga-hero.jpeg"
      heroImageAlt="A guided therapeutic movement session in a clinical setting"
      blocks={[
        {
          id: "preventive-lifestyle-wellness",
          title: "Preventive & Lifestyle Wellness",
          quote: "I feel well, and I want to stay well.",
          text: "You do not need to wait for a health problem to start taking care of your health. Long working hours, screen exposure, travel, sedentary routines, irregular schedules and sustained stress can gradually affect posture, mobility, weight, energy, sleep, recovery and overall vitality.",
          paragraphs: ["Preventive and Lifestyle Wellness is designed for people who want to maintain strength, mobility and balance, prevent lifestyle-related decline and age well."],
          items: [
            "Strength, mobility & postural balance",
            "Energy & vitality",
            "Stress prevention & lifestyle balance",
            "Sleep & recovery",
            "Weight & active living",
            "Workplace & sedentary lifestyle wellness",
            "Mindful living & sustainable habits",
            "Healthy & graceful ageing",
          ],
        },
        {
          id: "preventive-example",
          title: "A Preventive Wellness Example",
          text: "A 42-year-old professional may feel generally healthy but spend nine to ten hours sitting, travel frequently, have gained some weight and begun experiencing stiffness, low energy and poor sleep. High blood pressure or weakness around the knees may also make it important to consider more than fitness or flexibility.",
          paragraphs: [
            "Rather than placing the person into a standard yoga or exercise routine, we would look at movement, knee stability, mobility, posture, breathing, lifestyle, stress, sleep and existing medical guidance.",
            "The programme may combine mobility, strength-supportive practices, appropriate yoga, breathwork, recovery and healthier everyday routines, adapted to blood pressure and physical capacity. The intention is simple: maintain health while you have it.",
          ],
        },
        {
          id: "therapeutic-yoga-clinical-wellness",
          title: "Therapeutic Yoga & Clinical Wellness",
          quote: "I have a health concern, and I need more individualised support.",
          text: "When someone is living with pain, reduced mobility, a diagnosed health condition, physical limitation or a recovery-related need, a general wellness programme may no longer be enough. Here, the practice becomes more therapeutic.",
          paragraphs: ["We consider the individual's medical history, diagnosis where relevant, current treatment, physical capacity, movement limitations and lifestyle before designing the programme."],
          details: [
            { title: "Musculoskeletal & Spinal Health", text: "Neck, shoulder and back concerns, sciatica, joint stiffness, postural concerns and reduced mobility." },
            { title: "Movement & Functional Recovery", text: "Joint mobility, balance, functional movement, strength-supportive practices, aftercare and movement confidence." },
            { title: "Lifestyle & Metabolic Health", text: "Hypertension, Type 2 diabetes, weight management, thyroid wellness, PCOS wellness and lifestyle-related health concerns." },
            { title: "Respiratory Wellness", text: "Breath awareness, therapeutic breathwork, respiratory wellness and pulmonary rehabilitation support." },
            { title: "Stress, Sleep & Mind-Body Wellness", text: "Stress management, relaxation, mindfulness, emotional well-being, sleep, recovery and resilience." },
            { title: "Healthy Ageing", text: "Mobility, functional strength, balance, movement confidence and independence." },
          ],
        },
        {
          id: "therapeutic-example",
          title: "A Therapeutic Wellness Example",
          text: "A 58-year-old woman may come to us with hypertension, recurring lower-back and cervical discomfort, reduced mobility and sciatica concerns. We would not simply give her a standard yoga routine for back pain.",
          paragraphs: [
            "We would first understand her medical context, current treatment, movement capacity, posture, lifestyle, breathing, sleep and daily activity.",
            "Her programme may then combine therapeutic movement, mobility and strength-supportive practices, appropriate yoga, breath awareness, relaxation and lifestyle education, progressively adapted as her capacity changes.",
          ],
        },
        {
          id: "how-we-work",
          title: "How We Work",
          text: "We understand your health before we design your practice. Therapeutic wellness begins with the person behind the condition.",
          items: ["Listen", "Review", "Assess", "Personalise", "Practise", "Progress"],
          details: [
            { title: "Review Your Health Context", text: "Where relevant, we consider medical history, diagnosis, reports, current treatment, medications and recommendations from healthcare professionals." },
            { title: "Assess Movement & Function", text: "We assess posture, mobility, functional movement, balance, breathing patterns and current physical capacity." },
            { title: "Design Your Programme", text: "We select an appropriate combination of Therapeutic Yoga, functional movement, breathwork, restorative practices, relaxation and lifestyle education." },
            { title: "Work Alongside Medical Care", text: "When an individual is receiving medical treatment, our role is complementary. With consent, the programme can take account of guidance from the person's doctor, physiotherapist or other treating healthcare professional." },
            { title: "Review & Progress", text: "We review how the programme feels and functions, then adapt the practice as needs and capacity change." },
          ],
        },
      ]}
    />
  );
}
