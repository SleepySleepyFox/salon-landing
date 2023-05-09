import React from 'react'
import hero from '../assets/hero.png'

export default function Hero() {
  return (
    // md:absolute md:top-0
    <div className='flex justify-between w-full h-full'> 
        <div className='flex flex-col justify-center items-center p-2 self-center'>
            <h3 className='text-secondary text-center'>Welcome To Choppers</h3>
            <h1 className='text-white text-center'>Best Hair Salon For A Professional Look</h1>
            <p className='text-white text-center'>Choppers offers high performance customized facials to provide you with visible results.</p>
          
                <div className='flex flex-col md:flex-row justify-center gap-4 mt-4'>
                <button className='w-44 h-14 bg-secondary text-black font-bold'>Book Now</button>
                <button className='w-44 h-14 bg-none border-white border-2 text-white font-bold'>All Services</button>
                </div>
            
        </div>

        <div className='hidden items-end md:flex'>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}
