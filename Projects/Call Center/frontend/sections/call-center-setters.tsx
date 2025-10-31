"use client";

import React from "react";
import { Check } from "lucide-react";

const CallCenterSetters: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto mt-8">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4 leading-tight">
          Everything you need to launch and run
          <br />
          your own remote call center.
        </h1>
        <p className="text-lg md:text-base text-slate-300 max-w-4xl mx-auto text-center">
          Recruit. Train. Technology. Operations. Protection. We build it. You
          own it. Forever.
        </p>
      </div>
      <div className="container mx-auto px-6 py-6 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
              Call Center Setters™
            </h1>

            <p className="text-lg text-gray-300 italic">
              Your global team of trained appointment setters
            </p>

            <p className="text-gray-300 leading-relaxed">
              We recruit fluent, performance-driven setters from our global
              talent pool. Every setter is vetted, interviewed, and certified
              before they touch your leads.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl">What you get:</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Setters who sound professional, not scripted
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Fluent English speakers trained in outbound communication
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Team members who represent YOUR brand, not ours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#253041] border border-green-500/30 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Result:</span> A team that dials with confidence and books
                with consistency.
              </p>
            </div>
          </div>

          {/* Left Illustration */}
          <div className="relative lg:pl-12">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Central Globe Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 lg:w-150 lg:h-200">
                <div className="relative w-full h-full">
                  <img
                    src="/assets/call-center-setters-img.svg"
                    alt="Call Center Setters"
                    className="w-full h-full object-contain opacity-100 drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenterSetters;
