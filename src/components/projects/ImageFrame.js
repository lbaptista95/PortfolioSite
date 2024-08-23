import React from "react"

export default function ImageFrame(props)
{
    const {name, url} = props.img
    return (
        <div className="project-item-image">
            <label className="image-title">{name}</label>
            <img src={url}/>
        </div>
    )
}