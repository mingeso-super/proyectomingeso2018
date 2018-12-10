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

import items from '../menu/menu.js'; 

//import MyLargeModal from '../MyLargeModal.js';

import './Estudiante.css';
import { ButtonGroup, Button, FormControl,Popover, Panel, ListGroup, ListGroupItem, DropdownButton, ButtonToolbar, MenuItem, Label } from 'react-bootstrap';

import queryString from 'query-string'

import {identificador} from '../login/Login';

var lengEditor: "python";
var temsEditor: "solarized_dark";
var programCode ="";
var responseCode=[];
var responseError=[];

var id_evaluacion;

const options = ["PYTHON", "C", "JAVA"];
var values ;

class IngresarCodigo extends Component { 
   constructor(props) {
        super(props);

       this.state = {           
            entrada: "",
            leng : "PYTHON",
            tema: "solarized_dark",
            lenguajeEditor: "python",
            tituloEnun : "",
            descripcionEnun: "",
            entradasEnun: "",
            salidaEnun: ""  
           
          }; 

          this.agregar = this.agregar.bind(this);
          this.prueba = this.prueba.bind(this);  
          this.extraerEnunciado = this.extraerEnunciado.bind(this); 
    }

 

componentDidMount() {

  console.log("valor de paramteo");
   values = this.props.match.params.id;
  console.log(values);

  this.extraerEnunciado();

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
   document.querySelector("label").innerHTML = "Salida";
  }

extraerEnunciado(){
  ///api/v1/enunciados/:id
  var entrada=[],salida=[],titulo,descripcion;

  axios.get(`http://104.248.188.46:8082/hackusach/api/v1/enunciados/`+values)
      .then(res => {
        console.log(res);
        console.log(res.data);
        //console.log(res.data.titulo);
        titulo = res.data.titulo;
       
         this.setState({ tituloEnun: res.data.titulo });
        descripcion = res.data.descripcion;
        entrada.push(res.data.entradas);

        salida.push(res.data.salidas);     
         this.setState({ descripcionEnun: descripcion });
       this.setState({ entradasEnun: entrada });
       this.setState({ salidaEnun: salida });   

      });      
      
}

agregar(event){    
     //enviar evaluacion 
     const prueba = {
      alumnoId: Number(localStorage.getItem('id_usuario')),
      enunciadoId: Number(values),
      code: programCode,
      lang: this.state.leng    
       
    }
    console.log("el id del u");

    console.log(localStorage.getItem('id_usuario'));

    console.log(prueba);
    console.log("salida");
        axios.post(`http://104.248.188.46:8082/hackusach/api/v1/alumno/`+localStorage.getItem('id_usuario')+`/enunciado/`+values+`/evaluacion/`,  prueba )
          .then(res => {    
             console.log(res.data);
             console.log(res.data.id);
             id_evaluacion = res.data.id;

             console.log("valores de la uri...");
              console.log(identificador.id);
              console.log(values);
              console.log(id_evaluacion);


             axios.post(`http://104.248.188.46:8082/hackusach/api/v1/alumno/`+localStorage.getItem('id_usuario')+`/enunciado/`+values+`/evaluacion/` +id_evaluacion+`/evaluate`,  prueba )
          .then(res => {    
             console.log(res.data);

             alert("Solución enviada con éxito.");
             document.querySelector("label").innerHTML =JSON.stringify(res.data);


          }).catch(error => {     
            console.log(error.data);
          });


    }).catch(error => {     
      console.log(error.data);
    });

      alert("Solución enviada con éxito.");

         window.location.reload();
        

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
         document.querySelector("label").innerHTML =JSON.stringify(res.data);
         responseCode =  JSON.stringify(res.data);
        
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
   <Header title="Principal" items={items}/>

  
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

          <div id="bloSalida">
                <label> Salida</label> 
                 <label for="test" ></label>            
         </div>

        <Button bsStyle="primary"  onClick={this.agregar} > Enviar solución</Button>
        <Button bsStyle="primary"  onClick={this.prueba} > Prueba</Button> 

         <div style={{ height: 120 }}>
            <Popover
              id="popover-basic-CS"
              placement="right"              
              title="Enunciado"
            >
             <p> Titulo: {this.state.tituloEnun} </p>   
              <p> Descripción: {this.state.descripcionEnun} </p>
              <p> Entradas: {this.state.entradasEnun.toString()}</p>
              <p> Salidas: {this.state.salidaEnun.toString()}</p>
          
            </Popover>
        </div>

      </div>      

    );
  }
}


export default IngresarCodigo;