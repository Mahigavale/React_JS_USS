

function Display()
{

    let arr=[10,20,30,40,50,60,60,70,70,80,80,90]
   
    
   let arr2=arr.map((i)=>
{
    return (i*2);
})
console.log(arr2);

    return(<>
    <h1>{arr.length}</h1>
    <h2>{typeof(arr)}</h2>
    <h3>The elements of the Given Array are:</h3>
   <ol>
   {
    arr.map((i)=>
    {
        return(
            <li style={{color:"green", fontWeight:"bolder"}}>{i}</li>
        ) 
    })
   }
   </ol>
    </>)
}

export default Display;