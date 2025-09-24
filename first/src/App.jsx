
import Home from './components/home'
import './App.css'
import { Careers } from './components/about'
import Doubt from './components/about'
import Display from './components/Rendering'
import Objects from './components/Objectrendering'
import Data from './components/Datapassed'
import {Consume} from './components/ConsumeData'
function App() {
  

  /**
   * //student.student.names
   * student=student={
  names:"uss"}
  */
  let student=
  {
    names:"unique system skills..",
    email:"Abc@gmail.com",
    pin:"232323"
  }

  let student2={...student,pin:"323232"};

  console.log(student);
  console.log("Student2:"+student2);
  console.log(student2);
  
  let student3={...student2,pin:"111111"};
  console.log(student.names);
  
  let arr=[student,student2,student3];  
  return (
    <>
   {/* <Home></Home>
  <Doubt></Doubt>
  <Careers></Careers> */}

  {/* <Display></Display> */}
  {/* <Objects></Objects> */}
  <h1>this is app.jsx</h1>
  <Consume {...arr}></Consume>

 {
  /**
   * student={student}={
   * names:,
   * email
   * }
   * 
   * student.student.email
   */
 }
</>
  )
}

export default App
