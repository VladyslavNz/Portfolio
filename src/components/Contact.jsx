import React from 'react'
import { contacts } from '../constants';
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='pb-7 flex flex-col items-center justify-center'>
        <h2 className='my-10  text-4xl md:text-5xl text-center hover:text-indigo-600'>Get In Touch</h2>
        <div className='text-center space-y-4'>
            <div className='text-md'>
                <IoIosMail className='inline mr-2 text-orange-500' /> <a href="mailto:vladnazarchuk406@gmail.com}">{contacts.email}</a>
            </div>
            <div className='text-md'>
                <IoIosCall className='inline mr-2 text-cyan-400' /> <a href="tel:+48577283672}">{contacts.phone}</a>
            </div>
            <div className='text-md'>
                <FaLocationDot className='inline mr-2 text-blue-600' /><span>{contacts.address}</span>
            </div>
        </div>
        <div className='gap-4 text-2xl mt-4 flex'>
            <a href="https://github.com/VladyslavNz" target="_blank" rel="noopener noreferrer" className='hover:text-gray-300'>
                <FaGithub />
            </a>
            <a className="text-blue-500 hover:text-gray-300" href="https://www.linkedin.com/in/vladyslav-nazarchuk/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
        </div>
    </div>
  )
}

export default Contact