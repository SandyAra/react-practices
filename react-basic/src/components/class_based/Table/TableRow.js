import React from 'react'

class TableRow extends React.Component {

    render(){
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.position}</td>
                <td>{this.props.office}</td>
                <td>{this.props.age}</td>
                <td>{this.props.gender}</td>
            </tr>
        ); 
    }

}


export default TableRow