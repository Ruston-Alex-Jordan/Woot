import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getHourlyProduct, addToCart} from '../.././ducks/reducer';
import ReactCountdownClock from 'react-countdown-clock';
import { Link } from 'react-router-dom';

import {getTimeRemaining} from '../../Util/Util';
import './Landing.css';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            timeUp: false
        }
    }

    componentWillMount(){
        this.props.getHourlyProduct()
    }

    render() { 
        // console.log(this.props)
        let product = this.props.hourlyProduct[new Date().getHours()];
        if(!product){
            return <img alt='loading' src='http://datainflow.com/wp-content/uploads/2017/09/loader.gif' />
        }
        // console.log(this.state.timeUp)
        
        console.log(this.props.cart)
        return (
            <div>
                <div className='todays-woot'>Todays Woot</div>

                <div hidden={!this.state.timeUp}>You missed it!</div>

                <div style={this.state.timeUp ? {display: 'none'} : {} } className='product-container'>
                    <div className='product-info-container'>
                        <h1 className='product-info'>Woot: {product.productname}</h1>
                        <h2 className='product-info'>MSRP: ${product.fullprice}.00</h2>
                        <h2 className='product-info'>Our Price: ${product.saleprice}.00</h2>
                        <p className='product-info'>Description: {product.description}</p>
                        <div hidden={this.props.cart.length}>
                            <Link to='/cart'>
                                <button onClick={(id) => this.props.addToCart(product)} className='add-to-cart-button'>
                                    I want it!
                                </button>
                            </Link>
                        </div>
                        {/* hidden={!this.props.cart.length} */}
                        <div >
                            <button disabled={false} className='add-to-cart-button-disabled'>
                                Limit 1 Per Customer
                            </button>
                        </div>


                        <p className='product-info'>Remaining: {product.quantity}</p>
                        <div className='product-info'>
                            <p>Time Remaining: </p>
                            <div className='countdown-clock'>
                                <ReactCountdownClock seconds={getTimeRemaining()}
                                    color="#000"
                                    alpha={0.9}
                                    size={100}
                                    timeFormat={'hms'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='product-image-container'>
                        <img alt='product' className='product-image' src={product.imgurl} />
                    </div>
                </div>

                <div className='advertisements'>
                    Advertisement
                </div>

            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(state)
    return {
        hourlyProduct: state.hourlyProduct,
        cart: state.cart
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getHourlyProduct, addToCart}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);