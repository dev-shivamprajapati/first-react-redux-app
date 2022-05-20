import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// REDUX
import { useSelector } from 'react-redux';
// Routes
import Auth from '../routes/auth';
import Home from '../routes/home';
// Components
import Snackbar from './Snackbar';

function App() {
	// STATES
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// REDUCERS DATA
	const userPool = useSelector(({ loginReducer }) => loginReducer.userData);
	const snackbar = useSelector(({ snackbarReducer }) => snackbarReducer.snackbar);

	// STATE HANDLERS
	const updateLoggedInStatus = (newStatus) => {
		setIsLoggedIn(newStatus);
	};

	return (
		<Grid container justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
			<Router>
				<Routes>
					<Route path='*' element={<Auth />} />
					<Route path='/home' element={<Home />} />
				</Routes>
			</Router>
			{/* Snackbar */}
			<Snackbar open={snackbar.open} message={snackbar.message} severity={snackbar.severity} />
		</Grid>
	);
}

export default App;
