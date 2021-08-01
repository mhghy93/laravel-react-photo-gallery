import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './Main';
import authActionTypes from './redux/auth/auth.types';
import store from './redux/store';

const token = localStorage.getItem('userInfo');
if (token) {
    store.dispatch({
        type: authActionTypes.AUTHENTICATE_USER,
        payload: JSON.parse(token),
    });
}

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
