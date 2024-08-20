import React from 'react';

import FormField from "./FormField"

export default function CustomForm(props) {


    const hasFields = React.useRef(false)
    const formFieldsPath = props.path

    const [fields, setFields] = React.useState([])
    const [formState, setFormState] = React.useState({})
    const initialState = React.useRef(null)

    React.useEffect(() => {
        fetch(formFieldsPath, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {

                setFields(data)

                initialState.current = data.reduce((x, field) => {
                    x[field.name] = field.type === "Int32" ? 0 : ""
                    return x
                }, {}) 
                
                hasFields.current = true

                setFormState(initialState.current)                
            })
            .catch(error => {
                console.error("COULDN'T GET THE DATA: " + error)
            })
    }, [])        

    function handleChange(event) {
        const { name, value } = event.target
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))

        console.log(formState)
    }

    const compFields = fields.map((field, index) => (
        <FormField
            key={index}
            name={field.name}
            type={field.type}
            value={formState[field.name] || ""}
            onChange={handleChange}
        />
    ))

    function clickSendButton()
    {
        const formJson = JSON.stringify(formState)

        console.log(formJson)

        fetch("https://portfoliositeapi-8fd2f5d6ceb2.herokuapp.com/api/User/", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: formJson
        })
        .then(response => {
            if (!response.ok) {

                console.error("Error sending user data")
            }
            return response.json()
        })
        .then(result => {
            console.log("API Response: " + result)
            debugger
            setFormState(initialState.current)
        })
        .catch(error => {
            console.error("Error: " + error)
        })
    }

    return (
        <form className="signup-form">
            {hasFields && compFields}
            <button onClick={clickSendButton} className="signup-send-button">Send</button>
        </form>
    )
}