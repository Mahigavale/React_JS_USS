import { useEffect, useState } from "react";


function UseFetch()
{

    let url="http://localhost:8080/get-all-books";

    let [book,setbook]=useState([]);
    let [loading,setloading]=useState(false);

    useEffect(()=>{

        setTimeout(()=>{
              fetch(url).then((v)=>{
          return v.json();
        }).
        then((v)=>
        {
            console.log(v);
            
            setbook(v);
            setloading(true)
        }).catch((e)=>
        {
            console.log(e);
            
        })
        },3000)

      


    },[url])


    if(!loading)
    
        return(<>
        <h1>
            Fetching data....
            </h1></>)
    


    return(<>
    
    <h1> The Data </h1>
     {book.map((i)=>
    {
        
        return(<>
        <li>
            <h1>{i.id}</h1>
            <h1>{i.price}</h1>
            <h1>{i.name}</h1>
        </li>
        <li></li>
        </>)
        
    })}
    </>)

    
}

export default UseFetch;