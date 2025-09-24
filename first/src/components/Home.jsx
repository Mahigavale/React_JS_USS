import { Fragment } from "react";

function Home()
/**
 * <Fragment></Fragment>
 * <></>
 * group the elements without the wrapper node.
 * easy to use.
 * lighter to render.
 */
{
    return(
       <>
         <h1> This is the Home component...</h1>
       <ul>
        <li>
          <h1>hii</h1>  
        </li>
        <li>
           <h1>bii</h1> 
        </li>
       </ul>
       </>
       
    )
}

export default Home;