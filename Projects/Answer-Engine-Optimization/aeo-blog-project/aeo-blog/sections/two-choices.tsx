"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ChoiceComparison() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-2xl text-center md:text-5xl font-bold mb-6 mt-[-8] leading-tight">
          You Have Two Choices Right Now
        </h1>
        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Choice A */}
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white rounded-xl p-3 border border-red-200">
                  <Sparkles className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                    Choice A
                  </h2>
                  <p className="text-gray-700">Keep doing what you're doing.</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Keep optimizing for Google while AI platforms eat your lunch.
                  Keep watching competitors get cited while you stay invisible.
                  Keep hoping things will "work out.
                </p>

                <p className="font-medium">
                  In 12 months, you'll be scrambling to catch up—paying 10X more
                  for consultants who figured this out early.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {/* Choice B */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white rounded-xl p-3 border border-green-200">
                  <Sparkles className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                    Choice B
                  </h2>
                  <p className="text-gray-700">
                    Join the waitlist. Get weekly insights.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p>
                  Learn how to position yourself as the authority in your
                  category.
                </p>

                <p className="font-medium">
                  Be first in line when beta spots open. In 12 months, you'll be
                  the one getting cited. The one competitors are trying to
                  catch. The one who saw it coming.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Reality Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Reality:
          </h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <p className="font-medium">This isn't about us. It's about you.</p>

            <p>
              The AEO shift is happening whether you're ready or not. ChatGPT
              hit 3.7 billion monthly visits. Perplexity grew 300%
              year-over-year. Google is showing AI Overviews on 84% of results.
            </p>

            <p className="text-xl font-semibold text-gray-900">
              The question isn't "if." The question is: Will you lead or follow?
            </p>
          </div>
        </div>
        {/* CTA Button */}
        <div className="flex justify-center mt-12 whitespace-nowrap">
          <button
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => {
              const section = document.getElementById("weekly-updates");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get Free AEO Checklist
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
