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
        const fileUrl = "/LuisBaptista_Resume.pdf"; // Caminho relativo ao arquivo na pasta public
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'LuisBaptista_Resume.pdf'; // Nome do arquivo ao baixar
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