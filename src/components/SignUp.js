import React from 'react';
// FORMIK & YUP
import { useFormik } from 'formik';
import * as yup from 'yup';
// MUI
import { Button, Grid, TextField } from '@mui/material';
// Ruter DOM
import { useNavigate } from 'react-router-dom';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
// Config
import { config } from '../utils/config';
// Actions
import { showSnackbar } from '../redux/actions/Snackbar';
import { signUp } from '../redux/actions/Auth';

// FORMIK VALIDATION SCHEMA
const validationSchema = yup.object({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('Enter a valid email').required('Email is required'),
	password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
	confirmPassword: yup.string().when('password', {
		is: (val) => (val && val.length > 0 ? true : false),
		then: yup.string().oneOf([yup.ref('password')], 'Both password need to be the same'),
	}),
});

const WithMaterialUI = () => {
	// Dispatch
	const dispatch = useDispatch();
	//REDUCERS
	const userPool = useSelector(({ authReducer }) => authReducer.userPool);
	// Formik Initial Values
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: 'foobar@example.com',
			password: 'foobarsdfdsffd',
			confirmPassword: '',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			proceedSignUP(values);
		},
	});
	// useNavigate
	const navigate = useNavigate();
	const goToLogin = () => {
		navigate('/login');
	};
	// Function to check where user already exists
	const doesUserExists = async (email) => {
		return userPool.filter((user) => user.email === email).length > 0;
	};
	// SignUp
	const proceedSignUP = async (values) => {
		let tempValues = { ...values };
		delete tempValues['confirmPassword'];
		let filteredValues = tempValues;
		let newUser = { ...config.defaultUserObject, ...filteredValues };
		// Let's first check whether or not user already is already registered.
		await doesUserExists(newUser.email).then((exists) => {
			if (exists) {
				dispatch(
					showSnackbar({ message: `${newUser.email}  is already registered with us.`, severity: 'error' }),
				);
			} else {
				// False, it is a new user
				// Dispatching the function to register the new user
				dispatch(signUp(newUser));
				// Just showing the toast for user notification
				dispatch(
					showSnackbar({
						message: `${newUser.email}  is now successfully registered with us.`,
						severity: 'info',
					}),
				);
			}
		});
	};

	return (
		<Grid container justifyContent='center' alignItems='center'>
			<Grid
				justifyContent='space-evenly'
				flexDirection='column'
				component='form'
				sx={{
					height: 700,
					width: 400,
					display: 'flex',
				}}>
				<TextField
					fullWidth
					name='firstName'
					label='Enter your first name'
					value={formik.values.firstName}
					error={formik.touched.firstName && Boolean(formik.errors.firstName)}
					onChange={formik.handleChange}
					helperText={formik.touched.firstName && formik.errors.firstName}
				/>
				<TextField
					fullWidth
					name='lastName'
					label='Enter your last name'
					value={formik.values.lastName}
					error={formik.touched.lastName && Boolean(formik.errors.lastName)}
					onChange={formik.handleChange}
					helperText={formik.touched.lastName && formik.errors.lastName}
				/>
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
				<TextField
					fullWidth
					name='confirmPassword'
					label='Confirm your password'
					type='password'
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
					helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
				/>
				<Grid container direction='row' justifyContent='space-evenly' alignItems='center'>
					<Grid item>
						<Button color='primary' variant='outlined' onClick={goToLogin}>
							Login
						</Button>
					</Grid>
					<Grid item>
						<Button color='primary' variant='contained' onClick={formik.handleSubmit}>
							SingUp
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default WithMaterialUI;
