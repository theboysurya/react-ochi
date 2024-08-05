import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" className="w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
        <div className='text flex whitespace-nowrap uppercase border-t-[1px] border-zinc-300 border-b-[1px] font-bold font-Test_Founders_Grotesk_X text-[20vw] text-white leading-none overflow-hidden '>
            <motion.h1 
              initial={{x:"0"}}
              animate  = {{x: "-100%"}}
              transition={{ repeat: Infinity, ease: "linear", duration: "5"}}
              className='-mt-8  pr-10'>We are ochi</motion.h1>
            <motion.h1 
              initial={{x:"0"}}
              animate  = {{x: "-100%"}}
              transition={{ repeat: Infinity, ease: "linear", duration: "5"}}
              className='-mt-8  pr-10'>We are ochi</motion.h1>
            <motion.h1 
              initial={{x:"0"}}
              animate  = {{x: "-100%"}}
              transition={{ repeat: Infinity, ease: "linear", duration: "5"}}
              className='-mt-8  pr-10'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee