import React from "react"
import Home from "./routes/Home";
import AppMain from "./components/AppMain"
import About from "./routes/About"

import { Route, Routes, Navigate } from 'react-router-dom';

export default function AppRoutes()
{
  return (
    <Routes>
      <Route path="/" element = {<Navigate to="main/home"/> }/>

      <Route path="main" element={<AppMain />}>
        <Route path="home" element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
  )
}
