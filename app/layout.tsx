import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { site } from "@/lib/site";
const serif = Playfair_Display({
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
    siteName: site.fullName,
    locale: "en_IN",
    type: "website",
    images: [{ url: site.sharingImage, width: 1200, height: 630, type: "image/jpeg", alt: "Centre for Integrative Wellness. Creating Health. Living Better. Founder Shilpi Shikha Borah." }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} | Creating Health. Living Better.`,
    description: site.description,
    images: [site.sharingImage],
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
