import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {

    const history = useHistory();
    console.log('History/prasent Puth : ',history.location.pathname);

    const [{ basket }, dispatch] = useStateValue();
    

    return (
        <div className='subtotal'>
            <CurrencyFormat renderText={(value) => 
            (
                <>
                    <p>
                        Subtotal ({basket.length} items) :
                        <strong> {value}</strong>
                    </p>
                    <small className='subtotal__gift'>
                        <input type='checkbox'/>
                        This Order Contain a Gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$ '}
            suffix={' USD'}
            />

            
            <button onClick={e => history.push('/payment')}>Prosced to checkout</button>

        </div>
    )
}

export default Subtotal;
