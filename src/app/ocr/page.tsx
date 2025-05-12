"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Modal Component
const Modal = ({
  showModal,
  setShowModal,
  documentName,
  setDocumentName,
  uploadDate,
  setUploadDate,
  handleSave,
}: any) => {
  return (
    <>
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-center text-xl font-bold text-teal-700">
              New Request
            </h2>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Document Name
              </label>
              <input
                type="text"
                className="mt-2 p-2 w-full border rounded-lg"
                placeholder="Enter document name"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Date
              </label>
              <input
                type="date"
                className="mt-2 p-2 w-full border rounded-lg"
                value={uploadDate}
                onChange={(e) => setUploadDate(e.target.value)}
              />
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  handleSave();
                  setShowModal(false); // Close modal after saving
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const OcrPage = () => {
  const initialData = [
    { id: 1, name: "Document A", uploadDate: "2025-05-01" },
    { id: 2, name: "Document B", uploadDate: "2025-05-02" },
    { id: 3, name: "Document C", uploadDate: "2025-05-03" },
    { id: 4, name: "Document D", uploadDate: "2025-05-04" },
    { id: 5, name: "Document E", uploadDate: "2025-05-05" },
    { id: 6, name: "Document F", uploadDate: "2025-05-06" },
    { id: 7, name: "Document G", uploadDate: "2025-05-07" },
    { id: 8, name: "Document H", uploadDate: "2025-05-08" },
    { id: 9, name: "Document I", uploadDate: "2025-05-09" },
    { id: 10, name: "Document J", uploadDate: "2025-05-10" },
  ];

  const [data, setData] = useState(initialData); // Data state
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [documentName, setDocumentName] = useState("");
  const [uploadDate, setUploadDate] = useState("");

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle Save: Add new data to the list
  const handleSave = () => {
    if (documentName && uploadDate) {
      const newDocument = {
        id: data.length + 1,
        name: documentName,
        uploadDate: uploadDate,
      };
      setData([...data, newDocument]); // Update the data state with new document
      setDocumentName(""); // Clear inputs after saving
      setUploadDate(""); // Clear inputs after saving
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div
      className="flex"
      style={{ backgroundColor: "#FFE5B4", minHeight: "100vh" }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#fff2d9",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <div
          className="text-center"
          style={{
            fontFamily: "Orbitron",
            color: "#257881",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          OCR
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Image
            src={"/dashboard.png"}
            width={20}
            height={20}
            alt="Dashboard icon"
          />
          <Link className="text-[#257881] font-bold" href={"/ocr"}>
            Dashboard
          </Link>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <Image src={"/request.png"} width={20} height={20} alt="Request icon" />
          <Link className="text-[#257881] font-bold" href={"/m"}>
            Return
          </Link>
        </div>
        <div style={{ flexGrow: 1 }} />
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link className="text-[#257881] font-bold" href="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 m-24">
        <div className="flex justify-center items-center gap-4 mb-6">
          <h1 className="text-[#257881] font-bold text-lg">History Data</h1>
          <Input
            placeholder="Search"
            className="ml-20 w-120 rounded-2xl border-[#257881]"
          />
          <Image src={"/calender.png"} width={30} height={40} alt="Calendar" />
          <Button
            className="text-white bg-[#093B8B] hover:bg-[#093B8B]"
            onClick={() => setShowModal(true)}
          >
            + New request
          </Button>
        </div>

        <table className="min-w-full border-2 border-[#FFF2D9] rounded-xl bg-[#FFF2D9] text-left">
          <thead className="text-center text-teal-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Document Name</th>
              <th className="px-4 py-2 border">Upload Date</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((doc) => (
              <tr key={doc.id} className="text-center">
                <td className="px-4 py-2 border">{doc.id}</td>
                <td className="px-4 py-2 border">{doc.name}</td>
                <td className="px-4 py-2 border">{doc.uploadDate}</td>
                <td className="px-4 py-2 border">
                  <div className="flex justify-center gap-2">
                    <button className="text-teal-600 hover:underline mr-2">
                      <Eye />
                    </button>
                    <button className="text-gray-600 hover:underline mr-2">
                      <Pencil />
                    </button>
                    <button className="text-gray-600 hover:underline mr-2">
                      <Download />
                    </button>
                    <button className="text-gray-600 hover:underline mr-2">
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#093B8B] text-white"
                  : "bg-[#fff2d9] text-[#093B8B]"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal for New Request */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        documentName={documentName}
        setDocumentName={setDocumentName}
        uploadDate={uploadDate}
        setUploadDate={setUploadDate}
        handleSave={handleSave}
      />
    </div>
  );
};

export default OcrPage;