import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router'

var usuarios = [];

var lista=[];

var id_u;

export var identificador = {
  id: id_u,
}



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
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
 }

  request(){
     var payload={
      username : this.state.email,
      password :this.state.password
    }

    console.log(payload);

     axios.post(`http://104.248.188.46:8082/hackusach/login`,  payload )
      .then(res => {
        this.setState({ 
        respuesta: true 
      });

      }).catch(error => { 
       
       alert("Usuario o Contraseña incorrecta.");
      });      


      
    axios.get(`http://104.248.188.46:8082/hackusach/api/v1/alumnos/all`)
      .then(res => {        
        console.log(res.data);
        // this.setState({ redirect: true });
        usuarios.push(res.data);
      //  console.log("usuarios: ");
    //    console.log(this.state.email);
        for (var i=0; i< usuarios[0].length ; i++ ){
       //   console.log("iterando");
          if(usuarios[0][i].username === this.state.email){
            localStorage.setItem('Rol',"alumno",5);
            localStorage.setItem('id_usuario', usuarios[0][i].id,5);
           
          //alert("soy alumno");
            identificador.id = usuarios[0][i].id;
            // setter
          
         
         //   console.log(identificador.id);
             this.setState({ 
               id: usuarios[0][i].id
              });
             
          }
        }

        if(this.state.respuesta === true){
          console.log("login corrrecto");

           this.setState({ redirect: true });

        }

        
      }).catch(error => {
       console.log(error.response);
       
      });      

       axios.get(`http://104.248.188.46:8082/hackusach/api/v1/profesores/all`)
      .then(res => {        
        console.log(res.data);
        // this.setState({ redirect: true });
        usuarios = [];
        usuarios.push(res.data);
      //  console.log("usuarios: ");
    //    console.log(this.state.email);
        for (var i=0; i< usuarios[0].length ; i++ ){
       //   console.log("iterando");
          if(usuarios[0][i].username === this.state.email){
          localStorage.setItem('Rol',"profesor",5);
             localStorage.setItem('id_usuario', usuarios[0][i].id,5);
         
           //     alert("soy profe");
            identificador.id = usuarios[0][i].id;
            // setter
         
         
         //   console.log(identificador.id);
             this.setState({ 
               id: usuarios[0][i].id
              });
             
          }
        }



        if(this.state.respuesta === true){
          console.log("login corrrecto");

           this.setState({ redirect: true });

        }

        
      }).catch(error => {
       console.log(error.response);
       
      });           
      

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