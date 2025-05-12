'use client';
import React, { useRef, useState } from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Only PDF files are allowed.");
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Only PDF files are allowed.");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-6 min-h-screen flex items-center justify-center" style={{ backgroundColor: "#DBFAFC" }}>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md sm:max-w-lg md:max-w-xl border border-gray-200">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="mx-auto flex flex-col justify-center items-center text-center"
          style={{
            border: "2px dotted black",
            borderRadius: "12px",
            padding: "30px",
            width: "100%",
            minHeight: "300px",
            cursor: "pointer",
          }}
        >
          <Image
            className="mx-auto mt-2"
            src="/Vector.png"
            width={150}
            height={100}
            alt="Upload Icon"
          />
          <h1 className="text-[#016287] mt-4">Drag & Drop a PDF here</h1>
          <Button onClick={handleBrowseClick} className="mt-4 bg-[#00BEFF]">Browse PDF</Button>
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          {file && (
            <p className="mt-4 text-sm text-green-600">
              Selected File: <strong>{file.name}</strong>
            </p>
          )}
          {error && (
            <p className="mt-2 text-sm text-red-500">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
