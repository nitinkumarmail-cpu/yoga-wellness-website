import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "About CFIW",
  description: "Discover who CFIW is and how integrative wellness and salutogenesis guide our work.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="About CFIW"
      title="A platform for creating health and living better"
      intro="Centre for Integrative Wellness (CFIW) is a wellness initiative of Navyaanta Ventures Private Limited, created with a simple belief: health is not only about treating illness, but about creating the conditions to live well."
      blocks={[
        {
          id: "who-we-are",
          title: "Who We Are",
          text: "CFIW brings together traditional yogic knowledge and contemporary approaches to health and well-being to support individuals, organisations and communities through personal wellness, therapeutic wellness, education and structured institutional programmes.",
          highlights: ["CFIW is building a more preventive, personalised and integrative approach to everyday well-being.", "Guided by the principles of salutogenesis, our work begins with a different question. We ask not only what causes illness, but also what creates health."],
          paragraphs: [
            "CFIW is building a more preventive, personalised and integrative approach to everyday well-being.",
            "Guided by the principles of salutogenesis, our work begins with a different question. We ask not only what causes illness, but also what creates health.",
            "Our approach is person-centred, collaborative and practical. Every individual is different, so our integrative wellness programmes are designed around individual needs, abilities, health contexts and goals.",
            "Today, our work extends beyond the traditional boundaries of a yoga class to make well-being practical, accessible and meaningful.",
            "Whether we are supporting an individual building resilience and flexibility, someone recovering from physical challenges, a professional managing workplace stress, an older adult seeking healthy ageing, or an organisation investing in employee wellness, our goal remains the same: to help people create health.",
          ],
          items: ["Person-centred", "Evidence-informed", "Preventive", "Collaborative", "Practical", "Inclusive"],
        },
        {
          id: "why-cfiw",
          title: "Why CFIW",
          text: "More Than a Wellness Centre",
          highlights: ["Our therapeutic approach is designed to complement appropriate medical care, helping individuals restore function, improve quality of life and participate more actively in their own health journey."],
          paragraphs: [
            "At CFIW, we cultivate healthier ways of living through yogic practice.",
            "Whether working with an individual, a healthcare institution, a corporate organisation or a community, our approach remains the same. Our programmes span the full continuum of health.",
            "We understand the person. We build the foundation. We create health.",
            "For many, this means improving mobility, strength, flexibility, balance, fitness and overall well-being through personalised and group wellness programmes.",
            "For others, it means therapeutic yoga and integrative wellness programmes that support musculoskeletal conditions, back and neck concerns, knee health, respiratory conditions, lifestyle-related disorders, healthy ageing and functional recovery.",
            "Our therapeutic approach is designed to complement appropriate medical care, helping individuals restore function, improve quality of life and participate more actively in their own health journey.",
            "Beyond individual care, we partner with organisations, schools, healthcare institutions, cultural centres, NGOs and communities to bring preventive health and integrative wellness into the places where people live, work, learn and connect.",
            "Lasting health is not created through a single class, a single treatment or a single moment. It is created through knowledge, awareness, movement, breath, lifestyle and consistent everyday practice. That is why the Centre for Integrative Wellness exists.",
          ],
        },
        {
          id: "what-is-integrative-wellness",
          title: "What is Integrative Wellness?",
          text: "Better health begins with understanding the whole person, not just one part of the problem.",
          highlights: ["Integration means bringing together the different elements that influence our health and well-being. How we move, breathe, sleep, eat, manage stress and live each day are interconnected and collectively influence how we feel and function.", "For example, recurring neck stiffness may not be only about the neck. An integrative approach may also consider posture, shoulder and spinal movement, strength, breathing, work habits, stress and recovery."],
          paragraphs: [
            "Integration means bringing together the different elements that influence our health and well-being. How we move, breathe, sleep, eat, manage stress and live each day are interconnected and collectively influence how we feel and function.",
            "At CFIW, we bring together traditional Yoga Science with contemporary, evidence-informed health understanding to create practices that are personal, purposeful and relevant to how each individual lives.",
            "Rather than viewing certain areas separately, integrative wellness looks at how they work together within the whole person.",
            "For example, recurring neck stiffness may not be only about the neck. An integrative approach may also consider posture, shoulder and spinal movement, strength, breathing, work habits, stress and recovery.",
            "And where an underlying health condition exists, appropriate medical care becomes part of the wider picture.",
          ],
        },
        {
          id: "what-is-salutogenesis",
          title: "What is Salutogenesis?",
          text: "A shift in thinking, from simply managing illness to actively creating health.",
          highlights: ["Rather than asking only, ‘What causes disease?’, it also asks, ‘What creates health?’", "Our goal is not only to respond when health is compromised, but to help people understand their bodies and build habits that support health throughout life."],
          paragraphs: [
            "Salutogenesis is a health-promoting concept introduced by medical sociologist Aaron Antonovsky.",
            "Rather than asking only, ‘What causes disease?’, it also asks, ‘What creates health?’",
            "This simple question changes how we think about well-being.",
            "For example, someone who spends long hours at a desk may regularly experience stiffness, fatigue and stress. Rather than waiting for these concerns to become more significant, a salutogenic approach asks: What can we strengthen today to support better health tomorrow?",
            "Our goal is not only to respond when health is compromised, but to help people understand their bodies and build habits that support health throughout life.",
            "At CFIW, we approach wellness through movement, breath, mindful living, education and supportive lifestyle practices. We help individuals strengthen their capacity to adapt, recover and maintain well-being.",
          ],
        },
      ]}
    />
  );
}
