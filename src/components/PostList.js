import React, { useEffect } from 'react';
// Axios
import axios from 'axios';
// MUI
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
// REDUX
import { useSelector, useDispatch } from 'react-redux';
// Actions
import { showSnackbar } from '../redux/actions/Snackbar';
import { setPostList } from '../redux/actions/Post';
// Util Functions
import { shortenText } from '../utils/utilFunctions';
// Confif
import { config } from '../utils/config';
function PostList() {
	// REDIX
	const dispatch = useDispatch();
	const postList = useSelector(({ postReducer }) => postReducer.postList);
	const havePosts = postList.length > 0;
	// Making API call to fetch posts
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://jsonplaceholder.typicode.com/posts',
		})
			.then((response) => {
				// Just a toast to notify the user
				dispatch(showSnackbar({ message: 'Post are loaded successfully!', severity: 'success' }));
				// Now let's set the state
				dispatch(setPostList(response.data));
			})
			.catch((error) => {
				dispatch(showSnackbar({ message: 'Something went wrong. Please try again!', severity: 'error' }));
			});
	}, []);

	return (
		<Grid container alignItems='center' sx={{ maxHeight: '83vh', overflowY: 'auto' }}>
			{havePosts &&
				postList.map((post) => (
					<Grid item xs={12} sm={6} md={4} lg={3} xl={3} sx={{ padding: 2 }} key={`${post.id}-${post.title}`}>
						<Card sx={{ height: 250 }}>
							<CardHeader
								sx={{ bgcolor: 'gray', height: 40 }}
								title={shortenText(post.title, config.titleMaxLength)}
								titleTypographyProps={{ fontSize: 20, textAlign: 'justify' }}
							/>
							<CardContent>
								<Typography variant='body2' color='text.secondary' align='justify'>
									{shortenText(post.body, config.bodyMaxLength)}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
		</Grid>
	);
}

export default PostList;
