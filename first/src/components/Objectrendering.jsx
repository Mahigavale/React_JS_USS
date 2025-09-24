

function Objects()
{
    let person1=
    {
        id:1,
        names:"mag",
        email:"mahesh07@gmail.com",
        city:"Pune"
    }
    let person2=
    {   id:2,
        names:"ABC",
        email:"Abc@gmail.com",
        city:"Latur"
    }

    let arr=[person1,person2];

    return(<>
    
    <h2>Returning the Array Of JSON Objects:</h2>
     <table style={{border:"red solid 2px"}}>
        <th>Names</th>
        <th>city</th>
        <th>email</th>
   {
   
    arr.map((i)=>
    {
         return(<>
          
              <tr>
                <td>{i.names}</td>
                <td>{i.city}</td>
                <td>{i.email}</td>
              </tr>
             
         
         </>)
    })
   }
   </table>
    
    </>)
}

export default Objects;