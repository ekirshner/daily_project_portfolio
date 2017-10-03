import React, { Component } from 'react';

import Project from '../components/project'
import projectsArr from '../listOfProjects';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectList: projectsArr
        };
    }

    render() {
        
        const projectList = this.state.projectList.map((project, id) => {
            return (
                <Project key={ id } id={ id } className="gabble" name={ project.name } description={ project.description }  />
            )
        });

        return (
            <div className="projects">
                <h2>Projects</h2>
                { projectList }
            </div>
        );
    }
}

export default Projects;