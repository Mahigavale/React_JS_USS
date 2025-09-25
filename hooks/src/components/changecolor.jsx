import { useState } from "react";

function ChangeColor()
{
    let[counter,setcounter]=useState(10);

function increase()
        {
             setcounter(++counter);
        }

        function decrease()
        {
            if(counter>0){
            setcounter(--counter);
            }
            else{
                window.alert("Baba re , negative number alayy....")
            }
        }

        function reset()
        {
            setcounter(10);
        }
    return(<>
    
    <h2> Inespect the value of the counter::</h2>
    <h1>{counter}</h1>
    <button onClick={increase}>INcrease_COunter</button>
     <button onClick={decrease}>decrease_COunter</button>
     <button onClick={reset}>Reset_number</button>
    </>)

}
export {ChangeColor};