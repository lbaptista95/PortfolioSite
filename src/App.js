import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './Graphic/CSS/styles.css';

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>

  );
}
