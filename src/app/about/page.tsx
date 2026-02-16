import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Users, Heart, Shield } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Haute Couture Home Care's commitment to providing exceptional, personalized in-home care services in Palm Beach County.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every interaction is guided by genuine care and empathy for our clients and their families.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description:
      "We maintain the highest standards in caregiver selection, training, and service delivery.",
  },
  {
    icon: Users,
    title: "Personal Connection",
    description:
      "We build meaningful relationships, treating each client as an extension of our own family.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description:
      "Transparency, honesty, and reliability form the foundation of everything we do.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
                About Us
              </p>
              <h1 className="text-charcoal mb-6">
                Redefining
                <br />
                Home Care Excellence
              </h1>
              <p className="text-xl text-charcoal-light leading-relaxed">
                Haute Couture Home Care was founded on a simple belief: everyone
                deserves care that honors their individuality, respects their
                preferences, and enhances their quality of life.
              </p>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/about-hero.jpg"
                alt="Caring for families in Palm Beach County"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              eyebrow="Our Story"
              title="Built on a Foundation of Care"
            />
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              <p>
                Haute Couture Home Care emerged from a deeply personal
                understanding of what families need when seeking care for their
                loved ones. We recognized that the home care industry often
                overlooked the individual&mdash;the unique preferences, routines, and
                dignity that define each person.
              </p>
              <p>
                We set out to create something different: a home care service
                that combines professional excellence with genuine warmth. Where
                caregivers are carefully selected not just for their skills, but
                for their character. Where care plans are thoughtfully crafted,
                not templated. Where families feel supported, informed, and at
                peace.
              </p>
              <p>
                Today, we serve families throughout {siteConfig.serviceArea.region},
                providing care that is as distinctive as the individuals we
                serve. Our commitment remains unchanged: to deliver exceptional
                care with discretion, professionalism, and heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-champagne-light">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Our Values"
            title="What Guides Us Every Day"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold/10 text-gold">
                  <value.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-light text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Commitment */}
      <section className="section bg-charcoal">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-ivory mb-6">Our Commitment to You</h2>
            <p className="text-xl text-ivory/70 leading-relaxed mb-10">
              We promise to treat your loved one with the same care, respect,
              and attention we would want for our own family. This commitment
              drives every decision we make, from caregiver selection to ongoing
              care coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-care" className="btn btn-gold">
                Start Your Care Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/how-it-works"
                className="btn btn-secondary border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
