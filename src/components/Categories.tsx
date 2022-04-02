import { Link } from "react-router-dom";

const categories = [
  {
    name: "Fruits And Vegetables",
  },
  {
    name: "Grocery & Staples",
  },
  {
    name: "PersonalCare",
  },
];
const Categories =()=> {
    return (
      <div className="categories">
        <h2>Categories</h2>
        <ul className="cate">
          {categories.map((category, i) => {
            return (
              <div key={i}>
                <li>
                  <Link to={"/products"}>
                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    {category.name}
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
