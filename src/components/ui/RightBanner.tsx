"use client";

import Image from "next/image";
import { bannerImg } from "../../../public/assets";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div
      className="w-full lg:w-1/2 flex justify-center items-center relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      <div className="relative w-[300px] h-[400px] lg:w-[500px] lg:h-[600px] z-10">
        <Image
          src={bannerImg}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
      <motion.div
        className="absolute bottom-0 w-[350px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      ></motion.div>
    </motion.div>
  );
};

export default RightBanner;
