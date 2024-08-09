import React from 'react';

import Header from "../components/home/Header"
import Footer from "../components/home/Footer"
import MainContent from '../components/home/MainContent';

export default function Home() {
    return (
        <div className="home">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

