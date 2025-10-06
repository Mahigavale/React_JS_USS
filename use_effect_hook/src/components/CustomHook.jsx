import { useEffect, useState } from "react";


function UseFetch({props})
{

    let [data,setdata]=useState(null);


    useEffect(()=>
    {

   
        fetch("http://localhost:8080"+props)
        .then((v)=>
        {
            return v.text();
        })
        .then((v)=>
        {
            console.log(v);
            setdata(v);
            
        }).catch((e)=>
        {
            console.log(e);
            
        })
        
    },[props])
    console.log(props);
    

    
    return (<>
    <h1>{data}</h1>
    </>)
}



export default UseFetch;