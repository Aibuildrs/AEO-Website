"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  text: string;
  highlight?: boolean; // optional to differentiate "Home" color
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navlinks: NavLink[] = [
    { href: "#home", text: "Home", highlight: true },
    { href: "#problem", text: "Problem" },
    { href: "#solution", text: "Solution" },
    { href: "#proof", text: "Proof" },
    { href: "#how-it-works", text: "How It Works" },
    { href: "#guarantee", text: "Guarantee" },
    { href: "#faq", text: "FAQ" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl shadow-sm"
      >
        <div className="flex items-center justify-between h-20 px-6 md:px-16 lg:px-24 xl:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <circle cx="25" cy="18" r="6" fill="currentColor" />
              <ellipse cx="25" cy="28" rx="4" ry="6" fill="currentColor" />
              <rect x="15" y="35" width="4" height="10" rx="2" fill="currentColor" />
              <rect x="23" y="35" width="4" height="12" rx="2" fill="currentColor" />
              <rect x="31" y="35" width="4" height="10" rx="2" fill="currentColor" />
            </svg>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-14 text-sm font-medium">
            {navlinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className={`relative group transition ${
                    link.highlight
                      ? "text-teal-400 hover:text-teal-300"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.text}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Book Call Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-700 border-2 border-teal-400 text-teal-400 rounded-full font-medium hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              onClick={() => {
                const section = document.getElementById("book-call");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Call
            </motion.button>
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? (
              <X className="text-slate-200 w-7 h-7" />
            ) : (
              <Menu className="text-slate-200 w-7 h-7" />
            )}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-2xl gap-8 text-slate-200 text-lg bg-slate-900/50"
          >
            {navlinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={link.highlight ? "text-teal-400" : ""}
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-teal-400 text-slate-900 border border-teal-400 rounded-full backdrop-blur-md"
            >
              Book Call
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
