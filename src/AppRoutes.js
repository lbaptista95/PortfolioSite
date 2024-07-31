import React from "react"
import { Home } from "./routes/Home";
import { Route, Routes } from 'react-router-dom';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes;
