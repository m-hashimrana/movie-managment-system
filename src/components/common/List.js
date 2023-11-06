import React, { useEffect, useState } from 'react';
import { fetchDetails } from '../../services/api';
import DetailsModal from '../modals/DetailsModal';

const List = ({ data, setData, category, handleLikeClick }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalData, setModalData] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const handleCardClick = async (id) => {
		setIsOpen(true);
		setIsLoading(true);
		const res = await fetchDetails(id, category);
		setIsLoading(false);
		setModalData(res?.data);
	};

	// const handleLikeClick = (e, card) => {
	// 	console.log("cafd ", typeof card)
	// 	e.stopPropagation();
	// 	setData(data?.results?.map((item) => {
	// 		if (item?.id === card?.id) {
	// 			console.log('firsttttttttttttttt', card?.id, item?.id);
	// 			return { ...item, isLiked: true };
	// 		}

	// 		else return item
	// 	}));
	// }
	console.log('data from child ', data)


	return (
		<>
			<div className='list'>
				<div className='grid'>
					{data?.results?.map((card, index) => (
						<div className='card' key={card?.id} onClick={() => handleCardClick(card?.id)}>
							<div className='cardImageWrapper'>
								<img src={`https://image.tmdb.org/t/p/original${card?.poster_path}`} />
							</div>
							<p className='title'>{card?.original_name || card?.title}</p>
							<span className='date'>{card?.release_date || card?.first_air_date}</span>
							<button className='likeButton' onClick={(e) => handleLikeClick(e, card)}>{card?.isLiked ? "Liked" : 'Like'}</button>
						</div>
					)
					)}
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
