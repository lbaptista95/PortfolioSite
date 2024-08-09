import React from "react"
import { Outlet } from 'react-router-dom';

import AppHeader from "./AppHeader"

export default function AppMain()
{
    return (
        <main>
            <AppHeader/>
            <Outlet/>
        </main>
    )
}