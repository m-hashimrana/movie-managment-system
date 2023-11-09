import React, { useEffect, useState } from 'react';
import { fetchGenres, fetchMovies, searchMovie } from '../../services/api';
import Pagination from '../pagination/Pagination';
import List from '../common/List';
import Filters from '../common/Filters';

const MovieListing = ({ isOpen, setIsOpen }) => {
	const [response, setResponse] = useState(null);
	const [page, setPage] = useState(1);
	const [genres, setGenres] = useState(null);
	const [activeGenre, setActiveGenre] = useState();

	const getList = async () => {
		const data = await fetchMovies({ page });
		const manipulatedData = data?.data?.results?.map((item) => ({ ...item, isLiked: false }));
		return { ...data.data, results: manipulatedData };
	};

	const getGenres = async () => {
		const data = await fetchGenres();
		return data?.data;
	}

	const handleLikeClick = (e, card) => {
		e.stopPropagation();
		let likedMoview = response?.results?.map((item) => {
			if (item?.id === card?.id) {
				return { ...item, isLiked: true };
			}
			else return item
		})

		setResponse({
			"page": 1,
			"results": likedMoview,
			"total_pages": 40857,
			"total_results": 817137
		});
	}

	useEffect(() => {
		getList()
			.then(data => {
				setResponse(data);
			})
			.catch(error => console.error('Error fetching data:', error));
	}, [page]);


	useEffect(() => {
		getGenres().then(res => {
			setGenres(res?.genres);
		}).catch(error => console.log("error ", error))
	}, [])

	console.log('actie ', activeGenre)

	return (
		<>
			<div className='listingWrapper'>
				<h1>Movies</h1>
				{/* <Filters /> */}
				<div style={{ display: 'flex', overflowX: 'scroll', width: '100%', paddingTop: '30px', paddingBottom: '30px' }}>{genres?.map((item => <p key={item?.id} onClick={() => setActiveGenre(item)} style={{ border: '1px solid #fff', borderRadius: "12px", height: '32px', minWidth: '182px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px", backgroundColor: activeGenre === item ? 'greenyellow' : 'transparent', marginRight: '15px' }}>{item?.name}</p>))}</div>

				<List data={response} setData={setResponse} activeGenre={activeGenre} category={'movie'} handleLikeClick={handleLikeClick} />
				<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
			</div>
		</>
	);
};

export default MovieListing;
