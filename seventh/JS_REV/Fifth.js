


 async function fetchdata()
{
    // fetch("https://dummyjson.com/todos")
    // .then((v)=>
    // {
    //     return v.json();
        
    // }).then((v)=>
    // {
    //     console.log(v.todos);
        
    // })
    
    
    // .catch((e)=>
    // {
    //     console.log(e);
        
    // })


   const res=  await fetch("https://dummyjson.com/todos");
     const data=await  res.json();
     console.log(data.todos);
     
}

fetchdata();