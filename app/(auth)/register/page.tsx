"use client";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const handleRegister = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    console.log("Register button clicked");
    const response = await fetch(
      "http://localhost:8080/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    alert(data.message);

    if (data.success) {
      window.location.href = "/login";
    }
  }catch (error) {
  console.error("FULL ERROR:", error);
}
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          AI Resume Analyzer
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Create your account
        </p>

        <form className="space-y-4"
        onSubmit={handleRegister}>

          <input
  type="text"
  placeholder="First Name"
  value={firstName}
  onChange={(e) =>
    setFirstName(e.target.value)
  }
  className="w-full border p-3 rounded-lg"
/>

        <input
  type="text"
  placeholder="Last Name"
  value={lastName}
  onChange={(e) =>
    setLastName(e.target.value)
  }
  className="w-full border p-3 rounded-lg"
/>

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

          <input
  type="password"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) =>
    setConfirmPassword(e.target.value)
  }
  className="w-full border p-3 rounded-lg"
/>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}