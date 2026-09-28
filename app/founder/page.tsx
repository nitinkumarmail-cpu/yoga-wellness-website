import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "Shilpi Shikha Borah | Founder",
  description: "Meet Shilpi Shikha Borah, founder of the Centre for Integrative Wellness, and explore the journey behind CFIW.",
};

export default function Page() {
  return <>
    <section className="section founder-introduction" id="meet-our-founder">
      <div className="container founder-intro-copy">
        <p className="eyebrow">Founder, Centre for Integrative Wellness (CFIW)</p>
        <h1 className="display">Shilpi Shikha Borah</h1>
        <p className="lede">Entrepreneur and wellness professional whose work brings together traditional Yogic knowledge, therapeutic understanding and contemporary approaches to health and well-being.</p>
        <p className="lede">Her approach is rooted in understanding the individual first, because meaningful wellness begins with the person, not simply the practice.</p>
        <div className="founder-new-portrait">
          <Image src="/images/founder-profile-sep27.jpeg" alt="Shilpi Shikha Borah seated at her desk in a clinical setting" width={1037} height={1379} priority sizes="(max-width: 800px) 100vw, 640px" />
        </div>
        <div className="founder-journey">
          <h2 className="title">The Journey Behind CFIW</h2>
          <p className="lede">From a 14-year corporate career and a personal journey with health to traditional Yoga study, therapeutic education and clinical exposure, these are the experiences that shaped Shilpi’s approach to wellness and led to the creation of CFIW.</p>
          <a href="/documents/cfiw-founder-profile.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View founder profile <span aria-hidden="true">↗</span></a>
          <p className="profile-file-note">Open full profile · PDF</p>
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
