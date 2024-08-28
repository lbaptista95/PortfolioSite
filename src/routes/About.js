import React from 'react';
import Header from "../components/PageHeader"
import Footer from "../components/home/Footer"
import LinkButton from '../components/about/LinkButton';

import headers from '../data/Headers'
import aboutInfo from "../data/AboutInfo"

export default function About() {

    const { name, pictureUrl, email, phone, bio, links } = aboutInfo

    const linkButtons = <div className="about-main-link-buttons">{links.map(link => <LinkButton link={link} />)}</div>

    return (
        <div>
            <Header title={headers[2].title} subtitle={headers[2].subtitle} />
            <div className="about">
                <div className="about-main">
                    <div className="about-main-top">
                        <div className="about-main-picture"></div>
                        <div className="about-main-info">
                            <h3 className="about-main-info-name">{name}</h3>
                            <div className="about-main-info-other">
                                <img src="https://static.vecteezy.com/system/resources/previews/031/400/781/original/email-icon-png-free-vector.jpg" className="about-main-info-other-icon" />
                                <h4>{email}</h4>
                            </div>
                            <div className="about-main-info-other">
                                <img src="https://icons.veryicon.com/png/o/object/material-design-icons/phone-80.png" className="about-main-info-other-icon" />
                                <h4>{phone}</h4>
                            </div>
                            {linkButtons}
                        </div>
                    </div>
                    <div className="about-main-bottom">
                        <p className="about-main-bottom-text">{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}