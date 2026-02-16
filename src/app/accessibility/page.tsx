import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Our commitment to making the Haute Couture Home Care website accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-champagne-light to-ivory">
        <div className="container-luxury">
          <div className="max-w-3xl">
            <h1 className="text-charcoal mb-4">Accessibility Statement</h1>
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
                  Our Commitment
                </h2>
                <p>
                  Haute Couture Home Care is committed to ensuring digital accessibility
                  for people with disabilities. We are continually improving the user
                  experience for everyone and applying the relevant accessibility
                  standards to ensure we provide equal access to all users.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Conformance Status
                </h2>
                <p>
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG)
                  2.1 Level AA standards. These guidelines explain how to make web
                  content more accessible to people with a wide range of disabilities,
                  including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Visual impairments</li>
                  <li>Hearing impairments</li>
                  <li>Motor impairments</li>
                  <li>Cognitive impairments</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Accessibility Features
                </h2>
                <p className="mb-4">
                  Our website includes the following accessibility features:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Keyboard Navigation:</strong> All interactive elements can
                    be accessed using keyboard navigation
                  </li>
                  <li>
                    <strong>Skip Links:</strong> Skip navigation links allow users to
                    bypass repetitive content
                  </li>
                  <li>
                    <strong>Alt Text:</strong> Images include descriptive alternative
                    text
                  </li>
                  <li>
                    <strong>Color Contrast:</strong> Text maintains sufficient contrast
                    with background colors
                  </li>
                  <li>
                    <strong>Resizable Text:</strong> Text can be resized without loss of
                    content or functionality
                  </li>
                  <li>
                    <strong>Form Labels:</strong> All form fields have associated labels
                    for screen reader users
                  </li>
                  <li>
                    <strong>Focus Indicators:</strong> Visible focus indicators show
                    which element is currently selected
                  </li>
                  <li>
                    <strong>Semantic HTML:</strong> Proper heading structure and
                    semantic markup for screen readers
                  </li>
                  <li>
                    <strong>ARIA Labels:</strong> Accessible Rich Internet Applications
                    (ARIA) labels where appropriate
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Assistive Technology Compatibility
                </h2>
                <p>
                  Our website is designed to be compatible with the following assistive
                  technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Screen readers (JAWS, NVDA, VoiceOver, TalkBack)</li>
                  <li>Screen magnification software</li>
                  <li>Speech recognition software</li>
                  <li>Keyboard-only navigation</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Known Limitations
                </h2>
                <p>
                  While we strive to ensure accessibility of our website, there may be
                  some limitations. We are actively working to identify and address any
                  accessibility issues. If you encounter any barriers, please let us
                  know.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Alternative Formats
                </h2>
                <p>
                  If you need information from our website in a different format, please
                  contact us. We will work with you to provide the information in a
                  format that meets your needs, such as:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Large print</li>
                  <li>Audio format</li>
                  <li>Plain text</li>
                  <li>Other accessible formats</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Feedback and Contact
                </h2>
                <p>
                  We welcome your feedback on the accessibility of our website. If you
                  encounter accessibility barriers or have suggestions for improvement,
                  please contact us:
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
                <p className="mt-4">
                  We try to respond to accessibility feedback within 2 business days.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal mb-4">
                  Continuous Improvement
                </h2>
                <p>
                  We are committed to continually improving the accessibility of our
                  website. We regularly review our site and update our practices to
                  ensure we maintain and improve accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
