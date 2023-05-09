import React, { useState } from 'react'
import logo from '../assets/salon-logo.svg' 
import menu from '../assets/menu.svg'

export default function Header() {
    const [sideMenu, setSideMenu] = useState(false)

  return (
    <div className='fixed md:top-0 w-full'>
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

            <div className='md:hidden'>
                <img className='md:hidden h-6 w-6' src={menu} alt="" onClick={() => setSideMenu(e => !e)}/>
            </div>
        </header>
             <div className={`absolute right-0 top-0 bg-white h-screen w-[45%] ease-in-out duration-300 ${sideMenu ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                 {sideMenu && <div>
                    <div onClick={() => setSideMenu(e => !e)}>
                        <div className='font-bold p-3'>X</div>
                    </div>

                    <div>
                        <ul className='md:hidden text-black m-auto items-center gap-10 flex flex-col'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>
                                <button className='w-24 h-10 bg-secondary text-black font-bold'>Book Now</button>
                            </li>
                        </ul>
                    </div>
                </div>}
            </div>
    </div>
  )
}
