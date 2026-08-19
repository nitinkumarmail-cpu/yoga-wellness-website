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
        intro="A developing healthy-ageing initiative centred on movement, breath, belonging and meaningful participation."
        blocks={[
          {
            title: "Overview",
            text: "Project SAANIDHYA creates welcoming spaces where older adults can explore appropriate movement and mindful practices alongside social connection.",
          },
          {
            title: "Objective",
            text: "To support opportunities for regular movement, awareness, confidence and community participation without framing ageing as a problem to be fixed.",
          },
          {
            title: "Who It Is For",
            text: "Older adults, caregivers, community groups and partner institutions interested in inclusive, respectfully adapted wellness experiences.",
          },
          {
            title: "Activities",
            text: "Final activities will be shaped with delivery partners and participant needs.",
            items: [
              "Gentle movement",
              "Breath awareness",
              "Guided relaxation",
              "Wellness conversations",
              "Community connection",
            ],
          },
          {
            title: "Impact Approach",
            text: "The initiative will use responsible participation feedback and programme learning rather than invented impact claims. Verified outcomes will be added after delivery.",
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
