import React,{Component} from "react";
import "./Table.css";
import axios from 'axios';


/*

function ListaItems(props) {

  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <tr>
      <td>{number.productCode}</td>
      <td>{number.productName}</td>
      <td>{number.productDate}</td>      
    </tr>

  );
  return (
    <tbody>{listItems}</tbody>
  );
}
*/
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
                  <th>Nombre  </th>
                  <th type>Fecha de Publicación</th>                  
                </tr>
              </thead>              
              
            </table>
        </div>     
    );
  }
}

export default Table;

//para llenar la tabla posteriormente
/* <ListaItems numbers={this.props.lista} onClick={this.props.onClick} />*/