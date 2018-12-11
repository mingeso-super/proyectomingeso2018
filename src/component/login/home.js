import React, { Component } from 'react';
import "./home.css";
import NavBar from './NavBar';
import { ButtonGroup, Button, FormControl,Popover, Panel, ListGroup, ListGroupItem, DropdownButton, ButtonToolbar, MenuItem, Label } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class home extends Component {
  render() {
    return (
     <div className="home" id="ada" >
    
        <h1 id ="letras">PLATAFORMA PARA DESARROLLAR</h1>
        <Link to="/login" className="link">
		<Button id="Iralogin" bsStyle="primary"> Ingresar</Button>

	</Link>

      </div>
    );
  }
}

export default home;