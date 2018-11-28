import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './css/Header.css';
import { Link } from 'react-router-dom';



class Header extends Component {  

	static PropTypes = {
		title: PropTypes.string.isRequired,
		items: PropTypes.array.isRequired
	};

	 render() {   
	 	const {title, items }= this.props;

    return (
      <div className="Header">
	      <div className="Logo">
		      <img src={logo} alt="logo" />
		      <h2>{title}</h2>	 			  	
			  <ul className="Menu">			  		
			  		
			  		<Link bsStyle="info" to="/enunciadoEstudiante">
				     	<button bsStyle="info" >
					         Enunciados
					     </button>
					 </Link>
					 <Link bsStyle="info" to="/ingresarEnunProfesor">
				     	<button bsStyle="info" >
					         Nuevo enunciado
					     </button>
					 </Link>
					 <Link bsStyle="info" to="/login">
				     	<button bsStyle="info" >
					         Salir
					     </button>
					 </Link>
			  				  
			  </ul>

	      </div>    
	   </div>
    );
  }
}

export default Header;
