import React from 'react'
import '../../App.css'

class Form extends React.Component {

    render(){
        return (
            <div className="form">
                <input id="name" type="text" placeholder="Name"></input>
                <input id="position" type="text" placeholder="Position"></input>
                <input id="office" type="text" placeholder="Office"></input>
                <input id="age" type="number" placeholder="Age"></input>
                <input id="gender" type="text" placeholder="Gender"></input>
    
                <button> Submit </button>
    
            </div>
        );  
    }

}

export default Form;