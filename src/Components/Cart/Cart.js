import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';
import StripeCheckout from 'react-stripe-checkout';
import {getTimeRemaining} from '../../Util/Util';
import {bindActionCreators} from 'redux';
import {checkoutCart} from '../.././ducks/reducer';
import axios from 'axios';  

import './Cart.css';

class Cart extends Component {
    constructor(props){
        super(props)

    this.onToken = this.onToken.bind(this)
    }

    onToken(token){
        let config ={
            token: token,
            cart: this.props.cart
        }
        this.props.checkoutCart(this.props.cart);
        axios.post('http://localhost:8000/order-complete', config).then( res => {
        })
    }
    render() {
        let cartItems = this.props.cart.map( e => {
            // console.log(e)
            let percentageOff = (1 - (e.saleprice / e.fullprice)) * 100;
            return (
            <div className='cart-item' key={e.productid}>
                <div>
                    <img className='cart-image' src={e.imgurl} />
                </div>
                <div>
                    <div className='cart-product-name'> {e.productname}  </div>
                    <div className='cart-price-container'>
                        <div className='cart-product-price'>${e.saleprice}.00</div>
                        <div className='cart-product-fullprice'>${e.fullprice}.00 </div>
                        <div className='cart-product-discount'>{Number(percentageOff).toFixed(2)}% off list price</div>
                    </div>
                    <div>Ships in 3-5 business days.</div>
                </div> 
            </div>
            )
        });
        let totalCart;
        if(this.props.cart.length > 1){ 
            totalCart = this.props.cart.map( (e, i, arry) => {
            return e.saleprice + arry[i + 1].saleprice
         }) } else if(this.props.cart.length === 1) {
            totalCart = this.props.cart[0].saleprice
         } else if(!this.props.cart) { console.log('i am empty')} 

        return (
            <div className='main-container-cart'>

                <div className='content-left-cart'>
                    <h1 className='shopping-cart-header'> Shopping Cart ({this.props.cart.length === 1 ? this.props.cart.length + ' Item' : this.props.cart.length + ' Items' })</h1>
                    <div>{cartItems}</div>

                </div>



                <div className='content-right-cart'>
                    <div className='cart-countdown-timer-container' hidden={!this.props.cart.length}>
                        <div>Time remaining to make purchase</div>
                        <div className='cart-countdown-timer'>
                            <ReactCountdownClock seconds={getTimeRemaining()}
                                color="#000"
                                alpha={0.9}
                                size={100}
                                timeFormat={'hms'}
                            />
                        </div>
                    </div>

                    <div className='stripe-checkout'>
                        <StripeCheckout
                            token={this.onToken}
                            currency="USD"
                            stripeKey="pk_test_iK0PyzokdY1afxWvhlU5qnOA"
                            amount={totalCart * 100}
                            name="Woot Store"
                            email=''
                            shippingAddress
                            zipCode={true}
                        />
                    </div>

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
    return bindActionCreators({ checkoutCart}, dispatch )
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);