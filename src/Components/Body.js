import React from 'react'

export default function Body() {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='flex item-center justify-center lg:flex-1  lg:order-2 lg:justify-end'> 
        <img src="./Blue-Shape.svg" alt="image1" className='-rotate-45  h-64 md:h-72 lg:h-[400px]' />
        <img src="./Pink-Shape.svg" alt="image2" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]' />
        <img src="./Purple-Shape.svg" alt="image3" className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./Hero-Model.png" alt="image4"className='absolute h-64 md:h-72 lg:h-[400px]' />
      </div>
      <div className='lg:flex-1 lg:order-1 '>
        <h1 className='text-5xl font-bold font-Lato leading-tight'>Host your website in less than 5 minutes</h1>
        <p className='font-lato text-gray-400 '>with Hoster, get your website up and running in no less than 5 minutes with the most compatitive pricing  pacaikages available online</p><br />
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input type="email" placeholder='Enter email address' className='rounded-md px-4 py-3 placeholder:text-gray-400'/>
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join waitlist</button>
        </form>
        <div className='flex  gap-2 py-2'>
          <img src="./Checkmark.svg" alt="check" />
          <p className='font-lato text-gray-400'> No spam ,ever . Unsebscribe anytime</p>
        </div>
      </div>
    </div>
  )
}
