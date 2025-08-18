import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Career from './pages/Career'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import ScrollToTop from './components/ScrollToTop'
import ScrollTopButton from './components/ScrollTopButton'
import MutualFunds from './pages/MutualFunds'
import Health from './pages/Health'
import Life from './pages/Life'
import General from './pages/General'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} caseSensitive />
          <Route path="/about" element={<About />} caseSensitive />
          <Route path="/contact" element={<Contact />} caseSensitive />
          <Route path="/career" element={<Career />} caseSensitive />
          <Route path="/signup" element={<SignUp />} caseSensitive />
          <Route path="/login" element={<Login />} caseSensitive />
          <Route path="/services/investments" element={<MutualFunds />} caseSensitive />
          <Route path="/services/insurance/health" element={<Health />} caseSensitive />
          <Route path="/services/insurance/life" element={<Life />} caseSensitive />
          <Route path="/services/insurance/general" element={<General />} caseSensitive />
        </Routes>
        <Footer />
        <ScrollTopButton />
      </Router>
    </>
  )
}

export default App
