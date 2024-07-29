import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Home from "./Component/Home"
import About from './Layout/About'
import Contact from './Layout/Contact'
import Register from './Layout/Register'
import Home from './Layout/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Nutfound from './Component/Nutfound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='sign-up' element={<Register/>}/>
    </Route>
    <Route path='*' element={<Nutfound/>}/>



    </Routes>    
    </BrowserRouter>




    {/* // <Home/> 
    //    <About/>
    //   <Contact/>
    //   <Register/>
    //   <Home/> */}
    </>
  )
}

export default App
