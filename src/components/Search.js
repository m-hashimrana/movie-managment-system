import React, { useState } from 'react';
import { search } from '../services/api';
import { entryAttributes } from '../utils/DataHelpers';

const Search = () => {
	const [searchedEntry, setsearchedEntry] = useState();

	const handleSearch = async (e) => {
		e.preventDefault();
		const searchedResults = await search({ searchEntry: e.target.value });
		setsearchedEntry(searchedResults);
	};
	console.log('searched   ', searchedEntry);
	const getSuggestion = (item) => {
		const key = entryAttributes[item?.media_type].title;
		return item[key];
	};
	return (
		<>
			<div className='searchWrapper'>
				<input placeholder='search for movies or tv shows' type='text' onChange={handleSearch} />
			</div>
			<div className='suggestionWrapper'>
				{searchedEntry?.data?.results &&
					searchedEntry?.data?.results?.map((item) => (
						<div className='suggestions'>
							{item?.media_type !== 'person' && (
								<div className='suggestionCard'>
									<span>{getSuggestion(item)}</span>
									<span>{item?.media_type}</span>
								</div>
							)}
						</div>
					))}
			</div>
		</>
	);
};

export default Search;
