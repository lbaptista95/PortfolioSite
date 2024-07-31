import React from 'react';

import Header from "../components/Header"
import Footer from "../components/Footer"
import MainContent from '../components/MainContent';

export function Home() {
    return (
        <div className="home">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

