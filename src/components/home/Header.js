import React from "react"

export default function Header(props) {

    const {title, subtitle} = props
    return (
        <div className="header">
            <h1 className="title">{title}</h1>
            <h3 className="subtitle"> {subtitle} </h3>
        </div>
    )
}