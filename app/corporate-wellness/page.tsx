import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";
export const metadata: Metadata = { title: "Corporate Wellness" };
export default function Page() {
  return (
    <ContentPage
      eyebrow="Corporate wellness"
      title="Healthier people. Stronger teams. Better workplaces."
      intro="CFIW helps organisations create a more human approach to workplace well-being through thoughtful programmes that bring together yoga, therapeutic movement, breathwork, meditation, lifestyle education, emotional well-being and human connection."
      blocks={[
        {
          title: "Partner With CFIW",
          text: "Behind every organisation are people navigating deadlines, prolonged sitting, digital overload, leadership pressure, caregiving, changing responsibilities and personal transitions. We first understand your people, working environment, challenges and wellness objectives, then curate the right combination of programmes.",
          items: [
            "Understand",
            "Curate",
            "Deliver",
            "Review",
          ],
        },
        {
          title: "Movement & Physical Well-being",
          text: "Yoga, mobility, posture, functional movement and breath-based practices designed to address prolonged sitting, physical stiffness and sedentary working patterns.",
          items: ["Yoga & mobility", "Posture awareness", "Functional movement"],
        },
        {
          title: "Stress, Recovery & Resilience",
          text: "Guided practices and facilitated sessions supporting stress awareness, emotional regulation, recovery, mindfulness and greater steadiness during demanding periods.",
        },
        {
          title: "Team Connection & Relationship Well-being",
          text: "Wellness-led experiences that encourage communication, trust, empathy and mindful interaction, helping teams relate beyond roles, hierarchies and deadlines.",
        },
        {
          title: "Leadership & Life-Stage Wellness",
          text: "Discreet, personalised support for leaders and inclusive programmes for working parents, caregivers, midlife professionals, new mothers returning to work and ageing employees, alongside broader programmes for all teams.",
          items: [
            "Executive wellness",
            "Personal and professional balance",
            "Wellness across life stages",
            "Health and lifestyle education",
          ],
        },
        {
          title: "Mindfulness & Wellness Conversations",
          text: "Meditation, breath awareness, guided relaxation and facilitated conversations can create intentional space for recovery, self-awareness, mindful communication and conscious living. Where clinical psychological or specialised mental-health expertise is required, CFIW collaborates with appropriately qualified professionals.",
        },
        {
          title: "Curated Corporate Wellness Retreats",
          text: "Step away. Reset. Reconnect. CFIW creates retreats and off-sites that give teams space for recovery, reflection, connection and renewal.",
          items: [
            "Leadership retreats",
            "Team retreats",
            "Wellness off-sites",
            "Employee reset days",
            "Custom experiences",
          ],
        },
      ]}
    />
  );
}
