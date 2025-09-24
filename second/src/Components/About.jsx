import Contactus from "./Contactus";
function About(products)
{

    console.log("IN the about ");
    
    console.log(products.dev2);
    
    return(
    <>
    <h1>
        this is the about page..
    </h1>
    <Contactus dev3={products.dev2}></Contactus></>)
}

export default About;