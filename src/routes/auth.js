import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Components
import SignUp from '../components/SignUp';
import Login from '../components/Login';
// Routes

import Home from '../routes/home';

function auth() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='signup' element={<SignUp />} />
			<Route path='/login' element={<Login />} />
		</Routes>
	);
}

export default auth;
