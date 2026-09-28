import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA, PageHero } from "@/components/ui";
import { GalleryLightbox } from "@/components/gallery-lightbox";
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
          </div>

          <GalleryLightbox items={galleryItems} />

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
