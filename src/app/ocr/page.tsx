import {
    Calendar,
    Download,
    Eye,
    GitPullRequestArrow,
    Home,
    LogOut,
    Pencil,
    Search,
    Settings,
    Table2,
    Trash2,
    User,
  } from "lucide-react";
  import Link from "next/link";
  import React from "react";
  
  const OcrPage = () => {
    const data = [
      { id: 1, name: "Document A", uploadDate: "2025-05-01" },
      { id: 2, name: "Document B", uploadDate: "2025-05-07" },
      { id: 3, name: "Document C", uploadDate: "2025-05-09" },
      { id: 4, name: "Document A", uploadDate: "2025-05-01" },
      { id: 5, name: "Document B", uploadDate: "2025-05-07" },
      { id: 6, name: "Document C", uploadDate: "2025-05-09" },
    ];
    return (
      <div className="flex ">
        <div className="h-screen w-96 bg-[#FFF2D9] border-r dark:border-amber-100 flex flex-col p-4">
          <h2 className="font-bold text-4xl text-teal-600 text-center">OCR</h2>
  
          <nav className="flex flex-col space-y-4 mt-6">
            <Link href="/" className="flex text-center">
              <Table2 className="w-10 h-10 mr-2" />
              <h1 className="text-2xl mt-1">Dashboard</h1>
            </Link>
  
            <Link href="/" className="flex text-center">
              <GitPullRequestArrow className="w-10 h-10 mr-2" />
              <h1 className="text-2xl mt-1">Request</h1>
            </Link>
          </nav>
  
          <div className="absolute bottom-4 left-4 right-4">
          <button className="flex items-center w-full text-left text-teal-500 hover:text-teal-700">
            <LogOut className="w-5 h-5 mr-2 text-center text-2xl" />
            Logout
          </button>
        </div>
        </div>
  
        
        <div className="bg-[#FFE5B4] w-full">
          <div className="m-24  flex justify-around">
            <h1 className="text-3xl text-teal-600">History Data</h1>
  
            <div className="relative w-120 ">
              <input
                id="text"
                type="text"
                placeholder="search"
                className="w-full border border-teal-600 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-teal-600"
              >
                <Search className="w-5 h-5  " />
              </button>
            </div>
  
            <div className="">
              <Calendar className="w-10 h-10 " color="teal" />
            </div>
            <button className="bg-blue-700 w-32 text-white rounded">
              + New Request{" "}
            </button>
          </div>
  
            <div className="overflow-x-auto w-7xl ml-40 p-4  hover:text-teal-600   ">
          <div className="">
              <table className="min-w-full border-2 border-[#FFF2D9] rounded-xl bg-[#FFF2D9] text-left ">
                <thead className="text-center text-teal-700">
                  <tr>
                    <th className="px-4 py-2 border">ID</th>
                    <th className="px-4 py-2 border">Document Name</th>
                    <th className="px-4 py-2 border">Upload Date</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((doc) => (
                    <tr key={doc.id} className="text-center">
                      <td className="px-4 py-2 border">{doc.id}</td>
                      <td className="px-4 py-2 border">{doc.name}</td>
                      <td className="px-4 py-2 border">{doc.uploadDate}</td>
                      <td className="px-4 py-2 border">
                        <button className="text-teal-600 hover:underline mr-2">
                          <Eye />
                        </button>
                        <button className="text-gray-600 hover:underline ml-2">
                          <Pencil />
                        </button>
                        <button className="text-gray-600  hover:underline ml-2">
                          <Download />
                        </button>
                        <button className="text-gray-600  hover:underline ml-2">
                          <Trash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  
          <div className="hover:border-sky-500">
            <div className="flex items-center justify-center  mt-6">
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700">
                Back
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 border-l border-gray-300">
                1
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 border-l border-gray-300">
                2
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 border-l border-gray-300">
                3
              </button>
              <button className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 border-l border-gray-300">
                Next
              </button>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OcrPage;
  