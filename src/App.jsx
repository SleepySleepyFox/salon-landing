import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import BookAppointment from './components/BookAppointment'
import WorkingDays from './components/WorkingDays'
import Testimonials from './components/Testimonials'
import Affiliate from './components/Affiliate'
import Footer from './components/Footer'

export default function App() {
  return (
      <div className='flex-1 overflow-x-clip'>
        <div className="hero h-screen">
          <Header />
          <Hero/>
        </div>

        <div className='h-screen'>
          <About/>
        </div>

        <div className='h-screen bg-slate-100 md:max-h-[510px] md:bg-bookbg bg-no-repeat'>
          <BookAppointment/>
        </div>

        <div className='h-fit bg-white pb-10'>
          <WorkingDays/>
        </div>

        <div className="h-fit bg-slate-100">
          <Testimonials/>
        </div>

        <div className='hidden md:block md:bg-affiliatebg md:h-[493px] md:bg-no-repeat'>
          <Affiliate/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
  )
}
