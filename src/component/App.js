import React, { Component } from "react";
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import Table from './table/Table.js';

import items from './menu/menu.js'; 

class App extends Component {  
  render() {   
    return (
    <div className="App">
      <Header title="Alumnos" items={items}/> 
      <div >      
    	  <Table /> 
       </div>
      </div>	    
    );
  }
}

export default App;