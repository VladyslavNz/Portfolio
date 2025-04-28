import { profile } from "../constants";
import cv from "../assets/Vladyslav_Nazarchuk_CV.pdf";
import { delay, motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="border-b pb-12 flex items-center justify-center border-neutral-800">
      <div className="flex justify-center w-full">
        <motion.div 
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, dumping: 10}}
        className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, dumping: 2, delay: 0.2}}
          className="text-5xl md:text-7xl mt-20 font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            {profile.title}
          </motion.h1>
          <motion.span 
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, dumping: 5, delay: 0.5}}
          className="text-4xl md:text-5xl text-gray-400">
            {profile.subtitle}
          </motion.span>
          <motion.p 
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, dumping: 5, delay: 0.8}}
          className="text-white text-center text-lg mb-8 max-w-lg mx-auto mt-5">
            {profile.description}
          </motion.p>
          <motion.div 
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1}}
          className="flex justify-center space-x-4">
            <a
              href={cv}
              target="_blank"
              download
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
