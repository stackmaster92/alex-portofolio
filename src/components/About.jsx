import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Slideshow from './Slideshow'; // Import Slideshow component
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='pb-8'>
      <motion.h1
        className='my-12 text-center text-3xl sm:text-4xl'
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        About {""}
        <motion.span
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent sm:text-4xl"
          initial={{ scale: 1, opacity: 1 }}
          whileInView={{
            scale: [1, 2, 1],
            opacity: [1, 1, 1],
            transition: {
              duration: 1.5,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            },
          }}
        >
          Me
        </motion.span>
      </motion.h1>

      <div className='flex flex-col lg:flex-row lg:items-start lg:gap-8'>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='w-full lg:w-1/2 mb-8 lg:mb-0'
        >
          {/* <div className='relative w-full h-64 sm:h-80 lg:h-96'> */}
          <div className='w-full h-full mb-5'>
            <Slideshow />
          </div>
        </motion.div>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }} 
          className='w-full lg:w-1/2'
        >
          <div className='space-y-4'>
            <p className='text-sm leading-relaxed sm:text-base lg:text-lg text-neutral-300'>
              Hi, I'm Alex Guerrero and I'm a Senior Software Developer from Romania with over 6 years of experience building scalable and reliable web and mobile applications. My expertise spans both front-end and back-end technologies, including React, Next.js, Node.js, Kotlin, PostgreSQL, MySQL, and MongoDB.
            </p>
            
            <p className='text-sm leading-relaxed sm:text-base lg:text-lg text-neutral-300'>
              As a full-stack developer, I specialize in crafting responsive user interfaces, designing efficient APIs (REST & GraphQL), and managing robust databases. I'm committed to writing clean, maintainable code and delivering high-performance solutions that prioritize user experience.
            </p>
            
            <p className='text-sm leading-relaxed sm:text-base lg:text-lg text-neutral-300'>
              While others may balance coding with dance or music, I channel my passion entirely into engineering smart, scalable systems that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
