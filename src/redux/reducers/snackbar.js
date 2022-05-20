// Action Typs
import { SHOW_SNACKBAR, CLOSE_SNACKBAR } from '../actions/actionTypes';

const initialState = {
	snackbar: { open: false, message: '', severity: 'info' },
};

export const snackbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_SNACKBAR:
			return {
				...state,
				snackbar: {
					...state.snackbar,
					open: true,
					message: action.snackbar.message,
					severity: action.snackbar.severity,
				},
			};
		case CLOSE_SNACKBAR:
			return initialState;
		default:
			return state;
	}
};
