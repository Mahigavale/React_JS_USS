
function Contactus(f_prod) {
    console.log("in the contact us..");
    console.log(f_prod.dev3);
    let arr = new Array();

    arr[0] = f_prod.dev3[0];
    arr[1] = f_prod.dev3[1];
    arr[2] = f_prod.dev3[2];
    console.log(arr[0]);

    console.log("logging array:", arr);





    return (<>
        <h4> This is the Contact us page....</h4><ol>
        {
            arr.map((i) => {
            
                    return(<>
                    
                        <li>{i.name}</li>
                        
                    </>)
                
            })
        }
        </ol>
    </>)
}
export default Contactus;