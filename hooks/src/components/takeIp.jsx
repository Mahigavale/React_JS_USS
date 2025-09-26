import { useState } from "react";

function Inputvalues()
{


let str;


// setTimeout(()=>
// {
//     str= window.prompt("enter the value...");
//     change2(str);

// },10000)
 


let  [colors,setcolor]=useState("yellow");


  function change2(str)
  {
    setcolor(str);
  }
  return(<>
  <button onClick={change2}></button>
 <h1 style={{color:colors}}>Experimental text</h1>
  </>)
}

export {Inputvalues};