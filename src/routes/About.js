import React from 'react';
import Header from "../components/home/Header"
import Footer from "../components/home/Footer"

import headers from '../data/Headers';
export default function About() {
    return (
        <div className="about">
            <Header title ={headers[0].title} subtitle={headers[0].subtitle}/>
        </div>
    )
}