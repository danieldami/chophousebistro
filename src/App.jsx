import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
