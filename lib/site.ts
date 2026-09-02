export const site = {
  name: "CFIW",
  fullName: "Centre for Integrative Wellness",
  tagline: "Creating health. Living better.",
  description:
    "Personalised yoga, mindful movement, breathwork and integrative wellness for individuals and organisations.",
  url: "https://cfiw-wellness-review.nk2314.chatgpt.site",
  phone: "+91 9650496333",
  whatsapp: "919650496333",
  email: "hello@cfiw.example",
  location: "New Delhi",
  instagram: "https://instagram.com/",
  instructor: {
    name: "Founder name to be confirmed",
    title: "Founder & Lead Instructor",
    experience: "Experience details to be confirmed",
  },
} as const;

export const nav = [
  {
    label: "About CFIW",
    href: "/about",
    children: [
      ["What is CFIW?", "/what-is-cfiw"],
      ["Our Story", "/about#our-story"],
      ["Our Approach", "/about#our-approach"],
      ["Vision & Mission", "/about#vision--mission"],
      ["Founder & Lineage", "/founder"],
    ],
  },
  {
    label: "Our Work",
    href: "/our-work",
    children: [
      ["Work Overview", "/our-work"],
      ["Wellness", "/our-work#wellness"],
      ["Therapeutic Wellness", "/therapeutic-wellness"],
      ["Hospitals & Healthcare", "/healthcare-wellness"],
      ["Education & Capacity Building", "/our-work#education--capacity-building"],
    ],
  },
  {
    label: "Programs",
    href: "/programmes",
    children: [
      ["All Programs", "/programmes"],
      ["Personal Wellness", "/personal-wellness"],
      ["Personal Yoga", "/programmes#personal-yoga"],
      ["Mobility & Flexibility", "/programmes#mobility-flexibility"],
      ["Meditation & Breathwork", "/programmes#meditation"],
      ["Senior Wellness", "/programmes#senior-wellness"],
      ["Online Yoga", "/programmes#online-yoga"],
    ],
  },
  {
    label: "Collaborate",
    href: "/collaborate",
    children: [
      ["Partnership Overview", "/collaborate"],
      ["Corporate Wellness", "/corporate-wellness"],
      ["Hospitals & Healthcare", "/healthcare-wellness"],
      ["Schools & Institutions", "/collaborate#schools--institutions"],
      ["NGOs & Communities", "/collaborate#ngos--communities"],
    ],
  },
  {
    label: "Flagship Initiatives",
    href: "/flagship-initiatives",
    children: [
      ["Initiatives Overview", "/flagship-initiatives"],
      ["Project SAANIDHYA", "/flagship-initiatives/project-saanidhya"],
      ["Modern Workplace Wellness", "/corporate-wellness"],
      ["Community Wellness", "/collaborate"],
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      ["Articles & Blogs", "/resources#articles"],
      ["Videos", "/resources#videos"],
      ["Guided Practices", "/resources#practices"],
      ["Wellness Library", "/resources#library"],
      ["Research & Insights", "/resources#research"],
      ["Events & Workshops", "/events"],
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [
      ["Get in Touch", "/contact"],
      ["Book a Session", "/book"],
      ["Corporate Enquiry", "/contact#send-an-enquiry"],
    ],
  },
] as const;

export const programmes = [
  {
    slug: "personal-yoga",
    title: "Personal Yoga",
    tag: "One-to-one",
    text: "A considered practice shaped around your movement history, daily rhythms and intentions.",
  },
  {
    slug: "beginner-yoga",
    title: "Beginner Yoga",
    tag: "Start gently",
    text: "Clear, welcoming guidance that helps you build confidence without pressure or comparison.",
  },
  {
    slug: "mobility-flexibility",
    title: "Mobility & Flexibility",
    tag: "Move with ease",
    text: "Practical movement sessions that support everyday comfort, range and consistency.",
  },
  {
    slug: "meditation",
    title: "Meditation",
    tag: "Steady attention",
    text: "Accessible guided practices for developing awareness, steadiness and moments of pause.",
  },
  {
    slug: "breathwork",
    title: "Breathwork",
    tag: "Breathe with awareness",
    text: "Gentle breathing practices taught with care, context and respect for individual comfort.",
  },
  {
    slug: "senior-wellness",
    title: "Senior Wellness",
    tag: "Supported movement",
    text: "Adaptable sessions centred on confidence, balance, mobility and meaningful participation.",
  },
  {
    slug: "online-yoga",
    title: "Online Yoga",
    tag: "Practice anywhere",
    text: "Personal guidance delivered online, with thoughtful adjustments for your available space.",
  },
] as const;

export const resources = [
  {
    category: "Practice",
    title: "Beginning yoga without the pressure to perform",
    text: "A grounded guide to choosing a pace, setting expectations and starting where you are.",
    time: "5 min read",
  },
  {
    category: "Movement",
    title: "Why small movement breaks belong in the workday",
    text: "Simple ways to bring more variety and awareness into desk-based routines.",
    time: "4 min read",
  },
  {
    category: "Breath",
    title: "A five-minute breathing pause",
    text: "An introductory practice for returning attention to the rhythm of the breath.",
    time: "3 min read",
  },
] as const;
