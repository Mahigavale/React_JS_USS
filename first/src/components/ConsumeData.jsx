
function Consume(data)
{

    console.log("logging the data:");
    
let first=data[0];
let second=data[2];
let third=data[1];
   
   //console.log(a.names);
   
    // {props}={
    //     props:
    //     {
    //         email:
    //         name:
    //         pin:
    //     }
    // }

    // console.log("Consume Page");
    // console.log("Printing the Obj.");
    
    // console.log(props);
    
    /**
     *data= level: {
    names: string;
    email: string;
    pin: string;
}
     */

    return(<>
    <h1> This is the Consume page in React.</h1>
    
    <h1>{first.names}</h1>
    </>)
}

export {Consume};