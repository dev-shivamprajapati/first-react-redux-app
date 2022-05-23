import React, { useState } from 'react';
// MUI
import { Avatar, Grid, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// R-R-DOM
import { useNavigate } from 'react-router-dom';
// Redix
import { useDispatch } from 'react-redux';
// Actions
import { logOut } from '../redux/actions/Auth';
function Header({ firstName, image }) {
	// Hooks
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// Local States
	const [anchor, setAnchor] = useState(null);
	const openMenu = (event) => {
		setAnchor(event.currentTarget);
	};
	const closeMenu = () => {
		setAnchor(null);
	};

	const proceedLogOut = () => {
		dispatch(logOut());
		navigate('/login', { replace: true });
	};
	return (
		<Grid container alignItems='center' sx={{ height: '100%' }}>
			<Grid item xs={6}>
				<Tooltip title='Menu' sx={{ marginLeft: 2 }} placement='top'>
					<IconButton>
						<MenuIcon />
					</IconButton>
				</Tooltip>
			</Grid>
			<Grid item xs={6} container justifyContent='flex-end' alignItems='center'>
				<Typography variant='h6' sx={{ marginRight: 2 }}>{`Welcome back, ${firstName}!`}</Typography>
				<Avatar alt={firstName} src={image || firstName} sx={{ marginRight: 2 }} onClick={openMenu} />
				<Menu
					sx={{ mt: '45px' }}
					id='menu-appbar'
					anchorEl={anchor}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					open={Boolean(anchor)}
					onClose={closeMenu}>
					<MenuItem onClick={proceedLogOut}>
						<Typography textAlign='center'>Logout</Typography>
					</MenuItem>
				</Menu>
			</Grid>
		</Grid>
	);
}

export default Header;
