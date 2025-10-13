import { Formik, useFormik } from "formik";

import axios from "axios";


function CarForm()
{
   let{handleSubmit,values,submitForm, handleChange}=useFormik(
    {
        initialValues:
        {
            id:"",
            carname:"",
            price:""
        },
        onSubmit:(v)=>
        {
            console.log(v.carname);
            console.log(v.id);
            console.log(v.price);
            
            axios.post("http://localhost:8080/author-controller/add-car",v)
            .then((v)=>
            {
              alert(v.data);
            })
            
            
        }
    }
   );

    

    return(<>
    <form onSubmit={handleSubmit}>
   <input type="number" name="id" value={values.id} placeholder="id"  onChange={handleChange}></input>
   <input type="text" name="carname" value={values.carname} placeholder="carname"  onChange={handleChange}></input>
   <input type="number" name="price" value={values.price} placeholder="price" onChange={handleChange} ></input>
   <button type="submit" onClick={submitForm}> submit</button>
    </form>
    </>)
}


export default CarForm;