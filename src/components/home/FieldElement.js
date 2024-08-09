import React from "react"


export default function FieldElement(props)
{
    const {imageSrc,imageAltText, title, description} = props

    return (
        <div className="fieldElement">
            <img src={imageSrc} alt={imageAltText} className="itemImage" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

