"use client";

import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import React from "react";

const ProofItWorks: React.FC = () => {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Side - Robot Image */}
          <div className="relative flex items-stretch">
            <div className="relative w-full h-full rounded-3xl overflow-visible bg-gradient-to-br from-slate-900 via-teal-900 to-teal-800 flex items-center justify-center">
              {/* Grid Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Stars Effect */}
              <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.7 + 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Robot Image */}
              <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                {/* Using regular img since it’s an illustrative asset */}
                <img
                  src="/assets/robot-img.webp"
                  alt="Robot illustration"
                  className="w-auto h-[120%] md:h-[110%] object-contain translate-x-[15%] md:translate-x-[10%] drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 backdrop-blur-sm border border-slate-500 rounded-full mb-2 mt-2">
                <span className="text-emerald-400 text-sm">✦</span>
                <span className="text-sm text-slate-600">Building in Public</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We prove it works real time.
              </h1>

              <p className="text-lg text-slate-600 mb-8">
                Most agencies hide behind case studies you can't verify.
              </p>

              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                We're doing the opposite.
              </h2>

              <p className="text-lg text-slate-700">
                We built an AEO Engine and are now publishing everything.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Every Monday, You'll See:
              </h3>

              <div className="space-y-4">
                {[
                  "What we implemented (exact tactics)",
                  "Our citation numbers (real data)",
                  "What worked (and what bombed)",
                  "What we're changing next",
                ].map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 border border-green-900 rounded-full bg-green-100">
                      <Check className="w-4 h-4 text-green-700" />
                    </div>
                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <p className="text-lg text-slate-700 font-medium">
                No fluff. No cherry-picked wins. Just transparent progress.
              </p>

              <p className="text-lg text-slate-600">
                "We're building this system while you watch. If it works, you'll
                see it. If it doesn't, you'll see that too."
              </p>

              {/* CTA Button */}
              <div className="flex justify-center mt-12">
                <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Follow Our Journey
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProofItWorks;
