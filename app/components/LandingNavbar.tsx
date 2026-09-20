"use client";

import Link from "next/link";
import { useState } from "react";
export default function LandingNavbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
          mt-4
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-white/10
          bg-slate-950/80
          backdrop-blur-2xl
          px-6
          py-4
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
          "
        >

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            AI Resume{" "}
            <span
              className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              "
            >
              Analyzer
            </span>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#features"
              className="
              relative
              text-gray-300
              hover:text-white
              transition
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-blue-500
              after:transition-all
              hover:after:w-full
              "
            >
              Features
            </a>

            <a
              href="#pricing"
              className="
              relative
              text-gray-300
              hover:text-white
              transition
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-blue-500
              after:transition-all
              hover:after:w-full
              "
            >
              Pricing
            </a>

            <a
              href="#reviews"
              className="
              relative
              text-gray-300
              hover:text-white
              transition
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-blue-500
              after:transition-all
              hover:after:w-full
              "
            >
              Reviews
            </a>

            <a
              href="#faq"
              className="
              relative
              text-gray-300
              hover:text-white
              transition
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-blue-500
              after:transition-all
              hover:after:w-full
              "
            >
              FAQ
            </a>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Mobile Menu Button */}
           <button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-white text-2xl"
>
  {isOpen ? "✕" : "☰"}
</button>

            <Link
              href="/login"
              className="
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-white/10
              transition
              "
            >
              Login
            </Link>

            <Link
              href="/register"
              className="
              border
              border-blue-500
              text-blue-400
              px-4
              py-2
              rounded-lg
              hover:bg-blue-500/10
              transition
              "
            >
              Register
            </Link>

            <button
              className="
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              hover:scale-105
              text-white
              px-5
              py-2
              rounded-lg
              font-semibold
              shadow-lg
              shadow-blue-500/40
              transition-all
              duration-300
              "
            >
              Analyze Free
            </button>

          </div>

        </div>

      </div>
   {isOpen && (
  <div
    className="
    md:hidden
    fixed
    top-24
    left-4
    right-4
    bg-slate-900/95
    backdrop-blur-xl
    border
    border-white/10
    rounded-2xl
    p-6
    shadow-2xl
    "
  >
    <div className="flex flex-col gap-5">

      <a
        href="#features"
        onClick={() => setIsOpen(false)}
        className="text-white"
      >
        Features
      </a>

      <a
        href="#pricing"
        onClick={() => setIsOpen(false)}
        className="text-white"
      >
        Pricing
      </a>

      <a
        href="#reviews"
        onClick={() => setIsOpen(false)}
        className="text-white"
      >
        Reviews
      </a>

      <a
        href="#faq"
        onClick={() => setIsOpen(false)}
        className="text-white"
      >
        FAQ
      </a>

      <Link
        href="/login"
        className="text-blue-400"
      >
        Login
      </Link>

      <Link
        href="/register"
        className="text-blue-400"
      >
        Register
      </Link>

    </div>
  </div>
)}
    </header>
  );
}