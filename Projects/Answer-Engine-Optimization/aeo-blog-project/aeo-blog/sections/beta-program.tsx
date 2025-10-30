"use client";

import React from "react";
import {
  Clock,
  TrendingUp,
  Zap,
  Lightbulb,
  Check,
  ArrowUpRight,
} from "lucide-react";

import { motion, Variants } from "framer-motion";

const columnVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BetaProgram: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white">
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 border border-slate-200 rounded-full mb-6 mt-[-8]">
            <span className="text-cyan-400 text-sm">✦</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">
              Beta Program
            </span>
          </div>

          <h1 className="text-xl md:text-5xl font-bold mb-8 leading-tight">
            10 Beta Partners, One Goal:
            <br />
            Dominate AI Search Before Your Competitors
            <br />
            Wake Up.
          </h1>

          <p className="text-xl text-gray-400 mb-4">
            We're running the AEO Engine with 10 founding beta partners to
            refine the system before wider launch.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={columnVariants}
          >
            {/* Left Column - Why Join */}
            <motion.div
              className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-8 whitespace-nowrap">
                Why Join the Waitlist?
              </h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Clock className="w-6 h-6 text-emerald-500" />,
                    title: "Weekly Updates",
                    text: "Our exact results, what's working, what we're learning",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
                    title: "AEO Insights",
                    text: "How to prepare your content for AI citations",
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-emerald-500" />,
                    title: "First Access",
                    text: "Be first notified when spots open, so you never miss an opportunity!",
                  },
                  {
                    icon: <Lightbulb className="w-6 h-6 text-emerald-500" />,
                    title: "Bonus",
                    text: "AEO Implementation Checklist (sent immediately)",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Beta Partners */}
            <motion.div
              className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800"
              variants={itemVariants}
            >
              <h2 className="text-3xl font-bold mb-8">
                What Beta Partners Get:
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  "Full AEO content strategy (custom to your business)",
                  "Done-for-you implementation",
                  "20-30 optimized articles/month",
                  "AI citation tracking dashboard",
                  "Direct access to our team",
                  "Founding partner pricing (locked in for life)",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                    <p className="text-slate-300">{text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <p className="text-slate-400 text-sm">
                  No fluff. No cherry-picked wins. Just transparent progress.
                </p>
                <p className="text-slate-400 text-sm">
                  Current Status: Waitlist Open (Beta Starts Q1 2025)
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              Get Free AEO Checklist
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BetaProgram;
