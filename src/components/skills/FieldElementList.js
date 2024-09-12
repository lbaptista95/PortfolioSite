import React from "react"

import FieldElement from "./FieldElement"

import homeData from "../../data/HomeData"

import SkillList from "../SkillList"

export default function FieldElementList()
{
    
    const data = homeData.map(x => <FieldElement 
                                    key={x.key}
                                    imageSrc = {x.imageSrc} 
                                    imageAltText={x.imageAltText} 
                                    title={x.title} 
                                    description={<SkillList skills={x.description} useLabel={false} parentClass="fieldElement"/>}/>)

    return (
        <ul className="horizontalList">
            {data}
        </ul>
    )
    
}