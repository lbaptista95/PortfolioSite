import React from 'react';

import FormField from "./ProjectItem"

export default function ProjectList(props)
{
    const projectsPath = props.path

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
                            
            })
            .catch(error => {
                console.error("COULDN'T GET THE DATA: " + error)
            })
    }, []) 
}