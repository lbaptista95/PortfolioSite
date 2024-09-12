import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
import AppSections from './AppRoutes';
import './Graphic/CSS/styles.css';

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <AppSections />
      </BrowserRouter>
    </React.StrictMode>

  );
}
