


const prom =new Promise((res,rej)=>
{
    setTimeout(()=>
    {
    return res("no");
    },4000)
})


console.log("kdkedkd");


 async function demo()
{ 
   

    let str=await prom;
    console.log("hiiii");
    console.log("hello");
    console.log(str);
    
    
    
}
demo();