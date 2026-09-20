"use client";
import DashboardLayout from "../../components/DashboardLayout";
import { useRouter } from "next/navigation";
import { Upload, FileText } from "lucide-react";
import { useState } from "react";

export default function UploadResumePage() {

  const router = useRouter();

  const [fileName, setFileName] = useState("");
const [file, setFile] = useState<File | null>(null);
const [loading, setLoading] = useState(false);
  const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {

  if (e.target.files && e.target.files.length > 0) {

    const selectedFile = e.target.files[0];

    setFile(selectedFile);

    setFileName(selectedFile.name);
    
  }

};
const handleUpload = async () => {

  if (!file) {
    alert("Please select a resume");
    return;
  }
setLoading(true);
 
 const formData = new FormData();
  formData.append("file", file);

  formData.append("userId", "1");

  try {

    const response = await fetch(
      "http://localhost:8080/api/resume/upload",
      {
        method: "POST",
        body: formData,
      }
    );
const text = await response.text();

console.log("Response:", text);
    const data = await response.json();

    alert(data.message);

if (data.success) {

  setFile(null);
  setFileName("");

  router.push("/my-resumes");

}

  } catch (error) {

    console.error(error);

    alert("Upload Failed");

  }
finally {
  setLoading(false);
}
};

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Upload Resume
      </h1>

      <p className="text-gray-600 mb-8">
        Upload your resume and get AI-powered insights.
      </p>

      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8">

        <div className="border-2 border-dashed border-blue-400 rounded-2xl p-12 text-center">

          <Upload
            size={60}
            className="mx-auto text-blue-600 mb-4"
          />

          <h2 className="text-2xl font-semibold mb-2">
            Drag & Drop Resume
          </h2>

          <p className="text-gray-500 mb-6">
            Supported format: PDF
          </p>

          <label className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Choose Resume

            <input
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {fileName && (
          <div className="mt-6 bg-slate-50 border rounded-xl p-4 flex items-center gap-3">

            <FileText className="text-green-600" />

            <div>
              <p className="font-semibold">
                Selected File
              </p>

              <p className="text-gray-600">
                {fileName}
              </p>
            </div>
          </div>
        )}

      <button
  onClick={handleUpload}
  disabled={loading}
  className="
  w-full
  mt-6
  bg-green-600
  text-white
  py-4
  rounded-xl
  text-lg
  font-semibold
  hover:bg-green-700
  disabled:bg-gray-400
  "
>
  {loading ? "Uploading..." : "Upload Resume"}
</button>

      </div>
    </div>
  );
}