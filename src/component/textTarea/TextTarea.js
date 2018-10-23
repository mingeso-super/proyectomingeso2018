import React,{Component} from "react";
import {FormControl, Button} from 'react-bootstrap';
import "./TextTarea.css";



class TextTarea extends Component {  

  render() {
    return ( 
    <div className="TextTarea"  >
      <h3>
          Ingresar un nuevo Enunciado 
     </h3>
       <FormControl componentClass="textarea" style={{ height: 200 }} />
       <Button bsStyle="primary">Guardar Enunciado</Button>
    </div>
    );
  }
}

export default TextTarea;
