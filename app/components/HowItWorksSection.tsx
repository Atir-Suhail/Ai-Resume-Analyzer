import {
  Upload,
  Brain,
  BarChart3,
  Rocket,
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Upload size={40} />,
      title: "Upload Resume",
      description:
        "Upload your PDF resume securely in seconds.",
    },
    {
      icon: <Brain size={40} />,
      title: "AI Analysis",
      description:
        "Our AI scans your resume and extracts key information.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Get ATS Score",
      description:
        "Receive ATS compatibility score and detailed feedback.",
    },
    {
      icon: <Rocket size={40} />,
      title: "Improve & Apply",
      description:
        "Optimize your resume and increase interview chances.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            How It Works
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Analyze your resume in just a few simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="
              relative
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-8
              text-center
              hover:border-blue-500
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div
                className="
                absolute
                -top-4
                left-1/2
                -translate-x-1/2
                bg-blue-600
                text-white
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                font-bold
                "
              >
                {index + 1}
              </div>

              <div className="text-blue-500 mt-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mt-5">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}