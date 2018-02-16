import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Cart.css';

class Cart extends Component {


    render() {
        let cartItems = this.props.cart.map( e => {
            console.log(e)
            return (
            <div>
                <div> {e.productname}  </div>
                <div>PRICE: ${e.saleprice} </div>
                <div> SOLD ON WOOT </div>
            </div>

            )
        })
        return (
            <div className='main-container-cart'>
                <div className='content-left-cart'>
                    <h1 className='shopping-cart-header'> Shopping Cart ({this.props.cart.length == 1 ? this.props.cart.length + ' Item' : this.props.cart.length + ' Items' })</h1>
                    {cartItems}

                    

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