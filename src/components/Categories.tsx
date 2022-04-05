import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { Root } from "./interface/ProductInterface";
import axios from "axios";

const Categories =()=> {
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
    }, []);
    return (
      <div className="categories">
        <h2>Categories</h2>
        <ul className="cate">
          {categories && categories.data.map((category:any) => {
            return (
              <div key={category.id}>
                <li>
                  <Link to={"/"+category.title.toLowerCase()}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    {category.title.charAt(0).toUpperCase() + category.title.slice(1).toLowerCase()}
                  </Link>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
export default Categories;
