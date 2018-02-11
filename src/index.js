import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store.js';

import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Cart from './Components/Cart/Cart';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <div>
                <Header/>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </div>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
