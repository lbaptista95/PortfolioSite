import React from "react"

export default function SkillList(props) {
    const { skills, useLabel, parentClass } = props

    const uniqueId = React.useId()

    const skillNames = skills.map(name => (<li key={React.useId()}>{name}</li>))
    return (
        <div className={parentClass+"-skills"}>
            {useLabel && <label className={parentClass+"-skills-label"} htmlFor={uniqueId}>Skills</label>}
            <ul className={parentClass+"-skills-list"} id={uniqueId}>
                {skillNames}
            </ul>
        </div>
    )
}