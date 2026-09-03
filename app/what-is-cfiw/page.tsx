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
          text: "CFIW brings together traditional yogic knowledge and contemporary approaches to health and well-being to support individuals, organisations and communities through personal wellness, therapeutic wellness, education and structured institutional programmes. CFIW is building a more preventive, personalised and integrative approach to everyday well-being.",
          paragraphs: [
            "Guided by the principles of salutogenesis, our work begins with a different question. We ask not only what causes illness, but also what creates health.",
            "Our approach is person-centred, collaborative and practical. Every individual is different, so our integrative wellness programmes are designed around individual needs, abilities, health contexts and goals.",
            "Today, our work extends beyond the traditional boundaries of a yoga class to make well-being practical, accessible and meaningful.",
            "Whether we are supporting an individual building resilience and flexibility, someone recovering from physical challenges, a professional managing workplace stress, an older adult seeking healthy ageing, or an organisation investing in employee wellness, our goal remains the same: to help people create health.",
          ],
          items: ["Person-centred", "Evidence-informed", "Preventive", "Collaborative", "Practical", "Inclusive"],
        },
        {
          id: "more-than-a-wellness-centre",
          title: "More Than a Wellness Centre",
          text: "At CFIW, we cultivate healthier ways of living through yogic practice.",
          paragraphs: [
            "Whether working with an individual, a healthcare institution, a corporate organisation or a community, our approach remains the same. Our programmes span the full continuum of health.",
            "We understand the person. We build the foundation. We create health.",
            "For many, this means improving mobility, strength, flexibility, balance, fitness and overall well-being through personalised and group wellness programmes.",
            "For others, it means therapeutic yoga and integrative wellness programmes that support musculoskeletal conditions, back and neck concerns, knee health, respiratory conditions, lifestyle-related disorders, healthy ageing and functional recovery. Our therapeutic approach is designed to complement appropriate medical care, helping individuals restore function, improve quality of life and participate more actively in their own health journey.",
            "Beyond individual care, we partner with organisations, schools, healthcare institutions, cultural centres, NGOs and communities to bring preventive health and integrative wellness into the places where people live, work, learn and connect.",
            "Lasting health is not created through a single class, a single treatment or a single moment. It is created through knowledge, awareness, movement, breath, lifestyle and consistent everyday practice. That is why the Centre for Integrative Wellness exists.",
          ],
        },
        {
          id: "what-is-integrative-wellness",
          title: "What is Integrative Wellness?",
          text: "Integrative wellness is a person-centred, evidence-informed approach to health that recognises health as the result of the dynamic interaction between biological, psychological, behavioural, social and environmental factors.",
          paragraphs: [
            "Rather than focusing on a disease or symptom in isolation, it integrates conventional healthcare with evidence-informed lifestyle, movement and mind-body practices to promote prevention, support recovery, optimise function and improve overall quality of life.",
            "At the Centre for Integrative Wellness, this approach combines contemporary health science with the timeless principles of Yoga Science to help individuals understand their bodies, build healthier habits and actively participate in creating lifelong health.",
          ],
        },
        {
          id: "what-is-salutogenesis",
          title: "What is Salutogenesis?",
          text: "Salutogenesis is a health-promoting philosophy introduced by medical sociologist Aaron Antonovsky.",
          quote: "Rather than asking only, ‘What causes disease?’, salutogenesis asks, ‘What creates health?’",
          paragraphs: [
            "This simple question shapes the way we approach wellness.",
            "At the Centre for Integrative Wellness, we focus on strengthening the individual's capacity to adapt, recover and thrive through movement, breath, mindful living, education and supportive environments.",
            "Our goal is not simply to help people manage illness. Our goal is to help people understand their body and cultivate habits that support health.",
          ],
        },
      ]}
    />
  );
}
