import { Metadata } from "next";
import Link from "next/link";
import { Heart, Award, Clock, Users, ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Haute Couture Home Care team. We're seeking compassionate, dedicated individuals who share our commitment to exceptional service.",
};

const benefits = [
  "Competitive compensation",
  "Flexible scheduling",
  "Paid training provided",
  "Supportive team environment",
  "Meaningful, rewarding work",
  "Career growth opportunities",
  "Recognition and appreciation programs",
  "Mileage reimbursement",
];

const positions = [
  {
    title: "Companion Caregiver",
    type: "Full-time / Part-time",
    description:
      "Provide companionship, social engagement, and light assistance to clients. Perfect for those passionate about enriching lives and making a difference.",
    requirements: [
      "High school diploma or equivalent",
      "Genuine passion for helping others",
      "Valid driver's license and reliable transportation",
      "Excellent communication skills",
      "Background in caregiving, hospitality, or customer service preferred",
    ],
  },
  {
    title: "Homemaker / Personal Assistant",
    type: "Full-time / Part-time",
    description:
      "Assist clients with light housekeeping, meal preparation, errands, and daily activities to help them maintain a comfortable home environment.",
    requirements: [
      "Previous housekeeping or personal assistant experience",
      "Valid driver's license and reliable transportation",
      "Strong organizational skills",
      "Reliable and punctual",
      "Positive, professional attitude",
    ],
  },
  {
    title: "Senior Care Companion",
    type: "Part-time / PRN",
    description:
      "Provide dedicated companionship and support to seniors, including conversation, activities, meal preparation, and errand assistance.",
    requirements: [
      "Experience working with seniors preferred",
      "Patient and compassionate demeanor",
      "Reliable transportation",
      "Excellent communication skills",
      "Flexible availability including some weekends",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Careers
            </p>
            <h1 className="text-charcoal mb-6">
              Join Our Team of
              <br />
              Exceptional Caregivers
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              We&apos;re seeking compassionate individuals who share our
              commitment to providing exceptional, personalized care. If you
              have a heart for service, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Join Us"
                title="A Career That Makes a Difference"
                alignment="left"
              />
              <p className="text-charcoal-light leading-relaxed mb-8">
                At Haute Couture Home Care, you&apos;re not just an employee
                &mdash; you&apos;re a valued member of a team dedicated to
                transforming lives. We invest in our caregivers because we know
                that exceptional care starts with exceptional people.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Heart, text: "Meaningful, fulfilling work" },
                  { icon: Award, text: "Professional development" },
                  { icon: Clock, text: "Flexible scheduling" },
                  { icon: Users, text: "Supportive team culture" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={20} className="text-gold" strokeWidth={1.5} />
                    <span className="text-charcoal text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal p-8 md:p-10 text-ivory">
              <h3 className="font-serif text-2xl mb-6">Benefits & Perks</h3>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <Check size={18} className="text-gold flex-shrink-0" />
                    <span className="text-ivory/80">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section bg-champagne-light">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Open Positions"
            title="Current Opportunities"
            description="We're always looking for talented, caring individuals to join our team."
          />

          <div className="space-y-8 max-w-4xl mx-auto">
            {positions.map((position) => (
              <article
                key={position.title}
                className="bg-warm-white border border-soft-gray p-8"
              >
                <div className="mb-6">
                  <h3 className="font-serif text-xl text-charcoal">
                    {position.title}
                  </h3>
                  <p className="text-gold text-sm">{position.type}</p>
                </div>

                <p className="text-charcoal-light mb-6">{position.description}</p>

                <div>
                  <h4 className="font-medium text-charcoal text-sm mb-3">
                    Requirements:
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {position.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-sm text-charcoal-light"
                      >
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-charcoal-light mb-4">
              If any of these positions sound like a fit, we&apos;d love to hear from you.
            </p>
            <Link
              href={`mailto:${siteConfig.email}?subject=Career Application - Haute Couture Home Care`}
              className="btn btn-primary"
            >
              Send Your Resume
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="How to Apply"
            title="Our Hiring Process"
          />

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Submit your application and resume via email",
              },
              {
                step: "02",
                title: "Interview",
                description: "Meet with our team to discuss your experience",
              },
              {
                step: "03",
                title: "Screening",
                description: "Complete background check and reference verification",
              },
              {
                step: "04",
                title: "Welcome",
                description: "Join our team and begin orientation training",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-charcoal text-ivory font-serif">
                  {item.step}
                </div>
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-charcoal">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-ivory mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-ivory/70 mb-10 max-w-2xl mx-auto">
            Join a team that values compassion, professionalism, and the
            profound impact of exceptional care.
          </p>
          <Link
            href={`mailto:${siteConfig.email}?subject=Career Application - Haute Couture Home Care`}
            className="btn btn-gold"
          >
            Send Your Resume
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
