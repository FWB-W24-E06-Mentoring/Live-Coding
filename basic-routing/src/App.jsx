import { useState } from "react"
import About from "./components/About"
import Home from "./components/Home"
import Users from "./components/Users"
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import "./App.css"
import PageNotFound from "./components/PageNotFound"

//SPA (single page application)

function App() {

 const [counter,setCounter]=useState(0)

  return (
    <BrowserRouter>
     <h1 onClick={()=>setCounter(counter+1)}>Basic React Routing :counter value : {counter}</h1>

     <ul>
      <li><NavLink to="/">Home</NavLink> </li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/users">Users</NavLink></li>
     </ul>
     <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/about" element={  <About/>} />
      <Route path="/users" element={<Users/>}/>
      <Route path="*"  element={<PageNotFound/>}/>
     </Routes>
    
    
   
    </BrowserRouter>
  )
}

export default App
