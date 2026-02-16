import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Heart, Clock, Star } from "lucide-react";
import { ServiceCard, SectionHeader, TestimonialCard } from "@/components/ui";
import { siteConfig, services } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-light via-ivory to-warm-white" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2C2C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-luxury relative">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-6 animate-fade-in-up">
              Premium Home Care in {siteConfig.serviceArea.region}
            </p>
            <h1 className="text-charcoal mb-6 animate-fade-in-up">
              Exceptional Care,
              <br />
              <span className="text-gold">Tailored to You</span>
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed mb-10 max-w-xl animate-fade-in-up">
              Experience discreet, high-touch in-home care that honors
              independence while providing the support your family deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/request-care" className="btn btn-primary">
                Request Care
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-4/5">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-ivory/80 z-10" />
            <Image
              src="/hero-image.jpg"
              alt="Compassionate caregiver with client"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-charcoal py-8">
        <div className="container-luxury">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "Bonded & Insured" },
              { icon: Heart, label: "Compassionate Care" },
              { icon: Clock, label: "24/7 Availability" },
              { icon: Star, label: "5-Star Service" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon size={24} className="text-gold" strokeWidth={1.5} />
                <span className="text-ivory/80 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Our Services"
            title="Personalized Care Solutions"
            description="From companion care to homemaking services, we offer a comprehensive range of non-medical support designed to enhance quality of life while maintaining independence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                featured={index === 1 || index === 4}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-secondary">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-champagne-light">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Haute Couture"
                title="Care as Unique as Your Family"
                description="We believe exceptional care begins with truly understanding each client's preferences, routines, and goals."
                alignment="left"
              />

              <div className="space-y-6">
                {[
                  {
                    title: "Meticulously Matched Caregivers",
                    description:
                      "We carefully select and match caregivers based on personality, skills, and compatibility with your family.",
                  },
                  {
                    title: "Personalized Care Plans",
                    description:
                      "Every care plan is custom-designed around your specific needs, preferences, and schedule.",
                  },
                  {
                    title: "Transparent Communication",
                    description:
                      "Stay informed with regular updates, care notes, and open lines of communication with our team.",
                  },
                  {
                    title: "Flexible Scheduling",
                    description:
                      "From a few hours a week to 24/7 care, we adapt to your evolving needs.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 bg-gold flex-shrink-0" />
                    <div>
                      <h3 className="font-serif text-lg text-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-charcoal-light text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px]">
              <Image
                src="/why-us-image.jpg"
                alt="Caregiver providing attentive care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by Families Like Yours"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="The care and attention they provide is extraordinary. They treated my mother with such dignity and respect. It gave our entire family peace of mind."
              attribution="The Harrison Family"
              relationship="Wellington, FL"
            />
            <TestimonialCard
              quote="Finding quality care was overwhelming until we found Haute Couture. Their personalized approach made all the difference for my father's recovery."
              attribution="S. Pemberton"
              relationship="Palm Beach Gardens"
            />
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section bg-charcoal text-ivory">
        <div className="container-luxury">
          <SectionHeader
            eyebrow="Service Area"
            title="Proudly Serving Palm Beach County"
            dark
          />

          <div className="flex flex-wrap justify-center gap-4 text-center">
            {siteConfig.serviceArea.cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 border border-ivory/20 text-ivory/70 text-sm"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-champagne">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-charcoal mb-6">
            Ready to Discuss Care Options?
          </h2>
          <p className="text-xl text-charcoal-light mb-10 max-w-2xl mx-auto">
            Schedule a complimentary consultation to explore how we can support
            your family with personalized, exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-care" className="btn btn-primary">
              Request Care
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="btn btn-secondary"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
