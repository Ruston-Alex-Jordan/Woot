import axios from 'axios';

const GET_LANDING_PRODUCTS = 'GET_LANDING_PRODUCTS';
const GET_OUTDOOR_PRODUCTS = 'GET_OUTDOOR_PRODUCTS';
const GET_ELECTRONICS_PRODUCTS = 'GET_ELECTRONICS_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const CHECKOUT_CART = 'CHECKOUT_CART';
const COMPLETE_ORDER = 'COMPLETE_ORDER';

let initialState = {
    hourlyProduct: [],
    hourlyOutdoorProduct: [],
    hourlyElectronicsProduct: [],
    cart: []

}



export function getHourlyProduct(){
    let getAllProducts = axios.get('http://localhost:8000/products');
    
    return {
        type: GET_LANDING_PRODUCTS,
        payload: getAllProducts
    };
}

export function getHourlyOutdoorProduct() {
    let getAllOutdoorProducts = axios.get('http://localhost:8000/outdoor-products');

    return {
        type: GET_OUTDOOR_PRODUCTS,
        payload: getAllOutdoorProducts
    };
}

export function getHourlyElectronicsProduct() {
    let getAllElectronicsProducts = axios.get('http://localhost:8000/electronic-products');

    return {
        type: GET_ELECTRONICS_PRODUCTS,
        payload: getAllElectronicsProducts
    }
}

export function addToCart(id){
    return {
        type: ADD_TO_CART,
        payload: id
    }
}
export function checkoutCart(cart){
    let updated_quantity = axios.put('http://localhost:8000/update-quantity', cart)
    return {
        type: CHECKOUT_CART,
        payload: updated_quantity
    }
}


function reducer(state = initialState , action){
    switch(action.type){
        case GET_LANDING_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, {hourlyProduct: action.payload.data});
        case GET_OUTDOOR_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, {hourlyOutdoorProduct: action.payload.data})
        case GET_ELECTRONICS_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, {hourlyElectronicsProduct: action.payload.data})
        case ADD_TO_CART: 
            return Object.assign({}, state, {cart: [action.payload, ...state.cart]})
        case CHECKOUT_CART + '_FULFILLED': 
            return Object.assign({}, state, {cart: []})
        default:
            return state;
    }
}

export default reducer



