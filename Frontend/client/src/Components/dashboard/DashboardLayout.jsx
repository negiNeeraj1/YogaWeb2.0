import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import Sidebar from "./Sidebar";
import { useAuth } from "../../context/AuthContext";
import DarkModeClasses from "../DarkMode";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-full"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`
          fixed md:static top-0 left-0 h-full z-40
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          ${DarkModeClasses.container} w-69
          dark:border-rose-600
        `}
      >
        <Sidebar />
        <div
          className={`absolute bottom-0 w-full p-4 border-t bg-white ${DarkModeClasses.background.primary} `}
        >
          <button
            onClick={logout}
            className="w-full flex items-center justify-center p-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            <LogOut className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <main
        className={`flex-1 p- overflow-y-auto  ${DarkModeClasses.background.primary}`}
      >
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
