import React, { Component } from "react";
import Header from '../Header.js';
import Content from '../Content.js';
import Table from '../table/Table.js';
import items from '../menu/Menu.js'; 
import PropTypes from 'prop-types';
import axios from 'axios';


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
   /* this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
    */
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
    axios.get(`http://104.248.188.46:8082/hackusach/api/v1/enunciados/all`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const lista = res.data;
        this.setState({lista});
        console.log("olii");
        console.log(this.state.lista);
        console.log(this.state.lista[0]);
        console.log(this.state.lista[0].productCode);
      });
  }

	
  render() {    
    return (
    <div className="EnunciadoEstudiante">      
      <Table lista={this.state.lista}/>
  
      </div>	    
    );
  }
}

export default EnunciadoEstudiante;