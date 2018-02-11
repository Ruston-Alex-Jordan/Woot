import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Cart.css';

class Cart extends Component {
    render() {
        return (
            <div>
                <Link to='/'><button className='return-to-landing-button'>Back</button></Link>
            </div>
        );
    }
}

export default Cart;