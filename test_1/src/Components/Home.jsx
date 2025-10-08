
function Home({students})
{

    console.log("last page...");
    console.log(students);
    
     
  let arr=[];
  let count =1;
    for(let v of students)
    {
        console.log(v);
        arr[count]=v;
        count++;
        
    }
    console.log("array:::");
    
    console.log(arr);
    
   
    
    
    return(<>
    <h1>Home</h1>

    {
        arr.map((i)=>
        {
            return(<>
            <h1>id:{i.id}</h1>
            <h1>name:{i.name}</h1>
            </>)
        })
    }
    </>)
}

export default Home;