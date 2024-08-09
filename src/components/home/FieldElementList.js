import React from "react"

import FieldElement from "./FieldElement"

import homeData from "../../data/HomeData"

export default function FieldElementList()
{
 
    console.log(homeData[0].imageSrc)
    
    const data = homeData.map(x => <FieldElement 
                                    key={x.key}
                                    imageSrc = {x.imageSrc} 
                                    imageAltText={x.imageAltText} 
                                    title={x.title} 
                                    description={x.description} />)

    console.log(data)

    return (
        <ul className="horizontalList">
            {data}
        </ul>
    )
    
}