import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router'
import ls from 'local-storage';

var usuarios = [];

var lista=[];

var id_u;

var roles = 0;

export var identificador = {
  id: id_u,
  Rol: roles,
}


 var intercambio;
 var bandera_profe = 0;
 var bandera_alumno = 0;


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
      respuesta: false,
      id: ""
    };
  this.request = this.request.bind(this);
  this.llamadaProfe = this.llamadaProfe.bind(this);
    this.llamadaLogin = this.llamadaLogin.bind(this);
      this.llamadaAlumnos = this.llamadaAlumnos.bind(this);

  }


   llamadaLogin(){

     var payload={
      username : this.state.email,
      password :this.state.password
    }

    console.log(payload);

     axios.post(`http://104.248.188.46:8082/hackusach/login`,  payload )
      .then(async(res) => {
        this.setState({ 
        respuesta: true 
      });

      }).catch(error => { 
       
       alert("Usuario o Contraseña incorrecta.");
      });      


  }

   async llamadaAlumnos(){

   
      
     axios.get(`http://104.248.188.46:8082/hackusach/api/v1/alumnos/all`)
      .then( async (res) =>  {        
        console.log(res.data);
        // this.setState({ redirect: true });
         usuarios = [];
        usuarios.push(res.data);
      //  console.log("usuarios: ");
    //    console.log(this.state.email);
        for (var i=0; i< usuarios[0].length ; i++ ){
       //   console.log("iterando");
          if(usuarios[0][i].username === this.state.email){

             bandera_alumno = 1;
             

            localStorage.setItem('id_usuario', usuarios[0][i].id);
           
          //alert("soy alumno");
            identificador.id = usuarios[0][i].id;
            // setter
          
         
         //   console.log(identificador.id);
             this.setState({ 
               id: usuarios[0][i].id
              });
             
          }
        }
        

        if(bandera_alumno === 1 && this.state.respuesta){
           console.log("login alumno corrrecto!!!!!!!!!!!!");  

            localStorage.setItem('Rol',"alumno");
             this.setState({ redirect: true });         

        }

        
      }).catch(error => {
       console.log(error.response);
       
      });

  }

   async llamadaProfe(){

     axios.get(`http://104.248.188.46:8082/hackusach/api/v1/profesores/all`)
                    .then(async(res) => {        
                      console.log(res.data);
                      // this.setState({ redirect: true });
                      usuarios = [];
                      usuarios.push(res.data);
                    //  console.log("usuarios: ");
                  //    console.log(this.state.email);
                      for (var i=0; i< usuarios[0].length ; i++ ){
                     //   console.log("iterando");
                        if(usuarios[0][i].username === this.state.email){
                          bandera_profe = 1;
                           localStorage.setItem('id_usuario', usuarios[0][i].id);
                       
                             
                          identificador.id = usuarios[0][i].id;
                          // setter
                       
                       
                       //   console.log(identificador.id);
                           this.setState({ 
                             id: usuarios[0][i].id
                            });
                           
                        }
                      }

                      if(bandera_profe === 1  && this.state.respuesta){
                        console.log("login rofesor corrrecto!!!!!!!!!!!!");        
                          
                          localStorage.setItem('Rol',"profesor");
                         this.setState({ redirect: true });

                       
                      }

                      
                    }).catch(error => {
                     console.log(error.response);
                     
                    });

  }


async request(){
  console.log("----------------------------------");
  var login = this.llamadaLogin();
  var result1 =   this.llamadaAlumnos();
  var result2 =  this.llamadaProfe();

  localStorage.setItem('Rol',"");
    bandera_profe = 0;
    bandera_alumno = 0;
}
    



  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });


  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {

     const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/enunciadoEstudiante'/>;
     }

    return (
     
 
      <div className="Login">      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()}  onClick={this.request} type="submit"> Login </Button>
          
          <div>
           <Link id="register" bsStyle="info" to="/register">
              <button bsStyle="info" >
                  Registrarse
               </button>
           </Link>
          </div>         

        </form>
       
      </div>
    );
  }
}

export default Login;