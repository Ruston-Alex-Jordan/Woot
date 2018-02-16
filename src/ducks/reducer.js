import axios from 'axios'

const LOGIN = 'LOGIN';
const ADD_TO_CART = 'ADD_TO_CART';

let initialState = {
    hourlyProduct: [],
    cart: []

}

export function getHourlyProduct(){
    let test = axios.get('http://localhost:8000/products')
    
    return {
        type: LOGIN,
        payload: test
    }
}

export function addToCart(id){
    return {
        type: ADD_TO_CART,
        payload: id
      }
}
function reducer(state = initialState , action){
    switch(action.type){
        case LOGIN + '_FULFILLED':
            console.log(action.payload.data)
            return Object.assign({}, state, {hourlyProduct: action.payload.data});

        case ADD_TO_CART: 
        return Object.assign({}, state, {cart: [action.payload, ...state.cart]})
        default:
            return state;
    }
}

export default reducer



