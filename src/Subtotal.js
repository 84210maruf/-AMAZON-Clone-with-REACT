import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) => (
                <>
                    <p>
                        Subtotal (17 items):
                        <strong> $ 10000</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>
                        This Order Contain a Gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'€'}
            
            />
            <button>Prosced to checkout</button>
        </div>
    )
}

export default Subtotal;
