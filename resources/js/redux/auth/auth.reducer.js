import authActionTypes from './auth.types';

const INITIAL_STATE = {
    user: {},
    isAuthenticated: false,
    loading: true,
    error: {},
};

const authReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case authActionTypes.USER_SIGN_UP:
        case authActionTypes.USER_LOG_IN:
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false,
            };
        case authActionTypes.USER_LOG_OUT:
            return {
                ...state,
                user: {},
                isAuthenticated: false,
                loading: false,
            };
        case authActionTypes.AUTH_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };

        default:
            return state;
    }
};

export default authReducer;
