export const site = {
  name: "CFIW",
  fullName: "Centre for Integrative Wellness",
  tagline: "Creating health. Living better.",
  description:
    "Personalised yoga, mindful movement, breathwork and integrative wellness for individuals and organisations.",
  url: "https://cfiw-wellness-review.nk2314.chatgpt.site",
  phone: "+91 9650496333",
  whatsapp: "919650496333",
  email: "info@cfiw.in",
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
    src: "/images/gallery-10.jpeg",
    title: "Guided group wellness practice",
    alt: "A yoga instructor guiding participants through an outdoor group practice",
  },
  {
    src: "/images/gallery-11.jpeg",
    title: "Healthcare wellness outreach",
    alt: "A wellness professional speaking with patients and staff in a hospital ward",
  },
  {
    src: "/images/gallery-01.jpeg",
    title: "Clinical wellness guidance",
    alt: "A wellness professional offering guidance in a hospital ward",
  },
  {
    src: "/images/gallery-02.jpeg",
    title: "Clinical wellness setting",
    alt: "Shilpi Shikha in a clinical wellness setting",
  },
  {
    src: "/images/gallery-03.jpeg",
    title: "Yoga sports achievement",
    alt: "Shilpi Shikha with a yoga sports championship certificate",
  },
  {
    src: "/images/gallery-04.jpeg",
    title: "Traditional learning",
    alt: "A visit to a traditional yoga ashram in Kerala",
  },
  {
    src: "/images/gallery-05.jpeg",
    title: "Personal yoga practice",
    alt: "An individual yoga practice in a historic setting",
  },
  {
    src: "/images/gallery-06.jpeg",
    title: "Outdoor yoga practice",
    alt: "Shilpi Shikha practising yoga outdoors in the hills",
  },
  {
    src: "/images/gallery-07.jpeg",
    title: "Professional yoga studies",
    alt: "Shilpi Shikha at the Morarji Desai National Institute of Yoga",
  },
  {
    src: "/images/gallery-08.jpeg",
    title: "Healthcare collaboration",
    alt: "A wellness professional with a hospital care team",
  },
  {
    src: "/images/gallery-09.jpeg",
    title: "School wellness session",
    alt: "Students taking part in a guided outdoor yoga session",
  },
] as const;
