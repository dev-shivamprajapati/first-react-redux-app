import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { authReducer } from './auth';
import { snackbarReducer } from './snackbar';

export default combineReducers({
	loginReducer,
	authReducer,
	snackbarReducer,
});
