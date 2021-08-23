import React from "react";
import './Cehckout.css';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src={require("./images/amazon_banner.jpg").default}
        />

        <div>
          <h2 className="checkout__title">Your Shopping Busket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
