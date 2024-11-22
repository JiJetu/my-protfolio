import React from "react";
import Image from "next/image"; // For optimized image rendering
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { contactImg } from "../../../../public/assets";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-lg flex flex-col gap-8 justify-center">
      <div className="w-full h-64 relative mb-2">
        <Image
          className="object-cover rounded-lg"
          src={contactImg}
          alt="Contact"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 20vw"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Md Jaoadul Islam</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Let&apos;s Connect: Reach out to me for collaborations, projects, or
          simply to discuss all things MERN stack. I&apos;m eager to hear about
          your ideas and explore opportunities to innovate together.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+880 1626140989</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">jijetu2@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/ji.jetu.73"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/ji_jetu/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/md-jaoadul-islam/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
