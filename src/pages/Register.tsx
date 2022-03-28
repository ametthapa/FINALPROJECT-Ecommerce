import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC, useState } from "react";

// interface MyFormVales {
//     firstName:string;
//     lastName:string;
//     email:string;
//     password:string;
//     mobile_number:number;
//     confirmPassword:string;
// }

const Register:FC = () =>{
    const [last_name,setLastName] =useState<string>("");
    const [first_name,setFirstName] =useState<string>("");
    const [email,setEmail] =useState<string>("");
    const [password,setPassword]= useState<string>("");
    const [confirmPassword,setConfirmPassword]= useState<string>("");
    const [mobile_number,setMobileNumber]=useState<number>();

    // const initialValues : MyFormVales={
    //     firstName:'',
    //     lastName:'',
    //     email:'',
    //     password:'',
    //     mobile_number:0,
    //     confirmPassword:'',
    // }

    // const validate =Yup.object({
    //     firstName:Yup.string().required("Required"),
    //     lastName:Yup.string().required("Required"),
    //     email:Yup.string().required("Required"),
    //     mobile_number:Yup.string().required("Required")
    //     .matches(
    //         /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //         "Phone number is not valid"
    //       ),
    //     password: Yup.string()
    //         .required("Required")
    //         .min(8, "Passwords must be atleast 8 characters"),
    //     confirmPassword: Yup.string().oneOf(
    //         [Yup.ref("password"), null],
    //         "Password must match"
    // ),

    // });
    const postRequestHandler = async (e:any) =>{
        e.preventDefault();
        // if(password===confirmPassword){
            const data = {
                last_name,email,password,mobile_number,first_name
            }
            console.log(data);
            const response = await axios.post("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/signup",data)
            console.log("yeap responses is ", response.data);
        // }else{
        //     console.log("password and confirm password didn't match");
        // }
    }
    
    return (
        // <Formik initialValues={initialValues}
        // validationSchema={validate}
        // onSubmit={async (values)=>{
        //     const data={
        //         lastName:values.lastName,
        //         email:values.email,
        //         password:values.password,
        //         mobile_number:values.mobile_number,
        //         firstName:values.firstName
        //     }
        // // const response = await axios.post("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/signup",data)

        // console.log(data);

        // }}
        // >
        <div>
            <div className="register">
                <div className="container">
                    <h2>Register Here</h2>
                    <div className="login-form-grids">
                        <h5>profile information</h5>
                        {/* {({errors,touched})=>{ */}
                        <form>
                            <input 
                                type="text" 
                                placeholder="First Name..." 
                                required 
                                name={first_name} 
                                value={first_name} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setFirstName(e.target.value)}
                            />
                            {/* {errors.name && touched.name ?(<div>{errors.name}</div>):null}
                            <ErrorMessage name="name"  /> */}
                            <input 
                                type="text" 
                                placeholder="Last Name..." 
                                required 
                                name={last_name} 
                                value={last_name} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setLastName(e.target.value)} />
                            <h6>Login information</h6>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                required 
                                name={email} 
                                value={email} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value)} 
                            />
                            <input 
                                type="number" 
                                placeholder="Mobile Number" 
                                required 
                                // name={Number(mobileNumber)} 
                                value={mobile_number} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMobileNumber(Number(e.target.value))}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required 
                                name={password} 
                                value={password} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPassword(e.target.value)}
                            />
                            {/* <input 
                                type="password" 
                                placeholder="Password Confirmation" 
                                required 
                                name={confirmPassword} 
                                value={confirmPassword} 
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setConfirmPassword(e.target.value)} 
                            /> */}
                            <input type="submit" value="Register" onClick={(e) => postRequestHandler(e)} />
                        </form>
                        {/* }} */}
                    </div>
                    <div className="register-home">
                        <Link to="index.html">Home</Link>
                    </div>
                </div>
            </div>

        </div>
        // </Formik>
    )
}
export default Register;