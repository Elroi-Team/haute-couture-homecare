import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Haute Couture Home Care services, pricing, caregivers, and more.",
};

const faqCategories = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I know if home care is right for my family?",
        a: "Our concierge home care is ideal for individuals who want to maintain independence while receiving personalized support in familiar surroundings. If your loved one would benefit from companionship, assistance with daily activities, household help, or simply a trusted presence at home, we're here to help. We offer a complimentary consultation to understand your unique situation and curate the perfect care experience.",
      },
      {
        q: "How quickly can care begin?",
        a: "In urgent situations, we can often arrange care within 24-48 hours. For non-urgent requests, we recommend allowing time for our thoughtful assessment and caregiver matching process—typically 3-5 business days—to ensure an exceptional fit for your family.",
      },
      {
        q: "What areas do you serve?",
        a: `We proudly serve ${siteConfig.serviceArea.primary} and throughout ${siteConfig.serviceArea.region}, ${siteConfig.serviceArea.state}, including ${siteConfig.serviceArea.cities.slice(0, 5).join(", ")}, and surrounding communities.`,
      },
      {
        q: "What makes Haute Couture different from other home care agencies?",
        a: "We approach home care with a luxury concierge mindset. Every detail matters—from our meticulous caregiver matching process to our personalized care plans. We focus on enhancing quality of life, preserving dignity, and providing the kind of attentive, discreet service you'd expect from a five-star hospitality experience.",
      },
    ],
  },
  {
    category: "Our Services",
    questions: [
      {
        q: "What services do you offer?",
        a: "We specialize in non-medical home care services including companion care, personal assistance, homemaking services, respite care for family caregivers, senior support, overnight and live-in care, and transportation assistance. Each care experience is thoughtfully customized to your preferences and lifestyle.",
      },
      {
        q: "What if we need medical or nursing care?",
        a: "While we specialize in non-medical companion and personal care, we've cultivated relationships with exceptional healthcare partners throughout Palm Beach County. Our concierge team can connect you with trusted home health agencies, nursing services, and medical professionals to ensure your loved one receives comprehensive support. We work seamlessly alongside medical providers.",
      },
      {
        q: "What is the minimum number of hours required?",
        a: "We typically suggest a minimum of 4 hours per visit to ensure a meaningful care experience and caregiver consistency. However, we understand every family's situation is unique and welcome the opportunity to discuss your specific needs during your consultation.",
      },
      {
        q: "Do you provide 24-hour or live-in care?",
        a: "Absolutely. We offer both 24-hour care with carefully coordinated caregivers and live-in arrangements for those who prefer consistent, round-the-clock support. Our care coordinators will help you determine which option best complements your loved one's lifestyle.",
      },
    ],
  },
  {
    category: "Our Caregivers",
    questions: [
      {
        q: "How do you select your caregivers?",
        a: "Our selection process reflects our commitment to excellence. We conduct thorough background checks, verify references, assess skills and personality, and conduct in-person interviews. Beyond qualifications, we seek individuals with genuine warmth, discretion, and a natural gift for making others feel comfortable. Only a select few meet our exacting standards.",
      },
      {
        q: "Are your caregivers insured and bonded?",
        a: "Yes, every member of our care team is fully bonded and insured. We also maintain comprehensive liability coverage for your complete peace of mind.",
      },
      {
        q: "What if we'd like a different caregiver?",
        a: "Your comfort and satisfaction are paramount. If for any reason you feel your caregiver isn't the ideal match, simply let us know. We'll promptly arrange a new introduction at no additional cost. We want every care relationship to feel just right.",
      },
      {
        q: "Will we have the same caregiver each visit?",
        a: "Continuity is essential to building trust and comfort. We prioritize assigning the same caregiver to each client whenever possible. For clients with extended care needs, we thoughtfully curate a small team of compatible caregivers to ensure seamless, consistent support.",
      },
    ],
  },
  {
    category: "Investment & Payment",
    questions: [
      {
        q: "How much does your care cost?",
        a: "Our rates reflect the caliber of care and personalized attention we provide. Costs vary based on your care plan, scheduling needs, and service hours. Following your consultation, we provide a clear, detailed proposal with no hidden fees. We believe in complete transparency.",
      },
      {
        q: "What payment options do you accept?",
        a: "We accept private pay and can provide documentation for long-term care insurance claims and flexible spending accounts. As a non-medical home care service, we're typically not covered by Medicare, but our team can help you navigate your specific coverage options.",
      },
      {
        q: "Is there a contract requirement?",
        a: "We believe in earning your trust through exceptional service, not binding contracts. Our care arrangements can be adjusted or concluded with reasonable notice, providing you flexibility as your needs evolve.",
      },
    ],
  },
  {
    category: "Quality & Communication",
    questions: [
      {
        q: "How do you ensure quality care?",
        a: "Excellence is woven into every aspect of our service. This includes thoughtful caregiver selection and ongoing development, regular supervisory check-ins, detailed care documentation, proactive family communication, and continuous satisfaction assessments. We're always refining our approach to exceed expectations.",
      },
      {
        q: "How will I know what's happening during care visits?",
        a: "We believe families deserve complete peace of mind. You'll receive regular updates and care notes, and our care coordination team is always available to answer questions. You'll feel connected and informed, never wondering how your loved one is doing.",
      },
      {
        q: "What happens in an emergency situation?",
        a: "While we provide non-medical care, our caregivers are prepared for unexpected situations. In any emergency, they will call 911 immediately, stay with your loved one, and contact family members right away. Our office provides 24/7 on-call support for urgent coordination needs.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              FAQ
            </p>
            <h1 className="text-charcoal mb-6">
              Frequently Asked
              <br />
              Questions
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              Find answers to common questions about our services, caregivers,
              and what to expect when working with Haute Couture Home Care.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.category} className="mb-16 last:mb-0">
                <h2 className="font-serif text-2xl text-charcoal mb-8 pb-4 border-b border-soft-gray">
                  {category.category}
                </h2>

                <div className="space-y-6">
                  {category.questions.map((item) => (
                    <details
                      key={item.q}
                      className="group bg-warm-white border border-soft-gray"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <h3 className="font-medium text-charcoal pr-4">
                          {item.q}
                        </h3>
                        <span className="text-gold text-2xl font-light transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-charcoal-light leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section bg-charcoal">
        <div className="container-luxury text-center">
          <SectionHeader
            eyebrow="Still Have Questions?"
            title="We're Here to Help"
            description="Can't find the answer you're looking for? Our care team is ready to assist you."
            dark
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-gold">
              Contact Us
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
