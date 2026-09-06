import type { Metadata } from "next";
import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = { title: "Schools & Education Institutions" };

export default function Page() {
  return (
    <ContentPage
      eyebrow="Collaborate"
      title="Cultural & Institutional Engagements"
      intro="Well-being as Part of Education"
      blocks={[
        {
          title: "Schools & Educational Institutions",
          text: "Education is not only about what students learn, but also about how they grow, respond to challenges and learn to care for themselves.",
          paragraphs: [
            "CFIW seeks to collaborate with schools, colleges, universities and educational institutions to make wellness a meaningful part of the learning environment. Through Yoga, movement, breath awareness, mindfulness and wellness education, the aim is to help young people develop an early understanding of their body, mind, habits and overall well-being.",
            "As students grow, they navigate academic pressure, long hours of sitting, digital exposure, changing emotions and increasingly demanding routines. Learning simple ways to move better, breathe consciously, manage stress, improve attention and build healthier everyday habits can support them not only during their years of education, but well beyond them.",
            "Our approach can extend to educators and staff, recognising that the well-being of those who teach and support students is equally important in creating a healthy learning environment.",
            "Each collaboration is shaped around the age group, needs and culture of the institution, keeping the experience practical, inclusive and relevant.",
            "At CFIW, we believe that alongside preparing young people for their future, education can also give them something fundamental.",
          ],
          quote: "The understanding of how to take care of themselves.",
          image: {
            src: "/images/schools-wellness.jpeg",
            alt: "Schoolchildren taking part in a guided outdoor yoga and wellness session",
          },
        },
      ]}
    />
  );
}
