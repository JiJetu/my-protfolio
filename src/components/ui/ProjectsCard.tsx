/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

interface ProjectsCardProps {
  src: any;
  title: string;
  git: string;
  git2?: string;
  liv: string;
  des: string;
  tech: string;
}

const ProjectsCard = ({
  src,
  title,
  git,
  git2,
  liv,
  des,
  tech,
}: ProjectsCardProps) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:to-gray-900 transition-colors duration-1000">
      <div className="w-full h-60 overflow-hidden rounded-lg relative">
        <Image
          className="group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>

            <div className="flex gap-2">
              {git2 ? (
                <div className="flex gap-2">
                  <a
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                  <a
                    className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                    href={git2}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsGithub />
                  </a>
                </div>
              ) : (
                <a
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                  href={git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              )}
              <a
                className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                href={liv}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGlobe />
              </a>
            </div>
          </div>

          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            Technology: {tech}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
