import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserTodos } from '../utils/users';

const Todos = () => {

	const { userId } = useParams();

	const [todosList, setTodosList] = useState({
		completed 		: [],
		notCompleted 	: []
	});

	const [dragItem, setDragItem] = useState({
		index 			: null,
		to 				: null,
		srcList 		: [],
		distList		: [],
		srcContainer 	: null
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

	const onDragStart = (e) => {

		const { currentTarget } = e;

		const index 		= currentTarget.dataset.index;
		const completed 	= currentTarget.dataset.completed;

		setDragItem({
			index 			: index,
			to 				: completed === 'true' ? 'notCompleted' : 'completed',
			srcList			: completed === 'true' ? todosList.completed : todosList.notCompleted,
			distList		: completed === 'true' ? todosList.notCompleted : todosList.completed,
			srcContainer	: currentTarget.closest('.column-container')
		});
	};

	const onDragOver = (e) => {

		e.preventDefault();
	};

	const onDragEnter = (e) => {
		
		const { currentTarget } = e;

		const { srcContainer } = dragItem;

		if (currentTarget !== srcContainer) {
			
			currentTarget.classList.add('drag-hover');
		}
	};

	const onDragLeave = (e) => {
		
		const { currentTarget } = e;

		currentTarget.classList.remove('drag-hover');
	};

	const onDrop = (e) => {

		const { currentTarget } = e;
		const { srcContainer, srcList, index, to} = dragItem;

		if (currentTarget !== srcContainer) {

			const item = srcList[index];

			srcList.splice(index, 1);

			if (to === 'completed') {

				todosList.completed.push(item);
			}

			if (to === 'notCompleted') {

				todosList.notCompleted.push(item);
			}

			setTodosList({
				...todosList,
				completed		: todosList.completed,
				notCompleted 	: todosList.notCompleted
			});

			currentTarget.classList.remove('drag-hover');

			return false;
		}
	};

	useEffect(() => {

		onInit();
	}, []);

	return (
		<>	
			<div 
				className="column-container" 
				onDragOver={onDragOver} 
				onDrop={onDrop} 
				onDragEnter={onDragEnter} 
				onDragLeave={onDragLeave}
				style={{ width: '300px', float : 'left', background: 'red' }}
			>
				<h2>
					Não completados
				</h2>
				{
					todosList.notCompleted.map((todo, index) => {

						return (
							<div 
								draggable="true" 
								data-index={index}
								data-completed={false}
								onDragStart={onDragStart}
								key={index} style={{ width: '100%', float : 'left', background: 'gray', marginTop : '16px' }}
							>
								<h3>
									{ todo.title } - ID: { todo.id }
								</h3>
							</div>
						);
					})
				}
			</div>
			<div 
				className="column-container" 
				onDragOver={onDragOver} 
				onDrop={onDrop} 
				onDragEnter={onDragEnter} 
				onDragLeave={onDragLeave}
				style={{ width: '300px', float : 'left', background: 'green' }}
			>
				<h2>
					Completados
				</h2>
				{
					todosList.completed.map((todo, index) => {

						return (
							<div 
								draggable="true" 
								data-index={index}
								data-completed={true}
								onDragStart={onDragStart}
								key={index} style={{ width: '100%', float : 'left', background: 'gray', marginTop : '16px' }}
							>
								<h3>
									{ todo.title } - ID: { todo.id }
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