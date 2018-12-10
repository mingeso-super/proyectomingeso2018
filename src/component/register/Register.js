import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Register.css";
import axios from 'axios';

import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "", 
      password1: "",
      password2: "",
      nombres:"",
      apellidos:""
    };
    this.crear = this.crear.bind(this);
  }

  crear(){

    var payload={
      nombres: this.state.nombres,
      apellidos: this.state.apellidos,
      username : this.state.email,
      password :this.state.password1
    }
    console.log(payload);

    axios.post(`http://104.248.188.46:8082/hackusach/api/v1/alumnos/`,  payload )
      .then(res => {        
        console.log(res.data);

        alert("Usuario creado con éxito");
      
         window.location.reload();
      }).catch(error => {
      console.log(error.response)
      }); 

      

  }


  validateForm() {
    
    const pass1= this.state.password1; 
    const pass2 = this.state.password2;     

    return this.state.email.length > 0 && this.state.password1.length > 0  && pass1 === pass2;

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
    return (

      <div className="Register">      
        <form onSubmit={this.handleSubmit}>
         <FormGroup controlId="nombres" bsSize="large">
            <ControlLabel>Nombres</ControlLabel>
            <FormControl
              autoFocus
              type="nombres"
              value={this.state.nombres}
              onChange={this.handleChange}
            />
          </FormGroup>
         <FormGroup controlId="apellidos" bsSize="large">
            <ControlLabel>Apellidos</ControlLabel>
            <FormControl
              autoFocus
              type="apellidos"
              value={this.state.apellidos}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password1" bsSize="large">
            <ControlLabel>Contraseña</ControlLabel>
            <FormControl
              value={this.state.password1}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="password2" bsSize="large">
            <ControlLabel>Confirmar Contraseña</ControlLabel>
            <FormControl
              value={this.state.password2}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button block bsSize="large" disabled={!this.validateForm()} onClick={this.crear} type="submit"> Registrarse </Button>
         <Link id="register" to={"/login"}>Volver</Link>
        </form>
        
      </div>
    );
  }
}

export default Register;