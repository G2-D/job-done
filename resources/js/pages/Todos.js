import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserTodos } from '../utils/users';

const Todos = () => {

	const { userId } = useParams();

	const [todosList, setTodosList] = useState({
		completed 		: [],
		notCompleted 	: []
	});

	const configTodosList = async () => {

		const response = await getUserTodos(userId);

		const completed 	= [];
		const notCompleted 	= [];

		response.forEach((todo) => {

			if (todo.completed) {

				completed.push(todo);
			} else {

				notCompleted.push(todo);
			}
		});


		setTodosList({
			completed,
			notCompleted
		});
	};

	const onInit = async () => {

		configTodosList();
	};

	useEffect(() => {

		onInit();
	}, []);

	return (
		<>	
			<div>
				<h2>
					Não completados
				</h2>
				{
					todosList.notCompleted.map((todo, index) => {

						return (
							<div key={index}>
								<h3>
									{ todo.title }
								</h3>
							</div>
						);
					})
				}
			</div>
			<div>
				<h2>
					Completados
				</h2>
				{
					todosList.completed.map((todo, index) => {

						return (
							<div key={index}>
								<h3>
									{ todo.title }
								</h3>
							</div>
						);
					})
				}
			</div>
		</>
	);
};

export default Todos;