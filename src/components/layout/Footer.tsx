import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig, navigation, services } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory/90" role="contentinfo">
      {/* Main Footer */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-light.png"
                alt="Haute Couture Home Care"
                width={280}
                height={120}
                className="h-28 w-auto"
              />
            </Link>
            <p className="text-ivory/70 text-sm leading-relaxed mb-6">
              Exceptional, personalized in-home care services. Discreet,
              professional, and tailored to your family&apos;s unique needs.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors"
              >
                <Phone size={16} className="text-gold" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-ivory/70 hover:text-gold transition-colors"
              >
                <Mail size={16} className="text-gold" />
                {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-ivory/70">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>
                  Serving {siteConfig.serviceArea.primary} &{" "}
                  {siteConfig.serviceArea.region}, {siteConfig.serviceArea.state}
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-ivory">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gold hover:text-gold-light transition-colors"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-ivory">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-ivory/70 hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-ivory/70 hover:text-gold transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-ivory">Get Started</h3>
            <p className="text-sm text-ivory/70 mb-6 leading-relaxed">
              Ready to discuss care options? Schedule a complimentary
              consultation with our care team.
            </p>
            <Link href="/request-care" className="btn btn-gold w-full mb-4">
              Request Care
            </Link>
            <p className="text-xs text-ivory/50">
              {siteConfig.hours.office}
              <br />
              {siteConfig.hours.care}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ivory/50">
            <p>
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center gap-6">
                {navigation.footer.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-ivory transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
