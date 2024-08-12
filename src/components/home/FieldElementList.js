import React from "react"

import FieldElement from "./FieldElement"

import homeData from "../../data/HomeData"

export default function FieldElementList()
{
    
    const data = homeData.map(x => <FieldElement 
                                    key={x.key}
                                    imageSrc = {x.imageSrc} 
                                    imageAltText={x.imageAltText} 
                                    title={x.title} 
                                    description={x.description} />)

    return (
        <ul className="horizontalList">
            {data}
        </ul>
    )
    
}