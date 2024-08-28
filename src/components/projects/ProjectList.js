import React from 'react';

import ProjectItem from './ProjectItem';

export default function ProjectList(props) {
    const projectsPath = props.path

    const [projects, setProjects] = React.useState([])

    React.useEffect(() => {
        fetch(projectsPath, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setProjects(data)
            })
            .catch(error => {
                console.error("COULDN'T GET THE DATA: " + error)
            })
    }, [])

    let projectList = projects.map((project, index) => (
        <ProjectItem
            key={index}
            project={project}
        />
    ))

    projectList = projectList.reverse()

    return (
        <div className="project-list">
            <ul>
            {projectList}
            </ul>
        </div>
    )
}