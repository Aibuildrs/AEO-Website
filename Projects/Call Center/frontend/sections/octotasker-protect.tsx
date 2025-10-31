"use client";

import React from "react";
import { Check } from "lucide-react";

const OctotaskerProtect: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-4">
      <div className="container mx-auto px-6 py-6 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
              Octotasker Protect™
            </h1>

            <p className="text-lg text-gray-300 italic">
              Your team replacement guarantee
            </p>

            <p className="text-gray-300 leading-relaxed">
              Setters quit. It happens. With Protect™, we replace any team
              member at no additional cost.
            </p>

            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Upgrade to Protect Plus:</span> Pause your call center during slow seasons and relaunch when you're ready-no penalties, no fees.
              </p>
            </div>
            <div className="bg-[#253041] border border-green-500/30 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Result:</span> Zero downtime. Zero risk. Full protection.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:pl-12">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Central Globe Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 lg:w-180 lg:h-140">
                <div className="relative w-full h-full">
                  <img
                    src="/assets/octotasker-protect-img.svg"
                    alt="Octotasker Protect"
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

export default OctotaskerProtect;
