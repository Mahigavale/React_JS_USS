
import { Student, City, State } from "../App";
function Printname() {

    // console.log(student);



    return (<>
        <h1> I am in the print name....</h1>
        <Student.Consumer>
            {
                (val) => {

                    return (<>
                        <City.Consumer>
                            {
                                (ct) => {
                                    return (
                                        <>
                                            <State.Consumer>
                                                {
                                                    (st) => {
                                                        return (<>
                                                            <h1>{val}:{ct}:{st}</h1>
                                                        </>)
                                                    }
                                                }
                                            </State.Consumer>
                                        </>
                                    )
                                }
                            }
                        </City.Consumer>

                    </>)
                }
            }
        </Student.Consumer>
    </>)
}

export default Printname;