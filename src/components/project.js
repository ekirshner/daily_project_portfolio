
import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import StarComponent from './starbar';
// import ProjectPage from './projectPage';

class Project extends Component {

    render() {
        return (
            <div className={ "project " + this.props.className }>
                <StarComponent />
                <h4>{ this.props.name }</h4>
                <p>{ this.props.description }</p>
                {/* <a href={ this.props.theLink }><button>Check It Out</button></a> */}
                <Link to={ "/projectsPage/" + this.props.id }><button>View Details</button></Link>
            </div>
        )
    }

}

export default Project;






