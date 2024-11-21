"use client";

/* eslint-disable react/no-unescaped-entities */
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiExpress } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Front End Developer.",
      "MERN Stack Developer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div
      className="w-full lgl:w-1/2 flex flex-col gap-20"
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hello!
          <br /> I'm{" "}
          <span className="text-designColor capitalize">Md Jaoadul Islam</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Dedicated developer at heart, I bring a blend of hard work, relentless
          dedication, and an insatiable appetite for learning to every project I
          touch. My passion for technology drives me to constantly refine my
          skills and embrace new challenges, ensuring that I deliver innovative
          and effective solutions. With a commitment to excellence and a focus
          on continuous improvement, I am on a quest to transform visions into
          reality, one line of code at a time. Let's collaborate and create
          something truly remarkable.
        </p>
      </div>
      {/* Media */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <FaReact />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiExpress />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiTailwindcss />
            </span>
            <span className="w-16 h-16 bg-black bg-opacity-25 text-gray-200 text-xl inline-flex items-center justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 hover:-translate-y-1 transition-all hover:text-designColor cursor-pointer duration-300">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
