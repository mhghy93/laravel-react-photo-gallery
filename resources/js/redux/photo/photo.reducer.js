import photoActionTypes from './photo.types';

const INITIAL_STATE = {
    photos: [],
    photo: {},
    loading: true,
    error: {},
};

const photoReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case photoActionTypes.UPLOAD_PHOTO:
            return {
                ...state,
                photo: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default photoReducer;
