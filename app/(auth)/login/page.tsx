"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (data.success) {

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Login Successful");

      window.location.href =
        "/dashboard";
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Login Failed");
  }
};

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 min-h-screen flex items-center justify-center bg-gray-100">
      <div className= "bg-white  p-8 rounded-xl shadow-lg w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center mb-6">
         AI Resume Analyzer
Analyze. Improve. Get Hired.
        </h1>

        <h2 className="text-xl font-semibold mb-4">
          Login
        </h2>

        <div className="space-y-4">
          <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
  className="w-full border p-3 rounded-lg"
/>

        <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) =>
    setPassword(e.target.value)
  }
  className="w-full border p-3 rounded-lg"
/>
<form onSubmit={handleLogin} className="space-y-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            Login
          </button>
</form>
        </div>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-semibold"
          >
            Register
          </a>
        </p>

      </div>
    </div>
  );
}