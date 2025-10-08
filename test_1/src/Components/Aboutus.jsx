import Contact from "./Contactus";
function About({students})
{

    console.log(students);
    
    return(<>
    
    <h1> The about page</h1>
    <Contact students={students}></Contact>
    </>)
}


export default About;