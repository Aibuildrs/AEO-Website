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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Tag Manager */}
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

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Google Analytics */}
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

        {/* TikTok Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('CTVEJFRC77U5CBL1R0D0');
  ttq.page();
}(window, document, 'ttq');
    `,
          }}
        />

        {/* LinkedIn Insight Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
_linkedin_partner_id = "6736346"; 
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; 
window._linkedin_data_partner_ids.push(_linkedin_partner_id); 
(function(l) { 
  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} 
  var s = document.getElementsByTagName("script")[0]; 
  var b = document.createElement("script"); 
  b.type="text/javascript"; b.async=true; 
  b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js"; 
  s.parentNode.insertBefore(b,s);
})(window.lintrk);
    `,
          }}
        />

        {/* Facebook Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1300636034484702');
fbq('track', 'PageView');
    `,
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

          {/* LinkedIn Pixel */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=6736346&fmt=gif"
          />

          {/* Facebook Pixel */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1300636034484702&ev=PageView&noscript=1"
          />
        </noscript>

        <div className="overflow-x-hidden w-full max-w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
