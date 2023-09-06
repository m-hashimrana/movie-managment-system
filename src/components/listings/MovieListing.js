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

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const res = await searchMovie({ searchedEntry: e.target.value });
			console.log(
				'first.....',
				res
				// res?.data?.results?.filter((item) => item?.title?.includes('abcdefghi'))
			);
		} catch (error) {
			console.log('error ', error);
		}
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
				<div className='listHeader'>
					<h1>Movies</h1>
					<div className='input'>
						<input placeholder='search here' type='text' onChange={(e) => handleSearch(e)} />
					</div>
				</div>
				<List data={response} category={'movie'} />
				<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
			</div>
		</>
	);
};

export default MovieListing;
