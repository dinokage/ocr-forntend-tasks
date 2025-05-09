"use client";

import React, { useState } from "react";
import {
  FaEye,
  FaEdit,
  FaDownload,
  FaTrash,
  FaTachometerAlt,
  FaFileAlt,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

const mockData = [
  { id: "001", name: "New OCR File Doc.Pdf", date: "2025-01-12" },
  { id: "002", name: "Invoice Report 2024.Pdf", date: "2025-01-10" },
  { id: "003", name: "Client Notes.Pdf", date: "2025-01-12" },
  { id: "004", name: "Meeting Summary.Pdf", date: "2025-01-15" },
  { id: "005", name: "Audit Details.Pdf", date: "2025-01-08" },
  { id: "006", name: "Final Report.Pdf", date: "2025-01-12" },
  { id: "007", name: "Work Plan.Pdf", date: "2025-01-18" },
  { id: "008", name: "Task Overview.Pdf", date: "2025-01-19" },
  { id: "009", name: "Budget Sheet.Pdf", date: "2025-01-20" },
  { id: "010", name: "Internal Memo.Pdf", date: "2025-01-22" },
  { id: "011", name: "Summary Notes.Pdf", date: "2025-01-12" },
  { id: "012", name: "swethanotes.Pdf", date: "2025-01-12" },
];

export default function RequestPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [data, setData] = useState(mockData);
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);

  const handleDelete = (id: string) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleView = (doc: { id: string; name: string; date: string }) => {
    alert(`Document Details:\nID: ${doc.id}\nName: ${doc.name}\nDate: ${doc.date}`);
  };

  const handleLogout = () => {
    setLogoutPopupVisible(true);
    setTimeout(() => {
      setLogoutPopupVisible(false);
      alert("Logged out successfully");
    }, 2000); // Pop-up visible for 2 seconds
  };

  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate ? item.date === selectedDate : true;
    return matchesSearch && matchesDate;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSearchChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setSearchTerm(e.target.value);
  const handleDateChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setSelectedDate(e.target.value);
  const handleNewRequest = () => router.push("/upload");

  return (
    <>
      <div className={`flex min-h-screen bg-[#f5deb3] ${isLogoutPopupVisible ? "blur-sm" : ""}`}>
        {/* Sidebar */}
        <aside className="w-[200px] bg-[#fff8dc] p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#257881]">OCR</h2>
            <nav className="mt-6">
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <img src="/dashboard.png" alt="Dashboard Icon" className="w-4 h-4" />
                  <a href="#" className="text-[#257881] font-semibold">
                    Dashboard
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <img src="/request.png" alt="Request Icon" className="w-4 h-4" />
                  <a href="#" className="text-[#257881] font-semibold">
                    Request
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <button
            className="mt-auto bg-[#FFF2D9] text-[#3a6161] py-2 px-4 rounded flex items-center space-x-2"
            onClick={handleLogout}
          >
            <img src="/logout.png" alt="Logout Icon" className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[#257881]">History Data</h1>
            <div className="flex items-center space-x-2">
              <div className="flex items-center border border-[#2f8b8d] rounded-full overflow-hidden w-[300px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-2 py-1 text-sm text-gray-700 bg-transparent flex-1 outline-none"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="bg-[#2f8b8d] p-2 px-4 flex items-center justify-center">
                  <FaSearch className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="flex items-center border border-[#2f8b8d] rounded-full overflow-hidden px-3 py-1">
                <FaCalendarAlt className="text-[#2f8b8d] mr-2" />
                <input
                  type="date"
                  className="text-sm text-gray-700 bg-transparent outline-none appearance-none"
                  onChange={handleDateChange}
                />
              </div>
            </div>
            <button className="bg-[#314ca0] text-white px-2 py-1 rounded-lg" onClick={handleNewRequest}>
              + New Request
            </button>
          </div>

          {/* Data Table */}
          <table className="w-full bg-[#FFF2D9] border-collapse rounded-lg shadow">
            <thead className="bg-">
              <tr>
                <th className="p-4 text-left font-bold text-[#257881] ">I.D.</th>
                <th className="p-4 text-left font-bold text-[#257881]">Document Name</th>
                <th className="p-4 text-left font-bold text-[#257881]">Upload Date</th>
                <th className="p-4 text-center font-bold text-[#257881]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((doc) => (
                <tr
                  key={doc.id}
                  className="border-t"
                  style={{ backgroundColor: "#FFF2D9" }}
                >
                  <td className="p-4 font-semibold text-gray-600">{doc.id}</td>
                  <td className="p-4 font-semibold text-gray-500">{doc.name}</td>
                  <td className="p-4 font-semibold text-gray-500">{doc.date}</td>
                  <td className="p-4 flex justify-center space-x-4 text-[#2f4f4f]">
                    <FaEye
                      className="cursor-pointer"
                      onClick={() => handleView(doc)}
                    />
                    <FaEdit className="cursor-pointer" />
                    <FaDownload className="cursor-pointer" />
                    <FaTrash
                      className="cursor-pointer text-red-500"
                      onClick={() => handleDelete(doc.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              className="bg-[#FFF2D9] font-semibold px-4 py-2 rounded-lg"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Back
            </button>
            <div className="flex items-center bg-[#FFF2D9] font-semibold px-1 py-1 rounded-lg">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  className={`px-2 py-1 rounded ${
                    currentPage === page ? " text-white" : "bg-[#FFF2D9]"
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              className="bg-[#FFF2D9] font-semibold px-4 py-2 rounded-lg"
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </main>
      </div>

      {isLogoutPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p className="text-center text-[#257881] font-semibold">Logging out...</p>
          </div>
        </div>
      )}
    </>
  );
}
