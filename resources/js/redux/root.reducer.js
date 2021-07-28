import { combineReducers } from 'redux';
import photoReducer from './photo/photo.reducer';
import authReducer from './auth/auth.reducer';

export default combineReducers({
    photo: photoReducer,
    auth: authReducer,
});
