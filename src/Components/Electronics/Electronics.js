import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getHourlyElectronicsProduct, addToCart} from '../.././ducks/reducer';

import { Link } from 'react-router-dom';

import './Electronics.css';

class Electronics extends Component {
    constructor(){
        super();
        this.state = {
            timeUp: false
        }
    }

    componentWillMount(){
        this.props.getHourlyElectronicsProduct()
    }

    render() {
        return (
            <div>
                Electronics component
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