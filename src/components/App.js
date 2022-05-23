import { Grid } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// REDUX
import { useSelector } from 'react-redux';
// Routes
import Auth from '../routes/auth';
import Dashboard from '../routes/dashboard';
// Components
import Snackbar from './Snackbar';

function App() {
	const snackbar = useSelector(({ snackbarReducer }) => snackbarReducer.snackbar);

	return (
		<Grid container justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
			<Router>
				<Routes>
					<Route path='*' element={<Auth />} />
					<Route path='dashboard' element={<Dashboard />} />
				</Routes>
			</Router>
			{/* Snackbar */}
			<Snackbar open={snackbar.open} message={snackbar.message} severity={snackbar.severity} />
		</Grid>
	);
}

export default App;
