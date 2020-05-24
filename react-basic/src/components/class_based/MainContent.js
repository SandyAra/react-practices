import React from 'react'
import '../../App.css';
import Table from './Table/Table';

class MainContent extends React.Component {
    render(){
        return (
            <div className="flex-container">
                <Table></Table>
            </div>
        ); 
    }
}

export default MainContent;