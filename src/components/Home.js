import React, { useState } from 'react';
import Header from './header/Header';
import MovieListing from './listings/MovieListing';
import TvShowsListing from './listings/TvShowsListing';
import DetailsModal from './modals/DetailsModal';

const Home = () => {
	return (
		<>
			<Header />
			<MovieListing />
			<TvShowsListing />
		</>
	);
};

export default Home;
