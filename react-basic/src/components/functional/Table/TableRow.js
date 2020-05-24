import React from 'react'

function TableRow(props){
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.position}</td>
            <td>{props.office}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
        </tr>
    );
}

export default TableRow