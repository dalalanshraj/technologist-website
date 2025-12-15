import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/footer'
import About from './pages/About';
import FaqSection from './pages/faq';
import Founder from './pages/founder';
import Services from './pages/services';
import Contact from './pages/contact';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
    <ScrollToTop /> 
     <Navbar />
     <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='/faq' element={<FaqSection />} />
      <Route path='/founder' element={<Founder />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    
     <Footer />
     
    </>
  )
}

export default App
