"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { logo } from "../../../public/assets";
import { navLinksData } from "@/constant/nav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-[#212428] shadow-md flex justify-between items-center lg:px-6 md:px-10 border-b-[1px] border-b-gray-600">
      {/* Logo Section */}
      <div className="relative w-32 h-16 flex items-center">
        <Image
          src={logo}
          alt="Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinksData.map(({ _id, title, link }) => (
          <Link key={_id} href={link}>
            <span className="text-base font-medium text-gray-400 hover:text-[#ff014f] transition-colors duration-300 cursor-pointer">
              {title}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <span
        onClick={() => setShowMenu(!showMenu)}
        className="md:hidden text-2xl p-2 rounded-full bg-black text-[#ff014f] cursor-pointer transition"
      >
        <FiMenu />
      </span>

      {/* Mobile Menu */}
      {showMenu && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          className="fixed top-0 left-0 w-3/4 h-screen bg-gray-900 shadow-lg p-6 flex flex-col z-40"
        >
          {/* Close Button */}
          <span
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-2xl text-gray-600 cursor-pointer hover:text-[#ff014f] transition"
          >
            <MdClose />
          </span>

          {/* // Logo
          <div className="relative w-24 h-10 mb-6">
            <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
          </div> */}

          {/* Links */}
          <ul className="flex flex-col gap-6">
            {navLinksData.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link href={link}>
                  <span
                    onClick={() => setShowMenu(false)}
                    className="text-lg font-medium text-gray-400 hover:text-[#ff014f] transition-colors duration-300 cursor-pointer"
                  >
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          {/* <div className="mt-auto flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div> */}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
