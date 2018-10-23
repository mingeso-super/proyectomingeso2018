import React from 'react';
import  {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router } from 'react-router-dom';

//Routes
import AppRoutes from './Routes';

render(
	<Router >
		<AppRoutes />
	</Router >,
	document.getElementById('root'));
