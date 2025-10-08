import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/Aboutus'
import Counter from './Components/Counterdemo'
import Call from './Components/Callbackhell'
import Usecontxt from './Components/Usecontxt'

let firstcontext=createContext( {
  id:1,
  name:"abc"
    });
let secondcontext=createContext( {
   id :2,
   name:"cde"
    });
function App() {


  let students=[
    {
  id:1,
  name:"abc"
    },
    {
   id :2,
   name:"cde"
    }
  ];
  
 return(<>
  <About students={students}></About>
  <Counter></Counter>


<firstcontext.Provider value={students[0]}>
  <secondcontext.Provider value={students[1]}>
     <Call></Call>
  </secondcontext.Provider>
</firstcontext.Provider>
  
  <Usecontxt></Usecontxt>
 </>)
   
  
}

export default App
export {firstcontext,secondcontext}
