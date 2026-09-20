"use client";

import { useEffect, useState } from "react";
import StatCard from "../../components/StatCard";

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState({
    totalResumes: 0,
    totalAnalysis: 0,
    remainingFreeAnalysis: 0,
  });
 useEffect(() => {

  const fetchDashboard = async () => {

    try {

      const response = await fetch(
        "http://localhost:8080/api/dashboard/1"
      );

      const data = await response.json();

      setDashboardData(data);

    } catch (error) {

      console.error(error);

    }

  };

  fetchDashboard();

}, []);
  return (
    <>
      <div
  className="
  bg-gradient-to-r
  from-blue-600
  to-cyan-500
  rounded-3xl
  p-8
  text-white
  mb-8
  "
>
  <h2 className="text-3xl font-bold">
    Welcome Back, Atir 👋
  </h2>
<div className="mt-6 flex gap-3 flex-wrap">

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
    📄 11 Resumes
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
    🤖 0 Analyses
  </span>

  <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
    ⭐ Free Plan
  </span>

</div>
  <p className="mt-2 text-blue-100">
    You have {dashboardData.remainingFreeAnalysis}
     free analyses remaining.
  </p>

  <button
    className="
    mt-6
    bg-white
    text-blue-600
    px-6
    py-3
    rounded-xl
    font-semibold
    "
  >
    Upload Resume
  </button>
</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Resumes"
          value={dashboardData.totalResumes}
        />

        <StatCard
          title="Total Analysis"
          value={dashboardData.totalAnalysis}
        />

        <StatCard
          title="Remaining Analysis"
          value={dashboardData.remainingFreeAnalysis}
        />
        <StatCard
  title="Avg ATS Score"
  value={87}
/>
      </div>

   <div className="grid lg:grid-cols-2 gap-6 mt-10">

  {/* Upload Widget */}

  <div className="bg-white rounded-3xl p-8 shadow-lg">

    <h3 className="text-2xl font-bold text-slate-800">
      Upload New Resume
    </h3>

   <p className="text-slate-600 mt-2 text-lg">
  Upload your latest resume and get instant AI insights.
</p>

    <label
     className="
mt-6
block
border-2
border-dashed
border-blue-200
bg-slate-50
hover:bg-blue-50
rounded-2xl
p-10
text-center
cursor-pointer
transition
"
    >
      <input
        type="file"
        className="hidden"
      />

      <p className="text-lg text-slate-700">
        📄 Drag & Drop Resume
      </p>

      <p className="text-sm text-gray-500 mt-2">
        PDF / DOCX Supported
      </p>
    </label>

    <button
      className="
      mt-6
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-6
      py-3
      rounded-xl
      "
    >
      Upload Resume
    </button>

  </div>

  {/* Recent Activity */}

  <div className="bg-white rounded-3xl p-8 shadow-lg">

    <h3 className="text-2xl font-bold text-slate-800">
      Recent Activity
    </h3>

    <div className="mt-6 space-y-4">

      <div className="flex justify-between">
       <span className="font-medium text-slate-700">
  Java_Resume.pdf
</span>
        <span className="text-green-600 font-semibold">
          91%
        </span>
      </div>

      <div className="flex justify-between">
       <span className="font-medium text-slate-700">
  Java_Resume.pdf
</span>
        <span className="text-blue-600 font-semibold">
          84%
        </span>
      </div>

      <div className="flex justify-between">
       <span className="font-medium text-slate-700">
  Java_Resume.pdf
</span>
        <span className="text-purple-600 font-semibold">
          88%
        </span>
      </div>

    </div>

  </div>

</div>
    </>
  );
}