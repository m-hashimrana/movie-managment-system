export const inputFieldsSignUp = [
	{
		label: 'First Name',
		name: 'firstName',
		type: 'text',
	},
	{
		label: 'Last Name',
		name: 'lastName',
		type: 'text',
	},
	{
		label: 'Email',
		name: 'email',
		type: 'email',
	},
	{
		label: 'Password',
		name: 'password',
		type: 'password',
	},
	{
		label: 'Confirm Password',
		name: 'confirmPassword',
		type: 'password',
	},
];

export const inputFieldsLogin = [
	{
		label: 'Email',
		name: 'email',
		type: 'email',
	},
	{
		label: 'Password',
		name: 'password',
		type: 'password',
	},
];

export const entryAttributes = {
	movie: {
		title: 'original_title',
		releaseDate: 'Release Date',
		date: 'release_date',
	},
	tv: {
		title: 'name',
		releaseDate: 'First Air Date',
		date: 'first_air_date',
	},
};
