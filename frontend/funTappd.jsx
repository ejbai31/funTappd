import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { signup, login, logout } from './actions/session_actions';
import Root from './components/root';
import {
    fetchBeer,
    fetchBeers,
    deleteBeer
} from './actions/beer_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            session: {
                currentUser: window.currentUser
            }
        };
    }
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store={store} />, root);
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    window.fetchBeer = fetchBeer;
    window.fetchBeers = fetchBeers;
    window.deleteBeer = deleteBeer;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
});
