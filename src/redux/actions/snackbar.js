import { SHOW_SNACKBAR, CLOSE_SNACKBAR } from './actionTypes';
// SHOW_SNACKBAR
export const showSnackbar = (snackbar) => ({
	type: SHOW_SNACKBAR,
	snackbar,
});
// CLOSESNACKBAR
export const closeSnackbar = () => ({
	type: CLOSE_SNACKBAR,
});
