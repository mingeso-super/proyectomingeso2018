import React, { Component } from "react";
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './css/Header.css';




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
			  	{items && items.map((item,key) => <Button bsStyle="info">{item.title}</Button>)}			  
			  </ul>

	      </div>    
	   </div>
    );
  }
}

export default Header;
