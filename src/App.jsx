import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import BookAppointment from './components/BookAppointment'
import WorkingDays from './components/WorkingDays'

export default function App() {
  return (
      <div className='h-screen flex-1'>
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

      {/* <div className='h-screen bg-white'>
        <WorkingDays/>
      </div> */}
      </div>
  )
}
