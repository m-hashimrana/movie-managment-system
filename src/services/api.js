import axios from 'axios';

export const fetchMovies = (params) => {
	return axios.get('https://api.themoviedb.org/3/discover/movie', {
		params,
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTU4YjI2NWY2MGYxNWQ5OGEzYTY5M2U0MzBjNzk2MiIsInN1YiI6IjY0YjNjZTA5ZTBjYTdmMDBlNzcyMmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbF6-Ht1NA5XyueTH_MRpoqV8B_ENg1scligJAg5mXk',
		},
	});
};

export const fetchTvShows = (params) => {
	return axios.get(
		'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
		{
			params,
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTU4YjI2NWY2MGYxNWQ5OGEzYTY5M2U0MzBjNzk2MiIsInN1YiI6IjY0YjNjZTA5ZTBjYTdmMDBlNzcyMmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbF6-Ht1NA5XyueTH_MRpoqV8B_ENg1scligJAg5mXk',
			},
		}
	);
};

export const fetchDetails = (id, category) => {
	return axios.get(`https://api.themoviedb.org/3/${category}/${id}?language=en-US`, {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTU4YjI2NWY2MGYxNWQ5OGEzYTY5M2U0MzBjNzk2MiIsInN1YiI6IjY0YjNjZTA5ZTBjYTdmMDBlNzcyMmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbF6-Ht1NA5XyueTH_MRpoqV8B_ENg1scligJAg5mXk',
		},
	});
};

export const searchMovie = (params) => {
	return axios.get(`https://api.themoviedb.org/3/search/movie?query=${params?.searchedEntry}&include_adult=false`, {
		params,
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTU4YjI2NWY2MGYxNWQ5OGEzYTY5M2U0MzBjNzk2MiIsInN1YiI6IjY0YjNjZTA5ZTBjYTdmMDBlNzcyMmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbF6-Ht1NA5XyueTH_MRpoqV8B_ENg1scligJAg5mXk',
		},
	});
};
