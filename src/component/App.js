import React, { Component } from "react";
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';


import items from './menu/menu.js'; 

class App extends Component {  
  render() {   
    return (
    <div className="App">
      <Header title="Principal" items={items}/>    
      <Content />
      <Footer />       
      </div>	    
    );
  }
}

export default App;