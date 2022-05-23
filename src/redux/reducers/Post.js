// Action Typs
import { SET_POSTLIST } from '../actions/actionTypes';

const initialState = {
	postList: [],
};

export const postReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSTLIST:
			return {
				...state,
				postList: action.postList,
			};
		default:
			return state;
	}
};
