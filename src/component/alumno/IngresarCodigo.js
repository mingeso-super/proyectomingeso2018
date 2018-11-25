import React, { Component } from "react";
import Header from '../Header.js';
import Content from '../Content.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import AceEditor from 'react-ace';
// Import a Mode (language)
import 'brace/mode/python';
import 'brace/mode/java';
import 'brace/mode/csharp';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/solarized_dark';
import 'brace/theme/monokai';
import 'brace/theme/terminal';

import './Estudiante.css';
import { ButtonGroup, Button, FormControl, Panel, DropdownButton, ButtonToolbar, MenuItem, Label } from 'react-bootstrap';


var lengEditor: "python";
var temsEditor: "solarized_dark";
var programCode ="";
var responseCode=[];
var responseError=[];




const options = ["PYTHON", "C", "JAVA"];

class IngresarCodigo extends Component { 
   constructor(props) {
        super(props);

       this.state = {           
            entrada: "",
            leng : "PYTHON",
            tema: "solarized_dark",
            lenguajeEditor: "python"
           
          }; 

          this.agregar = this.agregar.bind(this);
          this.prueba = this.prueba.bind(this);
     
    }

 handleClick(e) {
  console.log(e);
  if(e === "PYTHON"){
    lengEditor= "python";
    temsEditor = "solarized_dark";
  }
  if(e === "C"){
   lengEditor = "c";
   temsEditor = "monokai";
  }

    if(e === "JAVA"){
   lengEditor = "java";
    temsEditor = "terminal";
  }

  this.state.leng=e;

  this.setState({ leng: e });
  this.setState({ tema: temsEditor });
  this.setState({ lenguajeEditor: lengEditor });
   
  }

agregar(event){    
     //enviar evaluacion 
  }

  prueba(event){
    const prueba = {
      stdin: this.state.entrada,
      lang: this.state.leng,       
      program: programCode 
    }

    console.log(prueba);
    
    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/test/program/`,  prueba )
      .then(res => {    
         document.querySelector("label").innerHTML = JSON.stringify(res.data) 
        
      }).catch(error => {     
         document.querySelector("label").innerHTML = JSON.stringify(error.data)
      });

  }

   
 handleChange = event => {
    if (event.target.name === "entrada"){
      this.setState({ entrada: event.target.value });
    }
    
       
   
   
  };
handleSubmit = event => {
    event.preventDefault();
  };

    onChange(newValue) {   
      programCode  = newValue;
    }

  render() {    

   

    return (

    <div className="IngresarCodigo"  onSubmit={this.handleSubmit} >     

  
     <ButtonGroup>
          <Button   onClick={e => this.handleClick("PYTHON")} bsStyle="primary" >Python</Button>
          <Button  onClick={e => this.handleClick("C")}  bsStyle="success" >C</Button>
          <Button  onClick={e => this.handleClick("JAVA")}  bsStyle="warning" >Java</Button>
      </ButtonGroup>

   <input
   id="formInput"

        type="text"
        name="entrada"
        value={this.state.entrada}       
        onChange={this.handleChange}
         placeholder="Entrada"
      />
    
     <Label name="label" > Lenguaje: { this.state.leng }</Label>

    <AceEditor
          mode={this.state.lenguajeEditor}
          theme={this.state.tema}
          name="blah2"
          onLoad={this.onLoad}
          onChange={this.onChange}
          fontSize={16}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={''}
          setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          }}/>

         <label for="test"></label>            
       
        <Button bsStyle="primary"  onClick={this.agregar} > Agregar</Button>
        <Button bsStyle="primary"  onClick={this.prueba} > Prueba</Button>
             
      </div>      

    );
  }
}


export default IngresarCodigo;