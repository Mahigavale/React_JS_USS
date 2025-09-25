import { useState } from "react"

function Counter()
{

let[colors,setcolor]=useState("red");

function changeto()
{
    setcolor("#664830");
}


    return(<>
    
    <button onClick={changeto}>change_to_blue</button>
    <h1 style={{color:colors}}> This is my text</h1>
    </>)
}
export {Counter};