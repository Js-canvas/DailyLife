import dva from 'dva';
import './index.css';
import RouterConfig from './router'
import layoutModel from './models/layout';
import userInfoModel from './models/userInfo';
import './utils/cssRem.js'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(layoutModel);

app.model(userInfoModel);

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');
