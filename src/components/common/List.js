import React from 'react';

const List = ({ data }) => {
	const imageUrl = `${process.env.REACT_APP_IMAGE_URL}`;

	return (
		<div className='list'>
			<div className='grid'>
				{data?.results?.map((card) => {
					return (
						<div className='card' key={card?.id}>
							<div className='cardImageWrapper'>
								<img src={`https://image.tmdb.org/t/p/original${card?.poster_path}`} />
							</div>
							<p className='title'>{card?.title}</p>
							<span className='date'>{card?.release_date}</span>
							<button className='likeButton'>Like</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;
