"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Layers } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/experimental-programme", label: "Methodology" },
  { href: "/feasibility", label: "Feasibility" },
  { href: "/team", label: "Team" },
  { href: "/references", label: "References" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur ${
        isScrolled
          ? "bg-white/95 border-b border-gray-100 shadow-sm"
          : "bg-white/80"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-700 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Layers className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-jakarta font-bold text-lg text-slate-900 leading-tight">
                Geo<span className="text-blue-700">FYP</span>
              </span>
              <p className="text-[10px] text-gray-400 font-inter leading-none hidden sm:block">
                Geotechnical Research
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-gray-600 hover:text-blue-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/feasibility"
              className="px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-200 rounded-xl hover:bg-blue-50 transition-all duration-200"
            >
              View Report
            </Link>
            <Link
              href="/research"
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-700 rounded-xl hover:bg-blue-800 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Explore Research →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                href="/feasibility"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center px-4 py-3 text-sm font-semibold text-blue-700 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
              >
                View Report
              </Link>
              <Link
                href="/research"
                onClick={() => setIsMobileOpen(false)}
                className="block text-center px-4 py-3 text-sm font-semibold text-white bg-blue-700 rounded-xl"
              >
                Explore Research →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
