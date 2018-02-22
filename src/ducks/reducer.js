import axios from 'axios';

const LOGIN = 'LOGIN';
const ADD_TO_CART = 'ADD_TO_CART';
const CHECKOUT_CART = 'CHECKOUT_CART';
const COMPLETE_ORDER = 'COMPLETE_ORDER';

let initialState = {
    hourlyProduct: [],
    cart: []

}



export function getHourlyProduct(){
    let getAllProducts = axios.get('http://localhost:8000/products')
    
    return {
        type: LOGIN,
        payload: getAllProducts
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
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state, {hourlyProduct: action.payload.data});
        case ADD_TO_CART: 
            return Object.assign({}, state, {cart: [action.payload, ...state.cart]})
        case CHECKOUT_CART + '_FULFILLED': 
            return Object.assign({}, state, {cart: []})
        default:
            return state;
    }
}

export default reducer



