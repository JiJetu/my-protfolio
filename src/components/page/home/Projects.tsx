"use client";

import Title from "@/components/shared/Title";
import ProjectsCard from "@/components/ui/ProjectsCard";
import { projectCar } from "../../../../public/assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Bringing Ideas to Life with Code." des="My Projects" />
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ProjectsCard
          title="Car Rental Reservation"
          des="A car rental platform that allows users to browse available cars, manages bookings, and makes secure payments. The
system includes features for both customers and administrators, with a focus on responsiveness and security."
          tech="React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, React Hook Form, Ant Design, Redux, JWT,
Moment.js, Nodemailer"
          src={projectCar}
          git={"https://github.com/JiJetu/Car-Rental-Reservation-System-Client"}
          git2={
            "https://github.com/JiJetu/Car-Rental-Reservation-System-Backend"
          }
          liv={"https://car-rental-reservation-system-client-six.vercel.app/"}
        />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
