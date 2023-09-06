import React, { useState } from 'react';
import Header from './header/Header';
import MovieListing from './listings/MovieListing';
import TvShowsListing from './listings/TvShowsListing';
import DetailsModal from './modals/DetailsModal';

const Home = ({ auth }) => {
	return (
		<>
			<Header auth={auth} />
			<MovieListing />
			<TvShowsListing />
		</>
	);
};

export default Home;
