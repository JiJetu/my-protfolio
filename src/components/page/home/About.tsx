/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Title from "@/components/shared/Title";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="text-center">
        <Title title="" des="About Me" />
      </div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg text-justify py-3">
          As a MERN stack developer, my passion lies in creating engaging web
          experiences. I excel in designing intuitive user interfaces, employing
          HTML, CSS, and Tailwind CSS for the frontend, and infusing them with
          life through JavaScript and React. For the backend, Node.js and
          MongoDB form the backbone of my projects, with Firebase providing an
          extra layer of functionality. The joy of transforming concepts into
          refined, operational code drives my enthusiasm. I'm eager to
          collaborate and turn our shared visions into outstanding realities!
        </h3>
        <div className="flex gap-5 my-8">
          <p className="flex flex-col">
            <h5 className="text-4xl text-center">
              3<span className="text-designColor">+</span>
            </h5>
            Completed Projects
          </p>
        </div>
      </motion.div>
      <div className="flex gap-3">
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1UW_k3KOiV4PFPvtOakSpGjjAx6px36sw"
          download
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className="bg-designColor text-white px-4 py-2 rounded-full font-semibold">
            Download Resume
          </button>
        </motion.a>
        <motion.a
          href="https://drive.google.com/file/d/1UW_k3KOiV4PFPvtOakSpGjjAx6px36sw/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <button className="bg-designColor text-white px-4 py-2 rounded-full font-semibold">
            Check Resume
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default About;
