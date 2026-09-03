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
    href: "/what-is-cfiw",
    children: [
      ["Who We Are", "/what-is-cfiw#who-we-are"],
      ["Why CFIW", "/what-is-cfiw#more-than-a-wellness-centre"],
      ["What is Integrative Wellness?", "/what-is-cfiw#what-is-integrative-wellness"],
      ["What is Salutogenesis?", "/what-is-cfiw#what-is-salutogenesis"],
    ],
  },
  {
    label: "Our Story",
    href: "/our-work",
    children: [
      ["Our Philosophy", "/our-work#our-philosophy"],
      ["Wellness Understood as a Whole", "/our-work#wellness-understood-as-a-whole"],
      ["Our Vision", "/our-work#our-vision"],
      ["Our Mission", "/our-work#our-mission"],
      ["Our Values", "/our-work#our-values"],
    ],
  },
  {
    label: "Programs",
    href: "/programmes",
    children: [
      ["Yoga Classes", "/yoga-classes"],
      ["Therapeutic Yoga", "/therapeutic-wellness"],
      ["Corporate Wellness", "/corporate-wellness"],
    ],
  },
  {
    label: "Collaborate",
    href: "/collaborate",
    children: [
      ["Hospitals & Healthcare", "/healthcare-wellness"],
      ["School & Education Institutions", "/schools-education-institutions"],
      ["Cultural Centres", "/cultural-centres"],
      ["Flagship Initiative", "/flagship-initiatives/project-saanidhya"],
    ],
  },
  {
    label: "Flagship Initiatives",
    href: "/flagship-initiatives",
    children: [
      ["Project SAANIDHYA", "/flagship-initiatives/project-saanidhya"],
    ],
  },
  {
    label: "Meet Founder",
    href: "/founder",
    children: [
      ["Meet the Founder", "/founder#meet-the-founder"],
      ["Qualifications & Certifications", "/founder#qualifications-certifications"],
      ["Areas of Expertise", "/founder#areas-of-expertise"],
      ["Teaching Philosophy", "/founder#teaching-philosophy"],
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
    slug: "yoga-classes",
    title: "Yoga Classes",
    tag: "Wellness designed around you",
    text: "Personalised and group practices shaped around your movement, breath, lifestyle and goals.",
  },
  {
    slug: "therapeutic-wellness",
    title: "Therapeutic Yoga",
    tag: "Individualised support",
    text: "Therapeutic movement, yoga, breathwork and restorative practices adapted to your health context.",
  },
  {
    slug: "corporate-wellness",
    title: "Corporate Wellness",
    tag: "Well-being at the heart of work",
    text: "Thoughtful wellness programmes designed around your people, workplace and objectives.",
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
