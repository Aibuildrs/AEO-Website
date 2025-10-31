"use client";

import React from "react";
import { Check } from "lucide-react";

const CallCenterOperator: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2a3544] text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-4">
      <div className="container mx-auto px-6 py-6 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="relative lg:pl-12">
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              {/* Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 lg:w-150 lg:h-200">
                <div className="relative w-full h-full">
                  <img
                    src="/assets/call-center-operator-img.svg"
                    alt="Call Center Operator"
                    className="w-full h-full object-contain opacity-100 drop-shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
              Call Center Operator™
            </h1>

            <p className="text-lg text-gray-300 italic">
              Your 4-week performance optimization phase
            </p>

            <p className="text-gray-300 leading-relaxed">
              We don't just build your call center and disappear. For the first
              4 weeks, we manage operations, coach your team, and optimize
              performance in-real-time.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl">What you get:</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Daily call monitoring and feedback
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Script refinement based on live call data
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Performance tracking and weekly reporting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Transition plan for long-term ownership
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Upgrade to Operator Plus:</span> We manage your call
                center for 4 months, recruit and train a permanent in-house
                operator, then hand you the keys.
              </p>
            </div>
            <div className="bg-[#253041] border border-green-500/30 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Result:</span> Short-term structure. Long-term ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenterOperator;
