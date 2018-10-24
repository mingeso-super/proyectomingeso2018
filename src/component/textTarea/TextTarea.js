import React,{Component} from "react";
import {FormControl, Button} from 'react-bootstrap';
import "./TextTarea.css";
import axios from 'axios';


class TextTarea extends Component {  
/*
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
    this.borrar = this.borrar.bind(this);
    this.agregar = this.agregar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.modificar = this.modificar.bind(this);
  }*/


    

  render() {
    return ( 
    <div className="TextTarea"  >
      
       <FormControl name="textTareaEnun" placeholder="Descripción" componentClass="textarea" style={{ height: 200 }} />
      
    </div>
    );
  }
}

export default TextTarea;
