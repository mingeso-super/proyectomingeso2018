import React, { Component } from "react";
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import Table from './table/Table.js';

import items from './menu/Menu.js'; 
import PropTypes from 'prop-types';
import Rol from './Rol.js';

class App extends Component {  
	static propTypes = {
		children: PropTypes.object.isRequired
	};
  render() {  
  const {children} = this.props;
    return (
    <div className="App">
      <Header title="Principal" items={items}/>        

      <Content body={children} />  
      </div>	    
    );
  }
}

export default App;