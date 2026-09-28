import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Yoga Classes",
  description: "Personalised yoga and wellness classes designed around your body, lifestyle and goals.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Yoga Classes"
      title="Wellness Designed Around You"
      intro="We listen to your goals and take the time to understand how you move, breathe, recover and live, then design a practice around your needs and the goals you want to achieve."
      heroImage="/images/yoga-classes-hero.jpeg"
      heroImageAlt="Shilpi Shikha practising yoga outdoors in a mountain setting"
      blocks={[
        {
          id: "why-cfiw",
          title: "Why Choose Us",
          text: "Because your goal is only the starting point.",
          paragraphs: [
            "You may come to us wanting to become fitter, improve flexibility, build strength or simply feel better in your body. Sometimes, the desire for more flexibility may actually call for greater strength and stability. Stiffness may not be about flexibility alone; it may be influenced by how you move, sit, breathe, work, rest and recover.",
            "That is why, at CFIW, we don’t begin with a standard routine. We begin by understanding you: where you are today, how your body functions and where you want to go.",
            "From there, we design a practice around you, one that responds to your needs and evolves with your progress.",
          ],
          items: ["Listen", "Assess", "Personalise", "Practise", "Progress"],
        },
        {
          id: "what-we-work-on-together",
          title: "What We Work On Together",
          text: "Your programme may have one clear goal or bring several aspects of well-being together.",
          details: [
            { title: "Strength & Fitness", text: "Build a stronger, more capable body, progressively and intelligently." },
            { title: "Mobility & Flexibility", text: "Move with greater freedom, ease and confidence." },
            { title: "Posture & Movement", text: "Become more aware of how your body sits, stands and moves throughout the day." },
            { title: "Balance & Stability", text: "Build the stability and coordination that support confident movement at every age." },
            { title: "Breath & Energy", text: "Understand your breath and learn how to use it more consciously in movement, rest and everyday life." },
            { title: "Stress & Recovery", text: "Learn how to slow down, recover and create space between periods of constant doing." },
            { title: "Meditation & Mindfulness", text: "Develop greater awareness, focus and moments of stillness in everyday life." },
            { title: "Healthy Ageing", text: "Maintain strength, mobility, balance and independence as your body changes." },
            { title: "Everyday Well-being", text: "Wellness should make your life feel better, not just your one-hour session." },
          ],
        },
        {
          id: "how-we-practise",
          title: "Classes We Offer",
          details: [
            { title: "Classical Hatha Yoga", text: "A traditional, structured practice bringing together asana, breath and awareness." },
            { title: "Dynamic Yoga & Flow", text: "A more active practice with emphasis on movement, strength, mobility and endurance." },
            { title: "Pranayam & Dhyaan", text: "Breathwork, meditation and mindfulness practices that develop awareness and support emotional grounding, inner calm, focus, rest and recovery." },
            { title: "Restorative & Relaxation Practices", text: "Supportive practices for days and phases of life when the body needs less doing and more restoring." },
          ],
        },
        {
          id: "your-wellness-your-way",
          title: "Your Wellness, Your Way",
          text: "Life does not always fit neatly around a wellness schedule, so we offer different ways to work with us.",
          details: [
            { title: "One-to-One Private Wellness", text: "For those who value individual attention and a practice built entirely around them." },
            { title: "Couple & Family Wellness", text: "A shared practice, adapted so different people can participate meaningfully together." },
            { title: "Private Small Groups", text: "For friends, families and private communities who want to practise together." },
            { title: "Online Wellness", text: "So travel, work or geography does not have to interrupt your practice." },
          ],
          paragraphs: ["We work with men and women across different ages and stages of life, from busy professionals and people returning to movement to families and individuals thinking seriously about how they want to age."],
        },
      ]}
    />
  );
}
