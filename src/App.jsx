import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'

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
      </div>
  )
}
