'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import UploadImage from '../../../public/Upload/Group 13.png';
import UploadIcon from '../../../public/Upload/Vector (2).png';

const UploadPage = () => {
  const [fileError, setFileError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];

    if (file.type !== 'application/pdf') {
      setFileError('Only PDF files are allowed.');
      return;
    }

    if (file.size > 6 * 1024 * 1024) {
      setFileError('File size should not exceed 6MB.');
      return;
    }

    setFileError('');
    console.log('Valid file:', file.name);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8 items-center">

        {/* Left: Image Container */}
        <div className="w-full md:w-[50%] h-[400px] relative">
          <Image
            src={UploadImage}
            alt="Upload Illustration"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
            priority
          />
        </div>

        {/* Right: Upload Section */}
        <div className="w-full md:w-[50%] h-[350px] border-2 border-dotted border-gray-400 p-6 flex flex-col items-center justify-center gap-6 rounded-lg shadow">
          <Image src={UploadIcon} alt="Upload Icon"  width={120} // increase size here
        height={120} />
          <h2 className="text-sm text-[#01628782] text-center font-semibold">
            Drag and drop your file here
          </h2>

          <input
            type="file"
            id="fileUpload"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="fileUpload"
            className="cursor-pointer px-6 py-2 bg-[#49809E] text-white rounded-md hover:bg-[#3a6a85] transition"
          >
            Choose File
          </label>

          {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
        </div>

      </div>
    </div>
  );
};

export default UploadPage;
