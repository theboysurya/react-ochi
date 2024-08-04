import React from 'react'

function Featured() {
  return (
    <div className='w-full py-10 font-["Neue_Montreal"] '>
      <div className="w-full border-b-[1px] px-20 py-20 border-zinc-400">
        <h1 className='text-[3.6vw] leading-none'>Featured projects</h1>
      </div>
      <div className='projects flex gap-4 w-full relative mt-10 px-20'>
        <div className='project-heading absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'>
            <h1 className='font-["Test_Founders_Grotesk_X"] text-[6vw] uppercase font-bold text-[#cdea68]'>Project Name</h1>
        </div>
        <div className='card flex-col w-1/2 flex gap-4 flex '>
          <div className='flex gap-2  uppercase leading-none items-center'>
            <div className='w-4 h-4 rounded-full bg-zinc-900'></div>
            <p>fyde</p>
          </div>
          <div className='bg-red-500 w-full h-[70vh] rounded-2xl overflow-hidden'>
            <img className="object-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
          </div>
          <div className='flex gap-2'>
            {["audit","copywriting","sales deck","slides design"].map((item, index) => (
              <a className='py-2 px-4 border-[1px] border-zinc-600 rounded-full uppercase text-sm'>{item}</a>
            ))}
          </div>
        </div>
        <div className='card flex-col w-1/2 flex gap-4 flex'>
          <div className='flex gap-2  uppercase leading-none items-center'>
            <div className='w-4 h-4 rounded-full bg-zinc-900'></div>
            <p>vise</p>
          </div>
          <div className='bg-red-500 w-full h-[70vh] rounded-2xl overflow-hidden'>
          <img className="object-cover w-full h-full" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
          </div>
          <div className='flex gap-2'>
            {["agency","company presentation"].map((item, index) => (
              <a className='py-2 px-4 border-[1px] border-zinc-600 rounded-full uppercase text-sm'>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured