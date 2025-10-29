"use client";

import React, { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";

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
          <h1 className="text-5xl sm:text-6xl md:text-2xl lg:text-7xl mb-8 leading-tight tracking-tight">
            Get <span className="font-bold">10X</span> More Clicks With
            <br />
            ChatGPT. Dominate AI Search.
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            42% of searches occur in ChatGPT, Perplexity, and Claude—not Google.
            Competitors are getting cited in answers. First movers will
            dominate; late movers will pay more for less.
          </p>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 mb-8 mt-8 inline-flex items-center space-x-2">
            <span className="font-satoshi">Get First Access to Beta</span>
            <ArrowUpRight />
          </button>

          {/* Waitlist Text */}
          <p className="text-sm text-slate-300 mb-20">
            Join the waitlist for exclusive weekly insights + first notification
            when spots open.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Card 1 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600 to-slate-800 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-4 text-left hover:border-slate-600/50 transition-all duration-300">
                <div className="text-5xl md:text-3xl font-semibold mb-3">
                  84%
                </div>
                <div className="text-slate-400 text-base">
                  Google results with AI
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-4 text-left hover:border-cyan-600/50 transition-all duration-300">
                <div className="text-5xl md:text-3xl font-semibold mb-3">
                  3.7B
                </div>
                <div className="text-slate-400 text-base">
                  Monthly ChatGPT visits
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-4 text-left hover:border-emerald-600/50 transition-all duration-300">
                <div className="text-5xl md:text-3xl font-semibold mb-3">
                  300%
                </div>
                <div className="text-slate-400 text-base">
                  Perplexity YoY growth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

export default Hero;
