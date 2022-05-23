import { SIGN_UP, LOGIN, LOGOUT } from './actionTypes';
// SINGUP
export const signUp = (newUser) => ({
	type: SIGN_UP,
	newUser,
});
// LOGIN
export const logIn = (credentials) => ({
	type: LOGIN,
	credentials,
});
// Logout
export const logOut = () => ({
	type: LOGOUT,
});
