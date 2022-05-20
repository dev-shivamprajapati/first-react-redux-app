import React from 'react';
// MUI
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// REDUX
import { useDispatch } from 'react-redux';
// Proptypes
import PropTypes from 'prop-types';
// Actions
import { closeSnackbar } from '../redux/actions/snackbar';

function SnackbarComponent({ open, message, severity }) {
	// DISPATH
	const dispatch = useDispatch();
	// Handler Function
	const handleClose = () => {
		dispatch(closeSnackbar());
	};
	return (
		<Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
}
SnackbarComponent.propTypes = {
	open: PropTypes.bool.isRequired,
	message: PropTypes.string.isRequired,
	severity: PropTypes.oneOf(['success', 'warning', 'info', 'error']),
};

export default SnackbarComponent;
