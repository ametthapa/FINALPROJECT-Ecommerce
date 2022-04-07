import { Component } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../components/Categories";
import PageSort from "../components/PageSort";
import Product from "../components/ProductCard";


const groceriesProducts = [
  {
    title: "Toor Dal",
    sellPrice: 35.99,
    markedPrice: 55.0,
    image: "14.png",
    offer:false,
  },
  {
    title: "Moong Dal",
    sellPrice: 30.99,
    markedPrice: 45.0,
    image: "15.png",
    offer:true,
  },
  {
    title: "Channa",
    sellPrice: 80.99,
    markedPrice: 105.0,
    image: "16.png",
    offer:true,
  },
  {
    title: "Arhar Dal",
    sellPrice: 35.99,
    markedPrice: 55.0,
    image: "17.png",
    offer:true,
  },
  {
    title: "Toor Dal",
    sellPrice: 30.99,
    markedPrice: 45.0,
    image: "14.png",
    offer:true,
  },
  {
    title: "Moong Dal",
    sellPrice: 80.99,
    markedPrice: 105.0,
    image: "15.png",
    offer:true,
  },
  {
    title: "Channa",
    sellPrice: 35.99,
    markedPrice: 55.0,
    image: "16.png",
    offer:true,
  },
  {
    title: "Arhar Dal",
    sellPrice: 30.99,
    markedPrice: 45.0,
    image: "17.png",
    offer:true,
  },
  {
    title: "Toor Dal",
    sellPrice: 80.99,
    markedPrice: 105.0,
    image: "14.png",
    offer:true,
  },
];

class Groceries extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Breadcrumbs name="Groceries" />
        <div className="products">
          <div className="container">
            <div className="col-md-4 products-left">
              <Categories />
            </div>
            <div className="col-md-8 products-right">
              <PageSort />
              <div className="agile_top_brands_grids">
                {groceriesProducts.map((prod, index) => {
                  return <Product {...prod} key={index} />;
                })}
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </>
    );
  }
}
export default Groceries;
