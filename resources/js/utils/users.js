// Api
import Api from '../Api';

export const getUsers = async () => {

	const response = await fetch(Api.users, {
		method : 'GET'
	});

	return await response.json();
};

export const getUserTodos = async (id) => {

	const response = await fetch(`${Api.users}/${id}/todos`, {
		method : 'GET'
	});

	return await response.json();
};

export const getUser = async (id) => {

	const response = await fetch(`${Api.users}/${id}`, {
		method : 'GET'
	});

	return await response.json();
};