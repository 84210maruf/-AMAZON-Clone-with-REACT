import React from 'react';
import './Product.css';


function Product({title, image, price, rating}) {
    return (
        <div className='product'>
            <div className="product_info">

                <p>The Product Title dhfdsjh bduish dusig</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product__rating'>
                    <p>&#x2605;</p>
                    <p>&#x2605;</p>
                    <p>&#x2605;</p>
                </div>

            </div>

            <img className='product__image' src={require('./images/product01.jpg').default} />

            <button>Add to Curt</button>


        </div>
    )
}

export default Product
