import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';

import {getTimeRemaining} from '../../Util/Util';

import './Cart.css';

class Cart extends Component {
    // getTimeRemaining(){
    //     console.log('test')
    // }

    render() {
        console.log(this.props)
        let cartItems = this.props.cart.map( e => {
            console.log(e)
            return (
            <div key={e.productid}>
                <div> {e.productname}  </div>
                <div>Price: ${e.saleprice} </div>
                <div> SOLD ON WOOT  </div>
                
            </div>

            )
        });
        return (
            <div className='main-container-cart'>
                <div className='content-left-cart'>
                    <h1 className='shopping-cart-header'> Shopping Cart ({this.props.cart.length == 1 ? this.props.cart.length + ' Item' : this.props.cart.length + ' Items' })</h1>
                    <div className='cart-item'>{cartItems}</div>
                </div>
                <div className='cart-countdown-timer' hidden={!this.props.cart.length}>
                    Time remaining to make purchase
                    <ReactCountdownClock seconds={getTimeRemaining()}
                        color="#000"
                        alpha={0.9}
                        size={100}
                        timeFormat={'hms'}
                    />
                </div>
                <div className='content-right-cart'>

                </div>                
                
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);