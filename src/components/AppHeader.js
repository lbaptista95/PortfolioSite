import React from "react"
import { Navigate, useNavigate } from "react-router-dom"
export default function AppHeader()
{
   const navigate = useNavigate()

   function aboutClick()
   {
    navigate("/main/about")
   }

   function homeClick()
   {
    navigate("/")
   }

    return (
        <div className="app-header">
            <div className="app-header-button" onClick={aboutClick}>About</div>
            <div className="app-header-button" onClick={homeClick}>Home</div>           
        </div>
    )
}