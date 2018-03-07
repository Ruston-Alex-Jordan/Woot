import React, { Component } from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getHourlyOutdoorProduct, addToCart} from '../.././ducks/reducer';

import { Link } from 'react-router-dom';

class Outdoor extends Component {
    constructor(){
        super();
        this.state = {
            timeUp: false
        }
    }

    componentWillMount(){
        this.props.getHourlyOutdoorProduct()
    }

    render() {
        return (
            <div>
                Outdoor component
            </div>
        );
    }
}


function mapStateToProps(state){
    // console.log(state)
    return {
        hourlyOutdoorProduct: state.hourlyOutdoorProduct,
        cart: state.cart
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getHourlyOutdoorProduct, addToCart}, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Outdoor);