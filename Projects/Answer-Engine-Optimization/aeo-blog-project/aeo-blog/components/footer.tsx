import React from "react";
import { Facebook, Linkedin, Send, Instagram, Link } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1525] text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-[-0.09em]">
            <span className="text-[#2563eb]">The</span>
            <span className="text-[#10b981]">AEO</span>
            <span className="text-[#2563eb]">Engine</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Helping businesses optimize for AI search engines and answer
            platforms.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-[#10b981] flex items-center justify-center hover:bg-[#10b981] transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-[#10b981] flex items-center justify-center hover:bg-[#10b981] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-[#10b981] hover:text-white" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-[#10b981] flex items-center justify-center hover:bg-[#10b981] transition-colors"
            aria-label="Telegram"
          >
            <Send className="w-5 h-5 text-[#10b981] hover:text-white" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border-2 border-[#10b981] flex items-center justify-center hover:bg-[#10b981] transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-[#10b981] hover:text-white" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          {/* Privacy Policy */}
          <div className="text-center mt-4 mb-4">
            <a href="/privacy-policy" className="text-gray-400 text-sm">
              Our Privacy Policy
            </a>
          </div>
          © 2025 The AEO Engine. Fueling AI minds, one insight at a time. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
