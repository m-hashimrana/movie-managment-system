import axios from 'axios';

export const fetchData = (params) => {
	return axios.get('https://api.themoviedb.org/3/discover/movie', {
		params,
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTU4YjI2NWY2MGYxNWQ5OGEzYTY5M2U0MzBjNzk2MiIsInN1YiI6IjY0YjNjZTA5ZTBjYTdmMDBlNzcyMmE0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QbF6-Ht1NA5XyueTH_MRpoqV8B_ENg1scligJAg5mXk',
		},
	});
};
