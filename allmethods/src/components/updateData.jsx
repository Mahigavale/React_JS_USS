import { useEffect, useState } from "react";


function Update()
{


    let [message,setmessage]=useState('');

    useEffect(()=>{

        setTimeout(()=>{
            fetch("http://localhost:8080/update-book",
                {
                    method:'PUT',
                    headers:
                    {
                        'Content-Type':'application/json'
                    },
                    body:
                    JSON.stringify(
                        {
                            id:400,
                           name:"kfndkld",
                           price:355.56,
                           raings: 4.6
                        }
                    )
                }
            )
        .then((v)=>
        {
            return v.text();
        })
        .then((v)=>
        {
            console.log(v);
            setmessage(v);
            
        })
        },5000)
        

    },[])


    return(<>
    <h1>{message}</h1>
    </>)
}


export default Update;