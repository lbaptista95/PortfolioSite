import React from "react"

export default function LinkButton(props)
{
    const {linkName, iconUrl, linkUrl, isDownload } = props.link

    const key = React.useId()

    function navigateClick()
    {
        window.open(linkUrl,'_blank')
    }

    function downloadClick()
    {
        console.log("will download file from: " + linkUrl)
        const fileUrl = linkUrl; 
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'LuisBaptista_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <button className="about-main-link-button" key={key} onClick={!isDownload ? navigateClick : downloadClick}>
            <img src ={iconUrl} className="about-main-link-button-icon"/>
            {linkName}
        </button>
    )
}