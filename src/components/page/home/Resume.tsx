"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "@/components/shared/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const tabs = [
  { key: "education", label: "Education" },
  { key: "skills", label: "Professional Skills" },
  { key: "experience", label: "Experience" },
  // { key: "achievement", label: "Achievements" },
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="A Resume of Innovation and Expertise" des="My Resume" />
      </div>

      {/* Responsive Tabs */}
      <div className="flex justify-center items-center mt-8">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:flex lg:gap-4">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-designColor text-white border-b-4 border-designColor"
                  : "bg-transparent text-lightText hover:text-white"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mt-8"
      >
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "experience" && <Experience />}
        {/* {activeTab === "achievement" && <Achievement />} */}
      </motion.div>
    </section>
  );
};

export default Resume;
