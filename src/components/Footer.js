import React from 'react';
// MUI
import { Grid, Link, Tooltip } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
	return (
		<Grid container justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
			<Tooltip title='Instagram Profile' sx={{ margin: 2 }} placement='top'>
				<Link href='https://www.instagram.com/me_shivam_prajapati/' underline='none'>
					<InstagramIcon />
				</Link>
			</Tooltip>
			<Tooltip title='LinkedIn Profile' sx={{ margin: 2 }} placement='top'>
				<Link href='https://www.linkedin.com/in/shivam-prajapati-336734184/' underline='none'>
					<LinkedInIcon />
				</Link>
			</Tooltip>
		</Grid>
	);
}

export default Footer;
