import Link from "next/link";
import { site } from "@/lib/site";
const cols = [
  {
    h: "About",
    l: [
      ["Our story", "/about"],
      ["Our approach", "/about#approach"],
      ["Founder", "/founder"],
    ],
  },
  {
    h: "Personal wellness",
    l: [
      ["Personal yoga", "/personal-wellness"],
      ["Programmes", "/programmes"],
      ["Meditation", "/programmes#meditation"],
      ["Breathwork", "/programmes#breathwork"],
    ],
  },
  {
    h: "Collaborate",
    l: [
      ["Corporate wellness", "/corporate-wellness"],
      ["Institutions", "/collaborate#institutions"],
      ["Partnerships", "/collaborate#process"],
    ],
  },
  {
    h: "Resources",
    l: [
      ["Articles", "/resources"],
      ["Guided practices", "/resources#practices"],
      ["Workshops", "/events"],
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
          <p className="footer-copy">
            A considered space for personalised practice, professional
            collaboration and sustainable well-being.
          </p>
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
