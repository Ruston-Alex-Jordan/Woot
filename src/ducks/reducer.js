import axios from 'axios'

const LOGIN = 'LOGIN';

let initialState = {
    hourlyProduct: [],
}

export function getHourlyProduct(){
    console.log('lololol')

    let test = axios.get('http://localhost:8000/products')
    
    return {
        type: LOGIN,
        payload: test
    }
}
function reducer(state = initialState , action){
    switch(action.type){
        case LOGIN + '_FULFILLED':
        console.log(action)
         return Object.assign({}, state, {hourlyProduct: action.payload.data});

    }
    return state;

}

export default reducer



