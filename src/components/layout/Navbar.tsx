"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navigation } from "@/lib/config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-luxury" aria-label="Main navigation">
        <div className="flex items-center justify-between h-32 md:h-40">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 relative z-10"
            aria-label="Haute Couture Home Care - Home"
          >
            <Image
              src="/logo.png"
              alt="Haute Couture Home Care"
              width={320}
              height={140}
              className="h-24 md:h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide text-charcoal hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors"
              aria-label={`Call us at ${siteConfig.phone}`}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>
            <Link href={navigation.cta.href} className="btn btn-primary">
              {navigation.cta.name}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 -mr-2 text-charcoal"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-soft-gray">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-charcoal hover:text-gold transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 mt-2 border-t border-soft-gray">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-2 text-charcoal hover:text-gold transition-colors"
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
              <Link
                href={navigation.cta.href}
                onClick={() => setIsOpen(false)}
                className="btn btn-primary w-full"
              >
                {navigation.cta.name}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
