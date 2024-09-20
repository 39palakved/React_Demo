import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
const Routing = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Routing
