// Api
import Api from '../Api';

const getTodos = async () => {

	const response = await fetch(Api.todos, {
		method : 'GET'
	});

	return await response.json();
};

export default getTodos;