
import React, { Component } from "react";
import Header from '../Header.js'; 
import Content from '../Content.js';
import Table from '../table/TableEvaluaciones.js';
import items from '../menu/menu.js'; 
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, FormControl} from 'react-bootstrap';

import Routes from '../../Routes.js';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {identificador} from '../login/Login';

var id_user;
var values;


class EvaluacionesEstudiante extends Component {  

   constructor(props) {
    super(props);
    this.state={
      lista: [],
      codigo: '',
      nombre: '',
      fecha: '',
      categoria: '',
      precio: 0
    };

   
    this.cambio = this.cambio.bind(this);
   /* this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
    */
  }


   submitHandler(e) {
    e.preventDefault();
   
   

  }
 
  cambio(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }



  componentDidMount(){

    values = this.props.match.params.id;

    console.log("valor del id enunciado es: ");
    console.log(values);

    console.log("el id del u");
    console.log(localStorage.getItem('id_usuario'));

    axios.get(`http://104.248.188.46:8082/hackusach/api/v1/alumno/`+localStorage.getItem('id_usuario')+`/enunciado/`+values+`/evaluacion/all`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const lista = res.data;
        this.setState({lista});
        
      });
  }

  
  render() {    
    return (
    <div className="EvaluacionesEstudiante"> 
    <Header title="Principal" items={items}/>     
      <Table lista={this.state.lista}/>          
          
      </div>      
    );
  }
}

export default EvaluacionesEstudiante;
/*
<Button type="submit" bsSize="large" bsStyle="success" to="/ingresarEnunProfesor"  block>Login</Button>*/