"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  FaBars,
  FaProjectDiagram,
  FaBlogger,
  FaTools,
  FaTimes,
  FaHome,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-gray-200 text-gray-900 min-h-full w-80 p-4 lg:relative fixed z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
          <button
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <ul className="menu space-y-4">
          <li>
            <Link href="/dashboard">
              <div className="flex items-center gap-2 p-3 border-b-1 border-red-600">
                <FaHome />
                <span>Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/projects">
              <div className="flex items-center gap-2 p-3 border-b-1 border-red-600">
                <FaProjectDiagram />
                <span>Projects</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/blogs">
              <div className="flex items-center gap-2 p-3 border-b-1 border-red-600">
                <FaBlogger />
                <span>Blogs</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/skills">
              <div className="flex items-center gap-2 border-b-1 p-3 border-red-600">
                <FaTools />
                <span>Skills</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow-md w-full px-4 py-3 flex items-center justify-between lg:hidden">
          <button
            onClick={toggleSidebar}
            aria-label="Open Sidebar"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaBars size={20} />
          </button>
          <h1 className="text-lg font-bold">Admin Dashboard</h1>
        </nav>

        {/* Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
