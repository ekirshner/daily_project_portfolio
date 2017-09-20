import React, { Component } from 'react';

import Project from '../components/project'

class Projects extends Component {

    render() {
        return (
            <div className="projects">
                <h2>Projects</h2>
                <Project className="gabble" name="Gabble" description="Social networking site created with Node.js" theLink="https://github.com/ekirshner/weekly_project_gabble" />
                <Project className="music" name="Music Player" description="Music player created with the iTunes API" theLink="https://github.com/ekirshner/week_4_project_itunes" />
                <Project className="calculator" name="Calculator" description="Simple calculator created with vanilla javascript" theLink="https://github.com/ekirshner/week_3_project_calculator" />
                <Project className="news" name="News Source" description="The latest news stories created with React" theLink="https://github.com/ekirshner/daily_project_news_api" />
            </div>
        )
    }
}

export default Projects;