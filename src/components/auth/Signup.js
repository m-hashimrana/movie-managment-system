import * as Yup from 'yup';
import React, { useState } from 'react';
import Input from '../common/Input';
import { useFormik } from 'formik';
import { inputFieldsSignUp } from '../../utils/DataHelpers';
import { Link, useNavigate } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().required('Required'),
	lastName: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.min(6, 'Password must be at least 6 characters long')
		.max(12, 'Password must not exceed 12 characters')
		.required('Required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Required'),
});

const Signup = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			localStorage.setItem('user', JSON.stringify(values));
			alert(JSON.stringify(values, null, 2));
			navigate('/login');
		},
	});
	return (
		<>
			<h2>Sign Up Here</h2>
			<form className='form' onSubmit={formik.handleSubmit}>
				{inputFieldsSignUp?.map((input) => (
					<Input key={input?.name} label={input?.label} name={input?.name} type={input?.type} formik={formik} />
				))}
				<button type='submit'>SUBMIT</button>
				<p>
					Already have account!? <Link to={'/'}>Login</Link> Here
				</p>
			</form>
		</>
	);
};

export default Signup;
