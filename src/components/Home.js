import React, { useState } from 'react';
import Header from './header/Header';
import MovieListing from './listings/MovieListing';
import TvShowsListing from './listings/TvShowsListing';

const Home = (props) => {
	// const { auth } = props;
	const authenticateduser = localStorage.getItem('user');
	console.log(authenticateduser, 'ggggggg');
	// console.log('prop from home ', auth);
	return (
		<>
			<Header />
			<MovieListing />
			<TvShowsListing />
		</>
	);
};

export default Home;
