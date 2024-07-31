import React from "react"
import frontendIcon from '../Graphic/Images/frontend_icon.png';
import backendIcon from '../Graphic/Images/backend_icon.png';
import unityLogo from '../Graphic/Images/unity_logo.png';
export default function MainContent() {
    return (
        <div className="mainContent">
            <h2>These are the three fronts on which I'd like to work:</h2>
            <ul className="horizontalList">
                <div className="frontElement">
                    <img src={unityLogo} alt="Unity3D Logo" className="itemImage" />
                    <h3>Unity3D</h3>
                    <p>As a man who loves videgames since I was a little child,
                        being a Unity3D developer was my first career option.
                        This is my full-time job since 2019. I developed my first game as my final graduation work
                        and after that I was hired to develop a lof of different applications using the engine:
                        Mobile, Windows/Mac, AR, VR and MR Experiences.</p>
                </div>
                <div className="frontElement">
                    <img src={backendIcon} alt="Back-end icon" className="itemImage" />
                    <h3>Back-end</h3>
                    <p>In my first job I had contact with back-end development because some of the applications I developed
                        needed to receive data from some REST APIs. As the company was a little startup I had the freedom to
                        explore
                        this area, so I started developing some APIs using python/flask and also had to design some SQL
                        Databases.
                        Now I'm trying to use the knowledge I gained in C# to develop this part of an application.
                    </p>
                </div>
                <div className="frontElement">
                    <img src={frontendIcon} alt="Front-end icon" className="itemImage" />
                    <h3>Front-end</h3>
                    <p>After years developing mobile applications through Unity3D, I started to notice that a lot of
                        web apps had some similarities with some of the ones developed by me. That's because some of the
                        Unity3D apps were used
                        to show data that was coming from a server, just like a regular website. So now I'm focused on
                        learning to develop an entire system
                        from end to end. I want to be able to deliver a full web app to my future clients, without depending
                        on other developers.
                    </p>
                </div>
            </ul>
        </div>
    )
}