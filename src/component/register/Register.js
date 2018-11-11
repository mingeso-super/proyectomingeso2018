import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "", 
      password1: "",
      password2: ""
    };
  }

  validateForm() {
    
    const pass1= this.state.password1.value; 
    const pass2 = this.state.password2.value;     

    return this.state.email.length > 0 && this.state.password1.length > 0 && this.state.password2.length > 0 && pass1 === pass2;

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
          <Button block bsSize="large" disabled={!this.validateForm()} type="submit"> Registrarse </Button>
        </form>
      </div>
    );
  }
}

export default Register;