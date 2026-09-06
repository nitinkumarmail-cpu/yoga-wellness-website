import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  HeartHandshake,
  Sparkles,
  UserRound,
} from "lucide-react";
import { CTA, ImageCard, SectionHeading } from "@/components/ui";
import { galleryItems } from "@/lib/site";

const work = [
  {
    title: "Personal Wellness",
    text: "Personalised pathways that support movement, strength, balance and healthier everyday living.",
    href: "/yoga-classes",
    image: "/images/personal-yoga.jpeg",
  },
  {
    title: "Corporate Wellness",
    text: "Human, adaptable programmes for healthier people, stronger teams and better workplaces.",
    href: "/corporate-wellness",
    image: "/images/corporate-yoga.jpeg",
  },
  {
    title: "Hospitals & Healthcare",
    text: "Responsible yoga and wellness collaborations that complement professional care.",
    href: "/healthcare-wellness",
    image: "/images/healthcare-guidance.jpeg",
  },
  {
    title: "Schools & Educational Institutions",
    text: "Age-aware wellness experiences for the places where young people learn and grow.",
    href: "/schools-education-institutions",
    image: "/images/schools-wellness.jpeg",
  },
  {
    title: "Cultural Centres",
    text: "Authentic, accessible wellness experiences that encourage cultural exchange and human connection.",
    href: "/cultural-centres",
    image: "/images/cultural-wellness.jpeg",
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
            <p className="eyebrow hero-welcome">Welcome to CFIW</p>
            <h1 className="display home-title">Centre for Integrative Wellness</h1>
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
              <Link className="btn btn-primary" href="/founder">Meet our Founder</Link>
              <Link className="btn" href="/programmes">Explore programmes</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/founder-welcome.jpeg"
              alt="CFIW founder Shilpi Shikha seated in a welcoming yoga posture"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <div className="benefits">
        <div className="benefit"><UserRound /> Personalised programmes</div>
        <div className="benefit"><Activity /> Evidence-informed practice</div>
        <div className="benefit"><Sparkles /> Mindful movement</div>
        <div className="benefit"><HeartHandshake /> Holistic well-being</div>
      </div>

      <section className="section">
        <div className="container">
          <div className="work-heading">
            <h2 className="title">Work with us</h2>
            <p className="work-kicker">A platform for Creating Health to Live Better</p>
            <p className="lede">
              We create personalised pathways that integrate movement, breath,
              education and lifestyle to support prevention, restore function
              and promote lifelong well-being.
            </p>
          </div>
          <div className="work-grid" style={{ marginTop: 44 }}>
            {work.map((item) => <ImageCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container">
          <SectionHeading center eyebrow="A thoughtful beginning" title="Every journey begins with understanding" />
          <div className="steps" style={{ marginTop: 40 }}>
            {[
              ["01", "Understand", "Listen to the person, organisation or community."],
              ["02", "Assess", "Explore movement, lifestyle, function and needs."],
              ["03", "Personalise", "Shape the programme around ability and context."],
              ["04", "Guide", "Practise with education, care and clear options."],
              ["05", "Create Health", "Build awareness and habits for lifelong well-being."],
            ].map(([number, title, text]) => (
              <div className="step" key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p className="lede" style={{ fontSize: ".92rem" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial band tradition-section">
        <div className="editorial-image">
          <Image src="/images/tradition-temple.jpeg" alt="A traditional yoga ashram shrine" fill sizes="50vw" />
        </div>
        <div className="editorial-copy">
          <p className="eyebrow" style={{ color: "#bfd2c3" }}>Our philosophy</p>
          <h2 className="title">Rooted in tradition. Guided by science.</h2>
          <p className="lede">
            We bring enduring yogic principles into conversation with anatomy,
            physiology, movement science, behaviour and modern life. The result
            is person-centred, preventive, practical and never one-size-fits-all.
          </p>
          <Link href="/our-work#our-philosophy" className="btn btn-light" style={{ alignSelf: "flex-start" }}>
            Our philosophy <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <section className="section personal-feature">
        <div className="container">
          <div className="editorial personal-feature-top">
            <div className="editorial-copy">
              <p className="eyebrow">Personal Wellness</p>
              <h2 className="title">Personalised Attention. Thoughtful Guidance.</h2>
              <p className="lede">
                CFIW&apos;s teaching is built on listening first, understanding your
                context before shaping a practice that feels useful, sustainable
                and genuinely yours.
              </p>
              <Link className="btn btn-accent" href="/yoga-classes">
                Explore personal wellness <ArrowRight size={15} />
              </Link>
            </div>
            <div className="editorial-image">
              <Image
                src="/images/corporate-wellness.png"
                alt="A wellness guide leading an accessible group practice"
                fill
                sizes="50vw"
              />
            </div>
          </div>
          <div className="grid3 personal-benefits">
            {["Individual attention", "Strength & fitness", "Mobility & flexibility", "Breath & energy", "Stress & recovery", "Healthy ageing"].map((item) => (
              <div className="card" key={item}><h3>{item}</h3></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band corporate-home">
        <div className="container corporate-home-panel">
          <div className="editorial-copy">
            <p className="eyebrow" style={{ color: "#bfd2c3" }}>Wellness at work</p>
            <h2 className="title corporate-title">Healthier people. Stronger teams. Better workplaces.</h2>
            <p className="lede">
              Thoughtful wellness experiences that bring together yoga,
              therapeutic movement, breathwork, meditation, lifestyle education
              and human connection.
            </p>
            <Link href="/corporate-wellness" className="btn btn-saffron" style={{ alignSelf: "flex-start" }}>
              Explore corporate wellness
            </Link>
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

      <section className="section gallery-preview-section rule">
        <div className="container">
          <div className="gallery-preview-heading">
            <h2 className="title">Explore Galleries</h2>
            <Link className="btn btn-primary" href="/gallery">
              View the full gallery <ArrowRight size={15} />
            </Link>
          </div>
          <div className="gallery-preview-grid" style={{ marginTop: 35 }}>
            {galleryItems.slice(0, 4).map((item, index) => (
              <div className={`gallery-preview-card gallery-preview-${index + 1}`} key={item.src}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
