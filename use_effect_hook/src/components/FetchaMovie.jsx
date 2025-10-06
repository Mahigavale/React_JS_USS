import UseFetch from "./CustomHook";

function Single()
{

    let str="/get-movie"
    return (
    <>
    <UseFetch props={str}></UseFetch>
    </>)

}

export default Single;