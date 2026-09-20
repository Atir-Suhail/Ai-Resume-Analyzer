
"use client";

import { useEffect, useRef, useState } from "react";import CountUp from "react-countup";
import Counter from "./Counter";
export default function TrustedSection() {
  return (
  <section className="bg-slate-950 py-20 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-gray-500 uppercase tracking-wider font-semibold">
          Trusted By Students & Developers
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-12">

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-blue-600">
              <Counter
  end={10000}
  suffix="+"
/>
            </h3>
            <p className="text-gray-600 mt-2">
              Resumes Analyzed
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-green-600">
            <Counter
  end={95}
  suffix="%"
/>
            </h3>
            <p className="text-gray-600 mt-2">
              ATS Accuracy
            </p>
          </div>

         <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-purple-600">
             <Counter
  end={5000}
  suffix="+"
/>
            </h3>
            <p className="text-gray-600 mt-2">
              Job Matches Generated
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-800">
            <h3 className="text-4xl font-bold text-orange-600">
             <>
  <Counter end={4} />
  .9★
</>
            </h3>
            <p className="text-gray-600 mt-2">
              User Rating
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}