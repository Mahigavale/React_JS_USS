
import { useContext } from "react";
import { State, Student, City } from "../App";
function P2() {
    let statecon = useContext(State);
    let studentcon = useContext(Student);
    let citycon = useContext(City);

    return (<>
        <h1>{statecon}:{studentcon}:{citycon}</h1>
    </>)
}
export { P2 }