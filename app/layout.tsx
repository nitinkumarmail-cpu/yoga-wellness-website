import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { site } from "@/lib/site";
const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
  display: "swap",
});
const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Personalised Wellness`,
    template: `%s | CFIW`,
  },
  description: site.description,
  openGraph: {
    title: `${site.fullName} | Creating Health. Living Better.`,
    description: site.description,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "CFIW, Creating Health. Living Better." }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Creating Health. Living Better.`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.fullName,
    description: site.description,
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <Link href="/book" className="btn btn-primary mobile-book">
          Book a session
        </Link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
