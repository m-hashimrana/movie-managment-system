import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import Input from '../common/Input';
import { useFormik } from 'formik';
import { inputFieldsLogin } from '../../utils/DataHelpers';

const loginSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string().required('required'),
});

const Login = () => {
	const [auth, setAuth] = useState();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginSchema,
		onSubmit: (values) => {},
	});
	useEffect(() => {
		setAuth(JSON.parse(localStorage.getItem('user')));
	}, []);
	console.log(auth);
	return (
		<>
			<h2>Login to your account</h2>
			<form className='form' onSubmit={formik.handleSubmit}>
				{inputFieldsLogin?.map((input) => (
					<Input key={input?.name} label={input?.label} name={input?.name} type={input?.type} formik={formik} />
				))}
				<button type='submit'>SUBMIT</button>
				<p>New user? SignUp </p>
			</form>
		</>
	);
};

export default Login;
