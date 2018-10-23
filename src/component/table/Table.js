import React,{Component} from "react";
import "./Table.css";

/*
function showDate(date){
  var otraDate = new Date(date + 86400000);
  console.log(otraDate);
  console.log(otraDate.getMonth());
  var fecha = otraDate.getDate() + '/' + (otraDate.getMonth()+1) +'/' + otraDate.getFullYear();
  return fecha;
}

function ListaItems(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <tr>
      <td>{number.productCode}</td>
      <td>{number.productName}</td>
      <td>{showDate(number.expirationDate)}</td>
      <td>{number.category}</td>
      <td>{number.price}</td>
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
                  <th>Descripción</th>
                  <th>Fecha de término</th>
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