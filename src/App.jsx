import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import HeroCarrusel from './components/HeroCarrusel.jsx'
import Hero from './components/Hero.jsx'
import Cards from './pages/Cards.jsx'
import { Routes } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {

  return (
    <Router basename="/canva_spa">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroCarrusel />
              <Hero />
            </>
          }
        />
        <Route path="/features" element={<Cards />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
