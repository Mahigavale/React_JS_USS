


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

 

    var data=new Array();
   const res=  await fetch("http://localhost:8080/get-all");
      data=await  res.json();
     console.log(data);
  
     console.log(data.length);
     
  
     
     
     
}

fetchdata();