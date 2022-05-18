import { Button, Grid, Input } from '@mui/material';
import React, { useState } from 'react';
// REDUX
import { useDispatch } from 'react-redux';
// Actions
import { login } from '../store/actions/login';
// CONSTANT USER DATA
const USER_DATA = { email: 'shivam@gmail.com', password: 'shivam@123', userName: 'Shivam Prajapati' };
function Login(props) {
	// .Props
	const { updateLoggedInStatus } = props;
	// SATTES
	const initialCredentials = { email: '', password: '' };
	const [userCredentials, setUserCredentials] = useState(initialCredentials);

	// Dispatch
	const dispatch = useDispatch();

	// HANDLER FUNCTIONS
	const handleLogin = () => {
		if (userCredentials.email === USER_DATA.email && userCredentials.password === USER_DATA.password) {
			updateLoggedInStatus(true);
			dispatch(login(USER_DATA));
		} else {
			alert('Invalid credentials');
		}
	};

	return (
		<Grid container direction='column' justifyContent='center' alignItems='center'>
			<Grid item sx={{ marginBottom: '20px' }}>
				<Input
					placeholder='Enter Email Id'
					value={userCredentials.email}
					onChange={(event) => {
						setUserCredentials((prevState) => ({ ...prevState, email: event.target.value }));
					}}
				/>
			</Grid>
			<Grid item sx={{ marginBottom: '20px' }}>
				<Input
					placeholder='Enter password'
					value={userCredentials.password}
					onChange={(event) => {
						setUserCredentials((prevState) => ({ ...prevState, password: event.target.value }));
					}}
					inputProps={{ type: 'password' }}
				/>
			</Grid>
			<Grid item sx={{ marginBottom: '20px' }}>
				<Button variant='contained' color='primary' onClick={handleLogin}>
					Login
				</Button>
			</Grid>
		</Grid>
	);
}

export default Login;
