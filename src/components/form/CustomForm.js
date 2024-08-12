import React from 'react';

import FormField from "./FormField"
import data from "../../data/SignUpData.json"

export default function CustomForm(props) {

    //const formFieldsPath = props.path

    console.log(data)
    //console.log(formFieldsPath)

    const [fields, setFields] = React.useState([])
    const [formState, setFormState] = React.useState({})

    /*React.useEffect(() => {
        fetch(formFieldsPath)
            .then(response => {
                const resp = response.json()
                console.log(resp)
            })
            .then(data =>{

                console.log(data)
                setFields(data)
                
                const initialState = data.reduce((x,field) => {
                    x[field.name] = field.type === "number" ? 0 : ""
                    return x
                },{})

                setFormState(initialState)
            })
            .catch(error => {
                console.error("COULDN'T GET THE DATA: " + error)
            })
    },[])*/

    React.useEffect(()=>{
        setFields(data)

        const initialState = data.reduce((x, field) => {
            x[field.name] = field.type === "number" ? 0 : ""
            return x
        }, {})

        console.log(initialState)

        setFormState(initialState)

    },[])

    console.log(formState)   

    function handleChange(event) {
        const { name, value } = event.target
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
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

    console.log(compFields)

    return (
        <form>
            {compFields}
        </form>
    )
}