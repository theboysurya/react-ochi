import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#cdea68] p-20 rounded-tl-3xl rounded-tr-3xl font-["Neue_Montreal"] '>
        <h1 className="font-['Neue_Montreal'] text-[4vw] font leading-[5vw]">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='border-t-[1px] border-zinc-600 grid grid-cols-3 mt-[6vw] pt-[2vw]'>
            <div>What you can expect:</div>
            <div className='flex flex-col gap-[3vw]'>
                <p>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                <p>
                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                </p>
            </div>
            <div className='self-end text-right'>
                <div className='inline-flex text-left flex-col gap-[3vw]'>
                    <p className='inline'>S:</p>
                    <div className='inline-flex flex-col underline'>
                        <a href="#">Instagram</a>
                        <a href="#">Behance</a>
                        <a href="#">Facebook</a>
                        <a href="#">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t-[1px] border-zinc-600 mt-[6vw] pt-[2vw]  w-full flex'>
            <div className='w-1/2'>
                <h1 className='text-[4vw]  leading-none  overflow-hidden'>Our approach:</h1>
                <button className='px-6 py-4 bg-zinc-900 text-white mt-[1vw] rounded-full uppercase flex gap-6 leading-none items-center text-sm'>Read more
                    <div className='w-2 h-2 rounded-full bg-white'></div>
                </button>
            </div>
            <div className='w-1/2 h-[40vw] bg-red-500 rounded-2xl'>
            </div>
        </div>
    </div>
  )
}

export default About