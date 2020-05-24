import React from 'react'

class TableHeader extends React.Component {
    render(){
        return (
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
        ); 
    }
}

export default TableHeader