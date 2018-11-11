import React from 'react';
import {Route, Switch} from 'react-router-dom';

 
import App from './component/App';
import Login from  './component/login/Login';
import Register from  './component/register/Register';
import TextTarea from './component/textTarea/TextTarea';
import Table from './component/table/Table.js'; 
import Page404 from './component/page404/Page404';
import EnunAlumno from './component/alumno/EnunciadoEstudiante'; 
import EnunProfesor from './component/profesor/EnunciadoProfesor';
import IngresarEnunProfe from './component/profesor/IngresarEnunciadoProfesor';
import ResolverEnunciadoEstudiante from './component/alumno/EnunciadoEstudiante';
import TablaEditable from './component/profesor/TablaEditable';
import IngresarCodigo from './component/alumno/IngresarCodigo';

const AppRoutes = () =>
<App>
	<Switch> 
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />
		<Route exact path="/table" component={Table} />
		<Route exact path="/ingresarEnunProfesor" component={IngresarEnunProfe} />
		<Route exact path="/enunciadoEstudiante" component={EnunAlumno} />		
		<Route exact path="/enunciadoProfesor" component={EnunProfesor} />	
		<Route exact path="/ResolveEnunEstudiante" component={ResolverEnunciadoEstudiante} />	
		<Route exact path="/TablaEditable" component={TablaEditable} />	
		
		<Route exact path="/IngresarCodigo" component={IngresarCodigo} />
	</Switch>
</App>;

export default AppRoutes;