import { useState } from 'react';
import { Layout } from '../common/Layout';

export const MultipleText = () => {
	const [texts, setTexts] = useState({
		name1: '',
		email: '',
		phone: '',
		address: '',
	});

	const { name1, email, phone, address } = texts;

	const onChange = (event) => {
		const { value, name } = event.target;
		// const value = event.target.value
		// const name = event.target.name
		setTexts({
			...texts,
			[name]: value,
		});
	};

	return (
		<Layout>
			<br />
			<br />
			<table>
				<tbody>
					<tr>
						<td>Name</td>
						<td>
							<input type='text' name='name1' value={name1} onChange={onChange}></input>
						</td>
					</tr>
					<tr>
						<td>E-mail</td>
						<td>
							<input type='text' name='email' value={email} onChange={onChange}></input>
						</td>
					</tr>
					<tr>
						<td>Phone Number</td>
						<td>
							<input type='text' name='phone' value={phone} onChange={onChange}></input>
						</td>
					</tr>
					<tr>
						<td>Address</td>
						<td>
							<input type='text' name='address' value={address} onChange={onChange}></input>
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<p>Name : {name1}</p>
			<p>E-mail : {email}</p>
			<p>Phone : {phone}</p>
			<p>Address : {address}</p>
		</Layout>
	);
};
