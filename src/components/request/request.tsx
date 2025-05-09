"use client";

import { useState, useRef, useEffect } from "react";
import { Eye, Pencil, Download, Trash2, XCircle, Menu, X } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Request() {
  const router = useRouter();
  const handleDashboard = () => {
    router.push('/Upload'); // Replace with your desired route
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 10;
  const [isYearSelect, setIsYearSelect] = useState(false);
  const [isMonthSelect, setIsMonthSelect] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mock data as initial state with more varied dates
  const [historyData, setHistoryData] = useState(
    Array.from({ length: 50 }, (_, i) => {
      const day = (i % 28) + 1; // Ensure days are within 1-28 range
      const month = (i % 12);
      const year = 2024 + Math.floor(i / 12); // Spread across few years
      const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      return {
        id: (i + 1).toString().padStart(3, "0"),
        name: `OCR File ${i + 1}.pdf`,
        date: dateString,
      };
    })
  );

  // Filter data based on search query and selected date
  const filteredData = historyData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = selectedDate ? item.date === selectedDate : true;
    return matchesSearch && matchesDate;
  });

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const handleDateSelection = (date: string) => {
    setSelectedDate(date);
    setShowCalendar(false);
    setCurrentPage(1);
  };

  const handleNewRequest = () => {
    // Redirect to the upload screen
    window.location.href = "/upload";
  };

  const handleView = (id: string) => {
    const item = historyData.find((data) => data.id === id);
    if (item) {
      alert(`Viewing item:\nID: ${item.id}\nName: ${item.name}`);
      console.log(`Viewing item with ID: ${id}, Name: ${item.name}`);
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  };

  const handleEdit = (id: string) => {
    const item = historyData.find((data) => data.id === id);
    if (item) {
      const newName = prompt("Enter the new name:", item.name);
      if (newName !== null && newName.trim() !== "") {
        setHistoryData((prevData) =>
          prevData.map((data) =>
            data.id === id ? { ...data, name: newName } : data
          )
        );
        console.log(`Edited item with ID: ${id}, new name: ${newName}`);
      } else {
        console.log(`Edit canceled or invalid input for item with ID: ${id}`);
      }
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  };

  const handleDownload = (id: string) => {
    const item = historyData.find((data) => data.id === id);
    if (item) {
      const link = document.createElement("a");
      link.href = `/downloads/${item.name}`; // Assuming files are served from a /downloads directory
      link.download = item.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error(`Item with ID ${id} not found.`);
    }
  };

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
      setHistoryData((prevData) => prevData.filter((data) => data.id !== id));
      console.log(`Deleted item with ID: ${id}`);
    } else {
      console.log(`Deletion canceled for item with ID: ${id}`);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle clicking outside of calendar to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setShowCalendar(false);
        setIsYearSelect(false); // Also close year/month views
        setIsMonthSelect(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef]);

  // Generate calendar date data
  const generateCalendarDates = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarDays = [];

    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      calendarDays.push({
        day: i,
        date: dateString
      });
    }
    return calendarDays;
  };

  // Navigate to the previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prevYear => prevYear - 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth - 1);
    }
  };

  // Navigate to the next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prevYear => prevYear + 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth + 1);
    }
  };

  const handleYearSelect = (year: number) => {
    setCurrentYear(year);
    setIsYearSelect(false); // Close year selection after selecting
  };

  const handleMonthSelect = (month: number) => {
    setCurrentMonth(month);
    setIsMonthSelect(false);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const clearSelectedDate = () => {
    setSelectedDate("");
    setShowCalendar(false); // Optionally close the calendar after clearing
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-[#FFEBBF]">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 bg-[#FFF7D4] border-b border-gray-200">
        <h1 className="text-2xl font-bold text-[#006666]">OCR</h1>
        <button onClick={toggleMobileMenu} className="text-[#006666]">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar - hidden on mobile unless menu is open */}
      <aside className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-60 bg-[#FFF7D4] border-r border-gray-200 flex flex-col md:h-screen z-10`}>
        <div className="pt-6 md:pt-10 pb-6 md:pb-8 px-6 md:px-8">
          <h1 className="text-3xl font-bold text-[#006666]">OCR</h1>
        </div>

        <nav className="flex-grow">
          <ul className="space-y-2">
            {/* Dashboard */}
            <li className="flex items-center py-3 px-6 md:px-8 hover:bg-[#FFEAA7] cursor-pointer">
              <span className="mr-3 text-[#006666]">
                <img
                  src="/dashboard_icon.png"
                  alt="Dashboard Icon"
                  className="w-5 h-5"
                />
              </span>
              <span className="text-[#006666] font-medium">Dashboard</span>
            </li>

            {/* Request */}
            <li className="flex items-center py-3 px-6 md:px-8 bg-[#FFEAA7] cursor-pointer">
              <span className="mr-3 text-[#006666]">
                <img
                  src="/request_icon.png"
                  alt="Request Icon"
                  className="w-5 h-5"
                />
              </span>
              <span className="text-[#006666] font-medium">Request</span>
            </li>
          </ul>
        </nav>

        <div className="border-t border-gray-300 py-4 px-6 md:px-8 flex items-center gap-3 text-[#006666] cursor-pointer mt-auto">
          <svg
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="10" cy="10" r="8" />
            <path d="M10 6v8M6 10h8" />
          </svg>
          <span className="font-medium">Logout</span>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex justify-center mt-30"></div>
      <main className="flex-1 p-4 md:p-8">
        {/* Header with Search Bar and Filters */}
        <div className="flex flex-col justify-center items-center mb-6">
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-9 mt-4 md:mt-10 w-full">
            <h2 className="text-xl md:text-2xl font-bold text-[#006666] mb-2 md:mb-4">History Data</h2>

            {/* Updated Search Bar */}
            <div className="relative w-full md:w-[800px] flex justify-center bg-[#FFEBBF] border border-[#006666] rounded-full">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="flex-1 pl-4 py-2 bg-transparent focus:outline-none text-gray-700 placeholder-gray-600 rounded-l-full"
              />
              <button className="w-10 h-10 md:w-12 md:h-12 bg-[#006666] flex items-center justify-center rounded-r-full">
                <img
                  src="/searchicon.png"
                  alt="Search Icon"
                  className="w-4 h-4 md:w-5 md:h-5"
                />
              </button>
            </div>

            <div className="flex items-center gap-4 mt-2 md:mt-0">
              {/* Calendar Icon with dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="flex items-center justify-center w-10 h-10 bg-[#FFEBBF] border border-gray-300 rounded-full hover:bg-gray-100"
                >
                  <img
                    src="/calendar icon.png"
                    alt="Calendar Icon"
                    className="w-6 h-6"
                  />
                </button>

                {/* Calendar Dropdown */}
                {showCalendar && (
                  <div
                    ref={calendarRef}
                    className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-20 w-64 overflow-hidden"
                  >
                    <div className="bg-[#006666] text-white p-3 flex flex-col items-start gap-2" >
                      <div className="flex justify-between items-center w-full">
                          <span className="font-bold">
                              {isYearSelect
                              ? "Select Year"
                              : isMonthSelect
                              ? "Select Month"
                              : new Date(currentYear, currentMonth).toLocaleString("default", {
                                  month: "long",
                                  year: "numeric",
                              })}
                          </span>
                           <button
                              onClick={() => {
                                  setShowCalendar(false);
                                  setIsYearSelect(false);
                                  setIsMonthSelect(false);
                              }}
                              className="text-white hover:bg-white/20"
                          >
                              <XCircle className="h-4 w-4" />
                          </button>
                      </div>
                      {!isYearSelect && !isMonthSelect && (
                          <div className="flex justify-between w-full">
                              <button onClick={goToPreviousMonth} className="text-white px-2 py-1 rounded hover:bg-[#004d4d]">
                              &lt;
                              </button>
                              <div className="flex gap-2">
                                   <button
                                      onClick={() => setIsMonthSelect(true)}
                                      className="text-white px-2 py-1 rounded hover:bg-[#004d4d] text-sm"
                                  >
                                      Month
                                  </button>
                                  <button
                                      onClick={() => setIsYearSelect(true)}
                                      className="text-white px-2 py-1 rounded hover:bg-[#004d4d] text-sm"
                                  >
                                      Year
                                  </button>
                              </div>

                              <button onClick={goToNextMonth} className="text-white px-2 py-1 rounded hover:bg-[#004d4d]">
                              &gt;
                              </button>
                          </div>
                      )}
                    </div>

                    <div className="p-2">
                      {isYearSelect ? (
                        // Year selection view
                        <div className="grid grid-cols-3 gap-2">
                          {Array.from({ length: 12 }, (_, i) => currentYear - 5 + i).map((year) => (
                            <button
                              key={year}
                              onClick={() => handleYearSelect(year)}
                              className={`w-full py-2 rounded-md text-sm ${
                                currentYear === year ? "bg-[#3344FF] text-white" : "hover:bg-gray-100"
                              }`}
                            >
                              {year}
                            </button>
                          ))}
                           <div className="col-span-3 flex justify-center mt-2">
                              <button
                                  onClick={() => setIsYearSelect(false)}
                                  className="text-gray-700 hover:bg-gray-100"
                              >
                                  Cancel
                              </button>
                          </div>
                        </div>
                      ) : isMonthSelect ? (
                          <div className="grid grid-cols-3 gap-2">
                              {Array.from({length: 12}, (_, i) => (
                                  <button
                                      key={i}
                                      onClick={() => handleMonthSelect(i)}
                                      className={`w-full py-2 rounded-md text-sm ${
                                          currentMonth === i ? "bg-[#3344FF] text-white" : "hover:bg-gray-100"
                                      }`}
                                  >
                                      {new Date(currentYear, i).toLocaleString('default', {month: 'short'})}
                                  </button>
                              ))}
                              <div className="col-span-3 flex justify-center mt-2">
                                  <button
                                      onClick={() => setIsMonthSelect(false)}
                                      className="text-gray-700 hover:bg-gray-100"
                                  >
                                      Cancel
                                  </button>
                              </div>
                          </div>
                      ) : (
                        // Day selection view
                        <>
                          <div className="grid grid-cols-7 gap-1 mb-1">
                            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, i) => (
                              <div key={i} className="text-center text-xs text-gray-500 py-1">
                                {day}
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-7 gap-1">
                            {generateCalendarDates().map((dateObj, i) => (
                              <div key={i} className="text-center">
                                {dateObj ? (
                                  <button
                                    onClick={() => handleDateSelection(dateObj.date)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                      selectedDate === dateObj.date
                                        ? "bg-[#3344FF] text-white"
                                        : "hover:bg-gray-100"
                                    }`}
                                  >
                                    {dateObj.day}
                                  </button>
                                ) : (
                                  <div className="w-8 h-8"></div>
                                )}
                              </div>
                            ))}
                          </div>
                           <div className="mt-4 flex justify-end">
                              <button
                                  onClick={clearSelectedDate}
                                  className="text-gray-700 hover:bg-gray-100"
                              >
                                  Clear
                              </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={handleDashboard}
                className="bg-[#3344FF] text-white px-4 py-2 rounded flex items-center gap-2"
              >
                <span>+</span> New Request
              </button>
            </div>
          </div>
        </div>

        {/* Filter indicator for mobile */}
        {selectedDate && (
          <div className="md:hidden flex items-center gap-2 mb-4 px-2">
            <div className="bg-[#3344FF] text-white px-3 py-1 rounded-full flex items-center text-sm">
              Date: {selectedDate}
              <button onClick={clearSelectedDate} className="ml-2">
                <XCircle className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}

        {/* Table for larger screens */}
        <div className="hidden md:block rounded-lg bg-[#FFF7D4] border border-gray-200 overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[#006666] border-b border-gray-200 bg-[#FFF7D4]">
                <th className="px-6 py-3 font-medium">I.D.</th>
                <th className="px-6 py-3 font-medium">Document Name</th>
                <th className="px-6 py-3 font-medium text-right">Upload Date</th>
                <th className="px-6 py-3 font-medium text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {paginatedData.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-3 text-gray-500">{item.id}</td>
                  <td className="px-6 py-3">{item.name}</td>
                  <td className="px-6 py-3 text-gray-500 text-right">{item.date}</td>
                  <td className="px-6 py-3">
                    <div className="flex justify-center gap-4 items-center">
                      <button
                        className="text-gray-400 hover:text-[#006666]"
                        onClick={() => handleView(item.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-[#006666]"
                        onClick={() => handleEdit(item.id)}
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-[#006666]"
                        onClick={() => handleDownload(item.id)}
                      >
                        <Download className="h-4 w-4" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-[#006666]"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile view */}
        <div className="md:hidden space-y-4">
          {paginatedData.map((item) => (
            <div key={item.id} className="bg-[#FFF7D4] rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500 text-sm">ID: {item.id}</span>
                <span className="text-gray-500 text-sm">{item.date}</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-3">{item.name}</h3>
              <div className="flex justify-between mt-3 border-t pt-3">
                <button
                  className="flex flex-col items-center text-gray-500 text-xs"
                  onClick={() => handleView(item.id)}
                >
                  <Eye className="h-4 w-4 mb-1" />
                  View
                </button>
                <button
                  className="flex flex-col items-center text-gray-500 text-xs"
                  onClick={() => handleEdit(item.id)}
                >
                  <Pencil className="h-4 w-4 mb-1" />
                  Edit
                </button>
                <button
                  className="flex flex-col items-center text-gray-500 text-xs"
                  onClick={() => handleDownload(item.id)}
                >
                  <Download className="h-4 w-4 mb-1" />
                  Download
                </button>
                <button
                  className="flex flex-col items-center text-gray-500 text-xs"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-4 w-4 mb-1" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 md:gap-4 bg-[#FFF7D4] px-4 md:px-6 py-2 md:py-3 rounded-lg shadow-sm overflow-x-auto">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="font-medium text-gray-800 hover:text-[#3344FF] whitespace-nowrap"
              disabled={currentPage === 1}
            >
              Back
            </button>

            <div className="flex gap-1 md:gap-2 overflow-x-auto">
              {getPageNumbers().map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-md ${
                    num === currentPage
                      ? "bg-[#3344FF] text-white"
                      : "text-gray-800 hover:bg-[#FFE4A0]"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="font-medium text-gray-800 hover:text-[#3344FF] whitespace-nowrap"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}