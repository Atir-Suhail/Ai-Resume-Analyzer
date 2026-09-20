"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Brain,
  Target,
  FileSearch,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 size={40} />,
      title: "ATS Score Analysis",
      description:
        "Get an instant ATS compatibility score and improve recruiter visibility.",
    },
    {
      icon: <Brain size={40} />,
      title: "AI Resume Review",
      description:
        "AI analyzes your resume and provides actionable feedback.",
    },
    {
      icon: <Target size={40} />,
      title: "Job Match",
      description:
        "Compare your resume against job descriptions and find gaps.",
    },
    {
      icon: <FileSearch size={40} />,
      title: "Keyword Optimization",
      description:
        "Discover missing keywords recruiters and ATS systems look for.",
    },
    {
      icon: <Sparkles size={40} />,
      title: "Smart Suggestions",
      description:
        "Get recommendations to improve skills, projects and experience sections.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure & Private",
      description:
        "Your resumes remain protected and accessible only to you.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Everything you need to optimize your resume and
            increase interview chances.
          </p>
        </div>

        

          
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {features.map((feature, index) => (

    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="
      relative
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-8
      overflow-hidden
      hover:border-blue-500
      transition-all
      duration-300
      "
    >

      {/* Glow Effect */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-blue-600/0
        via-blue-600/5
        to-cyan-500/0
        opacity-0
        hover:opacity-100
        transition-all
        duration-500
        "
      />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 5,
          scale: 1.15,
        }}
        className="
        text-blue-500
        mb-6
        relative
        z-10
        "
      >
        {feature.icon}
      </motion.div>

      {/* Title */}
      <h3
        className="
        text-2xl
        font-semibold
        text-white
        mb-3
        relative
        z-10
        "
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        className="
        text-gray-400
        relative
        z-10
        "
      >
        {feature.description}
      </p>

    </motion.div>

  ))}

</div>
          )

        
      </div>
    </section>
  );
}