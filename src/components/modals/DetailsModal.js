import React, { Suspense } from 'react';
import Modal from 'react-modal';
import { entryAttributes } from '../../utils/DataHelpers';
import moment from 'moment';
import { BounceLoader, CircleLoader, ClipLoader, FadeLoader, HashLoader } from 'react-spinners';

const EntryDetails = ({ attribute, data, category }) => {
	return (
		<div className='details'>
			<span className='modalEnrtyName'>{data?.[attribute?.title]}</span>
			<h3>{attribute?.releaseDate}</h3>
			<span>{moment(data?.[attribute?.date]).format('DD-MM-YYYY')}</span>
			<h3>Popularity</h3>
			<span>{data?.popularity}</span>
			<h3>Overview</h3>
			<span>{data?.overview}</span>
			<h3>Genres</h3>
			{data?.genres?.map((genre) => (
				<span className='genre'>{genre?.name}</span>
			))}
			{category === 'tv' && (
				<>
					<div className='seasonAttributes'>
						<h5>No. of seasons</h5>
						<h6>{data?.number_of_seasons}</h6>
					</div>
					<div className='seasonAttributes'>
						<h5>Total episodes</h5>
						<h6>{data?.number_of_episodes}</h6>
					</div>
				</>
			)}
		</div>
	);
};

const DetailsModal = ({ isModalOpen, setIsModalOpen, data, category, setData, isLoading }) => {
	const attribute = entryAttributes?.category;

	const handleModalClose = () => {
		setIsModalOpen(false);
		setData({});
	};

	return (
		<Modal isOpen={isModalOpen} className='modal' onRequestClose={handleModalClose}>
			{isLoading && (
				<div className='loader'>
					<CircleLoader size={70} aria-label='Loading Spinner' data-testid='loader' />
				</div>
			)}
			<div
				style={{
					position: 'absolute',
					right: '20px',
					padding: '3px',
					borderRadius: '50%',
					background: '#fff',
					cursor: 'pointer',
				}}
				onClick={handleModalClose}
			>
				x
			</div>
			<div className='detailImageWrapper'>
				<img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} />
			</div>
			<EntryDetails data={data} category={category} attribute={attribute} />
		</Modal>
	);
};

export default DetailsModal;
