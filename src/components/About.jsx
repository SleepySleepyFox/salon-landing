import React from 'react'
import about_1 from '../assets/about_1.png'
import about_2 from '../assets/about_2.png'
import about_3 from '../assets/about_3.png'

export default function About() {
  return (
    <div className='container md:flex md:justify-between p-2'>
      <div className='grid grid-cols-12 grid-rows-1 p-6 w-full'>
        <img src={about_1} alt="" className='col-start-1 col-end-6 row-start-1'/>
        <img src={about_2} alt="" className='col-start-6 col-end-12 row-start-1 border-8 border-white'/>
        <img src={about_3} alt="" className='col-start-3 col-end-10 row-end-2 mt-44 border-8 border-white'/>
      </div>

        <div className='p-2 flex flex-col items-center justify-center md:items-start'>
          <h3 className='text-secondary font mt-2 text-center md:text-left'>About Us</h3>
          <h1 className='text-black font-black md:text-4xl text-center md:text-left'> Best Haircut Salon For Men</h1>
          <p className=' mt-2 text-center md:text-left'>Let your hairdressers do their amazing job. Trim the hair to get your desired look. Book appointment with us for your favorite hair Styles!</p>
          <button className='bg-secondary p-2 px-6 mt-2'>Read More</button>
        </div>
    </div>
  )
}
