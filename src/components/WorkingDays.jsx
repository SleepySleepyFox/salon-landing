import React from 'react'
import hero from '../assets/working-days.jpg'

export default function WorkingDays() {
  return (
    <div className='h-full md:flex md:flex-col mt-10'>
        <div className='md:flex self-center'>
            <div className='hidden md:block max-w-lg max-h-96'>
                <img src={hero} alt=""/>
            </div>
            
            <div className='p-6 flex flex-col gap-4 md:bg-secondary md:w-96 md:text-left'>
                <h1 className='font-black text-center md:text-white md:text-left'>WORKING DAYS</h1>
                <p className='text-center md:text-left'>We are open on all six days in a week </p>
                <div className='flex justify-between border-b-2 border-dotted border-black mb-4'>
                    <h3 className='text-center md:text-white md:text-left'>Monday</h3>
                    <p className='text-center md:text-left'>9Am to 10pm</p>
                </div>
                <div className='flex justify-between border-b-2 border-dotted border-black'>
                    <h3 className='text-center md:text-white md:text-left'>Friday</h3>
                    <p className='text-center md:text-left'>9Am to 10pm</p>
                </div>
                <button className='bg-secondary text-black h-12 md:self-start md:border-black md:border-[0.8px] md:px-10'>Book Now</button>
            </div>
        </div>
    </div>
  )
}
