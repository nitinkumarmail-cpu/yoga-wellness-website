import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  HeartHandshake,
  Sparkles,
  UserRound,
  ArrowRight,
} from "lucide-react";
import { CTA, ImageCard, SectionHeading } from "@/components/ui";
import { resources } from "@/lib/site";
const work = [
  {
    title: "Personal Wellness",
    text: "Personalised pathways that support movement, strength, balance and healthier everyday living.",
    href: "/personal-wellness",
  },
  {
    title: "Corporate Wellness",
    text: "Human, adaptable programmes for healthier people, stronger teams and better workplaces.",
    href: "/corporate-wellness",
    image: "/images/corporate-wellness.png",
  },
  {
    title: "Hospitals & Healthcare",
    text: "Responsible yoga and wellness collaborations that complement professional care.",
    href: "/healthcare-wellness",
    image: "/images/corporate-wellness.png",
  },
  {
    title: "Project SAANIDHYA",
    text: "A little more care and connection through movement, breath and companionship for elders.",
    href: "/flagship-initiatives/project-saanidhya",
  },
];
const values = [
  ["Prevention first", "Support health before challenges become more complex."],
  ["Compassion", "Meet every person with empathy, respect and understanding."],
  ["Integrity", "Practise responsibly, ethically and transparently."],
  ["Evidence-informed", "Connect traditional knowledge with contemporary understanding."],
  ["Inclusivity", "Welcome different ages, abilities and backgrounds."],
  ["Lifelong learning", "Learn, reflect and continuously evolve."],
  ["Community well-being", "Recognise that personal and shared health are connected."],
  ["Individual needs", "Respect the uniqueness of every wellness journey."],
] as const;
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Creating health. Living better.</p>
            <h1 className="display">
              Welcome to the Centre for Integrative Wellness.
            </h1>
            <p className="lede">
              CFIW is an emerging wellness organisation founded on the belief
              that health should be actively cultivated.
            </p>
            <p className="lede">
              We believe that true health extends beyond the absence of disease.
              It is the ability to move with confidence, breathe with awareness,
              think with clarity, and live with purpose.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/book">
                Book your session
              </Link>
              <Link className="btn" href="/programmes">
                Explore programmes
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/hero-wellness.png"
              alt="A woman practising a calm seated meditation in natural morning light"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>
      <div className="benefits">
        <div className="benefit">
          <UserRound /> Personalised programmes
        </div>
        <div className="benefit">
          <Activity /> Evidence-informed practice
        </div>
        <div className="benefit">
          <Sparkles /> Mindful movement
        </div>
        <div className="benefit">
          <HeartHandshake /> Holistic well-being
        </div>
      </div>
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Creating health together"
            title="Work with us"
            text="A platform for creating health to live better, with personalised wellness and collaborative programmes for individuals, communities and organisations."
          />
          <div className="work-grid" style={{ marginTop: 44 }}>
            {work.map((x) => (
              <ImageCard key={x.title} {...x} />
            ))}
          </div>
        </div>
      </section>
      <section className="section values-band">
        <div className="container">
          <SectionHeading
            eyebrow="What guides us"
            title="Our values"
            text="Care, individual dignity, thoughtful evidence and sustainable progress guide every interaction."
          />
          <div className="values-grid" style={{ marginTop: 38 }}>
            {values.map(([title, text]) => (
              <article className="value-card" key={title}>
                <span aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial band">
        <div className="editorial-image">
          <Image
            src="/images/hero-wellness.png"
            alt="Quiet personal meditation practice"
            fill
            sizes="50vw"
          />
        </div>
        <div className="editorial-copy">
          <p className="eyebrow" style={{ color: "#bfd2c3" }}>
            Our philosophy
          </p>
          <h2 className="title">Rooted in tradition. Guided by science.</h2>
          <p className="lede">
            We bring enduring yogic principles into conversation with anatomy,
            physiology, movement science, behaviour and modern life. The result
            is person-centred, preventive, practical and never one-size-fits-all.
          </p>
          <Link
            href="/about#our-approach"
            className="btn btn-light"
            style={{ alignSelf: "flex-start" }}
          >
            Our approach <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container editorial" style={{ minHeight: 500 }}>
          <div
            className="editorial-copy"
            style={{ background: "var(--paper)" }}
          >
            <p className="eyebrow">Meet your instructor</p>
            <h2 className="title">
              Guidance with attention, care and clarity.
            </h2>
            <p className="lede">
              CFIW’s teaching is built on listening first, understanding your
              context before shaping a practice that feels useful, sustainable
              and genuinely yours.
            </p>
            <Link className="text-link" href="/founder">
              Meet your instructor <ArrowRight size={15} />
            </Link>
          </div>
          <div className="editorial-image">
            <Image
              src="/images/corporate-wellness.png"
              alt="Wellness instructor guiding an accessible group practice"
              fill
              sizes="50vw"
            />
          </div>
        </div>
      </section>
      <section className="section" style={{ background: "var(--sage)" }}>
        <div className="container">
          <SectionHeading
            eyebrow="Personal wellness"
            title="Yoga designed around you"
            text="Your body does not exist separately from your work, sleep, stress, habits, age or lifestyle. We understand where you are, then build the practice around you."
          />
          <div className="grid3" style={{ marginTop: 35 }}>
            {[
              "Individual attention",
              "Strength & fitness",
              "Mobility & flexibility",
              "Breath & energy",
              "Stress & recovery",
              "Healthy ageing",
            ].map((x) => (
              <div className="card" key={x}>
                <h3 style={{ fontSize: "1.35rem" }}>{x}</h3>
              </div>
            ))}
          </div>
          <Link
            className="btn btn-primary"
            style={{ marginTop: 28 }}
            href="/personal-wellness"
          >
            Explore personal yoga
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            eyebrow="A thoughtful beginning"
            title="Every journey begins with understanding"
          />
          <div className="steps" style={{ marginTop: 40 }}>
            {[
              ["01", "Understand", "Listen to the person, organisation or community."],
              ["02", "Assess", "Explore movement, lifestyle, function and needs."],
              ["03", "Personalise", "Shape the programme around ability and context."],
              ["04", "Guide", "Practise with education, care and clear options."],
              ["05", "Create Health", "Build awareness and habits for lifelong well-being."],
            ].map(([n, t, d]) => (
              <div className="step" key={n}>
                <b>{n}</b>
                <h3>{t}</h3>
                <p className="lede" style={{ fontSize: ".92rem" }}>
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section band">
        <div className="container editorial" style={{ minHeight: 450 }}>
          <div className="editorial-image">
            <Image
              src="/images/corporate-wellness.png"
              alt="Colleagues taking part in a gentle workplace wellness session"
              fill
              sizes="50vw"
            />
          </div>
          <div className="editorial-copy">
            <p className="eyebrow" style={{ color: "#bfd2c3" }}>
              Wellness at work
            </p>
            <h2 className="title">Healthier people. Stronger teams. Better workplaces.</h2>
            <p className="lede">
              Thoughtful wellness experiences that bring together yoga,
              therapeutic movement, breathwork, meditation, lifestyle education
              and human connection.
            </p>
            <Link
              href="/corporate-wellness"
              className="btn btn-light"
              style={{ alignSelf: "flex-start" }}
            >
              Explore corporate wellness
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ textAlign: "center" }}>
            Sample testimonial
          </p>
          <blockquote className="quote">
            “The best practice is not the most impressive one. It is the one you
            can return to with curiosity, steadiness and care.”
          </blockquote>
          <p style={{ textAlign: "center", color: "var(--muted)" }}>
            Sample content, to be replaced with a verified client reflection
          </p>
        </div>
      </section>
      <section className="section rule">
        <div className="container">
          <SectionHeading
            eyebrow="Knowledge for everyday life"
            title="Explore our resources"
          />
          <div className="grid3" style={{ marginTop: 35 }}>
            {resources.map((r) => (
              <article className="card" key={r.title}>
                <p className="eyebrow">
                  {r.category} · {r.time}
                </p>
                <h3 style={{ fontSize: "1.7rem" }}>{r.title}</h3>
                <p className="lede" style={{ fontSize: ".94rem" }}>
                  {r.text}
                </p>
                <Link className="text-link" href="/resources">
                  Read article <ArrowRight size={15} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
