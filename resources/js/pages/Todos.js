import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserTodos } from '../utils/users';

const Todos = () => {

	const { userId } = useParams();

	const [todosList, setTodosList] = useState([]);

	const onInit = async () => {

		setTodosList(await getUserTodos(userId));
	};

	useEffect(() => {

		onInit();
	}, []);

	return (
		<>	
			{ console.log(todosList) }
			Todos { userId }
		</>
	);
};

export default Todos;