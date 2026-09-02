import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentPage } from "@/components/content-page";
export const metadata: Metadata = { title: "Project SAANIDHYA" };
export default function Page() {
  return (
    <>
      <ContentPage
        eyebrow="CFIW flagship initiative"
        title="Project SAANIDHYA"
        intro="A little more care. A little more connection. SAANIDHYA is CFIW's social wellness initiative for elders, particularly those living in old-age homes and care communities."
        blocks={[
          {
            title: "Overview",
            text: "As we grow older, changes in mobility, strength, balance and lifestyle-related health may make everyday activities more difficult. Well-being is also shaped by time, conversation, participation and a sense of connection. SAANIDHYA creates welcoming spaces where elders can move, breathe and engage together.",
          },
          {
            title: "Our First Commitment: 500 Elders",
            text: "Our first commitment is to reach, move and connect with 500 elders, one person, one visit and one community at a time. This is a forward-looking programme goal, not a claim of people already reached.",
          },
          {
            title: "Who It Is For",
            text: "Older adults in care homes and community settings, along with caregivers and partner institutions interested in inclusive, respectfully adapted wellness experiences.",
          },
          {
            title: "Activities",
            text: "Every visit is shaped with delivery partners and participant needs. The intention is to help elders continue doing what they can for themselves, remain involved in everyday life and experience the warmth of human connection.",
            items: [
              "Gentle yoga",
              "Therapeutic movement",
              "Breath practices",
              "Relaxation",
              "Lifestyle awareness",
              "Conversation & companionship",
            ],
          },
          {
            title: "Impact Approach",
            text: "Participation, feedback and programme learning will be recorded responsibly. Verified reach and outcomes will be published after delivery, with no invented impact claims.",
          },
        ]}
      />
      <section className="section rule">
        <div className="container">
          <h2 className="title">Gallery</h2>
          <div className="grid3">
            {[1, 2, 3].map((n) => (
              <div className="image-wrap" key={n}>
                <Image
                  src="/images/hero-wellness.png"
                  alt="Project SAANIDHYA gallery placeholder"
                  fill
                  sizes="33vw"
                  style={{ objectPosition: n === 2 ? "70% center" : "center" }}
                />
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ marginTop: 28 }}
          >
            Explore a collaboration
          </Link>
        </div>
      </section>
    </>
  );
}
