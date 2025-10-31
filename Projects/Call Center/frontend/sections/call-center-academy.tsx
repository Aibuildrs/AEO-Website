import React from "react";
import { Check } from "lucide-react";

export default function CallCenterAcademy() {
  return (
    <div className="min-h-screen bg-[#2a3544] text-white">
      <div className="container mx-auto px-6 py-4 lg:py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Illustration */}
          <div className="relative">
            <img
              src="/assets/call-center-academy-img.svg"
              alt="Call Center Academy"
              className="w-full h-full object-contain opacity-100 drop-shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight whitespace-nowrap">
              Call Center Academy™
            </h1>

            <p className="text-lg text-gray-300 italic">
              Your 3-week training & certification program
            </p>

            <p className="text-gray-300 leading-relaxed">
              We don't hand you generic callers. We build a training program
              around YOUR offer, YOUR objections, YOUR close. It's a rigorous
              3-week program where setters learn your playbook, master your
              messaging, and prove themselves on live calls before they're
              officially placed on your team.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">What you get:</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Custom script development based on your offer
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Objection handling specific to your industry
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Role-play certification before going live
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-green-400 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-400" strokeWidth={3} />
                  </div>
                  <p className="text-gray-300">
                    Week 3 live dialing—they book real appointments before
                    placement
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#1f2937] border border-green-500/30 rounded-lg p-6">
              <p className="text-gray-200">
                <span>Result:</span> Only the best performers who've proven they
                can book make it to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
