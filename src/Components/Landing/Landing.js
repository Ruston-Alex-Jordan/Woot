import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getHourlyProduct} from '../.././ducks/reducer';
import ReactCountdownClock from 'react-countdown-clock';


import './Landing.css';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            timeUp: false
        }
        this.addToCart = this.addToCart.bind(this);
    }

    componentWillMount(){
        this.props.getHourlyProduct()
    }

    addToCart(){
        console.log('cat');
        window.location.href="/cart";
    }
    
    render() { 

        let date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        // console.log(minute, second)

        let secondsRemaining = ((60 - minute) * 60) + (60 - second);
        // console.log(secondsRemaining)
        let product = this.props.hourlyProduct[hour];
        if(!product){
            return <img alt='loading' src='http://datainflow.com/wp-content/uploads/2017/09/loader.gif' />
        }
        // console.log(this.state.timeUp)
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
                        <button onClick={this.addToCart} className='add-to-cart-button'>I want it!</button>

                        <p className='product-info'>Remaining: {product.quantity}</p>
                        <div className='product-info'>
                            <p>Time Remaining: </p>
                            <div className='countdown-clock'>
                                <ReactCountdownClock seconds={secondsRemaining}
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

                <div>
                    Test Advertisement
                </div>

            </div>
        );
    }
}

function mapStateToProps(state){
    // console.log(state)
    return {
        hourlyProduct: state.hourlyProduct
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getHourlyProduct }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);