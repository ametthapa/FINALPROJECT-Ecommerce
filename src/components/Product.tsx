import Breadcrumbs from "./Breadcrumbs";
import Categories from "./Categories";
import axios from "axios";
import {Root} from "./interface/ProductInterface";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Product = () =>{
    const [products,setProducts]= useState<Root>();
    const warehouse_id:number = Number(localStorage.getItem('warehouse_id'));
    const apiKey:any = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const config={
                    headers:{
                        "Api-Key": apiKey,
                        "Warehouse-Id": warehouse_id
                    },
                };
                const response = await axios.get("https://uat.ordering-dalle.ekbana.net/api/v4/product",config);
                // console.log(response);

                if(response.status === 200){
                    setProducts(response.data);
                }
            }catch(e){
                console.log(e);
            }
        };
        getProduct();
        console.log(products);
    },[])


    return (
        <>
        <Breadcrumbs name="Groceries" />
        <div className="products">
          <div className="container">
            <div className="col-md-4 products-left">
              <Categories />
            </div>
            
          </div>
        </div>
        </>
    )
}
export default Product;