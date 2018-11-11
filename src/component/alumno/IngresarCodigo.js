import React, { Component } from "react";
import Header from '../Header.js';
import Content from '../Content.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import AceEditor from 'react-ace';
// Import a Mode (language)
import 'brace/mode/python';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/solarized_dark';

import './Estudiante.css';
import { ButtonGroup, Button, FormControl, Panel, DropdownButton, ButtonToolbar, MenuItem  } from 'react-bootstrap';

var programCode ="";
var responseCode=[];
var responseError=[];
var leng="";






const options = ["PYTHON", "C", "JAVA"];

class IngresarCodigo extends Component { 
   constructor(props) {
        super(props);

       this.state = {           
            entrada: "",
            selectedOption: options[0] // default selected value
          }; 

          this.agregar = this.agregar.bind(this);
          this.prueba = this.prueba.bind(this);
     
    }

 handleClick(e) {
  console.log(e);
  leng=e;
   
  }

agregar(event){    
     //enviar evaluacion
  }

  prueba(event){
    const prueba = {
      stdin: this.state.entrada,
      lang: leng,       
      program: programCode
    }
    
    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/test/program/`,  prueba )
      .then(res => {    
         document.querySelector("label").innerHTML = JSON.stringify(res.data) 
        
      }).catch(error => {     
         document.querySelector("label").innerHTML = JSON.stringify(error.data)
      });

  }



   
 handleChange = event => {
    if (event.target.name === "entrada")
      this.setState({ entrada: event.target.value });
   
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
    <AceEditor
          mode="python"
          theme="solarized_dark"
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