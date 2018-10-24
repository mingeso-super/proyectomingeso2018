import React, { Component } from "react";
import TextTarea from '../textTarea/TextTarea';

import items from '../menu/Menu.js'; 
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, FormControl} from 'react-bootstrap';

import './indexProfesor.css';

class IngresarEnunciadoProfesor extends Component {  


agregar(event){

    const enunciado = {
      productCode: parseInt(this.state.codigo),
      productTitle: TextTarea.state.titulo,   
      productDescription: TextTarea.state.description,   
      expirationDate: this.state.fecha

    }
    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/profesores/agregar`,  enunciado )
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
      });
      window.location.reload();
  }

  /* constructor(props) {
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
    this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:9090/products`)
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
  }*/

	

  render() {    
    return (
    <div className="IngresarEnunciadoProfesor">
    <h3>
          Ingresar un nuevo Enunciado 
     </h3>
     <FormControl
      id="textTitulo"
            type="text"
            
            placeholder="Titulo"
            onChange={this.handleChange}
          />      
    <TextTarea> </TextTarea>  
     <Button id="guardarEnun" bsStyle="primary" onClick={this.agregar} >Guardar Enunciado</Button>
    </div>	    
    );
  }
}

export default IngresarEnunciadoProfesor;