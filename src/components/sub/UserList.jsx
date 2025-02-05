import { Layout } from '../common/Layout';

export const UserList = () => {
	const users = [
		{
			name: '유비',
			email: 'yb@naver.com',
		},
		{
			name: '관우',
			email: 'kw@naver.com',
		},
		{
			name: '장비',
			email: 'jb@naver.com',
		},
	];

	const User = ({ userData }) => {
		return (
			<>
				<tr>
					<td>{userData.name}</td>
					<td>{userData.email}</td>
				</tr>
			</>
		);
	};

	return (
		<Layout>
			<table>
				<thead>
					<tr>
						<th>이름</th>
						<th>메일주소</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<User userData={user} />
					))}
				</tbody>
			</table>
		</Layout>
	);
};
