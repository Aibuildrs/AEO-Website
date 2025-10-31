import React from "react";
import { PhoneCall, Share2, UserRoundCheck } from "lucide-react";

const CallCenterLanding: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/assets/hero-img.png')] bg-cover bg-center opacity-60"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-teal-900 to-cyan-900 opacity-80"></div>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl  md:text-6xl font-semibold leading-tight mb-8 md:mt-24">
            Build a call center that generates leads,
            <br />
            books calls and fills your pipeline, every
            <br />
            day-without hiring a single person.
          </h1>

          <p className="text-lg md:text-base text-slate-300 mb-12 max-w-4xl mx-auto">
            We recruit the team. We train them on your offer. We set up the
            technology. You get booked appointments, qualified leads, and a
            system that scales. Built once. Owned forever.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-teal-400 text-slate-900 rounded-full  text-lg hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <PhoneCall size={24} />
            Talk to the Dial Squad
          </button>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 max-w-6xl mx-auto mt-18">
            {/* Feature 1 */}
            <div className="flex flex-row items-center text-center">
              <div className="w-14 h-14 border-2 border-teal-400 rounded-2xl flex items-center justify-center mb-4">
                <PhoneCall size={28} className="text-teal-400" />
              </div>
              <div className="relative text-left px-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Cold calls made daily
                </h3>
                <p className="text-gray-400 text-sm">
                  your offer, your script, your results
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-row items-center text-center">
              <div className="w-14 h-14 border-2 border-teal-400 rounded-2xl flex items-center justify-center mb-4">
                <UserRoundCheck size={28} className="text-teal-400" />
              </div>
              <div className="relative text-left px-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">Trained setters</h3>
                <p className="text-gray-400 text-sm">
                  who sound like your best closers
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-row items-center text-center">
              <div className="w-14 h-14 border-2 border-teal-400 rounded-2xl flex items-center justify-center mb-4">
                <Share2 size={28} className="text-teal-400" />
              </div>
              <div className="relative text-left px-4 mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Full tech ownership
                </h3>
                <p className="text-gray-400 text-sm">
                  no subscriptions, no middlemen, no limits
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CallCenterLanding;
