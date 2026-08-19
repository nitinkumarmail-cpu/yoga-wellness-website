import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { EnquiryForm } from "@/components/forms";
import { site } from "@/lib/site";
export const metadata: Metadata = { title: "Contact" };
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact CFIW"
        title="Begin with a conversation"
        text="Ask a question, explore a personal session or tell us about an organisation you would like to support."
      />
      <section className="section">
        <div className="container contact-grid">
          <aside>
            <p className="eyebrow">Contact details</p>
            <h2 style={{ fontSize: "2rem" }}>We’d be glad to hear from you.</h2>
            <p>
              <b>Phone</b>
              <br />
              {site.phone}
            </p>
            <p>
              <b>Email</b>
              <br />
              {site.email}
            </p>
            <p>
              <b>Location</b>
              <br />
              {site.location}
            </p>
            <Link
              className="btn btn-primary"
              href={`https://wa.me/${site.whatsapp}`}
            >
              Chat on WhatsApp
            </Link>
            <div
              className="card"
              style={{
                marginTop: 28,
                minHeight: 180,
                display: "grid",
                placeItems: "center",
                textAlign: "center",
              }}
            >
              Google Maps placeholder
              <br />
              <small>Added when the location is confirmed</small>
            </div>
          </aside>
          <div>
            <h2 className="title">Send an enquiry</h2>
            <EnquiryForm kind="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
