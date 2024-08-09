import React from "react"

import FieldElementList from "./FieldElementList";


export default function MainContent() {
    return (
        <div className="mainContent">
            <h2>These are the fields in which I'd like to work:</h2>
            <FieldElementList/>
        </div>
    )
}