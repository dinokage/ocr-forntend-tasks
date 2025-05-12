"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailError && !passwordError && email && password) {
      router.push("/subscribe");
    }
  };

  return (
    <div>
      <div
        className="min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-32"
        style={{ backgroundColor: "#DBFAFC" }}
      >
        <div className="min-h-screen px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-32" style={{ backgroundColor: "#DBFAFC" }}>
  <div className="flex flex-col md:flex-row justify-around items-center md:gap-12">

    {}
    <Image
      className="w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:mx-0 mb-8 md:mb-0"
      src="/img1.png"
      width={670}
      height={678}
      alt="image"
    />

    
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto md:mx-0">

    
      <Image
        className="mx-auto mb-4"
        src="/image2.png"
        width={100}
        height={100}
        alt="image2"
      />

     
      <div className="border-t border-dotted border-gray-400 w-full my-6"></div>

      
      <div className="relative w-full mt-4">
        <div className="absolute -top-3 left-4 bg-white text-black px-2  md:text-lg md:ml-5   ">
          Email
        </div>
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border border-gray-300 px-4 py-3 md:py-6 rounded-lg mt-6 md:mt-12"
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-2">{emailError}</p>
        )}
      </div>

      
      <div className="relative w-full mt-6">
        <div className="absolute -top-3 left-4 bg-white text-black px-2 text-sm md:text-lg">
          Password
        </div>
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full border border-gray-300 px-4 py-3 md:py-6 rounded-lg mt-2  md:mt-10"
        />
        {passwordError && (
          <p className="text-red-600 text-sm mt-2">{passwordError}</p>
        )}
      </div>

     
      <div className="flex justify-between mt-8  sm:flex-row">
        <div className="flex items-center">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 text-sm md:text-lg">
            Remember me
          </label>
        </div>
        <div className="text-red-600  sm:mt-0 text-sm text-center sm:text-left">
          <i>
            <Link className="text-right  md:text-lg" href="/forgotpassword">Forgot Password</Link>
          </i>
        </div>
      </div>

      
      <div className="text-center mt-6">
        <Button className="w-full sm:w-auto bg-[#00BEFF] px-6 py-2 rounded-md text-white" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default LoginPage;
