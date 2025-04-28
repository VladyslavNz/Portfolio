import React from "react";
import { projects } from "../constants/index";
import { delay, motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="my-20 text-center text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-12 flex flex-wrap justify-center text-center lg:text-start lg:justify-center items-center"
            >
              <div className="w-full lg:w-1/4 max-w-[250px] flex justify-center lg:block lg:-ml-11 lg:-mt-6 mt-5">
                <a href={project.live_link}>
                  <motion.img
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    width={250}
                    height={250}
                    className="m-2 rounded"
                  ></motion.img>
                </a>
              </div>
              <div className="w-full max-w-xl lg:w-3/4 lg:ml-15 mt-3 lg:mt-0">
                <motion.h6
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="mb-2 font-semibold flex justify-between"
                >
                  {" "}
                  <a
                    className="hover:text-neutral-400 hover:transition-all"
                    href={project.live_link}
                  >
                    {project.title}
                  </a>
                  <motion.a
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    href={project.github_link}
                    className="cursor-pointer"
                  >
                    {<FaGithub />}
                  </motion.a>
                </motion.h6>
                <motion.p 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5}}
                viewport={{ once: true, amount: 0.5 }}
                className="mb-4 text-neutral-400">{project.description}</motion.p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 ">
                  {project.technologies.map((tech, index) => {
                    return (
                      <motion.span
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        key={index}
                        className="rounded bg-neutral-900 text-indigo-500 px-2 py-1 text-sm font-semibold"
                      >
                        {tech}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
