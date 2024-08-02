import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
    </div>
  )
}

export default App