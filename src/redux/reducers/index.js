import { combineReducers } from 'redux';
// REducers
import { authReducer } from './Auth';
import { snackbarReducer } from './Snackbar';
import { postReducer } from './Post';

export default combineReducers({
	authReducer,
	snackbarReducer,
	postReducer,
});
