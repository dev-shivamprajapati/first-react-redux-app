// Action Typs
import { SIGN_UP, LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = {
	// User Pool
	userPool: [
		{
			firstName: 'Shivam',
			lastName: 'Prjapati',
			email: 'shivam@gmail.com',
			password: 'shivam@123',
			mobile: '',
			address: {
				line1: '',
				line2: '',
				line3: '',
			},
			image: '',
			designation: '',
		},
	],
	loggedIn: false,
	activeUser: {},
};

export const authReducer = (state = initialState, action) => {
	let tempUserPool = [...state.userPool];
	switch (action.type) {
		case SIGN_UP:
			tempUserPool.push(action.newUser);
			return {
				...state,
				userPool: tempUserPool,
			};
		case LOGIN:
			let { email, password } = action.credentials;
			console.log(email, password);
			let filteredUsers = tempUserPool.filter((user) => user.email === email && user.password === password);
			if (filteredUsers.length > 0) {
				// Credentials matched and user should be made active
				return {
					...state,
					loggedIn: true,
					activeUser: filteredUsers[0],
				};
			} else {
				// Credentials did not match, so let's reset login states
				return {
					...state,
					loggedIn: false,
					activeUser: {},
				};
			}

		case LOGOUT:
			return {
				...state,
				loggedIn: false,
				activeUser: {},
			};

		default:
			return state;
	}
};
