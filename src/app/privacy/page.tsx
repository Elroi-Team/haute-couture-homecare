import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Haute Couture Home Care collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <h1 className="text-charcoal mb-4">Privacy Policy</h1>
            <p className="text-charcoal-light">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section bg-ivory pt-8">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-8 text-charcoal-light leading-relaxed">
              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Introduction</h2>
                <p>
                  Haute Couture Home Care (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to
                  protecting the privacy and security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>
                <h3 className="font-serif text-lg text-charcoal mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Information about the care recipient, including health-related information</li>
                  <li>Payment and billing information</li>
                  <li>Employment application information for job applicants</li>
                </ul>

                <h3 className="font-serif text-lg text-charcoal mb-2 mt-6">Automatically Collected Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our home care services</li>
                  <li>Process care requests and coordinate services</li>
                  <li>Communicate with you about our services</li>
                  <li>Process payments and maintain billing records</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                  <li>Evaluate job applications</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell your personal information. We may share your information
                  with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service providers:</strong> Third parties who perform services
                    on our behalf, such as payment processing and email delivery
                  </li>
                  <li>
                    <strong>Healthcare providers:</strong> When necessary for coordination
                    of care, with appropriate authorization
                  </li>
                  <li>
                    <strong>Legal compliance:</strong> When required by law or to protect
                    our legal rights
                  </li>
                  <li>
                    <strong>Business transfers:</strong> In connection with a merger,
                    acquisition, or sale of assets
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Health Information (HIPAA)</h2>
                <p>
                  We are committed to protecting health information in accordance with the
                  Health Insurance Portability and Accountability Act (HIPAA). Health
                  information collected in connection with our care services is handled
                  according to our Notice of Privacy Practices, which is provided to
                  clients separately.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect
                  your personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission over the
                  Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Your Rights</h2>
                <p className="mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Cookies and Tracking</h2>
                <p>
                  Our website uses cookies and similar technologies to improve your
                  experience and analyze website traffic. You can control cookie
                  preferences through your browser settings. We use Google Analytics to
                  understand how visitors interact with our website.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our website is not intended for children under 13 years of age. We do
                  not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you
                  of any changes by posting the new Privacy Policy on this page and
                  updating the &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or our privacy
                  practices, please contact us:
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
