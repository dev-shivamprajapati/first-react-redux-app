import React from 'react';
// Formik and Yup
import { useFormik } from 'formik';
import * as yup from 'yup';
// MUI
import { Button, Grid, TextField } from '@mui/material';
// Ruter DOM
import { useNavigate } from 'react-router-dom';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { showSnackbar } from '../redux/actions/Snackbar';
import { logIn } from '../redux/actions/Auth';
// Formik Validation Schema
const validationSchema = yup.object({
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});
const WithMaterialUI = () => {
	// Redix
	const dispatch = useDispatch();
	const loggedIn = useSelector(({ authReducer }) => authReducer.loggedIn);

	// Valoidation schema
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			proceedLogin({ email: values.email, password: values.password });
		},
	});
	// useNavigate
	const navigate = useNavigate();
	const gotoSignUp = () => {
		navigate('/signup');
	};
	const gotoDashboard = () => {
		navigate('/dashboard');
	};
	// Login
	const proceedLogin = async (credentials) => {
		await dispatch(logIn(credentials));
		if (loggedIn) {
			gotoDashboard();
		} else {
			dispatch(
				showSnackbar({
					message: 'Invalid credentials entered. Please check and try again!',
					severity: 'error',
				}),
			);
		}
	};

	return (
		<Grid container justifyContent='center' alignItems='center'>
			<Grid
				justifyContent='space-evenly'
				flexDirection='column'
				component='form'
				sx={{
					height: 300,
					width: 400,
					display: 'flex',
				}}>
				<TextField
					fullWidth
					name='email'
					label='Enter your email address'
					value={formik.values.email}
					error={formik.touched.email && Boolean(formik.errors.email)}
					onChange={formik.handleChange}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					fullWidth
					name='password'
					label='Enter your password'
					type='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
				/>
				<Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
					<Grid item>
						<Button color='primary' variant='outlined' onClick={gotoSignUp}>
							SingUp
						</Button>
					</Grid>
					<Grid item>
						<Button color='primary' variant='contained' onClick={formik.handleSubmit}>
							Login
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default WithMaterialUI;

// ReactDOM.render(<WithMaterialUI />, document.getElementById('root'));
