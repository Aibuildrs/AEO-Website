"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for nav link items
interface NavLink {
  href: string;
  text: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navlinks: NavLink[] = [
    { href: "/", text: "Home" },
    { href: "/#blog", text: "Blog" },
    { href: "/#proof-it-works", text: "Building in Public" },
  ];

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl shadow-sm bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950"
      >
        <div className="flex items-center justify-between h-20 px-6 md:px-16 lg:px-24 xl:px-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-indigo-200 lg:text-3xl font-satoshi tracking-[-0.05em]">
              The<span className="text-slate-200">AEO</span>Engine
            </h1>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navlinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="relative group font-medium text-base transition text-slate-200"
                >
                  {link.text}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-slate-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-slate-200 px-6 py-3 border border-slate-200 rounded-full hover:bg-slate-200/30 transition font-satoshi"
              onClick={() => {
                const section = document.getElementById("weekly-updates");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Join Waitlist
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
            className="fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-2xl gap-8 text-slate-200 text-lg"
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
                  className="hover:text-slate-200 transition"
                >
                  {link.text}
                </Link>
              </motion.div>
            ))}

            <motion.button
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/40 rounded-full backdrop-blur-md"
            >
              Close Menu
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
