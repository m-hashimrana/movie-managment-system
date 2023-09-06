import React, { useEffect, useState } from 'react';
import { fetchTvShows } from '../../services/api';
import List from '../common/List';
import Pagination from '../pagination/Pagination';

const TvShowsListing = () => {
	const [response, setResponse] = useState();
	const [page, setPage] = useState(1);

	const getList = async () => {
		const data = await fetchTvShows({ page });
		setResponse(data?.data);
	};

	useEffect(() => {
		try {
			const data = getList();
			setResponse(data);
		} catch (error) {
			console.log('error', error);
		}
	}, [page]);
	return (
		<div className='listingWrapper'>
			<h1>TV Shows</h1>
			<List data={response} category={'tv'} />
			<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
		</div>
	);
};

export default TvShowsListing;
