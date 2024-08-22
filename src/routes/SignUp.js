import React from 'react';

import CustomForm from "../components/form/CustomForm"
import Header from "../components/home/Header"
import API_ENDPOINTS from '../config/apiConfig';

export default function SignUp() {
    return (
        <div className="signup-page">
            <Header/>
            <CustomForm path={API_ENDPOINTS.getSignUpFields}/>
        </div>
    )
}