import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <div className='container h-screen w-screen flex-1'>
      <section className="hero bg-hero h-full w-screen bg-no-repeat">
        <Header />
      </section>
    </div>
  )
}
