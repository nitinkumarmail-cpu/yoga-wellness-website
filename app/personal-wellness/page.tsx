import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
import { FAQ } from "@/components/faq";
import { programmes } from "@/lib/site";
export const metadata: Metadata = { title: "Personal Wellness" };
export default function Page() {
  return (
    <>
      <ContentPage
        eyebrow="Personal wellness"
        title="Wellness designed around you"
        intro="You may want to feel fitter, stronger, more flexible, calmer or simply better in your body. We listen to that goal, then take time to understand how you move, breathe, recover and live each day."
        blocks={[
          {
            title: "Why CFIW",
            text: "What you want and what your body needs may not always be the same. Greater flexibility may require more stability. A fitness goal may need to account for years of sitting, changing routines or reduced movement confidence. There is no standard prescription. We understand where you are first, then decide how we can help you move forward.",
            items: [
              "Listen",
              "Assess",
              "Personalise",
              "Practise",
              "Progress",
            ],
          },
          {
            title: "What Can We Work On Together?",
            text: "Your programme may have one clear goal or bring several aspects of well-being together.",
            items: [
              "Strength & fitness",
              "Mobility & flexibility",
              "Posture & movement",
              "Balance & stability",
              "Breath & energy",
              "Stress & recovery",
              "Meditation & mindfulness",
              "Healthy ageing",
              "Everyday well-being",
            ],
          },
          {
            title: "How We Practise",
            text: "Traditional foundations meet personal application. Your practice may bring together Classical Hatha Yoga, dynamic movement and flow, pranayama and dhyaan, restorative practices, relaxation and quiet observation. The practice can change as you change.",
            items: [
              "Classical Hatha Yoga",
              "Dynamic Yoga & Flow",
              "Pranayama & Dhyaan",
              "Restorative & Relaxation Practices",
            ],
          },
          {
            title: "Your Wellness, Your Way",
            text: "Life does not always fit neatly around a wellness schedule, so CFIW offers flexible ways to practise across different ages and stages of life.",
            items: [
              "One-to-one private wellness",
              "Couple & family wellness",
              "Private small groups",
              "Online wellness",
            ],
          },
          {
            title: "The CFIW Difference",
            text: "We do not begin by asking which yoga style you want. We begin with you: where you are today, how your body feels, what everyday life demands, and where you would like to be. Then we build the practice around those answers. Our aim is to help you live better in your body.",
            items: [
              "Better movement",
              "Better fitness",
              "Better health awareness",
            ],
          },
        ]}
      />
      <section className="section">
        <div className="container">
          <h2 className="title">Programs</h2>
          <div className="grid3">
            {programmes.map((p) => (
              <article className="card" key={p.slug}>
                <p className="eyebrow">{p.tag}</p>
                <h3>{p.title}</h3>
                <p className="lede" style={{ fontSize: ".94rem" }}>
                  {p.text}
                </p>
                <Link className="text-link" href={`/programmes#${p.slug}`}>
                  Explore programme
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section rule">
        <div className="container">
          <h2 className="title">Frequently asked questions</h2>
          <FAQ />
        </div>
      </section>
    </>
  );
}
