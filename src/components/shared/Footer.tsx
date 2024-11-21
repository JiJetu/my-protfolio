import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { logo } from "../../../public/assets";

const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="w-full h-full flex flex-col gap-8">
          <div className="relative w-32 h-32">
            <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/md-jaoadul-islam/"
              className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/ji.jetu.73"
              className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ji_jetu/"
              className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="w-full h-full">
          <h3 className="text-xl uppercase text-[#ff014f] tracking-wider">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            {["About", "Portfolio", "Services", "Blog", "Contact"].map(
              (link) => (
                <li key={link}>
                  <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                    {link}
                    <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="w-full h-full">
          <h3 className="text-xl uppercase text-[#ff014f] tracking-wider">
            Resources
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            {[
              "Authentication",
              "System Status",
              "Terms of Service",
              "Pricing",
              "Over Right",
            ].map((resource) => (
              <li key={resource}>
                <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                  {resource}
                  <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-full">
          <h3 className="text-xl uppercase text-[#ff014f] tracking-wider">
            Developers
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            {[
              "Documentation",
              "Authentication",
              "API Reference",
              "Support",
              "Open Source",
            ].map((developer) => (
              <li key={developer}>
                <span className="w-full text-lg relative hover:text-[#ff014f] duration-300 group cursor-pointer">
                  {developer}
                  <span className="w-full h-[1px] bg-[#ff014f] inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
