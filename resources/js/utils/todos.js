// Api
import Api from '../Api';

export const getTodos = async () => {

	const response = await fetch(Api.todos, {
		method : 'GET'
	});

	return await response.json();
};