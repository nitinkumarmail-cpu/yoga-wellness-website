import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA, PageHero } from "@/components/ui";
import { galleryItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wellness Gallery",
  description:
    "Explore personal, workplace, community and educational wellness experiences at CFIW.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Wellness in Practice"
        text="Moments of movement, attention, learning and connection across the communities and organisations we serve."
      />

      <section className="section gallery-page">
        <div className="container">
          <div className="gallery-intro">
            <div>
              <p className="eyebrow">CFIW wellness gallery</p>
              <h2 className="title">Creating health, together</h2>
            </div>
            <p className="lede">
              Our programmes are shaped around people and place. This gallery
              offers a glimpse of the calm, inclusive and practical experiences
              we seek to create.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <figure className={"gallery-item gallery-item-" + (index + 1)} key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw"
                />
              </figure>
            ))}
          </div>

          <div className="gallery-contact">
            <div>
              <p className="eyebrow">Bring wellness to your community</p>
              <h2>Plan an experience with CFIW</h2>
            </div>
            <Link className="btn btn-primary" href="/contact">
              Start a conversation <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
