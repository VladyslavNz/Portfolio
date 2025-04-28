import React from "react";
import { contacts } from "../constants";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="pb-7 flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, dumping: 10 }}
        viewport={{ once: true }}
        className="my-10  text-4xl md:text-5xl text-center hover:text-indigo-600"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-md"
        >
          <IoIosMail className="inline mr-2 text-orange-500" />{" "}
          <a href="mailto:vladnazarchuk406@gmail.com">{contacts.email}</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-md"
        >
          <IoIosCall className="inline mr-2 text-cyan-400" />{" "}
          <a href="tel:+48577283672">{contacts.phone}</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-md"
        >
          <FaLocationDot className="inline mr-2 text-blue-600" />
          <span>{contacts.address}</span>
        </motion.div>
      </div>
      <div className="gap-4 text-2xl mt-4 flex">
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          href="https://github.com/VladyslavNz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
          className="text-blue-500 hover:text-gray-300"
          href="https://www.linkedin.com/in/vladyslav-nazarchuk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
