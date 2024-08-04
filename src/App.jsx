import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Client from './components/Client'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full h-screen'>
      <Navbar/>
      <Hero/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Client/>
      <Footer/>
    </div>
  )
}

export default App