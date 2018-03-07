import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store.js';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Landing from './Components/Landing/Landing';
import Electronics from './Components/Electronics/Electronics';
import Outdoor from './Components/Outdoor/Outdoor';
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
                    <Route path='/electronics' component={Electronics} />
                    <Route path='/outdoor' component={Outdoor} />
                </Switch>
                <Footer />
            </div>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
