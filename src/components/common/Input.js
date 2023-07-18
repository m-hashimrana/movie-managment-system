const Input = ({ formik, label, id, name, type }) => {
	return (
		<div
			style={{
				marginBottom: '1rem',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<label htmlFor={id}>{label}</label>
			<input type={type} id={id} name={name} onChange={formik.handleChange} value={formik?.values?.[name]} />
			{formik?.errors?.[name] && <span className='error'>{formik?.errors?.[name]}</span>}
		</div>
	);
};

export default Input;
