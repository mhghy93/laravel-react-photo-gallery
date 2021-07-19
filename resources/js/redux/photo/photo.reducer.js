import photoActionTypes from './photo.types';

const INITIAL_STATE = {
    photos: [],
    photoDetail: {},
    loading: true,
    error: {},
};

const photoReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case photoActionTypes.UPLOAD_PHOTO:
            return {
                ...state,
                photoDetail: payload,
                loading: false,
            };
        case photoActionTypes.SHOW_PHOTOS:
            return {
                ...state,
                photos: payload,
                loading: false,
            };
        case photoActionTypes.SHOW_PHOTO_DETAIL:
            return {
                ...state,
                photoDetail: payload,
                loading: false,
            };
        case photoActionTypes.PHOTO_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default photoReducer;
