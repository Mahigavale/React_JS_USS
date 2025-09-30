

const prom=new Promise((resolve,reject)=>
{
    let number=1020051;

    setTimeout(()=>{
        if(number>1000)
    {
         resolve("value accepted...");
    }
    else{
         reject("error");
    }
    },3000)
    
})


console.log(prom);


prom.then((v)=>
{
    return v;
    
}).then((v)=>
{
    console.log("Second . then");
    
    console.log(v);
    
})
.catch((e)=>
{
    console.log(e);
    
})
setTimeout(()=>
{

    console.log(prom);
    
},5000)