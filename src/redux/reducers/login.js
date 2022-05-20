// Action Typs
import { SET_LOGIN_DATA } from '../actions/actionTypes';

const initialState = {
	userData: {},
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOGIN_DATA:
			return {
				...state,
				userData: action.user_data,
			};
		default:
			return state;
	}
};
