import {
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function LiveDemoSection() {
  return (
    <section
      id="demo"
      className="bg-slate-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-white">
            Live Resume Analysis Demo
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            See how our AI analyzes resumes in seconds.
          </p>

        </div>

        <div
          className="
          max-w-4xl
          mx-auto
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          p-10
          shadow-2xl
          "
        >

          <div className="flex items-center justify-between">

            <div>
              <h3 className="text-white text-2xl font-bold">
                Resume Score
              </h3>

              <p className="text-gray-400">
                ATS Compatibility
              </p>
            </div>

            <div
              className="
              w-28
              h-28
              rounded-full
              border-8
              border-green-500
              flex
              items-center
              justify-center
              text-3xl
              font-bold
              text-white
              "
            >
              86
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">

            <div>

              <h4 className="text-green-400 font-semibold text-xl mb-4">
                Skills Found
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} />
                  Java
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} />
                  Spring Boot
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} />
                  React.js
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle size={20} />
                  PostgreSQL
                </div>

              </div>

            </div>

            <div>

              <h4 className="text-red-400 font-semibold text-xl mb-4">
                Missing Skills
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-2 text-gray-300">
                  <XCircle size={20} />
                  Docker
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <XCircle size={20} />
                  AWS
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <XCircle size={20} />
                  Kubernetes
                </div>

              </div>

            </div>

          </div>

          <div className="mt-10">

            <div className="flex justify-between mb-2">
              <span className="text-white font-semibold">
                Job Match Score
              </span>

              <span className="text-blue-400 font-bold">
                92%
              </span>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-4">
              <div
                className="
                bg-gradient-to-r
                from-blue-500
                to-cyan-400
                h-4
                rounded-full
                w-[92%]
                "
              ></div>
            </div>

          </div>

          <div
            className="
            mt-10
            bg-slate-800
            rounded-2xl
            p-6
            border
            border-slate-700
            "
          >

            <h4 className="text-white font-semibold text-xl mb-3">
              AI Suggestions
            </h4>

            <ul className="space-y-2 text-gray-300">

              <li>
                ✓ Add Docker and AWS projects.
              </li>

              <li>
                ✓ Quantify achievements with numbers.
              </li>

              <li>
                ✓ Improve ATS keyword optimization.
              </li>

              <li>
                ✓ Add more backend project experience.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}