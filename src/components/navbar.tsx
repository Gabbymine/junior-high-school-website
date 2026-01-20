"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 w-full z-50 h-16 sm:h-18 lg:h-20
          ${
            scrolled
              ? "bg-[#050B14]/80 backdrop-blur-xl shadow-[0_0_25px_#22D3EE33]"
              : "bg-transparent"
          }
        `}
      >
        <div className="flex justify-between items-center px-6 lg:px-20 py-4">
          {/* LOGO */}
          <div className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent">
            KKB
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 text-sm font-medium text-[#E5E7EB]/80">
              {["Home", "About", "Gallery"].map((item) => (
                <li key={item} className="relative group">
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors hover:text-[#22D3EE]"
                  >
                    {item}
                  </a>
                  {/* Neon underline */}
                  <span
                    className="
                    absolute -bottom-2 left-0 w-0 h-[2px]
                    bg-gradient-to-r from-[#22D3EE] to-[#7C3AED]
                    transition-all duration-300 group-hover:w-full
                  "
                  />
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#contact"
              className="
                px-6 py-2 rounded-full text-sm font-semibold text-white
                bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]
                shadow-[0_0_20px_#22D3EE55]
                hover:scale-105 transition
              "
            >
              Ready
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#E5E7EB]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 z-50
          bg-gradient-to-b from-[#050B14] to-[#020617]
          transform transition-transform duration-300 md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <span className="text-lg font-bold bg-gradient-to-r from-[#22D3EE] to-[#7C3AED] bg-clip-text text-transparent">
            Menu
          </span>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <svg
              className="w-6 h-6 text-[#E5E7EB]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* LINKS */}
        <ul className="p-6 space-y-4 text-[#E5E7EB]/80">
          {["Home", "About", "Gallery"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="
                  block py-3 px-4 rounded-lg
                  hover:bg-[#22D3EE]/10
                  hover:text-[#22D3EE]
                  transition
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="p-6 border-t border-white/10">
          <a
            href="#contact"
            onClick={handleNavClick}
            className="
              block text-center py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#7C3AED] to-[#22D3EE]
              shadow-[0_0_25px_#22D3EE55]
            "
          >
            Get Service
          </a>
        </div>
      </div>
    </>
  );
}
