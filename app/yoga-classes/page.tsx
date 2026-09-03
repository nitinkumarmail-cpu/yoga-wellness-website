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
      intro="Most people come to us with a simple goal: to get fitter, become more flexible, feel stronger, slow down, or simply feel better in their body."
      blocks={[
        {
          id: "where-your-practice-begins",
          title: "Where Your Practice Begins",
          text: "We listen to that goal, but we do not stop there. At CFIW, we take time to understand how you move, how you breathe, how you recover and what your everyday life looks like.",
          paragraphs: ["Your body does not exist separately from your work, sleep, stress, habits, age or lifestyle. That is where your practice begins."],
        },
        {
          id: "why-cfiw",
          title: "Why CFIW",
          text: "What you want and what your body needs may not always be the same thing.",
          paragraphs: [
            "You may come to us wanting more flexibility, while what you actually need is greater stability. You may want to become fitter, but years of sitting may have already changed the way your body moves. You may simply feel tired, stiff or disconnected from a body that once felt very different.",
            "There is no standard prescription. We understand where you are first, and then decide how we can help you move forward.",
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
          title: "How We Practise",
          text: "Traditional foundations. Personal application. The practice can change as you change.",
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
        {
          id: "the-cfiw-difference",
          title: "The CFIW Difference",
          text: "We do not start by asking, ‘Which yoga style would you like?’ We start with, ‘Tell us about you.’",
          paragraphs: [
            "Where are you today? How does your body feel? What does your everyday life demand from you? Where would you like to be?",
            "Then we build the practice around those answers. Our aim is to help you live better in your body.",
          ],
        },
      ]}
    />
  );
}
