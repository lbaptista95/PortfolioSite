import React from 'react';

import ProjectList from "../components/projects/ProjectList"
import Header from "../components/home/Header"
import API_ENDPOINTS from '../config/apiConfig';
export default function Projects() {
    return (
        <div className="projects-page">
            <Header/>
            <ProjectList path={API_ENDPOINTS.getProjects}/>
        </div>
    )
}