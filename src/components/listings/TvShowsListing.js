import React, { useEffect, useState } from 'react';
import { fetchTvShows } from '../../services/api';
import List from '../common/List';
import Pagination from '../pagination/Pagination';

const TvShowsListing = () => {
	const [response, setResponse] = useState();
	const [page, setPage] = useState(1);

	const getList = async () => {
		const data = await fetchTvShows({ page });
		const manipulatedData = data?.data?.results?.map((item) => ({ ...item, isLiked: false }))
		setResponse({ ...data?.data, results: manipulatedData });
	};

	const handleLikeClick = (e, card) => {
		e.stopPropagation();
		let likedMovie = response?.results?.map((item) => (
			item?.id === card?.id ? ({ ...item, isLiked: true }) : (item)
		))
		setResponse({
			"page": 1,
			"results": likedMovie,
			"total_pages": 40857,
			"total_results": 817137
		})
	}


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
			<List data={response} category={'tv'} handleLikeClick={handleLikeClick} />
			<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
		</div>
	);
};

export default TvShowsListing;
