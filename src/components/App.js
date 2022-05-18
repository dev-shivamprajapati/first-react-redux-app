import { Grid } from '@mui/material';
import React, { useState } from 'react';
// REDUX
import { useSelector } from 'react-redux';
// Components
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
	// STATES
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// REDUCERS DATA
	const userData = useSelector(({ loginReducer }) => loginReducer.userData);

	// STATE HANDLERS
	const updateLoggedInStatus = (newStatus) => {
		setIsLoggedIn(newStatus);
	};

	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
			sx={{ height: '700px', width: '400px', bgcolor: 'lightGrey', margin: 'auto' }}>
			{/* Conditional Rendering */}
			{isLoggedIn ? <Dashboard userData={userData} /> : <Login updateLoggedInStatus={updateLoggedInStatus} />}
		</Grid>
	);
}

export default App;
