import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Components/Home'

function App() {
 
  return(<>
  <Navbar></Navbar>
  <Outlet></Outlet>

  {/* <Link to="/home">go to home</Link> */}
  </>)
}

export default App
