import React from 'react'
import {
    RiHtml5Fill,
    RiCss3Fill,
    RiJavascriptFill,
    RiReactjsFill,
    RiNodejsFill,
    RiTailwindCssFill,
  } from "react-icons/ri";
  import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-5xl font-bold text-blue-500'>Skills</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className='text-7xl text-red-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Fill className='text-7xl text-purple-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-cyan-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className='text-7xl text-green-700' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className='text-7xl text-yellow-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsFill className='text-7xl text-cyan-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsFill className='text-7xl text-green-500' />
            </div>
        </div>
    </div>
  )
}

export default Skills