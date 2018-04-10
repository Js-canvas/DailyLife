import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users';
import ModalBox from './routes/ModalBox'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/modalBox" component={ModalBox} />
    </Router>
  );
}

export default RouterConfig;
