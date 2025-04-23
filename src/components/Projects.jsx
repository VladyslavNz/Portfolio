import React from "react";
import { projects } from "../constants/index";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="flex flex-col justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="mb-12 flex flex-wrap justify-center text-center lg:text-start lg:justify-center items-center"
            >
              <div className="w-full lg:w-1/4 flex justify-center lg:block lg:-ml-11 lg:-mt-6 mt-5">
                <a href={project.live_link}>
                  <img
                    src={project.image}
                    alt={project.title}
                    width={250}
                    height={250}
                    className="m-2 rounded"
                  />
                </a>
              </div>
              <div className="w-full max-w-xl lg:w-3/4 lg:ml-10 mt-3 lg:mt-0"> 
                <h6 className="mb-2 font-semibold hover:text- hover:transition-all">
                  {" "}
                  <a href={project.live_link}>{project.title}</a>
                </h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 ">
                {project.technologies.map((tech, index) => {
                  return (
                    <span key={index} className="rounded bg-neutral-900 text-indigo-500 px-2 py-1 text-sm font-semibold">
                      {tech} 
                    </span>
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
