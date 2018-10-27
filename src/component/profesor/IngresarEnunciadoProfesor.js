import React, { Component } from "react";
import TextTarea from '../textTarea/TextTarea';

import items from '../menu/Menu.js'; 
import PropTypes from 'prop-types';
import axios from 'axios';

import { Button, FormControl} from 'react-bootstrap';

import './indexProfesor.css';

class IngresarEnunciadoProfesor extends Component { 

  constructor(props) {
    super(props);
    this.state={
      lista: [],
      codigo: '',
      titulo: '',
      descripcion: '',
      fecha: ''
    };
     this.cambio = this.cambio.bind(this);
    this.agregar = this.agregar.bind(this);
  }



   cambio(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  } 

 
agregar(event){  
console.log("Agregar nuevo elemento");

  const enunciado = {
      titulo: this.state.titulo,
      descripcion: this.state.descripcion,        
      entradas: [],
      salidas: []
    }

    console.log(this.state.descripcion);
    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/enunciados/`,  enunciado )
      .then(res => {        
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
      });
   
  }

borrar(event){
  console.log("Eliminar elemento");
    var link = `http://104.248.188.46:8082/hackusach/api/v1/enunciados/4`;
    console.log(link);
 //withCredentials: true;
 //   event.preventDefault();
    axios.delete(link)
      .then(res => {

        console.log(res);
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
    });
    /*window.location.reload();*/

  }

   modificar(event){
    console.log("modificando");    

    const enunciado = {
      id: "4",
      titulo: "enunciado modificado",//this.state.titulo,
      descripcion: "descripcion enunciado modificado",//this.state.descripcion,
      //fecha: //this.state.fecha     
      entradas: [],
      salidas: []
    }

    var link = `http://104.248.188.46:8082/hackusach/api/v1/enunciados/4` + enunciado;
    console.log(link);
    
    axios.put(link, enunciado)
      .then(res => {
        console.log(res);

      }).catch(error => {
      console.log(error.response)
      });


  }



  render() {    
    return (
    <div className="IngresarEnunciadoProfesor" >
    <h3>
          Ingresar un nuevo Enunciado 
     </h3>
     <FormControl
     name="titulo"
      id="textTitulo"
            type="text"
            
            placeholder="Titulo"
        onChange={this.cambio}
          />      

   <FormControl   id = "inputDes" name="descripcion" componentClass="textarea" placeholder="Descripción" style={{ height: 200 }}  onChange={this.cambio}/>
    <Button id="guardarEnun" bsStyle="primary" onClick={this.agregar} >Guardar Enunciado</Button>   
     
     <button onClick={this.borrar}> Borrar </button>
     <button onClick={this.modificar}> modificar </button>
      
    </div>	    
    );
  }
}

export default IngresarEnunciadoProfesor;