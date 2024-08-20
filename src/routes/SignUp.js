import React from 'react';

import CustomForm from "../components/form/CustomForm"
import Header from "../components/home/Header"

export default function SignUp() {
    return (
        <div className="signup-page">
            <Header/>
            <CustomForm path="https://portfoliositeapi-8fd2f5d6ceb2.herokuapp.com/api/User/fields"/>
        </div>
    )
}