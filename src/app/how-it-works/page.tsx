import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Users,
  ClipboardCheck,
  Heart,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn about our simple, personalized process for arranging exceptional in-home care. From initial consultation to ongoing support.",
};

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Begin with a complimentary phone or in-person consultation. We'll discuss your family's needs, preferences, schedule, and any special requirements. This conversation helps us understand how we can best serve you.",
    icon: Phone,
    details: [
      "No-obligation conversation",
      "Understand your care needs",
      "Answer all your questions",
      "Discuss scheduling preferences",
    ],
  },
  {
    number: "02",
    title: "Care Assessment",
    description:
      "Our care team conducts a comprehensive assessment, either in-home or virtually. We evaluate care requirements, home environment, and personal preferences to design the optimal care approach.",
    icon: ClipboardCheck,
    details: [
      "Thorough needs assessment",
      "Home safety evaluation",
      "Personal preference review",
      "Care plan development",
    ],
  },
  {
    number: "03",
    title: "Caregiver Matching",
    description:
      "We meticulously match you with caregivers based on skills, personality, and compatibility. You'll have the opportunity to meet and approve your caregiver before care begins.",
    icon: Users,
    details: [
      "Personality compatibility",
      "Skills and experience matching",
      "Meet-and-greet opportunity",
      "Final approval by you",
    ],
  },
  {
    number: "04",
    title: "Care Begins",
    description:
      "Your carefully matched caregiver arrives, ready to provide exceptional care. We ensure a smooth transition and remain available for any adjustments needed.",
    icon: Heart,
    details: [
      "Seamless care transition",
      "Clear communication protocols",
      "Quality assurance checks",
      "Ongoing family support",
    ],
  },
  {
    number: "05",
    title: "Continuous Support",
    description:
      "Our relationship doesn't end when care begins. We provide ongoing supervision, regular check-ins, and adapt the care plan as needs evolve.",
    icon: MessageCircle,
    details: [
      "Regular care reviews",
      "24/7 support availability",
      "Care plan adjustments",
      "Family communication",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h1 className="text-charcoal mb-6">
              A Thoughtful Process,
              <br />
              Personalized for You
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              We believe exceptional care begins long before the first visit.
              Our comprehensive process ensures we understand your unique needs
              and match you with the perfect caregiver.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 bottom-0 w-px bg-soft-gray hidden md:block" />
                )}

                <div className="grid md:grid-cols-[auto_1fr] gap-8 mb-16">
                  {/* Step Number & Icon */}
                  <div className="flex md:flex-col items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center bg-charcoal text-ivory font-serif text-lg relative z-10">
                      {step.number}
                    </div>
                    <step.icon
                      size={24}
                      className="text-gold hidden md:block"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="bg-warm-white border border-soft-gray p-8">
                    <h2 className="font-serif text-2xl text-charcoal mb-4">
                      {step.title}
                    </h2>
                    <p className="text-charcoal-light leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-sm text-charcoal-light"
                        >
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section bg-champagne-light">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Common Questions"
            title="What Families Often Ask"
          />

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How quickly can care begin?",
                a: "In many cases, we can arrange care within 24-48 hours. For non-urgent situations, we recommend allowing time for the full assessment and matching process to ensure the best fit.",
              },
              {
                q: "What if we need to change caregivers?",
                a: "Your satisfaction is paramount. If for any reason you'd like a different caregiver, we'll work quickly to find a better match at no additional cost.",
              },
              {
                q: "Are your caregivers background checked?",
                a: "Absolutely. All caregivers undergo comprehensive background checks, reference verification, and skills assessments before joining our team.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-warm-white border border-soft-gray p-6">
                <h3 className="font-serif text-lg text-charcoal mb-2">
                  {item.q}
                </h3>
                <p className="text-charcoal-light text-sm">{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="btn btn-secondary">
              View All FAQs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-charcoal">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-ivory mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-ivory/70 mb-10 max-w-2xl mx-auto">
            Take the first step toward exceptional care for your loved one.
            Schedule a complimentary consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-care" className="btn btn-gold">
              Request Care
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="btn btn-secondary border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
