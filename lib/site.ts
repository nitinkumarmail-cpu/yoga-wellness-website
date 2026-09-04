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
    name: "Shilpi Shikha",
    title: "Founder, Centre for Integrative Wellness",
    experience: "Yoga wellness professional and former corporate leader",
  },
} as const;

export const nav = [
  {
    label: "About CFIW",
    href: "/what-is-cfiw",
    children: [
      ["Who We Are", "/what-is-cfiw#who-we-are"],
      ["Why CFIW", "/what-is-cfiw#why-cfiw"],
      ["Our Philosophy", "/our-work#our-philosophy"],
      ["Our Approach", "/our-work#our-approach"],
    ],
  },
  {
    label: "Our Story",
    href: "/our-work",
    children: [
      ["Our Philosophy", "/our-work#our-philosophy"],
      ["Our Approach", "/our-work#our-approach"],
      ["Our Vision", "/our-work#our-vision"],
      ["Our Mission", "/our-work#our-mission"],
      ["Our Values", "/our-work#our-values"],
      ["Wellness Gallery", "/gallery"],
    ],
  },
  {
    label: "Programs",
    href: "/programmes",
    children: [
      ["Yoga Classes", "/yoga-classes"],
      ["Therapeutic Yoga", "/therapeutic-wellness"],
      ["Corporate Wellness", "/corporate-wellness"],
      ["Wellness Gallery", "/gallery"],
    ],
  },
  {
    label: "Collaborate",
    href: "/collaborate",
    children: [
      ["Hospitals & Healthcare", "/healthcare-wellness"],
      ["Schools & Educational Institutions", "/schools-education-institutions"],
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
    label: "Founder",
    href: "/founder",
    children: [
      ["Meet Our Founder", "/founder#meet-our-founder"],
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

export const galleryItems = [
  {
    src: "/images/hero-wellness.png",
    title: "Personal wellness",
    alt: "A calm individual meditation and breath-awareness practice",
  },
  {
    src: "/images/corporate-session.png",
    title: "Wellness at work",
    alt: "Indian professionals taking part in a workplace movement and breathing session",
  },
  {
    src: "/images/community-wellness.png",
    title: "Community connection",
    alt: "A yoga educator guiding mature adults through accessible seated movement",
  },
  {
    src: "/images/education-workshop.png",
    title: "Learning through practice",
    alt: "Young adults participating in a mindful movement and wellness workshop",
  },
  {
    src: "/images/corporate-wellness.png",
    title: "Guided group practice",
    alt: "Adults following a gentle, guided group wellness practice",
  },
] as const;
