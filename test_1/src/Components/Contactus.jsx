
import Home from "./Home";
function Contact({students})
{


   
    
    console.log(students);
    

    return(<>
    <h1> The contact page.</h1>
    <Home students={students}></Home>
    </>)


   
}

export default Contact;