import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage/index';
import UserInfo from './routes/UserInfo/index';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/echart" component={IndexPage} />
      <Route path="/userinfo" component={UserInfo} />
    </Router>
  );
}

export default RouterConfig;
