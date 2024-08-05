import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Hero() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full h-screen pt-1'>
        <div className='textstructre mt-36 px-20'>
            {["We create","Eye opening","Presentations"].map((item, index) => {
                return(
                    <div className = "Masker">
                        <div className='w-fit flex items-end '>
                            {index === 1 && (<motion.div 
                            initial={{width: 0}} 
                            animate={{width: "8vw"}} 
                            transition={{ease: [0.68, -0.6, 0.32, 0.6], duration: 1}} 
                            className='mr-[1vw]  w-[8vw] rounded-md h-[6vw] relative top-[1vw] bg-green-500 overflow-hidden'>
                                <img className="object-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                            </motion.div>)}
                            <h1 className='pt-[2vw] font-Test_Founders_Grotesk_X  -mb-[1vw] uppercase text-[9vw] leading-[.75]'>{item}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className="border-t-[1px] border-zinc-200 mt-24 flex justify-between items-center py-5 px-20 font-Neue_Montreal">
            {["for public and private companies","from the first pitch to IPO"].map((item, index) => (<p className="text-md uppercase leading-none">{item}</p>))}
            <div className="start flex items-center gap-2">
                <div className="px-4 py-2 border-[1px] border-zinc-600  text-md uppercase rounded-full">Start the project</div>
                <div className="w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-600 rounded-full">
                    <span className='rotate-[45deg]'><FaArrowUpLong /></span>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero