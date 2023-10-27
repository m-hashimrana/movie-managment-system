import React, { useState } from 'react';
import Header from './header/Header';
import MovieListing from './listings/MovieListing';
import TvShowsListing from './listings/TvShowsListing';
import Search from './Search';

const Home = () => {
	return (
		<>
			<Header />
			<Search />
			<MovieListing />
			<TvShowsListing />
		</>
	);
};

export default Home;
