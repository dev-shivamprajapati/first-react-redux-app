import { Grid } from '@mui/material';
import React, { useState } from 'react';
// REDUX
import { useSelector } from 'react-redux';
// Components
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
	const userData = useSelector(({ loginReducer }) => loginReducer.userData);

	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const updateLoggedInStatus = (newStatus) => {
		setIsLoggedIn(newStatus);
	};

	console.log(userData, 'LG STATUS');
	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
			sx={{ height: '700px', width: '400px', bgcolor: 'lightGrey', margin: 'auto' }}>
			{isLoggedIn ? <Dashboard userData={userData} /> : <Login updateLoggedInStatus={updateLoggedInStatus} />}
		</Grid>
	);
}

export default App;
