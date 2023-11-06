import React, { useEffect, useState } from 'react';
import { fetchMovies, searchMovie } from '../../services/api';
import Pagination from '../pagination/Pagination';
import List from '../common/List';

const MovieListing = ({ isOpen, setIsOpen }) => {
	const [response, setResponse] = useState(null);
	const [page, setPage] = useState(1);
	const [searchedEntry, setSearchedEntry] = useState();

	const getList = async () => {
		const data = await fetchMovies({ page });

		const manipulatedData = data?.data?.results?.map((item) => ({ ...item, isLiked: false }));

		return { ...data.data, results: manipulatedData };
	};

	const handleLikeClick = (e, card) => {
		e.stopPropagation();
		// debugger;
		let likedMoview = response?.results?.map((item) => {
			if (item?.id === card?.id) {
				return { ...item, isLiked: true };
			}
			else return item
		})
		setResponse(likedMoview);
	}
	console.log('liked mnovie ', response)
	// console.log('firsttttttttttttttt', card?.id, item?.id, { ...item, isLiked: true });

	useEffect(() => {
		getList()
			.then(data => {
				setResponse(data);
				//	console.log("data in useEffect ", response)
			})
			.catch(error => console.error('Error fetching data:', error));
	}, [page]);
	// useEffect(() => {
	// 	getList()
	// 		.then(data => {
	// 			setResponse(data);
	// 			//	console.log("data in useEffect ", response)
	// 		})
	// 		.catch(error => console.error('Error fetching data:', error));
	// }, []);


	return (
		<>
			<div className='listingWrapper'>
				<List data={response} setData={setResponse} category={'movie'} handleLikeClick={handleLikeClick} />
				<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
			</div>
		</>
	);
};

export default MovieListing;
