  "use client";

  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Download, Eye, Pencil, Trash2 } from "lucide-react";
  import Image from "next/image";
  import Link from "next/link";
  import React, { useState } from "react";
  import { useRouter } from "next/navigation";

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
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <div
              className="bg-white p-6 rounded-lg w-11/12 md:w-1/3"
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
                    setShowModal(false);
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
    const router = useRouter();

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

    const [data, setData] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [documentName, setDocumentName] = useState("");
    const [uploadDate, setUploadDate] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [viewDoc, setViewDoc] = useState(null);

    const itemsPerPage = 5;

    const filteredData = data.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredByDate = selectedDate
      ? filteredData.filter((doc) => doc.uploadDate === selectedDate)
      : filteredData;

    const paginatedData = filteredByDate.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredByDate.length / itemsPerPage);

    const handleSave = () => {
      if (documentName && uploadDate) {
        const newDocument = {
          id: data.length + 1,
          name: documentName,
          uploadDate,
        };
        setData([...data, newDocument]);
        setDocumentName("");
        setUploadDate("");
      } else {
        alert("Please fill in both fields.");
      }
    };

    const handleEdit = (id: number, newName: string) => {
      setData(data.map((doc) => (doc.id === id ? { ...doc, name: newName } : doc)));
    };

    const handleDownload = (doc: { name: string; uploadDate: string }) => {
      const blob = new Blob(
        [`Document Name: ${doc.name}\nDate: ${doc.uploadDate}`],
        { type: "text/plain" }
      );
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${doc.name}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    };

    const handleDelete = (id: number) => {
      if (confirm("Are you sure you want to delete this document?")) {
        setData(data.filter((doc) => doc.id !== id));
      }
    };

    return (
      <div className="flex flex-col md:flex-row bg-[#FFE5B4] min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-[200px] bg-[#fff2d9] p-4 md:p-6 shadow-md flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-4 md:gap-6">
          <div className="text-center w-full md:text-left font-orbitron text-[#257881] text-xl font-bold">
            OCR
          </div>
          <div className="flex items-center gap-2">
            <Image src={"/dashboard.png"} width={20} height={20} alt="Dashboard" />
            <Link className="text-[#257881] font-bold" href={"/ocr"}>
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Image src={"/return.png"} width={20} height={20} alt="Return" />
            <Link className="text-[#257881] font-bold" href={"/m"}>
              Return
            </Link>
          </div>
          <button
            onClick={() => router.push("/")}
            className="text-[#257881] font-bold"
          >
            Logout
          </button>
        </div>

        
        <div className="flex-1 p-4 sm:p-6 md:m-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <h1 className="text-[#257881] font-bold text-lg">History Data</h1>
            <Input
              placeholder="Search"
              className="w-full sm:w-60 rounded-2xl border-[#257881]"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
            <input
              type="date"
              className="p-2 rounded-lg border border-[#ccc] w-full sm:w-auto"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setCurrentPage(1);
              }}
            />
            <Button
              className="text-white bg-[#093B8B] hover:bg-[#093B8B] w-full sm:w-auto"
              onClick={() => setShowModal(true)}
            >
              + New request
            </Button>
          </div>

          <div className="overflow-x-auto">
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
                        <button onClick={() => setViewDoc(doc)}>
                          <Eye />
                        </button>
                        <button
                          onClick={() => {
                            const newName = prompt("Edit document name:", doc.name);
                            if (newName) handleEdit(doc.id, newName);
                          }}
                        >
                          <Pencil />
                        </button>
                        <button onClick={() => handleDownload(doc)}>
                          <Download />
                        </button>
                        <button onClick={() => handleDelete(doc.id)}>
                          <Trash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
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

          
          {viewDoc && (
            <div
              className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
              onClick={() => setViewDoc(null)}
            >
              <div
                className="bg-white p-6 rounded shadow w-11/12 sm:w-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-bold mb-2">Document Info</h3>
                <p>
                  <strong>Name:</strong> {viewDoc.name}
                </p>
                <p>
                  <strong>Upload Date:</strong> {viewDoc.uploadDate}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => setViewDoc(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        
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
