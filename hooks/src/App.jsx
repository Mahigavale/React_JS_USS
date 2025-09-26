
import { Counter } from './components/counter'
import './App.css'
import { ChangeColor } from './components/changecolor'
import { Inputvalues } from './components/takeIp'
import { createContext } from 'react'
import Printname from './components/Printname'
import { P2 } from './components/Printname2'
let Student = createContext("13444");
let City=createContext("NULL");
let State=createContext("NULL");
function App() {
  
  return (<>
    <ChangeColor></ChangeColor>
    <Counter></Counter>
    <Inputvalues></Inputvalues>

    <Student.Provider value="Brown fox">
       <City.Provider value='pune'>
        <State.Provider value='maharashtra'>
           <Printname></Printname>
           
<h1> The P2 : here</h1>
           <P2></P2>
        </State.Provider>
       </City.Provider>
    </Student.Provider>


     
  </>)
}
export default App
export { Student, City,State }
