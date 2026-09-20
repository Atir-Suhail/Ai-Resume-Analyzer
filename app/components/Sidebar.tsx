"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

 const menus = [
  { name: "Dashboard", path: "/dashboard" },

  { name: "Upload Resume", path: "/upload-resume" },
  { name: "My Resumes", path: "/my-resumes" },

  { name: "Analysis History", path: "/analysis-history" },
  { name: "Job Description", path: "/job-description" },
  { name: "Job Match", path: "/job-match" },

  { name: "Settings", path: "/settings" },
];

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0 shadow-xl">
      
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          AI Resume Analyzer
        </h1>
      </div>

      {/* Menu */}
      <nav className="mt-6 px-4">
        <ul className="space-y-3">
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link
                href={menu.path}
                className={`block px-4 py-3 rounded-lg transition-all duration-300
                ${
                  pathname === menu.path
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800 text-gray-300"
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 left-4 right-4">
        <button className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-all">
          Logout
        </button>
      </div>
    </aside>
  );
}