import React from 'react'
import instagram from '../assets/instagram-icon.svg'
import facebook from '../assets/facebook-icon.svg'
import twitter from '../assets/twitter-icon.svg'
import logo from '../assets/salon-logo.svg'

export default function Footer() {
  return (
   <div>
      <div className='bg-black h-fit p-4 flex gap-4 md:hidden'>
          <img src={logo} alt="" className='mr-auto'/>
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
    </div>

    <div className='hidden md:block'>

    </div>
   </div>
  )
}
