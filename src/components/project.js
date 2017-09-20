
import React, { Component } from 'react';
import StarComponent from './starbar'

class Project extends Component {

    render() {
        return (
            <div className={ "project " + this.props.className }>
                <StarComponent />
                <h4>{this.props.name}</h4>
                <p>{this.props.description}</p>
                <a href={this.props.theLink}><button>Check It Out</button></a>
            </div>
        )
    }

}

export default Project;






