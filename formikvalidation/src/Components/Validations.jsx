import * as Yup from "yup";



const Schema=Yup.object().shape({
    name:Yup.string().required("Please enter the name"),
    mobile:Yup.string().max(10).min(10).required("Please enter the valid number")
})



export default Schema;