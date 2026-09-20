"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AnalysisHistory {
  id: number;
  resumeId: number;
  analyzedAt: string;
}

export default function AnalysisPage() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetchHistory();

  }, []);

  const fetchHistory = async () => {

    const response = await fetch(
      "http://localhost:8080/api/resume/history/1"
    );

    const data = await response.json();

    setHistory(data);

  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Analysis History
      </h1>

      <div className="space-y-4">

        {history.map((item: AnalysisHistory) => (

          <div
            key={item.id}
            className="
              bg-white
              p-5
              rounded-xl
              shadow
              flex
              justify-between
              items-center
            "
          >

            <div>

              <h2 className="font-semibold">
                Resume #{item.resumeId}
              </h2>

              <p className="text-gray-500">
                {new Date(
                  item.analyzedAt
                ).toLocaleString()}
              </p>

            </div>

            <Link
              href={`/analysis/${item.resumeId}`}
              className="
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
              "
            >
              View Report
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}