"use client";
import DashboardLayout from "../../components/DashboardLayout";
import { useState } from "react";

export default function JobDescriptionPage() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const handleSubmit = () => {
    console.log({
      companyName,
      jobTitle,
      jobDescription,
    });

    alert("Job Description Saved Successfully");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-2">
          Job Description
        </h1>

        <p className="text-gray-600 mb-8">
          Paste the job description to compare it with your resume.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Company Name
            </label>

            <input
              type="text"
              placeholder="Google, Microsoft, Amazon..."
              value={companyName}
              onChange={(e) =>
                setCompanyName(e.target.value)
              }
              className="w-full border p-3 rounded-xl"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Job Title
            </label>

            <input
              type="text"
              placeholder="Software Engineer"
              value={jobTitle}
              onChange={(e) =>
                setJobTitle(e.target.value)
              }
              className="w-full border p-3 rounded-xl"
            />

          </div>

          <div className="mb-6">

            <label className="block mb-2 font-semibold">
              Job Description
            </label>

            <textarea
              rows={12}
              placeholder="Paste complete job description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
              className="w-full border p-4 rounded-xl resize-none"
            />

          </div>

          <button
            onClick={handleSubmit}
            className="
              w-full
              bg-blue-600
              text-white
              py-4
              rounded-xl
              text-lg
              font-semibold
              hover:bg-blue-700
            "
          >
            Save Job Description
          </button>

        </div>

      </div>

    </div>
  );
}