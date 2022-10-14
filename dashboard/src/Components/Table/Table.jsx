import React from "react";
import Row from "./Subcomponents/Row";

function Table(props){
    return(
        <table className="table">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Producto</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                
            </tr>
        </thead>
        <tbody>
            
            {
               Array.isArray(props.data) && props.data.map((element, i) => <Row key={element.name + i} rowData={element} />)
            }
            
        </tbody>
    </table>
    )
}

export default Table;