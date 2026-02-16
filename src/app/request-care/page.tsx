import { Metadata } from "next";
import { RequestCareForm } from "@/components/forms/RequestCareForm";
import { siteConfig } from "@/lib/config";
import { Phone, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Request Care",
  description:
    "Request premium in-home care services for your loved one. Schedule a complimentary consultation with our care team.",
};

export default function RequestCarePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-2xl">
            <p className="text-gold text-sm font-medium tracking-widest uppercase mb-4">
              Request Care
            </p>
            <h1 className="text-charcoal mb-6">
              Begin Your
              <br />
              Care Journey
            </h1>
            <p className="text-xl text-charcoal-light leading-relaxed">
              Complete the form below and a member of our care team will contact
              you within 24 hours to discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-ivory pt-8">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <RequestCareForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-charcoal p-8 text-ivory">
                <h3 className="font-serif text-xl mb-4">Prefer to Talk?</h3>
                <p className="text-ivory/70 text-sm mb-6">
                  Our care team is available to answer your questions and
                  discuss your needs.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 text-lg font-medium text-gold hover:text-gold-light transition-colors"
                >
                  <Phone size={20} />
                  {siteConfig.phone}
                </a>
                <p className="text-ivory/50 text-sm mt-2">
                  {siteConfig.hours.office}
                </p>
              </div>

              {/* Calendly Embed */}
              <div className="bg-warm-white border border-soft-gray p-8">
                <h3 className="font-serif text-xl text-charcoal mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-charcoal-light text-sm mb-6">
                  Book a time that works for you to speak with our care team.
                </p>
                {/* Calendly Inline Widget Placeholder */}
                <div
                  className="calendly-inline-widget"
                  data-url={siteConfig.calendlyUrl}
                  style={{ minWidth: "280px", height: "400px" }}
                >
                  <div className="bg-champagne-light p-6 text-center">
                    <p className="text-charcoal-light text-sm mb-4">
                      Calendly scheduling widget will appear here
                    </p>
                    <a
                      href={siteConfig.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary text-sm"
                    >
                      Open Scheduler
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                {[
                  {
                    icon: Shield,
                    title: "Bonded & Insured",
                    description: "Fully bonded and insured for your peace of mind",
                  },
                  {
                    icon: Clock,
                    title: "24-Hour Response",
                    description: "We respond to all inquiries within 24 hours",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 bg-warm-white border border-soft-gray"
                  >
                    <item.icon
                      size={20}
                      className="text-gold mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-medium text-charcoal text-sm">
                        {item.title}
                      </h4>
                      <p className="text-charcoal-light text-xs">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
}
