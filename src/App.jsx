import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className='container h-screen w-screen flex-1'>
      <div className="hero bg-hero h-screen w-screen bg-no-repeat">
        <Header />
        <Hero/>
      </div>
    </div>
  )
}
