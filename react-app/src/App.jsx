import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {HashRouter, Routes,Route, Link} from "react-router-dom"
import Home from './Home'
import About from "./About"
import Contact from "./Contact"
function App() {
  

  return (
    <HashRouter>
      <header>
        <ul>
          <li><Link to="/">Home </Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/contact"> Contact</Link></li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </HashRouter>
  )
}

export default App
