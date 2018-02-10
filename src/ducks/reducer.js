import axios from 'axios'

const LOGIN = 'LOGIN';

let initialState = {
    hourlyProduct: [],
}

export function getHourlyProduct(){
    let test = axios.get('http://localhost:8000/products')
    
    return {
        type: LOGIN,
        payload: test
    }
}
function reducer(state = initialState , action){
    switch(action.type){
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state, {hourlyProduct: action.payload.data});
        default:
            return state;
    }
}

export default reducer



