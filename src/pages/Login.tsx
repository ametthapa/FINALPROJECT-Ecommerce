
import {useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "../components/Breadcrumbs";

const Login = () =>{
    const client_id=2;
    const client_secret = "olzBb6we0po4B0PSJyDpNGhhSsnvZmeio8sRoASa";
    const grant_type ="password"
    const [username,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const postRequestHandler = async (e:any) =>{
        e.preventDefault();
        const data={
            client_id,
            client_secret,
            grant_type,
            username,
            password,
            email:username,
        }
        console.log(data)

        // const response = await axios.post("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/login",data)

        // console.log(response);
        fetch("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              if (data.expires_in) {
                alert(
                  "Your are logged in successfully. Your session will expire after " +
                    data.expires_in / (3600 * 24) +
                    " days."
                );
                window.location.href = "/";
              } else {
                alert("Login failed!");
              }
              console.log(data);
            });
      
    }
    return (
        <div>
            <Breadcrumbs name="Login Page" />
            <div className="login">
                <div className="container">
                    <h2>Login Form</h2>
                
                    <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                        <form>
                            <input type="email" placeholder="Email Address" value={username} name={username} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" value={password} name={password} onChange={(e) => setPassword(e.target.value)} required />
                            <div className="forgot">
                                <Link to="/forgotpassword">Forgot Password?</Link>
                            </div>
                            <input type="submit" value="Login" onClick={(e) => postRequestHandler(e)} />
                        </form>
                    </div>
                    <h4>For New People</h4>
                    <p><Link to="/register">Register Here</Link> (Or) go back to <Link to="/">Home<span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></Link></p>
                </div>
            </div>
        </div>
    )
}
export default Login;