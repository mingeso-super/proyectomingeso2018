import React, { Component } from "react";
import Header from '../Header.js';
import Content from '../Content.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import AceEditor from 'react-ace';
import editorPython from './IngresarCodigoPyhton.js';
import editorC from './IngresarCodigoC.js';
import editorJava from './IngresarCodigoJava.js';
import { ButtonGroup, Button } from 'react-bootstrap';
import './Estudiante.css';
// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/solarized_light';
// Import a Mode (language)
import 'brace/mode/csharp';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/terminal';
// Import a Mode (language)
import 'brace/mode/python';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/solarized_dark';


function cambiarEditor(val){
  if(val === 1){
    console.log("entre en python");
     return (
          <tbody>
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
          </tbody>
     );
   }

   if(val === 2){
     return (
          <tbody>
           <AceEditor
          mode="csharp"
          theme="terminal"
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
            
          </tbody>
     );

   }
   if(val === 3){
      return (
          <tbody>
            <AceEditor
          mode="java"
          theme="solarized_light"
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
            
          </tbody>
     );
   }  


 
 
}

class IngresarCodigo extends Component {  

   constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
    }

   onChange(newValue) {
        console.log('change', newValue);
    }

  cambio(event){
  
  }


  componentDidMount(){
   
  }

  
  render() {    
    return (
    <div className="IngresarCodigo">       
      <ButtonGroup>
          <Button bsStyle="primary" >Python</Button>
          <Button bsStyle="success" >C</Button>
          <Button bsStyle="warning" >Java</Button>
      </ButtonGroup>
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

      </div>      
    );
  }
}

export default IngresarCodigo;