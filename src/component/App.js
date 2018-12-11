import React, { Component } from "react";
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import Table from './table/Table.js';
import items from './menu/menu.js'; 
import PropTypes from 'prop-types';
import Rol from './Rol.js';
import Login from './login/Login.js';
import home from './login/home';
import { Router, Route,BrowserRouter, Switch, Redirect } from 'react-router-dom';
import "./App.css";

class App extends Component {  

  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {  
    
  const {children} = this.props;
    return (
     <div className="App">

 
      <Route path="/login" component={Login} />
      <Content body={children} />      
      </div>  
    );
  }
}

export default App;

/*
<Header title="Principal" items={items}/>   */