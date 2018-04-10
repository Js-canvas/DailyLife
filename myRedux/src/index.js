import dva from 'dva';
import './index.css';
import IndexPageModel from './models/indexPage';
import UsersModel from './models/users';
import ModalBoxModel from './models/modalBox';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(IndexPageModel);

app.model(UsersModel);

app.model(ModalBoxModel);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
