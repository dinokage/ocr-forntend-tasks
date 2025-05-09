'use client';

import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import { CheckCircle, Trash2 } from 'lucide-react';

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
                status: Math.random() > 0.5 ? 'completed' : 'completed'
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
        <div className="min-h-screen bg-[#F6F1D2] text-gray-800 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#49809E] to-[#CC7809] rounded-full shadow-xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tl from-[#49809E] to-[#CC7809] rounded-full shadow-xl -translate-x-1/2 translate-y-1/2" />

            <div className="bg-white rounded-lg flex w-full max-w-5xl overflow-hidden">
                {/* Left: Drop zone */}
                <div
                    {...getRootProps()}
                    className="flex-1 p-10 flex flex-col items-center justify-center cursor-pointer mr-4"
                >
                    <input {...getInputProps()} />
                    <div
                        className="flex flex-col items-center h-[50vh] w-[50vh] mt-0 rounded-2xl p-6"
                        style={{
                            border: '4px dotted #919191',
                            borderSpacing: '12px'
                        }}
                    >
                        <div className="text-5xl text-blue-500 mt-32">
                            <img src="/upload.png" alt="Upload Icon" className="w-20 h-20 object-contain" />
                        </div>

                        <p className="mt-4 font-bold">Drag & Drop a file here</p>
                        <span className="text-xs font-bold text-black mt-2">(OR)</span>
                        <button className="mt-2 px-4 py-1 text-white text-sm rounded bg-gradient-to-r from-[#00D0FF] to-[#549DF0]">
                            Browse File
                        </button>

                        <p className="mt-4 text-xs font-semibold text-gray-600">File Supported pdf only</p>
                    </div>
                </div>

                {/* Right: Uploaded list */}
                <div className="w-1/2 p-4 bg-[#f4f1d5]">
                    <h2 className="text-xl font-semibold mb-2">Uploaded Files</h2>
                    <ul className="space-y-4">
                        {files.map((file, index) => (
                            <li key={index} className="pb-2">
                                {/* Top row: File name and icon */}
                                <div className="flex justify-between items-start">
                                    <p className="font-medium">{file.name}</p>
                                    <div>
                                        {file.status === 'completed' ? (
                                            <CheckCircle className="text-green-500 w-5 h-5" />
                                        ) : (
                                            <CheckCircle className="text-green-500 w-5 h-5" />
                                        )}
                                    </div>
                                </div>

                                {/* Thick underline separator */}
                                <hr
                                    className={`mt-2 border-dotted border-2 ${file.status === 'completed'
                                        ? 'border-green-300'
                                        : 'border-red-300'
                                        }`}
                                />

                                {/* Status below the line, aligned right */}
                                <p
                                    className={`text-sm mt-1 text-right ${file.status === 'completed'
                                        ? 'text-green-600'
                                        : 'text-red-400'
                                        }`}
                                >
                                    {file.status == 'completed' ? '100% Completed' : 'Not completed'}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}