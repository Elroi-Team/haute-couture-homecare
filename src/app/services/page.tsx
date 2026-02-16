import { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Sparkles,
  Home,
  RefreshCw,
  Activity,
  Brain,
  Moon,
  Car,
  ArrowRight,
  Check,
  LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui";
import { services, siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive range of premium in-home care services including companion care, personal care, respite care, memory care, and more.",
};

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Sparkles,
  Home,
  RefreshCw,
  Activity,
  Brain,
  Moon,
  Car,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Our Services
            </p>
            <h1 className="text-charcoal mb-6">
              Comprehensive Care,
              <br />
              Personally Delivered
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              From daily assistance to specialized support, our services are
              designed to enhance quality of life while honoring independence
              and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Heart;
              const isEven = index % 2 === 0;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 flex items-center justify-center bg-gold/10 text-gold">
                          <IconComponent size={28} strokeWidth={1.5} />
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-charcoal-light leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check
                              size={18}
                              className="text-gold mt-0.5 flex-shrink-0"
                            />
                            <span className="text-charcoal-light text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/request-care" className="btn btn-primary">
                        Request This Service
                        <ArrowRight size={18} />
                      </Link>
                    </div>

                    {/* Visual */}
                    <div
                      className={`relative aspect-[4/3] bg-champagne-light ${
                        isEven ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent
                          size={120}
                          className="text-champagne-dark/30"
                          strokeWidth={0.5}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < services.length - 1 && (
                    <div className="border-t border-soft-gray mt-20" />
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Care CTA */}
      <section className="section bg-charcoal">
        <div className="container-luxury text-center">
          <SectionHeader
            eyebrow="Custom Care Plans"
            title="Need Something Different?"
            description="Every family is unique. We're happy to create a customized care plan that addresses your specific situation and requirements."
            dark
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-care" className="btn btn-gold">
              Schedule a Consultation
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
