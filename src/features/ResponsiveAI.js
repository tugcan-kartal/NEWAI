import React from 'react'

const ResponsiveAI = () => {
  return (
    <div className='block md:hidden fixed w-[100vw] bottom-0 bg-blue-50 px-[1vw]'>
        <div className='flex justify-center items-center text-center gap-x-[25vw] py-[3vh]'>

            <div className='flex flex-col'>
                <i className="fa-solid fa-house text-blue-900"></i>
                <div className='font-semibold text-black'>Home</div>
            </div>

            <div className='flex flex-col'>
                <i className="fa-solid fa-robot text-blue-900"></i>
                <div className='font-semibold text-black'>Talk With AI</div>
            </div>

            <div className='flex flex-col'>
                <i className="fa-solid fa-newspaper text-blue-900"></i>
                <div className='font-semibold text-black'>News</div>
            </div>

        </div>
    </div>
  )
}

export default ResponsiveAI