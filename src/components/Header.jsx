import React from 'react'
import logo from '../assets/salon-logo.svg' 

export default function Header() {
  return (
    <div>
        <header className='flex justify-between p-10 items-center'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div>
                <ul className='md:flex text-white m-auto items-center gap-10 hidden'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>
                        <button className='w-44 h-14 bg-secondary text-black font-bold'>Book Now</button>
                    </li>
                </ul>
            </div>
        </header>
    </div>
  )
}
