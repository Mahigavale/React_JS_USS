import About from "./About";
function Home(home)
{
    console.log(home);
    
  let dev2=home.dev;
    return(<>
    <h1>This is the Home Component.</h1>
    <About dev2={dev2}></About>
    </>)
}

export default Home;