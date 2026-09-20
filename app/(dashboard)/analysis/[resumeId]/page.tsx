"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function AnalysisPage() {
console.log("Analysis Page Rendered");
  const params = useParams();
  const resumeId = params.resumeId as string;

  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis = async () => {
    console.log("Fetching Analysis...");
    try {

     const response = await fetch(
  `http://localhost:8080/api/resume/${resumeId}/analysis`
);

      const data = await response.json();

      console.log("Analysis Data:", data);

      setAnalysis(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {
  return (
    <div className="p-10">
      Loading Analysis...
    </div>
  );
}
if (!analysis) {
  return (
    <div className="p-10">
      No Analysis Found
    </div>
  );
}

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Resume Analysis Report
        </h1>
<div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white mb-8">
  <h2 className="text-3xl font-bold">
    Resume Analysis Complete 🎉
  </h2>

  <p className="mt-2 text-blue-100">
    Your resume has been successfully analyzed.
  </p>
</div>
        {/* Score Card */}

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-200">

          <h2 className="text-2xl font-semibold mb-4">
            Resume Score
          </h2>

          <div className="text-6xl font-bold text-green-600">
            {analysis.resumeScore}/100
          </div>
<div className="w-full bg-slate-200 rounded-full h-4 mt-4">
  <div
    className="bg-green-500 h-4 rounded-full"
    style={{
    width: `${analysis.resumeScore}%`,
    }}
  ></div>
</div>
        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* Skills */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Skills
            </h2>

            <p>{analysis.skills}</p>

          </div>

          {/* Experience */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Experience
            </h2>

            <p>{analysis.experience}</p>

          </div>

          {/* Education */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Education
            </h2>

            <p>{analysis.education}</p>

          </div>

          {/* Strengths */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Strengths
            </h2>

           <p>{analysis.strengths}</p>

          </div>

          {/* Weaknesses */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Weaknesses
            </h2>

            <p>{analysis.weaknesses}</p>

          </div>

          {/* Suggestions */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Suggestions
            </h2>

           <p>{analysis.suggestions}</p>
          </div>

        </div>

      </div>

    </div>
  );
}