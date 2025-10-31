"use client";

import React from "react";

interface ProblemCardProps {
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ title, description }) => {
  return (
    <div className="bg-pink-50 rounded-lg p-6 flex flex-col gap-4">
      <div className="w-16 h-16 bg-red-200 rounded-xl border-1 border-red-300 flex items-center justify-center">
        <svg
          className="w-8 h-8 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const SalesProblemsSection: React.FC = () => {
  const problems = [
    {
      title: "You're spending thousands on leads that never pick up",
      description:
        "Dead leads don't close deals. But someone who answers a call? That's a conversation.",
    },
    {
      title: "Your sales team is too expensive to waste on cold calling",
      description:
        "Your closers should be closing—not spending 6 hours a day getting hung up on.",
    },
    {
      title: "Hiring SDRs is slow, expensive, and they quit",
      description:
        "You train them. They leave. You start over. The cycle never ends. But each time, you learn a little more.",
    },
    {
      title: "Outsourced call centers sound robotic and kill your brand",
      description:
        "Generic scripts and thick accents show a lack of product knowledge. this can lead to misunderstandings and frustration for customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 text-center mb-12 leading-tight">
          Your competitors are dialing. You're
          <br />
          waiting for inbound.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 text-center mt-8">
        <p className="text-sm md:text-lg max-w-2xl mb-6 leading-relaxed">
          Here's what's really happening: While you're waiting for leads to come
          to you, your <br />
          competitors are building pipelines by going to them.
        </p>
        {/* CTA Button */}
        <button className="inline-flex items-center gap-3 px-6 py-4 bg-teal-400 text-slate-900 rounded-full text-lg md:text-lg hover:bg-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
          See How This Works
        </button>
      </div>
    </div>
  );
};

export default SalesProblemsSection;
