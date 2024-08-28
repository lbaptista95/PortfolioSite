import React from 'react';

import Header from "../components/PageHeader"
import Footer from "../components/home/Footer"
import MainContent from '../components/home/MainContent';
import headers from "../data/Headers"

export default function Home() {
    return (
        <div className="home">
            <Header title ={headers[0].title} subtitle={headers[0].subtitle}/>
            <MainContent />
            <Footer />
        </div>
    )
}

