import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-65 rounded-4xl relative overflow-hidden shrink-0'>
      <img className='h-full w-ful object-cover' src={props.img} alt="image1" />
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='text-black font-bold text-3xl rounded-full h-10 w-10 flex justify-center items-center bg-white'>{props.id+1}</h2>
        <div>
            <p className='text-white'>{props.intro}</p>
            <div className='flex justify-between'>
                <button className='bg-blue-700 py-1 px-5 rounded-xl mt-4 cursor-pointer'>{props.tag}</button>
                <button className='bg-blue-700 py-1 px-5 mt-4 rounded-xl cursor-pointer'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
