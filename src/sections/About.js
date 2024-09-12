import React from 'react';
import Header from "../components/PageHeader"
import Footer from "../components/skills/Footer"
import LinkButton from '../components/about/LinkButton';

import headers from '../data/Headers'
import aboutInfo from "../data/AboutInfo"

export default function About() {

    const { name, bio } = aboutInfo

    return (
        <div className="about-section">
            <div className="about-picture"></div>
            <h3 className="about-name">{name}</h3>
            <p className="about-bio">{bio}</p>
        </div>

    )
}