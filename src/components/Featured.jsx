import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className='w-full py-10 font-Neue_Montreal '>
      <div className="w-full border-b-[1px] px-20 py-20 border-zinc-400">
        <h1 className="text-[3.6vw] leading-none">Featured projects</h1>
      </div>
      <div className="projects flex gap-4 w-full relative mt-10 px-20">
        <div className="card relative flex-col w-1/2 flex gap-4 flex ">
          <div className="flex gap-2  uppercase leading-none items-center">
            <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
            <p>fyde</p>
          </div>
          <motion.div 
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}>
            <motion.div className="project-heading absolute left-[100%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[10]">
              <h1 className='font-Test_Founders_Grotesk_X flex overflow-hidden text-[6vw] leading-none uppercase font-bold text-[#cdea68]'>
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.25, 1, 0.5, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
              className="relative w-full h-[70vh] rounded-2xl overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                className="object-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </motion.div>
          </motion.div>
          <div className="flex gap-2">
            {["audit", "copywriting", "sales deck", "slides design"].map(
              (item, index) => (
                <a className="py-2 px-4 border-[1px] border-zinc-600 rounded-full uppercase text-sm">
                  {item}
                </a>
              )
            )}
          </div>
        </div>
        <div className="card relative flex-col w-1/2 flex gap-4 flex">
          <div className="flex gap-2  uppercase leading-none items-center">
            <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
            <p>vise</p>
          </div>
          <motion.div 
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}>
            <motion.div className="project-heading absolute right-[100%] top-[50%] translate-x-[50%] -translate-y-[50%] z-[10]">
              <h1 className='font-Test_Founders_Grotesk_X flex overflow-hidden text-[6vw] leading-none uppercase font-bold text-[#cdea68]'>
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.25, 1, 0.5, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 0.95 }}
              transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
              className="relative w-full h-[70vh] rounded-2xl overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.5 }}
                className="object-cover w-full h-full"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </motion.div>
          </motion.div>
          <div className="flex gap-2">
            {["agency", "company presentation"].map((item, index) => (
              <a className="py-2 px-4 border-[1px] border-zinc-600 rounded-full uppercase text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
