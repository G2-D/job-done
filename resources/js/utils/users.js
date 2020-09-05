// Api
import Api from '../Api';

const getUsers = async () => {

	const response = await fetch(Api.users, {
		method : 'GET'
	});

	return await response.json();
};

export default getUsers;