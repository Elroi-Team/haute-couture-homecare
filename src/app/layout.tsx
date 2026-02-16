import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Haute Couture Home Care | Premium In-Home Care Services",
    template: "%s | Haute Couture Home Care",
  },
  description:
    "Exceptional, personalized in-home care services in Wellington and Palm Beach County, FL. Experience discreet, high-touch care tailored to your family's needs.",
  keywords: [
    "home care",
    "in-home care",
    "luxury home care",
    "Wellington FL",
    "Palm Beach County",
    "senior care",
    "companion care",
    "personal care",
    "concierge home care",
  ],
  authors: [{ name: "Haute Couture Home Care" }],
  creator: "Haute Couture Home Care",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hautecouturehomecare.com",
    siteName: "Haute Couture Home Care",
    title: "Haute Couture Home Care | Premium In-Home Care Services",
    description:
      "Exceptional, personalized in-home care services in Wellington and Palm Beach County, FL.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haute Couture Home Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haute Couture Home Care | Premium In-Home Care Services",
    description:
      "Exceptional, personalized in-home care services in Wellington and Palm Beach County, FL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Haute Couture Home Care",
              description:
                "Premium in-home care services in Wellington and Palm Beach County, FL",
              url: "https://www.hautecouturehomecare.com",
              telephone: "+1-561-421-0745",
              email: "care@hautecouturehomecare.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Wellington",
                addressRegion: "FL",
                postalCode: "33414",
                addressCountry: "US",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Wellington",
                  containedInPlace: {
                    "@type": "State",
                    name: "Florida",
                  },
                },
                {
                  "@type": "AdministrativeArea",
                  name: "Palm Beach County",
                },
              ],
              serviceType: [
                "In-Home Care",
                "Companion Care",
                "Personal Care",
                "Respite Care",
                "Post-Surgical Care",
              ],
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
