import { firstcontext,secondcontext } from "../App";
function Call()
{


    return(<>
    <h2> Callback</h2>
    <firstcontext.Consumer>
      
        {
            (s1)=>
            {

                return(<>
               <secondcontext.Consumer>
                {
                    (s2)=>
                    {
                        return(<>
                        <h4>{s1.id}</h4>
                        <h4>{s1.name}</h4>
                        <h5 style={{color:"red"}}>************</h5>
                        <h4>{s2.id}</h4>
                        <h4>{s2.name}</h4>
                        </>)
                    }
                }
               </secondcontext.Consumer>
                </>)
            }
        }
      
    </firstcontext.Consumer>
    </>)
}


export default Call;