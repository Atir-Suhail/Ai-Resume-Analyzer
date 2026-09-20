"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
type Resume = {
  id: number;
  fileName: string;
  uploadedAt: string;
  status: string;
};
export default function MyResumesPage() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [analyzingId, setAnalyzingId] =
 
useState<number | null>(null);
 const router = useRouter();
  useEffect(() => {

  fetchResumes();

}, []);

const fetchResumes = async () => {

  try {

    const response = await fetch(
      "http://localhost:8080/api/resume/user/1"
    );

    const data = await response.json();

    setResumes(data);

  } catch (error) {

    console.error(error);

  }

};
const handleDelete = async (
  resumeId: number
) => {

  try {

    const response = await fetch(
      `http://localhost:8080/api/resume/${resumeId}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    alert(data.message);

    fetchResumes();

  } catch (error) {

    console.error(error);

  }

};

const handleAnalyze = async (resumeId: number) => {
  setAnalyzingId(resumeId);
  try {
    const response = await fetch(
      `http://localhost:8080/api/resume/${resumeId}/analyze`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    console.log(data);

  router.push(`/analysis/${resumeId}`);

  } catch (error) {
  console.error(error);
  alert("Analysis Failed");
}

finally {
  setAnalyzingId(null);
}
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          My Resumes
        </h1>

        <input
          type="text"
          placeholder="Search Resume..."
          className="w-full p-3 border rounded-lg mb-6"
        />

       <div className="bg-white rounded-xl shadow-md overflow-hidden">
  <div className="max-h-[500px] overflow-y-auto">

          <table className="w-full">

           <thead className="bg-blue-600 text-white sticky top-0 z-10">
              <tr>
                <th className="p-4 text-left">
                  Resume Name
                </th>

                <th className="p-4 text-left">
                  Upload Date
                </th>

                <th className="p-4 text-center">
                  Analyze
                </th>

                <th className="p-4 text-center">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody>
{resumes.length === 0 && (
  <tr>
    <td
      colSpan={4}
      className="text-center p-16 text-gray-500"
    >
      📄 No resumes uploaded yet.
    </td>
  </tr>
)}
              {resumes.map((resume) => (

                <tr
                  key={resume.id}
                 className="
border-b
hover:bg-blue-50
transition
duration-200
"
                >
                 <td className="p-4 font-medium text-slate-800 max-w-[350px] truncate">
  {resume.fileName}
</td>

                 <td className="p-4 text-slate-700">
                   {new Date(
  resume.uploadedAt
).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-center">
                   <button
  onClick={() => handleAnalyze(resume.id)}

  disabled={analyzingId === resume.id}

  className="
  bg-green-600
  text-white
  px-4
  py-2
  rounded-lg
  hover:bg-green-700
  disabled:bg-gray-400
  disabled:cursor-not-allowed
  "
>
  {analyzingId === resume.id
    ? "Analyzing..."
    : "Analyze"}
</button>
                  </td>

                  <td className="p-4 text-center">
                    <button
  onClick={() =>
    handleDelete(resume.id)
  }
  className="
  bg-red-600
  text-white
  px-4
  py-2
  rounded-lg
  hover:bg-red-700
  "
>
  Delete
</button>
                  </td>
                </tr>

              ))}

            </tbody>

          </table>
</div>
        </div>

      </div>
    </div>
  );
}