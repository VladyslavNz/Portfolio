import { profile } from "../constants";
import cv from "../assets/Vladyslav_Nazarchuk_CV.pdf";

export const Home = () => {
  return (
    <div className="border-b pb-12 flex items-center justify-center border-neutral-800">
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl mt-20 font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {profile.title}
          </h1>
          <span className="text-4xl md:text-5xl text-gray-400">
            {profile.subtitle}
          </span>
          <p className="text-white text-center text-lg mb-8 max-w-lg mx-auto mt-5">
            {profile.description}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href={cv}
              target="_blank"
              download
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
