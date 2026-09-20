   "use client";

import { useState } from "react";
import AuthModal from "./AuthModal";
   export default function GuestAnalysisSection() {
    const [file, setFile] = useState<File | null>(null);
const [openModal, setOpenModal] = useState(false);
const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  if (e.target.files?.[0]) {
    setFile(e.target.files[0]);
  }
};
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
            Free Trial
          </span>

          <h2 className="text-5xl font-bold text-white mt-6">
            Try Before You Sign Up
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Upload your resume and get 2 free AI-powered analyses.
          </p>
        </div>

        <div
          className="
          bg-slate-900/70
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-10
          shadow-2xl
          "
        >

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Upload Resume
              </h3>

              <label
  className="
  block
  border-2
  border-dashed
  border-slate-700
  hover:border-blue-500
  rounded-2xl
  p-12
  text-center
  cursor-pointer
  transition
  "
>
  <input
    type="file"
    accept=".pdf,.doc,.docx"
    onChange={handleFileChange}
    className="hidden"
  />

  {!file ? (
    <>
      <p className="text-gray-300 text-lg">
        📄 Drag & Drop Resume
      </p>

      <p className="text-gray-500 text-sm mt-2">
        PDF / DOCX Supported
      </p>
    </>
  ) : (
    <>
      <p className="text-green-400 text-lg font-semibold">
        ✅ {file.name}
      </p>

      <p className="text-gray-400 text-sm mt-2">
        Ready for Analysis
      </p>
    </>
  )}
</label>
            </div>

            <div>
              <h3 className="text-white text-2xl font-semibold mb-4">
                Free Benefits
              </h3>

              <ul className="space-y-4 text-slate-300">
                <li>✅ ATS Score Analysis</li>
                <li>✅ Resume Quality Check</li>
                <li>✅ Skill Gap Detection</li>
                <li>✅ Job Match Insights</li>
                <li>✅ 2 Free Analyses</li>
              </ul>

       <button
  disabled={!file}
  onClick={() => setOpenModal(true)}
  className="
  mt-8
  px-8
  py-4
  rounded-xl
  text-white
  font-semibold
  transition
  disabled:bg-slate-700
  disabled:cursor-not-allowed
  bg-blue-600
  hover:bg-blue-700
  "
>
  {file
    ? "Analyze Resume"
    : "Upload Resume First"}
</button>
            </div>

          </div>

        </div>

      </div>
      <AuthModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
/>
    </section>
  );
}