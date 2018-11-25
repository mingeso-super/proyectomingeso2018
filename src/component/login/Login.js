import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  this.request = this.request.bind(this);
  }

  request(){
     var payload={
      username : this.state.email,
      password :this.state.password
    }

    console.log(payload);

     axios.post(`http://104.248.188.46:8082/hackusach/login`,  payload )
      .then(res => {        
        console.log(res.data);
      }).catch(error => {
      console.log(error.response)
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
        </form>
      </div>
    );
  }
}

export default Login;