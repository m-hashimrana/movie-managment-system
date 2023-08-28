import React from 'react';
import Modal from 'react-modal';
import { entryAttributes } from '../../utils/DataHelpers';

const EntryDetails = ({ attribute, data, category }) => {
	console.log('....', [attribute?.releaseDate]);
	return (
		<div className='details'>
			<span className='modalEnrtyName'>{data?.[attribute?.title]}</span>
			<h3>{attribute?.releaseDate}</h3>
			<span>{data?.[attribute?.date]}</span>
			<h3>Popularity</h3>
			<span>{data?.popularity}</span>
			<h3>Overview</h3>
			<span>{data?.overview}</span>
			<h3>Genres</h3>
			{data?.genres?.map((genre) => (
				<span className='genre'>{genre?.name}</span>
			))}
		</div>
	);
};

const DetailsModal = ({ isModalOpen, setIsModalOpen, data, category }) => {
	const attribute = entryAttributes()[category];
	console.log(data);

	return (
		<Modal isOpen={isModalOpen} className='modal' onRequestClose={() => setIsModalOpen(false)}>
			<div className='detailImageWrapper'>
				<img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} />
			</div>
			<div>
				<EntryDetails data={data} category={category} attribute={attribute} />
			</div>
		</Modal>
	);
};

export default DetailsModal;
