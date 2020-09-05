import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getUsers } from '../utils/users';

const Users = () => {

	const [userList, setUserList] = useState([]);

	const onInit = async () => {

		setUserList(await getUsers());
	};

	useEffect(() => {

		onInit();
	}, []);

	return (
		<>	
			{
				userList.map((user, index) => {

					return (
						<div key={index}>
							<p>
								{ user.name }
								<br/>
								<Link to={`/todos/${user.id}`}>
									Todos
								</Link>
							</p>
						</div>
					);
				})
			}
		</>
	);
};

export default Users;