//TO-DO: Get these informations via WEB API (C#) with its translations to Portuguese and Spanish

import unityIcon from "../Graphic/Images/unity_icon.png"
import frontendIcon from "../Graphic/Images/frontend_icon.png"
import backendIcon from "../Graphic/Images/backend_icon.png"

const homeData = [

    {
        key:"1",
        imageSrc: unityIcon,
        imageAltText: "Unity3D Icon",
        title: "Unity3D",
        description: `As a man who loves videogames since I was a little child,
                            being a Unity3D developer was my first career option.
                            This is my full-time job since 2019. I developed my first game as my final graduation work
                            and after that I was hired to develop a lof of different applications using the engine:
                            Mobile, Windows/Mac, AR, VR and MR Experiences.`

    },
    {
        key:"2",
        imageSrc: backendIcon,
        imageAltText: "Back-end Icon",
        title: "Back-end",
        description: `In my first job I had contact with back-end development because some of the applications I developed
                            needed to receive data from some REST APIs. As the company was a little startup I had the freedom to
                            explore this area, so I started developing some APIs using python/flask and also had to design some SQL
                            Databases.
                            Now I'm trying to use the knowledge I gained in C# to develop this part of an application.`

    },
    {
        key:"3",
        imageSrc: frontendIcon,
        imageAltText: "Front-end Icon",
        title: "Front-end",
        description: `After years developing mobile applications through Unity3D, I started to notice that a lot of
                            web apps had some similarities with some of the ones developed by me. That's because some of the
                            Unity3D apps were used
                            to show data that was coming from a server, just like a regular website. So now I'm focused on
                            learning to develop an entire system
                            from end to end. I want to be able to deliver a full web app to my future clients, without depending
                            on other developers.`

    }

]

export default homeData;