import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import BookAppointment from './components/BookAppointment'

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

      <div className='h-full bg-slate-100 md:max-h-[510px] md:bg-bookbg bg-no-repeat'>
        <BookAppointment/>
      </div>
      </div>
  )
}
