import React from "react";

function Row(props) {

    return (
        <tr>
            <td>{props.rowData.product_id}</td>
            <td>{props.rowData.name}</td>
            <td>{props.rowData.description}</td>
            <td>{props.rowData.price}</td>
            <td>{props.rowData.stock}</td>
        </tr>
    )
}

export default Row;
