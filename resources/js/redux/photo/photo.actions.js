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
