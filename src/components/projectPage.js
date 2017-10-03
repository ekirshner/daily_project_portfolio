import React, { Component } from 'react';
import listofProjects from '../listOfProjects';

class ProjectPage extends Component {

    render() {
        const id = this.props.match.params.id;

        return (
            <div>
                <h2> All About {listofProjects[id].name} </h2>
                <p> {listofProjects[id].description}</p>
                <a href={listofProjects[id].theLink}> <button className="github-button"> Click Here to View Code </button> </a>
            </div>
        );
    }
}

export default ProjectPage;




