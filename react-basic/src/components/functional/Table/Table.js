import React from 'react'
import TableHeader from './TableHeader'
import '../../../App.css';
import TableRow from './TableRow';

function Table(){
    return (
        <table  id="example" className="table table-striped table-bordered">
            <TableHeader></TableHeader>
            <tbody>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
            </tbody>
        </table>
    );
}

export default Table;