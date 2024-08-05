import React from 'react'

function Client() {
  return (
    <div className='w-full flex gap-4  px-20 mt-40 font-Neue_Montreal'>
        <div className='card bg-[#004D43] relative rounded-xl w-1/2 h-[50vh] flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-[10vw]' alt="" />
            <a href="" className='bottom-6 left-10 absolute py-2 px-4 border-[1px] border-[#cdea68] rounded-full text-[#cdea68] font-medium uppercase text-sm'>2019-2024</a>
        </div>
        <div className='card w-1/2 h-[50vh] flex gap-4 '>
            <div className='w-1/2 bg-[#212121] w-1/2 h-[50vh] rounded-xl flex relative items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='scale-50' alt="" />
                <a href="" className='bottom-6 left-10 absolute py-2 px-4 border-[1px] border-zinc-300 rounded-full font-medium text-zinc-300 uppercase text-sm'>Business bootcamp alumni</a>
            </div>
            <div className='w-1/2 bg-[#212121] w-1/2 h-[50vh] rounded-xl flex relative items-center justify-center'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <a href="" className='bottom-6 left-10 absolute py-2 px-4 border-[1px] border-zinc-300 rounded-full font-medium text-zinc-300 uppercase text-sm'>rating 5.0 on clutch</a>
            </div>
        </div>
    </div>
  )
}

export default Client