import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Todos from './pages/Todos';
import Users from './pages/Users';

export default  () => {

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/users" component={ Users } exact />
				<Route path="/todos" component={ Todos } exact />
			</Switch>
		</BrowserRouter>
	);
};