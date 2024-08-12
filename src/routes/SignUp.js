import React from 'react';

import CustomForm from "../components/form/CustomForm"


export default function SignUp() {
    return (
        <div className="signup-page">
            <CustomForm path="public\data\SignUpData.json"/>
        </div>
    )
}