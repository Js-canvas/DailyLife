import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
	const routes = [
		{
			path:'/',
			name:'IndexPage',
			getComponent(nextState, cb) {
		        require.ensure([], (require) => {
		          cb(null, require('./routes/IndexPage'));
		        });
		    }
		}
	]

  return (
    <Router history={history} routes = {routes} />
  );
}

export default RouterConfig;
