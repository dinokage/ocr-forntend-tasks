"use client";
import React, { useState } from "react";

export default function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateAndLogin = () => {
    let valid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email");
      valid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      alert("Login successful (you can replace this with real logic)");
    }
  };

  return (
    <div className="min-h-screen bg-[#DBFAFC] flex items-center justify-center px-4 py-10 font-open-sans">
      <div className="flex flex-col md:flex-row items-center justify-center bg-transparent space-x-0 md:space-x-10">
        <div className="mb-10 md:mb-0">
          <img
            src="/login1.png"
            alt="Illustration"
            className="w-[350px] md:w-[450px] h-auto"
          />
        </div>

        <div className="bg-[#0F1B2B] rounded-2xl shadow-xl p-8 w-[820px] md:w-[450px] text-white border-8 border-white">
          <div className="flex justify-center mb-4">
            <img
              src="/login.png"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
          <div className="mb-4">
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-400">📧</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 rounded border-b border-white bg-transparent focus:outline-none font-open-sans"
              />
            </div>
            {emailError && (
              <p className="text-red-400 text-xs mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-2">
            <div className="relative">
              <span className="absolute left-3 top-2 text-white">🔒</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 rounded border-b border-gray-400 bg-transparent focus:outline-none font-open-sans"
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

          <div className="my-3">
            <label className="inline-flex font-sans items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>

          <button
            onClick={validateAndLogin}
            className="w-[25vh] bg-[#00BEFF] hover:bg-[#8fcadd] py-2 rounded text-white font-medium ml-20"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
