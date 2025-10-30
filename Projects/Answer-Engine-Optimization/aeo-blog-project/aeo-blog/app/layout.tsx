import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Script from "next/script";

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
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PCHRMCVJ');
      `,
          }}
        />

        {/* ✅ TikTok Pixel */}
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `...your TikTok pixel code...`,
          }}
        />

        {/* ✅ LinkedIn Insight Tag */}
        <Script
          id="linkedin-insight"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        _linkedin_partner_id = "6736346";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      `,
          }}
        />
        <Script
          id="linkedin-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        (function(l){
          if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[];}
          var s=document.getElementsByTagName("script")[0];
          var b=document.createElement("script");
          b.type="text/javascript";b.async=true;
          b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b,s);
        })(window.lintrk);
      `,
          }}
        />
      </head>

      <body className="overflow-x-hidden font-[var(--font-body-primary)] bg-slate-100/50 text-black">
        {/* ✅ Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCHRMCVJ"
            height={0}
            width={0}
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* ✅ LinkedIn (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6736346&fmt=gif"
          />
        </noscript>

        {/* ✅ Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=1300636034484702&ev=PageView&noscript=1"
          />
        </noscript>

        {/* ✅ Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ZX31YYYDF0');
  `}
        </Script>

        <div className="overflow-x-hidden w-full max-w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
