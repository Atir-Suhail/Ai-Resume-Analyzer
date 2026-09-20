"use client";

import { motion, AnimatePresence } from "framer-motion";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
}: AuthModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            z-[90]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className="
            fixed
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[90%]
            max-w-md
            bg-slate-900
            border
            border-white/10
            rounded-3xl
            p-8
            z-[100]
            shadow-2xl
            "
          >
            <button
              onClick={onClose}
              className="
              absolute
              right-4
              top-4
              text-gray-400
              hover:text-white
              "
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-white text-center">
              AI Resume Analyzer
            </h2>

            <p className="text-gray-400 text-center mt-3">
              Continue to analyze your resume
            </p>

            <div className="mt-8 space-y-4">

              <button
                className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                py-3
                rounded-xl
                text-white
                font-semibold
                "
              >
                Login
              </button>

              <button
                className="
                w-full
                border
                border-blue-500
                text-blue-400
                py-3
                rounded-xl
                font-semibold
                "
              >
                Register
              </button>

              <button
                className="
                w-full
                bg-slate-800
                hover:bg-slate-700
                py-3
                rounded-xl
                text-white
                "
              >
                Continue as Guest
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}