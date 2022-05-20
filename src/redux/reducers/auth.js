// Action Typs
import { SIGN_UP } from '../actions/actionTypes';

const initialState = {
	userPool: [],
	// Trash
	userData: {},
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_UP:
			let tempUserPool = [...state.userPool];
			tempUserPool.push(action.newUser);
			return {
				...state,
				userPool: tempUserPool,
			};
		default:
			return state;
	}
};
