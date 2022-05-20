import { SIGN_UP } from './actionTypes';
// LOGIN
export const signUp = (newUser) => ({
	type: SIGN_UP,
	newUser,
});
