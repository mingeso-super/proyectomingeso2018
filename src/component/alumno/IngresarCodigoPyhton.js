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
import { ButtonGroup, Button } from 'react-bootstrap';


class IngresarCodigoPyhton extends Component {  



   constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
          this.agregar = this.agregar.bind(this);
    }

   onChange(newValue) {
        console.log('change', newValue);
    }

  cambio(event){
  
  }

agregar(event){  
console.log("Agregar nuevo elemento");

  const prueba = {
      stdin: "42",
      lang: "PYTHON",       
      program:  "print(input('Number from stdin: '))" 
    }
    
    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/test/program/`,  prueba )
      .then(res => {        
        console.log(res.data);
      }).catch(error => {
     // console.log(error.response)
      });
   
  }

  componentDidMount(){
   
  }

  
  render() {    
    return (
    <div className="IngresarCodigoPyhton">      
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
          value={`function onLoad(editor) {
          console.log("i've loaded");
        }`}
          setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          }}/>
            

            <Button bsStyle="primary"  onClick={this.agregar} > Agregar</Button>
             
      </div>      

    );
  }
}

export default IngresarCodigoPyhton;