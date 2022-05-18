import { SET_LOGIN_DATA } from './actionTypes';
// LOGIN
export const login = (user_data) => ({
	type: SET_LOGIN_DATA,
	user_data,
});
