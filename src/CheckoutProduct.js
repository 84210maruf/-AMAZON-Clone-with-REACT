import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hiddenButton }) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        item:{
          id:id,
        }
      })
    };
    
  return (
    <div className="checkoutProduct">
      
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__title">
          <p>{title}</p>
        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </div>
        {!hiddenButton && (
          <button onClick={removeFromBasket}>remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
