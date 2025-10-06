import { useEffect, useState } from "react";

function Demo()
{
    let [counter, setcounter]=useState(0);

   let [name,setname]=useState(null);


    function changename()
    {
       setname("xyz");
    }
    function increase()
    {
        setcounter(counter+1);
    }

    useEffect(()=>{

        console.log("Use effect rendered once..");
        
    },[counter,name])
    return(<>
    
    <h1>{counter}</h1>
    
 <button type="button" class="btn btn-outline-dark" onClick={increase}>Dark</button>
    <button type="button" class="btn btn-outline-dark" onClick={changename}>change</button>

    </>)
}

export default Demo;