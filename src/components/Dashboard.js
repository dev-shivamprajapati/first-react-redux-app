import { Grid } from '@mui/material';
import React from 'react';

function Dashboard({ userData }) {
	// Props
	const { userName } = userData;
	return <Grid>{`Hi ${userName}`}</Grid>;
}

export default Dashboard;
