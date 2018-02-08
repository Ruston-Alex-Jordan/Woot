import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { getHourlyProduct} from '../.././ducks/reducer'

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }

    componentWillMount(){
        this.props.getHourlyProduct()
    }
    render() {
        if(!this.props.hourlyProduct){
            return <div>fuck</div>
        }
        console.log(this.props.hourlyProduct)

        return (
            
            <div>
                {this.props.hourlyProduct.map(e => {
                    let date = new Date;
                    let hour = date.getHours();
                    console.log(hour)
                    //the number 2 below will be changed to variable hour when database is filled
                    if(e.productid == 2){
                        return e.productname
                    }
                })}
            </div>
        );
    }
}
function mapStateToProps(state){
    console.log(state)
    return {
        hourlyProduct: state.hourlyProduct
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ getHourlyProduct }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);