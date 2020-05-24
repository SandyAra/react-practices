import React from 'react'
import TableHeader from './TableHeader'
import '../../../App.css';
import TableRow from './TableRow';
import data from '../../../mock/data'

class Table extends React.Component {
    render(){

        const dataComponents = data.map((item) => {
            return <TableRow 
                key={item.key}
                name={item.name}
                position={item.position}
                office={item.office}
                age={item.age}
                gender={item.gender}
            />
        })

        return (
            <table  id="example" className="table table-striped table-bordered">
                <TableHeader></TableHeader>
                <tbody>
                    {dataComponents}
                </tbody>
            </table>
        );

    }
}

export default Table;