// src/components/Layout.jsx
import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen flex-col bg-black text-white md:flex-row">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden overflow-hidden fixed top-2 left-4 z-50 p-2 bg-gray-800 text-white rounded-md"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Main Content */}
      <div className={`flex-grow transition-all duration-300 md:ml-80`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
