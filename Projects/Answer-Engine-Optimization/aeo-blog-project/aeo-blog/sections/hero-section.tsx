"use client";

import React, { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "84%", label: "Google results with AI" },
  { value: "3.7B", label: "Monthly ChatGPT visits" },
  { value: "300%", label: "Perplexity YoY growth" },
];

const Hero: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white relative bg-cover"
      style={{ backgroundImage: "url('/assets/hero-img.webp')" }}
    >
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={
          {
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          } as CSSProperties
        }
      />

      {/* Stars Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={
              {
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
              } as CSSProperties
            }
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-slate-800/40 backdrop-blur-sm border border-slate-500 rounded-full mb-12 mt-12">
            <span className="text-cyan-400 text-sm">✦</span>
            <span className="text-sm text-slate-300">
              The AEO Window Closes in 6 Months
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-6xl md:text-2xl lg:text-7xl mb-8 leading-tight tracking-tight">
            Get <span className="font-bold">10X</span> More Clicks With
            <br />
            ChatGPT. Dominate AI Search.
          </h1>

          <div className="py-6 flex justify-center">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              <img
                src="/assets/google-logo.png"
                alt="Google"
                className="h-8 w-auto sm:h-8"
              />

              <img
                src="/assets/chatgpt-logo.png"
                alt="ChatGPT"
                className="h-8 w-auto sm:h-8"
              />

              <img
                src="/assets/gemini-logo.png"
                alt="Gemini"
                className="h-8 w-auto sm:h-8"
              />

              <img
                src="/assets/perplexity-logo.png"
                alt="Perplexity"
                className="h-10 sm:h-12 w-auto"
              />

              <img
                src="/assets/meta-logo.png"
                alt="Meta"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
          </div>

          {/* Subheading */}
          <p className="text-slate-300 text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            42% of searches occur in ChatGPT, Perplexity, and Claude—not Google.
            Competitors are getting cited in answers. First movers will
            dominate; late movers will pay more for less.
          </p>

          {/* CTA Button */}
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 mb-8 mt-8 inline-flex items-center space-x-2"
            onClick={() => {
              const section = document.getElementById("weekly-updates");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="font-satoshi">Get First Access to Beta</span>
            <ArrowUpRight />
          </button>

          {/* Waitlist Text */}
          <p className="text-sm text-slate-300 mb-20">
            Join the waitlist for exclusive weekly insights + first notification
            when spots open.
          </p>

          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  duration: 0.5,
                  ease: "easeOut",
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="relative text-center bg-slate-900/60 border border-slate-100/50 rounded-3xl p-6 cursor-default backdrop-blur-sm shadow-lg hover:shadow-slate-900/50 transition-shadow"
              >
                <div className="text-3xl md:text-3xl font-semibold mb-3 text-slate-50">
                  {item.value}
                </div>
                <div className="text-slate-400 text-base">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Hero;
