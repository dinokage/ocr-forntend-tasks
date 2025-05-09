import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-cyan-200 ">
      <div className="md:flex justify-center items-center p-43 ">
        <Image
          src={"/Group3.png"}
          width={600}
          height={400}
          alt="img"
          className="mr-24"
        />
        <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg bg-white  p-6 flex flex-col items-center justify-center space-y-6 border-2 border-transparent hover:border-sky-500 transition-colors duration-300">
          <Image src={"/image1.png"} width={150} height={200} alt="img2" />
          <div className="flex flex-col items-center space-y-4 w-full max-w-xl mx-auto p-3 mb-8">
            <div className="w-full flex items-center">
              <div className="flex-grow border-t border-dotted border-gray-300 mb-8"></div>
            </div>

            <div className="max-w-full">
              <div className="relative w-96">
                <div className="absolute -top-3 left-6 bg-white px-6 text-sm text-gray-700 z-10">
                  <h1 className="text-xl text-gray-600">Email</h1>
                </div>

                <input
                  type="email"
                  className="border border-gray-400 rounded-md px-6 py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="max-w-full">
              <div className="relative w-96">
                <div className="absolute -top-3 left-6 bg-white px-6 text-sm text-gray-700 z-10">
                  <h1 className="text-xl text-gray-600">Email</h1>
                </div>

                <input
                  type="email"
                  className="border border-gray-400 rounded-md px-6 py-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <input
              type=""
              placeholder=""
              className="border border-gray-400 rounded-md px-6 py-4 w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />

            <div className="flex justify-between max-w-full mt-8 ">
              <div className="mr-8 flex">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
                />
                <h1 className="mb-[-1] ml-2">Remember me </h1>
              </div>
              <div className=" ml-6">
                <Link href={"/forgot password"}>
                  <i className="text-red-600">Forgot password ?</i>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <button className="bg-sky-500 w-90 p-3 rounded-sm text-white border-2 border-transparent hover:border-sky-600 transition-colors duration-300 mt-6">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
