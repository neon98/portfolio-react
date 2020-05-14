import React from 'react';
import Media from 'react-media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../stylesheets/ProjectCard.css'
import Image from './Image'

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSmallScreen: false
        }
    }

    render() {
        let project = this.props.project;
        return (
            <div>
                <Media
                    query="(max-width: 1024px)"
                    onChange={(matches) => {
                        matches ? this.setState({ isSmallScreen: true }) : this.setState({ isSmallScreen: false });
                    }}
                />
                {(project.side === 'left' || this.state.isSmallScreen) ?
                    <div className="project-card">
                        <ProjectText
                            project={project}
                            isSmallScreen={this.state.isSmallScreen}
                        />
                        <Image
                            imageSize='small'
                            imageLink={project.imageLink}
                            projectLink={project.projectLinks[0].linkAddress}
                        ></Image>
                    </div> :
                    <div className="project-card">
                        <Image
                            imageSize='small'
                            imageLink={project.imageLink}
                            projectLink={project.projectLinks[0].linkAddress}
                        ></Image>
                        <ProjectText
                            project={project}
                            isSmallScreen={this.state.isSmallScreen}
                        />
                    </div>
                }
            </div>

        )
    }
}

function ProjectText(props) {
    let project = props.project
    let shouldAlignRight = project.side === 'right' && !props.isSmallScreen;
    return (
        <div className={shouldAlignRight ? "project-card-text-reversed" : "project-card-text"} data-aos="fade" data-aos-delay="200">

            <p className={shouldAlignRight ? "project-card-text-title-reversed" : "project-card-text-title"}>
                <span>{project.title}</span>
                <span className="project-card-text-links" data-aos="fade" data-aos-delay="400">
                    {project.projectLinks.map((link, index) =>
                        <a href={link.linkAddress} key={index}>
                            <FontAwesomeIcon icon={[link.iconPrefix, link.icon]} />
                        </a>
                    )}
                </span>
            </p>
            <p className="project-card-text-description" style={{ margin: 0 }}>
                {project.description}
            </p>
            <p className={shouldAlignRight ? "project-card-text-tech-stack-reversed" : "project-card-text-tech-stack"}>
                {
                    project.techStack.map((tech, index) => <span key={index}>{tech}</span>)
                }
            </p>
        </div>
    )
}