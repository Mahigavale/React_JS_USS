
import { useContext } from "react";
import { firstcontext,secondcontext } from "../App";
function Usecontxt()
{
    let firtuse=useContext(firstcontext);
    let seconduse=useContext(secondcontext);

    return (<>
    <h1> with the help of the use conetxt</h1>
    <h3>{firtuse.id}</h3>
    <h3>{firtuse.name}</h3>
    <h3 style={{color:"red"}}>*******************************</h3>
    <h3>{seconduse.id}</h3>
    <h3>{seconduse.name}</h3>
    </>)


}
export default Usecontxt;