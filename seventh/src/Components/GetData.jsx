import { useEffect, useState } from "react";

function Getdata()
{


    console.log("Hiii");
    

    let[data, setdata]=useState([]);

   
    async function gettingdata() {
          const data= await fetch("https://dummyjson.com/todos");

          const final_data=await data.json();
         
          console.log(final_data);

          let arr=new Array(final_data.todos);
          setdata(final_data.todos);
          console.log("from async");
          
          console.log(data);
          
          
    }
    
    useEffect(()=>
    {
        
        
        gettingdata();

    },[])
    //[] => only once
    // nothing => infinite.
    // dependacy of the variable

//     useEffect(()=>


//    ,[])

    return(<>
    
    
    {/* <h3> The count is::{count}</h3> */}


<h2> The List is:</h2>
<ol>
{
    
    data.map((i)=>
    {

        return(<>
        <li key={i.id}>
        <h4>{i.id}</h4>
        <h4>{i.todo}</h4>
        </li>
        </>)
    })
}
</ol>
    </>)

}

export default Getdata;