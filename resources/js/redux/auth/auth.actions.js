import axios from 'axios';
import authActionTypes from './auth.types';
import { BASE_API_URL } from '../utils/api';

export const userLogIn = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ email, password });

    await axios
        .get('/sanctum/csrf-cookie')
        .then((res) => {
            axios.post(`${BASE_API_URL}/login`, body, config).then((res) => {
                dispatch({
                    type: authActionTypes.USER_LOG_IN,
                    payload: res.data,
                });
            });
        })
        .catch((err) =>
            dispatch({
                type: authActionTypes.AUTH_ERROR,
                payload: err,
            })
        );
};
