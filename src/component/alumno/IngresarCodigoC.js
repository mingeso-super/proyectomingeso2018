import React, { Component } from "react";
import Header from '../Header.js';
import Content from '../Content.js';
import PropTypes from 'prop-types';
import axios from 'axios';
import AceEditor from 'react-ace';
// Import a Mode (language)
import 'brace/mode/csharp';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/terminal';

import './Estudiante.css';


class IngresarCodigoC extends Component {  



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
    <div className="IngresarCodigoC">      
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
            
             
      </div>      
    );
  }
}

export default IngresarCodigoC;