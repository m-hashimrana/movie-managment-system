import React, { useEffect, useState } from 'react';
import { fetchMovies, searchMovie } from '../../services/api';
import Pagination from '../pagination/Pagination';
import List from '../common/List';

const MovieListing = ({ isOpen, setIsOpen }) => {
	const [response, setResponse] = useState();
	const [page, setPage] = useState(1);
	const [searchedEntry, setSearchedEntry] = useState();

	const getList = async () => {
		const data = await fetchMovies({ page });
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
		<>
			<div className='listingWrapper'>
				<List data={response} category={'movie'} />
				<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
			</div>
		</>
	);
};

export default MovieListing;
