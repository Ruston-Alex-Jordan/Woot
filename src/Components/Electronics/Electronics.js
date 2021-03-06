import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getHourlyElectronicsProduct, addToCart} from '../.././ducks/reducer';
import ReactCountdownClock from 'react-countdown-clock';
import { Link } from 'react-router-dom';
import {getTimeRemaining, timerComplete} from '../../Util/Util';

class Electronics extends Component {
    constructor(){
        super();
        this.state = {
            timeUp: false,

        }
    }

    componentWillMount(){
        this.props.getHourlyElectronicsProduct()
    }

    render() {

    let product = this.props.hourlyElectronicsProduct[new Date().getHours()];
    if(!product){
        return <img className='loading-image' alt='loading' src='http://datainflow.com/wp-content/uploads/2017/09/loader.gif' />
    }
    return (
    // console.log(this.state.timeUp)
        <div>
            <div className='todays-woot'>Todays Woot</div>

            <div hidden={!this.state.timeUp}>You missed it!</div>

            <div style={this.state.timeUp ? {display: 'none'} : {} } className='product-container'>
                <div className='product-info-container'>
                    <h1 className='product-info'>Woot: {product.productname}</h1>
                    <h2 className='product-info'>MSRP: ${product.fullprice}.00</h2>
                    <h2 className='product-info'>Our Price: ${product.saleprice}.00</h2>
                    <p className='product-info'>Description: {product.description}</p>
                    <div>
                        <Link to='/cart'>
                            <button onClick={(id) => this.props.addToCart(product)} className='add-to-cart-button'>
                                I want it!
                            </button>
                        </Link>
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
                                onComplete={timerComplete}
                            />
                        </div>
                    </div>
                </div>
                <div className='product-image-container'>
                    <img alt='product' className='product-image' src={product.imgurl} />
                </div>
            </div>

            <div className='advertisements'>
                <img alt='electronic product' src='https://d3gqasl9vmjfd8.cloudfront.net/9431cc33-13b2-4009-a1ef-eeac94dc6d2d.jpg' />
            </div>

        </div>
        );
    }
}
function mapStateToProps(state){
    // console.log(state)
    return {
        hourlyElectronicsProduct: state.hourlyElectronicsProduct,
        cart: state.cart
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getHourlyElectronicsProduct, addToCart}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Electronics);