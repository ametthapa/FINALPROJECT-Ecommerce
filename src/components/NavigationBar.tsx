import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Root } from "./interface/ProductInterface";
import axios from "axios";
const NavigationBar = () =>{
    const [categories,setCategories]=useState<Root>();
    const warehouse_id = Number(localStorage.getItem('warehouse_id'));
    const apiKey:any = process.env.REACT_APP_API_KEY;
    // console.log(typeof warehouse_id);

    useEffect(() => {
        const getCategory = async () => {
          try {
            const config = {
              headers: {
                  "Api-Key": apiKey,
                  "Warehouse-Id": warehouse_id
                },
            };
            const response = await axios.get(`https://uat.ordering-dalle.ekbana.net/api/v4/category`, config);
    
            if (response.status === 200) {
              setCategories(response.data);
            }
          } catch (e) {
            console.log("Something went wrong", e);
          }
        };
        getCategory();
      console.log(categories);
      }, []);
    return (
        <div>
            <div className="navigation-agileits">
		        <div className="container">
			        <nav className="navbar navbar-default">
                        {/* Brand and toggle get grouped for better mobile display */}
						<div className="navbar-header nav_2">
							<button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
						</div> 
                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/" className="act">Home</Link></li>	
                                {/* Mega Menu */}
                                
                               {categories && categories.data.map((category:any)=>{
                                   return (
                                    <li className="dropdown" key={category.id}>
                                    <Link to={"/"+ category.title.toLowerCase()} className="dropdown-toggle" data-toggle="dropdown">{category.title.charAt(0).toUpperCase() + category.title.slice(1).toLowerCase()}
                                    <b className="caret"></b>
                                    </Link>
                                    <ul className="dropdown-menu multi-column columns-3">
                                        <div className="row">
                                            <div className="multi-gd-img">
                                                <ul className="multi-column-dropdown">
                                                    <h6>{category.title}</h6>
                                                    {category.subcategories.data.map((subcategory:any)=>{
                                                        <li>{subcategory.title}
                                                            {/* <a href="groceries.html">{subcategory.title}</a> */}
                                                            </li>
                                                    })}
                                                </ul>
                                            </div>	
                                        </div>
                                    </ul>
                                </li>
                                   )
                               })}
                            </ul>
                        </div>
					</nav>
			    </div>
		    </div>
        </div>
    )
}
export default NavigationBar;