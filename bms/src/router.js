import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import UserMessage from './routes/UserMessage';
import UserShopRecord from './routes/UserShopRecord';
import UserOnline from './routes/UserOnline';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/userMessage" component={UserMessage} />
      <Route path="/userShopRecord" component={UserShopRecord} />
      <Route path="/userOnline" component={UserOnline} />
    </Router>
  );
}

export default RouterConfig;
