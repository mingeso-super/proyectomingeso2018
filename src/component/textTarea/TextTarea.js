import React,{Component} from "react";
import {FormControl, Button} from 'react-bootstrap';
import "./TextTarea.css";
import axios from 'axios';


class TextTarea extends Component {  

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
   
  }


    

   cambio(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  } 

  
  render() {
    return ( 
    <div className="TextTarea" name="descripcion" onClick={this.agregar}  >
      
       <FormControl  componentClass="textarea" style={{ height: 200 }} />
      
    </div>
    );
  }
}

export default TextTarea;
