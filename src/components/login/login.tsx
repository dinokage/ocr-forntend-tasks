"use client";
import React, { useState } from "react";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateAndLogin = () => {
    let valid = true;
    setEmailError("");
    setPasswordError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      alert("Login successful (replace this with real logic)");
    }
  };

  return (
    <div className="min-h-screen bg-[#DBFAFC] flex items-center justify-center px-4 py-10 font-open-sans">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/login1.png"
            alt="Illustration"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 bg-[#0F1B2B] rounded-2xl shadow-xl p-6 sm:p-10 text-white border-4 border-white">
          <div className="flex justify-center mb-6">
            <img
              src="/login.png"
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">📧</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 rounded border-b border-white bg-transparent focus:outline-none"
              />
            </div>
            {emailError && (
              <p className="text-red-400 text-xs mt-1">{emailError}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-2">
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-white">🔒</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 rounded border-b border-gray-400 bg-transparent focus:outline-none"
              />
            </div>
            {passwordError && (
              <p className="text-red-400 text-xs mt-1">{passwordError}</p>
            )}
            <div className="text-right mt-1">
              <a
                href="#"
                className="text-red-600 font-semibold text-xs hover:underline bg-white italic inline-block px-2 py-1 rounded"
              >
                Forget Password?
              </a>
            </div>
          </div>

          {/* Checkbox */}
          <div className="my-3">
            <label className="inline-flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              onClick={validateAndLogin}
              className="w-full sm:w-1/2 bg-[#00BEFF] hover:bg-[#8fcadd] py-2 rounded text-white font-medium"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
