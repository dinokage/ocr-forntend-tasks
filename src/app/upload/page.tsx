"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: string | any[]) => {
    if (fileRejections.length > 0) {
      const { errors } = fileRejections[0];
      setError(errors[0].message);
      setUploadedFileName(null);
      return;
    }

    const file = acceptedFiles[0];
    setUploadedFileName(file.name);
    setError(null);

    // Optional: do something with the file here (e.g., upload to server)

    // Reset the file name after a few seconds (to simulate refresh)
    setTimeout(() => {
      setUploadedFileName(null);
    }, 3000);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 6 * 1024 * 1024, // 6MB
    multiple: false,
  });

  return (
    <div className="min-h-screen bg-[#e0fafd] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-10 cursor-pointer bg-white hover:border-sky-400 transition"
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src="/Vector.png"
              alt="Upload Icon"
              className="w-16 h-16 object-contain"
            />
            <p className="text-gray-600 font-medium">
              {isDragActive ? "Drop the PDF here..." : "Drag & Drop a Files here"}
            </p>
            <p className="text-gray-400 text-sm">(OR)</p>
            <label className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition cursor-pointer">
              Browse Files
              <input type="file" hidden {...getInputProps()} />
            </label>
            {uploadedFileName && (
              <p className="text-green-600 font-semibold mt-4">
                ✅ Uploaded: {uploadedFileName}
              </p>
            )}
            {error && (
              <p className="text-red-500 text-sm mt-2">❌ {error}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
