import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Careers from './Components/Careers.jsx'
import Home from './Components/Home.jsx'
import Aboutus from './Components/Aboutus.jsx'
import Contact from './Components/Contactus.jsx'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'


const marg=createBrowserRouter(createRoutesFromElements(
  <Route element={<App></App>} path='/'>

  <Route element={<Contact></Contact>} path='/contact'></Route>
  <Route index  element={<Home></Home>}></Route>
  <Route element={<Aboutus></Aboutus>} path='/about'></Route>
  <Route element={<Careers></Careers>} path='/career'></Route>
  </Route>
))

createRoot(document.getElementById('root')).render(

  <RouterProvider router={marg}>
     <App />
  </RouterProvider>
   
  ,
)
