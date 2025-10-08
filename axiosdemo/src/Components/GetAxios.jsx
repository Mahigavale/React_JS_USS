import axios from "axios";
import { useEffect, useState } from "react";


function GetData()
{
let [loading , setloading]=useState(true);
let[data,setdata]=useState([]);

useEffect(()=>{

    setTimeout(()=>{
        axios.get("https://dummyjson.com/todos")
    .then((v)=>
    {
        console.log(v.data.todos);
        
        setdata(v.data.todos);
        setloading(false);
    }).catch((e)=>{console.log(e);
    })
    },5000)
    

},[])

if(loading)
    return<h1> fetching the data..</h1>

return(<>
<h1> Data fetched...</h1>
{
    data.map((i)=>
    {
        return(<>
        
        
        <h4>{i.todo}</h4>
        <h4>{i.i}</h4>
        <h4>{i.completed}</h4>
        <h4>{i.userId}</h4>
        </>)
    })
}
</>)

}

export default GetData;


//**
// {id: 1, todo: 'Do something nice for someone you care about', completed: false, userId: 152}
 
