import Link from "next/link";
import { site } from "@/lib/site";
const cols = [
  {
    h: "About",
    l: [
      ["Who We Are", "/what-is-cfiw#who-we-are"],
      ["Why CFIW", "/what-is-cfiw#why-cfiw"],
      ["Our Philosophy", "/our-work#our-philosophy"],
      ["Our Approach", "/our-work#our-approach"],
    ],
  },
  {
    h: "Programs",
    l: [
      ["Yoga Classes", "/yoga-classes"],
      ["Therapeutic Yoga", "/therapeutic-wellness"],
      ["Corporate Wellness", "/corporate-wellness"],
      ["Wellness Gallery", "/gallery"],
    ],
  },
  {
    h: "Collaborate",
    l: [
      ["Hospitals & Healthcare", "/healthcare-wellness"],
      ["Schools & Educational Institutions", "/schools-education-institutions"],
      ["Cultural Centres", "/cultural-centres"],
      ["Flagship Initiative", "/flagship-initiatives/project-saanidhya"],
    ],
  },
  {
    h: "Resources",
    l: [
      ["Founder", "/founder#meet-our-founder"],
      ["Workshops", "/events"],
      ["Contact Us", `tel:${site.phone.replace(/\s/g, "")}`],
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
