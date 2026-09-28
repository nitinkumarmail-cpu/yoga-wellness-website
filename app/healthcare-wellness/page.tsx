import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Hospitals & Healthcare",
  description: "Yoga and wellness programmes for patient support and healthcare staff, developed within clear clinical boundaries.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Hospitals & Healthcare"
      title="Integrating Yoga & Wellness Into Healthcare"
      intro="Bringing together the therapeutic principles of Yoga with contemporary health science to support a more integrated, person-centred approach to health and well-being."
      heroImage="/images/healthcare-hero.jpeg"
      heroImageAlt="A wellness professional speaking with people in a hospital ward"
      blocks={[
        {
          id: "why-yoga-in-healthcare",
          title: "Integration of Yoga in Healthcare",
          text: "Yoga has an evolving role within contemporary health and well-being. When appropriately adapted and delivered within professional boundaries, its use of movement, breathing, relaxation and mindfulness can complement conventional approaches to care.",
          paragraphs: [
            "The World Health Organization (WHO) includes Yoga within the broader field of traditional, complementary and integrative medicine. Growing scientific research around Yoga is informing the evidence-based, safe and effective integration of appropriate traditional and complementary practices into health systems.",
            "At CFIW, this principle of integration is central to our work. We seek to bring together traditional Yogic knowledge and contemporary health understanding, while working collaboratively with doctors, hospitals, rehabilitation professionals and allied healthcare teams where appropriate.",
            "Yoga is not replacing conventional medical care, but complementing it while bringing the right practices together around the needs of the individual.",
          ],
          link: {
            label: "WHO: Traditional, Complementary and Integrative Medicine",
            href: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
          },
        },
        {
          id: "patient-wellness-clinical-collaboration",
          title: "Patient Wellness & Clinical Collaboration",
          quote: "Supporting the Person Beyond the Diagnosis",
          text: "CFIW collaborates with healthcare professionals to develop therapeutic and preventive yoga programmes based on the patient's medical context, functional capacity and stage of recovery.",
          details: [
            { title: "Psychiatry, Psychology & Mental Health", text: "Supporting stress, anxiety, emotional well-being, sleep and mind-body health through an integrative approach." },
            { title: "Orthopaedics & Musculoskeletal Health", text: "Neck and back concerns, joint and knee health, mobility, posture and functional movement." },
            { title: "Pulmonology & Respiratory Health", text: "Breath awareness, therapeutic movement, respiratory wellness and pulmonary rehabilitation support." },
            { title: "Endocrinology & Metabolic Health", text: "Type 2 diabetes, thyroid wellness, weight management and lifestyle modification." },
            { title: "Obstetrics, Gynaecology & Women's Wellness", text: "PCOS wellness, prenatal and postnatal wellness, menopause and midlife wellness." },
            { title: "Cardiovascular & Preventive Wellness", text: "Hypertension, stress management, appropriate movement and lifestyle wellness." },
            { title: "Geriatrics & Healthy Ageing", text: "Mobility, balance, functional strength, movement confidence and independence." },
          ],
          paragraphs: [
            "Programmes may integrate Therapeutic Yoga, functional movement, Pranayama, relaxation, meditation and lifestyle education, adapted where appropriate to medical recommendations.",
            "Clinical care remains central. CFIW works alongside it.",
          ],
        },
        {
          id: "healthcare-staff-wellness",
          title: "Healthcare Staff Wellness",
          quote: "Caring for Those Who Care",
          text: "Doctors, nurses, therapists and healthcare professionals work in environments that demand physical endurance, emotional resilience and sustained responsibility.",
          paragraphs: [
            "CFIW collaborates with healthcare institutions to create structured staff wellness programmes supporting movement, posture, stress management, recovery and overall well-being.",
            "Collaboration can range from focused workshops and wellness days to regular staff programmes, leadership wellness and curated retreats.",
          ],
          items: ["Yoga & Functional Movement", "Posture & Mobility", "Pranayama & Breathwork", "Meditation", "Stress & Recovery", "Relaxation", "Sleep & Lifestyle Wellness", "Team Well-being", "Wellness Workshops & Retreats"],
        },
        {
          id: "our-collaboration-approach",
          title: "Our Collaboration Approach",
          text: "We build each programme with the institution and the healthcare professionals responsible for care.",
          items: ["Understand the Need", "Collaborate With the Healthcare Team", "Design the Programme", "Deliver", "Review"],
        },
      ]}
    />
  );
}
