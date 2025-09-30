
let prom=new Promise((resolve,reject)=>
{

     let num=100;
    const inter= setInterval(()=>
    {
        num+=100;
        if(num==1000)
        {
            clearInterval(inter);
        }
        return resolve("hiii, Bharat");

    },3000)
})


console.log(prom);

setInterval(()=>{
    prom.then((v)=>
{
    console.log(v);
    
})
},4000)
