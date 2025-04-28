import React from "react";
import {
  RiHtml5Fill,
  RiCss3Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiNodejsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse", // Fixed "repeateType" to "repeatType"
      },
    },
  });

const Skills = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <motion.h1
      initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      className="my-20 text-center text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Skills
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <RiHtml5Fill className="text-7xl text-red-500" />
        </motion.div>
        <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <RiCss3Fill className="text-7xl text-purple-500" />
        </motion.div>
        <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <DiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <RiJavascriptFill className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <RiReactjsFill className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            whileHover={{ rotate: 360}}
            transition={{ duration: 1 }}
        className="rounded-2xl border-4 border-neutral-800 p-2 lg:p-4">
          <RiNodejsFill className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
