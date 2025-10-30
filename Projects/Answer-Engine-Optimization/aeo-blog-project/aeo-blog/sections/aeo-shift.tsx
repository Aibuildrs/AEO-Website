"use client";

import React from "react";
import { X, Check, MoveRightIcon, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Define TypeScript interfaces
interface TimelineItem {
  period: string;
  description: string;
}

interface Slide {
  old?: string[];
  new?: string[];
  title?: string;
  timeline?: TimelineItem[];
  subtitle?: string;
  description?: string;
  highlight?: string;
  action?: string;
}

// Strongly typed slides array
const slides: Slide[] = [
  {
    old: [
      "Optimizing for Google rankings",
      "Building backlinks for authority",
      "Competing for positions #1-10",
      "Watching traffic slowly decline",
    ],
    new: [
      "Users asking AI directly—skipping Google entirely",
      "AI citing structured, entity-optimized content",
      "One answer appears. Yours or theirs.",
      "99%+ AI platforms growing 3000% YoY",
    ],
  },
  {
    title: "The Opportunity",
    timeline: [
      {
        period: "Today",
        description: "95% of companies haven't heard of AEO",
      },
      {
        period: "6 Months",
        description: "Your competitors start implementing",
      },
      {
        period: "12 Months",
        description: "Category leaders emerge in AI citations",
      },
      {
        period: "18 Months",
        description: "You're playing catch-up at 10X the cost",
      },
    ],
    subtitle: "This is SEO in 2008.",
    description:
      "The early movers won. The late movers spent years catching up.",
    highlight: "You have a choice:",
    action: "Lead now, or pay later.",
  },
];

const AEOShift: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 border border-slate-200 rounded-full mb-6 mt-[-8] whitespace-nowrap overflow-x-auto">
            <span className="text-cyan-400 text-sm">✦</span>
            <span className="flex items-center gap-1 text-sm text-slate-600 font-semibold">
              The SEO <MoveRightIcon className="w-3 flex-shrink-0" /> AEO Shift
              is Happening Now
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl font-bold mb-8 leading-tight">
            Dominate Search: Get found everywhere
            <br />
            your customer is looking
          </h1>

          <p className="text-xl text-slate-600 mb-4">
            You publish posts and build backlinks. But when asked about your
            solution, you're invisible.
            <br />
            Your competitor is the answer.
          </p>

          <p className="text-lg text-slate-600 mb-8">
            You publish blog posts. Build backlinks. Chase keywords. But when
            someone asks ChatGPT{" "}
            <span className="italic">"What's the best [your solution]?"</span>
            —you're invisible. Your competitor? They're the answer.
          </p>

          <div className="text-lg text-slate-600">
            <span className="font-semibold">Here's why:</span> AI platforms
            don't rank content. They cite it. And 99% of content isn't optimized
            for AI extraction.{" "}
            <span className="font-bold">The brutal truth?</span> Your SEO
            strategy is becoming obsolete faster than you think.
          </div>
        </div>

        {/* Section 1: Old vs New SEO Cards */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.25,
                duration: 0.5,
                ease: "easeOut",
              },
            },
          }}
        >
          {slides
            .filter((slide) => slide.old && slide.new)
            .map((slide, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Old SEO Card */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-red-50 border border-red-100 rounded-2xl p-4 sm:p-6"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-red-700 text-center md:text-left">
                    What You're Doing (Old SEO)
                  </h3>
                  <div className="space-y-2">
                    {slide.old?.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 border border-red-700 rounded-full bg-red-100">
                          <X className="w-4 h-4 text-red-700" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-800 leading-snug">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* New Reality Card */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-green-50 border border-green-100 rounded-2xl p-4 sm:p-6 mt-4 md:mt-0"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-green-700 mb-4 sm:mb-6 text-center md:text-left">
                    What's Killing You (New Reality)
                  </h3>
                  <div className="space-y-2">
                    {slide.new?.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 border border-green-700 rounded-full bg-green-100">
                          <Check className="w-4 h-4 text-green-700" />
                        </div>
                        <p className="text-sm sm:text-base text-gray-800 leading-snug">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </motion.div>

        {/* Section 2: Timeline Slides */}
        <div className="space-y-16 mt-16">
          {slides
            .filter((slide) => slide.timeline)
            .map((slide, idx) => (
              <div key={idx} className="max-w-7xl w-full mx-auto">
                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
                  {slide.title}
                </h1>

                {/* Timeline Cards */}
                <motion.div
                  className="grid grid-cols-1 text-center md:grid-cols-4 gap-6 mb-12"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.2,
                      },
                    },
                  }}
                >
                  {slide.timeline?.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: "easeOut" },
                        },
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -6,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 18,
                      }}
                      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all"
                    >
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {item.period}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Text */}
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-xl text-gray-700 mb-2">
                    <span className="font-bold">{slide.subtitle}</span>{" "}
                    {slide.description}{" "}
                    <span className="font-bold text-gray-900">
                      {slide.highlight}
                    </span>{" "}
                    {slide.action}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                  <button
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 whitespace-nowrap"
                    onClick={() => {
                      const section = document.getElementById("weekly-updates");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Get Weekly AEO Insights
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default AEOShift;
