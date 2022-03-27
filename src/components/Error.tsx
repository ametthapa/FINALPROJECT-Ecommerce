import { Link } from "react-router-dom";
const Error = () =>{
    return (
        <div>
            <div className="faq-w3agile">
                <div className="container"> 
                    <h2 className="w3_agile_header">404 Error Page Not Found</h2>
                    <div className="clearfix"> </div>
                    <h2 className="w3_agile_header"><Link to="/">GO To Home</Link></h2>
                </div>

            </div>

        </div>
    )
}

export default Error;