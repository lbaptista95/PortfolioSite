import React from "react"
import LinkButton from '../components/about/LinkButton';
import aboutInfo from "../data/AboutInfo"

export default function Contact() {

    const { email, phone, links } = aboutInfo

    const linkButtons = <div className="contact-link-buttons">{links.map(link => <LinkButton link={link} />)}</div>
    return (
        <div>
            <div className="contact-info">
                <img src="https://static.vecteezy.com/system/resources/previews/031/400/781/original/email-icon-png-free-vector.jpg" className="contact-info-other-icon" />
                <h4>{email}</h4>
            </div>
            <div className="contact-info">
                <img src="https://icons.veryicon.com/png/o/object/material-design-icons/phone-80.png" className="contact-info-other-icon" />
                <h4>{phone}</h4>
            </div>
            {linkButtons}
        </div>
    )
}