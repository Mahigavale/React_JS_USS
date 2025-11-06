import { useFormik, Formik } from "formik";

import Schema from "./Validations";
function Form()
{


    

    const formik=useFormik(
        {

            initialValues:
            {
                name:"",
                email:"",
                mobile:""
            }
            ,
            onSubmit:(v)=>
            {
                console.log(v);
                
            },
            validationSchema:Schema
        }
    )


    return(<>
    <form onSubmit={formik.handleSubmit}>
    <input type="text" value={formik.values.name} onChange={formik.handleChange} name="name"></input>
    {
        formik.touched.name && formik.errors.name &&(<div style={{color:"green"}}>{formik.errors.name}</div>)
    }
    <label>name</label>
    <input type="email" value={formik.values.email} onChange={formik.handleChange} name="email"></input>
    <label>email</label>

    <input type="text" value={formik.values.mobile} onChange={formik.handleChange} name="mobile"></input>
    <label>mobile</label>
    {
        formik.touched.mobile && formik.errors.mobile &&(<div style={{color:"green"}}>{formik.errors.mobile}</div>)
    }
    <button type="submit"> submitform</button>
    </form>
    </>)
}


export default Form;