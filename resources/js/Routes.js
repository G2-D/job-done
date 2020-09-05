import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Todos from './pages/Todos';
import Users from './pages/Users';

export default  () => {

	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={ Users } exact />
				<Route path="/todos/:userId?" component={ Todos } exact />
			</Switch>
			<GlobalStyle/>
		</BrowserRouter>
	);
};