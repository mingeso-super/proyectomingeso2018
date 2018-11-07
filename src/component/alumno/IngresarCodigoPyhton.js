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
import { ButtonGroup, Button, FormControl, Panel  } from 'react-bootstrap';


var programCode ="";
var responseCode=[];
var responseError=[];
class IngresarCodigoPyhton extends Component { 
   constructor(props) {
        super(props);

       this.state = {           
            entrada: ""
          }; 

          this.agregar = this.agregar.bind(this);
    }



  cambio(event){
  
  }

agregar(event){  
console.log("Agregar nuevo elemento");


  const prueba = {
      stdin: this.state.entrada,
      lang: "PYTHON",       
      program: programCode
    }
    
    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/test/program/`,  prueba )
      .then(res => {   
      responseCode.push(res.data);   
        
      }).catch(error => {
      responseError.push(error.data);
      });
 console.log(responseCode);
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
    <div className="IngresarCodigoPyhton"  onSubmit={this.handleSubmit} >     

     
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

         <label >
             {responseCode[0]}
        </label>

            <Button bsStyle="primary"  onClick={this.agregar} > Agregar</Button>
             
      </div>      

    );
  }
}

export default IngresarCodigoPyhton;