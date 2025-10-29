"use client";

import React, { useState } from "react";
import { MessageCircle, FileText, Languages } from "lucide-react";

interface CardData {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const AEOComparisonSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Cards data
  const cards: CardData[] = [
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      number: "1",
      title: "Find the Gaps",
      description: "Identify questions AI can't answer yet.",
    },
    {
      icon: <FileText className="w-6 h-6 text-emerald-500" />,
      number: "2",
      title: "Structured Content",
      description: "Format AI ensures data integrity and reliability.",
    },
    {
      icon: <Languages className="w-6 h-6 text-emerald-500" />,
      number: "3",
      title: "Schema Markup",
      description: "The language AI platforms understand",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      number: "4",
      title: "Answer Writing",
      description: "Clear and strong. This message resonates.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      number: "5",
      title: "Entity Optimization",
      description: "Position as the category authority",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-white">
      {/* What is AEO Button */}
      <div className="flex justify-center pt-4 pb-12">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-2 px-6 py-3 border border-emerald-500/30 rounded-full hover:border-emerald-500/60 hover:bg-emerald-500/5 transition-all duration-300"
        >
          <span className="text-cyan-400 text-sm">✦</span>
          <span className="text-gray-300 group-hover:text-white transition-colors">
            What Is Answer Engine Optimization? (AEO)
          </span>
        </button>
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100 mb-16" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur">
            <p className="text-gray-300 text-lg leading-relaxed">
              Answer Engine Optimization (AEO) is the practice of optimizing
              your content to be directly cited by AI platforms like ChatGPT,
              Perplexity, Claude, and Gemini. Unlike traditional SEO which
              focuses on ranking in search results, AEO ensures your brand
              appears as the authoritative answer when users ask AI assistants
              questions about your industry or solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <div className="container mx-auto px-6 text-center mb-10">
        <h1 className="text-5xl md:text-5xl font-bold mb-8 leading-tight">
          Get Cited in the Answer - Not Buried
          <br />
          in the Results
        </h1>
      </div>

      {/* The Difference Section */}
      <div className="w-full mb-16 relative px-6">
        <h2 className="text-lg md:text-xl font-semibold text-center text-slate-500 mb-6">
          The Difference:
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center relative justify-center max-w-4xl mx-auto">
          {/* Traditional SEO Card */}
          <div className="relative group h-28">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-900/80 border border-red-900/30 rounded-2xl p-4 backdrop-blur hover:border-red-900/50 transition-all duration-300 h-full flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-red-400 mb-1">
                Traditional SEO
              </h3>
              <p className="text-gray-300 text-sm mb-0">
                Traditional SEO = Rank #1 on Google
              </p>
            </div>
          </div>

          {/* AEO Card */}
          <div className="relative group h-28">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-900/80 border border-emerald-900/30 rounded-2xl p-4 backdrop-blur hover:border-emerald-900/50 transition-all duration-300 h-full flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-emerald-400 mb-1">
                Answer Engine Optimization (AEO)
              </h3>
              <p className="text-gray-300 text-sm mb-0">
                Get cited by ChatGPT, Gemini, Perplexity & Claude
              </p>
            </div>
          </div>

          {/* VS Divider */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="bg-slate-800 border-2 border-slate-700 rounded-full w-14 h-14 flex items-center justify-center text-center shadow-lg">
              <span className="text-xl font-bold text-gray-400">VS</span>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-6 max-w-5xl pb-2">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-2">
          How It Works:
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
          Optimize for citability by creating shareable content. Deliver value
          <br />
          and insights to establish your authority.
        </p>
      </div>

      {/* Integrated Strategy Cards Section */}
      <div className="min-h-screen py-16 px-2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden group"
              >
                {/* Large Number Background */}
                <div className="absolute inset-0 flex items-center justify-center text-[250px] font-bold text-slate-700/20 leading-none select-none pointer-events-none mb-8">
                  {card.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 mb-6 inline-flex items-center justify-center w-14 h-14 bg-slate-900/80 border-2 border-emerald-500 rounded-xl group-hover:bg-emerald-500/10 transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="container mx-auto px-6 max-w-5xl pb-6 mt-6">
          <h3 className="text-xl text-gray-400 text-center max-w-3xl mx-auto leading-relaxed">
            Result: When users ask AI about your category, you're cited as the
            expert—
            <br /> before they even compare options.
          </h3>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default AEOComparisonSection;
