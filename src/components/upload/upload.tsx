'use client';

import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

interface FileStatus {
    name: string;
    status: 'completed' | 'not_completed';
}

export default function UploadPage() {
    const [files, setFiles] = useState<FileStatus[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        const validFiles: FileStatus[] = [];

        acceptedFiles.forEach(file => {
            if (file.type !== 'application/pdf') {
                alert(`❌ File "${file.name}" is not a PDF.`);
                return;
            }

            if (file.size > 6 * 1024 * 1024) {
                alert(`❌ File "${file.name}" exceeds 6MB limit.`);
                return;
            }

            validFiles.push({
                name: file.name,
                status: 'completed'
            });
        });

        setFiles(prev => [...prev, ...validFiles]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        maxSize: 6 * 1024 * 1024,
        multiple: true
    });

    const removeFile = (name: string) => {
        setFiles(prev => prev.filter(f => f.name !== name));
    };

    return (
        <div className="min-h-screen bg-[#F6F1D2] text-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-[#49809E] to-[#CC7809] rounded-full shadow-xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tl from-[#49809E] to-[#CC7809] rounded-full shadow-xl -translate-x-1/2 translate-y-1/2" />

            <div className="bg-white rounded-lg flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
                {/* Left: Drop zone */}
                <div
                    {...getRootProps()}
                    className="flex-1 p-6 sm:p-8 flex flex-col items-center justify-center cursor-pointer h-[60vh] "
                >
                    <input {...getInputProps()} />
                    <div
                        className="flex flex-col items-center w-full h-full max-w-md mx-auto rounded-2xl p-6 border-4 border-dotted border-gray-500 "
                    >
                        <img src="/upload.png" alt="Upload Icon" className="w-16 h-16 sm:w-20 sm:h-20 object-contain mt-4 mt-16" />
                        <p className="mt-4 font-bold text-center">Drag & Drop a file here</p>
                        <span className="text-xs font-bold text-black mt-2">(OR)</span>
                        <button className="mt-2 px-4 py-1 text-white text-sm rounded bg-gradient-to-r from-[#00D0FF] to-[#549DF0]">
                            Browse File
                        </button>
                        <p className="mt-4 text-xs font-semibold text-gray-600">File Supported: PDF only</p>
                    </div>
                </div>

                {/* Right: Uploaded list */}
                <div className="w-full lg:w-1/2 p-6 bg-[#f4f1d5]">
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">Uploaded Files</h2>
                    <ul className="space-y-4">
                        {files.map((file, index) => (
                            <li key={index} className="pb-2">
                                <div className="flex justify-between items-start">
                                    <p className="font-medium text-sm sm:text-base">{file.name}</p>
                                    <CheckCircle className="text-green-500 w-5 h-5" />
                                </div>
                                <hr className={`mt-2 border-dotted border-2 ${file.status === 'completed' ? 'border-green-300' : 'border-red-300'}`} />
                                <p className={`text-sm mt-1 text-right ${file.status === 'completed' ? 'text-green-600' : 'text-red-400'}`}>
                                    {file.status === 'completed' ? '100% Completed' : 'Not completed'}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
