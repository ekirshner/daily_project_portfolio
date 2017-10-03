
import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import StarComponent from './starbar';

class Project extends Component {

    render() {
        return (
            <div className={ "project " + this.props.className }>
                <StarComponent />
                <h4>{ this.props.name }</h4>
                <p>{ this.props.description }</p>
                <Link to={ "/projectsPage/" + this.props.id }><button>View Details</button></Link>
            </div>
        )
    }

}

export default Project;






