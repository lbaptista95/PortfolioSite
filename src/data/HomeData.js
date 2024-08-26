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
        description: ["C#", "Mobile applications","Virtual Reality", "Augmented Reality", "Mixed Reality", "Performance optimization", "ARCGIS SDK",
                        "Addressables System","Windows Applications","XR Interaction Toolkit", "ARFoundation", "Vuforia", "Animations", "UI Responsivity"]

    },
    {
        key:"2",
        imageSrc: backendIcon,
        imageAltText: "Back-end Icon",
        title: "Back-end",
        description: ["Relational databases","MySQL", "PostgreSQL", "Python", "Flask","C#",".NET","REST","MVC","Heroku","Docker"]

    },
    {
        key:"3",
        imageSrc: frontendIcon,
        imageAltText: "Front-end Icon",
        title: "Front-end",
        description: ["React.js", "JavaScript", "HTML" ,"CSS"]

    }

]

export default homeData;