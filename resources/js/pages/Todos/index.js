import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import { getUserTodos, getUser } from '../../utils/users';

import { Container, Header, UserInfo, TodosContainer, Card } from './styles';

const Todos = () => {

	const { userId } = useParams();

	const [todosList, setTodosList] = useState({
		completed 		: [],
		notCompleted 	: []
	});

	const [userData, setUserData] = useState({});

	const [dragItem, setDragItem] = useState({
		index 			: null,
		to 				: null,
		srcList 		: [],
		distList		: [],
		srcContainer 	: null
	});

	const configTodosList = async () => {

		const [user, todos] = await Promise.all([
			getUser(userId),
			getUserTodos(userId)
		]);

		const completed 	= [];
		const notCompleted 	= [];

		todos.forEach((todo) => {

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

		setUserData(user);
	};

	const onInit = async () => {

		configTodosList();
	};

	console.log(userData);

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

				todosList.completed.unshift(item);
			}

			if (to === 'notCompleted') {

				todosList.notCompleted.unshift(item);
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
		<Container>
			<Header>
				<h2>Job Done</h2>
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>

			{userData && (
				<UserInfo>
					<header>
						<img src={`https://randomuser.me/api/portraits/lego/${userData.id - 1}.jpg`} />
						<div>
							<strong>{userData.name}</strong>
							<p>{userData.email}</p>
						</div>
					</header>
				</UserInfo>
			)}

			<TodosContainer>
				<div 
					className="column-container" 
					onDragOver={onDragOver} 
					onDrop={onDrop} 
					onDragEnter={onDragEnter} 
					onDragLeave={onDragLeave}
				>
					<h2>
						Não completados
					</h2>
					{
						todosList.notCompleted.map((todo, index) => {

							return (
								<Card 
									draggable="true" 
									data-index={index}
									data-completed={false}
									onDragStart={onDragStart}
									completed={false}
									key={index}
								>
									<p>
										{ todo.id } - { todo.title }
									</p>
								</Card>
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
				>
					<h2>
						Completados
					</h2>
					{
						todosList.completed.map((todo, index) => {

							return (
								<Card 
									draggable="true" 
									data-index={index}
									data-completed={true}
									completed={true}
									onDragStart={onDragStart}
									key={index}
								>
									<p>
										{ todo.id } - { todo.title }
									</p>
								</Card>
							);
						})
					}
				</div>
			</TodosContainer>
		</Container>
	);
};

export default Todos;