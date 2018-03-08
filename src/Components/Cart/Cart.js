import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactCountdownClock from 'react-countdown-clock';
import StripeCheckout from 'react-stripe-checkout';
import {getTimeRemaining} from '../../Util/Util';
import {bindActionCreators} from 'redux';
import {checkoutCart} from '../.././ducks/reducer';
import axios from 'axios';  

import _ from 'lodash';

import './Cart.css';

class Cart extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            uniqueItemsInCart: [],
            wholeCart: []
        }

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

    componentDidMount() {
        this.setState({
            uniqueItemsInCart: _.uniqBy(this.props.cart, 'productname'),
            wholeCart: this.props.cart
        })
    }

    render() {
        // let uniqueItemsInCart = _.uniqBy(this.props.cart, 'productname')

        let totalCart = 0;

        if(this.props.cart.length > 1){ 
            // console.log(this.props.cart)
            for(let i = 0; i < this.props.cart.length; i++){
                totalCart += this.props.cart[i].saleprice
            }
        } else if(this.props.cart.length === 1) {
            totalCart = this.props.cart[0].saleprice
        } else if(!this.props.cart) { 
            totalCart = 0
        } 



        let cartItems = this.state.uniqueItemsInCart.map( (e, i) => {
            // console.log(e)
            let percentageOff = (1 - (e.saleprice / e.fullprice)) * 100;
        
            let cartItemQuantity = [];


            for(let index = 0; index <= this.state.wholeCart.length; index++){
                console.log(this.state.wholeCart[index])
                if(this.state.wholeCart[index]) {

                    if(e.productname === this.state.wholeCart[index].productname){
                        cartItemQuantity.push('a')
                        console.log(cartItemQuantity)
                    }
                }
            }
            

            return (
                <div className='cart-item' key={i}>
                    <div>
                        <img alt='product' className='cart-image' src={e.imgurl} />
                    </div>
                    <div>
                        <div className='cart-product-name'> {e.productname}  </div>
                        <div className='cart-price-container'>
                            <div className='cart-product-price'>${e.saleprice}.00</div>
                            <div className='cart-product-fullprice'>${e.fullprice}.00 </div>
                            <div className='cart-product-discount'>{Number(percentageOff).toFixed(2)}% off list price</div>
                        </div>
                        <div>Ships in 3-5 business days.</div>
                        <div>Quantity: {cartItemQuantity.length}</div>
                        <div>Total: ${cartItemQuantity.length * e.saleprice}.00</div>
                    </div> 
                </div>
            )
        });

        // console.log(totalCart)
        return (
            <div>
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
                            <div className='right-content-subtotal'>Subtotal: ${totalCart}.00</div>
                        </div>

                        <div hidden={!this.props.cart.length} className='stripe-checkout'>
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
                <div className='advertisements'>
                    <img src='https://d3gqasl9vmjfd8.cloudfront.net/9431cc33-13b2-4009-a1ef-eeac94dc6d2d.jpg' alt='advertisement' />
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