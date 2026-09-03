import Link from "next/link";
import { site } from "@/lib/site";
const cols = [
  {
    h: "About",
    l: [
      ["Who We Are", "/what-is-cfiw#who-we-are"],
      ["Why CFIW", "/what-is-cfiw#more-than-a-wellness-centre"],
      ["Integrative Wellness", "/what-is-cfiw#what-is-integrative-wellness"],
      ["Salutogenesis", "/what-is-cfiw#what-is-salutogenesis"],
    ],
  },
  {
    h: "Programs",
    l: [
      ["Yoga Wellness", "/yoga-classes"],
      ["Therapeutic Wellness", "/therapeutic-wellness"],
      ["Yoga Therapy", "/therapeutic-wellness#therapeutic-yoga-clinical-wellness"],
      ["Corporate Wellness", "/corporate-wellness"],
      ["Courses", "/events"],
    ],
  },
  {
    h: "Collaborate",
    l: [
      ["Hospitals & Healthcare", "/healthcare-wellness"],
      ["School & Education Institutions", "/schools-education-institutions"],
      ["Cultural Centres", "/cultural-centres"],
      ["Flagship Initiative", "/flagship-initiatives/project-saanidhya"],
    ],
  },
  {
    h: "Meet Founder",
    l: [
      ["Founder", "/founder#meet-the-founder"],
      ["Qualifications", "/founder#qualifications-certifications"],
      ["Areas of Expertise", "/founder#areas-of-expertise"],
      ["Teaching Philosophy", "/founder#teaching-philosophy"],
    ],
  },
];
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <b className="footer-logo">CFIW</b>
          <p>{site.fullName}</p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <h3>{c.h}</h3>
            {c.l.map(([l, h]) => (
              <Link key={h} href={h}>
                {l}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CFIW. All rights reserved.</span>
        <span>
          <Link href="/contact">Privacy</Link> ·{" "}
          <Link href="/contact">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
