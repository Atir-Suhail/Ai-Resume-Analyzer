"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const [atsScore, setAtsScore] = useState(0);
const [analyses, setAnalyses] = useState(0);
const [accuracy, setAccuracy] = useState(0);

useEffect(() => {
  let ats = 0;
  let ana = 0;
  let acc = 0;

  const interval = setInterval(() => {
    if (ats < 87) {
      ats += 1;
      setAtsScore(ats);
    }

    if (ana < 10000) {
      ana += 200;
      setAnalyses(ana);
    }

    if (acc < 95) {
      acc += 1;
      setAccuracy(acc);
    }

    if (ats >= 87 && ana >= 10000 && acc >= 95) {
      clearInterval(interval);
    }
  }, 30);

  return () => clearInterval(interval);
}, []);
  return (
    <section
  className="
  relative
  min-h-screen
  pt-32
  bg-gradient-to-br
  from-slate-950
  via-slate-900
  to-blue-950
  flex
  items-center
  overflow-hidden
  "
>
<div className="absolute inset-0 overflow-hidden">

  <div
    className="
    absolute
    top-20
    left-20
    w-72
    h-72
    bg-blue-600/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  />

  <div
    className="
    absolute
    bottom-20
    right-20
    w-96
    h-96
    bg-cyan-500/20
    rounded-full
    blur-3xl
    animate-pulse
    "
  />

  <div
    className="
    absolute
    top-1/2
    left-1/2
    w-80
    h-80
    bg-purple-600/10
    rounded-full
    blur-3xl
    -translate-x-1/2
    -translate-y-1/2
    animate-pulse
    "
  />

</div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 pt-20">

        {/* Left Side */}
        <div>
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="inline-block bg-blue-600 px-4 py-2 rounded-full text-white text-sm"
  >
    🚀 2 Free Analyses • No Login Required
  </motion.span>

  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl lg:text-7xl font-bold text-white mt-6 leading-tight"
  >
    Analyze Your Resume
    <span className="text-blue-500"> With AI</span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      delay: 0.3,
    }}
    className="
    text-slate-300
    text-lg
    mt-6
    leading-relaxed
    "
  >
    Get ATS Score, Skill Gap Analysis,
    Job Match Insights, and personalized
    recommendations to land more interviews.
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="
flex
flex-col
sm:flex-row
gap-4
mt-8
"
  >
    <button
      className="
      bg-blue-600
      hover:bg-blue-700
      px-8
      py-4
      rounded-xl
      text-white
      font-semibold
      transition
      "
    >
      Analyze Free
    </button>

    <button
      className="
      border
      border-slate-600
      hover:border-blue-500
      px-8
      py-4
      rounded-xl
      text-white
      transition
      "
    >
      Watch Demo
    </button>
  </motion.div>
</div>

        {/* Right Side */}
       <motion.div
  initial={{
    opacity: 0,
    x: 80,
  }}
  animate={{
    opacity: 1,
    x: 0,
  }}
  transition={{
    duration: 0.8,
    delay: 0.4,
  }}
  className="
  bg-slate-900/70
  backdrop-blur-xl
  rounded-3xl
  p-8
  border
  border-white/10
  shadow-2xl
  shadow-blue-900/30
  "
>
  <h3 className="text-white text-xl font-semibold">
    Resume Analysis Preview
  </h3>

  <motion.div
  whileHover={{
    scale: 1.03,
  }}
  className="
  mt-6
  bg-gradient-to-r
  from-green-500
  to-emerald-600
  rounded-xl
  p-6
  text-center
  shadow-lg
  cursor-pointer
  "
>
    <p className="text-white text-lg">
      ATS Score
    </p>

    <h2 className="text-5xl text-white font-bold">
     {atsScore}%
    </h2>
  </motion.div>

  <div className="mt-6 text-slate-300 space-y-3">
    <p>✅ Strong Technical Skills</p>
    <p>✅ Good Project Experience</p>
    <p>⚠ Add More Quantified Results</p>
    <p>⚠ Improve Summary Section</p>
  </div>
  <div className="mt-8 grid grid-cols-3 gap-4">

 <motion.div
  whileHover={{
    y: -5,
  }}
  className="
  bg-slate-800
  rounded-xl
  p-4
  text-center
  border
  border-slate-700
  "
>
    <h4 className="text-2xl font-bold text-blue-500">
      {analyses.toLocaleString()}+
    </h4>
    <p className="text-gray-400 text-sm">
      Analyses
    </p>

  </motion.div>

  <div className="bg-slate-800 rounded-xl p-4 text-center">
    <h4 className="text-2xl font-bold text-green-500">
     {accuracy}%
    </h4>
    <p className="text-gray-400 text-sm">
      ATS Accuracy
    </p>
  </div>

  <div className="bg-slate-800 rounded-xl p-4 text-center">
    <h4 className="text-2xl font-bold text-purple-500">
      4.9★
    </h4>
    <p className="text-gray-400 text-sm">
      Rating
    </p>
  </div>

</div>
</motion.div>

      </div>

    </section>
  );
}   