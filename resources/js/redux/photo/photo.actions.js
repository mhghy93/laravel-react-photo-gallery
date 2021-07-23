import axios from 'axios';
import photoActionTypes from './photo.types';
import { BASE_API_URL } from '../utils/api';

export const getAllPhotos = () => async (dispatch) => {
    await axios
        .get(`${BASE_API_URL}/photos`)
        .then((res) => {
            dispatch({
                type: photoActionTypes.SHOW_PHOTOS,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: photoActionTypes.PHOTO_ERROR,
                payload: err,
            })
        );
};

export const getPhotoDetail = (id) => async (dispatch) => {
    await axios
        .get(`${BASE_API_URL}/photos/${id}`)
        .then((res) => {
            dispatch({
                type: photoActionTypes.SHOW_PHOTO_DETAIL,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: photoActionTypes.PHOTO_ERROR,
                payload: err,
            })
        );
};

export const searchPhoto = (title) => async (dispatch) => {
    await axios
        .get(`${BASE_API_URL}/photos/search/${title}`)
        .then((res) => {
            dispatch({
                type: photoActionTypes.SEARCH_PHOTO,
                payload: res.data,
            });
        })
        .catch((err) =>
            dispatch({
                type: photoActionTypes.PHOTO_ERROR,
                payload: err,
            })
        );
};
