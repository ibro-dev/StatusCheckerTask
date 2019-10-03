import { combineReducers } from 'redux';
import contents from './contentReducer';

export default combineReducers({
    contents: contents
});