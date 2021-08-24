import React from "react";
import './Cehckout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct.js';
import {useStateValue} from './StateProvider';

function Checkout() {
  
  const [{basket}, dispatch] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">

        <img
          className="checkout__ad"
          src={require("./images/amazon_banner.jpg").default}
        />

        <div>
          <h2 className="checkout__title">Your Shopping Busket
          </h2>
        </div>

        <div className='checkout__products'>

           {basket.map( item => (
              <CheckoutProduct 
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
           ))}

        </div>

      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
