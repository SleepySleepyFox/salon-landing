import React from 'react'
import hero from '../assets/working-days.jpg'

export default function WorkingDays() {
  return (
    <div className='container h-full'>
        <div>
            <div className='hidden md:block'>
                <img src={hero} alt=""/>
            </div>
            
            <div>
                <h1 className='font-black'>WORKING DAYS</h1>
                <p>We are open on all six days in a week </p>
                <div>
                    <h3>Monday</h3>
                    <p>9Am to 10pm</p>
                </div>
                <div>
                    <h3>Friday</h3>
                    <p>9Am to 10pm</p>
                </div>
                <button className='bg-secondary text-black '></button>
            </div>
        </div>
    </div>
  )
}
