import React from "react"

export default function PageHeader(props) {

    const {title, subtitle} = props
    return (
        <div className="page-header">
            <h1 className="page-header-title">{title}</h1>
            <h2 dangerouslySetInnerHTML ={{__html: subtitle}}className="page-header-subtitle"/> 
        </div>
    )
}