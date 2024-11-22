"use client";

import { motion } from "framer-motion";
import ResumeCard from "@/components/ui/ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="py-6 lg:py-12 flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2006 - 2024</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="University of Information Technology and Sciences (2020 - 2024)"
            result="3.63/4"
            des="Earned my degree from UITS, where I specialized in CSE, mastering cutting-edge technologies and methodologies that fueled my passion for development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
