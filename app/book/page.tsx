import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { EnquiryForm } from "@/components/forms";
export const metadata: Metadata = { title: "Book Your Session" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Personal booking"
        title="Tell us how you’d like to begin"
        text="Share a little about the kind of support, timing and format you are looking for. We’ll continue the conversation in WhatsApp."
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <EnquiryForm kind="booking" />
        </div>
      </section>
    </>
  );
}
