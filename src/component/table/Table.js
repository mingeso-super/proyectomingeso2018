import React,{Component} from "react";
import "./Table.css";
import axios from 'axios';

import { Link } from 'react-router-dom';



function ListaItems(props) {

  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <tr>
      <td>{number.id}</td>
      <td>{number.titulo}</td> 
      <td>{number.descripcion}</td>
      <td>{number.entradas+', '}</td>     
      <td>{number.salidas+','}</td>  
      <td>
       <Link to={"/resolverEnunciado/"+number.id}>Resolver enunciado</Link>
      </td>               
    </tr>
  );
  return (
    <tbody>{listItems}</tbody>
  );
}

class Table extends Component {  

 
  render() {
    return (   
       <div class="panel">
            <h3>
             Lista de Enunciados
            </h3>            
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Código </th>
                  <th>Titulo  </th>
                  <th>Descripción  </th>
                  <th>Entradas  </th>
                  <th>Salidas  </th>                                   
                </tr>
              </thead>              
              <ListaItems numbers={this.props.lista} onClick={this.props.onClick} />
            </table>
        </div>     
    );
  }
}

export default Table;
