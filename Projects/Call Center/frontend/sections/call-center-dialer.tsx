"use client";

import React from "react";
import { Check } from "lucide-react";

const CallCenterDialer: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1a2332] text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-4">
      <div className="container mx-auto px-6 py-6 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
              Call Center Dialer™
            </h1>

            <p className="text-lg text-gray-300 italic">
              Your direct-to-carrier dialing system
            </p>

            <p className="text-gray-300 leading-relaxed">
            most dialers are middlemen. They resell minutes, throttle connections, and overcharge you.
            </p>
            <p className="text-gray-300 leading-relaxed">
            Call Center Dialer™ removes the middleman.
            </p>
            <p className="text-gray-300 leading-relaxed">
            You get direct carrier-level connectivity through TBI Telecom-the same infrastructure Fortune 500 call centers use.
            </p>


            <div className="space-y-4">
              <h2 className="text-xl">What you get:</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Wholesale pricing (~$0.0055/min vs. $0.02+ from resellers)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                  Dial up to 14 lines per agent (expandable to 100)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Better call quality, zero throttling, full control
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Built on VICIdial-trusted globally by enterprise call centers
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#253041] border border-green-500/30 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Result:</span> More calls. Better connections. Lower costs.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:pl-12">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Central Globe Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 lg:w-150 lg:h-200">
                <div className="relative w-full h-full">
                  <img
                    src="/assets/call-center-dialer-img.svg"
                    alt="Call Center Dialer"
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

export default CallCenterDialer;
