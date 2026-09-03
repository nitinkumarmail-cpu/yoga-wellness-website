import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description: "Human-centred workplace wellness programmes for healthier people, stronger teams and better workplaces.",
};

export default function Page() {
  return (
    <ContentPage
      eyebrow="Corporate Wellness"
      title="Well-being at the Heart of Work"
      intro="Behind every organisation are people navigating much more than their professional roles. Deadlines, prolonged sitting, digital overload, leadership pressure, changing responsibilities, relationships, parenthood, caregiving and personal transitions can all influence how people move, think, communicate, recover and show up at work."
      blocks={[
        {
          id: "partner-with-cfiw",
          title: "Partner With CFIW",
          text: "At the Centre for Integrative Wellness, we help organisations create a more human approach to workplace well-being. We bring together yoga, therapeutic movement, breathwork, meditation, lifestyle education, emotional well-being and human connection.",
          paragraphs: [
            "Our programmes can be delivered as individual interventions or curated into longer-term organisational wellness programmes.",
            "We first understand the organisation, its people, working environment, challenges and wellness objectives, and then curate the appropriate combination of programmes. This allows CFIW to support needs ranging from a leadership session or employee workshop to an ongoing wellness programme or fully curated corporate retreat.",
          ],
          items: ["Understand", "Curate", "Deliver", "Review"],
        },
        {
          id: "corporate-programmes",
          title: "Our Corporate Wellness Programmes",
          text: "Employee Wellness | Executive Wellness | Movement & Yoga | Stress & Recovery | Emotional Well-being | Team Connection | Life-Stage Wellness | Health Education | Team Building | Corporate Retreats",
          details: [
            { title: "Workplace Movement & Physical Well-being", text: "Yoga, mobility, posture, functional movement and breath-based practices designed to counter prolonged sitting, physical stiffness and sedentary working patterns." },
            { title: "Stress, Emotional Well-being & Resilience", text: "Guided practices and facilitated sessions supporting stress awareness, emotional regulation, recovery, mindfulness and the ability to navigate demanding periods with greater steadiness." },
            { title: "Team Connection & Relationship Well-being", text: "Wellness-led experiences that encourage communication, trust, empathy, connection and mindful interaction, helping teams relate beyond roles, hierarchies and deadlines." },
            { title: "Personal & Professional Balance", text: "Sessions exploring boundaries, recovery, self-awareness, energy management and the relationship between professional demands and personal well-being." },
            { title: "Executive & Leadership Wellness", text: "Discreet, personalised programmes for leaders and high-responsibility professionals, with emphasis on movement, stress regulation, recovery, sustainable routines and overall well-being." },
            { title: "Wellness Across Life Stages", text: "Thoughtfully curated support for working parents, new mothers returning to work, women navigating hormonal life stages, caregivers, midlife professionals and ageing employees, alongside broader programmes for all teams." },
            { title: "Health & Lifestyle Education", text: "Practical sessions around sleep, movement, breath, recovery, healthy routines, stress awareness and sustainable lifestyle habits." },
            { title: "Mindfulness, Meditation & Restorative Experiences", text: "Meditation, breath awareness, guided relaxation and restorative practices that create intentional moments of pause and recovery within demanding professional environments." },
          ],
        },
        {
          id: "wellness-conversations",
          title: "Wellness Conversations & Experiential Sessions",
          text: "Sometimes people need more than movement. CFIW facilitates thoughtful sessions on stress, self-awareness, emotional resilience, relationships, mindful communication, work-life integration, personal boundaries, recovery and conscious living.",
          paragraphs: ["Where a programme requires clinical psychological or specialised mental-health expertise, CFIW structures the programme in collaboration with appropriately qualified professionals."],
        },
        {
          id: "corporate-retreats",
          title: "Curated Corporate Wellness Retreats",
          quote: "Step Away. Reset. Reconnect.",
          text: "CFIW curates wellness retreats that give organisations the opportunity to step outside everyday working environments and create space for recovery, reflection, connection and renewal.",
          items: ["Leadership Retreats", "Team Retreats", "Wellness Off-sites", "Employee Reset Days", "Custom Experiences"],
        },
      ]}
    />
  );
}
