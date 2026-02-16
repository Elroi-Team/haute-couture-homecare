import { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Haute Couture Home Care. We're here to answer your questions and discuss care options for your family.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h1 className="text-charcoal mb-6">
              We&apos;re Here
              <br />
              to Help
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              Have questions about our services? Ready to discuss care options?
              Our team is here to provide the information and support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-ivory">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="font-serif text-2xl text-charcoal mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Phone</h3>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-xl text-gold hover:text-gold-dark transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-charcoal-light text-sm mt-1">
                      {siteConfig.hours.office}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-gold hover:text-gold-dark transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                    <p className="text-charcoal-light text-sm mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">
                      Service Area
                    </h3>
                    <p className="text-charcoal-light">
                      {siteConfig.serviceArea.primary} &{" "}
                      {siteConfig.serviceArea.region},{" "}
                      {siteConfig.serviceArea.state}
                    </p>
                    <p className="text-charcoal-light text-sm mt-2">
                      Including: {siteConfig.serviceArea.cities.slice(0, 5).join(", ")}
                      , and more
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Hours</h3>
                    <p className="text-charcoal-light">{siteConfig.hours.office}</p>
                    <p className="text-charcoal-light">{siteConfig.hours.care}</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-soft-gray">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-charcoal-light mb-6">
                  Complete our care request form and we&apos;ll be in touch within
                  24 hours to discuss your needs.
                </p>
                <Link href="/request-care" className="btn btn-primary">
                  Request Care
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-warm-white border border-soft-gray p-8 md:p-10">
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Send Us a Message
              </h2>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                Reach out directly via email or phone. We respond to all inquiries
                within 24 hours and are happy to answer any questions about our services.
              </p>

              <div className="space-y-6">
                <a
                  href={`mailto:${siteConfig.email}?subject=General Inquiry`}
                  className="btn btn-primary w-full justify-center"
                >
                  <Mail size={18} />
                  Email Us Directly
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="btn btn-secondary w-full justify-center"
                >
                  <Phone size={18} />
                  Call {siteConfig.phone}
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-soft-gray">
                <h3 className="font-serif text-lg text-charcoal mb-4">
                  Looking for Care Services?
                </h3>
                <p className="text-charcoal-light text-sm mb-6">
                  For detailed care inquiries, use our comprehensive request form.
                </p>
                <Link href="/request-care" className="btn btn-gold w-full justify-center">
                  Request Care
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
