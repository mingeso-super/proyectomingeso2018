import React, { Component,  } from "react";
/*import logo from "./logo.svg";*/
/*import "./App.css";*/
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";  
// Import Hamoni Sync
/*import Hamoni from "hamoni-sync";*/
import { Button, FormControl, Table} from 'react-bootstrap';
 

var lista=[];
export const parametros = {
  lista: lista,
}

function ListaItems1(props) {
  const numbers = props.numbers;
  const listItems = lista.map((number) =>
    <tr>
      <td>{number.entrada}</td>
      <td>{number.salida}</td>     
    </tr>
  ); 
  return (
    <tbody>{listItems}</tbody>
  );
}

class TablaEditable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista: [],
      entrada: "",
      salida: ""
    };     
    this.agregar = this.agregar.bind(this);
  
  }


  handleChange = event => {
    if (event.target.name === "entrada")
      this.setState({ entrada: event.target.value });
    if (event.target.name === "salida")
      this.setState({ salida: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

 /* renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  };

*/


agregar(event){ 

  const lista_aprox = {
      entrada: this.state.entrada,
      salida: this.state.salida    
    }
   
    lista.push(lista_aprox);
    console.log("lista global");
    console.log(lista); 
   
  }
  

  render() {
   
    return (
      <div className="TablaEditable">
       
        <p className="App-intro">
          <form onSubmit={this.handleSubmit}>
            <h3>Añadir Parámetros</h3>
            <label>
              Entrada:
              <input
                type="text"
                name="entrada"
                value={this.state.entrada}
                onChange={this.handleChange}
              />
            </label>{" "}
            <label>
              Salida:
              <input
                type="text"
                name="salida"
                value={this.state.salida}
                onChange={this.handleChange}
              />
            </label> 
          
             <Button bsStyle="success" onClick={this.agregar} value="Agregar" >Agregar</Button>
          </form>
        </p>
        <div>
          <table class="table table-bordered" >
              <thead>
                <tr>
                  <th>Entrada </th>
                  <th>Salida  </th>                 
                </tr>
              </thead>
          <ListaItems1 numbers={this.props.lista}  onChange={this.handleChange} handleSubmit />
            </table >

        </div>
       
      </div>



    );
  } 

}


export default TablaEditable;
