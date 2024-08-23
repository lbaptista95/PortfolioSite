import React from "react"

export default function SkillList(props) {
    const { skills } = props

    const uniqueId = React.useId()

    const skillNames = skills.map(name => (<li key={React.useId()}>{name}</li>))
    return (
        <div className="project-item-skills">
            <label className="project-item-skills-label" htmlFor={uniqueId}>Skills:</label>
            <ul className="project-item-skills-list" id={uniqueId}>
                {skillNames}
            </ul>
        </div>
    )
}