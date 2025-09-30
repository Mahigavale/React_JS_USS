

// setTimeout(()=>
//     {
//         console.log("inside settimeout , delay of 4 seconds.");
        
//     },4000)

var counter=1;

  const  setid=setInterval(()=>
{

    console.log("inside interval , hii");
    counter++;

    console.log(counter);
    
    if(counter==10)
    {
        console.log('counter is 10... clearing the interval');
        
    clearInterval(setid);
    }
    
},2000)

console.log("hii");


function demo()
{
    console.log("demo function in the JS.");
    
}



for(let v=0;v<10;v++)
{
    console.log(v);
    
}





demo();