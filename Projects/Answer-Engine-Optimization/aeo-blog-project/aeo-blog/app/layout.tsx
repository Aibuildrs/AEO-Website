import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: {
    default: "AEO - Answer Engine Optimization",
    template: "%s | AEO Content Pipeline",
  },
  description:
    "Automated content pipeline generating AEO-optimized articles designed to get cited by AI platforms.",
  keywords: [
    "AEO",
    "AI Search",
    "Content Marketing",
    "SEO",
    "Answer Engine Optimization",
  ],
  authors: [{ name: "AEO Content Pipeline" }],
  creator: "AEO Content Pipeline",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AEO Content Pipeline",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://theaeoengine.com/#organization",
    name: "The AEO Engine",
    url: "https://theaeoengine.com",
    logo: {
      "@type": "ImageObject",
      url: "https://theaeoengine.com/aeo-logo.png",
      width: 600,
      height: 60,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "en",
    },
    sameAs: [
      "https://www.facebook.com/yourcompany",
      "https://twitter.com/yourcompany",
      "https://www.linkedin.com/company/yourcompany",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-[var(--font-body-primary)]">
     
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
