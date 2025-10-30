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
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window,document,'script','dataLayer','GTM-PCHRMCVJ');
    `,
          }}
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="overflow-x-hidden font-[var(--font-body-primary)] bg-slate-100/50 text-black">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCHRMCVJ"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZX31YYYDF0');
    `,
          }}
        />

        <div className="overflow-x-hidden w-full max-w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
