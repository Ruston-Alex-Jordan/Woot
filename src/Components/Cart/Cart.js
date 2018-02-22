import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';
import StripeCheckout from 'react-stripe-checkout';
import {getTimeRemaining} from '../../Util/Util';
import {bindActionCreators} from 'redux';
import {checkoutCart} from '../.././ducks/reducer'

import './Cart.css';

class Cart extends Component {
    render() {
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

        let totalCart
        if(this.props.cart.length > 1){ 
            totalCart = this.props.cart.map( (e, i, arry) => {
            return e.saleprice + arry[i + 1].saleprice
         }) } else if(this.props.cart.length === 1) {
            totalCart = this.props.cart[0].saleprice
         } else if(!this.props.cart) { console.log('i am empty bitch')} 

        return (
            <div className='main-container-cart'>
                <div className='content-left-cart'>
                    <h1 className='shopping-cart-header'> Shopping Cart ({this.props.cart.length === 1 ? this.props.cart.length + ' Item' : this.props.cart.length + ' Items' })</h1>
                    <div className='cart-item'>{cartItems}</div>
                <div onClick={() => this.props.checkoutCart(this.props.cart)}><StripeCheckout
                    token={token}
                    stripeKey="pk_test_iK0PyzokdY1afxWvhlU5qnOA"
                    amount={totalCart * 100}
                /></div>
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

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ checkoutCart }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);