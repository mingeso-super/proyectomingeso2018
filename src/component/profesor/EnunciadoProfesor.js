
import React, { Component } from "react";
import Table from '../table/Table.js';
import items from '../menu/menu.js'; 
import PropTypes from 'prop-types';
import axios from 'axios';

class EnunciadoProfesor extends Component {  

   constructor(props) {
    super(props);
    this.state={
      lista: [],
      codigo: '',
      Titulo: '',
      fecha: ''
    };

    }

  componentDidMount(){
    axios.get(`http://104.248.188.46:8082/hackusach/api/v1/alumnos/all`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const lista = res.data;
        this.setState({lista});
        console.log(this.state.lista);
        console.log(this.state.lista[0]);
        console.log(this.state.lista[0].productCode);
      })

  }

	
  render() {    
    return (
    <div className="EnunciadoProfesor">      

      <Table>lista={this.state.lista}</Table>  

      </div>	    
    );
  }
}

export default EnunciadoProfesor;