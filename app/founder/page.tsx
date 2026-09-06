import type { Metadata } from "next";
import Image from "next/image";
import { CTA, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Meet Our Founder",
  description:
    "Meet Shilpi Shikha, founder of the Centre for Integrative Wellness, and discover the experience and philosophy behind CFIW.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Meet Our Founder"
        text="A personal journey shaped by professional experience, traditional learning and the belief that well-being should be part of everyday life."
      />

      <section className="section founder-section" id="meet-our-founder">
        <div className="container founder-layout">
          <aside className="founder-profile" aria-label="Founder profile">
            <div className="founder-photo">
              <Image
                src="/images/founder-clinical.jpeg"
                alt="Shilpi Shikha in a professional clinical wellness setting"
                fill
                priority
                sizes="(max-width: 1050px) 100vw, 360px"
              />
            </div>
            <p className="eyebrow">Founder</p>
            <h2>Shilpi Shikha</h2>
            <p>Centre for Integrative Wellness</p>
            <dl>
              <div>
                <dt>Professional background</dt>
                <dd>More than 13 years in the corporate world</dd>
              </div>
              <div>
                <dt>Wellness education</dt>
                <dd>Traditional and professional study of Yoga and wellness</dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>New Delhi</dd>
              </div>
            </dl>
          </aside>

          <article className="founder-story">
            <p className="founder-lead">
              Shilpi Shikha is Director of Navyaanta Ventures Pvt. Ltd. and
              Founder of the Centre for Integrative Wellness (CFIW). An
              entrepreneur and trained Yoga wellness professional, her journey
              into wellness has been shaped as much by her own life experiences
              as by her formal study and practice.
            </p>
            <p>
              With a background in Management, Shilpi spent more than 13 years
              in the corporate world, working with organisations such as
              Walmart Global Tech and WeWork. During these years, she
              experienced first-hand how demanding professional routines can
              gradually take a toll on health. Recurring health concerns made
              her increasingly aware of how easily well-being can take a back
              seat to long working hours, sedentary routines, travel, stress
              and everyday responsibilities.
            </p>
            <blockquote>
              How can well-being become part of everyday life, rather than
              something we turn to only when health begins to suffer?
            </blockquote>
            <p>
              Her own experiences made this question deeply personal. They
              also gave her a desire to help others take better care of their
              health before reaching the point she had experienced herself.
              This became an important part of the thinking behind CFIW: to
              make well-being more preventive, personal and relevant to the
              way people actually live today.
            </p>
            <p>
              Shilpi&apos;s journey into Yoga has included both traditional
              learning and professional study. She spent time in a traditional
              Gurukula Ashram in Kerala, learning Classical Hatha Yoga within
              the lineage of Swami Sivananda Maharaj, where her studies also
              included Vedanta philosophy. She has further studied practices
              from the tradition and lineage of Swami Dhirendra Brahmachari.
            </p>
            <p>
              She went on to pursue professional studies in Yoga, wellness and
              therapeutic applications under the Ministry of AYUSH at the
              Morarji Desai National Institute of Yoga (MDNIY), New Delhi, a
              WHO Collaborating Centre in Traditional Medicine.
            </p>
            <p>
              Her learning also extended into a clinical environment at the
              National Institute of Tuberculosis and Respiratory Diseases
              (NITRD), New Delhi, where she spent time in pulmonary
              rehabilitation and gained practical exposure to adapting Yoga,
              movement and breathing practices for respiratory and
              rehabilitative needs.
            </p>
            <p>
              Over the years, Shilpi&apos;s work has spanned expatriate and
              diplomatic communities, private clientele and corporate
              professionals. Her experience also extends across educational
              institutions and community settings.
            </p>

            <div className="founder-philosophy">
              <p className="eyebrow">Her philosophy</p>
              <h2>Understand the person before the practice.</h2>
              <p>
                For Shilpi, this means understanding the individual, including
                their health, body, movement, lifestyle, responsibilities and
                goals, before deciding what the practice should be. This
                person-centred approach continues to guide her work through
                CFIW.
              </p>
            </div>

            <div className="founder-vision">
              <p className="eyebrow">Her vision</p>
              <h2>Well-being as a natural part of everyday life</h2>
              <p>
                Shilpi&apos;s vision is to make integrative wellness a natural
                part of everyday life, not something we seek only when health
                begins to suffer. Through CFIW, she aims to build a more
                preventive, personalised and accessible approach to well-being,
                reaching individuals and families as well as workplaces,
                healthcare institutions, educational institutions and
                communities.
              </p>
              <p className="founder-signoff">Creating Health. Living Better.</p>
            </div>
          </article>
        </div>
      </section>
      <CTA />
    </>
  );
}
