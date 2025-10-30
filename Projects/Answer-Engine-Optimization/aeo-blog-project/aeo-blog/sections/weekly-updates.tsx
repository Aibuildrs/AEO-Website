"use client";

import React, { useEffect, useState } from "react";
import { Check, X, MoveRightIcon } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const loadTally = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(
          (el) => {
            (el as HTMLIFrameElement).src = (el as any).dataset.tallySrc;
          }
        );
      }
    };

    if (typeof (window as any).Tally !== "undefined") {
      loadTally();
    } else if (!d.querySelector(`script[src="${w}"]`)) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = loadTally;
      s.onerror = loadTally;
      d.body.appendChild(s);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 border border-slate-500 rounded-full mb-6 mt-[-8] whitespace-nowrap overflow-x-auto">
            <span className="text-cyan-400 text-sm">✦</span>
            <span className="flex flex-row justify gap-1 text-sm text-slate-500 font-semibold">
              The SEO <MoveRightIcon className="w-3" /> AEO Shift is Happening
              Now
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-4 leading-tight">
            Get Weekly Insider Updates + First
            <br />
            Access When Beta Opens
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-emerald-950/30 to-slate-900/50 rounded-2xl p-8 border border-emerald-900/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Who Should Join */}
            <div className="bg-gradient-to-br from-emerald-950/30 to-slate-900/50 rounded-2xl p-8 border border-emerald-900/30">
              <h2 className="text-2xl font-semibold text-emerald-400 mb-6">
                Who Should Join:
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    B2B SaaS companies ready to lead their category
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Service providers competing on expertise
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Brands with complex products that need explanation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Companies ready to publish consistently
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-red-950/30 to-slate-900/50 rounded-2xl p-8 border border-red-900/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* Who Shouldn't */}
            <div className="bg-gradient-to-br from-red-950/30 to-slate-900/50 rounded-2xl p-8 border border-red-900/30">
              <h2 className="text-2xl font-semibold text-red-400 mb-6">
                Who Shouldn't:
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Need results in 30 days (this is a 90-day play)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    E-commerce commodity products
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <p className="text-slate-200 leading-relaxed">
                    Not ready to commit to content
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full md:col-span-2 bg-[#1a2332] border border-[#2a3442] rounded-2xl p-6 md:p-8 shadow-lg shadow-[#00000040]">
            <iframe
              data-tally-src="https://tally.so/embed/nGNbOj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="621"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="AEO Clients"
              className="rounded-xl w-full transition-all duration-300"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
