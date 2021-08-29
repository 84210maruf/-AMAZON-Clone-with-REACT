import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import CurrencyFormat from 'react-currency-format';
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { getBasketTotal } from './reducer';
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = e => {
    //Do all fancy Stripe Stuff...

  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout ( <Link to="/checkout">{basket?.length} items</Link> )
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address </h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Suza, ullapara</p>
            <p>Dhaka, BD</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delevery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
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

        <div className="payment__section">

          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__details">

            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>
                <div className='payment__priceContainer'>
                    <CurrencyFormat
                        renderText={(value) => (
                          <>
                            <p>
                              Order Total : <strong> {value}</strong>
                            </p>
                          </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€ "}
                        suffix={" euro"}
                    />
                </div>
            </form>
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
