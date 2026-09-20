"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How many free analyses do I get?",
      answer:
        "Guest users receive 2 free analyses. Registered users receive 10 free analyses. Premium users enjoy unlimited analyses.",
    },
    {
      question: "Can I upload PDF resumes?",
      answer:
        "Yes. PDF resumes are fully supported and analyzed instantly by our AI engine.",
    },
    {
      question: "How is the ATS score calculated?",
      answer:
        "Our AI evaluates formatting, keywords, skills, experience, education, and recruiter-friendly resume structure to generate an ATS score.",
    },
    {
      question: "Is my resume data secure?",
      answer:
        "Absolutely. Your resume data is stored securely and is never shared with third parties.",
    },
    {
      question: "Can I upgrade to Premium later?",
      answer:
        "Yes. You can upgrade at any time to unlock unlimited analyses, advanced job matching, and premium AI features.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Everything you need to know about AI Resume Analyzer.
          </p>
        </div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setOpenIndex(
                    openIndex === index ? null : index
                  )
                }
                className="
                w-full
                flex
                justify-between
                items-center
                p-6
                text-left
                "
              >
                <span className="text-white font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`
                  text-gray-400
                  transition-transform
                  duration-300
                  ${
                    openIndex === index
                      ? "rotate-180"
                      : ""
                  }
                  `}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}