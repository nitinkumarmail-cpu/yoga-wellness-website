import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Our Story",
  description: "The philosophy, vision, mission and values behind the Centre for Integrative Wellness.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Our Story"
      title="Health should be created, not simply restored"
      intro="This belief lies at the heart of everything we do."
      blocks={[
        {
          id: "our-philosophy",
          title: "Our Philosophy",
          text: "The Centre for Integrative Wellness was born from years of working with people from diverse walks of life, including corporate professionals, healthcare settings, expatriate communities, educators, senior citizens and individuals simply striving to live healthier, more balanced lives.",
          paragraphs: [
            "Despite their different backgrounds, many shared remarkably similar challenges: long working hours, endless hours at a desk, chronic stress, poor sleep, physical inactivity, persistent aches and pains, and the constant demands of modern life. These pressures often leave little time to care for the one thing that matters most, our health.",
            "Over time, we realised that many of today's health challenges are influenced not only by disease, but also by the way we live. Our daily habits gradually shape our posture, mobility, breathing, musculoskeletal health, emotional well-being and overall physiology, often long before illness becomes visible.",
            "Yet perhaps the greatest gap was something even more fundamental. Most of us spend years understanding our profession, but very little time understanding our own body.",
            "Few people are taught how the human body is designed to move, how the locomotor system supports every step we take, how breathing influences the nervous system, how posture affects pain, or how simple lifestyle choices shape long-term health. Understanding these connections empowers people to care for themselves with greater confidence, awareness and purpose.",
            "This realisation inspired the creation of the Centre for Integrative Wellness, a place where the timeless wisdom of Yoga meets contemporary understanding of anatomy, physiology, movement science and preventive healthcare to make health practical, evidence-informed and relevant for modern life.",
            "Our work extends beyond yoga classes. We believe that meaningful well-being begins with understanding the body as an integrated system where movement, breathing, sleep, nutrition, behaviour and environment are deeply connected. When people understand how their body functions, they make better decisions, move with greater confidence and build healthier habits that last.",
          ],
          quote: "To help people understand their bodies, create better health and live better, every single day.",
        },
        {
          id: "our-approach",
          title: "Our Approach",
          text: "CFIW promotes health by bringing traditional yogic wisdom together with contemporary health understanding. Guided by the principles of salutogenesis, our work focuses on sustainable health, improving quality of life and embracing lifelong well-being, rather than simply managing illness.",
          paragraphs: [
            "In today's fast-paced lifestyles, many individuals experience fatigue, stress, nervous-system overload, postural imbalance, reduced movement and a growing disconnection from their physical and emotional well-being. Increasing stress, irregular routines and high-performance lifestyles can influence overall vitality, including energy levels, sleep quality, emotional balance and hormonal regulation, particularly among individuals navigating demanding professional and personal responsibilities.",
            "Our approach integrates traditional yogic wisdom with therapeutic and lifestyle-oriented wellness practices to support sustainable and mindful living. It helps individuals reconnect with balance, vitality, resilience and overall well-being amid the demands of modern life.",
          ],
        },
        {
          id: "our-vision",
          title: "Our Vision",
          text: "To contribute to a healthier society where well-being is accessible, inclusive and integrated into everyday life.",
          paragraphs: [
            "We envision a future where individuals, organisations and communities are empowered to take an active role in creating and sustaining their health, not simply responding to illness, but understanding and cultivating the conditions that support well-being, resilience and a meaningful life.",
          ],
        },
        {
          id: "our-mission",
          title: "Our Mission",
          text: "To bridge traditional yogic wisdom with contemporary health understanding through evidence-informed yoga, therapeutic movement, breathwork, mindfulness, lifestyle education and preventive wellness.",
          paragraphs: ["We seek to bring wellness into the spaces where people live, work, learn, heal and connect."],
        },
        {
          id: "our-values",
          title: "Our Values",
          text: "The principles that guide our work and every interaction.",
          details: [
            { title: "Prevention First", text: "We believe in supporting health before challenges become more complex." },
            { title: "Compassion", text: "We meet every individual with empathy, respect and understanding." },
            { title: "Integrity", text: "We are committed to responsible, ethical and transparent practice." },
            { title: "Evidence-Informed Practice", text: "We bring traditional knowledge into meaningful dialogue with contemporary health understanding and evolving evidence." },
            { title: "Inclusivity", text: "Wellness should be accessible to people of different ages, abilities and backgrounds." },
            { title: "Lifelong Learning", text: "We continuously learn, reflect and evolve our approach." },
            { title: "Community Well-being", text: "We recognise that individual health and community health are deeply connected." },
            { title: "Respect for Individual Needs", text: "Every person's journey towards well-being is unique." },
          ],
        },
      ]}
    />
  );
}
