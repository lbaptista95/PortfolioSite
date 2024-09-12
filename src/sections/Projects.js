import React from 'react';

import ProjectList from "../components/projects/ProjectList"
import PageHeader from "../components/PageHeader"
import API_ENDPOINTS from '../config/apiConfig';
import headers from "../data/Headers"
export default function Projects() {
    return (
        <div>
            <ProjectList path={API_ENDPOINTS.getProjects}/>
        </div>
    )
}