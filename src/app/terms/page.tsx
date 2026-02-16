import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Haute Couture Home Care website and services.",
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <h1 className="text-charcoal mb-4">Terms of Service</h1>
            <p className="text-charcoal-light">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-ivory pt-8">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 text-charcoal-light leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Agreement to Terms
                </h2>
                <p>
                  By accessing or using the Haute Couture Home Care website
                  (&quot;Website&quot;) or our services, you agree to be bound by these
                  Terms of Service (&quot;Terms&quot;). If you do not agree to these
                  Terms, please do not use our Website or services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Description of Services
                </h2>
                <p>
                  Haute Couture Home Care provides non-medical in-home care services,
                  including but not limited to companion care, personal care assistance,
                  homemaking services, and related support services. Specific services
                  are detailed in individual service agreements with clients.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Use of Website</h2>
                <p className="mb-4">You agree to use our Website only for lawful purposes. You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Website in any way that violates applicable laws or
                    regulations
                  </li>
                  <li>
                    Attempt to gain unauthorized access to any part of the Website or
                    related systems
                  </li>
                  <li>
                    Interfere with or disrupt the operation of the Website
                  </li>
                  <li>
                    Upload or transmit viruses, malware, or other harmful code
                  </li>
                  <li>
                    Collect or harvest personal information from other users
                  </li>
                  <li>
                    Use the Website for any commercial purpose without our consent
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Care Services Terms
                </h2>
                <p>
                  The provision of care services is governed by separate service
                  agreements entered into between Haute Couture Home Care and clients.
                  These Terms of Service govern your use of our Website and do not
                  replace or modify any care service agreements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Intellectual Property
                </h2>
                <p>
                  All content on this Website, including text, graphics, logos, images,
                  and software, is the property of Haute Couture Home Care or its content
                  suppliers and is protected by intellectual property laws. You may not
                  reproduce, distribute, modify, or create derivative works from any
                  content without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Disclaimer of Warranties
                </h2>
                <p>
                  THE WEBSITE AND ALL INFORMATION, CONTENT, AND SERVICES PROVIDED THROUGH
                  IT ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                  IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO
                  WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HAUTE COUTURE HOME CARE SHALL
                  NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF THE WEBSITE.
                  OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU, IF ANY,
                  FOR ACCESSING THE WEBSITE.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Medical Disclaimer
                </h2>
                <p>
                  Information provided on this Website is for general informational
                  purposes only and is not intended as medical advice. Our services are
                  non-medical in nature. For medical concerns, please consult a qualified
                  healthcare provider. In case of a medical emergency, call 911
                  immediately.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Third-Party Links
                </h2>
                <p>
                  Our Website may contain links to third-party websites. We are not
                  responsible for the content, privacy policies, or practices of any
                  third-party websites. Your use of third-party websites is at your own
                  risk.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Haute Couture Home
                  Care, its officers, directors, employees, and agents from any claims,
                  losses, damages, liabilities, and expenses (including attorneys&apos; fees)
                  arising out of your use of the Website or violation of these Terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the
                  laws of the State of Florida, without regard to its conflict of law
                  provisions. Any disputes arising under these Terms shall be resolved in
                  the state or federal courts located in Palm Beach County, Florida.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be
                  effective immediately upon posting to the Website. Your continued use
                  of the Website following any changes constitutes acceptance of the
                  revised Terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or
                  invalid, that provision shall be limited or eliminated to the minimum
                  extent necessary, and the remaining provisions shall remain in full
                  force and effect.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Contact Us</h2>
                <p>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none mt-4 space-y-2">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-gold">
                      {siteConfig.email}
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-gold"
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
