import { Link } from "react-router-dom";

interface ProductCardProps{
  offer:boolean;
  image:string;
  title:string;
  markedPrice:number;
  sellPrice:number;
}

const Product=  ({offer,image,title,markedPrice,sellPrice}:ProductCardProps)=> {

  const handleAddToCart=(e: any)=> {
    e.preventDefault();
  }
    return (
      <div className="col-md-4 top_brand_left">
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            <div className="agile_top_brand_left_grid_pos">
              {offer && (
                <img
                  src="assets/images/offer.png"
                  alt=" "
                  className="img-responsive"
                />
              )}
            </div>
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    <Link to="#">
                      <img 
                        title=" " 
                        alt={title} 
                        src={image} />
                    </Link>
                    <p>{title}</p>
                    <h4>
                      Rs{sellPrice} <span>${markedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <form onSubmit={handleAddToCart} action="#" method="post">
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="Fortune Sunflower Oil"
                        />
                        <input type="hidden" name="amount" value="35.99" />
                        <input
                          type="hidden"
                          name="discount_amount"
                          value="1.00"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          className="button"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Product;
