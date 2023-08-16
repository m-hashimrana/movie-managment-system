import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/api';
import Pagination from '../pagination/Pagination';
import List from './List';

const Listing = () => {
	const [response, setResponse] = useState();
	const [page, setPage] = useState(1);

	const getList = async () => {
		const data = await fetchData({ page });
		setResponse(data?.data);
	};
	console.log('first ', response);
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
			<h1>Listing</h1>
			<List data={response} />
			<Pagination page={page} setPage={setPage} totalPages={response?.total_pages} />
		</div>
	);
};

export default Listing;
