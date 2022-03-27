import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FC, useState } from "react";

interface MyFormVales {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    mobile_number:number;
    confirmPassword:string;
}

const Register:FC = () =>{
    // const [lastName,setLastName] =useState<string>("");
    // const [firstName,setFirstName] =useState<string>("");
    // const [email,setEmail] =useState<string>("");
    // const password="123456";
    // const mobile_number=9867214807;

    const initialValues : MyFormVales={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        mobile_number:0,
        confirmPassword:'',
    }

    const validate =Yup.object({
        firstName:Yup.string().required("Required"),
        lastName:Yup.string().required("Required"),
        email:Yup.string().required("Required"),
        mobile_number:Yup.string().required("Required")
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
          ),
        password: Yup.string()
            .required("Required")
            .min(8, "Passwords must be atleast 8 characters"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Password must match"
    ),

    });
    // const requestHalder = async () =>{
    //     // console.log("yes you in");

    //     const data = {
    //         lastName,email,password,mobile_number,firstName
    //     }
    //     const response = await axios.post("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/signup",data)

    //     console.log(response);

    // }
    
    return (
        <Formik initialValues={initialValues}
        validationSchema={validate}
        onSubmit={async (values)=>{
            const data={
                lastName:values.lastName,
                email:values.email,
                password:values.password,
                mobile_number:values.mobile_number,
                firstName:values.firstName
            }
        // const response = await axios.post("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/signup",data)

        console.log(data);

        }}
        >
        <div>
            <div className="register">
                <div className="container">
                    <h2>Register Here</h2>
                    <div className="login-form-grids">
                        <h5>profile information</h5>
                        <form action="#" method="post">
                            <input type="text" placeholder="First Name..." required name="firstName" />
                            <input type="text" placeholder="Last Name..." required name="lastName" />
                            <h6>Login information</h6>
                            <input type="email" placeholder="Email Address" required name="email" />
                            <input type="number" placeholder="Mobile Number" required name="mobile_number" />
                            <input type="password" placeholder="Password" required name="password" />
                            <input type="password" placeholder="Password Confirmation" required name="confirmPassword" />
                            {/* <ErrorMessage name={field.name} component="div" /> */}
                            <input type="submit" value="Register" />
                        </form>
                    </div>
                    <div className="register-home">
                        <Link to="index.html">Home</Link>
                    </div>
                </div>
            </div>

        </div>
        </Formik>
    )
}
export default Register;