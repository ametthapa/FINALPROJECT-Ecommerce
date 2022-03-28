import {useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

const Login = () =>{
    const [username,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const admin="admin";

    const postRequestHandler = async (e:any) =>{
        e.preventDefault();
        const data={
            username,
            password,
            grant_type:admin,
        }
        console.log(data)

        const response = await axios.post("https://uat.ordering-boafresh.ekbana.net/api/v4/auth/login",data)

        console.log(response);
    }



    return (
        <div>
            <div className="login">
                <div className="container">
                    <h2>Login Form</h2>
                
                    <div className="login-form-grids animated wow slideInUp" data-wow-delay=".5s">
                        <form>
                            <input type="email" placeholder="Email Address" value={username} name={username} onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="Password" value={password} name={password} onChange={(e) => setPassword(e.target.value)} required />
                            <div className="forgot">
                                <a href="#">Forgot Password?</a>
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