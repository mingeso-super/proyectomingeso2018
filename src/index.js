import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import Login from './component/login/Login.js';
import Register from './component/register/Register.js';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Table from './component/table/Table.js';

ReactDOM.render(<Table/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
