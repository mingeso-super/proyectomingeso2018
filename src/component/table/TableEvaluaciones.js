import React,{Component} from "react";
import "./Table.css";
import axios from 'axios';

import { Link } from 'react-router-dom';


 
function ListaItems(props) {

  

  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <tr>
      <td>{number.id}</td>
      <td>{number.lang}</td> 
      <td>{number.code}</td>
      <td>{number.score}</td>                   
    </tr>
  );
  return (
    <tbody>{listItems}</tbody>
  );
}

class TableEvaluaciones extends Component {  

 
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
                  <th>Lenguaje  </th>
                  <th>Código  </th>
                  <th>score  </th>                                                 
                </tr>
              </thead>              
              <ListaItems numbers={this.props.lista} onClick={this.props.onClick} />
            </table>
        </div>     
    );
  }
}

export default TableEvaluaciones;
