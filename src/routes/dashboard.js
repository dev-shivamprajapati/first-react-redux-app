import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// REDUX
import { useSelector } from 'react-redux';
// MUI
import { Grid } from '@mui/material';
// Components
import Header from '../components/Header';
import Footer from '../components/Footer';
import PostList from '../components/PostList';
import Profile from '../components/Profile';

function Dashboard() {
	// Navigation
	const navigate = useNavigate();
	// Selector
	const activeUser = useSelector(({ authReducer }) => authReducer.activeUser);
	const loggedIn = useSelector(({ authReducer }) => authReducer.loggedIn);
	const { firstName, lastName, email, password, mobile, address, image, designation } = activeUser;
	// useEffect
	useEffect(() => {
		// On mount we'll check if the user is loggedIn or not
		// User is logged in then nothing to worry about
		// But if not then user must be redirected to login page
		if (!loggedIn) {
			navigate('/login', { replace: true });
		}
	}, []);

	return (
		<Grid container direction='column' justifyContent={'flex-start'} alignItems='stretch' sx={{ height: '100vh' }}>
			{/* Header */}
			<Grid item sx={{ height: '10vh', borderBottom: 1, borderColor: 'gray' }}>
				<Header firstName={firstName} image={image} />
			</Grid>

			{/* BODY */}
			<Grid item sx={{ height: '83vh' }}>
				<Routes>
					<Route path='/' element={<PostList />} />
				</Routes>
			</Grid>

			{/* Footer */}
			<Grid item sx={{ height: '7vh', borderTop: 1, borderColor: 'gray' }}>
				<Footer />
			</Grid>
		</Grid>
	);
}

export default Dashboard;
