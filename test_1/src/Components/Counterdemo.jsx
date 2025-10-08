import { useState } from "react";

function Counter()
{

    let [counter,setcounter]=useState(0);

     function alertmessage()
     {
        window.alert("Invalid count")
     }

    function increase()
    {
        if(counter>=0 &&  counter <=30){
        setcounter(++counter);
        }
        else
        {
            alertmessage()
        }
    }

    function decrease()
    {if(counter>=0 && counter<=30){
        setcounter(--counter);
    }
    else
    {
        alertmessage();
    }
    }

    function reset()
    {
        if(counter>=0 && counter <30){
        setcounter(0);
        }
        else
        {
            alertmessage();
        }
    }


    return(<>
    
    <button onClick={increase}>Increase</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrease}>Decrease</button>
    <h3>{counter}</h3>
    </>)
}

export default Counter;