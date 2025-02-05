import { useState } from 'react';
import { Layout } from '../common/Layout';

export const InputText = () => {
	const [value, setValue] = useState('');

	const onChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<Layout>
			<input type='text' value={value} onChange={onChange} />
			<br />
			<p>{value}</p>
		</Layout>
	);
};
