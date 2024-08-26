import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
export default function AppHeader()
{
   const navigate = useNavigate()   

   function handleClick(path)
   {
        navigate(path)
   }

    return (
        <div className="app-header">
            <div className="app-header-button" onClick={() => handleClick("/main/projects")}>Projects</div>
            <div className="app-header-button" onClick={() => handleClick("/main/about")}>About</div>
            {/*<div className="app-header-button" onClick={() => handleClick("/main/signup")}>Sign up</div>*/}
            <div className="app-header-button" onClick={() => handleClick("/")}>Home</div>                   
        </div>
    )
}