import React from 'react';

import ProjectList from "../components/projects/ProjectList"
import PageHeader from "../components/PageHeader"
import API_ENDPOINTS from '../config/apiConfig';
import headers from "../data/Headers"
export default function Projects() {
    return (
        <div className="projects-page">
            <PageHeader title ={headers[1].title} subtitle={headers[1].subtitle}/>
            <ProjectList path={API_ENDPOINTS.getProjects}/>
        </div>
    )
}