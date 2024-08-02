import React from 'react'

function Marquee() {
  return (
    <div className="w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
        <div className='text flex whitespace-nowrap gap-10 uppercase border-t-[1px] border-zinc-300 border-b-[1px] font-bold font-["Test_Founders_Grotesk_X"] text-[20vw] text-white leading-none overflow-hidden '>
            <h1 className='-mt-8'>We are ochi</h1>
            <h1 className='-mt-8'>We are ochi</h1>
            <h1 className='-mt-8'>We are ochi</h1>
        </div>
    </div>
  )
}

export default Marquee