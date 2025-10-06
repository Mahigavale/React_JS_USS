import { useEffect, useState } from "react";



function Fe2()
{


    var[count,setcount]=useState(0);
    useEffect(()=>
    {
         fetch('http://localhost:8080/get-all')
         .then((v)=>
        {
            return v.json();
        })
        .then((v)=>
        {
            console.log(v);
            
        }).catch((e)=>
        {
            console.log(e);
            
        })
    },[count])

    


    return(<>
    <button onClick={()=>{setcount(++count)
    console.log(count);
    
    }}>fetch-again</button>
    </>)
}
export default Fe2;