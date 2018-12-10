
import React, { Component } from "react";
import Header from '../Header.js'; 
import Content from '../Content.js';
import Table from '../table/Table.js';
import TableProfe from '../table/TableProfe.js'
import items from '../menu/menu.js'; 
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, FormControl} from 'react-bootstrap'; 

import Routes from '../../Routes.js';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import {identificador} from '../login/Login';

import logo from '.././logo.svg';

 var thisIsMyCopy = "";
  
  var  lista_aux = [];

 function barra(){



   //alert("rol es: " + localStorage.getItem('Rol'));

      if( localStorage.getItem('Rol') ===  "alumno"){
        //alumno
      //  alert("soy alumno ");
      return (<div className="Logo"><img src={logo} alt="logo" /> <h2>Principal Alumno</h2> <ul className="Menu">  <Link bsStyle="info" to="/enunciadoEstudiante"><button bsStyle="info" >Enunciados</button></Link><Link bsStyle="info" to="/login"><button bsStyle="info" >Salir</button></Link></ul> </div> ) ;

      }
    

      if(localStorage.getItem('Rol') ===  "profesor"){
        //profe
       //  alert("soy profe ");
      return (<div className="Logo"><img src={logo} alt="logo" /><h2>Principal Profesor</h2><ul className="Menu"><Link bsStyle="info" to="/enunciadoEstudiante"><button bsStyle="info" >  Enunciados  </button> </Link>     <Link bsStyle="info" to="/ingresarEnunProfesor">  <button bsStyle="info" >    Nuevo enunciado     </button>   </Link>     <Link bsStyle="info" to="/login">   <button bsStyle="info" >Salir</button> </Link>  </ul>  </div> );

      }




}





class EnunciadoEstudiante extends Component {  

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
    this.tablas = this.tablas.bind(this);
   /* this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
    */
  }


 tablas(){

  if( localStorage.getItem('Rol') ===  "alumno"){
        //alumno
      //  alert("soy alumno ");
      return (<Table lista={this.state.lista} /> ) ;

      }
    

      if(localStorage.getItem('Rol') ===  "profesor"){
        //profe
       //  alert("soy profe ");
      return (<TableProfe lista={this.state.lista} /> ) ;

      }

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
    console.log("el id del u");

    console.log(localStorage.getItem('id_usuario'));
    console.log("rol es:!!!! : ",localStorage.getItem('Rol'));

    axios.get(`http://104.248.188.46:8082/hackusach/api/v1/enunciados/all`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const lista = res.data;
        this.setState({lista});
        lista_aux.push(lista);
        
      });

     
      
  }

  
  render() {    
    return (
    <div className="EnunciadoEstudiante"> 
    <div className="Header" >{barra()}</div>   
      
     <div className="Content">{this.tablas()} </div>
          
          
      </div>      
    );
  }
}

export default EnunciadoEstudiante;
/*
<Button type="submit" bsSize="large" bsStyle="success" to="/ingresarEnunProfesor"  block>Login</Button>
/>*/