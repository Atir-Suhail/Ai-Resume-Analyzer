"use client";
import DashboardLayout from "../../components/DashboardLayout";
export default function JobMatchPage() {
  const matchData = {
    matchScore: 85,

    matchedSkills: [
      "Java",
      "Spring Boot",
      "REST API",
      "PostgreSQL",
    ],

    missingSkills: [
      "Docker",
      "AWS",
      "Kubernetes",
    ],

    suggestions: [
      "Learn Docker Fundamentals",
      "Build an AWS Deployment Project",
      "Add CI/CD Experience",
    ],
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          Resume vs Job Match
        </h1>

        {/* Match Score */}

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

          <h2 className="text-2xl font-bold mb-4">
            Match Score
          </h2>

          <div className="text-6xl font-bold text-green-600">
            {matchData.matchScore}%
          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-6">

          {/* Matched Skills */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Matched Skills
            </h2>

            <ul className="space-y-2">

              {matchData.matchedSkills.map(
                (skill, index) => (

                  <li key={index}>
                    ✅ {skill}
                  </li>

                )
              )}

            </ul>

          </div>

          {/* Missing Skills */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-4">
              Missing Skills
            </h2>

            <ul className="space-y-2">

              {matchData.missingSkills.map(
                (skill, index) => (

                  <li key={index}>
                    ❌ {skill}
                  </li>

                )
              )}

            </ul>

          </div>

          {/* Suggestions */}

          <div className="bg-white rounded-2xl shadow-lg p-6 md:col-span-2">

            <h2 className="text-xl font-bold mb-4">
              AI Suggestions
            </h2>

            <ul className="space-y-2">

              {matchData.suggestions.map(
                (suggestion, index) => (

                  <li key={index}>
                    🚀 {suggestion}
                  </li>

                )
              )}

            </ul>

          </div>

        </div>

      </div>

    </div>
  );
}