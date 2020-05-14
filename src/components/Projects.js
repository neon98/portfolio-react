import React from 'react';

import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle';

import '../stylesheets/Projects.css'
import data from '../assets/data.json'

export default class Projects extends React.Component {
    render() {
        return (
            <div id="projects" className="section">
                <SectionTitle title={'Projects'} />
                {data.projects.map((project, index) => <ProjectCard project={project} key={index} />)}
            </div>
        )
    }
}