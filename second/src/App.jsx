
import './App.css'
import Home from './Components/Home'
function App() {
 
  let product1=
  {
    id:1,
    name:"Water Bottle",
    ratings:"4.7",
    price:"234.45"
  }
  let product2={...product1,name:"Iron", price:"3455",id:"2"}
  var product3={};

  Object.assign(product3,product2);
 
  console.log(product3);
  console.log(product2);
  console.log(product1);
  
  let arr=[product1,product2,product3];
  
  
  return(<>
  <h2>This is the app.jsx file the root cause.</h2>
  <Home dev={arr}></Home>
  </>)
}

export default App
