import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Add from './components/adddata'
import './App.css'
import Update from './components/updateData'

import UseFetch from './components/getmethod'
function App() {
  
  return(<>
  <h1>This is the App.jsx</h1>
  <UseFetch></UseFetch>
  <Add></Add>
  <Update></Update>
  </>)

  
}

export default App
