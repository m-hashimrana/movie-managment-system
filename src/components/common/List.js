import React, { useState } from 'react';
import { fetchDetails } from '../../services/api';
import DetailsModal from '../modals/DetailsModal';

const List = ({ data, category }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalData, setModalData] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const imageUrl = `${process.env.REACT_APP_IMAGE_URL}`;
	const handleCardClick = async (id) => {
		setIsOpen(true);
		setIsLoading(true);
		const res = await fetchDetails(id, category);
		setIsLoading(false);
		setModalData(res?.data);
	};

	console.log('first ', category);
	return (
		<>
			<div className='list'>
				<div className='grid'>
					{data?.results?.map((card) => {
						return (
							<div className='card' key={card?.id} onClick={() => handleCardClick(card?.id)}>
								<div className='cardImageWrapper'>
									<img src={`https://image.tmdb.org/t/p/original${card?.poster_path}`} />
								</div>
								<p className='title'>{card?.original_name || card?.title}</p>
								<span className='date'>{card?.release_date || card?.first_air_date}</span>
								<button className='likeButton'>Like</button>
							</div>
						);
					})}
				</div>
			</div>
			<DetailsModal
				isModalOpen={isOpen}
				setIsModalOpen={setIsOpen}
				data={modalData}
				category={category}
				setData={setModalData}
				isLoading={isLoading}
			/>
		</>
	);
};

export default List;
